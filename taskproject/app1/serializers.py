
from app1.models import Task
from rest_framework import serializers
from django.contrib.auth.models import User
class taskserializer(serializers.ModelSerializer):
    class Meta:
        model=Task
        fields=['id','task_name','task_desc','date_added','completed']


class userserializer(serializers.ModelSerializer):
    password=serializers.CharField(write_only=True)
    class Meta:
        model=User
        fields = ['id', 'username', 'password']

    def create(self, validated_data):
        u = User.objects.create(username=validated_data['username'])
        u.set_password(validated_data['password'])
        u.save()
        return u