(ns chunk.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [chunk.handler :refer [app]]
            [environ.core :refer [env]])
  (:gen-class))

(defn -main [& args]
  (run-jetty app {:port  (env :chunk_port)
                  :join? false}))