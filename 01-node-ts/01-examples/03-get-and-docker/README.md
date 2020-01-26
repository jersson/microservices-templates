# node-microservices-example
Using HTTP GET (without parameters) and Docker
---
The main goal here is coding a microservices example using Node and TypeScript

**How to run the code** </br>

Run this command in the console:
```
npm run deploy
```
If everything is okay, you'll see this message:
```
books_1  |
books_1  | > 03-using-get-and-docker@0.0.1 start /usr/services/books
books_1  | > node server.js
books_1  |
books_1  | Server started on port 3000
```

**How to test the code** </br>
You can also use the terminal :)

```
curl http://localhost:3000/books
```

You'll see:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code using Docker","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

If you don't like the terminal you can use Postman :D