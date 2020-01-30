using Microsoft.AspNetCore.Mvc;

using _01_get_with_params.Core;
using _01_get_with_params.Core.Models;

namespace _01_get_with_params.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BooksController : ControllerBase
    {

        [HttpGet("{bookId}")]
        public BookInformation GetBook(string bookId)
        {
            var core = new Book();
            var book = core.GetBook(bookId);

            return book;
        }
    }
}
