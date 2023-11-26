from django.urls import path
from profiles import views

urlpatterns = [
    path('profiles/', views.ProfileList.as_view()),
    path('profiles/<int:pk>/', views.ProfileDetail.as_view()),
    path('get_countries/', views.GetCountriesView.as_view()),
    path('get_travel_experience_choices/',
         views.GetTravelExperienceChoicesView.as_view()),
]
