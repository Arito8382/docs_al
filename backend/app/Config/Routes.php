<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'Home::index');

$routes->group('api', function($routes) {
    $routes->post('auth/google', 'Api\Auth::google');
    $routes->options('auth/google', 'Api\Auth::google');

    $routes->get('apikeys', 'Api\ApiKeys::index');
    $routes->options('apikeys', 'Api\ApiKeys::index');
    $routes->post('apikeys', 'Api\ApiKeys::create');
});
