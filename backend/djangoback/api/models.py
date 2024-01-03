from django.db import models

# Create your models here.
class Journal(models.Model):
    auth=models.CharField(max_length=200,blank=True)
    ptitle=models.CharField(max_length=500, blank=True)
    journal=models.CharField(max_length=300,blank=True)
    pinfo=models.CharField(max_length=300,blank=True)
    pyear=models.CharField(max_length=5,blank=True)
    link=models.URLField(max_length=400,null=True)

class Conference(models.Model):
    auth=models.CharField(max_length=200,blank=True)
    ptitle=models.CharField(max_length=500, blank=True)
    journal=models.CharField(max_length=300,blank=True)
    pinfo=models.CharField(max_length=300,blank=True)
    pyear=models.CharField(max_length=5,blank=True)
    link=models.URLField(max_length=400,null=True)

class Patent(models.Model):
    auth=models.CharField(max_length=200,blank=True)
    ptitle=models.CharField(max_length=500, blank=True)
    pno=models.CharField(max_length=300,blank=True)
    gon=models.CharField(max_length=300,blank=True)
    pyear=models.CharField(max_length=5,blank=True)

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
    
    TOPIC_CHOICES = [
        ('shape','Shape Understanding'),
        ('motion', 'Motion Understanding'),
        ('interaction','Interaction & Behaviour Understanding'),
        ('designdev','Product Design & Development'),
    ]
    rname=models.CharField(max_length=100)
    rdetails=models.CharField(max_length=500,blank=True)
    rpic=models.ImageField(upload_to='research/',blank=True)
    topic=models.CharField(max_length=20, choices=TOPIC_CHOICES, default="")

class Person(models.Model):
    STUDENT_CHOICES = [
        ('PhD', 'Ph.D Student'),
        ('MTech', 'M.Tech Student'),
        ('RA', 'Research Associate'),
        ('Intern', 'Intern'),
        ('Alumni(P)', 'Alumni(Ph.d)'),
        ('Alumni(M)', 'Alumni(Masters)'),

    ]
    
    MONTH_CHOICES = [
        ('01', 'Jan'),
        ('02', 'Feb'),
        ('03', 'Mar'),
        ('04', 'Apr'),
        ('05', 'May'),
        ('06', 'June'),
        ('07', 'July'),
        ('08', 'Aug'),
        ('09', 'Sept'),
        ('10', 'Oct'),
        ('11', 'Nov'),
        ('12', 'Dec'),
        ('13', 'Now')
    ]

    YEAR_CHOICES = [
    ('1990', '1990'),
    ('1991', '1991'),
    ('1992', '1992'),
    ('1993', '1993'),
    ('1994', '1994'),
    ('1995', '1995'),
    ('1996', '1996'),
    ('1997', '1997'),
    ('1998', '1998'),
    ('1999', '1999'),
    ('2000', '2000'),
    ('2001', '2001'),
    ('2002', '2002'),
    ('2003', '2003'),
    ('2004', '2004'),
    ('2005', '2005'),
    ('2006', '2006'),
    ('2007', '2007'),
    ('2008', '2008'),
    ('2009', '2009'),
    ('2010', '2010'),
    ('2011', '2011'),
    ('2012', '2012'),
    ('2013', '2013'),
    ('2014', '2014'),
    ('2015', '2015'),
    ('2016', '2016'),
    ('2017', '2017'),
    ('2018', '2018'),
    ('2019', '2019'),
    ('2020', '2020'),
    ('2021', '2021'),
    ('2022', '2022'),
    ('2023', '2023'),
    ('2024', '2024'),
    ('2025', '2025'),
    ('2026', '2026'),
    ('2027', '2027'),
    ('2028', '2028'),
    ('2029', '2029'),
    ('2030', '2030'),
    ('2031', '2031'),
]


    pname = models.CharField(max_length=100)
    pmail = models.CharField(max_length=200,blank=True)
    link = models.URLField(max_length=400, null=True)
    ppic = models.ImageField(upload_to='person/',blank=True)
    student_type = models.CharField(max_length=20, choices=STUDENT_CHOICES, default="")
   

    startMonth = models.CharField(max_length = 5, choices = MONTH_CHOICES, blank = True)
    startYear = models.CharField(max_length = 5, choices = YEAR_CHOICES, blank = True)
    endMonth = models.CharField(max_length = 5, choices = MONTH_CHOICES, blank = True)
    endYear = models.CharField(max_length = 5, choices = YEAR_CHOICES, blank = True)

    project=models.CharField(max_length=100,null=True)
    program=models.CharField(max_length=100,null=True)
    dept=models.CharField(max_length=100,null=True)
    restitle=models.CharField(max_length=200,null=True)
    
    glink=models.URLField(max_length=400, null=True)
    blink=models.URLField(max_length=400, null=True)

    thesisTitle = models.TextField(blank = True)
    projectTitle = models.TextField(blank = True)

    nowAt = models.TextField(blank = True)
    role = models.CharField(max_length = 50, blank = True)
    researcharea = models.TextField(blank = True)
    researchtitle=models.TextField(blank=True)

    def __str__(self):
        return self.pname
    

class About(models.Model):
    person = models.OneToOneField(Person, on_delete= models.CASCADE)
    me=models.TextField(blank=True)
    academicInfo = models.TextField(blank=True)
    aboutMe = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.person.pname + "_about"
    
class ResearchInterest(models.Model):
    person = models.OneToOneField(Person, on_delete=models.CASCADE)
    area_title = models.TextField(blank=True)
    fiele_of_interest = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.person.pname + "_research_interest"
    
class PersonalInfo(models.Model):
    person = models.OneToOneField(Person, on_delete=models.CASCADE)

    work_experience = models.TextField(blank=True)
    skill_expertise = models.TextField(blank=True)
    certifications = models.TextField(blank=True)
    achievements = models.TextField(blank=True)
    membership = models.TextField(blank=True)
    hobbies = models.TextField(blank=True)
    snippet = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.person.pname + "_personal"

class Publications(models.Model):
    person = models.OneToOneField(Person, on_delete=models.CASCADE)
    patterns = models.TextField(blank=True)
    projects = models.TextField(blank=True)
    paper_published = models.TextField(blank=True)

    def __str__(self) -> str:
        return self.person.pname + "_publications"
    
class News(models.Model):
    news=models.CharField(max_length=100,blank=True)
    ndetails=models.CharField(max_length=3000,blank=True)
    npic=models.ImageField(upload_to='news/',blank=True)

class Events(models.Model):
    epic=models.ImageField(upload_to='events/')

class Join(models.Model):


    JOIN_CHOICES = [
        ('current', 'Current Openings'),
        ('research', 'Research Students'),
        ('interns', 'Internship/Projects'),
       

    ]
    role=models.CharField(max_length=50,blank=True)
    desc=models.CharField(max_length=300,blank=True)
    jdur=models.CharField(max_length=20,blank=True)
    salary=models.CharField(max_length=10,blank=True)
    qualifications=models.CharField(max_length=150,blank=True)
    link=models.URLField(max_length=400,blank=True)
    job_type= models.CharField(max_length=20, choices=JOIN_CHOICES, default="")

