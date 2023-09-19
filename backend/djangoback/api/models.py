from django.db import models

# Create your models here.
class Journal(models.Model):
    jour=models.CharField(max_length=500)
    link=models.URLField(max_length=400,null=True)

class Conference(models.Model):
    conf=models.CharField(max_length=300)
    link=models.URLField(max_length=400,null=True)


class Patent(models.Model):
    pat=models.CharField(max_length=300)

class Designs(models.Model):
    dname=models.CharField(max_length=100)
    ddetails=models.CharField(max_length=3000)
    dpic=models.ImageField(upload_to='designs/')

class Sponsored(models.Model):
    stitle=models.CharField(max_length=200)
    sduration=models.CharField(max_length=100)
    sinvest=models.CharField(max_length=100)
    ssponsor=models.CharField(max_length=100)

class Research(models.Model):
    rname=models.CharField(max_length=100)
    rdetails=models.CharField(max_length=400)
    rpic=models.ImageField(upload_to='research/')


class Person(models.Model):
    STUDENT_CHOICES = [
        ('PhD', 'Ph.D Student'),
        ('MTech', 'M.Tech Student'),
        ('RA', 'Research Associate'),
        ('Intern', 'Intern'),
        ('Alumni', 'Alumni'),

    ]

    pname = models.CharField(max_length=100)
    pmail = models.CharField(max_length=200)
    link = models.URLField(max_length=400, null=True)
    ppic = models.ImageField(upload_to='person/')
    student_type = models.CharField(max_length=10, choices=STUDENT_CHOICES, default="")

    def __str__(self):
        return self.pname