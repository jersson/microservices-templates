(ns core.information
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]))

(defn- load-edn
  "Load edn from an io/reader source (filename or io/resource)."
  [source]
  (with-open [r (io/reader source)]
    (edn/read (java.io.PushbackReader. r))))

(defn get-details
  []
  (load-edn "resources/information.edn"))
