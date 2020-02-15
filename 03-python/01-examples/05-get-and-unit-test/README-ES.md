# python-microservices-example
Usando HTTP GET (sin parámetros)
---
El objetivo es programar un microservicio que soporte HTTP GET. Se usará Python.

**Cómo probar el código** </br>

Ejecutar este comando en la carpeta core 
```
pytest test_book.py
```

Verás lo siguiente:
```
test_book.py .      [100%]

=== 1 passed in 0.01s ===
```

**Notas** </br>

También puedes usar la terminal para ejecutar y probar el servicio :)
```
curl http://localhost:5000/books
```

Estamos usando [pytest](https://pypi.org/project/pytest/) :)%