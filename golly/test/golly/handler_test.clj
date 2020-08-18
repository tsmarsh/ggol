(ns golly.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [golly.handler :refer :all]))

(deftest test-handler
  (testing "main route"
    (let [response (app (mock/request :get "/"))]
      (is (= (:status response) 200))
      (is (= (:body response) (str #{})))))

  (testing "not-found route"
    (let [response (app (mock/request :get "/invalid"))]
      (is (= (:status response) 404)))))
