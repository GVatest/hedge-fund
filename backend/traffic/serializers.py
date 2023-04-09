from rest_framework import serializers
from .models import Traffic


class TrafficSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="user.username")

    class Meta:
        model = Traffic
        fields = ("user", "amount", "date", "type")
