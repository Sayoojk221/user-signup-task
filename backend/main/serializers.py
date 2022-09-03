from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    fname = serializers.CharField(required=True)
    email = serializers.EmailField(required=True)
    username = serializers.CharField(required=True)

    class Meta:
        model = User
        fields = ['fname','email','username','dob']

    def __init__(self, *args, **kwargs):
        super(RegisterSerializer, self).__init__(*args, **kwargs)
        self.fields['fname'].error_messages = {"required":"First Name is required","blank":"First Name field not be blank"}
        self.fields['email'].error_messages = {"required":"Email is required","blank":"Email field not be blank"}
        self.fields['username'].error_messages = {"required":"Username is required","blank":"Username field not be blank"}
        self.fields['dob'].error_messages = {"required":"Date Of Birth is required","blank":"Date Of Birth field not be blank"}

    
    def validate(self, attrs):
        username = attrs['username']
        email = attrs['email']

        if User.objects.filter(email=email):
            if User.objects.filter(username=username):
                raise serializers.ValidationError({'username':'Username already exist','email':'Email already exist'})
            raise serializers.ValidationError({'email':'Email already exist'})

        if User.objects.filter(username=username):
            raise serializers.ValidationError({'username':'Username already exist'})
        

        if not username.isalnum() :
            raise serializers.ValidationError({'username':'Username must be alphanumeric'})
        
        if not(len(username) >= 8 and len(username) <= 12):
            raise serializers.ValidationError({'username':'Username length must  between 8-12 characters'})


        
        return attrs