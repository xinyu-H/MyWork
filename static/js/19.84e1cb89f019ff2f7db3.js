webpackJsonp([19],{mV6d:function(e,t){},"uBl+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("Xxa5"),s=n.n(a),r=n("exGp"),i=n.n(r),o=n("Fd2+");class c{constructor(e,t,{onupgradeneeded:n,onversionchange:a=this._onversionchange}={}){this._name=e,this._version=t,this._onupgradeneeded=n,this._onversionchange=a,this._db=null}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise((e,t)=>{let n=!1;setTimeout(()=>{n=!0,t(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const a=indexedDB.open(this._name,this._version);a.onerror=(()=>t(a.error)),a.onupgradeneeded=(e=>{n?(a.transaction.abort(),e.target.result.close()):this._onupgradeneeded&&this._onupgradeneeded(e)}),a.onsuccess=(({target:t})=>{const a=t.result;n?a.close():(a.onversionchange=this._onversionchange.bind(this),e(a))})}),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,n){return await this.getAllMatching(e,{query:t,count:n})}async getAllKeys(e,t,n){return(await this.getAllMatching(e,{query:t,count:n,includeKeys:!0})).map(({key:e})=>e)}async getAllMatching(e,{index:t,query:n=null,direction:a="next",count:s,includeKeys:r}={}){return await this.transaction([e],"readonly",(i,o)=>{const c=i.objectStore(e),l=[];(t?c.index(t):c).openCursor(n,a).onsuccess=(({target:e})=>{const t=e.result;if(t){const{primaryKey:e,key:n,value:a}=t;l.push(r?{primaryKey:e,key:n,value:a}:a),s&&l.length>=s?o(l):t.continue()}else o(l)})})}async transaction(e,t,n){return await this.open(),await new Promise((a,s)=>{const r=this._db.transaction(e,t);r.onabort=(({target:e})=>s(e.error)),r.oncomplete=(()=>a()),n(r,e=>a(e))})}async _call(e,t,n,...a){return await this.transaction([t],n,(n,s)=>{n.objectStore(t)[e](...a).onsuccess=(({target:e})=>{s(e.result)})})}_onversionchange(){this.close()}close(){this._db&&(this._db.close(),this._db=null)}static async deleteDatabase(e){await new Promise((t,n)=>{const a=indexedDB.deleteDatabase(e);a.onerror=(({target:e})=>{n(e.error)}),a.onblocked=(()=>{n(new Error("Delete blocked"))}),a.onsuccess=(()=>{t()})})}}c.prototype.OPEN_TIMEOUT=2e3,function(){const e={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,n]of Object.entries(e))for(const e of n)e in IDBObjectStore.prototype&&(c.prototype[e]=async function(n,...a){return await this._call(e,n,t,...a)})}();var l=c,u={name:"indexDB",data:function(){return{db:null,dbObject:null,dbName:"dbName",storeName:"storeName",version:1,info:{id:Date.now(),name:"",age:"",sex:"1",checkboxList:[],hobby:[]},dataList:[],checkboxDataList:[{name:"1",value:"唱"},{name:"2",value:"跳"},{name:"3",value:"rap"},{name:"4",value:"篮球"}],isUpdateDate:!1}},computed:{disabled:function(){return!(this.info.name.trim()&&this.info.age.trim()&&this.info.checkboxList.length)}},methods:{addData:function(){var e=this;return i()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=[],e.info.sex="1"==e.info.sex?"男":"女",e.checkboxDataList.forEach(function(t){e.info.checkboxList.forEach(function(e){t.name==e&&n.push(t.value)})}),e.info.hobby=n.join(","),!e.isUpdateDate){t.next=16;break}return t.next=7,e.db.put(e.storeName,e.info);case 7:if("number"!=typeof t.sent){t.next=14;break}return Object(o.b)("修改成功"),e.infoClear(),e.isUpdateDate=!1,t.next=14,e.getAllData();case 14:t.next=24;break;case 16:return t.next=18,e.db.add(e.storeName,e.info);case 18:if("number"!=typeof t.sent){t.next=24;break}return Object(o.b)("添加成功"),e.infoClear(),t.next=24,e.getAllData();case 24:case"end":return t.stop()}},t,e)}))()},getAllData:function(){var e=this;return i()(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.db.getAll(e.storeName);case 2:e.dataList=t.sent;case 3:case"end":return t.stop()}},t,e)}))()},delData:function(e){var t=this;return i()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.db.delete(t.storeName,e.id);case 2:n.sent,t.getAllData();case 4:case"end":return n.stop()}},n,t)}))()},updateData:function(e){var t=this;return i()(s.a.mark(function n(){var a;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.db.get(t.storeName,e.id);case 2:(a=n.sent)&&(a.sex="男"==a.sex?"1":"2",t.info=a),t.isUpdateDate=!0;case 5:case"end":return n.stop()}},n,t)}))()},infoClear:function(){this.info.id=Date.now(),this.info.name="",this.info.age="",this.info.sex="1",this.info.checkboxList=[]}},mounted:function(){var e=this;return i()(s.a.mark(function t(){var n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e,e.db=new l(e.dbName,e.version,{onupgradeneeded:function(e){n.dbObject=e.target.result;n.dbObject.objectStoreNames.contains(n.storeName)||n.dbObject.createObjectStore(n.storeName,{keyPath:"id"})}}),t.next=4,e.db.open();case 4:return t.next=6,e.getAllData();case 6:case"end":return t.stop()}},t,e)}))()}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"indexDB"},[n("div",{staticClass:"content"},[n("van-field",{attrs:{label:"姓名：","label-width":".5rem",placeholder:"请输入姓名"},model:{value:e.info.name,callback:function(t){e.$set(e.info,"name",t)},expression:"info.name"}}),e._v(" "),n("van-field",{attrs:{label:"年龄：","label-width":".5rem",placeholder:"请输入年龄"},model:{value:e.info.age,callback:function(t){e.$set(e.info,"age",t)},expression:"info.age"}}),e._v(" "),n("van-radio-group",{staticClass:"radio",attrs:{direction:"horizontal","icon-size":"16px"},model:{value:e.info.sex,callback:function(t){e.$set(e.info,"sex",t)},expression:"info.sex"}},[n("div",{staticClass:"radioLabel"},[e._v("性别：")]),e._v(" "),n("van-radio",{attrs:{name:"1"}},[e._v("男")]),e._v(" "),n("van-radio",{attrs:{name:"2"}},[e._v("女")])],1),e._v(" "),n("van-checkbox-group",{staticClass:"radio",attrs:{direction:"horizontal","icon-size":"16px"},model:{value:e.info.checkboxList,callback:function(t){e.$set(e.info,"checkboxList",t)},expression:"info.checkboxList"}},[n("div",{staticClass:"radioLabel"},[e._v("爱好：")]),e._v(" "),e._l(e.checkboxDataList,function(t,a){return n("van-checkbox",{key:a,attrs:{name:t.name,shape:"square"}},[e._v(e._s(t.value))])})],2),e._v(" "),e.isUpdateDate?n("van-button",{staticClass:"confirmbtn",attrs:{type:"info",disabled:e.disabled},on:{click:function(t){return e.addData()}}},[e._v("修改数据")]):n("van-button",{staticClass:"confirmbtn",attrs:{type:"info",disabled:e.disabled},on:{click:function(t){return e.addData()}}},[e._v("添加数据")])],1),e._v(" "),n("div",{staticClass:"listBox"},e._l(e.dataList,function(t,a){return n("li",{key:a},[n("div",{staticClass:"listBox-left"},[n("div",{staticClass:"listBox-left-top"},[e._v("\n                    姓名: "+e._s(t.name)+"，性别: "+e._s(t.sex)+"，年龄: "+e._s(t.age)+"\n                ")]),e._v(" "),n("div",{staticClass:"listBox-left-bottom"},[e._v("\n                    爱好: "+e._s(t.hobby)+"\n                ")])]),e._v(" "),n("div",{staticClass:"listBox-right"},[n("van-button",{staticClass:"btn",attrs:{type:"info"},on:{click:function(n){return e.updateData(t)}}},[e._v("修改")]),e._v(" "),n("van-button",{staticClass:"btn",attrs:{type:"danger"},on:{click:function(n){return e.delData(t)}}},[e._v("删除")])],1)])}),0)])},staticRenderFns:[]};var f=n("VU/8")(u,d,!1,function(e){n("mV6d")},null,null);t.default=f.exports}});
//# sourceMappingURL=19.84e1cb89f019ff2f7db3.js.map