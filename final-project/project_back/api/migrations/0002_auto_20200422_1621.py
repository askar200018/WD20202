# Generated by Django 3.0.5 on 2020-04-22 10:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='category',
            old_name='imgUrl',
            new_name='img',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='imgUrl',
            new_name='img',
        ),
    ]