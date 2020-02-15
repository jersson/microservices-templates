from book import book

# def test_get_books_fail():
#     booksExpected = {}
#     books = book.getBooks()

#     assert booksExpected == books

def test_get_books_ok():
    booksExpected = [
            {'title': 'Code Complete 2nd Edition', 'author': 'Steve McConnell', 'year': '2004'},
            {'title': 'Clean Code', 'author': 'Robert C. Martin', 'year': '2008'},
            {'title': 'The Last Lecture', 'author': 'Randy Pausch', 'year': '2008'}
        ]
    books = book.getBooks()

    assert booksExpected == books