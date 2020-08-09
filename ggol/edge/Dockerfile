FROM gcr.io/distroless/java:11

EXPOSE 8080

COPY /target/edge-*.jar /app/edge.jar
WORKDIR /app

CMD ["edge.jar"]