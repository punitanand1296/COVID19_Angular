(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{TTih:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class i{}var a=u("pMnS"),o=u("SVse");class s{constructor(l){this.http=l,this.helpUrls="https://api.rootnet.in/covid19-in/notifications",this.notificationsArray=[]}ngOnInit(){this.getLinks()}getLinks(){this.http.get(this.helpUrls).subscribe(l=>{this.notificationsArray=l.data.notifications,console.log(this.notificationsArray)})}}var r=u("IheW"),c=t.nb({encapsulation:0,styles:[[""]],data:{}});function e(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,6,"div",[["class","col-6 py-2"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"div",[["class","card-header border-0"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"span",[["class","textLabel"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(4,0,null,null,2,"div",[["class","card-body border-0"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"a",[["class","lnk"],["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Gb(6,null,["",""]))],null,(function(l,n){l(n,3,0,n.context.$implicit.title),l(n,5,0,t.tb(1,"",n.context.$implicit.link,"")),l(n,6,0,n.context.$implicit.link)}))}function p(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","container-fluid help-container w-100"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","row mx-auto"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,e)),t.ob(3,278528,null,0,o.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.notificationsArray)}),null)}function b(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-heplful-links",[],null,null,null,p,c)),t.ob(1,114688,null,0,s,[r.c],null,null)],(function(l,n){l(n,1,0)}),null)}var f=t.lb("app-heplful-links",s,b,{},{},[]);class h{constructor(l){this.http=l,this.faqUrl="https://api.covid19india.org/faq.json",this.faqArray=[]}ngOnInit(){this.getFaq()}getFaq(){this.http.get(this.faqUrl).subscribe(l=>{console.log(l),this.faqArray=l.faq})}}var d=t.nb({encapsulation:0,styles:[[".label[_ngcontent-%COMP%]{font-size:1em;font-weight:600;margin-right:8px;color:#495057;text-transform:capitalize}.resp[_ngcontent-%COMP%]{font-size:.95em;font-weight:600;text-transform:capitalize;color:#117a8b}"]],data:{}});function g(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","col-6 py-2"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"div",[["class","card-header border-0"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"span",[["class","label"]],null,null,null,null,null)),(l()(),t.Gb(4,null,[""," - "])),(l()(),t.pb(5,0,null,null,0,"span",[["class","label"]],[[8,"innerHTML",1]],null,null,null,null)),(l()(),t.pb(6,0,null,null,2,"div",[["class","card-body border-0"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"span",[["class","resp"]],null,null,null,null,null)),(l()(),t.Gb(8,null,[" "," "]))],null,(function(l,n){l(n,4,0,n.context.$implicit.qno),l(n,5,0,n.context.$implicit.question),l(n,8,0,n.context.$implicit.answer)}))}function v(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","container-fluid help-container w-100"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"div",[["class","row mx-auto"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,g)),t.ob(3,278528,null,0,o.i,[t.N,t.K,t.r],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.faqArray)}),null)}function m(l){return t.Hb(0,[(l()(),t.pb(0,0,null,null,1,"app-faq",[],null,null,null,v,d)),t.ob(1,114688,null,0,h,[r.c],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-faq",h,m,{},{},[]),k=u("iInd");class w{}u.d(n,"HelpModuleNgFactory",(function(){return q}));var q=t.mb(i,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[a.a,f,y]],[3,t.j],t.w]),t.zb(4608,o.l,o.k,[t.t,[2,o.t]]),t.zb(1073742336,o.b,o.b,[]),t.zb(1073742336,k.o,k.o,[[2,k.t],[2,k.k]]),t.zb(1073742336,w,w,[]),t.zb(1073742336,i,i,[]),t.zb(1024,k.i,(function(){return[[{path:"",redirectTo:"Helpfull-Links",pathMatch:"full"},{path:"Helpfull-Links",component:s},{path:"FAQ",component:h}]]}),[])])}))}}]);