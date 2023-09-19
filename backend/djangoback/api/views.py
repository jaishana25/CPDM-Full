from django.shortcuts import render
from .serializers import JournalSerializer
from .serializers import ConferenceSerializer, PatentSerializer,DesignSerializer,SponsoredSerializer,ResearchSerializer,PersonSerializer
from rest_framework.generics import ListAPIView
from .models import Journal
from .models import Conference,Patent,Designs,Sponsored,Research,Person
# Create your views here.
class JournalList(ListAPIView):
    queryset = Journal.objects.all()
    serializer_class = JournalSerializer
class ConferenceList(ListAPIView):
    queryset = Conference.objects.all()
    serializer_class = ConferenceSerializer
class PatentList(ListAPIView):
    queryset = Patent.objects.all()
    serializer_class = PatentSerializer
class DesignsList(ListAPIView):
    queryset = Designs.objects.all()
    serializer_class = DesignSerializer
class SponsoredList(ListAPIView):
    queryset = Sponsored.objects.all()
    serializer_class = SponsoredSerializer
class ResearchList(ListAPIView):
    queryset = Research.objects.all()
    serializer_class = ResearchSerializer
class PersonList(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer