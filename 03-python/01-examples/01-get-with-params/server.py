import flask
from flask import request, jsonify

from core.book import book as core

app = flask.Flask(__name__)
app.config['DEBUG'] =  True

@app.route('/books/<bookId>', methods = ['GET'])
def books(bookId):
    return jsonify(core.getBook(bookId))

app.run()