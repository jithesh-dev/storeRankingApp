# Generated by Django 3.1.1 on 2020-09-26 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20200926_1035'),
    ]

    operations = [
        migrations.AlterField(
            model_name='store',
            name='st_avg_dep_time',
            field=models.FloatField(),
        ),
    ]