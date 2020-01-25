# node-microservices-example
Usando HTTP POST
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Node y TypeScript.


**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
npm start
```
Si todo está bien, verás un mensaje como este:
```
Server started on port 3000
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":1, "bookQuantity":1}' http://localhost:3000/checkout/books
```

Verás algo similar a:

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 27
ETag: W/"1b-fwEIcohrCBBE6BAebQ0l5w5nvnQ"
Date: Mon, 30 Dec 2019 02:11:29 GMT
Connection: keep-alive

{"id": "1", "quantity":"1"}
```

Si no te gusta la terminal, puedes usar Postman :D