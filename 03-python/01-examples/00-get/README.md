# python-microservices-example
Using HTTP GET (without parameters)
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
curl http://localhost:5000/books
```

You'll see:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

If you don't like the terminal you can use Postman :D