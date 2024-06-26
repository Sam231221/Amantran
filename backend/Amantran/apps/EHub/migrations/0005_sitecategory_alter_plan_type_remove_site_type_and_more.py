# Generated by Django 4.1.1 on 2023-06-30 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('EHub', '0004_alter_plan_location'),
    ]

    operations = [
        migrations.CreateModel(
            name='SiteCategory',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=150, null=True, unique=True)),
            ],
        ),
        migrations.AlterField(
            model_name='plan',
            name='type',
            field=models.CharField(choices=[('Trip', 'Trip'), ('Tour', 'Tour')], max_length=300, null=True),
        ),
        migrations.RemoveField(
            model_name='site',
            name='type',
        ),
        migrations.AddField(
            model_name='plan',
            name='categories',
            field=models.ManyToManyField(max_length=300, to='EHub.sitecategory'),
        ),
        migrations.AddField(
            model_name='site',
            name='type',
            field=models.ManyToManyField(max_length=300, to='EHub.sitecategory'),
        ),
    ]
