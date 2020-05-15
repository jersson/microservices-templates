(ns api.controller
  (:require [core.books :as books]))

(defn books
  [req]
  (let [response (books/get-all-books)]
    {:status 200 :body response}))
