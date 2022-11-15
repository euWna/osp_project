from flask import Flask, render_template, request, redirect, url_for
import sys

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

def refresh(site):
    return redirect

@app.route("/CreateStore", methods=['GET', 'POST'])
def Store_result():
    if request.method == 'POST':
        result = request.form
        name = result['storename']
        location = result['location']
        # time
        phonenumber = result['phonenumber']
        category = result['food']
        #주차장
        #가격대
        site = result['site']
        print(name, location, phonenumber, category,site)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        return render_template("result.html", result=result)


@app.route("/CreateMenu",methods=['GET','POST'])
def Submit_Menu():
    if request.method == 'POST':
        result = request.form
        menuname = result['food']
        price = result['money']
        nutrient = result['nutrient']
        print(menuname, price, nutrient)

        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
            print(img_file)

        return render_template("result_menu.html", result=result)

        
@app.route("/CreateReview", methods=['GET','POST'])
def Submit_Review():
    if request.method == 'POST':
        result = request.form

        username = result['username']
        reviewtitle = result['reviewtitle']
        reviewdesc = result['reviewdesc']
        print(username,"\n",reviewtitle, '\n', reviewdesc)
        
        img_file = request.files['file']
        if img_file:
            img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        return render_template("result_review.html", result=result)



if __name__ == "__main__":
    app.debug = True
    app.run()
    #app.run(debug=True)

