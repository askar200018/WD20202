from django.db import models

# Create your models here.

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='simple description')
    city = models.CharField(max_length=255, default='Almaty')
    address = models.TextField(default='Tole Bi 59')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Companies'

    def __str__(self):
        return f'Vacancy id={self.id}, name={self.name}'


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address,
        }

class Vacancy(models.Model):
    name = models.CharField(max_length=255, default='default name')
    description = models.TextField(default='vacancy default description')
    salary = models.FloatField(default=100000)
    company = models.ForeignKey(Company, on_delete=models.CASCADE,
                                related_name='vacancies')

    class Meta:
        verbose_name = 'Vacancy'
        verbose_name_plural = 'Vacancies'

    def __str__(self):
        return f'Vacancy id={self.id}, name={self.name}'

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
        }