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
var len__27787__auto___35694 = arguments.length;
var i__27788__auto___35695 = (0);
while(true){
if((i__27788__auto___35695 < len__27787__auto___35694)){
args__27794__auto__.push((arguments[i__27788__auto___35695]));

var G__35696 = (i__27788__auto___35695 + (1));
i__27788__auto___35695 = G__35696;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35693){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35693));
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
var len__27787__auto___35698 = arguments.length;
var i__27788__auto___35699 = (0);
while(true){
if((i__27788__auto___35699 < len__27787__auto___35698)){
args__27794__auto__.push((arguments[i__27788__auto___35699]));

var G__35700 = (i__27788__auto___35699 + (1));
i__27788__auto___35699 = G__35700;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35697){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35697));
});

var g_QMARK__35701 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35702 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35701){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35701))
,null));
var mkg_35703 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35701,g_35702){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35701,g_35702))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35701,g_35702,mkg_35703){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35701).call(null,x);
});})(g_QMARK__35701,g_35702,mkg_35703))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35701,g_35702,mkg_35703){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35703).call(null,gfn);
});})(g_QMARK__35701,g_35702,mkg_35703))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35701,g_35702,mkg_35703){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35702).call(null,generator);
});})(g_QMARK__35701,g_35702,mkg_35703))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35665__auto___35723 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35665__auto___35723){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35724 = arguments.length;
var i__27788__auto___35725 = (0);
while(true){
if((i__27788__auto___35725 < len__27787__auto___35724)){
args__27794__auto__.push((arguments[i__27788__auto___35725]));

var G__35726 = (i__27788__auto___35725 + (1));
i__27788__auto___35725 = G__35726;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35723))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35723){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35723),args);
});})(g__35665__auto___35723))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35665__auto___35723){
return (function (seq35704){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35704));
});})(g__35665__auto___35723))
;


var g__35665__auto___35727 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35665__auto___35727){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35728 = arguments.length;
var i__27788__auto___35729 = (0);
while(true){
if((i__27788__auto___35729 < len__27787__auto___35728)){
args__27794__auto__.push((arguments[i__27788__auto___35729]));

var G__35730 = (i__27788__auto___35729 + (1));
i__27788__auto___35729 = G__35730;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35727))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35727){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35727),args);
});})(g__35665__auto___35727))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35665__auto___35727){
return (function (seq35705){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35705));
});})(g__35665__auto___35727))
;


var g__35665__auto___35731 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35665__auto___35731){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35732 = arguments.length;
var i__27788__auto___35733 = (0);
while(true){
if((i__27788__auto___35733 < len__27787__auto___35732)){
args__27794__auto__.push((arguments[i__27788__auto___35733]));

var G__35734 = (i__27788__auto___35733 + (1));
i__27788__auto___35733 = G__35734;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35731))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35731){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35731),args);
});})(g__35665__auto___35731))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35665__auto___35731){
return (function (seq35706){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35706));
});})(g__35665__auto___35731))
;


var g__35665__auto___35735 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35665__auto___35735){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35736 = arguments.length;
var i__27788__auto___35737 = (0);
while(true){
if((i__27788__auto___35737 < len__27787__auto___35736)){
args__27794__auto__.push((arguments[i__27788__auto___35737]));

var G__35738 = (i__27788__auto___35737 + (1));
i__27788__auto___35737 = G__35738;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35735))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35735){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35735),args);
});})(g__35665__auto___35735))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35665__auto___35735){
return (function (seq35707){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35707));
});})(g__35665__auto___35735))
;


var g__35665__auto___35739 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35665__auto___35739){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35740 = arguments.length;
var i__27788__auto___35741 = (0);
while(true){
if((i__27788__auto___35741 < len__27787__auto___35740)){
args__27794__auto__.push((arguments[i__27788__auto___35741]));

var G__35742 = (i__27788__auto___35741 + (1));
i__27788__auto___35741 = G__35742;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35739))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35739){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35739),args);
});})(g__35665__auto___35739))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35665__auto___35739){
return (function (seq35708){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35708));
});})(g__35665__auto___35739))
;


var g__35665__auto___35743 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35665__auto___35743){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35744 = arguments.length;
var i__27788__auto___35745 = (0);
while(true){
if((i__27788__auto___35745 < len__27787__auto___35744)){
args__27794__auto__.push((arguments[i__27788__auto___35745]));

var G__35746 = (i__27788__auto___35745 + (1));
i__27788__auto___35745 = G__35746;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35743))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35743){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35743),args);
});})(g__35665__auto___35743))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35665__auto___35743){
return (function (seq35709){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35709));
});})(g__35665__auto___35743))
;


var g__35665__auto___35747 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35665__auto___35747){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35748 = arguments.length;
var i__27788__auto___35749 = (0);
while(true){
if((i__27788__auto___35749 < len__27787__auto___35748)){
args__27794__auto__.push((arguments[i__27788__auto___35749]));

var G__35750 = (i__27788__auto___35749 + (1));
i__27788__auto___35749 = G__35750;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35747))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35747){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35747),args);
});})(g__35665__auto___35747))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35665__auto___35747){
return (function (seq35710){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35710));
});})(g__35665__auto___35747))
;


var g__35665__auto___35751 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35665__auto___35751){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35752 = arguments.length;
var i__27788__auto___35753 = (0);
while(true){
if((i__27788__auto___35753 < len__27787__auto___35752)){
args__27794__auto__.push((arguments[i__27788__auto___35753]));

var G__35754 = (i__27788__auto___35753 + (1));
i__27788__auto___35753 = G__35754;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35751))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35751){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35751),args);
});})(g__35665__auto___35751))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35665__auto___35751){
return (function (seq35711){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35711));
});})(g__35665__auto___35751))
;


var g__35665__auto___35755 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35665__auto___35755){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35756 = arguments.length;
var i__27788__auto___35757 = (0);
while(true){
if((i__27788__auto___35757 < len__27787__auto___35756)){
args__27794__auto__.push((arguments[i__27788__auto___35757]));

var G__35758 = (i__27788__auto___35757 + (1));
i__27788__auto___35757 = G__35758;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35755))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35755){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35755),args);
});})(g__35665__auto___35755))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35665__auto___35755){
return (function (seq35712){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35712));
});})(g__35665__auto___35755))
;


var g__35665__auto___35759 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35665__auto___35759){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35760 = arguments.length;
var i__27788__auto___35761 = (0);
while(true){
if((i__27788__auto___35761 < len__27787__auto___35760)){
args__27794__auto__.push((arguments[i__27788__auto___35761]));

var G__35762 = (i__27788__auto___35761 + (1));
i__27788__auto___35761 = G__35762;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35759))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35759){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35759),args);
});})(g__35665__auto___35759))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35665__auto___35759){
return (function (seq35713){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35713));
});})(g__35665__auto___35759))
;


var g__35665__auto___35763 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35665__auto___35763){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35764 = arguments.length;
var i__27788__auto___35765 = (0);
while(true){
if((i__27788__auto___35765 < len__27787__auto___35764)){
args__27794__auto__.push((arguments[i__27788__auto___35765]));

var G__35766 = (i__27788__auto___35765 + (1));
i__27788__auto___35765 = G__35766;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35763))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35763){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35763),args);
});})(g__35665__auto___35763))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35665__auto___35763){
return (function (seq35714){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35714));
});})(g__35665__auto___35763))
;


var g__35665__auto___35767 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35665__auto___35767){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35768 = arguments.length;
var i__27788__auto___35769 = (0);
while(true){
if((i__27788__auto___35769 < len__27787__auto___35768)){
args__27794__auto__.push((arguments[i__27788__auto___35769]));

var G__35770 = (i__27788__auto___35769 + (1));
i__27788__auto___35769 = G__35770;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35767))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35767){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35767),args);
});})(g__35665__auto___35767))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35665__auto___35767){
return (function (seq35715){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35715));
});})(g__35665__auto___35767))
;


var g__35665__auto___35771 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35665__auto___35771){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35772 = arguments.length;
var i__27788__auto___35773 = (0);
while(true){
if((i__27788__auto___35773 < len__27787__auto___35772)){
args__27794__auto__.push((arguments[i__27788__auto___35773]));

var G__35774 = (i__27788__auto___35773 + (1));
i__27788__auto___35773 = G__35774;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35771))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35771){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35771),args);
});})(g__35665__auto___35771))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35665__auto___35771){
return (function (seq35716){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35716));
});})(g__35665__auto___35771))
;


var g__35665__auto___35775 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35665__auto___35775){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35776 = arguments.length;
var i__27788__auto___35777 = (0);
while(true){
if((i__27788__auto___35777 < len__27787__auto___35776)){
args__27794__auto__.push((arguments[i__27788__auto___35777]));

var G__35778 = (i__27788__auto___35777 + (1));
i__27788__auto___35777 = G__35778;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35775))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35775){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35775),args);
});})(g__35665__auto___35775))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35665__auto___35775){
return (function (seq35717){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35717));
});})(g__35665__auto___35775))
;


var g__35665__auto___35779 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35665__auto___35779){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35780 = arguments.length;
var i__27788__auto___35781 = (0);
while(true){
if((i__27788__auto___35781 < len__27787__auto___35780)){
args__27794__auto__.push((arguments[i__27788__auto___35781]));

var G__35782 = (i__27788__auto___35781 + (1));
i__27788__auto___35781 = G__35782;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35779))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35779){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35779),args);
});})(g__35665__auto___35779))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35665__auto___35779){
return (function (seq35718){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35718));
});})(g__35665__auto___35779))
;


var g__35665__auto___35783 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35665__auto___35783){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35784 = arguments.length;
var i__27788__auto___35785 = (0);
while(true){
if((i__27788__auto___35785 < len__27787__auto___35784)){
args__27794__auto__.push((arguments[i__27788__auto___35785]));

var G__35786 = (i__27788__auto___35785 + (1));
i__27788__auto___35785 = G__35786;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35783))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35783){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35783),args);
});})(g__35665__auto___35783))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35665__auto___35783){
return (function (seq35719){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35719));
});})(g__35665__auto___35783))
;


var g__35665__auto___35787 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35665__auto___35787){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35788 = arguments.length;
var i__27788__auto___35789 = (0);
while(true){
if((i__27788__auto___35789 < len__27787__auto___35788)){
args__27794__auto__.push((arguments[i__27788__auto___35789]));

var G__35790 = (i__27788__auto___35789 + (1));
i__27788__auto___35789 = G__35790;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35787))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35787){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35787),args);
});})(g__35665__auto___35787))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35665__auto___35787){
return (function (seq35720){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35720));
});})(g__35665__auto___35787))
;


var g__35665__auto___35791 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35665__auto___35791){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35792 = arguments.length;
var i__27788__auto___35793 = (0);
while(true){
if((i__27788__auto___35793 < len__27787__auto___35792)){
args__27794__auto__.push((arguments[i__27788__auto___35793]));

var G__35794 = (i__27788__auto___35793 + (1));
i__27788__auto___35793 = G__35794;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35791))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35791){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35791),args);
});})(g__35665__auto___35791))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35665__auto___35791){
return (function (seq35721){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35721));
});})(g__35665__auto___35791))
;


var g__35665__auto___35795 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35665__auto___35795){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35796 = arguments.length;
var i__27788__auto___35797 = (0);
while(true){
if((i__27788__auto___35797 < len__27787__auto___35796)){
args__27794__auto__.push((arguments[i__27788__auto___35797]));

var G__35798 = (i__27788__auto___35797 + (1));
i__27788__auto___35797 = G__35798;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35665__auto___35795))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35665__auto___35795){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35665__auto___35795),args);
});})(g__35665__auto___35795))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35665__auto___35795){
return (function (seq35722){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35722));
});})(g__35665__auto___35795))
;

var g__35678__auto___35820 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35678__auto___35820){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35821 = arguments.length;
var i__27788__auto___35822 = (0);
while(true){
if((i__27788__auto___35822 < len__27787__auto___35821)){
args__27794__auto__.push((arguments[i__27788__auto___35822]));

var G__35823 = (i__27788__auto___35822 + (1));
i__27788__auto___35822 = G__35823;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35820))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35820){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35820);
});})(g__35678__auto___35820))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35678__auto___35820){
return (function (seq35799){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35799));
});})(g__35678__auto___35820))
;


var g__35678__auto___35824 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35678__auto___35824){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35825 = arguments.length;
var i__27788__auto___35826 = (0);
while(true){
if((i__27788__auto___35826 < len__27787__auto___35825)){
args__27794__auto__.push((arguments[i__27788__auto___35826]));

var G__35827 = (i__27788__auto___35826 + (1));
i__27788__auto___35826 = G__35827;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35824))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35824){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35824);
});})(g__35678__auto___35824))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35678__auto___35824){
return (function (seq35800){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35800));
});})(g__35678__auto___35824))
;


var g__35678__auto___35828 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35678__auto___35828){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35829 = arguments.length;
var i__27788__auto___35830 = (0);
while(true){
if((i__27788__auto___35830 < len__27787__auto___35829)){
args__27794__auto__.push((arguments[i__27788__auto___35830]));

var G__35831 = (i__27788__auto___35830 + (1));
i__27788__auto___35830 = G__35831;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35828))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35828){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35828);
});})(g__35678__auto___35828))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35678__auto___35828){
return (function (seq35801){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35801));
});})(g__35678__auto___35828))
;


var g__35678__auto___35832 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35678__auto___35832){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35833 = arguments.length;
var i__27788__auto___35834 = (0);
while(true){
if((i__27788__auto___35834 < len__27787__auto___35833)){
args__27794__auto__.push((arguments[i__27788__auto___35834]));

var G__35835 = (i__27788__auto___35834 + (1));
i__27788__auto___35834 = G__35835;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35832))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35832){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35832);
});})(g__35678__auto___35832))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35678__auto___35832){
return (function (seq35802){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35802));
});})(g__35678__auto___35832))
;


var g__35678__auto___35836 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35678__auto___35836){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35837 = arguments.length;
var i__27788__auto___35838 = (0);
while(true){
if((i__27788__auto___35838 < len__27787__auto___35837)){
args__27794__auto__.push((arguments[i__27788__auto___35838]));

var G__35839 = (i__27788__auto___35838 + (1));
i__27788__auto___35838 = G__35839;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35836))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35836){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35836);
});})(g__35678__auto___35836))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35678__auto___35836){
return (function (seq35803){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35803));
});})(g__35678__auto___35836))
;


var g__35678__auto___35840 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35678__auto___35840){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35841 = arguments.length;
var i__27788__auto___35842 = (0);
while(true){
if((i__27788__auto___35842 < len__27787__auto___35841)){
args__27794__auto__.push((arguments[i__27788__auto___35842]));

var G__35843 = (i__27788__auto___35842 + (1));
i__27788__auto___35842 = G__35843;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35840))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35840){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35840);
});})(g__35678__auto___35840))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35678__auto___35840){
return (function (seq35804){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35804));
});})(g__35678__auto___35840))
;


var g__35678__auto___35844 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35678__auto___35844){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35845 = arguments.length;
var i__27788__auto___35846 = (0);
while(true){
if((i__27788__auto___35846 < len__27787__auto___35845)){
args__27794__auto__.push((arguments[i__27788__auto___35846]));

var G__35847 = (i__27788__auto___35846 + (1));
i__27788__auto___35846 = G__35847;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35844))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35844){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35844);
});})(g__35678__auto___35844))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35678__auto___35844){
return (function (seq35805){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});})(g__35678__auto___35844))
;


var g__35678__auto___35848 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35678__auto___35848){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35849 = arguments.length;
var i__27788__auto___35850 = (0);
while(true){
if((i__27788__auto___35850 < len__27787__auto___35849)){
args__27794__auto__.push((arguments[i__27788__auto___35850]));

var G__35851 = (i__27788__auto___35850 + (1));
i__27788__auto___35850 = G__35851;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35848))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35848){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35848);
});})(g__35678__auto___35848))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35678__auto___35848){
return (function (seq35806){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35806));
});})(g__35678__auto___35848))
;


var g__35678__auto___35852 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35678__auto___35852){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35853 = arguments.length;
var i__27788__auto___35854 = (0);
while(true){
if((i__27788__auto___35854 < len__27787__auto___35853)){
args__27794__auto__.push((arguments[i__27788__auto___35854]));

var G__35855 = (i__27788__auto___35854 + (1));
i__27788__auto___35854 = G__35855;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35852))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35852){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35852);
});})(g__35678__auto___35852))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35678__auto___35852){
return (function (seq35807){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35807));
});})(g__35678__auto___35852))
;


var g__35678__auto___35856 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35678__auto___35856){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35857 = arguments.length;
var i__27788__auto___35858 = (0);
while(true){
if((i__27788__auto___35858 < len__27787__auto___35857)){
args__27794__auto__.push((arguments[i__27788__auto___35858]));

var G__35859 = (i__27788__auto___35858 + (1));
i__27788__auto___35858 = G__35859;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35856))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35856){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35856);
});})(g__35678__auto___35856))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35678__auto___35856){
return (function (seq35808){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35808));
});})(g__35678__auto___35856))
;


var g__35678__auto___35860 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35678__auto___35860){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35861 = arguments.length;
var i__27788__auto___35862 = (0);
while(true){
if((i__27788__auto___35862 < len__27787__auto___35861)){
args__27794__auto__.push((arguments[i__27788__auto___35862]));

var G__35863 = (i__27788__auto___35862 + (1));
i__27788__auto___35862 = G__35863;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35860))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35860){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35860);
});})(g__35678__auto___35860))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35678__auto___35860){
return (function (seq35809){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35809));
});})(g__35678__auto___35860))
;


var g__35678__auto___35864 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35678__auto___35864){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35865 = arguments.length;
var i__27788__auto___35866 = (0);
while(true){
if((i__27788__auto___35866 < len__27787__auto___35865)){
args__27794__auto__.push((arguments[i__27788__auto___35866]));

var G__35867 = (i__27788__auto___35866 + (1));
i__27788__auto___35866 = G__35867;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35864))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35864){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35864);
});})(g__35678__auto___35864))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35678__auto___35864){
return (function (seq35810){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35810));
});})(g__35678__auto___35864))
;


var g__35678__auto___35868 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35678__auto___35868){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35869 = arguments.length;
var i__27788__auto___35870 = (0);
while(true){
if((i__27788__auto___35870 < len__27787__auto___35869)){
args__27794__auto__.push((arguments[i__27788__auto___35870]));

var G__35871 = (i__27788__auto___35870 + (1));
i__27788__auto___35870 = G__35871;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35868))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35868){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35868);
});})(g__35678__auto___35868))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35678__auto___35868){
return (function (seq35811){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35811));
});})(g__35678__auto___35868))
;


var g__35678__auto___35872 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35678__auto___35872){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35873 = arguments.length;
var i__27788__auto___35874 = (0);
while(true){
if((i__27788__auto___35874 < len__27787__auto___35873)){
args__27794__auto__.push((arguments[i__27788__auto___35874]));

var G__35875 = (i__27788__auto___35874 + (1));
i__27788__auto___35874 = G__35875;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35872))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35872){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35872);
});})(g__35678__auto___35872))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35678__auto___35872){
return (function (seq35812){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35812));
});})(g__35678__auto___35872))
;


var g__35678__auto___35876 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35678__auto___35876){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35877 = arguments.length;
var i__27788__auto___35878 = (0);
while(true){
if((i__27788__auto___35878 < len__27787__auto___35877)){
args__27794__auto__.push((arguments[i__27788__auto___35878]));

var G__35879 = (i__27788__auto___35878 + (1));
i__27788__auto___35878 = G__35879;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35876))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35876){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35876);
});})(g__35678__auto___35876))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35678__auto___35876){
return (function (seq35813){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35813));
});})(g__35678__auto___35876))
;


var g__35678__auto___35880 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35678__auto___35880){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35881 = arguments.length;
var i__27788__auto___35882 = (0);
while(true){
if((i__27788__auto___35882 < len__27787__auto___35881)){
args__27794__auto__.push((arguments[i__27788__auto___35882]));

var G__35883 = (i__27788__auto___35882 + (1));
i__27788__auto___35882 = G__35883;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35880))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35880){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35880);
});})(g__35678__auto___35880))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35678__auto___35880){
return (function (seq35814){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35814));
});})(g__35678__auto___35880))
;


var g__35678__auto___35884 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35678__auto___35884){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35885 = arguments.length;
var i__27788__auto___35886 = (0);
while(true){
if((i__27788__auto___35886 < len__27787__auto___35885)){
args__27794__auto__.push((arguments[i__27788__auto___35886]));

var G__35887 = (i__27788__auto___35886 + (1));
i__27788__auto___35886 = G__35887;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35884))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35884){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35884);
});})(g__35678__auto___35884))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35678__auto___35884){
return (function (seq35815){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35815));
});})(g__35678__auto___35884))
;


var g__35678__auto___35888 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35678__auto___35888){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35889 = arguments.length;
var i__27788__auto___35890 = (0);
while(true){
if((i__27788__auto___35890 < len__27787__auto___35889)){
args__27794__auto__.push((arguments[i__27788__auto___35890]));

var G__35891 = (i__27788__auto___35890 + (1));
i__27788__auto___35890 = G__35891;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35888))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35888){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35888);
});})(g__35678__auto___35888))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35678__auto___35888){
return (function (seq35816){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35816));
});})(g__35678__auto___35888))
;


var g__35678__auto___35892 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35678__auto___35892){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35893 = arguments.length;
var i__27788__auto___35894 = (0);
while(true){
if((i__27788__auto___35894 < len__27787__auto___35893)){
args__27794__auto__.push((arguments[i__27788__auto___35894]));

var G__35895 = (i__27788__auto___35894 + (1));
i__27788__auto___35894 = G__35895;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35892))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35892){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35892);
});})(g__35678__auto___35892))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35678__auto___35892){
return (function (seq35817){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35817));
});})(g__35678__auto___35892))
;


var g__35678__auto___35896 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35678__auto___35896){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35897 = arguments.length;
var i__27788__auto___35898 = (0);
while(true){
if((i__27788__auto___35898 < len__27787__auto___35897)){
args__27794__auto__.push((arguments[i__27788__auto___35898]));

var G__35899 = (i__27788__auto___35898 + (1));
i__27788__auto___35898 = G__35899;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35896))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35896){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35896);
});})(g__35678__auto___35896))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35678__auto___35896){
return (function (seq35818){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35818));
});})(g__35678__auto___35896))
;


var g__35678__auto___35900 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35678__auto___35900){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35901 = arguments.length;
var i__27788__auto___35902 = (0);
while(true){
if((i__27788__auto___35902 < len__27787__auto___35901)){
args__27794__auto__.push((arguments[i__27788__auto___35902]));

var G__35903 = (i__27788__auto___35902 + (1));
i__27788__auto___35902 = G__35903;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35678__auto___35900))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35678__auto___35900){
return (function (args){
return cljs.core.deref.call(null,g__35678__auto___35900);
});})(g__35678__auto___35900))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35678__auto___35900){
return (function (seq35819){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35819));
});})(g__35678__auto___35900))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35906 = arguments.length;
var i__27788__auto___35907 = (0);
while(true){
if((i__27788__auto___35907 < len__27787__auto___35906)){
args__27794__auto__.push((arguments[i__27788__auto___35907]));

var G__35908 = (i__27788__auto___35907 + (1));
i__27788__auto___35907 = G__35908;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35904_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35904_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35905){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35905));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35909_SHARP_){
return (new Date(p1__35909_SHARP_));
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