(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-644b459e"],{"2b6e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"PassWorld"}},[s("van-nav-bar",{attrs:{title:"设置密码","left-text":"返回","right-text":"跳过","left-arrow":""},on:{"click-left":t.onClickLeft,"click-right":t.onClickRight}}),s("div",{staticClass:"box-pass"},[s("div",{staticClass:"login-password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ps1,expression:"ps1"}],attrs:{type:"text",placeholder:"请设置登录密码"},domProps:{value:t.ps1},on:{input:function(e){e.target.composing||(t.ps1=e.target.value)}}})]),s("div",{staticClass:"login-password"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.ps2,expression:"ps2"}],attrs:{type:"text",placeholder:"请再次输入密码"},domProps:{value:t.ps2},on:{input:function(e){e.target.composing||(t.ps2=e.target.value)}}})])]),s("div",{staticClass:"login-submit"},[s("van-button",{attrs:{color:"linear-gradient(to right, #4bb0ff, #6149f6)",size:"large",round:""},on:{click:t.send}},[t._v(" 确定 ")])],1)],1)},o=[],a={name:"PassWorld",data:function(){return{ps1:"",ps2:""}},methods:{onClickLeft:function(){alert(1),window.history.go(-1)},onClickRight:function(){alert(2)},send:function(){var t=this,e=localStorage.getItem("L1uEanLogin"),s=JSON.parse(e);this.ps1==this.ps2&&this.http({url:"/api/app/password",method:"post",data:{mobile:s.usertel,password:this.ps2,sms_code:s.useryanzheng}}).then((function(e){console.log(e),t.$router.push("/home/person")}))}},created:function(){},mounted:function(){}},i=a,r=(s("fec1"),s("9ca4")),l=Object(r["a"])(i,n,o,!1,null,"55f63f9e",null);e["default"]=l.exports},"35dc":function(t,e,s){},fec1:function(t,e,s){"use strict";var n=s("35dc"),o=s.n(n);o.a}}]);
//# sourceMappingURL=chunk-644b459e.b5c83939.js.map