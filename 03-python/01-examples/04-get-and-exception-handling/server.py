import flask
from flask import request, jsonify

from core.book import book as core
from tools.diagnostics.error.internalerror import *
from tools.diagnostics.error.errorhandler import *

app = flask.Flask(__name__)
app.config['DEBUG'] =  True   

@app.errorhandler(InternalError)
def handleInternalError(error):
    handler = ErrorHandler(error)

    handler.sendToConsole()    
    return jsonify(handler.httpResponse()), error.status

@app.route('/<path:route>', methods=['GET'])
def allRoutes(route):
    if route == 'books':
        return jsonify(core.getBooks())
    else:
        raise InternalError('Internal error', 400, { 'ext': 1 })

app.run()