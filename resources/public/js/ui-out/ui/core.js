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
var G__32901 = (new goog.History());
goog.events.listen(G__32901,goog.history.EventType.NAVIGATE,((function (G__32901){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32901))
);

G__32901.setEnabled(true);

return G__32901;
});
ui.core.app_routes = (function ui$core$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__30013__auto___32932 = (function (params__30014__auto__){
if(cljs.core.map_QMARK_.call(null,params__30014__auto__)){
var map__32917 = params__30014__auto__;
var map__32917__$1 = ((((!((map__32917 == null)))?((((map__32917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32917.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32917):map__32917);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"timer","timer",-1266967739));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30014__auto__)){
var vec__32919 = params__30014__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"timer","timer",-1266967739));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__30013__auto___32932);


var action__30013__auto___32933 = (function (params__30014__auto__){
if(cljs.core.map_QMARK_.call(null,params__30014__auto__)){
var map__32922 = params__30014__auto__;
var map__32922__$1 = ((((!((map__32922 == null)))?((((map__32922.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32922.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32922):map__32922);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"locked","locked",-1658763820));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30014__auto__)){
var vec__32924 = params__30014__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"locked","locked",-1658763820));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/locked",action__30013__auto___32933);


var action__30013__auto___32934 = (function (params__30014__auto__){
if(cljs.core.map_QMARK_.call(null,params__30014__auto__)){
var map__32927 = params__30014__auto__;
var map__32927__$1 = ((((!((map__32927 == null)))?((((map__32927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32927.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32927):map__32927);
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"config","config",994861415));
} else {
if(cljs.core.vector_QMARK_.call(null,params__30014__auto__)){
var vec__32929 = params__30014__auto__;
return cljs.core.swap_BANG_.call(null,ui.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"config","config",994861415));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/config",action__30013__auto___32934);


return ui.core.hook_browser_navigation_BANG_.call(null);
});
if(typeof ui.core.current_page !== 'undefined'){
} else {
ui.core.current_page = (function (){var method_table__27388__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__27389__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__27390__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__27391__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__27392__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"ui.core","current-page"),((function (method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__,hierarchy__27392__auto__){
return (function (){
return cljs.core.deref.call(null,ui.core.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397));
});})(method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__,hierarchy__27392__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__27392__auto__,method_table__27388__auto__,prefer_table__27389__auto__,method_cache__27390__auto__,cached_hierarchy__27391__auto__));
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