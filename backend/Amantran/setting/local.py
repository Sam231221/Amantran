import dj_database_url
from Amantran.base import *

from .environs import Env

env = Env()
env.read_env()  

DEBUG = True
SITE_ID = 1

SECRET_KEY = env.str("SECRET_KEY")
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware", 
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",

    "django.middleware.common.CommonMiddleware",

    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

CORS_ALLOWED_ORIGINS = [
    "http://127.0.0.1:8000",
    "http://localhost:3000",
    "http://localhost:5173",
]

CLOUDINARY_STORAGE = {
    'CLOUD_NAME': env.str("CLOUDINARY_CLOUD_NAME"),
    'API_KEY': env.str("CLOUDINARY_API_KEY"),
    'API_SECRET': env.str("CLOUDINARY_API_SECRET")
}

CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': 'redis://localhost:6379/1',
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}

DATABASES = {
    "default": {
        "ENGINE": 'django.db.backends.postgresql',
        "NAME": env.str("DATABASE_NAME"),
        "USER": env.str("DATABASE_USER"),
        "PASSWORD": env.str("DATABASE_PASSWORD"),
        "HOST": env.str("DATABASE_HOST"),
        "PORT": env.str("DATABASE_PORT"),
    }
} 

db_from_env = dj_database_url.config(conn_max_age=600)
DATABASES["default"].update(db_from_env)

STATIC_URL = "/staticfiles/"

STATICFILES_DIRS = [os.path.join(BASE_DIR, "staticfiles")]
STATIC_ROOT = os.path.join(BASE_DIR, "static")

MEDIA_ROOT = os.path.join(BASE_DIR, "staticfiles/mediafiles")
MEDIA_URL = "/mediafiles/"

DEFAULT_FILE_STORAGE = "cloudinary_storage.storage.MediaCloudinaryStorage"

EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_USE_TLS = True
EMAIL_PORT = 587

