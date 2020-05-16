(ns api.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [api.controller :as controller]))

(defroutes root-handler
  (POST "/checkout/books" [] controller/buy-book))
