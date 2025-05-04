"""
WSGI config for myportfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

from myapp.utils import create_admin_user


os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'myportfolio.settings')

application = get_wsgi_application()


# to create superuser for render app remove after first deploy and the from myapp.utils import create_admin_user above too
try:
    create_admin_user()
except Exception as e:
    print(f"Superuser creation skipped or failed: {e}")