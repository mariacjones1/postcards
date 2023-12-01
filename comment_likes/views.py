from rest_framework import generics, permissions
from drf_postcards.permissions import IsOwnerOrReadOnly
from .models import CommentLike
from .serializers import CommentLikeSerializer


class CommentLikeList(generics.ListCreateAPIView):
    """
    Lists comment likes
    Perform create method creates a comment like for logged in users only
    """
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentLikeDetail(generics.RetrieveDestroyAPIView):
    """Retrieve a comment like or delete user's own comment like"""
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentLikeSerializer
    queryset = CommentLike.objects.all()
