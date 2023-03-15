import{a as f,b as m,s as c,k as C,Y as w,Z as v,o,e as n,h as l,E as a,r as h,f as u,F as y,G as L,y as g,m as V,i as k,j as b}from"./entry.c55b7e60.js";function P(e,i){let s;return function(...p){const d=this;clearTimeout(s),s=setTimeout(()=>e.apply(d,p),i)}}const r="IPagination",N=f({name:r,inheritAttrs:!1,props:{ariaLabel:{type:String,default:"Pagination"},color:{type:String,default:m(r,"color")},itemsPerPage:{type:Number,default:20},itemsTotal:{type:Number,default:0},limit:{type:[Number,Object],default(){return{xs:3,sm:5}}},quickLink:{type:Boolean,default:!1},modelValue:{type:Number,default:1},size:{type:String,default:m(r,"size"),validator:c}},emits:["update:modelValue"],data(){return{pageLimit:5}},computed:{classes(){return{...C(this),[`-${this.size}`]:Boolean(this.size)}},pageCount(){return Math.ceil(this.itemsTotal/this.itemsPerPage)},showQuickPrevious(){return this.pageCount>this.pageLimit&&this.modelValue>this.pageLimit-(this.pageLimit-1)/2},showQuickNext(){return this.pageCount>this.pageLimit&&this.modelValue<this.pageCount-(this.pageLimit-1)/2},pages(){const e=[];if(this.showQuickPrevious&&!this.showQuickNext){const i=this.pageCount-(this.pageLimit-2);for(let s=i;s<this.pageCount;s++)e.push(s)}else if(!this.showQuickPrevious&&this.showQuickNext)for(let i=2;i<this.pageLimit;i++)e.push(i);else if(this.showQuickPrevious&&this.showQuickNext){const i=Math.floor(this.pageLimit/2)-1;for(let s=this.modelValue-i;s<=this.modelValue+i;s++)e.push(s)}else for(let i=2;i<this.pageCount;i++)e.push(i);return e}},created(){this.debouncedOnWindowResize=P(this.onWindowResize,250),typeof window<"u"&&(window.addEventListener("resize",this.debouncedOnWindowResize),this.onWindowResize())},unmounted(){typeof window<"u"&&window.removeEventListener("resize",this.debouncedOnWindowResize)},methods:{next(){this.modelValue!==this.pageCount&&this.onClick(this.modelValue+1)},quickNext(){if(!this.quickLink)return;const e=this.modelValue+(this.pageLimit-2);this.onClick(e>this.pageCount?this.pageCount:e)},previous(){this.modelValue!==1&&this.onClick(this.modelValue-1)},quickPrevious(){if(!this.quickLink)return;const e=this.modelValue-(this.pageLimit-2);this.onClick(e<1?1:e)},onClick(e){this.$emit("update:modelValue",e)},onWindowResize(){if(typeof this.limit=="number")return this.pageLimit=this.limit,this.pageLimit;for(const e of w.slice().reverse())if(this.limit.hasOwnProperty(e)&&typeof window<"u"&&window.innerWidth>=v[e][0])return this.pageLimit=this.limit[e],this.pageLimit}}}),z=["aria-label"],q={class:"pagination-items"},$={"aria-hidden":"true"},Q=["aria-current","onClick"],T={"aria-hidden":"true"};function W(e,i,s,p,d,R){return o(),n("nav",V(e.$attrs,{class:["pagination",e.classes],role:"navigation","aria-label":e.ariaLabel}),[l("ul",q,[e.pageCount>0?(o(),n("li",{key:0,class:a(["pagination-item -previous",{"-disabled":e.modelValue===1}]),onClick:i[0]||(i[0]=(...t)=>e.previous&&e.previous(...t))},[l("span",$,[h(e.$slots,"previous",{},()=>[k("<")])])],2)):u("",!0),e.pageCount>0?(o(),n("li",{key:1,class:a(["pagination-item -first",{"-active":e.modelValue===1}]),onClick:i[1]||(i[1]=t=>e.onClick(1))}," 1 ",2)):u("",!0),e.showQuickPrevious?(o(),n("li",{key:2,class:a(["pagination-item -quick-previous",{"-disabled":!e.quickLink}]),onClick:i[2]||(i[2]=(...t)=>e.quickPrevious&&e.quickPrevious(...t))}," … ",2)):u("",!0),(o(!0),n(y,null,L(e.pages,t=>(o(),n("li",{class:a(["pagination-item",{"-active":e.modelValue===t}]),"aria-current":e.modelValue===t?"page":!1,onClick:B=>e.onClick(t)},g(t),11,Q))),256)),e.showQuickNext?(o(),n("li",{key:3,class:a(["pagination-item -quick-next",{"-disabled":!e.quickLink}]),onClick:i[3]||(i[3]=(...t)=>e.quickNext&&e.quickNext(...t))}," … ",2)):u("",!0),e.pageCount>1?(o(),n("li",{key:4,class:a(["pagination-item -last",{"-active":e.modelValue===e.pageCount}]),onClick:i[4]||(i[4]=t=>e.onClick(e.pageCount))},g(e.pageCount),3)):u("",!0),e.pageCount>0?(o(),n("li",{key:5,class:a(["pagination-item -next",{"-disabled":e.modelValue===e.pageCount}]),onClick:i[5]||(i[5]=(...t)=>e.next&&e.next(...t))},[l("span",T,[h(e.$slots,"next",{},()=>[k(">")])])],2)):u("",!0)])],16,z)}const S=b(N,[["render",W]]);export{S as default};
