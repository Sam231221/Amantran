from doctest import FAIL_FAST
import dj_database_url
from Amantran.base import *
from .environs import Env

env = Env()
env.read_env() 

DEBUG = True
SECRET_KEY = env.str("SECRET_KEY")
SITE_ID = 2

ALLOWED_HOSTS = ["amantran.up.railway.app",]
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware", 
    "django.middleware.cache.UpdateCacheMiddleware",
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django.middleware.cache.FetchFromCacheMiddleware",  
]

SESSION_COOKIE_AGE = 60 * 60 * 60 * 24

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

# DATABASES = {
#     "default": {
#         "ENGINE": "django.db.backends.sqlite3",
#         "NAME": BASE_DIR / "db.sqlite3",
#     }
# }

CACHES = {
    'default': {
        'BACKEND': 'django_redis.cache.RedisCache',
        'LOCATION': env.str("REDIS_URL"),
        'OPTIONS': {
            'CLIENT_CLASS': 'django_redis.client.DefaultClient',
        }
    }
}

CORS_ALLOWED_ORIGINS = [
    "https://amantran.com/",
    "https://www.amantran.com/",
    "http://localhost:5173",
    "https://amantran-ethos.netlify.app/",
]

CSRF_TRUSTED_ORIGINS = [
    'https://amantran.up.railway.app',
    'https://amantran.onrender.com',
]

# CACHE FRAMEWORK
CACHE_MIDDLEWARE_ALIAS = "default"
CACHE_MIDDLEWARE_SECONDS = 60  # 1 week
CACHE_MIDDLEWARE_KEY_PREFIX = ""

# HTTP Strict Transport Security
SECURE_HSTS_SECONDS = 15780000  # 6 Months as Recommended
SECURE_HSTS_INCLUDE_SUBDOMAINS = True
SECURE_HSTS_PRELOAD = True


# X-XSS-Protection
SECURE_BROWSER_XSS_FILTER = True
SECURE_CONTENT_TYPE_NOSNIFF = True

# CSRF
CSRF_COOKIE_SECURE = True 

SESSION_ENGINE = 'django.contrib.sessions.backends.cache'
SESSION_COOKIE_SECURE = True 
SESSION_CACHE_ALIAS = 'default'


STATIC_URL = "/staticfiles/"
STATICFILES_DIRS = [os.path.join(BASE_DIR, "staticfiles")]
STATIC_ROOT = os.path.join(BASE_DIR, "static")
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_ROOT = os.path.join(BASE_DIR, "staticfiles/mediafiles")
MEDIA_URL = "/mediafiles/"

DEFAULT_FILE_STORAGE = "cloudinary_storage.storage.MediaCloudinaryStorage"

# SMTP CONFIGURATION
EMAIL_BACKEND = "django.core.mail.backends.smtp.EmailBackend"
EMAIL_HOST = "smtp.gmail.com"
EMAIL_USE_TLS = True
EMAIL_PORT = 587


