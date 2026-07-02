import{a as pe,l as ge}from"./chunk-SBIGBTMY.js";import{$c as _,$d as O,Ba as F,Ca as C,Da as I,Ia as m,Ib as x,Kb as se,Kd as ce,La as P,Ma as N,N as K,O as L,P as S,Q as E,Ra as s,S as u,Sa as b,Ta as w,Vb as re,Wd as Q,Xd as f,Yb as y,Zc as M,Zd as q,_a as z,ae as he,ca as Z,da as J,db as v,dc as B,ea as ee,ec as X,fb as ne,fe as ue,gb as ie,ge as h,ha as g,hb as oe,he as k,ib as H,jb as R,kb as d,lb as c,oc as Y,qa as a,sb as le,sc as $,tb as r,tc as ae,ud as de,xa as V,ya as A,za as te}from"./chunk-CXLU4LDF.js";var me=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`;var fe=["content"],Le=["xBar"],Se=["yBar"],Ee=["*"];function Ve(n,U){n&1&&oe(0)}function Ae(n,U){n&1&&z(0)}var Fe=`
    ${me}

    .p-scrollpanel {
        display: block;
    }
`,Ie={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},be=(()=>{class n extends q{name="scrollpanel";style=Fe;classes=Ie;static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(n)))(t||n)}})();static \u0275prov=L({token:n,factory:n.\u0275fac})}return n})();var we=new E("SCROLLPANEL_INSTANCE"),Pe=(()=>{class n extends he{componentName="ScrollPanel";$pcScrollPanel=u(we,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;step=5;contentViewChild;xBarViewChild;yBarViewChild;contentTemplate;templates;_contentTemplate;scrollYRatio;scrollXRatio;timeoutFrame=e=>setTimeout(e,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;lastScrollLeft=0;lastScrollTop=0;orientation="vertical";timer;contentId;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;_componentStyle=u(be);zone=u(J);onInit(){this.contentId=ce("pn_id_")+"_content"}onAfterViewInit(){ae(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="content"?this._contentTemplate=e.template:this._contentTemplate=e.template})}calculateContainerHeight(){let e=this.el.nativeElement,i=this.contentViewChild.nativeElement,t=this.xBarViewChild.nativeElement,l=this.document.defaultView,o=l.getComputedStyle(e),D=l.getComputedStyle(t),p=de(e)-parseInt(D.height,10);o["max-height"]!="none"&&p==0&&(i.offsetHeight+parseInt(D.height,10)>parseInt(o["max-height"],10)?e.style.height=o["max-height"]:e.style.height=i.offsetHeight+parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth)+"px")}moveBar(){let e=this.el.nativeElement,i=this.contentViewChild.nativeElement,t=this.xBarViewChild.nativeElement,l=i.scrollWidth,o=i.clientWidth,D=(e.clientHeight-t.clientHeight)*-1;this.scrollXRatio=o/l;let p=this.yBarViewChild.nativeElement,W=i.scrollHeight,G=i.clientHeight,ke=(e.clientWidth-p.clientWidth)*-1;this.scrollYRatio=G/W,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)t.setAttribute("data-p-scrollpanel-hidden","true"),!this.$unstyled()&&M(t,"p-scrollpanel-hidden");else{t.setAttribute("data-p-scrollpanel-hidden","false"),!this.$unstyled()&&_(t,"p-scrollpanel-hidden");let T=Math.max(this.scrollXRatio*100,10),j=Math.abs(i.scrollLeft*(100-T)/(l-o));t.style.cssText="width:"+T+"%; inset-inline-start:"+j+"%;bottom:"+D+"px;"}if(this.scrollYRatio>=1)p.setAttribute("data-p-scrollpanel-hidden","true"),!this.$unstyled()&&M(p,"p-scrollpanel-hidden");else{p.setAttribute("data-p-scrollpanel-hidden","false"),!this.$unstyled()&&_(p,"p-scrollpanel-hidden");let T=Math.max(this.scrollYRatio*100,10),j=i.scrollTop*(100-T)/(W-G);p.style.cssText="height:"+T+"%; top: calc("+j+"% - "+t.clientHeight+"px); inset-inline-end:"+ke+"px;"}}),this.cd.markForCheck()}onScroll(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()}onKeyDown(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}default:break}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}default:break}}onKeyUp(){this.clearTimer()}repeat(e,i){this.contentViewChild?.nativeElement&&(this.contentViewChild.nativeElement[e]+=i),this.moveBar()}setTimer(e,i){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,i)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=e=>{this.onDocumentMouseMove(e)},this.document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=e=>{this.onDocumentMouseUp(e)},this.document.addEventListener("mouseup",this.documentMouseUpListener))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)}onYBarMouseDown(e){this.isYBarClicked=!0,this.yBarViewChild?.nativeElement?.focus(),this.lastPageY=e.pageY,this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","true"),!this.$unstyled()&&M(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","true"),!this.$unstyled()&&M(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onXBarMouseDown(e){this.isXBarClicked=!0,this.xBarViewChild?.nativeElement?.focus(),this.lastPageX=e.pageX,this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),!this.$unstyled()&&M(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.$unstyled()&&M(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))}onMouseMoveForXBar(e){let i=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=i/this.scrollXRatio})}onMouseMoveForYBar(e){let i=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=i/this.scrollYRatio})}scrollTop(e){let i=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;e=e>i?i:e>0?e:0,this.contentViewChild.nativeElement.scrollTop=e}onFocus(e){this.xBarViewChild?.nativeElement?.isSameNode(e.target)?this.orientation="horizontal":this.yBarViewChild?.nativeElement?.isSameNode(e.target)&&(this.orientation="vertical")}onBlur(){this.orientation==="horizontal"&&(this.orientation="vertical")}onDocumentMouseUp(e){this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),!this.$unstyled()&&_(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),!this.$unstyled()&&_(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),!this.$unstyled()&&_(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(e){(window.requestAnimationFrame||this.timeoutFrame)(e)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}onDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(n)))(t||n)}})();static \u0275cmp=V({type:n,selectors:[["p-scroll-panel"],["p-scrollPanel"],["p-scrollpanel"]],contentQueries:function(i,t,l){if(i&1&&H(l,fe,4)(l,Q,4),i&2){let o;d(o=c())&&(t.contentTemplate=o.first),d(o=c())&&(t.templates=o)}},viewQuery:function(i,t){if(i&1&&R(fe,5)(Le,5)(Se,5),i&2){let l;d(l=c())&&(t.contentViewChild=l.first),d(l=c())&&(t.xBarViewChild=l.first),d(l=c())&&(t.yBarViewChild=l.first)}},hostVars:2,hostBindings:function(i,t){i&2&&r(t.cn(t.cx("root"),t.styleClass))},inputs:{styleClass:"styleClass",step:[2,"step","step",X]},features:[x([be,{provide:we,useExisting:n},{provide:O,useExisting:n}]),F([h]),C],ngContentSelectors:Ee,decls:9,vars:22,consts:[["content",""],["xBar",""],["yBar",""],[3,"pBind"],[3,"mouseenter","scroll","pBind"],[4,"ngTemplateOutlet"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus","blur","pBind"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus","pBind"]],template:function(i,t){i&1&&(ie(),b(0,"div",3)(1,"div",4,0),v("mouseenter",function(){return t.moveBar()})("scroll",function(o){return t.onScroll(o)}),P(3,Ve,1,0),I(4,Ae,1,0,"ng-container",5),w()(),b(5,"div",6,1),v("mousedown",function(o){return t.onXBarMouseDown(o)})("keydown",function(o){return t.onKeyDown(o)})("keyup",function(){return t.onKeyUp()})("focus",function(o){return t.onFocus(o)})("blur",function(){return t.onBlur()}),w(),b(7,"div",7,2),v("mousedown",function(o){return t.onYBarMouseDown(o)})("keydown",function(o){return t.onKeyDown(o)})("keyup",function(){return t.onKeyUp()})("focus",function(o){return t.onFocus(o)}),w()),i&2&&(r(t.cx("contentContainer")),s("pBind",t.ptm("contentContainer")),a(),r(t.cx("content")),s("pBind",t.ptm("content")),a(2),N(!t.contentTemplate&&!t._contentTemplate?3:-1),a(),s("ngTemplateOutlet",t.contentTemplate||t._contentTemplate),a(),r(t.cx("barX")),s("pBind",t.ptm("barX")),m("aria-orientation","horizontal")("aria-valuenow",t.lastScrollLeft)("aria-controls",t.contentId)("data-pc-group-section","bar"),a(2),r(t.cx("barY")),s("pBind",t.ptm("barY")),m("aria-orientation","vertical")("aria-valuenow",t.lastScrollTop)("aria-controls",t.contentId)("data-pc-group-section","bar"))},dependencies:[$,Y,f,k,h],encapsulation:2,changeDetection:0})}return n})(),dt=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=A({type:n});static \u0275inj=S({imports:[Pe,f,k,f,k]})}return n})();var ye=(()=>{class n extends ge{required=y(void 0,{transform:B});invalid=y(void 0,{transform:B});disabled=y(void 0,{transform:B});name=y();_disabled=ee(!1);$disabled=re(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,i){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(n)))(t||n)}})();static \u0275dir=te({type:n,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[C]})}return n})();var Be=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`;var Ne=["handle"],ze=["input"],He=n=>({checked:n});function Re(n,U){n&1&&z(0)}function xe(n,U){if(n&1&&I(0,Re,1,0,"ng-container",3),n&2){let e=ne();s("ngTemplateOutlet",e.handleTemplate||e._handleTemplate)("ngTemplateOutletContext",se(2,He,e.checked()))}}var Xe=`
    ${Be}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`,Ye={root:{position:"relative"}},$e={root:({instance:n})=>["p-toggleswitch p-component",{"p-toggleswitch p-component":!0,"p-toggleswitch-checked":n.checked(),"p-disabled":n.$disabled(),"p-invalid":n.invalid()}],input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},Me=(()=>{class n extends q{name="toggleswitch";style=Xe;classes=$e;inlineStyles=Ye;static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(n)))(t||n)}})();static \u0275prov=L({token:n,factory:n.\u0275fac})}return n})();var Ce=new E("TOGGLESWITCH_INSTANCE"),Qe={provide:pe,useExisting:K(()=>_e),multi:!0},_e=(()=>{class n extends ye{componentName="ToggleSwitch";$pcToggleSwitch=u(Ce,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=u(h,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass;tabindex;inputId;readonly;trueValue=!0;falseValue=!1;ariaLabel;size=y();ariaLabelledBy;autofocus;onChange=new Z;input;handleTemplate;_handleTemplate;focused=!1;_componentStyle=u(Me);templates;onHostClick(e){this.onClick(e)}onAfterContentInit(){this.templates.forEach(e=>{e.getType()==="handle"?this._handleTemplate=e.template:this._handleTemplate=e.template})}onClick(e){!this.$disabled()&&!this.readonly&&(this.writeModelValue(this.checked()?this.falseValue:this.trueValue),this.onModelChange(this.modelValue()),this.onChange.emit({originalEvent:e,checked:this.modelValue()}),this.input.nativeElement.focus())}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}checked(){return this.modelValue()===this.trueValue}writeControlValue(e,i){i(e),this.cd.markForCheck()}get dataP(){return this.cn({checked:this.checked(),disabled:this.$disabled(),invalid:this.invalid()})}static \u0275fac=(()=>{let e;return function(t){return(e||(e=g(n)))(t||n)}})();static \u0275cmp=V({type:n,selectors:[["p-toggleswitch"],["p-toggleSwitch"],["p-toggle-switch"]],contentQueries:function(i,t,l){if(i&1&&H(l,Ne,4)(l,Q,4),i&2){let o;d(o=c())&&(t.handleTemplate=o.first),d(o=c())&&(t.templates=o)}},viewQuery:function(i,t){if(i&1&&R(ze,5),i&2){let l;d(l=c())&&(t.input=l.first)}},hostVars:7,hostBindings:function(i,t){i&1&&v("click",function(o){return t.onHostClick(o)}),i&2&&(m("data-p-checked",t.checked())("data-p-disabled",t.$disabled())("data-p",t.dataP),le(t.sx("root")),r(t.cn(t.cx("root"),t.styleClass)))},inputs:{styleClass:"styleClass",tabindex:[2,"tabindex","tabindex",X],inputId:"inputId",readonly:[2,"readonly","readonly",B],trueValue:"trueValue",falseValue:"falseValue",ariaLabel:"ariaLabel",size:[1,"size"],ariaLabelledBy:"ariaLabelledBy",autofocus:[2,"autofocus","autofocus",B]},outputs:{onChange:"onChange"},features:[x([Qe,Me,{provide:Ce,useExisting:n},{provide:O,useExisting:n}]),F([h]),C],decls:5,vars:22,consts:[["input",""],["type","checkbox","role","switch",3,"focus","blur","checked","pAutoFocus","pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,t){i&1&&(b(0,"input",1,0),v("focus",function(){return t.onFocus()})("blur",function(){return t.onBlur()}),w(),b(2,"div",2)(3,"div",2),P(4,xe,1,4,"ng-container"),w()()),i&2&&(r(t.cx("input")),s("checked",t.checked())("pAutoFocus",t.autofocus)("pBind",t.ptm("input")),m("id",t.inputId)("required",t.required()?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-checked",t.checked())("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel)("name",t.name())("tabindex",t.tabindex),a(2),r(t.cx("slider")),s("pBind",t.ptm("slider")),m("data-p",t.dataP),a(),r(t.cx("handle")),s("pBind",t.ptm("handle")),m("data-p",t.dataP),a(),N(t.handleTemplate||t._handleTemplate?4:-1))},dependencies:[$,Y,ue,f,k,h],encapsulation:2,changeDetection:0})}return n})(),Ht=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=A({type:n});static \u0275inj=S({imports:[_e,f,f]})}return n})();export{Pe as a,dt as b,ye as c,_e as d,Ht as e};
