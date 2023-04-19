#!/bin/bash

# Find all folders containing pyproject.toml
# then execute poetry install command
dir=./src
find "$dir" -name pyproject.toml -printf "%h\n" | sort -nr | while read -r i; do cd "$i" && poetry install; done