from rest_framework import serializers
from .models import Contact


class ContactSerializer(serializers.ModelSerializer):
    """Serializer for Contact model"""
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'message']
