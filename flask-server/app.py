from flask import Flask, jsonify, render_template, request, redirect, url_for
from database import DBhandler
from collections import OrderedDict
import json
import sys



app = Flask(__name__)

DB = DBhandler()

DB.__init__()


@app.route("/")
def index():
    return render_template("index.html")

def refresh(site):
    return redirect

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
        time1 = data['price1']
        time2 = data['price2']
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
            return redirect(url_for('view', store_id=name))
        else:
            return "The submitted store already exists!"


@app.route("/CreateMenu/<store_id>",methods=['GET','POST'])
def view(store_id):
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

#맛집목록조회 / 리액트에 json으로 보내주고 리액트에 proxy 추가...?
@app.route("/StoreListView", methods=['GET','POST'])
def list_stores():
    storedata = DB.get_store() #read the table
    tot_count = len(storedata) #리스트 길이 반환
    storedatajson =  json.dumps(storedata)
    # storedatas=storedata.items()
    return redirect(url_for('list_stores', storedatas=storedatajson))
    return storedatajson
    return render_template(
    "index.html",
    storedatas=storedatajson,
    total=tot_count)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)