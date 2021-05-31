using Excessive_Data_Exposure.Model;
using Microsoft.AspNetCore.Mvc;

namespace Excessive_Data_Exposure.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        Account account = new Account();

        [HttpGet]
        public string GetProfile(string firstName, string lastName, string password)
        {
            account.FirstName = firstName; 
            account.LastName = lastName;
            account.Password = password;
            return account.ToString();
        }
    }
}
