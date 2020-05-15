# clojure-microservices-template
Usando HTTP GET (sin parámetros) y manejo de errores
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
{
    "status": 500,
    "message": "internal error",
    "type": "internal"
}
```
Mientras que en la consola que ejecutaste 'lein ring server-headless', verás algo como esto:
```
20-05-15 00:52:49 LAPTOP-21P8BPF7 ERROR [middleware.logging:9] - {:level :error, :throwable #error {
 :cause "Error here!"
 :via
 [{:type java.lang.Exception
   :message "Error here!"
   :at [core.books$get_all_books invokeStatic "books.clj" 5]}]
 :trace
...
```
También puedes probar esto :)
```
curl http://localhost:3000/box
```
Si no te gusta la terminal, puedes usar Postman :D
