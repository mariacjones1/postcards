from django.db.models import Count
from rest_framework import generics, permissions, filters
from django_filters.rest_framework import DjangoFilterBackend
from drf_postcards.permissions import IsOwnerOrReadOnly
from .models import Comment
from .serializers import CommentSerializer, CommentDetailSerializer


class CommentList(generics.ListCreateAPIView):
    """List comments or create comments if logged in"""
    serializer_class = CommentSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Comment.objects.annotate(
        comment_likes_count=Count('comment_likes', distinct=True)
    ).order_by('-created_at')
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['post']
    ordering_fields = [
        'comment_likes_count',
        'comment_likes__created_at'
    ]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class CommentDetail(generics.RetrieveUpdateDestroyAPIView):
    """Retrieve a specific comment, can update or delete if owner"""
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = CommentDetailSerializer
    queryset = Comment.objects.annotate(
        comment_likes_count=Count('comment_likes', distinct=True)
    ).order_by('-created_at')
