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
curl https://localhost:5001/about
```

Verás lo siguiente:
```
{"name":"netcore-microservices-template","version":"0.0.4","author":"Jersson Dongo","source":"https://github.com/jersson/microservices-templates","license":"MIT"}
```

Si no te gusta la terminal, puedes usar Postman :D