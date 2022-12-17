from flask import Flask, jsonify, render_template, request, redirect, url_for, send_file,flash, session
from database import DBhandler
from collections import OrderedDict
import json
import sys
import string
import random
import hashlib



app = Flask(__name__)

DB = DBhandler()

DB.__init__()

##################### Routing #####################
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/CreateStore")
def view_createstore():
    return render_template("index.html")

@app.route("/RegisteredStore/<storename>")
def view_registeredstore(storename):
    return render_template("index.html")

@app.route("/CreateMenu/<storename>")
def view_menu(storename):
    return render_template("index.html")

@app.route("/CreateReview/<storename>")
def view_review(storename):
    return render_template("index.html")

@app.route("/StoreListView")
def StoreListView():
    return render_template("index.html")

@app.route("/StoreDetail/<storename>")
def view_StoreDetail(storename):
    print("/////////////////////")
    return render_template("index.html")   



##################### Submit Data #####################
@app.route("/CreateStore_submit", methods=['POST'])
def Submit_store():
    if request.method == 'POST':
        data = request.form
        storename = data['storename']
        img_file = request.files['file']
        # img_random = ''.join(random.choices(string.ascii_uppercase + string.digits, k=10))
        # if img_file:
        #     img_file.save("./flask-server/static/img/"+img_random+img_file.filename)
        if img_file:
            img_file.save( "./flask-server/static/img/"+img_file.filename) #이미지 저장경로를 public/assets에 합니다
        if DB.insert_store(storename, data, img_file.filename):
            return redirect(url_for('view_registeredstore', storename=storename)) 
            
        else:
            return "The submitted store already exists!"

@app.route("/CreateMenu/<storename>",methods=['POST'])
def Submit_menu(storename):
    if request.method == 'POST':
            data = request.form
            menuname = data['food']
            price = data['money']
            nutrient = data['nutrient']
            img_file = request.files['file']
            if img_file:
                img_file.save("./flask-server/static/img/"+img_file.filename)
            if DB.insert_menu(storename, data, img_file.filename):
                return render_template("index.html", result = data, img_path="static/img/"+img_file.filename)
            else:
                return "The submitted menu already exists!"

@app.route("/CreateReview/<storename>", methods=['POST'])        
def Submit_Review(storename):
    if request.method == 'POST':
        data = request.form
        username = data['username']
        reviewtitle = data['reviewtitle']
        reviewdesc = data['reviewdesc']
        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        if DB.insert_review(storename, data, img_file.filename):
             return redirect(url_for('StoreListView')) 


##################### Get data from DB #####################
@app.route("/get_registered_store/<storename>")
def get_registered_store(storename):
    # avg=DB.AverageScore(storename)
    registered = DB.get_store_byname(storename)
    print(registered)
    registered_json =  json.dumps(registered)
    return registered_json

#맛집목록조회 / 리액트에 json으로 보내주고 리액트에 proxy 추가...?
@app.route("/StoreListView_send_data", methods=['GET','POST'])
def list_stores():
    if request.method == 'GET':
        storedata = DB.get_store() #read the table
        storedatajson =  json.dumps(storedata)
        return storedatajson

# #맛집세부정보(storedetail)에서 메뉴 정보 받아오기
# @app.route("/Menu_send_data", methods=['GET','POST'])
# def list_Menu():
#     if request.method == 'GET':
#         storedata = DB.get_menu() #read the table
#         storedatajson =  json.dumps(storedata)
#         return storedatajson

#메뉴 데이터 전송 함수
@app.route("/CreateMenu_send_data/<storename>", methods=['GET','POST'])
def list_menu(storename):
    if request.method == 'GET':
        menudata = DB.get_menu(storename) #read the table
        menudatajson =  json.dumps(menudata)
        return menudatajson

#리뷰 데이터 전송 함수
@app.route("/Review_send_data/<storename>", methods=['GET','POST'])
def list_review(storename):
    if request.method == 'GET':
        reviewdata = DB.get_review(storename) #read the table
        menudatajson =  json.dumps(reviewdata)
        return menudatajson
@app.route("/Review_send_data",methods=['GET'])
def list_reviews():
    all_reviews=DB.get_all_review()
    reviewjson=json.dumps(all_reviews)
    return reviewjson
# def make_average():
#     stores=DB.get_store
#     for store in stores:
#         avg=DB.AverageScore(store)

#이미지 불러오기 함수였는데 안써도 됩니당
# @app.route("/get_img/<storekey>", methods=['GET']) #랜덤생성된 식당 키값으로 데이터 받아옴
# def Get_img(storekey):
#     print("///////////////////////////////")
#     img_name = DB.db.child("STORE").child(storekey).child('img_path').get().val()
#     # request.headers["content-type"] = "image/png"
#     img = "../../public/assets/"+ img_name
#     print(img)
#     # if request.method == 'GET':#겟요청이 들어오고있는건지...?안들어오고잇는거같아요...
#     return img #지금은 경로를 리턴해주는 중입니다


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

# 회원가입 부분
@app.route("/SignUp")
def signup():
    return render_template("index.html")

@app.route("/SignUp_post", methods=['POST'])
def register_user():
    data=request.form
    pw=request.form['pw']
    pw_hash = hashlib.sha256(pw.encode('utf-8')).hexdigest()
    if DB.insert_user(data,pw_hash):
        return render_template("index.html")
    else:
        flash("user id already exist!")
        return render_template("index.html")
# 회원가입 부분

# 로그인 부분
@app.route("/Login")
def login():
    return render_template("index.html")
@app.route("/login_confirm", methods=['POST'])
def login_user():
    id_=request.form['id']
    pw=request.form['pw']
    pw_hash = hashlib.sha256(pw.encode('utf-8')).hexdigest()
    if DB.find_user(id_,pw_hash):
        session['id']=id_
        return redirect(url_for('list_restaurants'))
    else:
        flash("Wrong ID or PW!")
        return render_template("login.html")
# 로그인 부분

'''
@app.route('/StoreListView', methods=['GET','POST'])
def list_stores():
    data = DB.get_stores()
    tot_count = len(data)
    return render_template("index.html", datas=data.items(), total=tot_count())
@app.route("/StoreListView",methods=['GET','POST'])
def view_storelist(store_id):
    return render_template("index.html")
'''
