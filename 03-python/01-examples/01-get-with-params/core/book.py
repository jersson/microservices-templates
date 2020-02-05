class book:
    def getBook(bookId):
        books = [
            {'id': '1', 'title': 'Code Complete 2nd Edition', 'author': 'Steve McConnell', 'year': '2004'},
            {'id': '2', 'title': 'Clean Code', 'author': 'Robert C. Martin', 'year': '2008'},
            {'id': '3', 'title': 'The Last Lecture', 'author': 'Randy Pausch', 'year': '2008'}
        ]

        filteredBook = {}
        for b in books:
            if b['id'] == bookId:
                filteredBook = b
                break

        return filteredBook