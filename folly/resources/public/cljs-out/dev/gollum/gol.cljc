(ns gollum.gol
  (:require [clojure.set :as st]))

(def neighbours [[-1 -1] [0 -1] [1 -1]
                 [-1 0] [1 0]
                 [-1 1] [0 1] [1 1]])

(defn is-alive? [world coord]
  (contains? world coord))

(defn birth [world coord]
  (conj world coord))

(defn kill [world coord]
  (disj world coord))

(defn calc-neigbours [coord]
  (map #(map (partial apply +)
             (map vector coord %))
       neighbours))

(defn count-neighbours [world coord]
  (count (st/intersection world (into #{} (calc-neigbours coord)))))

(defn build-grid [width height]
  (mapcat (fn [y] (map (fn [x] [x y]) (range width))) (range height)))

(defn birth-survive? [world coord [B S]]
  (let [cnt (count-neighbours world coord)]
    (or
      (contains? B cnt)
      (and (contains? S cnt) (is-alive? world coord)))))

(defn step [world rules width height]
  (let [grid (build-grid width height)]
    (reduce (fn [newWorld coord]
              (if (birth-survive? world coord rules)
                (conj newWorld coord)
                newWorld))
            #{} grid)))