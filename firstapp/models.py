from django.db import models

# Create your models here.
class Review_Section(models.Model):
    review = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    designation = models.TextField(max_length=100)
    photo = models.ImageField(upload_to='photos/%Y/%m/%d/')


    def __str__(self):
        return self.first_name + ' ' + self.last_name
    


    class Meta:
        verbose_name = 'category'
        verbose_name_plural = 'categories'