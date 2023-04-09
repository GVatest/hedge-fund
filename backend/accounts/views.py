from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status

from traffic.models import Traffic


class CurrentUser(APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def get(self, request, format=None):
        user = self.request.user

        deposits = Traffic.objects.filter(user=user, type="DT")
        payouts = Traffic.objects.filter(user=user, type="PT")
        balance = sum([deposit.amount for deposit in deposits])
        profit = sum([payout.amount for payout in payouts])

        return Response(
            {"name": user.username, "balance": balance, "profit": profit},
            status=status.HTTP_200_OK,
        )
