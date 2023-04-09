from django.db import models
from django.utils import timezone
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Traffic(models.Model):
    TYPES_CHOICES = [("DT", "Взнос"), ("PT", "Выплата"), ("BT", "Бонус")]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.IntegerField()
    date = models.DateTimeField(default=timezone.now)
    type = models.CharField(
        max_length=2,
        choices=TYPES_CHOICES,
        default="DT",
    )

    def __str__(self):
        return self.user.username
