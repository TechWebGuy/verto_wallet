(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[43],{"1cb9":function(t,e,a){"use strict";a.r(e);var render=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"text-black bg-white"},[a("div",{staticClass:"standard-content"},[a("h2",{staticClass:"standard-content--title"},[t._v("Put the words in the right order")]),a("div",{staticClass:"standard-content--body"},[a("words-order",{attrs:{words:t.mnemonic}})],1),a("div",{staticClass:"standard-content--footer"},[a("q-btn",{staticClass:"action-link back",attrs:{flat:"",color:"black","text-color":"white",label:"Back"}}),a("q-btn",{staticClass:"action-link next",attrs:{flat:"",color:"black","text-color":"white",label:"Next"}})],1)])])},n=[],s=a("967e"),o=a.n(s),r=(a("96cf"),a("fa84")),c=a.n(r),i=a("0b83"),l=a("04c6"),u=a("9224"),d=a("9bf1");d.default&&(d=d.default);var f={components:{WordsOrder:i["a"]},data:function data(){return{secrectWordsToken:"voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur ",pword:"",minimizedModal:!1,message:"",version:{},network:this.$store.state.settings.network,configPath:""}},mounted:function mounted(){this.version=u["a"],this.setupPlatformPath()},methods:{setupPlatformPath:function setupPlatformPath(){var t=this;return c()(o.a.mark((function _callee(){return o.a.wrap((function _callee$(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d.filePath();case 2:t.configPath=e.sent;case 3:case"end":return e.stop()}}),_callee)})))()},goChangePassword:function goChangePassword(){this.$router.push({path:"/change-password"})},setNetwork:function setNetwork(){this.$store.dispatch("settings/toggleNetwork",this.network),this.$q.notify({message:"Network changed to ".concat(this.network),color:"positive"})},backupConfig:function backupConfig(){var t=this;return c()(o.a.mark((function _callee2(){return o.a.wrap((function _callee2$(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].backupConfig();case 3:t.$q.platform.is.android&&t.$q.notify({color:"positive",message:"Config Saved"}),e.next=8;break;case 6:e.prev=6,e.t0=e["catch"](0);case 8:case"end":return e.stop()}}),_callee2,null,[[0,6]])})))()}}},h=f,p=(a("d312"),a("2877")),w=Object(p["a"])(h,render,n,!1,null,"0d601c6a",null);e["default"]=w.exports},"1cbe":function(t,e,a){},d312:function(t,e,a){"use strict";var n=a("1cbe"),s=a.n(n);s.a}}]);