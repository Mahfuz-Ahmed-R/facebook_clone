# Generated by Django 4.2.1 on 2024-10-08 15:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0002_post_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='title',
        ),
    ]
