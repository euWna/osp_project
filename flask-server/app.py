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
    #return redirect(url_for('view_list'))



@app.route("/CreateStore", methods=['GET', 'POST'])
def Submit_store():
    if request.method == 'POST':
        data = request.form
        # print(data)

        name = data['storename']
        location = data['location']
        phonenumber = data['phonenumber']
        time1 = data['time1']
        time2 = data['time2']
        category = data['food']
        park = data['park']
        price1 = data['price1']
        price2 = data['price2']
        site = data['site']
        # print(name, location, phonenumber, category,site)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        # print(img_file)
        #DB.insert_store(data['storename'], data, img_file.filename)

        # return render_template("result.html", result=data, img_path="static/img"+img_file.filename)

        if DB.insert_store(data['storename'], data, img_file.filename):
            #return render_template("result.html", result=data, img_path="static/img/"+img_file.filename)
            return redirect(url_for('view', storename=name))
        else:
            return "The submitted store already exists!"


@app.route("/CreateMenu/<storename>",methods=['GET','POST'])
def view(storename):
    return render_template("index.html")

'''
@app.route("/CreateMenu",methods=['GET','POST'])
def go_menucreate():
    return redirect(url_for('Submit_menu', request_method=request.method))
'''

@app.route("/CreateMenu",methods=['GET','POST'])
def Submit_menu():
    if request.method == 'POST':
            data = request.form
            #print(data)

            menuname = data['food']
            price = data['money']
            nutrient = data['nutrient']
            #print(menuname, price, nutrient)

            img_file = request.files['file']
            if img_file:
                img_file.save("./flask-server/static/img/"+img_file.filename)
                #print(img_file)

            #return render_template("result_menu.html", result=result)

            if DB.insert_menu(data['food'], data, img_file.filename):
                return render_template("result_menu.html", result = data, img_path="static/img/"+img_file.filename)
            else:
                return "The submitted menu already exists!"
    '''
    else :
        if request_method == 'GET':
            request_method == 'POST'
            return redirect("http://127.0.0.1:5000/CreateMenu", request_method=request.method)'''


@app.route("/CreateReview", methods=['GET','POST'])
def Submit_Review():
    if request.method == 'POST':
        data = request.form
        #print(data)

        username = data['username']
        reviewtitle = data['reviewtitle']
        reviewdesc = data['reviewdesc']
        #print(username,"\n",reviewtitle, '\n', reviewdesc)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
            #print(img_file)

        if DB.insert_review(data['username'], data, img_file.filename):
            return render_template("result_review.html", result = data, img_path="static/img/"+img_file.filename)

# @app.route("/StoreListView")
# def view_list():
#     page = request.args.get("page",0,type=int)
#     limit = 3

#     start_idx=limit*page
#     end_idx=limit*(page+1)
#     storedata = DB.get_stores()
#     tot_count = len(storedata)
#     storedata = dict(list(storedata.items())[start_idx:end_idx])


#     return render_template(
#         "StoreListView.html",
#         storedata=storedata.items(),
#         total=tot_count,
#         limit=limit,
#         page=page,
#         page_count=int(tot_count/10)+1)
@app.route("/StoreListView", methods=['GET','POST'])
def StoreListView():
    return render_template("index.html")

@app.route("/StoreListView_send_data", methods=['GET','POST'])
def list_stores():
    if request.method == 'GET':
        storedata = DB.get_store() #read the table
        tot_count = len(storedata) #리스트 길이 반환
        storedatajson =  json.dumps(storedata)
        return storedatajson

@app.route("/StoreDetail/<storename>")
def view_detail(storename):
    storedata = DB.get_store_byname(str(storename))
    #menudata = DB.get_menus()
    #reviewdata = DB.get_reviews()
    return render_template("StoreDetail.html", storedata=storedata)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)


'''
@app.route("/StoreListView")
def list_stores():
    storedata = DB.get_stores().keys()
    print(storedata)
    return render_template("StoreListView.html")


@app.route("/StoreListView")
def list_stores():
    storedata = DB.get_stores().items
    storedatas = list(storedata)
    print(storedata, type(storedatas))
    tot_count = len(storedata) #리스트 길이 반환

    return storedata

@app.route('/StoreListView')
def users():
    return {"members" : [{"id" : 1, "name" : "yerin"},
                        { "id" : 2, "name" : "dalkong"}]}
'''
