from django.urls import path
from .views import Register
urlpatterns = [
    path('user/',Register.as_view())
]
