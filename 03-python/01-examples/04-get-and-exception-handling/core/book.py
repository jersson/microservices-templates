#from ..tools.diagnostics.error.internalerror import *

class book():
    def getBooks():
        books = [
            {'title': 'Code Complete 2nd Edition', 'author': 'Steve McConnell', 'year': '2004'},
            {'title': 'Clean Code', 'author': 'Robert C. Martin', 'year': '2008'},
            {'title': 'The Last Lecture', 'author': 'Randy Pausch', 'year': '2008'}
        ]

        # try:
        #     division = 0/0
        # except Exception as error:
        #     raise InternalError('Internal error', 400, error)

        return books