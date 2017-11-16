// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('ui.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.History');
goog.require('ui.index');
goog.require('reagent.core');
goog.require('ui.document_ready');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('secretary.core');
cljs.core.enable_console_print_BANG_();
ui.document_ready.init();
ui.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
ui.core.hook_browser_navigation_BANG_ = (function ui$core$hook_browser_navigation_BANG_(){
var G__13711 = (new goog.History());
var G__13712_13715 = G__13711;
var G__13713_13716 = goog.history.EventType.NAVIGATE;
var G__13714_13717 = ((function (G__13712_13715,G__13713_13716,G__13711){
return (function (event){
return secretary.core.dispatch_BANG_(event.token);
});})(G__13712_13715,G__13713_13716,G__13711))
;
goog.events.listen(G__13712_13715,G__13713_13716,G__13714_13717);

G__13711.setEnabled(true);

return G__13711;
});
ui.core.app_routes = (function ui$core$app_routes(){
secretary.core.set_config_BANG_(cljs.core.cst$kw$prefix,"#");

var action__12220__auto___13748 = (function (params__12221__auto__){
if(cljs.core.map_QMARK_(params__12221__auto__)){
var map__13733 = params__12221__auto__;
var map__13733__$1 = ((((!((map__13733 == null)))?((((map__13733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13733.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13733):map__13733);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$timer);
} else {
if(cljs.core.vector_QMARK_(params__12221__auto__)){
var vec__13735 = params__12221__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$timer);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/",action__12220__auto___13748);


var action__12220__auto___13749 = (function (params__12221__auto__){
if(cljs.core.map_QMARK_(params__12221__auto__)){
var map__13738 = params__12221__auto__;
var map__13738__$1 = ((((!((map__13738 == null)))?((((map__13738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13738.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13738):map__13738);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$locked);
} else {
if(cljs.core.vector_QMARK_(params__12221__auto__)){
var vec__13740 = params__12221__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$locked);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/locked",action__12220__auto___13749);


var action__12220__auto___13750 = (function (params__12221__auto__){
if(cljs.core.map_QMARK_(params__12221__auto__)){
var map__13743 = params__12221__auto__;
var map__13743__$1 = ((((!((map__13743 == null)))?((((map__13743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13743):map__13743);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$config);
} else {
if(cljs.core.vector_QMARK_(params__12221__auto__)){
var vec__13745 = params__12221__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.core.app_state,cljs.core.assoc,cljs.core.cst$kw$page,cljs.core.cst$kw$config);
} else {
return null;
}
}
});
secretary.core.add_route_BANG_("/config",action__12220__auto___13750);


return ui.core.hook_browser_navigation_BANG_();
});
if(typeof ui.core.current_page !== 'undefined'){
} else {
ui.core.current_page = (function (){var method_table__7827__auto__ = (function (){var G__13751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13751) : cljs.core.atom.call(null,G__13751));
})();
var prefer_table__7828__auto__ = (function (){var G__13752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13752) : cljs.core.atom.call(null,G__13752));
})();
var method_cache__7829__auto__ = (function (){var G__13753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13753) : cljs.core.atom.call(null,G__13753));
})();
var cached_hierarchy__7830__auto__ = (function (){var G__13754 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13754) : cljs.core.atom.call(null,G__13754));
})();
var hierarchy__7831__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("ui.core","current-page"),((function (method_table__7827__auto__,prefer_table__7828__auto__,method_cache__7829__auto__,cached_hierarchy__7830__auto__,hierarchy__7831__auto__){
return (function (){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ui.core.app_state) : cljs.core.deref.call(null,ui.core.app_state)).call(null,cljs.core.cst$kw$page);
});})(method_table__7827__auto__,prefer_table__7828__auto__,method_cache__7829__auto__,cached_hierarchy__7830__auto__,hierarchy__7831__auto__))
,cljs.core.cst$kw$default,hierarchy__7831__auto__,method_table__7827__auto__,prefer_table__7828__auto__,method_cache__7829__auto__,cached_hierarchy__7830__auto__));
})();
}
ui.core.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$timer,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.timer], null);
}));
ui.core.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$config,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.config], null);
}));
ui.core.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$locked,(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.index.locked], null);
}));
ui.core.current_page.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"DEFAULT PAGE"], null);
}));
ui.core.app_routes();
reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.core.current_page], null),document.querySelector(".app-container"));
