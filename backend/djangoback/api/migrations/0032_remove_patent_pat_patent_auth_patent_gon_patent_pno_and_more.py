# Generated by Django 4.2.3 on 2023-12-29 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0031_remove_conference_conf_conference_auth_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patent',
            name='pat',
        ),
        migrations.AddField(
            model_name='patent',
            name='auth',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='patent',
            name='gon',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AddField(
            model_name='patent',
            name='pno',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AddField(
            model_name='patent',
            name='ptitle',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='patent',
            name='pyear',
            field=models.CharField(blank=True, max_length=5),
        ),
    ]