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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.spec.gen.alpha/LazyVar");
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
var args__27575__auto__ = [];
var len__27568__auto___35475 = arguments.length;
var i__27569__auto___35476 = (0);
while(true){
if((i__27569__auto___35476 < len__27568__auto___35475)){
args__27575__auto__.push((arguments[i__27569__auto___35476]));

var G__35477 = (i__27569__auto___35476 + (1));
i__27569__auto___35476 = G__35477;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35474){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35474));
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
var args__27575__auto__ = [];
var len__27568__auto___35479 = arguments.length;
var i__27569__auto___35480 = (0);
while(true){
if((i__27569__auto___35480 < len__27568__auto___35479)){
args__27575__auto__.push((arguments[i__27569__auto___35480]));

var G__35481 = (i__27569__auto___35480 + (1));
i__27569__auto___35480 = G__35481;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35478){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35478));
});

var g_QMARK__35482 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35483 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35482){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35482))
,null));
var mkg_35484 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35482,g_35483){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35482,g_35483))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35482,g_35483,mkg_35484){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35482).call(null,x);
});})(g_QMARK__35482,g_35483,mkg_35484))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35482,g_35483,mkg_35484){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35484).call(null,gfn);
});})(g_QMARK__35482,g_35483,mkg_35484))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35482,g_35483,mkg_35484){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35483).call(null,generator);
});})(g_QMARK__35482,g_35483,mkg_35484))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35446__auto___35504 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35446__auto___35504){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35505 = arguments.length;
var i__27569__auto___35506 = (0);
while(true){
if((i__27569__auto___35506 < len__27568__auto___35505)){
args__27575__auto__.push((arguments[i__27569__auto___35506]));

var G__35507 = (i__27569__auto___35506 + (1));
i__27569__auto___35506 = G__35507;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35504))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35504){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35504),args);
});})(g__35446__auto___35504))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35446__auto___35504){
return (function (seq35485){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35485));
});})(g__35446__auto___35504))
;


var g__35446__auto___35508 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35446__auto___35508){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35509 = arguments.length;
var i__27569__auto___35510 = (0);
while(true){
if((i__27569__auto___35510 < len__27568__auto___35509)){
args__27575__auto__.push((arguments[i__27569__auto___35510]));

var G__35511 = (i__27569__auto___35510 + (1));
i__27569__auto___35510 = G__35511;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35508))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35508){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35508),args);
});})(g__35446__auto___35508))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35446__auto___35508){
return (function (seq35486){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35486));
});})(g__35446__auto___35508))
;


var g__35446__auto___35512 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35446__auto___35512){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35513 = arguments.length;
var i__27569__auto___35514 = (0);
while(true){
if((i__27569__auto___35514 < len__27568__auto___35513)){
args__27575__auto__.push((arguments[i__27569__auto___35514]));

var G__35515 = (i__27569__auto___35514 + (1));
i__27569__auto___35514 = G__35515;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35512))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35512){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35512),args);
});})(g__35446__auto___35512))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35446__auto___35512){
return (function (seq35487){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35487));
});})(g__35446__auto___35512))
;


var g__35446__auto___35516 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35446__auto___35516){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35517 = arguments.length;
var i__27569__auto___35518 = (0);
while(true){
if((i__27569__auto___35518 < len__27568__auto___35517)){
args__27575__auto__.push((arguments[i__27569__auto___35518]));

var G__35519 = (i__27569__auto___35518 + (1));
i__27569__auto___35518 = G__35519;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35516))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35516){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35516),args);
});})(g__35446__auto___35516))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35446__auto___35516){
return (function (seq35488){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35488));
});})(g__35446__auto___35516))
;


var g__35446__auto___35520 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35446__auto___35520){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35521 = arguments.length;
var i__27569__auto___35522 = (0);
while(true){
if((i__27569__auto___35522 < len__27568__auto___35521)){
args__27575__auto__.push((arguments[i__27569__auto___35522]));

var G__35523 = (i__27569__auto___35522 + (1));
i__27569__auto___35522 = G__35523;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35520))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35520){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35520),args);
});})(g__35446__auto___35520))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35446__auto___35520){
return (function (seq35489){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35489));
});})(g__35446__auto___35520))
;


var g__35446__auto___35524 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35446__auto___35524){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35525 = arguments.length;
var i__27569__auto___35526 = (0);
while(true){
if((i__27569__auto___35526 < len__27568__auto___35525)){
args__27575__auto__.push((arguments[i__27569__auto___35526]));

var G__35527 = (i__27569__auto___35526 + (1));
i__27569__auto___35526 = G__35527;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35524))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35524){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35524),args);
});})(g__35446__auto___35524))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35446__auto___35524){
return (function (seq35490){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35490));
});})(g__35446__auto___35524))
;


var g__35446__auto___35528 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35446__auto___35528){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35529 = arguments.length;
var i__27569__auto___35530 = (0);
while(true){
if((i__27569__auto___35530 < len__27568__auto___35529)){
args__27575__auto__.push((arguments[i__27569__auto___35530]));

var G__35531 = (i__27569__auto___35530 + (1));
i__27569__auto___35530 = G__35531;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35528))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35528){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35528),args);
});})(g__35446__auto___35528))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35446__auto___35528){
return (function (seq35491){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35491));
});})(g__35446__auto___35528))
;


var g__35446__auto___35532 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35446__auto___35532){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35533 = arguments.length;
var i__27569__auto___35534 = (0);
while(true){
if((i__27569__auto___35534 < len__27568__auto___35533)){
args__27575__auto__.push((arguments[i__27569__auto___35534]));

var G__35535 = (i__27569__auto___35534 + (1));
i__27569__auto___35534 = G__35535;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35532))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35532){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35532),args);
});})(g__35446__auto___35532))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35446__auto___35532){
return (function (seq35492){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35492));
});})(g__35446__auto___35532))
;


var g__35446__auto___35536 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35446__auto___35536){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35537 = arguments.length;
var i__27569__auto___35538 = (0);
while(true){
if((i__27569__auto___35538 < len__27568__auto___35537)){
args__27575__auto__.push((arguments[i__27569__auto___35538]));

var G__35539 = (i__27569__auto___35538 + (1));
i__27569__auto___35538 = G__35539;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35536))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35536){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35536),args);
});})(g__35446__auto___35536))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35446__auto___35536){
return (function (seq35493){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35493));
});})(g__35446__auto___35536))
;


var g__35446__auto___35540 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35446__auto___35540){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35541 = arguments.length;
var i__27569__auto___35542 = (0);
while(true){
if((i__27569__auto___35542 < len__27568__auto___35541)){
args__27575__auto__.push((arguments[i__27569__auto___35542]));

var G__35543 = (i__27569__auto___35542 + (1));
i__27569__auto___35542 = G__35543;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35540))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35540){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35540),args);
});})(g__35446__auto___35540))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35446__auto___35540){
return (function (seq35494){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35494));
});})(g__35446__auto___35540))
;


var g__35446__auto___35544 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35446__auto___35544){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35545 = arguments.length;
var i__27569__auto___35546 = (0);
while(true){
if((i__27569__auto___35546 < len__27568__auto___35545)){
args__27575__auto__.push((arguments[i__27569__auto___35546]));

var G__35547 = (i__27569__auto___35546 + (1));
i__27569__auto___35546 = G__35547;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35544))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35544){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35544),args);
});})(g__35446__auto___35544))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35446__auto___35544){
return (function (seq35495){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35495));
});})(g__35446__auto___35544))
;


var g__35446__auto___35548 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35446__auto___35548){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35549 = arguments.length;
var i__27569__auto___35550 = (0);
while(true){
if((i__27569__auto___35550 < len__27568__auto___35549)){
args__27575__auto__.push((arguments[i__27569__auto___35550]));

var G__35551 = (i__27569__auto___35550 + (1));
i__27569__auto___35550 = G__35551;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35548))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35548){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35548),args);
});})(g__35446__auto___35548))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35446__auto___35548){
return (function (seq35496){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35496));
});})(g__35446__auto___35548))
;


var g__35446__auto___35552 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35446__auto___35552){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35553 = arguments.length;
var i__27569__auto___35554 = (0);
while(true){
if((i__27569__auto___35554 < len__27568__auto___35553)){
args__27575__auto__.push((arguments[i__27569__auto___35554]));

var G__35555 = (i__27569__auto___35554 + (1));
i__27569__auto___35554 = G__35555;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35552))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35552){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35552),args);
});})(g__35446__auto___35552))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35446__auto___35552){
return (function (seq35497){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35497));
});})(g__35446__auto___35552))
;


var g__35446__auto___35556 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35446__auto___35556){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35557 = arguments.length;
var i__27569__auto___35558 = (0);
while(true){
if((i__27569__auto___35558 < len__27568__auto___35557)){
args__27575__auto__.push((arguments[i__27569__auto___35558]));

var G__35559 = (i__27569__auto___35558 + (1));
i__27569__auto___35558 = G__35559;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35556))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35556){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35556),args);
});})(g__35446__auto___35556))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35446__auto___35556){
return (function (seq35498){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35498));
});})(g__35446__auto___35556))
;


var g__35446__auto___35560 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35446__auto___35560){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35561 = arguments.length;
var i__27569__auto___35562 = (0);
while(true){
if((i__27569__auto___35562 < len__27568__auto___35561)){
args__27575__auto__.push((arguments[i__27569__auto___35562]));

var G__35563 = (i__27569__auto___35562 + (1));
i__27569__auto___35562 = G__35563;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35560))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35560){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35560),args);
});})(g__35446__auto___35560))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35446__auto___35560){
return (function (seq35499){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35499));
});})(g__35446__auto___35560))
;


var g__35446__auto___35564 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35446__auto___35564){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35565 = arguments.length;
var i__27569__auto___35566 = (0);
while(true){
if((i__27569__auto___35566 < len__27568__auto___35565)){
args__27575__auto__.push((arguments[i__27569__auto___35566]));

var G__35567 = (i__27569__auto___35566 + (1));
i__27569__auto___35566 = G__35567;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35564))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35564){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35564),args);
});})(g__35446__auto___35564))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35446__auto___35564){
return (function (seq35500){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35500));
});})(g__35446__auto___35564))
;


var g__35446__auto___35568 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35446__auto___35568){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35569 = arguments.length;
var i__27569__auto___35570 = (0);
while(true){
if((i__27569__auto___35570 < len__27568__auto___35569)){
args__27575__auto__.push((arguments[i__27569__auto___35570]));

var G__35571 = (i__27569__auto___35570 + (1));
i__27569__auto___35570 = G__35571;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35568))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35568){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35568),args);
});})(g__35446__auto___35568))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35446__auto___35568){
return (function (seq35501){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35501));
});})(g__35446__auto___35568))
;


var g__35446__auto___35572 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35446__auto___35572){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35573 = arguments.length;
var i__27569__auto___35574 = (0);
while(true){
if((i__27569__auto___35574 < len__27568__auto___35573)){
args__27575__auto__.push((arguments[i__27569__auto___35574]));

var G__35575 = (i__27569__auto___35574 + (1));
i__27569__auto___35574 = G__35575;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35572))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35572){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35572),args);
});})(g__35446__auto___35572))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35446__auto___35572){
return (function (seq35502){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35502));
});})(g__35446__auto___35572))
;


var g__35446__auto___35576 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35446__auto___35576){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35577 = arguments.length;
var i__27569__auto___35578 = (0);
while(true){
if((i__27569__auto___35578 < len__27568__auto___35577)){
args__27575__auto__.push((arguments[i__27569__auto___35578]));

var G__35579 = (i__27569__auto___35578 + (1));
i__27569__auto___35578 = G__35579;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35446__auto___35576))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35446__auto___35576){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35446__auto___35576),args);
});})(g__35446__auto___35576))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35446__auto___35576){
return (function (seq35503){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35503));
});})(g__35446__auto___35576))
;

var g__35459__auto___35601 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35459__auto___35601){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35602 = arguments.length;
var i__27569__auto___35603 = (0);
while(true){
if((i__27569__auto___35603 < len__27568__auto___35602)){
args__27575__auto__.push((arguments[i__27569__auto___35603]));

var G__35604 = (i__27569__auto___35603 + (1));
i__27569__auto___35603 = G__35604;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35601))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35601){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35601);
});})(g__35459__auto___35601))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35459__auto___35601){
return (function (seq35580){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35580));
});})(g__35459__auto___35601))
;


var g__35459__auto___35605 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35459__auto___35605){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35606 = arguments.length;
var i__27569__auto___35607 = (0);
while(true){
if((i__27569__auto___35607 < len__27568__auto___35606)){
args__27575__auto__.push((arguments[i__27569__auto___35607]));

var G__35608 = (i__27569__auto___35607 + (1));
i__27569__auto___35607 = G__35608;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35605))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35605){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35605);
});})(g__35459__auto___35605))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35459__auto___35605){
return (function (seq35581){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35581));
});})(g__35459__auto___35605))
;


var g__35459__auto___35609 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35459__auto___35609){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35610 = arguments.length;
var i__27569__auto___35611 = (0);
while(true){
if((i__27569__auto___35611 < len__27568__auto___35610)){
args__27575__auto__.push((arguments[i__27569__auto___35611]));

var G__35612 = (i__27569__auto___35611 + (1));
i__27569__auto___35611 = G__35612;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35609))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35609){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35609);
});})(g__35459__auto___35609))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35459__auto___35609){
return (function (seq35582){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35582));
});})(g__35459__auto___35609))
;


var g__35459__auto___35613 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35459__auto___35613){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35614 = arguments.length;
var i__27569__auto___35615 = (0);
while(true){
if((i__27569__auto___35615 < len__27568__auto___35614)){
args__27575__auto__.push((arguments[i__27569__auto___35615]));

var G__35616 = (i__27569__auto___35615 + (1));
i__27569__auto___35615 = G__35616;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35613))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35613){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35613);
});})(g__35459__auto___35613))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35459__auto___35613){
return (function (seq35583){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35583));
});})(g__35459__auto___35613))
;


var g__35459__auto___35617 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35459__auto___35617){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35618 = arguments.length;
var i__27569__auto___35619 = (0);
while(true){
if((i__27569__auto___35619 < len__27568__auto___35618)){
args__27575__auto__.push((arguments[i__27569__auto___35619]));

var G__35620 = (i__27569__auto___35619 + (1));
i__27569__auto___35619 = G__35620;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35617))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35617){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35617);
});})(g__35459__auto___35617))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35459__auto___35617){
return (function (seq35584){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35584));
});})(g__35459__auto___35617))
;


var g__35459__auto___35621 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35459__auto___35621){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35622 = arguments.length;
var i__27569__auto___35623 = (0);
while(true){
if((i__27569__auto___35623 < len__27568__auto___35622)){
args__27575__auto__.push((arguments[i__27569__auto___35623]));

var G__35624 = (i__27569__auto___35623 + (1));
i__27569__auto___35623 = G__35624;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35621))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35621){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35621);
});})(g__35459__auto___35621))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35459__auto___35621){
return (function (seq35585){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35585));
});})(g__35459__auto___35621))
;


var g__35459__auto___35625 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35459__auto___35625){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35626 = arguments.length;
var i__27569__auto___35627 = (0);
while(true){
if((i__27569__auto___35627 < len__27568__auto___35626)){
args__27575__auto__.push((arguments[i__27569__auto___35627]));

var G__35628 = (i__27569__auto___35627 + (1));
i__27569__auto___35627 = G__35628;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35625))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35625){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35625);
});})(g__35459__auto___35625))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35459__auto___35625){
return (function (seq35586){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35586));
});})(g__35459__auto___35625))
;


var g__35459__auto___35629 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35459__auto___35629){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35630 = arguments.length;
var i__27569__auto___35631 = (0);
while(true){
if((i__27569__auto___35631 < len__27568__auto___35630)){
args__27575__auto__.push((arguments[i__27569__auto___35631]));

var G__35632 = (i__27569__auto___35631 + (1));
i__27569__auto___35631 = G__35632;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35629))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35629){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35629);
});})(g__35459__auto___35629))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35459__auto___35629){
return (function (seq35587){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35587));
});})(g__35459__auto___35629))
;


var g__35459__auto___35633 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35459__auto___35633){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35634 = arguments.length;
var i__27569__auto___35635 = (0);
while(true){
if((i__27569__auto___35635 < len__27568__auto___35634)){
args__27575__auto__.push((arguments[i__27569__auto___35635]));

var G__35636 = (i__27569__auto___35635 + (1));
i__27569__auto___35635 = G__35636;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35633))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35633){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35633);
});})(g__35459__auto___35633))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35459__auto___35633){
return (function (seq35588){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35588));
});})(g__35459__auto___35633))
;


var g__35459__auto___35637 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35459__auto___35637){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35638 = arguments.length;
var i__27569__auto___35639 = (0);
while(true){
if((i__27569__auto___35639 < len__27568__auto___35638)){
args__27575__auto__.push((arguments[i__27569__auto___35639]));

var G__35640 = (i__27569__auto___35639 + (1));
i__27569__auto___35639 = G__35640;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35637))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35637){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35637);
});})(g__35459__auto___35637))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35459__auto___35637){
return (function (seq35589){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35589));
});})(g__35459__auto___35637))
;


var g__35459__auto___35641 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35459__auto___35641){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35642 = arguments.length;
var i__27569__auto___35643 = (0);
while(true){
if((i__27569__auto___35643 < len__27568__auto___35642)){
args__27575__auto__.push((arguments[i__27569__auto___35643]));

var G__35644 = (i__27569__auto___35643 + (1));
i__27569__auto___35643 = G__35644;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35641))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35641){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35641);
});})(g__35459__auto___35641))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35459__auto___35641){
return (function (seq35590){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35590));
});})(g__35459__auto___35641))
;


var g__35459__auto___35645 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35459__auto___35645){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35646 = arguments.length;
var i__27569__auto___35647 = (0);
while(true){
if((i__27569__auto___35647 < len__27568__auto___35646)){
args__27575__auto__.push((arguments[i__27569__auto___35647]));

var G__35648 = (i__27569__auto___35647 + (1));
i__27569__auto___35647 = G__35648;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35645))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35645){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35645);
});})(g__35459__auto___35645))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35459__auto___35645){
return (function (seq35591){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35591));
});})(g__35459__auto___35645))
;


var g__35459__auto___35649 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35459__auto___35649){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35650 = arguments.length;
var i__27569__auto___35651 = (0);
while(true){
if((i__27569__auto___35651 < len__27568__auto___35650)){
args__27575__auto__.push((arguments[i__27569__auto___35651]));

var G__35652 = (i__27569__auto___35651 + (1));
i__27569__auto___35651 = G__35652;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35649))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35649){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35649);
});})(g__35459__auto___35649))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35459__auto___35649){
return (function (seq35592){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35592));
});})(g__35459__auto___35649))
;


var g__35459__auto___35653 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35459__auto___35653){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35654 = arguments.length;
var i__27569__auto___35655 = (0);
while(true){
if((i__27569__auto___35655 < len__27568__auto___35654)){
args__27575__auto__.push((arguments[i__27569__auto___35655]));

var G__35656 = (i__27569__auto___35655 + (1));
i__27569__auto___35655 = G__35656;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35653))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35653){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35653);
});})(g__35459__auto___35653))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35459__auto___35653){
return (function (seq35593){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35593));
});})(g__35459__auto___35653))
;


var g__35459__auto___35657 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35459__auto___35657){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35658 = arguments.length;
var i__27569__auto___35659 = (0);
while(true){
if((i__27569__auto___35659 < len__27568__auto___35658)){
args__27575__auto__.push((arguments[i__27569__auto___35659]));

var G__35660 = (i__27569__auto___35659 + (1));
i__27569__auto___35659 = G__35660;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35657))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35657){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35657);
});})(g__35459__auto___35657))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35459__auto___35657){
return (function (seq35594){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35594));
});})(g__35459__auto___35657))
;


var g__35459__auto___35661 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35459__auto___35661){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35662 = arguments.length;
var i__27569__auto___35663 = (0);
while(true){
if((i__27569__auto___35663 < len__27568__auto___35662)){
args__27575__auto__.push((arguments[i__27569__auto___35663]));

var G__35664 = (i__27569__auto___35663 + (1));
i__27569__auto___35663 = G__35664;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35661))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35661){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35661);
});})(g__35459__auto___35661))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35459__auto___35661){
return (function (seq35595){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35595));
});})(g__35459__auto___35661))
;


var g__35459__auto___35665 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35459__auto___35665){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35666 = arguments.length;
var i__27569__auto___35667 = (0);
while(true){
if((i__27569__auto___35667 < len__27568__auto___35666)){
args__27575__auto__.push((arguments[i__27569__auto___35667]));

var G__35668 = (i__27569__auto___35667 + (1));
i__27569__auto___35667 = G__35668;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35665))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35665){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35665);
});})(g__35459__auto___35665))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35459__auto___35665){
return (function (seq35596){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35596));
});})(g__35459__auto___35665))
;


var g__35459__auto___35669 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35459__auto___35669){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35670 = arguments.length;
var i__27569__auto___35671 = (0);
while(true){
if((i__27569__auto___35671 < len__27568__auto___35670)){
args__27575__auto__.push((arguments[i__27569__auto___35671]));

var G__35672 = (i__27569__auto___35671 + (1));
i__27569__auto___35671 = G__35672;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35669))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35669){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35669);
});})(g__35459__auto___35669))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35459__auto___35669){
return (function (seq35597){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35597));
});})(g__35459__auto___35669))
;


var g__35459__auto___35673 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35459__auto___35673){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35674 = arguments.length;
var i__27569__auto___35675 = (0);
while(true){
if((i__27569__auto___35675 < len__27568__auto___35674)){
args__27575__auto__.push((arguments[i__27569__auto___35675]));

var G__35676 = (i__27569__auto___35675 + (1));
i__27569__auto___35675 = G__35676;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35673))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35673){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35673);
});})(g__35459__auto___35673))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35459__auto___35673){
return (function (seq35598){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35598));
});})(g__35459__auto___35673))
;


var g__35459__auto___35677 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35459__auto___35677){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35678 = arguments.length;
var i__27569__auto___35679 = (0);
while(true){
if((i__27569__auto___35679 < len__27568__auto___35678)){
args__27575__auto__.push((arguments[i__27569__auto___35679]));

var G__35680 = (i__27569__auto___35679 + (1));
i__27569__auto___35679 = G__35680;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35677))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35677){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35677);
});})(g__35459__auto___35677))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35459__auto___35677){
return (function (seq35599){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35599));
});})(g__35459__auto___35677))
;


var g__35459__auto___35681 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35459__auto___35681){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35682 = arguments.length;
var i__27569__auto___35683 = (0);
while(true){
if((i__27569__auto___35683 < len__27568__auto___35682)){
args__27575__auto__.push((arguments[i__27569__auto___35683]));

var G__35684 = (i__27569__auto___35683 + (1));
i__27569__auto___35683 = G__35684;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});})(g__35459__auto___35681))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35459__auto___35681){
return (function (args){
return cljs.core.deref.call(null,g__35459__auto___35681);
});})(g__35459__auto___35681))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35459__auto___35681){
return (function (seq35600){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35600));
});})(g__35459__auto___35681))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27575__auto__ = [];
var len__27568__auto___35687 = arguments.length;
var i__27569__auto___35688 = (0);
while(true){
if((i__27569__auto___35688 < len__27568__auto___35687)){
args__27575__auto__.push((arguments[i__27569__auto___35688]));

var G__35689 = (i__27569__auto___35688 + (1));
i__27569__auto___35688 = G__35689;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((0) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27576__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35685_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35685_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35686){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35686));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35690_SHARP_){
return (new Date(p1__35690_SHARP_));
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