#!/bin/bash

# Collect static files for production
python manage.py collectstatic --noinput

# Make and apply migrations
python manage.py makemigrations
python manage.py migrate

echo "Build completed successfully!"
