from rest_framework import mixins, generics
from .models import Tweet
from .serializers import TweetSerializer

class TweetView(mixins.ListModelMixin, mixins.CreateModelMixin, generics.GenericAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)