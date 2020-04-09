(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(7),i=n.n(l),c=(n(15),n(1)),o=n(2),s=n(3),d=n(4),u=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Subject render"),r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),this.props.onChangePage()}.bind(this)},this.props.title)),r.a.createElement("p",null,this.props.sub))}}]),n}(a.Component),m=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){console.log("TOC render");for(var e=[],t=this.props.data,n=0;n<t.length;)e.push(r.a.createElement("li",{key:t[n].id},r.a.createElement("a",{href:"/content/"+t[n].id},r.a.createElement("span",null),r.a.createElement("strong",{"data-id":t[n].id,onClick:function(e){e.preventDefault(),this.props.onChangePage(e.target.dataset.id)}.bind(this)},t[n].title)))),n+=1;return r.a.createElement("nav",null,r.a.createElement("ul",null,e))}}]),n}(a.Component),p=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Subject render"),r.a.createElement("div",{id:"buttons"},r.a.createElement("ul",null,r.a.createElement("li",{class:"create"},r.a.createElement("a",{href:"/create",onClick:function(e){e.preventDefault(),this.props.onChangeMode("create")}.bind(this)},"create")),r.a.createElement("li",{class:"update"},r.a.createElement("a",{href:"/update",onClick:function(e){e.preventDefault(),this.props.onChangeMode("update")}.bind(this)},"update")),r.a.createElement("li",{class:"delete"},r.a.createElement("input",{type:"button",value:"delete",onClick:function(e){e.preventDefault(),this.props.onChangeMode("delete")}.bind(this)}))))}}]),n}(a.Component),h=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Content render"),r.a.createElement("article",{id:"primary"},r.a.createElement("h2",null,this.props.title),r.a.createElement("p",null,this.props.desc.split("\n").map((function(e){return r.a.createElement("span",null,e,r.a.createElement("br",null))}))))}}]),n}(a.Component),f=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return console.log("Content render"),r.a.createElement("article",{id:"primary"},r.a.createElement("h2",null,"Create"),r.a.createElement("form",{action:"/create_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.desc.value),alert("Submit!!")}.bind(this)},r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"title"})),r.a.createElement("p",null,r.a.createElement("textarea",{name:"desc",placeholder:"description"})),r.a.createElement("p",null,r.a.createElement("input",{type:"submit"}))))}}]),n}(a.Component),b=n(8),E=n(5),v=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={id:a.props.data.id,title:a.props.data.title,desc:a.props.data.desc},a.inputFormHandler=a.inputFormHandler.bind(Object(E.a)(a)),a}return Object(o.a)(n,[{key:"inputFormHandler",value:function(e){this.setState(Object(b.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return console.log("Content render"),r.a.createElement("article",{id:"primary"},r.a.createElement("h2",null,"Update"),r.a.createElement("form",{action:"/update_process",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(this.state.id,this.state.title,this.state.desc),alert("Submit!!")}.bind(this)},r.a.createElement("input",{type:"hidden",name:"id",value:this.state.id}),r.a.createElement("p",null,r.a.createElement("input",{type:"text",name:"title",placeholder:"title",value:this.state.title,onChange:this.inputFormHandler})),r.a.createElement("p",null,r.a.createElement("textarea",{name:"desc",placeholder:"description",value:this.state.desc,onChange:this.inputFormHandler})),r.a.createElement("p",null,r.a.createElement("input",{type:"submit"}))))}}]),n}(a.Component),g=n(9),y=n.n(g),j=(n(17),function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).max_content_id=3,a.state={mode:"welcome",selected_content_id:2,subject:{title:"To do list",sub:"What should I do today?"},welcome:{title:"\uc624\ub298 \ud560\uc77c\uc740?",desc:"\uacc4\ud68d\uc801\uc73c\ub85c \uc0b4\uc790."},contents:[{id:1,title:"\ub9c8\ud2b8\uac00\uc11c \uc7a5\ubcf4\uae30",desc:"* Shopping List\n\n\uc0ac\uacfc 3\uac1c\n\ubc00\uac00\ub8e8 \ud55c \ubd09\uc9c0\n\uacc4\ub780 \ud55c \ud310\n\uc62c\ub9ac\ube0c\uc720\n\ub3fc\uc9c0\uace0\uae30 \ud55c \uadfc"},{id:2,title:"\uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8 \uacf5\ubd80\ud558\uae30",desc:"- \uc54c\uace0\ub9ac\uc998 \ubb38\uc81c \ud480\uae30\n\n- \uc608\uc81c \ub530\ub77c\uc11c \ud480\uc5b4\ubcf4\uae30\n\n- \uc720\ud29c\ube0c \uac15\uc758\ub4e3\uae30"},{id:3,title:"\uce5c\uad6c\ub791 \uc800\ub141 \uc57d\uc18d",desc:"\ucf54\ub85c\ub098 \ub55c\uc5d0 \uac71\uc815\ub418\uae30\ub294 \ud558\uc9c0\ub9cc\n\ub9c8\uc2a4\ud06c\ub97c \uaf2d \uc4f0\uace0\n\uc0ac\ub78c \uc801\uc740 \ub3d9\ub124\uc5d0\uc11c \ub9cc\ub098\uc790."}]},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.rellax=new y.a(".rellax")}},{key:"getReadContent",value:function(){for(var e=0;e<this.state.contents.length;){var t=this.state.contents[e];if(t.id===this.state.selected_content_id)return t;e+=1}}},{key:"getContent",value:function(){var e,t,n,a=null;return"welcome"===this.state.mode?(e=this.state.welcome.title,t=this.state.welcome.desc,n=r.a.createElement(h,{title:e,desc:t})):"read"===this.state.mode?(a=this.getReadContent(),n=r.a.createElement(h,{title:a.title,desc:a.desc})):"create"===this.state.mode?n=r.a.createElement(f,{onSubmit:function(e,t){this.max_content_id=this.max_content_id+1;var n=this.state.contents.concat({id:this.max_content_id,title:e,desc:t});this.setState({contents:n,mode:"read",selected_content_id:this.max_content_id})}.bind(this)}):"update"===this.state.mode&&(a=this.getReadContent(),n=r.a.createElement(v,{data:a,onSubmit:function(e,t,n){for(var a=Array.from(this.state.contents),r=0;r<a.length;){if(a[r].id===e){a[r]={id:e,title:t,desc:n};break}r+=1}this.setState({contents:a,mode:"read"})}.bind(this)})),n}},{key:"render",value:function(){return console.log("App render"),r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"bg"}),r.a.createElement("div",{className:"rellax square",style:{transform:"rotate(45deg)"},"data-rellax-speed":"4"}),r.a.createElement("div",{className:"rellax ractangle",style:{transform:"rotate(45deg)"},"data-rellax-speed":"7"}),r.a.createElement("div",{className:"rellax circle",style:{transform:"rotate(45deg)"},"data-rellax-speed":"1"}),r.a.createElement("div",{className:"rellax square small",style:{transform:"rotate(45deg)"},"data-rellax-speed":"12"}),r.a.createElement(u,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){this.setState({mode:"welcome"})}.bind(this)}),r.a.createElement(m,{onChangePage:function(e){this.setState({mode:"read",selected_content_id:Number(e)})}.bind(this),data:this.state.contents}),r.a.createElement("main",null,this.getContent(),r.a.createElement(p,{onChangeMode:function(e){if("delete"===e){if(window.confirm("really?")){for(var t=Array.from(this.state.contents),n=0;n<this.state.contents.length;){if(t[n].id===this.state.selected_content_id){t.splice(n,1);break}n+=1}this.setState({mode:"welcome",contents:t}),alert("deleted!")}}else this.setState({mode:e})}.bind(this)})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.14c1c6d6.chunk.js.map