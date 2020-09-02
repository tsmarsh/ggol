(defproject tailoredshapes/golly "0.1.0"
  :description "API over a game of life"
  :license "MIT"
  :deploy-repositories [["releases" :clojars]
                        ["snapshots" :clojars]]
  :url "http://github.com/gol"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [environ "1.2.0"]
                 [tailoredshapes/gollum "0.1.0"]
                 [ring-logger "1.0.1"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-cloverage "1.1.2"]]

  :ring {:handler golly.handler/app}
  :main golly.core
  :profiles
  {:dev     {:dependencies [[javax.servlet/servlet-api "2.5"]
                            [ring/ring-mock "0.3.2"]]}
   :uberjar {:aot :all}})
