(window.webpackJsonp=window.webpackJsonp||[]).push([[55,9,14,16,22],{500:function(e,t,n){var content=n(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("3cda5dc8",content,!0,{sourceMap:!1})},501:function(e,t,n){var content=n(506);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("042ecdbe",content,!0,{sourceMap:!1})},502:function(e,t,n){"use strict";n(500)},503:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,"h1[data-v-feb57f82]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity));margin-bottom:0px}@media (min-width: 768px){h1[data-v-feb57f82]{margin-bottom:2.25rem}h1[data-v-feb57f82]{font-size:1.5rem;line-height:2rem}}h1[data-v-feb57f82]{text-shadow:#3643b5 2px 1px 0}",""]),o.locals={},e.exports=o},504:function(e,t,n){"use strict";n.r(t);var o={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},r=(n(502),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"feb57f82",null);t.default=component.exports},505:function(e,t,n){"use strict";n(501)},506:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,"h1[data-v-9ddb4acc]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-9ddb4acc]{margin-bottom:1.5rem;margin-top:5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:2.5rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-9ddb4acc], p[data-v-9ddb4acc]{margin-bottom:1rem;margin-top:0.25rem;width:100%;text-align:justify}span.text-2s[data-v-9ddb4acc]{font-size:.625rem}ul[data-v-9ddb4acc]{margin-bottom:1.5rem}ul.list-disc[data-v-9ddb4acc]{padding-left:3rem}li[data-v-9ddb4acc]{margin-top:0.25rem;margin-bottom:0.25rem}.page-wrapper[data-v-9ddb4acc]{background-image:none;background-size:7%,5%,7%,7%,7%,7%,7%,5%,7%,7%,7%,7%;background-position:6% 100px, 4% 958px, 4% 1816px, 96% 529px, 96% 1125px, 96% 1721px, 4% 2674px, 4% 3532px, 4% 4390px, 96% 2317px, 96% 2913px, 96% 3509px;background-repeat:no-repeat}",""]),o.locals={},e.exports=o},507:function(e,t,n){"use strict";n.r(t);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1},useBgDecoration:{type:Boolean,default:!0}},computed:{classObject:function(){return{"py-8":!this.customY,"md:py-20":!this.customY,"min-w-[272px]":!0,"mx-[24px]":!0,"w-auto":!0,"sm:mx-[32px]":!this.customX,"sm:w-auto":!this.customX,"md:mx-auto":!this.customX,"md:w-[706px]":!this.customX,"lg:mx-[168px]":!this.customX,"lg:w-auto":!this.customX,"xl:mx-auto":!this.customX,"xl:w-[1040px]":!this.customX}},pageWrapperClass:function(){return this.useBgDecoration?"bg-none lg:bg-wrapper bg-no-repeat bg-wrapper-top-left bg-wrapper-size":"bg-none"}}},r=(n(505),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.pageWrapperClass},[n("div",{class:e.classObject},[e._t("default")],2)])}),[],!1,null,"9ddb4acc",null);t.default=component.exports},509:function(e,t,n){var content=n(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("141320d4",content,!0,{sourceMap:!1})},510:function(e,t,n){var content=n(523);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("6a8641ef",content,!0,{sourceMap:!1})},518:function(e,t,n){"use strict";n(509)},519:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,"@media (min-width:1024px){.two-col-layout{grid-template-columns:1fr 5fr}}",""]),o.locals={},e.exports=o},520:function(e,t,n){"use strict";n.r(t);var o={name:"TwoColWrapper"},r=(n(518),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"two-col-layout my-4 grid lg:gap-6"},[n("div",{staticClass:"mb-2 justify-self-start text-[24px] text-primary-500"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"mb-5 mt-auto h-full text-[18px] leading-[28px] lg:leading-6"},[e._t("right-col")],2)])}),[],!1,null,null,null);t.default=component.exports},522:function(e,t,n){"use strict";n(510)},523:function(e,t,n){var o=n(21),r=n(279),c=n(280),l=n(281),d=n(282),m=n(283),h=o((function(i){return i[1]})),f=r(c),y=r(l),v=r(d),w=r(m);h.push([e.i,".banner[data-v-58eb5a27]{display:flex;width:100%;align-items:center;justify-content:center;font-family:Noto Serif TC, -apple-system, serif;font-weight:600;background-image:url("+f+"),url("+y+"),url("+v+"),url("+w+");background-repeat:no-repeat;background-position:5% 135px, 50% 50%, 94% 99px, 85% 70%}@media (min-width: 768px){.banner[data-v-58eb5a27]{background-position:16% 37%, 50% 50%, 77% 30%, 72% 490px}}@media (min-width: 1194px){.banner[data-v-58eb5a27]{background-position:16% 37%, 50% 100%, 77% 30%, 72% 490px}}.banner[data-v-58eb5a27]{background-size:11%,72%,22%,7%}@media (min-width: 768px){.banner[data-v-58eb5a27]{background-size:6%,36%,9%,4%}}.banner[data-v-58eb5a27]{height:calc(100vh - 320px);min-height:560px}.banner-texts[data-v-58eb5a27]{margin-left:0.375rem;margin-right:0.375rem;text-align:center}@media (min-width: 768px){.banner-texts[data-v-58eb5a27]{margin-left:3.5rem;margin-right:3.5rem}}.banner-texts[data-v-58eb5a27]{max-width:920px}",""]),h.locals={},e.exports=h},524:function(e,t,n){"use strict";n.r(t);var o={name:"Banner"},r=(n(522),n(9)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"banner"},[n("div",{staticClass:"banner-texts"},[e._t("default")],2)])}),[],!1,null,"58eb5a27",null);t.default=component.exports},525:function(e,t,n){e.exports=n.p+"img/Banner.62ce754.svg"},690:function(e,t,n){var content=n(778);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(22).default)("8731e4f4",content,!0,{sourceMap:!1})},767:function(e,t,n){e.exports=n.p+"img/Intro-1.7ac2b4f.png"},768:function(e,t,n){e.exports=n.p+"img/Intro-2.f5812cc.png"},769:function(e,t,n){e.exports=n.p+"img/Intro-3.1b240d5.png"},770:function(e,t,n){e.exports=n.p+"img/Icon-1.4f6808a.png"},771:function(e,t,n){e.exports=n.p+"img/Icon-2.fdb9646.png"},772:function(e,t,n){e.exports=n.p+"img/Icon-3.f3d74a6.png"},773:function(e,t,n){e.exports=n.p+"img/procedure-zh.3727da9.png"},774:function(e,t,n){e.exports=n.p+"img/procedure-zh-rwd.928429d.png"},775:function(e,t,n){e.exports=n.p+"img/procedure-en.7c89ffb.png"},776:function(e,t,n){e.exports=n.p+"img/procedure-en-rwd.5b27279.png"},777:function(e,t,n){"use strict";n(690)},778:function(e,t,n){var o=n(21)((function(i){return i[1]}));o.push([e.i,".paragraph-title[data-v-6043b4e4]{margin-bottom:2rem;margin-top:2rem;text-align:left;text-align:center;font-family:Noto Serif TC, -apple-system, serif;font-size:1.5rem;line-height:2rem;font-weight:700;--tw-text-opacity:1;color:rgba(218, 139, 220, var(--tw-text-opacity))}@media (min-width:768px){.paragraph-title[data-v-6043b4e4]{font-size:1.875rem;line-height:2.25rem}}.img_text[data-v-6043b4e4]{position:absolute;margin-top:6rem;white-space:nowrap;text-align:center;font-size:0.875rem;line-height:1.25rem}@media (max-width:640px){@media (min-width: 640px){.img_text[data-v-6043b4e4]{margin-top:5rem}}}@media (max-width:768px){.img_text[data-v-6043b4e4]{white-space:normal}.img_text[data-v-6043b4e4]{font-size:0.75rem;line-height:1rem}}.sub1_img[data-v-6043b4e4]{margin-left:0.5rem;margin-right:0.5rem;margin-top:0.75rem;margin-bottom:0.75rem;height:24rem;width:100%;background-size:contain;background-repeat:no-repeat}@media (min-width: 768px){.sub1_img[data-v-6043b4e4]{margin-left:1.25rem;margin-right:1.25rem}.sub1_img[data-v-6043b4e4]{height:24rem}}.sub2_img[data-v-6043b4e4]{margin-left:0.5rem;margin-right:0.5rem;margin-top:0.5rem;margin-bottom:0.5rem;display:none;background-repeat:no-repeat}@media (min-width: 768px){.sub2_img[data-v-6043b4e4]{margin-left:1.25rem;margin-right:1.25rem}}.sub2_img[data-v-6043b4e4]{width:30rem;height:40rem}@media (max-width:640px){.sub1_img[data-v-6043b4e4]{display:none}.sub2_img[data-v-6043b4e4]{margin-left:-1.5rem}.sub2_img[data-v-6043b4e4]{margin-right:-1.5rem}.sub2_img[data-v-6043b4e4]{display:flex}}",""]),o.locals={},e.exports=o},998:function(e,t,n){"use strict";n.r(t);var o=n(507),r=n(79),c=Object(r.a)({"en-us":{title:"Code of Conduct",pageAbstract:"PyCon Taiwan aims to provide a joyous, pleasant and vibrant environment. This convention applies to all the words and deeds of participants in the relevant entities and digital fields of PyCon Taiwan. It is hoped that everyone will work together to make PyCon Taiwan full of mutual respect and trust.",contents:[{title:"Three Principles",descriptions:["PyCon Taiwan is dedicated to providing a harassment-free conference experience for everyone. We do not tolerate harassment toward conference participants in any form.Remember that harassment and jokes that are sexist, racist, or exclusionary are not tolerated at PyCon Taiwan. PyCon Taiwan take appropriate actions to redirect behavior violating the Code of Conduct."],list:["Do not harass others","Appreciate each other","Show consideration"],subtitle:[{title:"Do not harass others",descriptions:["PyCon Taiwan will not tolerate any form of harassment and discrimination. Each attendee should be equally respected regardless of nationality, race, language, gender, sexual orientation, age, disability, physical appearance, faith, profession, seniority, political view, or intellect."]},{title:"Appreciate each other",descriptions:["Each attendee is expected to act professionally when attending PyCon Taiwan. Users of Python are diverse in their professional roles, technical backgrounds, and application areas. They contribute to the technology in many different ways, some amazingly unimaginable. Opinions or actions that undervalue other members of the community are inappropriate and will not be tolerated. "]},{title:"Show consideration",descriptions:["Sexual contents in any form are inappropriate in any conference venue, including but not limited to talks, open spaces, or social media. Words and actions originated from stereotypes are discouraged. Cell phones should be set to silent or a mode that does not annoy others in the conference rooms."]}]},{title:"Violation and Reporting",descriptions:["Conference organizers will take appropriate actions on behaviors violating the Code of Conduct. Violators may be required to leave the conference without a refund at the sole discretion of the organizers. This Code of Conduct is applicable to both physical and online events approved by the organizers of PyCon Taiwan."],subtitle:[{title:"Requirements",descriptions:["If you believe someone is in danger, including from themselves, the most important thing is to find help. If you feel your safety is in jeopardy, please immediately contact law enforcement in Taiwan (dialing 110 in Taiwan). Ask an organizing staff if you do not have a cell phone. If you believe the Code of Conduct has been violated, please report the incident to a staff member right away. If you are unsure whether it is a violation, or whether the space where it has happened is covered by this Code of Conduct, we encourage you to still report it."]},{title:"How to Report",descriptions:["In the event where there is conflict of interest, you may directly contact any of the lead incident responders:"],list:["Committee of Incident Response, PyCon Taiwan (report@python.tw)","Winnie (Chairperson of PyCon TW 2023, winniepopu@python.tw)","Pochun (Chairperson PyCon TW 2023, pochunlu@python.tw)"]},{title:"Report Data",descriptions:["If you make a report via email or phone, please include:"],list:["Your contact information (so we can get in touch with you if we need to follow up).","Date and time of the incident.","Location of the incident.","Whether the incident is ongoing.","Description of the incident.","Identifying information of the reported person: name, physical appearance, height, clothing, voice accent, identifying badge information such as company name, ribbons, or badge number.","Additional circumstances surrounding the incident.","Other people involved in, or witnesses to the incident, and their contact information or description. "]},{title:"Procedure",descriptions:["When you make a report to an incident responder, they will gather information about the incident according to the Procedure For Incident Response. After an incident responder takes the report, they will immediately consult with the PyCon Taiwan staff, unless there is a conflict of interest (involved directly with one of the PyCon Taiwan staff), in which case any non-interested parties will be contacted. ","If the incident is ongoing and needs to be immediately addressed, any lead incident responder may take appropriate action to ensure the safety of everyone involved. If the situation requires it, this may take the form of a referral to an appropriate non-PyCon agency, including the law enforcement in Taiwan.","If the incident is less urgent, the report will be discussed by the event staff, who will meet to determine an appropriate response."]},{title:"Confidentiality",descriptions:["All reports are confidential. When we discuss incidents with people who are reported, we will anonymize details as much as we can to protect the reporter’s privacy. However, the reported person may be able to guess who made the report in certain situations, even with details anonymized. If you have concerns about retaliation or your personal safety, please note those in your report. We still encourage you to report, so that we can support you while keeping our conference attendees safe. In some cases, we can compile several anonymized reports into a pattern of behavior, and take action based on these reports.","In certain cases, we may determine that a public statement needs to be made. In such cases, the identities of all victims and reporters will remain confidential unless the individuals involved instruct us otherwise. "]},{title:"Notes",descriptions:["This procedure has been adapted from the PyCon Procedure for Incident Handling."]}]}]},"zh-hant":{title:"行為準則",pageAbstract:"PyCon Taiwan 致力於為所有人提供無騷擾的會議體驗（包含數位場域），我們不容許以任何形式騷擾任何參與者、不容許任何的騷擾和性別歧視、種族主義或排他性笑話。本公約適用於參與者在 PyCon Taiwan 相關場域中的一切言行，期望大家一起合作。",contents:[{title:"三大準則",descriptions:["PyCon Taiwan 致力於為所有人提供無騷擾的會議體驗（包含數位場域），我們不容許以任何形式騷擾任何參與者。期望大家一起合作，務必遵守以下三大原則，PyCon Taiwan 籌備團隊有權調整任何違反此準則的行為。"],list:["禁止騷擾言行","彼此欣賞","體貼他人"],subtitle:[{title:"禁止騷擾",descriptions:["大會不容忍任何的騷擾或歧視。無分國籍、種族、語言、性別、性取向、年齡、身心狀況、信仰、職業、資歷、政治傾向、智力等，每一位參與者都應該獲得同樣的尊重。"]},{title:"彼此欣賞 ",descriptions:["每位參與者都應該抱持專業的態度與行為。Python 的使用者來自不同的專業分工、技術背景與應用領域。我們以非常多樣的方式使用並貢獻 Python 技術。任何貶低社群中其它成員的言行都是不適當的。"]},{title:"體貼他人",descriptions:["請勿在大會的任何場合做出任何形式的性暗示。這些場合包含但不限於演講、開放空間、社群媒體。請避免源自刻板印象的言行。會議中請把手機調為靜音，或是其它不會影響他人的模式。"]}]},{title:"違反與通報程序",descriptions:["籌備團隊有權調整任何違反此準則的行為。僅需根據籌備團隊的裁決，違反本行為準則者可能必須離開會場（包含數位場域）並不得要求退費。本行為準則適用於實體場地與數位場域，並經由籌備團隊認可執行。"],subtitle:[{title:"通報要件",descriptions:["如果您認為某人處於危險之中（包含他們自己造成的危險），確實感到自己的安全受到威脅，請立即撥打 110 以聯繫臺灣執法單位，或詢問 PyCon Taiwan 工作人員。如果不確定該事件是否違規，或所發生場域是否在行為準則範疇內，我們仍然鼓勵您通報。"]},{title:"如何通報",descriptions:["如果發生衝突，可以直接聯繫任一通報應變者："],list:["PyCon Taiwan 事件通報應變委員會 (report@python.tw)","Winnie (PyCon TW 2023 大會主席, winniepopu@python.tw)","Pochun (PyCon TW 2023 大會主席, pochunlu@python.tw)"]},{title:"通報內容",descriptions:["如果您透過電子郵件進行通報，請盡量包含以下內容："],list:["您的聯繫方式（以便與您取得聯繫）。","事件發生的日期和時間。","事件發生地點。","事件是否正在發生。","事件描述。","被舉報人的識別資訊：姓名、外貌、身高、服裝、口音、識別徽章資訊，如公司名稱、名牌或識別證。","圍繞事件的其他情況。","其他參與及其聯繫方式或描述。"]},{title:"處理流程",descriptions:["當您向通報應變者通報時，他們將蒐集相關的事件資訊。通報應變者收到通報後，他們將立即與大會工作人員協商討論如何處理，除非存在利益衝突（直接與大會工作人員有關），他們將聯繫任何非利益相關方協商討論。","如果事件正在發生且需要立即處理，任何通報應變者都可以採取適當的行動，以確保所有相關人員的安全。如果事件不具急迫性，大會工作人員將開會討論通報之事件以確定應變方式。"]},{title:"保密原則",descriptions:["所有通報內容都將保密。 當我們與被舉報人討論通報事件時，我們將盡可能匿名化通報之事件細節以保護舉報者之隱私。","然而，有些事件是發生在一對一的互動中，即便我們匿名化通報之事件細節，被檢舉者仍可能猜到是誰舉報他們。如果您擔心遭遇報復或人身安全，請在通報內容中註明。在某些情況下，我們會將多個匿名通報轉譯成一種行為模式，並針對該行為採取行動。","在某些情況下，我們可能會需要發表公開聲明。"]},{title:"備註",descriptions:["以上通報流程改寫自 PyCon 通報行為準則事件處理流程。"]}]}]}}),l=n(525),d=n.n(l),m=n(524),h=n(504),f=n(767),y=n.n(f),v=n(768),w=n.n(v),x=n(769),_=n.n(x),C=n(770),k=n.n(C),P=n(771),I=n.n(P),T=n(772),z=n.n(T),j=n(773),S=n.n(j),W=n(774),$=n.n(W),O=n(775),A=n.n(O),B=n(776),M=n.n(B),X=n(520),D={i18n:c,name:"PageCodeOfConduct",components:{I18nPageWrapper:o.default,CoreH1:h.default,Banner:m.default,TwoColWrapper:X.default},data:function(){return{aboutBanner:d.a,introImgs:[y.a,w.a,_.a],sub1:[k.a,I.a,z.a],sub2_zh:[S.a,$.a],sub2_en:[A.a,M.a]}},computed:{bannerStyle:function(){return{"background-image":"url(".concat(this.aboutBanner,")"),"background-repeat":"no-repeat","background-position":"center"}},sub2Imgs:function(){return"zh-hant"===this.$i18n.locale?this.sub2_zh:this.sub2_en}},methods:{getImgStyle:function(img){return{"background-image":"url(".concat(img,")"),"border-radius":"5%","background-size":"cover"}},getSub1Style:function(img){return{"background-image":"url(".concat(img,")")}},getSub2Style:function(img){return{"background-image":"url(".concat(img,")"),"background-position":"center"}}},head:function(){return{title:this.$i18n.t("title"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("title")},{hid:"og:description",property:"og:description",content:this.$i18n.t("pageAbstract")},{hid:"description",name:"description",content:this.$i18n.t("pageAbstract")}]}}},E=(n(777),n(9)),component=Object(E.a)(D,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-10 md:pb-24 lg:pb-24"},[n("banner",[n("core-h1",{attrs:{title:e.$t("title")}}),e._v(" "),n("p",{staticClass:"leading-6"},[e._v("\n            "+e._s(e.$t("pageAbstract"))+"\n        ")])],1),e._v(" "),n("div",{staticClass:"mx-2 my-3 flex flex-wrap justify-center"},e._l(e.introImgs,(function(img,i){return n("div",{key:"intro_img_"+i},[n("div",{staticClass:"mx-2 my-3 h-24 w-32 bg-contain bg-no-repeat md:mx-5 md:h-40 md:w-56",style:e.getImgStyle(img)})])})),0),e._v(" "),n("I18nPageWrapper",{staticClass:"pt-0 md:pt-20"},[n("div",{staticClass:"m-auto flex w-full flex-col"},e._l(e.$t("contents"),(function(t,i){return n("div",{key:"coc-rule-"+i},[n("p",{staticClass:"paragraph-title text-base md:text-lg lg:text-lg"},[e._v("\n                    "+e._s(t.title)+"\n                ")]),e._v(" "),e._l(t.descriptions,(function(t,o){return n("p",{key:"coc-description-"+o+"-"+t,staticClass:"text-xs leading-5 md:text-base md:leading-8"},[e._v("\n                    "+e._s(t)+"\n                ")])})),e._v(" "),0==i?n("div",{staticClass:"relative mx-2 my-1 flex justify-between sm:justify-around"},e._l(e.sub1,(function(img,o){return n("div",{key:"sub_img_"+o},[n("div",{staticClass:"mx-2 my-10 flex h-36 w-16 justify-center bg-contain bg-no-repeat sm:my-5 sm:h-40 sm:w-20 md:mx-5",style:e.getSub1Style(img)},[n("span",{staticClass:"img_text"},[e._v("\n                                "+e._s(t.list[o])+"\n                            ")])])])})),0):e._e(),e._v(" "),e._l(t.subtitle,(function(t,o){return n("div",{key:"coc-description-"+o},[n("div",[n("two-col-wrapper",{scopedSlots:e._u([{key:"default",fn:function(){return[n("h2",[e._v(e._s(t.title))])]},proxy:!0},{key:"right-col",fn:function(){return[e._l(t.descriptions,(function(o,r){return n("div",{key:"description-"+r},[n("p",[e._v(e._s(o))]),e._v(" "),r!==t.descriptions.length-1?n("br"):e._e()])})),e._v(" "),n("ol",{staticClass:"ml-4 list-decimal"},e._l(t.list,(function(li,t){return n("li",{key:"coc-list-"+t},[e._v("\n                                        "+e._s(li)+"\n                                    ")])})),0)]},proxy:!0}],null,!0)}),e._v(" "),["處理流程","Procedure"].includes(t.title)?n("div",{staticClass:"mx-2 my-2 flex flex-wrap justify-center"},[n("div",{staticClass:"sub1_img",style:e.getSub2Style(e.sub2Imgs[0])}),e._v(" "),n("div",{staticClass:"sub2_img",style:e.getSub2Style(e.sub2Imgs[1])})]):e._e()],1)])}))],2)})),0)])],1)}),[],!1,null,"6043b4e4",null);t.default=component.exports}}]);