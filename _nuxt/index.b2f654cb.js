import{a as u,a0 as m,b as n,s as b,k as f,o as p,c as h,x as a,w as s,h as i,m as v,t as d,T as t,r as y,v as l,e as C,f as k,j as O}from"./entry.c55b7e60.js";const o="ISidebar",P=u({name:o,mixins:[m],provide(){return{sidebar:this}},inheritAttrs:!1,props:{ariaLabel:{type:String,default:"Sidebar"},collapseOnItemClick:{type:Boolean,default:!0},collapseOnClickOutside:{type:Boolean,default:!0},collapsePosition:{type:String,default:"absolute"},color:{type:String,default:n(o,"color")},placement:{type:String,default:"left"},size:{type:String,default:n(o,"size"),validator:b}},emits:["update:modelValue"],computed:{classes(){return{...this.collapsibleClasses,...f(this),[`-${this.size}`]:Boolean(this.size),[`-collapse-${this.collapsePosition}`]:!0,[`-placement-${this.placement}`]:!0}},sidebarWrapperTransition(){return this.collapsePosition!=="relative"?"sidebar-wrapper-none-transition":"sidebar-wrapper-transition"},sidebarTransition(){return this.collapsePosition!=="relative"?"sidebar-transition":"sidebar-none-transition"}},methods:{onItemClick(){this.collapseOnItemClick&&this.open&&this.setOpen(!1)},onOverlayClick(){this.collapseOnClickOutside&&this.open&&this.setOpen(!1)}}}),S=["aria-label"],$={class:"sidebar"},w={class:"sidebar-content"};function g(e,r,B,V,_,T){return p(),h(t,{name:e.sidebarWrapperTransition},{default:a(()=>[s(i("aside",v(e.$attrs,{role:"complementary",class:["sidebar-wrapper",e.classes],"aria-label":e.ariaLabel,ref:"wrapper"}),[d(t,{name:e.sidebarTransition},{default:a(()=>[s(i("div",$,[i("div",w,[y(e.$slots,"default")])],512),[[l,e.collapsePosition==="relative"||e.open||!e.collapsible]])]),_:3},8,["name"]),d(t,{name:"sidebar-overlay-transition"},{default:a(()=>[e.collapsePosition!=="relative"?s((p(),C("div",{key:0,class:"sidebar-overlay",onClick:r[0]||(r[0]=(...c)=>e.onOverlayClick&&e.onOverlayClick(...c))},null,512)),[[l,e.open]]):k("",!0)]),_:1})],16,S),[[l,e.open||!e.collapsible]])]),_:3},8,["name"])}const I=O(P,[["render",g]]);export{I as default};
