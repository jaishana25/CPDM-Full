# Generated by Django 4.2.3 on 2023-12-29 06:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0033_alter_research_rpic'),
    ]

    operations = [
        migrations.AlterField(
            model_name='research',
            name='rdetails',
            field=models.CharField(blank=True, max_length=400),
        ),
    ]