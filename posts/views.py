from django.db.models import Count
from rest_framework import generics, permissions, filters
from rest_framework.views import View
from django_filters.rest_framework import DjangoFilterBackend
from django.http import JsonResponse
from .models import Post
from .serializers import PostSerializer
from drf_postcards.permissions import IsOwnerOrReadOnly


class PostList(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    queryset = Post.objects.annotate(
        comments_count=Count('comment', distinct=True),
        likes_count=Count('likes', distinct=True)
    ).order_by('-created_at')
    filter_backends = [
        filters.OrderingFilter,
        filters.SearchFilter,
        DjangoFilterBackend
    ]
    filterset_fields = [
        'owner__followed__owner__profile',
        'likes__owner__profile',
        'owner__profile',
        'continent'
    ]
    search_fields = ['owner__username', 'title']
    ordering_fields = [
        'comments_count',
        'likes_count',
        'likes__created_at',
        'comments__created_at'
    ]

    def perform_create(self, serializer):
        print("Received data:", self.request.data)
        serializer.save(owner=self.request.user)


class PostDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = [IsOwnerOrReadOnly]
    serializer_class = PostSerializer
    queryset = Post.objects.annotate(
        comments_count=Count('comment', distinct=True),
        likes_count=Count('likes', distinct=True)
    ).order_by('-created_at')


class GetContinentsView(View):
    def get(self, request, *args, **kwargs):
        choices = [{'value': value, 'display': display}
                   for value, display in Post.CONTINENT_CHOICES]
        return JsonResponse(choices, safe=False)


class GetHolidayTypesView(View):
    def get(self, request, *args, **kwargs):
        choices = [{'value': value, 'display': display}
                   for value, display in Post.HOLIDAY_TYPE_CHOICES]
        return JsonResponse(choices, safe=False)
