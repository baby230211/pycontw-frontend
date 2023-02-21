__NUXT_JSONP__("/zh-hant/conference/talk/260", (function(a,b){a.id=260;a.begin_time="2022-09-03T03:25:00Z";a.end_time="2022-09-03T03:55:00Z";a.is_remote=false;a.location="4-r0";a.youtube_id=b;a.title="AI 認注音：使用huggingface framework建構開源標音系統g2pW";a.category="NLP";a.language="ZHEN";a.python_level="INTERMEDIATE";a.recording_policy=true;a.abstract="語音領域在近年來得到很大的關注，不管是智能音箱，或者是未來的元宇宙，語音服務都佔重要的一席之地。而其中，負責聽懂話語的「語音辨識」，以及負責產生話語的「語音合成」，皆是不可或缺的關鍵技術。在多數情境下，不管是語音辨識或語音合成都需要應用到中間產物——標音(phoneme)，標音是橋接文字與發音的符號系統，在英文有KK音標來表示單字的發音，在中文有注音、拼音來表示中文字的發音。然而中文存在著一字多音的破音字，而這樣的破音字是需要根據上下文來決定讀音的，這是一個困難的問題，因此我們需要一個能夠理解上下文的AI標音模型。我們建構並開源了基於Python的g2pW套件(https:\u002F\u002Fgithub.com\u002FGitYCC\u002Fg2pW)，這是一個基於BERT的衍生模型。本演講將分為兩個區塊，前半段介紹這個強大的中文標音套件，並且介紹g2pW的模型創新及驗證，後半段則著重在如何使用Pytorch+Huggingface框架實現基於BERT的衍生模型g2pW，Huggingface框架已成了自然語言處理的一把瑞士刀，我們可以快速的基於它建立起Transformer深度學習模型，在本講中我們將會帶大家一窺其神秘面紗。";a.detailed_description="本部分補充附註摘要內容:\r\n* [語音辨識] 其目標是以電腦自動將人類的語音內容轉換為相應的文字，例如:Siri。\r\n* [語音合成] 其目標是將一般語言的文字轉換為語音，例如: Google小姐。\r\n* [Phoneme] 是人類語言中能夠區別意義的最小聲音單位，為了讓大眾較好理解，在本講稱之為標音。\r\n* 破音字為何是一個需要使用上下文語意的困難問題，這邊可以舉個例子:「\"為\"您服務」和「\"為\"您所用」的\"為\"在文字的形式上並無太大差別，但是其含義和讀音卻是不同的，前者意義是service ”for” you，後者意義是used ”by” you。\r\n* [g2pW] 是我們建立並開源的中文標音套件，我們也同時將套件上到 [pypi] 上。\r\n* [BERT] 是預訓練語言模型，經微調後許多自然語言任務都可以得到很好的成效。\r\n* [Pytorch] 是可以實踐深度學習的框架。\r\n* [Huggingface] 是可以實現 Transformer 模型的框架。\r\n* [Transformer] 是一種深度學習模型，其特色為自注意機制，BERT為其中一種Transformer。\r\n\r\n\r\n[語音辨識]: https:\u002F\u002Fzh.wikipedia.org\u002Fwiki\u002F%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB\r\n[語音合成]: https:\u002F\u002Fzh.wikipedia.org\u002Fwiki\u002F%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90\r\n[Phoneme]: https:\u002F\u002Fzh.wikipedia.org\u002Fwiki\u002F%E9%9F%B3%E4%BD%8D\r\n[g2pW]: https:\u002F\u002Fgithub.com\u002FGitYCC\u002Fg2pW\r\n[pypi]: https:\u002F\u002Fpypi.org\u002Fproject\u002Fg2pw\u002F\r\n[BERT]: https:\u002F\u002Farxiv.org\u002Fabs\u002F1810.04805\r\n[Pytorch]: https:\u002F\u002Fgithub.com\u002Fpytorch\u002Fpytorch\r\n[Huggingface]: https:\u002F\u002Fgithub.com\u002Fhuggingface\u002Ftransformers\r\n[Transformer]: https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FTransformer_(machine_learning_model)";a.slide_link="https:\u002F\u002Fdrive.google.com\u002Ffile\u002Fd\u002F1RO4JP4JmqsZ1bYqDn-ZxAS0k6sU4UZrx\u002Fview?usp=sharing";a.slido_embed_link="https:\u002F\u002Fapp.sli.do\u002Fevent\u002Fxiw4ay3xxgREhZmbFQ3Vtz";a.hackmd_embed_link="https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FH1xh8aQks";a.speakers=[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fa7\u002F53\u002Fa753839a1bff7c6cc035e16c044272d8.jpg",name:"陳宜昌",github_profile_url:"https:\u002F\u002Fgithub.com\u002FGitYCC",twitter_profile_url:b,facebook_profile_url:"https:\u002F\u002Fwww.facebook.com\u002Fyc.note\u002F",bio:"大家好！我是YC，是一名資料科學家，熟悉機器學習和深度學習的各類技術，以及大數據分散式系統架構，領域包括：CV、NLP、推薦系統及語音；同時，我也是一名吉他手和部落客，經營技術部落格「YC Note」五年多。我總是嘗試各種生命的可能性，因為我深信：人生的意義在於體驗一切身為人的經驗。"}];a.event_type="talk";return {data:[{speechData:a}],fetch:{},mutations:[["setSpeechData",a]]}}({},"")));