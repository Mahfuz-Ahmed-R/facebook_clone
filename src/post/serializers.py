from rest_framework import serializers

from .models import Post

from userAuth.serializers import UserSerializer

class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    class Meta:
        model = Post
        fields = ['id', 'content', 'date_posted', 'user', 'image']
