from ctypes import util
from time import timezone
from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone
from .fields import IntegerRangeField
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Application(models.Model):
    tg = models.CharField(max_length=32, unique=True)
    email = models.EmailField(unique=True)
    payment = IntegerRangeField(min_value=500, max_value=5000)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.email


class Withdraw(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    date = models.DateTimeField(default=timezone.now)
    is_approved = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
