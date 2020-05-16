(defproject app "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring "1.7.1"]
                 [ring/ring-json "0.4.0"]
                 [ring-logger "1.0.1"]
                 [compojure "1.6.1"]]
  :plugins [[lein-ring "0.12.5"]]
  :ring {:handler app/app
         :auto-reload? true})
