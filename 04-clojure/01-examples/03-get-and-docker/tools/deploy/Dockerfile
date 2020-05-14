FROM clojure
FROM clojure
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN mv "$(lein ring uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" app-standalone.jar
EXPOSE 3000
CMD ["java", "-jar", "app-standalone.jar"]
