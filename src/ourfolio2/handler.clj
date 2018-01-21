(ns ourfolio2.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
			[cheshire.core :as json]))

(defroutes app-routes
  (GET "/" [] "Hello World")
  (GET "/miax" [] "Miaxheeeeeeeee")
  (GET "/json" []
    {:status 200
	 :headers {"Content-Type" "application/json; charset=utf-8"}
	 :body (json/generate-string {:name "miax" :status :smiling})
	}
  )
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
