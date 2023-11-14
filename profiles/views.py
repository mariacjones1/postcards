from django.db.models import Count, Q
from rest_framework import generics, filters
# from django.utils import timezone
from datetime import datetime, timedelta
from .models import Profile
from .serializers import ProfileSerializer
from drf_postcards.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    """
    List all user profiles
    Creation is handled by django signals so no create view needed
    """
    queryset = Profile.objects.annotate(
        posts_count=Count('owner__post', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True),
        recent_followers_count=Count(
            'owner__followed',
            distinct=True,
            filter=Q(created_at__gte=datetime.now()-timedelta(days=7)))
    ).order_by('-created_at')
    serializer_class = ProfileSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = [
        'posts_count',
        'followers_count',
        'following_count',
        'recent_followers_count',
        'owner__following__created_at',
        'owner__followed__created_at'
    ]


class ProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.annotate(
        posts_count=Count('owner__post', distinct=True),
        followers_count=Count('owner__followed', distinct=True),
        following_count=Count('owner__following', distinct=True),
        recent_followers_count=Count(
            'owner__followed',
            distinct=True,
            filter=Q(created_at__gte=datetime.now()-timedelta(days=7)))
    ).order_by('-created_at')
