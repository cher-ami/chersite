#!/bin/bash

set -e

info() { echo -e "\033[0;36m> $1\033[0m"; }
warn() { echo -e "\033[0;33m> $1\033[0m"; }
err() { echo -e "\033[0;31m> $1\033[0m"; exit 1; }

echo '> Composer install needed ?'

if [ -d dist/front ]; then
    info 'Move to dist/front folder'
    cd dist/front
    if [ -f composer.json ]; then
        info 'Yes, installing composer dependencies'
        composer install
        info "Done."
    else
        info "Composer not needed."
    fi
fi

if [ -d front ]; then
    info 'Move to front folder'
    cd front
    if [ -f composer.json ]; then
        info 'Yes, installing composer dependencies'
        composer install
        info "Done."
    else
        info "Composer not needed."
    fi
fi
