(ns electron.core)

(def electron       (js/require "electron"))
(def app            (.-app electron))
(def browser-window (.-BrowserWindow electron))
(def crash-reporter (.-crashReporter electron))

(def main-window (atom nil))

(defn init-browser []
  (reset! main-window (browser-window.
                        (clj->js {:minWidth 275
                                  :minHeight 275
                                  :width 275
                                  :height 275
                                  :frame false
                                  :alwaysOnTop false
                                  :resizable true})))
  ; Path is relative to the compiled js file (main.js in our case)
  (.loadURL ^js/electron.BrowserWindow @main-window (str "file://" js/__dirname "/public/index.html"))
  (.on ^js/electron.BrowserWindow @main-window "closed" #(reset! main-window nil)))

; CrashReporter can just be omitted
(.start crash-reporter
        (clj->js
          {:companyName "Meat Popsicle "
           :productName "t1m3b0x"
           :submitURL "https://example.com/submit-url"
           :autoSubmit false}))

(.on app "window-all-closed" #(when-not (= js/process.platform "darwin")
                                (.quit app)))
(.on app "ready" init-browser)
