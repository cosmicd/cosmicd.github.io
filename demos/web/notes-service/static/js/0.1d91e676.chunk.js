webpackJsonp([0],{708:function(e,t,n){"use strict";function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function r(o,a){try{var i=t[o](a),s=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(s).then(function(e){r("next",e)},function(e){r("throw",e)});e(s)}return r("next")})}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(48),l=n.n(s),c=n(0),u=n.n(c),f=n(26),p=n(152),d=n(279),h=n(715),v=(n.n(h),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),m=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleNoteClick=function(e){e.preventDefault(),n.props.history.push(e.currentTarget.getAttribute("href"))},n.state={isLoading:!0,notes:[]},n}return i(t,e),v(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=r(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.isAuthenticated){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,this.notes();case 5:t=e.sent,this.setState({notes:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),alert(e.t0);case 12:this.setState({isLoading:!1});case 13:case"end":return e.stop()}},e,this,[[2,9]])}));return e}()},{key:"notes",value:function(){return Object(d.b)({path:"/notes"})}},{key:"renderNoteList",value:function(e){var t=this;return[{}].concat(e.reverse()).map(function(e,n){return 0!==n?u.a.createElement(p.h,{key:e.rKey,href:"/notes/"+e.rKey,onClick:t.handleNoteClick,header:e.content.trim().split("\n")[0]},"Created: "+new Date(e.createdAt).toLocaleString()," Updated: ","never"===e.updated?"never":new Date(e.updated).toLocaleString()):u.a.createElement(p.h,{key:"new",href:"/notes/new",onClick:t.handleNoteClick},u.a.createElement("h4",null,u.a.createElement("b",null,"\uff0b")," Create a new note"))})}},{key:"renderLander",value:function(){return u.a.createElement("div",{className:"lander"},u.a.createElement("h1",null,"Notes"),u.a.createElement("p",null,"Notes service demo. Do not save any data; it will be deleted."),u.a.createElement("div",null,u.a.createElement(f.b,{to:"/login",className:"btn btn-info btn-lg"},"Login"),u.a.createElement(f.b,{to:"/signup",className:"btn btn-success btn-lg"},"Signup")))}},{key:"renderNotes",value:function(){return u.a.createElement("div",{className:"notes"},u.a.createElement(p.l,null,"Your Notes"),u.a.createElement(p.g,null,!this.state.isLoading&&this.renderNoteList(this.state.notes)))}},{key:"render",value:function(){return u.a.createElement("div",{className:"NoteList"},this.props.isAuthenticated?this.renderNotes():this.renderLander())}}]),t}(c.Component);t.default=m},715:function(e,t,n){var r=n(716);"string"===typeof r&&(r=[[e.i,r,""]]);var o={hmr:!1};o.transform=void 0;n(704)(r,o);r.locals&&(e.exports=r.locals)},716:function(e,t,n){t=e.exports=n(703)(!1),t.push([e.i,".NoteList .lander{padding:80px 0;text-align:center}.NoteList .lander h1{font-family:Open Sans,sans-serif;font-weight:600}.NoteList .lander p{color:#999}.NoteList .lander div{padding-top:20px}.NoteList .lander div a:first-child{margin-right:20px}.NoteList .notes h4{font-family:Open Sans,sans-serif;font-weight:600;overflow:hidden;line-height:1.5;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.NoteList .notes p{color:#666}",""])}});