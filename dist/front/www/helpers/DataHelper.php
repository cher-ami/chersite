<?php

namespace App\helpers;

class DataHelper
{
    private ?string $apiUrl;

    public function __construct(?string $pApiUrl)
    {
        $this->apiUrl = $pApiUrl;
    }

    /**
     * Request API
     * @param string $endpoint
     * @return array|null
     */
    public function curl(string $endpoint): ?array
    {
        $requestUrl = preg_replace('#/+#', '/', "{$this->apiUrl}/{$endpoint}");
        $curl = curl_init($requestUrl);
        curl_setopt($curl, CURLOPT_HEADER, false);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 5);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($curl);
        $error = curl_error($curl);

        if ($response) {
            return json_decode($response, true);
        } else {
            return null;
        }

    }

}
