# netcore-microservices-example
Usando HTTP POST
---
El objetivo es programar un microservicio que luego será usado como plantilla de código. Se usará dotnetcore y C#.

**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
dotnet run
```
Si todo está bien, verás un mensaje como este:
```
info: Microsoft.Hosting.Lifetime[0]
      Now listening on: https://localhost:5001
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":"1", "bookQuantity":"1"}' https://localhost:5001/checkout/books
```

Verás lo siguiente:
```
HTTP/1.1 200 OK
Date: Sun, 02 Feb 2020 02:47:10 GMT
Content-Type: application/json; charset=utf-8
Server: Kestrel
Transfer-Encoding: chunked

{"id":"1","quantity":"1"}
```

Si no te gusta la terminal, puedes usar Postman :D