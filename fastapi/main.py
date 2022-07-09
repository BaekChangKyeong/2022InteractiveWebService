from fastapi import FastAPI, Depends, Path, HTTPException
from sqlalchemy.orm import Session
from fastapi.requests import Request

# from fastapi.model import guestbook
import model, database

app = FastAPI()

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
    res = db.query(model.guestbook).all()

    if res is None:
        raise HTTPException(status_code=404, detail="데이터가 없습니다.")
    return res

# post guestbook data
@app.post(path="/guestbook")
async def insert_guestbook(req: model.insert_guestbook, db: Session = Depends(database.get_db)):
    new_guestbook = model.guestbook(**req.dict())
    db.add(new_guestbook)
    db.commit()
    return new_guestbook