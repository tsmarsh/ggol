FROM gcr.io/distroless/java:11

ENV GOLLY_PORT 3000
EXPOSE 3000

COPY /target/golly-*-standalone.jar /app/golly.jar
WORKDIR /app

CMD ["golly.jar"]
