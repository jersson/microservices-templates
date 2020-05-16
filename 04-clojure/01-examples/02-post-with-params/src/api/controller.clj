(ns api.controller
  (:require [core.books :as books]))

(defn buy-book
  [req]
  (let [id (get-in req [:body :bookId])
        quantity (get-in req [:body :bookQuantity])
        response (books/buy-book id quantity)]
    {:status 200 :body response}))
