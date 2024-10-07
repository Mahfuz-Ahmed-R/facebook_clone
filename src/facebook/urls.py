
from django.contrib import admin
from django.urls import path,include

from django.conf import settings
from django.conf.urls.static import static

from rest_framework.response import Response
from rest_framework.reverse import reverse
from rest_framework.views import APIView

class APIRootView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({
            'users': reverse('user-list', request=request, format=kwargs.get('format', None)),
            'posts': reverse('post-list', request=request, format=kwargs.get('format', None)),
        })

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', APIRootView.as_view(), name='api-root'), 
    path('',include('userAuth.urls')),
    path('',include('post.urls')),
]


urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)