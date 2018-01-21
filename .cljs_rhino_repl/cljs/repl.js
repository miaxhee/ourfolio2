// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__12862){
var map__12863 = p__12862;
var map__12863__$1 = ((((!((map__12863 == null)))?((((map__12863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12863):map__12863);
var m = map__12863__$1;
var n = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12865_12887 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12866_12888 = null;
var count__12867_12889 = (0);
var i__12868_12890 = (0);
while(true){
if((i__12868_12890 < count__12867_12889)){
var f_12891 = cljs.core._nth.call(null,chunk__12866_12888,i__12868_12890);
cljs.core.println.call(null,"  ",f_12891);

var G__12892 = seq__12865_12887;
var G__12893 = chunk__12866_12888;
var G__12894 = count__12867_12889;
var G__12895 = (i__12868_12890 + (1));
seq__12865_12887 = G__12892;
chunk__12866_12888 = G__12893;
count__12867_12889 = G__12894;
i__12868_12890 = G__12895;
continue;
} else {
var temp__5457__auto___12896 = cljs.core.seq.call(null,seq__12865_12887);
if(temp__5457__auto___12896){
var seq__12865_12897__$1 = temp__5457__auto___12896;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12865_12897__$1)){
var c__9887__auto___12898 = cljs.core.chunk_first.call(null,seq__12865_12897__$1);
var G__12899 = cljs.core.chunk_rest.call(null,seq__12865_12897__$1);
var G__12900 = c__9887__auto___12898;
var G__12901 = cljs.core.count.call(null,c__9887__auto___12898);
var G__12902 = (0);
seq__12865_12887 = G__12899;
chunk__12866_12888 = G__12900;
count__12867_12889 = G__12901;
i__12868_12890 = G__12902;
continue;
} else {
var f_12903 = cljs.core.first.call(null,seq__12865_12897__$1);
cljs.core.println.call(null,"  ",f_12903);

var G__12904 = cljs.core.next.call(null,seq__12865_12897__$1);
var G__12905 = null;
var G__12906 = (0);
var G__12907 = (0);
seq__12865_12887 = G__12904;
chunk__12866_12888 = G__12905;
count__12867_12889 = G__12906;
i__12868_12890 = G__12907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__8956__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__8956__auto__)){
return or__8956__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12908)))?cljs.core.second.call(null,arglists_12908):arglists_12908));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__12869_12909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12870_12910 = null;
var count__12871_12911 = (0);
var i__12872_12912 = (0);
while(true){
if((i__12872_12912 < count__12871_12911)){
var vec__12873_12913 = cljs.core._nth.call(null,chunk__12870_12910,i__12872_12912);
var name_12914 = cljs.core.nth.call(null,vec__12873_12913,(0),null);
var map__12876_12915 = cljs.core.nth.call(null,vec__12873_12913,(1),null);
var map__12876_12916__$1 = ((((!((map__12876_12915 == null)))?((((map__12876_12915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12876_12915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12876_12915):map__12876_12915);
var doc_12917 = cljs.core.get.call(null,map__12876_12916__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12918 = cljs.core.get.call(null,map__12876_12916__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12914);

cljs.core.println.call(null," ",arglists_12918);

if(cljs.core.truth_(doc_12917)){
cljs.core.println.call(null," ",doc_12917);
} else {
}

var G__12919 = seq__12869_12909;
var G__12920 = chunk__12870_12910;
var G__12921 = count__12871_12911;
var G__12922 = (i__12872_12912 + (1));
seq__12869_12909 = G__12919;
chunk__12870_12910 = G__12920;
count__12871_12911 = G__12921;
i__12872_12912 = G__12922;
continue;
} else {
var temp__5457__auto___12923 = cljs.core.seq.call(null,seq__12869_12909);
if(temp__5457__auto___12923){
var seq__12869_12924__$1 = temp__5457__auto___12923;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12869_12924__$1)){
var c__9887__auto___12925 = cljs.core.chunk_first.call(null,seq__12869_12924__$1);
var G__12926 = cljs.core.chunk_rest.call(null,seq__12869_12924__$1);
var G__12927 = c__9887__auto___12925;
var G__12928 = cljs.core.count.call(null,c__9887__auto___12925);
var G__12929 = (0);
seq__12869_12909 = G__12926;
chunk__12870_12910 = G__12927;
count__12871_12911 = G__12928;
i__12872_12912 = G__12929;
continue;
} else {
var vec__12878_12930 = cljs.core.first.call(null,seq__12869_12924__$1);
var name_12931 = cljs.core.nth.call(null,vec__12878_12930,(0),null);
var map__12881_12932 = cljs.core.nth.call(null,vec__12878_12930,(1),null);
var map__12881_12933__$1 = ((((!((map__12881_12932 == null)))?((((map__12881_12932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12881_12932.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12881_12932):map__12881_12932);
var doc_12934 = cljs.core.get.call(null,map__12881_12933__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12935 = cljs.core.get.call(null,map__12881_12933__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12931);

cljs.core.println.call(null," ",arglists_12935);

if(cljs.core.truth_(doc_12934)){
cljs.core.println.call(null," ",doc_12934);
} else {
}

var G__12936 = cljs.core.next.call(null,seq__12869_12924__$1);
var G__12937 = null;
var G__12938 = (0);
var G__12939 = (0);
seq__12869_12909 = G__12936;
chunk__12870_12910 = G__12937;
count__12871_12911 = G__12938;
i__12872_12912 = G__12939;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__12883 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12884 = null;
var count__12885 = (0);
var i__12886 = (0);
while(true){
if((i__12886 < count__12885)){
var role = cljs.core._nth.call(null,chunk__12884,i__12886);
var temp__5457__auto___12940__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12940__$1)){
var spec_12941 = temp__5457__auto___12940__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12941));
} else {
}

var G__12942 = seq__12883;
var G__12943 = chunk__12884;
var G__12944 = count__12885;
var G__12945 = (i__12886 + (1));
seq__12883 = G__12942;
chunk__12884 = G__12943;
count__12885 = G__12944;
i__12886 = G__12945;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__12883);
if(temp__5457__auto____$1){
var seq__12883__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12883__$1)){
var c__9887__auto__ = cljs.core.chunk_first.call(null,seq__12883__$1);
var G__12946 = cljs.core.chunk_rest.call(null,seq__12883__$1);
var G__12947 = c__9887__auto__;
var G__12948 = cljs.core.count.call(null,c__9887__auto__);
var G__12949 = (0);
seq__12883 = G__12946;
chunk__12884 = G__12947;
count__12885 = G__12948;
i__12886 = G__12949;
continue;
} else {
var role = cljs.core.first.call(null,seq__12883__$1);
var temp__5457__auto___12950__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___12950__$2)){
var spec_12951 = temp__5457__auto___12950__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_12951));
} else {
}

var G__12952 = cljs.core.next.call(null,seq__12883__$1);
var G__12953 = null;
var G__12954 = (0);
var G__12955 = (0);
seq__12883 = G__12952;
chunk__12884 = G__12953;
count__12885 = G__12954;
i__12886 = G__12955;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
