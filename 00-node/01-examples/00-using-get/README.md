# node-microservices-example
Using HTTP GET (without parameters)
---
The main goal here is coding a microservices example using Node and JavaScript

**How to run the code** </br>

Run this commmand in the console:
```console
npm start
```
If everithing is okay, you'll see this message:
```console
Server started on port 3000
````

**How to test the code** </br>
You can also use the terminal :)

```console
curl http://localhost:3000/books
```

You'll see:
```console
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

If you don't like the terminal you can use Postman :D