(ns middleware.error-handling)

(defn get-response-from-error
  [error]
  {:status 500 :body {:status 500 :message "internal error" :type "internal"}})

(defn wrap-error-handling
  [handler]
  (fn [req]
    (try
      (handler req)
      (catch Exception e
        (get-response-from-error e)))))
