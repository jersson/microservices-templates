'use strict'

let book = {
    getAllBooks: () => {
        let books = [
            {title: 'Code Complete 2nd Edition', author: 'Steve McConnell', year: '2004'}, 
            {title: 'Clean Code using Docker', author: 'Robert C. Martin', year: '2008'}, 
            {title: 'The Last Lecture', author: 'Randy Pausch', year: '2008'} 
        ];
        
        return books;
    }
};

module.exports = book;