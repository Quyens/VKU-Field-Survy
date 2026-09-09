var ct=Object.defineProperty;var lt=(r,t,e)=>t in r?ct(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var h=(r,t,e)=>lt(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=e(s);fetch(s.href,i)}})();const ut="modulepreload",dt=function(r,t){return new URL(r,t).href},Z={},z=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(e.map(l=>{if(l=dt(l,n),l in Z)return;Z[l]=!0;const m=l.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(!!n)for(let f=a.length-1;f>=0;f--){const b=a[f];if(b.href===l&&(!m||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const p=document.createElement("link");if(p.rel=m?"stylesheet":ut,m||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),m)return new Promise((f,b)=>{p.addEventListener("load",f),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function i(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&i(o.reason);return t().catch(i)})};/*! Capacitor: https://capacitorjs.com/ - MIT License */var R;(function(r){r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE"})(R||(R={}));class L extends Error{constructor(t,e,n){super(t),this.message=t,this.code=e,this.data=n}}const ht=r=>{var t,e;return r!=null&&r.androidBridge?"android":!((e=(t=r==null?void 0:r.webkit)===null||t===void 0?void 0:t.messageHandlers)===null||e===void 0)&&e.bridge?"ios":"web"},vt=r=>{const t=r.CapacitorCustomPlatform||null,e=r.Capacitor||{},n=e.Plugins=e.Plugins||{},s=()=>t!==null?t.name:ht(r),i=()=>s()!=="web",a=u=>{const d=l.get(u);return!!(d!=null&&d.platforms.has(s())||o(u))},o=u=>{var d;return(d=e.PluginHeaders)===null||d===void 0?void 0:d.find(p=>p.name===u)},c=u=>r.console.error(u),l=new Map,m=(u,d={})=>{const p=l.get(u);if(p)return console.warn(`Capacitor plugin "${u}" already registered. Cannot register plugins twice.`),p.proxy;const f=s(),b=o(u);let C;const q=async()=>(!C&&f in d?C=typeof d[f]=="function"?C=await d[f]():C=d[f]:t!==null&&!C&&"web"in d&&(C=typeof d.web=="function"?C=await d.web():C=d.web),C),O=(k,S)=>{var x,I;if(b){const T=b==null?void 0:b.methods.find(E=>S===E.name);if(T)return T.rtype==="promise"?E=>e.nativePromise(u,S.toString(),E):(E,M)=>e.nativeCallback(u,S.toString(),E,M);if(k)return(x=k[S])===null||x===void 0?void 0:x.bind(k)}else{if(k)return(I=k[S])===null||I===void 0?void 0:I.bind(k);throw new L(`"${u}" plugin is not implemented on ${f}`,R.Unimplemented)}},P=k=>{let S;const x=(...I)=>{const T=q().then(E=>{const M=O(E,k);if(M){const _=M(...I);return S=_==null?void 0:_.remove,_}else throw new L(`"${u}.${k}()" is not implemented on ${f}`,R.Unimplemented)});return k==="addListener"&&(T.remove=async()=>S()),T};return x.toString=()=>`${k.toString()}() { [capacitor code] }`,Object.defineProperty(x,"name",{value:k,writable:!1,configurable:!1}),x},X=P("addListener"),J=P("removeListener"),ot=(k,S)=>{const x=X({eventName:k},S),I=async()=>{const E=await x;J({eventName:k,callbackId:E},S)},T=new Promise(E=>x.then(()=>E({remove:I})));return T.remove=async()=>{console.warn("Using addListener() without 'await' is deprecated."),await I()},T},H=new Proxy({},{get(k,S){switch(S){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return b?ot:X;case"removeListener":return J;default:return P(S)}}});return n[u]=H,l.set(u,{name:u,proxy:H,platforms:new Set([...Object.keys(d),...b?[f]:[]])}),H};return e.convertFileSrc||(e.convertFileSrc=u=>u),e.getPlatform=s,e.handleError=c,e.isNativePlatform=i,e.isPluginAvailable=a,e.registerPlugin=m,e.Exception=L,e.DEBUG=!!e.DEBUG,e.isLoggingEnabled=!!e.isLoggingEnabled,e},pt=r=>r.Capacitor=vt(r),B=pt(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),D=B.registerPlugin;class K{constructor(){this.listeners={},this.retainedEventArguments={},this.windowListeners={}}addListener(t,e){let n=!1;this.listeners[t]||(this.listeners[t]=[],n=!0),this.listeners[t].push(e);const i=this.windowListeners[t];i&&!i.registered&&this.addWindowListener(i),n&&this.sendRetainedArgumentsForEvent(t);const a=async()=>this.removeListener(t,e);return Promise.resolve({remove:a})}async removeAllListeners(){this.listeners={};for(const t in this.windowListeners)this.removeWindowListener(this.windowListeners[t]);this.windowListeners={}}notifyListeners(t,e,n){const s=this.listeners[t];if(!s){if(n){let i=this.retainedEventArguments[t];i||(i=[]),i.push(e),this.retainedEventArguments[t]=i}return}s.forEach(i=>i(e))}hasListeners(t){var e;return!!(!((e=this.listeners[t])===null||e===void 0)&&e.length)}registerWindowListener(t,e){this.windowListeners[e]={registered:!1,windowEventName:t,pluginEventName:e,handler:n=>{this.notifyListeners(e,n)}}}unimplemented(t="not implemented"){return new B.Exception(t,R.Unimplemented)}unavailable(t="not available"){return new B.Exception(t,R.Unavailable)}async removeListener(t,e){const n=this.listeners[t];if(!n)return;const s=n.indexOf(e);s!==-1&&this.listeners[t].splice(s,1),this.listeners[t].length||this.removeWindowListener(this.windowListeners[t])}addWindowListener(t){window.addEventListener(t.windowEventName,t.handler),t.registered=!0}removeWindowListener(t){t&&(window.removeEventListener(t.windowEventName,t.handler),t.registered=!1)}sendRetainedArgumentsForEvent(t){const e=this.retainedEventArguments[t];e&&(delete this.retainedEventArguments[t],e.forEach(n=>{this.notifyListeners(t,n)}))}}const tt=r=>encodeURIComponent(r).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),et=r=>r.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class gt extends K{async getCookies(){const t=document.cookie,e={};return t.split(";").forEach(n=>{if(n.length<=0)return;let[s,i]=n.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");s=et(s).trim(),i=et(i).trim(),e[s]=i}),e}async setCookie(t){try{const e=tt(t.key),n=tt(t.value),s=t.expires?`; expires=${t.expires.replace("expires=","")}`:"",i=(t.path||"/").replace("path=",""),a=t.url!=null&&t.url.length>0?`domain=${t.url}`:"";document.cookie=`${e}=${n||""}${s}; path=${i}; ${a};`}catch(e){return Promise.reject(e)}}async deleteCookie(t){try{document.cookie=`${t.key}=; Max-Age=0`}catch(e){return Promise.reject(e)}}async clearCookies(){try{const t=document.cookie.split(";")||[];for(const e of t)document.cookie=e.replace(/^ +/,"").replace(/=.*/,`=;expires=${new Date().toUTCString()};path=/`)}catch(t){return Promise.reject(t)}}async clearAllCookies(){try{await this.clearCookies()}catch(t){return Promise.reject(t)}}}D("CapacitorCookies",{web:()=>new gt});const mt=async r=>new Promise((t,e)=>{const n=new FileReader;n.onload=()=>{const s=n.result;t(s.indexOf(",")>=0?s.split(",")[1]:s)},n.onerror=s=>e(s),n.readAsDataURL(r)}),yt=(r={})=>{const t=Object.keys(r);return Object.keys(r).map(s=>s.toLocaleLowerCase()).reduce((s,i,a)=>(s[i]=r[t[a]],s),{})},ft=(r,t=!0)=>r?Object.entries(r).reduce((n,s)=>{const[i,a]=s;let o,c;return Array.isArray(a)?(c="",a.forEach(l=>{o=t?encodeURIComponent(l):l,c+=`${i}=${o}&`}),c.slice(0,-1)):(o=t?encodeURIComponent(a):a,c=`${i}=${o}`),`${n}&${c}`},"").substr(1):null,bt=(r,t={})=>{const e=Object.assign({method:r.method||"GET",headers:r.headers},t),s=yt(r.headers)["content-type"]||"";if(typeof r.data=="string")e.body=r.data;else if(s.includes("application/x-www-form-urlencoded")){const i=new URLSearchParams;for(const[a,o]of Object.entries(r.data||{}))i.set(a,o);e.body=i.toString()}else if(s.includes("multipart/form-data")||r.data instanceof FormData){const i=new FormData;if(r.data instanceof FormData)r.data.forEach((o,c)=>{i.append(c,o)});else for(const o of Object.keys(r.data))i.append(o,r.data[o]);e.body=i;const a=new Headers(e.headers);a.delete("content-type"),e.headers=a}else(s.includes("application/json")||typeof r.data=="object")&&(e.body=JSON.stringify(r.data));return e};class kt extends K{async request(t){const e=bt(t,t.webFetchExtra),n=ft(t.params,t.shouldEncodeUrlParams),s=n?`${t.url}?${n}`:t.url,i=await fetch(s,e),a=i.headers.get("content-type")||"";let{responseType:o="text"}=i.ok?t:{};a.includes("application/json")&&(o="json");let c,l;switch(o){case"arraybuffer":case"blob":l=await i.blob(),c=await mt(l);break;case"json":c=await i.json();break;case"document":case"text":default:c=await i.text()}const m={};return i.headers.forEach((u,d)=>{m[d]=u}),{data:c,headers:m,status:i.status,url:i.url}}async get(t){return this.request(Object.assign(Object.assign({},t),{method:"GET"}))}async post(t){return this.request(Object.assign(Object.assign({},t),{method:"POST"}))}async put(t){return this.request(Object.assign(Object.assign({},t),{method:"PUT"}))}async patch(t){return this.request(Object.assign(Object.assign({},t),{method:"PATCH"}))}async delete(t){return this.request(Object.assign(Object.assign({},t),{method:"DELETE"}))}}D("CapacitorHttp",{web:()=>new kt});var nt;(function(r){r.Dark="DARK",r.Light="LIGHT",r.Default="DEFAULT"})(nt||(nt={}));var st;(function(r){r.StatusBar="StatusBar",r.NavigationBar="NavigationBar"})(st||(st={}));class wt extends K{async setStyle(){this.unavailable("not available for web")}async setAnimation(){this.unavailable("not available for web")}async show(){this.unavailable("not available for web")}async hide(){this.unavailable("not available for web")}}D("SystemBars",{web:()=>new wt});const it=D("Network",{web:()=>z(()=>import("./web-C5dqvLdJ.js"),[],import.meta.url).then(r=>new r.NetworkWeb)}),St="VKU_FIELD_SURVEY_DB",Ct=1,v={DRAFTS:"drafts",SURVEYS:"surveys",SYNC_QUEUE:"syncQueue",SETTINGS:"settings"};class Et{constructor(){h(this,"db",null);h(this,"initPromise",null)}async getDB(){return this.db?this.db:this.initPromise?this.initPromise:(this.initPromise=new Promise((t,e)=>{const n=indexedDB.open(St,Ct);n.onupgradeneeded=s=>{const i=s.target.result;if(i.objectStoreNames.contains(v.DRAFTS)||i.createObjectStore(v.DRAFTS,{keyPath:"id"}),!i.objectStoreNames.contains(v.SURVEYS)){const a=i.createObjectStore(v.SURVEYS,{keyPath:"id"});a.createIndex("syncStatus","syncStatus",{unique:!1}),a.createIndex("buildingId","buildingId",{unique:!1}),a.createIndex("createdAt","createdAt",{unique:!1}),a.createIndex("status","status",{unique:!1})}if(!i.objectStoreNames.contains(v.SYNC_QUEUE)){const a=i.createObjectStore(v.SYNC_QUEUE,{keyPath:"id"});a.createIndex("status","status",{unique:!1}),a.createIndex("queuedAt","queuedAt",{unique:!1}),a.createIndex("surveyId","surveyId",{unique:!1})}i.objectStoreNames.contains(v.SETTINGS)||i.createObjectStore(v.SETTINGS,{keyPath:"key"})},n.onsuccess=()=>{this.db=n.result,t(n.result)},n.onerror=()=>{e(n.error)}}),this.initPromise)}async saveDraft(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.DRAFTS,"readwrite").objectStore(v.DRAFTS).put(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async getDraft(t="current_active_draft"){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.DRAFTS,"readonly").objectStore(v.DRAFTS).get(t);o.onsuccess=()=>n(o.result||null),o.onerror=()=>s(o.error)})}async clearDraft(t="current_active_draft"){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.DRAFTS,"readwrite").objectStore(v.DRAFTS).delete(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async saveSurvey(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SURVEYS,"readwrite").objectStore(v.SURVEYS).put(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async getAllSurveys(){const t=await this.getDB();return new Promise((e,n)=>{const a=t.transaction(v.SURVEYS,"readonly").objectStore(v.SURVEYS).getAll();a.onsuccess=()=>{const o=a.result||[];o.sort((c,l)=>new Date(l.createdAt).getTime()-new Date(c.createdAt).getTime()),e(o)},a.onerror=()=>n(a.error)})}async getSurveyById(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SURVEYS,"readonly").objectStore(v.SURVEYS).get(t);o.onsuccess=()=>n(o.result||null),o.onerror=()=>s(o.error)})}async updateSurveySyncStatus(t,e,n){const s=await this.getSurveyById(t);s&&(s.syncStatus=e,s.lastSyncAttempt=new Date().toISOString(),n!==void 0&&(s.syncErrorMessage=n),e==="SYNCED"&&(s.syncErrorMessage=void 0),await this.saveSurvey(s))}async deleteSurvey(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SURVEYS,"readwrite").objectStore(v.SURVEYS).delete(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async addToSyncQueue(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SYNC_QUEUE,"readwrite").objectStore(v.SYNC_QUEUE).put(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async getPendingSyncItems(){const t=await this.getDB();return new Promise((e,n)=>{const a=t.transaction(v.SYNC_QUEUE,"readonly").objectStore(v.SYNC_QUEUE).getAll();a.onsuccess=()=>{const o=(a.result||[]).filter(c=>c.status==="PENDING"||c.status==="FAILED");o.sort((c,l)=>new Date(c.queuedAt).getTime()-new Date(l.queuedAt).getTime()),e(o)},a.onerror=()=>n(a.error)})}async getAllSyncQueue(){const t=await this.getDB();return new Promise((e,n)=>{const a=t.transaction(v.SYNC_QUEUE,"readonly").objectStore(v.SYNC_QUEUE).getAll();a.onsuccess=()=>{const o=a.result||[];o.sort((c,l)=>new Date(l.queuedAt).getTime()-new Date(c.queuedAt).getTime()),e(o)},a.onerror=()=>n(a.error)})}async updateSyncQueueItem(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SYNC_QUEUE,"readwrite").objectStore(v.SYNC_QUEUE).put(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async removeFromSyncQueue(t){const e=await this.getDB();return new Promise((n,s)=>{const o=e.transaction(v.SYNC_QUEUE,"readwrite").objectStore(v.SYNC_QUEUE).delete(t);o.onsuccess=()=>n(),o.onerror=()=>s(o.error)})}async clearCompletedSyncQueue(){const t=await this.getAllSyncQueue(),s=(await this.getDB()).transaction(v.SYNC_QUEUE,"readwrite").objectStore(v.SYNC_QUEUE);for(const i of t)i.status==="SYNCED"&&s.delete(i.id)}async getSetting(t,e){const n=await this.getDB();return new Promise(s=>{const o=n.transaction(v.SETTINGS,"readonly").objectStore(v.SETTINGS).get(t);o.onsuccess=()=>{o.result&&o.result.value!==void 0?s(o.result.value):s(e)},o.onerror=()=>s(e)})}async setSetting(t,e){const n=await this.getDB();return new Promise((s,i)=>{const c=n.transaction(v.SETTINGS,"readwrite").objectStore(v.SETTINGS).put({key:t,value:e});c.onsuccess=()=>s(),c.onerror=()=>i(c.error)})}}const g=new Et,j="VKU_SERVER_DATABASE_MOCK";class xt{getServerDatabase(){try{const t=localStorage.getItem(j);return t?JSON.parse(t):[]}catch{return[]}}saveServerDatabase(t){try{localStorage.setItem(j,JSON.stringify(t))}catch(e){console.error("Failed to save to mock server storage:",e)}}async processSurveySubmission(t){if(await new Promise(i=>setTimeout(i,350+Math.random()*300)),!navigator.onLine)throw new Error("Mạng bị gián đoạn: Không thể kết nối tới máy chủ VKU");const e=this.getServerDatabase(),n=e.findIndex(i=>i.id===t.surveyId),s={...t.payload,syncStatus:"SYNCED",lastSyncAttempt:new Date().toISOString(),syncErrorMessage:void 0};return t.action==="DELETE"?n>=0&&e.splice(n,1):n>=0?e[n]=s:e.unshift(s),this.saveServerDatabase(e),{success:!0,syncedSurveyId:t.surveyId,serverTimestamp:new Date().toISOString(),message:`Đã tiếp nhận khảo sát #${t.surveyId.slice(0,8)} tại ${t.payload.buildingName}`}}getServerRecords(){return this.getServerDatabase()}clearServerData(){localStorage.removeItem(j)}}const Y=new xt,At=D("Toast",{web:()=>z(()=>import("./web-D_fvrDWF.js"),[],import.meta.url).then(r=>new r.ToastWeb)});class Pt{constructor(){h(this,"container",null)}getContainer(){return(!this.container||!document.body.contains(this.container))&&(this.container=document.createElement("div"),this.container.className="vku-toast-container",document.body.appendChild(this.container)),this.container}async show(t,e="info",n=3200){if(B.isNativePlatform())try{await At.show({text:t,duration:n>2500?"long":"short",position:"bottom"})}catch(o){console.warn("Native toast failed, using web toast:",o)}const s=this.getContainer(),i=document.createElement("div");i.className=`vku-toast vku-toast-${e}`;const a={success:"✓",error:"✕",warning:"⚠",info:"ℹ"};i.innerHTML=`
      <span class="vku-toast-icon">${a[e]}</span>
      <span class="vku-toast-msg">${t}</span>
    `,s.appendChild(i),this.playTone(e),setTimeout(()=>{i.classList.add("vku-toast-hide"),setTimeout(()=>{i.remove()},300)},n)}playTone(t){try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const n=new e,s=n.createOscillator(),i=n.createGain();s.connect(i),i.connect(n.destination);const a=n.currentTime;i.gain.setValueAtTime(.04,a),t==="success"?(s.frequency.setValueAtTime(587.33,a),s.frequency.setValueAtTime(880,a+.08),i.gain.exponentialRampToValueAtTime(1e-4,a+.25),s.start(a),s.stop(a+.25)):t==="error"?(s.frequency.setValueAtTime(300,a),s.frequency.setValueAtTime(200,a+.1),i.gain.exponentialRampToValueAtTime(1e-4,a+.3),s.start(a),s.stop(a+.3)):(s.frequency.setValueAtTime(520,a),i.gain.exponentialRampToValueAtTime(1e-4,a+.15),s.start(a),s.stop(a+.15))}catch{}}}const y=new Pt;class Lt{constructor(){h(this,"isOnlineState",navigator.onLine);h(this,"isSyncingState",!1);h(this,"syncListeners",new Set);h(this,"networkListeners",new Set);h(this,"autoSyncInterval",null);this.initNetworkListeners()}async initNetworkListeners(){window.addEventListener("online",()=>this.handleNetworkChange(!0)),window.addEventListener("offline",()=>this.handleNetworkChange(!1));try{it.addListener("networkStatusChange",e=>{this.handleNetworkChange(e.connected)});const t=await it.getStatus();this.isOnlineState=t.connected}catch{this.isOnlineState=navigator.onLine}this.autoSyncInterval=window.setInterval(()=>{this.isOnlineState&&!this.isSyncingState&&this.processQueue(!0)},45e3)}async handleNetworkChange(t){const e=this.isOnlineState;this.isOnlineState=t,this.notifyNetworkListeners(t),t&&!e?(y.show("Đã kết nối Internet! Đang tự động đồng bộ hàng đợi...","success",3500),await this.processQueue()):!t&&e&&y.show("Mất kết nối Internet. Chuyển sang chế độ lưu trữ Offline 100%.","warning",4e3)}isOnline(){return this.isOnlineState}isSyncing(){return this.isSyncingState}onSyncChange(t){return this.syncListeners.add(t),()=>this.syncListeners.delete(t)}onNetworkChange(t){return this.networkListeners.add(t),()=>this.networkListeners.delete(t)}notifySyncListeners(){for(const t of this.syncListeners)try{t()}catch(e){console.error("Error in sync listener:",e)}}notifyNetworkListeners(t){for(const e of this.networkListeners)try{e(t)}catch(n){console.error("Error in network listener:",n)}}async submitSurvey(t){t.syncStatus="PENDING",await g.saveSurvey(t);const e={id:"sync_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),surveyId:t.id,action:"CREATE",payload:t,queuedAt:new Date().toISOString(),retryCount:0,status:"PENDING"};await g.addToSyncQueue(e),await g.clearDraft(),this.notifySyncListeners(),this.isOnlineState?(y.show("Đang đồng bộ khảo sát lên máy chủ VKU...","info",2e3),await this.processQueue()):y.show("Đã lưu phiếu khảo sát vào IndexedDB (Chế độ Ngoại tuyến). Sẽ tự động tải lên khi có mạng!","warning",4500)}async processQueue(t=!1){if(this.isSyncingState)return{processed:0,succeeded:0,failed:0};const e=await g.getPendingSyncItems();if(e.length===0)return{processed:0,succeeded:0,failed:0};if(!this.isOnlineState)return t||y.show("Không thể đồng bộ: Thiết bị đang ngoại tuyến.","warning"),{processed:0,succeeded:0,failed:0};this.isSyncingState=!0,this.notifySyncListeners();let n=0,s=0;try{for(const i of e){if(!navigator.onLine){i.status="PENDING",await g.updateSyncQueueItem(i);break}i.status="SYNCING",await g.updateSyncQueueItem(i),await g.updateSurveySyncStatus(i.surveyId,"SYNCING"),this.notifySyncListeners();try{await Y.processSurveySubmission(i),i.status="SYNCED",i.lastError=void 0,await g.updateSyncQueueItem(i),await g.updateSurveySyncStatus(i.surveyId,"SYNCED"),n++}catch(a){const o=a instanceof Error?a.message:"Lỗi kết nối máy chủ";i.retryCount+=1,i.status="FAILED",i.lastError=o,await g.updateSyncQueueItem(i),await g.updateSurveySyncStatus(i.surveyId,"FAILED",o),s++}}}finally{this.isSyncingState=!1,this.notifySyncListeners()}return t||(s===0&&n>0?y.show(`Đồng bộ thành công ${n} phiếu khảo sát!`,"success"):s>0&&y.show(`Đã đồng bộ ${n}, lỗi ${s} phiếu. Sẽ tự động thử lại sau.`,"warning")),{processed:e.length,succeeded:n,failed:s}}async deleteSurvey(t){await g.deleteSurvey(t);const e=await g.getAllSyncQueue();for(const n of e)n.surveyId===t&&await g.removeFromSyncQueue(n.id);this.notifySyncListeners(),y.show("Đã xóa phiếu khảo sát.","info")}async retrySingleItem(t){const n=(await g.getAllSyncQueue()).find(s=>s.id===t);n&&(n.status="PENDING",await g.updateSyncQueueItem(n),await this.processQueue())}cleanup(){this.autoSyncInterval&&clearInterval(this.autoSyncInterval)}}const w=new Lt;class It{constructor(t,e){h(this,"container");h(this,"props");h(this,"deferredPrompt",null);h(this,"unsubscribeSync");h(this,"unsubscribeNetwork");const n=document.getElementById(t);if(!n)throw new Error(`Container #${t} not found`);this.container=n,this.props=e,this.initPwaPrompt(),this.subscribeEvents(),this.render()}initPwaPrompt(){window.addEventListener("beforeinstallprompt",t=>{t.preventDefault(),this.deferredPrompt=t,this.renderInstallButton()})}subscribeEvents(){this.unsubscribeSync=w.onSyncChange(()=>this.updateStatusBadges()),this.unsubscribeNetwork=w.onNetworkChange(()=>this.updateStatusBadges())}setTab(t){this.props.activeTab=t,this.renderTabs()}async render(){this.container.innerHTML=`
      <header class="vku-header">
        <div class="vku-header-top">
          <div class="vku-brand">
            <img src="./apple-touch-icon.png" alt="Logo" class="vku-header-logo-img" />
            <div class="vku-brand-title">
              <h1>Khảo sát Thực địa</h1>
              <p class="vku-brand-sub">Thanh tra Cơ sở Ngoại tuyến</p>
            </div>
          </div>

          <div class="vku-header-actions">
            <!-- Network status pill -->
            <div id="vku-network-pill" class="vku-status-pill online">
              <span class="vku-status-dot"></span>
              <span class="vku-status-text">Trực tuyến</span>
            </div>

            <!-- Sync Queue Quick Button -->
            <button id="vku-quick-sync-btn" class="vku-btn-sync" title="Hàng đợi đồng bộ dữ liệu">
              <svg class="vku-icon-sync" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
              </svg>
              <span class="vku-sync-label">Đồng bộ</span>
              <span id="vku-pending-badge" class="vku-badge-count" style="display: none;">0</span>
            </button>

            <!-- PWA Install Button -->
            <button id="vku-install-btn" class="vku-btn-install" style="display: none;" title="Cài đặt ứng dụng lên thiết bị">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
              </svg>
              <span>Cài đặt PWA</span>
            </button>
          </div>
        </div>
      </header>
    `,this.renderTabs(),this.renderInstallButton(),await this.updateStatusBadges(),this.bindEvents()}renderTabs(){const t=document.getElementById("bottom-nav-container");if(!t)return;const e=[{id:"new",label:"Khảo sát",icon:"📝"},{id:"list",label:"Danh sách",icon:"📋"},{id:"map",label:"Bản đồ",icon:"🗺️"},{id:"sync",label:"Đồng bộ",icon:"🔄"}];t.innerHTML=`
      <nav class="vku-bottom-nav">
        ${e.map(n=>`
          <button class="vku-tab-item ${this.props.activeTab===n.id?"active":""}" data-tab="${n.id}">
            <span class="vku-tab-icon">${n.icon}</span>
            <span class="vku-tab-label">${n.label}</span>
            ${n.id==="sync"?'<span id="vku-tab-sync-count" class="vku-tab-count"></span>':""}
          </button>
        `).join("")}
      </nav>
    `,t.querySelectorAll(".vku-tab-item").forEach(n=>{n.addEventListener("click",()=>{const s=n.getAttribute("data-tab");s&&this.props.onTabChange(s)})})}renderInstallButton(){const t=this.container.querySelector("#vku-install-btn");t&&(this.deferredPrompt?(t.style.display="inline-flex",t.onclick=async()=>{if(!this.deferredPrompt)return;this.deferredPrompt.prompt();const{outcome:e}=await this.deferredPrompt.userChoice;e==="accepted"&&(this.deferredPrompt=null,t.style.display="none")}):t.style.display="none")}async updateStatusBadges(){const t=this.container.querySelector("#vku-network-pill"),e=this.container.querySelector("#vku-quick-sync-btn"),n=this.container.querySelector("#vku-pending-badge"),s=document.querySelector("#vku-tab-sync-count"),i=w.isOnline(),a=w.isSyncing(),c=(await g.getPendingSyncItems()).length;t&&(a?(t.className="vku-status-pill syncing",t.innerHTML=`
          <span class="vku-status-dot pulse"></span>
          <span class="vku-status-text">Đang đồng bộ...</span>
        `):i?(t.className="vku-status-pill online",t.innerHTML=`
          <span class="vku-status-dot"></span>
          <span class="vku-status-text">Trực tuyến</span>
        `):(t.className="vku-status-pill offline",t.innerHTML=`
          <span class="vku-status-dot"></span>
          <span class="vku-status-text">Ngoại tuyến (Offline 100%)</span>
        `)),e&&(a?e.classList.add("spinning"):e.classList.remove("spinning")),n&&(c>0?(n.style.display="inline-block",n.textContent=`${c}`):n.style.display="none"),s&&(c>0?(s.style.display="inline-block",s.textContent=`${c}`):s.style.display="none")}bindEvents(){const t=this.container.querySelector("#vku-quick-sync-btn");t==null||t.addEventListener("click",()=>{this.props.onOpenSyncModal()})}destroy(){var t,e;(t=this.unsubscribeSync)==null||t.call(this),(e=this.unsubscribeNetwork)==null||e.call(this)}}var N;(function(r){r.Prompt="PROMPT",r.Camera="CAMERA",r.Photos="PHOTOS"})(N||(N={}));var F;(function(r){r.Rear="REAR",r.Front="FRONT"})(F||(F={}));var W;(function(r){r.Uri="uri",r.Base64="base64",r.DataUrl="dataUrl"})(W||(W={}));var V;(function(r){r[r.Photo=0]="Photo",r[r.Video=1]="Video"})(V||(V={}));var U;(function(r){r[r.Photo=0]="Photo",r[r.Video=1]="Video",r[r.All=2]="All"})(U||(U={}));var at;(function(r){r[r.JPEG=0]="JPEG",r[r.PNG=1]="PNG"})(at||(at={}));var rt;(function(r){r.CameraPermissionDenied="OS-PLUG-CAMR-0003",r.GalleryPermissionDenied="OS-PLUG-CAMR-0005",r.NoCameraAvailable="OS-PLUG-CAMR-0007",r.TakePhotoCancelled="OS-PLUG-CAMR-0006",r.TakePhotoFailed="OS-PLUG-CAMR-0010",r.TakePhotoInvalidArguments="OS-PLUG-CAMR-0014",r.InvalidImageData="OS-PLUG-CAMR-0008",r.EditPhotoFailed="OS-PLUG-CAMR-0009",r.EditPhotoCancelled="OS-PLUG-CAMR-0013",r.EditPhotoEmptyUri="OS-PLUG-CAMR-0024",r.ImageNotFound="OS-PLUG-CAMR-0011",r.ProcessImageFailed="OS-PLUG-CAMR-0012",r.ChooseMediaFailed="OS-PLUG-CAMR-0018",r.ChooseMediaCancelled="OS-PLUG-CAMR-0020",r.MediaPathError="OS-PLUG-CAMR-0021",r.FetchImageFromUriFailed="OS-PLUG-CAMR-0028",r.RecordVideoFailed="OS-PLUG-CAMR-0016",r.RecordVideoCancelled="OS-PLUG-CAMR-0017",r.VideoNotFound="OS-PLUG-CAMR-0025",r.PlayVideoFailed="OS-PLUG-CAMR-0023",r.EncodeResultFailed="OS-PLUG-CAMR-0019",r.FileNotFound="OS-PLUG-CAMR-0027",r.InvalidArgument="OS-PLUG-CAMR-0031",r.GeneralError="OS-PLUG-CAMR-0026"})(rt||(rt={}));class Tt extends K{async takePhoto(t){return new Promise(async(e,n)=>{t.webUseInput?this.takePhotoCameraInputExperience(t,e,n):this.takePhotoCameraExperience(t,e,n)})}async recordVideo(t){throw this.unimplemented("recordVideo is not implemented on Web.")}async playVideo(t){throw this.unimplemented("playVideo is not implemented on Web.")}async chooseFromGallery(t){return new Promise(async(e,n)=>{this.galleryInputExperience(t,e,n)})}async editPhoto(t){throw this.unimplemented("editPhoto is not implemented on Web.")}async editURIPhoto(t){throw this.unimplemented("editURIPhoto is not implemented on Web.")}async getPhoto(t){return new Promise(async(e,n)=>{if(t.webUseInput||t.source===N.Photos)this.fileInputExperience(t,e,n);else if(t.source===N.Prompt){let s=document.querySelector("pwa-action-sheet");s||(s=document.createElement("pwa-action-sheet"),document.body.appendChild(s)),s.header=t.promptLabelHeader||"Photo",s.cancelable=!1,s.options=[{title:t.promptLabelPhoto||"From Photos"},{title:t.promptLabelPicture||"Take Picture"}],s.addEventListener("onSelection",async i=>{i.detail===0?this.fileInputExperience(t,e,n):this.cameraExperience(t,e,n)})}else this.cameraExperience(t,e,n)})}async pickImages(t){return new Promise(async(e,n)=>{this.multipleFileInputExperience(e,n)})}async cameraExperience(t,e,n){await this._setupPWACameraModal(t.direction,s=>this._getCameraPhoto(s,t),()=>this.fileInputExperience(t,e,n),e,n)}fileInputExperience(t,e,n){let s=document.querySelector("#_capacitor-camera-input");const i=()=>{var a;(a=s.parentNode)===null||a===void 0||a.removeChild(s)};s||(s=document.createElement("input"),s.id="_capacitor-camera-input",s.type="file",s.hidden=!0,document.body.appendChild(s),s.addEventListener("change",a=>{const o=s.files[0];let c="jpeg";if(o.type==="image/png"?c="png":o.type==="image/gif"&&(c="gif"),t.resultType==="dataUrl"||t.resultType==="base64"){const l=new FileReader;l.addEventListener("load",()=>{if(t.resultType==="dataUrl")e({dataUrl:l.result,format:c});else if(t.resultType==="base64"){const m=l.result.split(",")[1];e({base64String:m,format:c})}i()}),l.readAsDataURL(o)}else e({webPath:URL.createObjectURL(o),format:c}),i()}),s.addEventListener("cancel",a=>{n(new L("User cancelled photos app")),i()})),s.accept="image/*",s.capture=!0,t.source===N.Photos||t.source===N.Prompt?s.removeAttribute("capture"):t.direction===F.Front?s.capture="user":t.direction===F.Rear&&(s.capture="environment"),s.click()}multipleFileInputExperience(t,e){let n=document.querySelector("#_capacitor-camera-input-multiple");const s=()=>{var i;(i=n.parentNode)===null||i===void 0||i.removeChild(n)};n||(n=document.createElement("input"),n.id="_capacitor-camera-input-multiple",n.type="file",n.hidden=!0,n.multiple=!0,document.body.appendChild(n),n.addEventListener("change",i=>{const a=[];for(let o=0;o<n.files.length;o++){const c=n.files[o];let l="jpeg";c.type==="image/png"?l="png":c.type==="image/gif"&&(l="gif"),a.push({webPath:URL.createObjectURL(c),format:l})}t({photos:a}),s()}),n.addEventListener("cancel",i=>{e(new L("User cancelled photos app")),s()})),n.accept="image/*",n.click()}_getCameraPhoto(t,e){return new Promise((n,s)=>{const i=new FileReader,a=this._getFileFormat(t);e.resultType==="uri"?n({webPath:URL.createObjectURL(t),format:a,saved:!1}):(i.readAsDataURL(t),i.onloadend=()=>{const o=i.result;e.resultType==="dataUrl"?n({dataUrl:o,format:a,saved:!1}):n({base64String:o.split(",")[1],format:a,saved:!1})},i.onerror=o=>{s(o)})})}async takePhotoCameraExperience(t,e,n){await this._setupPWACameraModal(t.cameraDirection,s=>{var i;return this._buildPhotoMediaResult(s,(i=t.includeMetadata)!==null&&i!==void 0?i:!1)},()=>this.takePhotoCameraInputExperience(t,e,n),e,n)}takePhotoCameraInputExperience(t,e,n){const s=this._createFileInput("_capacitor-camera-input-takephoto"),i=()=>{var a;(a=s.parentNode)===null||a===void 0||a.removeChild(s)};s.onchange=async a=>{var o;if(!this._validateFileInput(s,n,i))return;const c=s.files[0];e(await this._buildPhotoMediaResult(c,(o=t.includeMetadata)!==null&&o!==void 0?o:!1)),i()},s.oncancel=()=>{n(new L("User cancelled photos app")),i()},s.accept="image/*",t.cameraDirection===F.Front?s.capture="user":s.capture="environment",s.click()}galleryInputExperience(t,e,n){var s,i;const a=this._createFileInput("_capacitor-camera-input-gallery");a.multiple=(s=t.allowMultipleSelection)!==null&&s!==void 0?s:!1;const o=()=>{var l;(l=a.parentNode)===null||l===void 0||l.removeChild(a)};a.onchange=async l=>{var m;if(!this._validateFileInput(a,n,o))return;const u=[];for(let d=0;d<a.files.length;d++){const p=a.files[d];if(p.type.startsWith("image/"))u.push(await this._buildPhotoMediaResult(p,(m=t.includeMetadata)!==null&&m!==void 0?m:!1));else if(p.type.startsWith("video/")){const f=this._getFileFormat(p);let b,C,q;try{const P=await this._getVideoMetadata(p);b=P.thumbnail,t.includeMetadata&&(C=P.resolution,q=P.duration)}catch(P){console.warn("Failed to get video metadata:",P)}const O={type:V.Video,thumbnail:b,webPath:URL.createObjectURL(p),saved:!1};t.includeMetadata&&(O.metadata={format:f,resolution:C,size:p.size,creationDate:new Date(p.lastModified).toISOString(),duration:q}),u.push(O)}}e({results:u}),o()},a.oncancel=()=>{n(new L("User cancelled photos app")),o()};const c=(i=t.mediaType)!==null&&i!==void 0?i:U.Photo;c===U.Photo?a.accept="image/*":c===U.Video?a.accept="video/*":a.accept="image/*,video/*",a.click()}_getFileFormat(t){return t.type==="image/png"?"png":t.type==="image/gif"?"gif":t.type.startsWith("video/")?t.type.split("/")[1]:t.type.startsWith("image/")?"jpeg":t.type.split("/")[1]||"jpeg"}async _buildPhotoMediaResult(t,e){const n=this._getFileFormat(t),s=await this._getBase64FromFile(t),i={type:V.Photo,thumbnail:s,webPath:URL.createObjectURL(t),saved:!1};if(e){const a=await this._getImageResolution(t);i.metadata={format:n,resolution:a,size:t.size,creationDate:"lastModified"in t?new Date(t.lastModified).toISOString():new Date().toISOString()}}return i}_validateFileInput(t,e,n){if(!t.files||t.files.length===0){const s=t.multiple?"No files selected":"No file selected";return e(new L(s)),n(),!1}return!0}async _setupPWACameraModal(t,e,n,s,i){if(customElements.get("pwa-camera-modal")){const a=document.createElement("pwa-camera-modal");a.facingMode=t===F.Front?"user":"environment",document.body.appendChild(a);try{await a.componentOnReady(),a.addEventListener("onPhoto",async o=>{const c=o.detail;c===null?i(new L("User cancelled photos app")):c instanceof Error?i(c):s(await e(c)),a.dismiss(),document.body.removeChild(a)}),a.present()}catch{n()}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/web/pwa-elements."),n()}_createFileInput(t){let e=document.querySelector(`#${t}`);return e||(e=document.createElement("input"),e.id=t,e.type="file",e.hidden=!0,document.body.appendChild(e)),e}async _getImageResolution(t){try{const e=await createImageBitmap(t),n=`${e.width}x${e.height}`;return e.close(),n}catch(e){console.warn("Failed to get image resolution:",e);return}}_getBase64FromFile(t){return new Promise((e,n)=>{const s=new FileReader;s.onloadend=()=>{const a=s.result.split(",")[1];e(a)},s.onerror=i=>{n(i)},s.readAsDataURL(t)})}_getVideoMetadata(t){return new Promise(e=>{const n=document.createElement("video");n.preload="metadata",n.muted=!0,n.onloadedmetadata=()=>{const s=Math.min(1,n.duration*.1);n.currentTime=s},n.onseeked=()=>{const s={resolution:`${n.videoWidth}x${n.videoHeight}`,duration:n.duration};try{const i=document.createElement("canvas");i.width=n.videoWidth,i.height=n.videoHeight;const a=i.getContext("2d");a&&(a.drawImage(n,0,0,i.width,i.height),s.thumbnail=i.toDataURL("image/jpeg",.8).split(",")[1])}catch(i){console.warn("Failed to generate video thumbnail:",i)}URL.revokeObjectURL(n.src),e(s)},n.onerror=()=>{URL.revokeObjectURL(n.src),e({})},n.src=URL.createObjectURL(t)})}async checkPermissions(){if(typeof navigator>"u"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}async pickLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}async getLimitedLibraryPhotos(){throw this.unavailable("Not implemented on web.")}}const Nt=D("Camera",{web:()=>new Tt});function Dt(r){r.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return new Proxy({},{get(n,s){return(i,a,o)=>{const c=r.Capacitor.Plugins[e];if(c===void 0){o(new Error(`Capacitor plugin ${e} not found`));return}if(typeof c[s]!="function"){o(new Error(`Method ${s} not found in Capacitor plugin ${e}`));return}(async()=>{try{const l=await c[s](i);a(l)}catch(l){o(l)}})()}}})}})}function Ft(r){r.CapacitorUtils.Synapse=new Proxy({},{get(t,e){return r.cordova.plugins[e]}})}function $t(r=!1){typeof window>"u"||(window.CapacitorUtils=window.CapacitorUtils||{},window.Capacitor!==void 0&&!r?Dt(window):window.cordova!==void 0&&Ft(window))}const Rt=D("Geolocation",{web:()=>z(()=>import("./web-D0ECAhbv.js"),[],import.meta.url).then(r=>new r.GeolocationWeb)});$t();const A={lat:15.9753,lng:108.2532},$=[{id:"bld-a",code:"KHU_A",name:"Khu A - Tòa Nhà Hiệu Bộ",floors:6,type:"ADMIN",lat:15.9758,lng:108.2528,description:"Văn phòng Ban Giám hiệu, Phòng Đào tạo, Hành chính tổng hợp"},{id:"bld-b",code:"KHU_B",name:"Khu B - Giảng Đường & Khoa CNTT",floors:5,type:"ACADEMIC",lat:15.9752,lng:108.2524,description:"Các phòng học lý thuyết, Khoa Công nghệ Thông tin, Phòng Lab AI"},{id:"bld-c",code:"KHU_C",name:"Khu C - Giảng Đường & Phòng Lab",floors:5,type:"ACADEMIC",lat:15.9748,lng:108.253,description:"Khoa Kỹ thuật Máy tính, Lab Điện tử Viễn thông, IoT"},{id:"bld-v",code:"KHU_V",name:"Khu V - Trung Tâm Nghiên Cứu VKU-KOICA",floors:4,type:"ACADEMIC",lat:15.9762,lng:108.2535,description:"Trung tâm nghiên cứu sáng tạo, Hợp tác quốc tế Hàn Quốc KOICA"},{id:"bld-lib",code:"THU_VIEN",name:"Tòa Nhà Thư Viện Số VKU",floors:4,type:"ACADEMIC",lat:15.9755,lng:108.2538,description:"Khu tự học, không gian Co-working, thư viện điện tử thông minh"},{id:"bld-ktx",code:"KTX",name:"Ký Túc Xá Sinh Viên VKU",floors:6,type:"DORM",lat:15.974,lng:108.2542,description:"Khu lưu trú ký túc xá sinh viên trong nước và quốc tế"},{id:"bld-sports",code:"NHA_DA_NANG",name:"Nhà Thể Thao Đa Năng & Sân Bóng",floors:2,type:"SPORTS",lat:15.9765,lng:108.254,description:"Sân bóng rổ, cầu lông, bóng đá cỏ nhân tạo và thể thao"},{id:"bld-canteen",code:"CAN_TIN",name:"Khu Căn Tin & Dịch Vụ",floors:2,type:"SERVICES",lat:15.9745,lng:108.2535,description:"Nhà ăn sinh viên, quầy tiện ích và căn tin trung tâm"}],Bt=[{id:"cat-electric",name:"Hệ thống điện & Chiếu sáng",icon:"⚡",subItems:["Bóng đèn LED trần","Ổ cắm điện","Công tắc âm tường","Tủ điện tổng","Quạt trần / Quạt treo"]},{id:"cat-hvac",name:"Điều hòa & Thông gió",icon:"❄️",subItems:["Máy lạnh âm trần","Remote máy lạnh","Hệ thống thông gió","Cục nóng ngoài trời"]},{id:"cat-it",name:"Thiết bị IT & Giảng dạy",icon:"🖥️",subItems:["Máy chiếu (Projector)","Màn chiếu điện","Dàn âm thanh / Micro","Dây HDMI / VGA","Bộ phát Wi-Fi AP"]},{id:"cat-furniture",name:"Bàn ghế & Nội thất phòng học",icon:"🪑",subItems:["Bàn sinh viên liền ghế","Ghế xoay giảng viên","Bục giảng / Bảng viết từ","Cửa đi chính","Cửa sổ kính"]},{id:"cat-fire",name:"PCCC & An toàn trường học",icon:"🧯",subItems:["Bình chữa cháy CO2/Bột","Đèn Exit thoát hiểm","Hộp vòi cứu hỏa","Chuông báo cháy"]},{id:"cat-sanitary",name:"Vệ sinh & Cơ sở hạ tầng",icon:"🚰",subItems:["Hệ thống vòi nước","Bồn rửa tay","Gương phòng vệ sinh","Ống thoát nước","Sơn tường bong tróc"]}];function Ut(r,t,e,n){const i=r*Math.PI/180,a=e*Math.PI/180,o=(e-r)*Math.PI/180,c=(n-t)*Math.PI/180,l=Math.sin(o/2)*Math.sin(o/2)+Math.cos(i)*Math.cos(a)*Math.sin(c/2)*Math.sin(c/2),m=2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l));return Math.round(6371e3*m)}function G(r,t){let e=$[0],n=1/0;for(const s of $){const i=Ut(r,t,s.lat,s.lng);i<n&&(n=i,e=s)}return{name:e.name,distanceM:n}}class qt{isNative(){return B.isNativePlatform()}getPlatformName(){return B.getPlatform()}async takePhoto(){if(this.isNative())try{const t=await Nt.getPhoto({resultType:W.DataUrl,source:N.Camera,quality:75,allowEditing:!1,width:1280,height:960});if(t.dataUrl)return t.dataUrl}catch(t){console.warn("Capacitor Camera error, falling back to Web File Picker:",t)}return new Promise((t,e)=>{const n=document.createElement("input");n.type="file",n.accept="image/*",n.setAttribute("capture","environment"),n.onchange=async()=>{var i;const s=(i=n.files)==null?void 0:i[0];if(!s){e(new Error("Chưa chọn ảnh nào"));return}try{const a=await this.compressImageFile(s,1280,.75);t(a)}catch(a){e(a)}},n.onerror=()=>e(new Error("Không thể mở camera/thư viện ảnh")),n.click()})}async getCurrentLocation(){if(this.isNative())try{const t=await Rt.getCurrentPosition({enableHighAccuracy:!0,timeout:12e3}),e=G(t.coords.latitude,t.coords.longitude);return{latitude:Number(t.coords.latitude.toFixed(6)),longitude:Number(t.coords.longitude.toFixed(6)),accuracy:Math.round(t.coords.accuracy),timestamp:t.timestamp,buildingNear:`${e.name} (~${e.distanceM}m)`}}catch(t){console.warn("Capacitor Geolocation error, falling back to web:",t)}return new Promise(t=>{if(!("geolocation"in navigator)){const e=G(A.lat,A.lng);t({latitude:A.lat,longitude:A.lng,accuracy:50,timestamp:Date.now(),buildingNear:`${e.name} (Tọa độ mặc định VKU)`});return}navigator.geolocation.getCurrentPosition(e=>{const n=G(e.coords.latitude,e.coords.longitude);t({latitude:Number(e.coords.latitude.toFixed(6)),longitude:Number(e.coords.longitude.toFixed(6)),accuracy:Math.round(e.coords.accuracy),timestamp:e.timestamp,buildingNear:`${n.name} (~${n.distanceM}m)`})},e=>{console.warn("Web Geolocation error or denied:",e.message);const n=G(A.lat,A.lng);t({latitude:A.lat,longitude:A.lng,accuracy:30,timestamp:Date.now(),buildingNear:`${n.name} (Khuôn viên VKU)`})},{enableHighAccuracy:!0,timeout:8e3,maximumAge:3e4})})}compressImageFile(t,e,n){return new Promise((s,i)=>{const a=new FileReader;a.onload=o=>{var l;const c=new Image;c.onload=()=>{var b;const m=document.createElement("canvas");let{width:u,height:d}=c;u>e&&(d=Math.round(d*e/u),u=e),m.width=u,m.height=d;const p=m.getContext("2d");if(!p){s((b=o.target)==null?void 0:b.result);return}p.drawImage(c,0,0,u,d);const f=m.toDataURL("image/jpeg",n);s(f)},c.onerror=()=>i(new Error("Không thể xử lý định dạng ảnh")),c.src=(l=o.target)==null?void 0:l.result},a.onerror=()=>i(new Error("Không thể đọc file ảnh")),a.readAsDataURL(t)})}}const Q=new qt;class Ot{constructor(t,e){h(this,"container");h(this,"props");h(this,"photos",[]);h(this,"location",{latitude:A.lat,longitude:A.lng,accuracy:30,buildingNear:"Khu A - Tòa Nhà Hiệu Bộ (~20m)"});h(this,"autoSaveTimer",null);h(this,"isCapturingGps",!1);h(this,"isCapturingPhoto",!1);const n=document.getElementById(t);if(!n)throw new Error(`Container #${t} not found`);this.container=n,this.props=e,this.render(),this.loadDraftAndInspector()}async render(){const t=Q.getPlatformName();this.container.innerHTML=`
      <div class="vku-card vku-form-container">
        <div class="vku-card-header">
          <div>
            <h2 class="vku-card-title">📝 Phiếu Kiểm Tra Cơ Sở Vật Chất VKU</h2>
            <p class="vku-card-sub">
              Hệ thống lưu ngoại tuyến 100% • Tự động lưu bản nháp IndexedDB
            </p>
          </div>
          <div class="vku-draft-badge" id="vku-draft-status">
            <span class="vku-draft-indicator"></span>
            <span class="vku-draft-label">Bản nháp đã lưu</span>
          </div>
        </div>

        <form id="vku-survey-form" class="vku-form" novalidate>
          <!-- 1. Vị trí & Tòa nhà VKU -->
          <div class="vku-form-section">
            <h3 class="vku-section-title">
              <span class="vku-section-num">1</span> Vị trí & Khu vực kiểm tra
            </h3>
            
            <div class="vku-grid-2">
              <div class="vku-form-group">
                <label for="f-building" class="vku-label">Tòa nhà / Phân khu VKU <span class="req">*</span></label>
                <select id="f-building" class="vku-select" required>
                  <option value="">-- Chọn tòa nhà / cơ sở --</option>
                  ${$.map(e=>`<option value="${e.id}">${e.name} (${e.floors} tầng)</option>`).join("")}
                </select>
              </div>

              <div class="vku-grid-2-inner">
                <div class="vku-form-group">
                  <label for="f-floor" class="vku-label">Tầng <span class="req">*</span></label>
                  <input type="text" id="f-floor" class="vku-input" placeholder="Ví dụ: Tầng 3" required />
                </div>
                <div class="vku-form-group">
                  <label for="f-room" class="vku-label">Phòng / Khu vực <span class="req">*</span></label>
                  <input type="text" id="f-room" class="vku-input" placeholder="VD: B.302, Cầu thang" required />
                </div>
              </div>
            </div>

            <!-- GPS Location Card -->
            <div class="vku-gps-card">
              <div class="vku-gps-header">
                <div class="vku-gps-info">
                  <span class="vku-gps-pin">📍</span>
                  <div>
                    <span class="vku-gps-title">Tọa độ GPS Khảo sát</span>
                    <p class="vku-gps-coord" id="vku-gps-display">
                      ${this.location.latitude.toFixed(5)}, ${this.location.longitude.toFixed(5)} (±${this.location.accuracy||20}m)
                    </p>
                    <span class="vku-gps-near" id="vku-gps-near">${this.location.buildingNear||"Khuôn viên VKU"}</span>
                  </div>
                </div>
                <button type="button" id="vku-btn-gps" class="vku-btn-sub">
                  <span id="vku-gps-spinner" class="vku-spin-hidden">↻</span>
                  <span>Lấy GPS</span>
                </button>
              </div>
            </div>
          </div>

          <!-- 2. Hạng mục kiểm tra & Mức độ -->
          <div class="vku-form-section">
            <h3 class="vku-section-title">
              <span class="vku-section-num">2</span> Hạng mục & Tình trạng thiết bị
            </h3>

            <div class="vku-grid-2">
              <div class="vku-form-group">
                <label for="f-category" class="vku-label">Nhóm hạng mục cơ sở <span class="req">*</span></label>
                <select id="f-category" class="vku-select" required>
                  <option value="">-- Chọn nhóm hạng mục --</option>
                  ${Bt.map(e=>`<option value="${e.name}">${e.icon} ${e.name}</option>`).join("")}
                </select>
              </div>

              <div class="vku-form-group">
                <label for="f-item" class="vku-label">Tên trang thiết bị cụ thể <span class="req">*</span></label>
                <input type="text" id="f-item" class="vku-input" placeholder="VD: Máy chiếu Panasonic, Quạt trần..." required />
              </div>
            </div>

            <!-- Status Rating (Severity) -->
            <div class="vku-form-group">
              <label class="vku-label">Mức độ hoạt động / Hỏng hóc <span class="req">*</span></label>
              <div class="vku-severity-group" id="f-severity-group">
                <label class="vku-severity-option opt-normal">
                  <input type="radio" name="severity" value="NORMAL" checked />
                  <span class="vku-severity-box">
                    <span class="vku-sev-icon">🟢</span>
                    <span class="vku-sev-title">Bình thường</span>
                    <span class="vku-sev-desc">Hoạt động tốt, ổn định</span>
                  </span>
                </label>

                <label class="vku-severity-option opt-minor">
                  <input type="radio" name="severity" value="MINOR" />
                  <span class="vku-severity-box">
                    <span class="vku-sev-icon">🟡</span>
                    <span class="vku-sev-title">Bảo trì nhẹ</span>
                    <span class="vku-sev-desc">Xuống cấp, chập chờn</span>
                  </span>
                </label>

                <label class="vku-severity-option opt-critical">
                  <input type="radio" name="severity" value="CRITICAL" />
                  <span class="vku-severity-box">
                    <span class="vku-sev-icon">🔴</span>
                    <span class="vku-sev-title">Hỏng nặng / Khẩn cấp</span>
                    <span class="vku-sev-desc">Nguy hiểm, ngưng hoạt động</span>
                  </span>
                </label>
              </div>
            </div>

            <!-- Notes -->
            <div class="vku-form-group">
              <label for="f-notes" class="vku-label">Mô tả chi tiết tình trạng</label>
              <textarea id="f-notes" class="vku-textarea" rows="3" placeholder="Ghi chú thêm về hiện trạng hỏng hóc, nguy cơ hoặc đề xuất sửa chữa..."></textarea>
            </div>
          </div>

          <!-- 3. Chụp ảnh hiện trường (Capacitor Camera Bridge) -->
          <div class="vku-form-section">
            <div class="vku-photo-header">
              <div>
                <h3 class="vku-section-title">
                  <span class="vku-section-num">3</span> Hình ảnh minh chứng hiện trường
                </h3>
                <p class="vku-section-sub">
                  ${t==="web"?"Chế độ Web Camera / Tải ảnh lên":`Đang kết nối Capacitor ${t.toUpperCase()} Camera`}
                </p>
              </div>
              <button type="button" id="vku-btn-camera" class="vku-btn-camera">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
                <span>Chụp ảnh mới</span>
              </button>
            </div>

            <div id="vku-photo-gallery" class="vku-photo-gallery">
              <div class="vku-photo-empty" id="vku-photo-empty">
                Chưa có hình ảnh. Bấm "Chụp ảnh mới" để thêm minh chứng hiện trường.
              </div>
            </div>
          </div>

          <!-- 4. Thông tin Cán bộ / Người kiểm tra -->
          <div class="vku-form-section">
            <h3 class="vku-section-title">
              <span class="vku-section-num">4</span> Thông tin người khảo sát
            </h3>

            <div class="vku-grid-2">
              <div class="vku-form-group">
                <label for="f-inspector-name" class="vku-label">Họ và tên cán bộ / Sinh viên <span class="req">*</span></label>
                <input type="text" id="f-inspector-name" class="vku-input" placeholder="VD: Hoàng Văn Quyến" required />
              </div>

              <div class="vku-form-group">
                <label for="f-inspector-email" class="vku-label">Email công vụ VKU (@vku.udn.vn) <span class="req">*</span></label>
                <input type="email" id="f-inspector-email" class="vku-input" placeholder="VD: quyenhv@vku.udn.vn" required />
              </div>
            </div>
          </div>

          <!-- Submit Bar -->
          <div class="vku-form-actions">
            <button type="button" id="vku-btn-clear-draft" class="vku-btn-secondary">
              Xóa bản nháp
            </button>

            <button type="submit" id="vku-btn-submit" class="vku-btn-primary">
              <span class="vku-btn-submit-icon">✓</span>
              <span>Lưu & Gửi Báo Cáo Khảo Sát</span>
            </button>
          </div>
        </form>
      </div>
    `,this.bindEvents()}bindEvents(){const t=this.container.querySelector("#vku-survey-form"),e=this.container.querySelector("#vku-btn-camera"),n=this.container.querySelector("#vku-btn-gps"),s=this.container.querySelector("#vku-btn-clear-draft");t==null||t.addEventListener("input",()=>this.scheduleAutoSave()),t==null||t.addEventListener("change",()=>this.scheduleAutoSave()),n==null||n.addEventListener("click",async()=>{await this.captureGps()}),e==null||e.addEventListener("click",async()=>{await this.capturePhoto()}),s==null||s.addEventListener("click",async()=>{confirm("Bạn có chắc chắn muốn xóa bản nháp hiện tại không?")&&(await g.clearDraft(),this.resetForm(),y.show("Đã xóa bản nháp!","info"))}),t==null||t.addEventListener("submit",async i=>{i.preventDefault(),await this.handleSubmit()})}async captureGps(){if(this.isCapturingGps)return;this.isCapturingGps=!0;const t=this.container.querySelector("#vku-btn-gps");t&&(t.disabled=!0);const e=this.container.querySelector("#vku-gps-spinner");e&&(e.className="vku-spin-active");try{y.show("Đang lấy vị trí GPS...","info",1500);const n=await Q.getCurrentLocation();this.location=n;const s=this.container.querySelector("#vku-gps-display"),i=this.container.querySelector("#vku-gps-near");s&&(s.textContent=`${n.latitude.toFixed(5)}, ${n.longitude.toFixed(5)} (±${n.accuracy||10}m)`),i&&n.buildingNear&&(i.textContent=`📍 Gần: ${n.buildingNear}`),this.scheduleAutoSave(),y.show("Đã cập nhật tọa độ GPS!","success",2e3)}catch{y.show("Không thể lấy tọa độ GPS","error")}finally{this.isCapturingGps=!1,e&&(e.className="vku-spin-hidden"),t&&(t.disabled=!1)}}async capturePhoto(){if(!this.isCapturingPhoto){this.isCapturingPhoto=!0;try{const t=await Q.takePhoto();t&&(this.photos.push(t),this.renderPhotos(),this.scheduleAutoSave(),y.show("Đã chụp ảnh thành công!","success",2e3))}catch(t){t instanceof Error&&t.message!=="Chưa chọn ảnh nào"&&y.show(`Lỗi chụp ảnh: ${t.message}`,"error")}finally{this.isCapturingPhoto=!1}}}renderPhotos(){const t=this.container.querySelector("#vku-photo-gallery");if(t){if(this.photos.length===0){t.innerHTML=`
        <div class="vku-photo-empty" id="vku-photo-empty">
          Chưa có hình ảnh. Bấm "Chụp ảnh mới" để thêm minh chứng hiện trường.
        </div>
      `;return}t.innerHTML=this.photos.map((e,n)=>`
        <div class="vku-photo-item">
          <img src="${e}" alt="Hiện trường ${n+1}" class="vku-photo-thumb" />
          <button type="button" class="vku-photo-del" data-idx="${n}" title="Xóa ảnh này">✕</button>
        </div>
      `).join(""),t.querySelectorAll(".vku-photo-del").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.getAttribute("data-idx")||"-1",10);n>=0&&(this.photos.splice(n,1),this.renderPhotos(),this.scheduleAutoSave())})})}}scheduleAutoSave(){this.autoSaveTimer&&clearTimeout(this.autoSaveTimer);const t=this.container.querySelector("#vku-draft-status");if(t){t.classList.add("saving");const e=t.querySelector(".vku-draft-label");e&&(e.textContent="Đang lưu nháp...")}this.autoSaveTimer=window.setTimeout(async()=>{if(await this.saveDraftToDb(),t){t.classList.remove("saving");const e=t.querySelector(".vku-draft-label");e&&(e.textContent="Bản nháp đã lưu")}},600)}async saveDraftToDb(){var p;const t=this.container.querySelector("#f-building"),e=this.container.querySelector("#f-floor"),n=this.container.querySelector("#f-room"),s=this.container.querySelector("#f-category"),i=this.container.querySelector("#f-item"),a=this.container.querySelector('input[name="severity"]:checked'),o=this.container.querySelector("#f-notes"),c=this.container.querySelector("#f-inspector-name"),l=this.container.querySelector("#f-inspector-email"),m=(t==null?void 0:t.value)||"",u=((p=t==null?void 0:t.selectedOptions[0])==null?void 0:p.text)||"",d={id:"current_active_draft",buildingId:m,buildingName:u,floor:(e==null?void 0:e.value)||"",roomOrArea:(n==null?void 0:n.value)||"",category:(s==null?void 0:s.value)||"",itemDescription:(i==null?void 0:i.value)||"",status:(a==null?void 0:a.value)||"NORMAL",notes:(o==null?void 0:o.value)||"",photos:this.photos,location:this.location,inspectorName:(c==null?void 0:c.value)||"",inspectorEmail:(l==null?void 0:l.value)||"",updatedAt:new Date().toISOString()};await g.saveDraft(d),c!=null&&c.value&&await g.setSetting("last_inspector_name",c.value),l!=null&&l.value&&await g.setSetting("last_inspector_email",l.value)}async loadDraftAndInspector(){const t=await g.getSetting("last_inspector_name",""),e=await g.getSetting("last_inspector_email",""),n=this.container.querySelector("#f-inspector-name"),s=this.container.querySelector("#f-inspector-email");n&&t&&(n.value=t),s&&e&&(s.value=e);const i=await g.getDraft("current_active_draft");if(!i)return;const a=this.container.querySelector("#f-building"),o=this.container.querySelector("#f-floor"),c=this.container.querySelector("#f-room"),l=this.container.querySelector("#f-category"),m=this.container.querySelector("#f-item"),u=this.container.querySelector("#f-notes");if(a&&i.buildingId&&(a.value=i.buildingId),o&&i.floor&&(o.value=i.floor),c&&i.roomOrArea&&(c.value=i.roomOrArea),l&&i.category&&(l.value=i.category),m&&i.itemDescription&&(m.value=i.itemDescription),u&&i.notes&&(u.value=i.notes),n&&i.inspectorName&&(n.value=i.inspectorName),s&&i.inspectorEmail&&(s.value=i.inspectorEmail),i.status){const d=this.container.querySelector(`input[name="severity"][value="${i.status}"]`);d&&(d.checked=!0)}if(i.location){this.location=i.location;const d=this.container.querySelector("#vku-gps-display"),p=this.container.querySelector("#vku-gps-near");d&&(d.textContent=`${this.location.latitude.toFixed(5)}, ${this.location.longitude.toFixed(5)} (±${this.location.accuracy||10}m)`),p&&this.location.buildingNear&&(p.textContent=`📍 Gần: ${this.location.buildingNear}`)}i.photos&&i.photos.length>0&&(this.photos=[...i.photos],this.renderPhotos())}async handleSubmit(){var p;const t=this.container.querySelector("#f-building"),e=this.container.querySelector("#f-floor"),n=this.container.querySelector("#f-room"),s=this.container.querySelector("#f-category"),i=this.container.querySelector("#f-item"),a=this.container.querySelector('input[name="severity"]:checked'),o=this.container.querySelector("#f-notes"),c=this.container.querySelector("#f-inspector-name"),l=this.container.querySelector("#f-inspector-email");if(!(t!=null&&t.value)){y.show("Vui lòng chọn tòa nhà VKU!","error"),t==null||t.focus();return}if(!(e!=null&&e.value.trim())||!(n!=null&&n.value.trim())){y.show("Vui lòng nhập số tầng và phòng/khu vực!","error"),e==null||e.focus();return}if(!(s!=null&&s.value)){y.show("Vui lòng chọn nhóm hạng mục kiểm tra!","error"),s==null||s.focus();return}if(!(i!=null&&i.value.trim())){y.show("Vui lòng nhập tên trang thiết bị!","error"),i==null||i.focus();return}if(!(c!=null&&c.value.trim())||!(l!=null&&l.value.trim())){y.show("Vui lòng nhập đầy đủ thông tin người khảo sát!","error"),c==null||c.focus();return}const m=((p=t.selectedOptions[0])==null?void 0:p.text)||"",u=new Date().toISOString(),d={id:"vku_srv_"+Date.now()+"_"+Math.random().toString(36).substring(2,6),buildingId:t.value,buildingName:m,floor:e.value.trim(),roomOrArea:n.value.trim(),category:s.value,itemDescription:i.value.trim(),status:(a==null?void 0:a.value)||"NORMAL",notes:(o==null?void 0:o.value.trim())||"",photos:[...this.photos],location:{...this.location},inspectorName:c.value.trim(),inspectorEmail:l.value.trim(),createdAt:u,updatedAt:u,syncStatus:"PENDING",syncRetryCount:0};await w.submitSurvey(d),this.resetForm(),this.props.onSuccess(d)}resetForm(){var i,a;const t=this.container.querySelector("#vku-survey-form");if(!t)return;const e=(i=this.container.querySelector("#f-inspector-name"))==null?void 0:i.value,n=(a=this.container.querySelector("#f-inspector-email"))==null?void 0:a.value;t.reset(),e&&(this.container.querySelector("#f-inspector-name").value=e),n&&(this.container.querySelector("#f-inspector-email").value=n),this.photos=[],this.renderPhotos();const s=this.container.querySelector('input[name="severity"][value="NORMAL"]');s&&(s.checked=!0)}}class Mt{constructor(t,e){h(this,"container");h(this,"props");h(this,"currentFilter","ALL");h(this,"searchQuery","");h(this,"surveys",[]);h(this,"unsubscribeSync");const n=document.getElementById(t);if(!n)throw new Error(`Container #${t} not found`);this.container=n,this.props=e,this.subscribeEvents(),this.loadAndRender()}subscribeEvents(){this.unsubscribeSync=w.onSyncChange(()=>{this.loadAndRender()})}async loadAndRender(){this.surveys=await g.getAllSurveys(),this.render()}getFilteredSurveys(){return this.surveys.filter(t=>{if(this.currentFilter==="PENDING"&&t.syncStatus==="SYNCED"||this.currentFilter==="SYNCED"&&t.syncStatus!=="SYNCED"||this.currentFilter==="CRITICAL"&&t.status!=="CRITICAL")return!1;if(this.searchQuery){const e=this.searchQuery.toLowerCase(),n=t.buildingName.toLowerCase().includes(e),s=t.roomOrArea.toLowerCase().includes(e),i=t.itemDescription.toLowerCase().includes(e),a=t.category.toLowerCase().includes(e),o=t.inspectorName.toLowerCase().includes(e);return n||s||i||a||o}return!0})}render(){const t=this.getFilteredSurveys(),e=this.surveys.length,n=this.surveys.filter(a=>a.syncStatus==="SYNCED").length,s=this.surveys.filter(a=>a.syncStatus!=="SYNCED").length,i=this.surveys.filter(a=>a.status==="CRITICAL").length;this.container.innerHTML=`
      <div class="vku-list-view">
        <!-- Stats summary row -->
        <div class="vku-stats-grid">
          <div class="vku-stat-card">
            <span class="vku-stat-label">Tổng số phiếu</span>
            <span class="vku-stat-value">${e}</span>
          </div>
          <div class="vku-stat-card success">
            <span class="vku-stat-label">Đã đồng bộ máy chủ</span>
            <span class="vku-stat-value">${n}</span>
          </div>
          <div class="vku-stat-card warning">
            <span class="vku-stat-label">Chờ đồng bộ (IndexedDB)</span>
            <span class="vku-stat-value">${s}</span>
          </div>
          <div class="vku-stat-card danger">
            <span class="vku-stat-label">Hỏng hóc cấp bách</span>
            <span class="vku-stat-value">${i}</span>
          </div>
        </div>

        <!-- Toolbar & Filter -->
        <div class="vku-card vku-toolbar-card">
          <div class="vku-toolbar-top">
            <div class="vku-search-wrap">
              <span class="vku-search-icon">🔍</span>
              <input 
                type="text" 
                id="vku-search-input" 
                class="vku-input vku-search-input" 
                placeholder="Tìm kiếm theo phòng, thiết bị, tòa nhà, người kiểm tra..." 
                value="${this.searchQuery}"
              />
            </div>

            <div class="vku-actions-row">
              <button type="button" id="vku-btn-export-json" class="vku-btn-sub" title="Xuất dữ liệu JSON offline">
                <span>Xuất JSON</span>
              </button>
              <button type="button" id="vku-btn-new-survey" class="vku-btn-primary">
                <span>+ Khảo sát mới</span>
              </button>
            </div>
          </div>

          <div class="vku-filter-pills">
            <button class="vku-filter-pill ${this.currentFilter==="ALL"?"active":""}" data-filter="ALL">
              Tất cả (${e})
            </button>
            <button class="vku-filter-pill ${this.currentFilter==="PENDING"?"active":""}" data-filter="PENDING">
              Chờ đồng bộ (${s})
            </button>
            <button class="vku-filter-pill ${this.currentFilter==="SYNCED"?"active":""}" data-filter="SYNCED">
              Đã đồng bộ (${n})
            </button>
            <button class="vku-filter-pill ${this.currentFilter==="CRITICAL"?"active":""}" data-filter="CRITICAL">
              Cấp bách (${i})
            </button>
          </div>
        </div>

        <!-- Survey Cards Grid -->
        <div class="vku-surveys-grid" id="vku-surveys-grid">
          ${t.length===0?`
            <div class="vku-empty-state">
              <div class="vku-empty-icon">📭</div>
              <h3>Không tìm thấy phiếu khảo sát nào</h3>
              <p>Chưa có dữ liệu phù hợp với bộ lọc hiện tại. Bấm nút dưới để tạo phiếu mới.</p>
              <button type="button" id="vku-empty-new-btn" class="vku-btn-primary" style="margin-top: 14px;">
                Tạo phiếu khảo sát ngay
              </button>
            </div>
          `:t.map(a=>this.renderSurveyCard(a)).join("")}
        </div>
      </div>
    `,this.bindEvents()}renderSurveyCard(t){var c;const e={NORMAL:{text:"Bình thường",class:"status-normal",icon:"🟢"},MINOR:{text:"Cần bảo trì",class:"status-minor",icon:"🟡"},CRITICAL:{text:"Cấp bách",class:"status-critical",icon:"🔴"}},n={SYNCED:{text:"✓ Đã đồng bộ",class:"sync-synced"},PENDING:{text:"⏳ Chờ đồng bộ",class:"sync-pending"},SYNCING:{text:"↻ Đang gửi...",class:"sync-syncing"},FAILED:{text:"⚠ Lỗi đồng bộ",class:"sync-failed"}},s=e[t.status]||e.NORMAL,i=n[t.syncStatus]||n.PENDING,a=new Date(t.createdAt).toLocaleString("vi-VN",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}),o=(c=t.photos)==null?void 0:c[0];return`
      <div class="vku-survey-card ${t.status==="CRITICAL"?"border-critical":""}" data-id="${t.id}">
        ${o?`<div class="vku-card-thumb-wrap">
                 <img src="${o}" alt="Minh chứng" class="vku-card-thumb" />
                 ${t.photos.length>1?`<span class="vku-photo-count">+${t.photos.length-1} ảnh</span>`:""}
               </div>`:""}
        <div class="vku-survey-card-body">
          <div class="vku-card-top-row">
            <span class="vku-badge ${s.class}">${s.icon} ${s.text}</span>
            <span class="vku-badge ${i.class}">${i.text}</span>
          </div>

          <h3 class="vku-survey-item-name">${t.itemDescription}</h3>
          
          <div class="vku-survey-meta-list">
            <div class="vku-meta-item">
              <span class="vku-meta-icon">🏢</span>
              <span><strong>${t.buildingName}</strong> • ${t.floor} (${t.roomOrArea})</span>
            </div>
            <div class="vku-meta-item">
              <span class="vku-meta-icon">🏷️</span>
              <span>${t.category}</span>
            </div>
            <div class="vku-meta-item">
              <span class="vku-meta-icon">📍</span>
              <span class="vku-meta-gps">
                ${t.location.latitude.toFixed(4)}, ${t.location.longitude.toFixed(4)} 
                ${t.location.buildingNear?`(${t.location.buildingNear})`:""}
              </span>
            </div>
            <div class="vku-meta-item">
              <span class="vku-meta-icon">👤</span>
              <span>${t.inspectorName} • <small>${a}</small></span>
            </div>
          </div>

          ${t.notes?`<div class="vku-survey-notes">
                   <strong>Ghi chú:</strong> ${t.notes}
                 </div>`:""}

          <div class="vku-card-bottom-actions">
            ${t.syncStatus!=="SYNCED"?`<button class="vku-btn-card-sync" data-action="sync" data-id="${t.id}">
                     ↻ Thử gửi lại
                   </button>`:'<span class="vku-synced-indicator">Lưu trên máy chủ VKU</span>'}
            <button class="vku-btn-card-del" data-action="delete" data-id="${t.id}" title="Xóa phiếu này">
              Xóa
            </button>
          </div>
        </div>
      </div>
    `}bindEvents(){var e,n,s;const t=this.container.querySelector("#vku-search-input");t==null||t.addEventListener("input",i=>{this.searchQuery=i.target.value,this.renderFilteredCardsOnly()}),this.container.querySelectorAll(".vku-filter-pill").forEach(i=>{i.addEventListener("click",()=>{const a=i.getAttribute("data-filter");a&&(this.currentFilter=a,this.render())})}),(e=this.container.querySelector("#vku-btn-new-survey"))==null||e.addEventListener("click",()=>{this.props.onNavigateNew()}),(n=this.container.querySelector("#vku-empty-new-btn"))==null||n.addEventListener("click",()=>{this.props.onNavigateNew()}),(s=this.container.querySelector("#vku-btn-export-json"))==null||s.addEventListener("click",()=>{this.exportToJson()}),this.container.querySelectorAll('[data-action="delete"]').forEach(i=>{i.addEventListener("click",async a=>{a.stopPropagation();const o=i.getAttribute("data-id");o&&confirm("Bạn có chắc muốn xóa phiếu khảo sát này khỏi IndexedDB?")&&(await w.deleteSurvey(o),await this.loadAndRender())})}),this.container.querySelectorAll('[data-action="sync"]').forEach(i=>{i.addEventListener("click",async a=>{a.stopPropagation(),i.getAttribute("data-id")&&(i.textContent="Đang đồng bộ...",i.disabled=!0,await w.processQueue(),await this.loadAndRender())})})}renderFilteredCardsOnly(){const t=this.container.querySelector("#vku-surveys-grid");if(!t)return;const e=this.getFilteredSurveys();if(e.length===0){t.innerHTML=`
        <div class="vku-empty-state">
          <div class="vku-empty-icon">🔍</div>
          <h3>Không tìm thấy kết quả phù hợp</h3>
          <p>Thử tìm kiếm với từ khóa khác.</p>
        </div>
      `;return}t.innerHTML=e.map(n=>this.renderSurveyCard(n)).join(""),this.bindEvents()}exportToJson(){if(this.surveys.length===0){y.show("Không có dữ liệu khảo sát để xuất","warning");return}const t="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(this.surveys,null,2)),e=document.createElement("a");e.setAttribute("href",t),e.setAttribute("download",`vku_field_surveys_${new Date().toISOString().slice(0,10)}.json`),e.click(),y.show("Đã xuất file JSON thành công!","success")}destroy(){var t;(t=this.unsubscribeSync)==null||t.call(this)}}class _t{constructor(t,e){h(this,"container");h(this,"props");h(this,"surveys",[]);h(this,"selectedBuilding",null);const n=document.getElementById(t);if(!n)throw new Error(`Container #${t} not found`);this.container=n,this.props=e,this.loadDataAndRender()}async loadDataAndRender(){this.surveys=await g.getAllSurveys(),this.render()}getBuildingStats(t){const e=this.surveys.filter(n=>n.buildingId===t);return{total:e.length,normal:e.filter(n=>n.status==="NORMAL").length,minor:e.filter(n=>n.status==="MINOR").length,critical:e.filter(n=>n.status==="CRITICAL").length}}render(){const t=this.selectedBuilding||$[0],e=this.getBuildingStats(t.id);this.container.innerHTML=`
      <div class="vku-map-layout">
        <!-- Main Interactive Campus Map Frame -->
        <div class="vku-card vku-map-container">
          <div class="vku-card-header">
            <div>
              <h2 class="vku-card-title">🗺️ Sơ đồ Tọa độ Khuôn viên Đại học VKU</h2>
              <p class="vku-card-sub">Bản đồ thực địa ngoại tuyến • Tọa độ GPS & Điểm khảo sát thực tế</p>
            </div>
            <div class="vku-map-legend">
              <span class="vku-legend-item"><span class="legend-dot normal"></span> Bình thường</span>
              <span class="vku-legend-item"><span class="legend-dot minor"></span> Cần bảo trì</span>
              <span class="vku-legend-item"><span class="legend-dot critical"></span> Khẩn cấp</span>
            </div>
          </div>

          <!-- Interactive Vector Map of VKU Campus -->
          <div class="vku-map-canvas-wrap">
            <svg class="vku-campus-svg" viewBox="0 0 900 560" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="vkuGreenArea" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#0F2D1F"/>
                  <stop offset="100%" stop-color="#0A1F16"/>
                </linearGradient>
                <linearGradient id="vkuBuildingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="#1E3A8A"/>
                  <stop offset="100%" stop-color="#0F172A"/>
                </linearGradient>
                <linearGradient id="vkuSelectedBld" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stop-color="#F97316"/>
                  <stop offset="100%" stop-color="#EA580C"/>
                </linearGradient>
                <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
                </pattern>
              </defs>

              <!-- Campus Ground background -->
              <rect width="900" height="560" fill="url(#vkuGreenArea)"/>
              <rect width="900" height="560" fill="url(#gridPattern)"/>

              <!-- Campus Roads & Pathways -->
              <!-- Main Entrance Road: Nam Ky Khoi Nghia -->
              <rect x="20" y="490" width="860" height="45" rx="6" fill="#1E293B" stroke="#334155" stroke-width="2"/>
              <text x="450" y="518" font-family="sans-serif" font-weight="bold" font-size="14" fill="#94A3B8" text-anchor="middle" letter-spacing="4">
                TRỤC ĐƯỜNG NAM KỲ KHỞI NGHĨA • CỔNG CHÍNH ĐẠI HỌC VKU
              </text>

              <!-- Central Internal Spine Boulevard -->
              <rect x="420" y="50" width="60" height="440" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>
              <!-- Cross Roads -->
              <rect x="80" y="240" width="740" height="36" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1.5"/>

              <!-- Central Green Plaza & VKU Emblem fountain -->
              <circle cx="450" cy="258" r="48" fill="#065F46" stroke="#10B981" stroke-width="2"/>
              <circle cx="450" cy="258" r="28" fill="#047857"/>
              <text x="450" y="263" font-family="sans-serif" font-weight="900" font-size="14" fill="#FFFFFF" text-anchor="middle">VKU PLAZA</text>

              <!-- Buildings Map layout (Interactive SVG Groups) -->
              <!-- 1. Khu A (Hiệu bộ) - Front Center-Left -->
              <g class="vku-svg-building" data-bld="bld-a" transform="translate(180, 310)">
                <rect width="190" height="130" rx="12" fill="${t.id==="bld-a"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-a"?"#F97316":"#38BDF8"}" stroke-width="2.5"/>
                <text x="95" y="45" font-family="sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF" text-anchor="middle">KHU A</text>
                <text x="95" y="70" font-family="sans-serif" font-size="12" fill="#BAE6FD" text-anchor="middle">Tòa Nhà Hiệu Bộ</text>
                <text x="95" y="92" font-family="sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle">6 Tầng • Ban Giám Hiệu</text>
                ${this.renderBuildingBadgeSvg("bld-a",155,30)}
              </g>

              <!-- 2. Khu B (CNTT) - Back Left -->
              <g class="vku-svg-building" data-bld="bld-b" transform="translate(140, 80)">
                <rect width="230" height="120" rx="12" fill="${t.id==="bld-b"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-b"?"#F97316":"#38BDF8"}" stroke-width="2.5"/>
                <text x="115" y="45" font-family="sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF" text-anchor="middle">KHU B - KHOA CNTT</text>
                <text x="115" y="70" font-family="sans-serif" font-size="12" fill="#BAE6FD" text-anchor="middle">Giảng Đường & Phòng Lab AI</text>
                <text x="115" y="92" font-family="sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle">5 Tầng • Giảng dạy chính</text>
                ${this.renderBuildingBadgeSvg("bld-b",195,30)}
              </g>

              <!-- 3. Khu C (Kỹ thuật Máy tính / IoT) - Back Right -->
              <g class="vku-svg-building" data-bld="bld-c" transform="translate(530, 80)">
                <rect width="210" height="120" rx="12" fill="${t.id==="bld-c"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-c"?"#F97316":"#38BDF8"}" stroke-width="2.5"/>
                <text x="105" y="45" font-family="sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF" text-anchor="middle">KHU C</text>
                <text x="105" y="70" font-family="sans-serif" font-size="12" fill="#BAE6FD" text-anchor="middle">KTMT & Viễn Thông</text>
                <text x="105" y="92" font-family="sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle">5 Tầng • Xưởng thực hành</text>
                ${this.renderBuildingBadgeSvg("bld-c",175,30)}
              </g>

              <!-- 4. Thư viện số VKU - Front Right -->
              <g class="vku-svg-building" data-bld="bld-lib" transform="translate(530, 310)">
                <rect width="180" height="130" rx="12" fill="${t.id==="bld-lib"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-lib"?"#F97316":"#38BDF8"}" stroke-width="2.5"/>
                <text x="90" y="45" font-family="sans-serif" font-weight="bold" font-size="18" fill="#FFFFFF" text-anchor="middle">THƯ VIỆN SỐ</text>
                <text x="90" y="70" font-family="sans-serif" font-size="12" fill="#BAE6FD" text-anchor="middle">Digital Library & Co-work</text>
                <text x="90" y="92" font-family="sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle">4 Tầng • Tự học & Nghiên cứu</text>
                ${this.renderBuildingBadgeSvg("bld-lib",145,30)}
              </g>

              <!-- 5. Ký Túc Xá Sinh Viên - Far Right -->
              <g class="vku-svg-building" data-bld="bld-ktx" transform="translate(740, 290)">
                <rect width="130" height="150" rx="12" fill="${t.id==="bld-ktx"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-ktx"?"#F97316":"#38BDF8"}" stroke-width="2.5"/>
                <text x="65" y="55" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FFFFFF" text-anchor="middle">KTX VKU</text>
                <text x="65" y="80" font-family="sans-serif" font-size="11" fill="#BAE6FD" text-anchor="middle">Ký Túc Xá</text>
                <text x="65" y="102" font-family="sans-serif" font-size="10" fill="#94A3B8" text-anchor="middle">6 Tầng</text>
                ${this.renderBuildingBadgeSvg("bld-ktx",95,30)}
              </g>

              <!-- 6. Nhà thể thao đa năng - Far Top Right -->
              <g class="vku-svg-building" data-bld="bld-sports" transform="translate(760, 70)">
                <rect width="120" height="130" rx="12" fill="${t.id==="bld-sports"?"url(#vkuSelectedBld)":"url(#vkuBuildingGrad)"}" stroke="${t.id==="bld-sports"?"#F97316":"#38BDF8"}" stroke-width="2"/>
                <text x="60" y="50" font-family="sans-serif" font-weight="bold" font-size="14" fill="#FFFFFF" text-anchor="middle">THỂ THAO</text>
                <text x="60" y="75" font-family="sans-serif" font-size="11" fill="#BAE6FD" text-anchor="middle">Nhà đa năng</text>
                ${this.renderBuildingBadgeSvg("bld-sports",85,25)}
              </g>

              <!-- Survey GPS Pins overlay -->
              ${this.renderSurveyPinsSvg()}
            </svg>
          </div>
        </div>

        <!-- Building Details Sidebar -->
        <div class="vku-card vku-building-sidebar">
          <div class="vku-sidebar-header">
            <span class="vku-badge status-normal">${t.code}</span>
            <h3 class="vku-sidebar-title">${t.name}</h3>
            <p class="vku-sidebar-desc">${t.description}</p>
          </div>

          <div class="vku-sidebar-stats">
            <div class="vku-side-stat">
              <span class="side-stat-label">Tổng khảo sát</span>
              <span class="side-stat-val">${e.total}</span>
            </div>
            <div class="vku-side-stat">
              <span class="side-stat-label">🟢 Ổn định</span>
              <span class="side-stat-val text-green">${e.normal}</span>
            </div>
            <div class="vku-side-stat">
              <span class="side-stat-label">🟡 Cần sửa</span>
              <span class="side-stat-val text-yellow">${e.minor}</span>
            </div>
            <div class="vku-side-stat">
              <span class="side-stat-label">🔴 Cấp bách</span>
              <span class="side-stat-val text-red">${e.critical}</span>
            </div>
          </div>

          <div class="vku-sidebar-actions">
            <button type="button" id="vku-btn-survey-this-bld" class="vku-btn-primary" style="width: 100%;">
              + Tạo khảo sát cho tòa nhà này
            </button>
          </div>

          <!-- List of recent surveys in this building -->
          <div class="vku-bld-surveys">
            <h4 class="vku-bld-surveys-title">Các điểm kiểm tra gần đây:</h4>
            ${this.renderBuildingRecentSurveys(t.id)}
          </div>
        </div>
      </div>
    `,this.bindEvents()}renderBuildingBadgeSvg(t,e,n){const s=this.getBuildingStats(t);if(s.total===0)return"";const i=s.critical>0?"#EF4444":s.minor>0?"#F59E0B":"#10B981";return`
      <circle cx="${e}" cy="${n}" r="12" fill="${i}" stroke="#FFFFFF" stroke-width="2"/>
      <text x="${e}" y="${n+4}" font-family="sans-serif" font-weight="bold" font-size="11" fill="#FFFFFF" text-anchor="middle">
        ${s.total}
      </text>
    `}renderSurveyPinsSvg(){const t={"bld-a":{x:275,y:375},"bld-b":{x:255,y:140},"bld-c":{x:635,y:140},"bld-lib":{x:620,y:375},"bld-ktx":{x:805,y:365},"bld-sports":{x:820,y:135},"bld-v":{x:450,y:130},"bld-canteen":{x:450,y:380}};return this.surveys.slice(0,30).map((e,n)=>{const s=t[e.buildingId]||{x:450,y:250},i=n*23%40-20,a=n*17%30-15,o=s.x+i,c=s.y+a,l=e.status==="CRITICAL"?"#EF4444":e.status==="MINOR"?"#F59E0B":"#10B981";return`
          <g class="vku-map-pin" transform="translate(${o}, ${c})">
            <circle cx="0" cy="0" r="8" fill="${l}" stroke="#FFFFFF" stroke-width="1.8"/>
            <circle cx="0" cy="0" r="3" fill="#FFFFFF"/>
          </g>
        `}).join("")}renderBuildingRecentSurveys(t){const e=this.surveys.filter(n=>n.buildingId===t).slice(0,5);return e.length===0?'<p class="vku-empty-text">Chưa có khảo sát nào tại tòa nhà này.</p>':`
      <ul class="vku-bld-survey-list">
        ${e.map(n=>`
          <li class="vku-bld-survey-item">
            <div class="bld-item-top">
              <span class="bld-item-name">${n.itemDescription}</span>
              <span class="bld-item-badge ${n.status==="CRITICAL"?"crit":n.status==="MINOR"?"min":"norm"}">
                ${n.status==="CRITICAL"?"Cấp bách":n.status==="MINOR"?"Bảo trì":"Ổn định"}
              </span>
            </div>
            <div class="bld-item-sub">
              ${n.floor} (${n.roomOrArea}) • ${n.syncStatus==="SYNCED"?"✓ Đã đồng bộ":"⏳ Chờ đồng bộ"}
            </div>
          </li>
        `).join("")}
      </ul>
    `}bindEvents(){var t;this.container.querySelectorAll(".vku-svg-building").forEach(e=>{e.addEventListener("click",()=>{const n=e.getAttribute("data-bld"),s=$.find(i=>i.id===n);s&&(this.selectedBuilding=s,this.render())})}),(t=this.container.querySelector("#vku-btn-survey-this-bld"))==null||t.addEventListener("click",()=>{const e=this.selectedBuilding||$[0];this.props.onSelectBuildingForSurvey(e.id)})}}class Gt{constructor(t){h(this,"container");h(this,"queueItems",[]);h(this,"unsubscribeSync");h(this,"unsubscribeNetwork");const e=document.getElementById(t);if(!e)throw new Error(`Container #${t} not found`);this.container=e,this.subscribeEvents(),this.loadAndRender()}subscribeEvents(){this.unsubscribeSync=w.onSyncChange(()=>this.loadAndRender()),this.unsubscribeNetwork=w.onNetworkChange(()=>this.loadAndRender())}async loadAndRender(){this.queueItems=await g.getAllSyncQueue(),this.render()}render(){const t=w.isOnline(),e=w.isSyncing(),n=this.queueItems.filter(i=>i.status!=="SYNCED").length,s=Y.getServerRecords();this.container.innerHTML=`
      <div class="vku-sync-view">
        <!-- Header & Action card -->
        <div class="vku-card vku-sync-ctrl-card">
          <div class="vku-sync-ctrl-header">
            <div>
              <h2 class="vku-card-title">🔄 Hàng Đợi Đồng Bộ Ngoại Tuyến (Offline Sync Queue)</h2>
              <p class="vku-card-sub">
                Dữ liệu được lưu trữ an toàn trong IndexedDB của thiết bị và điều phối tự động khi có mạng.
              </p>
            </div>

            <div class="vku-sync-main-actions">
              <button 
                type="button" 
                id="vku-sync-now-btn" 
                class="vku-btn-primary ${e?"spinning":""}" 
                ${!t||e?"disabled":""}
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/>
                </svg>
                <span>${e?"Đang đồng bộ...":"Đồng bộ ngay bây giờ"}</span>
              </button>

              <button type="button" id="vku-clear-completed-btn" class="vku-btn-sub">
                Dọn mục đã đồng bộ
              </button>
            </div>
          </div>

          <!-- Network Connection Status banner -->
          <div class="vku-sync-net-bar ${t?"net-online":"net-offline"}">
            <span class="net-indicator-circle"></span>
            <span>
              <strong>${t?"Đang kết nối Internet":"Thiết bị đang Ngoại tuyến (Offline)"}:</strong> 
              ${t?"Hệ thống tự động đồng bộ ngầm khi phát hiện dữ liệu mới.":"Các phiếu kiểm tra sẽ được xếp hàng trong IndexedDB và gửi khi có mạng."}
            </span>
          </div>
        </div>

        <!-- Sync Queue List -->
        <div class="vku-card vku-queue-card">
          <div class="vku-queue-header">
            <h3 class="vku-section-title">Danh sách tác vụ trong hàng đợi (${this.queueItems.length})</h3>
            <span class="vku-badge ${n>0?"status-minor":"status-normal"}">
              ${n>0?`${n} mục chờ xử lý`:"Đã hoàn tất đồng bộ"}
            </span>
          </div>

          ${this.queueItems.length===0?`
            <div class="vku-empty-state">
              <div class="vku-empty-icon">✨</div>
              <h3>Hàng đợi trống</h3>
              <p>Mọi dữ liệu khảo sát đã được cập nhật hoặc chưa có phiếu mới được tạo.</p>
            </div>
          `:`
            <div class="vku-queue-table-wrap">
              <table class="vku-queue-table">
                <thead>
                  <tr>
                    <th>Trạng thái</th>
                    <th>Hành động</th>
                    <th>Cơ sở vật chất / Hạng mục</th>
                    <th>Tòa nhà & Khu vực</th>
                    <th>Thời điểm xếp hàng</th>
                    <th>Thử lại</th>
                    <th>Thao tác</th>
                  </tr>
                </thead>
                <tbody>
                  ${this.queueItems.map(i=>this.renderQueueRow(i)).join("")}
                </tbody>
              </table>
            </div>
          `}
        </div>

        <!-- Server Database Inspection Panel -->
        <div class="vku-card vku-server-inspect-card">
          <div class="vku-server-header">
            <div>
              <h3 class="vku-section-title">☁️ Trạng thái Cơ sở dữ liệu Máy chủ VKU (Server Endpoint)</h3>
              <p class="vku-card-sub">Tổng số bản ghi máy chủ đã tiếp nhận: <strong>${s.length}</strong> phiếu</p>
            </div>
            <button type="button" id="vku-clear-server-btn" class="vku-btn-danger-sub">
              Reset dữ liệu Mock Server
            </button>
          </div>

          ${s.length===0?'<p class="vku-empty-text">Máy chủ chưa có bản ghi nào. Hãy tạo phiếu và bấm đồng bộ!</p>':`
            <div class="vku-server-records-pills">
              ${s.slice(0,8).map(i=>`
                <div class="vku-server-pill">
                  <span class="vku-dot-green"></span>
                  <strong>${i.itemDescription}</strong> (${i.buildingName} - ${i.roomOrArea})
                </div>
              `).join("")}
              ${s.length>8?`<span class="vku-server-more">+ ${s.length-8} bản ghi khác...</span>`:""}
            </div>
          `}
        </div>
      </div>
    `,this.bindEvents()}renderQueueRow(t){const e={PENDING:{label:"Chờ đồng bộ",class:"sync-pending",icon:"⏳"},SYNCING:{label:"Đang gửi...",class:"sync-syncing",icon:"↻"},SYNCED:{label:"Thành công",class:"sync-synced",icon:"✓"},FAILED:{label:"Thất bại",class:"sync-failed",icon:"✕"}},n=e[t.status]||e.PENDING,s=new Date(t.queuedAt).toLocaleTimeString("vi-VN");return`
      <tr class="queue-row-${t.status.toLowerCase()}">
        <td>
          <span class="vku-badge ${n.class}">${n.icon} ${n.label}</span>
          ${t.lastError?`<div class="queue-error-msg">${t.lastError}</div>`:""}
        </td>
        <td><strong class="queue-action">${t.action}</strong></td>
        <td>
          <strong>${t.payload.itemDescription}</strong>
          <div class="queue-sub">${t.payload.category}</div>
        </td>
        <td>${t.payload.buildingName} (${t.payload.roomOrArea})</td>
        <td>${s}</td>
        <td><span class="queue-retry-badge">${t.retryCount} lần</span></td>
        <td>
          <div class="queue-row-btns">
            ${t.status!=="SYNCED"?`<button class="vku-btn-sub-xs" data-retry="${t.id}" title="Thử đồng bộ lại">↻ Gửi</button>`:""}
            <button class="vku-btn-del-xs" data-del="${t.id}" title="Xóa khỏi hàng đợi">✕</button>
          </div>
        </td>
      </tr>
    `}bindEvents(){var t,e,n;(t=this.container.querySelector("#vku-sync-now-btn"))==null||t.addEventListener("click",async()=>{await w.processQueue(),await this.loadAndRender()}),(e=this.container.querySelector("#vku-clear-completed-btn"))==null||e.addEventListener("click",async()=>{await g.clearCompletedSyncQueue(),await this.loadAndRender(),y.show("Đã dọn dẹp các tác vụ đã hoàn tất!","info")}),(n=this.container.querySelector("#vku-clear-server-btn"))==null||n.addEventListener("click",()=>{confirm("Xác nhận xóa sạch cơ sở dữ liệu trên Mock Server?")&&(Y.clearServerData(),this.render(),y.show("Đã reset Mock Server Database","info"))}),this.container.querySelectorAll("[data-retry]").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-retry");i&&(s.disabled=!0,s.textContent="...",await w.retrySingleItem(i),await this.loadAndRender())})}),this.container.querySelectorAll("[data-del]").forEach(s=>{s.addEventListener("click",async()=>{const i=s.getAttribute("data-del");i&&(await g.removeFromSyncQueue(i),await this.loadAndRender(),y.show("Đã hủy tác vụ đồng bộ","info"))})})}destroy(){var t,e;(t=this.unsubscribeSync)==null||t.call(this),(e=this.unsubscribeNetwork)==null||e.call(this)}}class Vt{constructor(){h(this,"activeTab","new");h(this,"header");h(this,"currentComponent",null)}async init(){this.registerServiceWorker(),await this.seedInitialDemoDataIfEmpty();const t=window.location.hash.replace("#","");["new","list","map","sync"].includes(t)&&(this.activeTab=t),this.header=new It("header-container",{activeTab:this.activeTab,onTabChange:e=>this.switchTab(e),onOpenSyncModal:()=>this.switchTab("sync")}),this.renderCurrentView(),window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");["new","list","map","sync"].includes(e)&&e!==this.activeTab&&this.switchTab(e)})}switchTab(t){this.activeTab=t,window.location.hash=t,this.header.setTab(t),this.renderCurrentView()}renderCurrentView(){var e;const t=document.getElementById("main-content");t&&((e=this.currentComponent)!=null&&e.destroy&&this.currentComponent.destroy(),t.innerHTML='<div id="view-mount-point"></div>',this.activeTab==="new"?this.currentComponent=new Ot("view-mount-point",{onSuccess:n=>{y.show(`Đã lưu phiếu kiểm tra cho ${n.buildingName}!`,"success"),setTimeout(()=>{this.switchTab("list")},1200)}}):this.activeTab==="list"?this.currentComponent=new Mt("view-mount-point",{onNavigateNew:()=>this.switchTab("new")}):this.activeTab==="map"?this.currentComponent=new _t("view-mount-point",{onSelectBuildingForSurvey:async n=>{const s=await g.getDraft()||{id:"current_active_draft",buildingId:n,buildingName:"",floor:"",roomOrArea:"",category:"",itemDescription:"",status:"NORMAL",notes:"",photos:[],inspectorName:"",inspectorEmail:"",updatedAt:new Date().toISOString()};s.buildingId=n,await g.saveDraft(s),this.switchTab("new")}}):this.activeTab==="sync"&&(this.currentComponent=new Gt("view-mount-point")))}registerServiceWorker(){"serviceWorker"in navigator&&(window.addEventListener("load",async()=>{try{const t=await navigator.serviceWorker.register("./sw.js",{scope:"./"});if(console.log("[App] Service Worker đã đăng ký thành công:",t.scope),"sync"in t)try{await t.sync.register("vku-sync-queue"),console.log("[App] Đã đăng ký Background Sync API tag: vku-sync-queue")}catch(e){console.log("[App] Background Sync register skipped:",e)}}catch(t){console.warn("[App] Không thể đăng ký Service Worker:",t)}}),navigator.serviceWorker.addEventListener("message",t=>{var e;((e=t.data)==null?void 0:e.type)==="BACKGROUND_SYNC_TRIGGER"&&(console.log("[App] Nhận trigger Background Sync từ Service Worker, đang đồng bộ..."),w.processQueue(!0))}))}async seedInitialDemoDataIfEmpty(){if((await g.getAllSurveys()).length>0)return;const e=[{id:"srv_seed_01",buildingId:"bld-b",buildingName:"Khu B - Giảng Đường & Khoa CNTT",floor:"Tầng 3",roomOrArea:"Phòng B.302 (Lab AI)",category:"Thiết bị IT & Giảng dạy",itemDescription:"Máy chiếu Epson EB-X06",status:"MINOR",notes:"Bóng đèn máy chiếu chập chờn sau 30 phút sử dụng, cần kỹ thuật kiểm tra quạt tản nhiệt.",photos:[],location:{latitude:15.9752,longitude:108.2524,accuracy:8,buildingNear:"Khu B (~15m)"},inspectorName:"Hoàng Văn Quyến",inspectorEmail:"quyenhv@vku.udn.vn",createdAt:new Date(Date.now()-36e5*4).toISOString(),updatedAt:new Date(Date.now()-36e5*4).toISOString(),syncStatus:"SYNCED",syncRetryCount:0},{id:"srv_seed_02",buildingId:"bld-c",buildingName:"Khu C - Giảng Đường & Phòng Lab",floor:"Tầng 2",roomOrArea:"Hành lang C.204",category:"PCCC & An toàn trường học",itemDescription:"Hộp vòi cứu hỏa & Đèn Exit",status:"CRITICAL",notes:"Đèn thoát hiểm Exit không sáng khi thử ngắt điện giả lập. Cần thay ắc quy dự phòng ngay!",photos:[],location:{latitude:15.9748,longitude:108.253,accuracy:6,buildingNear:"Khu C (~10m)"},inspectorName:"Hoàng Văn Quyến",inspectorEmail:"quyenhv@vku.udn.vn",createdAt:new Date(Date.now()-36e5*1).toISOString(),updatedAt:new Date(Date.now()-36e5*1).toISOString(),syncStatus:"PENDING",syncRetryCount:0}];for(const n of e)await g.saveSurvey(n),n.syncStatus==="PENDING"&&await g.addToSyncQueue({id:"sync_seed_02",surveyId:n.id,action:"CREATE",payload:n,queuedAt:n.createdAt,retryCount:0,status:"PENDING"})}}document.addEventListener("DOMContentLoaded",()=>{new Vt().init()});export{K as W};
//# sourceMappingURL=index-ERx7K0i5.js.map
