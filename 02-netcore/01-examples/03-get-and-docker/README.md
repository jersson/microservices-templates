# netcore-microservices-example
Using HTTP GET (without parameters) and Docker
---
The goal here is coding a microservice template using dotnetcore and C#

**How to run the code** </br>

Run this command in the console (on tools/deploy folder):
```
docker-compose up --build
```

If everything is okay, you'll see this message:
```
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Now listening on: http://[::]:80
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Application started. Press Ctrl+C to shut down.
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Hosting environment: Production
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Content root path: /services/books
```

**How to test the code** </br>
You can also use the terminal :)

```
curl http://localhost:5001/books
```

You'll see:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code using Docker","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```