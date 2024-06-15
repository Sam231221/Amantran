import time

from django.contrib.sites.shortcuts import get_current_site
from rest_framework import serializers
from Amantran.setting.environs import Env
env = Env()
env.read_env() 

from .models import (
User, Location,Site, Plan,Availability,SiteCategory, Event
)


class UserSerializer(serializers.ModelSerializer):
   class Meta:
      model= User
      fields="__all__"


class LocationSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields ="__all__"

class EventSerailizer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields ="__all__"


class SiteCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteCategory
        fields = '__all__'  # Include all fields for simplicity

class SiteSerailizer(serializers.ModelSerializer):
    site_type = SiteCategorySerializer(many=True)
    class Meta:
        model = Site
        fields ="__all__"


class PlanSerailizer(serializers.ModelSerializer):

    class Meta:
        model = Plan
        fields ="__all__"   


# class BookSerailizer(serializers.ModelSerializer):
#     author = serializers.SerializerMethodField()
#     published_date = serializers.SerializerMethodField()
#     filename = serializers.SerializerMethodField()
#     download_link = serializers.SerializerMethodField()
#     class Meta:
#         model = Book
#         fields ="__all__"                        

#     def get_author(self, obj):
#         return obj.added_by.username        

#     def get_published_date(self, obj):
#         return int(time.mktime(obj.date_added.timetuple())) * 1000   
   
#     def get_download_link(self, obj):
#         return env.str("SITE_NAME")+'/mediafiles/'+str(obj.files)
   
#     def get_filename(self, obj):
#         return str(obj.files)

# class ChapterSerailizer(serializers.ModelSerializer):
#     class Meta:
#         model = Chapter
#         fields ="__all__"   



# class NoteSerailizer(serializers.ModelSerializer):
#     author = serializers.SerializerMethodField()
#     published_date = serializers.SerializerMethodField()
#     download_link = serializers.SerializerMethodField()
#     filename = serializers.SerializerMethodField()
#     class Meta:
#         model = Note
#         fields ="__all__"   

#     def get_author(self, obj):
#         return obj.added_by.username 

#     def get_published_date(self, obj):
#         return int(time.mktime(obj.date_added.timetuple())) * 1000   
   
#     def get_download_link(self, obj):
#         return env.str("SITE_NAME")+'/mediafiles/'+str(obj.files)
   
#     def get_filename(self, obj):
#         return str(obj.files)



# class QuestionSerailizer(serializers.ModelSerializer):
#     qs_year = serializers.SerializerMethodField()
#     published_date = serializers.SerializerMethodField()
#     class Meta:
#         model = QuestionModel
#         fields ="__all__"

#     def get_qs_year(self, obj):
#         return obj.year.year   

#     def get_published_date(self, obj):
#         return int(time.mktime(obj.date_added.timetuple())) * 1000   



# class QuestionSolutionSerailizer(serializers.ModelSerializer):
#     qs_year = serializers.SerializerMethodField()
#     published_date = serializers.SerializerMethodField()
#     filename = serializers.SerializerMethodField()
#     download_link = serializers.SerializerMethodField()
#     class Meta:
#         model = QuestionSolution
#         fields ="__all__"

#     def get_qs_year(self, obj):
#         return obj.year.year 

#     def get_published_date(self, obj):
#         return int(time.mktime(obj.date_added.timetuple())) * 1000   

#     def get_download_link(self, obj):
#         return env.str("SITE_NAME")+'/mediafiles/'+str(obj.files)
   
#     def get_filename(self, obj):
#         return str(obj.files)
