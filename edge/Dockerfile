FROM gcr.io/distroless/java:11

ENV CHUNK_PORT=4000
EXPOSE 4000

COPY /target/chunk-*-standalone.jar /app/chunk.jar
WORKDIR /app

CMD ["chunk.jar"]
