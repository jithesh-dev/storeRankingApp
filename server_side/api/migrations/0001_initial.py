# Generated by Django 3.1.1 on 2020-09-26 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Store',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('st_name', models.CharField(max_length=80)),
                ('st_totall_football', models.IntegerField()),
                ('st_returns', models.IntegerField()),
                ('st_time_spent', models.FloatField()),
                ('st_tot_dep_visited', models.IntegerField()),
                ('st_tot_departments', models.IntegerField()),
                ('st_avg_dep_time', models.IntegerField()),
                ('st_bounce_rate', models.FloatField()),
            ],
        ),
    ]