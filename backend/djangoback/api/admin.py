from django.contrib import admin
from django.db import models
from .models import Journal,Conference,Patent,Designs,Sponsored,Research,Person
# Register your models here.
@admin.register(Journal)
class JournalAdmin (admin.ModelAdmin):
    list_display = ['id', 'jour','link']

    formfield_overrides = {
        models.URLField: {'required': False},
    }


@admin.register(Conference)
class ConferenceAdmin(admin.ModelAdmin):
    list_display = ['id', 'conf','link']

    formfield_overrides = {
        models.URLField: {'required': False},
    }

@admin.register(Patent)
class PatentAdmin(admin.ModelAdmin):
    list_display = ['id', 'pat']

@admin.register(Designs)
class DesignAdmin(admin.ModelAdmin):
    list_display = ['id', 'dname','ddetails','dpic']

@admin.register(Sponsored)
class SponsoredAdmin(admin.ModelAdmin):
    list_display = ['id', 'stitle','sduration','sinvest','ssponsor']


@admin.register(Research)
class ResearchAdmin(admin.ModelAdmin):
    list_display = ['id', 'rname','rdetails','rpic']

@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ['id', 'pname','pmail','link','ppic','student_type']

    formfield_overrides = {
        models.URLField: {'required': False},
    }