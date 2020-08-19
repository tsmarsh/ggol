(defproject golly "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [environ "1.2.0"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-cloverage "1.1.2"]
            [io.taylorwood/lein-native-image "0.3.1"]]

  :native-image {:jvm-opts  ["-Dclojure.compiler.direct-linking=true"]
                 :opts      ["-H:EnableURLProtocols=http"
                             "--report-unsupported-elements-at-runtime" ;; ignore native-image build errors
                             "--initialize-at-build-time"
                             "--no-server"
                             "--verbose"
                             "--no-fallback"]
                 :name      "golly"}

  :ring {:handler golly.handler/app}
  :main golly.core
  :profiles
  {:dev     {:dependencies [[javax.servlet/servlet-api "2.5"]
                            [ring/ring-mock "0.3.2"]]}
   :uberjar {:aot :all}})
