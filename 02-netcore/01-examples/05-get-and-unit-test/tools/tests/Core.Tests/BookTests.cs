using NUnit.Framework;
using System.Collections.Generic;

using _05_get_and_unit_test.Core;
using _05_get_and_unit_test.Core.Models;

namespace Core.Tests
{
    public class BookTests
    {
        [Test]
        public void TestGetBooks()
        {
            var tmpBooks = new List<BookInformation>();
            tmpBooks.Add(new BookInformation("Code Complete 2nd Edition", "Steve McConnell","2004"));
            tmpBooks.Add(new BookInformation("Clean Code", "Robert C. Martin","2008"));
            tmpBooks.Add(new BookInformation("The Last Lecture", "Randy Pausch","2008"));

            var expectedBooks = (IEnumerable<BookInformation>)(tmpBooks.ToArray());
            var book = new Book();
            var books = book.GetAllBooks();

            //Assert.AreEqual(expectedBooks, books);
            Assert.NotNull(books);

        }
    }
}