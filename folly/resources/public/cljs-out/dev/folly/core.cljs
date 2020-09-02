(ns ^:figwheel-hooks folly.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [goog.dom :as gdom]
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [gollum.parsers :as gol]
    [cljs-http.client :as http]
    [cljs.core.async :refer [<!]]))

(defonce width 10)
(defonce height 10)

(defonce world-url "http://localhost/1/1/")

(def demo (gol/parse-world
                    "..........
                     ..........
                     ....000...
                     .....0....
                     ..........
                     .....0....
                     ....000...
                     ..........
                     ..........
                     .........."))

(defonce world (r/atom demo))

(go (let [response (<! (http/get (str world-url)
                                 {:with-credentials? false}))]
      (prn (:status response))
      (let [wrl (gol/parse-world (:body response))]
        (prn wrl)
        (reset! world wrl))))

(defn get-app-element []
  (gdom/getElement "app"))

(defn modify-cell [id verb]
  (let [x (-> id .-target (.getAttribute "x"))
        y (-> id .-target (.getAttribute "y"))
        url (str world-url x "/" y)]
    (println (str "modifying: " "\tx:" x "\ty:" y "\turl:" url))
    (go (let [response (<! (verb url))]
          (prn (:status response))
          (let [wrl (gol/parse-world (:body response))]
            (prn wrl)
            (reset! world wrl))))))

(defn birth-cell [id]
  (modify-cell id http/put))

(defn kill-cell [id]
  (modify-cell id http/delete))

(defn print-world []
  [:table (for [y (range height)]
            [:tr (for [x (range width)]
                   [:td [:button (let [base {:id (str "cell-" [x y])
                                             :x x
                                             :y y}]
                                   (if (contains? @world [x y])
                                      (merge base {:on-click kill-cell})
                                      (merge base {:on-click birth-cell})))
                         (if (contains? @world [x y]) [:text "0"] [:text "."])]])])])
(defn page []
  [:div
   [:h1 "Golly"]
   [:h3 "A super scalable game of life"]
   [:table (print-world)]])

(defn mount [el]
  (rdom/render [page] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
  )
