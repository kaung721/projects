using System.Diagnostics;
using JokeApp.Data;
using JokeApp.Models;
using Microsoft.AspNetCore.Mvc;

namespace JokeApp.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context, ILogger<HomeController> logger)
            {
            _context = context;
            _logger = logger;
            }

        public IActionResult Index()
        {
            _context.Joke.ToList(); // Ensure the database is initialized
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
