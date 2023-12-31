from rest_framework import serializers
from .models import Post
from likes.models import Like


class PostSerializer(serializers.ModelSerializer):
    """
    Serializer for Post model
    Also gets like count, comments count, and display values for continent
    and holiday_type
    """
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()
    profile_id = serializers.ReadOnlyField(source='owner.profile.id')
    profile_image = serializers.ReadOnlyField(source='owner.profile.image.url')
    like_id = serializers.SerializerMethodField()
    comments_count = serializers.ReadOnlyField()
    likes_count = serializers.ReadOnlyField()
    continent = serializers.ChoiceField(choices=Post.CONTINENT_CHOICES)
    continent_display = serializers.ReadOnlyField(
        source='get_continent_display')
    holiday_type = serializers.ChoiceField(
        choices=Post.HOLIDAY_TYPE_CHOICES)
    holiday_type_display = serializers.ReadOnlyField(
        source='get_holiday_type_display')

    def validate_image(self, value):
        if value.size > 2 * 1024 * 1024:
            raise serializers.ValidationError('Image must be smaller than 2MB')
        if value.image.height > 4096:
            raise serializers.ValidationError(
                'Image height must be less than 4096px'
            )
        if value.image.width > 4096:
            raise serializers.ValidationError(
                'Image width must be less than 4096px'
            )
        return value

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    def get_like_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            like = Like.objects.filter(
                owner=user, post=obj
            ).first()
            return like.id if like else None
        return None

    class Meta:
        model = Post
        fields = [
            'id', 'owner', 'created_at', 'updated_at', 'title',
            'content', 'image', 'continent', 'is_owner', 'profile_id',
            'profile_image', 'like_id', 'comments_count', 'likes_count',
            'holiday_type', 'continent_display', 'holiday_type_display'
        ]
