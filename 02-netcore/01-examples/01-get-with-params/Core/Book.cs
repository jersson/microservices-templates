using System.Collections.Generic;

using _01_get_with_params.Core.Models;

namespace _01_get_with_params.Core
{
    public class Book
    {
        public BookInformation GetBook(string bookId)
        {
            var books = new List<BookInformation>();
            books.Add(new BookInformation("1", "Code Complete 2nd Edition", "Steve McConnell","2004"));
            books.Add(new BookInformation("2", "Clean Code", "Robert C. Martin","2008"));
            books.Add(new BookInformation("3", "The Last Lecture", "Randy Pausch","2008"));
            
            var filteredBook = books.Find(b => b.Id == bookId);

            return filteredBook;
        }

    }
}