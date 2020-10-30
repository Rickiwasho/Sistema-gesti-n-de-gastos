from django.db import models

class Usuario(models.Model):
	nombre = models.charField(max_length=100)
	apellido = models.charField(max_length=100)
	email = models.charField(max_length=100)
	tel = models.charField(max_length=100)
	admin = models.BooleanField(default=false)


