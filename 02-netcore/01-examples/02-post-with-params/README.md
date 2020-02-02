# netcore-microservices-example
Using HTTP POST
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
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":"1", "bookQuantity":"1"}' https://localhost:5001/checkout/books
```

You'll see:
```
HTTP/1.1 200 OK
Date: Sun, 02 Feb 2020 02:47:10 GMT
Content-Type: application/json; charset=utf-8
Server: Kestrel
Transfer-Encoding: chunked

{"id":"1","quantity":"1"}
```