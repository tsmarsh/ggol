// Compiled by ClojureScript 1.10.773 {}
goog.provide('folly.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('reagent.dom');
goog.require('gollum.parsers');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
if((typeof folly !== 'undefined') && (typeof folly.core !== 'undefined') && (typeof folly.core.width !== 'undefined')){
} else {
folly.core.width = (10);
}
if((typeof folly !== 'undefined') && (typeof folly.core !== 'undefined') && (typeof folly.core.height !== 'undefined')){
} else {
folly.core.height = (10);
}
if((typeof folly !== 'undefined') && (typeof folly.core !== 'undefined') && (typeof folly.core.world_url !== 'undefined')){
} else {
folly.core.world_url = "http://localhost/1/1/";
}
folly.core.demo = gollum.parsers.parse_world.call(null,"..........\n                     ..........\n                     ....000...\n                     .....0....\n                     ..........\n                     .....0....\n                     ....000...\n                     ..........\n                     ..........\n                     ..........");
if((typeof folly !== 'undefined') && (typeof folly.core !== 'undefined') && (typeof folly.core.world !== 'undefined')){
} else {
folly.core.world = reagent.core.atom.call(null,folly.core.demo);
}
var c__12050__auto___12149 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12051__auto__ = (function (){var switch__12027__auto__ = (function (state_12141){
var state_val_12142 = (state_12141[(1)]);
if((state_val_12142 === (1))){
var inst_12128 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_12129 = [false];
var inst_12130 = cljs.core.PersistentHashMap.fromArrays(inst_12128,inst_12129);
var inst_12131 = cljs_http.client.get.call(null,folly.core.world_url,inst_12130);
var state_12141__$1 = state_12141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12141__$1,(2),inst_12131);
} else {
if((state_val_12142 === (2))){
var inst_12133 = (state_12141[(2)]);
var inst_12134 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_12133);
var inst_12135 = cljs.core.prn.call(null,inst_12134);
var inst_12136 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12133);
var inst_12137 = gollum.parsers.parse_world.call(null,inst_12136);
var inst_12138 = cljs.core.prn.call(null,inst_12137);
var inst_12139 = cljs.core.reset_BANG_.call(null,folly.core.world,inst_12137);
var state_12141__$1 = (function (){var statearr_12143 = state_12141;
(statearr_12143[(7)] = inst_12138);

(statearr_12143[(8)] = inst_12135);

return statearr_12143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12141__$1,inst_12139);
} else {
return null;
}
}
});
return (function() {
var folly$core$state_machine__12028__auto__ = null;
var folly$core$state_machine__12028__auto____0 = (function (){
var statearr_12144 = [null,null,null,null,null,null,null,null,null];
(statearr_12144[(0)] = folly$core$state_machine__12028__auto__);

(statearr_12144[(1)] = (1));

return statearr_12144;
});
var folly$core$state_machine__12028__auto____1 = (function (state_12141){
while(true){
var ret_value__12029__auto__ = (function (){try{while(true){
var result__12030__auto__ = switch__12027__auto__.call(null,state_12141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12030__auto__;
}
break;
}
}catch (e12145){var ex__12031__auto__ = e12145;
var statearr_12146_12150 = state_12141;
(statearr_12146_12150[(2)] = ex__12031__auto__);


if(cljs.core.seq.call(null,(state_12141[(4)]))){
var statearr_12147_12151 = state_12141;
(statearr_12147_12151[(1)] = cljs.core.first.call(null,(state_12141[(4)])));

} else {
throw ex__12031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12152 = state_12141;
state_12141 = G__12152;
continue;
} else {
return ret_value__12029__auto__;
}
break;
}
});
folly$core$state_machine__12028__auto__ = function(state_12141){
switch(arguments.length){
case 0:
return folly$core$state_machine__12028__auto____0.call(this);
case 1:
return folly$core$state_machine__12028__auto____1.call(this,state_12141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
folly$core$state_machine__12028__auto__.cljs$core$IFn$_invoke$arity$0 = folly$core$state_machine__12028__auto____0;
folly$core$state_machine__12028__auto__.cljs$core$IFn$_invoke$arity$1 = folly$core$state_machine__12028__auto____1;
return folly$core$state_machine__12028__auto__;
})()
})();
var state__12052__auto__ = (function (){var statearr_12148 = f__12051__auto__.call(null);
(statearr_12148[(6)] = c__12050__auto___12149);

return statearr_12148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12052__auto__);
}));

folly.core.get_app_element = (function folly$core$get_app_element(){
return goog.dom.getElement("app");
});
folly.core.modify_cell = (function folly$core$modify_cell(id,verb){
var x = id.target.getAttribute("x");
var y = id.target.getAttribute("y");
var url = [folly.core.world_url,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
cljs.core.println.call(null,["modifying: ","\tx:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"\ty:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y),"\turl:",url].join(''));

var c__12050__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__12051__auto__ = (function (){var switch__12027__auto__ = (function (state_12163){
var state_val_12164 = (state_12163[(1)]);
if((state_val_12164 === (1))){
var inst_12153 = verb.call(null,url);
var state_12163__$1 = state_12163;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12163__$1,(2),inst_12153);
} else {
if((state_val_12164 === (2))){
var inst_12155 = (state_12163[(2)]);
var inst_12156 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_12155);
var inst_12157 = cljs.core.prn.call(null,inst_12156);
var inst_12158 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_12155);
var inst_12159 = gollum.parsers.parse_world.call(null,inst_12158);
var inst_12160 = cljs.core.prn.call(null,inst_12159);
var inst_12161 = cljs.core.reset_BANG_.call(null,folly.core.world,inst_12159);
var state_12163__$1 = (function (){var statearr_12165 = state_12163;
(statearr_12165[(7)] = inst_12157);

(statearr_12165[(8)] = inst_12160);

return statearr_12165;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12163__$1,inst_12161);
} else {
return null;
}
}
});
return (function() {
var folly$core$modify_cell_$_state_machine__12028__auto__ = null;
var folly$core$modify_cell_$_state_machine__12028__auto____0 = (function (){
var statearr_12166 = [null,null,null,null,null,null,null,null,null];
(statearr_12166[(0)] = folly$core$modify_cell_$_state_machine__12028__auto__);

(statearr_12166[(1)] = (1));

return statearr_12166;
});
var folly$core$modify_cell_$_state_machine__12028__auto____1 = (function (state_12163){
while(true){
var ret_value__12029__auto__ = (function (){try{while(true){
var result__12030__auto__ = switch__12027__auto__.call(null,state_12163);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12030__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12030__auto__;
}
break;
}
}catch (e12167){var ex__12031__auto__ = e12167;
var statearr_12168_12171 = state_12163;
(statearr_12168_12171[(2)] = ex__12031__auto__);


if(cljs.core.seq.call(null,(state_12163[(4)]))){
var statearr_12169_12172 = state_12163;
(statearr_12169_12172[(1)] = cljs.core.first.call(null,(state_12163[(4)])));

} else {
throw ex__12031__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12029__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12173 = state_12163;
state_12163 = G__12173;
continue;
} else {
return ret_value__12029__auto__;
}
break;
}
});
folly$core$modify_cell_$_state_machine__12028__auto__ = function(state_12163){
switch(arguments.length){
case 0:
return folly$core$modify_cell_$_state_machine__12028__auto____0.call(this);
case 1:
return folly$core$modify_cell_$_state_machine__12028__auto____1.call(this,state_12163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
folly$core$modify_cell_$_state_machine__12028__auto__.cljs$core$IFn$_invoke$arity$0 = folly$core$modify_cell_$_state_machine__12028__auto____0;
folly$core$modify_cell_$_state_machine__12028__auto__.cljs$core$IFn$_invoke$arity$1 = folly$core$modify_cell_$_state_machine__12028__auto____1;
return folly$core$modify_cell_$_state_machine__12028__auto__;
})()
})();
var state__12052__auto__ = (function (){var statearr_12170 = f__12051__auto__.call(null);
(statearr_12170[(6)] = c__12050__auto__);

return statearr_12170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12052__auto__);
}));

return c__12050__auto__;
});
folly.core.birth_cell = (function folly$core$birth_cell(id){
return folly.core.modify_cell.call(null,id,cljs_http.client.put);
});
folly.core.kill_cell = (function folly$core$kill_cell(id){
return folly.core.modify_cell.call(null,id,cljs_http.client.delete$);
});
folly.core.print_world = (function folly$core$print_world(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),(function (){var iter__4529__auto__ = (function folly$core$print_world_$_iter__12174(s__12175){
return (new cljs.core.LazySeq(null,(function (){
var s__12175__$1 = s__12175;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__12175__$1);
if(temp__5720__auto__){
var s__12175__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12175__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__12175__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__12177 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__12176 = (0);
while(true){
if((i__12176 < size__4528__auto__)){
var y = cljs.core._nth.call(null,c__4527__auto__,i__12176);
cljs.core.chunk_append.call(null,b__12177,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = ((function (i__12176,y,c__4527__auto__,size__4528__auto__,b__12177,s__12175__$2,temp__5720__auto__){
return (function folly$core$print_world_$_iter__12174_$_iter__12178(s__12179){
return (new cljs.core.LazySeq(null,((function (i__12176,y,c__4527__auto__,size__4528__auto__,b__12177,s__12175__$2,temp__5720__auto__){
return (function (){
var s__12179__$1 = s__12179;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12179__$1);
if(temp__5720__auto____$1){
var s__12179__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12179__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first.call(null,s__12179__$2);
var size__4528__auto____$1 = cljs.core.count.call(null,c__4527__auto____$1);
var b__12181 = cljs.core.chunk_buffer.call(null,size__4528__auto____$1);
if((function (){var i__12180 = (0);
while(true){
if((i__12180 < size__4528__auto____$1)){
var x = cljs.core._nth.call(null,c__4527__auto____$1,i__12180);
cljs.core.chunk_append.call(null,b__12181,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.kill_cell], null));
} else {
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.birth_cell], null));
}
})(),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"."], null))], null)], null));

var G__12186 = (i__12180 + (1));
i__12180 = G__12186;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12181),folly$core$print_world_$_iter__12174_$_iter__12178.call(null,cljs.core.chunk_rest.call(null,s__12179__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12181),null);
}
} else {
var x = cljs.core.first.call(null,s__12179__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.kill_cell], null));
} else {
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.birth_cell], null));
}
})(),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"."], null))], null)], null),folly$core$print_world_$_iter__12174_$_iter__12178.call(null,cljs.core.rest.call(null,s__12179__$2)));
}
} else {
return null;
}
break;
}
});})(i__12176,y,c__4527__auto__,size__4528__auto__,b__12177,s__12175__$2,temp__5720__auto__))
,null,null));
});})(i__12176,y,c__4527__auto__,size__4528__auto__,b__12177,s__12175__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cljs.core.range.call(null,folly.core.width));
})()], null));

var G__12187 = (i__12176 + (1));
i__12176 = G__12187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12177),folly$core$print_world_$_iter__12174.call(null,cljs.core.chunk_rest.call(null,s__12175__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12177),null);
}
} else {
var y = cljs.core.first.call(null,s__12175__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4529__auto__ = ((function (y,s__12175__$2,temp__5720__auto__){
return (function folly$core$print_world_$_iter__12174_$_iter__12182(s__12183){
return (new cljs.core.LazySeq(null,(function (){
var s__12183__$1 = s__12183;
while(true){
var temp__5720__auto____$1 = cljs.core.seq.call(null,s__12183__$1);
if(temp__5720__auto____$1){
var s__12183__$2 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__12183__$2)){
var c__4527__auto__ = cljs.core.chunk_first.call(null,s__12183__$2);
var size__4528__auto__ = cljs.core.count.call(null,c__4527__auto__);
var b__12185 = cljs.core.chunk_buffer.call(null,size__4528__auto__);
if((function (){var i__12184 = (0);
while(true){
if((i__12184 < size__4528__auto__)){
var x = cljs.core._nth.call(null,c__4527__auto__,i__12184);
cljs.core.chunk_append.call(null,b__12185,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.kill_cell], null));
} else {
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.birth_cell], null));
}
})(),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"."], null))], null)], null));

var G__12188 = (i__12184 + (1));
i__12184 = G__12188;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12185),folly$core$print_world_$_iter__12174_$_iter__12182.call(null,cljs.core.chunk_rest.call(null,s__12183__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12185),null);
}
} else {
var x = cljs.core.first.call(null,s__12183__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),(function (){var base = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["cell-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))].join(''),new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))){
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.kill_cell], null));
} else {
return cljs.core.merge.call(null,base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),folly.core.birth_cell], null));
}
})(),((cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,folly.core.world),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"0"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),"."], null))], null)], null),folly$core$print_world_$_iter__12174_$_iter__12182.call(null,cljs.core.rest.call(null,s__12183__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(y,s__12175__$2,temp__5720__auto__))
;
return iter__4529__auto__.call(null,cljs.core.range.call(null,folly.core.width));
})()], null),folly$core$print_world_$_iter__12174.call(null,cljs.core.rest.call(null,s__12175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__.call(null,cljs.core.range.call(null,folly.core.height));
})()], null);
});
folly.core.page = (function folly$core$page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Golly"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"A super scalable game of life"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),folly.core.print_world.call(null)], null)], null);
});
folly.core.mount = (function folly$core$mount(el){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [folly.core.page], null),el);
});
folly.core.mount_app_element = (function folly$core$mount_app_element(){
var temp__5720__auto__ = folly.core.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
return folly.core.mount.call(null,el);
} else {
return null;
}
});
folly.core.mount_app_element.call(null);
folly.core.on_reload = (function folly$core$on_reload(){
return folly.core.mount_app_element.call(null);
});

//# sourceMappingURL=core.js.map
