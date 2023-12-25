from rest_framework import serializers
from .models import Journal
from .models import *


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = ['id','jour','link']

class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = ['id', 'conf','link']

class PatentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patent
        fields = ['id', 'pat']

class DesignSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designs
        fields = ['id', 'dname','ddetails','dpic']


class SponsoredSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsored
        fields = ['id', 'stitle','sduration','sinvest','ssponsor']

class ResearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Research
        fields = ['id', 'rname','rdetails','rpic']

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id', 'pname','pmail','link','ppic','student_type']

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class ResearchInterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchInterest
        fields = '__all__'

class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = PersonalInfo
        fields = '__all__'

class PublicationsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Publications
        fields = '__all__'
