using System.Collections.Generic;
using _02_post_with_params.Core.Models;

namespace _02_post_with_params.Core
{
    public class Book
    {
        public PurchaseInformation CheckOut(PurchaseInformation purchaseInput)
        {
            var purchaseInfo = new PurchaseInformation(purchaseInput.Id, purchaseInput.Quantity);

            return purchaseInfo;
        }

    }
}