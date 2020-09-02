// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5720__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__5720__auto__)){
var req = temp__5720__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (p__19810){
var vec__19811 = p__19810;
var k = cljs.core.nth.call(null,vec__19811,(0),null);
var v = cljs.core.nth.call(null,vec__19811,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19814 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__19814)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__19814)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__19814)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__19814)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__19814)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__19814)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19814)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19815){
var map__19816 = p__19815;
var map__19816__$1 = (((((!((map__19816 == null))))?(((((map__19816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19816):map__19816);
var request = map__19816__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19816__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__19816__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__19816__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19818 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__19818,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__19818,response_type);

G__19818.setTimeoutInterval(timeout);

G__19818.setWithCredentials(send_credentials);

return G__19818;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19819){
var map__19820 = p__19819;
var map__19820__$1 = (((((!((map__19820 == null))))?(((((map__19820.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19820.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19820):map__19820);
var request = map__19820__$1;
var request_method = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.call(null,map__19820__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__4126__auto__ = request_method;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_.call(null,xhr)))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));

if(cljs.core.truth_(progress)){
var listener_19845 = (function (direction,evt){
return cljs.core.async.put_BANG_.call(null,progress,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)));
});
var G__19822_19846 = xhr;
G__19822_19846.setProgressEventsEnabled(true);

G__19822_19846.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.call(null,listener_19845,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__19822_19846.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.call(null,listener_19845,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16938__auto___19847 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19833){
var state_val_19834 = (state_19833[(1)]);
if((state_val_19834 === (1))){
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19833__$1,(2),cancel);
} else {
if((state_val_19834 === (2))){
var inst_19824 = (state_19833[(2)]);
var inst_19825 = xhr.isComplete();
var inst_19826 = cljs.core.not.call(null,inst_19825);
var state_19833__$1 = (function (){var statearr_19835 = state_19833;
(statearr_19835[(7)] = inst_19824);

return statearr_19835;
})();
if(inst_19826){
var statearr_19836_19848 = state_19833__$1;
(statearr_19836_19848[(1)] = (3));

} else {
var statearr_19837_19849 = state_19833__$1;
(statearr_19837_19849[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (3))){
var inst_19828 = xhr.abort();
var state_19833__$1 = state_19833;
var statearr_19838_19850 = state_19833__$1;
(statearr_19838_19850[(2)] = inst_19828);

(statearr_19838_19850[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (4))){
var state_19833__$1 = state_19833;
var statearr_19839_19851 = state_19833__$1;
(statearr_19839_19851[(2)] = null);

(statearr_19839_19851[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19834 === (5))){
var inst_19831 = (state_19833[(2)]);
var state_19833__$1 = state_19833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19833__$1,inst_19831);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__16922__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16922__auto____0 = (function (){
var statearr_19840 = [null,null,null,null,null,null,null,null];
(statearr_19840[(0)] = cljs_http$core$xhr_$_state_machine__16922__auto__);

(statearr_19840[(1)] = (1));

return statearr_19840;
});
var cljs_http$core$xhr_$_state_machine__16922__auto____1 = (function (state_19833){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19841){var ex__16925__auto__ = e19841;
var statearr_19842_19852 = state_19833;
(statearr_19842_19852[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19833[(4)]))){
var statearr_19843_19853 = state_19833;
(statearr_19843_19853[(1)] = cljs.core.first.call(null,(state_19833[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19854 = state_19833;
state_19833 = G__19854;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16922__auto__ = function(state_19833){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16922__auto____1.call(this,state_19833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16922__auto____0;
cljs_http$core$xhr_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16922__auto____1;
return cljs_http$core$xhr_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19844 = f__16939__auto__.call(null);
(statearr_19844[(6)] = c__16938__auto___19847);

return statearr_19844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19855){
var map__19856 = p__19855;
var map__19856__$1 = (((((!((map__19856 == null))))?(((((map__19856.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19856.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19856):map__19856);
var request = map__19856__$1;
var timeout = cljs.core.get.call(null,map__19856__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__19856__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__19856__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__19856__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19870 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
}));
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_19870], null));

if(cljs.core.truth_(cancel)){
var c__16938__auto___19871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__16939__auto__ = (function (){var switch__16921__auto__ = (function (state_19862){
var state_val_19863 = (state_19862[(1)]);
if((state_val_19863 === (1))){
var state_19862__$1 = state_19862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19862__$1,(2),cancel);
} else {
if((state_val_19863 === (2))){
var inst_19859 = (state_19862[(2)]);
var inst_19860 = jsonp.cancel(req_19870);
var state_19862__$1 = (function (){var statearr_19864 = state_19862;
(statearr_19864[(7)] = inst_19859);

return statearr_19864;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19862__$1,inst_19860);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__16922__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16922__auto____0 = (function (){
var statearr_19865 = [null,null,null,null,null,null,null,null];
(statearr_19865[(0)] = cljs_http$core$jsonp_$_state_machine__16922__auto__);

(statearr_19865[(1)] = (1));

return statearr_19865;
});
var cljs_http$core$jsonp_$_state_machine__16922__auto____1 = (function (state_19862){
while(true){
var ret_value__16923__auto__ = (function (){try{while(true){
var result__16924__auto__ = switch__16921__auto__.call(null,state_19862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__16924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__16924__auto__;
}
break;
}
}catch (e19866){var ex__16925__auto__ = e19866;
var statearr_19867_19872 = state_19862;
(statearr_19867_19872[(2)] = ex__16925__auto__);


if(cljs.core.seq.call(null,(state_19862[(4)]))){
var statearr_19868_19873 = state_19862;
(statearr_19868_19873[(1)] = cljs.core.first.call(null,(state_19862[(4)])));

} else {
throw ex__16925__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16923__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19874 = state_19862;
state_19862 = G__19874;
continue;
} else {
return ret_value__16923__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16922__auto__ = function(state_19862){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16922__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16922__auto____1.call(this,state_19862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16922__auto____0;
cljs_http$core$jsonp_$_state_machine__16922__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16922__auto____1;
return cljs_http$core$jsonp_$_state_machine__16922__auto__;
})()
})();
var state__16940__auto__ = (function (){var statearr_19869 = f__16939__auto__.call(null);
(statearr_19869[(6)] = c__16938__auto___19871);

return statearr_19869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16940__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19875){
var map__19876 = p__19875;
var map__19876__$1 = (((((!((map__19876 == null))))?(((((map__19876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19876):map__19876);
var request = map__19876__$1;
var request_method = cljs.core.get.call(null,map__19876__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request);
} else {
return cljs_http.core.xhr.call(null,request);
}
});

//# sourceMappingURL=core.js.map
