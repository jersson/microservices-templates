(ns api.controller
  (:require [core.information :as information]))

(defn about
  [req]
  (let [response (information/get-details)]
    {:status 200 :body response}))
