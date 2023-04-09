from django.urls import path
from .views import ApplicationView, WithdrawView

urlpatterns = [
    path("application", ApplicationView.as_view()),
    path("withdraw", WithdrawView.as_view()),
]
