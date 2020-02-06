# python-microservices-example
Using HTTP POST
---
The main goal here is build a microservices example using Python

**How to run the code** </br>

Run this command in the console:
```
python3 server.py
```
If everything is okay, you'll see this message:
```
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

**How to test the code** </br>
You can also use the terminal :)

```
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":1, "bookQuantity":1}' http://localhost:5000/checkout/books
```

You'll see:
```
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 32
Server: Werkzeug/0.16.1 Python/3.7.5
Date: Thu, 06 Feb 2020 18:35:54 GMT

{
  "id": 1,
  "quantity": 1
}
```

If you don't like the terminal you can use Postman :D