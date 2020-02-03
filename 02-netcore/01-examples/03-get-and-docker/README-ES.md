# netcore-microservices-example
Microservicio básico (HTTP GET)
---
El objetivo es programar un microservicio que luego será usado como plantilla de código. Se usará dotnetcore y C#.

**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola (dentro del folder tools/deploy):
```
docker-compose up --build
```

Si todo está bien, verás un mensaje como este:
```
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Now listening on: http://[::]:80
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Application started. Press Ctrl+C to shut down.
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Hosting environment: Production
books_1  | info: Microsoft.Hosting.Lifetime[0]
books_1  |       Content root path: /services/books
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl http://localhost:5001/books
```

Verás lo siguiente:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code using Docker","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

Si no te gusta la terminal, puedes usar Postman :D