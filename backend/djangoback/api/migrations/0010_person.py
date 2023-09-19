# Generated by Django 4.2.3 on 2023-09-19 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0009_conference_link_alter_journal_jour'),
    ]

    operations = [
        migrations.CreateModel(
            name='Person',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('pname', models.CharField(max_length=100)),
                ('pmail', models.CharField(max_length=200)),
                ('link', models.URLField(max_length=400, null=True)),
                ('ppic', models.ImageField(upload_to='person/')),
            ],
        ),
    ]