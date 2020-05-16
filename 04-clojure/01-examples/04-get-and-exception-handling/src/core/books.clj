(ns core.books)

(defn get-all-books
  []
  ([{:title "Code Complete 2nd Edition"
    :author "Steve McConnell"
    :year 2004}
    {:title "Clean Code"
     :author "Robert C. Martin"
     :year 2008}
    {:title "The Last Lecture"
     :author "Randy Pausch"
     :year 2008}]
   (throw (Exception. "Error here!"))))
