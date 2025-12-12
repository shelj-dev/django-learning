
from django.shortcuts import render, redirect
from .forms import PostForm
from .models import Post


def home(request):
    return render(request, "home.html")


def post_list(request):
    posts = Post.objects.all().order_by("-id")  # latest first
    return render(request, "post_list.html", {"posts": posts})

def create_post(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("all_data")
    else:
        form = PostForm()

    return render(request, "create_post.html", {"form": form})