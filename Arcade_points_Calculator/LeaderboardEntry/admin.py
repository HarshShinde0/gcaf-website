from django.contrib import admin
from .models import LeaderboardEntry

@admin.register(LeaderboardEntry)
class LeaderboardEntryAdmin(admin.ModelAdmin):
	list_display = ('user_name', 'milestone_earned', 'closest_milestone', 'skill_badges_completed', 'arcade_games_completed', 'trivia_games_completed', 'lab_free_courses_completed')
