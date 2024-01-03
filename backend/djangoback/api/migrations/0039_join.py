# Generated by Django 4.2.3 on 2023-12-30 10:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0038_news_ndetails_alter_news_news'),
    ]

    operations = [
        migrations.CreateModel(
            name='Join',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('role', models.CharField(max_length=50)),
                ('desc', models.CharField(max_length=300)),
                ('jdur', models.CharField(max_length=20)),
                ('salary', models.CharField(max_length=10)),
                ('qualifications', models.CharField(max_length=150)),
                ('link', models.URLField(max_length=400, null=True)),
            ],
        ),
    ]