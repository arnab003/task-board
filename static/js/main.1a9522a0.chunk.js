(this["webpackJsonptask-board"]=this["webpackJsonptask-board"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(7),l=a.n(i),s=(a(13),a(1)),o=a(2),c=a(3),d=a(5),m=a(4),u=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={editing:!1,content:""},e.deleteTask=function(){e.props.deleteTask(e.props.card.id,e.props.columnId)},e.setCardDimention=function(){var t,a=e.elem;a&&(t=a.getBoundingClientRect(),e.props.setCardDimention(e.props.card.id,t))},e}return Object(c.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.textInput.value.trim(),a=this.props.columnId;t&&this.props.updateCardContent&&(this.props.updateCardContent(t,a,this.props.card.id),this.setEditing(!1)),this.textInput.value=""}},{key:"setEditing",value:function(e,t){this.setState({editing:e,content:t})}},{key:"componentDidMount",value:function(){this.setCardDimention()}},{key:"componentDidUpdate",value:function(){this.setCardDimention()}},{key:"render",value:function(){var e=this,t=this.props,a=t.card,n=t.handleCardDragStart;return this.state.editing?r.a.createElement("div",null,r.a.createElement("form",{className:"task-card add-task-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{type:"text",autoFocus:!0,ref:function(t){return e.textInput=t},defaultValue:this.state.content}),r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn add-update-button "},"Update"),r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn cancel-button red darken-1",onClick:function(){return e.setEditing(!1)}},"Cancel")))):r.a.createElement("div",null,r.a.createElement("div",{className:"task-card z-depth-2",onClick:function(t){return e.setEditing(!0,t.target.innerHTML)},ref:function(t){return e.elem=t},draggable:"true",id:a.id,onDragStart:n},a.content),r.a.createElement("div",{onClick:this.deleteTask},r.a.createElement("a",{className:"del-task",title:"Delete Task"},r.a.createElement("i",{className:"small material-icons"},"delete_forever"))))}}]),a}(n.Component),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={editing:!1},e}return Object(c.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.textInput.value.trim(),a=this.props.columnId;t&&this.props.addNewCard&&(this.props.addNewCard(t,a),this.setEditing(!1)),this.textInput.value=""}},{key:"setEditing",value:function(e){this.setState({editing:e})}},{key:"render",value:function(){var e=this;return this.state.editing?r.a.createElement("div",null,r.a.createElement("form",{className:"task-card add-task-form",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("input",{type:"text",autoFocus:!0,ref:function(t){return e.textInput=t},"aria-label":"Add a task"}),r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn add-update-button "},"Add Task"),r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn cancel-button red darken-1",onClick:function(){return e.setEditing(!1)}},"Cancel")))):r.a.createElement("div",{onClick:function(){return e.setEditing(!0)}},r.a.createElement("a",{className:"waves-effect waves-light btn-small light-green darken-2"},r.a.createElement("i",{className:"material-icons left"},"add"),"Add Task"))}}]),a}(n.Component),g=function(e){var t=e.cards&&e.cards.map((function(t,a){return r.a.createElement("li",{key:a},r.a.createElement(u,{card:t,columnId:e.id,updateCardContent:e.updateCardContent,setCardDimention:e.setCardDimention,handleCardDragStart:e.handleCardDragStart,deleteTask:e.deleteTask}))}));return r.a.createElement("div",null,r.a.createElement("ul",{className:"list"},r.a.createElement("li",null,r.a.createElement("div",null,r.a.createElement("div",{className:"column-header"},r.a.createElement("h5",{className:"name-header"},e.column)),r.a.createElement("div",{className:"column-header-del"},r.a.createElement("a",{className:"del-task",title:"Delete List",onClick:e.deleteColumn},r.a.createElement("i",{className:"material-icons"},"close"))))),r.a.createElement("li",null,r.a.createElement("div",{className:"partition"})),t,r.a.createElement("li",{className:"add-list-wrapper"},r.a.createElement(f,{columnId:e.id,addNewCard:e.addNewCard}))))},p=function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper grey darken-4 z-depth-2"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/arnab003/task-board",className:"brand-logo"},"Kanban Board"))))},v=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;if(Object(o.a)(this,a),(n=t.call(this,e)).getDimention=function(e){for(var t=JSON.parse(localStorage.getItem("dimention")),a=!1,n=0;n<t.length;n++)if(t[n].id===e){a=!0;break}if(a)return{dimentionArr:t,index:n}},n.setCardDimention=function(e,t){var a=JSON.parse(localStorage.getItem("dimention")),r=n.getDimention(e);r?(a=r.dimentionArr)[r.index].dimention=t:a.push({id:e,dimention:t}),localStorage.setItem("dimention",JSON.stringify(a))},n.addNewCard=function(e,t){var a=JSON.parse(localStorage.getItem("tasks")),r={content:e,columnId:t,id:(new Date).valueOf()};a[t].cards.push(r),n.setState(Object(s.a)({},n.state,{tasks:a})),localStorage.setItem("tasks",JSON.stringify(a))},n.updateCardContent=function(e,t,a){var r=JSON.parse(localStorage.getItem("tasks"));r[t].cards.forEach((function(t){t.id===a&&(t.content=e)})),n.setState(Object(s.a)({},n.state,{tasks:r})),localStorage.setItem("tasks",JSON.stringify(r))},n.handleCardDragStart=function(e,t){var a=n.getDimention(Number(e.currentTarget.id)),r=e.pageY-a.dimentionArr[a.index].dimention.top,i={cardId:e.currentTarget.id,fromColumn:t,dragStartPageY:e.pageY,diff:r};localStorage.setItem("dragInfo",JSON.stringify(i))},n.handleDragOver=function(e){e.preventDefault()},n.arraymove=function(e,t,a){var n=e[t];e.splice(t,1),e.splice(a,0,n)},n.handleDrop=function(e,t){for(var a,r=JSON.parse(localStorage.getItem("dragInfo")),i=r.yVal,l=JSON.parse(localStorage.getItem("tasks")),o=l[r.fromColumn].cards,c=o.find((function(e){return e.id===Number(r.cardId)})),d=o.findIndex((function(e){return e.id===Number(r.cardId)})),m=l[t].cards.length,u=0;u<l[t].cards.length;u++)if((a=n.getDimention(Number(l[t].cards[u].id))).dimentionArr[a.index].dimention.bottom>i){m=u;break}t===Number(r.fromColumn)?m!==d&&m!==d+1&&n.arraymove(l[r.fromColumn].cards,d,d-m<0?m-1:m):(l[r.fromColumn].cards.splice(d,1),l[t].cards.splice(m,0,Object(s.a)({},c,{columnId:Number(t)}))),n.setState(Object(s.a)({},n.state,{tasks:l})),localStorage.setItem("tasks",JSON.stringify(l)),localStorage.removeItem("dragInfo")},n.handleDragOver=function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem("dragInfo"));t.yVal=e.pageY-t.diff,localStorage.setItem("dragInfo",JSON.stringify(t))},n.deleteTask=function(e,t){var a=JSON.parse(localStorage.getItem("tasks")),r=a[t].cards.filter((function(t){return t.id!==e}));a[t].cards=r,n.setState(Object(s.a)({},n.state,{tasks:a})),localStorage.setItem("tasks",JSON.stringify(a))},n.deleteColumn=function(e){var t=JSON.parse(localStorage.getItem("tasks"));delete t[e],n.setState(Object(s.a)({},n.state,{tasks:t})),localStorage.setItem("tasks",JSON.stringify(t))},localStorage.getItem("tasks")){var r=JSON.parse(localStorage.getItem("tasks"));n.state={tasks:r,columnEditing:JSON.parse(localStorage.getItem("columnEditing"))}}else n.state={tasks:[{column:"ToDo",id:0,cards:[{content:"Sample Task 1",columnId:0,id:0},{content:"Sample Task 2",columnId:0,id:1}]},{column:"InProgress",id:1,cards:[{content:"Sample Task 3",columnId:1,id:2}]},{column:"Done",id:2,cards:[{content:"Sample Task 4",columnId:2,id:3}]}],columnEditing:!1},localStorage.setItem("tasks",JSON.stringify(n.state.tasks)),localStorage.setItem("dimention",JSON.stringify([])),localStorage.setItem("columnEditing",JSON.stringify(!1));return n}return Object(c.a)(a,[{key:"setEditing",value:function(e){this.setState(Object(s.a)({},this.state,{columnEditing:e})),localStorage.setItem("columnEditing",JSON.stringify(e))}},{key:"onSubmitListName",value:function(e){e.preventDefault();var t=this.textInput.value.trim(),a=JSON.parse(localStorage.getItem("tasks"));t&&a.push({column:t,id:a.length,cards:[]}),this.setState({tasks:a,columnEditing:!1}),localStorage.setItem("tasks",JSON.stringify(a)),localStorage.setItem("columnEditing",JSON.stringify(!1)),this.textInput.value=""}},{key:"render",value:function(){var e=this,t=this.state.tasks.map((function(t,a){return t?r.a.createElement("div",{className:"transparent-wrapper",key:a,onDragOver:e.handleDragOver,onDrop:function(a){return e.handleDrop(a,t.id)}},r.a.createElement("li",{className:"column-wrapper z-depth-3"},r.a.createElement(g,Object.assign({},t,{setCardDimention:e.setCardDimention,updateCardContent:e.updateCardContent,handleCardDragStart:function(a){return e.handleCardDragStart(a,t.id)},addNewCard:e.addNewCard,deleteTask:e.deleteTask,deleteColumn:function(){return e.deleteColumn(t.id)}})))):null})),a=this.state.columnEditing?r.a.createElement("div",null,r.a.createElement("form",{className:"task-card add-column-form",onSubmit:function(t){return e.onSubmitListName(t)}},r.a.createElement("input",{type:"text",autoFocus:!0,ref:function(t){return e.textInput=t},"aria-label":"Add a List"}),r.a.createElement("div",null,r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn add-update-button "},"Add List"),r.a.createElement("button",{className:"waves-effect waves-light btn confirm-btn cancel-button red darken-1",onClick:function(){return e.setEditing(!1)}},"Cancel")))):r.a.createElement("div",{onClick:function(){return e.setEditing(!0)}},r.a.createElement("a",{className:"btn-floating btn waves-effect waves-light light-green darken-2 z-depth-2"},r.a.createElement("i",{className:"material-icons"},"add")));return r.a.createElement("div",null,r.a.createElement(p,null),r.a.createElement("div",{onDragOver:this.handleDragOver},r.a.createElement("div",{className:"wrapper-cont"},r.a.createElement("ul",{className:"task-column"},t,r.a.createElement("li",{className:"column-wrapper add-column"},a)))))}}]),a}(n.Component);a(14);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a9522a0.chunk.js.map