(this["webpackJsonpshivanis-birthday"]=this["webpackJsonpshivanis-birthday"]||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},15:function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),s=a(7),c=a.n(s),r=(a(12),a(3)),o=a(4),d=a(6),h=a(5),p=(a(13),a.p+"static/media/1.0f28d9e3.jpg"),u=a.p+"static/media/2.3c65f719.jpg",j=a.p+"static/media/3.140e60d3.jpg",l=a.p+"static/media/3a.3edab12c.jpg",v=a.p+"static/media/4.99ea281e.jpg",m=a.p+"static/media/5.ffa506c8.jpg",b=a.p+"static/media/6.85910c4a.jpg",f=a.p+"static/media/7.d5a30191.jpg",g=a.p+"static/media/9.cf745b4e.jpg",y=a.p+"static/media/11.2930d9a6.jpg",O=a.p+"static/media/13.74168de2.jpg",x=a.p+"static/media/14.22b6519a.jpg",D=a.p+"static/media/15.f0b36e89.jpg",w=a.p+"static/media/16.506cc8a0.jpg",k=a.p+"static/media/17.e30a2563.jpg",M=a.p+"static/media/18.2baf84d6.jpg",I=a.p+"static/media/19.0fec94b4.jpg",T=a.p+"static/media/20.d0a1bb41.jpg",B=a(0),C=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this,t)).interval=void 0,i.birthday=i.getNextBirthday(),i.state={time:Date.now()},i}return Object(o.a)(a,[{key:"getNextBirthday",value:function(){var t=new Date(Date.now()).getFullYear(),e=new Date(t,7,24);return e.getTime()-Date.now()<0&&(e=new Date(t+1,7,24)),e}},{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.setState({time:Date.now()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"getDateDiff",value:function(){var t=Math.abs(this.birthday.getTime()-this.state.time)/1e3,e=Math.floor(t/86400);t-=86400*e;var a=Math.floor(t/3600)%24;t-=3600*a;var i=Math.floor(t/60)%60;return t-=60*i,{days:e,hours:a,minutes:i,seconds:Math.floor(t%60)}}},{key:"isToday",value:function(t){var e=new Date;return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()}},{key:"render",value:function(){var t,e=this.getDateDiff();return t=this.isToday(this.birthday)?Object(B.jsx)("p",{children:'"It\'s TODAY!! Happy Birthday Shivani!!"'}):Object(B.jsxs)("div",{children:[Object(B.jsxs)("p",{children:[" ",e.days," days"]}),Object(B.jsxs)("p",{children:[" ",e.hours," hours"]}),Object(B.jsxs)("p",{children:[" ",e.minutes," minutes"]}),Object(B.jsxs)("p",{children:[" ",e.seconds," seconds"]})]}),Object(B.jsxs)("div",{className:"App",children:[Object(B.jsxs)("header",{className:"App-header",children:[Object(B.jsx)("p",{children:"Countdown to Shivani's Birthday"}),t]}),Object(B.jsx)(S,{})]})}}]),a}(n.a.Component),S=function(t){Object(d.a)(a,t);var e=Object(h.a)(a);function a(t){var i;return Object(r.a)(this,a),(i=e.call(this,t)).interval=void 0,i.photos=[p,u,j,l,v,m,b,f,g,y,O,x,D,w,k,M,I,T],i.state={index:0},i}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){return t.setState({index:(t.state.index+1)%t.photos.length})}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(B.jsx)("div",{className:"PhotoViewer",children:Object(B.jsx)("img",{src:this.photos[this.state.index]})})}}]),a}(n.a.Component),F=C,N=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,16)).then((function(e){var a=e.getCLS,i=e.getFID,n=e.getFCP,s=e.getLCP,c=e.getTTFB;a(t),i(t),n(t),s(t),c(t)}))};c.a.render(Object(B.jsx)(n.a.StrictMode,{children:Object(B.jsx)(F,{})}),document.getElementById("root")),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.e7688d78.chunk.js.map