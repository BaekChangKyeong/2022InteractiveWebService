from csv import writer
from datetime import datetime
from optparse import Option
from typing import Optional
from sqlalchemy import INTEGER, Column, DateTime, Integer, String, Float, Boolean, Text
from pydantic.main import BaseModel
#from . 
import database


class guestbook(database.Base):
    __tablename__ = "guestbook"
    id = Column(Integer, primary_key=True, index=True, nullable=True)
    designer = Column(String, nullable=False)
    writer = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    wdate = Column(DateTime, nullable=False)
    flag = Column(Integer, nullable=False)

#pydantic의 model class for POST request mapping
class insert_guestbook(BaseModel):
    #__tablename__ = "guestbook"
    id : Optional[int] = None
    designer : str
    writer : str
    content : str
    wdate : Optional[datetime]
    flag : Optional[bool] = 1
    # id = Column(Integer, primary_key=True, index=True)
    # designer = Column(String, nullable=False)
    # writer = Column(String, nullable=False)
    # content = Column(Text, nullable=False)
    # wdate = Column(DateTime, nullable=False)
    # flag = Column(Integer, nullable=False)
