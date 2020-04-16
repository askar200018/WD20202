from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import Company
from api.serializers import CompanyModelSerializer


class CompanyListAPIView(APIView):
    def get(self, request):
        company = Company.objects.all()
        serializer = CompanyModelSerializer(company, many=True)

        return Response(serializer.data)

    def post(self, request):
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error':serializer.errors},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)


class CompanyDetailAPIView(APIView):
    def get_object(self,id):
        try:
            return Company.objects.get(id=id)
        except Company.DoesNotExist as e:
            return Response({'error': str(e)})

    def get(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanyModelSerializer(company)
        return Response(serializer.data)

    def put(self, request, company_id):
        company = self.get_object(company_id)
        serializer = CompanyModelSerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error':serializer.errors})

    def delete(self, request, company_id):
        company = self.get_object(company_id)
        company.delete()
        return Response({'deleted':True})



