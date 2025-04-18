#!/bin/sh

if [ "$1" = "create" ] && [ -n "$2" ]; then
  docker compose run --rm backend pnpm make:seed "$2"
else
  docker compose run --rm backend pnpm seed
fi
