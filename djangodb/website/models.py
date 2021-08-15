from django.db import models

class Tasks(models.Model):
    task = models.CharField(max_length=100)
    cleanlinessLevel = models.IntegerField()

    def str(self):
        return self.task