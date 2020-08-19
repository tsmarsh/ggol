FROM oracle/graalvm-ce:latest

RUN gu install native-image
RUN yum install -y curl

RUN curl https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein > /usr/local/bin/lein

RUN chmod +x /usr/local/bin/lein

COPY build/profiles.clj .lein/profiles.clj

COPY src /golly/src
COPY resources /golly/resources
COPY test /golly/test
COPY project.clj /golly/project.clj

WORKDIR /golly
RUN lein deps
RUN lein test
RUN lein native-image

#FROM scratch
#ENV GOLLY_PORT 3000
#EXPOSE 3000
#
#COPY --from=build /golly/target/gooly /bin/golly
#ENTRYPOINT ["/bin/golly"]