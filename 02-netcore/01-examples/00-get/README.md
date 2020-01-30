# netcore-microservices-template
Simple microservice (HTTP GET)
---
The goal here is coding a microservice template using dotnetcore and C#

**How to run the code** </br>

Run this command in the console:
```
dotnet run
```
If everything is okay, you'll see this message:
```
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: https://localhost:5001
```

**How to test the code** </br>
You can also use the terminal :)

```
curl https://localhost:5001/books
```

You'll see:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```