# clojure-microservices-template
Usando HTTP GET (sin parámetros)
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará clojure.

**Cómo probar el servicio** </br>

Puedes ejecutar este comando en la consola:
```
lein test :once :all
```
Si todo está bien, verás un mensaje como este:
```
lein test core.books-test

Ran 1 tests containing 1 assertions.
0 failures, 0 errors.
```

**Notas** </br>

También puedes ejecutar el servicio y probarlo usando esta url :)

```
curl http://localhost:3000/books
```

El archivo de pruebas se encuentra en el folder test, estamos usando [Clojure.test](https://clojure.github.io/clojure/clojure.test-api.html) :)
