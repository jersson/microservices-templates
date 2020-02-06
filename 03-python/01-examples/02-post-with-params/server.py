import flask
from flask import request, jsonify

from core.book import book as core

app = flask.Flask(__name__)
app.config['DEBUG'] =  True

@app.route('/checkout/books', methods = ['POST'])
def buyBook():
    bookId = request.json['bookId']
    bookQuantity = request.json['bookQuantity']
    
    return jsonify(core.buyBook(bookId, bookQuantity))

app.run()