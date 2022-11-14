from flask import Flask, render_template, request
import sys

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")


@app.route("/CreateStore", methods=['POST'])
def Store_result():
    if request.method == 'POST':
        result = request.form
        name=request.form['storename']
        location=request.form['location']
        # time
        phonenumber=request.form['phonenumber']
        category = request.form['food']
        #주차장
        #가격대
        site = request.form['site']
        print(name, location, phonenumber, category,site)

        img_file = request.files['file']
        img_file.save("./flask-server/static/img/"+img_file.filename)
        print(img_file)

        return render_template("result.html", result=result)


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)

