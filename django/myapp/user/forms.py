from django import forms
from .models import User

class RegisterForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['email', 'name', 'password']


class LoginForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ['email', 'password']