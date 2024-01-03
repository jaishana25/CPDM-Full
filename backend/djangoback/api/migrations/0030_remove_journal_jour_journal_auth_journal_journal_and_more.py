# Generated by Django 4.2.3 on 2023-12-29 04:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0029_alter_person_endyear_alter_person_startyear'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='journal',
            name='jour',
        ),
        migrations.AddField(
            model_name='journal',
            name='auth',
            field=models.CharField(blank=True, max_length=200),
        ),
        migrations.AddField(
            model_name='journal',
            name='journal',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AddField(
            model_name='journal',
            name='pinfo',
            field=models.CharField(blank=True, max_length=300),
        ),
        migrations.AddField(
            model_name='journal',
            name='ptitle',
            field=models.CharField(blank=True, max_length=500),
        ),
        migrations.AddField(
            model_name='journal',
            name='pyear',
            field=models.CharField(blank=True, max_length=5),
        ),
        migrations.AlterField(
            model_name='person',
            name='endYear',
            field=models.CharField(blank=True, choices=[('1990', '1990'), ('1991', '1991'), ('1992', '1992'), ('1993', '1993'), ('1994', '1994'), ('1995', '1995'), ('1996', '1996'), ('1997', '1997'), ('1998', '1998'), ('1999', '1999'), ('2000', '2000'), ('2001', '2001'), ('2002', '2002'), ('2003', '2003'), ('2004', '2004'), ('2005', '2005'), ('2006', '2006'), ('2007', '2007'), ('2008', '2008'), ('2009', '2009'), ('2010', '2010'), ('2011', '2011'), ('2012', '2012'), ('2013', '2013'), ('2014', '2014'), ('2015', '2015'), ('2016', '2016'), ('2017', '2017'), ('2018', '2018'), ('2019', '2019'), ('2020', '2020'), ('2021', '2021'), ('2022', '2022'), ('2023', '2023'), ('2024', '2024'), ('2025', '2025'), ('2026', '2026'), ('2027', '2027'), ('2028', '2028'), ('2029', '2029'), ('2030', '2030'), ('2031', '2031')], max_length=5),
        ),
        migrations.AlterField(
            model_name='person',
            name='startYear',
            field=models.CharField(blank=True, choices=[('1990', '1990'), ('1991', '1991'), ('1992', '1992'), ('1993', '1993'), ('1994', '1994'), ('1995', '1995'), ('1996', '1996'), ('1997', '1997'), ('1998', '1998'), ('1999', '1999'), ('2000', '2000'), ('2001', '2001'), ('2002', '2002'), ('2003', '2003'), ('2004', '2004'), ('2005', '2005'), ('2006', '2006'), ('2007', '2007'), ('2008', '2008'), ('2009', '2009'), ('2010', '2010'), ('2011', '2011'), ('2012', '2012'), ('2013', '2013'), ('2014', '2014'), ('2015', '2015'), ('2016', '2016'), ('2017', '2017'), ('2018', '2018'), ('2019', '2019'), ('2020', '2020'), ('2021', '2021'), ('2022', '2022'), ('2023', '2023'), ('2024', '2024'), ('2025', '2025'), ('2026', '2026'), ('2027', '2027'), ('2028', '2028'), ('2029', '2029'), ('2030', '2030'), ('2031', '2031')], max_length=5),
        ),
    ]
