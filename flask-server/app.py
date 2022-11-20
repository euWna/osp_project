from flask import Flask, render_template, request, redirect, url_for
from database import DBhandler
import sys



app = Flask(__name__)

DB = DBhandler()

@app.route("/")
def index():
    return render_template("index.html")

def refresh(site):
    return redirect

@app.route("/CreateStore", methods=['GET', 'POST'])
def Store_result():
    if request.method == 'POST':
        data = request.form
        print(data)

        name = data['storename']
        location = data['location']
        # time
        phonenumber = data['phonenumber']
        category = data['food']
        #주차장
        #가격대
        site = data['site']
        print(name, location, phonenumber, category,site)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        return render_template("result.html", result=data)
        
        if DB.insert_store(data['storename'], data, img_file.filename):
            return render_template("result.html", data = data, img_path="static/img"+img_file.filename)
        else:
            return "CreateStore name already exist!"


@app.route("/CreateMenu",methods=['GET','POST'])
def Submit_Menu():
    if request.method == 'POST':
        data = request.form
        print(data)


        menuname = data['food']
        price = data['money']
        nutrient = data['nutrient']
        print(menuname, price, nutrient)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
            print(img_file)

        #return render_template("result_menu.html", result=result)

        #여기 윤주영이 오소플 자료 보고 추가한 내용
        if DB.insert_restaurant(data['name'], data, img_file.filename):
            return render_template("result_menu.html", data = data, img_path="static/img"+img_file.filename)
        else:
            return "CreateMenu name already exist!"

        
@app.route("/CreateReview", methods=['GET','POST'])
def Submit_Review():
    if request.method == 'POST':
        data = request.form
        print(data)

        username = data['username']
        reviewtitle = data['reviewtitle']
        reviewdesc = data['reviewdesc']
        print(username,"\n",reviewtitle, '\n', reviewdesc)
        
        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        #return render_template("result_review.html", result=result)

        #여기 윤주영이 오소플 자료 보고 추가한 내용
        if DB.insert_restaurant(data['name'], data, img_file.filename):
            return render_template("result_review.html", data = data)
        else:
            return "CreateMenu name already exist!"


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

