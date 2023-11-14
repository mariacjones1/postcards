from rest_framework import generics
from .models import Profile
from .serializers import ProfileSerializer
from drf_postcards.permissions import IsOwnerOrReadOnly


class ProfileList(generics.ListAPIView):
    """
    List all user profiles
    Creation is handled by django signals so no create view needed
    """
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


class ProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.all()
