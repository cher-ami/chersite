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
$metaData = new MetaManager($_ENV["API_URL"] ?? null, $_ENV['VITE_APP_BASE'] ?? null, $languages);
$meta = $metaData->getMetaData();


// get build dirname (where assets are built)
$buildDirname = $_ENV['BUILD_DIRNAME'] ?? null;

// Takes raw data from the request & Converts it into a PHP object
$json = null;
$manifest = null;

if (file_exists("{$buildDirname}/manifest.json")) {
    $json = file_get_contents("{$buildDirname}/manifest.json");
    $manifest = json_decode($json, true);
}

// prepare inputs array
$inputArray = explode(",",$_ENV['INPUT_FILES']);

echo $template->render([
    'title' => $meta['title'] ?? "app",
    'description' => $meta['description'] ?? null,
    'image' => $meta['openGraphImages'][0] ?? null,
    'canonical' => $meta['canonical'] ?? null,
    'host' => $_ENV["HOST"] ?? null,
    'port' => $_ENV["PORT"] ?? null,
    'api_url' => $_ENV["API_URL"] ?? null,
    'command' => $_ENV['COMMAND'] ?? null,
    'version' => $_ENV['VERSION'] ?? null,
    'app_base' => $_ENV['VITE_APP_BASE'] ?? "/",
    'build_dirname' => $buildDirname,
    'manifest' => $manifest ?? null,
    'input_array' => $inputArray ?? []
]);

