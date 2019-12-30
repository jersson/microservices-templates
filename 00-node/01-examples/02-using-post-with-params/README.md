# node-microservices-example
Using HTTP POST
---
The main goal here is coding a microservices example using Node and JavaScript

**How to run the code** </br>

Run this command in the console:
```
npm start
```
If everything is okay, you'll see this message:
```
Server started on port 3000
````

**How to test the code** </br>
You can also use the terminal :)

```
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":1, "bookQuantity":1}' http://localhost:3000/checkout/books
```

You'll see something like this:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 27
ETag: W/"1b-fwEIcohrCBBE6BAebQ0l5w5nvnQ"
Date: Mon, 30 Dec 2019 02:11:29 GMT
Connection: keep-alive

{"id": "1", "quantity":"1"}
```

If you don't like the terminal you can use Postman :D