from django.db import models

# Create your models here.


class Category(models.Model):
    name = models.CharField(max_length=300)
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }

class Product(models.Model):
    name = models.CharField(max_length=300)
    price = models.FloatField(default=100)
    description = models.TextField(default='Desc')
    count = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)

    def to_json(self):
        return {
            'id': self.id,
            'price': self.price,
            'description': self.description,
            'count': self.count,
        }
