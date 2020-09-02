// Compiled by ClojureScript 1.10.773 {}
goog.provide('gollum.parsers');
goog.require('cljs.core');
gollum.parsers.rule_re = /B(\d*)\/S(\d*)/;
gollum.parsers.parse_world = (function gollum$parsers$parse_world(world_string){
var G__10080 = world_string;
var vec__10081 = G__10080;
var seq__10082 = cljs.core.seq.call(null,vec__10081);
var first__10083 = cljs.core.first.call(null,seq__10082);
var seq__10082__$1 = cljs.core.next.call(null,seq__10082);
var s = first__10083;
var rest = seq__10082__$1;
var x = (0);
var y = (0);
var w = cljs.core.PersistentHashSet.EMPTY;
var G__10080__$1 = G__10080;
var x__$1 = x;
var y__$1 = y;
var w__$1 = w;
while(true){
var vec__10088 = G__10080__$1;
var seq__10089 = cljs.core.seq.call(null,vec__10088);
var first__10090 = cljs.core.first.call(null,seq__10089);
var seq__10089__$1 = cljs.core.next.call(null,seq__10089);
var s__$1 = first__10090;
var rest__$1 = seq__10089__$1;
var x__$2 = x__$1;
var y__$2 = y__$1;
var w__$2 = w__$1;
if((s__$1 == null)){
return w__$2;
} else {
var G__10091 = s__$1;
switch (G__10091) {
case "0":
var G__10093 = rest__$1;
var G__10094 = (x__$2 + (1));
var G__10095 = y__$2;
var G__10096 = cljs.core.conj.call(null,w__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$2,y__$2], null));
G__10080__$1 = G__10093;
x__$1 = G__10094;
y__$1 = G__10095;
w__$1 = G__10096;
continue;

break;
case ".":
var G__10097 = rest__$1;
var G__10098 = (x__$2 + (1));
var G__10099 = y__$2;
var G__10100 = w__$2;
G__10080__$1 = G__10097;
x__$1 = G__10098;
y__$1 = G__10099;
w__$1 = G__10100;
continue;

break;
case "\n":
var G__10101 = rest__$1;
var G__10102 = (0);
var G__10103 = (y__$2 + (1));
var G__10104 = w__$2;
G__10080__$1 = G__10101;
x__$1 = G__10102;
y__$1 = G__10103;
w__$1 = G__10104;
continue;

break;
default:
var G__10105 = rest__$1;
var G__10106 = x__$2;
var G__10107 = y__$2;
var G__10108 = w__$2;
G__10080__$1 = G__10105;
x__$1 = G__10106;
y__$1 = G__10107;
w__$1 = G__10108;
continue;

}
}
break;
}
});
gollum.parsers.parse_rules = (function gollum$parsers$parse_rules(rule_string){
if(cljs.core.truth_(cljs.core.re_matches.call(null,gollum.parsers.rule_re,rule_string))){
var vec__10109 = cljs.core.re_matches.call(null,gollum.parsers.rule_re,rule_string);
var _ = cljs.core.nth.call(null,vec__10109,(0),null);
var bs = cljs.core.nth.call(null,vec__10109,(1),null);
var ss = cljs.core.nth.call(null,vec__10109,(2),null);
var c2d = (function (c){
return parseInt(c);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,c2d,bs)),cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,c2d,ss))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentHashSet.EMPTY], null);
}
});

//# sourceMappingURL=parsers.js.map
