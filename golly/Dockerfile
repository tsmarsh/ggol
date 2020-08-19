FROM oracle/graalvm-ce:20.2.0-java11-ol8 AS build

RUN gu install native-image

RUN curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > /usr/local/bin/lein

RUN chmod +x /usr/local/bin/lein

COPY src /golly/src
COPY test /golly/test
COPY project.clj /golly/project.clj

WORKDIR /golly
RUN lein deps
RUN lein uberjar
RUN ls /opt

RUN /opt/graalvm-ce-java11-20.2.0/bin/native-image -jar target/golly-0.1.0-SNAPSHOT-standalone.jar -Dclojure.compiler.direct-linking=true -H:EnableURLProtocols=http --report-unsupported-elements-at-runtime --initialize-at-build-time --no-server --verbose --no-fallback

FROM alpine
ENV GOLLY_PORT 3000
EXPOSE 3000

COPY --from=build /golly/golly-0.1.0-SNAPSHOT-standalone /bin/golly
RUN chmod +x /bin/golly
CMD ["/bin/golly"]