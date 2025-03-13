from django.shortcuts import render
from .models import image
from .forms import imageForm
# Create your views here.

def home(req):
    if req.method == "POST":
      form =  imageForm(req.POST, req.FILES)
      if form.is_valid():
         form.save()
    
    form = imageForm()
    img = image.objects.all()
    return render(req, 'myapp/base.html', {'img':img,'form':form})