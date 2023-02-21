window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002Fpycontw-frontend\u002F_nuxt\u002Fstatic\u002F1676956875",layout:"default",error:b,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:271,begin_time:"2022-09-03T03:25:00Z",end_time:"2022-09-03T03:55:00Z",is_remote:c,location:"4-r0-2",youtube_id:a,title:"實現超自動化的驗證碼辨識",category:"APPL",language:"ZHEN",python_level:"INTERMEDIATE",recording_policy:c,abstract:"本演講著重於讓聽眾了解自己如何實現自動辨識驗證碼模型的整體流程，我們是如何進行蒐集文字驗證碼的正確答案以確保獲得足夠的資料，並提供講者的訓練模型方式與經驗。結合 RPA (Robotic Process Automation，機器人流程自動化) 與 AI (Artificial Intelligence，人工智能) 兩個領域，我們可以實現網路驗證碼辨識超自動化 (Hyperautomation) 任務。",detailed_description:"- 1. 為何需要破解驗證碼：(約 1 分鐘)\r\n  由於目前所擔任的職務是負責 RPA 相關任務，常常會收到使用者需要到某個網頁上查詢或點擊按鈕完成高工時且重複性高的例行工作任務。但有礙於部分網站在登入的時候常常會有文字驗證碼需要輸入，導致使用上有斷點，使用者必須人工登打。為了提升使用者滿意度體驗，我們嘗試破解驗證碼，結合深度學習訓練 OCR (Optical Character Recognition，光學字元辨識) 模型，實現超自動化任務。\r\n  * RPA：機器人流程自動化，取自 Robotic Process Automation 的縮寫，是指透過軟體技術的應用，達到自動協助辦公室工作者完成日常工作的解決方案。\r\n  * OCR：光學字元辨識，取自 Optical Character Recognition 的縮寫，是指對文字資料的圖像檔案進行分析辨識處理，取得文字及版面資訊的過程。\r\n  * 超自動化：超自動化是傳統業務流程自動化的延伸，超越了單一流程的範圍。透過將 AI 工具與 RPA 相互結合，超級自動化幾乎可為企業使用者實現所有重複性任務的自動化。\r\n- 2. 千奇百怪的驗證碼：(約 1 分鐘)\r\n  本節跟各位聽眾展示各政府機關等等奇型怪狀的文字驗證碼，其中我們看到有些驗證碼相當歪斜，這會導致模型成效辨識不彰的原因之ㄧ。\r\n- 3. 想像的做法：(約 1 分鐘)\r\n  有些網站很有趣，雖然有圖形驗證碼，但其實會附上答案的連結；有些是會提供音檔，而音檔的答案會附在 script 腳本。以上這些是比較少數的案例，但大多的時候，我們是沒有辦法直接取得驗證碼的答案，就必須透過 OCR 模型辨識取得答案。在還沒有自己訓練模型以前，過去會使用鼎鼎大名的 tesseract OCR 或是語音破解。我們也嘗試使用 [tesseract ocr](https:\u002F\u002Fgithub.com\u002Ftesseract-ocr\u002F) 模型去跑搜集的驗證碼一萬張成效，平均辨識成功成效僅為 2.71 %，因此在想完成自動登入網站的時候，常常會失敗。\r\n- 4. 如何進行資料蒐集：(約 8 分鐘)\r\n  驗證碼搜集的關鍵在於大量包含正確答案的圖片，有越多的資料才有辦法訓練出一個好模型。透過以下方式搜集約 20 萬張驗證碼圖片和正確答案。蒐集到的答案的方式，統一命名為「答案_uuid.txt」避免檔名重複。本節展示這次模型抓了哪些網站的驗證碼及資料張數。此外，若爬到的驗證碼不確定大小寫，不會用此資料。\r\n  為蒐集大量的驗證碼圖片，本節將介紹 6 種有趣的方法來抓驗證碼資料或產製的方法。\r\n     \r\n- 5. 模型：(約 5 分鐘)\r\n  這次使用的 OCR 模型名稱為 [ClovaOCR](https:\u002F\u002Fgithub.com\u002Fclovaai\u002Fdeep-text-recognition-benchmark)，參照 GITHUB README 即可自行訓練深度學習模型。以下附上訓練策略及成效\r\n  - 訓練環境使用 GPU\r\n  - 訓練集\u002F驗證集 為 8:2 -\u003E 16萬：4萬\r\n  - 訓練 iteration：30 萬\r\n  - 最後 Training Accuracy： 0.99\r\n  - 訓練時間： 約 41.23 小時\r\n  - 比較 tesseract OCR，新的模型 ClovaOCR 則是在驗證集有 93.49 % 的成效，每一張辨識時間僅需 0.1713 秒。\r\n  \r\n  最後也與大家說明如何將 ClovaOCR 將模型推斷重構，符合驗證碼單張推斷的辨識方式。",slide_link:"https:\u002F\u002Fdocs.google.com\u002Fpresentation\u002Fd\u002F1WsdQoRojBKlfOrDNppgbCmHK1DFC5gOh\u002Fedit#slide=id.p1",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002FvnvojAmCGJ3BuYiqE1viLY",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002Frk0o8aQ1s",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F0d\u002F90\u002F0d90c45fec82258f90efee2c32587351.jpg",name:"何信賢",github_profile_url:a,twitter_profile_url:a,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fprofile.php?id=100001393895942",bio:"擔任RPA工程師與全端工程師，喜歡研究爬蟲和開發網站的服務。\r\n歡迎來找我打羽球或是交流寫程式的心得:)"}],event_type:"talk"},relatedData:[],i18n:{routeParams:{}}},serverRendered:true,routePath:"\u002Fzh-hant\u002Fconference\u002Ftalk\u002F271",config:{gtm:{id:a},_app:{basePath:"\u002Fpycontw-frontend\u002F",assetsPath:"\u002Fpycontw-frontend\u002F_nuxt\u002F",cdnURL:b}}}}("",null,false));