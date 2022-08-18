from fastapi import FastAPI, Depends, Path, HTTPException, APIRouter
from sqlalchemy import desc
from sqlalchemy.orm import Session
from fastapi.requests import Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles 
# from fastapi.model import guestbook
import model, database

app = FastAPI()

templates = Jinja2Templates(directory="templates")
app.mount("/static", StaticFiles(directory="static"), name="static") 
general_pages_router = APIRouter()

# get index page
@app.get(path="/")
def home(request: Request):
    return templates.TemplateResponse("index.html", {"request":request})

# get about page
@app.get(path="/about")
def about(request: Request):
    return templates.TemplateResponse("About.html", {"request":request})
