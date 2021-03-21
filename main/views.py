from django.shortcuts import render
from django.http import HttpResponse, response
from django.template import context, loader
# Create your views here.

def index(request):
    template = loader.get_template('main/index.html')
    context = {}
    return HttpResponse(template.render(context, request))

def about(request):
    template = loader.get_template('main/about.html')
    context = {}
    return HttpResponse(template.render(context, request))