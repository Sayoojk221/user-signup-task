# Generated by Django 3.2 on 2022-09-03 02:43

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('dob', models.DateField(auto_created=True)),
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('fname', models.CharField(default='', max_length=200)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('username', models.CharField(default='', max_length=200)),
            ],
        ),
    ]