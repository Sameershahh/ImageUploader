from django.urls import path, include
from .views import home
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    
    path('home/', home, name='home'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
