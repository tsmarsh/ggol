(ns golly.core
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [golly.handler :refer [app]]
            [environ.core :refer [env]])
  (:gen-class))

(defn -main [& args]
  (run-jetty app {:port  (Integer/parseInt (env :golly-port))
                  :join? false}))