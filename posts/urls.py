from django.urls import path
from posts import views

urlpatterns = [
    path('posts/', views.PostList.as_view()),
    path('posts/<int:pk>/', views.PostDetail.as_view()),
    path('get_continents/', views.GetContinentsView.as_view()),
    path('get_holiday_types/', views.GetHolidayTypesView.as_view()),
]
