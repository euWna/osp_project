from flask import *
from database import DBhandler
import sys
from json import *


app = Flask(__name__)

DB = DBhandler()

DB.__init__()


@app.route("/")
def index():
    return render_template("index.html")
    #return redirect(url_for('list_stores'))

@app.route()