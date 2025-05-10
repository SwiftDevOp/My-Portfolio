from django.shortcuts import render
from .models import Review_Section
from .models import HeroBackgroundImage


# Create your views here.
def index(request):
    reviewss = Review_Section.objects.all()
    images = HeroBackgroundImage.objects.all()
    return render(request, 'firstapp/index.html', {'reviewss': reviewss, 'hero_images': images})


# hero-background-image
# def home(request):
#     images = HeroBackgroundImage.objects.all()
#     return render(request, 'templates/base.html', {'hero_images': images})