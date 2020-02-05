# python-microservices-template
Simple microservice (HTTP GET)
---
The goal here is coding a microservice template using Python

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
curl http://localhost:5000/about
```

You'll see:
```
{"name":"python-microservices-template","version":"0.0.4","author":"Jersson Dongo","source":"https://github.com/jersson/microservices-templates","license":"MIT"}
```

If you don't like the terminal you can use Postman :D