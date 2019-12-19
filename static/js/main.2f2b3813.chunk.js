(this["webpackJsonpyuki-app"]=this["webpackJsonpyuki-app"]||[]).push([[0],{26:function(e,t,a){e.exports=a(37)},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(23),r=a.n(c),i=a(4),o=a(3),s=a(5),m=a(6),u=a(7),p=(a(31),a(8)),h=a(2),b=[{img:{web:["/imgs/pic-web.png","/imgs/pic-web2.png"],mobile:["/imgs/pic-mobile.png","/imgs/pic-mobile2.png","/imgs/pic-mobile3.png"]},name:"Piclab",url:"https://piclab-a968c.firebaseapp.com",github:"https://github.com/Yukichka/piclab-app",tech:["HTML","CSS","JavaScript","React","create-react-app","react-router","reactstrap","Bootstrap","Redux","Firebase"],style:["Website"]},{img:{web:["/imgs/quotes-web.png","/imgs/quotes-web2.png"],mobile:["/imgs/quotes-mobile.png","/imgs/quotes-mobile2.png","/imgs/quotes-mobile3.png"]},name:"Quotes Farm",url:"https://quotes-farm.firebaseapp.com",github:"https://github.com/Yukichka/Quotes-app",tech:["HTML","CSS","JavaScript","React","create-react-app","REST API"],style:["Website"]},{img:{web:["/imgs/yuki-web-demo.png"],mobile:["/imgs/yuki-mobile-demo.png"]},name:"yuki-app",url:"https://www.yukiinasawa.me",github:"https://github.com/Yukichka/Yuki-app",tech:["HTML","CSS","JavaScript","React","create-react-app","react-router","Material-UI"],style:["Portfolio"]},{img:{web:["/imgs/vicky-web-3.png","/imgs/vicky-web-2.png","/imgs/vicky-web.png","/imgs/vicky-web-4.png"],mobile:["/imgs/vicky-mobile.png","/imgs/vicky-mobile-3.png","/imgs/vicky-mobile-4.png","/imgs/vicky-mobile-5.png"]},name:"vicky-app",url:"https://vicky-app-temp.herokuapp.com",github:"",tech:["HTML","CSS","JavaScript","React","create-react-app","react-router","Material-UI"],style:["Portfolio","Ecommerce"]},{img:{web:["/imgs/travel-web.png","/imgs/travel-web-2.png"],mobile:["/imgs/travel-mobile-2.png","/imgs/travel-mobile-3.png","/imgs/travel-mobile.png"]},name:"TravelPictureApp",url:"https://yukichka.github.io",github:"https://github.com/Yukichka/TravelPictureApp",tech:["HTML","CSS","JavaScript","React","create-react-app","react-router","reactstrap","Bootstrap","GoogleMapsAPI"],style:["Website"]}],E=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.results.map((function(t,a){return l.a.createElement(h.b,{to:"/".concat(t),key:a,className:"link-list",onClick:e.props.onDelete},l.a.createElement("li",null,t))}));return console.log("props:",this.props.results,t),l.a.createElement("div",null,l.a.createElement("ul",{className:"suggestions-lists"},t))}}]),t}(l.a.Component),d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getInfo=function(e){console.log("getInfo, input: ",e);var t=[],n=e.toLowerCase();b.forEach((function(e){e.tech.forEach((function(e){var a=-1!==e.toLowerCase().indexOf(n),l=void 0!==t.find((function(t){return t===e}));console.log("tech",e,"hasText",a,"wasInTheList",l),a&&!l&&t.push(e)}))})),console.log("filtered list:",t),a.setState({results:t}),console.log(a.state.results)},a.handleInputChange=function(){a.setState({query:a.search.value},(function(){a.state.query&&a.state.query.length>0?a.getInfo(a.state.query):a.state.query||a.setState({results:[]})}))},a.deleteInput=function(){return a.setState({results:[]}),a.search.value=""},a.state={query:"",results:[]},a.deleteInput=a.deleteInput.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"search"},l.a.createElement("form",{className:"search-form"},l.a.createElement("input",{placeholder:"Search by tech stack...",ref:function(t){return e.search=t},onChange:this.handleInputChange,className:"search-input"}),l.a.createElement(E,{results:this.state.results,className:"search-results",onDelete:function(){return e.deleteInput()}})))}}]),t}(l.a.Component),v=a(13),g=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={isSearchOpen:!1},a.state={inputValue:""},a.openNav=a.openNav.bind(Object(p.a)(a)),a.closeNav=a.closeNav.bind(Object(p.a)(a)),a.openSearch=a.openSearch.bind(Object(p.a)(a)),a.closeSearch=a.closeSearch.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;this.unlisten=this.props.history.listen((function(t,a){e.closeSearch(),e.closeMobileSearch(),e.closeNav(),console.log("You changed the page to: ",t.pathname)}))}},{key:"componentWillUnmount",value:function(){this.unlisten()}},{key:"openSearch",value:function(e){document.getElementById("open-search").style.width="180px",this.setState({isSearchOpen:!0}),e.preventDefault()}},{key:"closeSearch",value:function(){document.getElementById("open-search").style.width="0",this.setState({isSearchOpen:!1})}},{key:"openMobileSearch",value:function(e){document.getElementById("mobile-search").style.display="inline-block",e.preventDefault()}},{key:"closeMobileSearch",value:function(){document.getElementById("mobile-search").style.display="none"}},{key:"openNav",value:function(){document.getElementById("mobilenav").style.width="100%"}},{key:"closeNav",value:function(){document.getElementById("mobilenav").style.width="0"}},{key:"render",value:function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{id:"main"},l.a.createElement(h.b,{to:"/",className:"header-title"},"Yuki Inasawa"),l.a.createElement("div",{className:"main-nav"},l.a.createElement("ul",{className:"nav-list"},l.a.createElement("li",{className:"nav-list-item"},l.a.createElement(h.b,{to:"/",className:"nav-link"},"Portfolio")),l.a.createElement("li",{className:"nav-list-item"},l.a.createElement(h.b,{to:"/about",className:"nav-link"},"About")),l.a.createElement("li",{className:"nav-list-item"},this.state.isSearchOpen?l.a.createElement("div",{className:"nav-link",onClick:this.closeSearch},"Search"):l.a.createElement("div",{to:"",className:"nav-link",onClick:this.openSearch},"Search")))),l.a.createElement("div",{id:"open-search"},l.a.createElement(d,null)),l.a.createElement("div",{className:"openbtn",onClick:this.openNav},"\u2630")),l.a.createElement("div",{id:"mobilenav"},l.a.createElement("div",{className:"closebtn",onClick:this.closeNav},"\xd7"),l.a.createElement("div",{className:"mobile-menu"},l.a.createElement(h.b,{to:"/",onClick:this.closeNav},"Portfolio"),l.a.createElement("p",{className:"line"},"\xa0"),l.a.createElement(h.b,{to:"/about",onClick:this.closeNav},"About"),l.a.createElement("p",{className:"line"},"\xa0"),l.a.createElement("div",{onClick:this.openMobileSearch},"Search")),l.a.createElement("div",{id:"mobile-search"},l.a.createElement(d,null))))}}]),t}(l.a.Component),f=Object(v.g)(g),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"footer"},"\xa9 2019 ",l.a.createElement(h.b,{to:"/",className:"footer-link"},l.a.createElement("span",null,"Yuki Inasawa"),".")," All Right Reserved.")}}]),t}(l.a.Component),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).getProjectInfo=a.getProjectInfo.bind(Object(p.a)(a)),a.state={project:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getProjectInfo",value:function(e){var t=e.name;this.setState({project:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"home"},l.a.createElement(f,null),l.a.createElement("div",{className:"home-content"},"Hi, I'm Yuki, a self-taught developer. Welcome to my little portfolio and creative space on the web. Please feel free to contact me for freelance projects."),l.a.createElement("div",{className:"home-projects"},b.map((function(t,a){return l.a.createElement("div",{className:"each-project",key:a},l.a.createElement(h.b,{to:"/project/".concat(t.name),className:"link-project"},l.a.createElement("div",{className:"each-project-link",onClick:function(){return e.getProjectInfo(t)}},l.a.createElement("img",{src:"".concat(t.img.web[0]),className:"each-project-img",alt:""}),l.a.createElement("br",null),l.a.createElement("div",{className:"each-project-name"},"".concat(t.name)))),l.a.createElement("div",{className:"each-project-tech"},"".concat(t.tech.join(" | "))))}))),l.a.createElement("div",{className:"home-footer"},l.a.createElement(k,null)))}}]),t}(l.a.Component),N=a(48),j=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"about"},l.a.createElement(f,null),l.a.createElement("div",{className:"about-header"},"Hi, I'm Yuki, a self-taught JavaScript developer based in Islington, London UK. I love to try new things and be amazed by the outcome. I code and make coffee. I love cafe, travel and yoga."),l.a.createElement(N.a,{container:!0,spacing:0},l.a.createElement(N.a,{item:!0,xs:12,sm:6,className:"about-grid"},l.a.createElement("div",{className:"about-title"},"Skills \u2192"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",null,"HTML5"),l.a.createElement("li",null,"CSS3"),l.a.createElement("li",null,"JavaScript"),l.a.createElement("li",null,"ES6"),l.a.createElement("li",null,"React"),l.a.createElement("li",null,"Vue"),l.a.createElement("li",null,"JQuery"),l.a.createElement("li",null,"react-router"),l.a.createElement("li",null,"WordPress"),l.a.createElement("li",null,"Bootstrap3"),l.a.createElement("li",null,"Material-UI"),l.a.createElement("li",null,"Git VCS"),l.a.createElement("li",null,"Unix Command Line"),l.a.createElement("li",null,"Sublime Text"),l.a.createElement("li",null,"VS Code"),l.a.createElement("li",null,"REST APIs"),l.a.createElement("li",null,"Amazon Alexa skill"),l.a.createElement("li",null,"Mongo DB"),l.a.createElement("li",null,"Express"),l.a.createElement("li",null,"Heroku"),l.a.createElement("li",null,"Firebase"),l.a.createElement("li",null,"Redux"))),l.a.createElement(N.a,{item:!0,xs:12,sm:6,className:"about-grid"},l.a.createElement("div",{className:"about-title"},"Education \u2192"),l.a.createElement("ul",{className:"about-list"},l.a.createElement("li",null,"Juntendo University, Tokyo"),l.a.createElement("li",null,"(Bachelor of Nursing)"),l.a.createElement("li",null,"Udacity, London"),l.a.createElement("li",null,"(Google Developer Scholarship)"),l.a.createElement("li",null,"freeCodeCamp, London"),l.a.createElement("li",null,"(JavaScript ES6 React)"),l.a.createElement("li",null,"Udemy, London"),l.a.createElement("li",null,"(React Redux Firebase)"),l.a.createElement("li",null,"GDG Cloud London, London"),l.a.createElement("li",null,"(JavaScript React Firebase)")),l.a.createElement("div",{className:"contact-me"},"Reach me \u2192"),l.a.createElement("ul",{className:"contact-me-list"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/Yukichka",target:"_blank",rel:"noopener noreferrer",className:"contact-me-link"},"GitHub")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/yuki-inasawa",target:"_blank",rel:"noopener noreferrer",className:"contact-me-link"},"LinkedIn")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/ukinnn/",target:"_blank",rel:"noopener noreferrer",className:"contact-me-link"},"Instagram"))))),l.a.createElement("br",null),l.a.createElement("div",{className:"about-footer"},l.a.createElement(k,null)))}}]),t}(l.a.Component);function S(){var e=Object(v.f)().projectName,t=b.find((function(t){return t.name===e}));return l.a.createElement("div",{className:"project"},l.a.createElement(f,null),l.a.createElement("div",{className:"project-content"},l.a.createElement("div",{className:"project-title"},"".concat(t.name)),l.a.createElement("div",null,"Tech Stack:","".concat(t.tech.join(" | "))),l.a.createElement("div",null,"Style:","".concat(t.style.join(" | "))),l.a.createElement("div",null,"URL:",l.a.createElement("a",{href:"".concat(t.url),target:"_blank",rel:"noopener noreferrer",className:"project-url"},"".concat(t.url))),""!=="".concat(t.github)?l.a.createElement("a",{href:"".concat(t.github),target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:"/imgs/github.png",alt:""})):l.a.createElement("div",null),l.a.createElement("div",null,l.a.createElement(h.b,{to:"/",className:"back-link"},"\u2190 Back"))),l.a.createElement("div",{className:"web-container"},l.a.createElement("div",null,"Web Image"),l.a.createElement("p",{className:"line"},"\xa0"),l.a.createElement("div",{className:"web-img-container"},t.img.web.map((function(e,t){return l.a.createElement("img",{src:e,alt:"",className:"web-img",key:t})})))),l.a.createElement("div",{className:"mobile-container"},l.a.createElement("div",null,"Mobile Image"),l.a.createElement("p",{className:"line"},"\xa0"),l.a.createElement("div",{className:"mobile-img-container"},t.img.mobile.map((function(e,t){return l.a.createElement("img",{src:e,alt:"",className:"mobile-img",key:t})})))),l.a.createElement("div",{className:"project-footer"},l.a.createElement(k,null)))}function w(){var e=Object(v.f)().el,t=b.filter((function(t){return t.tech.includes(e)}));return console.log(t),l.a.createElement("div",{className:"searched-project"},l.a.createElement(f,null),l.a.createElement("div",{className:"filtered-header"},"Filed under ",l.a.createElement("strong",null,e)),l.a.createElement("p",{className:"line"},"\xa0"),l.a.createElement("ul",{className:"filtered-list"},t.map((function(e,t){return l.a.createElement(h.b,{to:"/project/".concat(e.name),className:"filtered-link",key:t},l.a.createElement("li",null,e.name))}))),l.a.createElement("p",{className:"line"},"\xa0"))}var O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement(h.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/about",exact:!0},l.a.createElement(j,null)),l.a.createElement(v.a,{path:"/search",exact:!0},l.a.createElement(d,null)),l.a.createElement(v.a,{path:"/project/:projectName",exact:!0},l.a.createElement(S,null)),l.a.createElement(v.a,{path:"/:el",exact:!0},l.a.createElement(w,null)),l.a.createElement(v.a,{path:"/",exact:!0},l.a.createElement(y,null)))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.2f2b3813.chunk.js.map