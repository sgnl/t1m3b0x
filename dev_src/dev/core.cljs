(ns dev.core
  (:require [figwheel.client :as fw :include-macros true]
            [ui.core]))

(fw/watch-and-reload
 :websocket-url   "ws://localhost:3448/figwheel-ws"
 :jsload-callback (fn [] (print "reloaded")))
