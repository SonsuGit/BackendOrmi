from django.urls import path
from . import views
from blog.views import Index

urlpatterns = [
    #path(패턴, 매핑)
    # path("", views.index) # FBV
    path("", Index.as_view()) #CBV
    # 글 조회
    # 글 작성
    # 글 수정
    # 글 삭제
    # 코멘트 작성
    # 코멘트 삭제
]