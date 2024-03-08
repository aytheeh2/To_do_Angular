from django.db import models

class Task(models.Model):
    task_name=models.CharField(max_length=20)
    task_desc=models.TextField()
    date_added=models.DateField()
    completed=models.BooleanField(default=False)
    def __str__(self):
        return self.task_name