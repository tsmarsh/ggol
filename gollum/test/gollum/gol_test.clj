(ns gollum.gol-test
  (:require [clojure.test :refer :all]
            [gollum.gol :refer :all]
            [gollum.parsers :refer :all]))

(deftest testing-life-and-death
  (testing "a cell starts dead"
    (is (not (is-alive? #{} [0 0]))))

  (testing "we can bring a cell to life"
    (let [w (birth #{} [0 0])]
      (is (is-alive? w [0 0]))))

  (testing "we can kill a cell"
    (let [w (birth (birth #{} [0 0]) [0 1])
          d (kill w [0 0])]
      (is (is-alive? d [0 1])
          (not (is-alive? d [0 0]))))))

(deftest testing-neighbours
  (testing "can generate neighbours"
    (is (= [[2 2] [3 2] [4 2]
            [2 3] [4 3]
            [2 4] [3 4] [4 4]] (calc-neigbours [3 3]))))

  (testing "can count the number of neighbours"
    (let [g (parse-world "...
                          000
                          .0.")]
      (is (= 3 (count-neighbours g [1 1])))
      (is (= 2 (count-neighbours g [0 0])))
      (is (= 3 (count-neighbours g [0 2]))))))

(deftest testing-progression
  (testing "survival"
    (let [world (parse-world "...
                              000
                              ...")
          rules (parse-rules "B/S2")
          _ (prn-str "Rules: " rules)]
      (is (birth-survive? world [1 1] rules))
      (is (not (birth-survive? world [0 1] rules)))
      (is (not (birth-survive? world [0 0] rules)))))

    (testing "birth"
      (let [world (parse-world "...
                              000
                              ...")
            rules (parse-rules "B2/S")
            _ (prn-str "Rules: " rules)]
        (is (birth-survive? world [1 1] rules))
        (is (not (birth-survive? world [0 1] rules)))
        (is (birth-survive? world [0 0] rules))))

  (testing "simple game"
    (let [expected (parse-world "...
                           .0.
                           ...")
          start (parse-world "...
                               000
                               ...")
          rules (parse-rules "B/S2")]
      (is (= expected (step start rules 3 3))))))


