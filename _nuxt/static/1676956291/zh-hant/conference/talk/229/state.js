window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002Fpycontw-2021\u002F_nuxt\u002Fstatic\u002F1676956291",layout:"default",error:b,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:229,begin_time:"2022-09-03T05:30:00Z",end_time:"2022-09-03T06:00:00Z",is_remote:false,location:"5-r1-1",youtube_id:a,title:"Implement Shion(詩音) from SingaBitofHarmony(讓我聽見愛的歌聲) with Python",category:"OTHER",language:"JPEN",python_level:"INTERMEDIATE",recording_policy:c,abstract:"How can we create a program that can speak (not write) with a human?\r\n\r\nI love anime and fell in love with a movie \"Sing a Bit of Harmony\"(讓我聽見愛的歌聲).  \r\nThe character, AI (robot) Shion, is very attractive from an engineer's point of view, and I wanted to implement even some of its functions.\r\n\r\nI implemented shion.py, which allows humans to enter text by voice and the script responds by voice.  \r\nIn short, it is like a smart speaker that parrots.\r\nIn other word, the program reads aloud the spoken texts.\r\n\r\nI started with an easy implementation (with Web API and OS command) to check the idea and then reworked it with pre-trained machine learning models to get closer to Shion.\r\n\r\nI will share those implementations with you.  \r\nI would be happy to provide a little inspiration for your Maker project.\r\n\r\nKeywords like hashtag: #TTS, #ASR, #subprocess, #SpeechRecognition, #ttslearn #ESPnet, #soundfile, #HuggingFace",detailed_description:"# Background\r\n\r\n## Sing a Bit of Harmony\r\n\r\nThe movie: Sing a Bit of Harmony\r\n- https:\u002F\u002Fwww.comingsoon.net\u002Fanime\u002Fnews\u002F1193910-sing-a-bit-of-harmony-trailer-teases-2022-release\r\n- https:\u002F\u002Fyoutu.be\u002F1UeIEUoHZ6E\r\n\r\nIn my opinion, this is an awesome film.\r\nIt has the distinction of winning several film festivals:\r\nhttps:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FSing_a_Bit_of_Harmony#Reception\r\n\u003EIn October 2021, Sing a Bit of Harmony won the Audience Award at the Scotland Loves Animation film festival.\r\n\r\n## Motivation\r\n\r\nIn Japan, fans support their favorite animated films by drawing illustrations.  \r\nI cannot draw illustrations, but I wanted to support this movie somehow.\r\n\r\nIn this film, an AI (robot, android) named Shion plays an key role.  \r\nSince Shion is an AI, some parts of it can be reproduced by writing a program.  \r\nSo, instead of illustrations, I decided to support this film by implementing some of Shion's features.\r\n\r\n# Technical Details\r\n\r\n## Define: Shion v0.0.1\r\n\r\nI started with implementation of Shion small.  \r\nI implement Shion as software. (As for the hardware, it is a future work)\r\n\r\nI defined Shion v0.0.1 as a program that enables the following:\r\n\r\n1. We inputs voice into Shion (the program)\r\n2. Shion transcribes speech into text\r\n3. Shion processes the text\r\n4. Shion reads the text out loud as response\r\n\r\nText processing is also worth devising, but this time the focus is on handling speech.\r\n\r\n## Techniques to implement Shion\r\n\r\n- Text-To-Speech enables a program to read text out loud\r\n- Automatic Speech Recognition enables us to input voice into a program\r\n\r\n### Text-To-Speech (a.k.a TTS)\r\n\r\n- call OS command [1] (easy to implement, but depends on the environment)\r\n- use a pre-trained machine learning model\r\n\r\n[1]: call `say` command (macOS) like https:\u002F\u002Fdocs.python.org\u002F3\u002Fhowto\u002Flogging-cookbook.html#speaking-logging-messages\r\n\r\n### Automatic Speech Recognition (a.k.a ASR)\r\n\r\n- call API like Cloud Speech-to-Text API [2]\r\n- use a pre-trained machine learning model (to provide this feature without Internet access. Shion is standalone)\r\n\r\n[2] https:\u002F\u002Fcloud.google.com\u002Fspeech-to-text\r\n\r\n# Caveats\r\n\r\n⚠️Mainly deals with ASR and TTS in Japanese. Best effort for ASR and TTS in English.  \r\n⚠️I am a beginner of ASR and TTS, so the focus will be on what implementations are possible. (I will not deal with the theory)",slide_link:"https:\u002F\u002Fftnext.github.io\u002F2022_slides\u002Fpyconapac_maker\u002Flive_notebook.slides.html",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002F9SZY8fXP6EyYUYKY5kCaTQ",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FHknC8amkj",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002F33\u002Fdf\u002F33df9d25a96a31596837360c85a04169.jpg",name:"nikkie",github_profile_url:"https:\u002F\u002Fgithub.com\u002Fftnext",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002Fftnext",facebook_profile_url:a,bio:"Nikkie began his career as a software engineer in 2016.  \r\nHe started Python as a hobby in 2017 and fell in love with it.  \r\nHe is engaged in Natural Language Processing as a data scientist at Uzabase, inc. Tokyo, Japan from 2019.\r\n\r\nHe is working on the Python community in Japan as a staff of the following event:\r\n\r\n- [PyCon Japan](https:\u002F\u002Fwww.pycon.jp\u002Forganizer\u002Findex.html): the largest PyCon in Japan\r\n  - staff on 2019 and 2020 (Program committee, lead on 2020)\r\n  - [chair](https:\u002F\u002Fpyconjp.blogspot.com\u002F2020\u002F10\u002Fpyconjp-2021-chair.html) on 2021\r\n\r\nHe gave a talk (and lightning talks) at many PyCons in Japan and abroad.\r\n\r\n- EuroPython 2020, [PyCon APAC 2020](https:\u002F\u002Fyoutu.be\u002FJiXnEA7pM7U) (English)\r\n\r\nHe loves anime (Japanese animetation) as much as Python, and implements ideas related to some anime with Python.  \r\nIn 2022, he write code related to \"Sing a Bit of Harmony\" (e.g. Twitter bot, prototyping AI character, e.t.c.)."}],event_type:"talk"},relatedData:[],i18n:{routeParams:{}}},serverRendered:c,routePath:"\u002Fzh-hant\u002Fconference\u002Ftalk\u002F229",config:{gtm:{id:a},_app:{basePath:"\u002Fpycontw-2021\u002F",assetsPath:"\u002Fpycontw-2021\u002F_nuxt\u002F",cdnURL:b}}}}("",null,true));