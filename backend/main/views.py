from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import User
from .serializers import RegisterSerializer


class Register(APIView):
    serializer_classes = RegisterSerializer
    
    def get(self,request,format=None):
        user_id = request.GET.get('user')
        if user_id:
            user_obj = User.objects.filter(user_id=user_id)
            serialize = self.serializer_classes(user_obj,many=True).data
            return Response({'success':'User valid','data':serialize[0]},status=status.HTTP_200_OK)
        return Response({"error":'There is no user id!'},status=status.HTTP_400_BAD_REQUEST)

    def post(self,request,format=None):
        serializer = self.serializer_classes(data=request.data)
        if serializer.is_valid():
            obj = serializer.save()
            return Response({"success":'Successfully new account has created','data':{'userId':obj.user_id}},status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)