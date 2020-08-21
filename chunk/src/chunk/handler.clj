(ns chunk.handler
  (:require
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def world (atom #{}))

(defroutes app-routes
           (GET "*" [] (pr-str @world))
           (route/not-found (pr-str @world)))

(def app
  (wrap-defaults app-routes (update-in site-defaults [:security :anti-forgery] not)))
