# node-microservices-example
Usando HTTP GET (sin parámetros) y manejo de errores
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Node y TypeScript.


**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
npm start
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

```
{"status":"500","message":"internal error","type":"internal"}
```

Mientras que en la consola que ejecutaste 'npm start', verás algo como esto:
```
timestamp: 1/5/2020, 11:47:13 PM
status: 500
type: error
message: Error here!
stack: Error: Error here!
...
```

Si no te gusta la terminal, puedes usar Postman :D