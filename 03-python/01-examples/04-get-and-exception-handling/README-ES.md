# python-microservices-example
Usando HTTP GET (sin parámetros) y manejo de errores
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Python.

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
curl http://localhost:5000/box
```

Verás lo siguiente:
```
{
  "Message": "Internal error",
  "StatusCode": 400,
  "Type": "internal"
}
```

En la terminal verás lo siguiente:
```
 * Message: Internal error
 * StatusCode: 400
 * StackTrace: {'ext': 1}
127.0.0.1 - - [14/Feb/2020 20:08:16] "GET /book HTTP/1.1" 400
```

Si no te gusta la terminal, puedes usar Postman :D