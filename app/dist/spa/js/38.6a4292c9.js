(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[38],{"0d64":function(e,t,s){},"150c":function(e,t,s){"use strict";var a=s("0d64"),r=s.n(a);r.a},"3b9d8":function(e,t,s){"use strict";s.r(t);var render=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("q-page",{staticClass:"column import-private-key",class:{"dark-theme":"true"===e.$store.state.settings.lightMode,"text-black bg-grey-12":"false"===e.$store.state.settings.lightMode,"desktop-marg":e.screenSize>1024,"mobile-pad":e.screenSize<1024}},[s("div",{class:{"dark-theme":"true"===e.$store.state.settings.lightMode},staticStyle:{height:"100vh"}},[e.screenSize>1024?s("div",{staticClass:"desktop-version full-height"},[s("div",{staticClass:"row full-height"},[s("div",{staticClass:"col col-md-3"},[s("div",{staticClass:"wallets-container",staticStyle:{height:"100%"}},[s("profile-header",{staticClass:"marg",attrs:{isMobile:!1,version:"type2222"}}),s("wallets",{staticClass:"full-height max-height",attrs:{isMobile:!1,showWallets:!1,isWalletsPage:!1,isWalletDetail:!1}})],1)]),s("div",{staticClass:"col col-md-9"},[s("div",{staticClass:"desktop-card-style apps-section q-mb-sm",class:{"dark-theme":"true"===e.$store.state.settings.lightMode}},[s("div",{staticClass:"chain-tools-wrapper"},[s("div",{staticClass:"standard-content"},[s("h2",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}],staticClass:"standard-content--title"},[e._v("Import EOS Account")]),s("h2",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}],staticClass:"standard-content--title"},[e._v("Save Private Key")])]),s("div",{staticClass:"chain-tools-wrapper--list open"},[s("div",{staticClass:"list-wrapper"},[s("div",{staticClass:"list-wrapper--chain__eos-to-vtx-convertor"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}]},[s("q-stepper",{ref:"stepper",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("q-step",{attrs:{title:"Private Key",name:1,prefix:"1",order:"10",done:e.step>1}},[s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[!e.eosKeyNext||e.eosKeyInvalid?s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1):s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                                    A valid EOS private key\n                                                                ")])])])]),s("span",[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:e.$t("EosAccount.enter_private_key"),type:"password"},on:{input:e.showEosKeyNext,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFromPriv(t)}},model:{value:e.addWallet.addressPriv,callback:function(t){e.$set(e.addWallet,"addressPriv",t)},expression:"addWallet.addressPriv"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.eosKeyInvalid,expression:"eosKeyInvalid"}],staticClass:"text-h6 text-red"},[e._v("\n                                                        Key invalid\n                                                    ")]),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.eosKeyNext&&!e.eosKeyInvalid,expression:"eosKeyNext && !eosKeyInvalid"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.nextFromPriv()}}})],1)],1)]),s("q-step",{attrs:{title:"Account Name",name:2,prefix:"2",order:"20",done:e.step>2}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),s("div",{staticClass:"text-black"},[s("div",[s("q-select",{staticClass:"select-input",attrs:{light:"",separator:"",rounded:"",outlined:"","stack-label":"",label:"EOS Account Name",color:"purple",options:e.accountNames,error:e.addWallet.walletNameEmpty},model:{value:e.addWallet.walletName,callback:function(t){e.$set(e.addWallet,"walletName",t)},expression:"addWallet.walletName"}}),0==e.accountNames.length?s("p",{staticClass:"text-red q-mt-sm"},[e._v("No account found")]):e._e()],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.addWallet.walletName,expression:"addWallet.walletName"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){e.step=4}}})],1)],1)],1),s("q-step",{attrs:{title:"Save Key",name:3,prefix:"3",order:"30",done:e.step>3}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Save Private Key")])]),s("li",[s("span",[s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                                    Password Encrypted\n                                                                ")])])])]),s("q-stepper-navigation",{staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{outline:"",color:"deep-purple-14 q-mr-md",rounded:"",label:"Yes"},on:{click:function(t){e.showMainSteps=!1}}}),s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:"No"},on:{click:function(t){return e.$refs.stepper.next()}}})],1)],1)],1),s("q-step",{attrs:{title:"Verto Password",name:4,prefix:"4",order:"40",done:e.step>4}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){e.step=2}}}),s("div",{staticClass:"text-black"},[s("div",[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:e.$t("CreateVertoPassword.vertopassword"),type:e.isPwd?"password":"text"},on:{input:e.showSubmitKey,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addEosAddress(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.addWallet.vertoPassword,callback:function(t){e.$set(e.addWallet,"vertoPassword",t)},expression:"addWallet.vertoPassword"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.incorrectPassword,expression:"incorrectPassword"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                        "+e._s(e.$t("Welcome.incorrect"))+"\n                                                    ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.walletNameUsed,expression:"walletNameUsed"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                        "+e._s(e.$t("DisplayKey.name_is_used"))+"\n                                                    ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.unknownError,expression:"unknownError"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                        Unknown Error\n                                                    ")]),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.submitKey,expression:"submitKey"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.addEosAddress()}}})],1)],1)],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}]},[s("q-stepper",{ref:"stepperFilePassword",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step2,callback:function(t){e.step2=t},expression:"step2"}},[s("q-step",{attrs:{title:"File Password",name:1,prefix:"1",done:e.step2>1}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){e.showMainSteps=!0}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Recommended to be different than your wallet password")])]),s("li",[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.filePasswordApproved,expression:"!filePasswordApproved"}]},[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}]},[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                                Minimum 8 Digits\n                                                            ")])])]),s("span",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotoFileConfirmPassword()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.addWallet.filePassword,callback:function(t){e.$set(e.addWallet,"filePassword",t)},expression:"addWallet.filePassword"}})],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotoFileConfirmPassword()}}})],1)],1)],1),s("q-step",{attrs:{title:"Confirm Password",name:2,prefix:"2",done:e.step2>2}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),s("div",{staticClass:"text-black"},[s("span",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Confirm Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordConfirmCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotToSaveFileInWallet()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}],null,!1,3635466494),model:{value:e.addWallet.filePasswordConfirm,callback:function(t){e.$set(e.addWallet,"filePasswordConfirm",t)},expression:"addWallet.filePasswordConfirm"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"q-pa-sm",on:{click:function(t){return e.gotToSaveFileInWallet()}}},[s("q-icon",{attrs:{name:"navigate_next",size:"3.2rem",color:"green"}},[s("q-tooltip",[e._v(e._s(e.$t("SaveYourKeys.create")))])],1)],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotToSaveFileInWallet()}}})],1)],1)],1),s("q-step",{attrs:{title:"Save In Wallet",name:3,prefix:"3",done:e.step2>3}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Encrypt the private key in the wallet?")])])])]),s("q-stepper-navigation",{staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{outline:"",color:"deep-purple-14 q-mr-md",rounded:"",label:"Yes"},on:{click:function(t){return e.gotToVertoPassword(!0)}}}),s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:"No"},on:{click:function(t){return e.gotToVertoPassword(!1)}}})],1)],1)],1)],1)],1)]),s("br"),s("br"),s("br")])])])])])])]):s("div",{staticClass:"mobile-version"},[s("div",{staticClass:"chain-tools-wrapper"},[s("div",{staticClass:"standard-content"},[s("h2",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}],staticClass:"standard-content--title flex justify-center"},[s("q-btn",{staticClass:"btn-align-left",attrs:{flat:"",unelevated:"",to:"/verto/dashboard","text-color":"false"===e.$store.state.settings.lightMode?"black":"white",icon:"keyboard_backspace"}}),e._v("\n                        Import EOS Account\n                    ")],1),s("h2",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}],staticClass:"standard-content--title flex justify-center"},[s("q-btn",{staticClass:"btn-align-left",attrs:{flat:"",unelevated:"",to:"/verto/dashboard","text-color":"false"===e.$store.state.settings.lightMode?"black":"white",icon:"keyboard_backspace"}}),e._v("\n                        Save Private Key\n                    ")],1),s("div",{staticClass:"privatekey_bg flex flex-center"},[s("img",{attrs:{src:"statics/privatekey_bg.svg",alt:""}})])]),s("div",{staticClass:"chain-tools-wrapper--list open"},[s("div",{staticClass:"list-wrapper"},[s("div",{staticClass:"list-wrapper--chain__eos-to-vtx-convertor"},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.showMainSteps,expression:"showMainSteps"}]},[s("q-stepper",{ref:"stepper",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}},[s("q-step",{attrs:{title:"Private Key",name:1,prefix:"1",order:"10",done:e.step>1}},[s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[!e.eosKeyNext||e.eosKeyInvalid?s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1):s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                            A valid EOS private key\n                                                        ")])])])]),s("span",[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",error:e.addWallet.addressError,label:e.$t("EosAccount.enter_private_key")},on:{input:e.showEosKeyNext,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.nextFromPriv(t)}},model:{value:e.addWallet.addressPriv,callback:function(t){e.$set(e.addWallet,"addressPriv",t)},expression:"addWallet.addressPriv"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.eosKeyInvalid,expression:"eosKeyInvalid"}],staticClass:"text-h6 text-red"},[e._v("\n                                                Key invalid\n                                            ")]),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.eosKeyNext&&!e.eosKeyInvalid,expression:"eosKeyNext && !eosKeyInvalid"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.nextFromPriv()}}})],1)],1)]),s("q-step",{attrs:{title:"Account Name",name:2,prefix:"2",order:"20",done:e.step>2}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),s("div",{staticClass:"text-black"},[s("div",[s("q-select",{staticClass:"select-input",attrs:{light:"",separator:"",rounded:"",outlined:"","stack-label":"",label:"EOS Account Name",color:"purple",options:e.accountNames,error:e.addWallet.walletNameEmpty},model:{value:e.addWallet.walletName,callback:function(t){e.$set(e.addWallet,"walletName",t)},expression:"addWallet.walletName"}})],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.addWallet.walletName,expression:"addWallet.walletName"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.$refs.stepper.next()}}})],1)],1)],1),s("q-step",{attrs:{title:"Save Key",name:3,prefix:"3",order:"30",done:e.step>3}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Save Private Key")])]),s("li",[s("span",[s("span",[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                            Password Encrypted\n                                                        ")])])])]),s("q-stepper-navigation",{staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{outline:"",color:"deep-purple-14 q-mr-md",rounded:"",label:"Yes"},on:{click:function(t){e.showMainSteps=!1}}}),s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:"No"},on:{click:function(t){return e.$refs.stepper.next()}}})],1)],1)],1),s("q-step",{attrs:{title:"Verto Password",name:4,prefix:"4",order:"40",done:e.step>4}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepper.previous()}}}),s("div",{staticClass:"text-black"},[s("div",[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:e.$t("CreateVertoPassword.vertopassword"),type:e.isPwd?"password":"text"},on:{input:e.showSubmitKey,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addEosAddress(t)}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.addWallet.vertoPassword,callback:function(t){e.$set(e.addWallet,"vertoPassword",t)},expression:"addWallet.vertoPassword"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.incorrectPassword,expression:"incorrectPassword"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                "+e._s(e.$t("Welcome.incorrect"))+"\n                                            ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.walletNameUsed,expression:"walletNameUsed"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                "+e._s(e.$t("DisplayKey.name_is_used"))+"\n                                            ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.unknownError,expression:"unknownError"}],staticClass:"text-h6 text-uppercase text-red q-pa-lg"},[e._v("\n                                                Unknown Error\n                                            ")]),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.submitKey,expression:"submitKey"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("next")},on:{click:function(t){return e.addEosAddress()}}})],1)],1)],1)],1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.showMainSteps,expression:"!showMainSteps"}]},[s("q-stepper",{ref:"stepperFilePassword",attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,"done-color":"green","alternative-labels":"",vertical:"",color:"primary",animated:"",flat:""},model:{value:e.step2,callback:function(t){e.step2=t},expression:"step2"}},[s("q-step",{attrs:{title:"File Password",name:1,prefix:"1",done:e.step2>1}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){e.showMainSteps=!0}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Recommended to be different than your wallet password")])]),s("li",[s("span",{directives:[{name:"show",rawName:"v-show",value:!e.filePasswordApproved,expression:"!filePasswordApproved"}]},[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"red"}},[e._v(" ")])],1),s("span",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}]},[s("q-chip",{staticClass:"sm-circle shadow-1",attrs:{dense:"",color:"green"}},[e._v(" ")])],1),e._v("\n                                                        Minimum 8 Digits\n                                                    ")])])]),s("span",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotoFileConfirmPassword()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.addWallet.filePassword,callback:function(t){e.$set(e.addWallet,"filePassword",t)},expression:"addWallet.filePassword"}})],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordApproved,expression:"filePasswordApproved"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotoFileConfirmPassword()}}})],1)],1)],1),s("q-step",{attrs:{title:"Confirm Password",name:2,prefix:"2",done:e.step2>2}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),s("div",{staticClass:"text-black"},[s("span",{staticClass:"q-pa-sm"},[s("q-input",{attrs:{dark:"true"===e.$store.state.settings.lightMode,light:"false"===e.$store.state.settings.lightMode,debounce:"500",rounded:"",outlined:"",color:"purple",label:"Confirm Password For The File",type:e.isPwd?"password":"text"},on:{input:e.filePasswordConfirmCheck,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.gotToSaveFileInWallet()}},scopedSlots:e._u([{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(t){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.addWallet.filePasswordConfirm,callback:function(t){e.$set(e.addWallet,"filePasswordConfirm",t)},expression:"addWallet.filePasswordConfirm"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"q-pa-sm",on:{click:function(t){return e.gotToSaveFileInWallet()}}},[s("q-icon",{attrs:{name:"navigate_next",size:"3.2rem",color:"green"}},[s("q-tooltip",[e._v(e._s(e.$t("SaveYourKeys.create")))])],1)],1),s("q-stepper-navigation",{directives:[{name:"show",rawName:"v-show",value:e.filePasswordConfirmApproved,expression:"filePasswordConfirmApproved"}],staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:e.$t("SaveYourKeys.create")},on:{click:function(t){return e.gotToSaveFileInWallet()}}})],1)],1)],1),s("q-step",{attrs:{title:"Save In Wallet",name:3,prefix:"3",done:e.step2>3}},[s("q-btn",{staticClass:"--back-btn",attrs:{flat:"",unelevated:"",icon:"keyboard_arrow_up",color:"primary"},on:{click:function(t){return e.$refs.stepperFilePassword.previous()}}}),s("div",{staticClass:"text-black"},[s("div",{staticClass:"text-h4 --subtitle"},[s("ul",[s("li",[s("span",[e._v("Encrypt the private key in the wallet?")])])])]),s("q-stepper-navigation",{staticClass:"flex justify-end"},[s("q-btn",{staticClass:"--next-btn",attrs:{outline:"",color:"deep-purple-14 q-mr-md",rounded:"",label:"Yes"},on:{click:function(t){return e.gotToVertoPassword(!0)}}}),s("q-btn",{staticClass:"--next-btn",attrs:{color:"deep-purple-14",rounded:"",label:"No"},on:{click:function(t){return e.gotToVertoPassword(!1)}}})],1)],1)],1)],1)],1)]),s("br"),s("br"),s("br")])])])])])])},a=[],r=s("967e"),i=s.n(r),o=(s("96cf"),s("fa84")),n=s.n(o),l=s("e298"),d=s("23bd"),c=s("5cea"),p=new c["a"],u={components:{ProfileHeader:d["a"],Wallets:l["a"]},data:function data(){return{step:1,step2:1,isPwd:!0,contractable:!0,showMainSteps:!0,filePasswordApproved:!1,filePasswordConfirmApproved:!1,eosKeyNext:!1,submitKey:!1,eosKeyInvalid:!1,incorrectPassword:!1,unknownError:!1,walletNameUsed:!1,screenSize:1024,enableImport:!0,confirmPassword:!1,accountNames:[],wrongPrivateKey:!1,accountIsNotValid:!0,enteredPrivateKey:"",showSaveKey:!1,addWallet:{walletName:"",address:"",addressPriv:"",vertoPassword:"",vertoPasswordError:"",filePassword:"",filePasswordConfirm:"",storeInWallet:!1}}},created:function created(){this.getWindowWidth(),window.addEventListener("resize",this.getWindowWidth)},methods:{getWindowWidth:function getWindowWidth(){this.screenSize=document.querySelector("#q-app").offsetWidth},createKeys:function createKeys(){this.$router.push("create-keys")},filePasswordCheck:function filePasswordCheck(){this.filePasswordApproved=!1,this.addWallet.filePassword.length>7&&(this.filePasswordApproved=!0)},filePasswordConfirmCheck:function filePasswordConfirmCheck(){this.filePasswordConfirmApproved=!1,this.addWallet.filePassword===this.addWallet.filePasswordConfirm&&(this.filePasswordConfirmApproved=!0)},gotoFileConfirmPassword:function gotoFileConfirmPassword(){this.filePasswordApproved&&this.$refs.stepperFilePassword.next()},gotToSaveFileInWallet:function gotToSaveFileInWallet(){this.filePasswordConfirmApproved&&this.$refs.stepperFilePassword.next()},gotToVertoPassword:function gotToVertoPassword(e){this.addWallet.storeInWallet=e,this.showMainSteps=!0,this.$refs.stepperFilePassword.goTo(1),this.$refs.stepper.next()},createAccount:function createAccount(){this.$router.push("create-eos-account")},nextFromName:function nextFromName(){this.addWallet.walletNameEmpty=!1,this.confirmPassword=!0},nextFromPriv:function nextFromPriv(){this.eosKeyNext&&(p.isPrivKeyValid(this.addWallet.addressPriv)?(this.importPrivateKey(),this.$refs.stepper.next()):this.eosKeyInvalid=!0)},showEosKeyNext:function showEosKeyNext(){this.eosKeyInvalid=!1;var e=p.isPrivKeyValid(this.addWallet.addressPriv);this.eosKeyNext=!!e},showSubmitKey:function showSubmitKey(){this.resetErrors(),this.addWallet.vertoPassword.length>2?this.submitKey=!0:this.submitKey=!1},resetErrors:function resetErrors(){this.incorrectPassword=!1,this.walletNameUsed=!1,this.unknownError=!1},addEosAddress:function(){var e=n()(i.a.mark((function _callee(){var e;return i.a.wrap((function _callee$(t){while(1)switch(t.prev=t.next){case 0:if(!this.submitKey){t.next=6;break}return this.resetErrors(),t.next=4,this.$configManager.createEosWallet(this.addWallet);case 4:e=t.sent,e.success?this.$router.push("/verto/dashboard/"+this.addWallet.walletName.value):(this.submitKey=!1,"bad_password"===e.message?this.incorrectPassword=!0:"name_already_used"===e.message?this.walletNameUsed=!0:this.unknownError=!0);case 6:case"end":return t.stop()}}),_callee,this)})));function addEosAddress(){return e.apply(this,arguments)}return addEosAddress}(),cancelAddVertoAddress:function cancelAddVertoAddress(){this.addWallet.walletNameEmpty=!1,this.addWallet.addressEmpty=!1,this.addWallet.vertoPasswordEmpty=!1,this.addWallet.walletName="",this.addWallet.address="",this.addWallet.addressPriv="",this.addWallet.vertoPassword="",this.addingWallet=!1},importPrivateKey:function importPrivateKey(){var e=new c["a"];this.addWallet.address=e.fromPrivToPub(this.addWallet.addressPriv);var t=this;e.getAccountNamesFromPubKeyP(this.addWallet.address).then((function(e){t.accountNames=[];for(var s=0;s<e.account_names.length;s++)t.accountNames.push({label:e.account_names[s],value:e.account_names[s]});t.walletName=e.account_names[0]})),this.linkAccount=!0},cancel:function cancel(){this.$router.push("/verto/dashboard")}}},v=u,w=(s("150c"),s("2877")),f=Object(w["a"])(v,render,a,!1,null,"7535bb1b",null);t["default"]=f.exports}}]);