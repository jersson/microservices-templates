import flask
from flask import request, jsonify

from core.book import book as core

app = flask.Flask(__name__)
app.config['DEBUG'] =  True

@app.route('/books', methods = ['GET'])
def books():
    return jsonify(core.getBooks())

app.run(host='0.0.0.0')