(ns ui.document-ready)

(defn turn-on-ui
  []
  )

(defn onLoad [] (turn-on-ui))

(defn init [] (set! (.-onload js/window) onLoad))

