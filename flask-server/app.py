from flask import *
from database import DBhandler
import sys
from json import *


app = Flask(__name__)

DB = DBhandler()

DB.__init__()

#view(GET) functions
@app.route("/")
def index():
    return render_template("index.html")
    #return redirect(url_for('list_stores'))

@app.route("/CreateStore")
def view_CreateStore():
    return render_template("CreateStore.html")

@app.route("/CreateMenu/<storename>")
def view_CreateMenu(storename):
    return render_template("CreateMenu.html", storename=storename)

@app.route("/CreateReview/<storename>")
def view_CreateReview(storename):
    return render_template("CreateReview.html", storename=storename)

@app.route("/StoreListView")
def view_list():
    page = request.args.get("page",0,type=int)
    limit = 5

    start_idx=limit*page
    end_idx=limit*(page+1)
    storedata = DB.get_stores()
    tot_count = len(storedata)
    storedata = dict(list(storedata.items())[start_idx:end_idx])

    #print(tot_count, limit, page, int(tot_count/5)+1)
    return render_template(
        "StoreListView.html",
        storedata=storedata.items(),
        total=tot_count,
        limit=limit,
        page=page,
        page_count=int(tot_count/limit)+1)


@app.route("/StoreDetail/<storename>")
def view_detail(storename):
    storedata = DB.get_store_byname(str(storename))
    menudata = DB.get_menus(str(storename))
    reviewdata = DB.get_reviews(str(storename))
    #menudata = DB.get_menus()
    #reviewdata = DB.get_reviews()
    return render_template("StoreDetail.html", storedata=storedata, menudata=menudata.items(), reviewdata=reviewdata.items())
    # menudata=menudata.items() 에서 item이 없다고 뜸

@app.route("/ReviewAll")
def view_ReviewList():
    return render_template("ReviewList.html")


#Submit(POST) functions

@app.route("/submit_store", methods=['POST'])
def submit_store():
    img_file=request.files["imgfile"]
    if img_file:
        img_file.save("./flask-server/static/img/"+img_file.filename)
    data=request.form
    storename=data["storename"]
    
    if(DB.insert_store(data["storename"],data, img_file.filename)) :
        print("submit_store success")
        #return render_template("CreateStore_update.html", result=data)
        return redirect(url_for('Created_store',storename=storename))
    else:
        return "The submitted store already exists!"

@app.route("/Created_store/<storename>")
def Created_store(storename):
    submitted = DB.get_store_byname(storename)
    return render_template("CreateStore_update.html", submitted=submitted)



@app.route("/submit_menu", methods=['POST'])
def submit_menu():
        img_file=request.files["imgfile"]
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        data=request.form
        storename=data["storename"]

        if(DB.insert_menu(storename, data, img_file.filename)):
            print("submit_menu success")
            return redirect(url_for('Created_menu', storename=storename))
        else:
            return "The submitted menu already exists!"

@app.route("/Created_menu/<storename>")
def Created_menu(storename):
    menudata = DB.get_menus(storename)
    #print(menudata.items())
    #submitted = DB.get_menu_byname(storename)
    return render_template("CreateMenu_update.html", storename=storename, menudata=menudata.items())


@app.route("/submit_review", methods=['POST'])
def submit_reivew():
        img_file=request.files["imgfile"]
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        data=request.form
        storename=data["storename"]

        if(DB.insert_review(storename, data, img_file.filename)):
            print("submit_review success")
            return redirect(url_for('Created_review', storename=storename))


@app.route("/Created_review/<storename>")
def Created_review(storename):
    submitted = DB.get_reviews(storename)
    #print(menudata.items())
    #submitted = DB.get_menu_byname(storename)
    return render_template("CreateReview_update.html", storename=storename, submitted=submitted)



if __name__=="__main__":
    app.run(host='0.0.0.0', debug=True)
    