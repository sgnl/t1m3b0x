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
var args30023 = [];
var len__27787__auto___30029 = arguments.length;
var i__27788__auto___30030 = (0);
while(true){
if((i__27788__auto___30030 < len__27787__auto___30029)){
args30023.push((arguments[i__27788__auto___30030]));

var G__30031 = (i__27788__auto___30030 + (1));
i__27788__auto___30030 = G__30031;
continue;
} else {
}
break;
}

var G__30025 = args30023.length;
switch (G__30025) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30023.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async30026 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30026 = (function (f,blockable,meta30027){
this.f = f;
this.blockable = blockable;
this.meta30027 = meta30027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30028,meta30027__$1){
var self__ = this;
var _30028__$1 = this;
return (new cljs.core.async.t_cljs$core$async30026(self__.f,self__.blockable,meta30027__$1));
});

cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30028){
var self__ = this;
var _30028__$1 = this;
return self__.meta30027;
});

cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async30026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async30026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta30027","meta30027",-727601935,null)], null);
});

cljs.core.async.t_cljs$core$async30026.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30026";

cljs.core.async.t_cljs$core$async30026.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30026");
});

cljs.core.async.__GT_t_cljs$core$async30026 = (function cljs$core$async$__GT_t_cljs$core$async30026(f__$1,blockable__$1,meta30027){
return (new cljs.core.async.t_cljs$core$async30026(f__$1,blockable__$1,meta30027));
});

}

return (new cljs.core.async.t_cljs$core$async30026(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args30035 = [];
var len__27787__auto___30038 = arguments.length;
var i__27788__auto___30039 = (0);
while(true){
if((i__27788__auto___30039 < len__27787__auto___30038)){
args30035.push((arguments[i__27788__auto___30039]));

var G__30040 = (i__27788__auto___30039 + (1));
i__27788__auto___30039 = G__30040;
continue;
} else {
}
break;
}

var G__30037 = args30035.length;
switch (G__30037) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30035.length)].join('')));

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
var args30042 = [];
var len__27787__auto___30045 = arguments.length;
var i__27788__auto___30046 = (0);
while(true){
if((i__27788__auto___30046 < len__27787__auto___30045)){
args30042.push((arguments[i__27788__auto___30046]));

var G__30047 = (i__27788__auto___30046 + (1));
i__27788__auto___30046 = G__30047;
continue;
} else {
}
break;
}

var G__30044 = args30042.length;
switch (G__30044) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30042.length)].join('')));

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
var args30049 = [];
var len__27787__auto___30052 = arguments.length;
var i__27788__auto___30053 = (0);
while(true){
if((i__27788__auto___30053 < len__27787__auto___30052)){
args30049.push((arguments[i__27788__auto___30053]));

var G__30054 = (i__27788__auto___30053 + (1));
i__27788__auto___30053 = G__30054;
continue;
} else {
}
break;
}

var G__30051 = args30049.length;
switch (G__30051) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30049.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_30056 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_30056);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_30056,ret){
return (function (){
return fn1.call(null,val_30056);
});})(val_30056,ret))
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
var args30057 = [];
var len__27787__auto___30060 = arguments.length;
var i__27788__auto___30061 = (0);
while(true){
if((i__27788__auto___30061 < len__27787__auto___30060)){
args30057.push((arguments[i__27788__auto___30061]));

var G__30062 = (i__27788__auto___30061 + (1));
i__27788__auto___30061 = G__30062;
continue;
} else {
}
break;
}

var G__30059 = args30057.length;
switch (G__30059) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30057.length)].join('')));

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
var n__27597__auto___30064 = n;
var x_30065 = (0);
while(true){
if((x_30065 < n__27597__auto___30064)){
(a[x_30065] = (0));

var G__30066 = (x_30065 + (1));
x_30065 = G__30066;
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

var G__30067 = (i + (1));
i = G__30067;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async30071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30071 = (function (flag,meta30072){
this.flag = flag;
this.meta30072 = meta30072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_30073,meta30072__$1){
var self__ = this;
var _30073__$1 = this;
return (new cljs.core.async.t_cljs$core$async30071(self__.flag,meta30072__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_30073){
var self__ = this;
var _30073__$1 = this;
return self__.meta30072;
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta30072","meta30072",1804912815,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async30071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30071";

cljs.core.async.t_cljs$core$async30071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30071");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async30071 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async30071(flag__$1,meta30072){
return (new cljs.core.async.t_cljs$core$async30071(flag__$1,meta30072));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async30071(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async30077 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30077 = (function (flag,cb,meta30078){
this.flag = flag;
this.cb = cb;
this.meta30078 = meta30078;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30079,meta30078__$1){
var self__ = this;
var _30079__$1 = this;
return (new cljs.core.async.t_cljs$core$async30077(self__.flag,self__.cb,meta30078__$1));
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30079){
var self__ = this;
var _30079__$1 = this;
return self__.meta30078;
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async30077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async30077.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta30078","meta30078",314055616,null)], null);
});

cljs.core.async.t_cljs$core$async30077.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30077";

cljs.core.async.t_cljs$core$async30077.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async30077");
});

cljs.core.async.__GT_t_cljs$core$async30077 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async30077(flag__$1,cb__$1,meta30078){
return (new cljs.core.async.t_cljs$core$async30077(flag__$1,cb__$1,meta30078));
});

}

return (new cljs.core.async.t_cljs$core$async30077(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__30080_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30080_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__30081_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30081_SHARP_,port], null));
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
var G__30082 = (i + (1));
i = G__30082;
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
var len__27787__auto___30088 = arguments.length;
var i__27788__auto___30089 = (0);
while(true){
if((i__27788__auto___30089 < len__27787__auto___30088)){
args__27794__auto__.push((arguments[i__27788__auto___30089]));

var G__30090 = (i__27788__auto___30089 + (1));
i__27788__auto___30089 = G__30090;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((1) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27795__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__30085){
var map__30086 = p__30085;
var map__30086__$1 = ((((!((map__30086 == null)))?((((map__30086.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30086.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30086):map__30086);
var opts = map__30086__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq30083){
var G__30084 = cljs.core.first.call(null,seq30083);
var seq30083__$1 = cljs.core.next.call(null,seq30083);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30084,seq30083__$1);
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
var args30091 = [];
var len__27787__auto___30141 = arguments.length;
var i__27788__auto___30142 = (0);
while(true){
if((i__27788__auto___30142 < len__27787__auto___30141)){
args30091.push((arguments[i__27788__auto___30142]));

var G__30143 = (i__27788__auto___30142 + (1));
i__27788__auto___30142 = G__30143;
continue;
} else {
}
break;
}

var G__30093 = args30091.length;
switch (G__30093) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30091.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__29844__auto___30145 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___30145){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___30145){
return (function (state_30117){
var state_val_30118 = (state_30117[(1)]);
if((state_val_30118 === (7))){
var inst_30113 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30119_30146 = state_30117__$1;
(statearr_30119_30146[(2)] = inst_30113);

(statearr_30119_30146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (1))){
var state_30117__$1 = state_30117;
var statearr_30120_30147 = state_30117__$1;
(statearr_30120_30147[(2)] = null);

(statearr_30120_30147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (4))){
var inst_30096 = (state_30117[(7)]);
var inst_30096__$1 = (state_30117[(2)]);
var inst_30097 = (inst_30096__$1 == null);
var state_30117__$1 = (function (){var statearr_30121 = state_30117;
(statearr_30121[(7)] = inst_30096__$1);

return statearr_30121;
})();
if(cljs.core.truth_(inst_30097)){
var statearr_30122_30148 = state_30117__$1;
(statearr_30122_30148[(1)] = (5));

} else {
var statearr_30123_30149 = state_30117__$1;
(statearr_30123_30149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (13))){
var state_30117__$1 = state_30117;
var statearr_30124_30150 = state_30117__$1;
(statearr_30124_30150[(2)] = null);

(statearr_30124_30150[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (6))){
var inst_30096 = (state_30117[(7)]);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30117__$1,(11),to,inst_30096);
} else {
if((state_val_30118 === (3))){
var inst_30115 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30117__$1,inst_30115);
} else {
if((state_val_30118 === (12))){
var state_30117__$1 = state_30117;
var statearr_30125_30151 = state_30117__$1;
(statearr_30125_30151[(2)] = null);

(statearr_30125_30151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (2))){
var state_30117__$1 = state_30117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30117__$1,(4),from);
} else {
if((state_val_30118 === (11))){
var inst_30106 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
if(cljs.core.truth_(inst_30106)){
var statearr_30126_30152 = state_30117__$1;
(statearr_30126_30152[(1)] = (12));

} else {
var statearr_30127_30153 = state_30117__$1;
(statearr_30127_30153[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (9))){
var state_30117__$1 = state_30117;
var statearr_30128_30154 = state_30117__$1;
(statearr_30128_30154[(2)] = null);

(statearr_30128_30154[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (5))){
var state_30117__$1 = state_30117;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30129_30155 = state_30117__$1;
(statearr_30129_30155[(1)] = (8));

} else {
var statearr_30130_30156 = state_30117__$1;
(statearr_30130_30156[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (14))){
var inst_30111 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30131_30157 = state_30117__$1;
(statearr_30131_30157[(2)] = inst_30111);

(statearr_30131_30157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (10))){
var inst_30103 = (state_30117[(2)]);
var state_30117__$1 = state_30117;
var statearr_30132_30158 = state_30117__$1;
(statearr_30132_30158[(2)] = inst_30103);

(statearr_30132_30158[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30118 === (8))){
var inst_30100 = cljs.core.async.close_BANG_.call(null,to);
var state_30117__$1 = state_30117;
var statearr_30133_30159 = state_30117__$1;
(statearr_30133_30159[(2)] = inst_30100);

(statearr_30133_30159[(1)] = (10));


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
});})(c__29844__auto___30145))
;
return ((function (switch__29829__auto__,c__29844__auto___30145){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_30137 = [null,null,null,null,null,null,null,null];
(statearr_30137[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_30137[(1)] = (1));

return statearr_30137;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_30117){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30138){if((e30138 instanceof Object)){
var ex__29833__auto__ = e30138;
var statearr_30139_30160 = state_30117;
(statearr_30139_30160[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30138;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30161 = state_30117;
state_30117 = G__30161;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_30117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_30117);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___30145))
})();
var state__29846__auto__ = (function (){var statearr_30140 = f__29845__auto__.call(null);
(statearr_30140[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30145);

return statearr_30140;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___30145))
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
return (function (p__30349){
var vec__30350 = p__30349;
var v = cljs.core.nth.call(null,vec__30350,(0),null);
var p = cljs.core.nth.call(null,vec__30350,(1),null);
var job = vec__30350;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__29844__auto___30536 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results){
return (function (state_30357){
var state_val_30358 = (state_30357[(1)]);
if((state_val_30358 === (1))){
var state_30357__$1 = state_30357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30357__$1,(2),res,v);
} else {
if((state_val_30358 === (2))){
var inst_30354 = (state_30357[(2)]);
var inst_30355 = cljs.core.async.close_BANG_.call(null,res);
var state_30357__$1 = (function (){var statearr_30359 = state_30357;
(statearr_30359[(7)] = inst_30354);

return statearr_30359;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30357__$1,inst_30355);
} else {
return null;
}
}
});})(c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results))
;
return ((function (switch__29829__auto__,c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_30363 = [null,null,null,null,null,null,null,null];
(statearr_30363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__);

(statearr_30363[(1)] = (1));

return statearr_30363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1 = (function (state_30357){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30364){if((e30364 instanceof Object)){
var ex__29833__auto__ = e30364;
var statearr_30365_30537 = state_30357;
(statearr_30365_30537[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30538 = state_30357;
state_30357 = G__30538;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = function(state_30357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1.call(this,state_30357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results))
})();
var state__29846__auto__ = (function (){var statearr_30366 = f__29845__auto__.call(null);
(statearr_30366[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30536);

return statearr_30366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___30536,res,vec__30350,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__30367){
var vec__30368 = p__30367;
var v = cljs.core.nth.call(null,vec__30368,(0),null);
var p = cljs.core.nth.call(null,vec__30368,(1),null);
var job = vec__30368;
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
var n__27597__auto___30539 = n;
var __30540 = (0);
while(true){
if((__30540 < n__27597__auto___30539)){
var G__30371_30541 = type;
var G__30371_30542__$1 = (((G__30371_30541 instanceof cljs.core.Keyword))?G__30371_30541.fqn:null);
switch (G__30371_30542__$1) {
case "compute":
var c__29844__auto___30544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30540,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (__30540,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function (state_30384){
var state_val_30385 = (state_30384[(1)]);
if((state_val_30385 === (1))){
var state_30384__$1 = state_30384;
var statearr_30386_30545 = state_30384__$1;
(statearr_30386_30545[(2)] = null);

(statearr_30386_30545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (2))){
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30384__$1,(4),jobs);
} else {
if((state_val_30385 === (3))){
var inst_30382 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30384__$1,inst_30382);
} else {
if((state_val_30385 === (4))){
var inst_30374 = (state_30384[(2)]);
var inst_30375 = process.call(null,inst_30374);
var state_30384__$1 = state_30384;
if(cljs.core.truth_(inst_30375)){
var statearr_30387_30546 = state_30384__$1;
(statearr_30387_30546[(1)] = (5));

} else {
var statearr_30388_30547 = state_30384__$1;
(statearr_30388_30547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (5))){
var state_30384__$1 = state_30384;
var statearr_30389_30548 = state_30384__$1;
(statearr_30389_30548[(2)] = null);

(statearr_30389_30548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (6))){
var state_30384__$1 = state_30384;
var statearr_30390_30549 = state_30384__$1;
(statearr_30390_30549[(2)] = null);

(statearr_30390_30549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30385 === (7))){
var inst_30380 = (state_30384[(2)]);
var state_30384__$1 = state_30384;
var statearr_30391_30550 = state_30384__$1;
(statearr_30391_30550[(2)] = inst_30380);

(statearr_30391_30550[(1)] = (3));


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
});})(__30540,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
;
return ((function (__30540,switch__29829__auto__,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_30395 = [null,null,null,null,null,null,null];
(statearr_30395[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__);

(statearr_30395[(1)] = (1));

return statearr_30395;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1 = (function (state_30384){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30384);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30396){if((e30396 instanceof Object)){
var ex__29833__auto__ = e30396;
var statearr_30397_30551 = state_30384;
(statearr_30397_30551[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30384);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30396;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30552 = state_30384;
state_30384 = G__30552;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = function(state_30384){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1.call(this,state_30384);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__;
})()
;})(__30540,switch__29829__auto__,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
})();
var state__29846__auto__ = (function (){var statearr_30398 = f__29845__auto__.call(null);
(statearr_30398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30544);

return statearr_30398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(__30540,c__29844__auto___30544,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
);


break;
case "async":
var c__29844__auto___30553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__30540,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (__30540,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function (state_30411){
var state_val_30412 = (state_30411[(1)]);
if((state_val_30412 === (1))){
var state_30411__$1 = state_30411;
var statearr_30413_30554 = state_30411__$1;
(statearr_30413_30554[(2)] = null);

(statearr_30413_30554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (2))){
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30411__$1,(4),jobs);
} else {
if((state_val_30412 === (3))){
var inst_30409 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30411__$1,inst_30409);
} else {
if((state_val_30412 === (4))){
var inst_30401 = (state_30411[(2)]);
var inst_30402 = async.call(null,inst_30401);
var state_30411__$1 = state_30411;
if(cljs.core.truth_(inst_30402)){
var statearr_30414_30555 = state_30411__$1;
(statearr_30414_30555[(1)] = (5));

} else {
var statearr_30415_30556 = state_30411__$1;
(statearr_30415_30556[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (5))){
var state_30411__$1 = state_30411;
var statearr_30416_30557 = state_30411__$1;
(statearr_30416_30557[(2)] = null);

(statearr_30416_30557[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (6))){
var state_30411__$1 = state_30411;
var statearr_30417_30558 = state_30411__$1;
(statearr_30417_30558[(2)] = null);

(statearr_30417_30558[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30412 === (7))){
var inst_30407 = (state_30411[(2)]);
var state_30411__$1 = state_30411;
var statearr_30418_30559 = state_30411__$1;
(statearr_30418_30559[(2)] = inst_30407);

(statearr_30418_30559[(1)] = (3));


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
});})(__30540,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
;
return ((function (__30540,switch__29829__auto__,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_30422 = [null,null,null,null,null,null,null];
(statearr_30422[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__);

(statearr_30422[(1)] = (1));

return statearr_30422;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1 = (function (state_30411){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30423){if((e30423 instanceof Object)){
var ex__29833__auto__ = e30423;
var statearr_30424_30560 = state_30411;
(statearr_30424_30560[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30423;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30561 = state_30411;
state_30411 = G__30561;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = function(state_30411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1.call(this,state_30411);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__;
})()
;})(__30540,switch__29829__auto__,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
})();
var state__29846__auto__ = (function (){var statearr_30425 = f__29845__auto__.call(null);
(statearr_30425[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30553);

return statearr_30425;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(__30540,c__29844__auto___30553,G__30371_30541,G__30371_30542__$1,n__27597__auto___30539,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join('')));

}

var G__30562 = (__30540 + (1));
__30540 = G__30562;
continue;
} else {
}
break;
}

var c__29844__auto___30563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___30563,jobs,results,process,async){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___30563,jobs,results,process,async){
return (function (state_30447){
var state_val_30448 = (state_30447[(1)]);
if((state_val_30448 === (1))){
var state_30447__$1 = state_30447;
var statearr_30449_30564 = state_30447__$1;
(statearr_30449_30564[(2)] = null);

(statearr_30449_30564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (2))){
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30447__$1,(4),from);
} else {
if((state_val_30448 === (3))){
var inst_30445 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30447__$1,inst_30445);
} else {
if((state_val_30448 === (4))){
var inst_30428 = (state_30447[(7)]);
var inst_30428__$1 = (state_30447[(2)]);
var inst_30429 = (inst_30428__$1 == null);
var state_30447__$1 = (function (){var statearr_30450 = state_30447;
(statearr_30450[(7)] = inst_30428__$1);

return statearr_30450;
})();
if(cljs.core.truth_(inst_30429)){
var statearr_30451_30565 = state_30447__$1;
(statearr_30451_30565[(1)] = (5));

} else {
var statearr_30452_30566 = state_30447__$1;
(statearr_30452_30566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (5))){
var inst_30431 = cljs.core.async.close_BANG_.call(null,jobs);
var state_30447__$1 = state_30447;
var statearr_30453_30567 = state_30447__$1;
(statearr_30453_30567[(2)] = inst_30431);

(statearr_30453_30567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (6))){
var inst_30428 = (state_30447[(7)]);
var inst_30433 = (state_30447[(8)]);
var inst_30433__$1 = cljs.core.async.chan.call(null,(1));
var inst_30434 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30435 = [inst_30428,inst_30433__$1];
var inst_30436 = (new cljs.core.PersistentVector(null,2,(5),inst_30434,inst_30435,null));
var state_30447__$1 = (function (){var statearr_30454 = state_30447;
(statearr_30454[(8)] = inst_30433__$1);

return statearr_30454;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30447__$1,(8),jobs,inst_30436);
} else {
if((state_val_30448 === (7))){
var inst_30443 = (state_30447[(2)]);
var state_30447__$1 = state_30447;
var statearr_30455_30568 = state_30447__$1;
(statearr_30455_30568[(2)] = inst_30443);

(statearr_30455_30568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30448 === (8))){
var inst_30433 = (state_30447[(8)]);
var inst_30438 = (state_30447[(2)]);
var state_30447__$1 = (function (){var statearr_30456 = state_30447;
(statearr_30456[(9)] = inst_30438);

return statearr_30456;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30447__$1,(9),results,inst_30433);
} else {
if((state_val_30448 === (9))){
var inst_30440 = (state_30447[(2)]);
var state_30447__$1 = (function (){var statearr_30457 = state_30447;
(statearr_30457[(10)] = inst_30440);

return statearr_30457;
})();
var statearr_30458_30569 = state_30447__$1;
(statearr_30458_30569[(2)] = null);

(statearr_30458_30569[(1)] = (2));


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
});})(c__29844__auto___30563,jobs,results,process,async))
;
return ((function (switch__29829__auto__,c__29844__auto___30563,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_30462 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30462[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__);

(statearr_30462[(1)] = (1));

return statearr_30462;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1 = (function (state_30447){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30463){if((e30463 instanceof Object)){
var ex__29833__auto__ = e30463;
var statearr_30464_30570 = state_30447;
(statearr_30464_30570[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30463;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30571 = state_30447;
state_30447 = G__30571;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = function(state_30447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1.call(this,state_30447);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___30563,jobs,results,process,async))
})();
var state__29846__auto__ = (function (){var statearr_30465 = f__29845__auto__.call(null);
(statearr_30465[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30563);

return statearr_30465;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___30563,jobs,results,process,async))
);


var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,jobs,results,process,async){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,jobs,results,process,async){
return (function (state_30503){
var state_val_30504 = (state_30503[(1)]);
if((state_val_30504 === (7))){
var inst_30499 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30505_30572 = state_30503__$1;
(statearr_30505_30572[(2)] = inst_30499);

(statearr_30505_30572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (20))){
var state_30503__$1 = state_30503;
var statearr_30506_30573 = state_30503__$1;
(statearr_30506_30573[(2)] = null);

(statearr_30506_30573[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (1))){
var state_30503__$1 = state_30503;
var statearr_30507_30574 = state_30503__$1;
(statearr_30507_30574[(2)] = null);

(statearr_30507_30574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (4))){
var inst_30468 = (state_30503[(7)]);
var inst_30468__$1 = (state_30503[(2)]);
var inst_30469 = (inst_30468__$1 == null);
var state_30503__$1 = (function (){var statearr_30508 = state_30503;
(statearr_30508[(7)] = inst_30468__$1);

return statearr_30508;
})();
if(cljs.core.truth_(inst_30469)){
var statearr_30509_30575 = state_30503__$1;
(statearr_30509_30575[(1)] = (5));

} else {
var statearr_30510_30576 = state_30503__$1;
(statearr_30510_30576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (15))){
var inst_30481 = (state_30503[(8)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30503__$1,(18),to,inst_30481);
} else {
if((state_val_30504 === (21))){
var inst_30494 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30511_30577 = state_30503__$1;
(statearr_30511_30577[(2)] = inst_30494);

(statearr_30511_30577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (13))){
var inst_30496 = (state_30503[(2)]);
var state_30503__$1 = (function (){var statearr_30512 = state_30503;
(statearr_30512[(9)] = inst_30496);

return statearr_30512;
})();
var statearr_30513_30578 = state_30503__$1;
(statearr_30513_30578[(2)] = null);

(statearr_30513_30578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (6))){
var inst_30468 = (state_30503[(7)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(11),inst_30468);
} else {
if((state_val_30504 === (17))){
var inst_30489 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
if(cljs.core.truth_(inst_30489)){
var statearr_30514_30579 = state_30503__$1;
(statearr_30514_30579[(1)] = (19));

} else {
var statearr_30515_30580 = state_30503__$1;
(statearr_30515_30580[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (3))){
var inst_30501 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30503__$1,inst_30501);
} else {
if((state_val_30504 === (12))){
var inst_30478 = (state_30503[(10)]);
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(14),inst_30478);
} else {
if((state_val_30504 === (2))){
var state_30503__$1 = state_30503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30503__$1,(4),results);
} else {
if((state_val_30504 === (19))){
var state_30503__$1 = state_30503;
var statearr_30516_30581 = state_30503__$1;
(statearr_30516_30581[(2)] = null);

(statearr_30516_30581[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (11))){
var inst_30478 = (state_30503[(2)]);
var state_30503__$1 = (function (){var statearr_30517 = state_30503;
(statearr_30517[(10)] = inst_30478);

return statearr_30517;
})();
var statearr_30518_30582 = state_30503__$1;
(statearr_30518_30582[(2)] = null);

(statearr_30518_30582[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (9))){
var state_30503__$1 = state_30503;
var statearr_30519_30583 = state_30503__$1;
(statearr_30519_30583[(2)] = null);

(statearr_30519_30583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (5))){
var state_30503__$1 = state_30503;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30520_30584 = state_30503__$1;
(statearr_30520_30584[(1)] = (8));

} else {
var statearr_30521_30585 = state_30503__$1;
(statearr_30521_30585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (14))){
var inst_30481 = (state_30503[(8)]);
var inst_30483 = (state_30503[(11)]);
var inst_30481__$1 = (state_30503[(2)]);
var inst_30482 = (inst_30481__$1 == null);
var inst_30483__$1 = cljs.core.not.call(null,inst_30482);
var state_30503__$1 = (function (){var statearr_30522 = state_30503;
(statearr_30522[(8)] = inst_30481__$1);

(statearr_30522[(11)] = inst_30483__$1);

return statearr_30522;
})();
if(inst_30483__$1){
var statearr_30523_30586 = state_30503__$1;
(statearr_30523_30586[(1)] = (15));

} else {
var statearr_30524_30587 = state_30503__$1;
(statearr_30524_30587[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (16))){
var inst_30483 = (state_30503[(11)]);
var state_30503__$1 = state_30503;
var statearr_30525_30588 = state_30503__$1;
(statearr_30525_30588[(2)] = inst_30483);

(statearr_30525_30588[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (10))){
var inst_30475 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30526_30589 = state_30503__$1;
(statearr_30526_30589[(2)] = inst_30475);

(statearr_30526_30589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (18))){
var inst_30486 = (state_30503[(2)]);
var state_30503__$1 = state_30503;
var statearr_30527_30590 = state_30503__$1;
(statearr_30527_30590[(2)] = inst_30486);

(statearr_30527_30590[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30504 === (8))){
var inst_30472 = cljs.core.async.close_BANG_.call(null,to);
var state_30503__$1 = state_30503;
var statearr_30528_30591 = state_30503__$1;
(statearr_30528_30591[(2)] = inst_30472);

(statearr_30528_30591[(1)] = (10));


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
});})(c__29844__auto__,jobs,results,process,async))
;
return ((function (switch__29829__auto__,c__29844__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_30532 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__);

(statearr_30532[(1)] = (1));

return statearr_30532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1 = (function (state_30503){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30533){if((e30533 instanceof Object)){
var ex__29833__auto__ = e30533;
var statearr_30534_30592 = state_30503;
(statearr_30534_30592[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30593 = state_30503;
state_30503 = G__30593;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__ = function(state_30503){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1.call(this,state_30503);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,jobs,results,process,async))
})();
var state__29846__auto__ = (function (){var statearr_30535 = f__29845__auto__.call(null);
(statearr_30535[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_30535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,jobs,results,process,async))
);

return c__29844__auto__;
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
var args30594 = [];
var len__27787__auto___30597 = arguments.length;
var i__27788__auto___30598 = (0);
while(true){
if((i__27788__auto___30598 < len__27787__auto___30597)){
args30594.push((arguments[i__27788__auto___30598]));

var G__30599 = (i__27788__auto___30598 + (1));
i__27788__auto___30598 = G__30599;
continue;
} else {
}
break;
}

var G__30596 = args30594.length;
switch (G__30596) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30594.length)].join('')));

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
var args30601 = [];
var len__27787__auto___30604 = arguments.length;
var i__27788__auto___30605 = (0);
while(true){
if((i__27788__auto___30605 < len__27787__auto___30604)){
args30601.push((arguments[i__27788__auto___30605]));

var G__30606 = (i__27788__auto___30605 + (1));
i__27788__auto___30605 = G__30606;
continue;
} else {
}
break;
}

var G__30603 = args30601.length;
switch (G__30603) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30601.length)].join('')));

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
var args30608 = [];
var len__27787__auto___30661 = arguments.length;
var i__27788__auto___30662 = (0);
while(true){
if((i__27788__auto___30662 < len__27787__auto___30661)){
args30608.push((arguments[i__27788__auto___30662]));

var G__30663 = (i__27788__auto___30662 + (1));
i__27788__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var G__30610 = args30608.length;
switch (G__30610) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30608.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__29844__auto___30665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___30665,tc,fc){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___30665,tc,fc){
return (function (state_30636){
var state_val_30637 = (state_30636[(1)]);
if((state_val_30637 === (7))){
var inst_30632 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
var statearr_30638_30666 = state_30636__$1;
(statearr_30638_30666[(2)] = inst_30632);

(statearr_30638_30666[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (1))){
var state_30636__$1 = state_30636;
var statearr_30639_30667 = state_30636__$1;
(statearr_30639_30667[(2)] = null);

(statearr_30639_30667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (4))){
var inst_30613 = (state_30636[(7)]);
var inst_30613__$1 = (state_30636[(2)]);
var inst_30614 = (inst_30613__$1 == null);
var state_30636__$1 = (function (){var statearr_30640 = state_30636;
(statearr_30640[(7)] = inst_30613__$1);

return statearr_30640;
})();
if(cljs.core.truth_(inst_30614)){
var statearr_30641_30668 = state_30636__$1;
(statearr_30641_30668[(1)] = (5));

} else {
var statearr_30642_30669 = state_30636__$1;
(statearr_30642_30669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (13))){
var state_30636__$1 = state_30636;
var statearr_30643_30670 = state_30636__$1;
(statearr_30643_30670[(2)] = null);

(statearr_30643_30670[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (6))){
var inst_30613 = (state_30636[(7)]);
var inst_30619 = p.call(null,inst_30613);
var state_30636__$1 = state_30636;
if(cljs.core.truth_(inst_30619)){
var statearr_30644_30671 = state_30636__$1;
(statearr_30644_30671[(1)] = (9));

} else {
var statearr_30645_30672 = state_30636__$1;
(statearr_30645_30672[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (3))){
var inst_30634 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30636__$1,inst_30634);
} else {
if((state_val_30637 === (12))){
var state_30636__$1 = state_30636;
var statearr_30646_30673 = state_30636__$1;
(statearr_30646_30673[(2)] = null);

(statearr_30646_30673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (2))){
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30636__$1,(4),ch);
} else {
if((state_val_30637 === (11))){
var inst_30613 = (state_30636[(7)]);
var inst_30623 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30636__$1,(8),inst_30623,inst_30613);
} else {
if((state_val_30637 === (9))){
var state_30636__$1 = state_30636;
var statearr_30647_30674 = state_30636__$1;
(statearr_30647_30674[(2)] = tc);

(statearr_30647_30674[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (5))){
var inst_30616 = cljs.core.async.close_BANG_.call(null,tc);
var inst_30617 = cljs.core.async.close_BANG_.call(null,fc);
var state_30636__$1 = (function (){var statearr_30648 = state_30636;
(statearr_30648[(8)] = inst_30616);

return statearr_30648;
})();
var statearr_30649_30675 = state_30636__$1;
(statearr_30649_30675[(2)] = inst_30617);

(statearr_30649_30675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (14))){
var inst_30630 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
var statearr_30650_30676 = state_30636__$1;
(statearr_30650_30676[(2)] = inst_30630);

(statearr_30650_30676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (10))){
var state_30636__$1 = state_30636;
var statearr_30651_30677 = state_30636__$1;
(statearr_30651_30677[(2)] = fc);

(statearr_30651_30677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30637 === (8))){
var inst_30625 = (state_30636[(2)]);
var state_30636__$1 = state_30636;
if(cljs.core.truth_(inst_30625)){
var statearr_30652_30678 = state_30636__$1;
(statearr_30652_30678[(1)] = (12));

} else {
var statearr_30653_30679 = state_30636__$1;
(statearr_30653_30679[(1)] = (13));

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
});})(c__29844__auto___30665,tc,fc))
;
return ((function (switch__29829__auto__,c__29844__auto___30665,tc,fc){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_30657 = [null,null,null,null,null,null,null,null,null];
(statearr_30657[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_30657[(1)] = (1));

return statearr_30657;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_30636){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30636);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30658){if((e30658 instanceof Object)){
var ex__29833__auto__ = e30658;
var statearr_30659_30680 = state_30636;
(statearr_30659_30680[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30636);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30681 = state_30636;
state_30636 = G__30681;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_30636){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_30636);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___30665,tc,fc))
})();
var state__29846__auto__ = (function (){var statearr_30660 = f__29845__auto__.call(null);
(statearr_30660[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___30665);

return statearr_30660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___30665,tc,fc))
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
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_30745){
var state_val_30746 = (state_30745[(1)]);
if((state_val_30746 === (7))){
var inst_30741 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30747_30768 = state_30745__$1;
(statearr_30747_30768[(2)] = inst_30741);

(statearr_30747_30768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (1))){
var inst_30725 = init;
var state_30745__$1 = (function (){var statearr_30748 = state_30745;
(statearr_30748[(7)] = inst_30725);

return statearr_30748;
})();
var statearr_30749_30769 = state_30745__$1;
(statearr_30749_30769[(2)] = null);

(statearr_30749_30769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (4))){
var inst_30728 = (state_30745[(8)]);
var inst_30728__$1 = (state_30745[(2)]);
var inst_30729 = (inst_30728__$1 == null);
var state_30745__$1 = (function (){var statearr_30750 = state_30745;
(statearr_30750[(8)] = inst_30728__$1);

return statearr_30750;
})();
if(cljs.core.truth_(inst_30729)){
var statearr_30751_30770 = state_30745__$1;
(statearr_30751_30770[(1)] = (5));

} else {
var statearr_30752_30771 = state_30745__$1;
(statearr_30752_30771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (6))){
var inst_30728 = (state_30745[(8)]);
var inst_30725 = (state_30745[(7)]);
var inst_30732 = (state_30745[(9)]);
var inst_30732__$1 = f.call(null,inst_30725,inst_30728);
var inst_30733 = cljs.core.reduced_QMARK_.call(null,inst_30732__$1);
var state_30745__$1 = (function (){var statearr_30753 = state_30745;
(statearr_30753[(9)] = inst_30732__$1);

return statearr_30753;
})();
if(inst_30733){
var statearr_30754_30772 = state_30745__$1;
(statearr_30754_30772[(1)] = (8));

} else {
var statearr_30755_30773 = state_30745__$1;
(statearr_30755_30773[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (3))){
var inst_30743 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30745__$1,inst_30743);
} else {
if((state_val_30746 === (2))){
var state_30745__$1 = state_30745;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30745__$1,(4),ch);
} else {
if((state_val_30746 === (9))){
var inst_30732 = (state_30745[(9)]);
var inst_30725 = inst_30732;
var state_30745__$1 = (function (){var statearr_30756 = state_30745;
(statearr_30756[(7)] = inst_30725);

return statearr_30756;
})();
var statearr_30757_30774 = state_30745__$1;
(statearr_30757_30774[(2)] = null);

(statearr_30757_30774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (5))){
var inst_30725 = (state_30745[(7)]);
var state_30745__$1 = state_30745;
var statearr_30758_30775 = state_30745__$1;
(statearr_30758_30775[(2)] = inst_30725);

(statearr_30758_30775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (10))){
var inst_30739 = (state_30745[(2)]);
var state_30745__$1 = state_30745;
var statearr_30759_30776 = state_30745__$1;
(statearr_30759_30776[(2)] = inst_30739);

(statearr_30759_30776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30746 === (8))){
var inst_30732 = (state_30745[(9)]);
var inst_30735 = cljs.core.deref.call(null,inst_30732);
var state_30745__$1 = state_30745;
var statearr_30760_30777 = state_30745__$1;
(statearr_30760_30777[(2)] = inst_30735);

(statearr_30760_30777[(1)] = (10));


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
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__29830__auto__ = null;
var cljs$core$async$reduce_$_state_machine__29830__auto____0 = (function (){
var statearr_30764 = [null,null,null,null,null,null,null,null,null,null];
(statearr_30764[(0)] = cljs$core$async$reduce_$_state_machine__29830__auto__);

(statearr_30764[(1)] = (1));

return statearr_30764;
});
var cljs$core$async$reduce_$_state_machine__29830__auto____1 = (function (state_30745){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30745);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30765){if((e30765 instanceof Object)){
var ex__29833__auto__ = e30765;
var statearr_30766_30778 = state_30745;
(statearr_30766_30778[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30745);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30765;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30779 = state_30745;
state_30745 = G__30779;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__29830__auto__ = function(state_30745){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__29830__auto____1.call(this,state_30745);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__29830__auto____0;
cljs$core$async$reduce_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__29830__auto____1;
return cljs$core$async$reduce_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_30767 = f__29845__auto__.call(null);
(statearr_30767[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_30767;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__,f__$1){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__,f__$1){
return (function (state_30799){
var state_val_30800 = (state_30799[(1)]);
if((state_val_30800 === (1))){
var inst_30794 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30799__$1,(2),inst_30794);
} else {
if((state_val_30800 === (2))){
var inst_30796 = (state_30799[(2)]);
var inst_30797 = f__$1.call(null,inst_30796);
var state_30799__$1 = state_30799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30799__$1,inst_30797);
} else {
return null;
}
}
});})(c__29844__auto__,f__$1))
;
return ((function (switch__29829__auto__,c__29844__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__29830__auto__ = null;
var cljs$core$async$transduce_$_state_machine__29830__auto____0 = (function (){
var statearr_30804 = [null,null,null,null,null,null,null];
(statearr_30804[(0)] = cljs$core$async$transduce_$_state_machine__29830__auto__);

(statearr_30804[(1)] = (1));

return statearr_30804;
});
var cljs$core$async$transduce_$_state_machine__29830__auto____1 = (function (state_30799){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30805){if((e30805 instanceof Object)){
var ex__29833__auto__ = e30805;
var statearr_30806_30808 = state_30799;
(statearr_30806_30808[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30809 = state_30799;
state_30799 = G__30809;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__29830__auto__ = function(state_30799){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__29830__auto____1.call(this,state_30799);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__29830__auto____0;
cljs$core$async$transduce_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__29830__auto____1;
return cljs$core$async$transduce_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__,f__$1))
})();
var state__29846__auto__ = (function (){var statearr_30807 = f__29845__auto__.call(null);
(statearr_30807[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_30807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__,f__$1))
);

return c__29844__auto__;
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
var args30810 = [];
var len__27787__auto___30862 = arguments.length;
var i__27788__auto___30863 = (0);
while(true){
if((i__27788__auto___30863 < len__27787__auto___30862)){
args30810.push((arguments[i__27788__auto___30863]));

var G__30864 = (i__27788__auto___30863 + (1));
i__27788__auto___30863 = G__30864;
continue;
} else {
}
break;
}

var G__30812 = args30810.length;
switch (G__30812) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args30810.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_30837){
var state_val_30838 = (state_30837[(1)]);
if((state_val_30838 === (7))){
var inst_30819 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
var statearr_30839_30866 = state_30837__$1;
(statearr_30839_30866[(2)] = inst_30819);

(statearr_30839_30866[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (1))){
var inst_30813 = cljs.core.seq.call(null,coll);
var inst_30814 = inst_30813;
var state_30837__$1 = (function (){var statearr_30840 = state_30837;
(statearr_30840[(7)] = inst_30814);

return statearr_30840;
})();
var statearr_30841_30867 = state_30837__$1;
(statearr_30841_30867[(2)] = null);

(statearr_30841_30867[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (4))){
var inst_30814 = (state_30837[(7)]);
var inst_30817 = cljs.core.first.call(null,inst_30814);
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30837__$1,(7),ch,inst_30817);
} else {
if((state_val_30838 === (13))){
var inst_30831 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
var statearr_30842_30868 = state_30837__$1;
(statearr_30842_30868[(2)] = inst_30831);

(statearr_30842_30868[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (6))){
var inst_30822 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
if(cljs.core.truth_(inst_30822)){
var statearr_30843_30869 = state_30837__$1;
(statearr_30843_30869[(1)] = (8));

} else {
var statearr_30844_30870 = state_30837__$1;
(statearr_30844_30870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (3))){
var inst_30835 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30837__$1,inst_30835);
} else {
if((state_val_30838 === (12))){
var state_30837__$1 = state_30837;
var statearr_30845_30871 = state_30837__$1;
(statearr_30845_30871[(2)] = null);

(statearr_30845_30871[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (2))){
var inst_30814 = (state_30837[(7)]);
var state_30837__$1 = state_30837;
if(cljs.core.truth_(inst_30814)){
var statearr_30846_30872 = state_30837__$1;
(statearr_30846_30872[(1)] = (4));

} else {
var statearr_30847_30873 = state_30837__$1;
(statearr_30847_30873[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (11))){
var inst_30828 = cljs.core.async.close_BANG_.call(null,ch);
var state_30837__$1 = state_30837;
var statearr_30848_30874 = state_30837__$1;
(statearr_30848_30874[(2)] = inst_30828);

(statearr_30848_30874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (9))){
var state_30837__$1 = state_30837;
if(cljs.core.truth_(close_QMARK_)){
var statearr_30849_30875 = state_30837__$1;
(statearr_30849_30875[(1)] = (11));

} else {
var statearr_30850_30876 = state_30837__$1;
(statearr_30850_30876[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (5))){
var inst_30814 = (state_30837[(7)]);
var state_30837__$1 = state_30837;
var statearr_30851_30877 = state_30837__$1;
(statearr_30851_30877[(2)] = inst_30814);

(statearr_30851_30877[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (10))){
var inst_30833 = (state_30837[(2)]);
var state_30837__$1 = state_30837;
var statearr_30852_30878 = state_30837__$1;
(statearr_30852_30878[(2)] = inst_30833);

(statearr_30852_30878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30838 === (8))){
var inst_30814 = (state_30837[(7)]);
var inst_30824 = cljs.core.next.call(null,inst_30814);
var inst_30814__$1 = inst_30824;
var state_30837__$1 = (function (){var statearr_30853 = state_30837;
(statearr_30853[(7)] = inst_30814__$1);

return statearr_30853;
})();
var statearr_30854_30879 = state_30837__$1;
(statearr_30854_30879[(2)] = null);

(statearr_30854_30879[(1)] = (2));


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
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_30858 = [null,null,null,null,null,null,null,null];
(statearr_30858[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_30858[(1)] = (1));

return statearr_30858;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_30837){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_30837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e30859){if((e30859 instanceof Object)){
var ex__29833__auto__ = e30859;
var statearr_30860_30880 = state_30837;
(statearr_30860_30880[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30859;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30881 = state_30837;
state_30837 = G__30881;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_30837){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_30837);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_30861 = f__29845__auto__.call(null);
(statearr_30861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_30861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async31107 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31107 = (function (ch,cs,meta31108){
this.ch = ch;
this.cs = cs;
this.meta31108 = meta31108;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31109,meta31108__$1){
var self__ = this;
var _31109__$1 = this;
return (new cljs.core.async.t_cljs$core$async31107(self__.ch,self__.cs,meta31108__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31109){
var self__ = this;
var _31109__$1 = this;
return self__.meta31108;
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta31108","meta31108",-918816022,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async31107.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31107";

cljs.core.async.t_cljs$core$async31107.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31107");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async31107 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async31107(ch__$1,cs__$1,meta31108){
return (new cljs.core.async.t_cljs$core$async31107(ch__$1,cs__$1,meta31108));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async31107(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__29844__auto___31332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___31332,cs,m,dchan,dctr,done){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___31332,cs,m,dchan,dctr,done){
return (function (state_31244){
var state_val_31245 = (state_31244[(1)]);
if((state_val_31245 === (7))){
var inst_31240 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31246_31333 = state_31244__$1;
(statearr_31246_31333[(2)] = inst_31240);

(statearr_31246_31333[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (20))){
var inst_31143 = (state_31244[(7)]);
var inst_31155 = cljs.core.first.call(null,inst_31143);
var inst_31156 = cljs.core.nth.call(null,inst_31155,(0),null);
var inst_31157 = cljs.core.nth.call(null,inst_31155,(1),null);
var state_31244__$1 = (function (){var statearr_31247 = state_31244;
(statearr_31247[(8)] = inst_31156);

return statearr_31247;
})();
if(cljs.core.truth_(inst_31157)){
var statearr_31248_31334 = state_31244__$1;
(statearr_31248_31334[(1)] = (22));

} else {
var statearr_31249_31335 = state_31244__$1;
(statearr_31249_31335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (27))){
var inst_31187 = (state_31244[(9)]);
var inst_31112 = (state_31244[(10)]);
var inst_31192 = (state_31244[(11)]);
var inst_31185 = (state_31244[(12)]);
var inst_31192__$1 = cljs.core._nth.call(null,inst_31185,inst_31187);
var inst_31193 = cljs.core.async.put_BANG_.call(null,inst_31192__$1,inst_31112,done);
var state_31244__$1 = (function (){var statearr_31250 = state_31244;
(statearr_31250[(11)] = inst_31192__$1);

return statearr_31250;
})();
if(cljs.core.truth_(inst_31193)){
var statearr_31251_31336 = state_31244__$1;
(statearr_31251_31336[(1)] = (30));

} else {
var statearr_31252_31337 = state_31244__$1;
(statearr_31252_31337[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (1))){
var state_31244__$1 = state_31244;
var statearr_31253_31338 = state_31244__$1;
(statearr_31253_31338[(2)] = null);

(statearr_31253_31338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (24))){
var inst_31143 = (state_31244[(7)]);
var inst_31162 = (state_31244[(2)]);
var inst_31163 = cljs.core.next.call(null,inst_31143);
var inst_31121 = inst_31163;
var inst_31122 = null;
var inst_31123 = (0);
var inst_31124 = (0);
var state_31244__$1 = (function (){var statearr_31254 = state_31244;
(statearr_31254[(13)] = inst_31162);

(statearr_31254[(14)] = inst_31124);

(statearr_31254[(15)] = inst_31123);

(statearr_31254[(16)] = inst_31122);

(statearr_31254[(17)] = inst_31121);

return statearr_31254;
})();
var statearr_31255_31339 = state_31244__$1;
(statearr_31255_31339[(2)] = null);

(statearr_31255_31339[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (39))){
var state_31244__$1 = state_31244;
var statearr_31259_31340 = state_31244__$1;
(statearr_31259_31340[(2)] = null);

(statearr_31259_31340[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (4))){
var inst_31112 = (state_31244[(10)]);
var inst_31112__$1 = (state_31244[(2)]);
var inst_31113 = (inst_31112__$1 == null);
var state_31244__$1 = (function (){var statearr_31260 = state_31244;
(statearr_31260[(10)] = inst_31112__$1);

return statearr_31260;
})();
if(cljs.core.truth_(inst_31113)){
var statearr_31261_31341 = state_31244__$1;
(statearr_31261_31341[(1)] = (5));

} else {
var statearr_31262_31342 = state_31244__$1;
(statearr_31262_31342[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (15))){
var inst_31124 = (state_31244[(14)]);
var inst_31123 = (state_31244[(15)]);
var inst_31122 = (state_31244[(16)]);
var inst_31121 = (state_31244[(17)]);
var inst_31139 = (state_31244[(2)]);
var inst_31140 = (inst_31124 + (1));
var tmp31256 = inst_31123;
var tmp31257 = inst_31122;
var tmp31258 = inst_31121;
var inst_31121__$1 = tmp31258;
var inst_31122__$1 = tmp31257;
var inst_31123__$1 = tmp31256;
var inst_31124__$1 = inst_31140;
var state_31244__$1 = (function (){var statearr_31263 = state_31244;
(statearr_31263[(14)] = inst_31124__$1);

(statearr_31263[(15)] = inst_31123__$1);

(statearr_31263[(16)] = inst_31122__$1);

(statearr_31263[(18)] = inst_31139);

(statearr_31263[(17)] = inst_31121__$1);

return statearr_31263;
})();
var statearr_31264_31343 = state_31244__$1;
(statearr_31264_31343[(2)] = null);

(statearr_31264_31343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (21))){
var inst_31166 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31268_31344 = state_31244__$1;
(statearr_31268_31344[(2)] = inst_31166);

(statearr_31268_31344[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (31))){
var inst_31192 = (state_31244[(11)]);
var inst_31196 = done.call(null,null);
var inst_31197 = cljs.core.async.untap_STAR_.call(null,m,inst_31192);
var state_31244__$1 = (function (){var statearr_31269 = state_31244;
(statearr_31269[(19)] = inst_31196);

return statearr_31269;
})();
var statearr_31270_31345 = state_31244__$1;
(statearr_31270_31345[(2)] = inst_31197);

(statearr_31270_31345[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (32))){
var inst_31187 = (state_31244[(9)]);
var inst_31186 = (state_31244[(20)]);
var inst_31184 = (state_31244[(21)]);
var inst_31185 = (state_31244[(12)]);
var inst_31199 = (state_31244[(2)]);
var inst_31200 = (inst_31187 + (1));
var tmp31265 = inst_31186;
var tmp31266 = inst_31184;
var tmp31267 = inst_31185;
var inst_31184__$1 = tmp31266;
var inst_31185__$1 = tmp31267;
var inst_31186__$1 = tmp31265;
var inst_31187__$1 = inst_31200;
var state_31244__$1 = (function (){var statearr_31271 = state_31244;
(statearr_31271[(9)] = inst_31187__$1);

(statearr_31271[(20)] = inst_31186__$1);

(statearr_31271[(21)] = inst_31184__$1);

(statearr_31271[(22)] = inst_31199);

(statearr_31271[(12)] = inst_31185__$1);

return statearr_31271;
})();
var statearr_31272_31346 = state_31244__$1;
(statearr_31272_31346[(2)] = null);

(statearr_31272_31346[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (40))){
var inst_31212 = (state_31244[(23)]);
var inst_31216 = done.call(null,null);
var inst_31217 = cljs.core.async.untap_STAR_.call(null,m,inst_31212);
var state_31244__$1 = (function (){var statearr_31273 = state_31244;
(statearr_31273[(24)] = inst_31216);

return statearr_31273;
})();
var statearr_31274_31347 = state_31244__$1;
(statearr_31274_31347[(2)] = inst_31217);

(statearr_31274_31347[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (33))){
var inst_31203 = (state_31244[(25)]);
var inst_31205 = cljs.core.chunked_seq_QMARK_.call(null,inst_31203);
var state_31244__$1 = state_31244;
if(inst_31205){
var statearr_31275_31348 = state_31244__$1;
(statearr_31275_31348[(1)] = (36));

} else {
var statearr_31276_31349 = state_31244__$1;
(statearr_31276_31349[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (13))){
var inst_31133 = (state_31244[(26)]);
var inst_31136 = cljs.core.async.close_BANG_.call(null,inst_31133);
var state_31244__$1 = state_31244;
var statearr_31277_31350 = state_31244__$1;
(statearr_31277_31350[(2)] = inst_31136);

(statearr_31277_31350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (22))){
var inst_31156 = (state_31244[(8)]);
var inst_31159 = cljs.core.async.close_BANG_.call(null,inst_31156);
var state_31244__$1 = state_31244;
var statearr_31278_31351 = state_31244__$1;
(statearr_31278_31351[(2)] = inst_31159);

(statearr_31278_31351[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (36))){
var inst_31203 = (state_31244[(25)]);
var inst_31207 = cljs.core.chunk_first.call(null,inst_31203);
var inst_31208 = cljs.core.chunk_rest.call(null,inst_31203);
var inst_31209 = cljs.core.count.call(null,inst_31207);
var inst_31184 = inst_31208;
var inst_31185 = inst_31207;
var inst_31186 = inst_31209;
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31279 = state_31244;
(statearr_31279[(9)] = inst_31187);

(statearr_31279[(20)] = inst_31186);

(statearr_31279[(21)] = inst_31184);

(statearr_31279[(12)] = inst_31185);

return statearr_31279;
})();
var statearr_31280_31352 = state_31244__$1;
(statearr_31280_31352[(2)] = null);

(statearr_31280_31352[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (41))){
var inst_31203 = (state_31244[(25)]);
var inst_31219 = (state_31244[(2)]);
var inst_31220 = cljs.core.next.call(null,inst_31203);
var inst_31184 = inst_31220;
var inst_31185 = null;
var inst_31186 = (0);
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31281 = state_31244;
(statearr_31281[(9)] = inst_31187);

(statearr_31281[(27)] = inst_31219);

(statearr_31281[(20)] = inst_31186);

(statearr_31281[(21)] = inst_31184);

(statearr_31281[(12)] = inst_31185);

return statearr_31281;
})();
var statearr_31282_31353 = state_31244__$1;
(statearr_31282_31353[(2)] = null);

(statearr_31282_31353[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (43))){
var state_31244__$1 = state_31244;
var statearr_31283_31354 = state_31244__$1;
(statearr_31283_31354[(2)] = null);

(statearr_31283_31354[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (29))){
var inst_31228 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31284_31355 = state_31244__$1;
(statearr_31284_31355[(2)] = inst_31228);

(statearr_31284_31355[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (44))){
var inst_31237 = (state_31244[(2)]);
var state_31244__$1 = (function (){var statearr_31285 = state_31244;
(statearr_31285[(28)] = inst_31237);

return statearr_31285;
})();
var statearr_31286_31356 = state_31244__$1;
(statearr_31286_31356[(2)] = null);

(statearr_31286_31356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (6))){
var inst_31176 = (state_31244[(29)]);
var inst_31175 = cljs.core.deref.call(null,cs);
var inst_31176__$1 = cljs.core.keys.call(null,inst_31175);
var inst_31177 = cljs.core.count.call(null,inst_31176__$1);
var inst_31178 = cljs.core.reset_BANG_.call(null,dctr,inst_31177);
var inst_31183 = cljs.core.seq.call(null,inst_31176__$1);
var inst_31184 = inst_31183;
var inst_31185 = null;
var inst_31186 = (0);
var inst_31187 = (0);
var state_31244__$1 = (function (){var statearr_31287 = state_31244;
(statearr_31287[(9)] = inst_31187);

(statearr_31287[(20)] = inst_31186);

(statearr_31287[(21)] = inst_31184);

(statearr_31287[(29)] = inst_31176__$1);

(statearr_31287[(12)] = inst_31185);

(statearr_31287[(30)] = inst_31178);

return statearr_31287;
})();
var statearr_31288_31357 = state_31244__$1;
(statearr_31288_31357[(2)] = null);

(statearr_31288_31357[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (28))){
var inst_31203 = (state_31244[(25)]);
var inst_31184 = (state_31244[(21)]);
var inst_31203__$1 = cljs.core.seq.call(null,inst_31184);
var state_31244__$1 = (function (){var statearr_31289 = state_31244;
(statearr_31289[(25)] = inst_31203__$1);

return statearr_31289;
})();
if(inst_31203__$1){
var statearr_31290_31358 = state_31244__$1;
(statearr_31290_31358[(1)] = (33));

} else {
var statearr_31291_31359 = state_31244__$1;
(statearr_31291_31359[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (25))){
var inst_31187 = (state_31244[(9)]);
var inst_31186 = (state_31244[(20)]);
var inst_31189 = (inst_31187 < inst_31186);
var inst_31190 = inst_31189;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31190)){
var statearr_31292_31360 = state_31244__$1;
(statearr_31292_31360[(1)] = (27));

} else {
var statearr_31293_31361 = state_31244__$1;
(statearr_31293_31361[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (34))){
var state_31244__$1 = state_31244;
var statearr_31294_31362 = state_31244__$1;
(statearr_31294_31362[(2)] = null);

(statearr_31294_31362[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (17))){
var state_31244__$1 = state_31244;
var statearr_31295_31363 = state_31244__$1;
(statearr_31295_31363[(2)] = null);

(statearr_31295_31363[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (3))){
var inst_31242 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31244__$1,inst_31242);
} else {
if((state_val_31245 === (12))){
var inst_31171 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31296_31364 = state_31244__$1;
(statearr_31296_31364[(2)] = inst_31171);

(statearr_31296_31364[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (2))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31244__$1,(4),ch);
} else {
if((state_val_31245 === (23))){
var state_31244__$1 = state_31244;
var statearr_31297_31365 = state_31244__$1;
(statearr_31297_31365[(2)] = null);

(statearr_31297_31365[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (35))){
var inst_31226 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31298_31366 = state_31244__$1;
(statearr_31298_31366[(2)] = inst_31226);

(statearr_31298_31366[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (19))){
var inst_31143 = (state_31244[(7)]);
var inst_31147 = cljs.core.chunk_first.call(null,inst_31143);
var inst_31148 = cljs.core.chunk_rest.call(null,inst_31143);
var inst_31149 = cljs.core.count.call(null,inst_31147);
var inst_31121 = inst_31148;
var inst_31122 = inst_31147;
var inst_31123 = inst_31149;
var inst_31124 = (0);
var state_31244__$1 = (function (){var statearr_31299 = state_31244;
(statearr_31299[(14)] = inst_31124);

(statearr_31299[(15)] = inst_31123);

(statearr_31299[(16)] = inst_31122);

(statearr_31299[(17)] = inst_31121);

return statearr_31299;
})();
var statearr_31300_31367 = state_31244__$1;
(statearr_31300_31367[(2)] = null);

(statearr_31300_31367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (11))){
var inst_31143 = (state_31244[(7)]);
var inst_31121 = (state_31244[(17)]);
var inst_31143__$1 = cljs.core.seq.call(null,inst_31121);
var state_31244__$1 = (function (){var statearr_31301 = state_31244;
(statearr_31301[(7)] = inst_31143__$1);

return statearr_31301;
})();
if(inst_31143__$1){
var statearr_31302_31368 = state_31244__$1;
(statearr_31302_31368[(1)] = (16));

} else {
var statearr_31303_31369 = state_31244__$1;
(statearr_31303_31369[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (9))){
var inst_31173 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31304_31370 = state_31244__$1;
(statearr_31304_31370[(2)] = inst_31173);

(statearr_31304_31370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (5))){
var inst_31119 = cljs.core.deref.call(null,cs);
var inst_31120 = cljs.core.seq.call(null,inst_31119);
var inst_31121 = inst_31120;
var inst_31122 = null;
var inst_31123 = (0);
var inst_31124 = (0);
var state_31244__$1 = (function (){var statearr_31305 = state_31244;
(statearr_31305[(14)] = inst_31124);

(statearr_31305[(15)] = inst_31123);

(statearr_31305[(16)] = inst_31122);

(statearr_31305[(17)] = inst_31121);

return statearr_31305;
})();
var statearr_31306_31371 = state_31244__$1;
(statearr_31306_31371[(2)] = null);

(statearr_31306_31371[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (14))){
var state_31244__$1 = state_31244;
var statearr_31307_31372 = state_31244__$1;
(statearr_31307_31372[(2)] = null);

(statearr_31307_31372[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (45))){
var inst_31234 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31308_31373 = state_31244__$1;
(statearr_31308_31373[(2)] = inst_31234);

(statearr_31308_31373[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (26))){
var inst_31176 = (state_31244[(29)]);
var inst_31230 = (state_31244[(2)]);
var inst_31231 = cljs.core.seq.call(null,inst_31176);
var state_31244__$1 = (function (){var statearr_31309 = state_31244;
(statearr_31309[(31)] = inst_31230);

return statearr_31309;
})();
if(inst_31231){
var statearr_31310_31374 = state_31244__$1;
(statearr_31310_31374[(1)] = (42));

} else {
var statearr_31311_31375 = state_31244__$1;
(statearr_31311_31375[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (16))){
var inst_31143 = (state_31244[(7)]);
var inst_31145 = cljs.core.chunked_seq_QMARK_.call(null,inst_31143);
var state_31244__$1 = state_31244;
if(inst_31145){
var statearr_31312_31376 = state_31244__$1;
(statearr_31312_31376[(1)] = (19));

} else {
var statearr_31313_31377 = state_31244__$1;
(statearr_31313_31377[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (38))){
var inst_31223 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31314_31378 = state_31244__$1;
(statearr_31314_31378[(2)] = inst_31223);

(statearr_31314_31378[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (30))){
var state_31244__$1 = state_31244;
var statearr_31315_31379 = state_31244__$1;
(statearr_31315_31379[(2)] = null);

(statearr_31315_31379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (10))){
var inst_31124 = (state_31244[(14)]);
var inst_31122 = (state_31244[(16)]);
var inst_31132 = cljs.core._nth.call(null,inst_31122,inst_31124);
var inst_31133 = cljs.core.nth.call(null,inst_31132,(0),null);
var inst_31134 = cljs.core.nth.call(null,inst_31132,(1),null);
var state_31244__$1 = (function (){var statearr_31316 = state_31244;
(statearr_31316[(26)] = inst_31133);

return statearr_31316;
})();
if(cljs.core.truth_(inst_31134)){
var statearr_31317_31380 = state_31244__$1;
(statearr_31317_31380[(1)] = (13));

} else {
var statearr_31318_31381 = state_31244__$1;
(statearr_31318_31381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (18))){
var inst_31169 = (state_31244[(2)]);
var state_31244__$1 = state_31244;
var statearr_31319_31382 = state_31244__$1;
(statearr_31319_31382[(2)] = inst_31169);

(statearr_31319_31382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (42))){
var state_31244__$1 = state_31244;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31244__$1,(45),dchan);
} else {
if((state_val_31245 === (37))){
var inst_31212 = (state_31244[(23)]);
var inst_31203 = (state_31244[(25)]);
var inst_31112 = (state_31244[(10)]);
var inst_31212__$1 = cljs.core.first.call(null,inst_31203);
var inst_31213 = cljs.core.async.put_BANG_.call(null,inst_31212__$1,inst_31112,done);
var state_31244__$1 = (function (){var statearr_31320 = state_31244;
(statearr_31320[(23)] = inst_31212__$1);

return statearr_31320;
})();
if(cljs.core.truth_(inst_31213)){
var statearr_31321_31383 = state_31244__$1;
(statearr_31321_31383[(1)] = (39));

} else {
var statearr_31322_31384 = state_31244__$1;
(statearr_31322_31384[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31245 === (8))){
var inst_31124 = (state_31244[(14)]);
var inst_31123 = (state_31244[(15)]);
var inst_31126 = (inst_31124 < inst_31123);
var inst_31127 = inst_31126;
var state_31244__$1 = state_31244;
if(cljs.core.truth_(inst_31127)){
var statearr_31323_31385 = state_31244__$1;
(statearr_31323_31385[(1)] = (10));

} else {
var statearr_31324_31386 = state_31244__$1;
(statearr_31324_31386[(1)] = (11));

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
});})(c__29844__auto___31332,cs,m,dchan,dctr,done))
;
return ((function (switch__29829__auto__,c__29844__auto___31332,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__29830__auto__ = null;
var cljs$core$async$mult_$_state_machine__29830__auto____0 = (function (){
var statearr_31328 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31328[(0)] = cljs$core$async$mult_$_state_machine__29830__auto__);

(statearr_31328[(1)] = (1));

return statearr_31328;
});
var cljs$core$async$mult_$_state_machine__29830__auto____1 = (function (state_31244){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_31244);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e31329){if((e31329 instanceof Object)){
var ex__29833__auto__ = e31329;
var statearr_31330_31387 = state_31244;
(statearr_31330_31387[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31244);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31388 = state_31244;
state_31244 = G__31388;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__29830__auto__ = function(state_31244){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__29830__auto____1.call(this,state_31244);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__29830__auto____0;
cljs$core$async$mult_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__29830__auto____1;
return cljs$core$async$mult_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___31332,cs,m,dchan,dctr,done))
})();
var state__29846__auto__ = (function (){var statearr_31331 = f__29845__auto__.call(null);
(statearr_31331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___31332);

return statearr_31331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___31332,cs,m,dchan,dctr,done))
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
var args31389 = [];
var len__27787__auto___31392 = arguments.length;
var i__27788__auto___31393 = (0);
while(true){
if((i__27788__auto___31393 < len__27787__auto___31392)){
args31389.push((arguments[i__27788__auto___31393]));

var G__31394 = (i__27788__auto___31393 + (1));
i__27788__auto___31393 = G__31394;
continue;
} else {
}
break;
}

var G__31391 = args31389.length;
switch (G__31391) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31389.length)].join('')));

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
var len__27787__auto___31406 = arguments.length;
var i__27788__auto___31407 = (0);
while(true){
if((i__27788__auto___31407 < len__27787__auto___31406)){
args__27794__auto__.push((arguments[i__27788__auto___31407]));

var G__31408 = (i__27788__auto___31407 + (1));
i__27788__auto___31407 = G__31408;
continue;
} else {
}
break;
}

var argseq__27795__auto__ = ((((3) < args__27794__auto__.length))?(new cljs.core.IndexedSeq(args__27794__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__27795__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__31400){
var map__31401 = p__31400;
var map__31401__$1 = ((((!((map__31401 == null)))?((((map__31401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31401.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31401):map__31401);
var opts = map__31401__$1;
var statearr_31403_31409 = state;
(statearr_31403_31409[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__31401,map__31401__$1,opts){
return (function (val){
var statearr_31404_31410 = state;
(statearr_31404_31410[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__31401,map__31401__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_31405_31411 = state;
(statearr_31405_31411[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq31396){
var G__31397 = cljs.core.first.call(null,seq31396);
var seq31396__$1 = cljs.core.next.call(null,seq31396);
var G__31398 = cljs.core.first.call(null,seq31396__$1);
var seq31396__$2 = cljs.core.next.call(null,seq31396__$1);
var G__31399 = cljs.core.first.call(null,seq31396__$2);
var seq31396__$3 = cljs.core.next.call(null,seq31396__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31397,G__31398,G__31399,seq31396__$3);
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
if(typeof cljs.core.async.t_cljs$core$async31579 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31579 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta31580){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta31580 = meta31580;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31581,meta31580__$1){
var self__ = this;
var _31581__$1 = this;
return (new cljs.core.async.t_cljs$core$async31579(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta31580__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31581){
var self__ = this;
var _31581__$1 = this;
return self__.meta31580;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async31579.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta31580","meta31580",1634363732,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async31579.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31579";

cljs.core.async.t_cljs$core$async31579.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31579");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async31579 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async31579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31580){
return (new cljs.core.async.t_cljs$core$async31579(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta31580));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async31579(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29844__auto___31746 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_31683){
var state_val_31684 = (state_31683[(1)]);
if((state_val_31684 === (7))){
var inst_31598 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31685_31747 = state_31683__$1;
(statearr_31685_31747[(2)] = inst_31598);

(statearr_31685_31747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (20))){
var inst_31610 = (state_31683[(7)]);
var state_31683__$1 = state_31683;
var statearr_31686_31748 = state_31683__$1;
(statearr_31686_31748[(2)] = inst_31610);

(statearr_31686_31748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (27))){
var state_31683__$1 = state_31683;
var statearr_31687_31749 = state_31683__$1;
(statearr_31687_31749[(2)] = null);

(statearr_31687_31749[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (1))){
var inst_31585 = (state_31683[(8)]);
var inst_31585__$1 = calc_state.call(null);
var inst_31587 = (inst_31585__$1 == null);
var inst_31588 = cljs.core.not.call(null,inst_31587);
var state_31683__$1 = (function (){var statearr_31688 = state_31683;
(statearr_31688[(8)] = inst_31585__$1);

return statearr_31688;
})();
if(inst_31588){
var statearr_31689_31750 = state_31683__$1;
(statearr_31689_31750[(1)] = (2));

} else {
var statearr_31690_31751 = state_31683__$1;
(statearr_31690_31751[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (24))){
var inst_31657 = (state_31683[(9)]);
var inst_31634 = (state_31683[(10)]);
var inst_31643 = (state_31683[(11)]);
var inst_31657__$1 = inst_31634.call(null,inst_31643);
var state_31683__$1 = (function (){var statearr_31691 = state_31683;
(statearr_31691[(9)] = inst_31657__$1);

return statearr_31691;
})();
if(cljs.core.truth_(inst_31657__$1)){
var statearr_31692_31752 = state_31683__$1;
(statearr_31692_31752[(1)] = (29));

} else {
var statearr_31693_31753 = state_31683__$1;
(statearr_31693_31753[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (4))){
var inst_31601 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31601)){
var statearr_31694_31754 = state_31683__$1;
(statearr_31694_31754[(1)] = (8));

} else {
var statearr_31695_31755 = state_31683__$1;
(statearr_31695_31755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (15))){
var inst_31628 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31628)){
var statearr_31696_31756 = state_31683__$1;
(statearr_31696_31756[(1)] = (19));

} else {
var statearr_31697_31757 = state_31683__$1;
(statearr_31697_31757[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (21))){
var inst_31633 = (state_31683[(12)]);
var inst_31633__$1 = (state_31683[(2)]);
var inst_31634 = cljs.core.get.call(null,inst_31633__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31635 = cljs.core.get.call(null,inst_31633__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31636 = cljs.core.get.call(null,inst_31633__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_31683__$1 = (function (){var statearr_31698 = state_31683;
(statearr_31698[(13)] = inst_31635);

(statearr_31698[(10)] = inst_31634);

(statearr_31698[(12)] = inst_31633__$1);

return statearr_31698;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_31683__$1,(22),inst_31636);
} else {
if((state_val_31684 === (31))){
var inst_31665 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31665)){
var statearr_31699_31758 = state_31683__$1;
(statearr_31699_31758[(1)] = (32));

} else {
var statearr_31700_31759 = state_31683__$1;
(statearr_31700_31759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (32))){
var inst_31642 = (state_31683[(14)]);
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31683__$1,(35),out,inst_31642);
} else {
if((state_val_31684 === (33))){
var inst_31633 = (state_31683[(12)]);
var inst_31610 = inst_31633;
var state_31683__$1 = (function (){var statearr_31701 = state_31683;
(statearr_31701[(7)] = inst_31610);

return statearr_31701;
})();
var statearr_31702_31760 = state_31683__$1;
(statearr_31702_31760[(2)] = null);

(statearr_31702_31760[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (13))){
var inst_31610 = (state_31683[(7)]);
var inst_31617 = inst_31610.cljs$lang$protocol_mask$partition0$;
var inst_31618 = (inst_31617 & (64));
var inst_31619 = inst_31610.cljs$core$ISeq$;
var inst_31620 = (cljs.core.PROTOCOL_SENTINEL === inst_31619);
var inst_31621 = (inst_31618) || (inst_31620);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31621)){
var statearr_31703_31761 = state_31683__$1;
(statearr_31703_31761[(1)] = (16));

} else {
var statearr_31704_31762 = state_31683__$1;
(statearr_31704_31762[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (22))){
var inst_31642 = (state_31683[(14)]);
var inst_31643 = (state_31683[(11)]);
var inst_31641 = (state_31683[(2)]);
var inst_31642__$1 = cljs.core.nth.call(null,inst_31641,(0),null);
var inst_31643__$1 = cljs.core.nth.call(null,inst_31641,(1),null);
var inst_31644 = (inst_31642__$1 == null);
var inst_31645 = cljs.core._EQ_.call(null,inst_31643__$1,change);
var inst_31646 = (inst_31644) || (inst_31645);
var state_31683__$1 = (function (){var statearr_31705 = state_31683;
(statearr_31705[(14)] = inst_31642__$1);

(statearr_31705[(11)] = inst_31643__$1);

return statearr_31705;
})();
if(cljs.core.truth_(inst_31646)){
var statearr_31706_31763 = state_31683__$1;
(statearr_31706_31763[(1)] = (23));

} else {
var statearr_31707_31764 = state_31683__$1;
(statearr_31707_31764[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (36))){
var inst_31633 = (state_31683[(12)]);
var inst_31610 = inst_31633;
var state_31683__$1 = (function (){var statearr_31708 = state_31683;
(statearr_31708[(7)] = inst_31610);

return statearr_31708;
})();
var statearr_31709_31765 = state_31683__$1;
(statearr_31709_31765[(2)] = null);

(statearr_31709_31765[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (29))){
var inst_31657 = (state_31683[(9)]);
var state_31683__$1 = state_31683;
var statearr_31710_31766 = state_31683__$1;
(statearr_31710_31766[(2)] = inst_31657);

(statearr_31710_31766[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (6))){
var state_31683__$1 = state_31683;
var statearr_31711_31767 = state_31683__$1;
(statearr_31711_31767[(2)] = false);

(statearr_31711_31767[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (28))){
var inst_31653 = (state_31683[(2)]);
var inst_31654 = calc_state.call(null);
var inst_31610 = inst_31654;
var state_31683__$1 = (function (){var statearr_31712 = state_31683;
(statearr_31712[(7)] = inst_31610);

(statearr_31712[(15)] = inst_31653);

return statearr_31712;
})();
var statearr_31713_31768 = state_31683__$1;
(statearr_31713_31768[(2)] = null);

(statearr_31713_31768[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (25))){
var inst_31679 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31714_31769 = state_31683__$1;
(statearr_31714_31769[(2)] = inst_31679);

(statearr_31714_31769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (34))){
var inst_31677 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31715_31770 = state_31683__$1;
(statearr_31715_31770[(2)] = inst_31677);

(statearr_31715_31770[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (17))){
var state_31683__$1 = state_31683;
var statearr_31716_31771 = state_31683__$1;
(statearr_31716_31771[(2)] = false);

(statearr_31716_31771[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (3))){
var state_31683__$1 = state_31683;
var statearr_31717_31772 = state_31683__$1;
(statearr_31717_31772[(2)] = false);

(statearr_31717_31772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (12))){
var inst_31681 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31683__$1,inst_31681);
} else {
if((state_val_31684 === (2))){
var inst_31585 = (state_31683[(8)]);
var inst_31590 = inst_31585.cljs$lang$protocol_mask$partition0$;
var inst_31591 = (inst_31590 & (64));
var inst_31592 = inst_31585.cljs$core$ISeq$;
var inst_31593 = (cljs.core.PROTOCOL_SENTINEL === inst_31592);
var inst_31594 = (inst_31591) || (inst_31593);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31594)){
var statearr_31718_31773 = state_31683__$1;
(statearr_31718_31773[(1)] = (5));

} else {
var statearr_31719_31774 = state_31683__$1;
(statearr_31719_31774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (23))){
var inst_31642 = (state_31683[(14)]);
var inst_31648 = (inst_31642 == null);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31648)){
var statearr_31720_31775 = state_31683__$1;
(statearr_31720_31775[(1)] = (26));

} else {
var statearr_31721_31776 = state_31683__$1;
(statearr_31721_31776[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (35))){
var inst_31668 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
if(cljs.core.truth_(inst_31668)){
var statearr_31722_31777 = state_31683__$1;
(statearr_31722_31777[(1)] = (36));

} else {
var statearr_31723_31778 = state_31683__$1;
(statearr_31723_31778[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (19))){
var inst_31610 = (state_31683[(7)]);
var inst_31630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31610);
var state_31683__$1 = state_31683;
var statearr_31724_31779 = state_31683__$1;
(statearr_31724_31779[(2)] = inst_31630);

(statearr_31724_31779[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (11))){
var inst_31610 = (state_31683[(7)]);
var inst_31614 = (inst_31610 == null);
var inst_31615 = cljs.core.not.call(null,inst_31614);
var state_31683__$1 = state_31683;
if(inst_31615){
var statearr_31725_31780 = state_31683__$1;
(statearr_31725_31780[(1)] = (13));

} else {
var statearr_31726_31781 = state_31683__$1;
(statearr_31726_31781[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (9))){
var inst_31585 = (state_31683[(8)]);
var state_31683__$1 = state_31683;
var statearr_31727_31782 = state_31683__$1;
(statearr_31727_31782[(2)] = inst_31585);

(statearr_31727_31782[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (5))){
var state_31683__$1 = state_31683;
var statearr_31728_31783 = state_31683__$1;
(statearr_31728_31783[(2)] = true);

(statearr_31728_31783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (14))){
var state_31683__$1 = state_31683;
var statearr_31729_31784 = state_31683__$1;
(statearr_31729_31784[(2)] = false);

(statearr_31729_31784[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (26))){
var inst_31643 = (state_31683[(11)]);
var inst_31650 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31643);
var state_31683__$1 = state_31683;
var statearr_31730_31785 = state_31683__$1;
(statearr_31730_31785[(2)] = inst_31650);

(statearr_31730_31785[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (16))){
var state_31683__$1 = state_31683;
var statearr_31731_31786 = state_31683__$1;
(statearr_31731_31786[(2)] = true);

(statearr_31731_31786[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (38))){
var inst_31673 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31732_31787 = state_31683__$1;
(statearr_31732_31787[(2)] = inst_31673);

(statearr_31732_31787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (30))){
var inst_31635 = (state_31683[(13)]);
var inst_31634 = (state_31683[(10)]);
var inst_31643 = (state_31683[(11)]);
var inst_31660 = cljs.core.empty_QMARK_.call(null,inst_31634);
var inst_31661 = inst_31635.call(null,inst_31643);
var inst_31662 = cljs.core.not.call(null,inst_31661);
var inst_31663 = (inst_31660) && (inst_31662);
var state_31683__$1 = state_31683;
var statearr_31733_31788 = state_31683__$1;
(statearr_31733_31788[(2)] = inst_31663);

(statearr_31733_31788[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (10))){
var inst_31585 = (state_31683[(8)]);
var inst_31606 = (state_31683[(2)]);
var inst_31607 = cljs.core.get.call(null,inst_31606,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_31608 = cljs.core.get.call(null,inst_31606,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_31609 = cljs.core.get.call(null,inst_31606,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_31610 = inst_31585;
var state_31683__$1 = (function (){var statearr_31734 = state_31683;
(statearr_31734[(7)] = inst_31610);

(statearr_31734[(16)] = inst_31607);

(statearr_31734[(17)] = inst_31609);

(statearr_31734[(18)] = inst_31608);

return statearr_31734;
})();
var statearr_31735_31789 = state_31683__$1;
(statearr_31735_31789[(2)] = null);

(statearr_31735_31789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (18))){
var inst_31625 = (state_31683[(2)]);
var state_31683__$1 = state_31683;
var statearr_31736_31790 = state_31683__$1;
(statearr_31736_31790[(2)] = inst_31625);

(statearr_31736_31790[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (37))){
var state_31683__$1 = state_31683;
var statearr_31737_31791 = state_31683__$1;
(statearr_31737_31791[(2)] = null);

(statearr_31737_31791[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31684 === (8))){
var inst_31585 = (state_31683[(8)]);
var inst_31603 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31585);
var state_31683__$1 = state_31683;
var statearr_31738_31792 = state_31683__$1;
(statearr_31738_31792[(2)] = inst_31603);

(statearr_31738_31792[(1)] = (10));


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
});})(c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__29829__auto__,c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__29830__auto__ = null;
var cljs$core$async$mix_$_state_machine__29830__auto____0 = (function (){
var statearr_31742 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31742[(0)] = cljs$core$async$mix_$_state_machine__29830__auto__);

(statearr_31742[(1)] = (1));

return statearr_31742;
});
var cljs$core$async$mix_$_state_machine__29830__auto____1 = (function (state_31683){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_31683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e31743){if((e31743 instanceof Object)){
var ex__29833__auto__ = e31743;
var statearr_31744_31793 = state_31683;
(statearr_31744_31793[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31743;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31794 = state_31683;
state_31683 = G__31794;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__29830__auto__ = function(state_31683){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__29830__auto____1.call(this,state_31683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__29830__auto____0;
cljs$core$async$mix_$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__29830__auto____1;
return cljs$core$async$mix_$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__29846__auto__ = (function (){var statearr_31745 = f__29845__auto__.call(null);
(statearr_31745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___31746);

return statearr_31745;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___31746,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args31795 = [];
var len__27787__auto___31798 = arguments.length;
var i__27788__auto___31799 = (0);
while(true){
if((i__27788__auto___31799 < len__27787__auto___31798)){
args31795.push((arguments[i__27788__auto___31799]));

var G__31800 = (i__27788__auto___31799 + (1));
i__27788__auto___31799 = G__31800;
continue;
} else {
}
break;
}

var G__31797 = args31795.length;
switch (G__31797) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31795.length)].join('')));

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
var args31803 = [];
var len__27787__auto___31928 = arguments.length;
var i__27788__auto___31929 = (0);
while(true){
if((i__27788__auto___31929 < len__27787__auto___31928)){
args31803.push((arguments[i__27788__auto___31929]));

var G__31930 = (i__27788__auto___31929 + (1));
i__27788__auto___31929 = G__31930;
continue;
} else {
}
break;
}

var G__31805 = args31803.length;
switch (G__31805) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31803.length)].join('')));

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
return (function (p1__31802_SHARP_){
if(cljs.core.truth_(p1__31802_SHARP_.call(null,topic))){
return p1__31802_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__31802_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__26674__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async31806 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31806 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta31807){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta31807 = meta31807;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_31808,meta31807__$1){
var self__ = this;
var _31808__$1 = this;
return (new cljs.core.async.t_cljs$core$async31806(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta31807__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_31808){
var self__ = this;
var _31808__$1 = this;
return self__.meta31807;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta31807","meta31807",-1649926197,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async31806.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async31806.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31806";

cljs.core.async.t_cljs$core$async31806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async31806");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async31806 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async31806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31807){
return (new cljs.core.async.t_cljs$core$async31806(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta31807));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async31806(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__29844__auto___31932 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___31932,mults,ensure_mult,p){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___31932,mults,ensure_mult,p){
return (function (state_31880){
var state_val_31881 = (state_31880[(1)]);
if((state_val_31881 === (7))){
var inst_31876 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31882_31933 = state_31880__$1;
(statearr_31882_31933[(2)] = inst_31876);

(statearr_31882_31933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (20))){
var state_31880__$1 = state_31880;
var statearr_31883_31934 = state_31880__$1;
(statearr_31883_31934[(2)] = null);

(statearr_31883_31934[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (1))){
var state_31880__$1 = state_31880;
var statearr_31884_31935 = state_31880__$1;
(statearr_31884_31935[(2)] = null);

(statearr_31884_31935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (24))){
var inst_31859 = (state_31880[(7)]);
var inst_31868 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_31859);
var state_31880__$1 = state_31880;
var statearr_31885_31936 = state_31880__$1;
(statearr_31885_31936[(2)] = inst_31868);

(statearr_31885_31936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (4))){
var inst_31811 = (state_31880[(8)]);
var inst_31811__$1 = (state_31880[(2)]);
var inst_31812 = (inst_31811__$1 == null);
var state_31880__$1 = (function (){var statearr_31886 = state_31880;
(statearr_31886[(8)] = inst_31811__$1);

return statearr_31886;
})();
if(cljs.core.truth_(inst_31812)){
var statearr_31887_31937 = state_31880__$1;
(statearr_31887_31937[(1)] = (5));

} else {
var statearr_31888_31938 = state_31880__$1;
(statearr_31888_31938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (15))){
var inst_31853 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31889_31939 = state_31880__$1;
(statearr_31889_31939[(2)] = inst_31853);

(statearr_31889_31939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (21))){
var inst_31873 = (state_31880[(2)]);
var state_31880__$1 = (function (){var statearr_31890 = state_31880;
(statearr_31890[(9)] = inst_31873);

return statearr_31890;
})();
var statearr_31891_31940 = state_31880__$1;
(statearr_31891_31940[(2)] = null);

(statearr_31891_31940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (13))){
var inst_31835 = (state_31880[(10)]);
var inst_31837 = cljs.core.chunked_seq_QMARK_.call(null,inst_31835);
var state_31880__$1 = state_31880;
if(inst_31837){
var statearr_31892_31941 = state_31880__$1;
(statearr_31892_31941[(1)] = (16));

} else {
var statearr_31893_31942 = state_31880__$1;
(statearr_31893_31942[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (22))){
var inst_31865 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31865)){
var statearr_31894_31943 = state_31880__$1;
(statearr_31894_31943[(1)] = (23));

} else {
var statearr_31895_31944 = state_31880__$1;
(statearr_31895_31944[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (6))){
var inst_31811 = (state_31880[(8)]);
var inst_31859 = (state_31880[(7)]);
var inst_31861 = (state_31880[(11)]);
var inst_31859__$1 = topic_fn.call(null,inst_31811);
var inst_31860 = cljs.core.deref.call(null,mults);
var inst_31861__$1 = cljs.core.get.call(null,inst_31860,inst_31859__$1);
var state_31880__$1 = (function (){var statearr_31896 = state_31880;
(statearr_31896[(7)] = inst_31859__$1);

(statearr_31896[(11)] = inst_31861__$1);

return statearr_31896;
})();
if(cljs.core.truth_(inst_31861__$1)){
var statearr_31897_31945 = state_31880__$1;
(statearr_31897_31945[(1)] = (19));

} else {
var statearr_31898_31946 = state_31880__$1;
(statearr_31898_31946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (25))){
var inst_31870 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31899_31947 = state_31880__$1;
(statearr_31899_31947[(2)] = inst_31870);

(statearr_31899_31947[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (17))){
var inst_31835 = (state_31880[(10)]);
var inst_31844 = cljs.core.first.call(null,inst_31835);
var inst_31845 = cljs.core.async.muxch_STAR_.call(null,inst_31844);
var inst_31846 = cljs.core.async.close_BANG_.call(null,inst_31845);
var inst_31847 = cljs.core.next.call(null,inst_31835);
var inst_31821 = inst_31847;
var inst_31822 = null;
var inst_31823 = (0);
var inst_31824 = (0);
var state_31880__$1 = (function (){var statearr_31900 = state_31880;
(statearr_31900[(12)] = inst_31823);

(statearr_31900[(13)] = inst_31822);

(statearr_31900[(14)] = inst_31846);

(statearr_31900[(15)] = inst_31824);

(statearr_31900[(16)] = inst_31821);

return statearr_31900;
})();
var statearr_31901_31948 = state_31880__$1;
(statearr_31901_31948[(2)] = null);

(statearr_31901_31948[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (3))){
var inst_31878 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31880__$1,inst_31878);
} else {
if((state_val_31881 === (12))){
var inst_31855 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31902_31949 = state_31880__$1;
(statearr_31902_31949[(2)] = inst_31855);

(statearr_31902_31949[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (2))){
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31880__$1,(4),ch);
} else {
if((state_val_31881 === (23))){
var state_31880__$1 = state_31880;
var statearr_31903_31950 = state_31880__$1;
(statearr_31903_31950[(2)] = null);

(statearr_31903_31950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (19))){
var inst_31811 = (state_31880[(8)]);
var inst_31861 = (state_31880[(11)]);
var inst_31863 = cljs.core.async.muxch_STAR_.call(null,inst_31861);
var state_31880__$1 = state_31880;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31880__$1,(22),inst_31863,inst_31811);
} else {
if((state_val_31881 === (11))){
var inst_31821 = (state_31880[(16)]);
var inst_31835 = (state_31880[(10)]);
var inst_31835__$1 = cljs.core.seq.call(null,inst_31821);
var state_31880__$1 = (function (){var statearr_31904 = state_31880;
(statearr_31904[(10)] = inst_31835__$1);

return statearr_31904;
})();
if(inst_31835__$1){
var statearr_31905_31951 = state_31880__$1;
(statearr_31905_31951[(1)] = (13));

} else {
var statearr_31906_31952 = state_31880__$1;
(statearr_31906_31952[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (9))){
var inst_31857 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31907_31953 = state_31880__$1;
(statearr_31907_31953[(2)] = inst_31857);

(statearr_31907_31953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (5))){
var inst_31818 = cljs.core.deref.call(null,mults);
var inst_31819 = cljs.core.vals.call(null,inst_31818);
var inst_31820 = cljs.core.seq.call(null,inst_31819);
var inst_31821 = inst_31820;
var inst_31822 = null;
var inst_31823 = (0);
var inst_31824 = (0);
var state_31880__$1 = (function (){var statearr_31908 = state_31880;
(statearr_31908[(12)] = inst_31823);

(statearr_31908[(13)] = inst_31822);

(statearr_31908[(15)] = inst_31824);

(statearr_31908[(16)] = inst_31821);

return statearr_31908;
})();
var statearr_31909_31954 = state_31880__$1;
(statearr_31909_31954[(2)] = null);

(statearr_31909_31954[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (14))){
var state_31880__$1 = state_31880;
var statearr_31913_31955 = state_31880__$1;
(statearr_31913_31955[(2)] = null);

(statearr_31913_31955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (16))){
var inst_31835 = (state_31880[(10)]);
var inst_31839 = cljs.core.chunk_first.call(null,inst_31835);
var inst_31840 = cljs.core.chunk_rest.call(null,inst_31835);
var inst_31841 = cljs.core.count.call(null,inst_31839);
var inst_31821 = inst_31840;
var inst_31822 = inst_31839;
var inst_31823 = inst_31841;
var inst_31824 = (0);
var state_31880__$1 = (function (){var statearr_31914 = state_31880;
(statearr_31914[(12)] = inst_31823);

(statearr_31914[(13)] = inst_31822);

(statearr_31914[(15)] = inst_31824);

(statearr_31914[(16)] = inst_31821);

return statearr_31914;
})();
var statearr_31915_31956 = state_31880__$1;
(statearr_31915_31956[(2)] = null);

(statearr_31915_31956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (10))){
var inst_31823 = (state_31880[(12)]);
var inst_31822 = (state_31880[(13)]);
var inst_31824 = (state_31880[(15)]);
var inst_31821 = (state_31880[(16)]);
var inst_31829 = cljs.core._nth.call(null,inst_31822,inst_31824);
var inst_31830 = cljs.core.async.muxch_STAR_.call(null,inst_31829);
var inst_31831 = cljs.core.async.close_BANG_.call(null,inst_31830);
var inst_31832 = (inst_31824 + (1));
var tmp31910 = inst_31823;
var tmp31911 = inst_31822;
var tmp31912 = inst_31821;
var inst_31821__$1 = tmp31912;
var inst_31822__$1 = tmp31911;
var inst_31823__$1 = tmp31910;
var inst_31824__$1 = inst_31832;
var state_31880__$1 = (function (){var statearr_31916 = state_31880;
(statearr_31916[(12)] = inst_31823__$1);

(statearr_31916[(13)] = inst_31822__$1);

(statearr_31916[(15)] = inst_31824__$1);

(statearr_31916[(17)] = inst_31831);

(statearr_31916[(16)] = inst_31821__$1);

return statearr_31916;
})();
var statearr_31917_31957 = state_31880__$1;
(statearr_31917_31957[(2)] = null);

(statearr_31917_31957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (18))){
var inst_31850 = (state_31880[(2)]);
var state_31880__$1 = state_31880;
var statearr_31918_31958 = state_31880__$1;
(statearr_31918_31958[(2)] = inst_31850);

(statearr_31918_31958[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31881 === (8))){
var inst_31823 = (state_31880[(12)]);
var inst_31824 = (state_31880[(15)]);
var inst_31826 = (inst_31824 < inst_31823);
var inst_31827 = inst_31826;
var state_31880__$1 = state_31880;
if(cljs.core.truth_(inst_31827)){
var statearr_31919_31959 = state_31880__$1;
(statearr_31919_31959[(1)] = (10));

} else {
var statearr_31920_31960 = state_31880__$1;
(statearr_31920_31960[(1)] = (11));

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
});})(c__29844__auto___31932,mults,ensure_mult,p))
;
return ((function (switch__29829__auto__,c__29844__auto___31932,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_31924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31924[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_31924[(1)] = (1));

return statearr_31924;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_31880){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_31880);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e31925){if((e31925 instanceof Object)){
var ex__29833__auto__ = e31925;
var statearr_31926_31961 = state_31880;
(statearr_31926_31961[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31880);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31962 = state_31880;
state_31880 = G__31962;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___31932,mults,ensure_mult,p))
})();
var state__29846__auto__ = (function (){var statearr_31927 = f__29845__auto__.call(null);
(statearr_31927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___31932);

return statearr_31927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___31932,mults,ensure_mult,p))
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
var args31963 = [];
var len__27787__auto___31966 = arguments.length;
var i__27788__auto___31967 = (0);
while(true){
if((i__27788__auto___31967 < len__27787__auto___31966)){
args31963.push((arguments[i__27788__auto___31967]));

var G__31968 = (i__27788__auto___31967 + (1));
i__27788__auto___31967 = G__31968;
continue;
} else {
}
break;
}

var G__31965 = args31963.length;
switch (G__31965) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31963.length)].join('')));

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
var args31970 = [];
var len__27787__auto___31973 = arguments.length;
var i__27788__auto___31974 = (0);
while(true){
if((i__27788__auto___31974 < len__27787__auto___31973)){
args31970.push((arguments[i__27788__auto___31974]));

var G__31975 = (i__27788__auto___31974 + (1));
i__27788__auto___31974 = G__31975;
continue;
} else {
}
break;
}

var G__31972 = args31970.length;
switch (G__31972) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31970.length)].join('')));

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
var args31977 = [];
var len__27787__auto___32048 = arguments.length;
var i__27788__auto___32049 = (0);
while(true){
if((i__27788__auto___32049 < len__27787__auto___32048)){
args31977.push((arguments[i__27788__auto___32049]));

var G__32050 = (i__27788__auto___32049 + (1));
i__27788__auto___32049 = G__32050;
continue;
} else {
}
break;
}

var G__31979 = args31977.length;
switch (G__31979) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args31977.length)].join('')));

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
var c__29844__auto___32052 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_32018){
var state_val_32019 = (state_32018[(1)]);
if((state_val_32019 === (7))){
var state_32018__$1 = state_32018;
var statearr_32020_32053 = state_32018__$1;
(statearr_32020_32053[(2)] = null);

(statearr_32020_32053[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (1))){
var state_32018__$1 = state_32018;
var statearr_32021_32054 = state_32018__$1;
(statearr_32021_32054[(2)] = null);

(statearr_32021_32054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (4))){
var inst_31982 = (state_32018[(7)]);
var inst_31984 = (inst_31982 < cnt);
var state_32018__$1 = state_32018;
if(cljs.core.truth_(inst_31984)){
var statearr_32022_32055 = state_32018__$1;
(statearr_32022_32055[(1)] = (6));

} else {
var statearr_32023_32056 = state_32018__$1;
(statearr_32023_32056[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (15))){
var inst_32014 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
var statearr_32024_32057 = state_32018__$1;
(statearr_32024_32057[(2)] = inst_32014);

(statearr_32024_32057[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (13))){
var inst_32007 = cljs.core.async.close_BANG_.call(null,out);
var state_32018__$1 = state_32018;
var statearr_32025_32058 = state_32018__$1;
(statearr_32025_32058[(2)] = inst_32007);

(statearr_32025_32058[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (6))){
var state_32018__$1 = state_32018;
var statearr_32026_32059 = state_32018__$1;
(statearr_32026_32059[(2)] = null);

(statearr_32026_32059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (3))){
var inst_32016 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32018__$1,inst_32016);
} else {
if((state_val_32019 === (12))){
var inst_32004 = (state_32018[(8)]);
var inst_32004__$1 = (state_32018[(2)]);
var inst_32005 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32004__$1);
var state_32018__$1 = (function (){var statearr_32027 = state_32018;
(statearr_32027[(8)] = inst_32004__$1);

return statearr_32027;
})();
if(cljs.core.truth_(inst_32005)){
var statearr_32028_32060 = state_32018__$1;
(statearr_32028_32060[(1)] = (13));

} else {
var statearr_32029_32061 = state_32018__$1;
(statearr_32029_32061[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (2))){
var inst_31981 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_31982 = (0);
var state_32018__$1 = (function (){var statearr_32030 = state_32018;
(statearr_32030[(7)] = inst_31982);

(statearr_32030[(9)] = inst_31981);

return statearr_32030;
})();
var statearr_32031_32062 = state_32018__$1;
(statearr_32031_32062[(2)] = null);

(statearr_32031_32062[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (11))){
var inst_31982 = (state_32018[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32018,(10),Object,null,(9));
var inst_31991 = chs__$1.call(null,inst_31982);
var inst_31992 = done.call(null,inst_31982);
var inst_31993 = cljs.core.async.take_BANG_.call(null,inst_31991,inst_31992);
var state_32018__$1 = state_32018;
var statearr_32032_32063 = state_32018__$1;
(statearr_32032_32063[(2)] = inst_31993);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (9))){
var inst_31982 = (state_32018[(7)]);
var inst_31995 = (state_32018[(2)]);
var inst_31996 = (inst_31982 + (1));
var inst_31982__$1 = inst_31996;
var state_32018__$1 = (function (){var statearr_32033 = state_32018;
(statearr_32033[(7)] = inst_31982__$1);

(statearr_32033[(10)] = inst_31995);

return statearr_32033;
})();
var statearr_32034_32064 = state_32018__$1;
(statearr_32034_32064[(2)] = null);

(statearr_32034_32064[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (5))){
var inst_32002 = (state_32018[(2)]);
var state_32018__$1 = (function (){var statearr_32035 = state_32018;
(statearr_32035[(11)] = inst_32002);

return statearr_32035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32018__$1,(12),dchan);
} else {
if((state_val_32019 === (14))){
var inst_32004 = (state_32018[(8)]);
var inst_32009 = cljs.core.apply.call(null,f,inst_32004);
var state_32018__$1 = state_32018;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32018__$1,(16),out,inst_32009);
} else {
if((state_val_32019 === (16))){
var inst_32011 = (state_32018[(2)]);
var state_32018__$1 = (function (){var statearr_32036 = state_32018;
(statearr_32036[(12)] = inst_32011);

return statearr_32036;
})();
var statearr_32037_32065 = state_32018__$1;
(statearr_32037_32065[(2)] = null);

(statearr_32037_32065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (10))){
var inst_31986 = (state_32018[(2)]);
var inst_31987 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_32018__$1 = (function (){var statearr_32038 = state_32018;
(statearr_32038[(13)] = inst_31986);

return statearr_32038;
})();
var statearr_32039_32066 = state_32018__$1;
(statearr_32039_32066[(2)] = inst_31987);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32018__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32019 === (8))){
var inst_32000 = (state_32018[(2)]);
var state_32018__$1 = state_32018;
var statearr_32040_32067 = state_32018__$1;
(statearr_32040_32067[(2)] = inst_32000);

(statearr_32040_32067[(1)] = (5));


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
});})(c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__29829__auto__,c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32044[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32044[(1)] = (1));

return statearr_32044;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32018){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32045){if((e32045 instanceof Object)){
var ex__29833__auto__ = e32045;
var statearr_32046_32068 = state_32018;
(statearr_32046_32068[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32045;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32069 = state_32018;
state_32018 = G__32069;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32018){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__29846__auto__ = (function (){var statearr_32047 = f__29845__auto__.call(null);
(statearr_32047[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32052);

return statearr_32047;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32052,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args32071 = [];
var len__27787__auto___32129 = arguments.length;
var i__27788__auto___32130 = (0);
while(true){
if((i__27788__auto___32130 < len__27787__auto___32129)){
args32071.push((arguments[i__27788__auto___32130]));

var G__32131 = (i__27788__auto___32130 + (1));
i__27788__auto___32130 = G__32131;
continue;
} else {
}
break;
}

var G__32073 = args32071.length;
switch (G__32073) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32071.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32133,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32133,out){
return (function (state_32105){
var state_val_32106 = (state_32105[(1)]);
if((state_val_32106 === (7))){
var inst_32084 = (state_32105[(7)]);
var inst_32085 = (state_32105[(8)]);
var inst_32084__$1 = (state_32105[(2)]);
var inst_32085__$1 = cljs.core.nth.call(null,inst_32084__$1,(0),null);
var inst_32086 = cljs.core.nth.call(null,inst_32084__$1,(1),null);
var inst_32087 = (inst_32085__$1 == null);
var state_32105__$1 = (function (){var statearr_32107 = state_32105;
(statearr_32107[(7)] = inst_32084__$1);

(statearr_32107[(9)] = inst_32086);

(statearr_32107[(8)] = inst_32085__$1);

return statearr_32107;
})();
if(cljs.core.truth_(inst_32087)){
var statearr_32108_32134 = state_32105__$1;
(statearr_32108_32134[(1)] = (8));

} else {
var statearr_32109_32135 = state_32105__$1;
(statearr_32109_32135[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (1))){
var inst_32074 = cljs.core.vec.call(null,chs);
var inst_32075 = inst_32074;
var state_32105__$1 = (function (){var statearr_32110 = state_32105;
(statearr_32110[(10)] = inst_32075);

return statearr_32110;
})();
var statearr_32111_32136 = state_32105__$1;
(statearr_32111_32136[(2)] = null);

(statearr_32111_32136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (4))){
var inst_32075 = (state_32105[(10)]);
var state_32105__$1 = state_32105;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32105__$1,(7),inst_32075);
} else {
if((state_val_32106 === (6))){
var inst_32101 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32112_32137 = state_32105__$1;
(statearr_32112_32137[(2)] = inst_32101);

(statearr_32112_32137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (3))){
var inst_32103 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32105__$1,inst_32103);
} else {
if((state_val_32106 === (2))){
var inst_32075 = (state_32105[(10)]);
var inst_32077 = cljs.core.count.call(null,inst_32075);
var inst_32078 = (inst_32077 > (0));
var state_32105__$1 = state_32105;
if(cljs.core.truth_(inst_32078)){
var statearr_32114_32138 = state_32105__$1;
(statearr_32114_32138[(1)] = (4));

} else {
var statearr_32115_32139 = state_32105__$1;
(statearr_32115_32139[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (11))){
var inst_32075 = (state_32105[(10)]);
var inst_32094 = (state_32105[(2)]);
var tmp32113 = inst_32075;
var inst_32075__$1 = tmp32113;
var state_32105__$1 = (function (){var statearr_32116 = state_32105;
(statearr_32116[(11)] = inst_32094);

(statearr_32116[(10)] = inst_32075__$1);

return statearr_32116;
})();
var statearr_32117_32140 = state_32105__$1;
(statearr_32117_32140[(2)] = null);

(statearr_32117_32140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (9))){
var inst_32085 = (state_32105[(8)]);
var state_32105__$1 = state_32105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32105__$1,(11),out,inst_32085);
} else {
if((state_val_32106 === (5))){
var inst_32099 = cljs.core.async.close_BANG_.call(null,out);
var state_32105__$1 = state_32105;
var statearr_32118_32141 = state_32105__$1;
(statearr_32118_32141[(2)] = inst_32099);

(statearr_32118_32141[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (10))){
var inst_32097 = (state_32105[(2)]);
var state_32105__$1 = state_32105;
var statearr_32119_32142 = state_32105__$1;
(statearr_32119_32142[(2)] = inst_32097);

(statearr_32119_32142[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32106 === (8))){
var inst_32084 = (state_32105[(7)]);
var inst_32086 = (state_32105[(9)]);
var inst_32075 = (state_32105[(10)]);
var inst_32085 = (state_32105[(8)]);
var inst_32089 = (function (){var cs = inst_32075;
var vec__32080 = inst_32084;
var v = inst_32085;
var c = inst_32086;
return ((function (cs,vec__32080,v,c,inst_32084,inst_32086,inst_32075,inst_32085,state_val_32106,c__29844__auto___32133,out){
return (function (p1__32070_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__32070_SHARP_);
});
;})(cs,vec__32080,v,c,inst_32084,inst_32086,inst_32075,inst_32085,state_val_32106,c__29844__auto___32133,out))
})();
var inst_32090 = cljs.core.filterv.call(null,inst_32089,inst_32075);
var inst_32075__$1 = inst_32090;
var state_32105__$1 = (function (){var statearr_32120 = state_32105;
(statearr_32120[(10)] = inst_32075__$1);

return statearr_32120;
})();
var statearr_32121_32143 = state_32105__$1;
(statearr_32121_32143[(2)] = null);

(statearr_32121_32143[(1)] = (2));


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
});})(c__29844__auto___32133,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32133,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32125 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32125[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32125[(1)] = (1));

return statearr_32125;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32105){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32126){if((e32126 instanceof Object)){
var ex__29833__auto__ = e32126;
var statearr_32127_32144 = state_32105;
(statearr_32127_32144[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32145 = state_32105;
state_32105 = G__32145;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32133,out))
})();
var state__29846__auto__ = (function (){var statearr_32128 = f__29845__auto__.call(null);
(statearr_32128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32133);

return statearr_32128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32133,out))
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
var args32146 = [];
var len__27787__auto___32195 = arguments.length;
var i__27788__auto___32196 = (0);
while(true){
if((i__27788__auto___32196 < len__27787__auto___32195)){
args32146.push((arguments[i__27788__auto___32196]));

var G__32197 = (i__27788__auto___32196 + (1));
i__27788__auto___32196 = G__32197;
continue;
} else {
}
break;
}

var G__32148 = args32146.length;
switch (G__32148) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32146.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32199 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32199,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32199,out){
return (function (state_32172){
var state_val_32173 = (state_32172[(1)]);
if((state_val_32173 === (7))){
var inst_32154 = (state_32172[(7)]);
var inst_32154__$1 = (state_32172[(2)]);
var inst_32155 = (inst_32154__$1 == null);
var inst_32156 = cljs.core.not.call(null,inst_32155);
var state_32172__$1 = (function (){var statearr_32174 = state_32172;
(statearr_32174[(7)] = inst_32154__$1);

return statearr_32174;
})();
if(inst_32156){
var statearr_32175_32200 = state_32172__$1;
(statearr_32175_32200[(1)] = (8));

} else {
var statearr_32176_32201 = state_32172__$1;
(statearr_32176_32201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (1))){
var inst_32149 = (0);
var state_32172__$1 = (function (){var statearr_32177 = state_32172;
(statearr_32177[(8)] = inst_32149);

return statearr_32177;
})();
var statearr_32178_32202 = state_32172__$1;
(statearr_32178_32202[(2)] = null);

(statearr_32178_32202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (4))){
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32172__$1,(7),ch);
} else {
if((state_val_32173 === (6))){
var inst_32167 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32179_32203 = state_32172__$1;
(statearr_32179_32203[(2)] = inst_32167);

(statearr_32179_32203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (3))){
var inst_32169 = (state_32172[(2)]);
var inst_32170 = cljs.core.async.close_BANG_.call(null,out);
var state_32172__$1 = (function (){var statearr_32180 = state_32172;
(statearr_32180[(9)] = inst_32169);

return statearr_32180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32172__$1,inst_32170);
} else {
if((state_val_32173 === (2))){
var inst_32149 = (state_32172[(8)]);
var inst_32151 = (inst_32149 < n);
var state_32172__$1 = state_32172;
if(cljs.core.truth_(inst_32151)){
var statearr_32181_32204 = state_32172__$1;
(statearr_32181_32204[(1)] = (4));

} else {
var statearr_32182_32205 = state_32172__$1;
(statearr_32182_32205[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (11))){
var inst_32149 = (state_32172[(8)]);
var inst_32159 = (state_32172[(2)]);
var inst_32160 = (inst_32149 + (1));
var inst_32149__$1 = inst_32160;
var state_32172__$1 = (function (){var statearr_32183 = state_32172;
(statearr_32183[(8)] = inst_32149__$1);

(statearr_32183[(10)] = inst_32159);

return statearr_32183;
})();
var statearr_32184_32206 = state_32172__$1;
(statearr_32184_32206[(2)] = null);

(statearr_32184_32206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (9))){
var state_32172__$1 = state_32172;
var statearr_32185_32207 = state_32172__$1;
(statearr_32185_32207[(2)] = null);

(statearr_32185_32207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (5))){
var state_32172__$1 = state_32172;
var statearr_32186_32208 = state_32172__$1;
(statearr_32186_32208[(2)] = null);

(statearr_32186_32208[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (10))){
var inst_32164 = (state_32172[(2)]);
var state_32172__$1 = state_32172;
var statearr_32187_32209 = state_32172__$1;
(statearr_32187_32209[(2)] = inst_32164);

(statearr_32187_32209[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32173 === (8))){
var inst_32154 = (state_32172[(7)]);
var state_32172__$1 = state_32172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32172__$1,(11),out,inst_32154);
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
});})(c__29844__auto___32199,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32199,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32191 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32191[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32191[(1)] = (1));

return statearr_32191;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32172){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32192){if((e32192 instanceof Object)){
var ex__29833__auto__ = e32192;
var statearr_32193_32210 = state_32172;
(statearr_32193_32210[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32192;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32211 = state_32172;
state_32172 = G__32211;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32172){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32172);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32199,out))
})();
var state__29846__auto__ = (function (){var statearr_32194 = f__29845__auto__.call(null);
(statearr_32194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32199);

return statearr_32194;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32199,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32219 = (function (f,ch,meta32220){
this.f = f;
this.ch = ch;
this.meta32220 = meta32220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32221,meta32220__$1){
var self__ = this;
var _32221__$1 = this;
return (new cljs.core.async.t_cljs$core$async32219(self__.f,self__.ch,meta32220__$1));
});

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32221){
var self__ = this;
var _32221__$1 = this;
return self__.meta32220;
});

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async32222 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32222 = (function (f,ch,meta32220,_,fn1,meta32223){
this.f = f;
this.ch = ch;
this.meta32220 = meta32220;
this._ = _;
this.fn1 = fn1;
this.meta32223 = meta32223;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32224,meta32223__$1){
var self__ = this;
var _32224__$1 = this;
return (new cljs.core.async.t_cljs$core$async32222(self__.f,self__.ch,self__.meta32220,self__._,self__.fn1,meta32223__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32224){
var self__ = this;
var _32224__$1 = this;
return self__.meta32223;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__32212_SHARP_){
return f1.call(null,(((p1__32212_SHARP_ == null))?null:self__.f.call(null,p1__32212_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32220","meta32220",1746532141,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async32219","cljs.core.async/t_cljs$core$async32219",430354051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta32223","meta32223",1317267519,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async32222.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32222.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32222";

cljs.core.async.t_cljs$core$async32222.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32222");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async32222 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32222(f__$1,ch__$1,meta32220__$1,___$2,fn1__$1,meta32223){
return (new cljs.core.async.t_cljs$core$async32222(f__$1,ch__$1,meta32220__$1,___$2,fn1__$1,meta32223));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async32222(self__.f,self__.ch,self__.meta32220,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32219.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async32219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32220","meta32220",1746532141,null)], null);
});

cljs.core.async.t_cljs$core$async32219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32219";

cljs.core.async.t_cljs$core$async32219.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32219");
});

cljs.core.async.__GT_t_cljs$core$async32219 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async32219(f__$1,ch__$1,meta32220){
return (new cljs.core.async.t_cljs$core$async32219(f__$1,ch__$1,meta32220));
});

}

return (new cljs.core.async.t_cljs$core$async32219(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async32228 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32228 = (function (f,ch,meta32229){
this.f = f;
this.ch = ch;
this.meta32229 = meta32229;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32230,meta32229__$1){
var self__ = this;
var _32230__$1 = this;
return (new cljs.core.async.t_cljs$core$async32228(self__.f,self__.ch,meta32229__$1));
});

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32230){
var self__ = this;
var _32230__$1 = this;
return self__.meta32229;
});

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32228.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async32228.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32229","meta32229",162064575,null)], null);
});

cljs.core.async.t_cljs$core$async32228.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32228.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32228";

cljs.core.async.t_cljs$core$async32228.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32228");
});

cljs.core.async.__GT_t_cljs$core$async32228 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async32228(f__$1,ch__$1,meta32229){
return (new cljs.core.async.t_cljs$core$async32228(f__$1,ch__$1,meta32229));
});

}

return (new cljs.core.async.t_cljs$core$async32228(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async32234 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32234 = (function (p,ch,meta32235){
this.p = p;
this.ch = ch;
this.meta32235 = meta32235;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32236,meta32235__$1){
var self__ = this;
var _32236__$1 = this;
return (new cljs.core.async.t_cljs$core$async32234(self__.p,self__.ch,meta32235__$1));
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32236){
var self__ = this;
var _32236__$1 = this;
return self__.meta32235;
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32234.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async32234.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta32235","meta32235",305966807,null)], null);
});

cljs.core.async.t_cljs$core$async32234.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32234.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32234";

cljs.core.async.t_cljs$core$async32234.cljs$lang$ctorPrWriter = (function (this__27285__auto__,writer__27286__auto__,opt__27287__auto__){
return cljs.core._write.call(null,writer__27286__auto__,"cljs.core.async/t_cljs$core$async32234");
});

cljs.core.async.__GT_t_cljs$core$async32234 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async32234(p__$1,ch__$1,meta32235){
return (new cljs.core.async.t_cljs$core$async32234(p__$1,ch__$1,meta32235));
});

}

return (new cljs.core.async.t_cljs$core$async32234(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args32237 = [];
var len__27787__auto___32281 = arguments.length;
var i__27788__auto___32282 = (0);
while(true){
if((i__27788__auto___32282 < len__27787__auto___32281)){
args32237.push((arguments[i__27788__auto___32282]));

var G__32283 = (i__27788__auto___32282 + (1));
i__27788__auto___32282 = G__32283;
continue;
} else {
}
break;
}

var G__32239 = args32237.length;
switch (G__32239) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32237.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32285 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32285,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32285,out){
return (function (state_32260){
var state_val_32261 = (state_32260[(1)]);
if((state_val_32261 === (7))){
var inst_32256 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32262_32286 = state_32260__$1;
(statearr_32262_32286[(2)] = inst_32256);

(statearr_32262_32286[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (1))){
var state_32260__$1 = state_32260;
var statearr_32263_32287 = state_32260__$1;
(statearr_32263_32287[(2)] = null);

(statearr_32263_32287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (4))){
var inst_32242 = (state_32260[(7)]);
var inst_32242__$1 = (state_32260[(2)]);
var inst_32243 = (inst_32242__$1 == null);
var state_32260__$1 = (function (){var statearr_32264 = state_32260;
(statearr_32264[(7)] = inst_32242__$1);

return statearr_32264;
})();
if(cljs.core.truth_(inst_32243)){
var statearr_32265_32288 = state_32260__$1;
(statearr_32265_32288[(1)] = (5));

} else {
var statearr_32266_32289 = state_32260__$1;
(statearr_32266_32289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (6))){
var inst_32242 = (state_32260[(7)]);
var inst_32247 = p.call(null,inst_32242);
var state_32260__$1 = state_32260;
if(cljs.core.truth_(inst_32247)){
var statearr_32267_32290 = state_32260__$1;
(statearr_32267_32290[(1)] = (8));

} else {
var statearr_32268_32291 = state_32260__$1;
(statearr_32268_32291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (3))){
var inst_32258 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32260__$1,inst_32258);
} else {
if((state_val_32261 === (2))){
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32260__$1,(4),ch);
} else {
if((state_val_32261 === (11))){
var inst_32250 = (state_32260[(2)]);
var state_32260__$1 = state_32260;
var statearr_32269_32292 = state_32260__$1;
(statearr_32269_32292[(2)] = inst_32250);

(statearr_32269_32292[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (9))){
var state_32260__$1 = state_32260;
var statearr_32270_32293 = state_32260__$1;
(statearr_32270_32293[(2)] = null);

(statearr_32270_32293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (5))){
var inst_32245 = cljs.core.async.close_BANG_.call(null,out);
var state_32260__$1 = state_32260;
var statearr_32271_32294 = state_32260__$1;
(statearr_32271_32294[(2)] = inst_32245);

(statearr_32271_32294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (10))){
var inst_32253 = (state_32260[(2)]);
var state_32260__$1 = (function (){var statearr_32272 = state_32260;
(statearr_32272[(8)] = inst_32253);

return statearr_32272;
})();
var statearr_32273_32295 = state_32260__$1;
(statearr_32273_32295[(2)] = null);

(statearr_32273_32295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32261 === (8))){
var inst_32242 = (state_32260[(7)]);
var state_32260__$1 = state_32260;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32260__$1,(11),out,inst_32242);
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
});})(c__29844__auto___32285,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32285,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32277 = [null,null,null,null,null,null,null,null,null];
(statearr_32277[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32277[(1)] = (1));

return statearr_32277;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32260){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32278){if((e32278 instanceof Object)){
var ex__29833__auto__ = e32278;
var statearr_32279_32296 = state_32260;
(statearr_32279_32296[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32278;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32297 = state_32260;
state_32260 = G__32297;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32260){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32260);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32285,out))
})();
var state__29846__auto__ = (function (){var statearr_32280 = f__29845__auto__.call(null);
(statearr_32280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32285);

return statearr_32280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32285,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args32298 = [];
var len__27787__auto___32301 = arguments.length;
var i__27788__auto___32302 = (0);
while(true){
if((i__27788__auto___32302 < len__27787__auto___32301)){
args32298.push((arguments[i__27788__auto___32302]));

var G__32303 = (i__27788__auto___32302 + (1));
i__27788__auto___32302 = G__32303;
continue;
} else {
}
break;
}

var G__32300 = args32298.length;
switch (G__32300) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32298.length)].join('')));

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
var c__29844__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto__){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto__){
return (function (state_32470){
var state_val_32471 = (state_32470[(1)]);
if((state_val_32471 === (7))){
var inst_32466 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32472_32513 = state_32470__$1;
(statearr_32472_32513[(2)] = inst_32466);

(statearr_32472_32513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (20))){
var inst_32436 = (state_32470[(7)]);
var inst_32447 = (state_32470[(2)]);
var inst_32448 = cljs.core.next.call(null,inst_32436);
var inst_32422 = inst_32448;
var inst_32423 = null;
var inst_32424 = (0);
var inst_32425 = (0);
var state_32470__$1 = (function (){var statearr_32473 = state_32470;
(statearr_32473[(8)] = inst_32424);

(statearr_32473[(9)] = inst_32422);

(statearr_32473[(10)] = inst_32447);

(statearr_32473[(11)] = inst_32425);

(statearr_32473[(12)] = inst_32423);

return statearr_32473;
})();
var statearr_32474_32514 = state_32470__$1;
(statearr_32474_32514[(2)] = null);

(statearr_32474_32514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (1))){
var state_32470__$1 = state_32470;
var statearr_32475_32515 = state_32470__$1;
(statearr_32475_32515[(2)] = null);

(statearr_32475_32515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (4))){
var inst_32411 = (state_32470[(13)]);
var inst_32411__$1 = (state_32470[(2)]);
var inst_32412 = (inst_32411__$1 == null);
var state_32470__$1 = (function (){var statearr_32476 = state_32470;
(statearr_32476[(13)] = inst_32411__$1);

return statearr_32476;
})();
if(cljs.core.truth_(inst_32412)){
var statearr_32477_32516 = state_32470__$1;
(statearr_32477_32516[(1)] = (5));

} else {
var statearr_32478_32517 = state_32470__$1;
(statearr_32478_32517[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (15))){
var state_32470__$1 = state_32470;
var statearr_32482_32518 = state_32470__$1;
(statearr_32482_32518[(2)] = null);

(statearr_32482_32518[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (21))){
var state_32470__$1 = state_32470;
var statearr_32483_32519 = state_32470__$1;
(statearr_32483_32519[(2)] = null);

(statearr_32483_32519[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (13))){
var inst_32424 = (state_32470[(8)]);
var inst_32422 = (state_32470[(9)]);
var inst_32425 = (state_32470[(11)]);
var inst_32423 = (state_32470[(12)]);
var inst_32432 = (state_32470[(2)]);
var inst_32433 = (inst_32425 + (1));
var tmp32479 = inst_32424;
var tmp32480 = inst_32422;
var tmp32481 = inst_32423;
var inst_32422__$1 = tmp32480;
var inst_32423__$1 = tmp32481;
var inst_32424__$1 = tmp32479;
var inst_32425__$1 = inst_32433;
var state_32470__$1 = (function (){var statearr_32484 = state_32470;
(statearr_32484[(8)] = inst_32424__$1);

(statearr_32484[(9)] = inst_32422__$1);

(statearr_32484[(14)] = inst_32432);

(statearr_32484[(11)] = inst_32425__$1);

(statearr_32484[(12)] = inst_32423__$1);

return statearr_32484;
})();
var statearr_32485_32520 = state_32470__$1;
(statearr_32485_32520[(2)] = null);

(statearr_32485_32520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (22))){
var state_32470__$1 = state_32470;
var statearr_32486_32521 = state_32470__$1;
(statearr_32486_32521[(2)] = null);

(statearr_32486_32521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (6))){
var inst_32411 = (state_32470[(13)]);
var inst_32420 = f.call(null,inst_32411);
var inst_32421 = cljs.core.seq.call(null,inst_32420);
var inst_32422 = inst_32421;
var inst_32423 = null;
var inst_32424 = (0);
var inst_32425 = (0);
var state_32470__$1 = (function (){var statearr_32487 = state_32470;
(statearr_32487[(8)] = inst_32424);

(statearr_32487[(9)] = inst_32422);

(statearr_32487[(11)] = inst_32425);

(statearr_32487[(12)] = inst_32423);

return statearr_32487;
})();
var statearr_32488_32522 = state_32470__$1;
(statearr_32488_32522[(2)] = null);

(statearr_32488_32522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (17))){
var inst_32436 = (state_32470[(7)]);
var inst_32440 = cljs.core.chunk_first.call(null,inst_32436);
var inst_32441 = cljs.core.chunk_rest.call(null,inst_32436);
var inst_32442 = cljs.core.count.call(null,inst_32440);
var inst_32422 = inst_32441;
var inst_32423 = inst_32440;
var inst_32424 = inst_32442;
var inst_32425 = (0);
var state_32470__$1 = (function (){var statearr_32489 = state_32470;
(statearr_32489[(8)] = inst_32424);

(statearr_32489[(9)] = inst_32422);

(statearr_32489[(11)] = inst_32425);

(statearr_32489[(12)] = inst_32423);

return statearr_32489;
})();
var statearr_32490_32523 = state_32470__$1;
(statearr_32490_32523[(2)] = null);

(statearr_32490_32523[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (3))){
var inst_32468 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32470__$1,inst_32468);
} else {
if((state_val_32471 === (12))){
var inst_32456 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32491_32524 = state_32470__$1;
(statearr_32491_32524[(2)] = inst_32456);

(statearr_32491_32524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (2))){
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32470__$1,(4),in$);
} else {
if((state_val_32471 === (23))){
var inst_32464 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32492_32525 = state_32470__$1;
(statearr_32492_32525[(2)] = inst_32464);

(statearr_32492_32525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (19))){
var inst_32451 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32493_32526 = state_32470__$1;
(statearr_32493_32526[(2)] = inst_32451);

(statearr_32493_32526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (11))){
var inst_32436 = (state_32470[(7)]);
var inst_32422 = (state_32470[(9)]);
var inst_32436__$1 = cljs.core.seq.call(null,inst_32422);
var state_32470__$1 = (function (){var statearr_32494 = state_32470;
(statearr_32494[(7)] = inst_32436__$1);

return statearr_32494;
})();
if(inst_32436__$1){
var statearr_32495_32527 = state_32470__$1;
(statearr_32495_32527[(1)] = (14));

} else {
var statearr_32496_32528 = state_32470__$1;
(statearr_32496_32528[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (9))){
var inst_32458 = (state_32470[(2)]);
var inst_32459 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_32470__$1 = (function (){var statearr_32497 = state_32470;
(statearr_32497[(15)] = inst_32458);

return statearr_32497;
})();
if(cljs.core.truth_(inst_32459)){
var statearr_32498_32529 = state_32470__$1;
(statearr_32498_32529[(1)] = (21));

} else {
var statearr_32499_32530 = state_32470__$1;
(statearr_32499_32530[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (5))){
var inst_32414 = cljs.core.async.close_BANG_.call(null,out);
var state_32470__$1 = state_32470;
var statearr_32500_32531 = state_32470__$1;
(statearr_32500_32531[(2)] = inst_32414);

(statearr_32500_32531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (14))){
var inst_32436 = (state_32470[(7)]);
var inst_32438 = cljs.core.chunked_seq_QMARK_.call(null,inst_32436);
var state_32470__$1 = state_32470;
if(inst_32438){
var statearr_32501_32532 = state_32470__$1;
(statearr_32501_32532[(1)] = (17));

} else {
var statearr_32502_32533 = state_32470__$1;
(statearr_32502_32533[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (16))){
var inst_32454 = (state_32470[(2)]);
var state_32470__$1 = state_32470;
var statearr_32503_32534 = state_32470__$1;
(statearr_32503_32534[(2)] = inst_32454);

(statearr_32503_32534[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32471 === (10))){
var inst_32425 = (state_32470[(11)]);
var inst_32423 = (state_32470[(12)]);
var inst_32430 = cljs.core._nth.call(null,inst_32423,inst_32425);
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32470__$1,(13),out,inst_32430);
} else {
if((state_val_32471 === (18))){
var inst_32436 = (state_32470[(7)]);
var inst_32445 = cljs.core.first.call(null,inst_32436);
var state_32470__$1 = state_32470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32470__$1,(20),out,inst_32445);
} else {
if((state_val_32471 === (8))){
var inst_32424 = (state_32470[(8)]);
var inst_32425 = (state_32470[(11)]);
var inst_32427 = (inst_32425 < inst_32424);
var inst_32428 = inst_32427;
var state_32470__$1 = state_32470;
if(cljs.core.truth_(inst_32428)){
var statearr_32504_32535 = state_32470__$1;
(statearr_32504_32535[(1)] = (10));

} else {
var statearr_32505_32536 = state_32470__$1;
(statearr_32505_32536[(1)] = (11));

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
});})(c__29844__auto__))
;
return ((function (switch__29829__auto__,c__29844__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____0 = (function (){
var statearr_32509 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32509[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__);

(statearr_32509[(1)] = (1));

return statearr_32509;
});
var cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____1 = (function (state_32470){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32510){if((e32510 instanceof Object)){
var ex__29833__auto__ = e32510;
var statearr_32511_32537 = state_32470;
(statearr_32511_32537[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32538 = state_32470;
state_32470 = G__32538;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__ = function(state_32470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____1.call(this,state_32470);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__29830__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto__))
})();
var state__29846__auto__ = (function (){var statearr_32512 = f__29845__auto__.call(null);
(statearr_32512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto__);

return statearr_32512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto__))
);

return c__29844__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args32539 = [];
var len__27787__auto___32542 = arguments.length;
var i__27788__auto___32543 = (0);
while(true){
if((i__27788__auto___32543 < len__27787__auto___32542)){
args32539.push((arguments[i__27788__auto___32543]));

var G__32544 = (i__27788__auto___32543 + (1));
i__27788__auto___32543 = G__32544;
continue;
} else {
}
break;
}

var G__32541 = args32539.length;
switch (G__32541) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32539.length)].join('')));

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
var args32546 = [];
var len__27787__auto___32549 = arguments.length;
var i__27788__auto___32550 = (0);
while(true){
if((i__27788__auto___32550 < len__27787__auto___32549)){
args32546.push((arguments[i__27788__auto___32550]));

var G__32551 = (i__27788__auto___32550 + (1));
i__27788__auto___32550 = G__32551;
continue;
} else {
}
break;
}

var G__32548 = args32546.length;
switch (G__32548) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32546.length)].join('')));

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
var args32553 = [];
var len__27787__auto___32604 = arguments.length;
var i__27788__auto___32605 = (0);
while(true){
if((i__27788__auto___32605 < len__27787__auto___32604)){
args32553.push((arguments[i__27788__auto___32605]));

var G__32606 = (i__27788__auto___32605 + (1));
i__27788__auto___32605 = G__32606;
continue;
} else {
}
break;
}

var G__32555 = args32553.length;
switch (G__32555) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32553.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32608,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32608,out){
return (function (state_32579){
var state_val_32580 = (state_32579[(1)]);
if((state_val_32580 === (7))){
var inst_32574 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32581_32609 = state_32579__$1;
(statearr_32581_32609[(2)] = inst_32574);

(statearr_32581_32609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (1))){
var inst_32556 = null;
var state_32579__$1 = (function (){var statearr_32582 = state_32579;
(statearr_32582[(7)] = inst_32556);

return statearr_32582;
})();
var statearr_32583_32610 = state_32579__$1;
(statearr_32583_32610[(2)] = null);

(statearr_32583_32610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (4))){
var inst_32559 = (state_32579[(8)]);
var inst_32559__$1 = (state_32579[(2)]);
var inst_32560 = (inst_32559__$1 == null);
var inst_32561 = cljs.core.not.call(null,inst_32560);
var state_32579__$1 = (function (){var statearr_32584 = state_32579;
(statearr_32584[(8)] = inst_32559__$1);

return statearr_32584;
})();
if(inst_32561){
var statearr_32585_32611 = state_32579__$1;
(statearr_32585_32611[(1)] = (5));

} else {
var statearr_32586_32612 = state_32579__$1;
(statearr_32586_32612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (6))){
var state_32579__$1 = state_32579;
var statearr_32587_32613 = state_32579__$1;
(statearr_32587_32613[(2)] = null);

(statearr_32587_32613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (3))){
var inst_32576 = (state_32579[(2)]);
var inst_32577 = cljs.core.async.close_BANG_.call(null,out);
var state_32579__$1 = (function (){var statearr_32588 = state_32579;
(statearr_32588[(9)] = inst_32576);

return statearr_32588;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32579__$1,inst_32577);
} else {
if((state_val_32580 === (2))){
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32579__$1,(4),ch);
} else {
if((state_val_32580 === (11))){
var inst_32559 = (state_32579[(8)]);
var inst_32568 = (state_32579[(2)]);
var inst_32556 = inst_32559;
var state_32579__$1 = (function (){var statearr_32589 = state_32579;
(statearr_32589[(10)] = inst_32568);

(statearr_32589[(7)] = inst_32556);

return statearr_32589;
})();
var statearr_32590_32614 = state_32579__$1;
(statearr_32590_32614[(2)] = null);

(statearr_32590_32614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (9))){
var inst_32559 = (state_32579[(8)]);
var state_32579__$1 = state_32579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32579__$1,(11),out,inst_32559);
} else {
if((state_val_32580 === (5))){
var inst_32559 = (state_32579[(8)]);
var inst_32556 = (state_32579[(7)]);
var inst_32563 = cljs.core._EQ_.call(null,inst_32559,inst_32556);
var state_32579__$1 = state_32579;
if(inst_32563){
var statearr_32592_32615 = state_32579__$1;
(statearr_32592_32615[(1)] = (8));

} else {
var statearr_32593_32616 = state_32579__$1;
(statearr_32593_32616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (10))){
var inst_32571 = (state_32579[(2)]);
var state_32579__$1 = state_32579;
var statearr_32594_32617 = state_32579__$1;
(statearr_32594_32617[(2)] = inst_32571);

(statearr_32594_32617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32580 === (8))){
var inst_32556 = (state_32579[(7)]);
var tmp32591 = inst_32556;
var inst_32556__$1 = tmp32591;
var state_32579__$1 = (function (){var statearr_32595 = state_32579;
(statearr_32595[(7)] = inst_32556__$1);

return statearr_32595;
})();
var statearr_32596_32618 = state_32579__$1;
(statearr_32596_32618[(2)] = null);

(statearr_32596_32618[(1)] = (2));


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
});})(c__29844__auto___32608,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32608,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32600 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32600[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32600[(1)] = (1));

return statearr_32600;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32579){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32601){if((e32601 instanceof Object)){
var ex__29833__auto__ = e32601;
var statearr_32602_32619 = state_32579;
(statearr_32602_32619[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32620 = state_32579;
state_32579 = G__32620;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32579);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32608,out))
})();
var state__29846__auto__ = (function (){var statearr_32603 = f__29845__auto__.call(null);
(statearr_32603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32608);

return statearr_32603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32608,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args32621 = [];
var len__27787__auto___32691 = arguments.length;
var i__27788__auto___32692 = (0);
while(true){
if((i__27788__auto___32692 < len__27787__auto___32691)){
args32621.push((arguments[i__27788__auto___32692]));

var G__32693 = (i__27788__auto___32692 + (1));
i__27788__auto___32692 = G__32693;
continue;
} else {
}
break;
}

var G__32623 = args32621.length;
switch (G__32623) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32621.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32695,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32695,out){
return (function (state_32661){
var state_val_32662 = (state_32661[(1)]);
if((state_val_32662 === (7))){
var inst_32657 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32663_32696 = state_32661__$1;
(statearr_32663_32696[(2)] = inst_32657);

(statearr_32663_32696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (1))){
var inst_32624 = (new Array(n));
var inst_32625 = inst_32624;
var inst_32626 = (0);
var state_32661__$1 = (function (){var statearr_32664 = state_32661;
(statearr_32664[(7)] = inst_32626);

(statearr_32664[(8)] = inst_32625);

return statearr_32664;
})();
var statearr_32665_32697 = state_32661__$1;
(statearr_32665_32697[(2)] = null);

(statearr_32665_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (4))){
var inst_32629 = (state_32661[(9)]);
var inst_32629__$1 = (state_32661[(2)]);
var inst_32630 = (inst_32629__$1 == null);
var inst_32631 = cljs.core.not.call(null,inst_32630);
var state_32661__$1 = (function (){var statearr_32666 = state_32661;
(statearr_32666[(9)] = inst_32629__$1);

return statearr_32666;
})();
if(inst_32631){
var statearr_32667_32698 = state_32661__$1;
(statearr_32667_32698[(1)] = (5));

} else {
var statearr_32668_32699 = state_32661__$1;
(statearr_32668_32699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (15))){
var inst_32651 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32669_32700 = state_32661__$1;
(statearr_32669_32700[(2)] = inst_32651);

(statearr_32669_32700[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (13))){
var state_32661__$1 = state_32661;
var statearr_32670_32701 = state_32661__$1;
(statearr_32670_32701[(2)] = null);

(statearr_32670_32701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (6))){
var inst_32626 = (state_32661[(7)]);
var inst_32647 = (inst_32626 > (0));
var state_32661__$1 = state_32661;
if(cljs.core.truth_(inst_32647)){
var statearr_32671_32702 = state_32661__$1;
(statearr_32671_32702[(1)] = (12));

} else {
var statearr_32672_32703 = state_32661__$1;
(statearr_32672_32703[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (3))){
var inst_32659 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32661__$1,inst_32659);
} else {
if((state_val_32662 === (12))){
var inst_32625 = (state_32661[(8)]);
var inst_32649 = cljs.core.vec.call(null,inst_32625);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32661__$1,(15),out,inst_32649);
} else {
if((state_val_32662 === (2))){
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32661__$1,(4),ch);
} else {
if((state_val_32662 === (11))){
var inst_32641 = (state_32661[(2)]);
var inst_32642 = (new Array(n));
var inst_32625 = inst_32642;
var inst_32626 = (0);
var state_32661__$1 = (function (){var statearr_32673 = state_32661;
(statearr_32673[(10)] = inst_32641);

(statearr_32673[(7)] = inst_32626);

(statearr_32673[(8)] = inst_32625);

return statearr_32673;
})();
var statearr_32674_32704 = state_32661__$1;
(statearr_32674_32704[(2)] = null);

(statearr_32674_32704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (9))){
var inst_32625 = (state_32661[(8)]);
var inst_32639 = cljs.core.vec.call(null,inst_32625);
var state_32661__$1 = state_32661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32661__$1,(11),out,inst_32639);
} else {
if((state_val_32662 === (5))){
var inst_32626 = (state_32661[(7)]);
var inst_32625 = (state_32661[(8)]);
var inst_32629 = (state_32661[(9)]);
var inst_32634 = (state_32661[(11)]);
var inst_32633 = (inst_32625[inst_32626] = inst_32629);
var inst_32634__$1 = (inst_32626 + (1));
var inst_32635 = (inst_32634__$1 < n);
var state_32661__$1 = (function (){var statearr_32675 = state_32661;
(statearr_32675[(11)] = inst_32634__$1);

(statearr_32675[(12)] = inst_32633);

return statearr_32675;
})();
if(cljs.core.truth_(inst_32635)){
var statearr_32676_32705 = state_32661__$1;
(statearr_32676_32705[(1)] = (8));

} else {
var statearr_32677_32706 = state_32661__$1;
(statearr_32677_32706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (14))){
var inst_32654 = (state_32661[(2)]);
var inst_32655 = cljs.core.async.close_BANG_.call(null,out);
var state_32661__$1 = (function (){var statearr_32679 = state_32661;
(statearr_32679[(13)] = inst_32654);

return statearr_32679;
})();
var statearr_32680_32707 = state_32661__$1;
(statearr_32680_32707[(2)] = inst_32655);

(statearr_32680_32707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (10))){
var inst_32645 = (state_32661[(2)]);
var state_32661__$1 = state_32661;
var statearr_32681_32708 = state_32661__$1;
(statearr_32681_32708[(2)] = inst_32645);

(statearr_32681_32708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32662 === (8))){
var inst_32625 = (state_32661[(8)]);
var inst_32634 = (state_32661[(11)]);
var tmp32678 = inst_32625;
var inst_32625__$1 = tmp32678;
var inst_32626 = inst_32634;
var state_32661__$1 = (function (){var statearr_32682 = state_32661;
(statearr_32682[(7)] = inst_32626);

(statearr_32682[(8)] = inst_32625__$1);

return statearr_32682;
})();
var statearr_32683_32709 = state_32661__$1;
(statearr_32683_32709[(2)] = null);

(statearr_32683_32709[(1)] = (2));


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
});})(c__29844__auto___32695,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32695,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32687[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32687[(1)] = (1));

return statearr_32687;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32661){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32688){if((e32688 instanceof Object)){
var ex__29833__auto__ = e32688;
var statearr_32689_32710 = state_32661;
(statearr_32689_32710[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32711 = state_32661;
state_32661 = G__32711;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32661);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32695,out))
})();
var state__29846__auto__ = (function (){var statearr_32690 = f__29845__auto__.call(null);
(statearr_32690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32695);

return statearr_32690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32695,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args32712 = [];
var len__27787__auto___32786 = arguments.length;
var i__27788__auto___32787 = (0);
while(true){
if((i__27788__auto___32787 < len__27787__auto___32786)){
args32712.push((arguments[i__27788__auto___32787]));

var G__32788 = (i__27788__auto___32787 + (1));
i__27788__auto___32787 = G__32788;
continue;
} else {
}
break;
}

var G__32714 = args32712.length;
switch (G__32714) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args32712.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__29844__auto___32790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__29844__auto___32790,out){
return (function (){
var f__29845__auto__ = (function (){var switch__29829__auto__ = ((function (c__29844__auto___32790,out){
return (function (state_32756){
var state_val_32757 = (state_32756[(1)]);
if((state_val_32757 === (7))){
var inst_32752 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32758_32791 = state_32756__$1;
(statearr_32758_32791[(2)] = inst_32752);

(statearr_32758_32791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (1))){
var inst_32715 = [];
var inst_32716 = inst_32715;
var inst_32717 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_32756__$1 = (function (){var statearr_32759 = state_32756;
(statearr_32759[(7)] = inst_32716);

(statearr_32759[(8)] = inst_32717);

return statearr_32759;
})();
var statearr_32760_32792 = state_32756__$1;
(statearr_32760_32792[(2)] = null);

(statearr_32760_32792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (4))){
var inst_32720 = (state_32756[(9)]);
var inst_32720__$1 = (state_32756[(2)]);
var inst_32721 = (inst_32720__$1 == null);
var inst_32722 = cljs.core.not.call(null,inst_32721);
var state_32756__$1 = (function (){var statearr_32761 = state_32756;
(statearr_32761[(9)] = inst_32720__$1);

return statearr_32761;
})();
if(inst_32722){
var statearr_32762_32793 = state_32756__$1;
(statearr_32762_32793[(1)] = (5));

} else {
var statearr_32763_32794 = state_32756__$1;
(statearr_32763_32794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (15))){
var inst_32746 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32764_32795 = state_32756__$1;
(statearr_32764_32795[(2)] = inst_32746);

(statearr_32764_32795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (13))){
var state_32756__$1 = state_32756;
var statearr_32765_32796 = state_32756__$1;
(statearr_32765_32796[(2)] = null);

(statearr_32765_32796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (6))){
var inst_32716 = (state_32756[(7)]);
var inst_32741 = inst_32716.length;
var inst_32742 = (inst_32741 > (0));
var state_32756__$1 = state_32756;
if(cljs.core.truth_(inst_32742)){
var statearr_32766_32797 = state_32756__$1;
(statearr_32766_32797[(1)] = (12));

} else {
var statearr_32767_32798 = state_32756__$1;
(statearr_32767_32798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (3))){
var inst_32754 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32756__$1,inst_32754);
} else {
if((state_val_32757 === (12))){
var inst_32716 = (state_32756[(7)]);
var inst_32744 = cljs.core.vec.call(null,inst_32716);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32756__$1,(15),out,inst_32744);
} else {
if((state_val_32757 === (2))){
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32756__$1,(4),ch);
} else {
if((state_val_32757 === (11))){
var inst_32720 = (state_32756[(9)]);
var inst_32724 = (state_32756[(10)]);
var inst_32734 = (state_32756[(2)]);
var inst_32735 = [];
var inst_32736 = inst_32735.push(inst_32720);
var inst_32716 = inst_32735;
var inst_32717 = inst_32724;
var state_32756__$1 = (function (){var statearr_32768 = state_32756;
(statearr_32768[(7)] = inst_32716);

(statearr_32768[(11)] = inst_32734);

(statearr_32768[(12)] = inst_32736);

(statearr_32768[(8)] = inst_32717);

return statearr_32768;
})();
var statearr_32769_32799 = state_32756__$1;
(statearr_32769_32799[(2)] = null);

(statearr_32769_32799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (9))){
var inst_32716 = (state_32756[(7)]);
var inst_32732 = cljs.core.vec.call(null,inst_32716);
var state_32756__$1 = state_32756;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32756__$1,(11),out,inst_32732);
} else {
if((state_val_32757 === (5))){
var inst_32720 = (state_32756[(9)]);
var inst_32724 = (state_32756[(10)]);
var inst_32717 = (state_32756[(8)]);
var inst_32724__$1 = f.call(null,inst_32720);
var inst_32725 = cljs.core._EQ_.call(null,inst_32724__$1,inst_32717);
var inst_32726 = cljs.core.keyword_identical_QMARK_.call(null,inst_32717,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_32727 = (inst_32725) || (inst_32726);
var state_32756__$1 = (function (){var statearr_32770 = state_32756;
(statearr_32770[(10)] = inst_32724__$1);

return statearr_32770;
})();
if(cljs.core.truth_(inst_32727)){
var statearr_32771_32800 = state_32756__$1;
(statearr_32771_32800[(1)] = (8));

} else {
var statearr_32772_32801 = state_32756__$1;
(statearr_32772_32801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (14))){
var inst_32749 = (state_32756[(2)]);
var inst_32750 = cljs.core.async.close_BANG_.call(null,out);
var state_32756__$1 = (function (){var statearr_32774 = state_32756;
(statearr_32774[(13)] = inst_32749);

return statearr_32774;
})();
var statearr_32775_32802 = state_32756__$1;
(statearr_32775_32802[(2)] = inst_32750);

(statearr_32775_32802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (10))){
var inst_32739 = (state_32756[(2)]);
var state_32756__$1 = state_32756;
var statearr_32776_32803 = state_32756__$1;
(statearr_32776_32803[(2)] = inst_32739);

(statearr_32776_32803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32757 === (8))){
var inst_32720 = (state_32756[(9)]);
var inst_32716 = (state_32756[(7)]);
var inst_32724 = (state_32756[(10)]);
var inst_32729 = inst_32716.push(inst_32720);
var tmp32773 = inst_32716;
var inst_32716__$1 = tmp32773;
var inst_32717 = inst_32724;
var state_32756__$1 = (function (){var statearr_32777 = state_32756;
(statearr_32777[(7)] = inst_32716__$1);

(statearr_32777[(14)] = inst_32729);

(statearr_32777[(8)] = inst_32717);

return statearr_32777;
})();
var statearr_32778_32804 = state_32756__$1;
(statearr_32778_32804[(2)] = null);

(statearr_32778_32804[(1)] = (2));


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
});})(c__29844__auto___32790,out))
;
return ((function (switch__29829__auto__,c__29844__auto___32790,out){
return (function() {
var cljs$core$async$state_machine__29830__auto__ = null;
var cljs$core$async$state_machine__29830__auto____0 = (function (){
var statearr_32782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32782[(0)] = cljs$core$async$state_machine__29830__auto__);

(statearr_32782[(1)] = (1));

return statearr_32782;
});
var cljs$core$async$state_machine__29830__auto____1 = (function (state_32756){
while(true){
var ret_value__29831__auto__ = (function (){try{while(true){
var result__29832__auto__ = switch__29829__auto__.call(null,state_32756);
if(cljs.core.keyword_identical_QMARK_.call(null,result__29832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__29832__auto__;
}
break;
}
}catch (e32783){if((e32783 instanceof Object)){
var ex__29833__auto__ = e32783;
var statearr_32784_32805 = state_32756;
(statearr_32784_32805[(5)] = ex__29833__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32756);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32783;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29831__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32806 = state_32756;
state_32756 = G__32806;
continue;
} else {
return ret_value__29831__auto__;
}
break;
}
});
cljs$core$async$state_machine__29830__auto__ = function(state_32756){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__29830__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__29830__auto____1.call(this,state_32756);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__29830__auto____0;
cljs$core$async$state_machine__29830__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__29830__auto____1;
return cljs$core$async$state_machine__29830__auto__;
})()
;})(switch__29829__auto__,c__29844__auto___32790,out))
})();
var state__29846__auto__ = (function (){var statearr_32785 = f__29845__auto__.call(null);
(statearr_32785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29844__auto___32790);

return statearr_32785;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29846__auto__);
});})(c__29844__auto___32790,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map