// Compiled by ClojureScript 1.10.773 {}
goog.provide('gollum.gol');
goog.require('cljs.core');
goog.require('clojure.set');
gollum.gol.neighbours = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(1)], null)], null);
gollum.gol.is_alive_QMARK_ = (function gollum$gol$is_alive_QMARK_(world,coord){
return cljs.core.contains_QMARK_.call(null,world,coord);
});
gollum.gol.birth = (function gollum$gol$birth(world,coord){
return cljs.core.conj.call(null,world,coord);
});
gollum.gol.kill = (function gollum$gol$kill(world,coord){
return cljs.core.disj.call(null,world,coord);
});
gollum.gol.calc_neigbours = (function gollum$gol$calc_neigbours(coord){
return cljs.core.map.call(null,(function (p1__10077_SHARP_){
return cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core.apply,cljs.core._PLUS_),cljs.core.map.call(null,cljs.core.vector,coord,p1__10077_SHARP_));
}),gollum.gol.neighbours);
});
gollum.gol.count_neighbours = (function gollum$gol$count_neighbours(world,coord){
return cljs.core.count.call(null,clojure.set.intersection.call(null,world,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,gollum.gol.calc_neigbours.call(null,coord))));
});
gollum.gol.build_grid = (function gollum$gol$build_grid(width,height){
return cljs.core.mapcat.call(null,(function (y){
return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);
}),cljs.core.range.call(null,width));
}),cljs.core.range.call(null,height));
});
gollum.gol.birth_survive_QMARK_ = (function gollum$gol$birth_survive_QMARK_(world,coord,p__10078){
var vec__10079 = p__10078;
var B = cljs.core.nth.call(null,vec__10079,(0),null);
var S = cljs.core.nth.call(null,vec__10079,(1),null);
var cnt = gollum.gol.count_neighbours.call(null,world,coord);
return ((cljs.core.contains_QMARK_.call(null,B,cnt)) || (((cljs.core.contains_QMARK_.call(null,S,cnt)) && (gollum.gol.is_alive_QMARK_.call(null,world,coord)))));
});
gollum.gol.step = (function gollum$gol$step(world,rules,width,height){
var grid = gollum.gol.build_grid.call(null,width,height);
return cljs.core.reduce.call(null,(function (newWorld,coord){
if(gollum.gol.birth_survive_QMARK_.call(null,world,coord,rules)){
return cljs.core.conj.call(null,newWorld,coord);
} else {
return newWorld;
}
}),cljs.core.PersistentHashSet.EMPTY,grid);
});

//# sourceMappingURL=gol.js.map
