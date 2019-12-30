# node-microservices-example
Using HTTP GET (without parameters)
---
The main goal here is coding a microservices example using Node and JavaScript

**How to run the code** </br>

Run this command in the console:
```console
npm start
```
If everything is okay, you'll see this message:
```console
Server started on port 3000
````

**How to test the code** </br>
You can also use the terminal :)

```console
curl http://localhost:3000/books/1
```

You'll see:
```console
{"id":"1","title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"}
```

If you don't like the terminal you can use Postman :D