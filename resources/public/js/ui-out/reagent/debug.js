// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__27733__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27733 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27734__i = 0, G__27734__a = new Array(arguments.length -  0);
while (G__27734__i < G__27734__a.length) {G__27734__a[G__27734__i] = arguments[G__27734__i + 0]; ++G__27734__i;}
  args = new cljs.core.IndexedSeq(G__27734__a,0,null);
} 
return G__27733__delegate.call(this,args);};
G__27733.cljs$lang$maxFixedArity = 0;
G__27733.cljs$lang$applyTo = (function (arglist__27735){
var args = cljs.core.seq(arglist__27735);
return G__27733__delegate(args);
});
G__27733.cljs$core$IFn$_invoke$arity$variadic = G__27733__delegate;
return G__27733;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__27736__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__27736 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27737__i = 0, G__27737__a = new Array(arguments.length -  0);
while (G__27737__i < G__27737__a.length) {G__27737__a[G__27737__i] = arguments[G__27737__i + 0]; ++G__27737__i;}
  args = new cljs.core.IndexedSeq(G__27737__a,0,null);
} 
return G__27736__delegate.call(this,args);};
G__27736.cljs$lang$maxFixedArity = 0;
G__27736.cljs$lang$applyTo = (function (arglist__27738){
var args = cljs.core.seq(arglist__27738);
return G__27736__delegate(args);
});
G__27736.cljs$core$IFn$_invoke$arity$variadic = G__27736__delegate;
return G__27736;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map