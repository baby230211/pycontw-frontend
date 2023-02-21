window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002Fpycontw-2021\u002F_nuxt\u002Fstatic\u002F1676956291",layout:"default",error:b,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:13,begin_time:"2022-09-04T02:35:00Z",end_time:"2022-09-04T04:05:00Z",is_remote:false,location:"1-r3",registration_link:a,youtube_id:a,title:"Pika Pika！RabbitMQ 簡介 x Python 實作",category:"APPL",language:"ZHEN",python_level:"INTERMEDIATE",recording_policy:c,abstract:"RabbitMQ 是被廣泛使用的 Message Queue 開源軟體，跟大家比較常聽到的同步式 HTTP API 不一樣，能夠提供不同程序(process)或不同系統(system)之間的非同步(asynchronous)溝通，使訊息提供者和接收者能夠獨立運作。Pika 是一個純 Python 開發的 RabbitMQ Client 函式庫，可以簡單地與 RabbitMQ 進行互動。在這次教學中，將會介紹 Message Queue 與 RabbitMQ 的概念與架構，帶你快速架設 RabbitMQ  Server 以及認識 Web 使用者操作介面，學習如何撰寫 Python 開發 Producer 與 Consumer 程式，實作兩種常見的設計模式，最後透過應用案例分享 MQ 實際在系統中扮演的角色與功能。",detailed_description:"## 教學內容簡介：\r\n- Message Queue(MQ)是一種訊息傳遞仲介，跟大家比較常聽到的同步式 HTTP API 不一樣，能夠提供不同程序(process)或不同系統(system)的非同步(asynchronous)溝通，使訊息提供者和接收者能夠獨立運作，不需要放在同一套系統內。\r\n- RabbitMQ 就是一種使用廣泛的輕量級開源工具，為大多數流行的程式語言提供了多樣的開發套件包（包含 Python），透過 Docker 能夠讓開發者快速的建立 Message Queue 系統，並提供一個 Web 介面供開發人員或維運人員查看及操作。\r\n- Pika 是一個純 Python 開發的 RabbitMQ Client 函式庫，可以簡單地與 RabbitMQ 進行互動，包含建立連線、定義 Queue 和 Exchange、推送\u002F接收訊息等。\r\n- 本次教學課程會帶著聽眾，認識 Message Queue 與 RabbitMQ 的基礎概念，學習如何撰寫 Python 程式碼開發 Producer 與 Consumer 程式，並動手實作兩種設計模式，最後透過應用案例分享 MQ 實際在系統中扮演的角色與功能。\r\n\r\n## 教學大綱：\r\n- 什麼是 Message Queue(MQ)\r\n    - MQ 的特性與角色\r\n    - 使用 MQ 有什麼好處\r\n    - 實際應用場景分享\r\n- RabbitMQ 簡介\r\n    - RabbitMQ 的架構和元件 \r\n    - 常見的幾種設計模式\r\n- RabbitMQ 架設與 Web UI 介紹 \r\n    - 範例 repository 下載 & 說明\r\n    - 使用 Docker 安裝 RabbitMQ\r\n    - Web UI 瀏覽與操作說明\r\n- RabbitMQ x Python 程式實作\r\n    - client library - Pika 介紹與安裝\r\n    - 建立連線(connection)與頻道(channel)\r\n    - 宣告 Queue，Queue \u002F Message durability\r\n    - 生產(publish)訊息，三種消化(consume)訊息的方法\r\n    - 訊息確認機制(acknowledgement)\r\n- RabbitMQ 兩種設計模式實作\r\n    - 實作 Worker 模式(multi consumer)\r\n    - 實作 Routing 模式(exchange & routing_key)\r\n- 總結\r\n    - 課程內容回顧\r\n    - 學習資源分享\r\n\r\n\r\n## 適合的對象：\r\n- 想了解非同步、可擴展系統設計的開發者\r\n- 沒學過\u002F不熟悉 Message Queue 的開發者\r\n- 想學習不同 RabbitMQ 設計模式的開發者\r\n- 想認識 RabbitMQ 實際在專案中應用的人\r\n- 想學習用 Python 開發 RabbitMQ 程式的人\r\n\r\n\r\n## 先備知識：\r\n- Python 程式基礎、套件安裝、Web Clien-Server 架構\r\n- 本教學將使用 [Docker\u002FDocker Compose](https:\u002F\u002Fdocs.docker.com\u002Fget-started\u002F) 安裝 RabbitMQ，建議先在你的環境完成安裝，並了解其基礎概念和指令。[(更多安裝方式)](https:\u002F\u002Fwww.rabbitmq.com\u002Fdownload.html)\r\n- 更多內容可先參考我撰寫的系列文章：\r\n    1. [訊息佇列 01 - Message Queue 介紹與實際應用](https:\u002F\u002Fenzochang.com\u002Fmessage-queue-introduction\u002F)\r\n    2. [訊息佇列 02 - RabbitMQ 簡介與 5 種設計模式](https:\u002F\u002Fenzochang.com\u002Frabbitmq-introduction\u002F)\r\n    3. [訊息佇列 03 - RabbitMQ 架設方法與網頁管理介面](https:\u002F\u002Fenzochang.com\u002Frabbitmq-management-interface\u002F)\r\n    4. [訊息佇列 04 - RabbitMQ x Python 程式實作範例](https:\u002F\u002Fenzochang.com\u002Frabbitmq-python-example\u002F)\r\n\r\n## Reference：\r\n- [RabbitMQ Tutorials](https:\u002F\u002Fwww.rabbitmq.com\u002Fgetstarted.html)\r\n- [Pika Document](https:\u002F\u002Fpika.readthedocs.io\u002Fen\u002Fstable\u002F)\r\n- [Pika GitHub](https:\u002F\u002Fgithub.com\u002Fpika\u002Fpika)",slide_link:"https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1MlnVLJLlyw6Xk7EbbqYDeFFN1MlqMTzI\u002Fview",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002FeAnaP1YY5MPHZZaqfYscHG",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002Frkf-D67Jo",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F3b\u002F0a\u002F3b0a6032cf517b9dcc203c9972c6df86.jpg",name:"張仲樸 Enzo Chang",github_profile_url:a,twitter_profile_url:a,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fenzoapu",bio:"I'm Enzo, an atypical developer with experience covering Data x Software x Education, working as a Data Engineer & Scrum Master in e-commerce company, focusing on ETL, Data Pipeline, MLOps, Crawler & RESTful API.\r\n\r\nPassionate about learning and sharing. I have been a volunteer and speaker in the Data & Agile community for a long time, and I have served as a Python Web Crawler course lecturer in the company.  👋 Feel free to contact me!                     \r\n\r\nLinkedin ➡️ https:\u002F\u002Fwww.linkedin.com\u002Fin\u002Fenzochang\u002F"}],event_type:"tutorial"},relatedData:[],i18n:{routeParams:{}}},serverRendered:c,routePath:"\u002Fzh-hant\u002Fconference\u002Ftutorial\u002F13",config:{gtm:{id:a},_app:{basePath:"\u002Fpycontw-2021\u002F",assetsPath:"\u002Fpycontw-2021\u002F_nuxt\u002F",cdnURL:b}}}}("",null,true));