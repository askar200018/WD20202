from django.contrib import admin

from api.models import Vacancy, Company

@admin.register(Company)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')

@admin.register(Vacancy)
class VacancyAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'salary')

# Register your models here.
