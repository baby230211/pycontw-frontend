(window.webpackJsonp=window.webpackJsonp||[]).push([[52,5,18,22],{498:function(t,e,o){var content=o(501);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("43dbd13e",content,!0,{sourceMap:!1})},500:function(t,e,o){"use strict";o(498)},501:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,"h1[data-v-2ff7513f]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-2ff7513f]{margin-bottom:2.25rem}h1[data-v-2ff7513f]{font-size:1.5rem;line-height:2rem}}h1[data-v-2ff7513f]{text-shadow:#3643b5 2px 1px 0}",""]),n.locals={},t.exports=n},502:function(t,e,o){"use strict";o.r(e);var n={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(o(500),o(9)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"flex justify-center font-serif"},[o("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"2ff7513f",null);e.default=component.exports},506:function(t,e,o){var content=o(515);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("708268da",content,!0,{sourceMap:!1})},509:function(t,e,o){"use strict";var n=o(6),r=o(510);n({target:"String",proto:!0,forced:o(511)("small")},{small:function(){return r(this,"small","","")}})},510:function(t,e,o){var n=o(47),r=o(25),d=/"/g;t.exports=function(t,e,o,l){var c=r(n(t)),m="<"+e;return""!==o&&(m+=" "+o+'="'+r(l).replace(d,"&quot;")+'"'),m+">"+c+"</"+e+">"}},511:function(t,e,o){var n=o(7);t.exports=function(t){return n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},512:function(t,e,o){"use strict";var n=o(79);e.a=Object(n.a)({"en-us":{pyconWelcome:"Welcome to PyCon TW 2023",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"Hold",achieveFirstEndLine:"years",achieveSecondStatLine:"Every Year",achieveSecondEndLine:"Speeches",achieveThirdStatLine:"Audience",achieveThirdEndLine:"People",sponsor:"Sponsor Us",sponsorList:"Sponsors",sponsorUs:"Be a Sponsor",bulletinList:"Latest Announcement",joinUs:"Join Us",callForProposals:"Call for Proposals",checkEvents:"Event Schedule"},"zh-hant":{pyconWelcome:"歡迎來到 PyCon TW 2023",pyconIntro:"PyCon Taiwan",achieveFirstStatLine:"持續舉辦",achieveFirstEndLine:"年",achieveSecondStatLine:"每年議程",achieveSecondEndLine:"場以上",achieveThirdStatLine:"參與會眾",achieveThirdEndLine:"人以上",sponsor:"贊助我們",sponsorList:"贊助夥伴",sponsorUs:"成為贊助夥伴",bulletinList:"最新公告",joinUs:"成為志工",callForProposals:"投稿募集",checkEvents:"查看議程"}})},513:function(t,e,o){"use strict";o.r(e);o(509);var n=o(512),r=o(40),d={i18n:n.a,name:"CoreTextButton",components:{ExtLink:r.a,LocaleLink:r.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},uppercase:{type:Boolean,default:!1},bulletin:{type:Boolean,default:!1}},computed:{getLocale:function(){return this.$i18n.locale},coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--bordered":this.bordered,"--large":this.large,"--medium":this.medium,"--small":this.small,"--block":this.block,"--is-link":this.isLink,"--uppercase":this.uppercase,"--bulletin":this.bulletin,"--largeEn":"en-us"===this.getLocale}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},l=(o(514),o(9)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{class:t.coreButtonClasses},[t.href?o("ext-link",{attrs:{href:t.href}},[o("span",[t._t("default")],2)]):t.to?o("locale-link",{attrs:{to:t.to,customized:""}},[o("span",[t._t("default")],2)]):t._t("default")],2)}),[],!1,null,"77250b50",null);e.default=component.exports},514:function(t,e,o){"use strict";o(506)},515:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,'.core-button[data-v-77250b50]{position:relative}.core-button>a[data-v-77250b50]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-77250b50], .core-button[data-v-77250b50]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-77250b50],.core-button[data-v-77250b50]:not(.--is-link){line-height:1.25rem;border-radius:40px}.core-button[data-v-77250b50]:not(.--is-link){cursor:default;--tw-border-opacity:1;border-color:rgba(168, 180, 202, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(168, 180, 202, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.core-button.--uppercase>a[data-v-77250b50]{text-transform:uppercase}.core-button.--primary>a[data-v-77250b50]{z-index:10;border-width:0;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background-image:linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%)}.core-button.--primary>a span[data-v-77250b50]{position:relative;z-index:30}.core-button.--primary>a[data-v-77250b50]:hover:after{opacity:1}.core-button.--primary.--large[data-v-77250b50]:not(.--is-link), .core-button.--primary.--large>a[data-v-77250b50]{font-weight:700}.core-button.--primary.--large[data-v-77250b50]:not(.--is-link),.core-button.--primary.--large>a[data-v-77250b50]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--primary.--largeEn>a[data-v-77250b50]{min-width:323px}.core-button.--primary.--medium[data-v-77250b50]:not(.--is-link), .core-button.--primary.--medium>a[data-v-77250b50]{font-weight:600}.core-button.--primary.--medium[data-v-77250b50]:not(.--is-link),.core-button.--primary.--medium>a[data-v-77250b50]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--primary.--small[data-v-77250b50]:not(.--is-link), .core-button.--primary.--small>a[data-v-77250b50]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--primary.--small[data-v-77250b50]:not(.--is-link),.core-button.--primary.--small>a[data-v-77250b50]{padding:10px 22px;min-width:80px;height:60px;font-size:16px}.core-button.--primary>a[data-v-77250b50]:after{position:absolute;top:0px;left:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background-image:linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%);transition:opacity .5s ease-out}.core-button.--bordered>a[data-v-77250b50]{z-index:10;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background:linear-gradient(#121023,#121023) padding-box,linear-gradient(276.15deg,#61c8a4 .74%,#548fcb 32.18%,#3849de 53.25%,#be3692 93.14%) border-box;border:5px solid transparent;border-radius:40px}.core-button.--bordered>a span[data-v-77250b50]{position:relative;z-index:30}.core-button.--bordered>a[data-v-77250b50]:hover:after{opacity:1}.core-button.--bordered.--large[data-v-77250b50]:not(.--is-link), .core-button.--bordered.--large>a[data-v-77250b50]{font-weight:700}.core-button.--bordered.--large[data-v-77250b50]:not(.--is-link),.core-button.--bordered.--large>a[data-v-77250b50]{height:86px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--bordered.--largeEn>a[data-v-77250b50]{min-width:323px}.core-button.--bordered.--medium[data-v-77250b50]:not(.--is-link), .core-button.--bordered.--medium>a[data-v-77250b50]{font-weight:600}.core-button.--bordered.--medium[data-v-77250b50]:not(.--is-link),.core-button.--bordered.--medium>a[data-v-77250b50]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--bordered.--small[data-v-77250b50]:not(.--is-link), .core-button.--bordered.--small>a[data-v-77250b50]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--bordered.--small[data-v-77250b50]:not(.--is-link),.core-button.--bordered.--small>a[data-v-77250b50]{padding:10px 22px;min-width:80px;height:60px;font-size:16px}.core-button.--bordered>a[data-v-77250b50]:after{position:absolute;top:0px;left:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background:linear-gradient(#121023,#121023) padding-box,linear-gradient(96.26deg,#5fbeab 5.5%,#66b4e2 31.92%,#4454df 53.53%,#be3692 82.35%) border-box;border:5px solid transparent;transition:opacity .5s ease-out}.core-button.--secondary>a[data-v-77250b50]{z-index:10;--tw-bg-opacity:1;background-color:rgba(218, 139, 220, var(--tw-bg-opacity));background-image:none}.core-button.--secondary>a span[data-v-77250b50]{position:relative;z-index:30;--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.core-button.--secondary>a:hover span[data-v-77250b50]{--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}.core-button.--secondary>a[data-v-77250b50]:hover:after{opacity:1}.core-button.--secondary.--large[data-v-77250b50]:not(.--is-link), .core-button.--secondary.--large>a[data-v-77250b50]{font-weight:700}.core-button.--secondary.--large[data-v-77250b50]:not(.--is-link),.core-button.--secondary.--large>a[data-v-77250b50]{height:57px;font-size:18px;padding:16px 36px}.core-button.--secondary.--medium[data-v-77250b50]:not(.--is-link), .core-button.--secondary.--medium>a[data-v-77250b50], .core-button.--secondary.--small[data-v-77250b50]:not(.--is-link), .core-button.--secondary.--small>a[data-v-77250b50]{font-weight:700}.core-button.--secondary.--medium[data-v-77250b50]:not(.--is-link),.core-button.--secondary.--medium>a[data-v-77250b50],.core-button.--secondary.--small[data-v-77250b50]:not(.--is-link),.core-button.--secondary.--small>a[data-v-77250b50]{height:42px;font-size:16px;padding:10px 22px}.core-button.--secondary>a[data-v-77250b50]:after{position:absolute;top:0px;left:0px;height:100%;width:100%;--tw-border-opacity:1;border-color:rgba(218, 139, 220, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(26, 26, 48, var(--tw-bg-opacity));z-index:20;opacity:0;content:"";background-image:none;border-radius:inherit;transition:opacity .5s ease-out}.core-button.--secondary.--medium>a[data-v-77250b50]:after,.core-button.--secondary.--small>a[data-v-77250b50]:after{border-width:3px}.core-button.--secondary.--large>a[data-v-77250b50]:after{border-width:2px}.core-button.--medium.--bulletin.--is-link>a[data-v-77250b50],.core-button.--medium.--bulletin[data-v-77250b50]:not(.--is-link){border-width:3px}',""]),n.locals={},t.exports=n},528:function(t,e,o){var content=o(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("4c29b705",content,!0,{sourceMap:!1})},536:function(t,e,o){"use strict";o(528)},537:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,".modal[data-v-2bb6b057]{position:fixed;top:0px;left:0px;z-index:9998;display:flex;height:100vh;width:100%;align-items:center;justify-content:center;background-color:rgba(18,16,35,.6);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px)}.closingArea[data-v-2bb6b057]{position:absolute;z-index:9999;height:100%;width:100%}.lightBox[data-v-2bb6b057]{position:relative;display:flex;width:91.666667%;flex-direction:column;border-radius:1.5rem;border-width:3px;--tw-border-opacity:1;border-color:rgba(195, 134, 174, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(18, 16, 35, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:1.25rem;padding-bottom:1.25rem;z-index:10000}@media (min-width: 768px){.lightBox[data-v-2bb6b057]{width:80%}.lightBox[data-v-2bb6b057]{max-width:42rem}.lightBox[data-v-2bb6b057]{border-width:2px}.lightBox[data-v-2bb6b057]{padding-left:3rem;padding-right:3rem}.lightBox[data-v-2bb6b057]{padding-top:3.5rem}.lightBox[data-v-2bb6b057]{padding-bottom:1.5rem}}.lightBox__closeButtonContainer[data-v-2bb6b057]{position:absolute;top:17px;right:17px;margin-left:auto;display:flex;cursor:pointer;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}@media (min-width:768px){.lightBox__closeButtonContainer[data-v-2bb6b057]{top:39.25px}.lightBox__closeButtonContainer[data-v-2bb6b057]{right:38.5px}}.lightBox__closeButton[data-v-2bb6b057]{height:1.25rem;width:1.25rem}.lightBox__photo__box[data-v-2bb6b057]{position:relative;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:flex}.lightBox__photo[data-v-2bb6b057]{height:4rem;width:4rem}@media (min-width: 768px){.lightBox__photo[data-v-2bb6b057]{height:6rem}.lightBox__photo[data-v-2bb6b057]{width:6rem}}.lightBox__photo[data-v-2bb6b057]{position:relative;margin-top:0px;margin-bottom:0px;margin-left:auto;margin-right:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:1rem;transform:translateX(-20px)}.lightBox__photo[data-v-2bb6b057]:first-of-type{transform:translateX(0)}.lightBox__photo>img[data-v-2bb6b057]{position:absolute;border-radius:inherit;-o-object-fit:contain;object-fit:contain;width:calc(100% - 10px)}.img__bg[data-v-2bb6b057]{--tw-bg-opacity:1;background-color:rgba(247, 246, 254, var(--tw-bg-opacity))}.lightBox__header[data-v-2bb6b057]{display:flex;flex-direction:column;align-items:center}.lightBox__title[data-v-2bb6b057]{margin-top:0.75rem;font-family:Noto Serif TC, -apple-system, serif;font-size:1.125rem;line-height:1.75rem;font-weight:600}@media (min-width: 768px){.lightBox__title[data-v-2bb6b057]{margin-top:1.5rem}.lightBox__title[data-v-2bb6b057]{font-size:1.25rem;line-height:1.75rem}}.lightBox__intro[data-v-2bb6b057]{margin-top:0.875rem;display:flex;flex-direction:column;overflow-y:auto;font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400;max-height:10rem;white-space:pre-line}@media (min-width: 768px){.lightBox__intro[data-v-2bb6b057]{margin-top:1rem}.lightBox__intro[data-v-2bb6b057]{font-size:1.125rem;line-height:1.75rem}}.lightBox__buttons[data-v-2bb6b057]{margin-left:auto;margin-right:auto;margin-top:1.5rem}@media (min-width: 768px){.lightBox__buttons[data-v-2bb6b057]{margin-top:1.5rem;margin-bottom:1.5rem}}",""]),n.locals={},t.exports=n},543:function(t,e,o){"use strict";o.r(e);var n=o(79),r={i18n:Object(n.a)({"en-us":{website:"Website"},"zh-hant":{website:"官方網站"}}),name:"Modal",components:{TextButton:o(513).default},props:{value:{type:Boolean,default:!1},imgUrls:{type:[Array,String],default:""},imgBg:{type:Boolean,default:!1},name:{type:String,default:""},intro:{type:String,default:""},websiteUrl:{type:String,default:""},description:{type:Array,default:function(){return[]}}},data:function(){return{shouldShowModal:this.value}},watch:{value:function(t){this.shouldShowModal=t}},methods:{close:function(){this.shouldShowModal=!1,this.$emit("input",!1)},getImgUrlArr:function(){var t=[];return!0===Array.isArray(this.imgUrls)?t=this.imgUrls:t.push(this.imgUrls),t}}},d=(o(536),o(9)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldShowModal,expression:"shouldShowModal"}],staticClass:"modal"},[o("div",{staticClass:"closingArea",on:{click:t.close}}),t._v(" "),o("div",{staticClass:"lightBox"},[o("div",{staticClass:"lightBox__closeButtonContainer",on:{click:t.close}},[o("fa",{staticClass:"lightBox__closeButton",attrs:{icon:"times"}})],1),t._v(" "),o("div",{staticClass:"lightBox__photo__box"},t._l(t.getImgUrlArr(),(function(e){return o("div",{key:e,staticClass:"lightBox__photo",class:{img__bg:t.imgBg}},[o("img",{attrs:{src:e,alt:"photo"}})])})),0),t._v(" "),o("div",{staticClass:"lightBox__header"},[o("h1",{staticClass:"lightBox__title"},[t._v("\n                "+t._s(t.name)+"\n            ")])]),t._v(" "),o("div",{staticClass:"lightBox__intro"},[o("p",{staticClass:"text-sm"},[t._v(t._s(t.intro))]),t._v(" "),t._l(t.description,(function(e){return o("div",{key:e.id},t._l(e,(function(line){return o("p",{key:line.id,staticClass:"text-sm"},[t._v("\n                    "+t._s(line)+"\n                ")])})),0)}))],2),t._v(" "),t.websiteUrl?o("div",{staticClass:"lightBox__buttons"},[o("text-button",{attrs:{href:t.websiteUrl,secondary:!0,primary:!1}},[t._v(t._s(t.$t("website")))])],1):t._e()])])}),[],!1,null,"2bb6b057",null);e.default=component.exports},672:function(t,e,o){var content=o(761);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(19).default)("73b3668a",content,!0,{sourceMap:!1})},750:function(t,e,o){t.exports=o.p+"img/CommunityInTW.c8506d9.png"},751:function(t,e,o){t.exports=o.p+"img/taipeiPy.53f74b9.png"},752:function(t,e,o){t.exports=o.p+"img/pyhug.50156e4.png"},753:function(t,e,o){t.exports=o.p+"img/tainanPy.4a60876.png"},754:function(t,e,o){t.exports=o.p+"img/pyLadies.55bcc55.png"},755:function(t,e,o){t.exports=o.p+"img/kaohsiungPy.363adbe.png"},756:function(t,e,o){t.exports=o.p+"img/hualienPy.18d2f53.png"},757:function(t,e,o){t.exports=o.p+"img/djangoGirls.b39acd5.png"},758:function(t,e,o){t.exports=o.p+"img/nantouPy.be59091.png"},759:function(t,e,o){t.exports=o.p+"img/taichungPy.21bb52f.png"},760:function(t,e,o){"use strict";o(672)},761:function(t,e,o){var n=o(18)((function(i){return i[1]}));n.push([t.i,'.map-area[data-v-0a011107]{width:100%}@media (min-width: 1194px){.map-area[data-v-0a011107]{width:50%}}.map-area__text[data-v-0a011107]{text-align:justify;font-size:0.75rem;line-height:1rem;line-height:1.5}@media (min-width: 1194px){.map-area__text[data-v-0a011107]{font-size:0.875rem;line-height:1.25rem}.map-area__text[data-v-0a011107]{line-height:1.5}}.map-area__text[data-v-0a011107]{padding-left:0px;padding-right:0px;font-family:Noto Serif TC, -apple-system, serif;font-weight:600}@media (min-width: 1194px){.map-area__text[data-v-0a011107]{padding-left:0.5rem;padding-right:0.5rem}}.map-area__img[data-v-0a011107]{margin-top:5rem;margin-bottom:2rem;width:100%;aspect-ratio:622/653}.communities[data-v-0a011107]{position:relative;margin-left:auto;margin-right:auto;width:100%}@media (min-width: 1194px){.communities[data-v-0a011107]{margin-left:0px;margin-right:0px}.communities[data-v-0a011107]{width:40%}}.communities[data-v-0a011107]{height:unset}@media (min-width:1194px){.communities[data-v-0a011107]{min-width:500px;height:1010px;margin-top:-20px}}.communities__arrow-down[data-v-0a011107], .communities__arrow-top[data-v-0a011107]{position:absolute;left:50%;z-index:10;display:none;font-size:1.25rem;line-height:1.75rem}@media (min-width: 1194px){.communities__arrow-down[data-v-0a011107], .communities__arrow-top[data-v-0a011107]{display:block}}.communities__arrow-down[data-v-0a011107],.communities__arrow-top[data-v-0a011107]{content:"⌃";transform:translateX(-50%) translateY(0);transition:opacity .3s;-webkit-animation:arrow-top-float-data-v-0a011107 2s infinite;animation:arrow-top-float-data-v-0a011107 2s infinite}.communities__arrow-down[data-v-0a011107]{bottom:0px;transform:translateX(-55%) translateY(0) scaleY(-1);-webkit-animation:arrow-down-float-data-v-0a011107 2s infinite;animation:arrow-down-float-data-v-0a011107 2s infinite}.communities__arrow-down--hide[data-v-0a011107], .communities__arrow-top--hide[data-v-0a011107]{opacity:0}.communities__content[data-v-0a011107]{position:relative;height:100%;width:100%;align-items:center;overflow-y:auto}@media (min-width:1194px){.communities__content[data-v-0a011107]{width:calc(100% + 40px);margin-left:-20px;padding-left:20px;padding-bottom:20px;padding-right:20px;padding-top:20px}}.communities__content[data-v-0a011107]::-webkit-scrollbar{display:none}.communities__content__box__content[data-v-0a011107]{margin-left:auto;margin-right:auto;margin-top:1.5rem;min-height:100%;cursor:default;padding-left:1.5rem;padding-right:1.5rem;padding-top:1.5rem;padding-bottom:1.5rem;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media (min-width: 1194px){.communities__content__box__content[data-v-0a011107]{cursor:pointer}}.communities__content__box__content[data-v-0a011107]{display:flex;flex-direction:column;align-items:center;justify-content:space-between;border-width:1px;--tw-border-opacity:1;border-color:rgba(31, 28, 59, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity))}@media (min-width: 1194px){.communities__content__box__content[data-v-0a011107]{flex-direction:row}}.communities__content__box__content[data-v-0a011107]{border-radius:24px;-webkit-tap-highlight-color:transparent}@media (min-width:1194px){.communities__content__box__content[data-v-0a011107]:hover{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity))}.communities__content__box__content[data-v-0a011107]:hover{border-left-color:#764bb8;border-bottom-color:#764bb8;border-right-color:#764bb8;border-top-color:#764bb8;box-shadow:0 0 20px #352d66}}.communities__content__box:first-of-type .communities__content__box__content[data-v-0a011107]{margin-top:0px}.communities__content__box__content__description__title[data-v-0a011107]{margin-top:0px;margin-bottom:1rem;font-family:Noto Serif TC, -apple-system, serif;font-weight:700;--tw-text-opacity:1;color:rgba(169, 166, 214, var(--tw-text-opacity))}@media (min-width: 1194px){.communities__content__box__content__description__title[data-v-0a011107]{margin-bottom:0.75rem}}.communities__content__box__content__description__title[data-v-0a011107]{font-size:25px}.communities__content__box__content__description__text[data-v-0a011107]{margin-bottom:1.25rem;width:100%;overflow:hidden;padding-right:0px;text-align:left;font-size:0.75rem;line-height:1rem;line-height:1.75rem}@media (min-width: 1194px){.communities__content__box__content__description__text[data-v-0a011107]{margin-bottom:0px}.communities__content__box__content__description__text[data-v-0a011107]{padding-right:1.5rem}}.communities__content__box__content__description__text[data-v-0a011107]{line-height:146.9%;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:unset}@media (min-width:1194px){.communities__content__box__content__description__text[data-v-0a011107]{-webkit-line-clamp:5}}.communities__content__box__content__img[data-v-0a011107]{height:8rem;width:15rem;border-radius:0.5rem;-o-object-fit:cover;object-fit:cover}@media (min-width: 1194px){.communities__content__box__content__img[data-v-0a011107]{width:8rem}}@-webkit-keyframes arrow-top-float-data-v-0a011107{0%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-75%)}to{transform:translateX(-50%) translateY(0)}}@keyframes arrow-top-float-data-v-0a011107{0%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-75%)}to{transform:translateX(-50%) translateY(0)}}@-webkit-keyframes arrow-down-float-data-v-0a011107{0%{transform:translateX(-55%) translateY(0) scaleY(-1)}50%{transform:translateX(-55%) translateY(75%) scaleY(-1)}to{transform:translateX(-55%) translateY(0) scaleY(-1)}}@keyframes arrow-down-float-data-v-0a011107{0%{transform:translateX(-55%) translateY(0) scaleY(-1)}50%{transform:translateX(-55%) translateY(75%) scaleY(-1)}to{transform:translateX(-55%) translateY(0) scaleY(-1)}}.fade-enter-active[data-v-0a011107],.fade-leave-active[data-v-0a011107]{transition:opacity .3s}.fade-enter[data-v-0a011107], .fade-leave-to[data-v-0a011107]{opacity:0}',""]),n.locals={},t.exports=n},975:function(t,e,o){"use strict";o.r(e);var n=o(79),r=Object(n.a)({"en-us":{title:"Python Community",content:"PyCon TW is a conference driven by multiple local Python communities across Taiwan, and the event wouldn't be able to thrive without their support. If the conference is not enough for you, welcome to join the meetups and seminars held by our community partners!",communities:[{tag:"taipei",title:"Taipei - Taipei.py",description:"Keith, Tim, and some enthusiasts launched Taipei.py in 2012 and started hosting monthly events at CLBC. The topics are mainly focused on web technology and data science. Besides the monthly meetups, Andy also hosted Python Web Meetup and Django study group for web geeks!"},{tag:"pyhug",title:"Hsinchu - PyHUG",description:'Taiwan’s first Python community was established in 2011 by yyc and Albert Huang. Speakers are invited to share every month. The participating are mainly students. In recent years, gatherings in cafes every Wednesday has become a form of "eating, drinking, talking about Python and sorts of things". New blood is needed to join.'},{tag:"taichung",title:"Taichung - Taichung.py",description:"Taichung.py was started in 2014 by Prof. Yuan-Liang Tang and several enthusiasts. The events were held at restaurants or coffee shops until later Microprogram Co. supported the event venue. Now the events are held monthly in Saturday afternoon, which is best suited for a walk to have some snacks in Fengjia Night Market after the event."},{tag:"tainan",title:"Tainan - Tainan.py",description:'Joe, who moved to Tainan in 2013, founded Tainan.py. Decided to co-organize a gathering with the MOSUT community in Tainan to become "Tainan.py × MOSUT". The gathering is held once a month, usually on weekend afternoons. Tainan.py will promote local delicacies, so that everyone can enjoy the local flavors.'},{tag:"kaohsiung",title:"Kaohsiung - Kaohsiung.py",description:"Before establishing Kaohsiung.py, Victor Gau participate in the Tainan.py event until he collided with a locomotive, giving Victor the idea of establishing a community in Kaohsiung. In 2014, Victor launched Kaohsiung.py. Arranging experts to share on Saturdays from time to time, he would pick one Monday every month to meet at Wenzao."},{tag:"hualien",title:"Hualien - Hualien.py",description:"In 2013, Wei Zeren felt that there was a lack of open source in the east, and began to invite Python speakers from all over the world. With the willingness of Mosky, Hualien.py started smoothly in 2014. In the current form of gatherings, apart from speech sharing, there are also free gatherings and workshops on specific topics."},{tag:"nantou",title:"Nantou - Nantou.py",description:"Led by the Vice President of Nan Kai University of Technology, Prof. Cheng-Min Lin, Nantou.py has regularly held a monthly meeting at 768 Art Space to share the latest information and newest experiences with all the Python lovers in central Taiwan. Members have contributed their efforts to bring along industry connection as well as a selfless and boundless location or all the Python learners."},{tag:"pyladiestw",title:"PyLadies Taiwan",description:"PyLadies is a group of women developers who love Python. We are an international mentorship group with a focus on helping more women become active participants and leaders in the Python community. We host monthly meetups with different topics, such as beginners meetups, project presentation, and tutorial. Open to all who identify as women. Feel free to join us!"},{tag:"djangogirlstaipei",title:"Django Girls Taipei",description:"Django Girls Taipei was founded by Michelle Leu in 2014. We held casual tutorials, workshops, meetups to help girls build their own Django website. Highly recommend to girls with basic understanding of Django to join us!."}],og:{title:"Python Community",description:"Python Community"}},"zh-hant":{title:"台灣在地社群",content:"在臺灣，除了參與每年的 PyCon TW，還可以加入許多在地的社群認識更多的 Pythonistas，一起討論我們共通的語言為 Python 貢獻己力。PyCon TW 的成長有賴於臺灣各地 Python 社群的幫忙，才能讓每一年的年會順利舉行。一個人走，可以走得很快；但一群人走，可以走得更遠！",communities:[{tag:"taipei",title:"台北 - Taipei.py",description:"2012 年 Keith、Tim 與其快樂夥伴們創立了 Taipei.py。每個月固定在 CLBC 聚會，聚會分享主題以網路相關技術為主，近期也越來越多大數據相關的分享。由於創辦者們多數在網路相關行業，因此除了每月例會，也會舉辦讀書會等活動。"},{tag:"pyhug",title:"新竹 - PyHUG",description:"台灣第一個 Python 社群，2011 年由 yyc 和 Albert Huang 成立。每月定期邀請講者分享。參加成員以大學生為主，聚會偏重Python 在科學上的應用。近幾年每週三在咖啡館聚會，漸漸變成「吃吃喝喝聊 Python 及雜七雜八」的形式。目前由 Dainese 擔任負責人，需要地方的新血加入。"},{tag:"taichung",title:"台中 - Taichung.py",description:"唐元亮老師於 2014 年發起了 Taichung.py 。初期流浪在各餐廳與咖啡館，後期由微程式科技提供場地空間，告別流浪的生活。每月聚會一次，時間在星期六下午，剛好可以在聚會結束後，到附近的逢甲夜市散步、覓食。"},{tag:"tainan",title:"台南 - Tainan.py",description:"2013 年搬到台南的 Joe 成立了 Tainan.py。決定與同在台南的 MOSUT 社群合辦聚會，成為「Tainan.py × MOSUT」。聚會一個月一次，時間通常會在週末下午， Tainan.py 的中場休息時間，會推廣台南在地美食，讓大家邊交流邊品嘗在地風味。"},{tag:"kaohsiung",title:"高雄 - Kaohsiung.py",description:"Victor Gau 在成立 Kaohsiung.py 之前，定期會去參加 Joe 安排的 Tainan.py 活動，直到有一次回程時，與超速的機車擦撞，讓 Victor 萌生在高雄成立社群的念頭。2014 年，Victor 在高雄發起了 Kaohsiung.py ，除了不定期的在禮拜六安排專家來分享，每個月會挑一個星期一，在文藻外語大學聚會。"},{tag:"hualien",title:"花蓮 - Hualien.py",description:"2013年，魏澤人老師有感於東部較缺乏開源及技術社群，開始邀約各地的 Python 講者。在 Mosky 等人爽快答應下，花蓮.py 在 2014 年順利展開。現在花蓮本地的講者也越來越多了。目前聚會的形式，除了演講分享外，也常有自由聚會及特定主題的workshop。"},{tag:"nantou",title:"南投 - Nantou.py",description:"2019年底，南開科技大學副校長林正敏教授，創立了 Nantou.py。聚會地點在草屯768藝術空間，固定每月舉行分享會，來自各地的大夥也無私地向大家分享技術。在南投人稱科技沙漠的地區，有著這一群人為python貢獻己力，並為有意學習的大家，帶來一場無私、無限的學習地。"},{tag:"pyladiestw",title:"PyLadies Taiwan",description:"PyLadies 是一個專屬於女生的 Python 愛好者聚會，想瞭解 Python 的女生彼此交流、聊天認識朋友的地方。透過 Workshop 的方式讓女生成為主動的參與者。每個月舉辦不同主題的活動，例：初學者的入門、Python 的應用與經驗分享。只要對 Python 有興趣，歡迎妳來參加喔！"},{tag:"djangogirlstaipei",title:"Django Girls Taipei",description:"2014 年，是 Michelle 成立 Django Girls Taipei 的一年。藉由不定期舉辦教學活動，帶領女孩們一步步製作自己的網站。也和 Python Web Meetup 一起合辦新手村活動，給對 Django 有一點點了解，又想要瞭解更多的女孩們參加。"}],og:{title:"在地社群",description:"在地社群"}}}),d=o(502),l=o(750),c=o.n(l),m=o(543),h={i18n:r,name:"PageCommunity",components:{CoreH1:d.default,Modal:m.default},data:function(){return{communityMap:c.a,communityLink:{taipei:"http://www.meetup.com/Taipei-py/",pyhug:"http://www.meetup.com/pythonhug/",tainan:"http://www.meetup.com/Tainan-py-Python-Tainan-User-Group/",pyladiestw:"https://tw.pyladies.com/",kaohsiung:"http://www.meetup.com/Kaohsiung-Python-Meetup/",hualien:"http://www.meetup.com/Hualien-Py/",djangogirlstaipei:"https://djangogirls.org/taipei/",nantou:"https://www.facebook.com/%E5%8D%97%E6%8A%95python-113209870215893/",taichung:"https://www.facebook.com/groups/780250978715991/"},communityImgUrl:{taipei:o(751),pyhug:o(752),tainan:o(753),pyladiestw:o(754),kaohsiung:o(755),hualien:o(756),djangogirlstaipei:o(757),nantou:o(758),taichung:o(759)},boxScroll:!0,isOpened:!1,selectedItem:{}}},computed:{communityMapStyle:function(){return{"background-image":"url(".concat(this.communityMap,")"),"background-repeat":"no-repeat","background-size":"contain","background-position":"center"}}},mounted:function(){this.$refs.communities.addEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this.$refs.communities.scrollTop,e=this.$refs.communities.offsetHeight;t>0&&t<e?this.boxScroll=null:0===t?this.boxScroll=!0:t>e&&(this.boxScroll=!1)},showModal:function(t){this.isOpened=!0,this.selectedItem=t}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},f=(o(760),o(9)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"px-8 lg:px-20 xl:px-28 py-10 md:py-20"},[o("core-h1",{staticClass:"font-bold justify-center lg:justify-start ml-0 lg:ml-2",attrs:{title:t.$t("title")}}),t._v(" "),o("div",{staticClass:"flex flex-col justify-between lg:flex-row"},[o("div",{staticClass:"map-area"},[o("p",{staticClass:"map-area__text",domProps:{textContent:t._s(t.$t("content"))}}),t._v(" "),o("div",{staticClass:"map-area__img",style:t.communityMapStyle})]),t._v(" "),o("div",{staticClass:"communities"},[o("div",{staticClass:"communities__arrow-top",class:{"communities__arrow-top--hide":t.boxScroll}},[t._v("\n                ⌃\n            ")]),t._v(" "),o("div",{ref:"communities",staticClass:"communities__content"},[t._l(t.$t("communities"),(function(e){return o("div",{key:"community_"+e.tag,staticClass:"communities__content__box"},[o("div",{staticClass:"communities__content__box__content",on:{click:function(o){return t.showModal(e)}}},[o("div",{staticClass:"\n                                communities__content__box__content__description\n                            "},[o("h3",{staticClass:"\n                                    communities__content__box__content__description__title\n                                "},[t._v("\n                                "+t._s(e.title)+"\n                            ")]),t._v(" "),o("p",{staticClass:"\n                                    communities__content__box__content__description__text\n                                "},[t._v("\n                                "+t._s(e.description)+"\n                            ")])]),t._v(" "),o("img",{directives:[{name:"show",rawName:"v-show",value:t.communityImgUrl[e.tag],expression:"communityImgUrl[community.tag]"}],staticClass:"communities__content__box__content__img",attrs:{src:t.communityImgUrl[e.tag],alt:e.tag}})])])})),t._v(" "),o("transition",{attrs:{name:"fade"}},[t.isOpened?o("modal",{attrs:{"img-urls":t.communityImgUrl[t.selectedItem.tag],name:t.selectedItem.title,intro:t.selectedItem.description,"website-url":t.communityLink[t.selectedItem.tag]},model:{value:t.isOpened,callback:function(e){t.isOpened=e},expression:"isOpened"}}):t._e()],1)],2),t._v(" "),o("div",{staticClass:"communities__arrow-down",class:{"communities__arrow-down--hide":!1===t.boxScroll}},[t._v("\n                ⌃\n            ")])])])],1)}),[],!1,null,"0a011107",null);e.default=component.exports}}]);