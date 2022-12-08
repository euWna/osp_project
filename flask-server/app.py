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

@app.route("/CreateMenu/<store_id>")
def view_menu(store_id):
    return render_template("index.html")

@app.route("/CreateReview/<store_id>")
def view_review(store_id):
    return render_template("index.html")

@app.route("/StoreListView")
def StoreListView():
    return render_template("index.html")

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



##################### Submit Data #####################
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
            return redirect(url_for('view_menu', store_id=name))
        else:
            return "The submitted store already exists!"

@app.route("/CreateMenu/<storename>",methods=['GET','POST'])
def Submit_menu(storename):
    if request.method == 'POST':
           
            data = request.form
            storename=storename
            # storename=data.ref().parent().name()
            
      
            #print(data)
            # storename=data['storename']
            # menuname = data['food']
            # price = data['money']
            # nutrient = data['nutrient']
            #print(menuname, price, nutrient)

            img_file = request.files['file']
            if img_file:
                img_file.save("./flask-server/static/img/"+img_file.filename)
                #print(img_file)
           
            #return render_template("result_menu.html", result=result)
            # data['food'] 이면 menuname 밑에 menuname 으로 들어가서 storename으로 바꿈(데이터 똑바로 들어감)
            if DB.insert_menu( storename,data, img_file.filename):
                # 아니 데이터가 넘어가긴 하는데...?
                #  return redirect(url_for("view_created_menu",data = data, img_path="static/img/"+img_file.filename, menuname=menuname,storename=storename ))
                #  return render_template("index.html")
                return render_template("index.html",data = data, img_path="static/img/"+img_file.filename)
            else:
                return "The submitted menu already exists!"
    return render_template("index.html",data = data, img_path="static/img/"+img_file.filename)
    '''
    else :
        if request_method == 'GET':
            request_method == 'POST'
            return redirect("http://127.0.0.1:5000/CreateMenu", request_method=request.method)'''


@app.route("/CreateReview/<store_id>")        
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


##################### Get data from DB #####################
@app.route("/get_registered_store/<storename>")
def get_registered_store(storename):
    registered = DB.get_store(storename)
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