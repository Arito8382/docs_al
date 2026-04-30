<?php namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;
use Google_Client;

class Auth extends ResourceController
{
    public function google()
    {
        // Izinkan CORS
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
        
        // Menangani preflight request OPTIONS dari browser
        if ($this->request->getMethod() === 'OPTIONS') {
            return $this->response->setStatusCode(200);
        }

        $json = $this->request->getJSON();
        $token = $json->token ?? null;

        if (!$token) {
            return $this->failUnauthorized('No token provided');
        }

        $client = new Google_Client();
        $client->setClientId(getenv('GOOGLE_CLIENT_ID'));

        try {
            $httpClient = \Config\Services::curlrequest();
            $response = $httpClient->get('https://www.googleapis.com/oauth2/v3/userinfo', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $token,
                ]
            ]);

            if ($response->getStatusCode() === 200) {
                $googleUser = json_decode($response->getBody());
                
                // TODO: Logika Database (Cek/Insert user dan set session/JWT)
                
                return $this->respond([
                    'status'  => 'success',
                    'message' => 'Login berhasil',
                    'user'    => [
                        'email'   => $googleUser->email,
                        'name'    => $googleUser->name,
                        'picture' => $googleUser->picture ?? null
                    ]
                ]);
            }

            return $this->failUnauthorized('Invalid Google Token');
            
        } catch (\Exception $e) {
            return $this->failServerError('Authentication error: ' . $e->getMessage());
        }
    }
}
