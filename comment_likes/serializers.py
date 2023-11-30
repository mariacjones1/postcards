from django.db import IntegrityError
from rest_framework import serializers
from .models import CommentLike


class CommentLikeSerializer(serializers.ModelSerializer):
    """
    Serializer for Comment Like model
    Create method ensures no duplicates
    """
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = CommentLike
        fields = [
            'id', 'created_at', 'owner', 'comment'
        ]

    def create(self, validated_data):
        try:
            return super().create(validated_data)
        except IntegrityError:
            raise serializers.ValidationError({'detail': 'possible duplicate'})
