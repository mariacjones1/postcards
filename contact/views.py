from rest_framework import generics, permissions
from .models import Contact
from .serializers import ContactSerializer


class ContactList(generics.ListCreateAPIView):
    """List contact messages"""
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class ContactDetail(generics.RetrieveAPIView):
    """Retrieve a contact message"""
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
