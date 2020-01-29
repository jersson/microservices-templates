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
curl https://localhost:5001/about
```

You'll see:
```
{"name":"netcore-microservices-template","version":"0.0.4","author":"Jersson Dongo","source":"https://github.com/jersson/microservices-templates","license":"MIT"}
```