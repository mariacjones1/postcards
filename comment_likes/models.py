from django.db import models
from django.contrib.auth.models import User
from comments.models import Comment


class CommentLike(models.Model):
    """
    Comment like model, related to User and Comment
    Uses 'unique_together' to make sure users can't like the same comment twice
    """
    owner = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.ForeignKey(
        Comment, on_delete=models.CASCADE, related_name='comment_likes'
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        unique_together = ['owner', 'comment']

    def __str__(self):
        return f'{self.owner} likes {self.comment}'
