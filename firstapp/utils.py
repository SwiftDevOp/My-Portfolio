from django.contrib.auth import get_user_model

def create_admin_user():
    User = get_user_model()
    if not User.objects.filter(username="SwiftDevOps").exists():
        User.objects.create_superuser(
            username="SwiftDevOps",
            email="swift@devops.com",
            password="qwerty@123"
        )
        print("✔ Superuser created.")