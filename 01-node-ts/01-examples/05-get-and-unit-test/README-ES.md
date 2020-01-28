# node-microservices-example
Usando HTTP GET (sin parámetros)
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Node y TypeScript.

**Cómo probar el servicio** </br>

Ejecuta este comando en la consola:
```
npm test
```

Si todo está bien, verás un mensaje como este:
```
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.465s
Ran all test suites.
```

**Notas** </br>

También puedes usar la terminal para ejecutar y probar el servicio :)
```
curl http://localhost:3000/books
```

El archivo de pruebas está en el folder **tests**. Estamos usando [Jest](https://jestjs.io/en/) :)