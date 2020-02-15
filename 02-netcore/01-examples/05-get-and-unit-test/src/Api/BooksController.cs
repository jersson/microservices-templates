using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using _05_get_and_unit_test.Core;
using _05_get_and_unit_test.Core.Models;

namespace _05_get_and_unit_test.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<BookInformation> GetAllBooks()
        {
            var core = new Book();
            var books = core.GetAllBooks();

            return books;
        }
    }
}
