from django.shortcuts import render
from .models import Review_Section

# Create your views here.
def index(request):
            reviewss = Review_Section.objects.all()
            return render(request, 'firstapp/index.html', {'reviewss': reviewss})