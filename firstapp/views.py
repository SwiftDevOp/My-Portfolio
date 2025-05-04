from django.shortcuts import render
from .models import Review_Section
from .models import HeroBackgroundImage
from django.contrib.auth import get_user_model


# Create your views here.
def index(request):
    reviewss = Review_Section.objects.all()
    images = HeroBackgroundImage.objects.all()
    return render(request, 'firstapp/index.html', {'reviewss': reviewss, 'hero_images': images})


# hero-background-image
def home(request):
    images = HeroBackgroundImage.objects.all()
    return render(request, 'templates/base.html', {'hero_images': images})


# to create superuser for render app


def create_admin_user():
    User = get_user_model()
    if not User.objects.filter(username="SwiftDevOps").exists():
        User.objects.create_superuser(
            username="SwiftDevOps",
            email="swiftdevops1@gmail.com",
            password="qwerty@123"
        )
        print("Superuser created!")