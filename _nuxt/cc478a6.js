(window.webpackJsonp=window.webpackJsonp||[]).push([[68,5,9,14,20],{489:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1a106523",content,!0,{sourceMap:!1})},490:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("43dbd13e",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";n(489)},492:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,"h1[data-v-007b1bc8]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-007b1bc8]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-007b1bc8]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-007b1bc8], p[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-007b1bc8]{font-size:.625rem}ul[data-v-007b1bc8]{margin-bottom:1.5rem}ul.list-disc[data-v-007b1bc8]{padding-left:3rem}li[data-v-007b1bc8]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-007b1bc8]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},t.exports=o},493:function(t,e,n){"use strict";n(490)},494:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,"h1[data-v-2ff7513f]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 834px){h1[data-v-2ff7513f]{margin-bottom:2.25rem}h1[data-v-2ff7513f]{font-size:1.5rem;line-height:2rem}}h1[data-v-2ff7513f]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},t.exports=o},495:function(t,e,n){"use strict";n.r(e);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(n(491),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageWrapperClass},[n("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"007b1bc8",null);e.default=component.exports},496:function(t,e,n){"use strict";n.r(e);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(n(493),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"2ff7513f",null);e.default=component.exports},497:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("bbcff826",content,!0,{sourceMap:!1})},498:function(t,e,n){var content=n(510);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0f281356",content,!0,{sourceMap:!1})},499:function(t,e,n){"use strict";var o=n(2),r=n(500);o({target:"String",proto:!0,forced:n(501)("small")},{small:function(){return r(this,"small","","")}})},500:function(t,e,n){var o=n(41),r=n(20),c=/"/g;t.exports=function(t,e,n,d){var l=r(o(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+r(d).replace(c,"&quot;")+'"'),f+">"+l+"</"+e+">"}},501:function(t,e,n){var o=n(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},503:function(t,e,n){"use strict";n(497)},504:function(t,e,n){var o=n(16),r=n(271),c=n(505),d=n(506),l=n(507),f=n(508),m=o((function(i){return i[1]})),h=r(c),v=r(d),y=r(l),x=r(f);m.push([t.i,".banner[data-v-716eb7e6]{display:flex;width:100%;align-items:center;justify-content:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;background-image:url("+h+"),url("+v+"),url("+y+"),url("+x+");background-repeat:no-repeat;background-position:5% 135px, 50% 50%, 94% 99px, 85% 70%}@media (min-width: 834px){.banner[data-v-716eb7e6]{background-position:16% 37%, 50% 50%, 77% 30%, 72% 490px}}@media (min-width: 1194px){.banner[data-v-716eb7e6]{background-position:16% 37%, 50% 100%, 77% 30%, 72% 490px}}.banner[data-v-716eb7e6]{background-size:11%,72%,22%,7%}@media (min-width: 834px){.banner[data-v-716eb7e6]{background-size:6%,36%,9%,4%}}.banner[data-v-716eb7e6]{height:calc(100vh - 320px);min-height:560px}.banner-texts[data-v-716eb7e6]{margin-left:0.375rem;margin-right:0.375rem;text-align:center}@media (min-width: 834px){.banner-texts[data-v-716eb7e6]{margin-left:3.5rem;margin-right:3.5rem}}.banner-texts[data-v-716eb7e6]{max-width:920px}",""]),m.locals={},t.exports=m},505:function(t,e,n){t.exports=n.p+"img/paper-plane-1.97c6100.svg"},506:function(t,e,n){t.exports=n.p+"img/firework.6263d6b.png"},507:function(t,e,n){t.exports=n.p+"img/planet.ff38cd3.svg"},508:function(t,e,n){t.exports=n.p+"img/paper-plane-2.f49a6be.svg"},509:function(t,e,n){"use strict";n(498)},510:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,'.core-button[data-v-218b9a95]{position:relative}.core-button>a[data-v-218b9a95]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-218b9a95], .core-button[data-v-218b9a95]:not(.--is-link){display:inline-flex;align-items:center;justify-content:center;outline:2px solid transparent;outline-offset:2px}.core-button.--is-link>a[data-v-218b9a95],.core-button[data-v-218b9a95]:not(.--is-link){line-height:1.25rem;border-radius:40px}.core-button[data-v-218b9a95]:not(.--is-link){cursor:default;--tw-border-opacity:1;border-color:rgba(168, 180, 202, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(168, 180, 202, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(205, 210, 226, var(--tw-text-opacity))}.core-button.--uppercase>a[data-v-218b9a95]{text-transform:uppercase}.core-button.--primary>a[data-v-218b9a95]{z-index:10;border-width:0;--tw-text-opacity:1;color:rgba(240, 235, 245, var(--tw-text-opacity));background-image:linear-gradient(276.15deg,#72dcb6 .25%,#3849de 52.99%,#9b4dc3 93.14%)}.core-button.--primary>a span[data-v-218b9a95]{position:relative;z-index:30}.core-button.--primary>a[data-v-218b9a95]:hover:after{opacity:1}.core-button.--primary.--large[data-v-218b9a95]:not(.--is-link), .core-button.--primary.--large>a[data-v-218b9a95]{font-weight:700}.core-button.--primary.--large[data-v-218b9a95]:not(.--is-link),.core-button.--primary.--large>a[data-v-218b9a95]{height:87px;font-size:28px;padding:24px 48px;min-width:128px}.core-button.--primary.--medium[data-v-218b9a95]:not(.--is-link), .core-button.--primary.--medium>a[data-v-218b9a95]{font-weight:600}.core-button.--primary.--medium[data-v-218b9a95]:not(.--is-link),.core-button.--primary.--medium>a[data-v-218b9a95]{height:68px;font-size:24px;padding:16px 48px;min-width:108px}.core-button.--primary.--small[data-v-218b9a95]:not(.--is-link), .core-button.--primary.--small>a[data-v-218b9a95]{height:3rem;font-size:1rem;line-height:1.5rem;font-weight:600}.core-button.--primary.--small[data-v-218b9a95]:not(.--is-link),.core-button.--primary.--small>a[data-v-218b9a95]{padding:10px 22px;min-width:80px;height:42px;font-size:16px}.core-button.--primary>a[data-v-218b9a95]:after{position:absolute;top:0px;left:0px;height:100%;width:100%;z-index:20;opacity:0;border-radius:inherit;content:"";background-image:linear-gradient(96.26deg,#74dcb6 5.5%,#4454df 50.05%,#9d51c3 82.35%);transition:opacity .5s ease-out}.core-button.--secondary>a[data-v-218b9a95]{z-index:10;--tw-bg-opacity:1;background-color:rgba(224, 153, 225, var(--tw-bg-opacity));background-image:none}.core-button.--secondary>a span[data-v-218b9a95]{position:relative;z-index:30;--tw-text-opacity:1;color:rgba(26, 26, 48, var(--tw-text-opacity))}.core-button.--secondary>a:hover span[data-v-218b9a95]{--tw-text-opacity:1;color:rgba(224, 153, 225, var(--tw-text-opacity))}.core-button.--secondary>a[data-v-218b9a95]:hover:after{opacity:1}.core-button.--secondary.--large[data-v-218b9a95]:not(.--is-link), .core-button.--secondary.--large>a[data-v-218b9a95]{font-weight:700}.core-button.--secondary.--large[data-v-218b9a95]:not(.--is-link),.core-button.--secondary.--large>a[data-v-218b9a95]{height:57px;font-size:18px;padding:16px 36px}.core-button.--secondary.--medium[data-v-218b9a95]:not(.--is-link), .core-button.--secondary.--medium>a[data-v-218b9a95], .core-button.--secondary.--small[data-v-218b9a95]:not(.--is-link), .core-button.--secondary.--small>a[data-v-218b9a95]{font-weight:700}.core-button.--secondary.--medium[data-v-218b9a95]:not(.--is-link),.core-button.--secondary.--medium>a[data-v-218b9a95],.core-button.--secondary.--small[data-v-218b9a95]:not(.--is-link),.core-button.--secondary.--small>a[data-v-218b9a95]{height:42px;font-size:16px;padding:10px 22px}.core-button.--secondary>a[data-v-218b9a95]:after{position:absolute;top:0px;left:0px;height:100%;width:100%;--tw-border-opacity:1;border-color:rgba(224, 153, 225, var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgba(26, 26, 48, var(--tw-bg-opacity));z-index:20;opacity:0;content:"";background-image:none;border-radius:inherit;transition:opacity .5s ease-out}.core-button.--secondary.--medium>a[data-v-218b9a95]:after,.core-button.--secondary.--small>a[data-v-218b9a95]:after{border-width:3px}.core-button.--secondary.--large>a[data-v-218b9a95]:after{border-width:2px}.core-button.--medium.--bulletin.--is-link>a[data-v-218b9a95],.core-button.--medium.--bulletin[data-v-218b9a95]:not(.--is-link){border-width:3px}',""]),o.locals={},t.exports=o},511:function(t,e,n){"use strict";n.r(e);n(499);var o=n(51),r={name:"CoreTextButton",components:{ExtLink:o.a,LocaleLink:o.b},props:{primary:{type:Boolean,default:!0},secondary:{type:Boolean,default:!1},large:{type:Boolean,default:!1},small:{type:Boolean,default:!1},block:{type:Boolean,default:!1},href:{type:String,default:void 0},to:{type:String,default:void 0},uppercase:{type:Boolean,default:!1},bulletin:{type:Boolean,default:!1}},computed:{coreButtonClasses:function(){return{"core-button":!0,"--primary":this.primary,"--secondary":this.secondary,"--large":this.large,"--medium":this.medium,"--small":this.small,"--block":this.block,"--is-link":this.isLink,"--uppercase":this.uppercase,"--bulletin":this.bulletin}},medium:function(){return!this.large&&!this.small},isLink:function(){return this.href||this.to}}},c=(n(509),n(6)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{class:t.coreButtonClasses},[t.href?n("ext-link",{attrs:{href:t.href}},[n("span",[t._t("default")],2)]):t.to?n("locale-link",{attrs:{to:t.to,customized:""}},[n("span",[t._t("default")],2)]):t._t("default")],2)])}),[],!1,null,"218b9a95",null);e.default=component.exports},512:function(t,e,n){"use strict";n.r(e);var o={name:"Banner"},r=(n(503),n(6)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-texts"},[t._t("default")],2)])}),[],!1,null,"716eb7e6",null);e.default=component.exports},513:function(t,e,n){t.exports=n.p+"img/Banner.62ce754.svg"},664:function(t,e,n){var content=n(890);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("78467211",content,!0,{sourceMap:!1})},884:function(t,e,n){t.exports=n.p+"img/earlyBird_disabled.6d728a4.svg"},885:function(t,e,n){t.exports=n.p+"img/regular_disabled.a6c818d.svg"},886:function(t,e,n){t.exports=n.p+"img/sponsor_disabled.9850661.svg"},887:function(t,e,n){t.exports=n.p+"img/lateBird.a4a1b35.svg"},888:function(t,e,n){t.exports=n.p+"img/corporate_disabled.0eb5a8a.svg"},889:function(t,e,n){"use strict";n(664)},890:function(t,e,n){var o=n(16)((function(i){return i[1]}));o.push([t.i,".conferenceContent[data-v-2901e088], .introContent[data-v-2901e088]{line-height:1.25rem}.conferenceContent[data-v-2901e088],.introContent[data-v-2901e088]{font-size:16px}@media (min-width:1440px){.conferenceContent[data-v-2901e088],.introContent[data-v-2901e088]{font-size:18px}}.tickets[data-v-2901e088]{width:100%}.ticketContainer[data-v-2901e088]{display:flex;flex-direction:column;justify-content:space-around}@media (min-width: 1440px){.ticketContainer[data-v-2901e088]{flex-direction:row}}.ticketContainer[data-v-2901e088]{padding-top:2.5rem;padding-bottom:2.5rem}@media (min-width: 1440px){.ticketContainer[data-v-2901e088]{padding-top:2rem;padding-bottom:2rem}}.ticketContainer .ticketHeader[data-v-2901e088]{margin:auto;padding:0 0 24px}@media (min-width:1440px){.ticketContainer .ticketHeader[data-v-2901e088]{padding-left:0;padding-bottom:0;padding-right:0;padding-top:0}}.ticketContainer .icon[data-v-2901e088]{margin-left:auto;margin-right:auto;width:5rem;padding:0 0 12px}.ticketContainer .title[data-v-2901e088]{text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;min-width:190px}@media (max-width:1440px){.ticketContainer .title[data-v-2901e088]{font-size:24px}}.ticketContainer .features[data-v-2901e088]{margin-left:auto;margin-right:auto;display:flex;flex-direction:column;justify-content:center;margin-bottom:0!important;padding:0 0 24px;min-width:0}@media (min-width:1440px){.ticketContainer .features[data-v-2901e088]{min-width:240px;padding-left:0;padding-bottom:0;padding-right:0;padding-top:0}}.ticketContainer .feature[data-v-2901e088]{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:16px}@media (min-width:1440px){.ticketContainer .feature[data-v-2901e088]{font-size:18px}}.ticketContainer .price[data-v-2901e088]{display:flex;flex-direction:row-reverse}@media (min-width: 1440px){.ticketContainer .price[data-v-2901e088]{flex-direction:column}}.ticketContainer .price[data-v-2901e088]{margin:auto;text-align:center;padding:0 0 24px;font-size:22px}@media (min-width:1440px){.ticketContainer .price[data-v-2901e088]{padding-left:0;padding-bottom:0;padding-right:0;padding-top:0;font-size:28px}}.ticketContainer .priceOnSale[data-v-2901e088]{margin-left:0.375rem;margin-right:0.375rem;margin-top:auto;margin-bottom:auto;text-align:center;font-weight:700;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity))}.ticketContainer .button[data-v-2901e088]{margin-left:auto;margin-right:auto;display:flex;align-items:center}h2[data-v-2901e088]{padding-bottom:1rem;padding-top:2rem;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:700}@media (min-width: 1440px){h2[data-v-2901e088]{padding-bottom:2.5rem}h2[data-v-2901e088]{padding-top:3.5rem}}h2[data-v-2901e088]{margin-top:0px;margin-bottom:0.5rem;letter-spacing:0.1em;--tw-text-opacity:1;color:rgba(195, 134, 174, var(--tw-text-opacity));font-size:28px}@media (min-width:1440px){h2[data-v-2901e088]{font-size:32px}}",""]),o.locals={},t.exports=o},935:function(t,e,n){"use strict";n.r(e);var o=n(76),r=Object(o.a)({"en-us":{title:"Registration Is Now Open!",pageAbstract:"Welcome on board the PyCon APAC 2022 Challenger for discovering the Python Universe. {br}More with multiple ticket types to choose from. Engage with experts and learn from peers. {br}Expose impossible Python secretes cross PyCon APAC 2022.",introConference:"Conference Information",conferenceContent:"Date: September 3-4, 2022{br}How to Attend: You can watch the live stream of the whole conference on YouTube, or come join our Gather Town and Discord to meet the speakers and other attendees!. ",introTitle:"Ticket",introContent:"100 Early Bird Passes are on sale now but will soon end on May 22, 2022. Register now and take the chance to get a 35% off discount with our Super Early Bird prices. The fee you spend will be put straight back into the community to support our diversity initiatives and financial aid programs. If you need financial aid, please visit {fa}.",introSponsor:"About Sponsorship Pass",SponsorContent:"The idea of PyCon TW first originated in the US. To promote community interactions between local Python developers, PyCon TW has been hosting a series of conferences and events over the past decade, namely PyCon APAC 2022 (the main conference), Sprints, Job Fair, Open Space, PyNight, PyCast (PyCon TW’s podcast), and Young Inspirers (where young and promising students can share their unique Python learning experiences.) {br}{br}Python TW supports local communities’ activities as well. Through these events above, we hope to let more people see the beauty in Python and are enabled to expand the use of this language. {br}{br}If you agree with our action, you can support us by purchasing the Sponsorship Pass. Your kind help to PyCon APAC 2022 is highly appreciated. We would like to present you a thank you gift called “Pyckage”, as our expression of gratitude. {br}{br}We believe with every contribution to PyCon TW, we can create a friendly, organic coding environment for all Python developers. {br}{br}Again, we are very grateful to have your support for the community. You are the biggest motivation for PyCon TW, encouraging us to exploit every possibility for Python. {br}{br}Let’s Go Infinitely and Beyond!",features:{onSales:"35% off Discount",limited100:"Limited edition tickets",pyckage:"Pyckage conference gift",conference:"Conference pass",vatAvailable:"tax ID number",SpecialSouvenir:"PyCon APAC Special Souvenir"},ticketEarlyBird:"Early Bird Pass",ticketRegular:"Regular Pass",ticketEnterprise:"Corporate Pass",ticketSponsorship:"Sponsorship Pass",ticketLateBird:"Late Bird Pass",buttonTextSalesEnded:"Ticket Closed",buttonText:"On Sale Now",buttonTextNotStarted:"Coming Soon",fa:"financial aid",og:{title:"Ticket Info"}},"zh-hant":{title:"探索無疆界宇宙，福爾摩斯號準備啟程。",pageAbstract:"多樣票價供您選擇，人人都可以找到適合自己的方案。{br}多元化學習與多視角觀察技術應用，深入淺出引你進入 Python 學習殿堂。{br}跨越地球距離阻礙，串連亞太地區，與您一同揭露不可能的可能秘密。",introConference:"大會資訊",conferenceContent:"會議時間：2022 年 9 月 3-4 日{br}進行方式：大會進行方式皆為線上進行，形式包含 YouTube 直播大會演講、Gather 大地遊戲及攤位交流、Discord 線上即時討論及客服。",introTitle:"購票方案簡介",introContent:"從早鳥票到一般票，企業票至個人贊助票，您可以依照您的需求選擇您需要的票種，若需要財務補助的你，請至{fa}進行申請。{br}",introSponsor:"個人贊助票簡介",SponsorContent:"PyCon TW 理念源起美國，舉辦一系列推廣和專門探討 Python 程式語言會議，推動 Python 在台灣使用且增加社群交流。{br}{br}PyCon TW 舉辦活動包括了 PyCon APAC 2022、衝刺開發 (Sprints)、 PyCon TW Podcast - PyCast、獨特 Python 經歷的學生分享 - Young Inspirers ，多樣化活動是為了讓更多人認識 Python 程式語言且了解廣大應用領域。{br}{br}若您認同 PyCon TW 推動理念，願意用行動贊助支持我們，購買個人贊助票對我們是最實質肯定。{br}{br}為感謝您，PyCon TW 將為您客製 PyCon APAC 2022 神秘小禮物，與持續不斷推動 Python 技術與知識分享，為這片土地開墾，種下可能種子。",features:{onSales:"65 折優惠",limited100:"限量票 100 張",pyckage:"限量大會紀念品 Pyckage",conference:"全程參與 PyCon APAC 2022",vatAvailable:"提供統一編號及抬頭",SpecialSouvenir:"PyCon APAC 神秘小禮物"},ticketEarlyBird:"早鳥票",ticketRegular:"一般票",ticketEnterprise:"企業票",ticketSponsorship:"個人贊助票",ticketLateBird:"晚鳥票",buttonTextSalesEnded:"結束販售",buttonText:"立即搶購",buttonTextNotStarted:"即將開賣",fa:"財務補助申請",og:{title:"購票資訊"}}}),c=n(495),d=n(496),l=n(512),f=n(51),m=n(511),h={i18n:r,name:"PageRegistrationConferenceTickets",components:{CoreH1:d.default,I18nPageWrapper:c.default,Banner:l.default,LocaleLink:f.b,TextButton:m.default},data:function(){return{ticketsBanner:n(513),ticketInfos:[{tag:"earlyBird",titleI18NPath:"ticketEarlyBird",priceOnSale:"NT$ 1,690",price:"NT$ 2,600",image:n(884),features:["onSales","limited100","pyckage","conference"],hasEnded:!0,link:null},{tag:"regular",titleI18NPath:"ticketRegular",price:"NT$ 2,600",image:n(885),features:["pyckage","conference"],link:null,hasEnded:!0},{tag:"sponsorship",titleI18NPath:"ticketSponsorship",price:"NT$ 5,000",image:n(886),features:["SpecialSouvenir","pyckage","conference"],link:null,hasEnded:!0},{tag:"latebird",titleI18NPath:"ticketLateBird",price:"NT$ 3,600",image:n(887),features:["conference"],link:"https://pycontw.kktix.cc/events/2022-individual"},{tag:"enterprise",titleI18NPath:"ticketEnterprise",price:"NT$ 3,600",image:n(888),features:["vatAvailable","pyckage","conference"],link:null,hasEnded:!0}]}},computed:{bannerStyle:function(){return{"background-image":"url(".concat(this.ticketsBanner,")"),"background-repeat":"no-repeat","background-position":"center"}},ticketTitleStyle:function(){return{"font-size":"en-us"===this.$i18n.locale?"22px":"32px"}}},methods:{isStrikethrough:function(t){return t?{"line-through":!0}:{}}},head:function(){return{title:this.$i18n.t("og.title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("pageAbstract")},{hid:"description",name:"description",content:this.$i18n.t("pageAbstract")}]}}},v=(n(889),n(6)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("banner",[n("core-h1",{attrs:{title:t.$t("title")}}),t._v(" "),n("i18n",{staticClass:"pageAbstract",attrs:{path:"pageAbstract",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1),t._v(" "),n("i18n-page-wrapper",[n("div",{staticClass:"pb-8"},[n("h2",[t._v(t._s(t.$t("introConference")))]),t._v(" "),n("i18n",{staticClass:"introContent",attrs:{path:"conferenceContent",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"pb-12"},[n("h2",[t._v(t._s(t.$t("introTitle")))]),t._v(" "),n("i18n",{staticClass:"introContent",attrs:{path:"introContent",tag:"p"},scopedSlots:t._u([{key:"fa",fn:function(){return[n("locale-link",{attrs:{to:"/registration/financial-aid",underline:"",highlight:""}},[t._v(t._s(t.$t("fa")))])]},proxy:!0},{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1),t._v(" "),n("div",{staticClass:"tickets"},t._l(t.ticketInfos,(function(e,o){return n("div",{key:"ticket_info_"+o,staticClass:"ticketContainer"},[n("div",{staticClass:"ticketHeader"},[n("img",{staticClass:"icon",attrs:{src:e.image,alt:e.tag}}),t._v(" "),n("div",{staticClass:"title",style:t.ticketTitleStyle},[t._v("\n                        "+t._s(t.$t(e.titleI18NPath))+"\n                    ")])]),t._v(" "),n("ul",{staticClass:"features"},t._l(e.features,(function(o,i){return n("li",{key:"ticket_info_"+e.tag+"_features_"+i,staticClass:"feature"},[t._v("\n                        ✓ "+t._s(t.$t("features."+o))+"\n                    ")])})),0),t._v(" "),n("div",{staticClass:"price"},[e.priceOnSale?n("div",{staticClass:"priceOnSale"},[t._v("\n                        "+t._s(e.priceOnSale)+"\n                    ")]):t._e(),t._v(" "),n("div",{class:t.isStrikethrough(!!e.priceOnSale)},[t._v("\n                        "+t._s(e.price)+"\n                    ")])]),t._v(" "),n("div",{staticClass:"button"},[e.link?n("text-button",{attrs:{small:"",href:e.link}},[t._v(t._s(t.$t("buttonText")))]):e.hasEnded?n("text-button",{attrs:{small:""}},[t._v(t._s(t.$t("buttonTextSalesEnded")))]):n("text-button",{attrs:{small:""}},[t._v(t._s(t.$t("buttonTextNotStarted")))])],1)])})),0),t._v(" "),n("div",{staticClass:"pb-12"},[n("h2",{attrs:{id:"introSponsor"}},[t._v(t._s(t.$t("introSponsor")))]),t._v(" "),n("i18n",{staticClass:"SponsorContent",attrs:{path:"SponsorContent",tag:"p"},scopedSlots:t._u([{key:"br",fn:function(){return[n("br")]},proxy:!0}])})],1)])],1)}),[],!1,null,"2901e088",null);e.default=component.exports}}]);