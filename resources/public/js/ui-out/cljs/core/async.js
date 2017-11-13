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
var args30013 = [];
var len__27787__auto___30019 = arguments.length;
var i__27788__auto___30020 = (0);
while(true){
if((i__27788__auto___30020 < len__27787__auto___30019)){
args30013.push((arguments[i__27788__auto___30020]));

var G__30021 = (i__27788__auto___30020 + (1));
i__27788__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var G__30015 = args30013.length;
switch (G__30015) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30013.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30016 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30016 = (function (f,blockable,meta30017){
this.f = f;
this.blockable = blockable;
this.meta30017 = meta30017;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30018,meta30017__$1){
var self__ = this;
var _30018__$1 = this;
return (new cljs.core.async.t_cljs$core$async30016(self__.f,self__.blockable,meta30017__$1));
});

cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30018){
var self__ = this;
var _30018__$1 = this;
return self__.meta30017;
});

cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30016.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30016.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30017","meta30017",-1936629237,null)], null);
});

cljs.core.async.t_cljs$core$async30016.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30016.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30016";

cljs.core.async.t_cljs$core$async30016.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30016");
});

cljs.core.async.__GT_t_cljs$core$async30016 = (function cljs$core$async$__GT_t_cljs$core$async30016(f__$1,blockable__$1,meta30017){
return (new cljs.core.async.t_cljs$core$async30016(f__$1,blockable__$1,meta30017));
});

}

return (new cljs.core.async.t_cljs$core$async30016(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30025 = [];
var len__27787__auto___30028 = arguments.length;
var i__27788__auto___30029 = (0);
while(true){
if((i__27788__auto___30029 < len__27787__auto___30028)){
args30025.push((arguments[i__27788__auto___30029]));

var G__30030 = (i__27788__auto___30029 + (1));
i__27788__auto___30029 = G__30030;
continue;
} else {
}
break;
}

var G__30027 = args30025.length;
switch (G__30027) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30025.length)].join('')));

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
var args30032 = [];
var len__27787__auto___30035 = arguments.length;
var i__27788__auto___30036 = (0);
while(true){
if((i__27788__auto___30036 < len__27787__auto___30035)){
args30032.push((arguments[i__27788__auto___30036]));

var G__30037 = (i__27788__auto___30036 + (1));
i__27788__auto___30036 = G__30037;
continue;
} else {
}
break;
}

var G__30034 = args30032.length;
switch (G__30034) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30032.length)].join('')));

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
var args30039 = [];
var len__27787__auto___30042 = arguments.length;
var i__27788__auto___30043 = (0);
while(true){
if((i__27788__auto___30043 < len__27787__auto___30042)){
args30039.push((arguments[i__27788__auto___30043]));

var G__30044 = (i__27788__auto___30043 + (1));
i__27788__auto___30043 = G__30044;
continue;
} else {
}
break;
}

var G__30041 = args30039.length;
switch (G__30041) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30039.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30046 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30046);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30046,ret){
return (function (){
return fn1.call(null,val_30046);
});})(val_30046,ret))
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
var args30047 = [];
var len__27787__auto___30050 = arguments.length;
var i__27788__auto___30051 = (0);
while(true){
if((i__27788__auto___30051 < len__27787__auto___30050)){
args30047.push((arguments[i__27788__auto___30051]));

var G__30052 = (i__27788__auto___30051 + (1));
i__27788__auto___30051 = G__30052;
continue;
} else {
}
break;
}

var G__30049 = args30047.length;
switch (G__30049) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30047.length)].join('')));

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
var n__27597__auto___30054 = n;
var x_30055 = (0);
while(true){
if((x_30055 < n__27597__auto___30054)){
(a[x_30055] = (0));

var G__30056 = (x_30055 + (1));
x_30055 = G__30056;
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

var G__30057 = (i + (1));
i = G__30057;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30061 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30061 = (function (flag,meta30062){
this.flag = flag;
this.meta30062 = meta30062;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30063,meta30062__$1){
var self__ = this;
var _30063__$1 = this;
return (new cljs.core.async.t_cljs$core$async30061(self__.flag,meta30062__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30063){
var self__ = this;
var _30063__$1 = this;
return self__.meta30062;
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30062","meta30062",-767821577,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30061.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30061.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30061";

cljs.core.async.t_cljs$core$async30061.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30061");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30061 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30061(flag__$1,meta30062){
return (new cljs.core.async.t_cljs$core$async30061(flag__$1,meta30062));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30061(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30067 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30067 = (function (flag,cb,meta30068){
this.flag = flag;
this.cb = cb;
this.meta30068 = meta30068;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30069,meta30068__$1){
var self__ = this;
var _30069__$1 = this;
return (new cljs.core.async.t_cljs$core$async30067(self__.flag,self__.cb,meta30068__$1));
});

cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30069){
var self__ = this;
var _30069__$1 = this;
return self__.meta30068;
});

cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30067.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30067.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30068","meta30068",-988911195,null)], null);
});

cljs.core.async.t_cljs$core$async30067.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30067.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30067";

cljs.core.async.t_cljs$core$async30067.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30067");
});

cljs.core.async.__GT_t_cljs$core$async30067 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30067(flag__$1,cb__$1,meta30068){
return (new cljs.core.async.t_cljs$core$async30067(flag__$1,cb__$1,meta30068));
});

}

return (new cljs.core.async.t_cljs$core$async30067(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30070_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30070_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30071_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30071_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__26674__auto__ = wport;
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return port;
}
})()], null));
} else {
var G__30072 = (i + (1));
i = G__30072;
continue;
}
} else {
return null;
}
break;
}
})();
var or__26674__auto__ = ret;
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__26662__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__26662__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__26662__auto__;
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
var args__27794__auto__ = [];
var len__27787__auto___30078 = arguments.length;
var i__27788__auto___30079 = (0);
while(true){
if((i__27788__auto___30079 < len__27787__auto___30078)){
args__27794__auto__.push((arguments[i__27788__auto___30079]));

var G__30080 = (i__27788__auto___30079 + (1));
i__27788__auto___30079 = G__30080;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((1) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27795__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30075){
var map__30076 = p__30075;
var map__30076__$1 = ((((!((map__30076 == null)))?((((map__30076.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30076.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30076):map__30076);
var opts = map__30076__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30073){
var G__30074 = cljs.core.first.call(null,seq30073);
var seq30073__$1 = cljs.core.next.call(null,seq30073);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30074,seq30073__$1);
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
var args30081 = [];
var len__27787__auto___30131 = arguments.length;
var i__27788__auto___30132 = (0);
while(true){
if((i__27788__auto___30132 < len__27787__auto___30131)){
args30081.push((arguments[i__27788__auto___30132]));

var G__30133 = (i__27788__auto___30132 + (1));
i__27788__auto___30132 = G__30133;
continue;
} else {
}
break;
}

var G__30083 = args30081.length;
switch (G__30083) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30081.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29845__auto___30135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___30135){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___30135){
return (function (state_30107){
var state_val_30108 = (state_30107[(1)]);
if((state_val_30108 === (7))){
var inst_30103 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30109_30136 = state_30107__$1;
(statearr_30109_30136[(2)] = inst_30103);

(statearr_30109_30136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (1))){
var state_30107__$1 = state_30107;
var statearr_30110_30137 = state_30107__$1;
(statearr_30110_30137[(2)] = null);

(statearr_30110_30137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (4))){
var inst_30086 = (state_30107[(7)]);
var inst_30086__$1 = (state_30107[(2)]);
var inst_30087 = (inst_30086__$1 == null);
var state_30107__$1 = (function (){var statearr_30111 = state_30107;
(statearr_30111[(7)] = inst_30086__$1);

return statearr_30111;
})();
if(cljs.core.truth_(inst_30087)){
var statearr_30112_30138 = state_30107__$1;
(statearr_30112_30138[(1)] = (5));

} else {
var statearr_30113_30139 = state_30107__$1;
(statearr_30113_30139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (13))){
var state_30107__$1 = state_30107;
var statearr_30114_30140 = state_30107__$1;
(statearr_30114_30140[(2)] = null);

(statearr_30114_30140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (6))){
var inst_30086 = (state_30107[(7)]);
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30107__$1,(11),to,inst_30086);
} else {
if((state_val_30108 === (3))){
var inst_30105 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30107__$1,inst_30105);
} else {
if((state_val_30108 === (12))){
var state_30107__$1 = state_30107;
var statearr_30115_30141 = state_30107__$1;
(statearr_30115_30141[(2)] = null);

(statearr_30115_30141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (2))){
var state_30107__$1 = state_30107;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30107__$1,(4),from);
} else {
if((state_val_30108 === (11))){
var inst_30096 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
if(cljs.core.truth_(inst_30096)){
var statearr_30116_30142 = state_30107__$1;
(statearr_30116_30142[(1)] = (12));

} else {
var statearr_30117_30143 = state_30107__$1;
(statearr_30117_30143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (9))){
var state_30107__$1 = state_30107;
var statearr_30118_30144 = state_30107__$1;
(statearr_30118_30144[(2)] = null);

(statearr_30118_30144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (5))){
var state_30107__$1 = state_30107;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30119_30145 = state_30107__$1;
(statearr_30119_30145[(1)] = (8));

} else {
var statearr_30120_30146 = state_30107__$1;
(statearr_30120_30146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (14))){
var inst_30101 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30121_30147 = state_30107__$1;
(statearr_30121_30147[(2)] = inst_30101);

(statearr_30121_30147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (10))){
var inst_30093 = (state_30107[(2)]);
var state_30107__$1 = state_30107;
var statearr_30122_30148 = state_30107__$1;
(statearr_30122_30148[(2)] = inst_30093);

(statearr_30122_30148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30108 === (8))){
var inst_30090 = cljs.core.async.close_BANG_.call(null,to);
var state_30107__$1 = state_30107;
var statearr_30123_30149 = state_30107__$1;
(statearr_30123_30149[(2)] = inst_30090);

(statearr_30123_30149[(1)] = (10));


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
});})(c__29845__auto___30135))
;
return ((function (switch__29830__auto__,c__29845__auto___30135){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_30127 = [null,null,null,null,null,null,null,null];
(statearr_30127[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_30127[(1)] = (1));

return statearr_30127;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_30107){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30128){if((e30128 instanceof Object)){
var ex__29834__auto__ = e30128;
var statearr_30129_30150 = state_30107;
(statearr_30129_30150[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30128;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30151 = state_30107;
state_30107 = G__30151;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_30107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_30107);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___30135))
})();
var state__29847__auto__ = (function (){var statearr_30130 = f__29846__auto__.call(null);
(statearr_30130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30135);

return statearr_30130;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___30135))
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
return (function (p__30339){
var vec__30340 = p__30339;
var v = cljs.core.nth.call(null,vec__30340,(0),null);
var p = cljs.core.nth.call(null,vec__30340,(1),null);
var job = vec__30340;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29845__auto___30526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results){
return (function (state_30347){
var state_val_30348 = (state_30347[(1)]);
if((state_val_30348 === (1))){
var state_30347__$1 = state_30347;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30347__$1,(2),res,v);
} else {
if((state_val_30348 === (2))){
var inst_30344 = (state_30347[(2)]);
var inst_30345 = cljs.core.async.close_BANG_.call(null,res);
var state_30347__$1 = (function (){var statearr_30349 = state_30347;
(statearr_30349[(7)] = inst_30344);

return statearr_30349;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30347__$1,inst_30345);
} else {
return null;
}
}
});})(c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results))
;
return ((function (switch__29830__auto__,c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_30353 = [null,null,null,null,null,null,null,null];
(statearr_30353[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__);

(statearr_30353[(1)] = (1));

return statearr_30353;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1 = (function (state_30347){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30347);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30354){if((e30354 instanceof Object)){
var ex__29834__auto__ = e30354;
var statearr_30355_30527 = state_30347;
(statearr_30355_30527[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30347);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30528 = state_30347;
state_30347 = G__30528;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = function(state_30347){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1.call(this,state_30347);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results))
})();
var state__29847__auto__ = (function (){var statearr_30356 = f__29846__auto__.call(null);
(statearr_30356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30526);

return statearr_30356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___30526,res,vec__30340,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30357){
var vec__30358 = p__30357;
var v = cljs.core.nth.call(null,vec__30358,(0),null);
var p = cljs.core.nth.call(null,vec__30358,(1),null);
var job = vec__30358;
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
var n__27597__auto___30529 = n;
var __30530 = (0);
while(true){
if((__30530 < n__27597__auto___30529)){
var G__30361_30531 = type;
var G__30361_30532__$1 = (((G__30361_30531 instanceof cljs.core.Keyword))?G__30361_30531.fqn:null);
switch (G__30361_30532__$1) {
case "compute":
var c__29845__auto___30534 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30530,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (__30530,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function (state_30374){
var state_val_30375 = (state_30374[(1)]);
if((state_val_30375 === (1))){
var state_30374__$1 = state_30374;
var statearr_30376_30535 = state_30374__$1;
(statearr_30376_30535[(2)] = null);

(statearr_30376_30535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (2))){
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30374__$1,(4),jobs);
} else {
if((state_val_30375 === (3))){
var inst_30372 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30374__$1,inst_30372);
} else {
if((state_val_30375 === (4))){
var inst_30364 = (state_30374[(2)]);
var inst_30365 = process.call(null,inst_30364);
var state_30374__$1 = state_30374;
if(cljs.core.truth_(inst_30365)){
var statearr_30377_30536 = state_30374__$1;
(statearr_30377_30536[(1)] = (5));

} else {
var statearr_30378_30537 = state_30374__$1;
(statearr_30378_30537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (5))){
var state_30374__$1 = state_30374;
var statearr_30379_30538 = state_30374__$1;
(statearr_30379_30538[(2)] = null);

(statearr_30379_30538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (6))){
var state_30374__$1 = state_30374;
var statearr_30380_30539 = state_30374__$1;
(statearr_30380_30539[(2)] = null);

(statearr_30380_30539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30375 === (7))){
var inst_30370 = (state_30374[(2)]);
var state_30374__$1 = state_30374;
var statearr_30381_30540 = state_30374__$1;
(statearr_30381_30540[(2)] = inst_30370);

(statearr_30381_30540[(1)] = (3));


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
});})(__30530,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
;
return ((function (__30530,switch__29830__auto__,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_30385 = [null,null,null,null,null,null,null];
(statearr_30385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__);

(statearr_30385[(1)] = (1));

return statearr_30385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1 = (function (state_30374){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30374);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30386){if((e30386 instanceof Object)){
var ex__29834__auto__ = e30386;
var statearr_30387_30541 = state_30374;
(statearr_30387_30541[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30374);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30386;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30542 = state_30374;
state_30374 = G__30542;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = function(state_30374){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1.call(this,state_30374);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__;
})()
;})(__30530,switch__29830__auto__,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
})();
var state__29847__auto__ = (function (){var statearr_30388 = f__29846__auto__.call(null);
(statearr_30388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30534);

return statearr_30388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(__30530,c__29845__auto___30534,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
);


break;
case "async":
var c__29845__auto___30543 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30530,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (__30530,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function (state_30401){
var state_val_30402 = (state_30401[(1)]);
if((state_val_30402 === (1))){
var state_30401__$1 = state_30401;
var statearr_30403_30544 = state_30401__$1;
(statearr_30403_30544[(2)] = null);

(statearr_30403_30544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (2))){
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30401__$1,(4),jobs);
} else {
if((state_val_30402 === (3))){
var inst_30399 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30401__$1,inst_30399);
} else {
if((state_val_30402 === (4))){
var inst_30391 = (state_30401[(2)]);
var inst_30392 = async.call(null,inst_30391);
var state_30401__$1 = state_30401;
if(cljs.core.truth_(inst_30392)){
var statearr_30404_30545 = state_30401__$1;
(statearr_30404_30545[(1)] = (5));

} else {
var statearr_30405_30546 = state_30401__$1;
(statearr_30405_30546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (5))){
var state_30401__$1 = state_30401;
var statearr_30406_30547 = state_30401__$1;
(statearr_30406_30547[(2)] = null);

(statearr_30406_30547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (6))){
var state_30401__$1 = state_30401;
var statearr_30407_30548 = state_30401__$1;
(statearr_30407_30548[(2)] = null);

(statearr_30407_30548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30402 === (7))){
var inst_30397 = (state_30401[(2)]);
var state_30401__$1 = state_30401;
var statearr_30408_30549 = state_30401__$1;
(statearr_30408_30549[(2)] = inst_30397);

(statearr_30408_30549[(1)] = (3));


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
});})(__30530,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
;
return ((function (__30530,switch__29830__auto__,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_30412 = [null,null,null,null,null,null,null];
(statearr_30412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__);

(statearr_30412[(1)] = (1));

return statearr_30412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1 = (function (state_30401){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30413){if((e30413 instanceof Object)){
var ex__29834__auto__ = e30413;
var statearr_30414_30550 = state_30401;
(statearr_30414_30550[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30551 = state_30401;
state_30401 = G__30551;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = function(state_30401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1.call(this,state_30401);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__;
})()
;})(__30530,switch__29830__auto__,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
})();
var state__29847__auto__ = (function (){var statearr_30415 = f__29846__auto__.call(null);
(statearr_30415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30543);

return statearr_30415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(__30530,c__29845__auto___30543,G__30361_30531,G__30361_30532__$1,n__27597__auto___30529,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30552 = (__30530 + (1));
__30530 = G__30552;
continue;
} else {
}
break;
}

var c__29845__auto___30553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___30553,jobs,results,process,async){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___30553,jobs,results,process,async){
return (function (state_30437){
var state_val_30438 = (state_30437[(1)]);
if((state_val_30438 === (1))){
var state_30437__$1 = state_30437;
var statearr_30439_30554 = state_30437__$1;
(statearr_30439_30554[(2)] = null);

(statearr_30439_30554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (2))){
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30437__$1,(4),from);
} else {
if((state_val_30438 === (3))){
var inst_30435 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30437__$1,inst_30435);
} else {
if((state_val_30438 === (4))){
var inst_30418 = (state_30437[(7)]);
var inst_30418__$1 = (state_30437[(2)]);
var inst_30419 = (inst_30418__$1 == null);
var state_30437__$1 = (function (){var statearr_30440 = state_30437;
(statearr_30440[(7)] = inst_30418__$1);

return statearr_30440;
})();
if(cljs.core.truth_(inst_30419)){
var statearr_30441_30555 = state_30437__$1;
(statearr_30441_30555[(1)] = (5));

} else {
var statearr_30442_30556 = state_30437__$1;
(statearr_30442_30556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (5))){
var inst_30421 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30437__$1 = state_30437;
var statearr_30443_30557 = state_30437__$1;
(statearr_30443_30557[(2)] = inst_30421);

(statearr_30443_30557[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (6))){
var inst_30418 = (state_30437[(7)]);
var inst_30423 = (state_30437[(8)]);
var inst_30423__$1 = cljs.core.async.chan.call(null,(1));
var inst_30424 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30425 = [inst_30418,inst_30423__$1];
var inst_30426 = (new cljs.core.PersistentVector(null,2,(5),inst_30424,inst_30425,null));
var state_30437__$1 = (function (){var statearr_30444 = state_30437;
(statearr_30444[(8)] = inst_30423__$1);

return statearr_30444;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30437__$1,(8),jobs,inst_30426);
} else {
if((state_val_30438 === (7))){
var inst_30433 = (state_30437[(2)]);
var state_30437__$1 = state_30437;
var statearr_30445_30558 = state_30437__$1;
(statearr_30445_30558[(2)] = inst_30433);

(statearr_30445_30558[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30438 === (8))){
var inst_30423 = (state_30437[(8)]);
var inst_30428 = (state_30437[(2)]);
var state_30437__$1 = (function (){var statearr_30446 = state_30437;
(statearr_30446[(9)] = inst_30428);

return statearr_30446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30437__$1,(9),results,inst_30423);
} else {
if((state_val_30438 === (9))){
var inst_30430 = (state_30437[(2)]);
var state_30437__$1 = (function (){var statearr_30447 = state_30437;
(statearr_30447[(10)] = inst_30430);

return statearr_30447;
})();
var statearr_30448_30559 = state_30437__$1;
(statearr_30448_30559[(2)] = null);

(statearr_30448_30559[(1)] = (2));


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
});})(c__29845__auto___30553,jobs,results,process,async))
;
return ((function (switch__29830__auto__,c__29845__auto___30553,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_30452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30452[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__);

(statearr_30452[(1)] = (1));

return statearr_30452;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1 = (function (state_30437){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30437);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30453){if((e30453 instanceof Object)){
var ex__29834__auto__ = e30453;
var statearr_30454_30560 = state_30437;
(statearr_30454_30560[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30437);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30561 = state_30437;
state_30437 = G__30561;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = function(state_30437){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1.call(this,state_30437);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___30553,jobs,results,process,async))
})();
var state__29847__auto__ = (function (){var statearr_30455 = f__29846__auto__.call(null);
(statearr_30455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30553);

return statearr_30455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___30553,jobs,results,process,async))
);


var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__,jobs,results,process,async){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__,jobs,results,process,async){
return (function (state_30493){
var state_val_30494 = (state_30493[(1)]);
if((state_val_30494 === (7))){
var inst_30489 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30495_30562 = state_30493__$1;
(statearr_30495_30562[(2)] = inst_30489);

(statearr_30495_30562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (20))){
var state_30493__$1 = state_30493;
var statearr_30496_30563 = state_30493__$1;
(statearr_30496_30563[(2)] = null);

(statearr_30496_30563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (1))){
var state_30493__$1 = state_30493;
var statearr_30497_30564 = state_30493__$1;
(statearr_30497_30564[(2)] = null);

(statearr_30497_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (4))){
var inst_30458 = (state_30493[(7)]);
var inst_30458__$1 = (state_30493[(2)]);
var inst_30459 = (inst_30458__$1 == null);
var state_30493__$1 = (function (){var statearr_30498 = state_30493;
(statearr_30498[(7)] = inst_30458__$1);

return statearr_30498;
})();
if(cljs.core.truth_(inst_30459)){
var statearr_30499_30565 = state_30493__$1;
(statearr_30499_30565[(1)] = (5));

} else {
var statearr_30500_30566 = state_30493__$1;
(statearr_30500_30566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (15))){
var inst_30471 = (state_30493[(8)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30493__$1,(18),to,inst_30471);
} else {
if((state_val_30494 === (21))){
var inst_30484 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30501_30567 = state_30493__$1;
(statearr_30501_30567[(2)] = inst_30484);

(statearr_30501_30567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (13))){
var inst_30486 = (state_30493[(2)]);
var state_30493__$1 = (function (){var statearr_30502 = state_30493;
(statearr_30502[(9)] = inst_30486);

return statearr_30502;
})();
var statearr_30503_30568 = state_30493__$1;
(statearr_30503_30568[(2)] = null);

(statearr_30503_30568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (6))){
var inst_30458 = (state_30493[(7)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(11),inst_30458);
} else {
if((state_val_30494 === (17))){
var inst_30479 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
if(cljs.core.truth_(inst_30479)){
var statearr_30504_30569 = state_30493__$1;
(statearr_30504_30569[(1)] = (19));

} else {
var statearr_30505_30570 = state_30493__$1;
(statearr_30505_30570[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (3))){
var inst_30491 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30493__$1,inst_30491);
} else {
if((state_val_30494 === (12))){
var inst_30468 = (state_30493[(10)]);
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(14),inst_30468);
} else {
if((state_val_30494 === (2))){
var state_30493__$1 = state_30493;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30493__$1,(4),results);
} else {
if((state_val_30494 === (19))){
var state_30493__$1 = state_30493;
var statearr_30506_30571 = state_30493__$1;
(statearr_30506_30571[(2)] = null);

(statearr_30506_30571[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (11))){
var inst_30468 = (state_30493[(2)]);
var state_30493__$1 = (function (){var statearr_30507 = state_30493;
(statearr_30507[(10)] = inst_30468);

return statearr_30507;
})();
var statearr_30508_30572 = state_30493__$1;
(statearr_30508_30572[(2)] = null);

(statearr_30508_30572[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (9))){
var state_30493__$1 = state_30493;
var statearr_30509_30573 = state_30493__$1;
(statearr_30509_30573[(2)] = null);

(statearr_30509_30573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (5))){
var state_30493__$1 = state_30493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30510_30574 = state_30493__$1;
(statearr_30510_30574[(1)] = (8));

} else {
var statearr_30511_30575 = state_30493__$1;
(statearr_30511_30575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (14))){
var inst_30473 = (state_30493[(11)]);
var inst_30471 = (state_30493[(8)]);
var inst_30471__$1 = (state_30493[(2)]);
var inst_30472 = (inst_30471__$1 == null);
var inst_30473__$1 = cljs.core.not.call(null,inst_30472);
var state_30493__$1 = (function (){var statearr_30512 = state_30493;
(statearr_30512[(11)] = inst_30473__$1);

(statearr_30512[(8)] = inst_30471__$1);

return statearr_30512;
})();
if(inst_30473__$1){
var statearr_30513_30576 = state_30493__$1;
(statearr_30513_30576[(1)] = (15));

} else {
var statearr_30514_30577 = state_30493__$1;
(statearr_30514_30577[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (16))){
var inst_30473 = (state_30493[(11)]);
var state_30493__$1 = state_30493;
var statearr_30515_30578 = state_30493__$1;
(statearr_30515_30578[(2)] = inst_30473);

(statearr_30515_30578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (10))){
var inst_30465 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30516_30579 = state_30493__$1;
(statearr_30516_30579[(2)] = inst_30465);

(statearr_30516_30579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (18))){
var inst_30476 = (state_30493[(2)]);
var state_30493__$1 = state_30493;
var statearr_30517_30580 = state_30493__$1;
(statearr_30517_30580[(2)] = inst_30476);

(statearr_30517_30580[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30494 === (8))){
var inst_30462 = cljs.core.async.close_BANG_.call(null,to);
var state_30493__$1 = state_30493;
var statearr_30518_30581 = state_30493__$1;
(statearr_30518_30581[(2)] = inst_30462);

(statearr_30518_30581[(1)] = (10));


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
});})(c__29845__auto__,jobs,results,process,async))
;
return ((function (switch__29830__auto__,c__29845__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_30522 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30522[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__);

(statearr_30522[(1)] = (1));

return statearr_30522;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1 = (function (state_30493){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30523){if((e30523 instanceof Object)){
var ex__29834__auto__ = e30523;
var statearr_30524_30582 = state_30493;
(statearr_30524_30582[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30583 = state_30493;
state_30493 = G__30583;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__ = function(state_30493){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1.call(this,state_30493);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__,jobs,results,process,async))
})();
var state__29847__auto__ = (function (){var statearr_30525 = f__29846__auto__.call(null);
(statearr_30525[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_30525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__,jobs,results,process,async))
);

return c__29845__auto__;
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
var args30584 = [];
var len__27787__auto___30587 = arguments.length;
var i__27788__auto___30588 = (0);
while(true){
if((i__27788__auto___30588 < len__27787__auto___30587)){
args30584.push((arguments[i__27788__auto___30588]));

var G__30589 = (i__27788__auto___30588 + (1));
i__27788__auto___30588 = G__30589;
continue;
} else {
}
break;
}

var G__30586 = args30584.length;
switch (G__30586) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30584.length)].join('')));

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
var args30591 = [];
var len__27787__auto___30594 = arguments.length;
var i__27788__auto___30595 = (0);
while(true){
if((i__27788__auto___30595 < len__27787__auto___30594)){
args30591.push((arguments[i__27788__auto___30595]));

var G__30596 = (i__27788__auto___30595 + (1));
i__27788__auto___30595 = G__30596;
continue;
} else {
}
break;
}

var G__30593 = args30591.length;
switch (G__30593) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30591.length)].join('')));

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
var args30598 = [];
var len__27787__auto___30651 = arguments.length;
var i__27788__auto___30652 = (0);
while(true){
if((i__27788__auto___30652 < len__27787__auto___30651)){
args30598.push((arguments[i__27788__auto___30652]));

var G__30653 = (i__27788__auto___30652 + (1));
i__27788__auto___30652 = G__30653;
continue;
} else {
}
break;
}

var G__30600 = args30598.length;
switch (G__30600) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30598.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29845__auto___30655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___30655,tc,fc){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___30655,tc,fc){
return (function (state_30626){
var state_val_30627 = (state_30626[(1)]);
if((state_val_30627 === (7))){
var inst_30622 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30628_30656 = state_30626__$1;
(statearr_30628_30656[(2)] = inst_30622);

(statearr_30628_30656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (1))){
var state_30626__$1 = state_30626;
var statearr_30629_30657 = state_30626__$1;
(statearr_30629_30657[(2)] = null);

(statearr_30629_30657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (4))){
var inst_30603 = (state_30626[(7)]);
var inst_30603__$1 = (state_30626[(2)]);
var inst_30604 = (inst_30603__$1 == null);
var state_30626__$1 = (function (){var statearr_30630 = state_30626;
(statearr_30630[(7)] = inst_30603__$1);

return statearr_30630;
})();
if(cljs.core.truth_(inst_30604)){
var statearr_30631_30658 = state_30626__$1;
(statearr_30631_30658[(1)] = (5));

} else {
var statearr_30632_30659 = state_30626__$1;
(statearr_30632_30659[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (13))){
var state_30626__$1 = state_30626;
var statearr_30633_30660 = state_30626__$1;
(statearr_30633_30660[(2)] = null);

(statearr_30633_30660[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (6))){
var inst_30603 = (state_30626[(7)]);
var inst_30609 = p.call(null,inst_30603);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30609)){
var statearr_30634_30661 = state_30626__$1;
(statearr_30634_30661[(1)] = (9));

} else {
var statearr_30635_30662 = state_30626__$1;
(statearr_30635_30662[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (3))){
var inst_30624 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30626__$1,inst_30624);
} else {
if((state_val_30627 === (12))){
var state_30626__$1 = state_30626;
var statearr_30636_30663 = state_30626__$1;
(statearr_30636_30663[(2)] = null);

(statearr_30636_30663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (2))){
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30626__$1,(4),ch);
} else {
if((state_val_30627 === (11))){
var inst_30603 = (state_30626[(7)]);
var inst_30613 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30626__$1,(8),inst_30613,inst_30603);
} else {
if((state_val_30627 === (9))){
var state_30626__$1 = state_30626;
var statearr_30637_30664 = state_30626__$1;
(statearr_30637_30664[(2)] = tc);

(statearr_30637_30664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (5))){
var inst_30606 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30607 = cljs.core.async.close_BANG_.call(null,fc);
var state_30626__$1 = (function (){var statearr_30638 = state_30626;
(statearr_30638[(8)] = inst_30606);

return statearr_30638;
})();
var statearr_30639_30665 = state_30626__$1;
(statearr_30639_30665[(2)] = inst_30607);

(statearr_30639_30665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (14))){
var inst_30620 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
var statearr_30640_30666 = state_30626__$1;
(statearr_30640_30666[(2)] = inst_30620);

(statearr_30640_30666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (10))){
var state_30626__$1 = state_30626;
var statearr_30641_30667 = state_30626__$1;
(statearr_30641_30667[(2)] = fc);

(statearr_30641_30667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30627 === (8))){
var inst_30615 = (state_30626[(2)]);
var state_30626__$1 = state_30626;
if(cljs.core.truth_(inst_30615)){
var statearr_30642_30668 = state_30626__$1;
(statearr_30642_30668[(1)] = (12));

} else {
var statearr_30643_30669 = state_30626__$1;
(statearr_30643_30669[(1)] = (13));

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
});})(c__29845__auto___30655,tc,fc))
;
return ((function (switch__29830__auto__,c__29845__auto___30655,tc,fc){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_30647 = [null,null,null,null,null,null,null,null,null];
(statearr_30647[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_30647[(1)] = (1));

return statearr_30647;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_30626){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30648){if((e30648 instanceof Object)){
var ex__29834__auto__ = e30648;
var statearr_30649_30670 = state_30626;
(statearr_30649_30670[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30671 = state_30626;
state_30626 = G__30671;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_30626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_30626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___30655,tc,fc))
})();
var state__29847__auto__ = (function (){var statearr_30650 = f__29846__auto__.call(null);
(statearr_30650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___30655);

return statearr_30650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___30655,tc,fc))
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
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__){
return (function (state_30735){
var state_val_30736 = (state_30735[(1)]);
if((state_val_30736 === (7))){
var inst_30731 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30737_30758 = state_30735__$1;
(statearr_30737_30758[(2)] = inst_30731);

(statearr_30737_30758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (1))){
var inst_30715 = init;
var state_30735__$1 = (function (){var statearr_30738 = state_30735;
(statearr_30738[(7)] = inst_30715);

return statearr_30738;
})();
var statearr_30739_30759 = state_30735__$1;
(statearr_30739_30759[(2)] = null);

(statearr_30739_30759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (4))){
var inst_30718 = (state_30735[(8)]);
var inst_30718__$1 = (state_30735[(2)]);
var inst_30719 = (inst_30718__$1 == null);
var state_30735__$1 = (function (){var statearr_30740 = state_30735;
(statearr_30740[(8)] = inst_30718__$1);

return statearr_30740;
})();
if(cljs.core.truth_(inst_30719)){
var statearr_30741_30760 = state_30735__$1;
(statearr_30741_30760[(1)] = (5));

} else {
var statearr_30742_30761 = state_30735__$1;
(statearr_30742_30761[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (6))){
var inst_30718 = (state_30735[(8)]);
var inst_30715 = (state_30735[(7)]);
var inst_30722 = (state_30735[(9)]);
var inst_30722__$1 = f.call(null,inst_30715,inst_30718);
var inst_30723 = cljs.core.reduced_QMARK_.call(null,inst_30722__$1);
var state_30735__$1 = (function (){var statearr_30743 = state_30735;
(statearr_30743[(9)] = inst_30722__$1);

return statearr_30743;
})();
if(inst_30723){
var statearr_30744_30762 = state_30735__$1;
(statearr_30744_30762[(1)] = (8));

} else {
var statearr_30745_30763 = state_30735__$1;
(statearr_30745_30763[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (3))){
var inst_30733 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30735__$1,inst_30733);
} else {
if((state_val_30736 === (2))){
var state_30735__$1 = state_30735;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30735__$1,(4),ch);
} else {
if((state_val_30736 === (9))){
var inst_30722 = (state_30735[(9)]);
var inst_30715 = inst_30722;
var state_30735__$1 = (function (){var statearr_30746 = state_30735;
(statearr_30746[(7)] = inst_30715);

return statearr_30746;
})();
var statearr_30747_30764 = state_30735__$1;
(statearr_30747_30764[(2)] = null);

(statearr_30747_30764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (5))){
var inst_30715 = (state_30735[(7)]);
var state_30735__$1 = state_30735;
var statearr_30748_30765 = state_30735__$1;
(statearr_30748_30765[(2)] = inst_30715);

(statearr_30748_30765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (10))){
var inst_30729 = (state_30735[(2)]);
var state_30735__$1 = state_30735;
var statearr_30749_30766 = state_30735__$1;
(statearr_30749_30766[(2)] = inst_30729);

(statearr_30749_30766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30736 === (8))){
var inst_30722 = (state_30735[(9)]);
var inst_30725 = cljs.core.deref.call(null,inst_30722);
var state_30735__$1 = state_30735;
var statearr_30750_30767 = state_30735__$1;
(statearr_30750_30767[(2)] = inst_30725);

(statearr_30750_30767[(1)] = (10));


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
});})(c__29845__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29831__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29831__auto____0 = (function (){
var statearr_30754 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30754[(0)] = cljs$core$async$reduce_$_state_machine__29831__auto__);

(statearr_30754[(1)] = (1));

return statearr_30754;
});
var cljs$core$async$reduce_$_state_machine__29831__auto____1 = (function (state_30735){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30735);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30755){if((e30755 instanceof Object)){
var ex__29834__auto__ = e30755;
var statearr_30756_30768 = state_30735;
(statearr_30756_30768[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30769 = state_30735;
state_30735 = G__30769;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29831__auto__ = function(state_30735){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29831__auto____1.call(this,state_30735);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29831__auto____0;
cljs$core$async$reduce_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29831__auto____1;
return cljs$core$async$reduce_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__))
})();
var state__29847__auto__ = (function (){var statearr_30757 = f__29846__auto__.call(null);
(statearr_30757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_30757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__))
);

return c__29845__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__,f__$1){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__,f__$1){
return (function (state_30789){
var state_val_30790 = (state_30789[(1)]);
if((state_val_30790 === (1))){
var inst_30784 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30789__$1,(2),inst_30784);
} else {
if((state_val_30790 === (2))){
var inst_30786 = (state_30789[(2)]);
var inst_30787 = f__$1.call(null,inst_30786);
var state_30789__$1 = state_30789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30789__$1,inst_30787);
} else {
return null;
}
}
});})(c__29845__auto__,f__$1))
;
return ((function (switch__29830__auto__,c__29845__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29831__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29831__auto____0 = (function (){
var statearr_30794 = [null,null,null,null,null,null,null];
(statearr_30794[(0)] = cljs$core$async$transduce_$_state_machine__29831__auto__);

(statearr_30794[(1)] = (1));

return statearr_30794;
});
var cljs$core$async$transduce_$_state_machine__29831__auto____1 = (function (state_30789){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30795){if((e30795 instanceof Object)){
var ex__29834__auto__ = e30795;
var statearr_30796_30798 = state_30789;
(statearr_30796_30798[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30799 = state_30789;
state_30789 = G__30799;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29831__auto__ = function(state_30789){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29831__auto____1.call(this,state_30789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29831__auto____0;
cljs$core$async$transduce_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29831__auto____1;
return cljs$core$async$transduce_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__,f__$1))
})();
var state__29847__auto__ = (function (){var statearr_30797 = f__29846__auto__.call(null);
(statearr_30797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_30797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__,f__$1))
);

return c__29845__auto__;
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
var args30800 = [];
var len__27787__auto___30852 = arguments.length;
var i__27788__auto___30853 = (0);
while(true){
if((i__27788__auto___30853 < len__27787__auto___30852)){
args30800.push((arguments[i__27788__auto___30853]));

var G__30854 = (i__27788__auto___30853 + (1));
i__27788__auto___30853 = G__30854;
continue;
} else {
}
break;
}

var G__30802 = args30800.length;
switch (G__30802) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30800.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__){
return (function (state_30827){
var state_val_30828 = (state_30827[(1)]);
if((state_val_30828 === (7))){
var inst_30809 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30829_30856 = state_30827__$1;
(statearr_30829_30856[(2)] = inst_30809);

(statearr_30829_30856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (1))){
var inst_30803 = cljs.core.seq.call(null,coll);
var inst_30804 = inst_30803;
var state_30827__$1 = (function (){var statearr_30830 = state_30827;
(statearr_30830[(7)] = inst_30804);

return statearr_30830;
})();
var statearr_30831_30857 = state_30827__$1;
(statearr_30831_30857[(2)] = null);

(statearr_30831_30857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (4))){
var inst_30804 = (state_30827[(7)]);
var inst_30807 = cljs.core.first.call(null,inst_30804);
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30827__$1,(7),ch,inst_30807);
} else {
if((state_val_30828 === (13))){
var inst_30821 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30832_30858 = state_30827__$1;
(statearr_30832_30858[(2)] = inst_30821);

(statearr_30832_30858[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (6))){
var inst_30812 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
if(cljs.core.truth_(inst_30812)){
var statearr_30833_30859 = state_30827__$1;
(statearr_30833_30859[(1)] = (8));

} else {
var statearr_30834_30860 = state_30827__$1;
(statearr_30834_30860[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (3))){
var inst_30825 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30827__$1,inst_30825);
} else {
if((state_val_30828 === (12))){
var state_30827__$1 = state_30827;
var statearr_30835_30861 = state_30827__$1;
(statearr_30835_30861[(2)] = null);

(statearr_30835_30861[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (2))){
var inst_30804 = (state_30827[(7)]);
var state_30827__$1 = state_30827;
if(cljs.core.truth_(inst_30804)){
var statearr_30836_30862 = state_30827__$1;
(statearr_30836_30862[(1)] = (4));

} else {
var statearr_30837_30863 = state_30827__$1;
(statearr_30837_30863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (11))){
var inst_30818 = cljs.core.async.close_BANG_.call(null,ch);
var state_30827__$1 = state_30827;
var statearr_30838_30864 = state_30827__$1;
(statearr_30838_30864[(2)] = inst_30818);

(statearr_30838_30864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (9))){
var state_30827__$1 = state_30827;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30839_30865 = state_30827__$1;
(statearr_30839_30865[(1)] = (11));

} else {
var statearr_30840_30866 = state_30827__$1;
(statearr_30840_30866[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (5))){
var inst_30804 = (state_30827[(7)]);
var state_30827__$1 = state_30827;
var statearr_30841_30867 = state_30827__$1;
(statearr_30841_30867[(2)] = inst_30804);

(statearr_30841_30867[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (10))){
var inst_30823 = (state_30827[(2)]);
var state_30827__$1 = state_30827;
var statearr_30842_30868 = state_30827__$1;
(statearr_30842_30868[(2)] = inst_30823);

(statearr_30842_30868[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30828 === (8))){
var inst_30804 = (state_30827[(7)]);
var inst_30814 = cljs.core.next.call(null,inst_30804);
var inst_30804__$1 = inst_30814;
var state_30827__$1 = (function (){var statearr_30843 = state_30827;
(statearr_30843[(7)] = inst_30804__$1);

return statearr_30843;
})();
var statearr_30844_30869 = state_30827__$1;
(statearr_30844_30869[(2)] = null);

(statearr_30844_30869[(1)] = (2));


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
});})(c__29845__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_30848 = [null,null,null,null,null,null,null,null];
(statearr_30848[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_30848[(1)] = (1));

return statearr_30848;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_30827){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_30827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e30849){if((e30849 instanceof Object)){
var ex__29834__auto__ = e30849;
var statearr_30850_30870 = state_30827;
(statearr_30850_30870[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30871 = state_30827;
state_30827 = G__30871;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_30827){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_30827);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__))
})();
var state__29847__auto__ = (function (){var statearr_30851 = f__29846__auto__.call(null);
(statearr_30851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_30851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__))
);

return c__29845__auto__;
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
var x__27342__auto__ = (((_ == null))?null:_);
var m__27343__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,_);
} else {
var m__27343__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,_);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__27343__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,ch);
} else {
var m__27343__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,ch);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m);
} else {
var m__27343__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async31097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31097 = (function (ch,cs,meta31098){
this.ch = ch;
this.cs = cs;
this.meta31098 = meta31098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31099,meta31098__$1){
var self__ = this;
var _31099__$1 = this;
return (new cljs.core.async.t_cljs$core$async31097(self__.ch,self__.cs,meta31098__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31099){
var self__ = this;
var _31099__$1 = this;
return self__.meta31098;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31098","meta31098",-913671294,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31097";

cljs.core.async.t_cljs$core$async31097.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31097");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31097 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31097(ch__$1,cs__$1,meta31098){
return (new cljs.core.async.t_cljs$core$async31097(ch__$1,cs__$1,meta31098));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31097(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29845__auto___31322 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___31322,cs,m,dchan,dctr,done){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___31322,cs,m,dchan,dctr,done){
return (function (state_31234){
var state_val_31235 = (state_31234[(1)]);
if((state_val_31235 === (7))){
var inst_31230 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31236_31323 = state_31234__$1;
(statearr_31236_31323[(2)] = inst_31230);

(statearr_31236_31323[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (20))){
var inst_31133 = (state_31234[(7)]);
var inst_31145 = cljs.core.first.call(null,inst_31133);
var inst_31146 = cljs.core.nth.call(null,inst_31145,(0),null);
var inst_31147 = cljs.core.nth.call(null,inst_31145,(1),null);
var state_31234__$1 = (function (){var statearr_31237 = state_31234;
(statearr_31237[(8)] = inst_31146);

return statearr_31237;
})();
if(cljs.core.truth_(inst_31147)){
var statearr_31238_31324 = state_31234__$1;
(statearr_31238_31324[(1)] = (22));

} else {
var statearr_31239_31325 = state_31234__$1;
(statearr_31239_31325[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (27))){
var inst_31102 = (state_31234[(9)]);
var inst_31177 = (state_31234[(10)]);
var inst_31182 = (state_31234[(11)]);
var inst_31175 = (state_31234[(12)]);
var inst_31182__$1 = cljs.core._nth.call(null,inst_31175,inst_31177);
var inst_31183 = cljs.core.async.put_BANG_.call(null,inst_31182__$1,inst_31102,done);
var state_31234__$1 = (function (){var statearr_31240 = state_31234;
(statearr_31240[(11)] = inst_31182__$1);

return statearr_31240;
})();
if(cljs.core.truth_(inst_31183)){
var statearr_31241_31326 = state_31234__$1;
(statearr_31241_31326[(1)] = (30));

} else {
var statearr_31242_31327 = state_31234__$1;
(statearr_31242_31327[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (1))){
var state_31234__$1 = state_31234;
var statearr_31243_31328 = state_31234__$1;
(statearr_31243_31328[(2)] = null);

(statearr_31243_31328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (24))){
var inst_31133 = (state_31234[(7)]);
var inst_31152 = (state_31234[(2)]);
var inst_31153 = cljs.core.next.call(null,inst_31133);
var inst_31111 = inst_31153;
var inst_31112 = null;
var inst_31113 = (0);
var inst_31114 = (0);
var state_31234__$1 = (function (){var statearr_31244 = state_31234;
(statearr_31244[(13)] = inst_31111);

(statearr_31244[(14)] = inst_31112);

(statearr_31244[(15)] = inst_31114);

(statearr_31244[(16)] = inst_31152);

(statearr_31244[(17)] = inst_31113);

return statearr_31244;
})();
var statearr_31245_31329 = state_31234__$1;
(statearr_31245_31329[(2)] = null);

(statearr_31245_31329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (39))){
var state_31234__$1 = state_31234;
var statearr_31249_31330 = state_31234__$1;
(statearr_31249_31330[(2)] = null);

(statearr_31249_31330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (4))){
var inst_31102 = (state_31234[(9)]);
var inst_31102__$1 = (state_31234[(2)]);
var inst_31103 = (inst_31102__$1 == null);
var state_31234__$1 = (function (){var statearr_31250 = state_31234;
(statearr_31250[(9)] = inst_31102__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31103)){
var statearr_31251_31331 = state_31234__$1;
(statearr_31251_31331[(1)] = (5));

} else {
var statearr_31252_31332 = state_31234__$1;
(statearr_31252_31332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (15))){
var inst_31111 = (state_31234[(13)]);
var inst_31112 = (state_31234[(14)]);
var inst_31114 = (state_31234[(15)]);
var inst_31113 = (state_31234[(17)]);
var inst_31129 = (state_31234[(2)]);
var inst_31130 = (inst_31114 + (1));
var tmp31246 = inst_31111;
var tmp31247 = inst_31112;
var tmp31248 = inst_31113;
var inst_31111__$1 = tmp31246;
var inst_31112__$1 = tmp31247;
var inst_31113__$1 = tmp31248;
var inst_31114__$1 = inst_31130;
var state_31234__$1 = (function (){var statearr_31253 = state_31234;
(statearr_31253[(18)] = inst_31129);

(statearr_31253[(13)] = inst_31111__$1);

(statearr_31253[(14)] = inst_31112__$1);

(statearr_31253[(15)] = inst_31114__$1);

(statearr_31253[(17)] = inst_31113__$1);

return statearr_31253;
})();
var statearr_31254_31333 = state_31234__$1;
(statearr_31254_31333[(2)] = null);

(statearr_31254_31333[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (21))){
var inst_31156 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31258_31334 = state_31234__$1;
(statearr_31258_31334[(2)] = inst_31156);

(statearr_31258_31334[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (31))){
var inst_31182 = (state_31234[(11)]);
var inst_31186 = done.call(null,null);
var inst_31187 = cljs.core.async.untap_STAR_.call(null,m,inst_31182);
var state_31234__$1 = (function (){var statearr_31259 = state_31234;
(statearr_31259[(19)] = inst_31186);

return statearr_31259;
})();
var statearr_31260_31335 = state_31234__$1;
(statearr_31260_31335[(2)] = inst_31187);

(statearr_31260_31335[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (32))){
var inst_31177 = (state_31234[(10)]);
var inst_31176 = (state_31234[(20)]);
var inst_31174 = (state_31234[(21)]);
var inst_31175 = (state_31234[(12)]);
var inst_31189 = (state_31234[(2)]);
var inst_31190 = (inst_31177 + (1));
var tmp31255 = inst_31176;
var tmp31256 = inst_31174;
var tmp31257 = inst_31175;
var inst_31174__$1 = tmp31256;
var inst_31175__$1 = tmp31257;
var inst_31176__$1 = tmp31255;
var inst_31177__$1 = inst_31190;
var state_31234__$1 = (function (){var statearr_31261 = state_31234;
(statearr_31261[(10)] = inst_31177__$1);

(statearr_31261[(20)] = inst_31176__$1);

(statearr_31261[(21)] = inst_31174__$1);

(statearr_31261[(22)] = inst_31189);

(statearr_31261[(12)] = inst_31175__$1);

return statearr_31261;
})();
var statearr_31262_31336 = state_31234__$1;
(statearr_31262_31336[(2)] = null);

(statearr_31262_31336[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (40))){
var inst_31202 = (state_31234[(23)]);
var inst_31206 = done.call(null,null);
var inst_31207 = cljs.core.async.untap_STAR_.call(null,m,inst_31202);
var state_31234__$1 = (function (){var statearr_31263 = state_31234;
(statearr_31263[(24)] = inst_31206);

return statearr_31263;
})();
var statearr_31264_31337 = state_31234__$1;
(statearr_31264_31337[(2)] = inst_31207);

(statearr_31264_31337[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (33))){
var inst_31193 = (state_31234[(25)]);
var inst_31195 = cljs.core.chunked_seq_QMARK_.call(null,inst_31193);
var state_31234__$1 = state_31234;
if(inst_31195){
var statearr_31265_31338 = state_31234__$1;
(statearr_31265_31338[(1)] = (36));

} else {
var statearr_31266_31339 = state_31234__$1;
(statearr_31266_31339[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (13))){
var inst_31123 = (state_31234[(26)]);
var inst_31126 = cljs.core.async.close_BANG_.call(null,inst_31123);
var state_31234__$1 = state_31234;
var statearr_31267_31340 = state_31234__$1;
(statearr_31267_31340[(2)] = inst_31126);

(statearr_31267_31340[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (22))){
var inst_31146 = (state_31234[(8)]);
var inst_31149 = cljs.core.async.close_BANG_.call(null,inst_31146);
var state_31234__$1 = state_31234;
var statearr_31268_31341 = state_31234__$1;
(statearr_31268_31341[(2)] = inst_31149);

(statearr_31268_31341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (36))){
var inst_31193 = (state_31234[(25)]);
var inst_31197 = cljs.core.chunk_first.call(null,inst_31193);
var inst_31198 = cljs.core.chunk_rest.call(null,inst_31193);
var inst_31199 = cljs.core.count.call(null,inst_31197);
var inst_31174 = inst_31198;
var inst_31175 = inst_31197;
var inst_31176 = inst_31199;
var inst_31177 = (0);
var state_31234__$1 = (function (){var statearr_31269 = state_31234;
(statearr_31269[(10)] = inst_31177);

(statearr_31269[(20)] = inst_31176);

(statearr_31269[(21)] = inst_31174);

(statearr_31269[(12)] = inst_31175);

return statearr_31269;
})();
var statearr_31270_31342 = state_31234__$1;
(statearr_31270_31342[(2)] = null);

(statearr_31270_31342[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (41))){
var inst_31193 = (state_31234[(25)]);
var inst_31209 = (state_31234[(2)]);
var inst_31210 = cljs.core.next.call(null,inst_31193);
var inst_31174 = inst_31210;
var inst_31175 = null;
var inst_31176 = (0);
var inst_31177 = (0);
var state_31234__$1 = (function (){var statearr_31271 = state_31234;
(statearr_31271[(10)] = inst_31177);

(statearr_31271[(20)] = inst_31176);

(statearr_31271[(27)] = inst_31209);

(statearr_31271[(21)] = inst_31174);

(statearr_31271[(12)] = inst_31175);

return statearr_31271;
})();
var statearr_31272_31343 = state_31234__$1;
(statearr_31272_31343[(2)] = null);

(statearr_31272_31343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (43))){
var state_31234__$1 = state_31234;
var statearr_31273_31344 = state_31234__$1;
(statearr_31273_31344[(2)] = null);

(statearr_31273_31344[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (29))){
var inst_31218 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31274_31345 = state_31234__$1;
(statearr_31274_31345[(2)] = inst_31218);

(statearr_31274_31345[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (44))){
var inst_31227 = (state_31234[(2)]);
var state_31234__$1 = (function (){var statearr_31275 = state_31234;
(statearr_31275[(28)] = inst_31227);

return statearr_31275;
})();
var statearr_31276_31346 = state_31234__$1;
(statearr_31276_31346[(2)] = null);

(statearr_31276_31346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (6))){
var inst_31166 = (state_31234[(29)]);
var inst_31165 = cljs.core.deref.call(null,cs);
var inst_31166__$1 = cljs.core.keys.call(null,inst_31165);
var inst_31167 = cljs.core.count.call(null,inst_31166__$1);
var inst_31168 = cljs.core.reset_BANG_.call(null,dctr,inst_31167);
var inst_31173 = cljs.core.seq.call(null,inst_31166__$1);
var inst_31174 = inst_31173;
var inst_31175 = null;
var inst_31176 = (0);
var inst_31177 = (0);
var state_31234__$1 = (function (){var statearr_31277 = state_31234;
(statearr_31277[(10)] = inst_31177);

(statearr_31277[(29)] = inst_31166__$1);

(statearr_31277[(20)] = inst_31176);

(statearr_31277[(30)] = inst_31168);

(statearr_31277[(21)] = inst_31174);

(statearr_31277[(12)] = inst_31175);

return statearr_31277;
})();
var statearr_31278_31347 = state_31234__$1;
(statearr_31278_31347[(2)] = null);

(statearr_31278_31347[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (28))){
var inst_31174 = (state_31234[(21)]);
var inst_31193 = (state_31234[(25)]);
var inst_31193__$1 = cljs.core.seq.call(null,inst_31174);
var state_31234__$1 = (function (){var statearr_31279 = state_31234;
(statearr_31279[(25)] = inst_31193__$1);

return statearr_31279;
})();
if(inst_31193__$1){
var statearr_31280_31348 = state_31234__$1;
(statearr_31280_31348[(1)] = (33));

} else {
var statearr_31281_31349 = state_31234__$1;
(statearr_31281_31349[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (25))){
var inst_31177 = (state_31234[(10)]);
var inst_31176 = (state_31234[(20)]);
var inst_31179 = (inst_31177 < inst_31176);
var inst_31180 = inst_31179;
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31180)){
var statearr_31282_31350 = state_31234__$1;
(statearr_31282_31350[(1)] = (27));

} else {
var statearr_31283_31351 = state_31234__$1;
(statearr_31283_31351[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (34))){
var state_31234__$1 = state_31234;
var statearr_31284_31352 = state_31234__$1;
(statearr_31284_31352[(2)] = null);

(statearr_31284_31352[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (17))){
var state_31234__$1 = state_31234;
var statearr_31285_31353 = state_31234__$1;
(statearr_31285_31353[(2)] = null);

(statearr_31285_31353[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (3))){
var inst_31232 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31234__$1,inst_31232);
} else {
if((state_val_31235 === (12))){
var inst_31161 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31286_31354 = state_31234__$1;
(statearr_31286_31354[(2)] = inst_31161);

(statearr_31286_31354[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (2))){
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31234__$1,(4),ch);
} else {
if((state_val_31235 === (23))){
var state_31234__$1 = state_31234;
var statearr_31287_31355 = state_31234__$1;
(statearr_31287_31355[(2)] = null);

(statearr_31287_31355[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (35))){
var inst_31216 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31288_31356 = state_31234__$1;
(statearr_31288_31356[(2)] = inst_31216);

(statearr_31288_31356[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (19))){
var inst_31133 = (state_31234[(7)]);
var inst_31137 = cljs.core.chunk_first.call(null,inst_31133);
var inst_31138 = cljs.core.chunk_rest.call(null,inst_31133);
var inst_31139 = cljs.core.count.call(null,inst_31137);
var inst_31111 = inst_31138;
var inst_31112 = inst_31137;
var inst_31113 = inst_31139;
var inst_31114 = (0);
var state_31234__$1 = (function (){var statearr_31289 = state_31234;
(statearr_31289[(13)] = inst_31111);

(statearr_31289[(14)] = inst_31112);

(statearr_31289[(15)] = inst_31114);

(statearr_31289[(17)] = inst_31113);

return statearr_31289;
})();
var statearr_31290_31357 = state_31234__$1;
(statearr_31290_31357[(2)] = null);

(statearr_31290_31357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (11))){
var inst_31133 = (state_31234[(7)]);
var inst_31111 = (state_31234[(13)]);
var inst_31133__$1 = cljs.core.seq.call(null,inst_31111);
var state_31234__$1 = (function (){var statearr_31291 = state_31234;
(statearr_31291[(7)] = inst_31133__$1);

return statearr_31291;
})();
if(inst_31133__$1){
var statearr_31292_31358 = state_31234__$1;
(statearr_31292_31358[(1)] = (16));

} else {
var statearr_31293_31359 = state_31234__$1;
(statearr_31293_31359[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (9))){
var inst_31163 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31294_31360 = state_31234__$1;
(statearr_31294_31360[(2)] = inst_31163);

(statearr_31294_31360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (5))){
var inst_31109 = cljs.core.deref.call(null,cs);
var inst_31110 = cljs.core.seq.call(null,inst_31109);
var inst_31111 = inst_31110;
var inst_31112 = null;
var inst_31113 = (0);
var inst_31114 = (0);
var state_31234__$1 = (function (){var statearr_31295 = state_31234;
(statearr_31295[(13)] = inst_31111);

(statearr_31295[(14)] = inst_31112);

(statearr_31295[(15)] = inst_31114);

(statearr_31295[(17)] = inst_31113);

return statearr_31295;
})();
var statearr_31296_31361 = state_31234__$1;
(statearr_31296_31361[(2)] = null);

(statearr_31296_31361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (14))){
var state_31234__$1 = state_31234;
var statearr_31297_31362 = state_31234__$1;
(statearr_31297_31362[(2)] = null);

(statearr_31297_31362[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (45))){
var inst_31224 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31298_31363 = state_31234__$1;
(statearr_31298_31363[(2)] = inst_31224);

(statearr_31298_31363[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (26))){
var inst_31166 = (state_31234[(29)]);
var inst_31220 = (state_31234[(2)]);
var inst_31221 = cljs.core.seq.call(null,inst_31166);
var state_31234__$1 = (function (){var statearr_31299 = state_31234;
(statearr_31299[(31)] = inst_31220);

return statearr_31299;
})();
if(inst_31221){
var statearr_31300_31364 = state_31234__$1;
(statearr_31300_31364[(1)] = (42));

} else {
var statearr_31301_31365 = state_31234__$1;
(statearr_31301_31365[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (16))){
var inst_31133 = (state_31234[(7)]);
var inst_31135 = cljs.core.chunked_seq_QMARK_.call(null,inst_31133);
var state_31234__$1 = state_31234;
if(inst_31135){
var statearr_31302_31366 = state_31234__$1;
(statearr_31302_31366[(1)] = (19));

} else {
var statearr_31303_31367 = state_31234__$1;
(statearr_31303_31367[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (38))){
var inst_31213 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31304_31368 = state_31234__$1;
(statearr_31304_31368[(2)] = inst_31213);

(statearr_31304_31368[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (30))){
var state_31234__$1 = state_31234;
var statearr_31305_31369 = state_31234__$1;
(statearr_31305_31369[(2)] = null);

(statearr_31305_31369[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (10))){
var inst_31112 = (state_31234[(14)]);
var inst_31114 = (state_31234[(15)]);
var inst_31122 = cljs.core._nth.call(null,inst_31112,inst_31114);
var inst_31123 = cljs.core.nth.call(null,inst_31122,(0),null);
var inst_31124 = cljs.core.nth.call(null,inst_31122,(1),null);
var state_31234__$1 = (function (){var statearr_31306 = state_31234;
(statearr_31306[(26)] = inst_31123);

return statearr_31306;
})();
if(cljs.core.truth_(inst_31124)){
var statearr_31307_31370 = state_31234__$1;
(statearr_31307_31370[(1)] = (13));

} else {
var statearr_31308_31371 = state_31234__$1;
(statearr_31308_31371[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (18))){
var inst_31159 = (state_31234[(2)]);
var state_31234__$1 = state_31234;
var statearr_31309_31372 = state_31234__$1;
(statearr_31309_31372[(2)] = inst_31159);

(statearr_31309_31372[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (42))){
var state_31234__$1 = state_31234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31234__$1,(45),dchan);
} else {
if((state_val_31235 === (37))){
var inst_31102 = (state_31234[(9)]);
var inst_31193 = (state_31234[(25)]);
var inst_31202 = (state_31234[(23)]);
var inst_31202__$1 = cljs.core.first.call(null,inst_31193);
var inst_31203 = cljs.core.async.put_BANG_.call(null,inst_31202__$1,inst_31102,done);
var state_31234__$1 = (function (){var statearr_31310 = state_31234;
(statearr_31310[(23)] = inst_31202__$1);

return statearr_31310;
})();
if(cljs.core.truth_(inst_31203)){
var statearr_31311_31373 = state_31234__$1;
(statearr_31311_31373[(1)] = (39));

} else {
var statearr_31312_31374 = state_31234__$1;
(statearr_31312_31374[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31235 === (8))){
var inst_31114 = (state_31234[(15)]);
var inst_31113 = (state_31234[(17)]);
var inst_31116 = (inst_31114 < inst_31113);
var inst_31117 = inst_31116;
var state_31234__$1 = state_31234;
if(cljs.core.truth_(inst_31117)){
var statearr_31313_31375 = state_31234__$1;
(statearr_31313_31375[(1)] = (10));

} else {
var statearr_31314_31376 = state_31234__$1;
(statearr_31314_31376[(1)] = (11));

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
});})(c__29845__auto___31322,cs,m,dchan,dctr,done))
;
return ((function (switch__29830__auto__,c__29845__auto___31322,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29831__auto__ = null;
var cljs$core$async$mult_$_state_machine__29831__auto____0 = (function (){
var statearr_31318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31318[(0)] = cljs$core$async$mult_$_state_machine__29831__auto__);

(statearr_31318[(1)] = (1));

return statearr_31318;
});
var cljs$core$async$mult_$_state_machine__29831__auto____1 = (function (state_31234){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_31234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e31319){if((e31319 instanceof Object)){
var ex__29834__auto__ = e31319;
var statearr_31320_31377 = state_31234;
(statearr_31320_31377[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31378 = state_31234;
state_31234 = G__31378;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29831__auto__ = function(state_31234){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29831__auto____1.call(this,state_31234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29831__auto____0;
cljs$core$async$mult_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29831__auto____1;
return cljs$core$async$mult_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___31322,cs,m,dchan,dctr,done))
})();
var state__29847__auto__ = (function (){var statearr_31321 = f__29846__auto__.call(null);
(statearr_31321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___31322);

return statearr_31321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___31322,cs,m,dchan,dctr,done))
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
var args31379 = [];
var len__27787__auto___31382 = arguments.length;
var i__27788__auto___31383 = (0);
while(true){
if((i__27788__auto___31383 < len__27787__auto___31382)){
args31379.push((arguments[i__27788__auto___31383]));

var G__31384 = (i__27788__auto___31383 + (1));
i__27788__auto___31383 = G__31384;
continue;
} else {
}
break;
}

var G__31381 = args31379.length;
switch (G__31381) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31379.length)].join('')));

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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,ch);
} else {
var m__27343__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,ch);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,ch);
} else {
var m__27343__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,ch);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m);
} else {
var m__27343__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,state_map);
} else {
var m__27343__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,state_map);
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
var x__27342__auto__ = (((m == null))?null:m);
var m__27343__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,m,mode);
} else {
var m__27343__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__27794__auto__ = [];
var len__27787__auto___31396 = arguments.length;
var i__27788__auto___31397 = (0);
while(true){
if((i__27788__auto___31397 < len__27787__auto___31396)){
args__27794__auto__.push((arguments[i__27788__auto___31397]));

var G__31398 = (i__27788__auto___31397 + (1));
i__27788__auto___31397 = G__31398;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((3) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27795__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31390){
var map__31391 = p__31390;
var map__31391__$1 = ((((!((map__31391 == null)))?((((map__31391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31391):map__31391);
var opts = map__31391__$1;
var statearr_31393_31399 = state;
(statearr_31393_31399[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31391,map__31391__$1,opts){
return (function (val){
var statearr_31394_31400 = state;
(statearr_31394_31400[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31391,map__31391__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31395_31401 = state;
(statearr_31395_31401[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31386){
var G__31387 = cljs.core.first.call(null,seq31386);
var seq31386__$1 = cljs.core.next.call(null,seq31386);
var G__31388 = cljs.core.first.call(null,seq31386__$1);
var seq31386__$2 = cljs.core.next.call(null,seq31386__$1);
var G__31389 = cljs.core.first.call(null,seq31386__$2);
var seq31386__$3 = cljs.core.next.call(null,seq31386__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31387,G__31388,G__31389,seq31386__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31569 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31570){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31570 = meta31570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31571,meta31570__$1){
var self__ = this;
var _31571__$1 = this;
return (new cljs.core.async.t_cljs$core$async31569(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31570__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31571){
var self__ = this;
var _31571__$1 = this;
return self__.meta31570;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31569.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31570","meta31570",-1682997712,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31569";

cljs.core.async.t_cljs$core$async31569.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31569");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31569 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31569(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31570){
return (new cljs.core.async.t_cljs$core$async31569(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31570));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31569(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29845__auto___31736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31673){
var state_val_31674 = (state_31673[(1)]);
if((state_val_31674 === (7))){
var inst_31588 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31675_31737 = state_31673__$1;
(statearr_31675_31737[(2)] = inst_31588);

(statearr_31675_31737[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (20))){
var inst_31600 = (state_31673[(7)]);
var state_31673__$1 = state_31673;
var statearr_31676_31738 = state_31673__$1;
(statearr_31676_31738[(2)] = inst_31600);

(statearr_31676_31738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (27))){
var state_31673__$1 = state_31673;
var statearr_31677_31739 = state_31673__$1;
(statearr_31677_31739[(2)] = null);

(statearr_31677_31739[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (1))){
var inst_31575 = (state_31673[(8)]);
var inst_31575__$1 = calc_state.call(null);
var inst_31577 = (inst_31575__$1 == null);
var inst_31578 = cljs.core.not.call(null,inst_31577);
var state_31673__$1 = (function (){var statearr_31678 = state_31673;
(statearr_31678[(8)] = inst_31575__$1);

return statearr_31678;
})();
if(inst_31578){
var statearr_31679_31740 = state_31673__$1;
(statearr_31679_31740[(1)] = (2));

} else {
var statearr_31680_31741 = state_31673__$1;
(statearr_31680_31741[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (24))){
var inst_31647 = (state_31673[(9)]);
var inst_31624 = (state_31673[(10)]);
var inst_31633 = (state_31673[(11)]);
var inst_31647__$1 = inst_31624.call(null,inst_31633);
var state_31673__$1 = (function (){var statearr_31681 = state_31673;
(statearr_31681[(9)] = inst_31647__$1);

return statearr_31681;
})();
if(cljs.core.truth_(inst_31647__$1)){
var statearr_31682_31742 = state_31673__$1;
(statearr_31682_31742[(1)] = (29));

} else {
var statearr_31683_31743 = state_31673__$1;
(statearr_31683_31743[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (4))){
var inst_31591 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31591)){
var statearr_31684_31744 = state_31673__$1;
(statearr_31684_31744[(1)] = (8));

} else {
var statearr_31685_31745 = state_31673__$1;
(statearr_31685_31745[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (15))){
var inst_31618 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31618)){
var statearr_31686_31746 = state_31673__$1;
(statearr_31686_31746[(1)] = (19));

} else {
var statearr_31687_31747 = state_31673__$1;
(statearr_31687_31747[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (21))){
var inst_31623 = (state_31673[(12)]);
var inst_31623__$1 = (state_31673[(2)]);
var inst_31624 = cljs.core.get.call(null,inst_31623__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31625 = cljs.core.get.call(null,inst_31623__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31626 = cljs.core.get.call(null,inst_31623__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31673__$1 = (function (){var statearr_31688 = state_31673;
(statearr_31688[(12)] = inst_31623__$1);

(statearr_31688[(13)] = inst_31625);

(statearr_31688[(10)] = inst_31624);

return statearr_31688;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31673__$1,(22),inst_31626);
} else {
if((state_val_31674 === (31))){
var inst_31655 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31655)){
var statearr_31689_31748 = state_31673__$1;
(statearr_31689_31748[(1)] = (32));

} else {
var statearr_31690_31749 = state_31673__$1;
(statearr_31690_31749[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (32))){
var inst_31632 = (state_31673[(14)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31673__$1,(35),out,inst_31632);
} else {
if((state_val_31674 === (33))){
var inst_31623 = (state_31673[(12)]);
var inst_31600 = inst_31623;
var state_31673__$1 = (function (){var statearr_31691 = state_31673;
(statearr_31691[(7)] = inst_31600);

return statearr_31691;
})();
var statearr_31692_31750 = state_31673__$1;
(statearr_31692_31750[(2)] = null);

(statearr_31692_31750[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (13))){
var inst_31600 = (state_31673[(7)]);
var inst_31607 = inst_31600.cljs$lang$protocol_mask$partition0$;
var inst_31608 = (inst_31607 & (64));
var inst_31609 = inst_31600.cljs$core$ISeq$;
var inst_31610 = (cljs.core.PROTOCOL_SENTINEL === inst_31609);
var inst_31611 = (inst_31608) || (inst_31610);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31611)){
var statearr_31693_31751 = state_31673__$1;
(statearr_31693_31751[(1)] = (16));

} else {
var statearr_31694_31752 = state_31673__$1;
(statearr_31694_31752[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (22))){
var inst_31632 = (state_31673[(14)]);
var inst_31633 = (state_31673[(11)]);
var inst_31631 = (state_31673[(2)]);
var inst_31632__$1 = cljs.core.nth.call(null,inst_31631,(0),null);
var inst_31633__$1 = cljs.core.nth.call(null,inst_31631,(1),null);
var inst_31634 = (inst_31632__$1 == null);
var inst_31635 = cljs.core._EQ_.call(null,inst_31633__$1,change);
var inst_31636 = (inst_31634) || (inst_31635);
var state_31673__$1 = (function (){var statearr_31695 = state_31673;
(statearr_31695[(14)] = inst_31632__$1);

(statearr_31695[(11)] = inst_31633__$1);

return statearr_31695;
})();
if(cljs.core.truth_(inst_31636)){
var statearr_31696_31753 = state_31673__$1;
(statearr_31696_31753[(1)] = (23));

} else {
var statearr_31697_31754 = state_31673__$1;
(statearr_31697_31754[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (36))){
var inst_31623 = (state_31673[(12)]);
var inst_31600 = inst_31623;
var state_31673__$1 = (function (){var statearr_31698 = state_31673;
(statearr_31698[(7)] = inst_31600);

return statearr_31698;
})();
var statearr_31699_31755 = state_31673__$1;
(statearr_31699_31755[(2)] = null);

(statearr_31699_31755[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (29))){
var inst_31647 = (state_31673[(9)]);
var state_31673__$1 = state_31673;
var statearr_31700_31756 = state_31673__$1;
(statearr_31700_31756[(2)] = inst_31647);

(statearr_31700_31756[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (6))){
var state_31673__$1 = state_31673;
var statearr_31701_31757 = state_31673__$1;
(statearr_31701_31757[(2)] = false);

(statearr_31701_31757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (28))){
var inst_31643 = (state_31673[(2)]);
var inst_31644 = calc_state.call(null);
var inst_31600 = inst_31644;
var state_31673__$1 = (function (){var statearr_31702 = state_31673;
(statearr_31702[(7)] = inst_31600);

(statearr_31702[(15)] = inst_31643);

return statearr_31702;
})();
var statearr_31703_31758 = state_31673__$1;
(statearr_31703_31758[(2)] = null);

(statearr_31703_31758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (25))){
var inst_31669 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31704_31759 = state_31673__$1;
(statearr_31704_31759[(2)] = inst_31669);

(statearr_31704_31759[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (34))){
var inst_31667 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31705_31760 = state_31673__$1;
(statearr_31705_31760[(2)] = inst_31667);

(statearr_31705_31760[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (17))){
var state_31673__$1 = state_31673;
var statearr_31706_31761 = state_31673__$1;
(statearr_31706_31761[(2)] = false);

(statearr_31706_31761[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (3))){
var state_31673__$1 = state_31673;
var statearr_31707_31762 = state_31673__$1;
(statearr_31707_31762[(2)] = false);

(statearr_31707_31762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (12))){
var inst_31671 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31673__$1,inst_31671);
} else {
if((state_val_31674 === (2))){
var inst_31575 = (state_31673[(8)]);
var inst_31580 = inst_31575.cljs$lang$protocol_mask$partition0$;
var inst_31581 = (inst_31580 & (64));
var inst_31582 = inst_31575.cljs$core$ISeq$;
var inst_31583 = (cljs.core.PROTOCOL_SENTINEL === inst_31582);
var inst_31584 = (inst_31581) || (inst_31583);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31584)){
var statearr_31708_31763 = state_31673__$1;
(statearr_31708_31763[(1)] = (5));

} else {
var statearr_31709_31764 = state_31673__$1;
(statearr_31709_31764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (23))){
var inst_31632 = (state_31673[(14)]);
var inst_31638 = (inst_31632 == null);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31638)){
var statearr_31710_31765 = state_31673__$1;
(statearr_31710_31765[(1)] = (26));

} else {
var statearr_31711_31766 = state_31673__$1;
(statearr_31711_31766[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (35))){
var inst_31658 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
if(cljs.core.truth_(inst_31658)){
var statearr_31712_31767 = state_31673__$1;
(statearr_31712_31767[(1)] = (36));

} else {
var statearr_31713_31768 = state_31673__$1;
(statearr_31713_31768[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (19))){
var inst_31600 = (state_31673[(7)]);
var inst_31620 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31600);
var state_31673__$1 = state_31673;
var statearr_31714_31769 = state_31673__$1;
(statearr_31714_31769[(2)] = inst_31620);

(statearr_31714_31769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (11))){
var inst_31600 = (state_31673[(7)]);
var inst_31604 = (inst_31600 == null);
var inst_31605 = cljs.core.not.call(null,inst_31604);
var state_31673__$1 = state_31673;
if(inst_31605){
var statearr_31715_31770 = state_31673__$1;
(statearr_31715_31770[(1)] = (13));

} else {
var statearr_31716_31771 = state_31673__$1;
(statearr_31716_31771[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (9))){
var inst_31575 = (state_31673[(8)]);
var state_31673__$1 = state_31673;
var statearr_31717_31772 = state_31673__$1;
(statearr_31717_31772[(2)] = inst_31575);

(statearr_31717_31772[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (5))){
var state_31673__$1 = state_31673;
var statearr_31718_31773 = state_31673__$1;
(statearr_31718_31773[(2)] = true);

(statearr_31718_31773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (14))){
var state_31673__$1 = state_31673;
var statearr_31719_31774 = state_31673__$1;
(statearr_31719_31774[(2)] = false);

(statearr_31719_31774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (26))){
var inst_31633 = (state_31673[(11)]);
var inst_31640 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31633);
var state_31673__$1 = state_31673;
var statearr_31720_31775 = state_31673__$1;
(statearr_31720_31775[(2)] = inst_31640);

(statearr_31720_31775[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (16))){
var state_31673__$1 = state_31673;
var statearr_31721_31776 = state_31673__$1;
(statearr_31721_31776[(2)] = true);

(statearr_31721_31776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (38))){
var inst_31663 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31722_31777 = state_31673__$1;
(statearr_31722_31777[(2)] = inst_31663);

(statearr_31722_31777[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (30))){
var inst_31625 = (state_31673[(13)]);
var inst_31624 = (state_31673[(10)]);
var inst_31633 = (state_31673[(11)]);
var inst_31650 = cljs.core.empty_QMARK_.call(null,inst_31624);
var inst_31651 = inst_31625.call(null,inst_31633);
var inst_31652 = cljs.core.not.call(null,inst_31651);
var inst_31653 = (inst_31650) && (inst_31652);
var state_31673__$1 = state_31673;
var statearr_31723_31778 = state_31673__$1;
(statearr_31723_31778[(2)] = inst_31653);

(statearr_31723_31778[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (10))){
var inst_31575 = (state_31673[(8)]);
var inst_31596 = (state_31673[(2)]);
var inst_31597 = cljs.core.get.call(null,inst_31596,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31598 = cljs.core.get.call(null,inst_31596,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31599 = cljs.core.get.call(null,inst_31596,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31600 = inst_31575;
var state_31673__$1 = (function (){var statearr_31724 = state_31673;
(statearr_31724[(16)] = inst_31599);

(statearr_31724[(17)] = inst_31597);

(statearr_31724[(18)] = inst_31598);

(statearr_31724[(7)] = inst_31600);

return statearr_31724;
})();
var statearr_31725_31779 = state_31673__$1;
(statearr_31725_31779[(2)] = null);

(statearr_31725_31779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (18))){
var inst_31615 = (state_31673[(2)]);
var state_31673__$1 = state_31673;
var statearr_31726_31780 = state_31673__$1;
(statearr_31726_31780[(2)] = inst_31615);

(statearr_31726_31780[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (37))){
var state_31673__$1 = state_31673;
var statearr_31727_31781 = state_31673__$1;
(statearr_31727_31781[(2)] = null);

(statearr_31727_31781[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31674 === (8))){
var inst_31575 = (state_31673[(8)]);
var inst_31593 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31575);
var state_31673__$1 = state_31673;
var statearr_31728_31782 = state_31673__$1;
(statearr_31728_31782[(2)] = inst_31593);

(statearr_31728_31782[(1)] = (10));


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
});})(c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29830__auto__,c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29831__auto__ = null;
var cljs$core$async$mix_$_state_machine__29831__auto____0 = (function (){
var statearr_31732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31732[(0)] = cljs$core$async$mix_$_state_machine__29831__auto__);

(statearr_31732[(1)] = (1));

return statearr_31732;
});
var cljs$core$async$mix_$_state_machine__29831__auto____1 = (function (state_31673){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_31673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e31733){if((e31733 instanceof Object)){
var ex__29834__auto__ = e31733;
var statearr_31734_31783 = state_31673;
(statearr_31734_31783[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31784 = state_31673;
state_31673 = G__31784;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29831__auto__ = function(state_31673){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29831__auto____1.call(this,state_31673);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29831__auto____0;
cljs$core$async$mix_$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29831__auto____1;
return cljs$core$async$mix_$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29847__auto__ = (function (){var statearr_31735 = f__29846__auto__.call(null);
(statearr_31735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___31736);

return statearr_31735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___31736,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__27342__auto__ = (((p == null))?null:p);
var m__27343__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__27343__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__27342__auto__ = (((p == null))?null:p);
var m__27343__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,p,v,ch);
} else {
var m__27343__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args31785 = [];
var len__27787__auto___31788 = arguments.length;
var i__27788__auto___31789 = (0);
while(true){
if((i__27788__auto___31789 < len__27787__auto___31788)){
args31785.push((arguments[i__27788__auto___31789]));

var G__31790 = (i__27788__auto___31789 + (1));
i__27788__auto___31789 = G__31790;
continue;
} else {
}
break;
}

var G__31787 = args31785.length;
switch (G__31787) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31785.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__27342__auto__ = (((p == null))?null:p);
var m__27343__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,p);
} else {
var m__27343__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,p);
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
var x__27342__auto__ = (((p == null))?null:p);
var m__27343__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__27342__auto__)]);
if(!((m__27343__auto__ == null))){
return m__27343__auto__.call(null,p,v);
} else {
var m__27343__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__27343__auto____$1 == null))){
return m__27343__auto____$1.call(null,p,v);
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
var args31793 = [];
var len__27787__auto___31918 = arguments.length;
var i__27788__auto___31919 = (0);
while(true){
if((i__27788__auto___31919 < len__27787__auto___31918)){
args31793.push((arguments[i__27788__auto___31919]));

var G__31920 = (i__27788__auto___31919 + (1));
i__27788__auto___31919 = G__31920;
continue;
} else {
}
break;
}

var G__31795 = args31793.length;
switch (G__31795) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31793.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__26674__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__26674__auto__)){
return or__26674__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__26674__auto__,mults){
return (function (p1__31792_SHARP_){
if(cljs.core.truth_(p1__31792_SHARP_.call(null,topic))){
return p1__31792_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31792_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31796 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31797){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31797 = meta31797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31798,meta31797__$1){
var self__ = this;
var _31798__$1 = this;
return (new cljs.core.async.t_cljs$core$async31796(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31797__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31798){
var self__ = this;
var _31798__$1 = this;
return self__.meta31797;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31797","meta31797",1033762540,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31796";

cljs.core.async.t_cljs$core$async31796.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31796");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31796 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31797){
return (new cljs.core.async.t_cljs$core$async31796(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31797));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31796(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29845__auto___31922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___31922,mults,ensure_mult,p){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___31922,mults,ensure_mult,p){
return (function (state_31870){
var state_val_31871 = (state_31870[(1)]);
if((state_val_31871 === (7))){
var inst_31866 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31872_31923 = state_31870__$1;
(statearr_31872_31923[(2)] = inst_31866);

(statearr_31872_31923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (20))){
var state_31870__$1 = state_31870;
var statearr_31873_31924 = state_31870__$1;
(statearr_31873_31924[(2)] = null);

(statearr_31873_31924[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (1))){
var state_31870__$1 = state_31870;
var statearr_31874_31925 = state_31870__$1;
(statearr_31874_31925[(2)] = null);

(statearr_31874_31925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (24))){
var inst_31849 = (state_31870[(7)]);
var inst_31858 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31849);
var state_31870__$1 = state_31870;
var statearr_31875_31926 = state_31870__$1;
(statearr_31875_31926[(2)] = inst_31858);

(statearr_31875_31926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (4))){
var inst_31801 = (state_31870[(8)]);
var inst_31801__$1 = (state_31870[(2)]);
var inst_31802 = (inst_31801__$1 == null);
var state_31870__$1 = (function (){var statearr_31876 = state_31870;
(statearr_31876[(8)] = inst_31801__$1);

return statearr_31876;
})();
if(cljs.core.truth_(inst_31802)){
var statearr_31877_31927 = state_31870__$1;
(statearr_31877_31927[(1)] = (5));

} else {
var statearr_31878_31928 = state_31870__$1;
(statearr_31878_31928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (15))){
var inst_31843 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31879_31929 = state_31870__$1;
(statearr_31879_31929[(2)] = inst_31843);

(statearr_31879_31929[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (21))){
var inst_31863 = (state_31870[(2)]);
var state_31870__$1 = (function (){var statearr_31880 = state_31870;
(statearr_31880[(9)] = inst_31863);

return statearr_31880;
})();
var statearr_31881_31930 = state_31870__$1;
(statearr_31881_31930[(2)] = null);

(statearr_31881_31930[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (13))){
var inst_31825 = (state_31870[(10)]);
var inst_31827 = cljs.core.chunked_seq_QMARK_.call(null,inst_31825);
var state_31870__$1 = state_31870;
if(inst_31827){
var statearr_31882_31931 = state_31870__$1;
(statearr_31882_31931[(1)] = (16));

} else {
var statearr_31883_31932 = state_31870__$1;
(statearr_31883_31932[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (22))){
var inst_31855 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31855)){
var statearr_31884_31933 = state_31870__$1;
(statearr_31884_31933[(1)] = (23));

} else {
var statearr_31885_31934 = state_31870__$1;
(statearr_31885_31934[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (6))){
var inst_31851 = (state_31870[(11)]);
var inst_31801 = (state_31870[(8)]);
var inst_31849 = (state_31870[(7)]);
var inst_31849__$1 = topic_fn.call(null,inst_31801);
var inst_31850 = cljs.core.deref.call(null,mults);
var inst_31851__$1 = cljs.core.get.call(null,inst_31850,inst_31849__$1);
var state_31870__$1 = (function (){var statearr_31886 = state_31870;
(statearr_31886[(11)] = inst_31851__$1);

(statearr_31886[(7)] = inst_31849__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31851__$1)){
var statearr_31887_31935 = state_31870__$1;
(statearr_31887_31935[(1)] = (19));

} else {
var statearr_31888_31936 = state_31870__$1;
(statearr_31888_31936[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (25))){
var inst_31860 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31889_31937 = state_31870__$1;
(statearr_31889_31937[(2)] = inst_31860);

(statearr_31889_31937[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (17))){
var inst_31825 = (state_31870[(10)]);
var inst_31834 = cljs.core.first.call(null,inst_31825);
var inst_31835 = cljs.core.async.muxch_STAR_.call(null,inst_31834);
var inst_31836 = cljs.core.async.close_BANG_.call(null,inst_31835);
var inst_31837 = cljs.core.next.call(null,inst_31825);
var inst_31811 = inst_31837;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31890 = state_31870;
(statearr_31890[(12)] = inst_31813);

(statearr_31890[(13)] = inst_31811);

(statearr_31890[(14)] = inst_31814);

(statearr_31890[(15)] = inst_31812);

(statearr_31890[(16)] = inst_31836);

return statearr_31890;
})();
var statearr_31891_31938 = state_31870__$1;
(statearr_31891_31938[(2)] = null);

(statearr_31891_31938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (3))){
var inst_31868 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31870__$1,inst_31868);
} else {
if((state_val_31871 === (12))){
var inst_31845 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31892_31939 = state_31870__$1;
(statearr_31892_31939[(2)] = inst_31845);

(statearr_31892_31939[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (2))){
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31870__$1,(4),ch);
} else {
if((state_val_31871 === (23))){
var state_31870__$1 = state_31870;
var statearr_31893_31940 = state_31870__$1;
(statearr_31893_31940[(2)] = null);

(statearr_31893_31940[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (19))){
var inst_31851 = (state_31870[(11)]);
var inst_31801 = (state_31870[(8)]);
var inst_31853 = cljs.core.async.muxch_STAR_.call(null,inst_31851);
var state_31870__$1 = state_31870;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31870__$1,(22),inst_31853,inst_31801);
} else {
if((state_val_31871 === (11))){
var inst_31825 = (state_31870[(10)]);
var inst_31811 = (state_31870[(13)]);
var inst_31825__$1 = cljs.core.seq.call(null,inst_31811);
var state_31870__$1 = (function (){var statearr_31894 = state_31870;
(statearr_31894[(10)] = inst_31825__$1);

return statearr_31894;
})();
if(inst_31825__$1){
var statearr_31895_31941 = state_31870__$1;
(statearr_31895_31941[(1)] = (13));

} else {
var statearr_31896_31942 = state_31870__$1;
(statearr_31896_31942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (9))){
var inst_31847 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31897_31943 = state_31870__$1;
(statearr_31897_31943[(2)] = inst_31847);

(statearr_31897_31943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (5))){
var inst_31808 = cljs.core.deref.call(null,mults);
var inst_31809 = cljs.core.vals.call(null,inst_31808);
var inst_31810 = cljs.core.seq.call(null,inst_31809);
var inst_31811 = inst_31810;
var inst_31812 = null;
var inst_31813 = (0);
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31898 = state_31870;
(statearr_31898[(12)] = inst_31813);

(statearr_31898[(13)] = inst_31811);

(statearr_31898[(14)] = inst_31814);

(statearr_31898[(15)] = inst_31812);

return statearr_31898;
})();
var statearr_31899_31944 = state_31870__$1;
(statearr_31899_31944[(2)] = null);

(statearr_31899_31944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (14))){
var state_31870__$1 = state_31870;
var statearr_31903_31945 = state_31870__$1;
(statearr_31903_31945[(2)] = null);

(statearr_31903_31945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (16))){
var inst_31825 = (state_31870[(10)]);
var inst_31829 = cljs.core.chunk_first.call(null,inst_31825);
var inst_31830 = cljs.core.chunk_rest.call(null,inst_31825);
var inst_31831 = cljs.core.count.call(null,inst_31829);
var inst_31811 = inst_31830;
var inst_31812 = inst_31829;
var inst_31813 = inst_31831;
var inst_31814 = (0);
var state_31870__$1 = (function (){var statearr_31904 = state_31870;
(statearr_31904[(12)] = inst_31813);

(statearr_31904[(13)] = inst_31811);

(statearr_31904[(14)] = inst_31814);

(statearr_31904[(15)] = inst_31812);

return statearr_31904;
})();
var statearr_31905_31946 = state_31870__$1;
(statearr_31905_31946[(2)] = null);

(statearr_31905_31946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (10))){
var inst_31813 = (state_31870[(12)]);
var inst_31811 = (state_31870[(13)]);
var inst_31814 = (state_31870[(14)]);
var inst_31812 = (state_31870[(15)]);
var inst_31819 = cljs.core._nth.call(null,inst_31812,inst_31814);
var inst_31820 = cljs.core.async.muxch_STAR_.call(null,inst_31819);
var inst_31821 = cljs.core.async.close_BANG_.call(null,inst_31820);
var inst_31822 = (inst_31814 + (1));
var tmp31900 = inst_31813;
var tmp31901 = inst_31811;
var tmp31902 = inst_31812;
var inst_31811__$1 = tmp31901;
var inst_31812__$1 = tmp31902;
var inst_31813__$1 = tmp31900;
var inst_31814__$1 = inst_31822;
var state_31870__$1 = (function (){var statearr_31906 = state_31870;
(statearr_31906[(12)] = inst_31813__$1);

(statearr_31906[(13)] = inst_31811__$1);

(statearr_31906[(14)] = inst_31814__$1);

(statearr_31906[(15)] = inst_31812__$1);

(statearr_31906[(17)] = inst_31821);

return statearr_31906;
})();
var statearr_31907_31947 = state_31870__$1;
(statearr_31907_31947[(2)] = null);

(statearr_31907_31947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (18))){
var inst_31840 = (state_31870[(2)]);
var state_31870__$1 = state_31870;
var statearr_31908_31948 = state_31870__$1;
(statearr_31908_31948[(2)] = inst_31840);

(statearr_31908_31948[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31871 === (8))){
var inst_31813 = (state_31870[(12)]);
var inst_31814 = (state_31870[(14)]);
var inst_31816 = (inst_31814 < inst_31813);
var inst_31817 = inst_31816;
var state_31870__$1 = state_31870;
if(cljs.core.truth_(inst_31817)){
var statearr_31909_31949 = state_31870__$1;
(statearr_31909_31949[(1)] = (10));

} else {
var statearr_31910_31950 = state_31870__$1;
(statearr_31910_31950[(1)] = (11));

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
});})(c__29845__auto___31922,mults,ensure_mult,p))
;
return ((function (switch__29830__auto__,c__29845__auto___31922,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_31914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31914[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_31914[(1)] = (1));

return statearr_31914;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_31870){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_31870);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e31915){if((e31915 instanceof Object)){
var ex__29834__auto__ = e31915;
var statearr_31916_31951 = state_31870;
(statearr_31916_31951[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31870);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31952 = state_31870;
state_31870 = G__31952;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_31870){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_31870);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___31922,mults,ensure_mult,p))
})();
var state__29847__auto__ = (function (){var statearr_31917 = f__29846__auto__.call(null);
(statearr_31917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___31922);

return statearr_31917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___31922,mults,ensure_mult,p))
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
var args31953 = [];
var len__27787__auto___31956 = arguments.length;
var i__27788__auto___31957 = (0);
while(true){
if((i__27788__auto___31957 < len__27787__auto___31956)){
args31953.push((arguments[i__27788__auto___31957]));

var G__31958 = (i__27788__auto___31957 + (1));
i__27788__auto___31957 = G__31958;
continue;
} else {
}
break;
}

var G__31955 = args31953.length;
switch (G__31955) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31953.length)].join('')));

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
var args31960 = [];
var len__27787__auto___31963 = arguments.length;
var i__27788__auto___31964 = (0);
while(true){
if((i__27788__auto___31964 < len__27787__auto___31963)){
args31960.push((arguments[i__27788__auto___31964]));

var G__31965 = (i__27788__auto___31964 + (1));
i__27788__auto___31964 = G__31965;
continue;
} else {
}
break;
}

var G__31962 = args31960.length;
switch (G__31962) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31960.length)].join('')));

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
var args31967 = [];
var len__27787__auto___32038 = arguments.length;
var i__27788__auto___32039 = (0);
while(true){
if((i__27788__auto___32039 < len__27787__auto___32038)){
args31967.push((arguments[i__27788__auto___32039]));

var G__32040 = (i__27788__auto___32039 + (1));
i__27788__auto___32039 = G__32040;
continue;
} else {
}
break;
}

var G__31969 = args31967.length;
switch (G__31969) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31967.length)].join('')));

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
var c__29845__auto___32042 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32008){
var state_val_32009 = (state_32008[(1)]);
if((state_val_32009 === (7))){
var state_32008__$1 = state_32008;
var statearr_32010_32043 = state_32008__$1;
(statearr_32010_32043[(2)] = null);

(statearr_32010_32043[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (1))){
var state_32008__$1 = state_32008;
var statearr_32011_32044 = state_32008__$1;
(statearr_32011_32044[(2)] = null);

(statearr_32011_32044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (4))){
var inst_31972 = (state_32008[(7)]);
var inst_31974 = (inst_31972 < cnt);
var state_32008__$1 = state_32008;
if(cljs.core.truth_(inst_31974)){
var statearr_32012_32045 = state_32008__$1;
(statearr_32012_32045[(1)] = (6));

} else {
var statearr_32013_32046 = state_32008__$1;
(statearr_32013_32046[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (15))){
var inst_32004 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32014_32047 = state_32008__$1;
(statearr_32014_32047[(2)] = inst_32004);

(statearr_32014_32047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (13))){
var inst_31997 = cljs.core.async.close_BANG_.call(null,out);
var state_32008__$1 = state_32008;
var statearr_32015_32048 = state_32008__$1;
(statearr_32015_32048[(2)] = inst_31997);

(statearr_32015_32048[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (6))){
var state_32008__$1 = state_32008;
var statearr_32016_32049 = state_32008__$1;
(statearr_32016_32049[(2)] = null);

(statearr_32016_32049[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (3))){
var inst_32006 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32008__$1,inst_32006);
} else {
if((state_val_32009 === (12))){
var inst_31994 = (state_32008[(8)]);
var inst_31994__$1 = (state_32008[(2)]);
var inst_31995 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31994__$1);
var state_32008__$1 = (function (){var statearr_32017 = state_32008;
(statearr_32017[(8)] = inst_31994__$1);

return statearr_32017;
})();
if(cljs.core.truth_(inst_31995)){
var statearr_32018_32050 = state_32008__$1;
(statearr_32018_32050[(1)] = (13));

} else {
var statearr_32019_32051 = state_32008__$1;
(statearr_32019_32051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (2))){
var inst_31971 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31972 = (0);
var state_32008__$1 = (function (){var statearr_32020 = state_32008;
(statearr_32020[(9)] = inst_31971);

(statearr_32020[(7)] = inst_31972);

return statearr_32020;
})();
var statearr_32021_32052 = state_32008__$1;
(statearr_32021_32052[(2)] = null);

(statearr_32021_32052[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (11))){
var inst_31972 = (state_32008[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32008,(10),Object,null,(9));
var inst_31981 = chs__$1.call(null,inst_31972);
var inst_31982 = done.call(null,inst_31972);
var inst_31983 = cljs.core.async.take_BANG_.call(null,inst_31981,inst_31982);
var state_32008__$1 = state_32008;
var statearr_32022_32053 = state_32008__$1;
(statearr_32022_32053[(2)] = inst_31983);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (9))){
var inst_31972 = (state_32008[(7)]);
var inst_31985 = (state_32008[(2)]);
var inst_31986 = (inst_31972 + (1));
var inst_31972__$1 = inst_31986;
var state_32008__$1 = (function (){var statearr_32023 = state_32008;
(statearr_32023[(10)] = inst_31985);

(statearr_32023[(7)] = inst_31972__$1);

return statearr_32023;
})();
var statearr_32024_32054 = state_32008__$1;
(statearr_32024_32054[(2)] = null);

(statearr_32024_32054[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (5))){
var inst_31992 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32025 = state_32008;
(statearr_32025[(11)] = inst_31992);

return statearr_32025;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32008__$1,(12),dchan);
} else {
if((state_val_32009 === (14))){
var inst_31994 = (state_32008[(8)]);
var inst_31999 = cljs.core.apply.call(null,f,inst_31994);
var state_32008__$1 = state_32008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32008__$1,(16),out,inst_31999);
} else {
if((state_val_32009 === (16))){
var inst_32001 = (state_32008[(2)]);
var state_32008__$1 = (function (){var statearr_32026 = state_32008;
(statearr_32026[(12)] = inst_32001);

return statearr_32026;
})();
var statearr_32027_32055 = state_32008__$1;
(statearr_32027_32055[(2)] = null);

(statearr_32027_32055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (10))){
var inst_31976 = (state_32008[(2)]);
var inst_31977 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32008__$1 = (function (){var statearr_32028 = state_32008;
(statearr_32028[(13)] = inst_31976);

return statearr_32028;
})();
var statearr_32029_32056 = state_32008__$1;
(statearr_32029_32056[(2)] = inst_31977);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32008__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32009 === (8))){
var inst_31990 = (state_32008[(2)]);
var state_32008__$1 = state_32008;
var statearr_32030_32057 = state_32008__$1;
(statearr_32030_32057[(2)] = inst_31990);

(statearr_32030_32057[(1)] = (5));


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
});})(c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29830__auto__,c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32034[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32034[(1)] = (1));

return statearr_32034;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32008){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32035){if((e32035 instanceof Object)){
var ex__29834__auto__ = e32035;
var statearr_32036_32058 = state_32008;
(statearr_32036_32058[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32035;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32059 = state_32008;
state_32008 = G__32059;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32008){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32008);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29847__auto__ = (function (){var statearr_32037 = f__29846__auto__.call(null);
(statearr_32037[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32042);

return statearr_32037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32042,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32061 = [];
var len__27787__auto___32119 = arguments.length;
var i__27788__auto___32120 = (0);
while(true){
if((i__27788__auto___32120 < len__27787__auto___32119)){
args32061.push((arguments[i__27788__auto___32120]));

var G__32121 = (i__27788__auto___32120 + (1));
i__27788__auto___32120 = G__32121;
continue;
} else {
}
break;
}

var G__32063 = args32061.length;
switch (G__32063) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32061.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32123,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32123,out){
return (function (state_32095){
var state_val_32096 = (state_32095[(1)]);
if((state_val_32096 === (7))){
var inst_32074 = (state_32095[(7)]);
var inst_32075 = (state_32095[(8)]);
var inst_32074__$1 = (state_32095[(2)]);
var inst_32075__$1 = cljs.core.nth.call(null,inst_32074__$1,(0),null);
var inst_32076 = cljs.core.nth.call(null,inst_32074__$1,(1),null);
var inst_32077 = (inst_32075__$1 == null);
var state_32095__$1 = (function (){var statearr_32097 = state_32095;
(statearr_32097[(7)] = inst_32074__$1);

(statearr_32097[(8)] = inst_32075__$1);

(statearr_32097[(9)] = inst_32076);

return statearr_32097;
})();
if(cljs.core.truth_(inst_32077)){
var statearr_32098_32124 = state_32095__$1;
(statearr_32098_32124[(1)] = (8));

} else {
var statearr_32099_32125 = state_32095__$1;
(statearr_32099_32125[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (1))){
var inst_32064 = cljs.core.vec.call(null,chs);
var inst_32065 = inst_32064;
var state_32095__$1 = (function (){var statearr_32100 = state_32095;
(statearr_32100[(10)] = inst_32065);

return statearr_32100;
})();
var statearr_32101_32126 = state_32095__$1;
(statearr_32101_32126[(2)] = null);

(statearr_32101_32126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (4))){
var inst_32065 = (state_32095[(10)]);
var state_32095__$1 = state_32095;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32095__$1,(7),inst_32065);
} else {
if((state_val_32096 === (6))){
var inst_32091 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32102_32127 = state_32095__$1;
(statearr_32102_32127[(2)] = inst_32091);

(statearr_32102_32127[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (3))){
var inst_32093 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32095__$1,inst_32093);
} else {
if((state_val_32096 === (2))){
var inst_32065 = (state_32095[(10)]);
var inst_32067 = cljs.core.count.call(null,inst_32065);
var inst_32068 = (inst_32067 > (0));
var state_32095__$1 = state_32095;
if(cljs.core.truth_(inst_32068)){
var statearr_32104_32128 = state_32095__$1;
(statearr_32104_32128[(1)] = (4));

} else {
var statearr_32105_32129 = state_32095__$1;
(statearr_32105_32129[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (11))){
var inst_32065 = (state_32095[(10)]);
var inst_32084 = (state_32095[(2)]);
var tmp32103 = inst_32065;
var inst_32065__$1 = tmp32103;
var state_32095__$1 = (function (){var statearr_32106 = state_32095;
(statearr_32106[(11)] = inst_32084);

(statearr_32106[(10)] = inst_32065__$1);

return statearr_32106;
})();
var statearr_32107_32130 = state_32095__$1;
(statearr_32107_32130[(2)] = null);

(statearr_32107_32130[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (9))){
var inst_32075 = (state_32095[(8)]);
var state_32095__$1 = state_32095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32095__$1,(11),out,inst_32075);
} else {
if((state_val_32096 === (5))){
var inst_32089 = cljs.core.async.close_BANG_.call(null,out);
var state_32095__$1 = state_32095;
var statearr_32108_32131 = state_32095__$1;
(statearr_32108_32131[(2)] = inst_32089);

(statearr_32108_32131[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (10))){
var inst_32087 = (state_32095[(2)]);
var state_32095__$1 = state_32095;
var statearr_32109_32132 = state_32095__$1;
(statearr_32109_32132[(2)] = inst_32087);

(statearr_32109_32132[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32096 === (8))){
var inst_32074 = (state_32095[(7)]);
var inst_32065 = (state_32095[(10)]);
var inst_32075 = (state_32095[(8)]);
var inst_32076 = (state_32095[(9)]);
var inst_32079 = (function (){var cs = inst_32065;
var vec__32070 = inst_32074;
var v = inst_32075;
var c = inst_32076;
return ((function (cs,vec__32070,v,c,inst_32074,inst_32065,inst_32075,inst_32076,state_val_32096,c__29845__auto___32123,out){
return (function (p1__32060_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32060_SHARP_);
});
;})(cs,vec__32070,v,c,inst_32074,inst_32065,inst_32075,inst_32076,state_val_32096,c__29845__auto___32123,out))
})();
var inst_32080 = cljs.core.filterv.call(null,inst_32079,inst_32065);
var inst_32065__$1 = inst_32080;
var state_32095__$1 = (function (){var statearr_32110 = state_32095;
(statearr_32110[(10)] = inst_32065__$1);

return statearr_32110;
})();
var statearr_32111_32133 = state_32095__$1;
(statearr_32111_32133[(2)] = null);

(statearr_32111_32133[(1)] = (2));


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
});})(c__29845__auto___32123,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32123,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32115 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32115[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32115[(1)] = (1));

return statearr_32115;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32095){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32116){if((e32116 instanceof Object)){
var ex__29834__auto__ = e32116;
var statearr_32117_32134 = state_32095;
(statearr_32117_32134[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32135 = state_32095;
state_32095 = G__32135;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32095);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32123,out))
})();
var state__29847__auto__ = (function (){var statearr_32118 = f__29846__auto__.call(null);
(statearr_32118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32123);

return statearr_32118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32123,out))
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
var args32136 = [];
var len__27787__auto___32185 = arguments.length;
var i__27788__auto___32186 = (0);
while(true){
if((i__27788__auto___32186 < len__27787__auto___32185)){
args32136.push((arguments[i__27788__auto___32186]));

var G__32187 = (i__27788__auto___32186 + (1));
i__27788__auto___32186 = G__32187;
continue;
} else {
}
break;
}

var G__32138 = args32136.length;
switch (G__32138) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32136.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32189 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32189,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32189,out){
return (function (state_32162){
var state_val_32163 = (state_32162[(1)]);
if((state_val_32163 === (7))){
var inst_32144 = (state_32162[(7)]);
var inst_32144__$1 = (state_32162[(2)]);
var inst_32145 = (inst_32144__$1 == null);
var inst_32146 = cljs.core.not.call(null,inst_32145);
var state_32162__$1 = (function (){var statearr_32164 = state_32162;
(statearr_32164[(7)] = inst_32144__$1);

return statearr_32164;
})();
if(inst_32146){
var statearr_32165_32190 = state_32162__$1;
(statearr_32165_32190[(1)] = (8));

} else {
var statearr_32166_32191 = state_32162__$1;
(statearr_32166_32191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (1))){
var inst_32139 = (0);
var state_32162__$1 = (function (){var statearr_32167 = state_32162;
(statearr_32167[(8)] = inst_32139);

return statearr_32167;
})();
var statearr_32168_32192 = state_32162__$1;
(statearr_32168_32192[(2)] = null);

(statearr_32168_32192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (4))){
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32162__$1,(7),ch);
} else {
if((state_val_32163 === (6))){
var inst_32157 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
var statearr_32169_32193 = state_32162__$1;
(statearr_32169_32193[(2)] = inst_32157);

(statearr_32169_32193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (3))){
var inst_32159 = (state_32162[(2)]);
var inst_32160 = cljs.core.async.close_BANG_.call(null,out);
var state_32162__$1 = (function (){var statearr_32170 = state_32162;
(statearr_32170[(9)] = inst_32159);

return statearr_32170;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32162__$1,inst_32160);
} else {
if((state_val_32163 === (2))){
var inst_32139 = (state_32162[(8)]);
var inst_32141 = (inst_32139 < n);
var state_32162__$1 = state_32162;
if(cljs.core.truth_(inst_32141)){
var statearr_32171_32194 = state_32162__$1;
(statearr_32171_32194[(1)] = (4));

} else {
var statearr_32172_32195 = state_32162__$1;
(statearr_32172_32195[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (11))){
var inst_32139 = (state_32162[(8)]);
var inst_32149 = (state_32162[(2)]);
var inst_32150 = (inst_32139 + (1));
var inst_32139__$1 = inst_32150;
var state_32162__$1 = (function (){var statearr_32173 = state_32162;
(statearr_32173[(10)] = inst_32149);

(statearr_32173[(8)] = inst_32139__$1);

return statearr_32173;
})();
var statearr_32174_32196 = state_32162__$1;
(statearr_32174_32196[(2)] = null);

(statearr_32174_32196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (9))){
var state_32162__$1 = state_32162;
var statearr_32175_32197 = state_32162__$1;
(statearr_32175_32197[(2)] = null);

(statearr_32175_32197[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (5))){
var state_32162__$1 = state_32162;
var statearr_32176_32198 = state_32162__$1;
(statearr_32176_32198[(2)] = null);

(statearr_32176_32198[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (10))){
var inst_32154 = (state_32162[(2)]);
var state_32162__$1 = state_32162;
var statearr_32177_32199 = state_32162__$1;
(statearr_32177_32199[(2)] = inst_32154);

(statearr_32177_32199[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32163 === (8))){
var inst_32144 = (state_32162[(7)]);
var state_32162__$1 = state_32162;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32162__$1,(11),out,inst_32144);
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
});})(c__29845__auto___32189,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32189,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32181 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32181[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32181[(1)] = (1));

return statearr_32181;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32162){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32162);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32182){if((e32182 instanceof Object)){
var ex__29834__auto__ = e32182;
var statearr_32183_32200 = state_32162;
(statearr_32183_32200[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32162);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32201 = state_32162;
state_32162 = G__32201;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32162){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32162);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32189,out))
})();
var state__29847__auto__ = (function (){var statearr_32184 = f__29846__auto__.call(null);
(statearr_32184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32189);

return statearr_32184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32189,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32209 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32209 = (function (f,ch,meta32210){
this.f = f;
this.ch = ch;
this.meta32210 = meta32210;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32211,meta32210__$1){
var self__ = this;
var _32211__$1 = this;
return (new cljs.core.async.t_cljs$core$async32209(self__.f,self__.ch,meta32210__$1));
});

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32211){
var self__ = this;
var _32211__$1 = this;
return self__.meta32210;
});

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32212 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32212 = (function (f,ch,meta32210,_,fn1,meta32213){
this.f = f;
this.ch = ch;
this.meta32210 = meta32210;
this._ = _;
this.fn1 = fn1;
this.meta32213 = meta32213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32214,meta32213__$1){
var self__ = this;
var _32214__$1 = this;
return (new cljs.core.async.t_cljs$core$async32212(self__.f,self__.ch,self__.meta32210,self__._,self__.fn1,meta32213__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32214){
var self__ = this;
var _32214__$1 = this;
return self__.meta32213;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32202_SHARP_){
return f1.call(null,(((p1__32202_SHARP_ == null))?null:self__.f.call(null,p1__32202_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32210","meta32210",-618737114,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32209","cljs.core.async/t_cljs$core$async32209",844871301,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32213","meta32213",-1448138725,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32212.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32212.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32212";

cljs.core.async.t_cljs$core$async32212.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32212");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32212 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32212(f__$1,ch__$1,meta32210__$1,___$2,fn1__$1,meta32213){
return (new cljs.core.async.t_cljs$core$async32212(f__$1,ch__$1,meta32210__$1,___$2,fn1__$1,meta32213));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32212(self__.f,self__.ch,self__.meta32210,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__26662__auto__ = ret;
if(cljs.core.truth_(and__26662__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__26662__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32209.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32209.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32210","meta32210",-618737114,null)], null);
});

cljs.core.async.t_cljs$core$async32209.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32209.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32209";

cljs.core.async.t_cljs$core$async32209.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32209");
});

cljs.core.async.__GT_t_cljs$core$async32209 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32209(f__$1,ch__$1,meta32210){
return (new cljs.core.async.t_cljs$core$async32209(f__$1,ch__$1,meta32210));
});

}

return (new cljs.core.async.t_cljs$core$async32209(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32218 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32218 = (function (f,ch,meta32219){
this.f = f;
this.ch = ch;
this.meta32219 = meta32219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32220,meta32219__$1){
var self__ = this;
var _32220__$1 = this;
return (new cljs.core.async.t_cljs$core$async32218(self__.f,self__.ch,meta32219__$1));
});

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32220){
var self__ = this;
var _32220__$1 = this;
return self__.meta32219;
});

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32218.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32219","meta32219",1660488683,null)], null);
});

cljs.core.async.t_cljs$core$async32218.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32218";

cljs.core.async.t_cljs$core$async32218.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32218");
});

cljs.core.async.__GT_t_cljs$core$async32218 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32218(f__$1,ch__$1,meta32219){
return (new cljs.core.async.t_cljs$core$async32218(f__$1,ch__$1,meta32219));
});

}

return (new cljs.core.async.t_cljs$core$async32218(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32224 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32224 = (function (p,ch,meta32225){
this.p = p;
this.ch = ch;
this.meta32225 = meta32225;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32226,meta32225__$1){
var self__ = this;
var _32226__$1 = this;
return (new cljs.core.async.t_cljs$core$async32224(self__.p,self__.ch,meta32225__$1));
});

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32226){
var self__ = this;
var _32226__$1 = this;
return self__.meta32225;
});

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32224.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32224.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32225","meta32225",-1519303991,null)], null);
});

cljs.core.async.t_cljs$core$async32224.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32224";

cljs.core.async.t_cljs$core$async32224.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32224");
});

cljs.core.async.__GT_t_cljs$core$async32224 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32224(p__$1,ch__$1,meta32225){
return (new cljs.core.async.t_cljs$core$async32224(p__$1,ch__$1,meta32225));
});

}

return (new cljs.core.async.t_cljs$core$async32224(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32227 = [];
var len__27787__auto___32271 = arguments.length;
var i__27788__auto___32272 = (0);
while(true){
if((i__27788__auto___32272 < len__27787__auto___32271)){
args32227.push((arguments[i__27788__auto___32272]));

var G__32273 = (i__27788__auto___32272 + (1));
i__27788__auto___32272 = G__32273;
continue;
} else {
}
break;
}

var G__32229 = args32227.length;
switch (G__32229) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32227.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32275 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32275,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32275,out){
return (function (state_32250){
var state_val_32251 = (state_32250[(1)]);
if((state_val_32251 === (7))){
var inst_32246 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
var statearr_32252_32276 = state_32250__$1;
(statearr_32252_32276[(2)] = inst_32246);

(statearr_32252_32276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (1))){
var state_32250__$1 = state_32250;
var statearr_32253_32277 = state_32250__$1;
(statearr_32253_32277[(2)] = null);

(statearr_32253_32277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (4))){
var inst_32232 = (state_32250[(7)]);
var inst_32232__$1 = (state_32250[(2)]);
var inst_32233 = (inst_32232__$1 == null);
var state_32250__$1 = (function (){var statearr_32254 = state_32250;
(statearr_32254[(7)] = inst_32232__$1);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32233)){
var statearr_32255_32278 = state_32250__$1;
(statearr_32255_32278[(1)] = (5));

} else {
var statearr_32256_32279 = state_32250__$1;
(statearr_32256_32279[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (6))){
var inst_32232 = (state_32250[(7)]);
var inst_32237 = p.call(null,inst_32232);
var state_32250__$1 = state_32250;
if(cljs.core.truth_(inst_32237)){
var statearr_32257_32280 = state_32250__$1;
(statearr_32257_32280[(1)] = (8));

} else {
var statearr_32258_32281 = state_32250__$1;
(statearr_32258_32281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (3))){
var inst_32248 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32250__$1,inst_32248);
} else {
if((state_val_32251 === (2))){
var state_32250__$1 = state_32250;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32250__$1,(4),ch);
} else {
if((state_val_32251 === (11))){
var inst_32240 = (state_32250[(2)]);
var state_32250__$1 = state_32250;
var statearr_32259_32282 = state_32250__$1;
(statearr_32259_32282[(2)] = inst_32240);

(statearr_32259_32282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (9))){
var state_32250__$1 = state_32250;
var statearr_32260_32283 = state_32250__$1;
(statearr_32260_32283[(2)] = null);

(statearr_32260_32283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (5))){
var inst_32235 = cljs.core.async.close_BANG_.call(null,out);
var state_32250__$1 = state_32250;
var statearr_32261_32284 = state_32250__$1;
(statearr_32261_32284[(2)] = inst_32235);

(statearr_32261_32284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (10))){
var inst_32243 = (state_32250[(2)]);
var state_32250__$1 = (function (){var statearr_32262 = state_32250;
(statearr_32262[(8)] = inst_32243);

return statearr_32262;
})();
var statearr_32263_32285 = state_32250__$1;
(statearr_32263_32285[(2)] = null);

(statearr_32263_32285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32251 === (8))){
var inst_32232 = (state_32250[(7)]);
var state_32250__$1 = state_32250;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32250__$1,(11),out,inst_32232);
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
});})(c__29845__auto___32275,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32275,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32267 = [null,null,null,null,null,null,null,null,null];
(statearr_32267[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32267[(1)] = (1));

return statearr_32267;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32250){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32250);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32268){if((e32268 instanceof Object)){
var ex__29834__auto__ = e32268;
var statearr_32269_32286 = state_32250;
(statearr_32269_32286[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32287 = state_32250;
state_32250 = G__32287;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32250);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32275,out))
})();
var state__29847__auto__ = (function (){var statearr_32270 = f__29846__auto__.call(null);
(statearr_32270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32275);

return statearr_32270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32275,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32288 = [];
var len__27787__auto___32291 = arguments.length;
var i__27788__auto___32292 = (0);
while(true){
if((i__27788__auto___32292 < len__27787__auto___32291)){
args32288.push((arguments[i__27788__auto___32292]));

var G__32293 = (i__27788__auto___32292 + (1));
i__27788__auto___32292 = G__32293;
continue;
} else {
}
break;
}

var G__32290 = args32288.length;
switch (G__32290) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32288.length)].join('')));

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
var c__29845__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto__){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto__){
return (function (state_32460){
var state_val_32461 = (state_32460[(1)]);
if((state_val_32461 === (7))){
var inst_32456 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32462_32503 = state_32460__$1;
(statearr_32462_32503[(2)] = inst_32456);

(statearr_32462_32503[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (20))){
var inst_32426 = (state_32460[(7)]);
var inst_32437 = (state_32460[(2)]);
var inst_32438 = cljs.core.next.call(null,inst_32426);
var inst_32412 = inst_32438;
var inst_32413 = null;
var inst_32414 = (0);
var inst_32415 = (0);
var state_32460__$1 = (function (){var statearr_32463 = state_32460;
(statearr_32463[(8)] = inst_32414);

(statearr_32463[(9)] = inst_32412);

(statearr_32463[(10)] = inst_32437);

(statearr_32463[(11)] = inst_32415);

(statearr_32463[(12)] = inst_32413);

return statearr_32463;
})();
var statearr_32464_32504 = state_32460__$1;
(statearr_32464_32504[(2)] = null);

(statearr_32464_32504[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (1))){
var state_32460__$1 = state_32460;
var statearr_32465_32505 = state_32460__$1;
(statearr_32465_32505[(2)] = null);

(statearr_32465_32505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (4))){
var inst_32401 = (state_32460[(13)]);
var inst_32401__$1 = (state_32460[(2)]);
var inst_32402 = (inst_32401__$1 == null);
var state_32460__$1 = (function (){var statearr_32466 = state_32460;
(statearr_32466[(13)] = inst_32401__$1);

return statearr_32466;
})();
if(cljs.core.truth_(inst_32402)){
var statearr_32467_32506 = state_32460__$1;
(statearr_32467_32506[(1)] = (5));

} else {
var statearr_32468_32507 = state_32460__$1;
(statearr_32468_32507[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (15))){
var state_32460__$1 = state_32460;
var statearr_32472_32508 = state_32460__$1;
(statearr_32472_32508[(2)] = null);

(statearr_32472_32508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (21))){
var state_32460__$1 = state_32460;
var statearr_32473_32509 = state_32460__$1;
(statearr_32473_32509[(2)] = null);

(statearr_32473_32509[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (13))){
var inst_32414 = (state_32460[(8)]);
var inst_32412 = (state_32460[(9)]);
var inst_32415 = (state_32460[(11)]);
var inst_32413 = (state_32460[(12)]);
var inst_32422 = (state_32460[(2)]);
var inst_32423 = (inst_32415 + (1));
var tmp32469 = inst_32414;
var tmp32470 = inst_32412;
var tmp32471 = inst_32413;
var inst_32412__$1 = tmp32470;
var inst_32413__$1 = tmp32471;
var inst_32414__$1 = tmp32469;
var inst_32415__$1 = inst_32423;
var state_32460__$1 = (function (){var statearr_32474 = state_32460;
(statearr_32474[(8)] = inst_32414__$1);

(statearr_32474[(14)] = inst_32422);

(statearr_32474[(9)] = inst_32412__$1);

(statearr_32474[(11)] = inst_32415__$1);

(statearr_32474[(12)] = inst_32413__$1);

return statearr_32474;
})();
var statearr_32475_32510 = state_32460__$1;
(statearr_32475_32510[(2)] = null);

(statearr_32475_32510[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (22))){
var state_32460__$1 = state_32460;
var statearr_32476_32511 = state_32460__$1;
(statearr_32476_32511[(2)] = null);

(statearr_32476_32511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (6))){
var inst_32401 = (state_32460[(13)]);
var inst_32410 = f.call(null,inst_32401);
var inst_32411 = cljs.core.seq.call(null,inst_32410);
var inst_32412 = inst_32411;
var inst_32413 = null;
var inst_32414 = (0);
var inst_32415 = (0);
var state_32460__$1 = (function (){var statearr_32477 = state_32460;
(statearr_32477[(8)] = inst_32414);

(statearr_32477[(9)] = inst_32412);

(statearr_32477[(11)] = inst_32415);

(statearr_32477[(12)] = inst_32413);

return statearr_32477;
})();
var statearr_32478_32512 = state_32460__$1;
(statearr_32478_32512[(2)] = null);

(statearr_32478_32512[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (17))){
var inst_32426 = (state_32460[(7)]);
var inst_32430 = cljs.core.chunk_first.call(null,inst_32426);
var inst_32431 = cljs.core.chunk_rest.call(null,inst_32426);
var inst_32432 = cljs.core.count.call(null,inst_32430);
var inst_32412 = inst_32431;
var inst_32413 = inst_32430;
var inst_32414 = inst_32432;
var inst_32415 = (0);
var state_32460__$1 = (function (){var statearr_32479 = state_32460;
(statearr_32479[(8)] = inst_32414);

(statearr_32479[(9)] = inst_32412);

(statearr_32479[(11)] = inst_32415);

(statearr_32479[(12)] = inst_32413);

return statearr_32479;
})();
var statearr_32480_32513 = state_32460__$1;
(statearr_32480_32513[(2)] = null);

(statearr_32480_32513[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (3))){
var inst_32458 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32460__$1,inst_32458);
} else {
if((state_val_32461 === (12))){
var inst_32446 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32481_32514 = state_32460__$1;
(statearr_32481_32514[(2)] = inst_32446);

(statearr_32481_32514[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (2))){
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32460__$1,(4),in$);
} else {
if((state_val_32461 === (23))){
var inst_32454 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32482_32515 = state_32460__$1;
(statearr_32482_32515[(2)] = inst_32454);

(statearr_32482_32515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (19))){
var inst_32441 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32483_32516 = state_32460__$1;
(statearr_32483_32516[(2)] = inst_32441);

(statearr_32483_32516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (11))){
var inst_32426 = (state_32460[(7)]);
var inst_32412 = (state_32460[(9)]);
var inst_32426__$1 = cljs.core.seq.call(null,inst_32412);
var state_32460__$1 = (function (){var statearr_32484 = state_32460;
(statearr_32484[(7)] = inst_32426__$1);

return statearr_32484;
})();
if(inst_32426__$1){
var statearr_32485_32517 = state_32460__$1;
(statearr_32485_32517[(1)] = (14));

} else {
var statearr_32486_32518 = state_32460__$1;
(statearr_32486_32518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (9))){
var inst_32448 = (state_32460[(2)]);
var inst_32449 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32460__$1 = (function (){var statearr_32487 = state_32460;
(statearr_32487[(15)] = inst_32448);

return statearr_32487;
})();
if(cljs.core.truth_(inst_32449)){
var statearr_32488_32519 = state_32460__$1;
(statearr_32488_32519[(1)] = (21));

} else {
var statearr_32489_32520 = state_32460__$1;
(statearr_32489_32520[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (5))){
var inst_32404 = cljs.core.async.close_BANG_.call(null,out);
var state_32460__$1 = state_32460;
var statearr_32490_32521 = state_32460__$1;
(statearr_32490_32521[(2)] = inst_32404);

(statearr_32490_32521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (14))){
var inst_32426 = (state_32460[(7)]);
var inst_32428 = cljs.core.chunked_seq_QMARK_.call(null,inst_32426);
var state_32460__$1 = state_32460;
if(inst_32428){
var statearr_32491_32522 = state_32460__$1;
(statearr_32491_32522[(1)] = (17));

} else {
var statearr_32492_32523 = state_32460__$1;
(statearr_32492_32523[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (16))){
var inst_32444 = (state_32460[(2)]);
var state_32460__$1 = state_32460;
var statearr_32493_32524 = state_32460__$1;
(statearr_32493_32524[(2)] = inst_32444);

(statearr_32493_32524[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32461 === (10))){
var inst_32415 = (state_32460[(11)]);
var inst_32413 = (state_32460[(12)]);
var inst_32420 = cljs.core._nth.call(null,inst_32413,inst_32415);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32460__$1,(13),out,inst_32420);
} else {
if((state_val_32461 === (18))){
var inst_32426 = (state_32460[(7)]);
var inst_32435 = cljs.core.first.call(null,inst_32426);
var state_32460__$1 = state_32460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32460__$1,(20),out,inst_32435);
} else {
if((state_val_32461 === (8))){
var inst_32414 = (state_32460[(8)]);
var inst_32415 = (state_32460[(11)]);
var inst_32417 = (inst_32415 < inst_32414);
var inst_32418 = inst_32417;
var state_32460__$1 = state_32460;
if(cljs.core.truth_(inst_32418)){
var statearr_32494_32525 = state_32460__$1;
(statearr_32494_32525[(1)] = (10));

} else {
var statearr_32495_32526 = state_32460__$1;
(statearr_32495_32526[(1)] = (11));

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
});})(c__29845__auto__))
;
return ((function (switch__29830__auto__,c__29845__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____0 = (function (){
var statearr_32499 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32499[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__);

(statearr_32499[(1)] = (1));

return statearr_32499;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____1 = (function (state_32460){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32500){if((e32500 instanceof Object)){
var ex__29834__auto__ = e32500;
var statearr_32501_32527 = state_32460;
(statearr_32501_32527[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32528 = state_32460;
state_32460 = G__32528;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__ = function(state_32460){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____1.call(this,state_32460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29831__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto__))
})();
var state__29847__auto__ = (function (){var statearr_32502 = f__29846__auto__.call(null);
(statearr_32502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto__);

return statearr_32502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto__))
);

return c__29845__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32529 = [];
var len__27787__auto___32532 = arguments.length;
var i__27788__auto___32533 = (0);
while(true){
if((i__27788__auto___32533 < len__27787__auto___32532)){
args32529.push((arguments[i__27788__auto___32533]));

var G__32534 = (i__27788__auto___32533 + (1));
i__27788__auto___32533 = G__32534;
continue;
} else {
}
break;
}

var G__32531 = args32529.length;
switch (G__32531) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32529.length)].join('')));

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
var args32536 = [];
var len__27787__auto___32539 = arguments.length;
var i__27788__auto___32540 = (0);
while(true){
if((i__27788__auto___32540 < len__27787__auto___32539)){
args32536.push((arguments[i__27788__auto___32540]));

var G__32541 = (i__27788__auto___32540 + (1));
i__27788__auto___32540 = G__32541;
continue;
} else {
}
break;
}

var G__32538 = args32536.length;
switch (G__32538) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32536.length)].join('')));

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
var args32543 = [];
var len__27787__auto___32594 = arguments.length;
var i__27788__auto___32595 = (0);
while(true){
if((i__27788__auto___32595 < len__27787__auto___32594)){
args32543.push((arguments[i__27788__auto___32595]));

var G__32596 = (i__27788__auto___32595 + (1));
i__27788__auto___32595 = G__32596;
continue;
} else {
}
break;
}

var G__32545 = args32543.length;
switch (G__32545) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32543.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32598,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32598,out){
return (function (state_32569){
var state_val_32570 = (state_32569[(1)]);
if((state_val_32570 === (7))){
var inst_32564 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32571_32599 = state_32569__$1;
(statearr_32571_32599[(2)] = inst_32564);

(statearr_32571_32599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (1))){
var inst_32546 = null;
var state_32569__$1 = (function (){var statearr_32572 = state_32569;
(statearr_32572[(7)] = inst_32546);

return statearr_32572;
})();
var statearr_32573_32600 = state_32569__$1;
(statearr_32573_32600[(2)] = null);

(statearr_32573_32600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (4))){
var inst_32549 = (state_32569[(8)]);
var inst_32549__$1 = (state_32569[(2)]);
var inst_32550 = (inst_32549__$1 == null);
var inst_32551 = cljs.core.not.call(null,inst_32550);
var state_32569__$1 = (function (){var statearr_32574 = state_32569;
(statearr_32574[(8)] = inst_32549__$1);

return statearr_32574;
})();
if(inst_32551){
var statearr_32575_32601 = state_32569__$1;
(statearr_32575_32601[(1)] = (5));

} else {
var statearr_32576_32602 = state_32569__$1;
(statearr_32576_32602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (6))){
var state_32569__$1 = state_32569;
var statearr_32577_32603 = state_32569__$1;
(statearr_32577_32603[(2)] = null);

(statearr_32577_32603[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (3))){
var inst_32566 = (state_32569[(2)]);
var inst_32567 = cljs.core.async.close_BANG_.call(null,out);
var state_32569__$1 = (function (){var statearr_32578 = state_32569;
(statearr_32578[(9)] = inst_32566);

return statearr_32578;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32569__$1,inst_32567);
} else {
if((state_val_32570 === (2))){
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32569__$1,(4),ch);
} else {
if((state_val_32570 === (11))){
var inst_32549 = (state_32569[(8)]);
var inst_32558 = (state_32569[(2)]);
var inst_32546 = inst_32549;
var state_32569__$1 = (function (){var statearr_32579 = state_32569;
(statearr_32579[(7)] = inst_32546);

(statearr_32579[(10)] = inst_32558);

return statearr_32579;
})();
var statearr_32580_32604 = state_32569__$1;
(statearr_32580_32604[(2)] = null);

(statearr_32580_32604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (9))){
var inst_32549 = (state_32569[(8)]);
var state_32569__$1 = state_32569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32569__$1,(11),out,inst_32549);
} else {
if((state_val_32570 === (5))){
var inst_32549 = (state_32569[(8)]);
var inst_32546 = (state_32569[(7)]);
var inst_32553 = cljs.core._EQ_.call(null,inst_32549,inst_32546);
var state_32569__$1 = state_32569;
if(inst_32553){
var statearr_32582_32605 = state_32569__$1;
(statearr_32582_32605[(1)] = (8));

} else {
var statearr_32583_32606 = state_32569__$1;
(statearr_32583_32606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (10))){
var inst_32561 = (state_32569[(2)]);
var state_32569__$1 = state_32569;
var statearr_32584_32607 = state_32569__$1;
(statearr_32584_32607[(2)] = inst_32561);

(statearr_32584_32607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32570 === (8))){
var inst_32546 = (state_32569[(7)]);
var tmp32581 = inst_32546;
var inst_32546__$1 = tmp32581;
var state_32569__$1 = (function (){var statearr_32585 = state_32569;
(statearr_32585[(7)] = inst_32546__$1);

return statearr_32585;
})();
var statearr_32586_32608 = state_32569__$1;
(statearr_32586_32608[(2)] = null);

(statearr_32586_32608[(1)] = (2));


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
});})(c__29845__auto___32598,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32598,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32590 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32590[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32590[(1)] = (1));

return statearr_32590;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32569){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32591){if((e32591 instanceof Object)){
var ex__29834__auto__ = e32591;
var statearr_32592_32609 = state_32569;
(statearr_32592_32609[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32591;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32610 = state_32569;
state_32569 = G__32610;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32569);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32598,out))
})();
var state__29847__auto__ = (function (){var statearr_32593 = f__29846__auto__.call(null);
(statearr_32593[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32598);

return statearr_32593;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32598,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32611 = [];
var len__27787__auto___32681 = arguments.length;
var i__27788__auto___32682 = (0);
while(true){
if((i__27788__auto___32682 < len__27787__auto___32681)){
args32611.push((arguments[i__27788__auto___32682]));

var G__32683 = (i__27788__auto___32682 + (1));
i__27788__auto___32682 = G__32683;
continue;
} else {
}
break;
}

var G__32613 = args32611.length;
switch (G__32613) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32611.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32685 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32685,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32685,out){
return (function (state_32651){
var state_val_32652 = (state_32651[(1)]);
if((state_val_32652 === (7))){
var inst_32647 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32653_32686 = state_32651__$1;
(statearr_32653_32686[(2)] = inst_32647);

(statearr_32653_32686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (1))){
var inst_32614 = (new Array(n));
var inst_32615 = inst_32614;
var inst_32616 = (0);
var state_32651__$1 = (function (){var statearr_32654 = state_32651;
(statearr_32654[(7)] = inst_32616);

(statearr_32654[(8)] = inst_32615);

return statearr_32654;
})();
var statearr_32655_32687 = state_32651__$1;
(statearr_32655_32687[(2)] = null);

(statearr_32655_32687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (4))){
var inst_32619 = (state_32651[(9)]);
var inst_32619__$1 = (state_32651[(2)]);
var inst_32620 = (inst_32619__$1 == null);
var inst_32621 = cljs.core.not.call(null,inst_32620);
var state_32651__$1 = (function (){var statearr_32656 = state_32651;
(statearr_32656[(9)] = inst_32619__$1);

return statearr_32656;
})();
if(inst_32621){
var statearr_32657_32688 = state_32651__$1;
(statearr_32657_32688[(1)] = (5));

} else {
var statearr_32658_32689 = state_32651__$1;
(statearr_32658_32689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (15))){
var inst_32641 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32659_32690 = state_32651__$1;
(statearr_32659_32690[(2)] = inst_32641);

(statearr_32659_32690[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (13))){
var state_32651__$1 = state_32651;
var statearr_32660_32691 = state_32651__$1;
(statearr_32660_32691[(2)] = null);

(statearr_32660_32691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (6))){
var inst_32616 = (state_32651[(7)]);
var inst_32637 = (inst_32616 > (0));
var state_32651__$1 = state_32651;
if(cljs.core.truth_(inst_32637)){
var statearr_32661_32692 = state_32651__$1;
(statearr_32661_32692[(1)] = (12));

} else {
var statearr_32662_32693 = state_32651__$1;
(statearr_32662_32693[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (3))){
var inst_32649 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32651__$1,inst_32649);
} else {
if((state_val_32652 === (12))){
var inst_32615 = (state_32651[(8)]);
var inst_32639 = cljs.core.vec.call(null,inst_32615);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32651__$1,(15),out,inst_32639);
} else {
if((state_val_32652 === (2))){
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32651__$1,(4),ch);
} else {
if((state_val_32652 === (11))){
var inst_32631 = (state_32651[(2)]);
var inst_32632 = (new Array(n));
var inst_32615 = inst_32632;
var inst_32616 = (0);
var state_32651__$1 = (function (){var statearr_32663 = state_32651;
(statearr_32663[(10)] = inst_32631);

(statearr_32663[(7)] = inst_32616);

(statearr_32663[(8)] = inst_32615);

return statearr_32663;
})();
var statearr_32664_32694 = state_32651__$1;
(statearr_32664_32694[(2)] = null);

(statearr_32664_32694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (9))){
var inst_32615 = (state_32651[(8)]);
var inst_32629 = cljs.core.vec.call(null,inst_32615);
var state_32651__$1 = state_32651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32651__$1,(11),out,inst_32629);
} else {
if((state_val_32652 === (5))){
var inst_32616 = (state_32651[(7)]);
var inst_32624 = (state_32651[(11)]);
var inst_32619 = (state_32651[(9)]);
var inst_32615 = (state_32651[(8)]);
var inst_32623 = (inst_32615[inst_32616] = inst_32619);
var inst_32624__$1 = (inst_32616 + (1));
var inst_32625 = (inst_32624__$1 < n);
var state_32651__$1 = (function (){var statearr_32665 = state_32651;
(statearr_32665[(11)] = inst_32624__$1);

(statearr_32665[(12)] = inst_32623);

return statearr_32665;
})();
if(cljs.core.truth_(inst_32625)){
var statearr_32666_32695 = state_32651__$1;
(statearr_32666_32695[(1)] = (8));

} else {
var statearr_32667_32696 = state_32651__$1;
(statearr_32667_32696[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (14))){
var inst_32644 = (state_32651[(2)]);
var inst_32645 = cljs.core.async.close_BANG_.call(null,out);
var state_32651__$1 = (function (){var statearr_32669 = state_32651;
(statearr_32669[(13)] = inst_32644);

return statearr_32669;
})();
var statearr_32670_32697 = state_32651__$1;
(statearr_32670_32697[(2)] = inst_32645);

(statearr_32670_32697[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (10))){
var inst_32635 = (state_32651[(2)]);
var state_32651__$1 = state_32651;
var statearr_32671_32698 = state_32651__$1;
(statearr_32671_32698[(2)] = inst_32635);

(statearr_32671_32698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32652 === (8))){
var inst_32624 = (state_32651[(11)]);
var inst_32615 = (state_32651[(8)]);
var tmp32668 = inst_32615;
var inst_32615__$1 = tmp32668;
var inst_32616 = inst_32624;
var state_32651__$1 = (function (){var statearr_32672 = state_32651;
(statearr_32672[(7)] = inst_32616);

(statearr_32672[(8)] = inst_32615__$1);

return statearr_32672;
})();
var statearr_32673_32699 = state_32651__$1;
(statearr_32673_32699[(2)] = null);

(statearr_32673_32699[(1)] = (2));


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
});})(c__29845__auto___32685,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32685,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32677[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32677[(1)] = (1));

return statearr_32677;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32651){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32678){if((e32678 instanceof Object)){
var ex__29834__auto__ = e32678;
var statearr_32679_32700 = state_32651;
(statearr_32679_32700[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32701 = state_32651;
state_32651 = G__32701;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32651);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32685,out))
})();
var state__29847__auto__ = (function (){var statearr_32680 = f__29846__auto__.call(null);
(statearr_32680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32685);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32685,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32702 = [];
var len__27787__auto___32776 = arguments.length;
var i__27788__auto___32777 = (0);
while(true){
if((i__27788__auto___32777 < len__27787__auto___32776)){
args32702.push((arguments[i__27788__auto___32777]));

var G__32778 = (i__27788__auto___32777 + (1));
i__27788__auto___32777 = G__32778;
continue;
} else {
}
break;
}

var G__32704 = args32702.length;
switch (G__32704) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32702.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29845__auto___32780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29845__auto___32780,out){
return (function (){
var f__29846__auto__ = (function (){var switch__29830__auto__ = ((function (c__29845__auto___32780,out){
return (function (state_32746){
var state_val_32747 = (state_32746[(1)]);
if((state_val_32747 === (7))){
var inst_32742 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32748_32781 = state_32746__$1;
(statearr_32748_32781[(2)] = inst_32742);

(statearr_32748_32781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (1))){
var inst_32705 = [];
var inst_32706 = inst_32705;
var inst_32707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32746__$1 = (function (){var statearr_32749 = state_32746;
(statearr_32749[(7)] = inst_32707);

(statearr_32749[(8)] = inst_32706);

return statearr_32749;
})();
var statearr_32750_32782 = state_32746__$1;
(statearr_32750_32782[(2)] = null);

(statearr_32750_32782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (4))){
var inst_32710 = (state_32746[(9)]);
var inst_32710__$1 = (state_32746[(2)]);
var inst_32711 = (inst_32710__$1 == null);
var inst_32712 = cljs.core.not.call(null,inst_32711);
var state_32746__$1 = (function (){var statearr_32751 = state_32746;
(statearr_32751[(9)] = inst_32710__$1);

return statearr_32751;
})();
if(inst_32712){
var statearr_32752_32783 = state_32746__$1;
(statearr_32752_32783[(1)] = (5));

} else {
var statearr_32753_32784 = state_32746__$1;
(statearr_32753_32784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (15))){
var inst_32736 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32754_32785 = state_32746__$1;
(statearr_32754_32785[(2)] = inst_32736);

(statearr_32754_32785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (13))){
var state_32746__$1 = state_32746;
var statearr_32755_32786 = state_32746__$1;
(statearr_32755_32786[(2)] = null);

(statearr_32755_32786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (6))){
var inst_32706 = (state_32746[(8)]);
var inst_32731 = inst_32706.length;
var inst_32732 = (inst_32731 > (0));
var state_32746__$1 = state_32746;
if(cljs.core.truth_(inst_32732)){
var statearr_32756_32787 = state_32746__$1;
(statearr_32756_32787[(1)] = (12));

} else {
var statearr_32757_32788 = state_32746__$1;
(statearr_32757_32788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (3))){
var inst_32744 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32746__$1,inst_32744);
} else {
if((state_val_32747 === (12))){
var inst_32706 = (state_32746[(8)]);
var inst_32734 = cljs.core.vec.call(null,inst_32706);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32746__$1,(15),out,inst_32734);
} else {
if((state_val_32747 === (2))){
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32746__$1,(4),ch);
} else {
if((state_val_32747 === (11))){
var inst_32714 = (state_32746[(10)]);
var inst_32710 = (state_32746[(9)]);
var inst_32724 = (state_32746[(2)]);
var inst_32725 = [];
var inst_32726 = inst_32725.push(inst_32710);
var inst_32706 = inst_32725;
var inst_32707 = inst_32714;
var state_32746__$1 = (function (){var statearr_32758 = state_32746;
(statearr_32758[(7)] = inst_32707);

(statearr_32758[(8)] = inst_32706);

(statearr_32758[(11)] = inst_32724);

(statearr_32758[(12)] = inst_32726);

return statearr_32758;
})();
var statearr_32759_32789 = state_32746__$1;
(statearr_32759_32789[(2)] = null);

(statearr_32759_32789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (9))){
var inst_32706 = (state_32746[(8)]);
var inst_32722 = cljs.core.vec.call(null,inst_32706);
var state_32746__$1 = state_32746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32746__$1,(11),out,inst_32722);
} else {
if((state_val_32747 === (5))){
var inst_32707 = (state_32746[(7)]);
var inst_32714 = (state_32746[(10)]);
var inst_32710 = (state_32746[(9)]);
var inst_32714__$1 = f.call(null,inst_32710);
var inst_32715 = cljs.core._EQ_.call(null,inst_32714__$1,inst_32707);
var inst_32716 = cljs.core.keyword_identical_QMARK_.call(null,inst_32707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32717 = (inst_32715) || (inst_32716);
var state_32746__$1 = (function (){var statearr_32760 = state_32746;
(statearr_32760[(10)] = inst_32714__$1);

return statearr_32760;
})();
if(cljs.core.truth_(inst_32717)){
var statearr_32761_32790 = state_32746__$1;
(statearr_32761_32790[(1)] = (8));

} else {
var statearr_32762_32791 = state_32746__$1;
(statearr_32762_32791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (14))){
var inst_32739 = (state_32746[(2)]);
var inst_32740 = cljs.core.async.close_BANG_.call(null,out);
var state_32746__$1 = (function (){var statearr_32764 = state_32746;
(statearr_32764[(13)] = inst_32739);

return statearr_32764;
})();
var statearr_32765_32792 = state_32746__$1;
(statearr_32765_32792[(2)] = inst_32740);

(statearr_32765_32792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (10))){
var inst_32729 = (state_32746[(2)]);
var state_32746__$1 = state_32746;
var statearr_32766_32793 = state_32746__$1;
(statearr_32766_32793[(2)] = inst_32729);

(statearr_32766_32793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32747 === (8))){
var inst_32714 = (state_32746[(10)]);
var inst_32706 = (state_32746[(8)]);
var inst_32710 = (state_32746[(9)]);
var inst_32719 = inst_32706.push(inst_32710);
var tmp32763 = inst_32706;
var inst_32706__$1 = tmp32763;
var inst_32707 = inst_32714;
var state_32746__$1 = (function (){var statearr_32767 = state_32746;
(statearr_32767[(14)] = inst_32719);

(statearr_32767[(7)] = inst_32707);

(statearr_32767[(8)] = inst_32706__$1);

return statearr_32767;
})();
var statearr_32768_32794 = state_32746__$1;
(statearr_32768_32794[(2)] = null);

(statearr_32768_32794[(1)] = (2));


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
});})(c__29845__auto___32780,out))
;
return ((function (switch__29830__auto__,c__29845__auto___32780,out){
return (function() {
var cljs$core$async$state_machine__29831__auto__ = null;
var cljs$core$async$state_machine__29831__auto____0 = (function (){
var statearr_32772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32772[(0)] = cljs$core$async$state_machine__29831__auto__);

(statearr_32772[(1)] = (1));

return statearr_32772;
});
var cljs$core$async$state_machine__29831__auto____1 = (function (state_32746){
while(true){
var ret_value__29832__auto__ = (function (){try{while(true){
var result__29833__auto__ = switch__29830__auto__.call(null,state_32746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29833__auto__;
}
break;
}
}catch (e32773){if((e32773 instanceof Object)){
var ex__29834__auto__ = e32773;
var statearr_32774_32795 = state_32746;
(statearr_32774_32795[(5)] = ex__29834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32796 = state_32746;
state_32746 = G__32796;
continue;
} else {
return ret_value__29832__auto__;
}
break;
}
});
cljs$core$async$state_machine__29831__auto__ = function(state_32746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29831__auto____1.call(this,state_32746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29831__auto____0;
cljs$core$async$state_machine__29831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29831__auto____1;
return cljs$core$async$state_machine__29831__auto__;
})()
;})(switch__29830__auto__,c__29845__auto___32780,out))
})();
var state__29847__auto__ = (function (){var statearr_32775 = f__29846__auto__.call(null);
(statearr_32775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29845__auto___32780);

return statearr_32775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29847__auto__);
});})(c__29845__auto___32780,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map