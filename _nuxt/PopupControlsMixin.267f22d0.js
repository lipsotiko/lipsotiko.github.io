import{i as o}from"./PopupMixin.78f0dbf7.js";import{a,A as t,B as s}from"./entry.c55b7e60.js";function l(e){if(!o(e))return!1;try{e.focus()}catch{}return typeof window<"u"&&document.activeElement===e}function h(e){for(let i=0;i<e.childNodes.length;i++){const r=e.childNodes[i];if(l(r)||h(r))return!0}return!1}const d=a({props:{disabled:{type:Boolean,default:!1},modelValue:{type:Boolean,default:void 0},trigger:{type:Array,default:()=>["hover","click","focus"]},interactable:{type:Boolean,default:!0},hoverHideDelay:{type:Number,default:300}},emits:["update:modelValue","click-outside"],data(){return{visible:this.modelValue,triggerStack:0,hoverHideTransition:!1}},watch:{modelValue(e){e?this.show():this.hide()}},mounted(){if(!this.$slots.default)throw new Error("Popup components require one child element to be used as trigger.");this.addEventListeners()},beforeUnmount(){this.removeEventListeners()},methods:{show(){this.disabled||this.visible||(this.triggerStack+=1,this.visible=!0,this.createPopper(),this.$emit("update:modelValue",!0))},hide(){this.disabled||!this.visible||(this.triggerStack-=1,this.triggerStack<=0&&(this.triggerStack=0,this.visible=!1,this.$emit("update:modelValue",!1)))},hoverShow(){this.hoverHideTransition=!1,this.show()},hoverHide(){this.hoverHideTransition=!0,setTimeout(()=>{this.hoverHideTransition&&this.hide()},this.hoverHideDelay)},onClick(){this.visible?this.hide():this.show()},onClickOutside(e){this.visible&&this.$emit("click-outside",e),!this.modelValue&&this.hide()},addEventListeners(){[].concat(this.trigger).forEach(e=>{switch(e){case"hover":t(this.$refs.trigger,"mouseenter",this.interactable?this.hoverShow:this.show),t(this.$refs.trigger,"mouseleave",this.interactable?this.hoverHide:this.hide),this.interactable&&(t(this.$refs.popup,"mouseenter",this.hoverShow),t(this.$refs.popup,"mouseleave",this.hoverHide));break;case"click":t(this.$refs.trigger,"click",this.onClick);break;case"focus":for(const i of this.$refs.trigger.children)t(i,"focus",this.show),t(i,"blur",this.hide);break}})},removeEventListeners(){[].concat(this.trigger).forEach(e=>{switch(e){case"hover":s(this.$refs.trigger,"mouseenter",this.interactable?this.hoverShow:this.show),s(this.$refs.trigger,"mouseleave",this.interactable?this.hoverHide:this.hide),this.interactable&&(s(this.$refs.popup,"mouseenter",this.hoverShow),s(this.$refs.popup,"mouseleave",this.hoverHide));break;case"click":s(this.$refs.trigger,"click",this.onClick);break;case"focus":for(const i of this.$refs.trigger.children)s(i,"focus",this.show),s(i,"blur",this.hide);break}})},focusTrigger(){for(const e of this.$refs.trigger.children)if(h(e)){e.focus();break}}}});export{d as P};
