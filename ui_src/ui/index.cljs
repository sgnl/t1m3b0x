(ns ui.index
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]
                   [secretary.core :refer [defroute]])
  (:require [reagent.core :as reagent :refer [atom]]
            [ui.document-ready :as dom-ready :refer [init]]
            [secretary.core :as secretary]
            [alandipert.storage-atom :refer [local-storage]]))

(def local-state
  (local-storage
    (atom
      {:interval_duration 1500
       :active_theme_name "neon-sky"
       })
    :local-storage))
(def interval_duration (reagent/cursor local-state [:interval_duration]))
(def active_theme_name (reagent/cursor local-state [:active_theme_name]))

(def app-state
  (atom
    {:interface_is_locked false
     :duration 1499
     :interval_process nil
     :timer_is_active false
     :timer_is_paused false
     :available_themes ["neon-sky" "only-dreams" "pacific-high", "twitch" "michiko"]}))
(def duration (reagent/cursor app-state [:duration]))
(def interval_process (reagent/cursor app-state [:interval_process]))
(def timer_is_active (reagent/cursor app-state [:timer_is_active]))
(def timer_is_paused (reagent/cursor app-state [:timer_is_paused]))
(def available_themes (reagent/cursor app-state [:available_themes]))
(def interface_is_locked (reagent/cursor app-state [:interface_is_locked]))

(.addEventListener js/document
  "keyup"
  (fn [e]
    (when (= (.-code e) "Space")
      (swap! timer_is_paused not))))


(defn- str->int [s]
  #(js/parseInt s))

(defn calculate-percentage [] (.floor js/Math (* (/ @duration @interval_duration) 100)))

(defn get-seconds [duration] (mod duration 60))
(defn get-minutes [duration] (.floor js/Math (/ duration 60)))

(defn play-sound
  [type]
  (cond
    (= type "complete") (let [audio-file (js/Audio. "audio/lick_my_balls.wav")]
                          (set! (.-volume audio-file) 0.1)
                          (.play audio-file))
    :else (js/alert "SOMETHING!")))

(defn show-notification
  [title message-body]
  (new js/Notification. title (js-obj "body" message-body)))

(defn stop-timer
  []
  (.clearInterval js/window @interval_process)
  (reset! duration 0))

(defn start-timer
  []
  (swap! interval_process
    #(.setInterval js/window (fn []
      (if (= @timer_is_paused false)
        (swap! duration inc))
      (when (> @duration @interval_duration)
        (stop-timer)
        (swap! timer_is_active not)
        (show-notification "t1m3b0x" "interval complete")))
    1000)))

(defn toggle-interface-interaction
  []
  [:div.icn-unlocked
    {:data-toggle-icon-lock true
     :class (if (= @interface_is_locked false)
              "icn-unlocked"
              "icn-locked")
     :on-click (fn [e]
                 (.preventDefault e)
                 (.stopPropagation e)
                 (swap! interface_is_locked not)
                 (if (= @interface_is_locked true)
                   (do (secretary/dispatch! "/locked"))
                   (do (secretary/dispatch! "/"))))}])

(defn toggle-timer
  [e]
  (.preventDefault e)
  (if (= @timer_is_active false)
    (do
      (start-timer)
      (reset! timer_is_paused false))
    (do
      (stop-timer)))
  (swap! timer_is_active not))

(defn visor
  []
  [:div.visor
   {:class
      (when (= @timer_is_active true)
        (if (= @active_theme_name "")
          (swap! active_theme_name #(rand-nth @available_themes)))
        (str "active" " " (str "visor--" @active_theme_name)))
    :style
      {:top (str (calculate-percentage) "%")}}])

(defn pomodoro
  []
  [:section.ui
    [:h2.time
      [:span (get-minutes @duration)]
      [:span.smaller-text "m "]
      [:span (get-seconds @duration)]
      [:span.smaller-text "s"]]

    [:h2.percentage
      [:span (calculate-percentage)]
      [:span.smaller-text "%"]]])

;
; PARTIALS
;
;
(defn footer-timer
  []
  [:footer
   [:div.icn-cog
      {:on-click (fn [e]
        (.preventDefault e)
        (.stopPropagation e)
        (secretary/dispatch! "/locked"))}]
   [toggle-interface-interaction]])

(defn footer-locked
  []
  [:footer
    [:div.icn-cog
      {:on-click (fn [e]
        (.preventDefault e)
        (.stopPropagation e)
        (secretary/dispatch! "/"))}]
    [toggle-interface-interaction]])

;
; LAYOUTS
;
;
(defn ^:export timer
  []
  [:div.root
    {:on-click toggle-timer}
    ; [:canvas#circle-progress
    ;  {:width 220
    ;   :height 220
    ;   :data-progress-amount (calculate-percentage)}]
    [visor]
    [pomodoro]
    [footer-timer]])

(defn ^:export locked
  []
  [:div.root
    [visor]
    [pomodoro]
    [footer-locked]])
