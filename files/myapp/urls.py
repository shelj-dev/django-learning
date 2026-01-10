from django.urls import path
from myapp import views

urlpatterns = [
    path('home/', views.home, name="home"),
    path('create/', views.create, name="create"),
    path('read/', views.read, name="read"),
    
]