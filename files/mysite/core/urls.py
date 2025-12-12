from django.urls import path
from core import views


urlpatterns = [
    path('home/', views.home),
    path("posts/", views.post_list, name="all_data"),
    path("post/new/", views.create_post, name="create_post"),
]
