// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
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
var or__26455__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
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
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_28236 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_28236){
return (function (){
var _STAR_always_update_STAR_28237 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28237;
}});})(_STAR_always_update_STAR_28236))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_28236;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
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
var args28238 = [];
var len__27568__auto___28241 = arguments.length;
var i__27569__auto___28242 = (0);
while(true){
if((i__27569__auto___28242 < len__27568__auto___28241)){
args28238.push((arguments[i__27569__auto___28242]));

var G__28243 = (i__27569__auto___28242 + (1));
i__27569__auto___28242 = G__28243;
continue;
} else {
}
break;
}

var G__28240 = args28238.length;
switch (G__28240) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args28238.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
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
reagent.ratom.flush_BANG_.call(null);

var seq__28249_28253 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__28250_28254 = null;
var count__28251_28255 = (0);
var i__28252_28256 = (0);
while(true){
if((i__28252_28256 < count__28251_28255)){
var v_28257 = cljs.core._nth.call(null,chunk__28250_28254,i__28252_28256);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28257);

var G__28258 = seq__28249_28253;
var G__28259 = chunk__28250_28254;
var G__28260 = count__28251_28255;
var G__28261 = (i__28252_28256 + (1));
seq__28249_28253 = G__28258;
chunk__28250_28254 = G__28259;
count__28251_28255 = G__28260;
i__28252_28256 = G__28261;
continue;
} else {
var temp__4657__auto___28262 = cljs.core.seq.call(null,seq__28249_28253);
if(temp__4657__auto___28262){
var seq__28249_28263__$1 = temp__4657__auto___28262;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28249_28263__$1)){
var c__27274__auto___28264 = cljs.core.chunk_first.call(null,seq__28249_28263__$1);
var G__28265 = cljs.core.chunk_rest.call(null,seq__28249_28263__$1);
var G__28266 = c__27274__auto___28264;
var G__28267 = cljs.core.count.call(null,c__27274__auto___28264);
var G__28268 = (0);
seq__28249_28253 = G__28265;
chunk__28250_28254 = G__28266;
count__28251_28255 = G__28267;
i__28252_28256 = G__28268;
continue;
} else {
var v_28269 = cljs.core.first.call(null,seq__28249_28263__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_28269);

var G__28270 = cljs.core.next.call(null,seq__28249_28263__$1);
var G__28271 = null;
var G__28272 = (0);
var G__28273 = (0);
seq__28249_28253 = G__28270;
chunk__28250_28254 = G__28271;
count__28251_28255 = G__28272;
i__28252_28256 = G__28273;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map