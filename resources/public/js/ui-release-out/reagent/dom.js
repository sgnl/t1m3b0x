// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__6894__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__6894__auto__)){
return or__6894__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = (function (){var G__12046 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12046) : cljs.core.atom.call(null,G__12046));
})();
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module()["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_12049 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module()["render"])((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,((function (_STAR_always_update_STAR_12049){
return (function (){
var _STAR_always_update_STAR_12050 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render();

if(!((callback == null))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12050;
}});})(_STAR_always_update_STAR_12049))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_12049;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args12051 = [];
var len__8007__auto___12054 = arguments.length;
var i__8008__auto___12055 = (0);
while(true){
if((i__8008__auto___12055 < len__8007__auto___12054)){
args12051.push((arguments[i__8008__auto___12055]));

var G__12056 = (i__8008__auto___12055 + (1));
i__8008__auto___12055 = G__12056;
continue;
} else {
}
break;
}

var G__12053 = args12051.length;
switch (G__12053) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12051.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_();

var f = (function (){
return reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module()["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__12062_12066 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.dom.roots) : cljs.core.deref.call(null,reagent.dom.roots))));
var chunk__12063_12067 = null;
var count__12064_12068 = (0);
var i__12065_12069 = (0);
while(true){
if((i__12065_12069 < count__12064_12068)){
var v_12070 = chunk__12063_12067.cljs$core$IIndexed$_nth$arity$2(null,i__12065_12069);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12070);

var G__12071 = seq__12062_12066;
var G__12072 = chunk__12063_12067;
var G__12073 = count__12064_12068;
var G__12074 = (i__12065_12069 + (1));
seq__12062_12066 = G__12071;
chunk__12063_12067 = G__12072;
count__12064_12068 = G__12073;
i__12065_12069 = G__12074;
continue;
} else {
var temp__4657__auto___12075 = cljs.core.seq(seq__12062_12066);
if(temp__4657__auto___12075){
var seq__12062_12076__$1 = temp__4657__auto___12075;
if(cljs.core.chunked_seq_QMARK_(seq__12062_12076__$1)){
var c__7713__auto___12077 = cljs.core.chunk_first(seq__12062_12076__$1);
var G__12078 = cljs.core.chunk_rest(seq__12062_12076__$1);
var G__12079 = c__7713__auto___12077;
var G__12080 = cljs.core.count(c__7713__auto___12077);
var G__12081 = (0);
seq__12062_12066 = G__12078;
chunk__12063_12067 = G__12079;
count__12064_12068 = G__12080;
i__12065_12069 = G__12081;
continue;
} else {
var v_12082 = cljs.core.first(seq__12062_12076__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(reagent.dom.re_render_component,v_12082);

var G__12083 = cljs.core.next(seq__12062_12076__$1);
var G__12084 = null;
var G__12085 = (0);
var G__12086 = (0);
seq__12062_12066 = G__12083;
chunk__12063_12067 = G__12084;
count__12064_12068 = G__12085;
i__12065_12069 = G__12086;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
