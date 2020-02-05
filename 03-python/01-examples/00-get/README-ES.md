# python-microservices-example
Usando HTTP GET (sin parámetros)
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
curl http://localhost:5000/books
```

Verás lo siguiente:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

Si no te gusta la terminal, puedes usar Postman :D