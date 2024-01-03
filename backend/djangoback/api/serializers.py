from rest_framework import serializers
from .models import Journal
from .models import *


class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Journal
        fields = '__all__'


class EventsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = '__all__'

class ConferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Conference
        fields = '__all__'

class PatentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patent
        fields = '__all__'

class JoinSerializer(serializers.ModelSerializer):
    class Meta:
        model = Join
        fields = '__all__'

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
        fields =  '__all__'

class PersonSerializer(serializers.ModelSerializer):
        
    startMonth_display = serializers.SerializerMethodField()
    endMonth_display = serializers.SerializerMethodField()

    def get_startMonth_display(self, obj):
        return dict(Person.MONTH_CHOICES).get(obj.startMonth, '')

    def get_endMonth_display(self, obj):
        return dict(Person.MONTH_CHOICES).get(obj.endMonth, '')

    class Meta:
        model = Person
        fields= [      
            'id', 'pname', 'pmail', 'link', 'ppic', 'student_type',
            'startMonth', 'endMonth', 'startMonth_display', 'endMonth_display',
            'startYear', 'endYear', 'project', 'program', 'dept',
            'restitle', 'glink', 'blink',
            'thesisTitle', 'projectTitle', 'nowAt', 'role', 'researcharea','researchtitle'
]

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

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'
