from django.contrib import admin 
from django.db import models
from .models import *
# Register your models here.
@admin.register(Journal)
class JournalAdmin (admin.ModelAdmin):
    list_display = ['id', 'auth','ptitle','journal','pinfo','pyear','link']

    formfield_overrides = {
        models.URLField: {'required': False},
    }


@admin.register(Conference)
class ConferenceAdmin(admin.ModelAdmin):
    list_display = ['id', 'auth','ptitle','journal','pinfo','pyear','link']

    formfield_overrides = {
        models.URLField: {'required': False},
    }

@admin.register(Patent)
class PatentAdmin(admin.ModelAdmin):
    list_display = ['id', 'auth','ptitle','pno','gon','pyear']

@admin.register(Designs)
class DesignAdmin(admin.ModelAdmin):
    list_display = ['id', 'dname','ddetails','dpic']

@admin.register(Sponsored)
class SponsoredAdmin(admin.ModelAdmin):
    list_display = ['id', 'stitle','sduration','sinvest','ssponsor']



@admin.register(Person)
class PersonAdmin(admin.ModelAdmin):
    list_display = ['id', 'pname','pmail','link','ppic','student_type']

    formfield_overrides = {
        models.URLField: {'required': False},
    }
    empty_value_display = '-empty-'

    ordering = ['-id']

    # Customize the form fields for pduration and project
    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)

        form.base_fields['project'].required = False
        form.base_fields['program'].required = False
        form.base_fields['dept'].required = False
        form.base_fields['restitle'].required = False
        
        return form

admin.site.register(PersonalInfo)
admin.site.register(ResearchInterest)
admin.site.register(About)
admin.site.register(Publications)
admin.site.register(News)
admin.site.register(Events)
admin.site.register(Join)
admin.site.register(Research)