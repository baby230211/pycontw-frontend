(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{528:function(e,t,r){e.exports=r.p+"img/ENEN.5a408d1.svg"},529:function(e,t,r){e.exports=r.p+"img/ZHZH.38617ef.svg"},532:function(e,t,r){e.exports=r.p+"img/ZHEN.371966e.svg"},533:function(e,t,r){e.exports=r.p+"img/JPEN.638520e.svg"},534:function(e,t,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("389b6edf",content,!0,{sourceMap:!1})},545:function(e,t,r){"use strict";r(534)},546:function(e,t,r){var o=r(18)((function(i){return i[1]}));o.push([e.i,'.speechCard[data-v-4855cf88]{position:relative;border-radius:12px;--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-bottom:1rem;padding-top:12px;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;border-width:1px;border-style:solid;border-color:transparent;overflow:hidden;overflow-wrap:anywhere}.speechCard[data-v-4855cf88]:hover{--tw-bg-opacity:1;background-color:rgba(53, 45, 102, var(--tw-bg-opacity));border-color:#746bb8;box-shadow:0 0 10px 7px #403778}.speechCard:hover .speechCard__title[data-v-4855cf88]{--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity))}.speechCard__levelTriangle[data-v-4855cf88]{position:absolute;left:0px;top:0px;height:3.5rem;width:4rem;content:"";-webkit-clip-path:polygon(0 0,0 100%,100% 0);clip-path:polygon(0 0,0 100%,100% 0);border-top-left-radius:12px}.speechCard__level[data-v-4855cf88]{position:absolute;font-family:Noto Serif TC, -apple-system, serif;font-weight:900;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity))}.speechCard__date[data-v-4855cf88], .speechCard__location[data-v-4855cf88]{height:1.25rem;font-size:16px;font-weight:600;--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.speechCard__location[data-v-4855cf88]{text-align:right}.speechCard__title[data-v-4855cf88]{margin-bottom:1rem;font-size:27px;font-weight:700;font-family:"Noto Serif TC",serif;line-height:46px;letter-spacing:1px;color:#cecbff}.speechCard__title-overflow[data-v-4855cf88]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;height:138px}.speechCard__speakerThumbnails[data-v-4855cf88]{overflow:hidden;display:grid;grid-auto-flow:column;grid-template-columns:repeat(auto-fill,32px);width:70%;mask-image:linear-gradient(90deg,#000 90%,transparent);-webkit-mask-image:linear-gradient(90deg,#000 90%,transparent)}.speechCard__speakerThumbnail[data-v-4855cf88]{height:2rem;width:2rem;overflow:hidden;border-radius:9999px}.speechCard__speakerThumbnail img[data-v-4855cf88]{min-height:100%;-o-object-fit:cover;object-fit:cover}.speechCard__lang[data-v-4855cf88]{height:1.25rem;width:3rem;--tw-bg-opacity:1;background-color:rgba(205, 210, 226, var(--tw-bg-opacity));-webkit-mask-position:right;mask-position:right;-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat}.speechCard__speakerNames[data-v-4855cf88]{margin-top:7px;margin-bottom:36px;font-size:18px;color:#bb75bc;line-height:24px;letter-spacing:.1px}.speechCard__category[data-v-4855cf88]{display:inline-block;padding-left:1rem;padding-right:1rem;padding-top:7px;padding-bottom:7px;font-size:12px;font-weight:600;--tw-text-opacity:1;color:rgba(31, 28, 59, var(--tw-text-opacity));border-radius:8px;border-width:1px;border-style:solid;border-color:#000;background-color:#bb75bc}',""]),o.locals={},e.exports=o},549:function(e,t,r){"use strict";r.r(t);r(179),r(50),r(32);var o=r(79),n={i18n:Object(o.a)({"en-us":{levels:{EXPERIENCED:"Expert",INTERMEDIATE:"Medium",NOVICE:"Novice"},levelStyle:{fontSize:"10px",left:"5px"},category:{APPL:"Application",PRAC:"Best Practices & Patterns",COM:"Community",DB:"Databases",DATA:"Data Analysis",EDU:"Education",EMBED:"Embedded Systems",FIN:"FinTech",IOT:"Internet of Things",GAME:"Gaming",GRAPH:"Graphics",ML:"Machine Learning",NLP:"Natural Language Processing",CORE:"Python Core",TOOL:"Project Tooling",SCI:"Science",SEC:"Security",ADMIN:"Systems Administration",TEST:"Testing",WEB:"Web Frameworks",OTHER:"Other"}},"zh-hant":{levels:{EXPERIENCED:"高",INTERMEDIATE:"中",NOVICE:"初"},levelStyle:{fontSize:"16px",left:"10px"},category:{APPL:"應用",PRAC:"最佳實踐與慣例",COM:"社群",DB:"資料庫",DATA:"資料分析",EDU:"教育",EMBED:"嵌入式系統",FIN:"金融科技",IOT:"物聯網",GAME:"遊戲",GRAPH:"圖像處理",ML:"機器學習",NLP:"自然語言處理",CORE:"Python 核心",TOOL:"專案建置工具",SCI:"科學",SEC:"資訊安全",ADMIN:"系統管理",TEST:"測試",WEB:"網站框架",OTHER:"其他"}}}),name:"SpeechCard",components:{LocaleLink:r(40).b},props:{id:{type:Number,default:null},level:{type:String,default:null},beginTime:{type:Date,default:null},location:{type:String,default:null},title:{type:String,default:""},speakers:{type:Array,default:function(){return[]}},lang:{type:String,default:null},category:{type:String,default:""},to:{type:String,default:"/"},shouldShow:{type:Boolean,default:!0},dayOneMidnight:{type:Date,default:function(){return new Date("2022-09-03T16:00:00Z")}}},data:function(){return{icon:{lang:{ENEN:r(528),ZHEN:r(532),JPEN:r(533),ZHZH:r(529)}},locationMapping:{"4-r0":"R0","4-r0-1":"R0","4-r0-2":"R0","5-r1":"R1","5-r1-1":"R1","5-r1-2":"R1","6-r2":"R2","6-r2-1":"R2","6-r2-2":"R2","1-r3":"R3"},levelBgColorMapping:{EXPERIENCED:"#ca7795",INTERMEDIATE:"#6580dc",NOVICE:"#65b1b7"}}},methods:{getDateTag:function(e){return e?e<this.dayOneMidnight?"Day 1":"Day 2":""},getTime:function(e){if(!e)return"";var t=("0"+e.getHours()).slice(-2),r=("0"+e.getMinutes()).slice(-2);return"".concat(t,":").concat(r)},getLevelTriangleStyle:function(e){return{"background-color":this.levelBgColorMapping[e]}},getLevelStyle:function(){return{"font-size":this.$t("levelStyle.fontSize"),left:this.$t("levelStyle.left")}},getMaskImgStyle:function(img){return{"-webkit-mask-image":"url(".concat(img,")"),"mask-image":"url(".concat(img,")")}}}},l=(r(545),r(9)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("locale-link",{directives:[{name:"show",rawName:"v-show",value:e.shouldShow,expression:"shouldShow"}],staticClass:"speechCard flex flex-col",attrs:{to:e.to}},[r("div",[r("figure",{staticClass:"speechCard__levelTriangle",style:e.getLevelTriangleStyle(e.level)}),e._v(" "),r("div",{staticClass:"speechCard__level",style:e.getLevelStyle()},[e._v("\n            "+e._s(e.$t("levels."+e.level))+"\n        ")]),e._v(" "),r("div",{staticClass:"text-right"},[r("div",{staticClass:"speechCard__date"},[e._v("\n                "+e._s(e.getDateTag(e.beginTime)+" "+e.getTime(e.beginTime))+"\n            ")]),e._v(" "),r("div",{staticClass:"speechCard__location"},[e._v("\n                "+e._s(e.locationMapping[e.location])+"\n            ")])])]),e._v(" "),r("div",{staticClass:"speechCard__title speechCard__title-overflow"},[e._v("\n        "+e._s(e.title)+"\n    ")]),e._v(" "),r("div",{staticClass:"flex justify-between items-center"},[r("div",{staticClass:"speechCard__speakerThumbnails"},e._l(e.speakers,(function(e,i){return r("div",{key:"speech_card_speaker_thumbnail_"+i,staticClass:"speechCard__speakerThumbnail"},[r("img",{attrs:{src:e.thumbnail_url,alt:e.name}})])})),0),e._v(" "),r("div",{staticClass:"speechCard__lang",style:e.getMaskImgStyle(e.icon.lang[e.lang])})]),e._v(" "),r("div",{staticClass:"speechCard__speakerNames flex-1"},[e._v("\n        "+e._s(e.speakers.map((function(e){return e.name})).join(", "))+"\n    ")]),e._v(" "),r("div",{staticClass:"speechCard__category self-start"},[e._v("\n        "+e._s(e.$t("category."+e.category))+"\n    ")])])}),[],!1,null,"4855cf88",null);t.default=component.exports}}]);