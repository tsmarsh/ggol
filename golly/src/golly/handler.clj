(ns golly.handler
  (:require
    [golly.gol :refer :all]
    [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def world (atom #{}))

(defroutes app-routes
           (GET "/" [] (pr-str @world))
           (PUT ["/:x/:y" :x #"[0-9]+" :y #"[0-9]+"] [x y] (pr-str (swap! world birth [(Integer/parseInt x) (Integer/parseInt y)])))
           (DELETE ["/:x/:y" :x #"[0-9]+" :y #"[0-9]+"] [x y] (pr-str (swap! world kill [(Integer/parseInt x) (Integer/parseInt y)])))
           (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes (update-in site-defaults [:security :anti-forgery] not)))
