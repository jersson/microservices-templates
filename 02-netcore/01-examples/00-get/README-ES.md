# netcore-microservices-template
Microservicio básico (HTTP GET)
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
curl https://localhost:5001/books
```

Verás lo siguiente:
```
[{"title":"Code Complete 2nd Edition","author":"Steve McConnell","year":"2004"},{"title":"Clean Code","author":"Robert C. Martin","year":"2008"},{"title":"The Last Lecture","author":"Randy Pausch","year":"2008"}]
```

Si no te gusta la terminal, puedes usar Postman :D