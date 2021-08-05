from django.urls import path
from .views import TweetView

urlpatterns = [
    path('', TweetView.as_view(), name='tweet'),
]
