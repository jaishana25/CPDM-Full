# Generated by Django 4.2.3 on 2023-12-28 04:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0022_rename_researcharea_person_researcharea_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='person',
            name='pduration',
        ),
    ]