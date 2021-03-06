# Generated by Django 3.0.4 on 2020-03-28 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='count',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='product',
            name='description',
            field=models.TextField(default='Desc'),
        ),
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.FloatField(default=100),
        ),
        migrations.DeleteModel(
            name='Category',
        ),
    ]
