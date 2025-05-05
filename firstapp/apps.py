from django.apps import AppConfig


class FirstappConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'firstapp'

# for creating adminsuperuser in render.com
class MyAppConfig(AppConfig):
    name = 'firstapp'

    def ready(self):
        from .utils import create_admin_user
        try:
            create_admin_user()
        except Exception as e:
            print(f"⚠ Superuser creation failed: {e}")


