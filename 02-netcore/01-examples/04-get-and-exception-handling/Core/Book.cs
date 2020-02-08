using System.Collections.Generic;
using _04_get_and_exception_handling.Core.Models;

namespace _04_get_and_exception_handling.Core
{
    public class Book
    {
        public IEnumerable<BookInformation> GetAllBooks()
        {
            var books = new List<BookInformation>();
            books.Add(new BookInformation("Code Complete 2nd Edition", "Steve McConnell","2004"));
            books.Add(new BookInformation("Clean Code", "Robert C. Martin","2008"));
            books.Add(new BookInformation("The Last Lecture", "Randy Pausch","2008"));
            
            throw new System.Exception("Error here!");
            
            return books.ToArray();
        }

    }
}