from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User
from django_countries.fields import CountryField


class Profile(models.Model):
    """
    Profile model, relates to User instance
    Sets default profile image
    """
    TRAVEL_EXPERIENCE_CHOICES = (
        ("newbie", "Newbie traveller"),
        ("intermediate", "Intermediate traveller"),
        ("expert", "Expert traveller")
    )
    owner = models.OneToOneField(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    name = models.CharField(max_length=255, blank=True)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_profile_xecywf'
    )
    location = CountryField(blank=True)
    favourite_country = CountryField(blank=True)
    travel_experience = models.CharField(
        max_length=20,
        choices=TRAVEL_EXPERIENCE_CHOICES,
        default="newbie"
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.owner}'s profile"


def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)


post_save.connect(create_profile, sender=User)
