(ns api.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [api.controller :as controller]))

(defroutes root-handler
  (GET "/about" [] controller/about))
