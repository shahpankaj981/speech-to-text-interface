(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function n(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8e2d0105"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise(function(e,a){s=i[t]=[e,a]});e.push(s[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=n(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,s[1](c)}i[t]=void 0}};var u=setTimeout(function(){o({type:"timeout",target:l})},12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),i=s.n(a);i.a},2101:function(t,e){},"2c2b":function(t,e,s){"use strict";var a=s("35e9"),i=s.n(a);i.a},"35e9":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("bc3a"),i=s.n(a),o=s("2b0e"),n=s("1e18"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("div",{attrs:{id:"nav"}},[s("vue-snotify"),s("router-link",{attrs:{to:"/"}})],1),s("router-view")],1)},l=[],c=(s("034f"),s("2877")),u=s("2101"),d=s.n(u),m={},p=Object(c["a"])(m,r,l,!1,null,null,null);"function"===typeof d.a&&d()(p);var f=p.exports,v=s("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("audio-upload",{attrs:{baseurl:"http://3.16.193.35:5001/speech-meeting-app"}})],1)},g=[],b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row container-fluid"},[s("div",{staticClass:"col-md-2"}),s("div",{staticClass:"col-md-8"},[s("b-card",{staticClass:"main-box",attrs:{"no-block":""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("b-tabs",[s("br"),s("br"),s("b-tab",{attrs:{title:"Upload File"}},[s("b",[t._v("Upload File")]),t._v("  \n              "),s("input",{ref:"file",attrs:{type:"file",accept:".mp3,.wav"},on:{change:function(e){return t.handleFileChange()}}}),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("hr"),t.uploadingStatus?s("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button",disabled:""}},[s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                       "),s("span",{domProps:{textContent:t._s(t.uploadingStatusText)}})]):s("button",{staticClass:"btn btn-outline-primary btn-block",on:{click:t.submitFile}},[t._v("\n                    Submit\n                  ")])])])]),s("b-tab",{attrs:{title:"Record Audio"}},[s("div",{staticStyle:{"text-align":"left !important"}},[t.recordButton?s("button",{staticClass:"btn btn-outline-success btn-block",attrs:{type:"button"},on:{click:t.start}},[s("span",[s("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"#000000"}},[s("path",{attrs:{d:"M16,23.1c3.9,0,7-3.1,7-7v-2v-1v-2v-1v-2c0-3.9-3.1-7-7-7s-7,3.1-7,7v2v1v2v1v2C9,20,12.1,23.1,16,23.1z M13,14.1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2v-1h2c0.6,0,1-0.4,1-1s-0.4-1-1-1h-2c0-2.8,2.2-5,5-5s5,2.2,5,5h-2 c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2v1h-2c-0.6,0-1,0.4-1,1s0.4,1,1,1h2c0,2.8-2.2,5-5,5s-5-2.2-5-5h2 c0.6,0,1-0.4,1-1S13.6,14.1,13,14.1z"}}),s("path",{attrs:{d:"M26,16.1h-2c0,4.4-3.6,8-8,8s-8-3.6-8-8H6c0,5.2,4,9.4,9,9.9v3.1h-3v2h3h2h3v-2h-3V26 C22,25.5,26,21.3,26,16.1z"}})])]),t._v(" \n                  "),s("span",[t._v("Start Recording")])]):t._e(),t.recordButton?t._e():s("button",{staticClass:"button btn-outline-danger btn-block",attrs:{type:"button"},on:{click:t.stop}},[s("span",[s("svg",{staticClass:"icon icon",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",fill:"#FFFFFF",width:"16",height:"16"}},[s("rect",{attrs:{x:"10",y:"10",width:"12",height:"12"}}),s("path",{attrs:{d:"M15.6,2.1c-7.7,0-14,6.3-14,14s6.3,14,14,14s14-6.3,14-14S23.3,2.1,15.6,2.1z M15.6,28.1 c-6.6,0-12-5.4-12-12s5.4-12,12-12s12,5.4,12,12S22.2,28.1,15.6,28.1z"}})])]),t._v("\n                  Stop\n                ")])]),t.show?s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("audio",{attrs:{id:"audio-player",controls:"",src:t.source}}),s("button",{staticClass:"button button-radius-12",on:{click:t.remove}},[t._v("\n                    Remove\n                  ")])])]):t._e(),s("br"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("hr"),t.uploadingStatus?s("button",{staticClass:"btn btn-block btn-primary",attrs:{type:"button",disabled:""}},[s("span",{staticClass:"spinner-border spinner-border-sm",attrs:{role:"status","aria-hidden":"true"}}),t._v("\n                       "),s("span",{domProps:{textContent:t._s(t.uploadingStatusText)}})]):s("button",{staticClass:"btn btn-outline-primary btn-block",on:{click:t.submitFile}},[t._v("\n                    Submit\n                  ")])])])]),s("b-tab",{attrs:{title:"Register Meeting",baseurl:this.baseurl,disabled:!t.savedAudioFile}},[s("register-meeting",{attrs:{savedAudioFile:t.savedAudioFile},on:{meetingSaved:t.handleMeetingSaved}})],1),s("b-tab",{attrs:{title:"Register User",baseurl:this.baseurl,disabled:!t.meetingId}},[s("register-user")],1),s("b-tab",{attrs:{title:"Train Voice",baseurl:this.baseurl,disabled:!t.meetingId},on:{click:t.getUsers}},[s("train-voice",{attrs:{audioname:t.savedAudioFile,audiofullpath:t.audioFullPath,users:t.users,meetingid:t.meetingId},on:{voiceRecognized:t.handleVoiceRecognized}})],1)],1)],1)]),s("br"),t.transcribed?s("div",{staticClass:"row container-fluid",staticStyle:{"text-align":"left !important"}},[s("div",{staticClass:"col-md-12"},[s("hr"),s("div",[s("h3",[t._v("Meeting Conversation")])]),t._l(t.conversation,function(e,a){return s("div",{staticClass:"row"},[s("span",{staticClass:"col-md-4"},[s("b",[t._v(t._s("Unknown"!==t.recognizedSpeakers[e.speaker]?t.recognizedSpeakers[e.speaker].first_name+"\n               "+t.recognizedSpeakers[e.speaker].last_name:"Speaker "+e.speaker)+"  ")]),t._v("\n              ( "+t._s(e.from)+" - "+t._s(e.to)+") :\n            ")]),s("span",{staticClass:"col-md-8",domProps:{textContent:t._s(e.vocal)}})])})],2)]):t._e()])],1)])},_=[],C=(s("7f7f"),s("28a5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticStyle:{"text-align":"left"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"first_name"}},[t._v("First Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.first_name,expression:"form.first_name"}],staticClass:"form-control",attrs:{type:"text",name:"first_name",id:"first_name","aria-describedby":"",placeholder:"Enter First Name"},domProps:{value:t.form.first_name},on:{input:function(e){e.target.composing||t.$set(t.form,"first_name",e.target.value)}}})])]),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"last_name"}},[t._v("Last Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.last_name,expression:"form.last_name"}],staticClass:"form-control",attrs:{type:"text",name:"last_name",id:"last_name","aria-describedby":"",placeholder:"Enter Last Name"},domProps:{value:t.form.last_name},on:{input:function(e){e.target.composing||t.$set(t.form,"last_name",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"exampleInputEmail1"}},[t._v("Email")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",attrs:{type:"email",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"gender"}},[t._v("Gender")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.gender,expression:"form.gender"}],staticClass:"form-control",attrs:{name:"gender"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"gender",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select Gender")]),s("option",{attrs:{value:"M"}},[t._v("Male")]),s("option",{attrs:{value:"F"}},[t._v("Female")]),s("option",{attrs:{value:"O"}},[t._v("Others")])])])])]),s("hr"),t._m(0)])])}),y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-block btn-outline-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],w={name:"registerUser",props:[],data:function(){return{baseurl:null,form:{first_name:"",last_name:"",email:"",gender:""}}},mounted:function(){this.baseurl=this.$parent.$attrs.baseurl},methods:{submit:function(){var t=this;console.log("Registering user..."),this.$http.post(this.baseurl+"/attendee",this.form).then(function(e){t.$snotify.success("User registered successfully!!","Success"),alert(e.data.message+" with id "+e.data.attendee.id)}).catch(function(e){t.$snotify.error("Something went wrong!!","Error")})}}},S=w,k=Object(c["a"])(S,C,y,!1,null,null,null),x=k.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticStyle:{"text-align":"left"},attrs:{id:"register-meeting"},on:{submit:function(e){return e.preventDefault(),t.submitMeetingForm(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"organization"}},[t._v("Organization Name")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.organization,expression:"form.organization"}],staticClass:"form-control",attrs:{type:"text",name:"organization",id:"organization","aria-describedby":"",placeholder:"Enter Organization Name"},domProps:{value:t.form.organization},on:{input:function(e){e.target.composing||t.$set(t.form,"organization",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"meeting_location"}},[t._v("Meeting Location")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.meeting_location,expression:"form.meeting_location"}],staticClass:"form-control",attrs:{type:"text",name:"meeting_location",id:"meeting_location","aria-describedby":"emailHelp",placeholder:"Enter Location"},domProps:{value:t.form.meeting_location},on:{input:function(e){e.target.composing||t.$set(t.form,"meeting_location",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"total_attendee"}},[t._v("Number of Attendees")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.form.total_attendee,expression:"form.total_attendee"}],staticClass:"form-control",attrs:{type:"number",min:"1",name:"total_attendee",id:"total_attendee","aria-describedby":"",placeholder:"Enter Number of Attendees"},domProps:{value:t.form.total_attendee},on:{input:function(e){e.target.composing||t.$set(t.form,"total_attendee",e.target.value)}}})])])]),s("hr"),t._m(0)])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-block btn-outline-primary",attrs:{type:"submit"}},[t._v("Submit")])])])}],z={name:"registerMeeting",props:["savedAudioFile"],data:function(){return{baseurl:null,form:{organization:"",meeting_location:"",total_attendee:"",audio_filename:""}}},mounted:function(){this.baseurl=this.$parent.$attrs.baseurl},methods:{submitMeetingForm:function(){var t=this;console.log("Registering the meeting..."),this.form.audio_filename=this.savedAudioFile,this.$http.post(this.baseurl+"/meeting",this.form).then(function(e){t.$snotify.success("Meeting registered successfully!!","Success");var s=e.data.meeting.id;t.$emit("meetingSaved",s)}).catch(function(e){t.$snotify.error("Something went wrong!!","Error")})}}},T=z,E=Object(c["a"])(T,$,F,!1,null,null,null),P=E.exports,M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("form",{staticStyle:{"text-align":"left"},attrs:{id:"voice-register-form"},on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"first_name"}},[t._v("User")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.form.attendee_id,expression:"form.attendee_id"}],staticClass:"form-control",attrs:{required:""},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(t.form,"attendee_id",e.target.multiple?s:s[0])}}},[s("option",{attrs:{value:""}},[t._v("Select User")]),t._l(t.users,function(e,a){return s("option",{domProps:{value:a,textContent:t._s(e)}})})],2)])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("audio",{staticStyle:{width:"100% !important"},attrs:{src:t.audiofullpath,id:"audio-player",controls:""}})])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),s("div",{staticClass:"col-md-6"},[s("button",{class:t.crop?"btn btn-block btn-danger":"btn btn-block btn-success",attrs:{type:"button"},domProps:{textContent:t._s(t.crop?"Stop Cropping":"Start Cropping")},on:{click:t.cropTime}})]),s("div",{staticClass:"col-md-1"}),s("div",{staticClass:"col-md-2"},[s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.reset}},[t._v("Reset")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),s("div",{staticClass:"col-md-6"},[s("hr"),s("table",{staticClass:"table table-striped"},[t._m(0),t._l(t.form.voice_list,function(e,a){return s("tr",[s("td",{domProps:{textContent:t._s(e.start)}}),s("td",{domProps:{textContent:t._s(e.end)}}),s("td",[s("a",{staticClass:"btn btn-sm btn-outline-danger",attrs:{href:"javascript:void(0)"},on:{click:function(s){return t.removeVoice(a,e)}}},[t._v("\n                Remove\n              ")])])])})],2)])]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("button",{staticClass:"btn btn-block btn-outline-primary",attrs:{type:"submit",disabled:t.processing},domProps:{textContent:t._s(t.processing?t.processingText:"Submit")}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-12"},[s("hr"),s("button",{staticClass:"btn btn-block btn-dark",attrs:{type:"button",disabled:t.recognizeProcessing},domProps:{textContent:t._s(t.recognizeProcessing?"Recognizing Voices.....":"Recognize Voices")},on:{click:t.recognizeSpeakers}})])])])},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",[s("th",[t._v("Start Time")]),s("th",[t._v("End Time")]),s("th",[t._v("Action")])])}],A={name:"trainVoice",props:["audioname","audiofullpath","users","meetingid"],data:function(){return{baseurl:null,crop:!1,startTime:null,endTime:null,processing:!1,processingText:"",recognizeProcessing:!1,audioPath:"",form:{attendee_id:"",audio_name:"",voice_list:[]}}},mounted:function(){this.baseurl=this.$parent.$attrs.baseurl},methods:{submit:function(){var t=this;if(this.processing=!0,this.form.voice_list.length<1)return this.$snotify.error("You must crop at least once voice sample.!!","Error!!"),"";this.form.audio_name=this.audioname,this.processingText="Registering voice samples.....",this.$http.post(this.baseurl+"/attendee-voice",this.form).then(function(e){console.log(e),t.processingText="Training the voice samples for the user.....",t.$http.post(t.baseurl+"/train-attendee/"+t.form.attendee_id).then(function(e){t.processing=!1,t.reset(),t.$snotify.success("Voice samples registered and trained successfully!!","Success!!")}).catch(function(e){t.processing=!1,t.$snotify.error("Something went wrong!!","Error")})}).catch(function(e){t.processing=!1,t.$snotify.error("Something went wrong!!","Error")})},recognizeSpeakers:function(){var t=this;this.recognizeProcessing=!0,this.$http.post(this.baseurl+"/recognize-speaker/"+this.meetingid).then(function(e){t.recognizeProcessing=!1,t.$emit("voiceRecognized",e.data.data.recognized_speakers),t.$snotify.success("Voices recognized successfully!!","Success!!")}).catch(function(e){t.recognizeProcessing=!1,t.$snotify.error("Something went wrong!!","Error!!")})},cropTime:function(t){var e=document.getElementById("audio-player"),s=e.currentTime;if(this.crop){if(this.endTime=s,this.endTime-this.startTime<1)return void this.$snotify.error("The time frame should be at least 1 second.!!","Error");this.form.voice_list.push({start:this.startTime,end:this.endTime}),this.startTime=null,this.endTime=null}else this.startTime=s;this.crop=!this.crop},reset:function(){this.form.attendee_id="",this.form.voice_list=[]},removeVoice:function(t,e){confirm("Are you sure you want to delete?")&&this.$delete(this.form.voice_list,t)}}},O=A,j=Object(c["a"])(O,M,R,!1,null,null,null),U=j.exports,N={name:"audioUpload",components:{RegisterUser:x,RegisterMeeting:P,TrainVoice:U},props:["baseurl"],data:function(){return{audioChunks:[],rec:{},recordedAudio:{},recordButton:!0,show:!1,source:"",startTime:"",endTime:"",recordAudio:!1,uploadResponse:!1,audioFile:null,uploadingStatusText:"",uploadingStatus:!1,conversation:[],meetingId:null,transcribed:!1,savedAudioFile:null,audioFullPath:"",users:[],recognizedSpeakers:[]}},mounted:function(){},watch:{savedAudioFile:function(){var t=this;this.$http.get(this.baseurl+"/audio/"+this.savedAudioFile).then(function(e){console.log("audio url",e),t.audioFullPath="http://3.16.193.35:5001"+e.data.audio_url}).catch(function(t){return""})}},computed:{},methods:{start:function(){var t=this;navigator.mediaDevices.getUserMedia({audio:!0}).then(function(e){t.handleCallback(e)})},stop:function(){this.rec.stop(),this.recordButton=!0},handleFileChange:function(){console.log(this.$refs.file.files[0]),this.audioFile=this.$refs.file.files[0]},handleCallback:function(t){var e=this;this.recordButton=!1,this.rec=new MediaRecorder(t),this.audioChunks=[],this.rec.start(),this.rec.ondataavailable=function(t){e.audioChunks.push(t.data);var s=new Blob(e.audioChunks,{type:"audio/wav"});e.audioFile=s,e.source=URL.createObjectURL(s),e.$nextTick(function(){e.show=!0}),e.sendData(s)}},handleMeetingSaved:function(t){this.meetingId=t},handleVoiceRecognized:function(t){console.log("speakers",t),this.recognizedSpeakers=t},submitFile:function(){var t=this,e=this;if(!this.audioFile)return this.$snotify.error("File is required.","Error!!"),!1;this.uploadingStatusText="Uploading...",this.uploadingStatus=!0,console.log("Uploading file....");var s=new FormData,a=this.audioFile.name.split(".").pop();s.append("audio",this.audioFile,"audio"+Math.floor(256e3*Math.random())+"."+a),this.$http.post(this.baseurl+"/upload/audio",s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(s){console.log("File Uploaded successfully. Now transcribing..."),t.$snotify.success("File uploaded successfully!!","Success"),t.uploadingStatusText="Transcribing...",t.savedAudioFile=s.data.filename,t.$http.get(t.baseurl+"/transcribe/"+t.savedAudioFile).then(function(s){console.log("transcribed successfully"),t.$snotify.success("Speech transcribed successfully!!","Success"),e.formatConversation(s.data.data),t.uploadingStatus=!1,e.transcribed=!0}).catch(function(e){t.uploadingStatus=!1,t.$snotify.error("Error transcribing speech!!","Error!!")})}).catch(function(e){t.uploadingStatus=!1,t.$snotify.error("Error uploading file!!","Error!!")})},formatConversation:function(t){console.log("formatting the conversation for display");var e=t.results,s=t.speaker_labels;this.recognizedSpeakers=t.recognized_speakers;for(var a=[],i=0,o=0;o<e.length;o++)for(var n=e[o],r=n.alternatives[0].timestamps,l=0;l<r.length;l++){var c=r[l];c=c.concat(s[i++]),a.push(c)}for(var u=[],d=0;d<a.length;d++)0===d?u.push({speaker:s[d].speaker,from:a[d][3].from,to:a[d][3].to,vocal:a[d][0]}):a[d][3].speaker===a[d-1][3].speaker?(u[u.length-1].vocal+=" "+a[d][0],u[u.length-1].to=a[d][3].to):u.push({speaker:s[d].speaker,from:a[d][3].from,to:a[d][3].to,vocal:a[d][0]});this.conversation=u,this.uploadResponse=!0},sendData:function(t){},getUsers:function(){var t=this;console.log("Fetching users..."),this.$http.get(this.baseurl+"/attendees").then(function(e){t.users=e.data.data})},remove:function(){this.audioChunks=[],this.source="",this.show=!1}}},V=N,B=(s("2c2b"),Object(c["a"])(V,b,_,!1,null,"27196657",null)),I=B.exports,L={name:"audioForm",components:{AudioUpload:I}},D=L,q=Object(c["a"])(D,h,g,!1,null,null,null),H=q.exports;o["default"].use(v["a"]);var G=new v["a"]({mode:"history",base:"/",routes:[{path:"/",name:"audioForm",component:H},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),J=s("2f62");o["default"].use(J["a"]);var Y=new J["a"].Store({state:{},mutations:{},actions:{}}),K=(s("f9e3"),s("2dd8"),s("f213")),Q=(s("26e8"),{toast:{position:K["a"].rightTop,timeout:"6000",showProgressBar:!1}});o["default"].use(K["b"],Q),o["default"].use(n["a"]),o["default"].prototype.$http=i.a,o["default"].config.productionTip=!1,new o["default"]({router:G,store:Y,render:function(t){return t(f)}}).$mount("#app")},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.77bc4977.js.map