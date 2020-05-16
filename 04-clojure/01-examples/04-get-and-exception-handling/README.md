# clojure-microservices-template
Using HTTP GET (without parameters) and error handling
---
The goal here is coding a microservice example using Clojure

**How to run the code** </br>

Run this command in the console:
```
lein ring server-headless
```
If everything is okay, you'll see this message:
```
Server started on port 3000
```

**How to test the code** </br>
You can also use the terminal :)

```
curl http://localhost:3000/books
```

You'll see:
```json
{
    "status": 500,
    "message": "internal error",
    "type": "internal"
}
```
Besides, in your original terminal (lein ring server-headless), you'll see something like:
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

You can also try this one :)
```
curl http://localhost:3000/box
```
If you don't like the terminal you can use Postman :D
