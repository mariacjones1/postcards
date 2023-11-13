from rest_framework import generics, permissions
from .models import Contact
from .serializers import ContactSerializer


class ContactList(generics.ListCreateAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()


class ContactDetail(generics.RetrieveAPIView):
    serializer_class = ContactSerializer
    queryset = Contact.objects.all()
