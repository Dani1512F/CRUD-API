import './polyfills.server.mjs';
import{A as k,D as A,H as T,K as N,L as j,M as g,a as C,b as E,c as u,d,e as v,f as l,g as F,h as b,i as h,j as i,k as n,l as s,m as D,n as I,o as r,p as m,x,y as M,z as w}from"./chunk-MHIVWN76.mjs";var z=[],L=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e}),e.\u0275inj=u({imports:[g.forRoot(z),g]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){this.title="App Angular "}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-header"]],decls:42,vars:1,consts:[[1,"navbar","navbar-expand-lg","navbar-dark","bg-dark"],[1,"container-fluid"],["href","#",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto","mb-2","mb-lg-0"],[1,"nav-item"],["href","#",1,"nav-link"],["routerLinkActive","active",1,"nav-item"],["routerLink","/directivas",1,"nav-link"],["routerLink","/clientes",1,"nav-link"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],["href","#",1,"dropdown-item"],[1,"dropdown-divider"],["aria-disabled","true",1,"nav-link","disabled"],["role","search",1,"d-flex"],["type","search","placeholder","Search","aria-label","Search",1,"form-control","me-2"],["type","submit",1,"btn","btn-outline-success"]],template:function(o,c){o&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),r(3),n(),i(4,"button",3),s(5,"span",4),n(),i(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),r(10,"Home "),n()(),i(11,"li",9)(12,"a",10),r(13,"Directivas"),n()(),i(14,"li",9)(15,"a",11),r(16,"Clientes"),n()(),i(17,"li",7)(18,"a",8),r(19,"Link"),n()(),i(20,"li",12)(21,"a",13),r(22," Dropdown "),n(),i(23,"ul",14)(24,"li")(25,"a",15),r(26,"Action"),n()(),i(27,"li")(28,"a",15),r(29,"Another action"),n()(),i(30,"li"),s(31,"hr",16),n(),i(32,"li")(33,"a",15),r(34,"Something else here"),n()()()(),i(35,"li",7)(36,"a",17),r(37,"Disabled"),n()()(),i(38,"form",18),s(39,"input",19),i(40,"button",20),r(41,"Search"),n()()()()()),o&2&&(l(3),m(" ",c.title," "))},dependencies:[N,j],encapsulation:2});let t=e;return t})();var H=(()=>{let e=class e{constructor(){this.autor={nombre:"Daniel",apellido:"Spencer"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-futter"]],decls:4,vars:1,consts:[[1,"footer","bg-dark","rounded-top","text-center"],[1,"container","py-2"],[1,"text-white","my-2"]],template:function(o,c){o&1&&(i(0,"footer",0)(1,"div",1)(2,"p",2),r(3),n()()()),o&2&&(l(3),m(" \xA9 ",c.autor.nombre+" "+c.autor.apellido," "))},styles:[".footer[_ngcontent-%COMP%]{position:absolute;bottom:0;height:60px;width:100%}"]});let t=e;return t})();var S=(()=>{let e=class e{constructor(){this.title="Project",this.curso="Aprendiendo Spring y angular",this.student="Carlos Hern\xE1ndez"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-root"]],decls:4,vars:0,consts:[[1,"container"]],template:function(o,c){o&1&&(s(0,"app-header"),i(1,"div",0),s(2,"router-outlet"),n(),s(3,"app-futter"))},dependencies:[T,O,H]});let t=e;return t})();function Q(t,e){if(t&1&&(i(0,"li",6),r(1),n()),t&2){let p=e.$implicit;l(),m(" ",p," ")}}function U(t,e){if(t&1&&(i(0,"ul",4),b(1,Q,2,1,"li",5),n()),t&2){let p=I();l(),h("ngForOf",p.listaCurso)}}var R=(()=>{let e=class e{constructor(){this.listaCurso=["TypeScript","JavaScript","Java","C#","PHP"],this.habilitar=!0}setHabilitar(){this.habilitar=this.habilitar!=!0}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=d({type:e,selectors:[["app-directiva"]],decls:9,vars:2,consts:[["type","button",1,"btn","btn-primary",3,"click"],[1,"card"],[1,"card-header"],["class","list-group",4,"ngIf"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(o,c){o&1&&(s(0,"br"),i(1,"button",0),D("click",function(){return c.setHabilitar()}),r(2),n(),s(3,"br")(4,"br"),i(5,"div",1)(6,"div",2),r(7," Listado de cursos "),n(),b(8,U,2,1,"ul",3),n()),o&2&&(l(2),m(" ",c.habilitar==!0?"Ocultar ":"Mostrar"," "),l(6),h("ngIf",c.habilitar))},dependencies:[x,M],encapsulation:2});let t=e;return t})();var P=[{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"},{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"},{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"},{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"},{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"},{id:1,nombre:"Daniel",apellido:"Fonseca",email:"fonsecadaniel11@gmail.com",createAt:"2024-03-20"}];var y=(()=>{let e=class e{constructor(){}getClientes(){return C(P)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=E({token:e,factory:e.\u0275fac});let t=e;return t})();function W(t,e){if(t&1&&(i(0,"tr")(1,"td",5),r(2),n(),i(3,"td",5),r(4),n(),i(5,"td",5),r(6),n(),i(7,"td",5),r(8),n(),i(9,"td",5),r(10),n()()),t&2){let p=e.$implicit;l(2),m(" ",p.id," "),l(2),m(" ",p.nombre," "),l(2),m(" ",p.apellido," "),l(2),m(" ",p.email," "),l(2),m(" ",p.createAt," ")}}var J=(()=>{let e=class e{constructor(a){this.clienteService=a}ngOnInit(){this.clienteService.getClientes().subscribe(a=>this.clientes=a)}};e.\u0275fac=function(o){return new(o||e)(F(y))},e.\u0275cmp=d({type:e,selectors:[["app-clientes"]],decls:21,vars:1,consts:[[1,"card","border-primary","mb-3"],[1,"card-header"],[1,"card-body","text-primary"],[1,"card-title"],[1,"table","table-bordered","table-striped"],[1,"text-primary"],[4,"ngFor","ngForOf"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"div",1),r(2,"Clientes"),n(),i(3,"div",2)(4,"h5",3),r(5,"Listado de clientes"),n(),i(6,"table",4)(7,"thead")(8,"tr")(9,"th",5),r(10,"id"),n(),i(11,"th",5),r(12,"nombre"),n(),i(13,"th",5),r(14,"apellido"),n(),i(15,"th",5),r(16,"email"),n(),i(17,"th",5),r(18,"fecha"),n()()(),i(19,"tbody"),b(20,W,11,5,"tr",6),n()()()()),o&2&&(l(20),h("ngForOf",c.clientes))},dependencies:[x],encapsulation:2});let t=e;return t})();var X=[{path:"",redirectTo:"./clientes",pathMatch:"full"},{path:"directivas",component:R},{path:"clientes",component:J}],$=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e,bootstrap:[S]}),e.\u0275inj=u({providers:[k(),y],imports:[w,L,g.forRoot(X)]});let t=e;return t})();var Y=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=v({type:e,bootstrap:[S]}),e.\u0275inj=u({imports:[$,A]});let t=e;return t})();export{Y as a};
