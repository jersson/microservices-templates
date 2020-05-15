(ns middleware.logging
  (:require [ring.logger]
            [taoensso.timbre :as timbre]))

(defn log-fn
  [{:keys [level throwable message] :as error}]
 ; TODO: Pending to write the format requested
  (if throwable
    (timbre/log level throwable error)
    (timbre/log level message)))

(defn wrap-logging
  [handler]
  (ring.logger/wrap-with-logger handler {:log-fn log-fn}))
