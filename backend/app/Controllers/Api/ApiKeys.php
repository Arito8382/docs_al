<?php namespace App\Controllers\Api;

use CodeIgniter\RESTful\ResourceController;

class ApiKeys extends ResourceController
{
    public function index()
    {
        $this->setCorsHeaders();
        if ($this->request->getMethod() === 'OPTIONS') {
            return $this->response->setStatusCode(200);
        }

        // Mock getting keys for now
        // In a real app, validate token from header and fetch from DB
        return $this->respond([
            'status' => 'success',
            'data' => [
                [
                    'id' => 1,
                    'name' => 'Default Key',
                    'key' => 'amba_live_9f82d2a4c1b3e5f7',
                    'created_at' => '2024-03-12T10:00:00Z'
                ]
            ]
        ]);
    }

    public function create()
    {
        $this->setCorsHeaders();
        if ($this->request->getMethod() === 'OPTIONS') {
            return $this->response->setStatusCode(200);
        }

        // Mock generating a new key
        $json = $this->request->getJSON();
        $name = $json->name ?? 'New Key';
        
        $newKey = 'amba_live_' . bin2hex(random_bytes(8));

        return $this->respondCreated([
            'status' => 'success',
            'message' => 'API Key generated',
            'data' => [
                'id' => rand(2, 100),
                'name' => $name,
                'key' => $newKey,
                'created_at' => date('Y-m-d\TH:i:s\Z')
            ]
        ]);
    }

    private function setCorsHeaders()
    {
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
    }
}
