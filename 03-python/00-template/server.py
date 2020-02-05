import flask
from flask import request, jsonify

from core.information import information as core

app = flask.Flask(__name__)
app.config['DEBUG'] =  True

@app.route('/about', methods = ['GET'])
def about():
    return jsonify(core.getDetails())

app.run()