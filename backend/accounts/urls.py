from django.urls import path
from .views import CurrentUser

urlpatterns = [path("current", CurrentUser.as_view())]
