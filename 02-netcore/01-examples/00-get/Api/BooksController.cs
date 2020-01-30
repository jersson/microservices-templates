using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using _00_get.Core;
using _00_get.Core.Models;

namespace _00_get.Api.Controllers
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
