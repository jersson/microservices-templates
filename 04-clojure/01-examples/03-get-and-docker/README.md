# clojure-microservices-template
Using HTTP GET (without parameters) and Docker
---
The main goal here is coding a microservice example using Clojure

**How to run the code** </br>

Run this command in the console:
```
docker-compose up --build
```
If everything is okay, you'll see this message:
```
books_1  | 2020-05-14 22:45:10.516:INFO::main: Logging initialized @2808ms to org.eclipse.jetty.util.log.StdErrLog
books_1  | 2020-05-14 22:45:13.818:INFO:oejs.Server:main: jetty-9.4.z-SNAPSHOT; built: 2018-08-30T13:59:14.071Z; git: 27208684755d94a92186989f695db2d7b21ebc51; jvm 11.0.6+10
books_1  | 2020-05-14 22:45:13.879:INFO:oejs.AbstractConnector:main: Started ServerConnector@4a914b86{HTTP/1.1,[http/1.1]}{0.0.0.0:3000}
books_1  | 2020-05-14 22:45:13.879:INFO:oejs.Server:main: Started @6172ms
books_1  | Started server on port 3000
```

**How to test the code** </br>
You can also use the terminal :)

```
curl http://localhost:3000/books
```

You'll see:
```json
[
    {
        "title": "Code Complete 2nd Edition",
        "author": "Steve McConnell",
        "year": 2004
    },
    {
        "title": "Clean Code",
        "author": "Robert C. Martin",
        "year": 2008
    },
    {
        "title": "The Last Lecture",
        "author": "Randy Pausch",
        "year": 2008
    }
]
```

If you don't like the terminal you can use Postman :D
