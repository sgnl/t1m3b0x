(ns ui.document-ready)

(defn turn-on-ui []
  (.addEventListener (.querySelector js/document ".icn-cog") "click" (fn [e]
    (.preventDefault e)
    (.stopPropagation e)
    (.alert js/window "ppp"))))

(defn onLoad []
  (turn-on-ui))

(defn init []
  (set! (.-onload js/window) onLoad))

