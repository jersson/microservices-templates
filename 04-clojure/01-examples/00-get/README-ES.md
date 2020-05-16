# clojure-microservices-template
Usando HTTP GET (sin parámetros)
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará clojure.

**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
lein ring server-headless
```
Si todo está bien, verás un mensaje como este:
```
Server started on port 3000
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl http://localhost:3000/books
```

Verás lo siguiente:
```json
[
    {
        "title": "Code Complete 2nd Edition",
        "author": "Steve McConnell",
        "year": 2004
    },
    {
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "year": 2008
    },
    {
        "title": "The Last Lecture",
        "author": "Randy Pausch",
        "year": 2008
    }
]
```

Si no te gusta la terminal, puedes usar Postman :D
