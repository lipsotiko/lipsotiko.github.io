import{a as u,C as f,b as s,s as c,k as m,D as h,w as i,o,e as r,h as l,r as d,t as v,x as y,f as b,v as g,T as k,m as $,l as C,j as w}from"./entry.c55b7e60.js";import{u as V}from"./uid.f9fa3ea1.js";import{P as _}from"./PopupMixin.78f0dbf7.js";import{P as B}from"./PopupControlsMixin.267f22d0.js";const a="ITooltip",P=u({name:a,directives:{ClickOutside:f},mixins:[_,B],inheritAttrs:!1,props:{color:{type:String,default:s(a,"color")},disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:!1},name:{type:String,default(){return V("tooltip")}},arrow:{type:Boolean,default:!0},placement:{type:String,default:"top"},trigger:{type:[String,Array],default:()=>["hover","focus"]},offset:{type:Number,default:6},interactable:{type:Boolean,default:!1},popperOptions:{type:Object,default:()=>({})},size:{type:String,default:s(a,"size"),validator:c}},emits:["click-outside","update:modelValue"],computed:{classes(){return{...m(this),[`-${this.size}`]:Boolean(this.size)}}},methods:{onEscape(){this.visible=!1,this.$emit("update:modelValue",!1)},handleClickOutside(e){this.visible=!1,this.$emit("update:modelValue",!1),this.onClickOutside(e)}}}),O=["id"],S=["aria-describedby","aria-disabled","aria-expanded"],z=["id","aria-hidden"],N={key:0,"data-popper-arrow":""};function A(e,t,D,E,T,j){const p=h("click-outside");return i((o(),r("div",$(e.$attrs,{class:["tooltip-wrapper",e.classes],ref:"wrapper",id:e.name,onKeyup:t[0]||(t[0]=C((...n)=>e.onEscape&&e.onEscape(...n),["esc"]))}),[l("div",{class:"tooltip-trigger",ref:"trigger","aria-describedby":`${e.name}-popup`,"aria-disabled":e.disabled?"true":"false","aria-expanded":e.visible?"true":"false"},[d(e.$slots,"default")],8,S),v(k,{name:"zoom-in-top-transition",onAfterLeave:e.destroyPopper},{default:y(()=>[i(l("div",{class:"tooltip",ref:"popup",role:"tooltip","aria-live":"polite",id:`${e.name}-popup`,"aria-hidden":e.visible?"false":"true"},[e.arrow?(o(),r("span",N)):b("",!0),d(e.$slots,"body")],8,z),[[g,e.visible]])]),_:3},8,["onAfterLeave"])],16,O)),[[p,e.onClickOutside]])}const q=w(P,[["render",A]]);export{q as default};
