(ns app
  (:require [ring.middleware.json :refer [wrap-json-body
                                          wrap-json-response]]
            [middleware.logging :refer [wrap-logging]]
            [middleware.error-handling :refer [wrap-error-handling]]
            [api.routes :refer [root-handler]]))

(def app
  "Main Ring handler for the application"
  (-> root-handler
      wrap-logging
      wrap-error-handling
      wrap-json-response
      (wrap-json-body {:keywords? true})))
