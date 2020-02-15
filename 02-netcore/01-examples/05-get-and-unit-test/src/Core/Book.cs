using System.Collections.Generic;
using _05_get_and_unit_test.Core.Models;

namespace _05_get_and_unit_test.Core
{
    public class Book
    {
        public IEnumerable<BookInformation> GetAllBooks()
        {
            var books = new List<BookInformation>();
            books.Add(new BookInformation("Code Complete 2nd Edition", "Steve McConnell","2004"));
            books.Add(new BookInformation("Clean Code", "Robert C. Martin","2008"));
            books.Add(new BookInformation("The Last Lecture", "Randy Pausch","2008"));
            
            return books.ToArray();
        }

    }
}