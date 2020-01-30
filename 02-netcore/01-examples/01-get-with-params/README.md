# netcore-microservices-example
Using HTTP GET (with parameters)
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
curl https://localhost:5001/books/1
```

You'll see:
```
{"id":"1","title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"}
```