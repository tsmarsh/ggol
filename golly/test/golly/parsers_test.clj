(ns golly.parsers-test
  (:require
    [golly.parsers :refer :all]
    [golly.gol :refer [is-alive?]]
    [clojure.test :refer :all]))

(deftest testing-parsing
         (testing "Any live cell with two or three live neighbours survive"
                  (let [g (parse-world "...
                          .0.
                          ...")]
                    (is (is-alive? g [1 1]))))

         (testing "parsing the rules"
                  (let [[bs ss] (parse-rules "B3/S23")]
                    (is (contains? bs 3))
                    (is (contains? ss 2))
                    (is (contains? ss 3))))
         (testing "parsing the rules"
           (let [[bs ss] (parse-rules "B/S23")]
             (is (empty? bs))
             (is (contains? ss 2))
             (is (contains? ss 3))))
         
         (testing "parsing the rules"
           (let [[bs ss] (parse-rules "B3/S")]
             (is (contains? bs 3))
             (is (empty? ss))))

         (testing "parsing rubbish"
           (let [[bs ss] (parse-rules "NOT VALID")]
             (is (empty? bs))
             (is (empty? ss)))))