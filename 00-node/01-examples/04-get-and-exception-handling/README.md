# node-microservices-example
To be checked: Using HTTP GET (without parameters) and error handling
---
The main goal here is coding a microservices example using Node and JavaScript

**How to run the code** </br>

Run this command in the console:
```
npm start
```
If everything is okay, you'll see this message:
```
Server started on port 3000
````

**How to test the code** </br>
You can also use the terminal :)

```
curl http://localhost:3000/books
```

You'll see:
```
{"status":"500","message":"internal error","type":"internal"}%
```

Besides, in your original terminal (npm start), you'll see something like:
```
timestamp: 1/5/2020, 11:47:13 PM
status: 500
type: error
message: Error here!
stack: Error: Error here!
...
```

You can also try this one :)
```
curl http://localhost:3000/box
```

If you don't like the terminal you can use Postman :D