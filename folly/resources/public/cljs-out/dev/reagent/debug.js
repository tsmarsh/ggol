// Compiled by ClojureScript 1.10.773 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__11468__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11468 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11469__i = 0, G__11469__a = new Array(arguments.length -  0);
while (G__11469__i < G__11469__a.length) {G__11469__a[G__11469__i] = arguments[G__11469__i + 0]; ++G__11469__i;}
  args = new cljs.core.IndexedSeq(G__11469__a,0,null);
} 
return G__11468__delegate.call(this,args);};
G__11468.cljs$lang$maxFixedArity = 0;
G__11468.cljs$lang$applyTo = (function (arglist__11470){
var args = cljs.core.seq(arglist__11470);
return G__11468__delegate(args);
});
G__11468.cljs$core$IFn$_invoke$arity$variadic = G__11468__delegate;
return G__11468;
})()
);

(o.error = (function() { 
var G__11471__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__11471 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11472__i = 0, G__11472__a = new Array(arguments.length -  0);
while (G__11472__i < G__11472__a.length) {G__11472__a[G__11472__i] = arguments[G__11472__i + 0]; ++G__11472__i;}
  args = new cljs.core.IndexedSeq(G__11472__a,0,null);
} 
return G__11471__delegate.call(this,args);};
G__11471.cljs$lang$maxFixedArity = 0;
G__11471.cljs$lang$applyTo = (function (arglist__11473){
var args = cljs.core.seq(arglist__11473);
return G__11471__delegate(args);
});
G__11471.cljs$core$IFn$_invoke$arity$variadic = G__11471__delegate;
return G__11471;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=debug.js.map
