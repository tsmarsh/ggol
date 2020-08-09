FROM gcr.io/distroless/java:11

ENV CHUNK_PORT 8080
EXPOSE 8080

COPY /target/chunk-*.jar /app/chunk.jar
WORKDIR /app

CMD ["chunk.jar"]
