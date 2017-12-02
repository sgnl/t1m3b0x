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
       :random_background false
       :sound_alert_path "audio/lick_my_balls.wav"
       :sound_alert_volume 0.5
       })
    :local-storage))
(def interval_duration (reagent/cursor local-state [:interval_duration]))
(def active_theme_name (reagent/cursor local-state [:active_theme_name]))
(def random_background (reagent/cursor local-state [:random_background]))
(def sound_alert_path (reagent/cursor local-state [:sound_alert_path]))
(def sound_alert_volume (reagent/cursor local-state [:sound_alert_volume]))

(def app-state
  (atom
    {:interface_is_locked false
     :duration 0
     :interval_process nil
     :timer_is_active false
     :timer_is_paused false
     :available_themes ["neon-sky" "only-dreams" "pacific-high", "twitch" "michiko" "monte-carlo"]}))
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
    (= type "complete") (let [audio-file (js/Audio. @sound_alert_path)]
                          (set! (.-volume audio-file) @sound_alert_volume)
                          (.play audio-file))
    :else (js/alert "SOMETHING!")))

(defn show-notification
  [title message-body]
  (new js/Notification. title (js-obj "body" message-body))
  (.setTimeout js/window (fn [e]
                          (play-sound "complete")) 500))

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
        (when (= @interface_is_locked true)
          (swap! interface_is_locked not))
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
                 (swap! interface_is_locked not))}])

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
        (if (or (= @active_theme_name "") (= @random_background true))
          (swap! active_theme_name
            #(rand-nth (remove
              (fn
                [name]
                (= name @active_theme_name)) @available_themes))))
          (reset! random_background false)
        (str "active" " " (str "visor--" @active_theme_name)))
    :style
      {:top (str (calculate-percentage) "%")}}])

(defn draggable-area
  []
  [:div.draggable-area
   {:class (when (= @interface_is_locked true)
             "draggable-area-full")
    :on-click (fn [e]
                (.preventDefault e)
                (.stopPropagation e))}])

(defn decrease-interval-duration
  []
  (when (> @interval_duration 60)
    (swap! interval_duration #(- @interval_duration 60))))

(defn increase-interval-duration
  []
  (when (< @interval_duration 3600)
    (swap! interval_duration #(+ @interval_duration 60))))

(defn interval-panel
  []
  [:section.ui
    [draggable-area]
    [:h2.time
      [:span (get-minutes @duration)]
      [:span.smaller-text "m "]
      [:span (get-seconds @duration)]
      [:span.smaller-text "s"]]

    [:h2.percentage
      [:span (calculate-percentage)]
      [:span.smaller-text "%"]]])

(defn config-panel
  []
  [:div.config-panel
    [:div.interval-settings
      [:div.button.symbol
        {:on-click
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (decrease-interval-duration))}
        "-"]
      [:div.label-and-value-group
       [:p.label "INTERVAL"]
       [:p.label-value (str (get-minutes @interval_duration) "mins")]]
      [:div.button.symbol
        {:on-click
          (fn [e]
            (.preventDefault e)
            (.stopPropagation e)
            (increase-interval-duration))}
        "+"]]
    [:div.button.rng-bg
      {:on-click
        (fn [e]
          (.preventDefault e)
          (.stopPropagation e)
          (swap! random_background not))
       :on-mouseOver
         (fn [e]
           (.preventDefault e)
           (.stopPropagation e)
           )}
      "random bg"]
    [:div.volume
     [:label.button.icn-bullhorn
      [:input.input-alert-file
      {:type "file"
       :accept "audio/*"
       :on-change
         (fn [e]
           (.preventDefault e)
           (.stopPropagation e)
           (reset! sound_alert_path (.-path (aget (.-files (.-target e)) "0")))
           )}]]
     [:input.bullhorn-slider
      {:type "range"
       :min 0
       :max 10
       :value (* @sound_alert_volume 10)
       :on-change
         (fn [e]
           (.preventDefault e)
           (.stopPropagation e)
           (reset! sound_alert_volume (/ (.-value (.-target e)) 10))
           )}]]
;    [:div.interval-settings
;      [:div.button.symbol
;        {:on-click
;          (fn [e]
;            (.preventDefault e)
;            (.stopPropagation e)
;            (swap! random_background not))}
;        "-"]
;      [:p "break"]
;      [:div.button.symbol
;        {:on-click
;          (fn [e]
;            (.preventDefault e)
;            (.stopPropagation e)
;            (swap! random_background not))}
;        "+"]]
    ])

(defn config_button
  []
  [:div.icn-cog
      {:on-click (fn [e]
        (.preventDefault e)
        (.stopPropagation e)
        (secretary/dispatch! "/config"))}])

(defn back_button
  []
  [:div.icn-chevron-left
      {:on-click (fn [e]
        (.preventDefault e)
        (.stopPropagation e)
        (secretary/dispatch! "/"))}])

;
; PARTIALS
;
;
(defn footer-timer
  []
  [:footer
   [config_button]
   [toggle-interface-interaction]])


(defn footer-locked
  []
  [:footer
    [config_button]
    [toggle-interface-interaction]])

(defn footer-config
  []
  [:footer
    [back_button]
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
    [interval-panel]
    [footer-timer]])

(defn ^:export config
  []
  [:div.root
   [visor]
   ;[:h1.panel-name "config"]
   [config-panel]
   [footer-config]])
