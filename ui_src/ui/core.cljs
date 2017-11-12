(ns ui.core
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [secretary.core :refer [defroute]])
  (:import goog.History)
  (:require [ui.index :as index :refer [timer config]]
            [reagent.core :as reagent :refer [atom]]
            [ui.document-ready :as dom-ready :refer [init]]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [secretary.core :as secretary]))

(enable-console-print!)

; this is document.ready stuff & misc scripts
(init)

(def app-state (atom {}))

(defn hook-browser-navigation! []
  (doto (History.)
    (events/listen
     EventType/NAVIGATE
     (fn [event]
       (secretary/dispatch! (.-token event))))
    (.setEnabled true)))

(defn app-routes []
  (secretary/set-config! :prefix "#")

  (defroute "/" []
    (swap! app-state assoc :page :timer))

  (defroute "/config" []
    (swap! app-state assoc :page :config))

  (hook-browser-navigation!))

(defmulti current-page #(@app-state :page))
(defmethod current-page :timer []
  [timer])
(defmethod current-page :config []
  [config])
(defmethod current-page :default []
  [:h1 "DEFAULT PAGE"])

(app-routes)
(reagent/render
  [current-page]
  (js/document.querySelector ".app-container"))
