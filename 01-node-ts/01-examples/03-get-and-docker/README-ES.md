# node-microservices-example
Usando HTTP GET (sin parámetros) y Docker
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Node y TypeScript.


**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
npm run deploy
```
Si todo está bien, verás un mensaje como este:
```
books_1  |
books_1  | > 03-using-get-and-docker@0.0.1 start /usr/services/books
books_1  | > node server.js
books_1  |
books_1  | Server started on port 3000
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl http://localhost:3000/books
```

Verás lo siguiente:

```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code using Docker","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

Si no te gusta la terminal, puedes usar Postman :D