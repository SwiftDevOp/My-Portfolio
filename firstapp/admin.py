from django.contrib import admin
from django.utils.html import format_html
from .models import Review_Section

# Register your models here.

@admin.register(Review_Section)
class ReviewSectionAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'star_rating_display')

    def star_rating_display(self, obj):
        try:
            return "⭐" * int(obj.rating) if obj.rating else "No rating"
        except (TypeError, ValueError):
            return "Invalid rating"
    star_rating_display.short_description = "Rating"

