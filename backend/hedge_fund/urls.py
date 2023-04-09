from django.contrib import admin
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
    TokenBlacklistView,
)
from .views import MyTokenObtainPairView
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/login", MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/refresh", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/logout", TokenBlacklistView.as_view(), name="token_blacklist"),
    path("api/", include("applications.urls")),
    path("api/user/", include("accounts.urls")),
    path("api/", include("traffic.urls")),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    re_path(
        r"^.*",
        TemplateView.as_view(template_name="index.html", content_type="text/html"),
    )
]
