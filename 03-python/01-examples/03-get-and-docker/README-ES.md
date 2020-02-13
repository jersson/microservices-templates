# python-microservices-example
Usando HTTP GET (sin parámetros) y Docker
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Python.

**Cómo ejecutar el código** </br>

Entra al folder tools/deploy y ejecuta este comando en la consola:
```
docker-compose up --build
```

Si todo está bien, verás un mensaje como este:
```
books_1  |  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
books_1  |  * Restarting with stat
books_1  |  * Debugger is active!
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