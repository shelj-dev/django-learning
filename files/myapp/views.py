from django.shortcuts import render, redirect
from myapp.forms import StudentForm
from myapp.models import Student

def home(request):
    return render(request, "home.html")

def create(request):
    if request.method == "POST":
        form = StudentForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = StudentForm()
    return render(request, "create.html", {'form': form})

def read(request):
    students = Student.objects.all()
    return render(request, "read.html", {'students': students})