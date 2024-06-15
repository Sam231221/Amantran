from django.urls import path
from Amantran.apps.EHub import views
app_name="Ehub"
urlpatterns = [  
    path("users/", views.ReviewListApiView, name="users-view"),
    path("locations/", views.LocationListApiView , name="locations-view"),
    path("sites/", views.SiteListAPIView.as_view(), name="sites-view"),
    path("plans/", views.PlanListApiView, name="plans-view"),
    path("events/", views.EventListAPIView.as_view(), name="events-view"),
    path("reviews/", views.ReviewListApiView, name="reviews-view"),
]