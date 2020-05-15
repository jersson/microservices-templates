(ns core.books-test
  (:require [clojure.test :refer :all]
            [core.books :as books]))

(deftest get-all-books-test
  (testing "Should return the same books"
    (let [books
          [{:title "Code Complete 2nd Edition"
            :author "Steve McConnell"
            :year 2004}
           {:title "Clean Code"
            :author "Robert C. Martin"
            :year 2008}
           {:title "The Last Lecture"
            :author "Randy Pausch"
            :year 2008}]]
      (is (= (books/get-all-books) books)))))
