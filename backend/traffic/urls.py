from django.urls import path
from .views import TrafficView, TotalView

urlpatterns = [
    path("traffic", TrafficView.as_view()),
    path("total", TotalView.as_view()),
]
