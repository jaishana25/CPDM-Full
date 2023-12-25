from django.shortcuts import render
from .serializers import *
from .serializers import ConferenceSerializer, PatentSerializer,DesignSerializer,SponsoredSerializer,ResearchSerializer,PersonSerializer
from rest_framework.generics import ListAPIView
from .models import Journal
from .models import *
from rest_framework import status
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.views import APIView
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

class PersonDetails(APIView):
    def get(self, request, id):
        try:
            person = Person.objects.get(pk=id)
        except Person.DoesNotExist:
            return Response({"error": "Person not found"}, status=status.HTTP_404_NOT_FOUND)

        about_serializer = AboutSerializer(About.objects.get(person=person))
        research_serializer = ResearchInterestSerializer(ResearchInterest.objects.get(person=person))
        personal_info_serializer = PersonalInfoSerializer(PersonalInfo.objects.get(person=person))
        publications_serializer = PublicationsSerializer(Publications.objects.get(person=person))

        person_data = PersonSerializer(person).data
        person_data["about"] = about_serializer.data
        person_data["research_interest"] = research_serializer.data
        person_data["personal_info"] = personal_info_serializer.data
        person_data["publications"] = publications_serializer.data

        return Response(person_data)