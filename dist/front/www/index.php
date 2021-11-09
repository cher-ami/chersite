<?php

require __DIR__ . '/../vendor/autoload.php';

use Whoops\Run;
use Whoops\Handler\PrettyPageHandler;
use Symfony\Component\Dotenv\Dotenv;
use Twig\Loader\FilesystemLoader;
use Twig\Environment;
use App\helpers\MetaManager;

// ----------------------------------------------------------------------------- DEBUG

// start whoops
$whoops = new Run;
$whoops->pushHandler(new PrettyPageHandler);
$whoops->register();

// ----------------------------------------------------------------------------- ENV

// load environment variables
$dotenv = new Dotenv();
$dotenv->load(__DIR__ . '/.env');

// ----------------------------------------------------------------------------- TWIG

$languages = [
    "fr",
    "en"
];

// Specify our Twig templates location
$loader = new FilesystemLoader(__DIR__ . '/views/');

// Instantiate our Twig
$twig = new Environment($loader);
$template = $twig->load('layouts/base.twig');

//Get metas data
$metaData = new MetaManager($_ENV["API_URL"] ?? null, $_ENV['VITE_BASE_URL'] ?? null, $languages);
$meta = $metaData->getMetaData();

echo $template->render([
    'apiUrl' => $_ENV["API_URL"] ?? null,
    'env' => $_ENV['PHP_ENV'] ?? null,
    'version' => $_ENV['VERSION'] ?? null,
    'appBase' => rtrim($_ENV['VITE_BASE_URL'], "/") ?? null,
    'title' => $meta['title'] ?? "cher-base App",
    'description' => $meta['description'] ?? null,
    'image' => $meta['openGraphImages'][0] ?? null,
    'canonical' => $meta['canonical'] ?? null
]);

