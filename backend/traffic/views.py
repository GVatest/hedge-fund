from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from .models import Traffic
from rest_framework.response import Response
from .serializers import TrafficSerializer


class TrafficView(ListAPIView):
    queryset = Traffic.objects.order_by("-date")
    serializer_class = TrafficSerializer


class TotalView(APIView):
    def get(self, request, format=None):
        total = 0
        deposits = Traffic.objects.filter(type="DT")
        if len(deposits) > 0:
            for deposit in deposits:
                total += deposit.amount
        return Response({"total": str(total)})
