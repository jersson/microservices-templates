# clojure-microservices-template
Simple microservice (HTTP GET)
---
The goal here is coding a microservice template using Clojure

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
curl http://localhost:3000/about
```

You'll see:
```
{"name":"clojure-microservices-template","version":"0.0.1","author":"berczeck","source":"https://github.com/berczeck/microservices-templates","license":"MIT"}
```

If you don't like the terminal you can use Postman :D
