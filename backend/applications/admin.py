from django.contrib import admin
from .models import Application, Withdraw


class ApplicationAdmin(admin.ModelAdmin):
    list_display = ("tg", "payment", "email", "is_approved")
    list_editable = ("is_approved",)
    search_fields = ("tg", "payment", "email")


class WithdrawAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "date",
        "is_approved",
    )
    list_editable = ("is_approved",)
    search_fields = ("user",)


admin.site.register(Application, ApplicationAdmin)
admin.site.register(Withdraw, WithdrawAdmin)
