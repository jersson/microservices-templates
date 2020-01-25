let book = {
    buyBook: (id: string, quantity: string) => {

        let purchaseInfo = `{"id": "${id}", "quantity":"${quantity}"}`;

        return purchaseInfo;
    }
};

export default book;