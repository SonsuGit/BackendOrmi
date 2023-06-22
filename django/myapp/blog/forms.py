# blog/forms.py
from django import forms
from .models import Post, Comment

# Form
# Model Form
class PostForm(forms.ModelForm):
    
    class Meta:
        model = Post
        fields = ['title', 'content']


class CommentForm(forms.ModelForm):

    class Meta:
        model = Comment
        fields = ['content']