from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.utils import timezone

# Create your models here.
'''
Django 자체에서 UserManager는 유저 생성을 도와주는 매니저 클래스입니다.
이 클래스에서는 create_user(), create_superuser() 두 메서드가 제공되는데
수업에서는 이를 우리가 수정한 User 모델에 맞춰 변경해주었습니다.
_create_user()는 필수 필드를 검증한 다음
create_user(), create_superuser()로 구분해서 사용자와 관리자를 생성할 수 있습니다.
'''
class UserManager(BaseUserManager):
    
    def _create_user(self, email, password, is_staff, is_superuser, **extra_fields):
     # User모델의 username이 아니라 email을 id처럼 사용하기 위해서 email이 필수임을 체크합니다. -> 아닐시 오류를 발생시켜 유저 생성이 진행되지 않습니다.
        if not email:
            raise ValueError('User must have an email')
        now = timezone.now() # User 테이블에 타입(class User(AbstractUser) 내부의 last_login, date_joined 필드)에 맞춰 현재 시각을 가져오기 위한 부분입니다. (데이터 타입: datetime)
        email = self.normalize_email(email)
# normalize_email은 BaseUserManager에서 제공하는 메서드로 정규화를 실행하는 메서드(함수)입니다.
# 이메일 주소의 대소문자 구분에 따른 중복계정 방지를 위해 사용됩니다.
        user = self.model(
            email=email,
            is_staff=is_staff,
            is_active=True,
            is_superuser=is_superuser,
            last_login=now,
            date_joined=now,
            **extra_fields
        ) # 일반 유저인지 관리자 유저인지를 메서드 실행시 입력받은 값으로 구분해서 유저를 생성합니다.
        user.set_password(password) # 여기서 set_password 메서드는 사용자에게 받은 암호를 안전하게 저장하기 위해 암호화 과정을 더해주는 부분입니다.
        user.save(using=self._db) # using는 어떤 데이터베이스를 사용할 지 지정해주는 매개변수로 self._db는 현재 사용중인 데이터베이스를 의미합니다.
        return user
    # create_user
    def create_user(self, email, password, **extra_fields):
        return self._create_user(email, password, False, False, **extra_fields)
    # create_superuser
    def create_superuser(self, email, password, **extra_fields):
        return self._create_user(email, password, True, True, **extra_fields)


class User(AbstractUser):
    email = models.EmailField(unique=True, max_length=255)
    name = models.CharField(max_length=50, null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(auto_now_add=True)
    
    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = []
    
    objects = UserManager()
    
    # def __str__(self):
    #     return self.name