using Microsoft.AspNetCore.Mvc;
using Mission14_API.Data;

namespace Mission14_API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private MovieDBContext context;
        public MovieController(MovieDBContext temp) {
            context = temp;
        }
        public IEnumerable<MovieInfo> Get()
        {
            return context.Movies.ToArray();
        }

        /*public void Post(MovieInfo)
        {

        }*/
    }
}
