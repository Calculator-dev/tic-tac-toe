(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,,,,function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(8),s=c.n(r),o=(c(7),c(2)),l=(c(13),c(14),c(15),c(16),c(0)),i=function(e){var t=e.toggleChecked,c=Object(n.useState)(""),a=Object(o.a)(c,2),r=a[0],s=a[1],i=Object(n.useState)(""),u=Object(o.a)(i,2),j=u[0],b=u[1];return Object(l.jsx)("div",{className:"form-container",children:Object(l.jsxs)("form",{className:"login-form",children:[Object(l.jsx)("h1",{className:"welcome-message",children:"Welcome to Tic Tac Toe"}),Object(l.jsx)("p",{className:"instructions-message",children:"Please enter player names and click start to play"}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{className:"player1",children:["Name Player 1:",Object(l.jsx)("input",{value:r,onChange:function(e){return s(e.target.value)},required:!0})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{className:"player2",children:["Name Player 2:",Object(l.jsx)("input",{value:j,onChange:function(e){return b(e.target.value)},required:!0})]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{className:"start-button",type:"submit",onClick:function(e){e.preventDefault(),/^$/.test(r)||/^$/.test(j)||(s(r),b(j),localStorage.setItem("player",r),localStorage.setItem("secondPlayer",j),t())},children:"START"})]})})},u=c(4),j=function(e){var t=e.value,c=e.onClick;return Object(l.jsx)("button",{className:"square-button",onClick:function(){return c()},children:t})},b=function(e){var t=e.squares,c=e.handleClick,n=e.toggleChecked;return Object(l.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(l.jsx)(j,{value:e,onClick:function(){return c(t)},toggleChecked:n},t)}))})},O=function(e){var t=e.setShow,c=e.setBoard,a=e.setMsg,r=e.calculateWinner,s=e.board,i=e.current,u=e.wins,j=Object(n.useState)(!1),b=Object(o.a)(j,2),O=b[0],d=b[1],f=function(e){return r(e)?"Congratulations ".concat(i," you won "):e.every(Boolean)?"Draw":void 0}(s);return Object(l.jsxs)("div",{className:"end-game",children:[Object(l.jsx)("p",{className:"status",children:f}),Object(l.jsxs)("div",{className:"div-buttons",children:[Object(l.jsx)("button",{className:"retry-button",onClick:function(){c(Array(9).fill(null)),t(),a("")},children:"TRY AGAIN"}),!O&&Object(l.jsx)("button",{className:"history-button",onClick:function(){d(!1),d((function(e){return!e}))},children:"GAME HISTORY"}),Object(l.jsx)("button",{className:"reset-button",onClick:function(){window.location.reload()},children:"RESET"})]}),O&&Object(l.jsx)("div",{className:"wins",children:Object(l.jsx)("ul",{children:u.map((function(e,t){return Object(l.jsx)("li",{className:"win-messages",children:Object(l.jsx)("span",{children:e})},t)}))})})]})},d=function(e){var t=e.counterPlayerOne,c=e.counterPlayerTwo,n=e.counterDraw,a=localStorage.getItem("player"),r=localStorage.getItem("secondPlayer");return Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"navbar-list",children:[Object(l.jsx)("li",{className:"game-name",children:"Tic Tac Toe"}),Object(l.jsxs)("li",{className:"players-win",children:[a," ",t," - ",c," ",r]}),Object(l.jsxs)("li",{className:"players-draw",children:["Draw",": ",n," "]})]})})},f=function(){var e=Object(n.useState)(Array(9).fill(null)),t=Object(o.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!0),s=Object(o.a)(r,2),i=s[0],j=s[1],f=Object(n.useState)(""),m=Object(o.a)(f,2),h=m[0],g=m[1],x=Object(n.useState)(0),v=Object(o.a)(x,2),w=v[0],p=v[1],S=Object(n.useState)(0),y=Object(o.a)(S,2),N=y[0],C=y[1],T=Object(n.useState)(0),k=Object(o.a)(T,2),I=k[0],P=k[1],D=Object(n.useState)(!1),A=Object(o.a)(D,2),E=A[0],q=A[1],B=Object(n.useState)([]),M=Object(o.a)(B,2),J=M[0],R=M[1],W=localStorage.getItem("player"),G=localStorage.getItem("secondPlayer"),H=new Date,X=(new Date).toLocaleDateString(),Y=H.getHours()+":"+H.getMinutes(),$=i?G:W,L=function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],c=0;c<t.length;c++){var n=Object(o.a)(t[c],3),a=n[0],r=n[1],s=n[2];if(e[a]&&e[a]===e[r]&&e[a]===e[s])return e[a]}return null},z=L(c);return Object(n.useEffect)((function(){z&&!i?(p((function(e){return e+1})),q(!0),R((function(e){return[].concat(Object(u.a)(e),[X+" "+Y+" "+W+" "+"vs "+G+" "+$])}))):z&&i?(C((function(e){return e+1})),q(!0),R((function(e){return[].concat(Object(u.a)(e),[X+" "+Y+" "+W+" "+"vs "+G+" "+$])}))):c.every(Boolean)&&(P((function(e){return e+1})),q(!0),R((function(e){return[].concat(Object(u.a)(e),[X+" "+Y+" "+W+" "+"vs "+G+" Draw"])})))}),[z,i,c,$,X,Y,W,G,J.winner]),Object(n.useEffect)((function(){var e=localStorage.getItem("wins");e&&R(JSON.parse(e))}),[]),Object(n.useEffect)((function(){localStorage.setItem("wins",JSON.stringify(J))})),window.onunload=function(){localStorage.removeItem("wins")},Object(l.jsxs)("div",{className:"board-container",children:[Object(l.jsx)(d,{counterPlayerOne:w,counterPlayerTwo:N,counterDraw:I}),!E&&Object(l.jsx)("p",{className:"next-player",children:i?W+" is on the move with X":G+" is on the move with O"}),E&&Object(l.jsx)(O,{ShowToggle:function(){q((function(e){return!e}))},setBoard:a,setMsg:g,calculateWinner:L,board:c,current:$,setShow:q,wins:J}),Object(l.jsx)("br",{}),!E&&Object(l.jsx)(b,{handleClick:function(e){var t=Object(u.a)(c);if(t[e])return g("Choose unoccupied cell!");z||(t[e]=i?"X":"O",a(t),j(!i),g(""))},squares:c}),Object(l.jsx)("p",{className:"message",children:h})]})},m=function(){return Object(l.jsx)("footer",{children:"Paragon Tic Tac Toe 2021 @ Copyright, All rights reserved"})},h=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"App",children:[!c&&Object(l.jsx)(i,{toggleChecked:function(){a((function(e){return!e}))}}),c&&Object(l.jsx)(f,{}),c&&Object(l.jsx)(m,{})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.311b6cad.chunk.js.map