namespace JokeApp.Models
    {
    public class Joke
        {
        public int Id { get; set; }
        public string JokeQuestion { get; set; }
        public string JokeAnswer { get; set; }



        }
    public class JokeViewModel
        {
        public IEnumerable<Joke> Jokes { get; set; } = new List<Joke>();
        public IEnumerable<Name> Names { get; set; } = new List<Name>();
        }
    }
