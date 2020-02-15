# python-microservices-example
Using HTTP GET (without parameters)
---
The main goal here is build a microservices example using Python

**How to test the code** </br>

Go to the core folder and run this command in the console:
```
pytest test_book.py
```

If everything is okay, you'll see this message:
```
test_book.py .      [100%]

=== 1 passed in 0.01s ===
```

**Notes** </br>
You can also use run the service and test it using this url :)

```
curl http://localhost:5000/books
```

We are using [pytest](https://pypi.org/project/pytest/) :)