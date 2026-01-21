from django.shortcuts import render, redirect, get_object_or_404
from myapp.forms import StudentForm
from myapp.models import Student


def home(request):
    return render(request, "home.html")

def create(request):
    if request.method == "POST":
        form = StudentForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('home')
    else:
        form = StudentForm()
    return render(request, "create.html", {'form': form})


def read(request):
    students = Student.objects.all()
    return render(request, "read.html", {'students': students})


def update(request, id):
    student = get_object_or_404(Student, id=id)

    if request.method == "POST":
        form = StudentForm(request.POST, request.FILES, instance=student)
        if form.is_valid():
            form.save()
            return redirect("read")
    else:
        form = StudentForm(instance=student)

    return render(request, "update.html", {"form": form})


def delete(request, id):
    student = get_object_or_404(Student, id=id)

    if request.method == "POST":
        student.delete()
        return redirect("read")

    return render(request, "delete.html", {"student": student})