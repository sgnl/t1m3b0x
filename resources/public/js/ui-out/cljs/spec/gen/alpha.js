// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35695 = arguments.length;
var i__27788__auto___35696 = (0);
while(true){
if((i__27788__auto___35696 < len__27787__auto___35695)){
args__27794__auto__.push((arguments[i__27788__auto___35696]));

var G__35697 = (i__27788__auto___35696 + (1));
i__27788__auto___35696 = G__35697;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35694){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35694));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35699 = arguments.length;
var i__27788__auto___35700 = (0);
while(true){
if((i__27788__auto___35700 < len__27787__auto___35699)){
args__27794__auto__.push((arguments[i__27788__auto___35700]));

var G__35701 = (i__27788__auto___35700 + (1));
i__27788__auto___35700 = G__35701;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35698){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35698));
});

var g_QMARK__35702 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35703 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35702){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35702))
,null));
var mkg_35704 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35702,g_35703){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35702,g_35703))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35702,g_35703,mkg_35704){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35702).call(null,x);
});})(g_QMARK__35702,g_35703,mkg_35704))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35702,g_35703,mkg_35704){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35704).call(null,gfn);
});})(g_QMARK__35702,g_35703,mkg_35704))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35702,g_35703,mkg_35704){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35703).call(null,generator);
});})(g_QMARK__35702,g_35703,mkg_35704))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35666__auto___35724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35666__auto___35724){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35725 = arguments.length;
var i__27788__auto___35726 = (0);
while(true){
if((i__27788__auto___35726 < len__27787__auto___35725)){
args__27794__auto__.push((arguments[i__27788__auto___35726]));

var G__35727 = (i__27788__auto___35726 + (1));
i__27788__auto___35726 = G__35727;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35724))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35724),args);
});})(g__35666__auto___35724))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35666__auto___35724){
return (function (seq35705){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35705));
});})(g__35666__auto___35724))
;


var g__35666__auto___35728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35666__auto___35728){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35729 = arguments.length;
var i__27788__auto___35730 = (0);
while(true){
if((i__27788__auto___35730 < len__27787__auto___35729)){
args__27794__auto__.push((arguments[i__27788__auto___35730]));

var G__35731 = (i__27788__auto___35730 + (1));
i__27788__auto___35730 = G__35731;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35728))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35728),args);
});})(g__35666__auto___35728))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35666__auto___35728){
return (function (seq35706){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35706));
});})(g__35666__auto___35728))
;


var g__35666__auto___35732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35666__auto___35732){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35733 = arguments.length;
var i__27788__auto___35734 = (0);
while(true){
if((i__27788__auto___35734 < len__27787__auto___35733)){
args__27794__auto__.push((arguments[i__27788__auto___35734]));

var G__35735 = (i__27788__auto___35734 + (1));
i__27788__auto___35734 = G__35735;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35732))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35732),args);
});})(g__35666__auto___35732))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35666__auto___35732){
return (function (seq35707){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35707));
});})(g__35666__auto___35732))
;


var g__35666__auto___35736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35666__auto___35736){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35737 = arguments.length;
var i__27788__auto___35738 = (0);
while(true){
if((i__27788__auto___35738 < len__27787__auto___35737)){
args__27794__auto__.push((arguments[i__27788__auto___35738]));

var G__35739 = (i__27788__auto___35738 + (1));
i__27788__auto___35738 = G__35739;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35736))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35736){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35736),args);
});})(g__35666__auto___35736))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35666__auto___35736){
return (function (seq35708){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35708));
});})(g__35666__auto___35736))
;


var g__35666__auto___35740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35666__auto___35740){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35741 = arguments.length;
var i__27788__auto___35742 = (0);
while(true){
if((i__27788__auto___35742 < len__27787__auto___35741)){
args__27794__auto__.push((arguments[i__27788__auto___35742]));

var G__35743 = (i__27788__auto___35742 + (1));
i__27788__auto___35742 = G__35743;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35740))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35740){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35740),args);
});})(g__35666__auto___35740))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35666__auto___35740){
return (function (seq35709){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35709));
});})(g__35666__auto___35740))
;


var g__35666__auto___35744 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35666__auto___35744){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35745 = arguments.length;
var i__27788__auto___35746 = (0);
while(true){
if((i__27788__auto___35746 < len__27787__auto___35745)){
args__27794__auto__.push((arguments[i__27788__auto___35746]));

var G__35747 = (i__27788__auto___35746 + (1));
i__27788__auto___35746 = G__35747;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35744))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35744){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35744),args);
});})(g__35666__auto___35744))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35666__auto___35744){
return (function (seq35710){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35710));
});})(g__35666__auto___35744))
;


var g__35666__auto___35748 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35666__auto___35748){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35749 = arguments.length;
var i__27788__auto___35750 = (0);
while(true){
if((i__27788__auto___35750 < len__27787__auto___35749)){
args__27794__auto__.push((arguments[i__27788__auto___35750]));

var G__35751 = (i__27788__auto___35750 + (1));
i__27788__auto___35750 = G__35751;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35748))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35748){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35748),args);
});})(g__35666__auto___35748))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35666__auto___35748){
return (function (seq35711){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35711));
});})(g__35666__auto___35748))
;


var g__35666__auto___35752 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35666__auto___35752){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35753 = arguments.length;
var i__27788__auto___35754 = (0);
while(true){
if((i__27788__auto___35754 < len__27787__auto___35753)){
args__27794__auto__.push((arguments[i__27788__auto___35754]));

var G__35755 = (i__27788__auto___35754 + (1));
i__27788__auto___35754 = G__35755;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35752))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35752){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35752),args);
});})(g__35666__auto___35752))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35666__auto___35752){
return (function (seq35712){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35712));
});})(g__35666__auto___35752))
;


var g__35666__auto___35756 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35666__auto___35756){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35757 = arguments.length;
var i__27788__auto___35758 = (0);
while(true){
if((i__27788__auto___35758 < len__27787__auto___35757)){
args__27794__auto__.push((arguments[i__27788__auto___35758]));

var G__35759 = (i__27788__auto___35758 + (1));
i__27788__auto___35758 = G__35759;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35756))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35756),args);
});})(g__35666__auto___35756))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35666__auto___35756){
return (function (seq35713){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35713));
});})(g__35666__auto___35756))
;


var g__35666__auto___35760 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35666__auto___35760){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35761 = arguments.length;
var i__27788__auto___35762 = (0);
while(true){
if((i__27788__auto___35762 < len__27787__auto___35761)){
args__27794__auto__.push((arguments[i__27788__auto___35762]));

var G__35763 = (i__27788__auto___35762 + (1));
i__27788__auto___35762 = G__35763;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35760))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35760),args);
});})(g__35666__auto___35760))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35666__auto___35760){
return (function (seq35714){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35714));
});})(g__35666__auto___35760))
;


var g__35666__auto___35764 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35666__auto___35764){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35765 = arguments.length;
var i__27788__auto___35766 = (0);
while(true){
if((i__27788__auto___35766 < len__27787__auto___35765)){
args__27794__auto__.push((arguments[i__27788__auto___35766]));

var G__35767 = (i__27788__auto___35766 + (1));
i__27788__auto___35766 = G__35767;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35764))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35764),args);
});})(g__35666__auto___35764))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35666__auto___35764){
return (function (seq35715){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35715));
});})(g__35666__auto___35764))
;


var g__35666__auto___35768 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35666__auto___35768){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35769 = arguments.length;
var i__27788__auto___35770 = (0);
while(true){
if((i__27788__auto___35770 < len__27787__auto___35769)){
args__27794__auto__.push((arguments[i__27788__auto___35770]));

var G__35771 = (i__27788__auto___35770 + (1));
i__27788__auto___35770 = G__35771;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35768))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35768),args);
});})(g__35666__auto___35768))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35666__auto___35768){
return (function (seq35716){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35716));
});})(g__35666__auto___35768))
;


var g__35666__auto___35772 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35666__auto___35772){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35773 = arguments.length;
var i__27788__auto___35774 = (0);
while(true){
if((i__27788__auto___35774 < len__27787__auto___35773)){
args__27794__auto__.push((arguments[i__27788__auto___35774]));

var G__35775 = (i__27788__auto___35774 + (1));
i__27788__auto___35774 = G__35775;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35772))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35772),args);
});})(g__35666__auto___35772))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35666__auto___35772){
return (function (seq35717){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35717));
});})(g__35666__auto___35772))
;


var g__35666__auto___35776 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35666__auto___35776){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35777 = arguments.length;
var i__27788__auto___35778 = (0);
while(true){
if((i__27788__auto___35778 < len__27787__auto___35777)){
args__27794__auto__.push((arguments[i__27788__auto___35778]));

var G__35779 = (i__27788__auto___35778 + (1));
i__27788__auto___35778 = G__35779;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35776))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35776),args);
});})(g__35666__auto___35776))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35666__auto___35776){
return (function (seq35718){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35718));
});})(g__35666__auto___35776))
;


var g__35666__auto___35780 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35666__auto___35780){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35781 = arguments.length;
var i__27788__auto___35782 = (0);
while(true){
if((i__27788__auto___35782 < len__27787__auto___35781)){
args__27794__auto__.push((arguments[i__27788__auto___35782]));

var G__35783 = (i__27788__auto___35782 + (1));
i__27788__auto___35782 = G__35783;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35780))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35780),args);
});})(g__35666__auto___35780))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35666__auto___35780){
return (function (seq35719){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35719));
});})(g__35666__auto___35780))
;


var g__35666__auto___35784 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35666__auto___35784){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35785 = arguments.length;
var i__27788__auto___35786 = (0);
while(true){
if((i__27788__auto___35786 < len__27787__auto___35785)){
args__27794__auto__.push((arguments[i__27788__auto___35786]));

var G__35787 = (i__27788__auto___35786 + (1));
i__27788__auto___35786 = G__35787;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35784))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35784),args);
});})(g__35666__auto___35784))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35666__auto___35784){
return (function (seq35720){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35720));
});})(g__35666__auto___35784))
;


var g__35666__auto___35788 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35666__auto___35788){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35789 = arguments.length;
var i__27788__auto___35790 = (0);
while(true){
if((i__27788__auto___35790 < len__27787__auto___35789)){
args__27794__auto__.push((arguments[i__27788__auto___35790]));

var G__35791 = (i__27788__auto___35790 + (1));
i__27788__auto___35790 = G__35791;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35788))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35788),args);
});})(g__35666__auto___35788))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35666__auto___35788){
return (function (seq35721){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35721));
});})(g__35666__auto___35788))
;


var g__35666__auto___35792 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35666__auto___35792){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35793 = arguments.length;
var i__27788__auto___35794 = (0);
while(true){
if((i__27788__auto___35794 < len__27787__auto___35793)){
args__27794__auto__.push((arguments[i__27788__auto___35794]));

var G__35795 = (i__27788__auto___35794 + (1));
i__27788__auto___35794 = G__35795;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35792))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35792),args);
});})(g__35666__auto___35792))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35666__auto___35792){
return (function (seq35722){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35722));
});})(g__35666__auto___35792))
;


var g__35666__auto___35796 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35666__auto___35796){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35797 = arguments.length;
var i__27788__auto___35798 = (0);
while(true){
if((i__27788__auto___35798 < len__27787__auto___35797)){
args__27794__auto__.push((arguments[i__27788__auto___35798]));

var G__35799 = (i__27788__auto___35798 + (1));
i__27788__auto___35798 = G__35799;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35666__auto___35796))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35666__auto___35796){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35666__auto___35796),args);
});})(g__35666__auto___35796))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35666__auto___35796){
return (function (seq35723){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35723));
});})(g__35666__auto___35796))
;

var g__35679__auto___35821 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35679__auto___35821){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35822 = arguments.length;
var i__27788__auto___35823 = (0);
while(true){
if((i__27788__auto___35823 < len__27787__auto___35822)){
args__27794__auto__.push((arguments[i__27788__auto___35823]));

var G__35824 = (i__27788__auto___35823 + (1));
i__27788__auto___35823 = G__35824;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35821))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35821){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35821);
});})(g__35679__auto___35821))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35679__auto___35821){
return (function (seq35800){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35800));
});})(g__35679__auto___35821))
;


var g__35679__auto___35825 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35679__auto___35825){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35826 = arguments.length;
var i__27788__auto___35827 = (0);
while(true){
if((i__27788__auto___35827 < len__27787__auto___35826)){
args__27794__auto__.push((arguments[i__27788__auto___35827]));

var G__35828 = (i__27788__auto___35827 + (1));
i__27788__auto___35827 = G__35828;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35825))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35825){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35825);
});})(g__35679__auto___35825))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35679__auto___35825){
return (function (seq35801){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35801));
});})(g__35679__auto___35825))
;


var g__35679__auto___35829 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35679__auto___35829){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35830 = arguments.length;
var i__27788__auto___35831 = (0);
while(true){
if((i__27788__auto___35831 < len__27787__auto___35830)){
args__27794__auto__.push((arguments[i__27788__auto___35831]));

var G__35832 = (i__27788__auto___35831 + (1));
i__27788__auto___35831 = G__35832;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35829))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35829){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35829);
});})(g__35679__auto___35829))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35679__auto___35829){
return (function (seq35802){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35802));
});})(g__35679__auto___35829))
;


var g__35679__auto___35833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35679__auto___35833){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35834 = arguments.length;
var i__27788__auto___35835 = (0);
while(true){
if((i__27788__auto___35835 < len__27787__auto___35834)){
args__27794__auto__.push((arguments[i__27788__auto___35835]));

var G__35836 = (i__27788__auto___35835 + (1));
i__27788__auto___35835 = G__35836;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35833))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35833){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35833);
});})(g__35679__auto___35833))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35679__auto___35833){
return (function (seq35803){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35803));
});})(g__35679__auto___35833))
;


var g__35679__auto___35837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35679__auto___35837){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35838 = arguments.length;
var i__27788__auto___35839 = (0);
while(true){
if((i__27788__auto___35839 < len__27787__auto___35838)){
args__27794__auto__.push((arguments[i__27788__auto___35839]));

var G__35840 = (i__27788__auto___35839 + (1));
i__27788__auto___35839 = G__35840;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35837))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35837){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35837);
});})(g__35679__auto___35837))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35679__auto___35837){
return (function (seq35804){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35804));
});})(g__35679__auto___35837))
;


var g__35679__auto___35841 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35679__auto___35841){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35842 = arguments.length;
var i__27788__auto___35843 = (0);
while(true){
if((i__27788__auto___35843 < len__27787__auto___35842)){
args__27794__auto__.push((arguments[i__27788__auto___35843]));

var G__35844 = (i__27788__auto___35843 + (1));
i__27788__auto___35843 = G__35844;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35841))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35841){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35841);
});})(g__35679__auto___35841))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35679__auto___35841){
return (function (seq35805){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});})(g__35679__auto___35841))
;


var g__35679__auto___35845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35679__auto___35845){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35846 = arguments.length;
var i__27788__auto___35847 = (0);
while(true){
if((i__27788__auto___35847 < len__27787__auto___35846)){
args__27794__auto__.push((arguments[i__27788__auto___35847]));

var G__35848 = (i__27788__auto___35847 + (1));
i__27788__auto___35847 = G__35848;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35845))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35845){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35845);
});})(g__35679__auto___35845))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35679__auto___35845){
return (function (seq35806){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35806));
});})(g__35679__auto___35845))
;


var g__35679__auto___35849 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35679__auto___35849){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35850 = arguments.length;
var i__27788__auto___35851 = (0);
while(true){
if((i__27788__auto___35851 < len__27787__auto___35850)){
args__27794__auto__.push((arguments[i__27788__auto___35851]));

var G__35852 = (i__27788__auto___35851 + (1));
i__27788__auto___35851 = G__35852;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35849))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35849){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35849);
});})(g__35679__auto___35849))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35679__auto___35849){
return (function (seq35807){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35807));
});})(g__35679__auto___35849))
;


var g__35679__auto___35853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35679__auto___35853){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35854 = arguments.length;
var i__27788__auto___35855 = (0);
while(true){
if((i__27788__auto___35855 < len__27787__auto___35854)){
args__27794__auto__.push((arguments[i__27788__auto___35855]));

var G__35856 = (i__27788__auto___35855 + (1));
i__27788__auto___35855 = G__35856;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35853))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35853){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35853);
});})(g__35679__auto___35853))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35679__auto___35853){
return (function (seq35808){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35808));
});})(g__35679__auto___35853))
;


var g__35679__auto___35857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35679__auto___35857){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35858 = arguments.length;
var i__27788__auto___35859 = (0);
while(true){
if((i__27788__auto___35859 < len__27787__auto___35858)){
args__27794__auto__.push((arguments[i__27788__auto___35859]));

var G__35860 = (i__27788__auto___35859 + (1));
i__27788__auto___35859 = G__35860;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35857))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35857){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35857);
});})(g__35679__auto___35857))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35679__auto___35857){
return (function (seq35809){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35809));
});})(g__35679__auto___35857))
;


var g__35679__auto___35861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35679__auto___35861){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35862 = arguments.length;
var i__27788__auto___35863 = (0);
while(true){
if((i__27788__auto___35863 < len__27787__auto___35862)){
args__27794__auto__.push((arguments[i__27788__auto___35863]));

var G__35864 = (i__27788__auto___35863 + (1));
i__27788__auto___35863 = G__35864;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35861))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35861){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35861);
});})(g__35679__auto___35861))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35679__auto___35861){
return (function (seq35810){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35810));
});})(g__35679__auto___35861))
;


var g__35679__auto___35865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35679__auto___35865){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35866 = arguments.length;
var i__27788__auto___35867 = (0);
while(true){
if((i__27788__auto___35867 < len__27787__auto___35866)){
args__27794__auto__.push((arguments[i__27788__auto___35867]));

var G__35868 = (i__27788__auto___35867 + (1));
i__27788__auto___35867 = G__35868;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35865))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35865){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35865);
});})(g__35679__auto___35865))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35679__auto___35865){
return (function (seq35811){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35811));
});})(g__35679__auto___35865))
;


var g__35679__auto___35869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35679__auto___35869){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35870 = arguments.length;
var i__27788__auto___35871 = (0);
while(true){
if((i__27788__auto___35871 < len__27787__auto___35870)){
args__27794__auto__.push((arguments[i__27788__auto___35871]));

var G__35872 = (i__27788__auto___35871 + (1));
i__27788__auto___35871 = G__35872;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35869))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35869){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35869);
});})(g__35679__auto___35869))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35679__auto___35869){
return (function (seq35812){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35812));
});})(g__35679__auto___35869))
;


var g__35679__auto___35873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35679__auto___35873){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35874 = arguments.length;
var i__27788__auto___35875 = (0);
while(true){
if((i__27788__auto___35875 < len__27787__auto___35874)){
args__27794__auto__.push((arguments[i__27788__auto___35875]));

var G__35876 = (i__27788__auto___35875 + (1));
i__27788__auto___35875 = G__35876;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35873))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35873){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35873);
});})(g__35679__auto___35873))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35679__auto___35873){
return (function (seq35813){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35813));
});})(g__35679__auto___35873))
;


var g__35679__auto___35877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35679__auto___35877){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35878 = arguments.length;
var i__27788__auto___35879 = (0);
while(true){
if((i__27788__auto___35879 < len__27787__auto___35878)){
args__27794__auto__.push((arguments[i__27788__auto___35879]));

var G__35880 = (i__27788__auto___35879 + (1));
i__27788__auto___35879 = G__35880;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35877))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35877){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35877);
});})(g__35679__auto___35877))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35679__auto___35877){
return (function (seq35814){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35814));
});})(g__35679__auto___35877))
;


var g__35679__auto___35881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35679__auto___35881){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35882 = arguments.length;
var i__27788__auto___35883 = (0);
while(true){
if((i__27788__auto___35883 < len__27787__auto___35882)){
args__27794__auto__.push((arguments[i__27788__auto___35883]));

var G__35884 = (i__27788__auto___35883 + (1));
i__27788__auto___35883 = G__35884;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35881))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35881){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35881);
});})(g__35679__auto___35881))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35679__auto___35881){
return (function (seq35815){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35815));
});})(g__35679__auto___35881))
;


var g__35679__auto___35885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35679__auto___35885){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35886 = arguments.length;
var i__27788__auto___35887 = (0);
while(true){
if((i__27788__auto___35887 < len__27787__auto___35886)){
args__27794__auto__.push((arguments[i__27788__auto___35887]));

var G__35888 = (i__27788__auto___35887 + (1));
i__27788__auto___35887 = G__35888;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35885))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35885){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35885);
});})(g__35679__auto___35885))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35679__auto___35885){
return (function (seq35816){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35816));
});})(g__35679__auto___35885))
;


var g__35679__auto___35889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35679__auto___35889){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35890 = arguments.length;
var i__27788__auto___35891 = (0);
while(true){
if((i__27788__auto___35891 < len__27787__auto___35890)){
args__27794__auto__.push((arguments[i__27788__auto___35891]));

var G__35892 = (i__27788__auto___35891 + (1));
i__27788__auto___35891 = G__35892;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35889))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35889){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35889);
});})(g__35679__auto___35889))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35679__auto___35889){
return (function (seq35817){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35817));
});})(g__35679__auto___35889))
;


var g__35679__auto___35893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35679__auto___35893){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35894 = arguments.length;
var i__27788__auto___35895 = (0);
while(true){
if((i__27788__auto___35895 < len__27787__auto___35894)){
args__27794__auto__.push((arguments[i__27788__auto___35895]));

var G__35896 = (i__27788__auto___35895 + (1));
i__27788__auto___35895 = G__35896;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35893))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35893){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35893);
});})(g__35679__auto___35893))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35679__auto___35893){
return (function (seq35818){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35818));
});})(g__35679__auto___35893))
;


var g__35679__auto___35897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35679__auto___35897){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35898 = arguments.length;
var i__27788__auto___35899 = (0);
while(true){
if((i__27788__auto___35899 < len__27787__auto___35898)){
args__27794__auto__.push((arguments[i__27788__auto___35899]));

var G__35900 = (i__27788__auto___35899 + (1));
i__27788__auto___35899 = G__35900;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35897))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35897){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35897);
});})(g__35679__auto___35897))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35679__auto___35897){
return (function (seq35819){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35819));
});})(g__35679__auto___35897))
;


var g__35679__auto___35901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35679__auto___35901){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35902 = arguments.length;
var i__27788__auto___35903 = (0);
while(true){
if((i__27788__auto___35903 < len__27787__auto___35902)){
args__27794__auto__.push((arguments[i__27788__auto___35903]));

var G__35904 = (i__27788__auto___35903 + (1));
i__27788__auto___35903 = G__35904;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35679__auto___35901))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35679__auto___35901){
return (function (args){
return cljs.core.deref.call(null,g__35679__auto___35901);
});})(g__35679__auto___35901))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35679__auto___35901){
return (function (seq35820){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35820));
});})(g__35679__auto___35901))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35907 = arguments.length;
var i__27788__auto___35908 = (0);
while(true){
if((i__27788__auto___35908 < len__27787__auto___35907)){
args__27794__auto__.push((arguments[i__27788__auto___35908]));

var G__35909 = (i__27788__auto___35908 + (1));
i__27788__auto___35908 = G__35909;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35905_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35905_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35906){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35906));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35910_SHARP_){
return (new Date(p1__35910_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map