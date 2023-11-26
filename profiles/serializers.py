from rest_framework import serializers
from .models import Profile
from followers.models import Follower
from django_countries.serializers import CountryFieldMixin
from django_countries.serializer_fields import CountryField


class ProfileSerializer(CountryFieldMixin, serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    following_id = serializers.SerializerMethodField()
    posts_count = serializers.ReadOnlyField()
    followers_count = serializers.ReadOnlyField()
    following_count = serializers.ReadOnlyField()
    recent_followers_count = serializers.ReadOnlyField()
    location = CountryField(name_only=True)
    favourite_country = CountryField(name_only=True)
    travel_experience = serializers.ChoiceField(
        choices=Profile.TRAVEL_EXPERIENCE_CHOICES)
    travel_experience_display = serializers.ReadOnlyField(
        source='get_travel_experience_display')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_following_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()
            return following.id if following else None
        return None

    class Meta:
        model = Profile
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'name',
            'content', 'image', 'is_owner', 'following_id',
            'posts_count', 'followers_count', 'following_count',
            'recent_followers_count', 'location', 'favourite_country',
            'travel_experience', 'travel_experience_display'
        ]
