from flask import Flask, jsonify, render_template, request, redirect, url_for, send_file
from database import DBhandler
from collections import OrderedDict
import json
import sys
import string
import random



app = Flask(__name__)

DB = DBhandler()

DB.__init__()


@app.route("/")
def index():
    return render_template("index.html")

def refresh(site):
    return redirect

@app.route("/CreateStore")
def view_createstore():
    return render_template("index.html")

@app.route("/CreateStore_submit", methods=['GET', 'POST'])
def Submit_store():
    if request.method == 'POST':
        data = request.form
        name = data['storename']
        img_file = request.files['file']
        # img_random = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        # if img_file:
        #     img_file.save("./flask-server/static/img/"+img_random+img_file.filename)
        if img_file:
            img_file.save( "./flask-server/static/img/"+img_file.filename) #이미지 저장
        if DB.insert_store(data['storename'], data, img_file.filename):
            return redirect(url_for('view', store_id=name))
        else:
            return "The submitted store already exists!"


@app.route("/CreateMenu/<store_id>")
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
def view_createrefview():
    return render_template("index.html")
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
            img_file.save("../../public/assets/"+img_file.filename)
            #print(img_file)

        if DB.insert_review(data['username'], data, img_file.filename):
            return render_template("result_review.html", result = data, img_path="static/img/"+img_file.filename)

#맛집목록조회 / 리액트에 json으로 보내주고 리액트에 proxy 추가...?

@app.route("/StoreListView", methods=['GET','POST'])
def StoreListView():
    return render_template("index.html")

@app.route("/StoreListView_send_data", methods=['GET','POST'])
def list_stores():
    if request.method == 'GET':
        storedata = DB.get_store() #read the table
        storedatajson =  json.dumps(storedata)
        return storedatajson

# @app.route("/get_img/<storekey>", methods=['GET']) #랜덤생성된 식당 키값으로 데이터 받아옴
# def Get_img(storekey):
#     print("///////////////////////////////")
#     img_name = DB.db.child("STORE").child(storekey).child('img_path').get().val()
#     # request.headers["content-type"] = "image/png"
#     img = "http://127.0.0.1:5000/static/img/"+ img_name
#     imgurl = json.dumps(img)
#     # if request.method == 'GET':#겟요청이 들어오고있는건지...?안들어오고잇는거같아요...
#     return imgurl #지금은 경로를 리턴해주는 중입니다


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

# @app.route('/StoreListView', methods=['GET','POST'])
# def list_stores():
#     data = DB.get_stores()
#     tot_count = len(data)

#     return render_template("index.html", datas=data.items(), total=tot_count())

'''
@app.route("/StoreListView",methods=['GET','POST'])
def view_storelist(store_id):
    return render_template("index.html")
'''