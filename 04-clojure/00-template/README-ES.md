# clojure-microservices-template
Microservicio básico (HTTP GET)
---
El objetivo es programar un microservicio que luego será usado como plantilla de código. Se usará clojure.

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
curl http://localhost:3000/about
```

Verás lo siguiente:
```json
{
  "name": "clojure-microservices-template",
  "version": "0.0.1",
  "author": "berczeck",
  "source": "https://github.com/berczeck/microservices-templates",
  "license": "MIT"
}
```

Si no te gusta la terminal, puedes usar Postman :D
