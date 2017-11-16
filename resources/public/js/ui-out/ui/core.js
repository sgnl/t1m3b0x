// Compiled by ClojureScript 1.9.542 {}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('ui.index');
goog.require('reagent.core');
goog.require('ui.document_ready');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_.call(null);
ui.document_ready.init.call(null);
ui.core.app_state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
ui.core.hook_browser_navigation_BANG_ = (function ui$core$hook_browser_navigation_BANG_(){
var G__38342 = (new goog.History());
goog.events.listen(G__38342,goog.history.EventType.NAVIGATE,((function (G__38342){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__38342))
);

G__38342.setEnabled(true);

return G__38342;
});
ui.core.app_routes = (function ui$core$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__28761__auto___38373 = (function (params__28762__auto__){
if(cljs.core.map_QMARK_.call(null,params__28762__auto__)){
var map__38358 = params__28762__auto__;
var map__38358__$1 = ((((!((map__38358 == null)))?((((map__38358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38358.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38358):map__38358);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"timer","timer",-1266967739));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28762__auto__)){
var vec__38360 = params__28762__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"timer","timer",-1266967739));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__28761__auto___38373);


var action__28761__auto___38374 = (function (params__28762__auto__){
if(cljs.core.map_QMARK_.call(null,params__28762__auto__)){
var map__38363 = params__28762__auto__;
var map__38363__$1 = ((((!((map__38363 == null)))?((((map__38363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38363.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38363):map__38363);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"locked","locked",-1658763820));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28762__auto__)){
var vec__38365 = params__28762__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"locked","locked",-1658763820));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/locked",action__28761__auto___38374);


var action__28761__auto___38375 = (function (params__28762__auto__){
if(cljs.core.map_QMARK_.call(null,params__28762__auto__)){
var map__38368 = params__28762__auto__;
var map__38368__$1 = ((((!((map__38368 == null)))?((((map__38368.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38368.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38368):map__38368);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"config","config",994861415));
} else {
if(cljs.core.vector_QMARK_.call(null,params__28762__auto__)){
var vec__38370 = params__28762__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"config","config",994861415));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/config",action__28761__auto___38375);


return ui.core.hook_browser_navigation_BANG_.call(null);
});
if(typeof ui.core.current_page !== 'undefined'){
} else {
ui.core.current_page = (function (){var method_table__27607__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27608__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27609__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27610__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27611__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","current-page"),((function (method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__,hierarchy__27611__auto__){
return (function (){
return cljs.core.deref.call(null,ui.core.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__,hierarchy__27611__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27611__auto__,method_table__27607__auto__,prefer_table__27608__auto__,method_cache__27609__auto__,cached_hierarchy__27610__auto__));
})();
}
cljs.core._add_method.call(null,ui.core.current_page,new cljs.core.Keyword(null,"timer","timer",-1266967739),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.timer], null);
}));
cljs.core._add_method.call(null,ui.core.current_page,new cljs.core.Keyword(null,"config","config",994861415),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.config], null);
}));
cljs.core._add_method.call(null,ui.core.current_page,new cljs.core.Keyword(null,"locked","locked",-1658763820),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.locked], null);
}));
cljs.core._add_method.call(null,ui.core.current_page,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"DEFAULT PAGE"], null);
}));
ui.core.app_routes.call(null);
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.current_page], null),document.querySelector(".app-container"));

//# sourceMappingURL=core.js.map