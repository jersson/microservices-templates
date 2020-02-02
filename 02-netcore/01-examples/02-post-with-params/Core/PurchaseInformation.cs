namespace _02_post_with_params.Core.Models
{
    public class PurchaseInformation
    {
        public string Id { get; set; }
        public string Quantity { get; set; }

        public PurchaseInformation(){
            
        }
        public PurchaseInformation(string id, string quantity){
            this.Id = id;
            this.Quantity = quantity;
        }
    }
}