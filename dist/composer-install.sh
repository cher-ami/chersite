#!/bin/bash

echo 'Move to front folder'

[ -d "front" ] && echo 'Move to front/ folder' && cd front

echo 'Install composer dependencies'
composer install

