(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[45],{"171e":function(t,e,s){"use strict";s.r(e);var render=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"column items-center justify-start login-page restore-page-wrapper",class:{"dark-theme":"true"===t.$store.state.settings.lightMode}},[s("div",{staticClass:"full-width full-height"},[s("img",{staticClass:"head-login",attrs:{src:"statics/login_ui_"+("true"===t.$store.state.settings.lightMode?"dark":"light")+".png",alt:"head-login"}}),s("div",{staticClass:"form_wrapper full-height column q-pa-lg"},[s("span",{staticClass:"text-h2 q-pl-md"},[t._v("VERTO")]),s("span",{staticClass:"text-h3 q-pl-md q-pr-md q-mt-md"},[t._v("Restore wallet")]),2==t.step?s("p",{staticClass:"q-pl-md q-pr-md q-mt-md"},[t._v("Enter your config password")]):t._e(),s("div",{staticClass:"password_wrapper q-pl-md q-pr-md"},[1==t.step?s("div",{staticClass:"full-width"},[s("div",{staticClass:"full-width q-pt-lg"},[s("q-file",{staticClass:"full-width",attrs:{dark:"true"===t.$store.state.settings.lightMode,error:t.fileError,"error-message":"Please select config file",accept:".config",outlined:"",label:"Select your config file"},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{attrs:{name:"attach_file"}})]},proxy:!0}],null,!1,478862664),model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),s("div",{staticClass:"unlock_restore flex justify-between items-end q-mt-xl"},[s("q-btn",{staticClass:"btn__blue unlock_btn",attrs:{unelevated:"",color:"grey-4",outline:"",size:"md","no-caps":"",label:"Continue"},on:{click:t.validateAndToNextstep}}),s("q-btn",{staticClass:"restore_btn",attrs:{flat:"",size:"md","no-caps":"",color:"grey-8",label:"Cancel"},on:{click:function(e){return t.$router.back()}}})],1)]):t._e(),2==t.step?s("div",{staticClass:"full-width q-pt-xs"},[s("div",{staticClass:"full-width q-mt-md q-pt-xs"},[s("div",[t._e(),s("q-input",{ref:"psswrd",staticClass:"q-mt-sm full-width",attrs:{autofocus:"",outlined:"",type:t.isPwd?"password":"text",dark:"true"===t.$store.state.settings.lightMode},on:{input:t.showSubmitKey,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.restoreConfig(e)}},scopedSlots:t._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"visibility_off":"visibility"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:t.addWallet.vertoPassword,callback:function(e){t.$set(t.addWallet,"vertoPassword",e)},expression:"addWallet.vertoPassword"}})],1)]),s("div",{staticClass:"unlock_restore flex justify-between items-end q-mt-sm"},[s("q-btn",{staticClass:"btn__blue unlock_btn",attrs:{unelevated:"",color:"grey-4",outline:"",size:"md","no-caps":"",label:"Continue"},on:{click:t.restoreConfig}}),s("q-btn",{staticClass:"restore_btn",attrs:{flat:"",size:"md","no-caps":"",color:"grey-8",label:"Back"},on:{click:function(e){t.step=1}}})],1)]):t._e()])])]),s("notify-message")],1)},r=[],i=s("967e"),a=s.n(i),o=(s("96cf"),s("fa84")),n=s.n(o),l=s("04c6"),c=s("8778"),u=s("2b0e"),d=s("f7ec"),p=s("adc8");u["default"].component("video-bg",d["a"]);var f={name:"RestoreConfig",components:{NotifyMessage:p["a"]},data:function data(){return{step:1,isPwd:!0,spinnervisible:!1,contractable:!0,submitKey:!1,fileEmpty:!1,unknownError:!1,incorrectPassword:!1,showNextButtonToPassword:!1,file:null,fileError:!1,returnto:"",addWallet:{walletName:"",address:"",addressPriv:"",vertoPassword:"",vertoPasswordError:""}}},created:function created(){this.returnto=this.$route.params.returnto},methods:{validateAndToNextstep:function validateAndToNextstep(){null!=this.file?this.step=2:this.fileError=!0},goback:function goback(){"settings"===this.returnto?this.$router.push("/settings"):"profile"===this.returnto?this.$router.push("/verto/profile"):this.$router.push(this.returnto)},showThePasswordScreen:function showThePasswordScreen(){this.showNextButtonToPassword&&this.$refs.stepper.next()},showSubmitKey:function showSubmitKey(){this.resetErrors(),this.addWallet.vertoPassword.length>2?this.submitKey=!0:this.submitKey=!1},resetErrors:function resetErrors(){this.incorrectPassword=!1,this.fileEmpty=!1,this.unknownError=!1},checks:function checks(){this.file?(this.fileEmpty=!1,this.showNextButtonToPassword=!0):(this.fileEmpty=!0,this.showNextButtonToPassword=!1)},restoreConfig:function restoreConfig(){var t=this;return n()(a.a.mark((function _callee2(){var e,s;return a.a.wrap((function _callee2$(r){while(1)switch(r.prev=r.next){case 0:e=t,s=new FileReader,s.onload=n()(a.a.mark((function _callee(){var t;return a.a.wrap((function _callee$(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,e.spinnervisible=!0,r.next=4,l["a"].restoreConfig(s.result,e.addWallet.vertoPassword);case 4:if(t=r.sent,"bad_password"!==t.message){r.next=9;break}throw e.spinnervisible=!1,new Error("Incorrect Password");case 9:e.$store.commit("settings/temporary",e.addWallet.vertoPassword),e.applicationRefreshing=!0,e.$q.notify({color:"positive",message:"Application refreshing"}),setTimeout((function(){e.$router.push({path:"/verto/dashboard"}),e.spinnervisible=!1}),300),r.next=20;break;case 15:r.prev=15,r.t0=r["catch"](0),e.spinnervisible=!1,Object(c["b"])(r.t0);case 20:case"end":return r.stop()}}),_callee,null,[[0,15]])}))),s.readAsText(t.file);case 4:case"end":return r.stop()}}),_callee2)})))()}}},h=f,w=(s("c1b35"),s("2877")),m=Object(w["a"])(h,render,r,!1,null,"07ba5438",null);e["default"]=m.exports},"1e639":function(t,e,s){},c1b35:function(t,e,s){"use strict";var r=s("1e639"),i=s.n(r);i.a}}]);