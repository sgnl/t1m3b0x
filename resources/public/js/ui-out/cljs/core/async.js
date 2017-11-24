// Compiled by ClojureScript 1.9.542 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args29804 = [];
var len__27568__auto___29810 = arguments.length;
var i__27569__auto___29811 = (0);
while(true){
if((i__27569__auto___29811 < len__27568__auto___29810)){
args29804.push((arguments[i__27569__auto___29811]));

var G__29812 = (i__27569__auto___29811 + (1));
i__27569__auto___29811 = G__29812;
continue;
} else {
}
break;
}

var G__29806 = args29804.length;
switch (G__29806) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29804.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async29807 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29807 = (function (f,blockable,meta29808){
this.f = f;
this.blockable = blockable;
this.meta29808 = meta29808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29809,meta29808__$1){
var self__ = this;
var _29809__$1 = this;
return (new cljs.core.async.t_cljs$core$async29807(self__.f,self__.blockable,meta29808__$1));
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29809){
var self__ = this;
var _29809__$1 = this;
return self__.meta29808;
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async29807.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async29807.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta29808","meta29808",626126567,null)], null);
});

cljs.core.async.t_cljs$core$async29807.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29807.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29807";

cljs.core.async.t_cljs$core$async29807.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async29807");
});

cljs.core.async.__GT_t_cljs$core$async29807 = (function cljs$core$async$__GT_t_cljs$core$async29807(f__$1,blockable__$1,meta29808){
return (new cljs.core.async.t_cljs$core$async29807(f__$1,blockable__$1,meta29808));
});

}

return (new cljs.core.async.t_cljs$core$async29807(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args29816 = [];
var len__27568__auto___29819 = arguments.length;
var i__27569__auto___29820 = (0);
while(true){
if((i__27569__auto___29820 < len__27568__auto___29819)){
args29816.push((arguments[i__27569__auto___29820]));

var G__29821 = (i__27569__auto___29820 + (1));
i__27569__auto___29820 = G__29821;
continue;
} else {
}
break;
}

var G__29818 = args29816.length;
switch (G__29818) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29816.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buffer must be supplied when transducer is"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args29823 = [];
var len__27568__auto___29826 = arguments.length;
var i__27569__auto___29827 = (0);
while(true){
if((i__27569__auto___29827 < len__27568__auto___29826)){
args29823.push((arguments[i__27569__auto___29827]));

var G__29828 = (i__27569__auto___29827 + (1));
i__27569__auto___29827 = G__29828;
continue;
} else {
}
break;
}

var G__29825 = args29823.length;
switch (G__29825) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29823.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args29830 = [];
var len__27568__auto___29833 = arguments.length;
var i__27569__auto___29834 = (0);
while(true){
if((i__27569__auto___29834 < len__27568__auto___29833)){
args29830.push((arguments[i__27569__auto___29834]));

var G__29835 = (i__27569__auto___29834 + (1));
i__27569__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var G__29832 = args29830.length;
switch (G__29832) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29830.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_29837 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_29837);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_29837,ret){
return (function (){
return fn1.call(null,val_29837);
});})(val_29837,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args29838 = [];
var len__27568__auto___29841 = arguments.length;
var i__27569__auto___29842 = (0);
while(true){
if((i__27569__auto___29842 < len__27568__auto___29841)){
args29838.push((arguments[i__27569__auto___29842]));

var G__29843 = (i__27569__auto___29842 + (1));
i__27569__auto___29842 = G__29843;
continue;
} else {
}
break;
}

var G__29840 = args29838.length;
switch (G__29840) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29838.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__27378__auto___29845 = n;
var x_29846 = (0);
while(true){
if((x_29846 < n__27378__auto___29845)){
(a[x_29846] = (0));

var G__29847 = (x_29846 + (1));
x_29846 = G__29847;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__29848 = (i + (1));
i = G__29848;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async29852 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29852 = (function (flag,meta29853){
this.flag = flag;
this.meta29853 = meta29853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_29854,meta29853__$1){
var self__ = this;
var _29854__$1 = this;
return (new cljs.core.async.t_cljs$core$async29852(self__.flag,meta29853__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_29854){
var self__ = this;
var _29854__$1 = this;
return self__.meta29853;
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29853","meta29853",1110030811,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async29852.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29852.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29852";

cljs.core.async.t_cljs$core$async29852.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async29852");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async29852 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29852(flag__$1,meta29853){
return (new cljs.core.async.t_cljs$core$async29852(flag__$1,meta29853));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async29852(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async29858 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29858 = (function (flag,cb,meta29859){
this.flag = flag;
this.cb = cb;
this.meta29859 = meta29859;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29860,meta29859__$1){
var self__ = this;
var _29860__$1 = this;
return (new cljs.core.async.t_cljs$core$async29858(self__.flag,self__.cb,meta29859__$1));
});

cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29860){
var self__ = this;
var _29860__$1 = this;
return self__.meta29859;
});

cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async29858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async29858.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29859","meta29859",-509532202,null)], null);
});

cljs.core.async.t_cljs$core$async29858.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29858.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29858";

cljs.core.async.t_cljs$core$async29858.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async29858");
});

cljs.core.async.__GT_t_cljs$core$async29858 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29858(flag__$1,cb__$1,meta29859){
return (new cljs.core.async.t_cljs$core$async29858(flag__$1,cb__$1,meta29859));
});

}

return (new cljs.core.async.t_cljs$core$async29858(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29861_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29861_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29862_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29862_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26455__auto__ = wport;
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29863 = (i + (1));
i = G__29863;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26455__auto__ = ret;
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26443__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__27575__auto__ = [];
var len__27568__auto___29869 = arguments.length;
var i__27569__auto___29870 = (0);
while(true){
if((i__27569__auto___29870 < len__27568__auto___29869)){
args__27575__auto__.push((arguments[i__27569__auto___29870]));

var G__29871 = (i__27569__auto___29870 + (1));
i__27569__auto___29870 = G__29871;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((1) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27576__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29866){
var map__29867 = p__29866;
var map__29867__$1 = ((((!((map__29867 == null)))?((((map__29867.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29867.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29867):map__29867);
var opts = map__29867__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29864){
var G__29865 = cljs.core.first.call(null,seq29864);
var seq29864__$1 = cljs.core.next.call(null,seq29864);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29865,seq29864__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args29872 = [];
var len__27568__auto___29922 = arguments.length;
var i__27569__auto___29923 = (0);
while(true){
if((i__27569__auto___29923 < len__27568__auto___29922)){
args29872.push((arguments[i__27569__auto___29923]));

var G__29924 = (i__27569__auto___29923 + (1));
i__27569__auto___29923 = G__29924;
continue;
} else {
}
break;
}

var G__29874 = args29872.length;
switch (G__29874) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args29872.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29625__auto___29926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___29926){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___29926){
return (function (state_29898){
var state_val_29899 = (state_29898[(1)]);
if((state_val_29899 === (7))){
var inst_29894 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29900_29927 = state_29898__$1;
(statearr_29900_29927[(2)] = inst_29894);

(statearr_29900_29927[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (1))){
var state_29898__$1 = state_29898;
var statearr_29901_29928 = state_29898__$1;
(statearr_29901_29928[(2)] = null);

(statearr_29901_29928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (4))){
var inst_29877 = (state_29898[(7)]);
var inst_29877__$1 = (state_29898[(2)]);
var inst_29878 = (inst_29877__$1 == null);
var state_29898__$1 = (function (){var statearr_29902 = state_29898;
(statearr_29902[(7)] = inst_29877__$1);

return statearr_29902;
})();
if(cljs.core.truth_(inst_29878)){
var statearr_29903_29929 = state_29898__$1;
(statearr_29903_29929[(1)] = (5));

} else {
var statearr_29904_29930 = state_29898__$1;
(statearr_29904_29930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (13))){
var state_29898__$1 = state_29898;
var statearr_29905_29931 = state_29898__$1;
(statearr_29905_29931[(2)] = null);

(statearr_29905_29931[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (6))){
var inst_29877 = (state_29898[(7)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29898__$1,(11),to,inst_29877);
} else {
if((state_val_29899 === (3))){
var inst_29896 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29898__$1,inst_29896);
} else {
if((state_val_29899 === (12))){
var state_29898__$1 = state_29898;
var statearr_29906_29932 = state_29898__$1;
(statearr_29906_29932[(2)] = null);

(statearr_29906_29932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (2))){
var state_29898__$1 = state_29898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29898__$1,(4),from);
} else {
if((state_val_29899 === (11))){
var inst_29887 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
if(cljs.core.truth_(inst_29887)){
var statearr_29907_29933 = state_29898__$1;
(statearr_29907_29933[(1)] = (12));

} else {
var statearr_29908_29934 = state_29898__$1;
(statearr_29908_29934[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (9))){
var state_29898__$1 = state_29898;
var statearr_29909_29935 = state_29898__$1;
(statearr_29909_29935[(2)] = null);

(statearr_29909_29935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (5))){
var state_29898__$1 = state_29898;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29910_29936 = state_29898__$1;
(statearr_29910_29936[(1)] = (8));

} else {
var statearr_29911_29937 = state_29898__$1;
(statearr_29911_29937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (14))){
var inst_29892 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29912_29938 = state_29898__$1;
(statearr_29912_29938[(2)] = inst_29892);

(statearr_29912_29938[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (10))){
var inst_29884 = (state_29898[(2)]);
var state_29898__$1 = state_29898;
var statearr_29913_29939 = state_29898__$1;
(statearr_29913_29939[(2)] = inst_29884);

(statearr_29913_29939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29899 === (8))){
var inst_29881 = cljs.core.async.close_BANG_.call(null,to);
var state_29898__$1 = state_29898;
var statearr_29914_29940 = state_29898__$1;
(statearr_29914_29940[(2)] = inst_29881);

(statearr_29914_29940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___29926))
;
return ((function (switch__29610__auto__,c__29625__auto___29926){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_29918 = [null,null,null,null,null,null,null,null];
(statearr_29918[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_29918[(1)] = (1));

return statearr_29918;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_29898){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_29898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e29919){if((e29919 instanceof Object)){
var ex__29614__auto__ = e29919;
var statearr_29920_29941 = state_29898;
(statearr_29920_29941[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29919;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29942 = state_29898;
state_29898 = G__29942;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_29898){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_29898);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___29926))
})();
var state__29627__auto__ = (function (){var statearr_29921 = f__29626__auto__.call(null);
(statearr_29921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___29926);

return statearr_29921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___29926))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__30130){
var vec__30131 = p__30130;
var v = cljs.core.nth.call(null,vec__30131,(0),null);
var p = cljs.core.nth.call(null,vec__30131,(1),null);
var job = vec__30131;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29625__auto___30317 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results){
return (function (state_30138){
var state_val_30139 = (state_30138[(1)]);
if((state_val_30139 === (1))){
var state_30138__$1 = state_30138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30138__$1,(2),res,v);
} else {
if((state_val_30139 === (2))){
var inst_30135 = (state_30138[(2)]);
var inst_30136 = cljs.core.async.close_BANG_.call(null,res);
var state_30138__$1 = (function (){var statearr_30140 = state_30138;
(statearr_30140[(7)] = inst_30135);

return statearr_30140;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30138__$1,inst_30136);
} else {
return null;
}
}
});})(c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results))
;
return ((function (switch__29610__auto__,c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_30144 = [null,null,null,null,null,null,null,null];
(statearr_30144[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__);

(statearr_30144[(1)] = (1));

return statearr_30144;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1 = (function (state_30138){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30145){if((e30145 instanceof Object)){
var ex__29614__auto__ = e30145;
var statearr_30146_30318 = state_30138;
(statearr_30146_30318[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30145;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30319 = state_30138;
state_30138 = G__30319;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = function(state_30138){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1.call(this,state_30138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results))
})();
var state__29627__auto__ = (function (){var statearr_30147 = f__29626__auto__.call(null);
(statearr_30147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___30317);

return statearr_30147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___30317,res,vec__30131,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30148){
var vec__30149 = p__30148;
var v = cljs.core.nth.call(null,vec__30149,(0),null);
var p = cljs.core.nth.call(null,vec__30149,(1),null);
var job = vec__30149;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__27378__auto___30320 = n;
var __30321 = (0);
while(true){
if((__30321 < n__27378__auto___30320)){
var G__30152_30322 = type;
var G__30152_30323__$1 = (((G__30152_30322 instanceof cljs.core.Keyword))?G__30152_30322.fqn:null);
switch (G__30152_30323__$1) {
case "compute":
var c__29625__auto___30325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30321,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (__30321,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function (state_30165){
var state_val_30166 = (state_30165[(1)]);
if((state_val_30166 === (1))){
var state_30165__$1 = state_30165;
var statearr_30167_30326 = state_30165__$1;
(statearr_30167_30326[(2)] = null);

(statearr_30167_30326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (2))){
var state_30165__$1 = state_30165;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30165__$1,(4),jobs);
} else {
if((state_val_30166 === (3))){
var inst_30163 = (state_30165[(2)]);
var state_30165__$1 = state_30165;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30165__$1,inst_30163);
} else {
if((state_val_30166 === (4))){
var inst_30155 = (state_30165[(2)]);
var inst_30156 = process.call(null,inst_30155);
var state_30165__$1 = state_30165;
if(cljs.core.truth_(inst_30156)){
var statearr_30168_30327 = state_30165__$1;
(statearr_30168_30327[(1)] = (5));

} else {
var statearr_30169_30328 = state_30165__$1;
(statearr_30169_30328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (5))){
var state_30165__$1 = state_30165;
var statearr_30170_30329 = state_30165__$1;
(statearr_30170_30329[(2)] = null);

(statearr_30170_30329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (6))){
var state_30165__$1 = state_30165;
var statearr_30171_30330 = state_30165__$1;
(statearr_30171_30330[(2)] = null);

(statearr_30171_30330[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30166 === (7))){
var inst_30161 = (state_30165[(2)]);
var state_30165__$1 = state_30165;
var statearr_30172_30331 = state_30165__$1;
(statearr_30172_30331[(2)] = inst_30161);

(statearr_30172_30331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30321,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
;
return ((function (__30321,switch__29610__auto__,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_30176 = [null,null,null,null,null,null,null];
(statearr_30176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__);

(statearr_30176[(1)] = (1));

return statearr_30176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1 = (function (state_30165){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30165);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30177){if((e30177 instanceof Object)){
var ex__29614__auto__ = e30177;
var statearr_30178_30332 = state_30165;
(statearr_30178_30332[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30165);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30177;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30333 = state_30165;
state_30165 = G__30333;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = function(state_30165){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1.call(this,state_30165);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__;
})()
;})(__30321,switch__29610__auto__,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
})();
var state__29627__auto__ = (function (){var statearr_30179 = f__29626__auto__.call(null);
(statearr_30179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___30325);

return statearr_30179;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(__30321,c__29625__auto___30325,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
);


break;
case "async":
var c__29625__auto___30334 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30321,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (__30321,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function (state_30192){
var state_val_30193 = (state_30192[(1)]);
if((state_val_30193 === (1))){
var state_30192__$1 = state_30192;
var statearr_30194_30335 = state_30192__$1;
(statearr_30194_30335[(2)] = null);

(statearr_30194_30335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (2))){
var state_30192__$1 = state_30192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30192__$1,(4),jobs);
} else {
if((state_val_30193 === (3))){
var inst_30190 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30192__$1,inst_30190);
} else {
if((state_val_30193 === (4))){
var inst_30182 = (state_30192[(2)]);
var inst_30183 = async.call(null,inst_30182);
var state_30192__$1 = state_30192;
if(cljs.core.truth_(inst_30183)){
var statearr_30195_30336 = state_30192__$1;
(statearr_30195_30336[(1)] = (5));

} else {
var statearr_30196_30337 = state_30192__$1;
(statearr_30196_30337[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (5))){
var state_30192__$1 = state_30192;
var statearr_30197_30338 = state_30192__$1;
(statearr_30197_30338[(2)] = null);

(statearr_30197_30338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (6))){
var state_30192__$1 = state_30192;
var statearr_30198_30339 = state_30192__$1;
(statearr_30198_30339[(2)] = null);

(statearr_30198_30339[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30193 === (7))){
var inst_30188 = (state_30192[(2)]);
var state_30192__$1 = state_30192;
var statearr_30199_30340 = state_30192__$1;
(statearr_30199_30340[(2)] = inst_30188);

(statearr_30199_30340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__30321,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
;
return ((function (__30321,switch__29610__auto__,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_30203 = [null,null,null,null,null,null,null];
(statearr_30203[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__);

(statearr_30203[(1)] = (1));

return statearr_30203;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1 = (function (state_30192){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30204){if((e30204 instanceof Object)){
var ex__29614__auto__ = e30204;
var statearr_30205_30341 = state_30192;
(statearr_30205_30341[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30342 = state_30192;
state_30192 = G__30342;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = function(state_30192){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1.call(this,state_30192);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__;
})()
;})(__30321,switch__29610__auto__,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
})();
var state__29627__auto__ = (function (){var statearr_30206 = f__29626__auto__.call(null);
(statearr_30206[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___30334);

return statearr_30206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(__30321,c__29625__auto___30334,G__30152_30322,G__30152_30323__$1,n__27378__auto___30320,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30343 = (__30321 + (1));
__30321 = G__30343;
continue;
} else {
}
break;
}

var c__29625__auto___30344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___30344,jobs,results,process,async){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___30344,jobs,results,process,async){
return (function (state_30228){
var state_val_30229 = (state_30228[(1)]);
if((state_val_30229 === (1))){
var state_30228__$1 = state_30228;
var statearr_30230_30345 = state_30228__$1;
(statearr_30230_30345[(2)] = null);

(statearr_30230_30345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (2))){
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30228__$1,(4),from);
} else {
if((state_val_30229 === (3))){
var inst_30226 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30228__$1,inst_30226);
} else {
if((state_val_30229 === (4))){
var inst_30209 = (state_30228[(7)]);
var inst_30209__$1 = (state_30228[(2)]);
var inst_30210 = (inst_30209__$1 == null);
var state_30228__$1 = (function (){var statearr_30231 = state_30228;
(statearr_30231[(7)] = inst_30209__$1);

return statearr_30231;
})();
if(cljs.core.truth_(inst_30210)){
var statearr_30232_30346 = state_30228__$1;
(statearr_30232_30346[(1)] = (5));

} else {
var statearr_30233_30347 = state_30228__$1;
(statearr_30233_30347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (5))){
var inst_30212 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30228__$1 = state_30228;
var statearr_30234_30348 = state_30228__$1;
(statearr_30234_30348[(2)] = inst_30212);

(statearr_30234_30348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (6))){
var inst_30209 = (state_30228[(7)]);
var inst_30214 = (state_30228[(8)]);
var inst_30214__$1 = cljs.core.async.chan.call(null,(1));
var inst_30215 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30216 = [inst_30209,inst_30214__$1];
var inst_30217 = (new cljs.core.PersistentVector(null,2,(5),inst_30215,inst_30216,null));
var state_30228__$1 = (function (){var statearr_30235 = state_30228;
(statearr_30235[(8)] = inst_30214__$1);

return statearr_30235;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30228__$1,(8),jobs,inst_30217);
} else {
if((state_val_30229 === (7))){
var inst_30224 = (state_30228[(2)]);
var state_30228__$1 = state_30228;
var statearr_30236_30349 = state_30228__$1;
(statearr_30236_30349[(2)] = inst_30224);

(statearr_30236_30349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30229 === (8))){
var inst_30214 = (state_30228[(8)]);
var inst_30219 = (state_30228[(2)]);
var state_30228__$1 = (function (){var statearr_30237 = state_30228;
(statearr_30237[(9)] = inst_30219);

return statearr_30237;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30228__$1,(9),results,inst_30214);
} else {
if((state_val_30229 === (9))){
var inst_30221 = (state_30228[(2)]);
var state_30228__$1 = (function (){var statearr_30238 = state_30228;
(statearr_30238[(10)] = inst_30221);

return statearr_30238;
})();
var statearr_30239_30350 = state_30228__$1;
(statearr_30239_30350[(2)] = null);

(statearr_30239_30350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___30344,jobs,results,process,async))
;
return ((function (switch__29610__auto__,c__29625__auto___30344,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_30243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__);

(statearr_30243[(1)] = (1));

return statearr_30243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1 = (function (state_30228){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30244){if((e30244 instanceof Object)){
var ex__29614__auto__ = e30244;
var statearr_30245_30351 = state_30228;
(statearr_30245_30351[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30352 = state_30228;
state_30228 = G__30352;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = function(state_30228){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1.call(this,state_30228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___30344,jobs,results,process,async))
})();
var state__29627__auto__ = (function (){var statearr_30246 = f__29626__auto__.call(null);
(statearr_30246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___30344);

return statearr_30246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___30344,jobs,results,process,async))
);


var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__,jobs,results,process,async){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__,jobs,results,process,async){
return (function (state_30284){
var state_val_30285 = (state_30284[(1)]);
if((state_val_30285 === (7))){
var inst_30280 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
var statearr_30286_30353 = state_30284__$1;
(statearr_30286_30353[(2)] = inst_30280);

(statearr_30286_30353[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (20))){
var state_30284__$1 = state_30284;
var statearr_30287_30354 = state_30284__$1;
(statearr_30287_30354[(2)] = null);

(statearr_30287_30354[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (1))){
var state_30284__$1 = state_30284;
var statearr_30288_30355 = state_30284__$1;
(statearr_30288_30355[(2)] = null);

(statearr_30288_30355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (4))){
var inst_30249 = (state_30284[(7)]);
var inst_30249__$1 = (state_30284[(2)]);
var inst_30250 = (inst_30249__$1 == null);
var state_30284__$1 = (function (){var statearr_30289 = state_30284;
(statearr_30289[(7)] = inst_30249__$1);

return statearr_30289;
})();
if(cljs.core.truth_(inst_30250)){
var statearr_30290_30356 = state_30284__$1;
(statearr_30290_30356[(1)] = (5));

} else {
var statearr_30291_30357 = state_30284__$1;
(statearr_30291_30357[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (15))){
var inst_30262 = (state_30284[(8)]);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30284__$1,(18),to,inst_30262);
} else {
if((state_val_30285 === (21))){
var inst_30275 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
var statearr_30292_30358 = state_30284__$1;
(statearr_30292_30358[(2)] = inst_30275);

(statearr_30292_30358[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (13))){
var inst_30277 = (state_30284[(2)]);
var state_30284__$1 = (function (){var statearr_30293 = state_30284;
(statearr_30293[(9)] = inst_30277);

return statearr_30293;
})();
var statearr_30294_30359 = state_30284__$1;
(statearr_30294_30359[(2)] = null);

(statearr_30294_30359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (6))){
var inst_30249 = (state_30284[(7)]);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30284__$1,(11),inst_30249);
} else {
if((state_val_30285 === (17))){
var inst_30270 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
if(cljs.core.truth_(inst_30270)){
var statearr_30295_30360 = state_30284__$1;
(statearr_30295_30360[(1)] = (19));

} else {
var statearr_30296_30361 = state_30284__$1;
(statearr_30296_30361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (3))){
var inst_30282 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30284__$1,inst_30282);
} else {
if((state_val_30285 === (12))){
var inst_30259 = (state_30284[(10)]);
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30284__$1,(14),inst_30259);
} else {
if((state_val_30285 === (2))){
var state_30284__$1 = state_30284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30284__$1,(4),results);
} else {
if((state_val_30285 === (19))){
var state_30284__$1 = state_30284;
var statearr_30297_30362 = state_30284__$1;
(statearr_30297_30362[(2)] = null);

(statearr_30297_30362[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (11))){
var inst_30259 = (state_30284[(2)]);
var state_30284__$1 = (function (){var statearr_30298 = state_30284;
(statearr_30298[(10)] = inst_30259);

return statearr_30298;
})();
var statearr_30299_30363 = state_30284__$1;
(statearr_30299_30363[(2)] = null);

(statearr_30299_30363[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (9))){
var state_30284__$1 = state_30284;
var statearr_30300_30364 = state_30284__$1;
(statearr_30300_30364[(2)] = null);

(statearr_30300_30364[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (5))){
var state_30284__$1 = state_30284;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30301_30365 = state_30284__$1;
(statearr_30301_30365[(1)] = (8));

} else {
var statearr_30302_30366 = state_30284__$1;
(statearr_30302_30366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (14))){
var inst_30262 = (state_30284[(8)]);
var inst_30264 = (state_30284[(11)]);
var inst_30262__$1 = (state_30284[(2)]);
var inst_30263 = (inst_30262__$1 == null);
var inst_30264__$1 = cljs.core.not.call(null,inst_30263);
var state_30284__$1 = (function (){var statearr_30303 = state_30284;
(statearr_30303[(8)] = inst_30262__$1);

(statearr_30303[(11)] = inst_30264__$1);

return statearr_30303;
})();
if(inst_30264__$1){
var statearr_30304_30367 = state_30284__$1;
(statearr_30304_30367[(1)] = (15));

} else {
var statearr_30305_30368 = state_30284__$1;
(statearr_30305_30368[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (16))){
var inst_30264 = (state_30284[(11)]);
var state_30284__$1 = state_30284;
var statearr_30306_30369 = state_30284__$1;
(statearr_30306_30369[(2)] = inst_30264);

(statearr_30306_30369[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (10))){
var inst_30256 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
var statearr_30307_30370 = state_30284__$1;
(statearr_30307_30370[(2)] = inst_30256);

(statearr_30307_30370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (18))){
var inst_30267 = (state_30284[(2)]);
var state_30284__$1 = state_30284;
var statearr_30308_30371 = state_30284__$1;
(statearr_30308_30371[(2)] = inst_30267);

(statearr_30308_30371[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30285 === (8))){
var inst_30253 = cljs.core.async.close_BANG_.call(null,to);
var state_30284__$1 = state_30284;
var statearr_30309_30372 = state_30284__$1;
(statearr_30309_30372[(2)] = inst_30253);

(statearr_30309_30372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__,jobs,results,process,async))
;
return ((function (switch__29610__auto__,c__29625__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_30313 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30313[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__);

(statearr_30313[(1)] = (1));

return statearr_30313;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1 = (function (state_30284){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30314){if((e30314 instanceof Object)){
var ex__29614__auto__ = e30314;
var statearr_30315_30373 = state_30284;
(statearr_30315_30373[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30314;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30374 = state_30284;
state_30284 = G__30374;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__ = function(state_30284){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1.call(this,state_30284);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__,jobs,results,process,async))
})();
var state__29627__auto__ = (function (){var statearr_30316 = f__29626__auto__.call(null);
(statearr_30316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_30316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__,jobs,results,process,async))
);

return c__29625__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args30375 = [];
var len__27568__auto___30378 = arguments.length;
var i__27569__auto___30379 = (0);
while(true){
if((i__27569__auto___30379 < len__27568__auto___30378)){
args30375.push((arguments[i__27569__auto___30379]));

var G__30380 = (i__27569__auto___30379 + (1));
i__27569__auto___30379 = G__30380;
continue;
} else {
}
break;
}

var G__30377 = args30375.length;
switch (G__30377) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30375.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args30382 = [];
var len__27568__auto___30385 = arguments.length;
var i__27569__auto___30386 = (0);
while(true){
if((i__27569__auto___30386 < len__27568__auto___30385)){
args30382.push((arguments[i__27569__auto___30386]));

var G__30387 = (i__27569__auto___30386 + (1));
i__27569__auto___30386 = G__30387;
continue;
} else {
}
break;
}

var G__30384 = args30382.length;
switch (G__30384) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30382.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args30389 = [];
var len__27568__auto___30442 = arguments.length;
var i__27569__auto___30443 = (0);
while(true){
if((i__27569__auto___30443 < len__27568__auto___30442)){
args30389.push((arguments[i__27569__auto___30443]));

var G__30444 = (i__27569__auto___30443 + (1));
i__27569__auto___30443 = G__30444;
continue;
} else {
}
break;
}

var G__30391 = args30389.length;
switch (G__30391) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30389.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29625__auto___30446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___30446,tc,fc){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___30446,tc,fc){
return (function (state_30417){
var state_val_30418 = (state_30417[(1)]);
if((state_val_30418 === (7))){
var inst_30413 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30419_30447 = state_30417__$1;
(statearr_30419_30447[(2)] = inst_30413);

(statearr_30419_30447[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (1))){
var state_30417__$1 = state_30417;
var statearr_30420_30448 = state_30417__$1;
(statearr_30420_30448[(2)] = null);

(statearr_30420_30448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (4))){
var inst_30394 = (state_30417[(7)]);
var inst_30394__$1 = (state_30417[(2)]);
var inst_30395 = (inst_30394__$1 == null);
var state_30417__$1 = (function (){var statearr_30421 = state_30417;
(statearr_30421[(7)] = inst_30394__$1);

return statearr_30421;
})();
if(cljs.core.truth_(inst_30395)){
var statearr_30422_30449 = state_30417__$1;
(statearr_30422_30449[(1)] = (5));

} else {
var statearr_30423_30450 = state_30417__$1;
(statearr_30423_30450[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (13))){
var state_30417__$1 = state_30417;
var statearr_30424_30451 = state_30417__$1;
(statearr_30424_30451[(2)] = null);

(statearr_30424_30451[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (6))){
var inst_30394 = (state_30417[(7)]);
var inst_30400 = p.call(null,inst_30394);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30400)){
var statearr_30425_30452 = state_30417__$1;
(statearr_30425_30452[(1)] = (9));

} else {
var statearr_30426_30453 = state_30417__$1;
(statearr_30426_30453[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (3))){
var inst_30415 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30417__$1,inst_30415);
} else {
if((state_val_30418 === (12))){
var state_30417__$1 = state_30417;
var statearr_30427_30454 = state_30417__$1;
(statearr_30427_30454[(2)] = null);

(statearr_30427_30454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (2))){
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30417__$1,(4),ch);
} else {
if((state_val_30418 === (11))){
var inst_30394 = (state_30417[(7)]);
var inst_30404 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30417__$1,(8),inst_30404,inst_30394);
} else {
if((state_val_30418 === (9))){
var state_30417__$1 = state_30417;
var statearr_30428_30455 = state_30417__$1;
(statearr_30428_30455[(2)] = tc);

(statearr_30428_30455[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (5))){
var inst_30397 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30398 = cljs.core.async.close_BANG_.call(null,fc);
var state_30417__$1 = (function (){var statearr_30429 = state_30417;
(statearr_30429[(8)] = inst_30397);

return statearr_30429;
})();
var statearr_30430_30456 = state_30417__$1;
(statearr_30430_30456[(2)] = inst_30398);

(statearr_30430_30456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (14))){
var inst_30411 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
var statearr_30431_30457 = state_30417__$1;
(statearr_30431_30457[(2)] = inst_30411);

(statearr_30431_30457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (10))){
var state_30417__$1 = state_30417;
var statearr_30432_30458 = state_30417__$1;
(statearr_30432_30458[(2)] = fc);

(statearr_30432_30458[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30418 === (8))){
var inst_30406 = (state_30417[(2)]);
var state_30417__$1 = state_30417;
if(cljs.core.truth_(inst_30406)){
var statearr_30433_30459 = state_30417__$1;
(statearr_30433_30459[(1)] = (12));

} else {
var statearr_30434_30460 = state_30417__$1;
(statearr_30434_30460[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___30446,tc,fc))
;
return ((function (switch__29610__auto__,c__29625__auto___30446,tc,fc){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_30438 = [null,null,null,null,null,null,null,null,null];
(statearr_30438[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_30438[(1)] = (1));

return statearr_30438;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_30417){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30439){if((e30439 instanceof Object)){
var ex__29614__auto__ = e30439;
var statearr_30440_30461 = state_30417;
(statearr_30440_30461[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30462 = state_30417;
state_30417 = G__30462;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_30417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_30417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___30446,tc,fc))
})();
var state__29627__auto__ = (function (){var statearr_30441 = f__29626__auto__.call(null);
(statearr_30441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___30446);

return statearr_30441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___30446,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_30526){
var state_val_30527 = (state_30526[(1)]);
if((state_val_30527 === (7))){
var inst_30522 = (state_30526[(2)]);
var state_30526__$1 = state_30526;
var statearr_30528_30549 = state_30526__$1;
(statearr_30528_30549[(2)] = inst_30522);

(statearr_30528_30549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (1))){
var inst_30506 = init;
var state_30526__$1 = (function (){var statearr_30529 = state_30526;
(statearr_30529[(7)] = inst_30506);

return statearr_30529;
})();
var statearr_30530_30550 = state_30526__$1;
(statearr_30530_30550[(2)] = null);

(statearr_30530_30550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (4))){
var inst_30509 = (state_30526[(8)]);
var inst_30509__$1 = (state_30526[(2)]);
var inst_30510 = (inst_30509__$1 == null);
var state_30526__$1 = (function (){var statearr_30531 = state_30526;
(statearr_30531[(8)] = inst_30509__$1);

return statearr_30531;
})();
if(cljs.core.truth_(inst_30510)){
var statearr_30532_30551 = state_30526__$1;
(statearr_30532_30551[(1)] = (5));

} else {
var statearr_30533_30552 = state_30526__$1;
(statearr_30533_30552[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (6))){
var inst_30509 = (state_30526[(8)]);
var inst_30506 = (state_30526[(7)]);
var inst_30513 = (state_30526[(9)]);
var inst_30513__$1 = f.call(null,inst_30506,inst_30509);
var inst_30514 = cljs.core.reduced_QMARK_.call(null,inst_30513__$1);
var state_30526__$1 = (function (){var statearr_30534 = state_30526;
(statearr_30534[(9)] = inst_30513__$1);

return statearr_30534;
})();
if(inst_30514){
var statearr_30535_30553 = state_30526__$1;
(statearr_30535_30553[(1)] = (8));

} else {
var statearr_30536_30554 = state_30526__$1;
(statearr_30536_30554[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (3))){
var inst_30524 = (state_30526[(2)]);
var state_30526__$1 = state_30526;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30526__$1,inst_30524);
} else {
if((state_val_30527 === (2))){
var state_30526__$1 = state_30526;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30526__$1,(4),ch);
} else {
if((state_val_30527 === (9))){
var inst_30513 = (state_30526[(9)]);
var inst_30506 = inst_30513;
var state_30526__$1 = (function (){var statearr_30537 = state_30526;
(statearr_30537[(7)] = inst_30506);

return statearr_30537;
})();
var statearr_30538_30555 = state_30526__$1;
(statearr_30538_30555[(2)] = null);

(statearr_30538_30555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (5))){
var inst_30506 = (state_30526[(7)]);
var state_30526__$1 = state_30526;
var statearr_30539_30556 = state_30526__$1;
(statearr_30539_30556[(2)] = inst_30506);

(statearr_30539_30556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (10))){
var inst_30520 = (state_30526[(2)]);
var state_30526__$1 = state_30526;
var statearr_30540_30557 = state_30526__$1;
(statearr_30540_30557[(2)] = inst_30520);

(statearr_30540_30557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30527 === (8))){
var inst_30513 = (state_30526[(9)]);
var inst_30516 = cljs.core.deref.call(null,inst_30513);
var state_30526__$1 = state_30526;
var statearr_30541_30558 = state_30526__$1;
(statearr_30541_30558[(2)] = inst_30516);

(statearr_30541_30558[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29611__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29611__auto____0 = (function (){
var statearr_30545 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30545[(0)] = cljs$core$async$reduce_$_state_machine__29611__auto__);

(statearr_30545[(1)] = (1));

return statearr_30545;
});
var cljs$core$async$reduce_$_state_machine__29611__auto____1 = (function (state_30526){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30526);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30546){if((e30546 instanceof Object)){
var ex__29614__auto__ = e30546;
var statearr_30547_30559 = state_30526;
(statearr_30547_30559[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30526);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30560 = state_30526;
state_30526 = G__30560;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29611__auto__ = function(state_30526){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29611__auto____1.call(this,state_30526);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29611__auto____0;
cljs$core$async$reduce_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29611__auto____1;
return cljs$core$async$reduce_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_30548 = f__29626__auto__.call(null);
(statearr_30548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_30548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__,f__$1){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__,f__$1){
return (function (state_30580){
var state_val_30581 = (state_30580[(1)]);
if((state_val_30581 === (1))){
var inst_30575 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30580__$1,(2),inst_30575);
} else {
if((state_val_30581 === (2))){
var inst_30577 = (state_30580[(2)]);
var inst_30578 = f__$1.call(null,inst_30577);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30580__$1,inst_30578);
} else {
return null;
}
}
});})(c__29625__auto__,f__$1))
;
return ((function (switch__29610__auto__,c__29625__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29611__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29611__auto____0 = (function (){
var statearr_30585 = [null,null,null,null,null,null,null];
(statearr_30585[(0)] = cljs$core$async$transduce_$_state_machine__29611__auto__);

(statearr_30585[(1)] = (1));

return statearr_30585;
});
var cljs$core$async$transduce_$_state_machine__29611__auto____1 = (function (state_30580){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30586){if((e30586 instanceof Object)){
var ex__29614__auto__ = e30586;
var statearr_30587_30589 = state_30580;
(statearr_30587_30589[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30590 = state_30580;
state_30580 = G__30590;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29611__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29611__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29611__auto____0;
cljs$core$async$transduce_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29611__auto____1;
return cljs$core$async$transduce_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__,f__$1))
})();
var state__29627__auto__ = (function (){var statearr_30588 = f__29626__auto__.call(null);
(statearr_30588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_30588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__,f__$1))
);

return c__29625__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args30591 = [];
var len__27568__auto___30643 = arguments.length;
var i__27569__auto___30644 = (0);
while(true){
if((i__27569__auto___30644 < len__27568__auto___30643)){
args30591.push((arguments[i__27569__auto___30644]));

var G__30645 = (i__27569__auto___30644 + (1));
i__27569__auto___30644 = G__30645;
continue;
} else {
}
break;
}

var G__30593 = args30591.length;
switch (G__30593) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30591.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_30618){
var state_val_30619 = (state_30618[(1)]);
if((state_val_30619 === (7))){
var inst_30600 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30620_30647 = state_30618__$1;
(statearr_30620_30647[(2)] = inst_30600);

(statearr_30620_30647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (1))){
var inst_30594 = cljs.core.seq.call(null,coll);
var inst_30595 = inst_30594;
var state_30618__$1 = (function (){var statearr_30621 = state_30618;
(statearr_30621[(7)] = inst_30595);

return statearr_30621;
})();
var statearr_30622_30648 = state_30618__$1;
(statearr_30622_30648[(2)] = null);

(statearr_30622_30648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (4))){
var inst_30595 = (state_30618[(7)]);
var inst_30598 = cljs.core.first.call(null,inst_30595);
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30618__$1,(7),ch,inst_30598);
} else {
if((state_val_30619 === (13))){
var inst_30612 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30623_30649 = state_30618__$1;
(statearr_30623_30649[(2)] = inst_30612);

(statearr_30623_30649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (6))){
var inst_30603 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
if(cljs.core.truth_(inst_30603)){
var statearr_30624_30650 = state_30618__$1;
(statearr_30624_30650[(1)] = (8));

} else {
var statearr_30625_30651 = state_30618__$1;
(statearr_30625_30651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (3))){
var inst_30616 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30618__$1,inst_30616);
} else {
if((state_val_30619 === (12))){
var state_30618__$1 = state_30618;
var statearr_30626_30652 = state_30618__$1;
(statearr_30626_30652[(2)] = null);

(statearr_30626_30652[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (2))){
var inst_30595 = (state_30618[(7)]);
var state_30618__$1 = state_30618;
if(cljs.core.truth_(inst_30595)){
var statearr_30627_30653 = state_30618__$1;
(statearr_30627_30653[(1)] = (4));

} else {
var statearr_30628_30654 = state_30618__$1;
(statearr_30628_30654[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (11))){
var inst_30609 = cljs.core.async.close_BANG_.call(null,ch);
var state_30618__$1 = state_30618;
var statearr_30629_30655 = state_30618__$1;
(statearr_30629_30655[(2)] = inst_30609);

(statearr_30629_30655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (9))){
var state_30618__$1 = state_30618;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30630_30656 = state_30618__$1;
(statearr_30630_30656[(1)] = (11));

} else {
var statearr_30631_30657 = state_30618__$1;
(statearr_30631_30657[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (5))){
var inst_30595 = (state_30618[(7)]);
var state_30618__$1 = state_30618;
var statearr_30632_30658 = state_30618__$1;
(statearr_30632_30658[(2)] = inst_30595);

(statearr_30632_30658[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (10))){
var inst_30614 = (state_30618[(2)]);
var state_30618__$1 = state_30618;
var statearr_30633_30659 = state_30618__$1;
(statearr_30633_30659[(2)] = inst_30614);

(statearr_30633_30659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30619 === (8))){
var inst_30595 = (state_30618[(7)]);
var inst_30605 = cljs.core.next.call(null,inst_30595);
var inst_30595__$1 = inst_30605;
var state_30618__$1 = (function (){var statearr_30634 = state_30618;
(statearr_30634[(7)] = inst_30595__$1);

return statearr_30634;
})();
var statearr_30635_30660 = state_30618__$1;
(statearr_30635_30660[(2)] = null);

(statearr_30635_30660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_30639 = [null,null,null,null,null,null,null,null];
(statearr_30639[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_30639[(1)] = (1));

return statearr_30639;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_30618){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_30618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e30640){if((e30640 instanceof Object)){
var ex__29614__auto__ = e30640;
var statearr_30641_30661 = state_30618;
(statearr_30641_30661[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30640;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30662 = state_30618;
state_30618 = G__30662;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_30642 = f__29626__auto__.call(null);
(statearr_30642[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_30642;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__27123__auto__ = (((_ == null))?null:_);
var m__27124__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,_);
} else {
var m__27124__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27124__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,ch);
} else {
var m__27124__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m);
} else {
var m__27124__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async30888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30888 = (function (ch,cs,meta30889){
this.ch = ch;
this.cs = cs;
this.meta30889 = meta30889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30890,meta30889__$1){
var self__ = this;
var _30890__$1 = this;
return (new cljs.core.async.t_cljs$core$async30888(self__.ch,self__.cs,meta30889__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30890){
var self__ = this;
var _30890__$1 = this;
return self__.meta30889;
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta30889","meta30889",1643013802,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async30888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30888";

cljs.core.async.t_cljs$core$async30888.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async30888");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async30888 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async30888(ch__$1,cs__$1,meta30889){
return (new cljs.core.async.t_cljs$core$async30888(ch__$1,cs__$1,meta30889));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async30888(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__29625__auto___31113 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31113,cs,m,dchan,dctr,done){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31113,cs,m,dchan,dctr,done){
return (function (state_31025){
var state_val_31026 = (state_31025[(1)]);
if((state_val_31026 === (7))){
var inst_31021 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31027_31114 = state_31025__$1;
(statearr_31027_31114[(2)] = inst_31021);

(statearr_31027_31114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (20))){
var inst_30924 = (state_31025[(7)]);
var inst_30936 = cljs.core.first.call(null,inst_30924);
var inst_30937 = cljs.core.nth.call(null,inst_30936,(0),null);
var inst_30938 = cljs.core.nth.call(null,inst_30936,(1),null);
var state_31025__$1 = (function (){var statearr_31028 = state_31025;
(statearr_31028[(8)] = inst_30937);

return statearr_31028;
})();
if(cljs.core.truth_(inst_30938)){
var statearr_31029_31115 = state_31025__$1;
(statearr_31029_31115[(1)] = (22));

} else {
var statearr_31030_31116 = state_31025__$1;
(statearr_31030_31116[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (27))){
var inst_30968 = (state_31025[(9)]);
var inst_30966 = (state_31025[(10)]);
var inst_30893 = (state_31025[(11)]);
var inst_30973 = (state_31025[(12)]);
var inst_30973__$1 = cljs.core._nth.call(null,inst_30966,inst_30968);
var inst_30974 = cljs.core.async.put_BANG_.call(null,inst_30973__$1,inst_30893,done);
var state_31025__$1 = (function (){var statearr_31031 = state_31025;
(statearr_31031[(12)] = inst_30973__$1);

return statearr_31031;
})();
if(cljs.core.truth_(inst_30974)){
var statearr_31032_31117 = state_31025__$1;
(statearr_31032_31117[(1)] = (30));

} else {
var statearr_31033_31118 = state_31025__$1;
(statearr_31033_31118[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (1))){
var state_31025__$1 = state_31025;
var statearr_31034_31119 = state_31025__$1;
(statearr_31034_31119[(2)] = null);

(statearr_31034_31119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (24))){
var inst_30924 = (state_31025[(7)]);
var inst_30943 = (state_31025[(2)]);
var inst_30944 = cljs.core.next.call(null,inst_30924);
var inst_30902 = inst_30944;
var inst_30903 = null;
var inst_30904 = (0);
var inst_30905 = (0);
var state_31025__$1 = (function (){var statearr_31035 = state_31025;
(statearr_31035[(13)] = inst_30943);

(statearr_31035[(14)] = inst_30905);

(statearr_31035[(15)] = inst_30904);

(statearr_31035[(16)] = inst_30902);

(statearr_31035[(17)] = inst_30903);

return statearr_31035;
})();
var statearr_31036_31120 = state_31025__$1;
(statearr_31036_31120[(2)] = null);

(statearr_31036_31120[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (39))){
var state_31025__$1 = state_31025;
var statearr_31040_31121 = state_31025__$1;
(statearr_31040_31121[(2)] = null);

(statearr_31040_31121[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (4))){
var inst_30893 = (state_31025[(11)]);
var inst_30893__$1 = (state_31025[(2)]);
var inst_30894 = (inst_30893__$1 == null);
var state_31025__$1 = (function (){var statearr_31041 = state_31025;
(statearr_31041[(11)] = inst_30893__$1);

return statearr_31041;
})();
if(cljs.core.truth_(inst_30894)){
var statearr_31042_31122 = state_31025__$1;
(statearr_31042_31122[(1)] = (5));

} else {
var statearr_31043_31123 = state_31025__$1;
(statearr_31043_31123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (15))){
var inst_30905 = (state_31025[(14)]);
var inst_30904 = (state_31025[(15)]);
var inst_30902 = (state_31025[(16)]);
var inst_30903 = (state_31025[(17)]);
var inst_30920 = (state_31025[(2)]);
var inst_30921 = (inst_30905 + (1));
var tmp31037 = inst_30904;
var tmp31038 = inst_30902;
var tmp31039 = inst_30903;
var inst_30902__$1 = tmp31038;
var inst_30903__$1 = tmp31039;
var inst_30904__$1 = tmp31037;
var inst_30905__$1 = inst_30921;
var state_31025__$1 = (function (){var statearr_31044 = state_31025;
(statearr_31044[(18)] = inst_30920);

(statearr_31044[(14)] = inst_30905__$1);

(statearr_31044[(15)] = inst_30904__$1);

(statearr_31044[(16)] = inst_30902__$1);

(statearr_31044[(17)] = inst_30903__$1);

return statearr_31044;
})();
var statearr_31045_31124 = state_31025__$1;
(statearr_31045_31124[(2)] = null);

(statearr_31045_31124[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (21))){
var inst_30947 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31049_31125 = state_31025__$1;
(statearr_31049_31125[(2)] = inst_30947);

(statearr_31049_31125[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (31))){
var inst_30973 = (state_31025[(12)]);
var inst_30977 = done.call(null,null);
var inst_30978 = cljs.core.async.untap_STAR_.call(null,m,inst_30973);
var state_31025__$1 = (function (){var statearr_31050 = state_31025;
(statearr_31050[(19)] = inst_30977);

return statearr_31050;
})();
var statearr_31051_31126 = state_31025__$1;
(statearr_31051_31126[(2)] = inst_30978);

(statearr_31051_31126[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (32))){
var inst_30968 = (state_31025[(9)]);
var inst_30966 = (state_31025[(10)]);
var inst_30965 = (state_31025[(20)]);
var inst_30967 = (state_31025[(21)]);
var inst_30980 = (state_31025[(2)]);
var inst_30981 = (inst_30968 + (1));
var tmp31046 = inst_30966;
var tmp31047 = inst_30965;
var tmp31048 = inst_30967;
var inst_30965__$1 = tmp31047;
var inst_30966__$1 = tmp31046;
var inst_30967__$1 = tmp31048;
var inst_30968__$1 = inst_30981;
var state_31025__$1 = (function (){var statearr_31052 = state_31025;
(statearr_31052[(9)] = inst_30968__$1);

(statearr_31052[(10)] = inst_30966__$1);

(statearr_31052[(22)] = inst_30980);

(statearr_31052[(20)] = inst_30965__$1);

(statearr_31052[(21)] = inst_30967__$1);

return statearr_31052;
})();
var statearr_31053_31127 = state_31025__$1;
(statearr_31053_31127[(2)] = null);

(statearr_31053_31127[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (40))){
var inst_30993 = (state_31025[(23)]);
var inst_30997 = done.call(null,null);
var inst_30998 = cljs.core.async.untap_STAR_.call(null,m,inst_30993);
var state_31025__$1 = (function (){var statearr_31054 = state_31025;
(statearr_31054[(24)] = inst_30997);

return statearr_31054;
})();
var statearr_31055_31128 = state_31025__$1;
(statearr_31055_31128[(2)] = inst_30998);

(statearr_31055_31128[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (33))){
var inst_30984 = (state_31025[(25)]);
var inst_30986 = cljs.core.chunked_seq_QMARK_.call(null,inst_30984);
var state_31025__$1 = state_31025;
if(inst_30986){
var statearr_31056_31129 = state_31025__$1;
(statearr_31056_31129[(1)] = (36));

} else {
var statearr_31057_31130 = state_31025__$1;
(statearr_31057_31130[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (13))){
var inst_30914 = (state_31025[(26)]);
var inst_30917 = cljs.core.async.close_BANG_.call(null,inst_30914);
var state_31025__$1 = state_31025;
var statearr_31058_31131 = state_31025__$1;
(statearr_31058_31131[(2)] = inst_30917);

(statearr_31058_31131[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (22))){
var inst_30937 = (state_31025[(8)]);
var inst_30940 = cljs.core.async.close_BANG_.call(null,inst_30937);
var state_31025__$1 = state_31025;
var statearr_31059_31132 = state_31025__$1;
(statearr_31059_31132[(2)] = inst_30940);

(statearr_31059_31132[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (36))){
var inst_30984 = (state_31025[(25)]);
var inst_30988 = cljs.core.chunk_first.call(null,inst_30984);
var inst_30989 = cljs.core.chunk_rest.call(null,inst_30984);
var inst_30990 = cljs.core.count.call(null,inst_30988);
var inst_30965 = inst_30989;
var inst_30966 = inst_30988;
var inst_30967 = inst_30990;
var inst_30968 = (0);
var state_31025__$1 = (function (){var statearr_31060 = state_31025;
(statearr_31060[(9)] = inst_30968);

(statearr_31060[(10)] = inst_30966);

(statearr_31060[(20)] = inst_30965);

(statearr_31060[(21)] = inst_30967);

return statearr_31060;
})();
var statearr_31061_31133 = state_31025__$1;
(statearr_31061_31133[(2)] = null);

(statearr_31061_31133[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (41))){
var inst_30984 = (state_31025[(25)]);
var inst_31000 = (state_31025[(2)]);
var inst_31001 = cljs.core.next.call(null,inst_30984);
var inst_30965 = inst_31001;
var inst_30966 = null;
var inst_30967 = (0);
var inst_30968 = (0);
var state_31025__$1 = (function (){var statearr_31062 = state_31025;
(statearr_31062[(9)] = inst_30968);

(statearr_31062[(10)] = inst_30966);

(statearr_31062[(20)] = inst_30965);

(statearr_31062[(27)] = inst_31000);

(statearr_31062[(21)] = inst_30967);

return statearr_31062;
})();
var statearr_31063_31134 = state_31025__$1;
(statearr_31063_31134[(2)] = null);

(statearr_31063_31134[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (43))){
var state_31025__$1 = state_31025;
var statearr_31064_31135 = state_31025__$1;
(statearr_31064_31135[(2)] = null);

(statearr_31064_31135[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (29))){
var inst_31009 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31065_31136 = state_31025__$1;
(statearr_31065_31136[(2)] = inst_31009);

(statearr_31065_31136[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (44))){
var inst_31018 = (state_31025[(2)]);
var state_31025__$1 = (function (){var statearr_31066 = state_31025;
(statearr_31066[(28)] = inst_31018);

return statearr_31066;
})();
var statearr_31067_31137 = state_31025__$1;
(statearr_31067_31137[(2)] = null);

(statearr_31067_31137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (6))){
var inst_30957 = (state_31025[(29)]);
var inst_30956 = cljs.core.deref.call(null,cs);
var inst_30957__$1 = cljs.core.keys.call(null,inst_30956);
var inst_30958 = cljs.core.count.call(null,inst_30957__$1);
var inst_30959 = cljs.core.reset_BANG_.call(null,dctr,inst_30958);
var inst_30964 = cljs.core.seq.call(null,inst_30957__$1);
var inst_30965 = inst_30964;
var inst_30966 = null;
var inst_30967 = (0);
var inst_30968 = (0);
var state_31025__$1 = (function (){var statearr_31068 = state_31025;
(statearr_31068[(9)] = inst_30968);

(statearr_31068[(10)] = inst_30966);

(statearr_31068[(20)] = inst_30965);

(statearr_31068[(29)] = inst_30957__$1);

(statearr_31068[(21)] = inst_30967);

(statearr_31068[(30)] = inst_30959);

return statearr_31068;
})();
var statearr_31069_31138 = state_31025__$1;
(statearr_31069_31138[(2)] = null);

(statearr_31069_31138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (28))){
var inst_30965 = (state_31025[(20)]);
var inst_30984 = (state_31025[(25)]);
var inst_30984__$1 = cljs.core.seq.call(null,inst_30965);
var state_31025__$1 = (function (){var statearr_31070 = state_31025;
(statearr_31070[(25)] = inst_30984__$1);

return statearr_31070;
})();
if(inst_30984__$1){
var statearr_31071_31139 = state_31025__$1;
(statearr_31071_31139[(1)] = (33));

} else {
var statearr_31072_31140 = state_31025__$1;
(statearr_31072_31140[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (25))){
var inst_30968 = (state_31025[(9)]);
var inst_30967 = (state_31025[(21)]);
var inst_30970 = (inst_30968 < inst_30967);
var inst_30971 = inst_30970;
var state_31025__$1 = state_31025;
if(cljs.core.truth_(inst_30971)){
var statearr_31073_31141 = state_31025__$1;
(statearr_31073_31141[(1)] = (27));

} else {
var statearr_31074_31142 = state_31025__$1;
(statearr_31074_31142[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (34))){
var state_31025__$1 = state_31025;
var statearr_31075_31143 = state_31025__$1;
(statearr_31075_31143[(2)] = null);

(statearr_31075_31143[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (17))){
var state_31025__$1 = state_31025;
var statearr_31076_31144 = state_31025__$1;
(statearr_31076_31144[(2)] = null);

(statearr_31076_31144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (3))){
var inst_31023 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31025__$1,inst_31023);
} else {
if((state_val_31026 === (12))){
var inst_30952 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31077_31145 = state_31025__$1;
(statearr_31077_31145[(2)] = inst_30952);

(statearr_31077_31145[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (2))){
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31025__$1,(4),ch);
} else {
if((state_val_31026 === (23))){
var state_31025__$1 = state_31025;
var statearr_31078_31146 = state_31025__$1;
(statearr_31078_31146[(2)] = null);

(statearr_31078_31146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (35))){
var inst_31007 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31079_31147 = state_31025__$1;
(statearr_31079_31147[(2)] = inst_31007);

(statearr_31079_31147[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (19))){
var inst_30924 = (state_31025[(7)]);
var inst_30928 = cljs.core.chunk_first.call(null,inst_30924);
var inst_30929 = cljs.core.chunk_rest.call(null,inst_30924);
var inst_30930 = cljs.core.count.call(null,inst_30928);
var inst_30902 = inst_30929;
var inst_30903 = inst_30928;
var inst_30904 = inst_30930;
var inst_30905 = (0);
var state_31025__$1 = (function (){var statearr_31080 = state_31025;
(statearr_31080[(14)] = inst_30905);

(statearr_31080[(15)] = inst_30904);

(statearr_31080[(16)] = inst_30902);

(statearr_31080[(17)] = inst_30903);

return statearr_31080;
})();
var statearr_31081_31148 = state_31025__$1;
(statearr_31081_31148[(2)] = null);

(statearr_31081_31148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (11))){
var inst_30924 = (state_31025[(7)]);
var inst_30902 = (state_31025[(16)]);
var inst_30924__$1 = cljs.core.seq.call(null,inst_30902);
var state_31025__$1 = (function (){var statearr_31082 = state_31025;
(statearr_31082[(7)] = inst_30924__$1);

return statearr_31082;
})();
if(inst_30924__$1){
var statearr_31083_31149 = state_31025__$1;
(statearr_31083_31149[(1)] = (16));

} else {
var statearr_31084_31150 = state_31025__$1;
(statearr_31084_31150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (9))){
var inst_30954 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31085_31151 = state_31025__$1;
(statearr_31085_31151[(2)] = inst_30954);

(statearr_31085_31151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (5))){
var inst_30900 = cljs.core.deref.call(null,cs);
var inst_30901 = cljs.core.seq.call(null,inst_30900);
var inst_30902 = inst_30901;
var inst_30903 = null;
var inst_30904 = (0);
var inst_30905 = (0);
var state_31025__$1 = (function (){var statearr_31086 = state_31025;
(statearr_31086[(14)] = inst_30905);

(statearr_31086[(15)] = inst_30904);

(statearr_31086[(16)] = inst_30902);

(statearr_31086[(17)] = inst_30903);

return statearr_31086;
})();
var statearr_31087_31152 = state_31025__$1;
(statearr_31087_31152[(2)] = null);

(statearr_31087_31152[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (14))){
var state_31025__$1 = state_31025;
var statearr_31088_31153 = state_31025__$1;
(statearr_31088_31153[(2)] = null);

(statearr_31088_31153[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (45))){
var inst_31015 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31089_31154 = state_31025__$1;
(statearr_31089_31154[(2)] = inst_31015);

(statearr_31089_31154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (26))){
var inst_30957 = (state_31025[(29)]);
var inst_31011 = (state_31025[(2)]);
var inst_31012 = cljs.core.seq.call(null,inst_30957);
var state_31025__$1 = (function (){var statearr_31090 = state_31025;
(statearr_31090[(31)] = inst_31011);

return statearr_31090;
})();
if(inst_31012){
var statearr_31091_31155 = state_31025__$1;
(statearr_31091_31155[(1)] = (42));

} else {
var statearr_31092_31156 = state_31025__$1;
(statearr_31092_31156[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (16))){
var inst_30924 = (state_31025[(7)]);
var inst_30926 = cljs.core.chunked_seq_QMARK_.call(null,inst_30924);
var state_31025__$1 = state_31025;
if(inst_30926){
var statearr_31093_31157 = state_31025__$1;
(statearr_31093_31157[(1)] = (19));

} else {
var statearr_31094_31158 = state_31025__$1;
(statearr_31094_31158[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (38))){
var inst_31004 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31095_31159 = state_31025__$1;
(statearr_31095_31159[(2)] = inst_31004);

(statearr_31095_31159[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (30))){
var state_31025__$1 = state_31025;
var statearr_31096_31160 = state_31025__$1;
(statearr_31096_31160[(2)] = null);

(statearr_31096_31160[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (10))){
var inst_30905 = (state_31025[(14)]);
var inst_30903 = (state_31025[(17)]);
var inst_30913 = cljs.core._nth.call(null,inst_30903,inst_30905);
var inst_30914 = cljs.core.nth.call(null,inst_30913,(0),null);
var inst_30915 = cljs.core.nth.call(null,inst_30913,(1),null);
var state_31025__$1 = (function (){var statearr_31097 = state_31025;
(statearr_31097[(26)] = inst_30914);

return statearr_31097;
})();
if(cljs.core.truth_(inst_30915)){
var statearr_31098_31161 = state_31025__$1;
(statearr_31098_31161[(1)] = (13));

} else {
var statearr_31099_31162 = state_31025__$1;
(statearr_31099_31162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (18))){
var inst_30950 = (state_31025[(2)]);
var state_31025__$1 = state_31025;
var statearr_31100_31163 = state_31025__$1;
(statearr_31100_31163[(2)] = inst_30950);

(statearr_31100_31163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (42))){
var state_31025__$1 = state_31025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31025__$1,(45),dchan);
} else {
if((state_val_31026 === (37))){
var inst_30893 = (state_31025[(11)]);
var inst_30984 = (state_31025[(25)]);
var inst_30993 = (state_31025[(23)]);
var inst_30993__$1 = cljs.core.first.call(null,inst_30984);
var inst_30994 = cljs.core.async.put_BANG_.call(null,inst_30993__$1,inst_30893,done);
var state_31025__$1 = (function (){var statearr_31101 = state_31025;
(statearr_31101[(23)] = inst_30993__$1);

return statearr_31101;
})();
if(cljs.core.truth_(inst_30994)){
var statearr_31102_31164 = state_31025__$1;
(statearr_31102_31164[(1)] = (39));

} else {
var statearr_31103_31165 = state_31025__$1;
(statearr_31103_31165[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31026 === (8))){
var inst_30905 = (state_31025[(14)]);
var inst_30904 = (state_31025[(15)]);
var inst_30907 = (inst_30905 < inst_30904);
var inst_30908 = inst_30907;
var state_31025__$1 = state_31025;
if(cljs.core.truth_(inst_30908)){
var statearr_31104_31166 = state_31025__$1;
(statearr_31104_31166[(1)] = (10));

} else {
var statearr_31105_31167 = state_31025__$1;
(statearr_31105_31167[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31113,cs,m,dchan,dctr,done))
;
return ((function (switch__29610__auto__,c__29625__auto___31113,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29611__auto__ = null;
var cljs$core$async$mult_$_state_machine__29611__auto____0 = (function (){
var statearr_31109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31109[(0)] = cljs$core$async$mult_$_state_machine__29611__auto__);

(statearr_31109[(1)] = (1));

return statearr_31109;
});
var cljs$core$async$mult_$_state_machine__29611__auto____1 = (function (state_31025){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31110){if((e31110 instanceof Object)){
var ex__29614__auto__ = e31110;
var statearr_31111_31168 = state_31025;
(statearr_31111_31168[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31169 = state_31025;
state_31025 = G__31169;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29611__auto__ = function(state_31025){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29611__auto____1.call(this,state_31025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29611__auto____0;
cljs$core$async$mult_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29611__auto____1;
return cljs$core$async$mult_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31113,cs,m,dchan,dctr,done))
})();
var state__29627__auto__ = (function (){var statearr_31112 = f__29626__auto__.call(null);
(statearr_31112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31113);

return statearr_31112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31113,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args31170 = [];
var len__27568__auto___31173 = arguments.length;
var i__27569__auto___31174 = (0);
while(true){
if((i__27569__auto___31174 < len__27568__auto___31173)){
args31170.push((arguments[i__27569__auto___31174]));

var G__31175 = (i__27569__auto___31174 + (1));
i__27569__auto___31174 = G__31175;
continue;
} else {
}
break;
}

var G__31172 = args31170.length;
switch (G__31172) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31170.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,ch);
} else {
var m__27124__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,ch);
} else {
var m__27124__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m);
} else {
var m__27124__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,state_map);
} else {
var m__27124__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__27123__auto__ = (((m == null))?null:m);
var m__27124__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,m,mode);
} else {
var m__27124__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27575__auto__ = [];
var len__27568__auto___31187 = arguments.length;
var i__27569__auto___31188 = (0);
while(true){
if((i__27569__auto___31188 < len__27568__auto___31187)){
args__27575__auto__.push((arguments[i__27569__auto___31188]));

var G__31189 = (i__27569__auto___31188 + (1));
i__27569__auto___31188 = G__31189;
continue;
} else {
}
break;
}

var argseq__27576__auto__ = ((((3) < args__27575__auto__.length))?(new cljs.core.IndexedSeq(args__27575__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27576__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31181){
var map__31182 = p__31181;
var map__31182__$1 = ((((!((map__31182 == null)))?((((map__31182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31182):map__31182);
var opts = map__31182__$1;
var statearr_31184_31190 = state;
(statearr_31184_31190[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31182,map__31182__$1,opts){
return (function (val){
var statearr_31185_31191 = state;
(statearr_31185_31191[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31182,map__31182__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31186_31192 = state;
(statearr_31186_31192[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31177){
var G__31178 = cljs.core.first.call(null,seq31177);
var seq31177__$1 = cljs.core.next.call(null,seq31177);
var G__31179 = cljs.core.first.call(null,seq31177__$1);
var seq31177__$2 = cljs.core.next.call(null,seq31177__$1);
var G__31180 = cljs.core.first.call(null,seq31177__$2);
var seq31177__$3 = cljs.core.next.call(null,seq31177__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31178,G__31179,G__31180,seq31177__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async31360 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31360 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31361){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31361 = meta31361;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31362,meta31361__$1){
var self__ = this;
var _31362__$1 = this;
return (new cljs.core.async.t_cljs$core$async31360(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31361__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31362){
var self__ = this;
var _31362__$1 = this;
return self__.meta31361;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("mode must be one of: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31361","meta31361",-1048240088,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31360.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31360.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31360";

cljs.core.async.t_cljs$core$async31360.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async31360");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31360 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31361){
return (new cljs.core.async.t_cljs$core$async31360(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31361));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31360(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29625__auto___31527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31464){
var state_val_31465 = (state_31464[(1)]);
if((state_val_31465 === (7))){
var inst_31379 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
var statearr_31466_31528 = state_31464__$1;
(statearr_31466_31528[(2)] = inst_31379);

(statearr_31466_31528[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (20))){
var inst_31391 = (state_31464[(7)]);
var state_31464__$1 = state_31464;
var statearr_31467_31529 = state_31464__$1;
(statearr_31467_31529[(2)] = inst_31391);

(statearr_31467_31529[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (27))){
var state_31464__$1 = state_31464;
var statearr_31468_31530 = state_31464__$1;
(statearr_31468_31530[(2)] = null);

(statearr_31468_31530[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (1))){
var inst_31366 = (state_31464[(8)]);
var inst_31366__$1 = calc_state.call(null);
var inst_31368 = (inst_31366__$1 == null);
var inst_31369 = cljs.core.not.call(null,inst_31368);
var state_31464__$1 = (function (){var statearr_31469 = state_31464;
(statearr_31469[(8)] = inst_31366__$1);

return statearr_31469;
})();
if(inst_31369){
var statearr_31470_31531 = state_31464__$1;
(statearr_31470_31531[(1)] = (2));

} else {
var statearr_31471_31532 = state_31464__$1;
(statearr_31471_31532[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (24))){
var inst_31424 = (state_31464[(9)]);
var inst_31438 = (state_31464[(10)]);
var inst_31415 = (state_31464[(11)]);
var inst_31438__$1 = inst_31415.call(null,inst_31424);
var state_31464__$1 = (function (){var statearr_31472 = state_31464;
(statearr_31472[(10)] = inst_31438__$1);

return statearr_31472;
})();
if(cljs.core.truth_(inst_31438__$1)){
var statearr_31473_31533 = state_31464__$1;
(statearr_31473_31533[(1)] = (29));

} else {
var statearr_31474_31534 = state_31464__$1;
(statearr_31474_31534[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (4))){
var inst_31382 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31382)){
var statearr_31475_31535 = state_31464__$1;
(statearr_31475_31535[(1)] = (8));

} else {
var statearr_31476_31536 = state_31464__$1;
(statearr_31476_31536[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (15))){
var inst_31409 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31409)){
var statearr_31477_31537 = state_31464__$1;
(statearr_31477_31537[(1)] = (19));

} else {
var statearr_31478_31538 = state_31464__$1;
(statearr_31478_31538[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (21))){
var inst_31414 = (state_31464[(12)]);
var inst_31414__$1 = (state_31464[(2)]);
var inst_31415 = cljs.core.get.call(null,inst_31414__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31416 = cljs.core.get.call(null,inst_31414__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31417 = cljs.core.get.call(null,inst_31414__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31464__$1 = (function (){var statearr_31479 = state_31464;
(statearr_31479[(12)] = inst_31414__$1);

(statearr_31479[(13)] = inst_31416);

(statearr_31479[(11)] = inst_31415);

return statearr_31479;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31464__$1,(22),inst_31417);
} else {
if((state_val_31465 === (31))){
var inst_31446 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31446)){
var statearr_31480_31539 = state_31464__$1;
(statearr_31480_31539[(1)] = (32));

} else {
var statearr_31481_31540 = state_31464__$1;
(statearr_31481_31540[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (32))){
var inst_31423 = (state_31464[(14)]);
var state_31464__$1 = state_31464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31464__$1,(35),out,inst_31423);
} else {
if((state_val_31465 === (33))){
var inst_31414 = (state_31464[(12)]);
var inst_31391 = inst_31414;
var state_31464__$1 = (function (){var statearr_31482 = state_31464;
(statearr_31482[(7)] = inst_31391);

return statearr_31482;
})();
var statearr_31483_31541 = state_31464__$1;
(statearr_31483_31541[(2)] = null);

(statearr_31483_31541[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (13))){
var inst_31391 = (state_31464[(7)]);
var inst_31398 = inst_31391.cljs$lang$protocol_mask$partition0$;
var inst_31399 = (inst_31398 & (64));
var inst_31400 = inst_31391.cljs$core$ISeq$;
var inst_31401 = (cljs.core.PROTOCOL_SENTINEL === inst_31400);
var inst_31402 = (inst_31399) || (inst_31401);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31402)){
var statearr_31484_31542 = state_31464__$1;
(statearr_31484_31542[(1)] = (16));

} else {
var statearr_31485_31543 = state_31464__$1;
(statearr_31485_31543[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (22))){
var inst_31423 = (state_31464[(14)]);
var inst_31424 = (state_31464[(9)]);
var inst_31422 = (state_31464[(2)]);
var inst_31423__$1 = cljs.core.nth.call(null,inst_31422,(0),null);
var inst_31424__$1 = cljs.core.nth.call(null,inst_31422,(1),null);
var inst_31425 = (inst_31423__$1 == null);
var inst_31426 = cljs.core._EQ_.call(null,inst_31424__$1,change);
var inst_31427 = (inst_31425) || (inst_31426);
var state_31464__$1 = (function (){var statearr_31486 = state_31464;
(statearr_31486[(14)] = inst_31423__$1);

(statearr_31486[(9)] = inst_31424__$1);

return statearr_31486;
})();
if(cljs.core.truth_(inst_31427)){
var statearr_31487_31544 = state_31464__$1;
(statearr_31487_31544[(1)] = (23));

} else {
var statearr_31488_31545 = state_31464__$1;
(statearr_31488_31545[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (36))){
var inst_31414 = (state_31464[(12)]);
var inst_31391 = inst_31414;
var state_31464__$1 = (function (){var statearr_31489 = state_31464;
(statearr_31489[(7)] = inst_31391);

return statearr_31489;
})();
var statearr_31490_31546 = state_31464__$1;
(statearr_31490_31546[(2)] = null);

(statearr_31490_31546[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (29))){
var inst_31438 = (state_31464[(10)]);
var state_31464__$1 = state_31464;
var statearr_31491_31547 = state_31464__$1;
(statearr_31491_31547[(2)] = inst_31438);

(statearr_31491_31547[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (6))){
var state_31464__$1 = state_31464;
var statearr_31492_31548 = state_31464__$1;
(statearr_31492_31548[(2)] = false);

(statearr_31492_31548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (28))){
var inst_31434 = (state_31464[(2)]);
var inst_31435 = calc_state.call(null);
var inst_31391 = inst_31435;
var state_31464__$1 = (function (){var statearr_31493 = state_31464;
(statearr_31493[(7)] = inst_31391);

(statearr_31493[(15)] = inst_31434);

return statearr_31493;
})();
var statearr_31494_31549 = state_31464__$1;
(statearr_31494_31549[(2)] = null);

(statearr_31494_31549[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (25))){
var inst_31460 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
var statearr_31495_31550 = state_31464__$1;
(statearr_31495_31550[(2)] = inst_31460);

(statearr_31495_31550[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (34))){
var inst_31458 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
var statearr_31496_31551 = state_31464__$1;
(statearr_31496_31551[(2)] = inst_31458);

(statearr_31496_31551[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (17))){
var state_31464__$1 = state_31464;
var statearr_31497_31552 = state_31464__$1;
(statearr_31497_31552[(2)] = false);

(statearr_31497_31552[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (3))){
var state_31464__$1 = state_31464;
var statearr_31498_31553 = state_31464__$1;
(statearr_31498_31553[(2)] = false);

(statearr_31498_31553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (12))){
var inst_31462 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31464__$1,inst_31462);
} else {
if((state_val_31465 === (2))){
var inst_31366 = (state_31464[(8)]);
var inst_31371 = inst_31366.cljs$lang$protocol_mask$partition0$;
var inst_31372 = (inst_31371 & (64));
var inst_31373 = inst_31366.cljs$core$ISeq$;
var inst_31374 = (cljs.core.PROTOCOL_SENTINEL === inst_31373);
var inst_31375 = (inst_31372) || (inst_31374);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31375)){
var statearr_31499_31554 = state_31464__$1;
(statearr_31499_31554[(1)] = (5));

} else {
var statearr_31500_31555 = state_31464__$1;
(statearr_31500_31555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (23))){
var inst_31423 = (state_31464[(14)]);
var inst_31429 = (inst_31423 == null);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31429)){
var statearr_31501_31556 = state_31464__$1;
(statearr_31501_31556[(1)] = (26));

} else {
var statearr_31502_31557 = state_31464__$1;
(statearr_31502_31557[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (35))){
var inst_31449 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
if(cljs.core.truth_(inst_31449)){
var statearr_31503_31558 = state_31464__$1;
(statearr_31503_31558[(1)] = (36));

} else {
var statearr_31504_31559 = state_31464__$1;
(statearr_31504_31559[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (19))){
var inst_31391 = (state_31464[(7)]);
var inst_31411 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31391);
var state_31464__$1 = state_31464;
var statearr_31505_31560 = state_31464__$1;
(statearr_31505_31560[(2)] = inst_31411);

(statearr_31505_31560[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (11))){
var inst_31391 = (state_31464[(7)]);
var inst_31395 = (inst_31391 == null);
var inst_31396 = cljs.core.not.call(null,inst_31395);
var state_31464__$1 = state_31464;
if(inst_31396){
var statearr_31506_31561 = state_31464__$1;
(statearr_31506_31561[(1)] = (13));

} else {
var statearr_31507_31562 = state_31464__$1;
(statearr_31507_31562[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (9))){
var inst_31366 = (state_31464[(8)]);
var state_31464__$1 = state_31464;
var statearr_31508_31563 = state_31464__$1;
(statearr_31508_31563[(2)] = inst_31366);

(statearr_31508_31563[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (5))){
var state_31464__$1 = state_31464;
var statearr_31509_31564 = state_31464__$1;
(statearr_31509_31564[(2)] = true);

(statearr_31509_31564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (14))){
var state_31464__$1 = state_31464;
var statearr_31510_31565 = state_31464__$1;
(statearr_31510_31565[(2)] = false);

(statearr_31510_31565[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (26))){
var inst_31424 = (state_31464[(9)]);
var inst_31431 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31424);
var state_31464__$1 = state_31464;
var statearr_31511_31566 = state_31464__$1;
(statearr_31511_31566[(2)] = inst_31431);

(statearr_31511_31566[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (16))){
var state_31464__$1 = state_31464;
var statearr_31512_31567 = state_31464__$1;
(statearr_31512_31567[(2)] = true);

(statearr_31512_31567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (38))){
var inst_31454 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
var statearr_31513_31568 = state_31464__$1;
(statearr_31513_31568[(2)] = inst_31454);

(statearr_31513_31568[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (30))){
var inst_31424 = (state_31464[(9)]);
var inst_31416 = (state_31464[(13)]);
var inst_31415 = (state_31464[(11)]);
var inst_31441 = cljs.core.empty_QMARK_.call(null,inst_31415);
var inst_31442 = inst_31416.call(null,inst_31424);
var inst_31443 = cljs.core.not.call(null,inst_31442);
var inst_31444 = (inst_31441) && (inst_31443);
var state_31464__$1 = state_31464;
var statearr_31514_31569 = state_31464__$1;
(statearr_31514_31569[(2)] = inst_31444);

(statearr_31514_31569[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (10))){
var inst_31366 = (state_31464[(8)]);
var inst_31387 = (state_31464[(2)]);
var inst_31388 = cljs.core.get.call(null,inst_31387,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31389 = cljs.core.get.call(null,inst_31387,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31390 = cljs.core.get.call(null,inst_31387,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31391 = inst_31366;
var state_31464__$1 = (function (){var statearr_31515 = state_31464;
(statearr_31515[(16)] = inst_31390);

(statearr_31515[(7)] = inst_31391);

(statearr_31515[(17)] = inst_31388);

(statearr_31515[(18)] = inst_31389);

return statearr_31515;
})();
var statearr_31516_31570 = state_31464__$1;
(statearr_31516_31570[(2)] = null);

(statearr_31516_31570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (18))){
var inst_31406 = (state_31464[(2)]);
var state_31464__$1 = state_31464;
var statearr_31517_31571 = state_31464__$1;
(statearr_31517_31571[(2)] = inst_31406);

(statearr_31517_31571[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (37))){
var state_31464__$1 = state_31464;
var statearr_31518_31572 = state_31464__$1;
(statearr_31518_31572[(2)] = null);

(statearr_31518_31572[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31465 === (8))){
var inst_31366 = (state_31464[(8)]);
var inst_31384 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31366);
var state_31464__$1 = state_31464;
var statearr_31519_31573 = state_31464__$1;
(statearr_31519_31573[(2)] = inst_31384);

(statearr_31519_31573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29610__auto__,c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29611__auto__ = null;
var cljs$core$async$mix_$_state_machine__29611__auto____0 = (function (){
var statearr_31523 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31523[(0)] = cljs$core$async$mix_$_state_machine__29611__auto__);

(statearr_31523[(1)] = (1));

return statearr_31523;
});
var cljs$core$async$mix_$_state_machine__29611__auto____1 = (function (state_31464){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31524){if((e31524 instanceof Object)){
var ex__29614__auto__ = e31524;
var statearr_31525_31574 = state_31464;
(statearr_31525_31574[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31524;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31575 = state_31464;
state_31464 = G__31575;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29611__auto__ = function(state_31464){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29611__auto____1.call(this,state_31464);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29611__auto____0;
cljs$core$async$mix_$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29611__auto____1;
return cljs$core$async$mix_$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29627__auto__ = (function (){var statearr_31526 = f__29626__auto__.call(null);
(statearr_31526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31527);

return statearr_31526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31527,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__27123__auto__ = (((p == null))?null:p);
var m__27124__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27124__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__27123__auto__ = (((p == null))?null:p);
var m__27124__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,p,v,ch);
} else {
var m__27124__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31576 = [];
var len__27568__auto___31579 = arguments.length;
var i__27569__auto___31580 = (0);
while(true){
if((i__27569__auto___31580 < len__27568__auto___31579)){
args31576.push((arguments[i__27569__auto___31580]));

var G__31581 = (i__27569__auto___31580 + (1));
i__27569__auto___31580 = G__31581;
continue;
} else {
}
break;
}

var G__31578 = args31576.length;
switch (G__31578) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31576.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27123__auto__ = (((p == null))?null:p);
var m__27124__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,p);
} else {
var m__27124__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__27123__auto__ = (((p == null))?null:p);
var m__27124__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27123__auto__)]);
if(!((m__27124__auto__ == null))){
return m__27124__auto__.call(null,p,v);
} else {
var m__27124__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27124__auto____$1 == null))){
return m__27124__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args31584 = [];
var len__27568__auto___31709 = arguments.length;
var i__27569__auto___31710 = (0);
while(true){
if((i__27569__auto___31710 < len__27568__auto___31709)){
args31584.push((arguments[i__27569__auto___31710]));

var G__31711 = (i__27569__auto___31710 + (1));
i__27569__auto___31710 = G__31711;
continue;
} else {
}
break;
}

var G__31586 = args31584.length;
switch (G__31586) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31584.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26455__auto__)){
return or__26455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26455__auto__,mults){
return (function (p1__31583_SHARP_){
if(cljs.core.truth_(p1__31583_SHARP_.call(null,topic))){
return p1__31583_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31583_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31587 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31587 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31588){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31588 = meta31588;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31589,meta31588__$1){
var self__ = this;
var _31589__$1 = this;
return (new cljs.core.async.t_cljs$core$async31587(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31588__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31589){
var self__ = this;
var _31589__$1 = this;
return self__.meta31588;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31588","meta31588",-1308361030,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31587.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31587.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31587";

cljs.core.async.t_cljs$core$async31587.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async31587");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31587 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31588){
return (new cljs.core.async.t_cljs$core$async31587(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31588));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31587(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29625__auto___31713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31713,mults,ensure_mult,p){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31713,mults,ensure_mult,p){
return (function (state_31661){
var state_val_31662 = (state_31661[(1)]);
if((state_val_31662 === (7))){
var inst_31657 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31663_31714 = state_31661__$1;
(statearr_31663_31714[(2)] = inst_31657);

(statearr_31663_31714[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (20))){
var state_31661__$1 = state_31661;
var statearr_31664_31715 = state_31661__$1;
(statearr_31664_31715[(2)] = null);

(statearr_31664_31715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (1))){
var state_31661__$1 = state_31661;
var statearr_31665_31716 = state_31661__$1;
(statearr_31665_31716[(2)] = null);

(statearr_31665_31716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (24))){
var inst_31640 = (state_31661[(7)]);
var inst_31649 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31640);
var state_31661__$1 = state_31661;
var statearr_31666_31717 = state_31661__$1;
(statearr_31666_31717[(2)] = inst_31649);

(statearr_31666_31717[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (4))){
var inst_31592 = (state_31661[(8)]);
var inst_31592__$1 = (state_31661[(2)]);
var inst_31593 = (inst_31592__$1 == null);
var state_31661__$1 = (function (){var statearr_31667 = state_31661;
(statearr_31667[(8)] = inst_31592__$1);

return statearr_31667;
})();
if(cljs.core.truth_(inst_31593)){
var statearr_31668_31718 = state_31661__$1;
(statearr_31668_31718[(1)] = (5));

} else {
var statearr_31669_31719 = state_31661__$1;
(statearr_31669_31719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (15))){
var inst_31634 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31670_31720 = state_31661__$1;
(statearr_31670_31720[(2)] = inst_31634);

(statearr_31670_31720[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (21))){
var inst_31654 = (state_31661[(2)]);
var state_31661__$1 = (function (){var statearr_31671 = state_31661;
(statearr_31671[(9)] = inst_31654);

return statearr_31671;
})();
var statearr_31672_31721 = state_31661__$1;
(statearr_31672_31721[(2)] = null);

(statearr_31672_31721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (13))){
var inst_31616 = (state_31661[(10)]);
var inst_31618 = cljs.core.chunked_seq_QMARK_.call(null,inst_31616);
var state_31661__$1 = state_31661;
if(inst_31618){
var statearr_31673_31722 = state_31661__$1;
(statearr_31673_31722[(1)] = (16));

} else {
var statearr_31674_31723 = state_31661__$1;
(statearr_31674_31723[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (22))){
var inst_31646 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31646)){
var statearr_31675_31724 = state_31661__$1;
(statearr_31675_31724[(1)] = (23));

} else {
var statearr_31676_31725 = state_31661__$1;
(statearr_31676_31725[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (6))){
var inst_31642 = (state_31661[(11)]);
var inst_31640 = (state_31661[(7)]);
var inst_31592 = (state_31661[(8)]);
var inst_31640__$1 = topic_fn.call(null,inst_31592);
var inst_31641 = cljs.core.deref.call(null,mults);
var inst_31642__$1 = cljs.core.get.call(null,inst_31641,inst_31640__$1);
var state_31661__$1 = (function (){var statearr_31677 = state_31661;
(statearr_31677[(11)] = inst_31642__$1);

(statearr_31677[(7)] = inst_31640__$1);

return statearr_31677;
})();
if(cljs.core.truth_(inst_31642__$1)){
var statearr_31678_31726 = state_31661__$1;
(statearr_31678_31726[(1)] = (19));

} else {
var statearr_31679_31727 = state_31661__$1;
(statearr_31679_31727[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (25))){
var inst_31651 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31680_31728 = state_31661__$1;
(statearr_31680_31728[(2)] = inst_31651);

(statearr_31680_31728[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (17))){
var inst_31616 = (state_31661[(10)]);
var inst_31625 = cljs.core.first.call(null,inst_31616);
var inst_31626 = cljs.core.async.muxch_STAR_.call(null,inst_31625);
var inst_31627 = cljs.core.async.close_BANG_.call(null,inst_31626);
var inst_31628 = cljs.core.next.call(null,inst_31616);
var inst_31602 = inst_31628;
var inst_31603 = null;
var inst_31604 = (0);
var inst_31605 = (0);
var state_31661__$1 = (function (){var statearr_31681 = state_31661;
(statearr_31681[(12)] = inst_31605);

(statearr_31681[(13)] = inst_31602);

(statearr_31681[(14)] = inst_31627);

(statearr_31681[(15)] = inst_31603);

(statearr_31681[(16)] = inst_31604);

return statearr_31681;
})();
var statearr_31682_31729 = state_31661__$1;
(statearr_31682_31729[(2)] = null);

(statearr_31682_31729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (3))){
var inst_31659 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31661__$1,inst_31659);
} else {
if((state_val_31662 === (12))){
var inst_31636 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31683_31730 = state_31661__$1;
(statearr_31683_31730[(2)] = inst_31636);

(statearr_31683_31730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (2))){
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31661__$1,(4),ch);
} else {
if((state_val_31662 === (23))){
var state_31661__$1 = state_31661;
var statearr_31684_31731 = state_31661__$1;
(statearr_31684_31731[(2)] = null);

(statearr_31684_31731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (19))){
var inst_31642 = (state_31661[(11)]);
var inst_31592 = (state_31661[(8)]);
var inst_31644 = cljs.core.async.muxch_STAR_.call(null,inst_31642);
var state_31661__$1 = state_31661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31661__$1,(22),inst_31644,inst_31592);
} else {
if((state_val_31662 === (11))){
var inst_31602 = (state_31661[(13)]);
var inst_31616 = (state_31661[(10)]);
var inst_31616__$1 = cljs.core.seq.call(null,inst_31602);
var state_31661__$1 = (function (){var statearr_31685 = state_31661;
(statearr_31685[(10)] = inst_31616__$1);

return statearr_31685;
})();
if(inst_31616__$1){
var statearr_31686_31732 = state_31661__$1;
(statearr_31686_31732[(1)] = (13));

} else {
var statearr_31687_31733 = state_31661__$1;
(statearr_31687_31733[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (9))){
var inst_31638 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31688_31734 = state_31661__$1;
(statearr_31688_31734[(2)] = inst_31638);

(statearr_31688_31734[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (5))){
var inst_31599 = cljs.core.deref.call(null,mults);
var inst_31600 = cljs.core.vals.call(null,inst_31599);
var inst_31601 = cljs.core.seq.call(null,inst_31600);
var inst_31602 = inst_31601;
var inst_31603 = null;
var inst_31604 = (0);
var inst_31605 = (0);
var state_31661__$1 = (function (){var statearr_31689 = state_31661;
(statearr_31689[(12)] = inst_31605);

(statearr_31689[(13)] = inst_31602);

(statearr_31689[(15)] = inst_31603);

(statearr_31689[(16)] = inst_31604);

return statearr_31689;
})();
var statearr_31690_31735 = state_31661__$1;
(statearr_31690_31735[(2)] = null);

(statearr_31690_31735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (14))){
var state_31661__$1 = state_31661;
var statearr_31694_31736 = state_31661__$1;
(statearr_31694_31736[(2)] = null);

(statearr_31694_31736[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (16))){
var inst_31616 = (state_31661[(10)]);
var inst_31620 = cljs.core.chunk_first.call(null,inst_31616);
var inst_31621 = cljs.core.chunk_rest.call(null,inst_31616);
var inst_31622 = cljs.core.count.call(null,inst_31620);
var inst_31602 = inst_31621;
var inst_31603 = inst_31620;
var inst_31604 = inst_31622;
var inst_31605 = (0);
var state_31661__$1 = (function (){var statearr_31695 = state_31661;
(statearr_31695[(12)] = inst_31605);

(statearr_31695[(13)] = inst_31602);

(statearr_31695[(15)] = inst_31603);

(statearr_31695[(16)] = inst_31604);

return statearr_31695;
})();
var statearr_31696_31737 = state_31661__$1;
(statearr_31696_31737[(2)] = null);

(statearr_31696_31737[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (10))){
var inst_31605 = (state_31661[(12)]);
var inst_31602 = (state_31661[(13)]);
var inst_31603 = (state_31661[(15)]);
var inst_31604 = (state_31661[(16)]);
var inst_31610 = cljs.core._nth.call(null,inst_31603,inst_31605);
var inst_31611 = cljs.core.async.muxch_STAR_.call(null,inst_31610);
var inst_31612 = cljs.core.async.close_BANG_.call(null,inst_31611);
var inst_31613 = (inst_31605 + (1));
var tmp31691 = inst_31602;
var tmp31692 = inst_31603;
var tmp31693 = inst_31604;
var inst_31602__$1 = tmp31691;
var inst_31603__$1 = tmp31692;
var inst_31604__$1 = tmp31693;
var inst_31605__$1 = inst_31613;
var state_31661__$1 = (function (){var statearr_31697 = state_31661;
(statearr_31697[(12)] = inst_31605__$1);

(statearr_31697[(17)] = inst_31612);

(statearr_31697[(13)] = inst_31602__$1);

(statearr_31697[(15)] = inst_31603__$1);

(statearr_31697[(16)] = inst_31604__$1);

return statearr_31697;
})();
var statearr_31698_31738 = state_31661__$1;
(statearr_31698_31738[(2)] = null);

(statearr_31698_31738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (18))){
var inst_31631 = (state_31661[(2)]);
var state_31661__$1 = state_31661;
var statearr_31699_31739 = state_31661__$1;
(statearr_31699_31739[(2)] = inst_31631);

(statearr_31699_31739[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31662 === (8))){
var inst_31605 = (state_31661[(12)]);
var inst_31604 = (state_31661[(16)]);
var inst_31607 = (inst_31605 < inst_31604);
var inst_31608 = inst_31607;
var state_31661__$1 = state_31661;
if(cljs.core.truth_(inst_31608)){
var statearr_31700_31740 = state_31661__$1;
(statearr_31700_31740[(1)] = (10));

} else {
var statearr_31701_31741 = state_31661__$1;
(statearr_31701_31741[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31713,mults,ensure_mult,p))
;
return ((function (switch__29610__auto__,c__29625__auto___31713,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_31705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31705[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_31705[(1)] = (1));

return statearr_31705;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_31661){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31706){if((e31706 instanceof Object)){
var ex__29614__auto__ = e31706;
var statearr_31707_31742 = state_31661;
(statearr_31707_31742[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31706;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31743 = state_31661;
state_31661 = G__31743;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_31661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_31661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31713,mults,ensure_mult,p))
})();
var state__29627__auto__ = (function (){var statearr_31708 = f__29626__auto__.call(null);
(statearr_31708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31713);

return statearr_31708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31713,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args31744 = [];
var len__27568__auto___31747 = arguments.length;
var i__27569__auto___31748 = (0);
while(true){
if((i__27569__auto___31748 < len__27568__auto___31747)){
args31744.push((arguments[i__27569__auto___31748]));

var G__31749 = (i__27569__auto___31748 + (1));
i__27569__auto___31748 = G__31749;
continue;
} else {
}
break;
}

var G__31746 = args31744.length;
switch (G__31746) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31744.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args31751 = [];
var len__27568__auto___31754 = arguments.length;
var i__27569__auto___31755 = (0);
while(true){
if((i__27569__auto___31755 < len__27568__auto___31754)){
args31751.push((arguments[i__27569__auto___31755]));

var G__31756 = (i__27569__auto___31755 + (1));
i__27569__auto___31755 = G__31756;
continue;
} else {
}
break;
}

var G__31753 = args31751.length;
switch (G__31753) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31751.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args31758 = [];
var len__27568__auto___31829 = arguments.length;
var i__27569__auto___31830 = (0);
while(true){
if((i__27569__auto___31830 < len__27568__auto___31829)){
args31758.push((arguments[i__27569__auto___31830]));

var G__31831 = (i__27569__auto___31830 + (1));
i__27569__auto___31830 = G__31831;
continue;
} else {
}
break;
}

var G__31760 = args31758.length;
switch (G__31760) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31758.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__29625__auto___31833 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_31799){
var state_val_31800 = (state_31799[(1)]);
if((state_val_31800 === (7))){
var state_31799__$1 = state_31799;
var statearr_31801_31834 = state_31799__$1;
(statearr_31801_31834[(2)] = null);

(statearr_31801_31834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (1))){
var state_31799__$1 = state_31799;
var statearr_31802_31835 = state_31799__$1;
(statearr_31802_31835[(2)] = null);

(statearr_31802_31835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (4))){
var inst_31763 = (state_31799[(7)]);
var inst_31765 = (inst_31763 < cnt);
var state_31799__$1 = state_31799;
if(cljs.core.truth_(inst_31765)){
var statearr_31803_31836 = state_31799__$1;
(statearr_31803_31836[(1)] = (6));

} else {
var statearr_31804_31837 = state_31799__$1;
(statearr_31804_31837[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (15))){
var inst_31795 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31805_31838 = state_31799__$1;
(statearr_31805_31838[(2)] = inst_31795);

(statearr_31805_31838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (13))){
var inst_31788 = cljs.core.async.close_BANG_.call(null,out);
var state_31799__$1 = state_31799;
var statearr_31806_31839 = state_31799__$1;
(statearr_31806_31839[(2)] = inst_31788);

(statearr_31806_31839[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (6))){
var state_31799__$1 = state_31799;
var statearr_31807_31840 = state_31799__$1;
(statearr_31807_31840[(2)] = null);

(statearr_31807_31840[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (3))){
var inst_31797 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31799__$1,inst_31797);
} else {
if((state_val_31800 === (12))){
var inst_31785 = (state_31799[(8)]);
var inst_31785__$1 = (state_31799[(2)]);
var inst_31786 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31785__$1);
var state_31799__$1 = (function (){var statearr_31808 = state_31799;
(statearr_31808[(8)] = inst_31785__$1);

return statearr_31808;
})();
if(cljs.core.truth_(inst_31786)){
var statearr_31809_31841 = state_31799__$1;
(statearr_31809_31841[(1)] = (13));

} else {
var statearr_31810_31842 = state_31799__$1;
(statearr_31810_31842[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (2))){
var inst_31762 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31763 = (0);
var state_31799__$1 = (function (){var statearr_31811 = state_31799;
(statearr_31811[(7)] = inst_31763);

(statearr_31811[(9)] = inst_31762);

return statearr_31811;
})();
var statearr_31812_31843 = state_31799__$1;
(statearr_31812_31843[(2)] = null);

(statearr_31812_31843[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (11))){
var inst_31763 = (state_31799[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31799,(10),Object,null,(9));
var inst_31772 = chs__$1.call(null,inst_31763);
var inst_31773 = done.call(null,inst_31763);
var inst_31774 = cljs.core.async.take_BANG_.call(null,inst_31772,inst_31773);
var state_31799__$1 = state_31799;
var statearr_31813_31844 = state_31799__$1;
(statearr_31813_31844[(2)] = inst_31774);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (9))){
var inst_31763 = (state_31799[(7)]);
var inst_31776 = (state_31799[(2)]);
var inst_31777 = (inst_31763 + (1));
var inst_31763__$1 = inst_31777;
var state_31799__$1 = (function (){var statearr_31814 = state_31799;
(statearr_31814[(7)] = inst_31763__$1);

(statearr_31814[(10)] = inst_31776);

return statearr_31814;
})();
var statearr_31815_31845 = state_31799__$1;
(statearr_31815_31845[(2)] = null);

(statearr_31815_31845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (5))){
var inst_31783 = (state_31799[(2)]);
var state_31799__$1 = (function (){var statearr_31816 = state_31799;
(statearr_31816[(11)] = inst_31783);

return statearr_31816;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31799__$1,(12),dchan);
} else {
if((state_val_31800 === (14))){
var inst_31785 = (state_31799[(8)]);
var inst_31790 = cljs.core.apply.call(null,f,inst_31785);
var state_31799__$1 = state_31799;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31799__$1,(16),out,inst_31790);
} else {
if((state_val_31800 === (16))){
var inst_31792 = (state_31799[(2)]);
var state_31799__$1 = (function (){var statearr_31817 = state_31799;
(statearr_31817[(12)] = inst_31792);

return statearr_31817;
})();
var statearr_31818_31846 = state_31799__$1;
(statearr_31818_31846[(2)] = null);

(statearr_31818_31846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (10))){
var inst_31767 = (state_31799[(2)]);
var inst_31768 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_31799__$1 = (function (){var statearr_31819 = state_31799;
(statearr_31819[(13)] = inst_31767);

return statearr_31819;
})();
var statearr_31820_31847 = state_31799__$1;
(statearr_31820_31847[(2)] = inst_31768);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31799__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31800 === (8))){
var inst_31781 = (state_31799[(2)]);
var state_31799__$1 = state_31799;
var statearr_31821_31848 = state_31799__$1;
(statearr_31821_31848[(2)] = inst_31781);

(statearr_31821_31848[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29610__auto__,c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_31825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31825[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_31825[(1)] = (1));

return statearr_31825;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_31799){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31826){if((e31826 instanceof Object)){
var ex__29614__auto__ = e31826;
var statearr_31827_31849 = state_31799;
(statearr_31827_31849[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31850 = state_31799;
state_31799 = G__31850;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_31799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_31799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29627__auto__ = (function (){var statearr_31828 = f__29626__auto__.call(null);
(statearr_31828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31833);

return statearr_31828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31833,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args31852 = [];
var len__27568__auto___31910 = arguments.length;
var i__27569__auto___31911 = (0);
while(true){
if((i__27569__auto___31911 < len__27568__auto___31910)){
args31852.push((arguments[i__27569__auto___31911]));

var G__31912 = (i__27569__auto___31911 + (1));
i__27569__auto___31911 = G__31912;
continue;
} else {
}
break;
}

var G__31854 = args31852.length;
switch (G__31854) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31852.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___31914 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31914,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31914,out){
return (function (state_31886){
var state_val_31887 = (state_31886[(1)]);
if((state_val_31887 === (7))){
var inst_31866 = (state_31886[(7)]);
var inst_31865 = (state_31886[(8)]);
var inst_31865__$1 = (state_31886[(2)]);
var inst_31866__$1 = cljs.core.nth.call(null,inst_31865__$1,(0),null);
var inst_31867 = cljs.core.nth.call(null,inst_31865__$1,(1),null);
var inst_31868 = (inst_31866__$1 == null);
var state_31886__$1 = (function (){var statearr_31888 = state_31886;
(statearr_31888[(7)] = inst_31866__$1);

(statearr_31888[(9)] = inst_31867);

(statearr_31888[(8)] = inst_31865__$1);

return statearr_31888;
})();
if(cljs.core.truth_(inst_31868)){
var statearr_31889_31915 = state_31886__$1;
(statearr_31889_31915[(1)] = (8));

} else {
var statearr_31890_31916 = state_31886__$1;
(statearr_31890_31916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (1))){
var inst_31855 = cljs.core.vec.call(null,chs);
var inst_31856 = inst_31855;
var state_31886__$1 = (function (){var statearr_31891 = state_31886;
(statearr_31891[(10)] = inst_31856);

return statearr_31891;
})();
var statearr_31892_31917 = state_31886__$1;
(statearr_31892_31917[(2)] = null);

(statearr_31892_31917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (4))){
var inst_31856 = (state_31886[(10)]);
var state_31886__$1 = state_31886;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31886__$1,(7),inst_31856);
} else {
if((state_val_31887 === (6))){
var inst_31882 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31893_31918 = state_31886__$1;
(statearr_31893_31918[(2)] = inst_31882);

(statearr_31893_31918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (3))){
var inst_31884 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31886__$1,inst_31884);
} else {
if((state_val_31887 === (2))){
var inst_31856 = (state_31886[(10)]);
var inst_31858 = cljs.core.count.call(null,inst_31856);
var inst_31859 = (inst_31858 > (0));
var state_31886__$1 = state_31886;
if(cljs.core.truth_(inst_31859)){
var statearr_31895_31919 = state_31886__$1;
(statearr_31895_31919[(1)] = (4));

} else {
var statearr_31896_31920 = state_31886__$1;
(statearr_31896_31920[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (11))){
var inst_31856 = (state_31886[(10)]);
var inst_31875 = (state_31886[(2)]);
var tmp31894 = inst_31856;
var inst_31856__$1 = tmp31894;
var state_31886__$1 = (function (){var statearr_31897 = state_31886;
(statearr_31897[(10)] = inst_31856__$1);

(statearr_31897[(11)] = inst_31875);

return statearr_31897;
})();
var statearr_31898_31921 = state_31886__$1;
(statearr_31898_31921[(2)] = null);

(statearr_31898_31921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (9))){
var inst_31866 = (state_31886[(7)]);
var state_31886__$1 = state_31886;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31886__$1,(11),out,inst_31866);
} else {
if((state_val_31887 === (5))){
var inst_31880 = cljs.core.async.close_BANG_.call(null,out);
var state_31886__$1 = state_31886;
var statearr_31899_31922 = state_31886__$1;
(statearr_31899_31922[(2)] = inst_31880);

(statearr_31899_31922[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (10))){
var inst_31878 = (state_31886[(2)]);
var state_31886__$1 = state_31886;
var statearr_31900_31923 = state_31886__$1;
(statearr_31900_31923[(2)] = inst_31878);

(statearr_31900_31923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31887 === (8))){
var inst_31856 = (state_31886[(10)]);
var inst_31866 = (state_31886[(7)]);
var inst_31867 = (state_31886[(9)]);
var inst_31865 = (state_31886[(8)]);
var inst_31870 = (function (){var cs = inst_31856;
var vec__31861 = inst_31865;
var v = inst_31866;
var c = inst_31867;
return ((function (cs,vec__31861,v,c,inst_31856,inst_31866,inst_31867,inst_31865,state_val_31887,c__29625__auto___31914,out){
return (function (p1__31851_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__31851_SHARP_);
});
;})(cs,vec__31861,v,c,inst_31856,inst_31866,inst_31867,inst_31865,state_val_31887,c__29625__auto___31914,out))
})();
var inst_31871 = cljs.core.filterv.call(null,inst_31870,inst_31856);
var inst_31856__$1 = inst_31871;
var state_31886__$1 = (function (){var statearr_31901 = state_31886;
(statearr_31901[(10)] = inst_31856__$1);

return statearr_31901;
})();
var statearr_31902_31924 = state_31886__$1;
(statearr_31902_31924[(2)] = null);

(statearr_31902_31924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31914,out))
;
return ((function (switch__29610__auto__,c__29625__auto___31914,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_31906 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31906[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_31906[(1)] = (1));

return statearr_31906;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_31886){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31886);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31907){if((e31907 instanceof Object)){
var ex__29614__auto__ = e31907;
var statearr_31908_31925 = state_31886;
(statearr_31908_31925[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31886);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31926 = state_31886;
state_31886 = G__31926;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_31886){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_31886);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31914,out))
})();
var state__29627__auto__ = (function (){var statearr_31909 = f__29626__auto__.call(null);
(statearr_31909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31914);

return statearr_31909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31914,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args31927 = [];
var len__27568__auto___31976 = arguments.length;
var i__27569__auto___31977 = (0);
while(true){
if((i__27569__auto___31977 < len__27568__auto___31976)){
args31927.push((arguments[i__27569__auto___31977]));

var G__31978 = (i__27569__auto___31977 + (1));
i__27569__auto___31977 = G__31978;
continue;
} else {
}
break;
}

var G__31929 = args31927.length;
switch (G__31929) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31927.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___31980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___31980,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___31980,out){
return (function (state_31953){
var state_val_31954 = (state_31953[(1)]);
if((state_val_31954 === (7))){
var inst_31935 = (state_31953[(7)]);
var inst_31935__$1 = (state_31953[(2)]);
var inst_31936 = (inst_31935__$1 == null);
var inst_31937 = cljs.core.not.call(null,inst_31936);
var state_31953__$1 = (function (){var statearr_31955 = state_31953;
(statearr_31955[(7)] = inst_31935__$1);

return statearr_31955;
})();
if(inst_31937){
var statearr_31956_31981 = state_31953__$1;
(statearr_31956_31981[(1)] = (8));

} else {
var statearr_31957_31982 = state_31953__$1;
(statearr_31957_31982[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (1))){
var inst_31930 = (0);
var state_31953__$1 = (function (){var statearr_31958 = state_31953;
(statearr_31958[(8)] = inst_31930);

return statearr_31958;
})();
var statearr_31959_31983 = state_31953__$1;
(statearr_31959_31983[(2)] = null);

(statearr_31959_31983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (4))){
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31953__$1,(7),ch);
} else {
if((state_val_31954 === (6))){
var inst_31948 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31960_31984 = state_31953__$1;
(statearr_31960_31984[(2)] = inst_31948);

(statearr_31960_31984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (3))){
var inst_31950 = (state_31953[(2)]);
var inst_31951 = cljs.core.async.close_BANG_.call(null,out);
var state_31953__$1 = (function (){var statearr_31961 = state_31953;
(statearr_31961[(9)] = inst_31950);

return statearr_31961;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31953__$1,inst_31951);
} else {
if((state_val_31954 === (2))){
var inst_31930 = (state_31953[(8)]);
var inst_31932 = (inst_31930 < n);
var state_31953__$1 = state_31953;
if(cljs.core.truth_(inst_31932)){
var statearr_31962_31985 = state_31953__$1;
(statearr_31962_31985[(1)] = (4));

} else {
var statearr_31963_31986 = state_31953__$1;
(statearr_31963_31986[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (11))){
var inst_31930 = (state_31953[(8)]);
var inst_31940 = (state_31953[(2)]);
var inst_31941 = (inst_31930 + (1));
var inst_31930__$1 = inst_31941;
var state_31953__$1 = (function (){var statearr_31964 = state_31953;
(statearr_31964[(10)] = inst_31940);

(statearr_31964[(8)] = inst_31930__$1);

return statearr_31964;
})();
var statearr_31965_31987 = state_31953__$1;
(statearr_31965_31987[(2)] = null);

(statearr_31965_31987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (9))){
var state_31953__$1 = state_31953;
var statearr_31966_31988 = state_31953__$1;
(statearr_31966_31988[(2)] = null);

(statearr_31966_31988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (5))){
var state_31953__$1 = state_31953;
var statearr_31967_31989 = state_31953__$1;
(statearr_31967_31989[(2)] = null);

(statearr_31967_31989[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (10))){
var inst_31945 = (state_31953[(2)]);
var state_31953__$1 = state_31953;
var statearr_31968_31990 = state_31953__$1;
(statearr_31968_31990[(2)] = inst_31945);

(statearr_31968_31990[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31954 === (8))){
var inst_31935 = (state_31953[(7)]);
var state_31953__$1 = state_31953;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31953__$1,(11),out,inst_31935);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___31980,out))
;
return ((function (switch__29610__auto__,c__29625__auto___31980,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_31972 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31972[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_31972[(1)] = (1));

return statearr_31972;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_31953){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_31953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e31973){if((e31973 instanceof Object)){
var ex__29614__auto__ = e31973;
var statearr_31974_31991 = state_31953;
(statearr_31974_31991[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31973;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31992 = state_31953;
state_31953 = G__31992;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_31953){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_31953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___31980,out))
})();
var state__29627__auto__ = (function (){var statearr_31975 = f__29626__auto__.call(null);
(statearr_31975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___31980);

return statearr_31975;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___31980,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32000 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32000 = (function (f,ch,meta32001){
this.f = f;
this.ch = ch;
this.meta32001 = meta32001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32002,meta32001__$1){
var self__ = this;
var _32002__$1 = this;
return (new cljs.core.async.t_cljs$core$async32000(self__.f,self__.ch,meta32001__$1));
});

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32002){
var self__ = this;
var _32002__$1 = this;
return self__.meta32001;
});

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32003 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32003 = (function (f,ch,meta32001,_,fn1,meta32004){
this.f = f;
this.ch = ch;
this.meta32001 = meta32001;
this._ = _;
this.fn1 = fn1;
this.meta32004 = meta32004;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32005,meta32004__$1){
var self__ = this;
var _32005__$1 = this;
return (new cljs.core.async.t_cljs$core$async32003(self__.f,self__.ch,self__.meta32001,self__._,self__.fn1,meta32004__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32005){
var self__ = this;
var _32005__$1 = this;
return self__.meta32004;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__31993_SHARP_){
return f1.call(null,(((p1__31993_SHARP_ == null))?null:self__.f.call(null,p1__31993_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32001","meta32001",1648765948,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32000","cljs.core.async/t_cljs$core$async32000",406972984,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32004","meta32004",1838867158,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32003.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32003.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32003";

cljs.core.async.t_cljs$core$async32003.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async32003");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32003 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32003(f__$1,ch__$1,meta32001__$1,___$2,fn1__$1,meta32004){
return (new cljs.core.async.t_cljs$core$async32003(f__$1,ch__$1,meta32001__$1,___$2,fn1__$1,meta32004));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32003(self__.f,self__.ch,self__.meta32001,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26443__auto__ = ret;
if(cljs.core.truth_(and__26443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32001","meta32001",1648765948,null)], null);
});

cljs.core.async.t_cljs$core$async32000.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32000";

cljs.core.async.t_cljs$core$async32000.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async32000");
});

cljs.core.async.__GT_t_cljs$core$async32000 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32000(f__$1,ch__$1,meta32001){
return (new cljs.core.async.t_cljs$core$async32000(f__$1,ch__$1,meta32001));
});

}

return (new cljs.core.async.t_cljs$core$async32000(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32009 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32009 = (function (f,ch,meta32010){
this.f = f;
this.ch = ch;
this.meta32010 = meta32010;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32011,meta32010__$1){
var self__ = this;
var _32011__$1 = this;
return (new cljs.core.async.t_cljs$core$async32009(self__.f,self__.ch,meta32010__$1));
});

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32011){
var self__ = this;
var _32011__$1 = this;
return self__.meta32010;
});

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32009.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32010","meta32010",-1265895235,null)], null);
});

cljs.core.async.t_cljs$core$async32009.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32009";

cljs.core.async.t_cljs$core$async32009.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async32009");
});

cljs.core.async.__GT_t_cljs$core$async32009 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32009(f__$1,ch__$1,meta32010){
return (new cljs.core.async.t_cljs$core$async32009(f__$1,ch__$1,meta32010));
});

}

return (new cljs.core.async.t_cljs$core$async32009(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32015 = (function (p,ch,meta32016){
this.p = p;
this.ch = ch;
this.meta32016 = meta32016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32017,meta32016__$1){
var self__ = this;
var _32017__$1 = this;
return (new cljs.core.async.t_cljs$core$async32015(self__.p,self__.ch,meta32016__$1));
});

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32017){
var self__ = this;
var _32017__$1 = this;
return self__.meta32016;
});

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32016","meta32016",1875920146,null)], null);
});

cljs.core.async.t_cljs$core$async32015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32015";

cljs.core.async.t_cljs$core$async32015.cljs$lang$ctorPrWriter = (function (this__27066__auto__,writer__27067__auto__,opt__27068__auto__){
return cljs.core._write.call(null,writer__27067__auto__,"cljs.core.async/t_cljs$core$async32015");
});

cljs.core.async.__GT_t_cljs$core$async32015 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32015(p__$1,ch__$1,meta32016){
return (new cljs.core.async.t_cljs$core$async32015(p__$1,ch__$1,meta32016));
});

}

return (new cljs.core.async.t_cljs$core$async32015(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args32018 = [];
var len__27568__auto___32062 = arguments.length;
var i__27569__auto___32063 = (0);
while(true){
if((i__27569__auto___32063 < len__27568__auto___32062)){
args32018.push((arguments[i__27569__auto___32063]));

var G__32064 = (i__27569__auto___32063 + (1));
i__27569__auto___32063 = G__32064;
continue;
} else {
}
break;
}

var G__32020 = args32018.length;
switch (G__32020) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32018.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___32066 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___32066,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___32066,out){
return (function (state_32041){
var state_val_32042 = (state_32041[(1)]);
if((state_val_32042 === (7))){
var inst_32037 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32043_32067 = state_32041__$1;
(statearr_32043_32067[(2)] = inst_32037);

(statearr_32043_32067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (1))){
var state_32041__$1 = state_32041;
var statearr_32044_32068 = state_32041__$1;
(statearr_32044_32068[(2)] = null);

(statearr_32044_32068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (4))){
var inst_32023 = (state_32041[(7)]);
var inst_32023__$1 = (state_32041[(2)]);
var inst_32024 = (inst_32023__$1 == null);
var state_32041__$1 = (function (){var statearr_32045 = state_32041;
(statearr_32045[(7)] = inst_32023__$1);

return statearr_32045;
})();
if(cljs.core.truth_(inst_32024)){
var statearr_32046_32069 = state_32041__$1;
(statearr_32046_32069[(1)] = (5));

} else {
var statearr_32047_32070 = state_32041__$1;
(statearr_32047_32070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (6))){
var inst_32023 = (state_32041[(7)]);
var inst_32028 = p.call(null,inst_32023);
var state_32041__$1 = state_32041;
if(cljs.core.truth_(inst_32028)){
var statearr_32048_32071 = state_32041__$1;
(statearr_32048_32071[(1)] = (8));

} else {
var statearr_32049_32072 = state_32041__$1;
(statearr_32049_32072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (3))){
var inst_32039 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32041__$1,inst_32039);
} else {
if((state_val_32042 === (2))){
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32041__$1,(4),ch);
} else {
if((state_val_32042 === (11))){
var inst_32031 = (state_32041[(2)]);
var state_32041__$1 = state_32041;
var statearr_32050_32073 = state_32041__$1;
(statearr_32050_32073[(2)] = inst_32031);

(statearr_32050_32073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (9))){
var state_32041__$1 = state_32041;
var statearr_32051_32074 = state_32041__$1;
(statearr_32051_32074[(2)] = null);

(statearr_32051_32074[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (5))){
var inst_32026 = cljs.core.async.close_BANG_.call(null,out);
var state_32041__$1 = state_32041;
var statearr_32052_32075 = state_32041__$1;
(statearr_32052_32075[(2)] = inst_32026);

(statearr_32052_32075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (10))){
var inst_32034 = (state_32041[(2)]);
var state_32041__$1 = (function (){var statearr_32053 = state_32041;
(statearr_32053[(8)] = inst_32034);

return statearr_32053;
})();
var statearr_32054_32076 = state_32041__$1;
(statearr_32054_32076[(2)] = null);

(statearr_32054_32076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32042 === (8))){
var inst_32023 = (state_32041[(7)]);
var state_32041__$1 = state_32041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32041__$1,(11),out,inst_32023);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___32066,out))
;
return ((function (switch__29610__auto__,c__29625__auto___32066,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_32058 = [null,null,null,null,null,null,null,null,null];
(statearr_32058[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_32058[(1)] = (1));

return statearr_32058;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_32041){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_32041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e32059){if((e32059 instanceof Object)){
var ex__29614__auto__ = e32059;
var statearr_32060_32077 = state_32041;
(statearr_32060_32077[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_32041;
state_32041 = G__32078;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_32041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_32041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___32066,out))
})();
var state__29627__auto__ = (function (){var statearr_32061 = f__29626__auto__.call(null);
(statearr_32061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___32066);

return statearr_32061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___32066,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32079 = [];
var len__27568__auto___32082 = arguments.length;
var i__27569__auto___32083 = (0);
while(true){
if((i__27569__auto___32083 < len__27568__auto___32082)){
args32079.push((arguments[i__27569__auto___32083]));

var G__32084 = (i__27569__auto___32083 + (1));
i__27569__auto___32083 = G__32084;
continue;
} else {
}
break;
}

var G__32081 = args32079.length;
switch (G__32081) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32079.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__29625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto__){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto__){
return (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (7))){
var inst_32247 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32253_32294 = state_32251__$1;
(statearr_32253_32294[(2)] = inst_32247);

(statearr_32253_32294[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (20))){
var inst_32217 = (state_32251[(7)]);
var inst_32228 = (state_32251[(2)]);
var inst_32229 = cljs.core.next.call(null,inst_32217);
var inst_32203 = inst_32229;
var inst_32204 = null;
var inst_32205 = (0);
var inst_32206 = (0);
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(8)] = inst_32204);

(statearr_32254[(9)] = inst_32228);

(statearr_32254[(10)] = inst_32206);

(statearr_32254[(11)] = inst_32205);

(statearr_32254[(12)] = inst_32203);

return statearr_32254;
})();
var statearr_32255_32295 = state_32251__$1;
(statearr_32255_32295[(2)] = null);

(statearr_32255_32295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (1))){
var state_32251__$1 = state_32251;
var statearr_32256_32296 = state_32251__$1;
(statearr_32256_32296[(2)] = null);

(statearr_32256_32296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (4))){
var inst_32192 = (state_32251[(13)]);
var inst_32192__$1 = (state_32251[(2)]);
var inst_32193 = (inst_32192__$1 == null);
var state_32251__$1 = (function (){var statearr_32257 = state_32251;
(statearr_32257[(13)] = inst_32192__$1);

return statearr_32257;
})();
if(cljs.core.truth_(inst_32193)){
var statearr_32258_32297 = state_32251__$1;
(statearr_32258_32297[(1)] = (5));

} else {
var statearr_32259_32298 = state_32251__$1;
(statearr_32259_32298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (15))){
var state_32251__$1 = state_32251;
var statearr_32263_32299 = state_32251__$1;
(statearr_32263_32299[(2)] = null);

(statearr_32263_32299[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (21))){
var state_32251__$1 = state_32251;
var statearr_32264_32300 = state_32251__$1;
(statearr_32264_32300[(2)] = null);

(statearr_32264_32300[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (13))){
var inst_32204 = (state_32251[(8)]);
var inst_32206 = (state_32251[(10)]);
var inst_32205 = (state_32251[(11)]);
var inst_32203 = (state_32251[(12)]);
var inst_32213 = (state_32251[(2)]);
var inst_32214 = (inst_32206 + (1));
var tmp32260 = inst_32204;
var tmp32261 = inst_32205;
var tmp32262 = inst_32203;
var inst_32203__$1 = tmp32262;
var inst_32204__$1 = tmp32260;
var inst_32205__$1 = tmp32261;
var inst_32206__$1 = inst_32214;
var state_32251__$1 = (function (){var statearr_32265 = state_32251;
(statearr_32265[(8)] = inst_32204__$1);

(statearr_32265[(14)] = inst_32213);

(statearr_32265[(10)] = inst_32206__$1);

(statearr_32265[(11)] = inst_32205__$1);

(statearr_32265[(12)] = inst_32203__$1);

return statearr_32265;
})();
var statearr_32266_32301 = state_32251__$1;
(statearr_32266_32301[(2)] = null);

(statearr_32266_32301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (22))){
var state_32251__$1 = state_32251;
var statearr_32267_32302 = state_32251__$1;
(statearr_32267_32302[(2)] = null);

(statearr_32267_32302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (6))){
var inst_32192 = (state_32251[(13)]);
var inst_32201 = f.call(null,inst_32192);
var inst_32202 = cljs.core.seq.call(null,inst_32201);
var inst_32203 = inst_32202;
var inst_32204 = null;
var inst_32205 = (0);
var inst_32206 = (0);
var state_32251__$1 = (function (){var statearr_32268 = state_32251;
(statearr_32268[(8)] = inst_32204);

(statearr_32268[(10)] = inst_32206);

(statearr_32268[(11)] = inst_32205);

(statearr_32268[(12)] = inst_32203);

return statearr_32268;
})();
var statearr_32269_32303 = state_32251__$1;
(statearr_32269_32303[(2)] = null);

(statearr_32269_32303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (17))){
var inst_32217 = (state_32251[(7)]);
var inst_32221 = cljs.core.chunk_first.call(null,inst_32217);
var inst_32222 = cljs.core.chunk_rest.call(null,inst_32217);
var inst_32223 = cljs.core.count.call(null,inst_32221);
var inst_32203 = inst_32222;
var inst_32204 = inst_32221;
var inst_32205 = inst_32223;
var inst_32206 = (0);
var state_32251__$1 = (function (){var statearr_32270 = state_32251;
(statearr_32270[(8)] = inst_32204);

(statearr_32270[(10)] = inst_32206);

(statearr_32270[(11)] = inst_32205);

(statearr_32270[(12)] = inst_32203);

return statearr_32270;
})();
var statearr_32271_32304 = state_32251__$1;
(statearr_32271_32304[(2)] = null);

(statearr_32271_32304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (3))){
var inst_32249 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (12))){
var inst_32237 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32272_32305 = state_32251__$1;
(statearr_32272_32305[(2)] = inst_32237);

(statearr_32272_32305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(4),in$);
} else {
if((state_val_32252 === (23))){
var inst_32245 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32273_32306 = state_32251__$1;
(statearr_32273_32306[(2)] = inst_32245);

(statearr_32273_32306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (19))){
var inst_32232 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32274_32307 = state_32251__$1;
(statearr_32274_32307[(2)] = inst_32232);

(statearr_32274_32307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (11))){
var inst_32217 = (state_32251[(7)]);
var inst_32203 = (state_32251[(12)]);
var inst_32217__$1 = cljs.core.seq.call(null,inst_32203);
var state_32251__$1 = (function (){var statearr_32275 = state_32251;
(statearr_32275[(7)] = inst_32217__$1);

return statearr_32275;
})();
if(inst_32217__$1){
var statearr_32276_32308 = state_32251__$1;
(statearr_32276_32308[(1)] = (14));

} else {
var statearr_32277_32309 = state_32251__$1;
(statearr_32277_32309[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (9))){
var inst_32239 = (state_32251[(2)]);
var inst_32240 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32251__$1 = (function (){var statearr_32278 = state_32251;
(statearr_32278[(15)] = inst_32239);

return statearr_32278;
})();
if(cljs.core.truth_(inst_32240)){
var statearr_32279_32310 = state_32251__$1;
(statearr_32279_32310[(1)] = (21));

} else {
var statearr_32280_32311 = state_32251__$1;
(statearr_32280_32311[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (5))){
var inst_32195 = cljs.core.async.close_BANG_.call(null,out);
var state_32251__$1 = state_32251;
var statearr_32281_32312 = state_32251__$1;
(statearr_32281_32312[(2)] = inst_32195);

(statearr_32281_32312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (14))){
var inst_32217 = (state_32251[(7)]);
var inst_32219 = cljs.core.chunked_seq_QMARK_.call(null,inst_32217);
var state_32251__$1 = state_32251;
if(inst_32219){
var statearr_32282_32313 = state_32251__$1;
(statearr_32282_32313[(1)] = (17));

} else {
var statearr_32283_32314 = state_32251__$1;
(statearr_32283_32314[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (16))){
var inst_32235 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32284_32315 = state_32251__$1;
(statearr_32284_32315[(2)] = inst_32235);

(statearr_32284_32315[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (10))){
var inst_32204 = (state_32251[(8)]);
var inst_32206 = (state_32251[(10)]);
var inst_32211 = cljs.core._nth.call(null,inst_32204,inst_32206);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32251__$1,(13),out,inst_32211);
} else {
if((state_val_32252 === (18))){
var inst_32217 = (state_32251[(7)]);
var inst_32226 = cljs.core.first.call(null,inst_32217);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32251__$1,(20),out,inst_32226);
} else {
if((state_val_32252 === (8))){
var inst_32206 = (state_32251[(10)]);
var inst_32205 = (state_32251[(11)]);
var inst_32208 = (inst_32206 < inst_32205);
var inst_32209 = inst_32208;
var state_32251__$1 = state_32251;
if(cljs.core.truth_(inst_32209)){
var statearr_32285_32316 = state_32251__$1;
(statearr_32285_32316[(1)] = (10));

} else {
var statearr_32286_32317 = state_32251__$1;
(statearr_32286_32317[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto__))
;
return ((function (switch__29610__auto__,c__29625__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____0 = (function (){
var statearr_32290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32290[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__);

(statearr_32290[(1)] = (1));

return statearr_32290;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____1 = (function (state_32251){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_32251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e32291){if((e32291 instanceof Object)){
var ex__29614__auto__ = e32291;
var statearr_32292_32318 = state_32251;
(statearr_32292_32318[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32291;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32319 = state_32251;
state_32251 = G__32319;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29611__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto__))
})();
var state__29627__auto__ = (function (){var statearr_32293 = f__29626__auto__.call(null);
(statearr_32293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto__);

return statearr_32293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto__))
);

return c__29625__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32320 = [];
var len__27568__auto___32323 = arguments.length;
var i__27569__auto___32324 = (0);
while(true){
if((i__27569__auto___32324 < len__27568__auto___32323)){
args32320.push((arguments[i__27569__auto___32324]));

var G__32325 = (i__27569__auto___32324 + (1));
i__27569__auto___32324 = G__32325;
continue;
} else {
}
break;
}

var G__32322 = args32320.length;
switch (G__32322) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32320.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args32327 = [];
var len__27568__auto___32330 = arguments.length;
var i__27569__auto___32331 = (0);
while(true){
if((i__27569__auto___32331 < len__27568__auto___32330)){
args32327.push((arguments[i__27569__auto___32331]));

var G__32332 = (i__27569__auto___32331 + (1));
i__27569__auto___32331 = G__32332;
continue;
} else {
}
break;
}

var G__32329 = args32327.length;
switch (G__32329) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32327.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args32334 = [];
var len__27568__auto___32385 = arguments.length;
var i__27569__auto___32386 = (0);
while(true){
if((i__27569__auto___32386 < len__27568__auto___32385)){
args32334.push((arguments[i__27569__auto___32386]));

var G__32387 = (i__27569__auto___32386 + (1));
i__27569__auto___32386 = G__32387;
continue;
} else {
}
break;
}

var G__32336 = args32334.length;
switch (G__32336) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32334.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___32389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___32389,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___32389,out){
return (function (state_32360){
var state_val_32361 = (state_32360[(1)]);
if((state_val_32361 === (7))){
var inst_32355 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32362_32390 = state_32360__$1;
(statearr_32362_32390[(2)] = inst_32355);

(statearr_32362_32390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (1))){
var inst_32337 = null;
var state_32360__$1 = (function (){var statearr_32363 = state_32360;
(statearr_32363[(7)] = inst_32337);

return statearr_32363;
})();
var statearr_32364_32391 = state_32360__$1;
(statearr_32364_32391[(2)] = null);

(statearr_32364_32391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (4))){
var inst_32340 = (state_32360[(8)]);
var inst_32340__$1 = (state_32360[(2)]);
var inst_32341 = (inst_32340__$1 == null);
var inst_32342 = cljs.core.not.call(null,inst_32341);
var state_32360__$1 = (function (){var statearr_32365 = state_32360;
(statearr_32365[(8)] = inst_32340__$1);

return statearr_32365;
})();
if(inst_32342){
var statearr_32366_32392 = state_32360__$1;
(statearr_32366_32392[(1)] = (5));

} else {
var statearr_32367_32393 = state_32360__$1;
(statearr_32367_32393[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (6))){
var state_32360__$1 = state_32360;
var statearr_32368_32394 = state_32360__$1;
(statearr_32368_32394[(2)] = null);

(statearr_32368_32394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (3))){
var inst_32357 = (state_32360[(2)]);
var inst_32358 = cljs.core.async.close_BANG_.call(null,out);
var state_32360__$1 = (function (){var statearr_32369 = state_32360;
(statearr_32369[(9)] = inst_32357);

return statearr_32369;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32360__$1,inst_32358);
} else {
if((state_val_32361 === (2))){
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32360__$1,(4),ch);
} else {
if((state_val_32361 === (11))){
var inst_32340 = (state_32360[(8)]);
var inst_32349 = (state_32360[(2)]);
var inst_32337 = inst_32340;
var state_32360__$1 = (function (){var statearr_32370 = state_32360;
(statearr_32370[(7)] = inst_32337);

(statearr_32370[(10)] = inst_32349);

return statearr_32370;
})();
var statearr_32371_32395 = state_32360__$1;
(statearr_32371_32395[(2)] = null);

(statearr_32371_32395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (9))){
var inst_32340 = (state_32360[(8)]);
var state_32360__$1 = state_32360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32360__$1,(11),out,inst_32340);
} else {
if((state_val_32361 === (5))){
var inst_32337 = (state_32360[(7)]);
var inst_32340 = (state_32360[(8)]);
var inst_32344 = cljs.core._EQ_.call(null,inst_32340,inst_32337);
var state_32360__$1 = state_32360;
if(inst_32344){
var statearr_32373_32396 = state_32360__$1;
(statearr_32373_32396[(1)] = (8));

} else {
var statearr_32374_32397 = state_32360__$1;
(statearr_32374_32397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (10))){
var inst_32352 = (state_32360[(2)]);
var state_32360__$1 = state_32360;
var statearr_32375_32398 = state_32360__$1;
(statearr_32375_32398[(2)] = inst_32352);

(statearr_32375_32398[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32361 === (8))){
var inst_32337 = (state_32360[(7)]);
var tmp32372 = inst_32337;
var inst_32337__$1 = tmp32372;
var state_32360__$1 = (function (){var statearr_32376 = state_32360;
(statearr_32376[(7)] = inst_32337__$1);

return statearr_32376;
})();
var statearr_32377_32399 = state_32360__$1;
(statearr_32377_32399[(2)] = null);

(statearr_32377_32399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___32389,out))
;
return ((function (switch__29610__auto__,c__29625__auto___32389,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_32381 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32381[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_32381[(1)] = (1));

return statearr_32381;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_32360){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_32360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e32382){if((e32382 instanceof Object)){
var ex__29614__auto__ = e32382;
var statearr_32383_32400 = state_32360;
(statearr_32383_32400[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32401 = state_32360;
state_32360 = G__32401;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_32360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_32360);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___32389,out))
})();
var state__29627__auto__ = (function (){var statearr_32384 = f__29626__auto__.call(null);
(statearr_32384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___32389);

return statearr_32384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___32389,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32402 = [];
var len__27568__auto___32472 = arguments.length;
var i__27569__auto___32473 = (0);
while(true){
if((i__27569__auto___32473 < len__27568__auto___32472)){
args32402.push((arguments[i__27569__auto___32473]));

var G__32474 = (i__27569__auto___32473 + (1));
i__27569__auto___32473 = G__32474;
continue;
} else {
}
break;
}

var G__32404 = args32402.length;
switch (G__32404) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32402.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___32476 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___32476,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___32476,out){
return (function (state_32442){
var state_val_32443 = (state_32442[(1)]);
if((state_val_32443 === (7))){
var inst_32438 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32444_32477 = state_32442__$1;
(statearr_32444_32477[(2)] = inst_32438);

(statearr_32444_32477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (1))){
var inst_32405 = (new Array(n));
var inst_32406 = inst_32405;
var inst_32407 = (0);
var state_32442__$1 = (function (){var statearr_32445 = state_32442;
(statearr_32445[(7)] = inst_32406);

(statearr_32445[(8)] = inst_32407);

return statearr_32445;
})();
var statearr_32446_32478 = state_32442__$1;
(statearr_32446_32478[(2)] = null);

(statearr_32446_32478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (4))){
var inst_32410 = (state_32442[(9)]);
var inst_32410__$1 = (state_32442[(2)]);
var inst_32411 = (inst_32410__$1 == null);
var inst_32412 = cljs.core.not.call(null,inst_32411);
var state_32442__$1 = (function (){var statearr_32447 = state_32442;
(statearr_32447[(9)] = inst_32410__$1);

return statearr_32447;
})();
if(inst_32412){
var statearr_32448_32479 = state_32442__$1;
(statearr_32448_32479[(1)] = (5));

} else {
var statearr_32449_32480 = state_32442__$1;
(statearr_32449_32480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (15))){
var inst_32432 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32450_32481 = state_32442__$1;
(statearr_32450_32481[(2)] = inst_32432);

(statearr_32450_32481[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (13))){
var state_32442__$1 = state_32442;
var statearr_32451_32482 = state_32442__$1;
(statearr_32451_32482[(2)] = null);

(statearr_32451_32482[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (6))){
var inst_32407 = (state_32442[(8)]);
var inst_32428 = (inst_32407 > (0));
var state_32442__$1 = state_32442;
if(cljs.core.truth_(inst_32428)){
var statearr_32452_32483 = state_32442__$1;
(statearr_32452_32483[(1)] = (12));

} else {
var statearr_32453_32484 = state_32442__$1;
(statearr_32453_32484[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (3))){
var inst_32440 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32442__$1,inst_32440);
} else {
if((state_val_32443 === (12))){
var inst_32406 = (state_32442[(7)]);
var inst_32430 = cljs.core.vec.call(null,inst_32406);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32442__$1,(15),out,inst_32430);
} else {
if((state_val_32443 === (2))){
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32442__$1,(4),ch);
} else {
if((state_val_32443 === (11))){
var inst_32422 = (state_32442[(2)]);
var inst_32423 = (new Array(n));
var inst_32406 = inst_32423;
var inst_32407 = (0);
var state_32442__$1 = (function (){var statearr_32454 = state_32442;
(statearr_32454[(7)] = inst_32406);

(statearr_32454[(10)] = inst_32422);

(statearr_32454[(8)] = inst_32407);

return statearr_32454;
})();
var statearr_32455_32485 = state_32442__$1;
(statearr_32455_32485[(2)] = null);

(statearr_32455_32485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (9))){
var inst_32406 = (state_32442[(7)]);
var inst_32420 = cljs.core.vec.call(null,inst_32406);
var state_32442__$1 = state_32442;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32442__$1,(11),out,inst_32420);
} else {
if((state_val_32443 === (5))){
var inst_32406 = (state_32442[(7)]);
var inst_32415 = (state_32442[(11)]);
var inst_32410 = (state_32442[(9)]);
var inst_32407 = (state_32442[(8)]);
var inst_32414 = (inst_32406[inst_32407] = inst_32410);
var inst_32415__$1 = (inst_32407 + (1));
var inst_32416 = (inst_32415__$1 < n);
var state_32442__$1 = (function (){var statearr_32456 = state_32442;
(statearr_32456[(12)] = inst_32414);

(statearr_32456[(11)] = inst_32415__$1);

return statearr_32456;
})();
if(cljs.core.truth_(inst_32416)){
var statearr_32457_32486 = state_32442__$1;
(statearr_32457_32486[(1)] = (8));

} else {
var statearr_32458_32487 = state_32442__$1;
(statearr_32458_32487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (14))){
var inst_32435 = (state_32442[(2)]);
var inst_32436 = cljs.core.async.close_BANG_.call(null,out);
var state_32442__$1 = (function (){var statearr_32460 = state_32442;
(statearr_32460[(13)] = inst_32435);

return statearr_32460;
})();
var statearr_32461_32488 = state_32442__$1;
(statearr_32461_32488[(2)] = inst_32436);

(statearr_32461_32488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (10))){
var inst_32426 = (state_32442[(2)]);
var state_32442__$1 = state_32442;
var statearr_32462_32489 = state_32442__$1;
(statearr_32462_32489[(2)] = inst_32426);

(statearr_32462_32489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32443 === (8))){
var inst_32406 = (state_32442[(7)]);
var inst_32415 = (state_32442[(11)]);
var tmp32459 = inst_32406;
var inst_32406__$1 = tmp32459;
var inst_32407 = inst_32415;
var state_32442__$1 = (function (){var statearr_32463 = state_32442;
(statearr_32463[(7)] = inst_32406__$1);

(statearr_32463[(8)] = inst_32407);

return statearr_32463;
})();
var statearr_32464_32490 = state_32442__$1;
(statearr_32464_32490[(2)] = null);

(statearr_32464_32490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___32476,out))
;
return ((function (switch__29610__auto__,c__29625__auto___32476,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_32468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32468[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_32468[(1)] = (1));

return statearr_32468;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_32442){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_32442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e32469){if((e32469 instanceof Object)){
var ex__29614__auto__ = e32469;
var statearr_32470_32491 = state_32442;
(statearr_32470_32491[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32492 = state_32442;
state_32442 = G__32492;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_32442){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_32442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___32476,out))
})();
var state__29627__auto__ = (function (){var statearr_32471 = f__29626__auto__.call(null);
(statearr_32471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___32476);

return statearr_32471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___32476,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32493 = [];
var len__27568__auto___32567 = arguments.length;
var i__27569__auto___32568 = (0);
while(true){
if((i__27569__auto___32568 < len__27568__auto___32567)){
args32493.push((arguments[i__27569__auto___32568]));

var G__32569 = (i__27569__auto___32568 + (1));
i__27569__auto___32568 = G__32569;
continue;
} else {
}
break;
}

var G__32495 = args32493.length;
switch (G__32495) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32493.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29625__auto___32571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29625__auto___32571,out){
return (function (){
var f__29626__auto__ = (function (){var switch__29610__auto__ = ((function (c__29625__auto___32571,out){
return (function (state_32537){
var state_val_32538 = (state_32537[(1)]);
if((state_val_32538 === (7))){
var inst_32533 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32539_32572 = state_32537__$1;
(statearr_32539_32572[(2)] = inst_32533);

(statearr_32539_32572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (1))){
var inst_32496 = [];
var inst_32497 = inst_32496;
var inst_32498 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32537__$1 = (function (){var statearr_32540 = state_32537;
(statearr_32540[(7)] = inst_32498);

(statearr_32540[(8)] = inst_32497);

return statearr_32540;
})();
var statearr_32541_32573 = state_32537__$1;
(statearr_32541_32573[(2)] = null);

(statearr_32541_32573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (4))){
var inst_32501 = (state_32537[(9)]);
var inst_32501__$1 = (state_32537[(2)]);
var inst_32502 = (inst_32501__$1 == null);
var inst_32503 = cljs.core.not.call(null,inst_32502);
var state_32537__$1 = (function (){var statearr_32542 = state_32537;
(statearr_32542[(9)] = inst_32501__$1);

return statearr_32542;
})();
if(inst_32503){
var statearr_32543_32574 = state_32537__$1;
(statearr_32543_32574[(1)] = (5));

} else {
var statearr_32544_32575 = state_32537__$1;
(statearr_32544_32575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (15))){
var inst_32527 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32545_32576 = state_32537__$1;
(statearr_32545_32576[(2)] = inst_32527);

(statearr_32545_32576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (13))){
var state_32537__$1 = state_32537;
var statearr_32546_32577 = state_32537__$1;
(statearr_32546_32577[(2)] = null);

(statearr_32546_32577[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (6))){
var inst_32497 = (state_32537[(8)]);
var inst_32522 = inst_32497.length;
var inst_32523 = (inst_32522 > (0));
var state_32537__$1 = state_32537;
if(cljs.core.truth_(inst_32523)){
var statearr_32547_32578 = state_32537__$1;
(statearr_32547_32578[(1)] = (12));

} else {
var statearr_32548_32579 = state_32537__$1;
(statearr_32548_32579[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (3))){
var inst_32535 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32537__$1,inst_32535);
} else {
if((state_val_32538 === (12))){
var inst_32497 = (state_32537[(8)]);
var inst_32525 = cljs.core.vec.call(null,inst_32497);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32537__$1,(15),out,inst_32525);
} else {
if((state_val_32538 === (2))){
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32537__$1,(4),ch);
} else {
if((state_val_32538 === (11))){
var inst_32501 = (state_32537[(9)]);
var inst_32505 = (state_32537[(10)]);
var inst_32515 = (state_32537[(2)]);
var inst_32516 = [];
var inst_32517 = inst_32516.push(inst_32501);
var inst_32497 = inst_32516;
var inst_32498 = inst_32505;
var state_32537__$1 = (function (){var statearr_32549 = state_32537;
(statearr_32549[(7)] = inst_32498);

(statearr_32549[(11)] = inst_32517);

(statearr_32549[(12)] = inst_32515);

(statearr_32549[(8)] = inst_32497);

return statearr_32549;
})();
var statearr_32550_32580 = state_32537__$1;
(statearr_32550_32580[(2)] = null);

(statearr_32550_32580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (9))){
var inst_32497 = (state_32537[(8)]);
var inst_32513 = cljs.core.vec.call(null,inst_32497);
var state_32537__$1 = state_32537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32537__$1,(11),out,inst_32513);
} else {
if((state_val_32538 === (5))){
var inst_32498 = (state_32537[(7)]);
var inst_32501 = (state_32537[(9)]);
var inst_32505 = (state_32537[(10)]);
var inst_32505__$1 = f.call(null,inst_32501);
var inst_32506 = cljs.core._EQ_.call(null,inst_32505__$1,inst_32498);
var inst_32507 = cljs.core.keyword_identical_QMARK_.call(null,inst_32498,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32508 = (inst_32506) || (inst_32507);
var state_32537__$1 = (function (){var statearr_32551 = state_32537;
(statearr_32551[(10)] = inst_32505__$1);

return statearr_32551;
})();
if(cljs.core.truth_(inst_32508)){
var statearr_32552_32581 = state_32537__$1;
(statearr_32552_32581[(1)] = (8));

} else {
var statearr_32553_32582 = state_32537__$1;
(statearr_32553_32582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (14))){
var inst_32530 = (state_32537[(2)]);
var inst_32531 = cljs.core.async.close_BANG_.call(null,out);
var state_32537__$1 = (function (){var statearr_32555 = state_32537;
(statearr_32555[(13)] = inst_32530);

return statearr_32555;
})();
var statearr_32556_32583 = state_32537__$1;
(statearr_32556_32583[(2)] = inst_32531);

(statearr_32556_32583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (10))){
var inst_32520 = (state_32537[(2)]);
var state_32537__$1 = state_32537;
var statearr_32557_32584 = state_32537__$1;
(statearr_32557_32584[(2)] = inst_32520);

(statearr_32557_32584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32538 === (8))){
var inst_32501 = (state_32537[(9)]);
var inst_32497 = (state_32537[(8)]);
var inst_32505 = (state_32537[(10)]);
var inst_32510 = inst_32497.push(inst_32501);
var tmp32554 = inst_32497;
var inst_32497__$1 = tmp32554;
var inst_32498 = inst_32505;
var state_32537__$1 = (function (){var statearr_32558 = state_32537;
(statearr_32558[(7)] = inst_32498);

(statearr_32558[(14)] = inst_32510);

(statearr_32558[(8)] = inst_32497__$1);

return statearr_32558;
})();
var statearr_32559_32585 = state_32537__$1;
(statearr_32559_32585[(2)] = null);

(statearr_32559_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__29625__auto___32571,out))
;
return ((function (switch__29610__auto__,c__29625__auto___32571,out){
return (function() {
var cljs$core$async$state_machine__29611__auto__ = null;
var cljs$core$async$state_machine__29611__auto____0 = (function (){
var statearr_32563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32563[(0)] = cljs$core$async$state_machine__29611__auto__);

(statearr_32563[(1)] = (1));

return statearr_32563;
});
var cljs$core$async$state_machine__29611__auto____1 = (function (state_32537){
while(true){
var ret_value__29612__auto__ = (function (){try{while(true){
var result__29613__auto__ = switch__29610__auto__.call(null,state_32537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29613__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29613__auto__;
}
break;
}
}catch (e32564){if((e32564 instanceof Object)){
var ex__29614__auto__ = e32564;
var statearr_32565_32586 = state_32537;
(statearr_32565_32586[(5)] = ex__29614__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29612__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32587 = state_32537;
state_32537 = G__32587;
continue;
} else {
return ret_value__29612__auto__;
}
break;
}
});
cljs$core$async$state_machine__29611__auto__ = function(state_32537){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29611__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29611__auto____1.call(this,state_32537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29611__auto____0;
cljs$core$async$state_machine__29611__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29611__auto____1;
return cljs$core$async$state_machine__29611__auto__;
})()
;})(switch__29610__auto__,c__29625__auto___32571,out))
})();
var state__29627__auto__ = (function (){var statearr_32566 = f__29626__auto__.call(null);
(statearr_32566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29625__auto___32571);

return statearr_32566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29627__auto__);
});})(c__29625__auto___32571,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map