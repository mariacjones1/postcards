from django.db import models


class Contact(models.Model):
    """
    Contact model for users to submit messages
    Not related to User or Profile as signed-out users can send messages
    """
    name = models.CharField(max_length=225)
    email = models.EmailField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.message
