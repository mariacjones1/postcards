from django.db.models import Count, Q
from rest_framework import generics, filters
from rest_framework.views import View, APIView
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from datetime import datetime, timedelta
from django.http import JsonResponse
from django_countries import countries
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
    filter_backends = [filters.OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['owner__following__followed__profile']
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


class GetCountriesView(APIView):
    def get(self, request, *args, **kwargs):
        country_list = [country.name for country in countries]
        return JsonResponse(country_list, safe=False)


class GetTravelExperienceChoicesView(View):
    def get(self, request, *args, **kwargs):
        choices = [{'value': value, 'display': display}
                   for value, display in Profile.TRAVEL_EXPERIENCE_CHOICES]
        return JsonResponse(choices, safe=False)
