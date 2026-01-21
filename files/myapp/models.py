from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=50)
    age = models.IntegerField()
    profile_pic = models.ImageField(upload_to="profile/", null=True, blank=True)