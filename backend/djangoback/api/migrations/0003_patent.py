# Generated by Django 4.2.3 on 2023-09-17 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_conference'),
    ]

    operations = [
        migrations.CreateModel(
            name='Patent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pat', models.CharField(max_length=300)),
            ],
        ),
    ]