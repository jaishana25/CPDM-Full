from django.urls import path
from api import views

urlpatterns=[
    path('journal/', views.JournalList.as_view()),
    path('conference/',views.ConferenceList.as_view()),
    path('patent/',views.PatentList.as_view()),
    path('designs/',views.DesignsList.as_view()),
    path('sponsored/',views.SponsoredList.as_view()),
    path('research/',views.ResearchList.as_view()),
    path('person/',views.PersonListView.as_view()),
    path('news/',views.NewsList.as_view()),
    path('events/',views.EventsList.as_view()),
    path('join/',views.JoinList.as_view()),
    path('person/details/<int:id>/', views.PersonDetails.as_view()),
]