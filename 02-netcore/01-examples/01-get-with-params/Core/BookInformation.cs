namespace _01_get_with_params.Core.Models
{
    public class BookInformation
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Year { get; set; }

        public BookInformation(string id, string title, string author, string year){
            this.Id = id;
            this.Title = title;
            this.Author = author;
            this.Year = year;
        }
    }
}