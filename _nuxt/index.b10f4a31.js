import{a as o,b as s,s as r,k as l,o as i,e as n,h as d,r as a,m as c,j as u}from"./entry.c55b7e60.js";const t="ITabs",p=o({name:t,provide(){return{tabs:this}},inheritAttrs:!1,props:{color:{type:String,default:s(t,"color")},modelValue:{type:String,default:""},size:{type:String,default:s(t,"size"),validator:r},stretch:{type:Boolean,default:!1}},emits:["update:modelValue"],data(){return{active:this.modelValue,tabs:[]}},computed:{classes(){return{...l(this),[`-${this.size}`]:Boolean(this.size),"-stretch":this.stretch}}},watch:{modelValue(e){this.active=e}},methods:{setActive(e){this.active=e,this.$emit("update:modelValue",this.active)}}}),h={class:"tabs-header"};function m(e,f,_,v,V,$){return i(),n("div",c(e.$attrs,{class:["tabs",e.classes],role:"tablist","aria-multiselectable":"true"}),[d("div",h,[a(e.$slots,"header")]),a(e.$slots,"default")],16)}const y=u(p,[["render",m]]);export{y as default};
