(ns api.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [api.controller :as controller]))

(defn bad-request
  [req]
  (throw (Exception. "bad-request")))

(defroutes root-handler
  (GET "/books" [] controller/books)
  (route/not-found bad-request))
