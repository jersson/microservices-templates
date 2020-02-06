# python-microservices-example
Usando HTTP POST
---
El objetivo es programar un microservicio que soporte HTTP POST. Se usará Python.

**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
python3 server.py
```
Si todo está bien, verás un mensaje como este:
```
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl -i --request POST --header "Content-Type: application/json" --data '{"bookId":1, "bookQuantity":1}' http://localhost:5000/checkout/books
```

Verás lo siguiente:
```
HTTP/1.0 200 OK
Content-Type: application/json
Content-Length: 32
Server: Werkzeug/0.16.1 Python/3.7.5
Date: Thu, 06 Feb 2020 18:35:54 GMT

{
  "id": 1,
  "quantity": 1
}
```

Si no te gusta la terminal, puedes usar Postman :D