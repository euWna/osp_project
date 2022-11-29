from flask import Flask, render_template, request, redirect, url_for,jsonify
from database import DBhandler
import sys,json



app = Flask(__name__)

DB = DBhandler()

DB.__init__()

@app.route("/")
def index():
    return render_template("index.html")
    # return redirect(url_for("list_stores")) 
    # #윗줄을 이걸로 바꿔야함

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
        # time1 = data['price1']
        # time2 = data['price2']
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
# def list_stores():
#     page=request.args.get("page",0,type=int)
#     limit=10
#     start_idx=limit*page
#     end_idx=limit*(page+1)
#     data=DB.get_stores()
#     tot_count=len(data)
#     data=dict(list(data.items())[start_idx:end_idx])

#     return render_template(
#         "StoreListView.html",
#     data=jsonify(data),
#     total=tot_count,
#     limit=limit,
#     page=page,
#     page_count=int((tot_count/10)+1))

@app.route("/StoreListView", methods=['GET','POST'])
def list_stores():
    storedata = DB.get_stores() #read the table
    tot_count = len(storedata) #리스트 길이 반환
    storedatas =  json.dumps(storedata)
    print(type(storedatas))
    # return storedatas
    return render_template(
    "index.html",
    storedatas=storedatas,
    total=tot_count)


@app.route("/StoreDetail/<storename>/")
def view_store_detail(name):
    data=DB.get_store_byname(str(name))
    avg_rate=DB.get_avgrate_byname(str(name))
    # avg_name: 평점
    print("####data:",data)
    return render_template("storelist.html",data=data,avg_rate=avg_rate)


@app.route("/listfoods/<storename>/")
def view_foods(storename):
    storedata= DB.get_food_byname(str(storename))
#여기서는 storename이 아니라 res_name이어도 되려나요...
    tot_count=len(storedata)
    page_count=len(storedata)
  
    return render_template("food_list.html",datas=storedata,total=tot_count)
    #대표메뉴 조회화면으로 이동
    # food_list.html: info.js와 연결지어질 것 
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)