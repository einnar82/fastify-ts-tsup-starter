#!/bin/sh

. ./scripts/check-docker.sh

if [ "$1" = "create" ] && [ -n "$2" ]; then
  docker compose run --rm backend pnpm make:migration  "$2"
else
  docker compose run --rm backend pnpm migrate
fi
