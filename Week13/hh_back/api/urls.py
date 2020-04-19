from django.urls import path
from api.views.views_w11 import *
# from api.views.views_fbv import company_detail, company_list
# from api.views.views_cbv import CompanyListAPIView, CompanyDetailAPIView
# from api.views.views_generic_v1 import CompanyListAPIView, CompanyDetailAPIView

from api.views.views_generic import CompanyListAPIView, CompanyDetailAPIView, \
                                    VacancyListAPIView, VacancyDetailAPIView, \
                                    VacancyTopAPIView, CompanyWithVacancies


from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    # FUNCTION BASED VIEW
    # path('companies/', company_list),
    # path('companies/<int:company_id>/', company_detail),



    # CLASS BASED VIEW
    # path('companies/', CompanyListAPIView.as_view()),
    # path('companies/<int:company_id>/', CompanyDetailAPIView.as_view()),


    path('login/', obtain_jwt_token),

    # GENERIC VIEW
    path('companies/', CompanyListAPIView.as_view()),
    path('companies/<int:pk>/', CompanyDetailAPIView.as_view()),

    path('companies/<int:pk>/vacancies/', CompanyWithVacancies.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:pk>/', VacancyDetailAPIView.as_view()),
    # path('vacancies/top/<int:top_number>/', vacancies_top),


    # path('companies/<int:company_id>/vacancies/', company_vacancies),
]