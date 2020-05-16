(ns api.controller
  (:require [core.books :as books]))

(defn books
  [req]
  (let [id (get-in req [:params :id])
        response (books/get-book id)]
    {:status 200 :body response}))
