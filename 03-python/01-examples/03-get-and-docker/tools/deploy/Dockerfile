FROM python:3-alpine

WORKDIR /usr/services/books

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY src/. .

CMD [ "python", "./server.py" ]

EXPOSE 5000