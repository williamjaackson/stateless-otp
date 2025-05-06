import flask

app = flask.Flask(__name__)

@app.route("/")
def index():
    return flask.render_template("index.html")

@app.route("/api/get_data")
def get_data():
    return flask.jsonify({"message": "Hello, World!"})

if __name__ == "__main__":
    app.run(debug=True)
