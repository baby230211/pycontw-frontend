window.__NUXT__=(function(a,b,c){return {staticAssetsBase:"\u002Fpycontw-2021\u002F_nuxt\u002Fstatic\u002F1676956291",layout:"default",error:b,state:{sponsorsData:[],jobsData:[],schedulesData:[],keynotesData:[],youtubeInfo:[],speechesData:[],speechData:{id:243,begin_time:"2022-09-03T02:45:00Z",end_time:"2022-09-03T03:15:00Z",is_remote:false,location:"6-r2",youtube_id:a,title:"Code coverage through unit tests running in sub-processes\u002Fthreads: Locally and automated on GitHub",category:"TEST",language:"ENEN",python_level:"INTERMEDIATE",recording_policy:c,abstract:"Unit testing and code coverage are two essential aspects of an open-source codebase. These unit tests often run in spawned sub-processes or threads as sub-processes or multi-threading allow them to run parallelly. However, running unit tests in a sub-process creates a problem; as the documentation of `coverage.py` says — *“Measuring coverage in those sub-processes can be tricky because you have to modify the code spawning the process to invoke coverage.py.”*. As we will see in this tutorial, as soon as we run unit tests inside a sub-process, the coverage module ignores them completely, and the coverage value goes down. Through this talk, we will build up a solution (using `coverage.py` itself) to tackle this problem!\r\n\r\nPrerequisites - \r\n- familiarity with unit testing and code coverage in Python\r\n- familiarity with CI\u002FCD using GitHub Actions\r\n- knowledge of multi-threading, multi-processing, CodeCov, and basic data structures like queue would be helpful but is not mandatory",detailed_description:"The *“Code coverage”* value of a codebase depicts how much of the production\u002Fdevelopment code is covered by the running unit tests. In the world of open-source, all the maintainers try their best to keep this percentage high, and this process is often automated through tools like `GitHub Actions` and `Codecov`. Hence, code coverage becomes a good metric (not always) to check if a particular codebase is well tested and reliable.\r\n\r\nOpen source maintainers often prefer to run these unit tests in sub-processes or threads as it allows them to run in parallel and reduce the `CI` (continuous integration) run time on pull requests. They also make it easier to stop the tests midway if they take too much time (probabilistic tests).\r\n\r\nWe will start this talk with an introduction to a dummy project and review the importance of unit testing and coverage. Our first step would be to write basic unit tests for our dummy project and calculate coverage value through them. Next, we will dive deep into sub-processes and run our unit tests in a subprocess. This first test run would use `coverage.py` in the default mode, which will give us some bizarre results as if `coverage.py` does not notice the running tests at all. Our next step would be to configure a `CI` (continuous integration) pipeline using `GitHub Actions` and `Codecov` to automate this process in our remote repository. After going through the results, we will build a solution to cover the “un-covered” code in the local repository. As a final step, we will also re-configure the `CI` (continuous integration) pipeline to reflect the changes in our remote repository.\r\n\r\nMoreover, this talk would include extensive discussions on unit testing, code coverage, and Test-Driven-Development in general, including my experiences and why any user-facing library should follow TDD.",slide_link:"https:\u002F\u002Fdocs.google.com\u002Fpresentation\u002Fd\u002F1Iji1klGczzQ4DxN6-E-zfEN5oPMMs2LZtD482-plGAM\u002Fedit?usp=sharing",slido_embed_link:"https:\u002F\u002Fapp.sli.do\u002Fevent\u002F9mocDRmn6yeMAqNbQTxXMo",hackmd_embed_link:"https:\u002F\u002Fhackmd.io\u002F@pycontw\u002FrkcoIaXJi",speakers:[{thumbnail_url:"https:\u002F\u002Ftw.pycon.org\u002Ftemp\u002Fmedia\u002Fcache\u002Fe3\u002F66\u002Fe366ef99ebd60a4d0ea821e3e41a9567.jpg",name:"Saransh Chopra",github_profile_url:"https:\u002F\u002Fgithub.com\u002FSaransh-cpp",twitter_profile_url:"https:\u002F\u002Ftwitter.com\u002Fsaranshchopra7",facebook_profile_url:a,bio:"Saransh is an engineering junior at the University of Delhi, pursuing a major in Information Technology and Mathematics. In daylight, he work towards his academic skills and professional commitments, and by night, he develops and maintains open-source research software, which he believes are the key to collaborative and reproducible research.\r\n\r\nHe is currently a fellow at the Institute for Research and Innovation in Software for High Energy Physics (IRIS-HEP), working on the first major release of Vector. He is also working as a technical writer for FluxML, which is being funded by the Julia Programming Language.\r\n\r\nHe is interested in everything a Research Software Engineer and a Machine Learning Engineer do, including Scientific Machine Learning, code optimization, developing packages, technical writing, building infrastructures, developing open-source research software, JuliaLang, and Python."}],event_type:"talk"},relatedData:[],i18n:{routeParams:{}}},serverRendered:c,routePath:"\u002Fzh-hant\u002Fconference\u002Ftalk\u002F243",config:{gtm:{id:a},_app:{basePath:"\u002Fpycontw-2021\u002F",assetsPath:"\u002Fpycontw-2021\u002F_nuxt\u002F",cdnURL:b}}}}("",null,true));