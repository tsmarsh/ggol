(ns golly.handler
  (:require
    [golly.gol :refer :all]
    [golly.parsers :refer :all]
    [compojure.core :refer :all]
    [compojure.route :as route]
    [ring.middleware.defaults :refer [wrap-defaults site-defaults]]))

(def history (atom []))
(def world (atom #{}))
(def rules (atom (parse-rules "B3/S23")))
(def width 10)
(def height 10)

(defn process []
  (swap! history conj @world)
  (swap! world step @rules width height))

(defroutes app-routes
           (GET "/:wx/:wy" [_ _] (pr-str @world))
           (GET "/:wx/:wy/next" [_ _] (pr-str (process)))
           (GET ["/:wx/:wy/:i" :i #"[0-9]+"] [_ _ i] (pr-str (@history (Integer/parseInt i))))
           (PUT ["/:wx/:wy/:x/:y" :x #"[0-9]+" :y #"[0-9]+"] [_ _ x y] (pr-str (swap! world birth [(Integer/parseInt x) (Integer/parseInt y)])))
           (DELETE ["/:wx/:wy/:x/:y" :x #"[0-9]+" :y #"[0-9]+"] [_ _ x y] (pr-str (swap! world kill [(Integer/parseInt x) (Integer/parseInt y)])))
           (route/not-found "#{}"))

(def app
  (wrap-defaults app-routes (update-in site-defaults [:security :anti-forgery] not)))


