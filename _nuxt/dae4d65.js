(window.webpackJsonp=window.webpackJsonp||[]).push([[82,9,22,49,50,51,52],{1017:function(t,e,n){"use strict";n.r(e);var r=n(507),o=n(504),c=n(547),l=n(670),d=n(671),f=n(672),m=n(673),M={i18n:c.a,name:"PageVenue",components:{I18nPageWrapper:r.default,CoreH1:o.default,VenueTabs:l.default,VenueTab:d.default,VenuePublicTransporterTab:f.default,VenueDriveTab:m.default},data:function(){return{selectedTransModeIndex:0,transModes:[{label:this.$t("transMode.car"),value:"car"},{label:this.$t("transMode.publicTransport"),value:"publicTransport"}]}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("og.title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("og.description")},{hid:"description",name:"description",content:this.$i18n.t("og.description")}]}}},v=(n(751),n(9)),component=Object(v.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i18n-page-wrapper",[n("core-h1",{staticClass:"venue-title whitespace-pre-line text-center",attrs:{title:t.$t("venueInfo.name"),center:""}}),t._v(" "),n("h3",{staticClass:"venue-address"},[t._v("\n        "+t._s(t.$t("venueInfo.address"))+"\n    ")]),t._v(" "),n("div",{staticClass:"transportsModesTabs mb-8 flex w-full justify-center"},[n("VenueTabs",{model:{value:t.selectedTransModeIndex,callback:function(e){t.selectedTransModeIndex=e},expression:"selectedTransModeIndex"}},t._l(t.transModes,(function(e,r){return n("VenueTab",{key:e.value,attrs:{index:r}},[t._v("\n                "+t._s(e.label)+"\n            ")])})),1)],1),t._v(" "),n("div",{staticClass:"detailWrapper"},[0===t.selectedTransModeIndex?n("VenueDriveTab"):t._e(),t._v(" "),1===t.selectedTransModeIndex?n("VenuePublicTransporterTab"):t._e()],1)],1)}),[],!1,null,"2281f870",null);e.default=component.exports;installComponents(component,{VenueTab:n(671).default,VenueTabs:n(670).default,VenueDriveTab:n(673).default,VenuePublicTransporterTab:n(672).default})},500:function(t,e,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("3cda5dc8",content,!0,{sourceMap:!1})},501:function(t,e,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("042ecdbe",content,!0,{sourceMap:!1})},502:function(t,e,n){"use strict";n(500)},503:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),r.locals={},t.exports=r},504:function(t,e,n){"use strict";n.r(e);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(502),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:t.classObject},[t._v(t._s(t.title))])])}),[],!1,null,"feb57f82",null);e.default=component.exports},505:function(t,e,n){"use strict";n(501)},506:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),r.locals={},t.exports=r},507:function(t,e,n){"use strict";n.r(e);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},o=(n(505),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.pageWrapperClass},[n("div",{class:t.classObject},[t._t("default")],2)])}),[],!1,null,"9ddb4acc",null);e.default=component.exports},547:function(t,e,n){"use strict";var r=n(79);e.a=Object(r.a)({"en-us":{title:"Venue Information",og:{title:"Venue Information",description:"PyCon Taiwan 2023 will be held at the Humanities and Social Science Building, Academia Sinica, with a focus on the latest technology and best practices in Python. The open-source community will bring high-quality speeches and workshops, providing valuable learning and networking opportunities for both novice and experienced Python developers."},venueInfo:{name:"Humanities and Social Science Building, Academia Sinica",address:"No. 128, Sec. 2, Academia Rd., Nankang, Taipei 115, Taiwan"},transMode:{car:"By Car",publicTransport:"By Public Transport"},carInstructions:{title:"Driving",footerTitle:"Parking",description:"Navigate to {0},",destination:"Academia Sinica",description1:"Exiting the Donghu Interchange on the Sun Yat-sen Freeway, pass the Nanhu Lake Bridge, and then proceed along Academia Rd.",description2:"Exiting the Nangang Interchange on National Highway No.3, proceed along Nansen Road, turn left onto Jiuzhuang Road, and proceed along Academia Rd.",description3:"From the Nangang exit of HuanDong Boulevard, proceed along Academia Rd."},parkingInfo:{title:"Parking Info",car:{title:"Car",description:"The underground parking lot (B2) in the Humanities and Social Science Building is available for cars. Upon entering the campus, drivers should present their identification to the main gate security guard and obtain a parking permit. The parking fee is NT$20 per hour."},motor:{title:"Motorcycle",description:"Motorcycles are not allowed to enter Academia Sinica. There are free motorcycle parking lots (not responsible for safekeeping) for staff and visitors provided next to {0}, {1}, and {2}.",descriptionLinkTitle1:"the right side of the main gate",descriptionLinkTitle2:"the vacant lot opposite the gate",descriptionLinkTitle3:"Hu Shih Graveyard Park"},moreInfo:"※ For detailed information regarding parking, please refer to {0}",moreInfoLinkTitle:"Academia Sinica Announcement"},publicTransport:{title:"From Taoyuan Intl. Airport",taxi:{title:"Taxi",description:"Taxis can also be taken instead of buses, costing around NT$100. Based on past experience, many people choose this option, so sharing a taxi from the MRT station is a good idea."},uBike:{link:{description1:"official YouBike website",description2:"OpenCycleMap"},description1:"There are several YouBike (Taipei’s bike-sharing program) rental stations near Academia Sinica.For more information about the YouBike routes in the vicinity, you can visit the  {0} and {1}，It is recommended to check the available docking stations on the app to return the bike. {2}Cycling time from Nangang Station or Nangang Exhibition Center Station to Academia Sinica is approximately 10-15 minutes"}},publicTransportInfo:{title:"Way of Transportation",info:"You can take the Kuo-Kuang Bus 1843 to travel between Nangang Exhibition Center and Terminal 1 and Terminal 2 of Taoyuan International Airport.","1843infoTitle":"Kuo-Kuang Bus 1843 Route Information:",description1:"Route: Taiwan Taoyuan Airport Terminal 1 -> Taiwan Taoyuan Airport Terminal 2 -> MRT Gangqian Station -> Ruiguang Road -> Neihu Administrative Center -> MRT Nangang Exhibition Center Station (Nangang Rd.) -> Nangang Bus Station (West)",description2:"Bus platform location: Terminal I: B1 bus area of Arrivals Hall Terminal II: Outdoor gallery at East side of 1F Arrivals Hall",description3:"Fare (for reference only)：Full Fare: NT$140，Half Fare: NT$75",description4:"Schedule: 09:10, 13:10, and 17:20",description5:"Estimated time: 1 hour with moderate traffic"}},"zh-hant":{title:"會場資訊",og:{title:"會場資訊",description:"PyCon Taiwan 2023 將在中央研究院人文社會科學館舉辦，聚焦於 Python 的最新技術和最佳實踐，讓開源社群帶來高品質的演講和工作坊，無論您是 Python 的新手還是資深開發人員，都能在這裡找到有價值的學習和交流機會。"},venueInfo:{name:"中央研究院\n人文社會科學館",address:"台北市南港區研究院路 2 段 128 號"},transMode:{car:"自行開車",publicTransport:"大眾運輸工具"},carInstructions:{title:"開車",footerTitle:"停車",description:"導航至{0}：",destination:"中央研究院",description1:"中山高速公路東湖交流道下，過南湖大橋後，接研究院路。",description2:"北二高南港交流道下，接南深路左轉舊庄路，接研究院路。",description3:"環東大道南港出口下，接研究院路。"},parkingInfo:{title:"停車資訊",car:{title:"汽車",description:"人社館地下室設有汽車停車場，車輛進入院區持證件向大門警衛換證後可駛入院區，停車費用每小時20元。"},motor:{title:"機車",description:"機車禁止進入中研院院區。於其{0}及{1}、{2}旁均設有機車停車場，供員工和來賓停放不予收費（不負保管責任）。",descriptionLinkTitle1:"大門右側",descriptionLinkTitle2:"對面空地",descriptionLinkTitle3:"胡適公園"},moreInfo:"※ 停車相關資訊詳細說明請見{0}",moreInfoLinkTitle:"中研院公告"},publicTransport:{title:"桃園國際機場交通資訊",taxi:{title:"計程車",description:"可以搭計程車代替公車，約 NT$ 100 元。 根據過去的經驗，屆時將會有不少人採取此方式，不妨採取計程車共乘由捷運站前往。"},uBike:{link:{description1:"YouBike 官方網站",description2:"OpenCycleMap"},description1:"中研院週邊亦有不少 YouBike 的租借站。更多 YouBike 附近路線的資訊，可以見 {0} 以及 {1}，建議還車前留意APP上站點可停駐數量。{2}由南港車站或南港展覽館站出發騎乘時間約 10-15 分鐘。"}},publicTransportInfo:{title:"乘車方式",info:"可乘坐 國光客運 1843 於南港展覽館與桃園機場第一航廈與第二航廈之間往返。","1843infoTitle":"國光客運 1843 路線資訊：",description1:"路線：桃園機場第一航廈 → 桃園機場第二航廈 → 捷運港墘站→瑞光路 → 內湖行政中心→捷運南港展覽館站 → 南港轉運站西站（高鐵台鐵）",description2:"站台位置： 第一航廈：B1 層巴士乘車區。第二航廈：1F 層巴士乘車區。",description3:"票價：全票 NT$140，半票 NT$75",description4:"時間：07:10、11:10、15:10",description5:"路程時間：約一小時二十分鐘"}}})},552:function(t,e,n){t.exports=n.p+"img/car-white.85b5b5e.svg"},553:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4LjEyMjMgNDkuNjk3M0wxOC4yMjI3IDEzLjcwOUwzMi42MjY2IDEzLjY3MDlDMzUuODk0MiAxMy42NjIzIDM4LjY0MTggMTQuNzcxMyA0MC44Njk1IDE2Ljk5OEM0My4wOTczIDE5LjIyNDcgNDQuMjA2NiAyMS45NzA5IDQ0LjE5NzQgMjUuMjM2NUM0NC4xODgzIDI4LjUwMjEgNDMuMDYzNyAzMS4yNTQyIDQwLjgyMzUgMzMuNDkyN0MzOC41ODM0IDM1LjczMTIgMzUuODI5NSAzNi44NTQ3IDMyLjU2MTkgMzYuODYzNEwyNC4xNTk2IDM2Ljg4NTZMMjQuMTIzOSA0OS42ODE0TDE4LjEyMjMgNDkuNjk3M1pNMjQuMTc2MyAzMC44ODc1TDMyLjU3ODcgMzAuODY1M0MzNC4xNzkxIDMwLjg2MTEgMzUuNTE0MyAzMC4zMjQ0IDM2LjU4NDIgMjkuMjU1M0MzNy42NTQxIDI4LjE4NjEgMzguMTkxMyAyNi44NTE4IDM4LjE5NTggMjUuMjUyNEMzOC4yMDAzIDIzLjY1MjkgMzcuNjcwNSAyMi4zMjE0IDM2LjYwNjUgMjEuMjU3OUMzNS41NDI1IDIwLjE5NDQgMzQuMjEwMyAxOS42NjQ3IDMyLjYwOTkgMTkuNjY5TDI0LjIwNzYgMTkuNjkxMkwyNC4xNzYzIDMwLjg4NzVaIiBmaWxsPSIjQzA3OEU0Ii8+Cjwvc3ZnPgo="},567:function(t,e,n){var content=n(609);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("7a4bfa46",content,!0,{sourceMap:!1})},568:function(t,e,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("2adc4164",content,!0,{sourceMap:!1})},569:function(t,e,n){var content=n(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("10798e24",content,!0,{sourceMap:!1})},608:function(t,e,n){"use strict";n(567)},609:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".venueButton--active[data-v-76a0263c]{--tw-bg-opacity:1;background-color:rgba(31, 28, 59, var(--tw-bg-opacity))}.venueButton--active[data-v-76a0263c]:hover{--tw-text-opacity:1;color:rgba(248, 249, 251, var(--tw-text-opacity))}",""]),r.locals={},t.exports=r},610:function(t,e,n){t.exports=n.p+"img/publicTransporterGuide.dd2c53d.svg"},611:function(t,e,n){t.exports=n.p+"img/publicTransporterGuide-md.dffa368.svg"},612:function(t,e,n){t.exports=n.p+"img/taxi-white.5795963.svg"},613:function(t,e,n){t.exports=n.p+"img/transporter-white.4593e97.svg"},614:function(t,e,n){t.exports=n.p+"img/uBike.f99dc74.svg"},615:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMSAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjQzNzUgMjcuNVYyNi4xODc1TDEzLjkzNzUgMjQuMzEyNVYxNi40Njg4TDMgMTkuNjg3NVYxNy44NzVMMTMuOTM3NSAxMS40Mzc1VjQuMDYyNUMxMy45Mzc1IDMuNjI1IDE0LjA4ODUgMy4yNTUyMSAxNC4zOTA2IDIuOTUzMTJDMTQuNjkyNyAyLjY1MTA0IDE1LjA2MjUgMi41IDE1LjUgMi41QzE1LjkzNzUgMi41IDE2LjMwNzMgMi42NTEwNCAxNi42MDk0IDIuOTUzMTJDMTYuOTExNSAzLjI1NTIxIDE3LjA2MjUgMy42MjUgMTcuMDYyNSA0LjA2MjVWMTEuNDM3NUwyOCAxNy44NzVWMTkuNjg3NUwxNy4wNjI1IDE2LjQ2ODhWMjQuMzEyNUwxOS41NjI1IDI2LjE4NzVWMjcuNUwxNS41IDI2LjM0MzhMMTEuNDM3NSAyNy41WiIgZmlsbD0iIzkzODdGRiIvPgo8L3N2Zz4K"},616:function(t,e,n){"use strict";n(568)},617:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'.publicTransporter[data-v-5ca80421] ul{padding-left:0}.publicTransporter-trafficInfo[data-v-5ca80421]{display:flex;justify-content:center;align-items:center;white-space:nowrap;color:#9387ff}.publicTransporter-trafficInfo[data-v-5ca80421] h3{padding:0 14px;position:relative;display:flex;align-items:center;justify-content:center}.publicTransporter-trafficInfo[data-v-5ca80421] h3:before{left:0}.publicTransporter-trafficInfo[data-v-5ca80421] h3:after,.publicTransporter-trafficInfo[data-v-5ca80421] h3:before{position:absolute;content:"";border:4px solid #9387ff;display:inline-block;border-radius:50%}.publicTransporter-trafficInfo[data-v-5ca80421] h3:after{right:0}.publicTransporter-trafficInfo[data-v-5ca80421] h3{margin:0}.publicTransporter-trafficInfo[data-v-5ca80421]:after,.publicTransporter-trafficInfo[data-v-5ca80421]:before{max-width:280px;content:"";width:100%;border-top:1px solid #9387ff;display:inline-block}',""]),r.locals={},t.exports=r},618:function(t,e,n){t.exports=n.p+"img/car.35b1ec4.svg"},619:function(t,e,n){t.exports=n.p+"img/motor-white.0738d33.svg"},620:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzEiIGhlaWdodD0iMzEiIHZpZXdCb3g9IjAgMCAzMSAzMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMjYuMzQ5NlYzLjg0OTYxSDE3QzE5LjA0MTcgMy44NDk2MSAyMC43NjA0IDQuNTQ3NTMgMjIuMTU2MyA1Ljk0MzM2QzIzLjU1MjEgNy4zMzkxOSAyNC4yNSA5LjA1Nzk0IDI0LjI1IDExLjA5OTZDMjQuMjUgMTMuMTQxMyAyMy41NTIxIDE0Ljg2IDIyLjE1NjMgMTYuMjU1OUMyMC43NjA0IDE3LjY1MTcgMTkuMDQxNyAxOC4zNDk2IDE3IDE4LjM0OTZIMTEuNzVWMjYuMzQ5Nkg4Wk0xMS43NSAxNC41OTk2SDE3QzE4IDE0LjU5OTYgMTguODMzMyAxNC4yNjYzIDE5LjUgMTMuNTk5NkMyMC4xNjY3IDEyLjkzMjkgMjAuNSAxMi4wOTk2IDIwLjUgMTEuMDk5NkMyMC41IDEwLjA5OTYgMjAuMTY2NyA5LjI2NjI4IDE5LjUgOC41OTk2MUMxOC44MzMzIDcuOTMyOTQgMTggNy41OTk2MSAxNyA3LjU5OTYxSDExLjc1VjE0LjU5OTZaIiBmaWxsPSIjOTM4N0ZGIi8+Cjwvc3ZnPgo="},621:function(t,e,n){t.exports=n.p+"img/venue-destination.2f4ce5c.svg"},622:function(t,e,n){t.exports=n.p+"img/venue-destination-md.0f794e5.svg"},623:function(t,e,n){"use strict";n(569)},624:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,'.parkingInfo[data-v-b2a2620a]{display:flex;justify-content:center;align-items:center;white-space:nowrap;color:#9387ff}.parkingInfo[data-v-b2a2620a] h3{padding:0 14px;position:relative;display:flex;align-items:center;justify-content:center}.parkingInfo[data-v-b2a2620a] h3:before{left:0}.parkingInfo[data-v-b2a2620a] h3:after,.parkingInfo[data-v-b2a2620a] h3:before{position:absolute;content:"";border:4px solid #9387ff;display:inline-block;border-radius:50%}.parkingInfo[data-v-b2a2620a] h3:after{right:0}.parkingInfo[data-v-b2a2620a] h3{margin:0}.parkingInfo[data-v-b2a2620a]:after,.parkingInfo[data-v-b2a2620a]:before{max-width:336px;content:"";width:100%;border-top:1px solid #9387ff;display:inline-block}',""]),r.locals={},t.exports=r},670:function(t,e,n){"use strict";n.r(e);n(29);var r={name:"VenueTabs",mounted:function(){this.initTabs()},updated:function(){this.initialized||this.initTabs()},methods:{initTabs:function(){var t=this;this.tabs=this.$children,this.initialized=!0,this.tabs.forEach((function(e,i){var n=0===i;e.active=n,n&&t.updateVModel(i)}))},selectTab:function(t){this.tabs.forEach((function(e,i){e.active=t===i})),this.updateVModel(t)},updateVModel:function(t){this.$emit("input",t)}}},o=n(9),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"mt-[44px] flex w-full justify-center gap-2"},[t._t("default")],2)}),[],!1,null,"a5d565f4",null);e.default=component.exports},671:function(t,e,n){"use strict";n.r(e);n(181);var r={name:"VenueTab",props:{index:{type:Number,default:-1}},data:function(){return{active:!1}},computed:{classObject:function(){return{"rounded-lg px-4 py-2 flex-1 hover:bg-[#E099E1] hover:text-black-800":!0,"venueButton--active":this.active}}},methods:{onClick:function(){this.$parent.selectTab(this.index)}}},o=(n(608),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.classObject,on:{click:t.onClick}},[t._t("default")],2)}),[],!1,null,"76a0263c",null);e.default=component.exports},672:function(t,e,n){"use strict";n.r(e);var r={i18n:n(547).a,name:"VenuePublicTransporterTab",data:function(){return{icon:{carWhite:n(552),publicTransporterGuide:n(610),publicTransporterGuideMd:n(611),taxiWhite:n(612),transporterWhite:n(613),uBike:n(614),parking:n(553),airplane:n(615)}}}},o=(n(616),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"publicTransporter flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"},[n("img",{staticClass:"md:hidden",attrs:{src:t.icon.publicTransporterGuide}}),t._v(" "),n("img",{staticClass:"hidden md:block",attrs:{src:t.icon.publicTransporterGuideMd}}),t._v(" "),n("div",{staticClass:"md:flex md:gap-10"},[n("div",{staticClass:"md:flex md:flex-1 md:flex-col"},[n("div",{staticClass:"flex items-center pb-3 pt-6"},[n("img",{attrs:{src:t.icon.taxiWhite}}),t._v(" "),n("h5",{staticClass:"whitespace-nowrap pl-2"},[t._v("\n                    "+t._s(t.$t("publicTransport.taxi.title"))+"\n                ")])]),t._v(" "),n("p",[t._v("\n                "+t._s(t.$t("publicTransport.taxi.description"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"md:flex md:flex-1 md:flex-col"},[n("div",{staticClass:"flex items-center pb-3 pt-6"},[n("img",{attrs:{src:t.icon.uBike}})]),t._v(" "),n("i18n",{attrs:{path:"publicTransport.uBike.description1",tag:"p"}},[n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://www.youbike.com.tw/region/taipei/stations/",target:"_blank"}},[t._v(t._s(t.$t("publicTransport.uBike.link.description1")))]),t._v(" "),n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://www.opencyclemap.org/?zoom=16&lat=25.04974&lon=121.61213&layers=B000",target:"_blank"}},[t._v(t._s(t.$t("publicTransport.uBike.link.description2")))]),t._v(" "),n("br")])],1)]),t._v(" "),n("div",{staticClass:"publicTransporter-trafficInfo pt-6 md:pb-10 md:pt-16"},[n("div",{staticClass:"publicTransporter-trafficInfo-container flex-1"},[n("h3",[n("img",{staticClass:"mr-1",attrs:{src:t.icon.airplane}}),t._v("\n                "+t._s(t.$t("publicTransport.title"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"md:flex md:gap-10"},[n("div",[n("div",{staticClass:"flex items-center pb-3 pt-6 md:pb-4"},[n("img",{attrs:{src:t.icon.transporterWhite}}),t._v(" "),n("h5",{staticClass:"pl-2"},[t._v("\n                    "+t._s(t.$t("publicTransportInfo.title"))+"\n                ")])]),t._v(" "),n("p",[t._v("\n                "+t._s(t.$t("publicTransportInfo.info"))+"\n            ")]),t._v(" "),n("div",[n("span",[t._v("\n                    "+t._s(t.$t("publicTransportInfo.1843infoTitle"))+"\n                ")]),t._v(" "),n("ul",{staticClass:"ml-[19px] list-outside list-disc"},[n("li",[t._v("\n                        "+t._s(t.$t("publicTransportInfo.description1"))+"\n                    ")]),t._v(" "),n("li",[t._v("\n                        "+t._s(t.$t("publicTransportInfo.description2"))+"\n                    ")]),t._v(" "),n("li",[t._v("\n                        "+t._s(t.$t("publicTransportInfo.description3"))+"\n                    ")]),t._v(" "),n("li",[t._v("\n                        "+t._s(t.$t("publicTransportInfo.description4"))+"\n                    ")])])])])])])}),[],!1,null,"5ca80421",null);e.default=component.exports},673:function(t,e,n){"use strict";n.r(e);var r={i18n:n(547).a,name:"VenueDriveTab",data:function(){return{icon:{car:n(618),carWhite:n(552),motorWhite:n(619),parking:n(553),parkingPink:n(620),venueDestination:n(621),venueDestinationMd:n(622)},carInstructions:[this.$t("carInstructions.description1"),this.$t("carInstructions.description2"),this.$t("carInstructions.description3")],parkingInfo:{car:"人社館地下室設有汽車停車場，車輛進入院區持證件向大門警衛換證後可駛入院區，停車費用每小時20元。"}}}},o=(n(623),n(9)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col rounded-xl bg-primary-900 px-6 py-10 md:px-16 md:py-20"},[n("div",{staticClass:"flex flex-col md:flex-row md:items-center"},[n("div",{staticClass:"flex flex-col items-center justify-center gap-2 md:flex-row md:pr-2"},[n("img",{attrs:{src:t.icon.car}}),t._v(" "),n("span",{staticClass:"whitespace-nowrap"},[t._v("\n                "+t._s(t.$t("carInstructions.title"))+"\n            ")])]),t._v(" "),n("div",{staticClass:"md:flex md:flex-1 md:justify-center"},[n("div",{staticClass:"md:flex md:flex-col"},[n("i18n",{staticClass:"md:my-2",attrs:{path:"carInstructions.description",tag:"span"}},[n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://goo.gl/maps/HfVQkZULCWNs4tfz6",target:"_blank"}},[t._v(t._s(t.$t("carInstructions.destination")))])]),t._v(" "),n("ol",{staticClass:"ml-[20px] list-decimal pt-6 md:pt-0"},t._l(t.carInstructions,(function(e){return n("li",{key:e},[t._v("\n                        "+t._s(e)+"\n                    ")])})),0)],1)]),t._v(" "),n("img",{staticClass:"max-h-60 py-5 md:hidden",attrs:{src:t.icon.venueDestination}}),t._v(" "),n("div",{staticClass:"hidden justify-center px-2 md:flex"},[n("img",{attrs:{src:t.icon.venueDestinationMd}})]),t._v(" "),n("div",{staticClass:"flex flex-col items-center justify-center"},[n("img",{staticClass:"h-[60px] w-[60px]",attrs:{src:t.icon.parking}}),t._v(" "),n("span",[t._v(" "+t._s(t.$t("carInstructions.footerTitle"))+" ")])])]),t._v(" "),n("div",{staticClass:"parkingInfo pt-6 md:pb-10 md:pt-16"},[n("div",{staticClass:"parkingInfo-container flex-1"},[n("h3",[n("img",{staticClass:"mr-1",attrs:{src:t.icon.parkingPink}}),t._v("\n                "+t._s(t.$t("parkingInfo.title"))+"\n            ")])])]),t._v(" "),n("div",{staticClass:"md:flex md:gap-10"},[n("div",{staticClass:"md:flex-1"},[n("div",{staticClass:"flex items-center pt-6 md:pb-4"},[n("img",{attrs:{src:t.icon.carWhite}}),t._v(" "),n("h5",{staticClass:"pl-2"},[t._v("\n                    "+t._s(t.$t("parkingInfo.car.title"))+"\n                ")])]),t._v(" "),n("p",[t._v(t._s(t.$t("parkingInfo.car.description")))])]),t._v(" "),n("div",{staticClass:"md:flex-1"},[n("div",{staticClass:"flex items-center pt-6 md:pb-4"},[n("img",{attrs:{src:t.icon.motorWhite}}),t._v(" "),n("h5",{staticClass:"pl-2"},[t._v("\n                    "+t._s(t.$t("parkingInfo.motor.title"))+"\n                ")])]),t._v(" "),n("i18n",{attrs:{path:"parkingInfo.motor.description",tag:"p"}},[n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://goo.gl/maps/DnFQvhu8QiCvRgYE7",target:"_blank"}},[t._v(t._s(t.$t("parkingInfo.motor.descriptionLinkTitle1")))]),t._v(" "),n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://goo.gl/maps/BaJw3ufc4rfqz5wh8",target:"_blank"}},[t._v(t._s(t.$t("parkingInfo.motor.descriptionLinkTitle2")))]),t._v(" "),n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://goo.gl/maps/EZ4RDMZTPYwFxAvh9",target:"_blank"}},[t._v(t._s(t.$t("parkingInfo.motor.descriptionLinkTitle3")))])]),t._v(" "),n("i18n",{attrs:{path:"parkingInfo.moreInfo",tag:"p"}},[n("a",{staticClass:"text-pink-500 underline",attrs:{href:"https://dga.sinica.edu.tw/posts/78705",target:"_blank"}},[t._v(t._s(t.$t("parkingInfo.moreInfoLinkTitle")))])])],1)])])}),[],!1,null,"b2a2620a",null);e.default=component.exports},688:function(t,e,n){var content=n(752);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(22).default)("5e905188",content,!0,{sourceMap:!1})},751:function(t,e,n){"use strict";n(688)},752:function(t,e,n){var r=n(21)((function(i){return i[1]}));r.push([t.i,".venue-address[data-v-2281f870]{margin:0px;padding-top:1.5rem;text-align:center;font-size:1rem;line-height:1.5rem;font-weight:400}",""]),r.locals={},t.exports=r}}]);