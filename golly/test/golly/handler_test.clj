(ns golly.handler-test
  (:require [clojure.test :refer :all]
            [ring.mock.request :as mock]
            [golly.handler :refer :all]))

(deftest test-handler
  (testing "main route"
    (do
      (reset! golly.handler/world #{})
      (let [response (app (mock/request :get "/"))]
        (is (= (:status response) 200))
        (is (= (:body response) (str #{}))))))

  (testing "not-found route"
    (do
      (reset! golly.handler/world #{})
      (let [response (app (mock/request :get "/invalid"))]
        (is (= (:status response) 404)))))

  (testing "birthing cells"
    (do
      (reset! golly.handler/world #{})
      (app (mock/request :put "/0/0"))
      (app (mock/request :put "/0/1"))
      (let [response (app (mock/request :get "/"))]
        (is (= (:body response) (str #{[0 0] [0 1]}))))))

  (testing "testing next"
    (do
      (reset! golly.handler/world #{})
      (app (mock/request :put "/0/0"))
      (app (mock/request :put "/0/1"))
      (app (mock/request :put "/0/2"))
      (let [response (app (mock/request :get "/next"))
            response2 (app (mock/request :get "/"))
            response3 (app (mock/request :get "/0"))]
        (is (= (:body response) (str #{[1 1] [0 1]})))
        (is (= (:body response2) (str #{[1 1] [0 1]})))
        (is (= (:body response3)) (str #{[0 0] [0 1]}))))))
