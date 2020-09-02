(ns gollum.parsers)

(def rule-re #"B(\d*)/S(\d*)")

(defn parse-world [world-string]
  (loop [[s & rest] world-string
         x 0
         y 0
         w #{}]
    (if (nil? s)
      w
      (case s
        \0 (recur rest (inc x) y (conj w [x y]))
        \. (recur rest (inc x) y w)
        \newline (recur rest 0 (inc y) w)
        (recur rest x y w)))))

(defn parse-rules [rule-string]
  (if (re-matches rule-re rule-string)
    (let [[_ bs ss] (re-matches rule-re rule-string)
          c2d (fn [c] #?(:clj (java.lang.Character/digit c 10)
                         :cljs (js/parseInt c)))]
      [(into #{} (map c2d bs )) (into #{} (map c2d ss))])
    [#{} #{}]))