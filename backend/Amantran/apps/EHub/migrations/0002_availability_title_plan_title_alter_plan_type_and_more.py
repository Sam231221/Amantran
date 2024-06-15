# Generated by Django 4.1.1 on 2023-06-30 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EHub', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='availability',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='plan',
            name='title',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='plan',
            name='type',
            field=models.CharField(choices=[('Religious', 'Religious'), ('Cultural', 'Cultural'), ('Dating', 'Dating'), ('Festival', 'Festival'), ('Fun', 'Fun')], max_length=300),
        ),
        migrations.AlterField(
            model_name='site',
            name='type',
            field=models.CharField(choices=[('Religious', 'Religious'), ('Cultural', 'Cultural'), ('Dating', 'Dating'), ('Festival', 'Festival'), ('Fun', 'Fun')], max_length=300),
        ),
    ]