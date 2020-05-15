# clojure-microservices-template
Using HTTP GET (without parameters)
---
The goal here is coding a microservice example using Clojure

**How to test the service** </br>

Run this command in the console:
```
lein test :once :all
```
If everything is okay, you'll see this message:
```
lein test core.books-test

Ran 1 tests containing 1 assertions.
0 failures, 0 errors.
```

**Notes** </br>
You can also use run the service and test it using this url :)

```
curl http://localhost:3000/books
```

The test file is under the test folder, we are using [Clojure.test](https://clojure.github.io/clojure/clojure.test-api.html) :)
