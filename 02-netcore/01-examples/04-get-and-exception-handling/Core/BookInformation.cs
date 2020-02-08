namespace _04_get_and_exception_handling.Core.Models
{
    public class BookInformation
    {
        public string Title { get; set; }
        public string Author { get; set; }
        public string Year { get; set; }

        public BookInformation(string title, string author, string year){
            this.Title = title;
            this.Author = author;
            this.Year = year;
        }
    }
}