using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

using _02_post_with_params.Core;
using _02_post_with_params.Core.Models;
using System.Net.Http;

namespace _02_post_with_params.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CheckoutController : ControllerBase
    {

        [HttpPost()]
        [Route("/checkout/books")]
        public PurchaseInformation Books([FromBody] PurchaseInput input)
        {
            var core = new Book();
            var purchaseInput = new PurchaseInformation(input.BookId, input.BookQuantity);
            var purchaseInfo = core.CheckOut(purchaseInput);

            return purchaseInfo;
        }
    }
}
