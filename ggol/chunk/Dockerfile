FROM openjdk:13

COPY target/chunk-1.0-SNAPSHOT.jar /usr/src/chunk/chunk.jar
WORKDIR /usr/src/chunk
CMD ["java", "-jar", "chunk.jar"]
