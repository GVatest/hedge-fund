from rest_framework_simplejwt.serializers import TokenObtainPairSerializer


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    default_error_messages = {"no_active_account": "Неверный логин или пароль"}
