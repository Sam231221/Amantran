# Generated by Django 4.1.1 on 2023-06-30 23:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EHub', '0013_event_place_event_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='type',
            field=models.CharField(choices=[('Cultural', 'Cultural'), ('Religion', 'Religion'), ('Festival', 'Festival'), ('Others', 'Others')], max_length=100, null=True),
        ),
    ]
