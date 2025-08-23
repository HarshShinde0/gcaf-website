from django.http import JsonResponse
from LeaderboardEntry.models import LeaderboardEntry
from LeaderboardEntry.serializers import LeaderboardEntrySerializer

def arcade_points_api(request):
    entries = LeaderboardEntry.objects.all()
    serializer = LeaderboardEntrySerializer(entries, many=True)
    return JsonResponse({'users_summary': serializer.data})
