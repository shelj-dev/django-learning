from django import forms
from myapp.models import Student,Course

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'age', 'profile_pic']

class CourseForm(forms.ModelForm):
    class Meta:
        model = Course
        fields = ['name', 'course_name']