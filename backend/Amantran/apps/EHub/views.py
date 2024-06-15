from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import generics
from.models import (
    User,
    Location,
    Review,
    Event,
   Site, Plan,Availability
)
from .serializers import (SiteSerailizer, EventSerailizer)

@api_view(['GET'])
def UserListApiView(request):
    users = list(User.objects.all().values())
    return Response(users)


@api_view(['GET'])
def LocationListApiView(request):
    locations = list(Location.objects.all().values())
    for location in locations:
        print(location)
        location_obj = Location.objects.filter(name=location['name']).first()
        location['sites'] =Site.objects.filter(location=location_obj).count()
        sites=list(Site.objects.filter(location=location_obj).values())
        count=0
        for i in sites:
           i['plans'] =Plan.objects.filter(site=Site.objects.filter(name=i['name']).first()).count()
           count =count +i['plans']
 
        location['plans'] =count
    return Response(locations)

class SiteListAPIView(generics.ListAPIView):
    queryset = Site.objects.all()
    serializer_class = SiteSerailizer

class EventListAPIView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerailizer


@api_view(['GET'])
def PlanListApiView(request):
    plans = list(Plan.objects.all().values())
    for i in plans:
        i['total_ratings'] = Review.objects.filter(plan=Plan.objects.filter(title=i['title']).first()).count()
    return Response(plans)

@api_view(['GET'])
def ReviewListApiView(request):
    reviews = list(Review.objects.all().values())
    for i in reviews:
        user_obj = User.objects.filter(id=i['user_id']).first()
        i['username'] = user_obj.username
    return Response(reviews)
