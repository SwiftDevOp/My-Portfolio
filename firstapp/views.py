from django.shortcuts import render
from .models import Review_Section, HeroBackgroundImage

def index(request):
    reviewss = Review_Section.objects.all()
    images = HeroBackgroundImage.objects.all()

    # Generate secure URLs
    hero_image_urls = [img.image.build_url(secure=True) for img in images]

    return render(request, 'firstapp/index.html', {
        'reviewss': reviewss,
        'hero_images': hero_image_urls  # Pass only the URLs
    })


# hero-background-image
# def home(request):
#     images = HeroBackgroundImage.objects.all()
#     return render(request, 'templates/base.html', {'hero_images': images})