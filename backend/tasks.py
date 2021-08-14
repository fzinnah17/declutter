from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DB_URI'] = 'sqlite://database.db'

db = SQLAlchemy(app)

class Tasks(db.Model):
    # rn, this is declared as false bc not primary identifier
    id = db.Column(db.Integer, primary_key = True)
    task = db.Column(db.String(40), unique = True, nullable = False)
    cleanliness = db.Column(db.Integer, nullable = False)

    def __repr__(self):
        return f"Task('{self.task}')"

Table('Tasks', MetaData(),
            Column('id', Integer(), table= Tasks, primary_key=True),
            Column('task', String(40), table= Tasks, unique = True, nullable = False),
            Column('cleanliness', String(40), table=Tasks, unique = True, nullable = False),
            schema=None)
