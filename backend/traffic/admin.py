from django.contrib import admin
from .models import Traffic
from django import forms


class TrafficCustomForm(forms.ModelForm):
    class Meta:
        model = Traffic
        fields = ("amount", "date", "type")


class TrafficInline(admin.TabularInline):
    model = Traffic
    form = TrafficCustomForm
