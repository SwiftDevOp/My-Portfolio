from django.contrib.auth import get_user_model

def create_admin_user():
    User = get_user_model()
    if not User.objects.filter(username="SwiftDevOps").exists():
        User.objects.create_superuser("SwiftDevOps", "swiftdevops1@gmail.com", "qwerty@123")
        print("✅ Superuser SwiftDevOps created.")
    else:
        print("ℹ️ Superuser SwiftDevOps already exists.")