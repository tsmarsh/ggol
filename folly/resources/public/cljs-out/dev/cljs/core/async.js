// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17881 = arguments.length;
switch (G__17881) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17882 = (function (f,blockable,meta17883){
this.f = f;
this.blockable = blockable;
this.meta17883 = meta17883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17884,meta17883__$1){
var self__ = this;
var _17884__$1 = this;
return (new cljs.core.async.t_cljs$core$async17882(self__.f,self__.blockable,meta17883__$1));
}));

(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17884){
var self__ = this;
var _17884__$1 = this;
return self__.meta17883;
}));

(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17883","meta17883",1761509500,null)], null);
}));

(cljs.core.async.t_cljs$core$async17882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17882");

(cljs.core.async.t_cljs$core$async17882.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17882.
 */
cljs.core.async.__GT_t_cljs$core$async17882 = (function cljs$core$async$__GT_t_cljs$core$async17882(f__$1,blockable__$1,meta17883){
return (new cljs.core.async.t_cljs$core$async17882(f__$1,blockable__$1,meta17883));
});

}

return (new cljs.core.async.t_cljs$core$async17882(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

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
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
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
var G__17888 = arguments.length;
switch (G__17888) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17891 = arguments.length;
switch (G__17891) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

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
var G__17894 = arguments.length;
switch (G__17894) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_17896 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_17896);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_17896);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17898 = arguments.length;
switch (G__17898) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___17900 = n;
var x_17901 = (0);
while(true){
if((x_17901 < n__4613__auto___17900)){
(a[x_17901] = x_17901);

var G__17902 = (x_17901 + (1));
x_17901 = G__17902;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17903 = (function (flag,meta17904){
this.flag = flag;
this.meta17904 = meta17904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17905,meta17904__$1){
var self__ = this;
var _17905__$1 = this;
return (new cljs.core.async.t_cljs$core$async17903(self__.flag,meta17904__$1));
}));

(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17905){
var self__ = this;
var _17905__$1 = this;
return self__.meta17904;
}));

(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17903.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17903.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17904","meta17904",1493486936,null)], null);
}));

(cljs.core.async.t_cljs$core$async17903.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17903.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17903");

(cljs.core.async.t_cljs$core$async17903.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17903");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17903.
 */
cljs.core.async.__GT_t_cljs$core$async17903 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17903(flag__$1,meta17904){
return (new cljs.core.async.t_cljs$core$async17903(flag__$1,meta17904));
});

}

return (new cljs.core.async.t_cljs$core$async17903(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17906 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17906 = (function (flag,cb,meta17907){
this.flag = flag;
this.cb = cb;
this.meta17907 = meta17907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17908,meta17907__$1){
var self__ = this;
var _17908__$1 = this;
return (new cljs.core.async.t_cljs$core$async17906(self__.flag,self__.cb,meta17907__$1));
}));

(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17908){
var self__ = this;
var _17908__$1 = this;
return self__.meta17907;
}));

(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17906.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17907","meta17907",550037516,null)], null);
}));

(cljs.core.async.t_cljs$core$async17906.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17906.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17906");

(cljs.core.async.t_cljs$core$async17906.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async17906");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17906.
 */
cljs.core.async.__GT_t_cljs$core$async17906 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17906(flag__$1,cb__$1,meta17907){
return (new cljs.core.async.t_cljs$core$async17906(flag__$1,cb__$1,meta17907));
});

}

return (new cljs.core.async.t_cljs$core$async17906(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__17909_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17909_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17910_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17910_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17911 = (i + (1));
i = G__17911;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___17917 = arguments.length;
var i__4737__auto___17918 = (0);
while(true){
if((i__4737__auto___17918 < len__4736__auto___17917)){
args__4742__auto__.push((arguments[i__4737__auto___17918]));

var G__17919 = (i__4737__auto___17918 + (1));
i__4737__auto___17918 = G__17919;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17914){
var map__17915 = p__17914;
var map__17915__$1 = (((((!((map__17915 == null))))?(((((map__17915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17915):map__17915);
var opts = map__17915__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17912){
var G__17913 = cljs.core.first.call(null,seq17912);
var seq17912__$1 = cljs.core.next.call(null,seq17912);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17913,seq17912__$1);
}));

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
var G__17921 = arguments.length;
switch (G__17921) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__16938__auto___17968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_17945){
var state_val_17946 = (state_17945[(1)]);
if((state_val_17946 === (7))){
var inst_17941 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17947_17969 = state_17945__$1;
(statearr_17947_17969[(2)] = inst_17941);

(statearr_17947_17969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (1))){
var state_17945__$1 = state_17945;
var statearr_17948_17970 = state_17945__$1;
(statearr_17948_17970[(2)] = null);

(statearr_17948_17970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (4))){
var inst_17924 = (state_17945[(7)]);
var inst_17924__$1 = (state_17945[(2)]);
var inst_17925 = (inst_17924__$1 == null);
var state_17945__$1 = (function (){var statearr_17949 = state_17945;
(statearr_17949[(7)] = inst_17924__$1);

return statearr_17949;
})();
if(cljs.core.truth_(inst_17925)){
var statearr_17950_17971 = state_17945__$1;
(statearr_17950_17971[(1)] = (5));

} else {
var statearr_17951_17972 = state_17945__$1;
(statearr_17951_17972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (13))){
var state_17945__$1 = state_17945;
var statearr_17952_17973 = state_17945__$1;
(statearr_17952_17973[(2)] = null);

(statearr_17952_17973[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (6))){
var inst_17924 = (state_17945[(7)]);
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17945__$1,(11),to,inst_17924);
} else {
if((state_val_17946 === (3))){
var inst_17943 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17945__$1,inst_17943);
} else {
if((state_val_17946 === (12))){
var state_17945__$1 = state_17945;
var statearr_17953_17974 = state_17945__$1;
(statearr_17953_17974[(2)] = null);

(statearr_17953_17974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (2))){
var state_17945__$1 = state_17945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17945__$1,(4),from);
} else {
if((state_val_17946 === (11))){
var inst_17934 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
if(cljs.core.truth_(inst_17934)){
var statearr_17954_17975 = state_17945__$1;
(statearr_17954_17975[(1)] = (12));

} else {
var statearr_17955_17976 = state_17945__$1;
(statearr_17955_17976[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (9))){
var state_17945__$1 = state_17945;
var statearr_17956_17977 = state_17945__$1;
(statearr_17956_17977[(2)] = null);

(statearr_17956_17977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (5))){
var state_17945__$1 = state_17945;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17957_17978 = state_17945__$1;
(statearr_17957_17978[(1)] = (8));

} else {
var statearr_17958_17979 = state_17945__$1;
(statearr_17958_17979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (14))){
var inst_17939 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17959_17980 = state_17945__$1;
(statearr_17959_17980[(2)] = inst_17939);

(statearr_17959_17980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (10))){
var inst_17931 = (state_17945[(2)]);
var state_17945__$1 = state_17945;
var statearr_17960_17981 = state_17945__$1;
(statearr_17960_17981[(2)] = inst_17931);

(statearr_17960_17981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17946 === (8))){
var inst_17928 = cljs.core.async.close_BANG_.call(null,to);
var state_17945__$1 = state_17945;
var statearr_17961_17982 = state_17945__$1;
(statearr_17961_17982[(2)] = inst_17928);

(statearr_17961_17982[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_17962 = [null,null,null,null,null,null,null,null];
(statearr_17962[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_17962[(1)] = (1));

return statearr_17962;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_17945){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_17945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e17963){var ex__16925__auto__ = e17963;
var statearr_17964_17983 = state_17945;
(statearr_17964_17983[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_17945[(4)]))){
var statearr_17965_17984 = state_17945;
(statearr_17965_17984[(1)] = cljs.core.first.call(null,(state_17945[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17985 = state_17945;
state_17945 = G__17985;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_17945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_17945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_17966 = f__16939__auto__.call(null);
(statearr_17966[(6)] = c__16938__auto___17968);

return statearr_17966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__17986){
var vec__17987 = p__17986;
var v = cljs.core.nth.call(null,vec__17987,(0),null);
var p = cljs.core.nth.call(null,vec__17987,(1),null);
var job = vec__17987;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__16938__auto___18163 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_17994){
var state_val_17995 = (state_17994[(1)]);
if((state_val_17995 === (1))){
var state_17994__$1 = state_17994;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17994__$1,(2),res,v);
} else {
if((state_val_17995 === (2))){
var inst_17991 = (state_17994[(2)]);
var inst_17992 = cljs.core.async.close_BANG_.call(null,res);
var state_17994__$1 = (function (){var statearr_17996 = state_17994;
(statearr_17996[(7)] = inst_17991);

return statearr_17996;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17994__$1,inst_17992);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_17997 = [null,null,null,null,null,null,null,null];
(statearr_17997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__);

(statearr_17997[(1)] = (1));

return statearr_17997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1 = (function (state_17994){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_17994);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e17998){var ex__16925__auto__ = e17998;
var statearr_17999_18164 = state_17994;
(statearr_17999_18164[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_17994[(4)]))){
var statearr_18000_18165 = state_17994;
(statearr_18000_18165[(1)] = cljs.core.first.call(null,(state_17994[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18166 = state_17994;
state_17994 = G__18166;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = function(state_17994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1.call(this,state_17994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18001 = f__16939__auto__.call(null);
(statearr_18001[(6)] = c__16938__auto___18163);

return statearr_18001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__18002){
var vec__18003 = p__18002;
var v = cljs.core.nth.call(null,vec__18003,(0),null);
var p = cljs.core.nth.call(null,vec__18003,(1),null);
var job = vec__18003;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___18167 = n;
var __18168 = (0);
while(true){
if((__18168 < n__4613__auto___18167)){
var G__18006_18169 = type;
var G__18006_18170__$1 = (((G__18006_18169 instanceof cljs.core.Keyword))?G__18006_18169.fqn:null);
switch (G__18006_18170__$1) {
case "compute":
var c__16938__auto___18172 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18168,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = ((function (__18168,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function (state_18019){
var state_val_18020 = (state_18019[(1)]);
if((state_val_18020 === (1))){
var state_18019__$1 = state_18019;
var statearr_18021_18173 = state_18019__$1;
(statearr_18021_18173[(2)] = null);

(statearr_18021_18173[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18020 === (2))){
var state_18019__$1 = state_18019;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18019__$1,(4),jobs);
} else {
if((state_val_18020 === (3))){
var inst_18017 = (state_18019[(2)]);
var state_18019__$1 = state_18019;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18019__$1,inst_18017);
} else {
if((state_val_18020 === (4))){
var inst_18009 = (state_18019[(2)]);
var inst_18010 = process.call(null,inst_18009);
var state_18019__$1 = state_18019;
if(cljs.core.truth_(inst_18010)){
var statearr_18022_18174 = state_18019__$1;
(statearr_18022_18174[(1)] = (5));

} else {
var statearr_18023_18175 = state_18019__$1;
(statearr_18023_18175[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18020 === (5))){
var state_18019__$1 = state_18019;
var statearr_18024_18176 = state_18019__$1;
(statearr_18024_18176[(2)] = null);

(statearr_18024_18176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18020 === (6))){
var state_18019__$1 = state_18019;
var statearr_18025_18177 = state_18019__$1;
(statearr_18025_18177[(2)] = null);

(statearr_18025_18177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18020 === (7))){
var inst_18015 = (state_18019[(2)]);
var state_18019__$1 = state_18019;
var statearr_18026_18178 = state_18019__$1;
(statearr_18026_18178[(2)] = inst_18015);

(statearr_18026_18178[(1)] = (3));


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
});})(__18168,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
;
return ((function (__18168,switch__16921__auto__,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_18027 = [null,null,null,null,null,null,null];
(statearr_18027[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__);

(statearr_18027[(1)] = (1));

return statearr_18027;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1 = (function (state_18019){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18019);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18028){var ex__16925__auto__ = e18028;
var statearr_18029_18179 = state_18019;
(statearr_18029_18179[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18019[(4)]))){
var statearr_18030_18180 = state_18019;
(statearr_18030_18180[(1)] = cljs.core.first.call(null,(state_18019[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18181 = state_18019;
state_18019 = G__18181;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = function(state_18019){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1.call(this,state_18019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__;
})()
;})(__18168,switch__16921__auto__,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
})();
var state__16940__auto__ = (function (){var statearr_18031 = f__16939__auto__.call(null);
(statearr_18031[(6)] = c__16938__auto___18172);

return statearr_18031;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
});})(__18168,c__16938__auto___18172,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
);


break;
case "async":
var c__16938__auto___18182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__18168,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = ((function (__18168,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function (state_18044){
var state_val_18045 = (state_18044[(1)]);
if((state_val_18045 === (1))){
var state_18044__$1 = state_18044;
var statearr_18046_18183 = state_18044__$1;
(statearr_18046_18183[(2)] = null);

(statearr_18046_18183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (2))){
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18044__$1,(4),jobs);
} else {
if((state_val_18045 === (3))){
var inst_18042 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18044__$1,inst_18042);
} else {
if((state_val_18045 === (4))){
var inst_18034 = (state_18044[(2)]);
var inst_18035 = async.call(null,inst_18034);
var state_18044__$1 = state_18044;
if(cljs.core.truth_(inst_18035)){
var statearr_18047_18184 = state_18044__$1;
(statearr_18047_18184[(1)] = (5));

} else {
var statearr_18048_18185 = state_18044__$1;
(statearr_18048_18185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (5))){
var state_18044__$1 = state_18044;
var statearr_18049_18186 = state_18044__$1;
(statearr_18049_18186[(2)] = null);

(statearr_18049_18186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (6))){
var state_18044__$1 = state_18044;
var statearr_18050_18187 = state_18044__$1;
(statearr_18050_18187[(2)] = null);

(statearr_18050_18187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18045 === (7))){
var inst_18040 = (state_18044[(2)]);
var state_18044__$1 = state_18044;
var statearr_18051_18188 = state_18044__$1;
(statearr_18051_18188[(2)] = inst_18040);

(statearr_18051_18188[(1)] = (3));


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
});})(__18168,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
;
return ((function (__18168,switch__16921__auto__,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_18052 = [null,null,null,null,null,null,null];
(statearr_18052[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__);

(statearr_18052[(1)] = (1));

return statearr_18052;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1 = (function (state_18044){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18053){var ex__16925__auto__ = e18053;
var statearr_18054_18189 = state_18044;
(statearr_18054_18189[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18044[(4)]))){
var statearr_18055_18190 = state_18044;
(statearr_18055_18190[(1)] = cljs.core.first.call(null,(state_18044[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18191 = state_18044;
state_18044 = G__18191;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = function(state_18044){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1.call(this,state_18044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__;
})()
;})(__18168,switch__16921__auto__,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
})();
var state__16940__auto__ = (function (){var statearr_18056 = f__16939__auto__.call(null);
(statearr_18056[(6)] = c__16938__auto___18182);

return statearr_18056;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
});})(__18168,c__16938__auto___18182,G__18006_18169,G__18006_18170__$1,n__4613__auto___18167,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18006_18170__$1)].join('')));

}

var G__18192 = (__18168 + (1));
__18168 = G__18192;
continue;
} else {
}
break;
}

var c__16938__auto___18193 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18078){
var state_val_18079 = (state_18078[(1)]);
if((state_val_18079 === (7))){
var inst_18074 = (state_18078[(2)]);
var state_18078__$1 = state_18078;
var statearr_18080_18194 = state_18078__$1;
(statearr_18080_18194[(2)] = inst_18074);

(statearr_18080_18194[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18079 === (1))){
var state_18078__$1 = state_18078;
var statearr_18081_18195 = state_18078__$1;
(statearr_18081_18195[(2)] = null);

(statearr_18081_18195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18079 === (4))){
var inst_18059 = (state_18078[(7)]);
var inst_18059__$1 = (state_18078[(2)]);
var inst_18060 = (inst_18059__$1 == null);
var state_18078__$1 = (function (){var statearr_18082 = state_18078;
(statearr_18082[(7)] = inst_18059__$1);

return statearr_18082;
})();
if(cljs.core.truth_(inst_18060)){
var statearr_18083_18196 = state_18078__$1;
(statearr_18083_18196[(1)] = (5));

} else {
var statearr_18084_18197 = state_18078__$1;
(statearr_18084_18197[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18079 === (6))){
var inst_18059 = (state_18078[(7)]);
var inst_18064 = (state_18078[(8)]);
var inst_18064__$1 = cljs.core.async.chan.call(null,(1));
var inst_18065 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18066 = [inst_18059,inst_18064__$1];
var inst_18067 = (new cljs.core.PersistentVector(null,2,(5),inst_18065,inst_18066,null));
var state_18078__$1 = (function (){var statearr_18085 = state_18078;
(statearr_18085[(8)] = inst_18064__$1);

return statearr_18085;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18078__$1,(8),jobs,inst_18067);
} else {
if((state_val_18079 === (3))){
var inst_18076 = (state_18078[(2)]);
var state_18078__$1 = state_18078;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18078__$1,inst_18076);
} else {
if((state_val_18079 === (2))){
var state_18078__$1 = state_18078;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18078__$1,(4),from);
} else {
if((state_val_18079 === (9))){
var inst_18071 = (state_18078[(2)]);
var state_18078__$1 = (function (){var statearr_18086 = state_18078;
(statearr_18086[(9)] = inst_18071);

return statearr_18086;
})();
var statearr_18087_18198 = state_18078__$1;
(statearr_18087_18198[(2)] = null);

(statearr_18087_18198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18079 === (5))){
var inst_18062 = cljs.core.async.close_BANG_.call(null,jobs);
var state_18078__$1 = state_18078;
var statearr_18088_18199 = state_18078__$1;
(statearr_18088_18199[(2)] = inst_18062);

(statearr_18088_18199[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18079 === (8))){
var inst_18064 = (state_18078[(8)]);
var inst_18069 = (state_18078[(2)]);
var state_18078__$1 = (function (){var statearr_18089 = state_18078;
(statearr_18089[(10)] = inst_18069);

return statearr_18089;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18078__$1,(9),results,inst_18064);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_18090 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18090[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__);

(statearr_18090[(1)] = (1));

return statearr_18090;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1 = (function (state_18078){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18078);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18091){var ex__16925__auto__ = e18091;
var statearr_18092_18200 = state_18078;
(statearr_18092_18200[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18078[(4)]))){
var statearr_18093_18201 = state_18078;
(statearr_18093_18201[(1)] = cljs.core.first.call(null,(state_18078[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18202 = state_18078;
state_18078 = G__18202;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = function(state_18078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1.call(this,state_18078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18094 = f__16939__auto__.call(null);
(statearr_18094[(6)] = c__16938__auto___18193);

return statearr_18094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


var c__16938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18132){
var state_val_18133 = (state_18132[(1)]);
if((state_val_18133 === (7))){
var inst_18128 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18134_18203 = state_18132__$1;
(statearr_18134_18203[(2)] = inst_18128);

(statearr_18134_18203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (20))){
var state_18132__$1 = state_18132;
var statearr_18135_18204 = state_18132__$1;
(statearr_18135_18204[(2)] = null);

(statearr_18135_18204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (1))){
var state_18132__$1 = state_18132;
var statearr_18136_18205 = state_18132__$1;
(statearr_18136_18205[(2)] = null);

(statearr_18136_18205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (4))){
var inst_18097 = (state_18132[(7)]);
var inst_18097__$1 = (state_18132[(2)]);
var inst_18098 = (inst_18097__$1 == null);
var state_18132__$1 = (function (){var statearr_18137 = state_18132;
(statearr_18137[(7)] = inst_18097__$1);

return statearr_18137;
})();
if(cljs.core.truth_(inst_18098)){
var statearr_18138_18206 = state_18132__$1;
(statearr_18138_18206[(1)] = (5));

} else {
var statearr_18139_18207 = state_18132__$1;
(statearr_18139_18207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (15))){
var inst_18110 = (state_18132[(8)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18132__$1,(18),to,inst_18110);
} else {
if((state_val_18133 === (21))){
var inst_18123 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18140_18208 = state_18132__$1;
(statearr_18140_18208[(2)] = inst_18123);

(statearr_18140_18208[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (13))){
var inst_18125 = (state_18132[(2)]);
var state_18132__$1 = (function (){var statearr_18141 = state_18132;
(statearr_18141[(9)] = inst_18125);

return statearr_18141;
})();
var statearr_18142_18209 = state_18132__$1;
(statearr_18142_18209[(2)] = null);

(statearr_18142_18209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (6))){
var inst_18097 = (state_18132[(7)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18132__$1,(11),inst_18097);
} else {
if((state_val_18133 === (17))){
var inst_18118 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
if(cljs.core.truth_(inst_18118)){
var statearr_18143_18210 = state_18132__$1;
(statearr_18143_18210[(1)] = (19));

} else {
var statearr_18144_18211 = state_18132__$1;
(statearr_18144_18211[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (3))){
var inst_18130 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18132__$1,inst_18130);
} else {
if((state_val_18133 === (12))){
var inst_18107 = (state_18132[(10)]);
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18132__$1,(14),inst_18107);
} else {
if((state_val_18133 === (2))){
var state_18132__$1 = state_18132;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18132__$1,(4),results);
} else {
if((state_val_18133 === (19))){
var state_18132__$1 = state_18132;
var statearr_18145_18212 = state_18132__$1;
(statearr_18145_18212[(2)] = null);

(statearr_18145_18212[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (11))){
var inst_18107 = (state_18132[(2)]);
var state_18132__$1 = (function (){var statearr_18146 = state_18132;
(statearr_18146[(10)] = inst_18107);

return statearr_18146;
})();
var statearr_18147_18213 = state_18132__$1;
(statearr_18147_18213[(2)] = null);

(statearr_18147_18213[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (9))){
var state_18132__$1 = state_18132;
var statearr_18148_18214 = state_18132__$1;
(statearr_18148_18214[(2)] = null);

(statearr_18148_18214[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (5))){
var state_18132__$1 = state_18132;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18149_18215 = state_18132__$1;
(statearr_18149_18215[(1)] = (8));

} else {
var statearr_18150_18216 = state_18132__$1;
(statearr_18150_18216[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (14))){
var inst_18110 = (state_18132[(8)]);
var inst_18110__$1 = (state_18132[(2)]);
var inst_18111 = (inst_18110__$1 == null);
var inst_18112 = cljs.core.not.call(null,inst_18111);
var state_18132__$1 = (function (){var statearr_18151 = state_18132;
(statearr_18151[(8)] = inst_18110__$1);

return statearr_18151;
})();
if(inst_18112){
var statearr_18152_18217 = state_18132__$1;
(statearr_18152_18217[(1)] = (15));

} else {
var statearr_18153_18218 = state_18132__$1;
(statearr_18153_18218[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (16))){
var state_18132__$1 = state_18132;
var statearr_18154_18219 = state_18132__$1;
(statearr_18154_18219[(2)] = false);

(statearr_18154_18219[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (10))){
var inst_18104 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18155_18220 = state_18132__$1;
(statearr_18155_18220[(2)] = inst_18104);

(statearr_18155_18220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (18))){
var inst_18115 = (state_18132[(2)]);
var state_18132__$1 = state_18132;
var statearr_18156_18221 = state_18132__$1;
(statearr_18156_18221[(2)] = inst_18115);

(statearr_18156_18221[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18133 === (8))){
var inst_18101 = cljs.core.async.close_BANG_.call(null,to);
var state_18132__$1 = state_18132;
var statearr_18157_18222 = state_18132__$1;
(statearr_18157_18222[(2)] = inst_18101);

(statearr_18157_18222[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_18158 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18158[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__);

(statearr_18158[(1)] = (1));

return statearr_18158;
});
var cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1 = (function (state_18132){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18132);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18159){var ex__16925__auto__ = e18159;
var statearr_18160_18223 = state_18132;
(statearr_18160_18223[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18132[(4)]))){
var statearr_18161_18224 = state_18132;
(statearr_18161_18224[(1)] = cljs.core.first.call(null,(state_18132[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18225 = state_18132;
state_18132 = G__18225;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__ = function(state_18132){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1.call(this,state_18132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18162 = f__16939__auto__.call(null);
(statearr_18162[(6)] = c__16938__auto__);

return statearr_18162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

return c__16938__auto__;
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
var G__18227 = arguments.length;
switch (G__18227) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__18230 = arguments.length;
switch (G__18230) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__18233 = arguments.length;
switch (G__18233) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__16938__auto___18283 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18259){
var state_val_18260 = (state_18259[(1)]);
if((state_val_18260 === (7))){
var inst_18255 = (state_18259[(2)]);
var state_18259__$1 = state_18259;
var statearr_18261_18284 = state_18259__$1;
(statearr_18261_18284[(2)] = inst_18255);

(statearr_18261_18284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (1))){
var state_18259__$1 = state_18259;
var statearr_18262_18285 = state_18259__$1;
(statearr_18262_18285[(2)] = null);

(statearr_18262_18285[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (4))){
var inst_18236 = (state_18259[(7)]);
var inst_18236__$1 = (state_18259[(2)]);
var inst_18237 = (inst_18236__$1 == null);
var state_18259__$1 = (function (){var statearr_18263 = state_18259;
(statearr_18263[(7)] = inst_18236__$1);

return statearr_18263;
})();
if(cljs.core.truth_(inst_18237)){
var statearr_18264_18286 = state_18259__$1;
(statearr_18264_18286[(1)] = (5));

} else {
var statearr_18265_18287 = state_18259__$1;
(statearr_18265_18287[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (13))){
var state_18259__$1 = state_18259;
var statearr_18266_18288 = state_18259__$1;
(statearr_18266_18288[(2)] = null);

(statearr_18266_18288[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (6))){
var inst_18236 = (state_18259[(7)]);
var inst_18242 = p.call(null,inst_18236);
var state_18259__$1 = state_18259;
if(cljs.core.truth_(inst_18242)){
var statearr_18267_18289 = state_18259__$1;
(statearr_18267_18289[(1)] = (9));

} else {
var statearr_18268_18290 = state_18259__$1;
(statearr_18268_18290[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (3))){
var inst_18257 = (state_18259[(2)]);
var state_18259__$1 = state_18259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18259__$1,inst_18257);
} else {
if((state_val_18260 === (12))){
var state_18259__$1 = state_18259;
var statearr_18269_18291 = state_18259__$1;
(statearr_18269_18291[(2)] = null);

(statearr_18269_18291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (2))){
var state_18259__$1 = state_18259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18259__$1,(4),ch);
} else {
if((state_val_18260 === (11))){
var inst_18236 = (state_18259[(7)]);
var inst_18246 = (state_18259[(2)]);
var state_18259__$1 = state_18259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18259__$1,(8),inst_18246,inst_18236);
} else {
if((state_val_18260 === (9))){
var state_18259__$1 = state_18259;
var statearr_18270_18292 = state_18259__$1;
(statearr_18270_18292[(2)] = tc);

(statearr_18270_18292[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (5))){
var inst_18239 = cljs.core.async.close_BANG_.call(null,tc);
var inst_18240 = cljs.core.async.close_BANG_.call(null,fc);
var state_18259__$1 = (function (){var statearr_18271 = state_18259;
(statearr_18271[(8)] = inst_18239);

return statearr_18271;
})();
var statearr_18272_18293 = state_18259__$1;
(statearr_18272_18293[(2)] = inst_18240);

(statearr_18272_18293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (14))){
var inst_18253 = (state_18259[(2)]);
var state_18259__$1 = state_18259;
var statearr_18273_18294 = state_18259__$1;
(statearr_18273_18294[(2)] = inst_18253);

(statearr_18273_18294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (10))){
var state_18259__$1 = state_18259;
var statearr_18274_18295 = state_18259__$1;
(statearr_18274_18295[(2)] = fc);

(statearr_18274_18295[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18260 === (8))){
var inst_18248 = (state_18259[(2)]);
var state_18259__$1 = state_18259;
if(cljs.core.truth_(inst_18248)){
var statearr_18275_18296 = state_18259__$1;
(statearr_18275_18296[(1)] = (12));

} else {
var statearr_18276_18297 = state_18259__$1;
(statearr_18276_18297[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_18277 = [null,null,null,null,null,null,null,null,null];
(statearr_18277[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_18277[(1)] = (1));

return statearr_18277;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_18259){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18278){var ex__16925__auto__ = e18278;
var statearr_18279_18298 = state_18259;
(statearr_18279_18298[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18259[(4)]))){
var statearr_18280_18299 = state_18259;
(statearr_18280_18299[(1)] = cljs.core.first.call(null,(state_18259[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18300 = state_18259;
state_18259 = G__18300;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_18259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_18259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18281 = f__16939__auto__.call(null);
(statearr_18281[(6)] = c__16938__auto___18283);

return statearr_18281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__16938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18322){
var state_val_18323 = (state_18322[(1)]);
if((state_val_18323 === (7))){
var inst_18318 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18324_18343 = state_18322__$1;
(statearr_18324_18343[(2)] = inst_18318);

(statearr_18324_18343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (1))){
var inst_18301 = init;
var inst_18302 = inst_18301;
var state_18322__$1 = (function (){var statearr_18325 = state_18322;
(statearr_18325[(7)] = inst_18302);

return statearr_18325;
})();
var statearr_18326_18344 = state_18322__$1;
(statearr_18326_18344[(2)] = null);

(statearr_18326_18344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (4))){
var inst_18305 = (state_18322[(8)]);
var inst_18305__$1 = (state_18322[(2)]);
var inst_18306 = (inst_18305__$1 == null);
var state_18322__$1 = (function (){var statearr_18327 = state_18322;
(statearr_18327[(8)] = inst_18305__$1);

return statearr_18327;
})();
if(cljs.core.truth_(inst_18306)){
var statearr_18328_18345 = state_18322__$1;
(statearr_18328_18345[(1)] = (5));

} else {
var statearr_18329_18346 = state_18322__$1;
(statearr_18329_18346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (6))){
var inst_18305 = (state_18322[(8)]);
var inst_18309 = (state_18322[(9)]);
var inst_18302 = (state_18322[(7)]);
var inst_18309__$1 = f.call(null,inst_18302,inst_18305);
var inst_18310 = cljs.core.reduced_QMARK_.call(null,inst_18309__$1);
var state_18322__$1 = (function (){var statearr_18330 = state_18322;
(statearr_18330[(9)] = inst_18309__$1);

return statearr_18330;
})();
if(inst_18310){
var statearr_18331_18347 = state_18322__$1;
(statearr_18331_18347[(1)] = (8));

} else {
var statearr_18332_18348 = state_18322__$1;
(statearr_18332_18348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (3))){
var inst_18320 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18322__$1,inst_18320);
} else {
if((state_val_18323 === (2))){
var state_18322__$1 = state_18322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18322__$1,(4),ch);
} else {
if((state_val_18323 === (9))){
var inst_18309 = (state_18322[(9)]);
var inst_18302 = inst_18309;
var state_18322__$1 = (function (){var statearr_18333 = state_18322;
(statearr_18333[(7)] = inst_18302);

return statearr_18333;
})();
var statearr_18334_18349 = state_18322__$1;
(statearr_18334_18349[(2)] = null);

(statearr_18334_18349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (5))){
var inst_18302 = (state_18322[(7)]);
var state_18322__$1 = state_18322;
var statearr_18335_18350 = state_18322__$1;
(statearr_18335_18350[(2)] = inst_18302);

(statearr_18335_18350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (10))){
var inst_18316 = (state_18322[(2)]);
var state_18322__$1 = state_18322;
var statearr_18336_18351 = state_18322__$1;
(statearr_18336_18351[(2)] = inst_18316);

(statearr_18336_18351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18323 === (8))){
var inst_18309 = (state_18322[(9)]);
var inst_18312 = cljs.core.deref.call(null,inst_18309);
var state_18322__$1 = state_18322;
var statearr_18337_18352 = state_18322__$1;
(statearr_18337_18352[(2)] = inst_18312);

(statearr_18337_18352[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__16922__auto__ = null;
var cljs$core$async$reduce_$_state_machine__16922__auto____0 = (function (){
var statearr_18338 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18338[(0)] = cljs$core$async$reduce_$_state_machine__16922__auto__);

(statearr_18338[(1)] = (1));

return statearr_18338;
});
var cljs$core$async$reduce_$_state_machine__16922__auto____1 = (function (state_18322){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18339){var ex__16925__auto__ = e18339;
var statearr_18340_18353 = state_18322;
(statearr_18340_18353[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18322[(4)]))){
var statearr_18341_18354 = state_18322;
(statearr_18341_18354[(1)] = cljs.core.first.call(null,(state_18322[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18355 = state_18322;
state_18322 = G__18355;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__16922__auto__ = function(state_18322){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__16922__auto____1.call(this,state_18322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__16922__auto____0;
cljs$core$async$reduce_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__16922__auto____1;
return cljs$core$async$reduce_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18342 = f__16939__auto__.call(null);
(statearr_18342[(6)] = c__16938__auto__);

return statearr_18342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

return c__16938__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__16938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18361){
var state_val_18362 = (state_18361[(1)]);
if((state_val_18362 === (1))){
var inst_18356 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18361__$1,(2),inst_18356);
} else {
if((state_val_18362 === (2))){
var inst_18358 = (state_18361[(2)]);
var inst_18359 = f__$1.call(null,inst_18358);
var state_18361__$1 = state_18361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18361__$1,inst_18359);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__16922__auto__ = null;
var cljs$core$async$transduce_$_state_machine__16922__auto____0 = (function (){
var statearr_18363 = [null,null,null,null,null,null,null];
(statearr_18363[(0)] = cljs$core$async$transduce_$_state_machine__16922__auto__);

(statearr_18363[(1)] = (1));

return statearr_18363;
});
var cljs$core$async$transduce_$_state_machine__16922__auto____1 = (function (state_18361){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18364){var ex__16925__auto__ = e18364;
var statearr_18365_18368 = state_18361;
(statearr_18365_18368[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18361[(4)]))){
var statearr_18366_18369 = state_18361;
(statearr_18366_18369[(1)] = cljs.core.first.call(null,(state_18361[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18370 = state_18361;
state_18361 = G__18370;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__16922__auto__ = function(state_18361){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__16922__auto____1.call(this,state_18361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__16922__auto____0;
cljs$core$async$transduce_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__16922__auto____1;
return cljs$core$async$transduce_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18367 = f__16939__auto__.call(null);
(statearr_18367[(6)] = c__16938__auto__);

return statearr_18367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

return c__16938__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18372 = arguments.length;
switch (G__18372) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__16938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18397){
var state_val_18398 = (state_18397[(1)]);
if((state_val_18398 === (7))){
var inst_18379 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
var statearr_18399_18421 = state_18397__$1;
(statearr_18399_18421[(2)] = inst_18379);

(statearr_18399_18421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (1))){
var inst_18373 = cljs.core.seq.call(null,coll);
var inst_18374 = inst_18373;
var state_18397__$1 = (function (){var statearr_18400 = state_18397;
(statearr_18400[(7)] = inst_18374);

return statearr_18400;
})();
var statearr_18401_18422 = state_18397__$1;
(statearr_18401_18422[(2)] = null);

(statearr_18401_18422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (4))){
var inst_18374 = (state_18397[(7)]);
var inst_18377 = cljs.core.first.call(null,inst_18374);
var state_18397__$1 = state_18397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18397__$1,(7),ch,inst_18377);
} else {
if((state_val_18398 === (13))){
var inst_18391 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
var statearr_18402_18423 = state_18397__$1;
(statearr_18402_18423[(2)] = inst_18391);

(statearr_18402_18423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (6))){
var inst_18382 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
if(cljs.core.truth_(inst_18382)){
var statearr_18403_18424 = state_18397__$1;
(statearr_18403_18424[(1)] = (8));

} else {
var statearr_18404_18425 = state_18397__$1;
(statearr_18404_18425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (3))){
var inst_18395 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18397__$1,inst_18395);
} else {
if((state_val_18398 === (12))){
var state_18397__$1 = state_18397;
var statearr_18405_18426 = state_18397__$1;
(statearr_18405_18426[(2)] = null);

(statearr_18405_18426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (2))){
var inst_18374 = (state_18397[(7)]);
var state_18397__$1 = state_18397;
if(cljs.core.truth_(inst_18374)){
var statearr_18406_18427 = state_18397__$1;
(statearr_18406_18427[(1)] = (4));

} else {
var statearr_18407_18428 = state_18397__$1;
(statearr_18407_18428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (11))){
var inst_18388 = cljs.core.async.close_BANG_.call(null,ch);
var state_18397__$1 = state_18397;
var statearr_18408_18429 = state_18397__$1;
(statearr_18408_18429[(2)] = inst_18388);

(statearr_18408_18429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (9))){
var state_18397__$1 = state_18397;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18409_18430 = state_18397__$1;
(statearr_18409_18430[(1)] = (11));

} else {
var statearr_18410_18431 = state_18397__$1;
(statearr_18410_18431[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (5))){
var inst_18374 = (state_18397[(7)]);
var state_18397__$1 = state_18397;
var statearr_18411_18432 = state_18397__$1;
(statearr_18411_18432[(2)] = inst_18374);

(statearr_18411_18432[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (10))){
var inst_18393 = (state_18397[(2)]);
var state_18397__$1 = state_18397;
var statearr_18412_18433 = state_18397__$1;
(statearr_18412_18433[(2)] = inst_18393);

(statearr_18412_18433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18398 === (8))){
var inst_18374 = (state_18397[(7)]);
var inst_18384 = cljs.core.next.call(null,inst_18374);
var inst_18374__$1 = inst_18384;
var state_18397__$1 = (function (){var statearr_18413 = state_18397;
(statearr_18413[(7)] = inst_18374__$1);

return statearr_18413;
})();
var statearr_18414_18434 = state_18397__$1;
(statearr_18414_18434[(2)] = null);

(statearr_18414_18434[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_18415 = [null,null,null,null,null,null,null,null];
(statearr_18415[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_18415[(1)] = (1));

return statearr_18415;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_18397){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18416){var ex__16925__auto__ = e18416;
var statearr_18417_18435 = state_18397;
(statearr_18417_18435[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18397[(4)]))){
var statearr_18418_18436 = state_18397;
(statearr_18418_18436[(1)] = cljs.core.first.call(null,(state_18397[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18437 = state_18397;
state_18397 = G__18437;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_18397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_18397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18419 = f__16939__auto__.call(null);
(statearr_18419[(6)] = c__16938__auto__);

return statearr_18419;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

return c__16938__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18439 = arguments.length;
switch (G__18439) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18441 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18441.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18442 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18442.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18443 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18443.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18444 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18444.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18445 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18445 = (function (ch,cs,meta18446){
this.ch = ch;
this.cs = cs;
this.meta18446 = meta18446;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18447,meta18446__$1){
var self__ = this;
var _18447__$1 = this;
return (new cljs.core.async.t_cljs$core$async18445(self__.ch,self__.cs,meta18446__$1));
}));

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18447){
var self__ = this;
var _18447__$1 = this;
return self__.meta18446;
}));

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18445.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18446","meta18446",777017505,null)], null);
}));

(cljs.core.async.t_cljs$core$async18445.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18445.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18445");

(cljs.core.async.t_cljs$core$async18445.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18445");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18445.
 */
cljs.core.async.__GT_t_cljs$core$async18445 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18445(ch__$1,cs__$1,meta18446){
return (new cljs.core.async.t_cljs$core$async18445(ch__$1,cs__$1,meta18446));
});

}

return (new cljs.core.async.t_cljs$core$async18445(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__16938__auto___18664 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18580){
var state_val_18581 = (state_18580[(1)]);
if((state_val_18581 === (7))){
var inst_18576 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18582_18665 = state_18580__$1;
(statearr_18582_18665[(2)] = inst_18576);

(statearr_18582_18665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (20))){
var inst_18481 = (state_18580[(7)]);
var inst_18493 = cljs.core.first.call(null,inst_18481);
var inst_18494 = cljs.core.nth.call(null,inst_18493,(0),null);
var inst_18495 = cljs.core.nth.call(null,inst_18493,(1),null);
var state_18580__$1 = (function (){var statearr_18583 = state_18580;
(statearr_18583[(8)] = inst_18494);

return statearr_18583;
})();
if(cljs.core.truth_(inst_18495)){
var statearr_18584_18666 = state_18580__$1;
(statearr_18584_18666[(1)] = (22));

} else {
var statearr_18585_18667 = state_18580__$1;
(statearr_18585_18667[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (27))){
var inst_18530 = (state_18580[(9)]);
var inst_18525 = (state_18580[(10)]);
var inst_18450 = (state_18580[(11)]);
var inst_18523 = (state_18580[(12)]);
var inst_18530__$1 = cljs.core._nth.call(null,inst_18523,inst_18525);
var inst_18531 = cljs.core.async.put_BANG_.call(null,inst_18530__$1,inst_18450,done);
var state_18580__$1 = (function (){var statearr_18586 = state_18580;
(statearr_18586[(9)] = inst_18530__$1);

return statearr_18586;
})();
if(cljs.core.truth_(inst_18531)){
var statearr_18587_18668 = state_18580__$1;
(statearr_18587_18668[(1)] = (30));

} else {
var statearr_18588_18669 = state_18580__$1;
(statearr_18588_18669[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (1))){
var state_18580__$1 = state_18580;
var statearr_18589_18670 = state_18580__$1;
(statearr_18589_18670[(2)] = null);

(statearr_18589_18670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (24))){
var inst_18481 = (state_18580[(7)]);
var inst_18500 = (state_18580[(2)]);
var inst_18501 = cljs.core.next.call(null,inst_18481);
var inst_18459 = inst_18501;
var inst_18460 = null;
var inst_18461 = (0);
var inst_18462 = (0);
var state_18580__$1 = (function (){var statearr_18590 = state_18580;
(statearr_18590[(13)] = inst_18462);

(statearr_18590[(14)] = inst_18461);

(statearr_18590[(15)] = inst_18500);

(statearr_18590[(16)] = inst_18459);

(statearr_18590[(17)] = inst_18460);

return statearr_18590;
})();
var statearr_18591_18671 = state_18580__$1;
(statearr_18591_18671[(2)] = null);

(statearr_18591_18671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (39))){
var state_18580__$1 = state_18580;
var statearr_18595_18672 = state_18580__$1;
(statearr_18595_18672[(2)] = null);

(statearr_18595_18672[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (4))){
var inst_18450 = (state_18580[(11)]);
var inst_18450__$1 = (state_18580[(2)]);
var inst_18451 = (inst_18450__$1 == null);
var state_18580__$1 = (function (){var statearr_18596 = state_18580;
(statearr_18596[(11)] = inst_18450__$1);

return statearr_18596;
})();
if(cljs.core.truth_(inst_18451)){
var statearr_18597_18673 = state_18580__$1;
(statearr_18597_18673[(1)] = (5));

} else {
var statearr_18598_18674 = state_18580__$1;
(statearr_18598_18674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (15))){
var inst_18462 = (state_18580[(13)]);
var inst_18461 = (state_18580[(14)]);
var inst_18459 = (state_18580[(16)]);
var inst_18460 = (state_18580[(17)]);
var inst_18477 = (state_18580[(2)]);
var inst_18478 = (inst_18462 + (1));
var tmp18592 = inst_18461;
var tmp18593 = inst_18459;
var tmp18594 = inst_18460;
var inst_18459__$1 = tmp18593;
var inst_18460__$1 = tmp18594;
var inst_18461__$1 = tmp18592;
var inst_18462__$1 = inst_18478;
var state_18580__$1 = (function (){var statearr_18599 = state_18580;
(statearr_18599[(13)] = inst_18462__$1);

(statearr_18599[(18)] = inst_18477);

(statearr_18599[(14)] = inst_18461__$1);

(statearr_18599[(16)] = inst_18459__$1);

(statearr_18599[(17)] = inst_18460__$1);

return statearr_18599;
})();
var statearr_18600_18675 = state_18580__$1;
(statearr_18600_18675[(2)] = null);

(statearr_18600_18675[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (21))){
var inst_18504 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18604_18676 = state_18580__$1;
(statearr_18604_18676[(2)] = inst_18504);

(statearr_18604_18676[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (31))){
var inst_18530 = (state_18580[(9)]);
var inst_18534 = cljs.core.async.untap_STAR_.call(null,m,inst_18530);
var state_18580__$1 = state_18580;
var statearr_18605_18677 = state_18580__$1;
(statearr_18605_18677[(2)] = inst_18534);

(statearr_18605_18677[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (32))){
var inst_18525 = (state_18580[(10)]);
var inst_18523 = (state_18580[(12)]);
var inst_18522 = (state_18580[(19)]);
var inst_18524 = (state_18580[(20)]);
var inst_18536 = (state_18580[(2)]);
var inst_18537 = (inst_18525 + (1));
var tmp18601 = inst_18523;
var tmp18602 = inst_18522;
var tmp18603 = inst_18524;
var inst_18522__$1 = tmp18602;
var inst_18523__$1 = tmp18601;
var inst_18524__$1 = tmp18603;
var inst_18525__$1 = inst_18537;
var state_18580__$1 = (function (){var statearr_18606 = state_18580;
(statearr_18606[(10)] = inst_18525__$1);

(statearr_18606[(21)] = inst_18536);

(statearr_18606[(12)] = inst_18523__$1);

(statearr_18606[(19)] = inst_18522__$1);

(statearr_18606[(20)] = inst_18524__$1);

return statearr_18606;
})();
var statearr_18607_18678 = state_18580__$1;
(statearr_18607_18678[(2)] = null);

(statearr_18607_18678[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (40))){
var inst_18549 = (state_18580[(22)]);
var inst_18553 = cljs.core.async.untap_STAR_.call(null,m,inst_18549);
var state_18580__$1 = state_18580;
var statearr_18608_18679 = state_18580__$1;
(statearr_18608_18679[(2)] = inst_18553);

(statearr_18608_18679[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (33))){
var inst_18540 = (state_18580[(23)]);
var inst_18542 = cljs.core.chunked_seq_QMARK_.call(null,inst_18540);
var state_18580__$1 = state_18580;
if(inst_18542){
var statearr_18609_18680 = state_18580__$1;
(statearr_18609_18680[(1)] = (36));

} else {
var statearr_18610_18681 = state_18580__$1;
(statearr_18610_18681[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (13))){
var inst_18471 = (state_18580[(24)]);
var inst_18474 = cljs.core.async.close_BANG_.call(null,inst_18471);
var state_18580__$1 = state_18580;
var statearr_18611_18682 = state_18580__$1;
(statearr_18611_18682[(2)] = inst_18474);

(statearr_18611_18682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (22))){
var inst_18494 = (state_18580[(8)]);
var inst_18497 = cljs.core.async.close_BANG_.call(null,inst_18494);
var state_18580__$1 = state_18580;
var statearr_18612_18683 = state_18580__$1;
(statearr_18612_18683[(2)] = inst_18497);

(statearr_18612_18683[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (36))){
var inst_18540 = (state_18580[(23)]);
var inst_18544 = cljs.core.chunk_first.call(null,inst_18540);
var inst_18545 = cljs.core.chunk_rest.call(null,inst_18540);
var inst_18546 = cljs.core.count.call(null,inst_18544);
var inst_18522 = inst_18545;
var inst_18523 = inst_18544;
var inst_18524 = inst_18546;
var inst_18525 = (0);
var state_18580__$1 = (function (){var statearr_18613 = state_18580;
(statearr_18613[(10)] = inst_18525);

(statearr_18613[(12)] = inst_18523);

(statearr_18613[(19)] = inst_18522);

(statearr_18613[(20)] = inst_18524);

return statearr_18613;
})();
var statearr_18614_18684 = state_18580__$1;
(statearr_18614_18684[(2)] = null);

(statearr_18614_18684[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (41))){
var inst_18540 = (state_18580[(23)]);
var inst_18555 = (state_18580[(2)]);
var inst_18556 = cljs.core.next.call(null,inst_18540);
var inst_18522 = inst_18556;
var inst_18523 = null;
var inst_18524 = (0);
var inst_18525 = (0);
var state_18580__$1 = (function (){var statearr_18615 = state_18580;
(statearr_18615[(10)] = inst_18525);

(statearr_18615[(12)] = inst_18523);

(statearr_18615[(19)] = inst_18522);

(statearr_18615[(20)] = inst_18524);

(statearr_18615[(25)] = inst_18555);

return statearr_18615;
})();
var statearr_18616_18685 = state_18580__$1;
(statearr_18616_18685[(2)] = null);

(statearr_18616_18685[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (43))){
var state_18580__$1 = state_18580;
var statearr_18617_18686 = state_18580__$1;
(statearr_18617_18686[(2)] = null);

(statearr_18617_18686[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (29))){
var inst_18564 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18618_18687 = state_18580__$1;
(statearr_18618_18687[(2)] = inst_18564);

(statearr_18618_18687[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (44))){
var inst_18573 = (state_18580[(2)]);
var state_18580__$1 = (function (){var statearr_18619 = state_18580;
(statearr_18619[(26)] = inst_18573);

return statearr_18619;
})();
var statearr_18620_18688 = state_18580__$1;
(statearr_18620_18688[(2)] = null);

(statearr_18620_18688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (6))){
var inst_18514 = (state_18580[(27)]);
var inst_18513 = cljs.core.deref.call(null,cs);
var inst_18514__$1 = cljs.core.keys.call(null,inst_18513);
var inst_18515 = cljs.core.count.call(null,inst_18514__$1);
var inst_18516 = cljs.core.reset_BANG_.call(null,dctr,inst_18515);
var inst_18521 = cljs.core.seq.call(null,inst_18514__$1);
var inst_18522 = inst_18521;
var inst_18523 = null;
var inst_18524 = (0);
var inst_18525 = (0);
var state_18580__$1 = (function (){var statearr_18621 = state_18580;
(statearr_18621[(10)] = inst_18525);

(statearr_18621[(27)] = inst_18514__$1);

(statearr_18621[(28)] = inst_18516);

(statearr_18621[(12)] = inst_18523);

(statearr_18621[(19)] = inst_18522);

(statearr_18621[(20)] = inst_18524);

return statearr_18621;
})();
var statearr_18622_18689 = state_18580__$1;
(statearr_18622_18689[(2)] = null);

(statearr_18622_18689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (28))){
var inst_18540 = (state_18580[(23)]);
var inst_18522 = (state_18580[(19)]);
var inst_18540__$1 = cljs.core.seq.call(null,inst_18522);
var state_18580__$1 = (function (){var statearr_18623 = state_18580;
(statearr_18623[(23)] = inst_18540__$1);

return statearr_18623;
})();
if(inst_18540__$1){
var statearr_18624_18690 = state_18580__$1;
(statearr_18624_18690[(1)] = (33));

} else {
var statearr_18625_18691 = state_18580__$1;
(statearr_18625_18691[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (25))){
var inst_18525 = (state_18580[(10)]);
var inst_18524 = (state_18580[(20)]);
var inst_18527 = (inst_18525 < inst_18524);
var inst_18528 = inst_18527;
var state_18580__$1 = state_18580;
if(cljs.core.truth_(inst_18528)){
var statearr_18626_18692 = state_18580__$1;
(statearr_18626_18692[(1)] = (27));

} else {
var statearr_18627_18693 = state_18580__$1;
(statearr_18627_18693[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (34))){
var state_18580__$1 = state_18580;
var statearr_18628_18694 = state_18580__$1;
(statearr_18628_18694[(2)] = null);

(statearr_18628_18694[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (17))){
var state_18580__$1 = state_18580;
var statearr_18629_18695 = state_18580__$1;
(statearr_18629_18695[(2)] = null);

(statearr_18629_18695[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (3))){
var inst_18578 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18580__$1,inst_18578);
} else {
if((state_val_18581 === (12))){
var inst_18509 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18630_18696 = state_18580__$1;
(statearr_18630_18696[(2)] = inst_18509);

(statearr_18630_18696[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (2))){
var state_18580__$1 = state_18580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18580__$1,(4),ch);
} else {
if((state_val_18581 === (23))){
var state_18580__$1 = state_18580;
var statearr_18631_18697 = state_18580__$1;
(statearr_18631_18697[(2)] = null);

(statearr_18631_18697[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (35))){
var inst_18562 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18632_18698 = state_18580__$1;
(statearr_18632_18698[(2)] = inst_18562);

(statearr_18632_18698[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (19))){
var inst_18481 = (state_18580[(7)]);
var inst_18485 = cljs.core.chunk_first.call(null,inst_18481);
var inst_18486 = cljs.core.chunk_rest.call(null,inst_18481);
var inst_18487 = cljs.core.count.call(null,inst_18485);
var inst_18459 = inst_18486;
var inst_18460 = inst_18485;
var inst_18461 = inst_18487;
var inst_18462 = (0);
var state_18580__$1 = (function (){var statearr_18633 = state_18580;
(statearr_18633[(13)] = inst_18462);

(statearr_18633[(14)] = inst_18461);

(statearr_18633[(16)] = inst_18459);

(statearr_18633[(17)] = inst_18460);

return statearr_18633;
})();
var statearr_18634_18699 = state_18580__$1;
(statearr_18634_18699[(2)] = null);

(statearr_18634_18699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (11))){
var inst_18481 = (state_18580[(7)]);
var inst_18459 = (state_18580[(16)]);
var inst_18481__$1 = cljs.core.seq.call(null,inst_18459);
var state_18580__$1 = (function (){var statearr_18635 = state_18580;
(statearr_18635[(7)] = inst_18481__$1);

return statearr_18635;
})();
if(inst_18481__$1){
var statearr_18636_18700 = state_18580__$1;
(statearr_18636_18700[(1)] = (16));

} else {
var statearr_18637_18701 = state_18580__$1;
(statearr_18637_18701[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (9))){
var inst_18511 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18638_18702 = state_18580__$1;
(statearr_18638_18702[(2)] = inst_18511);

(statearr_18638_18702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (5))){
var inst_18457 = cljs.core.deref.call(null,cs);
var inst_18458 = cljs.core.seq.call(null,inst_18457);
var inst_18459 = inst_18458;
var inst_18460 = null;
var inst_18461 = (0);
var inst_18462 = (0);
var state_18580__$1 = (function (){var statearr_18639 = state_18580;
(statearr_18639[(13)] = inst_18462);

(statearr_18639[(14)] = inst_18461);

(statearr_18639[(16)] = inst_18459);

(statearr_18639[(17)] = inst_18460);

return statearr_18639;
})();
var statearr_18640_18703 = state_18580__$1;
(statearr_18640_18703[(2)] = null);

(statearr_18640_18703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (14))){
var state_18580__$1 = state_18580;
var statearr_18641_18704 = state_18580__$1;
(statearr_18641_18704[(2)] = null);

(statearr_18641_18704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (45))){
var inst_18570 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18642_18705 = state_18580__$1;
(statearr_18642_18705[(2)] = inst_18570);

(statearr_18642_18705[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (26))){
var inst_18514 = (state_18580[(27)]);
var inst_18566 = (state_18580[(2)]);
var inst_18567 = cljs.core.seq.call(null,inst_18514);
var state_18580__$1 = (function (){var statearr_18643 = state_18580;
(statearr_18643[(29)] = inst_18566);

return statearr_18643;
})();
if(inst_18567){
var statearr_18644_18706 = state_18580__$1;
(statearr_18644_18706[(1)] = (42));

} else {
var statearr_18645_18707 = state_18580__$1;
(statearr_18645_18707[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (16))){
var inst_18481 = (state_18580[(7)]);
var inst_18483 = cljs.core.chunked_seq_QMARK_.call(null,inst_18481);
var state_18580__$1 = state_18580;
if(inst_18483){
var statearr_18646_18708 = state_18580__$1;
(statearr_18646_18708[(1)] = (19));

} else {
var statearr_18647_18709 = state_18580__$1;
(statearr_18647_18709[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (38))){
var inst_18559 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18648_18710 = state_18580__$1;
(statearr_18648_18710[(2)] = inst_18559);

(statearr_18648_18710[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (30))){
var state_18580__$1 = state_18580;
var statearr_18649_18711 = state_18580__$1;
(statearr_18649_18711[(2)] = null);

(statearr_18649_18711[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (10))){
var inst_18462 = (state_18580[(13)]);
var inst_18460 = (state_18580[(17)]);
var inst_18470 = cljs.core._nth.call(null,inst_18460,inst_18462);
var inst_18471 = cljs.core.nth.call(null,inst_18470,(0),null);
var inst_18472 = cljs.core.nth.call(null,inst_18470,(1),null);
var state_18580__$1 = (function (){var statearr_18650 = state_18580;
(statearr_18650[(24)] = inst_18471);

return statearr_18650;
})();
if(cljs.core.truth_(inst_18472)){
var statearr_18651_18712 = state_18580__$1;
(statearr_18651_18712[(1)] = (13));

} else {
var statearr_18652_18713 = state_18580__$1;
(statearr_18652_18713[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (18))){
var inst_18507 = (state_18580[(2)]);
var state_18580__$1 = state_18580;
var statearr_18653_18714 = state_18580__$1;
(statearr_18653_18714[(2)] = inst_18507);

(statearr_18653_18714[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (42))){
var state_18580__$1 = state_18580;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18580__$1,(45),dchan);
} else {
if((state_val_18581 === (37))){
var inst_18549 = (state_18580[(22)]);
var inst_18540 = (state_18580[(23)]);
var inst_18450 = (state_18580[(11)]);
var inst_18549__$1 = cljs.core.first.call(null,inst_18540);
var inst_18550 = cljs.core.async.put_BANG_.call(null,inst_18549__$1,inst_18450,done);
var state_18580__$1 = (function (){var statearr_18654 = state_18580;
(statearr_18654[(22)] = inst_18549__$1);

return statearr_18654;
})();
if(cljs.core.truth_(inst_18550)){
var statearr_18655_18715 = state_18580__$1;
(statearr_18655_18715[(1)] = (39));

} else {
var statearr_18656_18716 = state_18580__$1;
(statearr_18656_18716[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18581 === (8))){
var inst_18462 = (state_18580[(13)]);
var inst_18461 = (state_18580[(14)]);
var inst_18464 = (inst_18462 < inst_18461);
var inst_18465 = inst_18464;
var state_18580__$1 = state_18580;
if(cljs.core.truth_(inst_18465)){
var statearr_18657_18717 = state_18580__$1;
(statearr_18657_18717[(1)] = (10));

} else {
var statearr_18658_18718 = state_18580__$1;
(statearr_18658_18718[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__16922__auto__ = null;
var cljs$core$async$mult_$_state_machine__16922__auto____0 = (function (){
var statearr_18659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18659[(0)] = cljs$core$async$mult_$_state_machine__16922__auto__);

(statearr_18659[(1)] = (1));

return statearr_18659;
});
var cljs$core$async$mult_$_state_machine__16922__auto____1 = (function (state_18580){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18580);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18660){var ex__16925__auto__ = e18660;
var statearr_18661_18719 = state_18580;
(statearr_18661_18719[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18580[(4)]))){
var statearr_18662_18720 = state_18580;
(statearr_18662_18720[(1)] = cljs.core.first.call(null,(state_18580[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18721 = state_18580;
state_18580 = G__18721;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__16922__auto__ = function(state_18580){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__16922__auto____1.call(this,state_18580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__16922__auto____0;
cljs$core$async$mult_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__16922__auto____1;
return cljs$core$async$mult_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18663 = f__16939__auto__.call(null);
(statearr_18663[(6)] = c__16938__auto___18664);

return statearr_18663;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18723 = arguments.length;
switch (G__18723) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

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

var cljs$core$async$Mix$admix_STAR_$dyn_18725 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18725.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18726 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18726.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18727 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18727.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18728 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18728.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18729 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18729.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___18740 = arguments.length;
var i__4737__auto___18741 = (0);
while(true){
if((i__4737__auto___18741 < len__4736__auto___18740)){
args__4742__auto__.push((arguments[i__4737__auto___18741]));

var G__18742 = (i__4737__auto___18741 + (1));
i__4737__auto___18741 = G__18742;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18734){
var map__18735 = p__18734;
var map__18735__$1 = (((((!((map__18735 == null))))?(((((map__18735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18735):map__18735);
var opts = map__18735__$1;
var statearr_18737_18743 = state;
(statearr_18737_18743[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_18738_18744 = state;
(statearr_18738_18744[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_18739_18745 = state;
(statearr_18739_18745[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18730){
var G__18731 = cljs.core.first.call(null,seq18730);
var seq18730__$1 = cljs.core.next.call(null,seq18730);
var G__18732 = cljs.core.first.call(null,seq18730__$1);
var seq18730__$2 = cljs.core.next.call(null,seq18730__$1);
var G__18733 = cljs.core.first.call(null,seq18730__$2);
var seq18730__$3 = cljs.core.next.call(null,seq18730__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18731,G__18732,G__18733,seq18730__$3);
}));

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
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18746 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18746 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18747){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18747 = meta18747;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18748,meta18747__$1){
var self__ = this;
var _18748__$1 = this;
return (new cljs.core.async.t_cljs$core$async18746(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18747__$1));
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18748){
var self__ = this;
var _18748__$1 = this;
return self__.meta18747;
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18746.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async18746.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18747","meta18747",-2085411002,null)], null);
}));

(cljs.core.async.t_cljs$core$async18746.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18746.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18746");

(cljs.core.async.t_cljs$core$async18746.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18746");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18746.
 */
cljs.core.async.__GT_t_cljs$core$async18746 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18746(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18747){
return (new cljs.core.async.t_cljs$core$async18746(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18747));
});

}

return (new cljs.core.async.t_cljs$core$async18746(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16938__auto___18911 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_18850){
var state_val_18851 = (state_18850[(1)]);
if((state_val_18851 === (7))){
var inst_18765 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18852_18912 = state_18850__$1;
(statearr_18852_18912[(2)] = inst_18765);

(statearr_18852_18912[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (20))){
var inst_18777 = (state_18850[(7)]);
var state_18850__$1 = state_18850;
var statearr_18853_18913 = state_18850__$1;
(statearr_18853_18913[(2)] = inst_18777);

(statearr_18853_18913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (27))){
var state_18850__$1 = state_18850;
var statearr_18854_18914 = state_18850__$1;
(statearr_18854_18914[(2)] = null);

(statearr_18854_18914[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (1))){
var inst_18752 = (state_18850[(8)]);
var inst_18752__$1 = calc_state.call(null);
var inst_18754 = (inst_18752__$1 == null);
var inst_18755 = cljs.core.not.call(null,inst_18754);
var state_18850__$1 = (function (){var statearr_18855 = state_18850;
(statearr_18855[(8)] = inst_18752__$1);

return statearr_18855;
})();
if(inst_18755){
var statearr_18856_18915 = state_18850__$1;
(statearr_18856_18915[(1)] = (2));

} else {
var statearr_18857_18916 = state_18850__$1;
(statearr_18857_18916[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (24))){
var inst_18824 = (state_18850[(9)]);
var inst_18801 = (state_18850[(10)]);
var inst_18810 = (state_18850[(11)]);
var inst_18824__$1 = inst_18801.call(null,inst_18810);
var state_18850__$1 = (function (){var statearr_18858 = state_18850;
(statearr_18858[(9)] = inst_18824__$1);

return statearr_18858;
})();
if(cljs.core.truth_(inst_18824__$1)){
var statearr_18859_18917 = state_18850__$1;
(statearr_18859_18917[(1)] = (29));

} else {
var statearr_18860_18918 = state_18850__$1;
(statearr_18860_18918[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (4))){
var inst_18768 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18768)){
var statearr_18861_18919 = state_18850__$1;
(statearr_18861_18919[(1)] = (8));

} else {
var statearr_18862_18920 = state_18850__$1;
(statearr_18862_18920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (15))){
var inst_18795 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18795)){
var statearr_18863_18921 = state_18850__$1;
(statearr_18863_18921[(1)] = (19));

} else {
var statearr_18864_18922 = state_18850__$1;
(statearr_18864_18922[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (21))){
var inst_18800 = (state_18850[(12)]);
var inst_18800__$1 = (state_18850[(2)]);
var inst_18801 = cljs.core.get.call(null,inst_18800__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18802 = cljs.core.get.call(null,inst_18800__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18803 = cljs.core.get.call(null,inst_18800__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18850__$1 = (function (){var statearr_18865 = state_18850;
(statearr_18865[(13)] = inst_18802);

(statearr_18865[(12)] = inst_18800__$1);

(statearr_18865[(10)] = inst_18801);

return statearr_18865;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_18850__$1,(22),inst_18803);
} else {
if((state_val_18851 === (31))){
var inst_18832 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18832)){
var statearr_18866_18923 = state_18850__$1;
(statearr_18866_18923[(1)] = (32));

} else {
var statearr_18867_18924 = state_18850__$1;
(statearr_18867_18924[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (32))){
var inst_18809 = (state_18850[(14)]);
var state_18850__$1 = state_18850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18850__$1,(35),out,inst_18809);
} else {
if((state_val_18851 === (33))){
var inst_18800 = (state_18850[(12)]);
var inst_18777 = inst_18800;
var state_18850__$1 = (function (){var statearr_18868 = state_18850;
(statearr_18868[(7)] = inst_18777);

return statearr_18868;
})();
var statearr_18869_18925 = state_18850__$1;
(statearr_18869_18925[(2)] = null);

(statearr_18869_18925[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (13))){
var inst_18777 = (state_18850[(7)]);
var inst_18784 = inst_18777.cljs$lang$protocol_mask$partition0$;
var inst_18785 = (inst_18784 & (64));
var inst_18786 = inst_18777.cljs$core$ISeq$;
var inst_18787 = (cljs.core.PROTOCOL_SENTINEL === inst_18786);
var inst_18788 = ((inst_18785) || (inst_18787));
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18788)){
var statearr_18870_18926 = state_18850__$1;
(statearr_18870_18926[(1)] = (16));

} else {
var statearr_18871_18927 = state_18850__$1;
(statearr_18871_18927[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (22))){
var inst_18809 = (state_18850[(14)]);
var inst_18810 = (state_18850[(11)]);
var inst_18808 = (state_18850[(2)]);
var inst_18809__$1 = cljs.core.nth.call(null,inst_18808,(0),null);
var inst_18810__$1 = cljs.core.nth.call(null,inst_18808,(1),null);
var inst_18811 = (inst_18809__$1 == null);
var inst_18812 = cljs.core._EQ_.call(null,inst_18810__$1,change);
var inst_18813 = ((inst_18811) || (inst_18812));
var state_18850__$1 = (function (){var statearr_18872 = state_18850;
(statearr_18872[(14)] = inst_18809__$1);

(statearr_18872[(11)] = inst_18810__$1);

return statearr_18872;
})();
if(cljs.core.truth_(inst_18813)){
var statearr_18873_18928 = state_18850__$1;
(statearr_18873_18928[(1)] = (23));

} else {
var statearr_18874_18929 = state_18850__$1;
(statearr_18874_18929[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (36))){
var inst_18800 = (state_18850[(12)]);
var inst_18777 = inst_18800;
var state_18850__$1 = (function (){var statearr_18875 = state_18850;
(statearr_18875[(7)] = inst_18777);

return statearr_18875;
})();
var statearr_18876_18930 = state_18850__$1;
(statearr_18876_18930[(2)] = null);

(statearr_18876_18930[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (29))){
var inst_18824 = (state_18850[(9)]);
var state_18850__$1 = state_18850;
var statearr_18877_18931 = state_18850__$1;
(statearr_18877_18931[(2)] = inst_18824);

(statearr_18877_18931[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (6))){
var state_18850__$1 = state_18850;
var statearr_18878_18932 = state_18850__$1;
(statearr_18878_18932[(2)] = false);

(statearr_18878_18932[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (28))){
var inst_18820 = (state_18850[(2)]);
var inst_18821 = calc_state.call(null);
var inst_18777 = inst_18821;
var state_18850__$1 = (function (){var statearr_18879 = state_18850;
(statearr_18879[(7)] = inst_18777);

(statearr_18879[(15)] = inst_18820);

return statearr_18879;
})();
var statearr_18880_18933 = state_18850__$1;
(statearr_18880_18933[(2)] = null);

(statearr_18880_18933[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (25))){
var inst_18846 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18881_18934 = state_18850__$1;
(statearr_18881_18934[(2)] = inst_18846);

(statearr_18881_18934[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (34))){
var inst_18844 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18882_18935 = state_18850__$1;
(statearr_18882_18935[(2)] = inst_18844);

(statearr_18882_18935[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (17))){
var state_18850__$1 = state_18850;
var statearr_18883_18936 = state_18850__$1;
(statearr_18883_18936[(2)] = false);

(statearr_18883_18936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (3))){
var state_18850__$1 = state_18850;
var statearr_18884_18937 = state_18850__$1;
(statearr_18884_18937[(2)] = false);

(statearr_18884_18937[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (12))){
var inst_18848 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18850__$1,inst_18848);
} else {
if((state_val_18851 === (2))){
var inst_18752 = (state_18850[(8)]);
var inst_18757 = inst_18752.cljs$lang$protocol_mask$partition0$;
var inst_18758 = (inst_18757 & (64));
var inst_18759 = inst_18752.cljs$core$ISeq$;
var inst_18760 = (cljs.core.PROTOCOL_SENTINEL === inst_18759);
var inst_18761 = ((inst_18758) || (inst_18760));
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18761)){
var statearr_18885_18938 = state_18850__$1;
(statearr_18885_18938[(1)] = (5));

} else {
var statearr_18886_18939 = state_18850__$1;
(statearr_18886_18939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (23))){
var inst_18809 = (state_18850[(14)]);
var inst_18815 = (inst_18809 == null);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18815)){
var statearr_18887_18940 = state_18850__$1;
(statearr_18887_18940[(1)] = (26));

} else {
var statearr_18888_18941 = state_18850__$1;
(statearr_18888_18941[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (35))){
var inst_18835 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
if(cljs.core.truth_(inst_18835)){
var statearr_18889_18942 = state_18850__$1;
(statearr_18889_18942[(1)] = (36));

} else {
var statearr_18890_18943 = state_18850__$1;
(statearr_18890_18943[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (19))){
var inst_18777 = (state_18850[(7)]);
var inst_18797 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18777);
var state_18850__$1 = state_18850;
var statearr_18891_18944 = state_18850__$1;
(statearr_18891_18944[(2)] = inst_18797);

(statearr_18891_18944[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (11))){
var inst_18777 = (state_18850[(7)]);
var inst_18781 = (inst_18777 == null);
var inst_18782 = cljs.core.not.call(null,inst_18781);
var state_18850__$1 = state_18850;
if(inst_18782){
var statearr_18892_18945 = state_18850__$1;
(statearr_18892_18945[(1)] = (13));

} else {
var statearr_18893_18946 = state_18850__$1;
(statearr_18893_18946[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (9))){
var inst_18752 = (state_18850[(8)]);
var state_18850__$1 = state_18850;
var statearr_18894_18947 = state_18850__$1;
(statearr_18894_18947[(2)] = inst_18752);

(statearr_18894_18947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (5))){
var state_18850__$1 = state_18850;
var statearr_18895_18948 = state_18850__$1;
(statearr_18895_18948[(2)] = true);

(statearr_18895_18948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (14))){
var state_18850__$1 = state_18850;
var statearr_18896_18949 = state_18850__$1;
(statearr_18896_18949[(2)] = false);

(statearr_18896_18949[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (26))){
var inst_18810 = (state_18850[(11)]);
var inst_18817 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_18810);
var state_18850__$1 = state_18850;
var statearr_18897_18950 = state_18850__$1;
(statearr_18897_18950[(2)] = inst_18817);

(statearr_18897_18950[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (16))){
var state_18850__$1 = state_18850;
var statearr_18898_18951 = state_18850__$1;
(statearr_18898_18951[(2)] = true);

(statearr_18898_18951[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (38))){
var inst_18840 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18899_18952 = state_18850__$1;
(statearr_18899_18952[(2)] = inst_18840);

(statearr_18899_18952[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (30))){
var inst_18802 = (state_18850[(13)]);
var inst_18801 = (state_18850[(10)]);
var inst_18810 = (state_18850[(11)]);
var inst_18827 = cljs.core.empty_QMARK_.call(null,inst_18801);
var inst_18828 = inst_18802.call(null,inst_18810);
var inst_18829 = cljs.core.not.call(null,inst_18828);
var inst_18830 = ((inst_18827) && (inst_18829));
var state_18850__$1 = state_18850;
var statearr_18900_18953 = state_18850__$1;
(statearr_18900_18953[(2)] = inst_18830);

(statearr_18900_18953[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (10))){
var inst_18752 = (state_18850[(8)]);
var inst_18773 = (state_18850[(2)]);
var inst_18774 = cljs.core.get.call(null,inst_18773,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18775 = cljs.core.get.call(null,inst_18773,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18776 = cljs.core.get.call(null,inst_18773,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18777 = inst_18752;
var state_18850__$1 = (function (){var statearr_18901 = state_18850;
(statearr_18901[(16)] = inst_18774);

(statearr_18901[(7)] = inst_18777);

(statearr_18901[(17)] = inst_18776);

(statearr_18901[(18)] = inst_18775);

return statearr_18901;
})();
var statearr_18902_18954 = state_18850__$1;
(statearr_18902_18954[(2)] = null);

(statearr_18902_18954[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (18))){
var inst_18792 = (state_18850[(2)]);
var state_18850__$1 = state_18850;
var statearr_18903_18955 = state_18850__$1;
(statearr_18903_18955[(2)] = inst_18792);

(statearr_18903_18955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (37))){
var state_18850__$1 = state_18850;
var statearr_18904_18956 = state_18850__$1;
(statearr_18904_18956[(2)] = null);

(statearr_18904_18956[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18851 === (8))){
var inst_18752 = (state_18850[(8)]);
var inst_18770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18752);
var state_18850__$1 = state_18850;
var statearr_18905_18957 = state_18850__$1;
(statearr_18905_18957[(2)] = inst_18770);

(statearr_18905_18957[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__16922__auto__ = null;
var cljs$core$async$mix_$_state_machine__16922__auto____0 = (function (){
var statearr_18906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18906[(0)] = cljs$core$async$mix_$_state_machine__16922__auto__);

(statearr_18906[(1)] = (1));

return statearr_18906;
});
var cljs$core$async$mix_$_state_machine__16922__auto____1 = (function (state_18850){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_18850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e18907){var ex__16925__auto__ = e18907;
var statearr_18908_18958 = state_18850;
(statearr_18908_18958[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_18850[(4)]))){
var statearr_18909_18959 = state_18850;
(statearr_18909_18959[(1)] = cljs.core.first.call(null,(state_18850[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18960 = state_18850;
state_18850 = G__18960;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__16922__auto__ = function(state_18850){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__16922__auto____1.call(this,state_18850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__16922__auto____0;
cljs$core$async$mix_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__16922__auto____1;
return cljs$core$async$mix_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_18910 = f__16939__auto__.call(null);
(statearr_18910[(6)] = c__16938__auto___18911);

return statearr_18910;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


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

var cljs$core$async$Pub$sub_STAR_$dyn_18963 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18963.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18964 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18964.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18965 = (function() {
var G__18966 = null;
var G__18966__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__18966__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__18966 = function(p,v){
switch(arguments.length){
case 1:
return G__18966__1.call(this,p);
case 2:
return G__18966__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18966.cljs$core$IFn$_invoke$arity$1 = G__18966__1;
G__18966.cljs$core$IFn$_invoke$arity$2 = G__18966__2;
return G__18966;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18962 = arguments.length;
switch (G__18962) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18965.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18965.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__18970 = arguments.length;
switch (G__18970) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__18968_SHARP_){
if(cljs.core.truth_(p1__18968_SHARP_.call(null,topic))){
return p1__18968_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__18968_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18971 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18972){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18972 = meta18972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18973,meta18972__$1){
var self__ = this;
var _18973__$1 = this;
return (new cljs.core.async.t_cljs$core$async18971(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18972__$1));
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18973){
var self__ = this;
var _18973__$1 = this;
return self__.meta18972;
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18971.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18971.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18972","meta18972",1463648027,null)], null);
}));

(cljs.core.async.t_cljs$core$async18971.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18971.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18971");

(cljs.core.async.t_cljs$core$async18971.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async18971");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18971.
 */
cljs.core.async.__GT_t_cljs$core$async18971 = (function cljs$core$async$__GT_t_cljs$core$async18971(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18972){
return (new cljs.core.async.t_cljs$core$async18971(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18972));
});

}

return (new cljs.core.async.t_cljs$core$async18971(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__16938__auto___19092 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19045){
var state_val_19046 = (state_19045[(1)]);
if((state_val_19046 === (7))){
var inst_19041 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19047_19093 = state_19045__$1;
(statearr_19047_19093[(2)] = inst_19041);

(statearr_19047_19093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (20))){
var state_19045__$1 = state_19045;
var statearr_19048_19094 = state_19045__$1;
(statearr_19048_19094[(2)] = null);

(statearr_19048_19094[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (1))){
var state_19045__$1 = state_19045;
var statearr_19049_19095 = state_19045__$1;
(statearr_19049_19095[(2)] = null);

(statearr_19049_19095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (24))){
var inst_19024 = (state_19045[(7)]);
var inst_19033 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_19024);
var state_19045__$1 = state_19045;
var statearr_19050_19096 = state_19045__$1;
(statearr_19050_19096[(2)] = inst_19033);

(statearr_19050_19096[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (4))){
var inst_18976 = (state_19045[(8)]);
var inst_18976__$1 = (state_19045[(2)]);
var inst_18977 = (inst_18976__$1 == null);
var state_19045__$1 = (function (){var statearr_19051 = state_19045;
(statearr_19051[(8)] = inst_18976__$1);

return statearr_19051;
})();
if(cljs.core.truth_(inst_18977)){
var statearr_19052_19097 = state_19045__$1;
(statearr_19052_19097[(1)] = (5));

} else {
var statearr_19053_19098 = state_19045__$1;
(statearr_19053_19098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (15))){
var inst_19018 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19054_19099 = state_19045__$1;
(statearr_19054_19099[(2)] = inst_19018);

(statearr_19054_19099[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (21))){
var inst_19038 = (state_19045[(2)]);
var state_19045__$1 = (function (){var statearr_19055 = state_19045;
(statearr_19055[(9)] = inst_19038);

return statearr_19055;
})();
var statearr_19056_19100 = state_19045__$1;
(statearr_19056_19100[(2)] = null);

(statearr_19056_19100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (13))){
var inst_19000 = (state_19045[(10)]);
var inst_19002 = cljs.core.chunked_seq_QMARK_.call(null,inst_19000);
var state_19045__$1 = state_19045;
if(inst_19002){
var statearr_19057_19101 = state_19045__$1;
(statearr_19057_19101[(1)] = (16));

} else {
var statearr_19058_19102 = state_19045__$1;
(statearr_19058_19102[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (22))){
var inst_19030 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_19030)){
var statearr_19059_19103 = state_19045__$1;
(statearr_19059_19103[(1)] = (23));

} else {
var statearr_19060_19104 = state_19045__$1;
(statearr_19060_19104[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (6))){
var inst_18976 = (state_19045[(8)]);
var inst_19026 = (state_19045[(11)]);
var inst_19024 = (state_19045[(7)]);
var inst_19024__$1 = topic_fn.call(null,inst_18976);
var inst_19025 = cljs.core.deref.call(null,mults);
var inst_19026__$1 = cljs.core.get.call(null,inst_19025,inst_19024__$1);
var state_19045__$1 = (function (){var statearr_19061 = state_19045;
(statearr_19061[(11)] = inst_19026__$1);

(statearr_19061[(7)] = inst_19024__$1);

return statearr_19061;
})();
if(cljs.core.truth_(inst_19026__$1)){
var statearr_19062_19105 = state_19045__$1;
(statearr_19062_19105[(1)] = (19));

} else {
var statearr_19063_19106 = state_19045__$1;
(statearr_19063_19106[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (25))){
var inst_19035 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19064_19107 = state_19045__$1;
(statearr_19064_19107[(2)] = inst_19035);

(statearr_19064_19107[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (17))){
var inst_19000 = (state_19045[(10)]);
var inst_19009 = cljs.core.first.call(null,inst_19000);
var inst_19010 = cljs.core.async.muxch_STAR_.call(null,inst_19009);
var inst_19011 = cljs.core.async.close_BANG_.call(null,inst_19010);
var inst_19012 = cljs.core.next.call(null,inst_19000);
var inst_18986 = inst_19012;
var inst_18987 = null;
var inst_18988 = (0);
var inst_18989 = (0);
var state_19045__$1 = (function (){var statearr_19065 = state_19045;
(statearr_19065[(12)] = inst_18987);

(statearr_19065[(13)] = inst_18989);

(statearr_19065[(14)] = inst_19011);

(statearr_19065[(15)] = inst_18988);

(statearr_19065[(16)] = inst_18986);

return statearr_19065;
})();
var statearr_19066_19108 = state_19045__$1;
(statearr_19066_19108[(2)] = null);

(statearr_19066_19108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (3))){
var inst_19043 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19045__$1,inst_19043);
} else {
if((state_val_19046 === (12))){
var inst_19020 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19067_19109 = state_19045__$1;
(statearr_19067_19109[(2)] = inst_19020);

(statearr_19067_19109[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (2))){
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19045__$1,(4),ch);
} else {
if((state_val_19046 === (23))){
var state_19045__$1 = state_19045;
var statearr_19068_19110 = state_19045__$1;
(statearr_19068_19110[(2)] = null);

(statearr_19068_19110[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (19))){
var inst_18976 = (state_19045[(8)]);
var inst_19026 = (state_19045[(11)]);
var inst_19028 = cljs.core.async.muxch_STAR_.call(null,inst_19026);
var state_19045__$1 = state_19045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19045__$1,(22),inst_19028,inst_18976);
} else {
if((state_val_19046 === (11))){
var inst_19000 = (state_19045[(10)]);
var inst_18986 = (state_19045[(16)]);
var inst_19000__$1 = cljs.core.seq.call(null,inst_18986);
var state_19045__$1 = (function (){var statearr_19069 = state_19045;
(statearr_19069[(10)] = inst_19000__$1);

return statearr_19069;
})();
if(inst_19000__$1){
var statearr_19070_19111 = state_19045__$1;
(statearr_19070_19111[(1)] = (13));

} else {
var statearr_19071_19112 = state_19045__$1;
(statearr_19071_19112[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (9))){
var inst_19022 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19072_19113 = state_19045__$1;
(statearr_19072_19113[(2)] = inst_19022);

(statearr_19072_19113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (5))){
var inst_18983 = cljs.core.deref.call(null,mults);
var inst_18984 = cljs.core.vals.call(null,inst_18983);
var inst_18985 = cljs.core.seq.call(null,inst_18984);
var inst_18986 = inst_18985;
var inst_18987 = null;
var inst_18988 = (0);
var inst_18989 = (0);
var state_19045__$1 = (function (){var statearr_19073 = state_19045;
(statearr_19073[(12)] = inst_18987);

(statearr_19073[(13)] = inst_18989);

(statearr_19073[(15)] = inst_18988);

(statearr_19073[(16)] = inst_18986);

return statearr_19073;
})();
var statearr_19074_19114 = state_19045__$1;
(statearr_19074_19114[(2)] = null);

(statearr_19074_19114[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (14))){
var state_19045__$1 = state_19045;
var statearr_19078_19115 = state_19045__$1;
(statearr_19078_19115[(2)] = null);

(statearr_19078_19115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (16))){
var inst_19000 = (state_19045[(10)]);
var inst_19004 = cljs.core.chunk_first.call(null,inst_19000);
var inst_19005 = cljs.core.chunk_rest.call(null,inst_19000);
var inst_19006 = cljs.core.count.call(null,inst_19004);
var inst_18986 = inst_19005;
var inst_18987 = inst_19004;
var inst_18988 = inst_19006;
var inst_18989 = (0);
var state_19045__$1 = (function (){var statearr_19079 = state_19045;
(statearr_19079[(12)] = inst_18987);

(statearr_19079[(13)] = inst_18989);

(statearr_19079[(15)] = inst_18988);

(statearr_19079[(16)] = inst_18986);

return statearr_19079;
})();
var statearr_19080_19116 = state_19045__$1;
(statearr_19080_19116[(2)] = null);

(statearr_19080_19116[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (10))){
var inst_18987 = (state_19045[(12)]);
var inst_18989 = (state_19045[(13)]);
var inst_18988 = (state_19045[(15)]);
var inst_18986 = (state_19045[(16)]);
var inst_18994 = cljs.core._nth.call(null,inst_18987,inst_18989);
var inst_18995 = cljs.core.async.muxch_STAR_.call(null,inst_18994);
var inst_18996 = cljs.core.async.close_BANG_.call(null,inst_18995);
var inst_18997 = (inst_18989 + (1));
var tmp19075 = inst_18987;
var tmp19076 = inst_18988;
var tmp19077 = inst_18986;
var inst_18986__$1 = tmp19077;
var inst_18987__$1 = tmp19075;
var inst_18988__$1 = tmp19076;
var inst_18989__$1 = inst_18997;
var state_19045__$1 = (function (){var statearr_19081 = state_19045;
(statearr_19081[(17)] = inst_18996);

(statearr_19081[(12)] = inst_18987__$1);

(statearr_19081[(13)] = inst_18989__$1);

(statearr_19081[(15)] = inst_18988__$1);

(statearr_19081[(16)] = inst_18986__$1);

return statearr_19081;
})();
var statearr_19082_19117 = state_19045__$1;
(statearr_19082_19117[(2)] = null);

(statearr_19082_19117[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (18))){
var inst_19015 = (state_19045[(2)]);
var state_19045__$1 = state_19045;
var statearr_19083_19118 = state_19045__$1;
(statearr_19083_19118[(2)] = inst_19015);

(statearr_19083_19118[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19046 === (8))){
var inst_18989 = (state_19045[(13)]);
var inst_18988 = (state_19045[(15)]);
var inst_18991 = (inst_18989 < inst_18988);
var inst_18992 = inst_18991;
var state_19045__$1 = state_19045;
if(cljs.core.truth_(inst_18992)){
var statearr_19084_19119 = state_19045__$1;
(statearr_19084_19119[(1)] = (10));

} else {
var statearr_19085_19120 = state_19045__$1;
(statearr_19085_19120[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19086[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19086[(1)] = (1));

return statearr_19086;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19045){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19087){var ex__16925__auto__ = e19087;
var statearr_19088_19121 = state_19045;
(statearr_19088_19121[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19045[(4)]))){
var statearr_19089_19122 = state_19045;
(statearr_19089_19122[(1)] = cljs.core.first.call(null,(state_19045[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19123 = state_19045;
state_19045 = G__19123;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19090 = f__16939__auto__.call(null);
(statearr_19090[(6)] = c__16938__auto___19092);

return statearr_19090;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19125 = arguments.length;
switch (G__19125) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

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
var G__19128 = arguments.length;
switch (G__19128) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__19131 = arguments.length;
switch (G__19131) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__16938__auto___19209 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19174){
var state_val_19175 = (state_19174[(1)]);
if((state_val_19175 === (7))){
var state_19174__$1 = state_19174;
var statearr_19176_19210 = state_19174__$1;
(statearr_19176_19210[(2)] = null);

(statearr_19176_19210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (1))){
var state_19174__$1 = state_19174;
var statearr_19177_19211 = state_19174__$1;
(statearr_19177_19211[(2)] = null);

(statearr_19177_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (4))){
var inst_19134 = (state_19174[(7)]);
var inst_19135 = (state_19174[(8)]);
var inst_19137 = (inst_19135 < inst_19134);
var state_19174__$1 = state_19174;
if(cljs.core.truth_(inst_19137)){
var statearr_19178_19212 = state_19174__$1;
(statearr_19178_19212[(1)] = (6));

} else {
var statearr_19179_19213 = state_19174__$1;
(statearr_19179_19213[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (15))){
var inst_19160 = (state_19174[(9)]);
var inst_19165 = cljs.core.apply.call(null,f,inst_19160);
var state_19174__$1 = state_19174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19174__$1,(17),out,inst_19165);
} else {
if((state_val_19175 === (13))){
var inst_19160 = (state_19174[(9)]);
var inst_19160__$1 = (state_19174[(2)]);
var inst_19161 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_19160__$1);
var state_19174__$1 = (function (){var statearr_19180 = state_19174;
(statearr_19180[(9)] = inst_19160__$1);

return statearr_19180;
})();
if(cljs.core.truth_(inst_19161)){
var statearr_19181_19214 = state_19174__$1;
(statearr_19181_19214[(1)] = (14));

} else {
var statearr_19182_19215 = state_19174__$1;
(statearr_19182_19215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (6))){
var state_19174__$1 = state_19174;
var statearr_19183_19216 = state_19174__$1;
(statearr_19183_19216[(2)] = null);

(statearr_19183_19216[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (17))){
var inst_19167 = (state_19174[(2)]);
var state_19174__$1 = (function (){var statearr_19185 = state_19174;
(statearr_19185[(10)] = inst_19167);

return statearr_19185;
})();
var statearr_19186_19217 = state_19174__$1;
(statearr_19186_19217[(2)] = null);

(statearr_19186_19217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (3))){
var inst_19172 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19174__$1,inst_19172);
} else {
if((state_val_19175 === (12))){
var _ = (function (){var statearr_19187 = state_19174;
(statearr_19187[(4)] = cljs.core.rest.call(null,(state_19174[(4)])));

return statearr_19187;
})();
var state_19174__$1 = state_19174;
var ex19184 = (state_19174__$1[(2)]);
var statearr_19188_19218 = state_19174__$1;
(statearr_19188_19218[(5)] = ex19184);


if((ex19184 instanceof Object)){
var statearr_19189_19219 = state_19174__$1;
(statearr_19189_19219[(1)] = (11));

(statearr_19189_19219[(5)] = null);

} else {
throw ex19184;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (2))){
var inst_19133 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_19134 = cnt;
var inst_19135 = (0);
var state_19174__$1 = (function (){var statearr_19190 = state_19174;
(statearr_19190[(7)] = inst_19134);

(statearr_19190[(8)] = inst_19135);

(statearr_19190[(11)] = inst_19133);

return statearr_19190;
})();
var statearr_19191_19220 = state_19174__$1;
(statearr_19191_19220[(2)] = null);

(statearr_19191_19220[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (11))){
var inst_19139 = (state_19174[(2)]);
var inst_19140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_19174__$1 = (function (){var statearr_19192 = state_19174;
(statearr_19192[(12)] = inst_19139);

return statearr_19192;
})();
var statearr_19193_19221 = state_19174__$1;
(statearr_19193_19221[(2)] = inst_19140);

(statearr_19193_19221[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (9))){
var inst_19135 = (state_19174[(8)]);
var _ = (function (){var statearr_19194 = state_19174;
(statearr_19194[(4)] = cljs.core.cons.call(null,(12),(state_19174[(4)])));

return statearr_19194;
})();
var inst_19146 = chs__$1.call(null,inst_19135);
var inst_19147 = done.call(null,inst_19135);
var inst_19148 = cljs.core.async.take_BANG_.call(null,inst_19146,inst_19147);
var ___$1 = (function (){var statearr_19195 = state_19174;
(statearr_19195[(4)] = cljs.core.rest.call(null,(state_19174[(4)])));

return statearr_19195;
})();
var state_19174__$1 = state_19174;
var statearr_19196_19222 = state_19174__$1;
(statearr_19196_19222[(2)] = inst_19148);

(statearr_19196_19222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (5))){
var inst_19158 = (state_19174[(2)]);
var state_19174__$1 = (function (){var statearr_19197 = state_19174;
(statearr_19197[(13)] = inst_19158);

return statearr_19197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19174__$1,(13),dchan);
} else {
if((state_val_19175 === (14))){
var inst_19163 = cljs.core.async.close_BANG_.call(null,out);
var state_19174__$1 = state_19174;
var statearr_19198_19223 = state_19174__$1;
(statearr_19198_19223[(2)] = inst_19163);

(statearr_19198_19223[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (16))){
var inst_19170 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19199_19224 = state_19174__$1;
(statearr_19199_19224[(2)] = inst_19170);

(statearr_19199_19224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (10))){
var inst_19135 = (state_19174[(8)]);
var inst_19151 = (state_19174[(2)]);
var inst_19152 = (inst_19135 + (1));
var inst_19135__$1 = inst_19152;
var state_19174__$1 = (function (){var statearr_19200 = state_19174;
(statearr_19200[(8)] = inst_19135__$1);

(statearr_19200[(14)] = inst_19151);

return statearr_19200;
})();
var statearr_19201_19225 = state_19174__$1;
(statearr_19201_19225[(2)] = null);

(statearr_19201_19225[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19175 === (8))){
var inst_19156 = (state_19174[(2)]);
var state_19174__$1 = state_19174;
var statearr_19202_19226 = state_19174__$1;
(statearr_19202_19226[(2)] = inst_19156);

(statearr_19202_19226[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19203[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19203[(1)] = (1));

return statearr_19203;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19174){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19204){var ex__16925__auto__ = e19204;
var statearr_19205_19227 = state_19174;
(statearr_19205_19227[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19174[(4)]))){
var statearr_19206_19228 = state_19174;
(statearr_19206_19228[(1)] = cljs.core.first.call(null,(state_19174[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19229 = state_19174;
state_19174 = G__19229;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19207 = f__16939__auto__.call(null);
(statearr_19207[(6)] = c__16938__auto___19209);

return statearr_19207;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19232 = arguments.length;
switch (G__19232) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19264){
var state_val_19265 = (state_19264[(1)]);
if((state_val_19265 === (7))){
var inst_19243 = (state_19264[(7)]);
var inst_19244 = (state_19264[(8)]);
var inst_19243__$1 = (state_19264[(2)]);
var inst_19244__$1 = cljs.core.nth.call(null,inst_19243__$1,(0),null);
var inst_19245 = cljs.core.nth.call(null,inst_19243__$1,(1),null);
var inst_19246 = (inst_19244__$1 == null);
var state_19264__$1 = (function (){var statearr_19266 = state_19264;
(statearr_19266[(7)] = inst_19243__$1);

(statearr_19266[(8)] = inst_19244__$1);

(statearr_19266[(9)] = inst_19245);

return statearr_19266;
})();
if(cljs.core.truth_(inst_19246)){
var statearr_19267_19288 = state_19264__$1;
(statearr_19267_19288[(1)] = (8));

} else {
var statearr_19268_19289 = state_19264__$1;
(statearr_19268_19289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (1))){
var inst_19233 = cljs.core.vec.call(null,chs);
var inst_19234 = inst_19233;
var state_19264__$1 = (function (){var statearr_19269 = state_19264;
(statearr_19269[(10)] = inst_19234);

return statearr_19269;
})();
var statearr_19270_19290 = state_19264__$1;
(statearr_19270_19290[(2)] = null);

(statearr_19270_19290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (4))){
var inst_19234 = (state_19264[(10)]);
var state_19264__$1 = state_19264;
return cljs.core.async.ioc_alts_BANG_.call(null,state_19264__$1,(7),inst_19234);
} else {
if((state_val_19265 === (6))){
var inst_19260 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
var statearr_19271_19291 = state_19264__$1;
(statearr_19271_19291[(2)] = inst_19260);

(statearr_19271_19291[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (3))){
var inst_19262 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19264__$1,inst_19262);
} else {
if((state_val_19265 === (2))){
var inst_19234 = (state_19264[(10)]);
var inst_19236 = cljs.core.count.call(null,inst_19234);
var inst_19237 = (inst_19236 > (0));
var state_19264__$1 = state_19264;
if(cljs.core.truth_(inst_19237)){
var statearr_19273_19292 = state_19264__$1;
(statearr_19273_19292[(1)] = (4));

} else {
var statearr_19274_19293 = state_19264__$1;
(statearr_19274_19293[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (11))){
var inst_19234 = (state_19264[(10)]);
var inst_19253 = (state_19264[(2)]);
var tmp19272 = inst_19234;
var inst_19234__$1 = tmp19272;
var state_19264__$1 = (function (){var statearr_19275 = state_19264;
(statearr_19275[(11)] = inst_19253);

(statearr_19275[(10)] = inst_19234__$1);

return statearr_19275;
})();
var statearr_19276_19294 = state_19264__$1;
(statearr_19276_19294[(2)] = null);

(statearr_19276_19294[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (9))){
var inst_19244 = (state_19264[(8)]);
var state_19264__$1 = state_19264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19264__$1,(11),out,inst_19244);
} else {
if((state_val_19265 === (5))){
var inst_19258 = cljs.core.async.close_BANG_.call(null,out);
var state_19264__$1 = state_19264;
var statearr_19277_19295 = state_19264__$1;
(statearr_19277_19295[(2)] = inst_19258);

(statearr_19277_19295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (10))){
var inst_19256 = (state_19264[(2)]);
var state_19264__$1 = state_19264;
var statearr_19278_19296 = state_19264__$1;
(statearr_19278_19296[(2)] = inst_19256);

(statearr_19278_19296[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19265 === (8))){
var inst_19243 = (state_19264[(7)]);
var inst_19244 = (state_19264[(8)]);
var inst_19234 = (state_19264[(10)]);
var inst_19245 = (state_19264[(9)]);
var inst_19248 = (function (){var cs = inst_19234;
var vec__19239 = inst_19243;
var v = inst_19244;
var c = inst_19245;
return (function (p1__19230_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__19230_SHARP_);
});
})();
var inst_19249 = cljs.core.filterv.call(null,inst_19248,inst_19234);
var inst_19234__$1 = inst_19249;
var state_19264__$1 = (function (){var statearr_19279 = state_19264;
(statearr_19279[(10)] = inst_19234__$1);

return statearr_19279;
})();
var statearr_19280_19297 = state_19264__$1;
(statearr_19280_19297[(2)] = null);

(statearr_19280_19297[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19281 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19281[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19281[(1)] = (1));

return statearr_19281;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19264){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19282){var ex__16925__auto__ = e19282;
var statearr_19283_19298 = state_19264;
(statearr_19283_19298[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19264[(4)]))){
var statearr_19284_19299 = state_19264;
(statearr_19284_19299[(1)] = cljs.core.first.call(null,(state_19264[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19300 = state_19264;
state_19264 = G__19300;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19285 = f__16939__auto__.call(null);
(statearr_19285[(6)] = c__16938__auto___19287);

return statearr_19285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

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
var G__19302 = arguments.length;
switch (G__19302) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19348 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19326){
var state_val_19327 = (state_19326[(1)]);
if((state_val_19327 === (7))){
var inst_19308 = (state_19326[(7)]);
var inst_19308__$1 = (state_19326[(2)]);
var inst_19309 = (inst_19308__$1 == null);
var inst_19310 = cljs.core.not.call(null,inst_19309);
var state_19326__$1 = (function (){var statearr_19328 = state_19326;
(statearr_19328[(7)] = inst_19308__$1);

return statearr_19328;
})();
if(inst_19310){
var statearr_19329_19349 = state_19326__$1;
(statearr_19329_19349[(1)] = (8));

} else {
var statearr_19330_19350 = state_19326__$1;
(statearr_19330_19350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (1))){
var inst_19303 = (0);
var state_19326__$1 = (function (){var statearr_19331 = state_19326;
(statearr_19331[(8)] = inst_19303);

return statearr_19331;
})();
var statearr_19332_19351 = state_19326__$1;
(statearr_19332_19351[(2)] = null);

(statearr_19332_19351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (4))){
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19326__$1,(7),ch);
} else {
if((state_val_19327 === (6))){
var inst_19321 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19333_19352 = state_19326__$1;
(statearr_19333_19352[(2)] = inst_19321);

(statearr_19333_19352[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (3))){
var inst_19323 = (state_19326[(2)]);
var inst_19324 = cljs.core.async.close_BANG_.call(null,out);
var state_19326__$1 = (function (){var statearr_19334 = state_19326;
(statearr_19334[(9)] = inst_19323);

return statearr_19334;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19326__$1,inst_19324);
} else {
if((state_val_19327 === (2))){
var inst_19303 = (state_19326[(8)]);
var inst_19305 = (inst_19303 < n);
var state_19326__$1 = state_19326;
if(cljs.core.truth_(inst_19305)){
var statearr_19335_19353 = state_19326__$1;
(statearr_19335_19353[(1)] = (4));

} else {
var statearr_19336_19354 = state_19326__$1;
(statearr_19336_19354[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (11))){
var inst_19303 = (state_19326[(8)]);
var inst_19313 = (state_19326[(2)]);
var inst_19314 = (inst_19303 + (1));
var inst_19303__$1 = inst_19314;
var state_19326__$1 = (function (){var statearr_19337 = state_19326;
(statearr_19337[(8)] = inst_19303__$1);

(statearr_19337[(10)] = inst_19313);

return statearr_19337;
})();
var statearr_19338_19355 = state_19326__$1;
(statearr_19338_19355[(2)] = null);

(statearr_19338_19355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (9))){
var state_19326__$1 = state_19326;
var statearr_19339_19356 = state_19326__$1;
(statearr_19339_19356[(2)] = null);

(statearr_19339_19356[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (5))){
var state_19326__$1 = state_19326;
var statearr_19340_19357 = state_19326__$1;
(statearr_19340_19357[(2)] = null);

(statearr_19340_19357[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (10))){
var inst_19318 = (state_19326[(2)]);
var state_19326__$1 = state_19326;
var statearr_19341_19358 = state_19326__$1;
(statearr_19341_19358[(2)] = inst_19318);

(statearr_19341_19358[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19327 === (8))){
var inst_19308 = (state_19326[(7)]);
var state_19326__$1 = state_19326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19326__$1,(11),out,inst_19308);
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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19342 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19342[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19342[(1)] = (1));

return statearr_19342;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19326){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19343){var ex__16925__auto__ = e19343;
var statearr_19344_19359 = state_19326;
(statearr_19344_19359[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19326[(4)]))){
var statearr_19345_19360 = state_19326;
(statearr_19345_19360[(1)] = cljs.core.first.call(null,(state_19326[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19361 = state_19326;
state_19326 = G__19361;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19326){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19346 = f__16939__auto__.call(null);
(statearr_19346[(6)] = c__16938__auto___19348);

return statearr_19346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19363 = (function (f,ch,meta19364){
this.f = f;
this.ch = ch;
this.meta19364 = meta19364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19365,meta19364__$1){
var self__ = this;
var _19365__$1 = this;
return (new cljs.core.async.t_cljs$core$async19363(self__.f,self__.ch,meta19364__$1));
}));

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19365){
var self__ = this;
var _19365__$1 = this;
return self__.meta19364;
}));

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19366 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19366 = (function (f,ch,meta19364,_,fn1,meta19367){
this.f = f;
this.ch = ch;
this.meta19364 = meta19364;
this._ = _;
this.fn1 = fn1;
this.meta19367 = meta19367;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19368,meta19367__$1){
var self__ = this;
var _19368__$1 = this;
return (new cljs.core.async.t_cljs$core$async19366(self__.f,self__.ch,self__.meta19364,self__._,self__.fn1,meta19367__$1));
}));

(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19368){
var self__ = this;
var _19368__$1 = this;
return self__.meta19367;
}));

(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19366.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__19362_SHARP_){
return f1.call(null,(((p1__19362_SHARP_ == null))?null:self__.f.call(null,p1__19362_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async19366.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19364","meta19364",-572412308,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19363","cljs.core.async/t_cljs$core$async19363",-1977246203,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19367","meta19367",1331598826,null)], null);
}));

(cljs.core.async.t_cljs$core$async19366.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19366.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19366");

(cljs.core.async.t_cljs$core$async19366.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19366");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19366.
 */
cljs.core.async.__GT_t_cljs$core$async19366 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19366(f__$1,ch__$1,meta19364__$1,___$2,fn1__$1,meta19367){
return (new cljs.core.async.t_cljs$core$async19366(f__$1,ch__$1,meta19364__$1,___$2,fn1__$1,meta19367));
});

}

return (new cljs.core.async.t_cljs$core$async19366(self__.f,self__.ch,self__.meta19364,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19363.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19363.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19364","meta19364",-572412308,null)], null);
}));

(cljs.core.async.t_cljs$core$async19363.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19363.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19363");

(cljs.core.async.t_cljs$core$async19363.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19363");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19363.
 */
cljs.core.async.__GT_t_cljs$core$async19363 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19363(f__$1,ch__$1,meta19364){
return (new cljs.core.async.t_cljs$core$async19363(f__$1,ch__$1,meta19364));
});

}

return (new cljs.core.async.t_cljs$core$async19363(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19369 = (function (f,ch,meta19370){
this.f = f;
this.ch = ch;
this.meta19370 = meta19370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19371,meta19370__$1){
var self__ = this;
var _19371__$1 = this;
return (new cljs.core.async.t_cljs$core$async19369(self__.f,self__.ch,meta19370__$1));
}));

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19371){
var self__ = this;
var _19371__$1 = this;
return self__.meta19370;
}));

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19369.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async19369.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19370","meta19370",-443128517,null)], null);
}));

(cljs.core.async.t_cljs$core$async19369.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19369.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19369");

(cljs.core.async.t_cljs$core$async19369.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19369");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19369.
 */
cljs.core.async.__GT_t_cljs$core$async19369 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19369(f__$1,ch__$1,meta19370){
return (new cljs.core.async.t_cljs$core$async19369(f__$1,ch__$1,meta19370));
});

}

return (new cljs.core.async.t_cljs$core$async19369(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19372 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19372 = (function (p,ch,meta19373){
this.p = p;
this.ch = ch;
this.meta19373 = meta19373;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19374,meta19373__$1){
var self__ = this;
var _19374__$1 = this;
return (new cljs.core.async.t_cljs$core$async19372(self__.p,self__.ch,meta19373__$1));
}));

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19374){
var self__ = this;
var _19374__$1 = this;
return self__.meta19373;
}));

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19372.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19373","meta19373",68314880,null)], null);
}));

(cljs.core.async.t_cljs$core$async19372.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19372.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19372");

(cljs.core.async.t_cljs$core$async19372.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async19372");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19372.
 */
cljs.core.async.__GT_t_cljs$core$async19372 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19372(p__$1,ch__$1,meta19373){
return (new cljs.core.async.t_cljs$core$async19372(p__$1,ch__$1,meta19373));
});

}

return (new cljs.core.async.t_cljs$core$async19372(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__19376 = arguments.length;
switch (G__19376) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19397){
var state_val_19398 = (state_19397[(1)]);
if((state_val_19398 === (7))){
var inst_19393 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19399_19418 = state_19397__$1;
(statearr_19399_19418[(2)] = inst_19393);

(statearr_19399_19418[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (1))){
var state_19397__$1 = state_19397;
var statearr_19400_19419 = state_19397__$1;
(statearr_19400_19419[(2)] = null);

(statearr_19400_19419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (4))){
var inst_19379 = (state_19397[(7)]);
var inst_19379__$1 = (state_19397[(2)]);
var inst_19380 = (inst_19379__$1 == null);
var state_19397__$1 = (function (){var statearr_19401 = state_19397;
(statearr_19401[(7)] = inst_19379__$1);

return statearr_19401;
})();
if(cljs.core.truth_(inst_19380)){
var statearr_19402_19420 = state_19397__$1;
(statearr_19402_19420[(1)] = (5));

} else {
var statearr_19403_19421 = state_19397__$1;
(statearr_19403_19421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (6))){
var inst_19379 = (state_19397[(7)]);
var inst_19384 = p.call(null,inst_19379);
var state_19397__$1 = state_19397;
if(cljs.core.truth_(inst_19384)){
var statearr_19404_19422 = state_19397__$1;
(statearr_19404_19422[(1)] = (8));

} else {
var statearr_19405_19423 = state_19397__$1;
(statearr_19405_19423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (3))){
var inst_19395 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19397__$1,inst_19395);
} else {
if((state_val_19398 === (2))){
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19397__$1,(4),ch);
} else {
if((state_val_19398 === (11))){
var inst_19387 = (state_19397[(2)]);
var state_19397__$1 = state_19397;
var statearr_19406_19424 = state_19397__$1;
(statearr_19406_19424[(2)] = inst_19387);

(statearr_19406_19424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (9))){
var state_19397__$1 = state_19397;
var statearr_19407_19425 = state_19397__$1;
(statearr_19407_19425[(2)] = null);

(statearr_19407_19425[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (5))){
var inst_19382 = cljs.core.async.close_BANG_.call(null,out);
var state_19397__$1 = state_19397;
var statearr_19408_19426 = state_19397__$1;
(statearr_19408_19426[(2)] = inst_19382);

(statearr_19408_19426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (10))){
var inst_19390 = (state_19397[(2)]);
var state_19397__$1 = (function (){var statearr_19409 = state_19397;
(statearr_19409[(8)] = inst_19390);

return statearr_19409;
})();
var statearr_19410_19427 = state_19397__$1;
(statearr_19410_19427[(2)] = null);

(statearr_19410_19427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19398 === (8))){
var inst_19379 = (state_19397[(7)]);
var state_19397__$1 = state_19397;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19397__$1,(11),out,inst_19379);
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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19411 = [null,null,null,null,null,null,null,null,null];
(statearr_19411[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19411[(1)] = (1));

return statearr_19411;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19397){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19397);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19412){var ex__16925__auto__ = e19412;
var statearr_19413_19428 = state_19397;
(statearr_19413_19428[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19397[(4)]))){
var statearr_19414_19429 = state_19397;
(statearr_19414_19429[(1)] = cljs.core.first.call(null,(state_19397[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19430 = state_19397;
state_19397 = G__19430;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19397){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19415 = f__16939__auto__.call(null);
(statearr_19415[(6)] = c__16938__auto___19417);

return statearr_19415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19432 = arguments.length;
switch (G__19432) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__16938__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19495){
var state_val_19496 = (state_19495[(1)]);
if((state_val_19496 === (7))){
var inst_19491 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19497_19536 = state_19495__$1;
(statearr_19497_19536[(2)] = inst_19491);

(statearr_19497_19536[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (20))){
var inst_19461 = (state_19495[(7)]);
var inst_19472 = (state_19495[(2)]);
var inst_19473 = cljs.core.next.call(null,inst_19461);
var inst_19447 = inst_19473;
var inst_19448 = null;
var inst_19449 = (0);
var inst_19450 = (0);
var state_19495__$1 = (function (){var statearr_19498 = state_19495;
(statearr_19498[(8)] = inst_19449);

(statearr_19498[(9)] = inst_19450);

(statearr_19498[(10)] = inst_19447);

(statearr_19498[(11)] = inst_19448);

(statearr_19498[(12)] = inst_19472);

return statearr_19498;
})();
var statearr_19499_19537 = state_19495__$1;
(statearr_19499_19537[(2)] = null);

(statearr_19499_19537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (1))){
var state_19495__$1 = state_19495;
var statearr_19500_19538 = state_19495__$1;
(statearr_19500_19538[(2)] = null);

(statearr_19500_19538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (4))){
var inst_19436 = (state_19495[(13)]);
var inst_19436__$1 = (state_19495[(2)]);
var inst_19437 = (inst_19436__$1 == null);
var state_19495__$1 = (function (){var statearr_19501 = state_19495;
(statearr_19501[(13)] = inst_19436__$1);

return statearr_19501;
})();
if(cljs.core.truth_(inst_19437)){
var statearr_19502_19539 = state_19495__$1;
(statearr_19502_19539[(1)] = (5));

} else {
var statearr_19503_19540 = state_19495__$1;
(statearr_19503_19540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (15))){
var state_19495__$1 = state_19495;
var statearr_19507_19541 = state_19495__$1;
(statearr_19507_19541[(2)] = null);

(statearr_19507_19541[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (21))){
var state_19495__$1 = state_19495;
var statearr_19508_19542 = state_19495__$1;
(statearr_19508_19542[(2)] = null);

(statearr_19508_19542[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (13))){
var inst_19449 = (state_19495[(8)]);
var inst_19450 = (state_19495[(9)]);
var inst_19447 = (state_19495[(10)]);
var inst_19448 = (state_19495[(11)]);
var inst_19457 = (state_19495[(2)]);
var inst_19458 = (inst_19450 + (1));
var tmp19504 = inst_19449;
var tmp19505 = inst_19447;
var tmp19506 = inst_19448;
var inst_19447__$1 = tmp19505;
var inst_19448__$1 = tmp19506;
var inst_19449__$1 = tmp19504;
var inst_19450__$1 = inst_19458;
var state_19495__$1 = (function (){var statearr_19509 = state_19495;
(statearr_19509[(8)] = inst_19449__$1);

(statearr_19509[(9)] = inst_19450__$1);

(statearr_19509[(10)] = inst_19447__$1);

(statearr_19509[(14)] = inst_19457);

(statearr_19509[(11)] = inst_19448__$1);

return statearr_19509;
})();
var statearr_19510_19543 = state_19495__$1;
(statearr_19510_19543[(2)] = null);

(statearr_19510_19543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (22))){
var state_19495__$1 = state_19495;
var statearr_19511_19544 = state_19495__$1;
(statearr_19511_19544[(2)] = null);

(statearr_19511_19544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (6))){
var inst_19436 = (state_19495[(13)]);
var inst_19445 = f.call(null,inst_19436);
var inst_19446 = cljs.core.seq.call(null,inst_19445);
var inst_19447 = inst_19446;
var inst_19448 = null;
var inst_19449 = (0);
var inst_19450 = (0);
var state_19495__$1 = (function (){var statearr_19512 = state_19495;
(statearr_19512[(8)] = inst_19449);

(statearr_19512[(9)] = inst_19450);

(statearr_19512[(10)] = inst_19447);

(statearr_19512[(11)] = inst_19448);

return statearr_19512;
})();
var statearr_19513_19545 = state_19495__$1;
(statearr_19513_19545[(2)] = null);

(statearr_19513_19545[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (17))){
var inst_19461 = (state_19495[(7)]);
var inst_19465 = cljs.core.chunk_first.call(null,inst_19461);
var inst_19466 = cljs.core.chunk_rest.call(null,inst_19461);
var inst_19467 = cljs.core.count.call(null,inst_19465);
var inst_19447 = inst_19466;
var inst_19448 = inst_19465;
var inst_19449 = inst_19467;
var inst_19450 = (0);
var state_19495__$1 = (function (){var statearr_19514 = state_19495;
(statearr_19514[(8)] = inst_19449);

(statearr_19514[(9)] = inst_19450);

(statearr_19514[(10)] = inst_19447);

(statearr_19514[(11)] = inst_19448);

return statearr_19514;
})();
var statearr_19515_19546 = state_19495__$1;
(statearr_19515_19546[(2)] = null);

(statearr_19515_19546[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (3))){
var inst_19493 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19495__$1,inst_19493);
} else {
if((state_val_19496 === (12))){
var inst_19481 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19516_19547 = state_19495__$1;
(statearr_19516_19547[(2)] = inst_19481);

(statearr_19516_19547[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (2))){
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19495__$1,(4),in$);
} else {
if((state_val_19496 === (23))){
var inst_19489 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19517_19548 = state_19495__$1;
(statearr_19517_19548[(2)] = inst_19489);

(statearr_19517_19548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (19))){
var inst_19476 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19518_19549 = state_19495__$1;
(statearr_19518_19549[(2)] = inst_19476);

(statearr_19518_19549[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (11))){
var inst_19447 = (state_19495[(10)]);
var inst_19461 = (state_19495[(7)]);
var inst_19461__$1 = cljs.core.seq.call(null,inst_19447);
var state_19495__$1 = (function (){var statearr_19519 = state_19495;
(statearr_19519[(7)] = inst_19461__$1);

return statearr_19519;
})();
if(inst_19461__$1){
var statearr_19520_19550 = state_19495__$1;
(statearr_19520_19550[(1)] = (14));

} else {
var statearr_19521_19551 = state_19495__$1;
(statearr_19521_19551[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (9))){
var inst_19483 = (state_19495[(2)]);
var inst_19484 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_19495__$1 = (function (){var statearr_19522 = state_19495;
(statearr_19522[(15)] = inst_19483);

return statearr_19522;
})();
if(cljs.core.truth_(inst_19484)){
var statearr_19523_19552 = state_19495__$1;
(statearr_19523_19552[(1)] = (21));

} else {
var statearr_19524_19553 = state_19495__$1;
(statearr_19524_19553[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (5))){
var inst_19439 = cljs.core.async.close_BANG_.call(null,out);
var state_19495__$1 = state_19495;
var statearr_19525_19554 = state_19495__$1;
(statearr_19525_19554[(2)] = inst_19439);

(statearr_19525_19554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (14))){
var inst_19461 = (state_19495[(7)]);
var inst_19463 = cljs.core.chunked_seq_QMARK_.call(null,inst_19461);
var state_19495__$1 = state_19495;
if(inst_19463){
var statearr_19526_19555 = state_19495__$1;
(statearr_19526_19555[(1)] = (17));

} else {
var statearr_19527_19556 = state_19495__$1;
(statearr_19527_19556[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (16))){
var inst_19479 = (state_19495[(2)]);
var state_19495__$1 = state_19495;
var statearr_19528_19557 = state_19495__$1;
(statearr_19528_19557[(2)] = inst_19479);

(statearr_19528_19557[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19496 === (10))){
var inst_19450 = (state_19495[(9)]);
var inst_19448 = (state_19495[(11)]);
var inst_19455 = cljs.core._nth.call(null,inst_19448,inst_19450);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19495__$1,(13),out,inst_19455);
} else {
if((state_val_19496 === (18))){
var inst_19461 = (state_19495[(7)]);
var inst_19470 = cljs.core.first.call(null,inst_19461);
var state_19495__$1 = state_19495;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19495__$1,(20),out,inst_19470);
} else {
if((state_val_19496 === (8))){
var inst_19449 = (state_19495[(8)]);
var inst_19450 = (state_19495[(9)]);
var inst_19452 = (inst_19450 < inst_19449);
var inst_19453 = inst_19452;
var state_19495__$1 = state_19495;
if(cljs.core.truth_(inst_19453)){
var statearr_19529_19558 = state_19495__$1;
(statearr_19529_19558[(1)] = (10));

} else {
var statearr_19530_19559 = state_19495__$1;
(statearr_19530_19559[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____0 = (function (){
var statearr_19531 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19531[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__);

(statearr_19531[(1)] = (1));

return statearr_19531;
});
var cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____1 = (function (state_19495){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19495);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19532){var ex__16925__auto__ = e19532;
var statearr_19533_19560 = state_19495;
(statearr_19533_19560[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19495[(4)]))){
var statearr_19534_19561 = state_19495;
(statearr_19534_19561[(1)] = cljs.core.first.call(null,(state_19495[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19562 = state_19495;
state_19495 = G__19562;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__ = function(state_19495){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____1.call(this,state_19495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__16922__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19535 = f__16939__auto__.call(null);
(statearr_19535[(6)] = c__16938__auto__);

return statearr_19535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

return c__16938__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19564 = arguments.length;
switch (G__19564) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19567 = arguments.length;
switch (G__19567) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19570 = arguments.length;
switch (G__19570) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19594){
var state_val_19595 = (state_19594[(1)]);
if((state_val_19595 === (7))){
var inst_19589 = (state_19594[(2)]);
var state_19594__$1 = state_19594;
var statearr_19596_19619 = state_19594__$1;
(statearr_19596_19619[(2)] = inst_19589);

(statearr_19596_19619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (1))){
var inst_19571 = null;
var state_19594__$1 = (function (){var statearr_19597 = state_19594;
(statearr_19597[(7)] = inst_19571);

return statearr_19597;
})();
var statearr_19598_19620 = state_19594__$1;
(statearr_19598_19620[(2)] = null);

(statearr_19598_19620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (4))){
var inst_19574 = (state_19594[(8)]);
var inst_19574__$1 = (state_19594[(2)]);
var inst_19575 = (inst_19574__$1 == null);
var inst_19576 = cljs.core.not.call(null,inst_19575);
var state_19594__$1 = (function (){var statearr_19599 = state_19594;
(statearr_19599[(8)] = inst_19574__$1);

return statearr_19599;
})();
if(inst_19576){
var statearr_19600_19621 = state_19594__$1;
(statearr_19600_19621[(1)] = (5));

} else {
var statearr_19601_19622 = state_19594__$1;
(statearr_19601_19622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (6))){
var state_19594__$1 = state_19594;
var statearr_19602_19623 = state_19594__$1;
(statearr_19602_19623[(2)] = null);

(statearr_19602_19623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (3))){
var inst_19591 = (state_19594[(2)]);
var inst_19592 = cljs.core.async.close_BANG_.call(null,out);
var state_19594__$1 = (function (){var statearr_19603 = state_19594;
(statearr_19603[(9)] = inst_19591);

return statearr_19603;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19594__$1,inst_19592);
} else {
if((state_val_19595 === (2))){
var state_19594__$1 = state_19594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19594__$1,(4),ch);
} else {
if((state_val_19595 === (11))){
var inst_19574 = (state_19594[(8)]);
var inst_19583 = (state_19594[(2)]);
var inst_19571 = inst_19574;
var state_19594__$1 = (function (){var statearr_19604 = state_19594;
(statearr_19604[(7)] = inst_19571);

(statearr_19604[(10)] = inst_19583);

return statearr_19604;
})();
var statearr_19605_19624 = state_19594__$1;
(statearr_19605_19624[(2)] = null);

(statearr_19605_19624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (9))){
var inst_19574 = (state_19594[(8)]);
var state_19594__$1 = state_19594;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19594__$1,(11),out,inst_19574);
} else {
if((state_val_19595 === (5))){
var inst_19574 = (state_19594[(8)]);
var inst_19571 = (state_19594[(7)]);
var inst_19578 = cljs.core._EQ_.call(null,inst_19574,inst_19571);
var state_19594__$1 = state_19594;
if(inst_19578){
var statearr_19607_19625 = state_19594__$1;
(statearr_19607_19625[(1)] = (8));

} else {
var statearr_19608_19626 = state_19594__$1;
(statearr_19608_19626[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (10))){
var inst_19586 = (state_19594[(2)]);
var state_19594__$1 = state_19594;
var statearr_19609_19627 = state_19594__$1;
(statearr_19609_19627[(2)] = inst_19586);

(statearr_19609_19627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19595 === (8))){
var inst_19571 = (state_19594[(7)]);
var tmp19606 = inst_19571;
var inst_19571__$1 = tmp19606;
var state_19594__$1 = (function (){var statearr_19610 = state_19594;
(statearr_19610[(7)] = inst_19571__$1);

return statearr_19610;
})();
var statearr_19611_19628 = state_19594__$1;
(statearr_19611_19628[(2)] = null);

(statearr_19611_19628[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19612 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19612[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19612[(1)] = (1));

return statearr_19612;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19594){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19613){var ex__16925__auto__ = e19613;
var statearr_19614_19629 = state_19594;
(statearr_19614_19629[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19594[(4)]))){
var statearr_19615_19630 = state_19594;
(statearr_19615_19630[(1)] = cljs.core.first.call(null,(state_19594[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19631 = state_19594;
state_19594 = G__19631;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19594){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19616 = f__16939__auto__.call(null);
(statearr_19616[(6)] = c__16938__auto___19618);

return statearr_19616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19633 = arguments.length;
switch (G__19633) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19671){
var state_val_19672 = (state_19671[(1)]);
if((state_val_19672 === (7))){
var inst_19667 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19673_19701 = state_19671__$1;
(statearr_19673_19701[(2)] = inst_19667);

(statearr_19673_19701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (1))){
var inst_19634 = (new Array(n));
var inst_19635 = inst_19634;
var inst_19636 = (0);
var state_19671__$1 = (function (){var statearr_19674 = state_19671;
(statearr_19674[(7)] = inst_19635);

(statearr_19674[(8)] = inst_19636);

return statearr_19674;
})();
var statearr_19675_19702 = state_19671__$1;
(statearr_19675_19702[(2)] = null);

(statearr_19675_19702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (4))){
var inst_19639 = (state_19671[(9)]);
var inst_19639__$1 = (state_19671[(2)]);
var inst_19640 = (inst_19639__$1 == null);
var inst_19641 = cljs.core.not.call(null,inst_19640);
var state_19671__$1 = (function (){var statearr_19676 = state_19671;
(statearr_19676[(9)] = inst_19639__$1);

return statearr_19676;
})();
if(inst_19641){
var statearr_19677_19703 = state_19671__$1;
(statearr_19677_19703[(1)] = (5));

} else {
var statearr_19678_19704 = state_19671__$1;
(statearr_19678_19704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (15))){
var inst_19661 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19679_19705 = state_19671__$1;
(statearr_19679_19705[(2)] = inst_19661);

(statearr_19679_19705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (13))){
var state_19671__$1 = state_19671;
var statearr_19680_19706 = state_19671__$1;
(statearr_19680_19706[(2)] = null);

(statearr_19680_19706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (6))){
var inst_19636 = (state_19671[(8)]);
var inst_19657 = (inst_19636 > (0));
var state_19671__$1 = state_19671;
if(cljs.core.truth_(inst_19657)){
var statearr_19681_19707 = state_19671__$1;
(statearr_19681_19707[(1)] = (12));

} else {
var statearr_19682_19708 = state_19671__$1;
(statearr_19682_19708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (3))){
var inst_19669 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19671__$1,inst_19669);
} else {
if((state_val_19672 === (12))){
var inst_19635 = (state_19671[(7)]);
var inst_19659 = cljs.core.vec.call(null,inst_19635);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19671__$1,(15),out,inst_19659);
} else {
if((state_val_19672 === (2))){
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19671__$1,(4),ch);
} else {
if((state_val_19672 === (11))){
var inst_19651 = (state_19671[(2)]);
var inst_19652 = (new Array(n));
var inst_19635 = inst_19652;
var inst_19636 = (0);
var state_19671__$1 = (function (){var statearr_19683 = state_19671;
(statearr_19683[(10)] = inst_19651);

(statearr_19683[(7)] = inst_19635);

(statearr_19683[(8)] = inst_19636);

return statearr_19683;
})();
var statearr_19684_19709 = state_19671__$1;
(statearr_19684_19709[(2)] = null);

(statearr_19684_19709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (9))){
var inst_19635 = (state_19671[(7)]);
var inst_19649 = cljs.core.vec.call(null,inst_19635);
var state_19671__$1 = state_19671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19671__$1,(11),out,inst_19649);
} else {
if((state_val_19672 === (5))){
var inst_19644 = (state_19671[(11)]);
var inst_19635 = (state_19671[(7)]);
var inst_19636 = (state_19671[(8)]);
var inst_19639 = (state_19671[(9)]);
var inst_19643 = (inst_19635[inst_19636] = inst_19639);
var inst_19644__$1 = (inst_19636 + (1));
var inst_19645 = (inst_19644__$1 < n);
var state_19671__$1 = (function (){var statearr_19685 = state_19671;
(statearr_19685[(12)] = inst_19643);

(statearr_19685[(11)] = inst_19644__$1);

return statearr_19685;
})();
if(cljs.core.truth_(inst_19645)){
var statearr_19686_19710 = state_19671__$1;
(statearr_19686_19710[(1)] = (8));

} else {
var statearr_19687_19711 = state_19671__$1;
(statearr_19687_19711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (14))){
var inst_19664 = (state_19671[(2)]);
var inst_19665 = cljs.core.async.close_BANG_.call(null,out);
var state_19671__$1 = (function (){var statearr_19689 = state_19671;
(statearr_19689[(13)] = inst_19664);

return statearr_19689;
})();
var statearr_19690_19712 = state_19671__$1;
(statearr_19690_19712[(2)] = inst_19665);

(statearr_19690_19712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (10))){
var inst_19655 = (state_19671[(2)]);
var state_19671__$1 = state_19671;
var statearr_19691_19713 = state_19671__$1;
(statearr_19691_19713[(2)] = inst_19655);

(statearr_19691_19713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19672 === (8))){
var inst_19644 = (state_19671[(11)]);
var inst_19635 = (state_19671[(7)]);
var tmp19688 = inst_19635;
var inst_19635__$1 = tmp19688;
var inst_19636 = inst_19644;
var state_19671__$1 = (function (){var statearr_19692 = state_19671;
(statearr_19692[(7)] = inst_19635__$1);

(statearr_19692[(8)] = inst_19636);

return statearr_19692;
})();
var statearr_19693_19714 = state_19671__$1;
(statearr_19693_19714[(2)] = null);

(statearr_19693_19714[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19694[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19694[(1)] = (1));

return statearr_19694;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19671){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19695){var ex__16925__auto__ = e19695;
var statearr_19696_19715 = state_19671;
(statearr_19696_19715[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19671[(4)]))){
var statearr_19697_19716 = state_19671;
(statearr_19697_19716[(1)] = cljs.core.first.call(null,(state_19671[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19717 = state_19671;
state_19671 = G__19717;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19698 = f__16939__auto__.call(null);
(statearr_19698[(6)] = c__16938__auto___19700);

return statearr_19698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19719 = arguments.length;
switch (G__19719) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__16938__auto___19790 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19761){
var state_val_19762 = (state_19761[(1)]);
if((state_val_19762 === (7))){
var inst_19757 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19763_19791 = state_19761__$1;
(statearr_19763_19791[(2)] = inst_19757);

(statearr_19763_19791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (1))){
var inst_19720 = [];
var inst_19721 = inst_19720;
var inst_19722 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19761__$1 = (function (){var statearr_19764 = state_19761;
(statearr_19764[(7)] = inst_19722);

(statearr_19764[(8)] = inst_19721);

return statearr_19764;
})();
var statearr_19765_19792 = state_19761__$1;
(statearr_19765_19792[(2)] = null);

(statearr_19765_19792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (4))){
var inst_19725 = (state_19761[(9)]);
var inst_19725__$1 = (state_19761[(2)]);
var inst_19726 = (inst_19725__$1 == null);
var inst_19727 = cljs.core.not.call(null,inst_19726);
var state_19761__$1 = (function (){var statearr_19766 = state_19761;
(statearr_19766[(9)] = inst_19725__$1);

return statearr_19766;
})();
if(inst_19727){
var statearr_19767_19793 = state_19761__$1;
(statearr_19767_19793[(1)] = (5));

} else {
var statearr_19768_19794 = state_19761__$1;
(statearr_19768_19794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (15))){
var inst_19751 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19769_19795 = state_19761__$1;
(statearr_19769_19795[(2)] = inst_19751);

(statearr_19769_19795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (13))){
var state_19761__$1 = state_19761;
var statearr_19770_19796 = state_19761__$1;
(statearr_19770_19796[(2)] = null);

(statearr_19770_19796[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (6))){
var inst_19721 = (state_19761[(8)]);
var inst_19746 = inst_19721.length;
var inst_19747 = (inst_19746 > (0));
var state_19761__$1 = state_19761;
if(cljs.core.truth_(inst_19747)){
var statearr_19771_19797 = state_19761__$1;
(statearr_19771_19797[(1)] = (12));

} else {
var statearr_19772_19798 = state_19761__$1;
(statearr_19772_19798[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (3))){
var inst_19759 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19761__$1,inst_19759);
} else {
if((state_val_19762 === (12))){
var inst_19721 = (state_19761[(8)]);
var inst_19749 = cljs.core.vec.call(null,inst_19721);
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19761__$1,(15),out,inst_19749);
} else {
if((state_val_19762 === (2))){
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19761__$1,(4),ch);
} else {
if((state_val_19762 === (11))){
var inst_19729 = (state_19761[(10)]);
var inst_19725 = (state_19761[(9)]);
var inst_19739 = (state_19761[(2)]);
var inst_19740 = [];
var inst_19741 = inst_19740.push(inst_19725);
var inst_19721 = inst_19740;
var inst_19722 = inst_19729;
var state_19761__$1 = (function (){var statearr_19773 = state_19761;
(statearr_19773[(11)] = inst_19739);

(statearr_19773[(7)] = inst_19722);

(statearr_19773[(12)] = inst_19741);

(statearr_19773[(8)] = inst_19721);

return statearr_19773;
})();
var statearr_19774_19799 = state_19761__$1;
(statearr_19774_19799[(2)] = null);

(statearr_19774_19799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (9))){
var inst_19721 = (state_19761[(8)]);
var inst_19737 = cljs.core.vec.call(null,inst_19721);
var state_19761__$1 = state_19761;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19761__$1,(11),out,inst_19737);
} else {
if((state_val_19762 === (5))){
var inst_19722 = (state_19761[(7)]);
var inst_19729 = (state_19761[(10)]);
var inst_19725 = (state_19761[(9)]);
var inst_19729__$1 = f.call(null,inst_19725);
var inst_19730 = cljs.core._EQ_.call(null,inst_19729__$1,inst_19722);
var inst_19731 = cljs.core.keyword_identical_QMARK_.call(null,inst_19722,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_19732 = ((inst_19730) || (inst_19731));
var state_19761__$1 = (function (){var statearr_19775 = state_19761;
(statearr_19775[(10)] = inst_19729__$1);

return statearr_19775;
})();
if(cljs.core.truth_(inst_19732)){
var statearr_19776_19800 = state_19761__$1;
(statearr_19776_19800[(1)] = (8));

} else {
var statearr_19777_19801 = state_19761__$1;
(statearr_19777_19801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (14))){
var inst_19754 = (state_19761[(2)]);
var inst_19755 = cljs.core.async.close_BANG_.call(null,out);
var state_19761__$1 = (function (){var statearr_19779 = state_19761;
(statearr_19779[(13)] = inst_19754);

return statearr_19779;
})();
var statearr_19780_19802 = state_19761__$1;
(statearr_19780_19802[(2)] = inst_19755);

(statearr_19780_19802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (10))){
var inst_19744 = (state_19761[(2)]);
var state_19761__$1 = state_19761;
var statearr_19781_19803 = state_19761__$1;
(statearr_19781_19803[(2)] = inst_19744);

(statearr_19781_19803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19762 === (8))){
var inst_19721 = (state_19761[(8)]);
var inst_19729 = (state_19761[(10)]);
var inst_19725 = (state_19761[(9)]);
var inst_19734 = inst_19721.push(inst_19725);
var tmp19778 = inst_19721;
var inst_19721__$1 = tmp19778;
var inst_19722 = inst_19729;
var state_19761__$1 = (function (){var statearr_19782 = state_19761;
(statearr_19782[(14)] = inst_19734);

(statearr_19782[(7)] = inst_19722);

(statearr_19782[(8)] = inst_19721__$1);

return statearr_19782;
})();
var statearr_19783_19804 = state_19761__$1;
(statearr_19783_19804[(2)] = null);

(statearr_19783_19804[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__16922__auto__ = null;
var cljs$core$async$state_machine__16922__auto____0 = (function (){
var statearr_19784 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19784[(0)] = cljs$core$async$state_machine__16922__auto__);

(statearr_19784[(1)] = (1));

return statearr_19784;
});
var cljs$core$async$state_machine__16922__auto____1 = (function (state_19761){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19785){var ex__16925__auto__ = e19785;
var statearr_19786_19805 = state_19761;
(statearr_19786_19805[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19761[(4)]))){
var statearr_19787_19806 = state_19761;
(statearr_19787_19806[(1)] = cljs.core.first.call(null,(state_19761[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19807 = state_19761;
state_19761 = G__19807;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs$core$async$state_machine__16922__auto__ = function(state_19761){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__16922__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__16922__auto____1.call(this,state_19761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__16922__auto____0;
cljs$core$async$state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__16922__auto____1;
return cljs$core$async$state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19788 = f__16939__auto__.call(null);
(statearr_19788[(6)] = c__16938__auto___19790);

return statearr_19788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
