# netcore-microservices-example
Microservicio básico (HTTP GET)
---
El objetivo es construir un microservicio que luego será usado como plantilla de código. Se usará dotnetcore y C#.

**Cómo probar el código** </br>

Puedes ejecutar este comando en la consola:
```
dotnet test
```

Si todo está bien, verás un mensaje como este:
```
Test Run Successful.
Total tests: 1
     Passed: 1
 Total time: 0.6832 Seconds
```

**Notas** </br>

También puedes usar la terminal para ejecutar y probar el servicio :)
```
curl https://localhost:5001/books
```

El proyecto de pruebas está en la carpeta tools/tests. Estamos usando [nunit](https://nunit.org/)