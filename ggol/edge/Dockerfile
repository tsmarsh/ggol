FROM openjdk:13

COPY target/edge-1.0-SNAPSHOT.jar /usr/src/edge/edge.jar
WORKDIR /usr/src/edge
CMD ["java", "-jar", "edge.jar"]
