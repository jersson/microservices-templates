using Microsoft.AspNetCore.Mvc;

using _00_template.Core;
using _00_template.Core.Models;

namespace _00_template.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AboutController : ControllerBase
    {

        [HttpGet]
        public InformationModel GetDetails()
        {
            var info = new Information();
            var details = info.GetDetails();

            return details;
        }
    }
}
