// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('ui.document_ready');
goog.require('cljs.core');
goog.require('cljs.core.constants');
ui.document_ready.turn_on_ui = (function ui$document_ready$turn_on_ui(){
return null;
});
ui.document_ready.onLoad = (function ui$document_ready$onLoad(){
return ui.document_ready.turn_on_ui();
});
ui.document_ready.init = (function ui$document_ready$init(){
return window.onload = ui.document_ready.onLoad;
});
