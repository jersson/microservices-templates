# python-microservices-example
Using HTTP GET (without parameters) and error handling
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
curl http://localhost:5000/box
```

You'll see:
```
{
  "Message": "Internal error",
  "StatusCode": 400,
  "Type": "internal"
}
```

Also, in the terminal, you'll see:
```
 * Message: Internal error
 * StatusCode: 400
 * StackTrace: {'ext': 1}
127.0.0.1 - - [14/Feb/2020 20:08:16] "GET /book HTTP/1.1" 400
```

If you don't like the terminal you can use Postman :D