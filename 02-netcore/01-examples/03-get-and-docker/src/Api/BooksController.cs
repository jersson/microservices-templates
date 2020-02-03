using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using _03_get_and_docker.Core;
using _03_get_and_docker.Core.Models;

namespace _03_get_and_docker.Api.Controllers
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
