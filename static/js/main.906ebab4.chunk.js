(this.webpackJsonpnpx_robofriends=this.webpackJsonpnpx_robofriends||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o);n(12),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(13);var l=n(1),i=n(2),s=n(4),u=n(3),h=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(o,"?200x200"),alt:"photo"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n))))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(h,{key:e.id,id:e.id,name:e.name,email:e.email})})))},d=function(e){var t=e.searchChange;return r.a.createElement(a.Fragment,null,r.a.createElement("input",{className:"pa3 ba b--green bg-light-blue",type:"search",placeholder:"Search Robots",onChange:t}))},f=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid black",height:"500px"}},e.children)},b=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. Something went wrong"):this.props.children}}]),n}(a.Component),g=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},console.log("constructor"),e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount"),fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:a})))):r.a.createElement("h1",null,"Loading...")}}]),n}(a.Component));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.906ebab4.chunk.js.map