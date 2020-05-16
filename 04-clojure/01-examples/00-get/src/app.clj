(ns app
  (:require [ring.middleware.json :refer [wrap-json-body
                                          wrap-json-response]]
            [api.routes :refer [root-handler]]))

(def app
  "Main Ring handler for the application"
  (-> root-handler
      wrap-json-response
      (wrap-json-body {:keywords? true})))
