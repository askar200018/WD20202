from rest_framework import  status
from  rest_framework.decorators import api_view
from rest_framework.response import Response

from api.models import Company
from api.serializers import CompanyModelSerializer


@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanyModelSerializer(companies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanyModelSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                            status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanyModelSerializer(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanyModelSerializer(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'errors':serializer.errors})
    elif request.method == 'DELETE':
        company.delete()
        return Response({'deleted': True})




