# Generated by Django 4.2.3 on 2023-12-26 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_about_me'),
    ]

    operations = [
        migrations.AlterField(
            model_name='about',
            name='aboutMe',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='about',
            name='academicInfo',
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name='about',
            name='me',
            field=models.TextField(blank=True),
        ),
    ]
