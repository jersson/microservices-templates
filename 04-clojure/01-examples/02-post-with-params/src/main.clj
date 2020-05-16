(ns main
  (:require [ring.adapter.jetty :refer [run-jetty]])
  (:gen-class))

(defn -main
  [& args]
  (run-jetty app {:port 3000}))
