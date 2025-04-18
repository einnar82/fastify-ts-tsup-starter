#!/bin/sh

if ! docker info > /dev/null 2>&1; then
  echo "❌ Docker is not running or not accessible. Please start Docker Desktop or the Docker daemon."
  exit 1
fi
