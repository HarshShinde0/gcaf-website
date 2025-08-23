from django.urls import path
from .views import LeaderboardEntryList

urlpatterns = [
    path('api/leaderboard/', LeaderboardEntryList.as_view(), name='leaderboardentry-list'),
]
