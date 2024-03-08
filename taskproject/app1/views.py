from django.shortcuts import render

from app1.models import Task
from app1.serializers import taskserializer, userserializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import viewsets
from django.contrib.auth.models import User


class Alltaskview(viewsets.ModelViewSet):  # ALL  TASK VIEW
    # permission_classes = [IsAuthenticated,]
    queryset = Task.objects.all()
    serializer_class = taskserializer


class Notcompletedtaskview(viewsets.ModelViewSet):  # NOT COMPLETED  TASK VIEW
    queryset = Task.objects.filter(completed=False)
    serializer_class = taskserializer


class Completedtaskview(viewsets.ModelViewSet):  # COMPLETED  TASK VIEW
    queryset = Task.objects.filter(completed=True)
    serializer_class = taskserializer


class Createuserview(viewsets.ModelViewSet):  # REGISTER VIEW
    queryset = User.objects.all()
    serializer_class = userserializer
