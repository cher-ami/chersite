<?php

namespace App\helpers;

class MetaManager{

    private ?string $_apiUrl;
    private string $_appBase;
    protected array $_request;
    protected string $endpoint = "metadata";

    /**
     * Meta manager constructor
     *
     * @param string|null $apiUrl
     * @param ?string $appBase
     * @param $languages
     */
    public function __construct(?string $apiUrl, string $appBase){
        $this->_apiUrl = $apiUrl;
        $this->_appBase = $appBase;
        $this->dataHelper = new DataHelper($this->_apiUrl);
        $this->setRequestArgs();
    }

    public function getMetaData(): ?array{
        $metaData = $this->dataHelper->curl($this->endpoint."?route=$this->requestArgs");
        return $metaData;
    }

    private function setRequestArgs(){
        $this->requestArgs = trim(static::parseRequest(trim($_SERVER["REQUEST_URI"],"/"), $this->_appBase), "/");
    }

    /**
     * Parse request
     *
     * @param string $requestUri
     * @return string
     */
    public static function parseRequest(string $requestUri, string $appBase = ""){
        return str_replace(trim($appBase, "/"), '', $requestUri);
    }


}
