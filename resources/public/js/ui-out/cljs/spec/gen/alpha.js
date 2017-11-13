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
var len__27787__auto___35684 = arguments.length;
var i__27788__auto___35685 = (0);
while(true){
if((i__27788__auto___35685 < len__27787__auto___35684)){
args__27794__auto__.push((arguments[i__27788__auto___35685]));

var G__35686 = (i__27788__auto___35685 + (1));
i__27788__auto___35685 = G__35686;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq35683){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35683));
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
var len__27787__auto___35688 = arguments.length;
var i__27788__auto___35689 = (0);
while(true){
if((i__27788__auto___35689 < len__27787__auto___35688)){
args__27794__auto__.push((arguments[i__27788__auto___35689]));

var G__35690 = (i__27788__auto___35689 + (1));
i__27788__auto___35689 = G__35690;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq35687){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35687));
});

var g_QMARK__35691 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
var g_35692 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35691){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35691))
,null));
var mkg_35693 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__35691,g_35692){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
});})(g_QMARK__35691,g_35692))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__35691,g_35692,mkg_35693){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__35691).call(null,x);
});})(g_QMARK__35691,g_35692,mkg_35693))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__35691,g_35692,mkg_35693){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_35693).call(null,gfn);
});})(g_QMARK__35691,g_35692,mkg_35693))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__35691,g_35692,mkg_35693){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_35692).call(null,generator);
});})(g_QMARK__35691,g_35692,mkg_35693))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__35655__auto___35713 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__35655__auto___35713){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35714 = arguments.length;
var i__27788__auto___35715 = (0);
while(true){
if((i__27788__auto___35715 < len__27787__auto___35714)){
args__27794__auto__.push((arguments[i__27788__auto___35715]));

var G__35716 = (i__27788__auto___35715 + (1));
i__27788__auto___35715 = G__35716;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35713))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35713){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35713),args);
});})(g__35655__auto___35713))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__35655__auto___35713){
return (function (seq35694){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35694));
});})(g__35655__auto___35713))
;


var g__35655__auto___35717 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__35655__auto___35717){
return (function cljs$spec$gen$alpha$list(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35718 = arguments.length;
var i__27788__auto___35719 = (0);
while(true){
if((i__27788__auto___35719 < len__27787__auto___35718)){
args__27794__auto__.push((arguments[i__27788__auto___35719]));

var G__35720 = (i__27788__auto___35719 + (1));
i__27788__auto___35719 = G__35720;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35717))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35717){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35717),args);
});})(g__35655__auto___35717))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__35655__auto___35717){
return (function (seq35695){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35695));
});})(g__35655__auto___35717))
;


var g__35655__auto___35721 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__35655__auto___35721){
return (function cljs$spec$gen$alpha$map(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35722 = arguments.length;
var i__27788__auto___35723 = (0);
while(true){
if((i__27788__auto___35723 < len__27787__auto___35722)){
args__27794__auto__.push((arguments[i__27788__auto___35723]));

var G__35724 = (i__27788__auto___35723 + (1));
i__27788__auto___35723 = G__35724;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35721))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35721){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35721),args);
});})(g__35655__auto___35721))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__35655__auto___35721){
return (function (seq35696){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35696));
});})(g__35655__auto___35721))
;


var g__35655__auto___35725 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__35655__auto___35725){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35726 = arguments.length;
var i__27788__auto___35727 = (0);
while(true){
if((i__27788__auto___35727 < len__27787__auto___35726)){
args__27794__auto__.push((arguments[i__27788__auto___35727]));

var G__35728 = (i__27788__auto___35727 + (1));
i__27788__auto___35727 = G__35728;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35725))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35725){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35725),args);
});})(g__35655__auto___35725))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__35655__auto___35725){
return (function (seq35697){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35697));
});})(g__35655__auto___35725))
;


var g__35655__auto___35729 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__35655__auto___35729){
return (function cljs$spec$gen$alpha$set(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35730 = arguments.length;
var i__27788__auto___35731 = (0);
while(true){
if((i__27788__auto___35731 < len__27787__auto___35730)){
args__27794__auto__.push((arguments[i__27788__auto___35731]));

var G__35732 = (i__27788__auto___35731 + (1));
i__27788__auto___35731 = G__35732;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35729))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35729){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35729),args);
});})(g__35655__auto___35729))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__35655__auto___35729){
return (function (seq35698){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35698));
});})(g__35655__auto___35729))
;


var g__35655__auto___35733 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__35655__auto___35733){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35734 = arguments.length;
var i__27788__auto___35735 = (0);
while(true){
if((i__27788__auto___35735 < len__27787__auto___35734)){
args__27794__auto__.push((arguments[i__27788__auto___35735]));

var G__35736 = (i__27788__auto___35735 + (1));
i__27788__auto___35735 = G__35736;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35733))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35733){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35733),args);
});})(g__35655__auto___35733))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__35655__auto___35733){
return (function (seq35699){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35699));
});})(g__35655__auto___35733))
;


var g__35655__auto___35737 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__35655__auto___35737){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35738 = arguments.length;
var i__27788__auto___35739 = (0);
while(true){
if((i__27788__auto___35739 < len__27787__auto___35738)){
args__27794__auto__.push((arguments[i__27788__auto___35739]));

var G__35740 = (i__27788__auto___35739 + (1));
i__27788__auto___35739 = G__35740;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35737))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35737){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35737),args);
});})(g__35655__auto___35737))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__35655__auto___35737){
return (function (seq35700){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35700));
});})(g__35655__auto___35737))
;


var g__35655__auto___35741 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__35655__auto___35741){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35742 = arguments.length;
var i__27788__auto___35743 = (0);
while(true){
if((i__27788__auto___35743 < len__27787__auto___35742)){
args__27794__auto__.push((arguments[i__27788__auto___35743]));

var G__35744 = (i__27788__auto___35743 + (1));
i__27788__auto___35743 = G__35744;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35741))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35741){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35741),args);
});})(g__35655__auto___35741))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__35655__auto___35741){
return (function (seq35701){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35701));
});})(g__35655__auto___35741))
;


var g__35655__auto___35745 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__35655__auto___35745){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35746 = arguments.length;
var i__27788__auto___35747 = (0);
while(true){
if((i__27788__auto___35747 < len__27787__auto___35746)){
args__27794__auto__.push((arguments[i__27788__auto___35747]));

var G__35748 = (i__27788__auto___35747 + (1));
i__27788__auto___35747 = G__35748;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35745))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35745){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35745),args);
});})(g__35655__auto___35745))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__35655__auto___35745){
return (function (seq35702){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35702));
});})(g__35655__auto___35745))
;


var g__35655__auto___35749 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__35655__auto___35749){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35750 = arguments.length;
var i__27788__auto___35751 = (0);
while(true){
if((i__27788__auto___35751 < len__27787__auto___35750)){
args__27794__auto__.push((arguments[i__27788__auto___35751]));

var G__35752 = (i__27788__auto___35751 + (1));
i__27788__auto___35751 = G__35752;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35749))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35749){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35749),args);
});})(g__35655__auto___35749))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__35655__auto___35749){
return (function (seq35703){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35703));
});})(g__35655__auto___35749))
;


var g__35655__auto___35753 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__35655__auto___35753){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35754 = arguments.length;
var i__27788__auto___35755 = (0);
while(true){
if((i__27788__auto___35755 < len__27787__auto___35754)){
args__27794__auto__.push((arguments[i__27788__auto___35755]));

var G__35756 = (i__27788__auto___35755 + (1));
i__27788__auto___35755 = G__35756;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35753))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35753){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35753),args);
});})(g__35655__auto___35753))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__35655__auto___35753){
return (function (seq35704){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35704));
});})(g__35655__auto___35753))
;


var g__35655__auto___35757 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__35655__auto___35757){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35758 = arguments.length;
var i__27788__auto___35759 = (0);
while(true){
if((i__27788__auto___35759 < len__27787__auto___35758)){
args__27794__auto__.push((arguments[i__27788__auto___35759]));

var G__35760 = (i__27788__auto___35759 + (1));
i__27788__auto___35759 = G__35760;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35757))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35757){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35757),args);
});})(g__35655__auto___35757))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__35655__auto___35757){
return (function (seq35705){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35705));
});})(g__35655__auto___35757))
;


var g__35655__auto___35761 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__35655__auto___35761){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35762 = arguments.length;
var i__27788__auto___35763 = (0);
while(true){
if((i__27788__auto___35763 < len__27787__auto___35762)){
args__27794__auto__.push((arguments[i__27788__auto___35763]));

var G__35764 = (i__27788__auto___35763 + (1));
i__27788__auto___35763 = G__35764;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35761))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35761){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35761),args);
});})(g__35655__auto___35761))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__35655__auto___35761){
return (function (seq35706){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35706));
});})(g__35655__auto___35761))
;


var g__35655__auto___35765 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__35655__auto___35765){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35766 = arguments.length;
var i__27788__auto___35767 = (0);
while(true){
if((i__27788__auto___35767 < len__27787__auto___35766)){
args__27794__auto__.push((arguments[i__27788__auto___35767]));

var G__35768 = (i__27788__auto___35767 + (1));
i__27788__auto___35767 = G__35768;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35765))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35765){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35765),args);
});})(g__35655__auto___35765))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__35655__auto___35765){
return (function (seq35707){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35707));
});})(g__35655__auto___35765))
;


var g__35655__auto___35769 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__35655__auto___35769){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35770 = arguments.length;
var i__27788__auto___35771 = (0);
while(true){
if((i__27788__auto___35771 < len__27787__auto___35770)){
args__27794__auto__.push((arguments[i__27788__auto___35771]));

var G__35772 = (i__27788__auto___35771 + (1));
i__27788__auto___35771 = G__35772;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35769))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35769){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35769),args);
});})(g__35655__auto___35769))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__35655__auto___35769){
return (function (seq35708){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35708));
});})(g__35655__auto___35769))
;


var g__35655__auto___35773 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__35655__auto___35773){
return (function cljs$spec$gen$alpha$return(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35774 = arguments.length;
var i__27788__auto___35775 = (0);
while(true){
if((i__27788__auto___35775 < len__27787__auto___35774)){
args__27794__auto__.push((arguments[i__27788__auto___35775]));

var G__35776 = (i__27788__auto___35775 + (1));
i__27788__auto___35775 = G__35776;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35773))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35773){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35773),args);
});})(g__35655__auto___35773))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__35655__auto___35773){
return (function (seq35709){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35709));
});})(g__35655__auto___35773))
;


var g__35655__auto___35777 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__35655__auto___35777){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35778 = arguments.length;
var i__27788__auto___35779 = (0);
while(true){
if((i__27788__auto___35779 < len__27787__auto___35778)){
args__27794__auto__.push((arguments[i__27788__auto___35779]));

var G__35780 = (i__27788__auto___35779 + (1));
i__27788__auto___35779 = G__35780;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35777))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35777){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35777),args);
});})(g__35655__auto___35777))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__35655__auto___35777){
return (function (seq35710){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35710));
});})(g__35655__auto___35777))
;


var g__35655__auto___35781 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__35655__auto___35781){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35782 = arguments.length;
var i__27788__auto___35783 = (0);
while(true){
if((i__27788__auto___35783 < len__27787__auto___35782)){
args__27794__auto__.push((arguments[i__27788__auto___35783]));

var G__35784 = (i__27788__auto___35783 + (1));
i__27788__auto___35783 = G__35784;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35781))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35781){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35781),args);
});})(g__35655__auto___35781))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__35655__auto___35781){
return (function (seq35711){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35711));
});})(g__35655__auto___35781))
;


var g__35655__auto___35785 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__35655__auto___35785){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35786 = arguments.length;
var i__27788__auto___35787 = (0);
while(true){
if((i__27788__auto___35787 < len__27787__auto___35786)){
args__27794__auto__.push((arguments[i__27788__auto___35787]));

var G__35788 = (i__27788__auto___35787 + (1));
i__27788__auto___35787 = G__35788;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35655__auto___35785))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35655__auto___35785){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__35655__auto___35785),args);
});})(g__35655__auto___35785))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__35655__auto___35785){
return (function (seq35712){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35712));
});})(g__35655__auto___35785))
;

var g__35668__auto___35810 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__35668__auto___35810){
return (function cljs$spec$gen$alpha$any(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35811 = arguments.length;
var i__27788__auto___35812 = (0);
while(true){
if((i__27788__auto___35812 < len__27787__auto___35811)){
args__27794__auto__.push((arguments[i__27788__auto___35812]));

var G__35813 = (i__27788__auto___35812 + (1));
i__27788__auto___35812 = G__35813;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35810))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35810){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35810);
});})(g__35668__auto___35810))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__35668__auto___35810){
return (function (seq35789){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35789));
});})(g__35668__auto___35810))
;


var g__35668__auto___35814 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__35668__auto___35814){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35815 = arguments.length;
var i__27788__auto___35816 = (0);
while(true){
if((i__27788__auto___35816 < len__27787__auto___35815)){
args__27794__auto__.push((arguments[i__27788__auto___35816]));

var G__35817 = (i__27788__auto___35816 + (1));
i__27788__auto___35816 = G__35817;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35814))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35814){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35814);
});})(g__35668__auto___35814))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__35668__auto___35814){
return (function (seq35790){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35790));
});})(g__35668__auto___35814))
;


var g__35668__auto___35818 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__35668__auto___35818){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35819 = arguments.length;
var i__27788__auto___35820 = (0);
while(true){
if((i__27788__auto___35820 < len__27787__auto___35819)){
args__27794__auto__.push((arguments[i__27788__auto___35820]));

var G__35821 = (i__27788__auto___35820 + (1));
i__27788__auto___35820 = G__35821;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35818))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35818){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35818);
});})(g__35668__auto___35818))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__35668__auto___35818){
return (function (seq35791){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35791));
});})(g__35668__auto___35818))
;


var g__35668__auto___35822 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__35668__auto___35822){
return (function cljs$spec$gen$alpha$char(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35823 = arguments.length;
var i__27788__auto___35824 = (0);
while(true){
if((i__27788__auto___35824 < len__27787__auto___35823)){
args__27794__auto__.push((arguments[i__27788__auto___35824]));

var G__35825 = (i__27788__auto___35824 + (1));
i__27788__auto___35824 = G__35825;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35822))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35822){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35822);
});})(g__35668__auto___35822))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__35668__auto___35822){
return (function (seq35792){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35792));
});})(g__35668__auto___35822))
;


var g__35668__auto___35826 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__35668__auto___35826){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35827 = arguments.length;
var i__27788__auto___35828 = (0);
while(true){
if((i__27788__auto___35828 < len__27787__auto___35827)){
args__27794__auto__.push((arguments[i__27788__auto___35828]));

var G__35829 = (i__27788__auto___35828 + (1));
i__27788__auto___35828 = G__35829;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35826))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35826){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35826);
});})(g__35668__auto___35826))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__35668__auto___35826){
return (function (seq35793){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35793));
});})(g__35668__auto___35826))
;


var g__35668__auto___35830 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__35668__auto___35830){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35831 = arguments.length;
var i__27788__auto___35832 = (0);
while(true){
if((i__27788__auto___35832 < len__27787__auto___35831)){
args__27794__auto__.push((arguments[i__27788__auto___35832]));

var G__35833 = (i__27788__auto___35832 + (1));
i__27788__auto___35832 = G__35833;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35830))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35830){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35830);
});})(g__35668__auto___35830))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__35668__auto___35830){
return (function (seq35794){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35794));
});})(g__35668__auto___35830))
;


var g__35668__auto___35834 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__35668__auto___35834){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35835 = arguments.length;
var i__27788__auto___35836 = (0);
while(true){
if((i__27788__auto___35836 < len__27787__auto___35835)){
args__27794__auto__.push((arguments[i__27788__auto___35836]));

var G__35837 = (i__27788__auto___35836 + (1));
i__27788__auto___35836 = G__35837;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35834))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35834){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35834);
});})(g__35668__auto___35834))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__35668__auto___35834){
return (function (seq35795){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35795));
});})(g__35668__auto___35834))
;


var g__35668__auto___35838 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__35668__auto___35838){
return (function cljs$spec$gen$alpha$double(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35839 = arguments.length;
var i__27788__auto___35840 = (0);
while(true){
if((i__27788__auto___35840 < len__27787__auto___35839)){
args__27794__auto__.push((arguments[i__27788__auto___35840]));

var G__35841 = (i__27788__auto___35840 + (1));
i__27788__auto___35840 = G__35841;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35838))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35838){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35838);
});})(g__35668__auto___35838))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__35668__auto___35838){
return (function (seq35796){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35796));
});})(g__35668__auto___35838))
;


var g__35668__auto___35842 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__35668__auto___35842){
return (function cljs$spec$gen$alpha$int(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35843 = arguments.length;
var i__27788__auto___35844 = (0);
while(true){
if((i__27788__auto___35844 < len__27787__auto___35843)){
args__27794__auto__.push((arguments[i__27788__auto___35844]));

var G__35845 = (i__27788__auto___35844 + (1));
i__27788__auto___35844 = G__35845;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35842))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35842){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35842);
});})(g__35668__auto___35842))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__35668__auto___35842){
return (function (seq35797){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35797));
});})(g__35668__auto___35842))
;


var g__35668__auto___35846 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__35668__auto___35846){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35847 = arguments.length;
var i__27788__auto___35848 = (0);
while(true){
if((i__27788__auto___35848 < len__27787__auto___35847)){
args__27794__auto__.push((arguments[i__27788__auto___35848]));

var G__35849 = (i__27788__auto___35848 + (1));
i__27788__auto___35848 = G__35849;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35846))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35846){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35846);
});})(g__35668__auto___35846))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__35668__auto___35846){
return (function (seq35798){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35798));
});})(g__35668__auto___35846))
;


var g__35668__auto___35850 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__35668__auto___35850){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35851 = arguments.length;
var i__27788__auto___35852 = (0);
while(true){
if((i__27788__auto___35852 < len__27787__auto___35851)){
args__27794__auto__.push((arguments[i__27788__auto___35852]));

var G__35853 = (i__27788__auto___35852 + (1));
i__27788__auto___35852 = G__35853;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35850))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35850){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35850);
});})(g__35668__auto___35850))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__35668__auto___35850){
return (function (seq35799){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35799));
});})(g__35668__auto___35850))
;


var g__35668__auto___35854 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__35668__auto___35854){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35855 = arguments.length;
var i__27788__auto___35856 = (0);
while(true){
if((i__27788__auto___35856 < len__27787__auto___35855)){
args__27794__auto__.push((arguments[i__27788__auto___35856]));

var G__35857 = (i__27788__auto___35856 + (1));
i__27788__auto___35856 = G__35857;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35854))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35854){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35854);
});})(g__35668__auto___35854))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__35668__auto___35854){
return (function (seq35800){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35800));
});})(g__35668__auto___35854))
;


var g__35668__auto___35858 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__35668__auto___35858){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35859 = arguments.length;
var i__27788__auto___35860 = (0);
while(true){
if((i__27788__auto___35860 < len__27787__auto___35859)){
args__27794__auto__.push((arguments[i__27788__auto___35860]));

var G__35861 = (i__27788__auto___35860 + (1));
i__27788__auto___35860 = G__35861;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35858))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35858){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35858);
});})(g__35668__auto___35858))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__35668__auto___35858){
return (function (seq35801){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35801));
});})(g__35668__auto___35858))
;


var g__35668__auto___35862 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__35668__auto___35862){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35863 = arguments.length;
var i__27788__auto___35864 = (0);
while(true){
if((i__27788__auto___35864 < len__27787__auto___35863)){
args__27794__auto__.push((arguments[i__27788__auto___35864]));

var G__35865 = (i__27788__auto___35864 + (1));
i__27788__auto___35864 = G__35865;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35862))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35862){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35862);
});})(g__35668__auto___35862))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__35668__auto___35862){
return (function (seq35802){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35802));
});})(g__35668__auto___35862))
;


var g__35668__auto___35866 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__35668__auto___35866){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35867 = arguments.length;
var i__27788__auto___35868 = (0);
while(true){
if((i__27788__auto___35868 < len__27787__auto___35867)){
args__27794__auto__.push((arguments[i__27788__auto___35868]));

var G__35869 = (i__27788__auto___35868 + (1));
i__27788__auto___35868 = G__35869;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35866))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35866){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35866);
});})(g__35668__auto___35866))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__35668__auto___35866){
return (function (seq35803){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35803));
});})(g__35668__auto___35866))
;


var g__35668__auto___35870 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__35668__auto___35870){
return (function cljs$spec$gen$alpha$string(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35871 = arguments.length;
var i__27788__auto___35872 = (0);
while(true){
if((i__27788__auto___35872 < len__27787__auto___35871)){
args__27794__auto__.push((arguments[i__27788__auto___35872]));

var G__35873 = (i__27788__auto___35872 + (1));
i__27788__auto___35872 = G__35873;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35870))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35870){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35870);
});})(g__35668__auto___35870))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__35668__auto___35870){
return (function (seq35804){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35804));
});})(g__35668__auto___35870))
;


var g__35668__auto___35874 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__35668__auto___35874){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35875 = arguments.length;
var i__27788__auto___35876 = (0);
while(true){
if((i__27788__auto___35876 < len__27787__auto___35875)){
args__27794__auto__.push((arguments[i__27788__auto___35876]));

var G__35877 = (i__27788__auto___35876 + (1));
i__27788__auto___35876 = G__35877;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35874))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35874){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35874);
});})(g__35668__auto___35874))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__35668__auto___35874){
return (function (seq35805){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35805));
});})(g__35668__auto___35874))
;


var g__35668__auto___35878 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__35668__auto___35878){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35879 = arguments.length;
var i__27788__auto___35880 = (0);
while(true){
if((i__27788__auto___35880 < len__27787__auto___35879)){
args__27794__auto__.push((arguments[i__27788__auto___35880]));

var G__35881 = (i__27788__auto___35880 + (1));
i__27788__auto___35880 = G__35881;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35878))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35878){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35878);
});})(g__35668__auto___35878))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__35668__auto___35878){
return (function (seq35806){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35806));
});})(g__35668__auto___35878))
;


var g__35668__auto___35882 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__35668__auto___35882){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35883 = arguments.length;
var i__27788__auto___35884 = (0);
while(true){
if((i__27788__auto___35884 < len__27787__auto___35883)){
args__27794__auto__.push((arguments[i__27788__auto___35884]));

var G__35885 = (i__27788__auto___35884 + (1));
i__27788__auto___35884 = G__35885;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35882))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35882){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35882);
});})(g__35668__auto___35882))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__35668__auto___35882){
return (function (seq35807){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35807));
});})(g__35668__auto___35882))
;


var g__35668__auto___35886 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__35668__auto___35886){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35887 = arguments.length;
var i__27788__auto___35888 = (0);
while(true){
if((i__27788__auto___35888 < len__27787__auto___35887)){
args__27794__auto__.push((arguments[i__27788__auto___35888]));

var G__35889 = (i__27788__auto___35888 + (1));
i__27788__auto___35888 = G__35889;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35886))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35886){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35886);
});})(g__35668__auto___35886))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__35668__auto___35886){
return (function (seq35808){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35808));
});})(g__35668__auto___35886))
;


var g__35668__auto___35890 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Var "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" does not exist, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__35668__auto___35890){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35891 = arguments.length;
var i__27788__auto___35892 = (0);
while(true){
if((i__27788__auto___35892 < len__27787__auto___35891)){
args__27794__auto__.push((arguments[i__27788__auto___35892]));

var G__35893 = (i__27788__auto___35892 + (1));
i__27788__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});})(g__35668__auto___35890))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__35668__auto___35890){
return (function (args){
return cljs.core.deref.call(null,g__35668__auto___35890);
});})(g__35668__auto___35890))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__35668__auto___35890){
return (function (seq35809){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35809));
});})(g__35668__auto___35890))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__27794__auto__ = [];
var len__27787__auto___35896 = arguments.length;
var i__27788__auto___35897 = (0);
while(true){
if((i__27788__auto___35897 < len__27787__auto___35896)){
args__27794__auto__.push((arguments[i__27788__auto___35897]));

var G__35898 = (i__27788__auto___35897 + (1));
i__27788__auto___35897 = G__35898;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((0) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__27795__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__35894_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__35894_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq35895){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35895));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__35899_SHARP_){
return (new Date(p1__35899_SHARP_));
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