from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Review_Section(models.Model):
    review = models.TextField(max_length=100)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    designation = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')
    rating = models.IntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)],
        help_text="Rating (1 to 5 stars)"
    )


    def __str__(self):
        return self.first_name + ' ' + self.last_name
    


    class Meta:
        verbose_name = 'Review'
        verbose_name_plural = 'Reviews'