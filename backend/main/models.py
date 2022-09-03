from django.db import models


class User(models.Model):
    user_id = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=200,default='')
    email = models.EmailField(unique=True)
    username = models.CharField(max_length=200,default='')
    dob = models.DateField(auto_created=True)

    def __str__(self):
        return self.fname
