from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    """
    Profile model, relates to User
    Sets default post image
    """
    CONTINENT_CHOICES = (
        ("EU", "Europe"),
        ("NA", "North America"),
        ("SA", "South America"),
        ("AS", "Asia"),
        ("AF", "Africa"),
        ("OC", "Oceania"),
        ("AN", "Antarctica")
    )
    HOLIDAY_TYPE_CHOICES = (
        ("solo", "Solo"),
        ("couples", "Couples"),
        ("group", "Group"),
        ("girls", "Girls"),
        ("guys", "Guys"),
        ("work", "Work"),
        ("family", "Family")
    )
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=255)
    content = models.TextField(blank=True)
    image = models.ImageField(
        upload_to='images/', default='../default_post_ziaq3r', blank=True
    )
    continent = models.CharField(
        max_length=2,
        choices=CONTINENT_CHOICES,
        default="EU"
    )
    holiday_type = models.CharField(
        max_length=10,
        choices=HOLIDAY_TYPE_CHOICES,
        default="solo",
        blank=True
    )

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f'{self.id} {self.title}'
