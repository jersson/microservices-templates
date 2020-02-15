# netcore-microservices-example
Simple microservice (HTTP GET)
---
The goal here is build a microservice using dotnetcore and C#

**How to test the code** </br>

Run this command in the console:
```
dotnet test
```

If everything is okay, you'll see this message:
```
Test Run Successful.
Total tests: 1
     Passed: 1
 Total time: 0.6832 Seconds
```

**Notes** </br>
You can also use run the service and test it using this url :)

```
curl https://localhost:5001/books
```

The test project is under the tools/tests folder. We are using [nunit](https://nunit.org/)