# python-microservices-template
Microservicio básico (HTTP GET)
---
El objetivo es programar un microservicio que luego será usado como plantilla de código. Se usará Python.

**Cómo ejecutar el código** </br>

Puedes ejecutar este comando en la consola:
```
python3 server.py
```
Si todo está bien, verás un mensaje como este:
```
* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
```

**Cómo probar el código** </br>

También puedes usar la terminal para ejecutar el siguiente comando :)

```
curl http://localhost:5000/about
```

Verás lo siguiente:
```
{"name":"python-microservices-template","version":"0.0.4","author":"Jersson Dongo","source":"https://github.com/jersson/microservices-templates","license":"MIT"}
```

Si no te gusta la terminal, puedes usar Postman :D