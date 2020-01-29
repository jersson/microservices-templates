using _00_template.Core.Models;

namespace _00_template.Core
{
    public class Information
    {
        public InformationModel GetDetails()
        {
            var info = new InformationModel();
            info.Name = "netcore-microservices-template";
            info.Version = "0.0.4";
            info.Author = "Jersson Dongo";
            info.Source = "https://github.com/jersson/microservices-templates";
            info.License = "MIT";

            return info;
        }

    }
}