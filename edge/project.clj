(defproject edge "0.1.0-SNAPSHOT"
  :description "Returns the empty set for everything, representing the edge of the world"`
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [compojure "1.6.1"]
                 [ring/ring-defaults "0.3.2"]
                 [ring/ring-jetty-adapter "1.6.3"]
                 [environ "1.2.0"]]
  :plugins [[lein-ring "0.12.5"]
            [lein-cloverage "1.1.2"]]

  :ring {:handler chunk.handler/app}
  :main chunk.core
  :profiles
  {:dev     {:dependencies [[javax.servlet/servlet-api "2.5"]
                            [ring/ring-mock "0.3.2"]]}
   :uberjar {:aot :all}})
