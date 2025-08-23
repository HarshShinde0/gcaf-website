
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import LeaderboardEntry
from .serializers import LeaderboardEntrySerializer

class LeaderboardEntryList(APIView):
	def get(self, request):
		entries = LeaderboardEntry.objects.all()
		serializer = LeaderboardEntrySerializer(entries, many=True)
		return Response(serializer.data)
