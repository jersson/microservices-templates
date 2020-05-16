(ns core.books)

(defn buy-book
  [id quantity]
  (let [purcharse-info {:id id :quantity quantity}]
    purcharse-info))
