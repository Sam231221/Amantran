from django.contrib import admin

from.models import (
    User,
    Location,
   Site, Plan,Availability,SiteCategory,Review,
   Event
)

admin.site.register((User, Location, Site, Plan, Event,
                      Availability,SiteCategory, Review))
