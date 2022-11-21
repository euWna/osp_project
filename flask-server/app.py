from flask import Flask, render_template, request, redirect, url_for
from database import DBhandler
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
        # DB.insert_store(data['storename'], data, img_file.filename)

        #return render_template("result.html", result=data, img_path="static/img"+img_file.filename)
        
        if DB.insert_store(data['storename'], data, img_file.filename):
            return redirect(url_for('Submit_menu', request_method=request.method))
        else:
            return "The submitted store already exists!"


@app.route("/CreateMenu",methods=['GET','POST'])
def go_menucreate():
    return redirect(url_for('Submit_menu', request_method=request.method))

@app.route("/CreateMenu",methods=['GET','POST'])
def Submit_menu(request_method):
    if request_method == 'POST':
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
                return render_template("result_menu.html", result = data, img_path="static/img"+img_file.filename)
            else:
                return "The submitted menu already exists!"

    else :
        if request_method == 'GET':
            request_method == 'POST'
            return redirect("http://127.0.0.1:5000/CreateMenu", request_method=request.method)

        
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

        return render_template("result_review.html", result = data)



if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)