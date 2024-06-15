from django.db import models
from cloudinary_storage.storage import RawMediaCloudinaryStorage
from ckeditor_uploader.fields import RichTextUploadingField
class User(models.Model):
    RELIGION_CHOICES = [
        ('CHR', 'Christianity'),
        ('ISL', 'Islam'),
        ('HIN', 'Hinduism'),
        ('BUD', 'Buddhism'),
        ('JEW', 'Judaism'),
        ('OTH', 'Other'),
    ]
    INTEREST_CHOICES = (
        ('NAT', 'Nature'),
        ('CUL', 'Culture'),
        ('TRA', 'Tradition'),
        ('REL', 'Religion'),
        ('WAT', 'Waterfalls'),
    )
    TRANSPORTATION_CHOICES = (
        ('BUS', 'Bus'),
        ('JEEP', 'Jeep'),
        ('OTHER', 'Other'),
    )

    username = models.CharField(max_length=150, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    preferred_transportation = models.CharField(max_length=100,choices=TRANSPORTATION_CHOICES)
    interested_in = models.CharField(max_length=100,choices=INTEREST_CHOICES)
    religion = models.CharField(max_length=100, choices=RELIGION_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.username
    
class Location(models.Model):
    name = models.CharField(max_length=100, null=True)
    img_url = models.URLField(null=True)
    province = models.CharField(max_length=100, null=True)
    district = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.name}"
    

class SiteCategory(models.Model):
    title = models.CharField(max_length=150, unique=True,null=True)

    def __str__(self):
        return str(self.title)
    
class Site(models.Model):
    name = models.CharField(max_length=100, null=True)
    img_url = models.URLField(null=True)
    location = models.ForeignKey(Location,on_delete=models.CASCADE, null=True)
    description = models.TextField(null=True)
    site_type = models.ManyToManyField(SiteCategory,max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.name)


class Plan(models.Model):
    TYPE_CHOICES = (
        ('Paragliding', 'Paragliding'),
        ('Bunjee Jumping', 'Bunjee Jumping'),
        ('Safari', 'Safari'),
        ('Boating', 'Boating'),
        ('Tour', 'Tour'),
    )
    GUIDE_CHOICES = (
        ('Full Guided', 'Full Guided'),
        ('Partial Guided', 'Partial Guided'),
        ('None', 'None'),
    )
    title = models.CharField(max_length=100, null=True)
    province = models.CharField(max_length=100, null=True)
    district = models.CharField(max_length=100, null=True)
    city = models.CharField(max_length=100, null=True)
    categories = models.ManyToManyField(SiteCategory,max_length=300,)
    type = models.CharField(max_length=300, choices=TYPE_CHOICES, null=True)
    duration = models.CharField(max_length=50,  null=True)
    guide_type = models.CharField(max_length=300, choices=GUIDE_CHOICES, null=True)
    rating = models.FloatField(null=True)
    site = models.ForeignKey(Site,on_delete=models.CASCADE,null=True)
    starting_price = models.DecimalField(max_digits=8, decimal_places=2)
    img_url = models.URLField(null=True)
    start_location=models.CharField(max_length=100, null=True)
    end_location=models.CharField(max_length=100, null=True)
    mode_of_transportation=models.CharField(max_length=100, null=True, blank=True)
    accomodation=models.CharField(max_length=100, null=True, blank=True)
    ageRange=models.CharField(max_length=100, null=True)
    
    description = RichTextUploadingField(
        null=True,
        help_text="Describe something.Dont repeat yourself.",
        config_name="sourcecode",
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return str(self.title)

class Event(models.Model):
    TYPE_CHOICES= (
        ('Cultural', 'Cultural'),
        ('Religion', 'Religion'),
        ('Festival', 'Festival'),
        ('Others', 'Others'),
    )    
    name = models.CharField(max_length=100, null=True)
    type = models.CharField(choices=TYPE_CHOICES, max_length=100, null=True)
    img_url = models.URLField(null=True)
    date = models.DateField()
    location = models.CharField(max_length=100, null=True)
    place = models.CharField(max_length=100, null=True)
    venue = models.CharField(max_length=100, null=True)
    description = models.TextField(null=True)

    def __str__(self):
        return self.name

class Review(models.Model):
    plan= models.ForeignKey(Plan,on_delete=models.CASCADE, null=True)
    rating = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    comment = models.TextField()

    def __str__(self):
        return f"commented by {self.user.username} on {self.plan.title}"

class Availability(models.Model):
    title = models.CharField(max_length=100, null=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE, null=True)
    start_date = models.DateField()
    end_date = models.DateField()
    available_seats = models.PositiveIntegerField()

    def __str__(self):
        return self.trip_name
    
