(this["webpackJsonpgraphql-checklist"]=this["webpackJsonpgraphql-checklist"]||[]).push([[0],{77:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(5),o=n(59),c=n(24),i=n.n(c),s=n(38),u=n(30),d=n(29),l=n(22),p=n.n(l),b=n(78);function f(){var e=Object(d.a)(["\n  mutation deleteTodo($id: uuid!) {\n    delete_todos(where: {id: {_eq: $id }}) {\n      returning {\n        done\n        id\n        text\n      }\n    }\n  }\n"]);return f=function(){return e},e}function h(){var e=Object(d.a)(["\nmutation addTodo($text: String!) {\n  insert_todos(objects: {text: $text}) {\n    returning {\n      text\n      id\n      done\n    }\n  }\n}\n"]);return h=function(){return e},e}function j(){var e=Object(d.a)(["\n  mutation toggleTodo($id: uuid!, $done: Boolean!) {\n    update_todos(where: {id: {_eq: $id}}, _set: {done: $done}) {\n      returning {\n        done\n        id\n        text\n      }\n    }\n  }\n"]);return j=function(){return e},e}function x(){var e=Object(d.a)(["\n  query getTodos {\n    todos {\n      done\n      id\n      text\n    }\n  }\n"]);return x=function(){return e},e}var m=p()(x()),O=p()(j()),v=p()(h()),g=p()(f());var y=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(b.useQuery)(m),d=c.data,l=c.loading,p=c.error,f=Object(b.useMutation)(O),h=Object(u.a)(f,1)[0],j=Object(b.useMutation)(g),x=Object(u.a)(j,1)[0],y=Object(b.useMutation)(v,{onCompleted:function(){return o("")}}),w=Object(u.a)(y,1)[0];function k(){return(k=Object(s.a)(i.a.mark((function e(t){var n,r,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=t.done,e.next=3,h({variables:{id:n,done:!r}});case 3:a=e.sent,console.log("toggled todo",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(){return(q=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.id,!window.confirm("Do you want to delete this todo?")){e.next=7;break}return e.next=5,x({variables:{id:n},update:function(e){var t=e.readQuery({query:m}).todos.filter((function(e){return e.id!==n}));e.writeQuery({query:m,data:{todos:t}})}});case 5:r=e.sent,console.log("deleted todo",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=Object(s.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n.trim()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,w({variables:{text:n},refetchQueries:[{query:m}]});case 5:r=e.sent,console.log("added todo",r);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l?Object(r.jsx)("div",{children:"Loading todos..."}):p?Object(r.jsx)("div",{children:"Error fetching todos!"}):Object(r.jsxs)("div",{className:"vh-100 code flex flex-column items-center bg-purple white pa3 fl-1",children:[Object(r.jsxs)("h1",{className:"f2-l",children:["GraphQL Checklist",Object(r.jsx)("span",{role:"img","aria-label":"Checkmark",children:"\u2705"})]}),Object(r.jsxs)("form",{onSubmit:function(e){return N.apply(this,arguments)},className:"mb3",children:[Object(r.jsx)("input",{className:"pa2 f4 b--dashed",type:"text",placeholder:"Write your todo",onChange:function(e){return o(e.target.value)},value:n}),Object(r.jsx)("button",{className:"pa2 f4 bg-green",type:"submit",children:"Create"})]}),Object(r.jsx)("div",{className:"flex items-center justify-center flex-column",children:d.todos.map((function(e){return Object(r.jsxs)("p",{onDoubleClick:function(){return function(e){return k.apply(this,arguments)}(e)},children:[Object(r.jsx)("span",{className:"pointer list pa1 f3 ".concat(e.done&&"strike"),children:e.text}),Object(r.jsx)("button",{onClick:function(){return function(e){return q.apply(this,arguments)}(e)},className:"bg-transparent bn f4",children:Object(r.jsx)("span",{className:"red",children:"\xd7"})})]},e.id)}))})]})},w=new(n(43).a)({uri:"https://react-todo-graphql2.hasura.app/v1/graphql",headers:{"x-hasura-admin-secret":"dazdraperma"}});Object(o.render)(Object(r.jsx)(b.ApolloProvider,{client:w,children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.db59c806.chunk.js.map