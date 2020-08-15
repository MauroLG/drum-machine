(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),s=(a(14),a(2)),d=a(3),c=a(1),l=a(5),u=a(4),m=(a(7),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={backgroundBtn:"",boxShadowBtn:"",outlineBtn:""},n.handleKeyPress=n.handleKeyPress.bind(Object(c.a)(n)),n.handleKeyUp=n.handleKeyUp.bind(Object(c.a)(n)),n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress),document.addEventListener("keyup",this.handleKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress),document.removeEventListener("keyup",this.handleKeyUp)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&(this.audio.play(),this.audio.currentTime=0,this.props.handleDisplay(this.props.id),this.setState({backgroundBtn:"#E06D48",boxShadowBtn:"inset 3px 3px 2px #BD5E3E",outlineBtn:"none"}))}},{key:"handleKeyUp",value:function(e){this.setState({backgroundBtn:"",boxShadowBtn:"",outlineBtn:""})}},{key:"handleClick",value:function(){this.audio.play(),this.audio.currentTime=0,this.props.handleDisplay(this.props.id)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"drum-pad",id:this.props.id,onClick:this.handleClick,style:{backgroundColor:this.state.backgroundBtn,boxShadow:this.state.boxShadowBtn,outlineBtn:this.state.outlineBtn}},r.a.createElement("p",null,this.props.keyTrigger),r.a.createElement("audio",{ref:function(t){return e.audio=t},className:"clip",src:this.props.url,id:this.props.keyTrigger}))}}]),a}(r.a.Component)),p=[{keyTrigger:"Q",keyCode:81,id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyTrigger:"W",keyCode:87,id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyTrigger:"E",keyCode:69,id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyTrigger:"A",keyCode:65,id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyTrigger:"S",keyCode:83,id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyTrigger:"D",keyCode:68,id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyTrigger:"Z",keyCode:90,id:"Kick-n-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyTrigger:"X",keyCode:88,id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyTrigger:"C",keyCode:67,id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={display:""},n.handleDisplay=n.handleDisplay.bind(Object(c.a)(n)),n}return Object(d.a)(a,[{key:"handleDisplay",value:function(e){this.setState({display:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"DRUM MACHINE")),r.a.createElement("div",{id:"drum-machine"},r.a.createElement("div",{className:"container-pad"},p.map((function(t){return r.a.createElement(m,{id:t.id,keyTrigger:t.keyTrigger,keyCode:t.keyCode,url:t.url,onClick:e.handleClick,onKeyDown:e.triggerKeyPress,handleDisplay:e.handleDisplay})}))),r.a.createElement("div",{id:"display"},this.state.display)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.f5aa64e5.chunk.js.map