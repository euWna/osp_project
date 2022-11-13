from flask import Flask, render_template
import sys
app = Flask(__name__)

@app.route("/members")
def index():
    return {"members": ["Member1", "Member2", "Member3"]}

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)