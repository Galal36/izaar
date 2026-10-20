"""
Create the dashboard super admin.

Usage:
    ADMIN_PASSWORD='...' python create_admin.py

Optional: ADMIN_USERNAME (default "admin"), ADMIN_EMAIL (default "admin@example.com").
"""

import os
import sys

import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'izaar_backend.settings')
django.setup()

from store.models import AdminUser

password = os.environ.get('ADMIN_PASSWORD')
if not password:
    sys.exit('Error: set ADMIN_PASSWORD in the environment.')

username = os.environ.get('ADMIN_USERNAME', 'admin')
email = os.environ.get('ADMIN_EMAIL', 'admin@example.com')

if AdminUser.objects.filter(username=username).exists():
    sys.exit(f'Admin user "{username}" already exists.')

AdminUser.objects.create_superuser(
    username=username,
    email=email,
    password=password,
    full_name_ar='Admin',
    role='super_admin',
)
print(f'Admin user "{username}" created ({email}).')
