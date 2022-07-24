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

# get designer page
@app.get(path="/designer")
def designer(request: Request):
    return templates.TemplateResponse("Designer.html", {"request":request})

@app.get(path="/designer/{designer}")
def designer(request: Request, designer):
    designer = "designer/" + designer
    return templates.TemplateResponse(designer, {"request":request})

# get guest page
@app.get(path="/guest")
def guest(request: Request):
    return templates.TemplateResponse("Guest.html", {"request":request})

# get about page
@app.get(path="/about")
def about(request: Request):
    return templates.TemplateResponse("About.html", {"request":request})

# get project page
@app.get(path="/project")
def project(request: Request):
    return templates.TemplateResponse("Project.html", {"request":request})

@app.get(path="/projects/{project}")
def project(request: Request, project):
    project = "projects/" + project
    return templates.TemplateResponse(project, {"request":request})

# example
@app.get(path="/guestbook/{id}")
def get_place(
        id: int,
        db: Session = Depends(database.get_db)):
    # result = db.query(model.guestbook).filter(model.guestbook.id == id).first()
    result = db.query(model.guestbook).filter(model.guestbook.id == id).all()

    if result is None:
        raise HTTPException(status_code=404, detail="ID에 해당하는 User가 없습니다.")

    return result
    # return {
    #     "status": "OK",
    #     "data": result
    # }

# get guestbook data
@app.get(path="/guestbook")
def get_guestbook(db: Session = Depends(database.get_db)):
    res = db.query(model.guestbook).order_by(desc(model.guestbook.id)).all()

    if res is None:
        raise HTTPException(status_code=404, detail="데이터가 없습니다.")
    return res

# post guestbook data
@app.post(path="/insertbook")
async def insert_guestbook(req: model.insert_guestbook, db: Session = Depends(database.get_db)):
    new_guestbook = model.guestbook(**req.dict())
    db.add(new_guestbook)
    db.commit()
    return new_guestbook