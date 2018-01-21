// Compiled by ClojureScript 1.9.946 {}
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
});
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

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__9627__auto__,writer__9628__auto__,opt__9629__auto__){
return cljs.core._write.call(null,writer__9628__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13534 = arguments.length;
var i__10236__auto___13535 = (0);
while(true){
if((i__10236__auto___13535 < len__10235__auto___13534)){
args__10242__auto__.push((arguments[i__10236__auto___13535]));

var G__13536 = (i__10236__auto___13535 + (1));
i__10236__auto___13535 = G__13536;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq13533){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13533));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13538 = arguments.length;
var i__10236__auto___13539 = (0);
while(true){
if((i__10236__auto___13539 < len__10235__auto___13538)){
args__10242__auto__.push((arguments[i__10236__auto___13539]));

var G__13540 = (i__10236__auto___13539 + (1));
i__10236__auto___13539 = G__13540;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq13537){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13537));
});

var g_QMARK__13541 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_13542 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13541){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__13541))
,null));
var mkg_13543 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__13541,g_13542){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__13541,g_13542))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__13541,g_13542,mkg_13543){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__13541).call(null,x);
});})(g_QMARK__13541,g_13542,mkg_13543))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__13541,g_13542,mkg_13543){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_13543).call(null,gfn);
});})(g_QMARK__13541,g_13542,mkg_13543))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__13541,g_13542,mkg_13543){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_13542).call(null,generator);
});})(g_QMARK__13541,g_13542,mkg_13543))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__10338__auto___13563 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__10338__auto___13563){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13564 = arguments.length;
var i__10236__auto___13565 = (0);
while(true){
if((i__10236__auto___13565 < len__10235__auto___13564)){
args__10242__auto__.push((arguments[i__10236__auto___13565]));

var G__13566 = (i__10236__auto___13565 + (1));
i__10236__auto___13565 = G__13566;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13563))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13563){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13563),args);
});})(g__10338__auto___13563))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__10338__auto___13563){
return (function (seq13544){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13544));
});})(g__10338__auto___13563))
;


var g__10338__auto___13567 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__10338__auto___13567){
return (function cljs$spec$gen$alpha$list(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13568 = arguments.length;
var i__10236__auto___13569 = (0);
while(true){
if((i__10236__auto___13569 < len__10235__auto___13568)){
args__10242__auto__.push((arguments[i__10236__auto___13569]));

var G__13570 = (i__10236__auto___13569 + (1));
i__10236__auto___13569 = G__13570;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13567))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13567){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13567),args);
});})(g__10338__auto___13567))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__10338__auto___13567){
return (function (seq13545){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13545));
});})(g__10338__auto___13567))
;


var g__10338__auto___13571 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__10338__auto___13571){
return (function cljs$spec$gen$alpha$map(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13572 = arguments.length;
var i__10236__auto___13573 = (0);
while(true){
if((i__10236__auto___13573 < len__10235__auto___13572)){
args__10242__auto__.push((arguments[i__10236__auto___13573]));

var G__13574 = (i__10236__auto___13573 + (1));
i__10236__auto___13573 = G__13574;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13571))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13571){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13571),args);
});})(g__10338__auto___13571))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__10338__auto___13571){
return (function (seq13546){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13546));
});})(g__10338__auto___13571))
;


var g__10338__auto___13575 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__10338__auto___13575){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13576 = arguments.length;
var i__10236__auto___13577 = (0);
while(true){
if((i__10236__auto___13577 < len__10235__auto___13576)){
args__10242__auto__.push((arguments[i__10236__auto___13577]));

var G__13578 = (i__10236__auto___13577 + (1));
i__10236__auto___13577 = G__13578;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13575))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13575){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13575),args);
});})(g__10338__auto___13575))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__10338__auto___13575){
return (function (seq13547){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13547));
});})(g__10338__auto___13575))
;


var g__10338__auto___13579 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__10338__auto___13579){
return (function cljs$spec$gen$alpha$set(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13580 = arguments.length;
var i__10236__auto___13581 = (0);
while(true){
if((i__10236__auto___13581 < len__10235__auto___13580)){
args__10242__auto__.push((arguments[i__10236__auto___13581]));

var G__13582 = (i__10236__auto___13581 + (1));
i__10236__auto___13581 = G__13582;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13579))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13579){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13579),args);
});})(g__10338__auto___13579))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__10338__auto___13579){
return (function (seq13548){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13548));
});})(g__10338__auto___13579))
;


var g__10338__auto___13583 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__10338__auto___13583){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13584 = arguments.length;
var i__10236__auto___13585 = (0);
while(true){
if((i__10236__auto___13585 < len__10235__auto___13584)){
args__10242__auto__.push((arguments[i__10236__auto___13585]));

var G__13586 = (i__10236__auto___13585 + (1));
i__10236__auto___13585 = G__13586;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13583))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13583){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13583),args);
});})(g__10338__auto___13583))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__10338__auto___13583){
return (function (seq13549){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13549));
});})(g__10338__auto___13583))
;


var g__10338__auto___13587 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__10338__auto___13587){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13588 = arguments.length;
var i__10236__auto___13589 = (0);
while(true){
if((i__10236__auto___13589 < len__10235__auto___13588)){
args__10242__auto__.push((arguments[i__10236__auto___13589]));

var G__13590 = (i__10236__auto___13589 + (1));
i__10236__auto___13589 = G__13590;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13587))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13587){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13587),args);
});})(g__10338__auto___13587))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__10338__auto___13587){
return (function (seq13550){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13550));
});})(g__10338__auto___13587))
;


var g__10338__auto___13591 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__10338__auto___13591){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13592 = arguments.length;
var i__10236__auto___13593 = (0);
while(true){
if((i__10236__auto___13593 < len__10235__auto___13592)){
args__10242__auto__.push((arguments[i__10236__auto___13593]));

var G__13594 = (i__10236__auto___13593 + (1));
i__10236__auto___13593 = G__13594;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13591))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13591){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13591),args);
});})(g__10338__auto___13591))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__10338__auto___13591){
return (function (seq13551){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13551));
});})(g__10338__auto___13591))
;


var g__10338__auto___13595 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__10338__auto___13595){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13596 = arguments.length;
var i__10236__auto___13597 = (0);
while(true){
if((i__10236__auto___13597 < len__10235__auto___13596)){
args__10242__auto__.push((arguments[i__10236__auto___13597]));

var G__13598 = (i__10236__auto___13597 + (1));
i__10236__auto___13597 = G__13598;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13595))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13595){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13595),args);
});})(g__10338__auto___13595))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__10338__auto___13595){
return (function (seq13552){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13552));
});})(g__10338__auto___13595))
;


var g__10338__auto___13599 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__10338__auto___13599){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13600 = arguments.length;
var i__10236__auto___13601 = (0);
while(true){
if((i__10236__auto___13601 < len__10235__auto___13600)){
args__10242__auto__.push((arguments[i__10236__auto___13601]));

var G__13602 = (i__10236__auto___13601 + (1));
i__10236__auto___13601 = G__13602;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13599))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13599){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13599),args);
});})(g__10338__auto___13599))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__10338__auto___13599){
return (function (seq13553){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13553));
});})(g__10338__auto___13599))
;


var g__10338__auto___13603 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__10338__auto___13603){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13604 = arguments.length;
var i__10236__auto___13605 = (0);
while(true){
if((i__10236__auto___13605 < len__10235__auto___13604)){
args__10242__auto__.push((arguments[i__10236__auto___13605]));

var G__13606 = (i__10236__auto___13605 + (1));
i__10236__auto___13605 = G__13606;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13603))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13603){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13603),args);
});})(g__10338__auto___13603))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__10338__auto___13603){
return (function (seq13554){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13554));
});})(g__10338__auto___13603))
;


var g__10338__auto___13607 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__10338__auto___13607){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13608 = arguments.length;
var i__10236__auto___13609 = (0);
while(true){
if((i__10236__auto___13609 < len__10235__auto___13608)){
args__10242__auto__.push((arguments[i__10236__auto___13609]));

var G__13610 = (i__10236__auto___13609 + (1));
i__10236__auto___13609 = G__13610;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13607))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13607){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13607),args);
});})(g__10338__auto___13607))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__10338__auto___13607){
return (function (seq13555){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13555));
});})(g__10338__auto___13607))
;


var g__10338__auto___13611 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__10338__auto___13611){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13612 = arguments.length;
var i__10236__auto___13613 = (0);
while(true){
if((i__10236__auto___13613 < len__10235__auto___13612)){
args__10242__auto__.push((arguments[i__10236__auto___13613]));

var G__13614 = (i__10236__auto___13613 + (1));
i__10236__auto___13613 = G__13614;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13611))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13611){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13611),args);
});})(g__10338__auto___13611))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__10338__auto___13611){
return (function (seq13556){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13556));
});})(g__10338__auto___13611))
;


var g__10338__auto___13615 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__10338__auto___13615){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13616 = arguments.length;
var i__10236__auto___13617 = (0);
while(true){
if((i__10236__auto___13617 < len__10235__auto___13616)){
args__10242__auto__.push((arguments[i__10236__auto___13617]));

var G__13618 = (i__10236__auto___13617 + (1));
i__10236__auto___13617 = G__13618;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13615))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13615){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13615),args);
});})(g__10338__auto___13615))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__10338__auto___13615){
return (function (seq13557){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13557));
});})(g__10338__auto___13615))
;


var g__10338__auto___13619 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__10338__auto___13619){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13620 = arguments.length;
var i__10236__auto___13621 = (0);
while(true){
if((i__10236__auto___13621 < len__10235__auto___13620)){
args__10242__auto__.push((arguments[i__10236__auto___13621]));

var G__13622 = (i__10236__auto___13621 + (1));
i__10236__auto___13621 = G__13622;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13619))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13619){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13619),args);
});})(g__10338__auto___13619))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__10338__auto___13619){
return (function (seq13558){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13558));
});})(g__10338__auto___13619))
;


var g__10338__auto___13623 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__10338__auto___13623){
return (function cljs$spec$gen$alpha$return(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13624 = arguments.length;
var i__10236__auto___13625 = (0);
while(true){
if((i__10236__auto___13625 < len__10235__auto___13624)){
args__10242__auto__.push((arguments[i__10236__auto___13625]));

var G__13626 = (i__10236__auto___13625 + (1));
i__10236__auto___13625 = G__13626;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13623))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13623){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13623),args);
});})(g__10338__auto___13623))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__10338__auto___13623){
return (function (seq13559){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13559));
});})(g__10338__auto___13623))
;


var g__10338__auto___13627 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__10338__auto___13627){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13628 = arguments.length;
var i__10236__auto___13629 = (0);
while(true){
if((i__10236__auto___13629 < len__10235__auto___13628)){
args__10242__auto__.push((arguments[i__10236__auto___13629]));

var G__13630 = (i__10236__auto___13629 + (1));
i__10236__auto___13629 = G__13630;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13627))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13627){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13627),args);
});})(g__10338__auto___13627))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__10338__auto___13627){
return (function (seq13560){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13560));
});})(g__10338__auto___13627))
;


var g__10338__auto___13631 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__10338__auto___13631){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13632 = arguments.length;
var i__10236__auto___13633 = (0);
while(true){
if((i__10236__auto___13633 < len__10235__auto___13632)){
args__10242__auto__.push((arguments[i__10236__auto___13633]));

var G__13634 = (i__10236__auto___13633 + (1));
i__10236__auto___13633 = G__13634;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13631))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13631){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13631),args);
});})(g__10338__auto___13631))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__10338__auto___13631){
return (function (seq13561){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13561));
});})(g__10338__auto___13631))
;


var g__10338__auto___13635 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__10338__auto___13635){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13636 = arguments.length;
var i__10236__auto___13637 = (0);
while(true){
if((i__10236__auto___13637 < len__10235__auto___13636)){
args__10242__auto__.push((arguments[i__10236__auto___13637]));

var G__13638 = (i__10236__auto___13637 + (1));
i__10236__auto___13637 = G__13638;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10338__auto___13635))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10338__auto___13635){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__10338__auto___13635),args);
});})(g__10338__auto___13635))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__10338__auto___13635){
return (function (seq13562){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13562));
});})(g__10338__auto___13635))
;

var g__10351__auto___13660 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__10351__auto___13660){
return (function cljs$spec$gen$alpha$any(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13661 = arguments.length;
var i__10236__auto___13662 = (0);
while(true){
if((i__10236__auto___13662 < len__10235__auto___13661)){
args__10242__auto__.push((arguments[i__10236__auto___13662]));

var G__13663 = (i__10236__auto___13662 + (1));
i__10236__auto___13662 = G__13663;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13660))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13660){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13660);
});})(g__10351__auto___13660))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__10351__auto___13660){
return (function (seq13639){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13639));
});})(g__10351__auto___13660))
;


var g__10351__auto___13664 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__10351__auto___13664){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13665 = arguments.length;
var i__10236__auto___13666 = (0);
while(true){
if((i__10236__auto___13666 < len__10235__auto___13665)){
args__10242__auto__.push((arguments[i__10236__auto___13666]));

var G__13667 = (i__10236__auto___13666 + (1));
i__10236__auto___13666 = G__13667;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13664))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13664){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13664);
});})(g__10351__auto___13664))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__10351__auto___13664){
return (function (seq13640){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13640));
});})(g__10351__auto___13664))
;


var g__10351__auto___13668 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__10351__auto___13668){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13669 = arguments.length;
var i__10236__auto___13670 = (0);
while(true){
if((i__10236__auto___13670 < len__10235__auto___13669)){
args__10242__auto__.push((arguments[i__10236__auto___13670]));

var G__13671 = (i__10236__auto___13670 + (1));
i__10236__auto___13670 = G__13671;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13668))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13668){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13668);
});})(g__10351__auto___13668))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__10351__auto___13668){
return (function (seq13641){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13641));
});})(g__10351__auto___13668))
;


var g__10351__auto___13672 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__10351__auto___13672){
return (function cljs$spec$gen$alpha$char(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13673 = arguments.length;
var i__10236__auto___13674 = (0);
while(true){
if((i__10236__auto___13674 < len__10235__auto___13673)){
args__10242__auto__.push((arguments[i__10236__auto___13674]));

var G__13675 = (i__10236__auto___13674 + (1));
i__10236__auto___13674 = G__13675;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13672))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13672){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13672);
});})(g__10351__auto___13672))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__10351__auto___13672){
return (function (seq13642){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13642));
});})(g__10351__auto___13672))
;


var g__10351__auto___13676 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__10351__auto___13676){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13677 = arguments.length;
var i__10236__auto___13678 = (0);
while(true){
if((i__10236__auto___13678 < len__10235__auto___13677)){
args__10242__auto__.push((arguments[i__10236__auto___13678]));

var G__13679 = (i__10236__auto___13678 + (1));
i__10236__auto___13678 = G__13679;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13676))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13676){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13676);
});})(g__10351__auto___13676))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__10351__auto___13676){
return (function (seq13643){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13643));
});})(g__10351__auto___13676))
;


var g__10351__auto___13680 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__10351__auto___13680){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13681 = arguments.length;
var i__10236__auto___13682 = (0);
while(true){
if((i__10236__auto___13682 < len__10235__auto___13681)){
args__10242__auto__.push((arguments[i__10236__auto___13682]));

var G__13683 = (i__10236__auto___13682 + (1));
i__10236__auto___13682 = G__13683;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13680))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13680){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13680);
});})(g__10351__auto___13680))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__10351__auto___13680){
return (function (seq13644){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13644));
});})(g__10351__auto___13680))
;


var g__10351__auto___13684 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__10351__auto___13684){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13685 = arguments.length;
var i__10236__auto___13686 = (0);
while(true){
if((i__10236__auto___13686 < len__10235__auto___13685)){
args__10242__auto__.push((arguments[i__10236__auto___13686]));

var G__13687 = (i__10236__auto___13686 + (1));
i__10236__auto___13686 = G__13687;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13684))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13684){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13684);
});})(g__10351__auto___13684))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__10351__auto___13684){
return (function (seq13645){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13645));
});})(g__10351__auto___13684))
;


var g__10351__auto___13688 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__10351__auto___13688){
return (function cljs$spec$gen$alpha$double(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13689 = arguments.length;
var i__10236__auto___13690 = (0);
while(true){
if((i__10236__auto___13690 < len__10235__auto___13689)){
args__10242__auto__.push((arguments[i__10236__auto___13690]));

var G__13691 = (i__10236__auto___13690 + (1));
i__10236__auto___13690 = G__13691;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13688))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13688){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13688);
});})(g__10351__auto___13688))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__10351__auto___13688){
return (function (seq13646){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13646));
});})(g__10351__auto___13688))
;


var g__10351__auto___13692 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__10351__auto___13692){
return (function cljs$spec$gen$alpha$int(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13693 = arguments.length;
var i__10236__auto___13694 = (0);
while(true){
if((i__10236__auto___13694 < len__10235__auto___13693)){
args__10242__auto__.push((arguments[i__10236__auto___13694]));

var G__13695 = (i__10236__auto___13694 + (1));
i__10236__auto___13694 = G__13695;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13692))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13692){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13692);
});})(g__10351__auto___13692))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__10351__auto___13692){
return (function (seq13647){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13647));
});})(g__10351__auto___13692))
;


var g__10351__auto___13696 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__10351__auto___13696){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13697 = arguments.length;
var i__10236__auto___13698 = (0);
while(true){
if((i__10236__auto___13698 < len__10235__auto___13697)){
args__10242__auto__.push((arguments[i__10236__auto___13698]));

var G__13699 = (i__10236__auto___13698 + (1));
i__10236__auto___13698 = G__13699;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13696))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13696){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13696);
});})(g__10351__auto___13696))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__10351__auto___13696){
return (function (seq13648){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13648));
});})(g__10351__auto___13696))
;


var g__10351__auto___13700 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__10351__auto___13700){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13701 = arguments.length;
var i__10236__auto___13702 = (0);
while(true){
if((i__10236__auto___13702 < len__10235__auto___13701)){
args__10242__auto__.push((arguments[i__10236__auto___13702]));

var G__13703 = (i__10236__auto___13702 + (1));
i__10236__auto___13702 = G__13703;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13700))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13700){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13700);
});})(g__10351__auto___13700))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__10351__auto___13700){
return (function (seq13649){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13649));
});})(g__10351__auto___13700))
;


var g__10351__auto___13704 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__10351__auto___13704){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13705 = arguments.length;
var i__10236__auto___13706 = (0);
while(true){
if((i__10236__auto___13706 < len__10235__auto___13705)){
args__10242__auto__.push((arguments[i__10236__auto___13706]));

var G__13707 = (i__10236__auto___13706 + (1));
i__10236__auto___13706 = G__13707;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13704))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13704){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13704);
});})(g__10351__auto___13704))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__10351__auto___13704){
return (function (seq13650){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13650));
});})(g__10351__auto___13704))
;


var g__10351__auto___13708 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__10351__auto___13708){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13709 = arguments.length;
var i__10236__auto___13710 = (0);
while(true){
if((i__10236__auto___13710 < len__10235__auto___13709)){
args__10242__auto__.push((arguments[i__10236__auto___13710]));

var G__13711 = (i__10236__auto___13710 + (1));
i__10236__auto___13710 = G__13711;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13708))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13708){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13708);
});})(g__10351__auto___13708))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__10351__auto___13708){
return (function (seq13651){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13651));
});})(g__10351__auto___13708))
;


var g__10351__auto___13712 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__10351__auto___13712){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13713 = arguments.length;
var i__10236__auto___13714 = (0);
while(true){
if((i__10236__auto___13714 < len__10235__auto___13713)){
args__10242__auto__.push((arguments[i__10236__auto___13714]));

var G__13715 = (i__10236__auto___13714 + (1));
i__10236__auto___13714 = G__13715;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13712))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13712){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13712);
});})(g__10351__auto___13712))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__10351__auto___13712){
return (function (seq13652){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13652));
});})(g__10351__auto___13712))
;


var g__10351__auto___13716 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__10351__auto___13716){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13717 = arguments.length;
var i__10236__auto___13718 = (0);
while(true){
if((i__10236__auto___13718 < len__10235__auto___13717)){
args__10242__auto__.push((arguments[i__10236__auto___13718]));

var G__13719 = (i__10236__auto___13718 + (1));
i__10236__auto___13718 = G__13719;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13716))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13716){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13716);
});})(g__10351__auto___13716))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__10351__auto___13716){
return (function (seq13653){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13653));
});})(g__10351__auto___13716))
;


var g__10351__auto___13720 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__10351__auto___13720){
return (function cljs$spec$gen$alpha$string(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13721 = arguments.length;
var i__10236__auto___13722 = (0);
while(true){
if((i__10236__auto___13722 < len__10235__auto___13721)){
args__10242__auto__.push((arguments[i__10236__auto___13722]));

var G__13723 = (i__10236__auto___13722 + (1));
i__10236__auto___13722 = G__13723;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13720))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13720){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13720);
});})(g__10351__auto___13720))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__10351__auto___13720){
return (function (seq13654){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13654));
});})(g__10351__auto___13720))
;


var g__10351__auto___13724 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__10351__auto___13724){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13725 = arguments.length;
var i__10236__auto___13726 = (0);
while(true){
if((i__10236__auto___13726 < len__10235__auto___13725)){
args__10242__auto__.push((arguments[i__10236__auto___13726]));

var G__13727 = (i__10236__auto___13726 + (1));
i__10236__auto___13726 = G__13727;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13724))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13724){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13724);
});})(g__10351__auto___13724))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__10351__auto___13724){
return (function (seq13655){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13655));
});})(g__10351__auto___13724))
;


var g__10351__auto___13728 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__10351__auto___13728){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13729 = arguments.length;
var i__10236__auto___13730 = (0);
while(true){
if((i__10236__auto___13730 < len__10235__auto___13729)){
args__10242__auto__.push((arguments[i__10236__auto___13730]));

var G__13731 = (i__10236__auto___13730 + (1));
i__10236__auto___13730 = G__13731;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13728))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13728){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13728);
});})(g__10351__auto___13728))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__10351__auto___13728){
return (function (seq13656){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13656));
});})(g__10351__auto___13728))
;


var g__10351__auto___13732 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__10351__auto___13732){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13733 = arguments.length;
var i__10236__auto___13734 = (0);
while(true){
if((i__10236__auto___13734 < len__10235__auto___13733)){
args__10242__auto__.push((arguments[i__10236__auto___13734]));

var G__13735 = (i__10236__auto___13734 + (1));
i__10236__auto___13734 = G__13735;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13732))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13732){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13732);
});})(g__10351__auto___13732))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__10351__auto___13732){
return (function (seq13657){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13657));
});})(g__10351__auto___13732))
;


var g__10351__auto___13736 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__10351__auto___13736){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13737 = arguments.length;
var i__10236__auto___13738 = (0);
while(true){
if((i__10236__auto___13738 < len__10235__auto___13737)){
args__10242__auto__.push((arguments[i__10236__auto___13738]));

var G__13739 = (i__10236__auto___13738 + (1));
i__10236__auto___13738 = G__13739;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13736))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13736){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13736);
});})(g__10351__auto___13736))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__10351__auto___13736){
return (function (seq13658){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13658));
});})(g__10351__auto___13736))
;


var g__10351__auto___13740 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__10351__auto___13740){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13741 = arguments.length;
var i__10236__auto___13742 = (0);
while(true){
if((i__10236__auto___13742 < len__10235__auto___13741)){
args__10242__auto__.push((arguments[i__10236__auto___13742]));

var G__13743 = (i__10236__auto___13742 + (1));
i__10236__auto___13742 = G__13743;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});})(g__10351__auto___13740))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__10351__auto___13740){
return (function (args){
return cljs.core.deref.call(null,g__10351__auto___13740);
});})(g__10351__auto___13740))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__10351__auto___13740){
return (function (seq13659){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13659));
});})(g__10351__auto___13740))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__10242__auto__ = [];
var len__10235__auto___13746 = arguments.length;
var i__10236__auto___13747 = (0);
while(true){
if((i__10236__auto___13747 < len__10235__auto___13746)){
args__10242__auto__.push((arguments[i__10236__auto___13747]));

var G__13748 = (i__10236__auto___13747 + (1));
i__10236__auto___13747 = G__13748;
continue;
} else {
}
break;
}

var argseq__10243__auto__ = ((((0) < args__10242__auto__.length))?(new cljs.core.IndexedSeq(args__10242__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__10243__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__13744_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13744_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq13745){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13745));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__13749_SHARP_){
return (new Date(p1__13749_SHARP_));
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
