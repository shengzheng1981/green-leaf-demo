/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

// This is CodeMirror (https://codemirror.net), a code editor
// implemented in JavaScript on top of the browser's DOM.
//
// You can find some technical background for some of the code below
// at http://marijnhaverbeke.nl/blog/#cm-internals .

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.CodeMirror = factory());
}(this, (function () { 'use strict';

  // Kludges for bugs and behavior differences that can't be feature
  // detected are enabled based on userAgent etc sniffing.
  var userAgent = navigator.userAgent;
  var platform = navigator.platform;

  var gecko = /gecko\/\d/i.test(userAgent);
  var ie_upto10 = /MSIE \d/.test(userAgent);
  var ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
  var edge = /Edge\/(\d+)/.exec(userAgent);
  var ie = ie_upto10 || ie_11up || edge;
  var ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
  var webkit = !edge && /WebKit\//.test(userAgent);
  var qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
  var chrome = !edge && /Chrome\//.test(userAgent);
  var presto = /Opera\//.test(userAgent);
  var safari = /Apple Computer/.test(navigator.vendor);
  var mac_geMountainLion = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent);
  var phantom = /PhantomJS/.test(userAgent);

  var ios = !edge && /AppleWebKit/.test(userAgent) && /Mobile\/\w+/.test(userAgent);
  var android = /Android/.test(userAgent);
  // This is woefully incomplete. Suggestions for alternative methods welcome.
  var mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
  var mac = ios || /Mac/.test(platform);
  var chromeOS = /\bCrOS\b/.test(userAgent);
  var windows = /win/i.test(platform);

  var presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
  if (presto_version) { presto_version = Number(presto_version[1]); }
  if (presto_version && presto_version >= 15) { presto = false; webkit = true; }
  // Some browsers use the wrong event properties to signal cmd/ctrl on OS X
  var flipCtrlCmd = mac && (qtwebkit || presto && (presto_version == null || presto_version < 12.11));
  var captureRightClick = gecko || (ie && ie_version >= 9);

  function classTest(cls) { return new RegExp("(^|\\s)" + cls + "(?:$|\\s)\\s*") }

  var rmClass = function(node, cls) {
    var current = node.className;
    var match = classTest(cls).exec(current);
    if (match) {
      var after = current.slice(match.index + match[0].length);
      node.className = current.slice(0, match.index) + (after ? match[1] + after : "");
    }
  };

  function removeChildren(e) {
    for (var count = e.childNodes.length; count > 0; --count)
      { e.removeChild(e.firstChild); }
    return e
  }

  function removeChildrenAndAdd(parent, e) {
    return removeChildren(parent).appendChild(e)
  }

  function elt(tag, content, className, style) {
    var e = document.createElement(tag);
    if (className) { e.className = className; }
    if (style) { e.style.cssText = style; }
    if (typeof content == "string") { e.appendChild(document.createTextNode(content)); }
    else if (content) { for (var i = 0; i < content.length; ++i) { e.appendChild(content[i]); } }
    return e
  }
  // wrapper for elt, which removes the elt from the accessibility tree
  function eltP(tag, content, className, style) {
    var e = elt(tag, content, className, style);
    e.setAttribute("role", "presentation");
    return e
  }

  var range;
  if (document.createRange) { range = function(node, start, end, endNode) {
    var r = document.createRange();
    r.setEnd(endNode || node, end);
    r.setStart(node, start);
    return r
  }; }
  else { range = function(node, start, end) {
    var r = document.body.createTextRange();
    try { r.moveToElementText(node.parentNode); }
    catch(e) { return r }
    r.collapse(true);
    r.moveEnd("character", end);
    r.moveStart("character", start);
    return r
  }; }

  function contains(parent, child) {
    if (child.nodeType == 3) // Android browser always returns false when child is a textnode
      { child = child.parentNode; }
    if (parent.contains)
      { return parent.contains(child) }
    do {
      if (child.nodeType == 11) { child = child.host; }
      if (child == parent) { return true }
    } while (child = child.parentNode)
  }

  function activeElt() {
    // IE and Edge may throw an "Unspecified Error" when accessing document.activeElement.
    // IE < 10 will throw when accessed while the page is loading or in an iframe.
    // IE > 9 and Edge will throw when accessed in an iframe if document.body is unavailable.
    var activeElement;
    try {
      activeElement = document.activeElement;
    } catch(e) {
      activeElement = document.body || null;
    }
    while (activeElement && activeElement.shadowRoot && activeElement.shadowRoot.activeElement)
      { activeElement = activeElement.shadowRoot.activeElement; }
    return activeElement
  }

  function addClass(node, cls) {
    var current = node.className;
    if (!classTest(cls).test(current)) { node.className += (current ? " " : "") + cls; }
  }
  function joinClasses(a, b) {
    var as = a.split(" ");
    for (var i = 0; i < as.length; i++)
      { if (as[i] && !classTest(as[i]).test(b)) { b += " " + as[i]; } }
    return b
  }

  var selectInput = function(node) { node.select(); };
  if (ios) // Mobile Safari apparently has a bug where select() is broken.
    { selectInput = function(node) { node.selectionStart = 0; node.selectionEnd = node.value.length; }; }
  else if (ie) // Suppress mysterious IE10 errors
    { selectInput = function(node) { try { node.select(); } catch(_e) {} }; }

  function bind(f) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function(){return f.apply(null, args)}
  }

  function copyObj(obj, target, overwrite) {
    if (!target) { target = {}; }
    for (var prop in obj)
      { if (obj.hasOwnProperty(prop) && (overwrite !== false || !target.hasOwnProperty(prop)))
        { target[prop] = obj[prop]; } }
    return target
  }

  // Counts the column offset in a string, taking tabs into account.
  // Used mostly to find indentation.
  function countColumn(string, end, tabSize, startIndex, startValue) {
    if (end == null) {
      end = string.search(/[^\s\u00a0]/);
      if (end == -1) { end = string.length; }
    }
    for (var i = startIndex || 0, n = startValue || 0;;) {
      var nextTab = string.indexOf("\t", i);
      if (nextTab < 0 || nextTab >= end)
        { return n + (end - i) }
      n += nextTab - i;
      n += tabSize - (n % tabSize);
      i = nextTab + 1;
    }
  }

  var Delayed = function() {
    this.id = null;
    this.f = null;
    this.time = 0;
    this.handler = bind(this.onTimeout, this);
  };
  Delayed.prototype.onTimeout = function (self) {
    self.id = 0;
    if (self.time <= +new Date) {
      self.f();
    } else {
      setTimeout(self.handler, self.time - +new Date);
    }
  };
  Delayed.prototype.set = function (ms, f) {
    this.f = f;
    var time = +new Date + ms;
    if (!this.id || time < this.time) {
      clearTimeout(this.id);
      this.id = setTimeout(this.handler, ms);
      this.time = time;
    }
  };

  function indexOf(array, elt) {
    for (var i = 0; i < array.length; ++i)
      { if (array[i] == elt) { return i } }
    return -1
  }

  // Number of pixels added to scroller and sizer to hide scrollbar
  var scrollerGap = 50;

  // Returned or thrown by various protocols to signal 'I'm not
  // handling this'.
  var Pass = {toString: function(){return "CodeMirror.Pass"}};

  // Reused option objects for setSelection & friends
  var sel_dontScroll = {scroll: false}, sel_mouse = {origin: "*mouse"}, sel_move = {origin: "+move"};

  // The inverse of countColumn -- find the offset that corresponds to
  // a particular column.
  function findColumn(string, goal, tabSize) {
    for (var pos = 0, col = 0;;) {
      var nextTab = string.indexOf("\t", pos);
      if (nextTab == -1) { nextTab = string.length; }
      var skipped = nextTab - pos;
      if (nextTab == string.length || col + skipped >= goal)
        { return pos + Math.min(skipped, goal - col) }
      col += nextTab - pos;
      col += tabSize - (col % tabSize);
      pos = nextTab + 1;
      if (col >= goal) { return pos }
    }
  }

  var spaceStrs = [""];
  function spaceStr(n) {
    while (spaceStrs.length <= n)
      { spaceStrs.push(lst(spaceStrs) + " "); }
    return spaceStrs[n]
  }

  function lst(arr) { return arr[arr.length-1] }

  function map(array, f) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = f(array[i], i); }
    return out
  }

  function insertSorted(array, value, score) {
    var pos = 0, priority = score(value);
    while (pos < array.length && score(array[pos]) <= priority) { pos++; }
    array.splice(pos, 0, value);
  }

  function nothing() {}

  function createObj(base, props) {
    var inst;
    if (Object.create) {
      inst = Object.create(base);
    } else {
      nothing.prototype = base;
      inst = new nothing();
    }
    if (props) { copyObj(props, inst); }
    return inst
  }

  var nonASCIISingleCaseWordChar = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
  function isWordCharBasic(ch) {
    return /\w/.test(ch) || ch > "\x80" &&
      (ch.toUpperCase() != ch.toLowerCase() || nonASCIISingleCaseWordChar.test(ch))
  }
  function isWordChar(ch, helper) {
    if (!helper) { return isWordCharBasic(ch) }
    if (helper.source.indexOf("\\w") > -1 && isWordCharBasic(ch)) { return true }
    return helper.test(ch)
  }

  function isEmpty(obj) {
    for (var n in obj) { if (obj.hasOwnProperty(n) && obj[n]) { return false } }
    return true
  }

  // Extending unicode characters. A series of a non-extending char +
  // any number of extending chars is treated as a single unit as far
  // as editing and measuring is concerned. This is not fully correct,
  // since some scripts/fonts/browsers also treat other configurations
  // of code points as a group.
  var extendingChars = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
  function isExtendingChar(ch) { return ch.charCodeAt(0) >= 768 && extendingChars.test(ch) }

  // Returns a number from the range [`0`; `str.length`] unless `pos` is outside that range.
  function skipExtendingChars(str, pos, dir) {
    while ((dir < 0 ? pos > 0 : pos < str.length) && isExtendingChar(str.charAt(pos))) { pos += dir; }
    return pos
  }

  // Returns the value from the range [`from`; `to`] that satisfies
  // `pred` and is closest to `from`. Assumes that at least `to`
  // satisfies `pred`. Supports `from` being greater than `to`.
  function findFirst(pred, from, to) {
    // At any point we are certain `to` satisfies `pred`, don't know
    // whether `from` does.
    var dir = from > to ? -1 : 1;
    for (;;) {
      if (from == to) { return from }
      var midF = (from + to) / 2, mid = dir < 0 ? Math.ceil(midF) : Math.floor(midF);
      if (mid == from) { return pred(mid) ? from : to }
      if (pred(mid)) { to = mid; }
      else { from = mid + dir; }
    }
  }

  // BIDI HELPERS

  function iterateBidiSections(order, from, to, f) {
    if (!order) { return f(from, to, "ltr", 0) }
    var found = false;
    for (var i = 0; i < order.length; ++i) {
      var part = order[i];
      if (part.from < to && part.to > from || from == to && part.to == from) {
        f(Math.max(part.from, from), Math.min(part.to, to), part.level == 1 ? "rtl" : "ltr", i);
        found = true;
      }
    }
    if (!found) { f(from, to, "ltr"); }
  }

  var bidiOther = null;
  function getBidiPartAt(order, ch, sticky) {
    var found;
    bidiOther = null;
    for (var i = 0; i < order.length; ++i) {
      var cur = order[i];
      if (cur.from < ch && cur.to > ch) { return i }
      if (cur.to == ch) {
        if (cur.from != cur.to && sticky == "before") { found = i; }
        else { bidiOther = i; }
      }
      if (cur.from == ch) {
        if (cur.from != cur.to && sticky != "before") { found = i; }
        else { bidiOther = i; }
      }
    }
    return found != null ? found : bidiOther
  }

  // Bidirectional ordering algorithm
  // See http://unicode.org/reports/tr9/tr9-13.html for the algorithm
  // that this (partially) implements.

  // One-char codes used for character types:
  // L (L):   Left-to-Right
  // R (R):   Right-to-Left
  // r (AL):  Right-to-Left Arabic
  // 1 (EN):  European Number
  // + (ES):  European Number Separator
  // % (ET):  European Number Terminator
  // n (AN):  Arabic Number
  // , (CS):  Common Number Separator
  // m (NSM): Non-Spacing Mark
  // b (BN):  Boundary Neutral
  // s (B):   Paragraph Separator
  // t (S):   Segment Separator
  // w (WS):  Whitespace
  // N (ON):  Other Neutrals

  // Returns null if characters are ordered as they appear
  // (left-to-right), or an array of sections ({from, to, level}
  // objects) in the order in which they occur visually.
  var bidiOrdering = (function() {
    // Character types for codepoints 0 to 0xff
    var lowTypes = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN";
    // Character types for codepoints 0x600 to 0x6f9
    var arabicTypes = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
    function charType(code) {
      if (code <= 0xf7) { return lowTypes.charAt(code) }
      else if (0x590 <= code && code <= 0x5f4) { return "R" }
      else if (0x600 <= code && code <= 0x6f9) { return arabicTypes.charAt(code - 0x600) }
      else if (0x6ee <= code && code <= 0x8ac) { return "r" }
      else if (0x2000 <= code && code <= 0x200b) { return "w" }
      else if (code == 0x200c) { return "b" }
      else { return "L" }
    }

    var bidiRE = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
    var isNeutral = /[stwN]/, isStrong = /[LRr]/, countsAsLeft = /[Lb1n]/, countsAsNum = /[1n]/;

    function BidiSpan(level, from, to) {
      this.level = level;
      this.from = from; this.to = to;
    }

    return function(str, direction) {
      var outerType = direction == "ltr" ? "L" : "R";

      if (str.length == 0 || direction == "ltr" && !bidiRE.test(str)) { return false }
      var len = str.length, types = [];
      for (var i = 0; i < len; ++i)
        { types.push(charType(str.charCodeAt(i))); }

      // W1. Examine each non-spacing mark (NSM) in the level run, and
      // change the type of the NSM to the type of the previous
      // character. If the NSM is at the start of the level run, it will
      // get the type of sor.
      for (var i$1 = 0, prev = outerType; i$1 < len; ++i$1) {
        var type = types[i$1];
        if (type == "m") { types[i$1] = prev; }
        else { prev = type; }
      }

      // W2. Search backwards from each instance of a European number
      // until the first strong type (R, L, AL, or sor) is found. If an
      // AL is found, change the type of the European number to Arabic
      // number.
      // W3. Change all ALs to R.
      for (var i$2 = 0, cur = outerType; i$2 < len; ++i$2) {
        var type$1 = types[i$2];
        if (type$1 == "1" && cur == "r") { types[i$2] = "n"; }
        else if (isStrong.test(type$1)) { cur = type$1; if (type$1 == "r") { types[i$2] = "R"; } }
      }

      // W4. A single European separator between two European numbers
      // changes to a European number. A single common separator between
      // two numbers of the same type changes to that type.
      for (var i$3 = 1, prev$1 = types[0]; i$3 < len - 1; ++i$3) {
        var type$2 = types[i$3];
        if (type$2 == "+" && prev$1 == "1" && types[i$3+1] == "1") { types[i$3] = "1"; }
        else if (type$2 == "," && prev$1 == types[i$3+1] &&
                 (prev$1 == "1" || prev$1 == "n")) { types[i$3] = prev$1; }
        prev$1 = type$2;
      }

      // W5. A sequence of European terminators adjacent to European
      // numbers changes to all European numbers.
      // W6. Otherwise, separators and terminators change to Other
      // Neutral.
      for (var i$4 = 0; i$4 < len; ++i$4) {
        var type$3 = types[i$4];
        if (type$3 == ",") { types[i$4] = "N"; }
        else if (type$3 == "%") {
          var end = (void 0);
          for (end = i$4 + 1; end < len && types[end] == "%"; ++end) {}
          var replace = (i$4 && types[i$4-1] == "!") || (end < len && types[end] == "1") ? "1" : "N";
          for (var j = i$4; j < end; ++j) { types[j] = replace; }
          i$4 = end - 1;
        }
      }

      // W7. Search backwards from each instance of a European number
      // until the first strong type (R, L, or sor) is found. If an L is
      // found, then change the type of the European number to L.
      for (var i$5 = 0, cur$1 = outerType; i$5 < len; ++i$5) {
        var type$4 = types[i$5];
        if (cur$1 == "L" && type$4 == "1") { types[i$5] = "L"; }
        else if (isStrong.test(type$4)) { cur$1 = type$4; }
      }

      // N1. A sequence of neutrals takes the direction of the
      // surrounding strong text if the text on both sides has the same
      // direction. European and Arabic numbers act as if they were R in
      // terms of their influence on neutrals. Start-of-level-run (sor)
      // and end-of-level-run (eor) are used at level run boundaries.
      // N2. Any remaining neutrals take the embedding direction.
      for (var i$6 = 0; i$6 < len; ++i$6) {
        if (isNeutral.test(types[i$6])) {
          var end$1 = (void 0);
          for (end$1 = i$6 + 1; end$1 < len && isNeutral.test(types[end$1]); ++end$1) {}
          var before = (i$6 ? types[i$6-1] : outerType) == "L";
          var after = (end$1 < len ? types[end$1] : outerType) == "L";
          var replace$1 = before == after ? (before ? "L" : "R") : outerType;
          for (var j$1 = i$6; j$1 < end$1; ++j$1) { types[j$1] = replace$1; }
          i$6 = end$1 - 1;
        }
      }

      // Here we depart from the documented algorithm, in order to avoid
      // building up an actual levels array. Since there are only three
      // levels (0, 1, 2) in an implementation that doesn't take
      // explicit embedding into account, we can build up the order on
      // the fly, without following the level-based algorithm.
      var order = [], m;
      for (var i$7 = 0; i$7 < len;) {
        if (countsAsLeft.test(types[i$7])) {
          var start = i$7;
          for (++i$7; i$7 < len && countsAsLeft.test(types[i$7]); ++i$7) {}
          order.push(new BidiSpan(0, start, i$7));
        } else {
          var pos = i$7, at = order.length, isRTL = direction == "rtl" ? 1 : 0;
          for (++i$7; i$7 < len && types[i$7] != "L"; ++i$7) {}
          for (var j$2 = pos; j$2 < i$7;) {
            if (countsAsNum.test(types[j$2])) {
              if (pos < j$2) { order.splice(at, 0, new BidiSpan(1, pos, j$2)); at += isRTL; }
              var nstart = j$2;
              for (++j$2; j$2 < i$7 && countsAsNum.test(types[j$2]); ++j$2) {}
              order.splice(at, 0, new BidiSpan(2, nstart, j$2));
              at += isRTL;
              pos = j$2;
            } else { ++j$2; }
          }
          if (pos < i$7) { order.splice(at, 0, new BidiSpan(1, pos, i$7)); }
        }
      }
      if (direction == "ltr") {
        if (order[0].level == 1 && (m = str.match(/^\s+/))) {
          order[0].from = m[0].length;
          order.unshift(new BidiSpan(0, 0, m[0].length));
        }
        if (lst(order).level == 1 && (m = str.match(/\s+$/))) {
          lst(order).to -= m[0].length;
          order.push(new BidiSpan(0, len - m[0].length, len));
        }
      }

      return direction == "rtl" ? order.reverse() : order
    }
  })();

  // Get the bidi ordering for the given line (and cache it). Returns
  // false for lines that are fully left-to-right, and an array of
  // BidiSpan objects otherwise.
  function getOrder(line, direction) {
    var order = line.order;
    if (order == null) { order = line.order = bidiOrdering(line.text, direction); }
    return order
  }

  // EVENT HANDLING

  // Lightweight event framework. on/off also work on DOM nodes,
  // registering native DOM handlers.

  var noHandlers = [];

  var on = function(emitter, type, f) {
    if (emitter.addEventListener) {
      emitter.addEventListener(type, f, false);
    } else if (emitter.attachEvent) {
      emitter.attachEvent("on" + type, f);
    } else {
      var map = emitter._handlers || (emitter._handlers = {});
      map[type] = (map[type] || noHandlers).concat(f);
    }
  };

  function getHandlers(emitter, type) {
    return emitter._handlers && emitter._handlers[type] || noHandlers
  }

  function off(emitter, type, f) {
    if (emitter.removeEventListener) {
      emitter.removeEventListener(type, f, false);
    } else if (emitter.detachEvent) {
      emitter.detachEvent("on" + type, f);
    } else {
      var map = emitter._handlers, arr = map && map[type];
      if (arr) {
        var index = indexOf(arr, f);
        if (index > -1)
          { map[type] = arr.slice(0, index).concat(arr.slice(index + 1)); }
      }
    }
  }

  function signal(emitter, type /*, values...*/) {
    var handlers = getHandlers(emitter, type);
    if (!handlers.length) { return }
    var args = Array.prototype.slice.call(arguments, 2);
    for (var i = 0; i < handlers.length; ++i) { handlers[i].apply(null, args); }
  }

  // The DOM events that CodeMirror handles can be overridden by
  // registering a (non-DOM) handler on the editor for the event name,
  // and preventDefault-ing the event in that handler.
  function signalDOMEvent(cm, e, override) {
    if (typeof e == "string")
      { e = {type: e, preventDefault: function() { this.defaultPrevented = true; }}; }
    signal(cm, override || e.type, cm, e);
    return e_defaultPrevented(e) || e.codemirrorIgnore
  }

  function signalCursorActivity(cm) {
    var arr = cm._handlers && cm._handlers.cursorActivity;
    if (!arr) { return }
    var set = cm.curOp.cursorActivityHandlers || (cm.curOp.cursorActivityHandlers = []);
    for (var i = 0; i < arr.length; ++i) { if (indexOf(set, arr[i]) == -1)
      { set.push(arr[i]); } }
  }

  function hasHandler(emitter, type) {
    return getHandlers(emitter, type).length > 0
  }

  // Add on and off methods to a constructor's prototype, to make
  // registering events on such objects more convenient.
  function eventMixin(ctor) {
    ctor.prototype.on = function(type, f) {on(this, type, f);};
    ctor.prototype.off = function(type, f) {off(this, type, f);};
  }

  // Due to the fact that we still support jurassic IE versions, some
  // compatibility wrappers are needed.

  function e_preventDefault(e) {
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
  }
  function e_stopPropagation(e) {
    if (e.stopPropagation) { e.stopPropagation(); }
    else { e.cancelBubble = true; }
  }
  function e_defaultPrevented(e) {
    return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == false
  }
  function e_stop(e) {e_preventDefault(e); e_stopPropagation(e);}

  function e_target(e) {return e.target || e.srcElement}
  function e_button(e) {
    var b = e.which;
    if (b == null) {
      if (e.button & 1) { b = 1; }
      else if (e.button & 2) { b = 3; }
      else if (e.button & 4) { b = 2; }
    }
    if (mac && e.ctrlKey && b == 1) { b = 3; }
    return b
  }

  // Detect drag-and-drop
  var dragAndDrop = function() {
    // There is *some* kind of drag-and-drop support in IE6-8, but I
    // couldn't get it to work yet.
    if (ie && ie_version < 9) { return false }
    var div = elt('div');
    return "draggable" in div || "dragDrop" in div
  }();

  var zwspSupported;
  function zeroWidthElement(measure) {
    if (zwspSupported == null) {
      var test = elt("span", "\u200b");
      removeChildrenAndAdd(measure, elt("span", [test, document.createTextNode("x")]));
      if (measure.firstChild.offsetHeight != 0)
        { zwspSupported = test.offsetWidth <= 1 && test.offsetHeight > 2 && !(ie && ie_version < 8); }
    }
    var node = zwspSupported ? elt("span", "\u200b") :
      elt("span", "\u00a0", null, "display: inline-block; width: 1px; margin-right: -1px");
    node.setAttribute("cm-text", "");
    return node
  }

  // Feature-detect IE's crummy client rect reporting for bidi text
  var badBidiRects;
  function hasBadBidiRects(measure) {
    if (badBidiRects != null) { return badBidiRects }
    var txt = removeChildrenAndAdd(measure, document.createTextNode("A\u062eA"));
    var r0 = range(txt, 0, 1).getBoundingClientRect();
    var r1 = range(txt, 1, 2).getBoundingClientRect();
    removeChildren(measure);
    if (!r0 || r0.left == r0.right) { return false } // Safari returns null in some cases (#2780)
    return badBidiRects = (r1.right - r0.right < 3)
  }

  // See if "".split is the broken IE version, if so, provide an
  // alternative way to split lines.
  var splitLinesAuto = "\n\nb".split(/\n/).length != 3 ? function (string) {
    var pos = 0, result = [], l = string.length;
    while (pos <= l) {
      var nl = string.indexOf("\n", pos);
      if (nl == -1) { nl = string.length; }
      var line = string.slice(pos, string.charAt(nl - 1) == "\r" ? nl - 1 : nl);
      var rt = line.indexOf("\r");
      if (rt != -1) {
        result.push(line.slice(0, rt));
        pos += rt + 1;
      } else {
        result.push(line);
        pos = nl + 1;
      }
    }
    return result
  } : function (string) { return string.split(/\r\n?|\n/); };

  var hasSelection = window.getSelection ? function (te) {
    try { return te.selectionStart != te.selectionEnd }
    catch(e) { return false }
  } : function (te) {
    var range;
    try {range = te.ownerDocument.selection.createRange();}
    catch(e) {}
    if (!range || range.parentElement() != te) { return false }
    return range.compareEndPoints("StartToEnd", range) != 0
  };

  var hasCopyEvent = (function () {
    var e = elt("div");
    if ("oncopy" in e) { return true }
    e.setAttribute("oncopy", "return;");
    return typeof e.oncopy == "function"
  })();

  var badZoomedRects = null;
  function hasBadZoomedRects(measure) {
    if (badZoomedRects != null) { return badZoomedRects }
    var node = removeChildrenAndAdd(measure, elt("span", "x"));
    var normal = node.getBoundingClientRect();
    var fromRange = range(node, 0, 1).getBoundingClientRect();
    return badZoomedRects = Math.abs(normal.left - fromRange.left) > 1
  }

  // Known modes, by name and by MIME
  var modes = {}, mimeModes = {};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  function defineMode(name, mode) {
    if (arguments.length > 2)
      { mode.dependencies = Array.prototype.slice.call(arguments, 2); }
    modes[name] = mode;
  }

  function defineMIME(mime, spec) {
    mimeModes[mime] = spec;
  }

  // Given a MIME type, a {name, ...options} config object, or a name
  // string, return a mode config object.
  function resolveMode(spec) {
    if (typeof spec == "string" && mimeModes.hasOwnProperty(spec)) {
      spec = mimeModes[spec];
    } else if (spec && typeof spec.name == "string" && mimeModes.hasOwnProperty(spec.name)) {
      var found = mimeModes[spec.name];
      if (typeof found == "string") { found = {name: found}; }
      spec = createObj(found, spec);
      spec.name = found.name;
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(spec)) {
      return resolveMode("application/xml")
    } else if (typeof spec == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(spec)) {
      return resolveMode("application/json")
    }
    if (typeof spec == "string") { return {name: spec} }
    else { return spec || {name: "null"} }
  }

  // Given a mode spec (anything that resolveMode accepts), find and
  // initialize an actual mode object.
  function getMode(options, spec) {
    spec = resolveMode(spec);
    var mfactory = modes[spec.name];
    if (!mfactory) { return getMode(options, "text/plain") }
    var modeObj = mfactory(options, spec);
    if (modeExtensions.hasOwnProperty(spec.name)) {
      var exts = modeExtensions[spec.name];
      for (var prop in exts) {
        if (!exts.hasOwnProperty(prop)) { continue }
        if (modeObj.hasOwnProperty(prop)) { modeObj["_" + prop] = modeObj[prop]; }
        modeObj[prop] = exts[prop];
      }
    }
    modeObj.name = spec.name;
    if (spec.helperType) { modeObj.helperType = spec.helperType; }
    if (spec.modeProps) { for (var prop$1 in spec.modeProps)
      { modeObj[prop$1] = spec.modeProps[prop$1]; } }

    return modeObj
  }

  // This can be used to attach properties to mode objects from
  // outside the actual mode definition.
  var modeExtensions = {};
  function extendMode(mode, properties) {
    var exts = modeExtensions.hasOwnProperty(mode) ? modeExtensions[mode] : (modeExtensions[mode] = {});
    copyObj(properties, exts);
  }

  function copyState(mode, state) {
    if (state === true) { return state }
    if (mode.copyState) { return mode.copyState(state) }
    var nstate = {};
    for (var n in state) {
      var val = state[n];
      if (val instanceof Array) { val = val.concat([]); }
      nstate[n] = val;
    }
    return nstate
  }

  // Given a mode and a state (for that mode), find the inner mode and
  // state at the position that the state refers to.
  function innerMode(mode, state) {
    var info;
    while (mode.innerMode) {
      info = mode.innerMode(state);
      if (!info || info.mode == mode) { break }
      state = info.state;
      mode = info.mode;
    }
    return info || {mode: mode, state: state}
  }

  function startState(mode, a1, a2) {
    return mode.startState ? mode.startState(a1, a2) : true
  }

  // STRING STREAM

  // Fed to the mode parsers, provides helper functions to make
  // parsers more succinct.

  var StringStream = function(string, tabSize, lineOracle) {
    this.pos = this.start = 0;
    this.string = string;
    this.tabSize = tabSize || 8;
    this.lastColumnPos = this.lastColumnValue = 0;
    this.lineStart = 0;
    this.lineOracle = lineOracle;
  };

  StringStream.prototype.eol = function () {return this.pos >= this.string.length};
  StringStream.prototype.sol = function () {return this.pos == this.lineStart};
  StringStream.prototype.peek = function () {return this.string.charAt(this.pos) || undefined};
  StringStream.prototype.next = function () {
    if (this.pos < this.string.length)
      { return this.string.charAt(this.pos++) }
  };
  StringStream.prototype.eat = function (match) {
    var ch = this.string.charAt(this.pos);
    var ok;
    if (typeof match == "string") { ok = ch == match; }
    else { ok = ch && (match.test ? match.test(ch) : match(ch)); }
    if (ok) {++this.pos; return ch}
  };
  StringStream.prototype.eatWhile = function (match) {
    var start = this.pos;
    while (this.eat(match)){}
    return this.pos > start
  };
  StringStream.prototype.eatSpace = function () {
    var start = this.pos;
    while (/[\s\u00a0]/.test(this.string.charAt(this.pos))) { ++this.pos; }
    return this.pos > start
  };
  StringStream.prototype.skipToEnd = function () {this.pos = this.string.length;};
  StringStream.prototype.skipTo = function (ch) {
    var found = this.string.indexOf(ch, this.pos);
    if (found > -1) {this.pos = found; return true}
  };
  StringStream.prototype.backUp = function (n) {this.pos -= n;};
  StringStream.prototype.column = function () {
    if (this.lastColumnPos < this.start) {
      this.lastColumnValue = countColumn(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue);
      this.lastColumnPos = this.start;
    }
    return this.lastColumnValue - (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.indentation = function () {
    return countColumn(this.string, null, this.tabSize) -
      (this.lineStart ? countColumn(this.string, this.lineStart, this.tabSize) : 0)
  };
  StringStream.prototype.match = function (pattern, consume, caseInsensitive) {
    if (typeof pattern == "string") {
      var cased = function (str) { return caseInsensitive ? str.toLowerCase() : str; };
      var substr = this.string.substr(this.pos, pattern.length);
      if (cased(substr) == cased(pattern)) {
        if (consume !== false) { this.pos += pattern.length; }
        return true
      }
    } else {
      var match = this.string.slice(this.pos).match(pattern);
      if (match && match.index > 0) { return null }
      if (match && consume !== false) { this.pos += match[0].length; }
      return match
    }
  };
  StringStream.prototype.current = function (){return this.string.slice(this.start, this.pos)};
  StringStream.prototype.hideFirstChars = function (n, inner) {
    this.lineStart += n;
    try { return inner() }
    finally { this.lineStart -= n; }
  };
  StringStream.prototype.lookAhead = function (n) {
    var oracle = this.lineOracle;
    return oracle && oracle.lookAhead(n)
  };
  StringStream.prototype.baseToken = function () {
    var oracle = this.lineOracle;
    return oracle && oracle.baseToken(this.pos)
  };

  // Find the line object corresponding to the given line number.
  function getLine(doc, n) {
    n -= doc.first;
    if (n < 0 || n >= doc.size) { throw new Error("There is no line " + (n + doc.first) + " in the document.") }
    var chunk = doc;
    while (!chunk.lines) {
      for (var i = 0;; ++i) {
        var child = chunk.children[i], sz = child.chunkSize();
        if (n < sz) { chunk = child; break }
        n -= sz;
      }
    }
    return chunk.lines[n]
  }

  // Get the part of a document between two positions, as an array of
  // strings.
  function getBetween(doc, start, end) {
    var out = [], n = start.line;
    doc.iter(start.line, end.line + 1, function (line) {
      var text = line.text;
      if (n == end.line) { text = text.slice(0, end.ch); }
      if (n == start.line) { text = text.slice(start.ch); }
      out.push(text);
      ++n;
    });
    return out
  }
  // Get the lines between from and to, as array of strings.
  function getLines(doc, from, to) {
    var out = [];
    doc.iter(from, to, function (line) { out.push(line.text); }); // iter aborts when callback returns truthy value
    return out
  }

  // Update the height of a line, propagating the height change
  // upwards to parent nodes.
  function updateLineHeight(line, height) {
    var diff = height - line.height;
    if (diff) { for (var n = line; n; n = n.parent) { n.height += diff; } }
  }

  // Given a line object, find its line number by walking up through
  // its parent links.
  function lineNo(line) {
    if (line.parent == null) { return null }
    var cur = line.parent, no = indexOf(cur.lines, line);
    for (var chunk = cur.parent; chunk; cur = chunk, chunk = chunk.parent) {
      for (var i = 0;; ++i) {
        if (chunk.children[i] == cur) { break }
        no += chunk.children[i].chunkSize();
      }
    }
    return no + cur.first
  }

  // Find the line at the given vertical position, using the height
  // information in the document tree.
  function lineAtHeight(chunk, h) {
    var n = chunk.first;
    outer: do {
      for (var i$1 = 0; i$1 < chunk.children.length; ++i$1) {
        var child = chunk.children[i$1], ch = child.height;
        if (h < ch) { chunk = child; continue outer }
        h -= ch;
        n += child.chunkSize();
      }
      return n
    } while (!chunk.lines)
    var i = 0;
    for (; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i], lh = line.height;
      if (h < lh) { break }
      h -= lh;
    }
    return n + i
  }

  function isLine(doc, l) {return l >= doc.first && l < doc.first + doc.size}

  function lineNumberFor(options, i) {
    return String(options.lineNumberFormatter(i + options.firstLineNumber))
  }

  // A Pos instance represents a position within the text.
  function Pos(line, ch, sticky) {
    if ( sticky === void 0 ) sticky = null;

    if (!(this instanceof Pos)) { return new Pos(line, ch, sticky) }
    this.line = line;
    this.ch = ch;
    this.sticky = sticky;
  }

  // Compare two positions, return 0 if they are the same, a negative
  // number when a is less, and a positive number otherwise.
  function cmp(a, b) { return a.line - b.line || a.ch - b.ch }

  function equalCursorPos(a, b) { return a.sticky == b.sticky && cmp(a, b) == 0 }

  function copyPos(x) {return Pos(x.line, x.ch)}
  function maxPos(a, b) { return cmp(a, b) < 0 ? b : a }
  function minPos(a, b) { return cmp(a, b) < 0 ? a : b }

  // Most of the external API clips given positions to make sure they
  // actually exist within the document.
  function clipLine(doc, n) {return Math.max(doc.first, Math.min(n, doc.first + doc.size - 1))}
  function clipPos(doc, pos) {
    if (pos.line < doc.first) { return Pos(doc.first, 0) }
    var last = doc.first + doc.size - 1;
    if (pos.line > last) { return Pos(last, getLine(doc, last).text.length) }
    return clipToLen(pos, getLine(doc, pos.line).text.length)
  }
  function clipToLen(pos, linelen) {
    var ch = pos.ch;
    if (ch == null || ch > linelen) { return Pos(pos.line, linelen) }
    else if (ch < 0) { return Pos(pos.line, 0) }
    else { return pos }
  }
  function clipPosArray(doc, array) {
    var out = [];
    for (var i = 0; i < array.length; i++) { out[i] = clipPos(doc, array[i]); }
    return out
  }

  var SavedContext = function(state, lookAhead) {
    this.state = state;
    this.lookAhead = lookAhead;
  };

  var Context = function(doc, state, line, lookAhead) {
    this.state = state;
    this.doc = doc;
    this.line = line;
    this.maxLookAhead = lookAhead || 0;
    this.baseTokens = null;
    this.baseTokenPos = 1;
  };

  Context.prototype.lookAhead = function (n) {
    var line = this.doc.getLine(this.line + n);
    if (line != null && n > this.maxLookAhead) { this.maxLookAhead = n; }
    return line
  };

  Context.prototype.baseToken = function (n) {
    if (!this.baseTokens) { return null }
    while (this.baseTokens[this.baseTokenPos] <= n)
      { this.baseTokenPos += 2; }
    var type = this.baseTokens[this.baseTokenPos + 1];
    return {type: type && type.replace(/( |^)overlay .*/, ""),
            size: this.baseTokens[this.baseTokenPos] - n}
  };

  Context.prototype.nextLine = function () {
    this.line++;
    if (this.maxLookAhead > 0) { this.maxLookAhead--; }
  };

  Context.fromSaved = function (doc, saved, line) {
    if (saved instanceof SavedContext)
      { return new Context(doc, copyState(doc.mode, saved.state), line, saved.lookAhead) }
    else
      { return new Context(doc, copyState(doc.mode, saved), line) }
  };

  Context.prototype.save = function (copy) {
    var state = copy !== false ? copyState(this.doc.mode, this.state) : this.state;
    return this.maxLookAhead > 0 ? new SavedContext(state, this.maxLookAhead) : state
  };


  // Compute a style array (an array starting with a mode generation
  // -- for invalidation -- followed by pairs of end positions and
  // style strings), which is used to highlight the tokens on the
  // line.
  function highlightLine(cm, line, context, forceToEnd) {
    // A styles array always starts with a number identifying the
    // mode/overlays that it is based on (for easy invalidation).
    var st = [cm.state.modeGen], lineClasses = {};
    // Compute the base array of styles
    runMode(cm, line.text, cm.doc.mode, context, function (end, style) { return st.push(end, style); },
            lineClasses, forceToEnd);
    var state = context.state;

    // Run overlays, adjust style array.
    var loop = function ( o ) {
      context.baseTokens = st;
      var overlay = cm.state.overlays[o], i = 1, at = 0;
      context.state = true;
      runMode(cm, line.text, overlay.mode, context, function (end, style) {
        var start = i;
        // Ensure there's a token end at the current position, and that i points at it
        while (at < end) {
          var i_end = st[i];
          if (i_end > end)
            { st.splice(i, 1, end, st[i+1], i_end); }
          i += 2;
          at = Math.min(end, i_end);
        }
        if (!style) { return }
        if (overlay.opaque) {
          st.splice(start, i - start, end, "overlay " + style);
          i = start + 2;
        } else {
          for (; start < i; start += 2) {
            var cur = st[start+1];
            st[start+1] = (cur ? cur + " " : "") + "overlay " + style;
          }
        }
      }, lineClasses);
      context.state = state;
      context.baseTokens = null;
      context.baseTokenPos = 1;
    };

    for (var o = 0; o < cm.state.overlays.length; ++o) loop( o );

    return {styles: st, classes: lineClasses.bgClass || lineClasses.textClass ? lineClasses : null}
  }

  function getLineStyles(cm, line, updateFrontier) {
    if (!line.styles || line.styles[0] != cm.state.modeGen) {
      var context = getContextBefore(cm, lineNo(line));
      var resetState = line.text.length > cm.options.maxHighlightLength && copyState(cm.doc.mode, context.state);
      var result = highlightLine(cm, line, context);
      if (resetState) { context.state = resetState; }
      line.stateAfter = context.save(!resetState);
      line.styles = result.styles;
      if (result.classes) { line.styleClasses = result.classes; }
      else if (line.styleClasses) { line.styleClasses = null; }
      if (updateFrontier === cm.doc.highlightFrontier)
        { cm.doc.modeFrontier = Math.max(cm.doc.modeFrontier, ++cm.doc.highlightFrontier); }
    }
    return line.styles
  }

  function getContextBefore(cm, n, precise) {
    var doc = cm.doc, display = cm.display;
    if (!doc.mode.startState) { return new Context(doc, true, n) }
    var start = findStartLine(cm, n, precise);
    var saved = start > doc.first && getLine(doc, start - 1).stateAfter;
    var context = saved ? Context.fromSaved(doc, saved, start) : new Context(doc, startState(doc.mode), start);

    doc.iter(start, n, function (line) {
      processLine(cm, line.text, context);
      var pos = context.line;
      line.stateAfter = pos == n - 1 || pos % 5 == 0 || pos >= display.viewFrom && pos < display.viewTo ? context.save() : null;
      context.nextLine();
    });
    if (precise) { doc.modeFrontier = context.line; }
    return context
  }

  // Lightweight form of highlight -- proceed over this line and
  // update state, but don't save a style array. Used for lines that
  // aren't currently visible.
  function processLine(cm, text, context, startAt) {
    var mode = cm.doc.mode;
    var stream = new StringStream(text, cm.options.tabSize, context);
    stream.start = stream.pos = startAt || 0;
    if (text == "") { callBlankLine(mode, context.state); }
    while (!stream.eol()) {
      readToken(mode, stream, context.state);
      stream.start = stream.pos;
    }
  }

  function callBlankLine(mode, state) {
    if (mode.blankLine) { return mode.blankLine(state) }
    if (!mode.innerMode) { return }
    var inner = innerMode(mode, state);
    if (inner.mode.blankLine) { return inner.mode.blankLine(inner.state) }
  }

  function readToken(mode, stream, state, inner) {
    for (var i = 0; i < 10; i++) {
      if (inner) { inner[0] = innerMode(mode, state).mode; }
      var style = mode.token(stream, state);
      if (stream.pos > stream.start) { return style }
    }
    throw new Error("Mode " + mode.name + " failed to advance stream.")
  }

  var Token = function(stream, type, state) {
    this.start = stream.start; this.end = stream.pos;
    this.string = stream.current();
    this.type = type || null;
    this.state = state;
  };

  // Utility for getTokenAt and getLineTokens
  function takeToken(cm, pos, precise, asArray) {
    var doc = cm.doc, mode = doc.mode, style;
    pos = clipPos(doc, pos);
    var line = getLine(doc, pos.line), context = getContextBefore(cm, pos.line, precise);
    var stream = new StringStream(line.text, cm.options.tabSize, context), tokens;
    if (asArray) { tokens = []; }
    while ((asArray || stream.pos < pos.ch) && !stream.eol()) {
      stream.start = stream.pos;
      style = readToken(mode, stream, context.state);
      if (asArray) { tokens.push(new Token(stream, style, copyState(doc.mode, context.state))); }
    }
    return asArray ? tokens : new Token(stream, style, context.state)
  }

  function extractLineClasses(type, output) {
    if (type) { for (;;) {
      var lineClass = type.match(/(?:^|\s+)line-(background-)?(\S+)/);
      if (!lineClass) { break }
      type = type.slice(0, lineClass.index) + type.slice(lineClass.index + lineClass[0].length);
      var prop = lineClass[1] ? "bgClass" : "textClass";
      if (output[prop] == null)
        { output[prop] = lineClass[2]; }
      else if (!(new RegExp("(?:^|\\s)" + lineClass[2] + "(?:$|\\s)")).test(output[prop]))
        { output[prop] += " " + lineClass[2]; }
    } }
    return type
  }

  // Run the given mode's parser over a line, calling f for each token.
  function runMode(cm, text, mode, context, f, lineClasses, forceToEnd) {
    var flattenSpans = mode.flattenSpans;
    if (flattenSpans == null) { flattenSpans = cm.options.flattenSpans; }
    var curStart = 0, curStyle = null;
    var stream = new StringStream(text, cm.options.tabSize, context), style;
    var inner = cm.options.addModeClass && [null];
    if (text == "") { extractLineClasses(callBlankLine(mode, context.state), lineClasses); }
    while (!stream.eol()) {
      if (stream.pos > cm.options.maxHighlightLength) {
        flattenSpans = false;
        if (forceToEnd) { processLine(cm, text, context, stream.pos); }
        stream.pos = text.length;
        style = null;
      } else {
        style = extractLineClasses(readToken(mode, stream, context.state, inner), lineClasses);
      }
      if (inner) {
        var mName = inner[0].name;
        if (mName) { style = "m-" + (style ? mName + " " + style : mName); }
      }
      if (!flattenSpans || curStyle != style) {
        while (curStart < stream.start) {
          curStart = Math.min(stream.start, curStart + 5000);
          f(curStart, curStyle);
        }
        curStyle = style;
      }
      stream.start = stream.pos;
    }
    while (curStart < stream.pos) {
      // Webkit seems to refuse to render text nodes longer than 57444
      // characters, and returns inaccurate measurements in nodes
      // starting around 5000 chars.
      var pos = Math.min(stream.pos, curStart + 5000);
      f(pos, curStyle);
      curStart = pos;
    }
  }

  // Finds the line to start with when starting a parse. Tries to
  // find a line with a stateAfter, so that it can start with a
  // valid state. If that fails, it returns the line with the
  // smallest indentation, which tends to need the least context to
  // parse correctly.
  function findStartLine(cm, n, precise) {
    var minindent, minline, doc = cm.doc;
    var lim = precise ? -1 : n - (cm.doc.mode.innerMode ? 1000 : 100);
    for (var search = n; search > lim; --search) {
      if (search <= doc.first) { return doc.first }
      var line = getLine(doc, search - 1), after = line.stateAfter;
      if (after && (!precise || search + (after instanceof SavedContext ? after.lookAhead : 0) <= doc.modeFrontier))
        { return search }
      var indented = countColumn(line.text, null, cm.options.tabSize);
      if (minline == null || minindent > indented) {
        minline = search - 1;
        minindent = indented;
      }
    }
    return minline
  }

  function retreatFrontier(doc, n) {
    doc.modeFrontier = Math.min(doc.modeFrontier, n);
    if (doc.highlightFrontier < n - 10) { return }
    var start = doc.first;
    for (var line = n - 1; line > start; line--) {
      var saved = getLine(doc, line).stateAfter;
      // change is on 3
      // state on line 1 looked ahead 2 -- so saw 3
      // test 1 + 2 < 3 should cover this
      if (saved && (!(saved instanceof SavedContext) || line + saved.lookAhead < n)) {
        start = line + 1;
        break
      }
    }
    doc.highlightFrontier = Math.min(doc.highlightFrontier, start);
  }

  // Optimize some code when these features are not used.
  var sawReadOnlySpans = false, sawCollapsedSpans = false;

  function seeReadOnlySpans() {
    sawReadOnlySpans = true;
  }

  function seeCollapsedSpans() {
    sawCollapsedSpans = true;
  }

  // TEXTMARKER SPANS

  function MarkedSpan(marker, from, to) {
    this.marker = marker;
    this.from = from; this.to = to;
  }

  // Search an array of spans for a span matching the given marker.
  function getMarkedSpanFor(spans, marker) {
    if (spans) { for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.marker == marker) { return span }
    } }
  }
  // Remove a span from an array, returning undefined if no spans are
  // left (we don't store arrays for lines without spans).
  function removeMarkedSpan(spans, span) {
    var r;
    for (var i = 0; i < spans.length; ++i)
      { if (spans[i] != span) { (r || (r = [])).push(spans[i]); } }
    return r
  }
  // Add a span to a line.
  function addMarkedSpan(line, span) {
    line.markedSpans = line.markedSpans ? line.markedSpans.concat([span]) : [span];
    span.marker.attachLine(line);
  }

  // Used for the algorithm that adjusts markers for a change in the
  // document. These functions cut an array of spans at a given
  // character position, returning an array of remaining chunks (or
  // undefined if nothing remains).
  function markedSpansBefore(old, startCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= startCh : span.from < startCh);
      if (startsBefore || span.from == startCh && marker.type == "bookmark" && (!isInsert || !span.marker.insertLeft)) {
        var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= startCh : span.to > startCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, span.from, endsAfter ? null : span.to));
      }
    } }
    return nw
  }
  function markedSpansAfter(old, endCh, isInsert) {
    var nw;
    if (old) { for (var i = 0; i < old.length; ++i) {
      var span = old[i], marker = span.marker;
      var endsAfter = span.to == null || (marker.inclusiveRight ? span.to >= endCh : span.to > endCh);
      if (endsAfter || span.from == endCh && marker.type == "bookmark" && (!isInsert || span.marker.insertLeft)) {
        var startsBefore = span.from == null || (marker.inclusiveLeft ? span.from <= endCh : span.from < endCh)
        ;(nw || (nw = [])).push(new MarkedSpan(marker, startsBefore ? null : span.from - endCh,
                                              span.to == null ? null : span.to - endCh));
      }
    } }
    return nw
  }

  // Given a change object, compute the new set of marker spans that
  // cover the line in which the change took place. Removes spans
  // entirely within the change, reconnects spans belonging to the
  // same marker that appear on both sides of the change, and cuts off
  // spans partially within the change. Returns an array of span
  // arrays with one element for each line in (after) the change.
  function stretchSpansOverChange(doc, change) {
    if (change.full) { return null }
    var oldFirst = isLine(doc, change.from.line) && getLine(doc, change.from.line).markedSpans;
    var oldLast = isLine(doc, change.to.line) && getLine(doc, change.to.line).markedSpans;
    if (!oldFirst && !oldLast) { return null }

    var startCh = change.from.ch, endCh = change.to.ch, isInsert = cmp(change.from, change.to) == 0;
    // Get the spans that 'stick out' on both sides
    var first = markedSpansBefore(oldFirst, startCh, isInsert);
    var last = markedSpansAfter(oldLast, endCh, isInsert);

    // Next, merge those two ends
    var sameLine = change.text.length == 1, offset = lst(change.text).length + (sameLine ? startCh : 0);
    if (first) {
      // Fix up .to properties of first
      for (var i = 0; i < first.length; ++i) {
        var span = first[i];
        if (span.to == null) {
          var found = getMarkedSpanFor(last, span.marker);
          if (!found) { span.to = startCh; }
          else if (sameLine) { span.to = found.to == null ? null : found.to + offset; }
        }
      }
    }
    if (last) {
      // Fix up .from in last (or move them into first in case of sameLine)
      for (var i$1 = 0; i$1 < last.length; ++i$1) {
        var span$1 = last[i$1];
        if (span$1.to != null) { span$1.to += offset; }
        if (span$1.from == null) {
          var found$1 = getMarkedSpanFor(first, span$1.marker);
          if (!found$1) {
            span$1.from = offset;
            if (sameLine) { (first || (first = [])).push(span$1); }
          }
        } else {
          span$1.from += offset;
          if (sameLine) { (first || (first = [])).push(span$1); }
        }
      }
    }
    // Make sure we didn't create any zero-length spans
    if (first) { first = clearEmptySpans(first); }
    if (last && last != first) { last = clearEmptySpans(last); }

    var newMarkers = [first];
    if (!sameLine) {
      // Fill gap with whole-line-spans
      var gap = change.text.length - 2, gapMarkers;
      if (gap > 0 && first)
        { for (var i$2 = 0; i$2 < first.length; ++i$2)
          { if (first[i$2].to == null)
            { (gapMarkers || (gapMarkers = [])).push(new MarkedSpan(first[i$2].marker, null, null)); } } }
      for (var i$3 = 0; i$3 < gap; ++i$3)
        { newMarkers.push(gapMarkers); }
      newMarkers.push(last);
    }
    return newMarkers
  }

  // Remove spans that are empty and don't have a clearWhenEmpty
  // option of false.
  function clearEmptySpans(spans) {
    for (var i = 0; i < spans.length; ++i) {
      var span = spans[i];
      if (span.from != null && span.from == span.to && span.marker.clearWhenEmpty !== false)
        { spans.splice(i--, 1); }
    }
    if (!spans.length) { return null }
    return spans
  }

  // Used to 'clip' out readOnly ranges when making a change.
  function removeReadOnlyRanges(doc, from, to) {
    var markers = null;
    doc.iter(from.line, to.line + 1, function (line) {
      if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
        var mark = line.markedSpans[i].marker;
        if (mark.readOnly && (!markers || indexOf(markers, mark) == -1))
          { (markers || (markers = [])).push(mark); }
      } }
    });
    if (!markers) { return null }
    var parts = [{from: from, to: to}];
    for (var i = 0; i < markers.length; ++i) {
      var mk = markers[i], m = mk.find(0);
      for (var j = 0; j < parts.length; ++j) {
        var p = parts[j];
        if (cmp(p.to, m.from) < 0 || cmp(p.from, m.to) > 0) { continue }
        var newParts = [j, 1], dfrom = cmp(p.from, m.from), dto = cmp(p.to, m.to);
        if (dfrom < 0 || !mk.inclusiveLeft && !dfrom)
          { newParts.push({from: p.from, to: m.from}); }
        if (dto > 0 || !mk.inclusiveRight && !dto)
          { newParts.push({from: m.to, to: p.to}); }
        parts.splice.apply(parts, newParts);
        j += newParts.length - 3;
      }
    }
    return parts
  }

  // Connect or disconnect spans from a line.
  function detachMarkedSpans(line) {
    var spans = line.markedSpans;
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.detachLine(line); }
    line.markedSpans = null;
  }
  function attachMarkedSpans(line, spans) {
    if (!spans) { return }
    for (var i = 0; i < spans.length; ++i)
      { spans[i].marker.attachLine(line); }
    line.markedSpans = spans;
  }

  // Helpers used when computing which overlapping collapsed span
  // counts as the larger one.
  function extraLeft(marker) { return marker.inclusiveLeft ? -1 : 0 }
  function extraRight(marker) { return marker.inclusiveRight ? 1 : 0 }

  // Returns a number indicating which of two overlapping collapsed
  // spans is larger (and thus includes the other). Falls back to
  // comparing ids when the spans cover exactly the same range.
  function compareCollapsedMarkers(a, b) {
    var lenDiff = a.lines.length - b.lines.length;
    if (lenDiff != 0) { return lenDiff }
    var aPos = a.find(), bPos = b.find();
    var fromCmp = cmp(aPos.from, bPos.from) || extraLeft(a) - extraLeft(b);
    if (fromCmp) { return -fromCmp }
    var toCmp = cmp(aPos.to, bPos.to) || extraRight(a) - extraRight(b);
    if (toCmp) { return toCmp }
    return b.id - a.id
  }

  // Find out whether a line ends or starts in a collapsed span. If
  // so, return the marker for that span.
  function collapsedSpanAtSide(line, start) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (sp.marker.collapsed && (start ? sp.from : sp.to) == null &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0))
        { found = sp.marker; }
    } }
    return found
  }
  function collapsedSpanAtStart(line) { return collapsedSpanAtSide(line, true) }
  function collapsedSpanAtEnd(line) { return collapsedSpanAtSide(line, false) }

  function collapsedSpanAround(line, ch) {
    var sps = sawCollapsedSpans && line.markedSpans, found;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (sp.marker.collapsed && (sp.from == null || sp.from < ch) && (sp.to == null || sp.to > ch) &&
          (!found || compareCollapsedMarkers(found, sp.marker) < 0)) { found = sp.marker; }
    } }
    return found
  }

  // Test whether there exists a collapsed span that partially
  // overlaps (covers the start or end, but not both) of a new span.
  // Such overlap is not allowed.
  function conflictingCollapsedRange(doc, lineNo, from, to, marker) {
    var line = getLine(doc, lineNo);
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var i = 0; i < sps.length; ++i) {
      var sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      var found = sp.marker.find(0);
      var fromCmp = cmp(found.from, from) || extraLeft(sp.marker) - extraLeft(marker);
      var toCmp = cmp(found.to, to) || extraRight(sp.marker) - extraRight(marker);
      if (fromCmp >= 0 && toCmp <= 0 || fromCmp <= 0 && toCmp >= 0) { continue }
      if (fromCmp <= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.to, from) >= 0 : cmp(found.to, from) > 0) ||
          fromCmp >= 0 && (sp.marker.inclusiveRight && marker.inclusiveLeft ? cmp(found.from, to) <= 0 : cmp(found.from, to) < 0))
        { return true }
    } }
  }

  // A visual line is a line as drawn on the screen. Folding, for
  // example, can cause multiple logical lines to appear on the same
  // visual line. This finds the start of the visual line that the
  // given line is part of (usually that is the line itself).
  function visualLine(line) {
    var merged;
    while (merged = collapsedSpanAtStart(line))
      { line = merged.find(-1, true).line; }
    return line
  }

  function visualLineEnd(line) {
    var merged;
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return line
  }

  // Returns an array of logical lines that continue the visual line
  // started by the argument, or undefined if there are no such lines.
  function visualLineContinued(line) {
    var merged, lines;
    while (merged = collapsedSpanAtEnd(line)) {
      line = merged.find(1, true).line
      ;(lines || (lines = [])).push(line);
    }
    return lines
  }

  // Get the line number of the start of the visual line that the
  // given line number is part of.
  function visualLineNo(doc, lineN) {
    var line = getLine(doc, lineN), vis = visualLine(line);
    if (line == vis) { return lineN }
    return lineNo(vis)
  }

  // Get the line number of the start of the next visual line after
  // the given line.
  function visualLineEndNo(doc, lineN) {
    if (lineN > doc.lastLine()) { return lineN }
    var line = getLine(doc, lineN), merged;
    if (!lineIsHidden(doc, line)) { return lineN }
    while (merged = collapsedSpanAtEnd(line))
      { line = merged.find(1, true).line; }
    return lineNo(line) + 1
  }

  // Compute whether a line is hidden. Lines count as hidden when they
  // are part of a visual line that starts with another line, or when
  // they are entirely covered by collapsed, non-widget span.
  function lineIsHidden(doc, line) {
    var sps = sawCollapsedSpans && line.markedSpans;
    if (sps) { for (var sp = (void 0), i = 0; i < sps.length; ++i) {
      sp = sps[i];
      if (!sp.marker.collapsed) { continue }
      if (sp.from == null) { return true }
      if (sp.marker.widgetNode) { continue }
      if (sp.from == 0 && sp.marker.inclusiveLeft && lineIsHiddenInner(doc, line, sp))
        { return true }
    } }
  }
  function lineIsHiddenInner(doc, line, span) {
    if (span.to == null) {
      var end = span.marker.find(1, true);
      return lineIsHiddenInner(doc, end.line, getMarkedSpanFor(end.line.markedSpans, span.marker))
    }
    if (span.marker.inclusiveRight && span.to == line.text.length)
      { return true }
    for (var sp = (void 0), i = 0; i < line.markedSpans.length; ++i) {
      sp = line.markedSpans[i];
      if (sp.marker.collapsed && !sp.marker.widgetNode && sp.from == span.to &&
          (sp.to == null || sp.to != span.from) &&
          (sp.marker.inclusiveLeft || span.marker.inclusiveRight) &&
          lineIsHiddenInner(doc, line, sp)) { return true }
    }
  }

  // Find the height above the given line.
  function heightAtLine(lineObj) {
    lineObj = visualLine(lineObj);

    var h = 0, chunk = lineObj.parent;
    for (var i = 0; i < chunk.lines.length; ++i) {
      var line = chunk.lines[i];
      if (line == lineObj) { break }
      else { h += line.height; }
    }
    for (var p = chunk.parent; p; chunk = p, p = chunk.parent) {
      for (var i$1 = 0; i$1 < p.children.length; ++i$1) {
        var cur = p.children[i$1];
        if (cur == chunk) { break }
        else { h += cur.height; }
      }
    }
    return h
  }

  // Compute the character length of a line, taking into account
  // collapsed ranges (see markText) that might hide parts, and join
  // other lines onto it.
  function lineLength(line) {
    if (line.height == 0) { return 0 }
    var len = line.text.length, merged, cur = line;
    while (merged = collapsedSpanAtStart(cur)) {
      var found = merged.find(0, true);
      cur = found.from.line;
      len += found.from.ch - found.to.ch;
    }
    cur = line;
    while (merged = collapsedSpanAtEnd(cur)) {
      var found$1 = merged.find(0, true);
      len -= cur.text.length - found$1.from.ch;
      cur = found$1.to.line;
      len += cur.text.length - found$1.to.ch;
    }
    return len
  }

  // Find the longest line in the document.
  function findMaxLine(cm) {
    var d = cm.display, doc = cm.doc;
    d.maxLine = getLine(doc, doc.first);
    d.maxLineLength = lineLength(d.maxLine);
    d.maxLineChanged = true;
    doc.iter(function (line) {
      var len = lineLength(line);
      if (len > d.maxLineLength) {
        d.maxLineLength = len;
        d.maxLine = line;
      }
    });
  }

  // LINE DATA STRUCTURE

  // Line objects. These hold state related to a line, including
  // highlighting info (the styles array).
  var Line = function(text, markedSpans, estimateHeight) {
    this.text = text;
    attachMarkedSpans(this, markedSpans);
    this.height = estimateHeight ? estimateHeight(this) : 1;
  };

  Line.prototype.lineNo = function () { return lineNo(this) };
  eventMixin(Line);

  // Change the content (text, markers) of a line. Automatically
  // invalidates cached information and tries to re-estimate the
  // line's height.
  function updateLine(line, text, markedSpans, estimateHeight) {
    line.text = text;
    if (line.stateAfter) { line.stateAfter = null; }
    if (line.styles) { line.styles = null; }
    if (line.order != null) { line.order = null; }
    detachMarkedSpans(line);
    attachMarkedSpans(line, markedSpans);
    var estHeight = estimateHeight ? estimateHeight(line) : 1;
    if (estHeight != line.height) { updateLineHeight(line, estHeight); }
  }

  // Detach a line from the document tree and its markers.
  function cleanUpLine(line) {
    line.parent = null;
    detachMarkedSpans(line);
  }

  // Convert a style as returned by a mode (either null, or a string
  // containing one or more styles) to a CSS style. This is cached,
  // and also looks for line-wide styles.
  var styleToClassCache = {}, styleToClassCacheWithMode = {};
  function interpretTokenStyle(style, options) {
    if (!style || /^\s*$/.test(style)) { return null }
    var cache = options.addModeClass ? styleToClassCacheWithMode : styleToClassCache;
    return cache[style] ||
      (cache[style] = style.replace(/\S+/g, "cm-$&"))
  }

  // Render the DOM representation of the text of a line. Also builds
  // up a 'line map', which points at the DOM nodes that represent
  // specific stretches of text, and is used by the measuring code.
  // The returned object contains the DOM node, this map, and
  // information about line-wide styles that were set by the mode.
  function buildLineContent(cm, lineView) {
    // The padding-right forces the element to have a 'border', which
    // is needed on Webkit to be able to get line-level bounding
    // rectangles for it (in measureChar).
    var content = eltP("span", null, null, webkit ? "padding-right: .1px" : null);
    var builder = {pre: eltP("pre", [content], "CodeMirror-line"), content: content,
                   col: 0, pos: 0, cm: cm,
                   trailingSpace: false,
                   splitSpaces: cm.getOption("lineWrapping")};
    lineView.measure = {};

    // Iterate over the logical lines that make up this visual line.
    for (var i = 0; i <= (lineView.rest ? lineView.rest.length : 0); i++) {
      var line = i ? lineView.rest[i - 1] : lineView.line, order = (void 0);
      builder.pos = 0;
      builder.addToken = buildToken;
      // Optionally wire in some hacks into the token-rendering
      // algorithm, to deal with browser quirks.
      if (hasBadBidiRects(cm.display.measure) && (order = getOrder(line, cm.doc.direction)))
        { builder.addToken = buildTokenBadBidi(builder.addToken, order); }
      builder.map = [];
      var allowFrontierUpdate = lineView != cm.display.externalMeasured && lineNo(line);
      insertLineContent(line, builder, getLineStyles(cm, line, allowFrontierUpdate));
      if (line.styleClasses) {
        if (line.styleClasses.bgClass)
          { builder.bgClass = joinClasses(line.styleClasses.bgClass, builder.bgClass || ""); }
        if (line.styleClasses.textClass)
          { builder.textClass = joinClasses(line.styleClasses.textClass, builder.textClass || ""); }
      }

      // Ensure at least a single node is present, for measuring.
      if (builder.map.length == 0)
        { builder.map.push(0, 0, builder.content.appendChild(zeroWidthElement(cm.display.measure))); }

      // Store the map and a cache object for the current logical line
      if (i == 0) {
        lineView.measure.map = builder.map;
        lineView.measure.cache = {};
      } else {
  (lineView.measure.maps || (lineView.measure.maps = [])).push(builder.map)
        ;(lineView.measure.caches || (lineView.measure.caches = [])).push({});
      }
    }

    // See issue #2901
    if (webkit) {
      var last = builder.content.lastChild;
      if (/\bcm-tab\b/.test(last.className) || (last.querySelector && last.querySelector(".cm-tab")))
        { builder.content.className = "cm-tab-wrap-hack"; }
    }

    signal(cm, "renderLine", cm, lineView.line, builder.pre);
    if (builder.pre.className)
      { builder.textClass = joinClasses(builder.pre.className, builder.textClass || ""); }

    return builder
  }

  function defaultSpecialCharPlaceholder(ch) {
    var token = elt("span", "\u2022", "cm-invalidchar");
    token.title = "\\u" + ch.charCodeAt(0).toString(16);
    token.setAttribute("aria-label", token.title);
    return token
  }

  // Build up the DOM representation for a single token, and add it to
  // the line map. Takes care to render special characters separately.
  function buildToken(builder, text, style, startStyle, endStyle, css, attributes) {
    if (!text) { return }
    var displayText = builder.splitSpaces ? splitSpaces(text, builder.trailingSpace) : text;
    var special = builder.cm.state.specialChars, mustWrap = false;
    var content;
    if (!special.test(text)) {
      builder.col += text.length;
      content = document.createTextNode(displayText);
      builder.map.push(builder.pos, builder.pos + text.length, content);
      if (ie && ie_version < 9) { mustWrap = true; }
      builder.pos += text.length;
    } else {
      content = document.createDocumentFragment();
      var pos = 0;
      while (true) {
        special.lastIndex = pos;
        var m = special.exec(text);
        var skipped = m ? m.index - pos : text.length - pos;
        if (skipped) {
          var txt = document.createTextNode(displayText.slice(pos, pos + skipped));
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt])); }
          else { content.appendChild(txt); }
          builder.map.push(builder.pos, builder.pos + skipped, txt);
          builder.col += skipped;
          builder.pos += skipped;
        }
        if (!m) { break }
        pos += skipped + 1;
        var txt$1 = (void 0);
        if (m[0] == "\t") {
          var tabSize = builder.cm.options.tabSize, tabWidth = tabSize - builder.col % tabSize;
          txt$1 = content.appendChild(elt("span", spaceStr(tabWidth), "cm-tab"));
          txt$1.setAttribute("role", "presentation");
          txt$1.setAttribute("cm-text", "\t");
          builder.col += tabWidth;
        } else if (m[0] == "\r" || m[0] == "\n") {
          txt$1 = content.appendChild(elt("span", m[0] == "\r" ? "\u240d" : "\u2424", "cm-invalidchar"));
          txt$1.setAttribute("cm-text", m[0]);
          builder.col += 1;
        } else {
          txt$1 = builder.cm.options.specialCharPlaceholder(m[0]);
          txt$1.setAttribute("cm-text", m[0]);
          if (ie && ie_version < 9) { content.appendChild(elt("span", [txt$1])); }
          else { content.appendChild(txt$1); }
          builder.col += 1;
        }
        builder.map.push(builder.pos, builder.pos + 1, txt$1);
        builder.pos++;
      }
    }
    builder.trailingSpace = displayText.charCodeAt(text.length - 1) == 32;
    if (style || startStyle || endStyle || mustWrap || css) {
      var fullStyle = style || "";
      if (startStyle) { fullStyle += startStyle; }
      if (endStyle) { fullStyle += endStyle; }
      var token = elt("span", [content], fullStyle, css);
      if (attributes) {
        for (var attr in attributes) { if (attributes.hasOwnProperty(attr) && attr != "style" && attr != "class")
          { token.setAttribute(attr, attributes[attr]); } }
      }
      return builder.content.appendChild(token)
    }
    builder.content.appendChild(content);
  }

  // Change some spaces to NBSP to prevent the browser from collapsing
  // trailing spaces at the end of a line when rendering text (issue #1362).
  function splitSpaces(text, trailingBefore) {
    if (text.length > 1 && !/  /.test(text)) { return text }
    var spaceBefore = trailingBefore, result = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      if (ch == " " && spaceBefore && (i == text.length - 1 || text.charCodeAt(i + 1) == 32))
        { ch = "\u00a0"; }
      result += ch;
      spaceBefore = ch == " ";
    }
    return result
  }

  // Work around nonsense dimensions being reported for stretches of
  // right-to-left text.
  function buildTokenBadBidi(inner, order) {
    return function (builder, text, style, startStyle, endStyle, css, attributes) {
      style = style ? style + " cm-force-border" : "cm-force-border";
      var start = builder.pos, end = start + text.length;
      for (;;) {
        // Find the part that overlaps with the start of this text
        var part = (void 0);
        for (var i = 0; i < order.length; i++) {
          part = order[i];
          if (part.to > start && part.from <= start) { break }
        }
        if (part.to >= end) { return inner(builder, text, style, startStyle, endStyle, css, attributes) }
        inner(builder, text.slice(0, part.to - start), style, startStyle, null, css, attributes);
        startStyle = null;
        text = text.slice(part.to - start);
        start = part.to;
      }
    }
  }

  function buildCollapsedSpan(builder, size, marker, ignoreWidget) {
    var widget = !ignoreWidget && marker.widgetNode;
    if (widget) { builder.map.push(builder.pos, builder.pos + size, widget); }
    if (!ignoreWidget && builder.cm.display.input.needsContentAttribute) {
      if (!widget)
        { widget = builder.content.appendChild(document.createElement("span")); }
      widget.setAttribute("cm-marker", marker.id);
    }
    if (widget) {
      builder.cm.display.input.setUneditable(widget);
      builder.content.appendChild(widget);
    }
    builder.pos += size;
    builder.trailingSpace = false;
  }

  // Outputs a number of spans to make up a line, taking highlighting
  // and marked text into account.
  function insertLineContent(line, builder, styles) {
    var spans = line.markedSpans, allText = line.text, at = 0;
    if (!spans) {
      for (var i$1 = 1; i$1 < styles.length; i$1+=2)
        { builder.addToken(builder, allText.slice(at, at = styles[i$1]), interpretTokenStyle(styles[i$1+1], builder.cm.options)); }
      return
    }

    var len = allText.length, pos = 0, i = 1, text = "", style, css;
    var nextChange = 0, spanStyle, spanEndStyle, spanStartStyle, collapsed, attributes;
    for (;;) {
      if (nextChange == pos) { // Update current marker set
        spanStyle = spanEndStyle = spanStartStyle = css = "";
        attributes = null;
        collapsed = null; nextChange = Infinity;
        var foundBookmarks = [], endStyles = (void 0);
        for (var j = 0; j < spans.length; ++j) {
          var sp = spans[j], m = sp.marker;
          if (m.type == "bookmark" && sp.from == pos && m.widgetNode) {
            foundBookmarks.push(m);
          } else if (sp.from <= pos && (sp.to == null || sp.to > pos || m.collapsed && sp.to == pos && sp.from == pos)) {
            if (sp.to != null && sp.to != pos && nextChange > sp.to) {
              nextChange = sp.to;
              spanEndStyle = "";
            }
            if (m.className) { spanStyle += " " + m.className; }
            if (m.css) { css = (css ? css + ";" : "") + m.css; }
            if (m.startStyle && sp.from == pos) { spanStartStyle += " " + m.startStyle; }
            if (m.endStyle && sp.to == nextChange) { (endStyles || (endStyles = [])).push(m.endStyle, sp.to); }
            // support for the old title property
            // https://github.com/codemirror/CodeMirror/pull/5673
            if (m.title) { (attributes || (attributes = {})).title = m.title; }
            if (m.attributes) {
              for (var attr in m.attributes)
                { (attributes || (attributes = {}))[attr] = m.attributes[attr]; }
            }
            if (m.collapsed && (!collapsed || compareCollapsedMarkers(collapsed.marker, m) < 0))
              { collapsed = sp; }
          } else if (sp.from > pos && nextChange > sp.from) {
            nextChange = sp.from;
          }
        }
        if (endStyles) { for (var j$1 = 0; j$1 < endStyles.length; j$1 += 2)
          { if (endStyles[j$1 + 1] == nextChange) { spanEndStyle += " " + endStyles[j$1]; } } }

        if (!collapsed || collapsed.from == pos) { for (var j$2 = 0; j$2 < foundBookmarks.length; ++j$2)
          { buildCollapsedSpan(builder, 0, foundBookmarks[j$2]); } }
        if (collapsed && (collapsed.from || 0) == pos) {
          buildCollapsedSpan(builder, (collapsed.to == null ? len + 1 : collapsed.to) - pos,
                             collapsed.marker, collapsed.from == null);
          if (collapsed.to == null) { return }
          if (collapsed.to == pos) { collapsed = false; }
        }
      }
      if (pos >= len) { break }

      var upto = Math.min(len, nextChange);
      while (true) {
        if (text) {
          var end = pos + text.length;
          if (!collapsed) {
            var tokenText = end > upto ? text.slice(0, upto - pos) : text;
            builder.addToken(builder, tokenText, style ? style + spanStyle : spanStyle,
                             spanStartStyle, pos + tokenText.length == nextChange ? spanEndStyle : "", css, attributes);
          }
          if (end >= upto) {text = text.slice(upto - pos); pos = upto; break}
          pos = end;
          spanStartStyle = "";
        }
        text = allText.slice(at, at = styles[i++]);
        style = interpretTokenStyle(styles[i++], builder.cm.options);
      }
    }
  }


  // These objects are used to represent the visible (currently drawn)
  // part of the document. A LineView may correspond to multiple
  // logical lines, if those are connected by collapsed ranges.
  function LineView(doc, line, lineN) {
    // The starting line
    this.line = line;
    // Continuing lines, if any
    this.rest = visualLineContinued(line);
    // Number of logical lines in this visual line
    this.size = this.rest ? lineNo(lst(this.rest)) - lineN + 1 : 1;
    this.node = this.text = null;
    this.hidden = lineIsHidden(doc, line);
  }

  // Create a range of LineView objects for the given lines.
  function buildViewArray(cm, from, to) {
    var array = [], nextPos;
    for (var pos = from; pos < to; pos = nextPos) {
      var view = new LineView(cm.doc, getLine(cm.doc, pos), pos);
      nextPos = pos + view.size;
      array.push(view);
    }
    return array
  }

  var operationGroup = null;

  function pushOperation(op) {
    if (operationGroup) {
      operationGroup.ops.push(op);
    } else {
      op.ownsGroup = operationGroup = {
        ops: [op],
        delayedCallbacks: []
      };
    }
  }

  function fireCallbacksForOps(group) {
    // Calls delayed callbacks and cursorActivity handlers until no
    // new ones appear
    var callbacks = group.delayedCallbacks, i = 0;
    do {
      for (; i < callbacks.length; i++)
        { callbacks[i].call(null); }
      for (var j = 0; j < group.ops.length; j++) {
        var op = group.ops[j];
        if (op.cursorActivityHandlers)
          { while (op.cursorActivityCalled < op.cursorActivityHandlers.length)
            { op.cursorActivityHandlers[op.cursorActivityCalled++].call(null, op.cm); } }
      }
    } while (i < callbacks.length)
  }

  function finishOperation(op, endCb) {
    var group = op.ownsGroup;
    if (!group) { return }

    try { fireCallbacksForOps(group); }
    finally {
      operationGroup = null;
      endCb(group);
    }
  }

  var orphanDelayedCallbacks = null;

  // Often, we want to signal events at a point where we are in the
  // middle of some work, but don't want the handler to start calling
  // other methods on the editor, which might be in an inconsistent
  // state or simply not expect any other events to happen.
  // signalLater looks whether there are any handlers, and schedules
  // them to be executed when the last operation ends, or, if no
  // operation is active, when a timeout fires.
  function signalLater(emitter, type /*, values...*/) {
    var arr = getHandlers(emitter, type);
    if (!arr.length) { return }
    var args = Array.prototype.slice.call(arguments, 2), list;
    if (operationGroup) {
      list = operationGroup.delayedCallbacks;
    } else if (orphanDelayedCallbacks) {
      list = orphanDelayedCallbacks;
    } else {
      list = orphanDelayedCallbacks = [];
      setTimeout(fireOrphanDelayed, 0);
    }
    var loop = function ( i ) {
      list.push(function () { return arr[i].apply(null, args); });
    };

    for (var i = 0; i < arr.length; ++i)
      loop( i );
  }

  function fireOrphanDelayed() {
    var delayed = orphanDelayedCallbacks;
    orphanDelayedCallbacks = null;
    for (var i = 0; i < delayed.length; ++i) { delayed[i](); }
  }

  // When an aspect of a line changes, a string is added to
  // lineView.changes. This updates the relevant part of the line's
  // DOM structure.
  function updateLineForChanges(cm, lineView, lineN, dims) {
    for (var j = 0; j < lineView.changes.length; j++) {
      var type = lineView.changes[j];
      if (type == "text") { updateLineText(cm, lineView); }
      else if (type == "gutter") { updateLineGutter(cm, lineView, lineN, dims); }
      else if (type == "class") { updateLineClasses(cm, lineView); }
      else if (type == "widget") { updateLineWidgets(cm, lineView, dims); }
    }
    lineView.changes = null;
  }

  // Lines with gutter elements, widgets or a background class need to
  // be wrapped, and have the extra elements added to the wrapper div
  function ensureLineWrapped(lineView) {
    if (lineView.node == lineView.text) {
      lineView.node = elt("div", null, null, "position: relative");
      if (lineView.text.parentNode)
        { lineView.text.parentNode.replaceChild(lineView.node, lineView.text); }
      lineView.node.appendChild(lineView.text);
      if (ie && ie_version < 8) { lineView.node.style.zIndex = 2; }
    }
    return lineView.node
  }

  function updateLineBackground(cm, lineView) {
    var cls = lineView.bgClass ? lineView.bgClass + " " + (lineView.line.bgClass || "") : lineView.line.bgClass;
    if (cls) { cls += " CodeMirror-linebackground"; }
    if (lineView.background) {
      if (cls) { lineView.background.className = cls; }
      else { lineView.background.parentNode.removeChild(lineView.background); lineView.background = null; }
    } else if (cls) {
      var wrap = ensureLineWrapped(lineView);
      lineView.background = wrap.insertBefore(elt("div", null, cls), wrap.firstChild);
      cm.display.input.setUneditable(lineView.background);
    }
  }

  // Wrapper around buildLineContent which will reuse the structure
  // in display.externalMeasured when possible.
  function getLineContent(cm, lineView) {
    var ext = cm.display.externalMeasured;
    if (ext && ext.line == lineView.line) {
      cm.display.externalMeasured = null;
      lineView.measure = ext.measure;
      return ext.built
    }
    return buildLineContent(cm, lineView)
  }

  // Redraw the line's text. Interacts with the background and text
  // classes because the mode may output tokens that influence these
  // classes.
  function updateLineText(cm, lineView) {
    var cls = lineView.text.className;
    var built = getLineContent(cm, lineView);
    if (lineView.text == lineView.node) { lineView.node = built.pre; }
    lineView.text.parentNode.replaceChild(built.pre, lineView.text);
    lineView.text = built.pre;
    if (built.bgClass != lineView.bgClass || built.textClass != lineView.textClass) {
      lineView.bgClass = built.bgClass;
      lineView.textClass = built.textClass;
      updateLineClasses(cm, lineView);
    } else if (cls) {
      lineView.text.className = cls;
    }
  }

  function updateLineClasses(cm, lineView) {
    updateLineBackground(cm, lineView);
    if (lineView.line.wrapClass)
      { ensureLineWrapped(lineView).className = lineView.line.wrapClass; }
    else if (lineView.node != lineView.text)
      { lineView.node.className = ""; }
    var textClass = lineView.textClass ? lineView.textClass + " " + (lineView.line.textClass || "") : lineView.line.textClass;
    lineView.text.className = textClass || "";
  }

  function updateLineGutter(cm, lineView, lineN, dims) {
    if (lineView.gutter) {
      lineView.node.removeChild(lineView.gutter);
      lineView.gutter = null;
    }
    if (lineView.gutterBackground) {
      lineView.node.removeChild(lineView.gutterBackground);
      lineView.gutterBackground = null;
    }
    if (lineView.line.gutterClass) {
      var wrap = ensureLineWrapped(lineView);
      lineView.gutterBackground = elt("div", null, "CodeMirror-gutter-background " + lineView.line.gutterClass,
                                      ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px; width: " + (dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(lineView.gutterBackground);
      wrap.insertBefore(lineView.gutterBackground, lineView.text);
    }
    var markers = lineView.line.gutterMarkers;
    if (cm.options.lineNumbers || markers) {
      var wrap$1 = ensureLineWrapped(lineView);
      var gutterWrap = lineView.gutter = elt("div", null, "CodeMirror-gutter-wrapper", ("left: " + (cm.options.fixedGutter ? dims.fixedPos : -dims.gutterTotalWidth) + "px"));
      cm.display.input.setUneditable(gutterWrap);
      wrap$1.insertBefore(gutterWrap, lineView.text);
      if (lineView.line.gutterClass)
        { gutterWrap.className += " " + lineView.line.gutterClass; }
      if (cm.options.lineNumbers && (!markers || !markers["CodeMirror-linenumbers"]))
        { lineView.lineNumber = gutterWrap.appendChild(
          elt("div", lineNumberFor(cm.options, lineN),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              ("left: " + (dims.gutterLeft["CodeMirror-linenumbers"]) + "px; width: " + (cm.display.lineNumInnerWidth) + "px"))); }
      if (markers) { for (var k = 0; k < cm.display.gutterSpecs.length; ++k) {
        var id = cm.display.gutterSpecs[k].className, found = markers.hasOwnProperty(id) && markers[id];
        if (found)
          { gutterWrap.appendChild(elt("div", [found], "CodeMirror-gutter-elt",
                                     ("left: " + (dims.gutterLeft[id]) + "px; width: " + (dims.gutterWidth[id]) + "px"))); }
      } }
    }
  }

  function updateLineWidgets(cm, lineView, dims) {
    if (lineView.alignable) { lineView.alignable = null; }
    var isWidget = classTest("CodeMirror-linewidget");
    for (var node = lineView.node.firstChild, next = (void 0); node; node = next) {
      next = node.nextSibling;
      if (isWidget.test(node.className)) { lineView.node.removeChild(node); }
    }
    insertLineWidgets(cm, lineView, dims);
  }

  // Build a line's DOM representation from scratch
  function buildLineElement(cm, lineView, lineN, dims) {
    var built = getLineContent(cm, lineView);
    lineView.text = lineView.node = built.pre;
    if (built.bgClass) { lineView.bgClass = built.bgClass; }
    if (built.textClass) { lineView.textClass = built.textClass; }

    updateLineClasses(cm, lineView);
    updateLineGutter(cm, lineView, lineN, dims);
    insertLineWidgets(cm, lineView, dims);
    return lineView.node
  }

  // A lineView may contain multiple logical lines (when merged by
  // collapsed spans). The widgets for all of them need to be drawn.
  function insertLineWidgets(cm, lineView, dims) {
    insertLineWidgetsFor(cm, lineView.line, lineView, dims, true);
    if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
      { insertLineWidgetsFor(cm, lineView.rest[i], lineView, dims, false); } }
  }

  function insertLineWidgetsFor(cm, line, lineView, dims, allowAbove) {
    if (!line.widgets) { return }
    var wrap = ensureLineWrapped(lineView);
    for (var i = 0, ws = line.widgets; i < ws.length; ++i) {
      var widget = ws[i], node = elt("div", [widget.node], "CodeMirror-linewidget" + (widget.className ? " " + widget.className : ""));
      if (!widget.handleMouseEvents) { node.setAttribute("cm-ignore-events", "true"); }
      positionLineWidget(widget, node, lineView, dims);
      cm.display.input.setUneditable(node);
      if (allowAbove && widget.above)
        { wrap.insertBefore(node, lineView.gutter || lineView.text); }
      else
        { wrap.appendChild(node); }
      signalLater(widget, "redraw");
    }
  }

  function positionLineWidget(widget, node, lineView, dims) {
    if (widget.noHScroll) {
  (lineView.alignable || (lineView.alignable = [])).push(node);
      var width = dims.wrapperWidth;
      node.style.left = dims.fixedPos + "px";
      if (!widget.coverGutter) {
        width -= dims.gutterTotalWidth;
        node.style.paddingLeft = dims.gutterTotalWidth + "px";
      }
      node.style.width = width + "px";
    }
    if (widget.coverGutter) {
      node.style.zIndex = 5;
      node.style.position = "relative";
      if (!widget.noHScroll) { node.style.marginLeft = -dims.gutterTotalWidth + "px"; }
    }
  }

  function widgetHeight(widget) {
    if (widget.height != null) { return widget.height }
    var cm = widget.doc.cm;
    if (!cm) { return 0 }
    if (!contains(document.body, widget.node)) {
      var parentStyle = "position: relative;";
      if (widget.coverGutter)
        { parentStyle += "margin-left: -" + cm.display.gutters.offsetWidth + "px;"; }
      if (widget.noHScroll)
        { parentStyle += "width: " + cm.display.wrapper.clientWidth + "px;"; }
      removeChildrenAndAdd(cm.display.measure, elt("div", [widget.node], null, parentStyle));
    }
    return widget.height = widget.node.parentNode.offsetHeight
  }

  // Return true when the given mouse event happened in a widget
  function eventInWidget(display, e) {
    for (var n = e_target(e); n != display.wrapper; n = n.parentNode) {
      if (!n || (n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true") ||
          (n.parentNode == display.sizer && n != display.mover))
        { return true }
    }
  }

  // POSITION MEASUREMENT

  function paddingTop(display) {return display.lineSpace.offsetTop}
  function paddingVert(display) {return display.mover.offsetHeight - display.lineSpace.offsetHeight}
  function paddingH(display) {
    if (display.cachedPaddingH) { return display.cachedPaddingH }
    var e = removeChildrenAndAdd(display.measure, elt("pre", "x", "CodeMirror-line-like"));
    var style = window.getComputedStyle ? window.getComputedStyle(e) : e.currentStyle;
    var data = {left: parseInt(style.paddingLeft), right: parseInt(style.paddingRight)};
    if (!isNaN(data.left) && !isNaN(data.right)) { display.cachedPaddingH = data; }
    return data
  }

  function scrollGap(cm) { return scrollerGap - cm.display.nativeBarWidth }
  function displayWidth(cm) {
    return cm.display.scroller.clientWidth - scrollGap(cm) - cm.display.barWidth
  }
  function displayHeight(cm) {
    return cm.display.scroller.clientHeight - scrollGap(cm) - cm.display.barHeight
  }

  // Ensure the lineView.wrapping.heights array is populated. This is
  // an array of bottom offsets for the lines that make up a drawn
  // line. When lineWrapping is on, there might be more than one
  // height.
  function ensureLineHeights(cm, lineView, rect) {
    var wrapping = cm.options.lineWrapping;
    var curWidth = wrapping && displayWidth(cm);
    if (!lineView.measure.heights || wrapping && lineView.measure.width != curWidth) {
      var heights = lineView.measure.heights = [];
      if (wrapping) {
        lineView.measure.width = curWidth;
        var rects = lineView.text.firstChild.getClientRects();
        for (var i = 0; i < rects.length - 1; i++) {
          var cur = rects[i], next = rects[i + 1];
          if (Math.abs(cur.bottom - next.bottom) > 2)
            { heights.push((cur.bottom + next.top) / 2 - rect.top); }
        }
      }
      heights.push(rect.bottom - rect.top);
    }
  }

  // Find a line map (mapping character offsets to text nodes) and a
  // measurement cache for the given line number. (A line view might
  // contain multiple lines when collapsed ranges are present.)
  function mapFromLineView(lineView, line, lineN) {
    if (lineView.line == line)
      { return {map: lineView.measure.map, cache: lineView.measure.cache} }
    for (var i = 0; i < lineView.rest.length; i++)
      { if (lineView.rest[i] == line)
        { return {map: lineView.measure.maps[i], cache: lineView.measure.caches[i]} } }
    for (var i$1 = 0; i$1 < lineView.rest.length; i$1++)
      { if (lineNo(lineView.rest[i$1]) > lineN)
        { return {map: lineView.measure.maps[i$1], cache: lineView.measure.caches[i$1], before: true} } }
  }

  // Render a line into the hidden node display.externalMeasured. Used
  // when measurement is needed for a line that's not in the viewport.
  function updateExternalMeasurement(cm, line) {
    line = visualLine(line);
    var lineN = lineNo(line);
    var view = cm.display.externalMeasured = new LineView(cm.doc, line, lineN);
    view.lineN = lineN;
    var built = view.built = buildLineContent(cm, view);
    view.text = built.pre;
    removeChildrenAndAdd(cm.display.lineMeasure, built.pre);
    return view
  }

  // Get a {top, bottom, left, right} box (in line-local coordinates)
  // for a given character.
  function measureChar(cm, line, ch, bias) {
    return measureCharPrepared(cm, prepareMeasureForLine(cm, line), ch, bias)
  }

  // Find a line view that corresponds to the given line number.
  function findViewForLine(cm, lineN) {
    if (lineN >= cm.display.viewFrom && lineN < cm.display.viewTo)
      { return cm.display.view[findViewIndex(cm, lineN)] }
    var ext = cm.display.externalMeasured;
    if (ext && lineN >= ext.lineN && lineN < ext.lineN + ext.size)
      { return ext }
  }

  // Measurement can be split in two steps, the set-up work that
  // applies to the whole line, and the measurement of the actual
  // character. Functions like coordsChar, that need to do a lot of
  // measurements in a row, can thus ensure that the set-up work is
  // only done once.
  function prepareMeasureForLine(cm, line) {
    var lineN = lineNo(line);
    var view = findViewForLine(cm, lineN);
    if (view && !view.text) {
      view = null;
    } else if (view && view.changes) {
      updateLineForChanges(cm, view, lineN, getDimensions(cm));
      cm.curOp.forceUpdate = true;
    }
    if (!view)
      { view = updateExternalMeasurement(cm, line); }

    var info = mapFromLineView(view, line, lineN);
    return {
      line: line, view: view, rect: null,
      map: info.map, cache: info.cache, before: info.before,
      hasHeights: false
    }
  }

  // Given a prepared measurement object, measures the position of an
  // actual character (or fetches it from the cache).
  function measureCharPrepared(cm, prepared, ch, bias, varHeight) {
    if (prepared.before) { ch = -1; }
    var key = ch + (bias || ""), found;
    if (prepared.cache.hasOwnProperty(key)) {
      found = prepared.cache[key];
    } else {
      if (!prepared.rect)
        { prepared.rect = prepared.view.text.getBoundingClientRect(); }
      if (!prepared.hasHeights) {
        ensureLineHeights(cm, prepared.view, prepared.rect);
        prepared.hasHeights = true;
      }
      found = measureCharInner(cm, prepared, ch, bias);
      if (!found.bogus) { prepared.cache[key] = found; }
    }
    return {left: found.left, right: found.right,
            top: varHeight ? found.rtop : found.top,
            bottom: varHeight ? found.rbottom : found.bottom}
  }

  var nullRect = {left: 0, right: 0, top: 0, bottom: 0};

  function nodeAndOffsetInLineMap(map, ch, bias) {
    var node, start, end, collapse, mStart, mEnd;
    // First, search the line map for the text node corresponding to,
    // or closest to, the target character.
    for (var i = 0; i < map.length; i += 3) {
      mStart = map[i];
      mEnd = map[i + 1];
      if (ch < mStart) {
        start = 0; end = 1;
        collapse = "left";
      } else if (ch < mEnd) {
        start = ch - mStart;
        end = start + 1;
      } else if (i == map.length - 3 || ch == mEnd && map[i + 3] > ch) {
        end = mEnd - mStart;
        start = end - 1;
        if (ch >= mEnd) { collapse = "right"; }
      }
      if (start != null) {
        node = map[i + 2];
        if (mStart == mEnd && bias == (node.insertLeft ? "left" : "right"))
          { collapse = bias; }
        if (bias == "left" && start == 0)
          { while (i && map[i - 2] == map[i - 3] && map[i - 1].insertLeft) {
            node = map[(i -= 3) + 2];
            collapse = "left";
          } }
        if (bias == "right" && start == mEnd - mStart)
          { while (i < map.length - 3 && map[i + 3] == map[i + 4] && !map[i + 5].insertLeft) {
            node = map[(i += 3) + 2];
            collapse = "right";
          } }
        break
      }
    }
    return {node: node, start: start, end: end, collapse: collapse, coverStart: mStart, coverEnd: mEnd}
  }

  function getUsefulRect(rects, bias) {
    var rect = nullRect;
    if (bias == "left") { for (var i = 0; i < rects.length; i++) {
      if ((rect = rects[i]).left != rect.right) { break }
    } } else { for (var i$1 = rects.length - 1; i$1 >= 0; i$1--) {
      if ((rect = rects[i$1]).left != rect.right) { break }
    } }
    return rect
  }

  function measureCharInner(cm, prepared, ch, bias) {
    var place = nodeAndOffsetInLineMap(prepared.map, ch, bias);
    var node = place.node, start = place.start, end = place.end, collapse = place.collapse;

    var rect;
    if (node.nodeType == 3) { // If it is a text node, use a range to retrieve the coordinates.
      for (var i$1 = 0; i$1 < 4; i$1++) { // Retry a maximum of 4 times when nonsense rectangles are returned
        while (start && isExtendingChar(prepared.line.text.charAt(place.coverStart + start))) { --start; }
        while (place.coverStart + end < place.coverEnd && isExtendingChar(prepared.line.text.charAt(place.coverStart + end))) { ++end; }
        if (ie && ie_version < 9 && start == 0 && end == place.coverEnd - place.coverStart)
          { rect = node.parentNode.getBoundingClientRect(); }
        else
          { rect = getUsefulRect(range(node, start, end).getClientRects(), bias); }
        if (rect.left || rect.right || start == 0) { break }
        end = start;
        start = start - 1;
        collapse = "right";
      }
      if (ie && ie_version < 11) { rect = maybeUpdateRectForZooming(cm.display.measure, rect); }
    } else { // If it is a widget, simply get the box for the whole widget.
      if (start > 0) { collapse = bias = "right"; }
      var rects;
      if (cm.options.lineWrapping && (rects = node.getClientRects()).length > 1)
        { rect = rects[bias == "right" ? rects.length - 1 : 0]; }
      else
        { rect = node.getBoundingClientRect(); }
    }
    if (ie && ie_version < 9 && !start && (!rect || !rect.left && !rect.right)) {
      var rSpan = node.parentNode.getClientRects()[0];
      if (rSpan)
        { rect = {left: rSpan.left, right: rSpan.left + charWidth(cm.display), top: rSpan.top, bottom: rSpan.bottom}; }
      else
        { rect = nullRect; }
    }

    var rtop = rect.top - prepared.rect.top, rbot = rect.bottom - prepared.rect.top;
    var mid = (rtop + rbot) / 2;
    var heights = prepared.view.measure.heights;
    var i = 0;
    for (; i < heights.length - 1; i++)
      { if (mid < heights[i]) { break } }
    var top = i ? heights[i - 1] : 0, bot = heights[i];
    var result = {left: (collapse == "right" ? rect.right : rect.left) - prepared.rect.left,
                  right: (collapse == "left" ? rect.left : rect.right) - prepared.rect.left,
                  top: top, bottom: bot};
    if (!rect.left && !rect.right) { result.bogus = true; }
    if (!cm.options.singleCursorHeightPerLine) { result.rtop = rtop; result.rbottom = rbot; }

    return result
  }

  // Work around problem with bounding client rects on ranges being
  // returned incorrectly when zoomed on IE10 and below.
  function maybeUpdateRectForZooming(measure, rect) {
    if (!window.screen || screen.logicalXDPI == null ||
        screen.logicalXDPI == screen.deviceXDPI || !hasBadZoomedRects(measure))
      { return rect }
    var scaleX = screen.logicalXDPI / screen.deviceXDPI;
    var scaleY = screen.logicalYDPI / screen.deviceYDPI;
    return {left: rect.left * scaleX, right: rect.right * scaleX,
            top: rect.top * scaleY, bottom: rect.bottom * scaleY}
  }

  function clearLineMeasurementCacheFor(lineView) {
    if (lineView.measure) {
      lineView.measure.cache = {};
      lineView.measure.heights = null;
      if (lineView.rest) { for (var i = 0; i < lineView.rest.length; i++)
        { lineView.measure.caches[i] = {}; } }
    }
  }

  function clearLineMeasurementCache(cm) {
    cm.display.externalMeasure = null;
    removeChildren(cm.display.lineMeasure);
    for (var i = 0; i < cm.display.view.length; i++)
      { clearLineMeasurementCacheFor(cm.display.view[i]); }
  }

  function clearCaches(cm) {
    clearLineMeasurementCache(cm);
    cm.display.cachedCharWidth = cm.display.cachedTextHeight = cm.display.cachedPaddingH = null;
    if (!cm.options.lineWrapping) { cm.display.maxLineChanged = true; }
    cm.display.lineNumChars = null;
  }

  function pageScrollX() {
    // Work around https://bugs.chromium.org/p/chromium/issues/detail?id=489206
    // which causes page_Offset and bounding client rects to use
    // different reference viewports and invalidate our calculations.
    if (chrome && android) { return -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) }
    return window.pageXOffset || (document.documentElement || document.body).scrollLeft
  }
  function pageScrollY() {
    if (chrome && android) { return -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) }
    return window.pageYOffset || (document.documentElement || document.body).scrollTop
  }

  function widgetTopHeight(lineObj) {
    var height = 0;
    if (lineObj.widgets) { for (var i = 0; i < lineObj.widgets.length; ++i) { if (lineObj.widgets[i].above)
      { height += widgetHeight(lineObj.widgets[i]); } } }
    return height
  }

  // Converts a {top, bottom, left, right} box from line-local
  // coordinates into another coordinate system. Context may be one of
  // "line", "div" (display.lineDiv), "local"./null (editor), "window",
  // or "page".
  function intoCoordSystem(cm, lineObj, rect, context, includeWidgets) {
    if (!includeWidgets) {
      var height = widgetTopHeight(lineObj);
      rect.top += height; rect.bottom += height;
    }
    if (context == "line") { return rect }
    if (!context) { context = "local"; }
    var yOff = heightAtLine(lineObj);
    if (context == "local") { yOff += paddingTop(cm.display); }
    else { yOff -= cm.display.viewOffset; }
    if (context == "page" || context == "window") {
      var lOff = cm.display.lineSpace.getBoundingClientRect();
      yOff += lOff.top + (context == "window" ? 0 : pageScrollY());
      var xOff = lOff.left + (context == "window" ? 0 : pageScrollX());
      rect.left += xOff; rect.right += xOff;
    }
    rect.top += yOff; rect.bottom += yOff;
    return rect
  }

  // Coverts a box from "div" coords to another coordinate system.
  // Context may be "window", "page", "div", or "local"./null.
  function fromCoordSystem(cm, coords, context) {
    if (context == "div") { return coords }
    var left = coords.left, top = coords.top;
    // First move into "page" coordinate system
    if (context == "page") {
      left -= pageScrollX();
      top -= pageScrollY();
    } else if (context == "local" || !context) {
      var localBox = cm.display.sizer.getBoundingClientRect();
      left += localBox.left;
      top += localBox.top;
    }

    var lineSpaceBox = cm.display.lineSpace.getBoundingClientRect();
    return {left: left - lineSpaceBox.left, top: top - lineSpaceBox.top}
  }

  function charCoords(cm, pos, context, lineObj, bias) {
    if (!lineObj) { lineObj = getLine(cm.doc, pos.line); }
    return intoCoordSystem(cm, lineObj, measureChar(cm, lineObj, pos.ch, bias), context)
  }

  // Returns a box for a given cursor position, which may have an
  // 'other' property containing the position of the secondary cursor
  // on a bidi boundary.
  // A cursor Pos(line, char, "before") is on the same visual line as `char - 1`
  // and after `char - 1` in writing order of `char - 1`
  // A cursor Pos(line, char, "after") is on the same visual line as `char`
  // and before `char` in writing order of `char`
  // Examples (upper-case letters are RTL, lower-case are LTR):
  //     Pos(0, 1, ...)
  //     before   after
  // ab     a|b     a|b
  // aB     a|B     aB|
  // Ab     |Ab     A|b
  // AB     B|A     B|A
  // Every position after the last character on a line is considered to stick
  // to the last character on the line.
  function cursorCoords(cm, pos, context, lineObj, preparedMeasure, varHeight) {
    lineObj = lineObj || getLine(cm.doc, pos.line);
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    function get(ch, right) {
      var m = measureCharPrepared(cm, preparedMeasure, ch, right ? "right" : "left", varHeight);
      if (right) { m.left = m.right; } else { m.right = m.left; }
      return intoCoordSystem(cm, lineObj, m, context)
    }
    var order = getOrder(lineObj, cm.doc.direction), ch = pos.ch, sticky = pos.sticky;
    if (ch >= lineObj.text.length) {
      ch = lineObj.text.length;
      sticky = "before";
    } else if (ch <= 0) {
      ch = 0;
      sticky = "after";
    }
    if (!order) { return get(sticky == "before" ? ch - 1 : ch, sticky == "before") }

    function getBidi(ch, partPos, invert) {
      var part = order[partPos], right = part.level == 1;
      return get(invert ? ch - 1 : ch, right != invert)
    }
    var partPos = getBidiPartAt(order, ch, sticky);
    var other = bidiOther;
    var val = getBidi(ch, partPos, sticky == "before");
    if (other != null) { val.other = getBidi(ch, other, sticky != "before"); }
    return val
  }

  // Used to cheaply estimate the coordinates for a position. Used for
  // intermediate scroll updates.
  function estimateCoords(cm, pos) {
    var left = 0;
    pos = clipPos(cm.doc, pos);
    if (!cm.options.lineWrapping) { left = charWidth(cm.display) * pos.ch; }
    var lineObj = getLine(cm.doc, pos.line);
    var top = heightAtLine(lineObj) + paddingTop(cm.display);
    return {left: left, right: left, top: top, bottom: top + lineObj.height}
  }

  // Positions returned by coordsChar contain some extra information.
  // xRel is the relative x position of the input coordinates compared
  // to the found position (so xRel > 0 means the coordinates are to
  // the right of the character position, for example). When outside
  // is true, that means the coordinates lie outside the line's
  // vertical range.
  function PosWithInfo(line, ch, sticky, outside, xRel) {
    var pos = Pos(line, ch, sticky);
    pos.xRel = xRel;
    if (outside) { pos.outside = outside; }
    return pos
  }

  // Compute the character position closest to the given coordinates.
  // Input must be lineSpace-local ("div" coordinate system).
  function coordsChar(cm, x, y) {
    var doc = cm.doc;
    y += cm.display.viewOffset;
    if (y < 0) { return PosWithInfo(doc.first, 0, null, -1, -1) }
    var lineN = lineAtHeight(doc, y), last = doc.first + doc.size - 1;
    if (lineN > last)
      { return PosWithInfo(doc.first + doc.size - 1, getLine(doc, last).text.length, null, 1, 1) }
    if (x < 0) { x = 0; }

    var lineObj = getLine(doc, lineN);
    for (;;) {
      var found = coordsCharInner(cm, lineObj, lineN, x, y);
      var collapsed = collapsedSpanAround(lineObj, found.ch + (found.xRel > 0 || found.outside > 0 ? 1 : 0));
      if (!collapsed) { return found }
      var rangeEnd = collapsed.find(1);
      if (rangeEnd.line == lineN) { return rangeEnd }
      lineObj = getLine(doc, lineN = rangeEnd.line);
    }
  }

  function wrappedLineExtent(cm, lineObj, preparedMeasure, y) {
    y -= widgetTopHeight(lineObj);
    var end = lineObj.text.length;
    var begin = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch - 1).bottom <= y; }, end, 0);
    end = findFirst(function (ch) { return measureCharPrepared(cm, preparedMeasure, ch).top > y; }, begin, end);
    return {begin: begin, end: end}
  }

  function wrappedLineExtentChar(cm, lineObj, preparedMeasure, target) {
    if (!preparedMeasure) { preparedMeasure = prepareMeasureForLine(cm, lineObj); }
    var targetTop = intoCoordSystem(cm, lineObj, measureCharPrepared(cm, preparedMeasure, target), "line").top;
    return wrappedLineExtent(cm, lineObj, preparedMeasure, targetTop)
  }

  // Returns true if the given side of a box is after the given
  // coordinates, in top-to-bottom, left-to-right order.
  function boxIsAfter(box, x, y, left) {
    return box.bottom <= y ? false : box.top > y ? true : (left ? box.left : box.right) > x
  }

  function coordsCharInner(cm, lineObj, lineNo, x, y) {
    // Move y into line-local coordinate space
    y -= heightAtLine(lineObj);
    var preparedMeasure = prepareMeasureForLine(cm, lineObj);
    // When directly calling `measureCharPrepared`, we have to adjust
    // for the widgets at this line.
    var widgetHeight = widgetTopHeight(lineObj);
    var begin = 0, end = lineObj.text.length, ltr = true;

    var order = getOrder(lineObj, cm.doc.direction);
    // If the line isn't plain left-to-right text, first figure out
    // which bidi section the coordinates fall into.
    if (order) {
      var part = (cm.options.lineWrapping ? coordsBidiPartWrapped : coordsBidiPart)
                   (cm, lineObj, lineNo, preparedMeasure, order, x, y);
      ltr = part.level != 1;
      // The awkward -1 offsets are needed because findFirst (called
      // on these below) will treat its first bound as inclusive,
      // second as exclusive, but we want to actually address the
      // characters in the part's range
      begin = ltr ? part.from : part.to - 1;
      end = ltr ? part.to : part.from - 1;
    }

    // A binary search to find the first character whose bounding box
    // starts after the coordinates. If we run across any whose box wrap
    // the coordinates, store that.
    var chAround = null, boxAround = null;
    var ch = findFirst(function (ch) {
      var box = measureCharPrepared(cm, preparedMeasure, ch);
      box.top += widgetHeight; box.bottom += widgetHeight;
      if (!boxIsAfter(box, x, y, false)) { return false }
      if (box.top <= y && box.left <= x) {
        chAround = ch;
        boxAround = box;
      }
      return true
    }, begin, end);

    var baseX, sticky, outside = false;
    // If a box around the coordinates was found, use that
    if (boxAround) {
      // Distinguish coordinates nearer to the left or right side of the box
      var atLeft = x - boxAround.left < boxAround.right - x, atStart = atLeft == ltr;
      ch = chAround + (atStart ? 0 : 1);
      sticky = atStart ? "after" : "before";
      baseX = atLeft ? boxAround.left : boxAround.right;
    } else {
      // (Adjust for extended bound, if necessary.)
      if (!ltr && (ch == end || ch == begin)) { ch++; }
      // To determine which side to associate with, get the box to the
      // left of the character and compare it's vertical position to the
      // coordinates
      sticky = ch == 0 ? "after" : ch == lineObj.text.length ? "before" :
        (measureCharPrepared(cm, preparedMeasure, ch - (ltr ? 1 : 0)).bottom + widgetHeight <= y) == ltr ?
        "after" : "before";
      // Now get accurate coordinates for this place, in order to get a
      // base X position
      var coords = cursorCoords(cm, Pos(lineNo, ch, sticky), "line", lineObj, preparedMeasure);
      baseX = coords.left;
      outside = y < coords.top ? -1 : y >= coords.bottom ? 1 : 0;
    }

    ch = skipExtendingChars(lineObj.text, ch, 1);
    return PosWithInfo(lineNo, ch, sticky, outside, x - baseX)
  }

  function coordsBidiPart(cm, lineObj, lineNo, preparedMeasure, order, x, y) {
    // Bidi parts are sorted left-to-right, and in a non-line-wrapping
    // situation, we can take this ordering to correspond to the visual
    // ordering. This finds the first part whose end is after the given
    // coordinates.
    var index = findFirst(function (i) {
      var part = order[i], ltr = part.level != 1;
      return boxIsAfter(cursorCoords(cm, Pos(lineNo, ltr ? part.to : part.from, ltr ? "before" : "after"),
                                     "line", lineObj, preparedMeasure), x, y, true)
    }, 0, order.length - 1);
    var part = order[index];
    // If this isn't the first part, the part's start is also after
    // the coordinates, and the coordinates aren't on the same line as
    // that start, move one part back.
    if (index > 0) {
      var ltr = part.level != 1;
      var start = cursorCoords(cm, Pos(lineNo, ltr ? part.from : part.to, ltr ? "after" : "before"),
                               "line", lineObj, preparedMeasure);
      if (boxIsAfter(start, x, y, true) && start.top > y)
        { part = order[index - 1]; }
    }
    return part
  }

  function coordsBidiPartWrapped(cm, lineObj, _lineNo, preparedMeasure, order, x, y) {
    // In a wrapped line, rtl text on wrapping boundaries can do things
    // that don't correspond to the ordering in our `order` array at
    // all, so a binary search doesn't work, and we want to return a
    // part that only spans one line so that the binary search in
    // coordsCharInner is safe. As such, we first find the extent of the
    // wrapped line, and then do a flat search in which we discard any
    // spans that aren't on the line.
    var ref = wrappedLineExtent(cm, lineObj, preparedMeasure, y);
    var begin = ref.begin;
    var end = ref.end;
    if (/\s/.test(lineObj.text.charAt(end - 1))) { end--; }
    var part = null, closestDist = null;
    for (var i = 0; i < order.length; i++) {
      var p = order[i];
      if (p.from >= end || p.to <= begin) { continue }
      var ltr = p.level != 1;
      var endX = measureCharPrepared(cm, preparedMeasure, ltr ? Math.min(end, p.to) - 1 : Math.max(begin, p.from)).right;
      // Weigh against spans ending before this, so that they are only
      // picked if nothing ends after
      var dist = endX < x ? x - endX + 1e9 : endX - x;
      if (!part || closestDist > dist) {
        part = p;
        closestDist = dist;
      }
    }
    if (!part) { part = order[order.length - 1]; }
    // Clip the part to the wrapped line.
    if (part.from < begin) { part = {from: begin, to: part.to, level: part.level}; }
    if (part.to > end) { part = {from: part.from, to: end, level: part.level}; }
    return part
  }

  var measureText;
  // Compute the default text height.
  function textHeight(display) {
    if (display.cachedTextHeight != null) { return display.cachedTextHeight }
    if (measureText == null) {
      measureText = elt("pre", null, "CodeMirror-line-like");
      // Measure a bunch of lines, for browsers that compute
      // fractional heights.
      for (var i = 0; i < 49; ++i) {
        measureText.appendChild(document.createTextNode("x"));
        measureText.appendChild(elt("br"));
      }
      measureText.appendChild(document.createTextNode("x"));
    }
    removeChildrenAndAdd(display.measure, measureText);
    var height = measureText.offsetHeight / 50;
    if (height > 3) { display.cachedTextHeight = height; }
    removeChildren(display.measure);
    return height || 1
  }

  // Compute the default character width.
  function charWidth(display) {
    if (display.cachedCharWidth != null) { return display.cachedCharWidth }
    var anchor = elt("span", "xxxxxxxxxx");
    var pre = elt("pre", [anchor], "CodeMirror-line-like");
    removeChildrenAndAdd(display.measure, pre);
    var rect = anchor.getBoundingClientRect(), width = (rect.right - rect.left) / 10;
    if (width > 2) { display.cachedCharWidth = width; }
    return width || 10
  }

  // Do a bulk-read of the DOM positions and sizes needed to draw the
  // view, so that we don't interleave reading and writing to the DOM.
  function getDimensions(cm) {
    var d = cm.display, left = {}, width = {};
    var gutterLeft = d.gutters.clientLeft;
    for (var n = d.gutters.firstChild, i = 0; n; n = n.nextSibling, ++i) {
      var id = cm.display.gutterSpecs[i].className;
      left[id] = n.offsetLeft + n.clientLeft + gutterLeft;
      width[id] = n.clientWidth;
    }
    return {fixedPos: compensateForHScroll(d),
            gutterTotalWidth: d.gutters.offsetWidth,
            gutterLeft: left,
            gutterWidth: width,
            wrapperWidth: d.wrapper.clientWidth}
  }

  // Computes display.scroller.scrollLeft + display.gutters.offsetWidth,
  // but using getBoundingClientRect to get a sub-pixel-accurate
  // result.
  function compensateForHScroll(display) {
    return display.scroller.getBoundingClientRect().left - display.sizer.getBoundingClientRect().left
  }

  // Returns a function that estimates the height of a line, to use as
  // first approximation until the line becomes visible (and is thus
  // properly measurable).
  function estimateHeight(cm) {
    var th = textHeight(cm.display), wrapping = cm.options.lineWrapping;
    var perLine = wrapping && Math.max(5, cm.display.scroller.clientWidth / charWidth(cm.display) - 3);
    return function (line) {
      if (lineIsHidden(cm.doc, line)) { return 0 }

      var widgetsHeight = 0;
      if (line.widgets) { for (var i = 0; i < line.widgets.length; i++) {
        if (line.widgets[i].height) { widgetsHeight += line.widgets[i].height; }
      } }

      if (wrapping)
        { return widgetsHeight + (Math.ceil(line.text.length / perLine) || 1) * th }
      else
        { return widgetsHeight + th }
    }
  }

  function estimateLineHeights(cm) {
    var doc = cm.doc, est = estimateHeight(cm);
    doc.iter(function (line) {
      var estHeight = est(line);
      if (estHeight != line.height) { updateLineHeight(line, estHeight); }
    });
  }

  // Given a mouse event, find the corresponding position. If liberal
  // is false, it checks whether a gutter or scrollbar was clicked,
  // and returns null if it was. forRect is used by rectangular
  // selections, and tries to estimate a character position even for
  // coordinates beyond the right of the text.
  function posFromMouse(cm, e, liberal, forRect) {
    var display = cm.display;
    if (!liberal && e_target(e).getAttribute("cm-not-content") == "true") { return null }

    var x, y, space = display.lineSpace.getBoundingClientRect();
    // Fails unpredictably on IE[67] when mouse is dragged around quickly.
    try { x = e.clientX - space.left; y = e.clientY - space.top; }
    catch (e$1) { return null }
    var coords = coordsChar(cm, x, y), line;
    if (forRect && coords.xRel > 0 && (line = getLine(cm.doc, coords.line).text).length == coords.ch) {
      var colDiff = countColumn(line, line.length, cm.options.tabSize) - line.length;
      coords = Pos(coords.line, Math.max(0, Math.round((x - paddingH(cm.display).left) / charWidth(cm.display)) - colDiff));
    }
    return coords
  }

  // Find the view element corresponding to a given line. Return null
  // when the line isn't visible.
  function findViewIndex(cm, n) {
    if (n >= cm.display.viewTo) { return null }
    n -= cm.display.viewFrom;
    if (n < 0) { return null }
    var view = cm.display.view;
    for (var i = 0; i < view.length; i++) {
      n -= view[i].size;
      if (n < 0) { return i }
    }
  }

  // Updates the display.view data structure for a given change to the
  // document. From and to are in pre-change coordinates. Lendiff is
  // the amount of lines added or subtracted by the change. This is
  // used for changes that span multiple lines, or change the way
  // lines are divided into visual lines. regLineChange (below)
  // registers single-line changes.
  function regChange(cm, from, to, lendiff) {
    if (from == null) { from = cm.doc.first; }
    if (to == null) { to = cm.doc.first + cm.doc.size; }
    if (!lendiff) { lendiff = 0; }

    var display = cm.display;
    if (lendiff && to < display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers > from))
      { display.updateLineNumbers = from; }

    cm.curOp.viewChanged = true;

    if (from >= display.viewTo) { // Change after
      if (sawCollapsedSpans && visualLineNo(cm.doc, from) < display.viewTo)
        { resetView(cm); }
    } else if (to <= display.viewFrom) { // Change before
      if (sawCollapsedSpans && visualLineEndNo(cm.doc, to + lendiff) > display.viewFrom) {
        resetView(cm);
      } else {
        display.viewFrom += lendiff;
        display.viewTo += lendiff;
      }
    } else if (from <= display.viewFrom && to >= display.viewTo) { // Full overlap
      resetView(cm);
    } else if (from <= display.viewFrom) { // Top overlap
      var cut = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cut) {
        display.view = display.view.slice(cut.index);
        display.viewFrom = cut.lineN;
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    } else if (to >= display.viewTo) { // Bottom overlap
      var cut$1 = viewCuttingPoint(cm, from, from, -1);
      if (cut$1) {
        display.view = display.view.slice(0, cut$1.index);
        display.viewTo = cut$1.lineN;
      } else {
        resetView(cm);
      }
    } else { // Gap in the middle
      var cutTop = viewCuttingPoint(cm, from, from, -1);
      var cutBot = viewCuttingPoint(cm, to, to + lendiff, 1);
      if (cutTop && cutBot) {
        display.view = display.view.slice(0, cutTop.index)
          .concat(buildViewArray(cm, cutTop.lineN, cutBot.lineN))
          .concat(display.view.slice(cutBot.index));
        display.viewTo += lendiff;
      } else {
        resetView(cm);
      }
    }

    var ext = display.externalMeasured;
    if (ext) {
      if (to < ext.lineN)
        { ext.lineN += lendiff; }
      else if (from < ext.lineN + ext.size)
        { display.externalMeasured = null; }
    }
  }

  // Register a change to a single line. Type must be one of "text",
  // "gutter", "class", "widget"
  function regLineChange(cm, line, type) {
    cm.curOp.viewChanged = true;
    var display = cm.display, ext = cm.display.externalMeasured;
    if (ext && line >= ext.lineN && line < ext.lineN + ext.size)
      { display.externalMeasured = null; }

    if (line < display.viewFrom || line >= display.viewTo) { return }
    var lineView = display.view[findViewIndex(cm, line)];
    if (lineView.node == null) { return }
    var arr = lineView.changes || (lineView.changes = []);
    if (indexOf(arr, type) == -1) { arr.push(type); }
  }

  // Clear the view.
  function resetView(cm) {
    cm.display.viewFrom = cm.display.viewTo = cm.doc.first;
    cm.display.view = [];
    cm.display.viewOffset = 0;
  }

  function viewCuttingPoint(cm, oldN, newN, dir) {
    var index = findViewIndex(cm, oldN), diff, view = cm.display.view;
    if (!sawCollapsedSpans || newN == cm.doc.first + cm.doc.size)
      { return {index: index, lineN: newN} }
    var n = cm.display.viewFrom;
    for (var i = 0; i < index; i++)
      { n += view[i].size; }
    if (n != oldN) {
      if (dir > 0) {
        if (index == view.length - 1) { return null }
        diff = (n + view[index].size) - oldN;
        index++;
      } else {
        diff = n - oldN;
      }
      oldN += diff; newN += diff;
    }
    while (visualLineNo(cm.doc, newN) != newN) {
      if (index == (dir < 0 ? 0 : view.length - 1)) { return null }
      newN += dir * view[index - (dir < 0 ? 1 : 0)].size;
      index += dir;
    }
    return {index: index, lineN: newN}
  }

  // Force the view to cover a given range, adding empty view element
  // or clipping off existing ones as needed.
  function adjustView(cm, from, to) {
    var display = cm.display, view = display.view;
    if (view.length == 0 || from >= display.viewTo || to <= display.viewFrom) {
      display.view = buildViewArray(cm, from, to);
      display.viewFrom = from;
    } else {
      if (display.viewFrom > from)
        { display.view = buildViewArray(cm, from, display.viewFrom).concat(display.view); }
      else if (display.viewFrom < from)
        { display.view = display.view.slice(findViewIndex(cm, from)); }
      display.viewFrom = from;
      if (display.viewTo < to)
        { display.view = display.view.concat(buildViewArray(cm, display.viewTo, to)); }
      else if (display.viewTo > to)
        { display.view = display.view.slice(0, findViewIndex(cm, to)); }
    }
    display.viewTo = to;
  }

  // Count the number of lines in the view whose DOM representation is
  // out of date (or nonexistent).
  function countDirtyView(cm) {
    var view = cm.display.view, dirty = 0;
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (!lineView.hidden && (!lineView.node || lineView.changes)) { ++dirty; }
    }
    return dirty
  }

  function updateSelection(cm) {
    cm.display.input.showSelection(cm.display.input.prepareSelection());
  }

  function prepareSelection(cm, primary) {
    if ( primary === void 0 ) primary = true;

    var doc = cm.doc, result = {};
    var curFragment = result.cursors = document.createDocumentFragment();
    var selFragment = result.selection = document.createDocumentFragment();

    for (var i = 0; i < doc.sel.ranges.length; i++) {
      if (!primary && i == doc.sel.primIndex) { continue }
      var range = doc.sel.ranges[i];
      if (range.from().line >= cm.display.viewTo || range.to().line < cm.display.viewFrom) { continue }
      var collapsed = range.empty();
      if (collapsed || cm.options.showCursorWhenSelecting)
        { drawSelectionCursor(cm, range.head, curFragment); }
      if (!collapsed)
        { drawSelectionRange(cm, range, selFragment); }
    }
    return result
  }

  // Draws a cursor for the given range
  function drawSelectionCursor(cm, head, output) {
    var pos = cursorCoords(cm, head, "div", null, null, !cm.options.singleCursorHeightPerLine);

    var cursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor"));
    cursor.style.left = pos.left + "px";
    cursor.style.top = pos.top + "px";
    cursor.style.height = Math.max(0, pos.bottom - pos.top) * cm.options.cursorHeight + "px";

    if (pos.other) {
      // Secondary cursor, shown when on a 'jump' in bi-directional text
      var otherCursor = output.appendChild(elt("div", "\u00a0", "CodeMirror-cursor CodeMirror-secondarycursor"));
      otherCursor.style.display = "";
      otherCursor.style.left = pos.other.left + "px";
      otherCursor.style.top = pos.other.top + "px";
      otherCursor.style.height = (pos.other.bottom - pos.other.top) * .85 + "px";
    }
  }

  function cmpCoords(a, b) { return a.top - b.top || a.left - b.left }

  // Draws the given range as a highlighted selection
  function drawSelectionRange(cm, range, output) {
    var display = cm.display, doc = cm.doc;
    var fragment = document.createDocumentFragment();
    var padding = paddingH(cm.display), leftSide = padding.left;
    var rightSide = Math.max(display.sizerWidth, displayWidth(cm) - display.sizer.offsetLeft) - padding.right;
    var docLTR = doc.direction == "ltr";

    function add(left, top, width, bottom) {
      if (top < 0) { top = 0; }
      top = Math.round(top);
      bottom = Math.round(bottom);
      fragment.appendChild(elt("div", null, "CodeMirror-selected", ("position: absolute; left: " + left + "px;\n                             top: " + top + "px; width: " + (width == null ? rightSide - left : width) + "px;\n                             height: " + (bottom - top) + "px")));
    }

    function drawForLine(line, fromArg, toArg) {
      var lineObj = getLine(doc, line);
      var lineLen = lineObj.text.length;
      var start, end;
      function coords(ch, bias) {
        return charCoords(cm, Pos(line, ch), "div", lineObj, bias)
      }

      function wrapX(pos, dir, side) {
        var extent = wrappedLineExtentChar(cm, lineObj, null, pos);
        var prop = (dir == "ltr") == (side == "after") ? "left" : "right";
        var ch = side == "after" ? extent.begin : extent.end - (/\s/.test(lineObj.text.charAt(extent.end - 1)) ? 2 : 1);
        return coords(ch, prop)[prop]
      }

      var order = getOrder(lineObj, doc.direction);
      iterateBidiSections(order, fromArg || 0, toArg == null ? lineLen : toArg, function (from, to, dir, i) {
        var ltr = dir == "ltr";
        var fromPos = coords(from, ltr ? "left" : "right");
        var toPos = coords(to - 1, ltr ? "right" : "left");

        var openStart = fromArg == null && from == 0, openEnd = toArg == null && to == lineLen;
        var first = i == 0, last = !order || i == order.length - 1;
        if (toPos.top - fromPos.top <= 3) { // Single line
          var openLeft = (docLTR ? openStart : openEnd) && first;
          var openRight = (docLTR ? openEnd : openStart) && last;
          var left = openLeft ? leftSide : (ltr ? fromPos : toPos).left;
          var right = openRight ? rightSide : (ltr ? toPos : fromPos).right;
          add(left, fromPos.top, right - left, fromPos.bottom);
        } else { // Multiple lines
          var topLeft, topRight, botLeft, botRight;
          if (ltr) {
            topLeft = docLTR && openStart && first ? leftSide : fromPos.left;
            topRight = docLTR ? rightSide : wrapX(from, dir, "before");
            botLeft = docLTR ? leftSide : wrapX(to, dir, "after");
            botRight = docLTR && openEnd && last ? rightSide : toPos.right;
          } else {
            topLeft = !docLTR ? leftSide : wrapX(from, dir, "before");
            topRight = !docLTR && openStart && first ? rightSide : fromPos.right;
            botLeft = !docLTR && openEnd && last ? leftSide : toPos.left;
            botRight = !docLTR ? rightSide : wrapX(to, dir, "after");
          }
          add(topLeft, fromPos.top, topRight - topLeft, fromPos.bottom);
          if (fromPos.bottom < toPos.top) { add(leftSide, fromPos.bottom, null, toPos.top); }
          add(botLeft, toPos.top, botRight - botLeft, toPos.bottom);
        }

        if (!start || cmpCoords(fromPos, start) < 0) { start = fromPos; }
        if (cmpCoords(toPos, start) < 0) { start = toPos; }
        if (!end || cmpCoords(fromPos, end) < 0) { end = fromPos; }
        if (cmpCoords(toPos, end) < 0) { end = toPos; }
      });
      return {start: start, end: end}
    }

    var sFrom = range.from(), sTo = range.to();
    if (sFrom.line == sTo.line) {
      drawForLine(sFrom.line, sFrom.ch, sTo.ch);
    } else {
      var fromLine = getLine(doc, sFrom.line), toLine = getLine(doc, sTo.line);
      var singleVLine = visualLine(fromLine) == visualLine(toLine);
      var leftEnd = drawForLine(sFrom.line, sFrom.ch, singleVLine ? fromLine.text.length + 1 : null).end;
      var rightStart = drawForLine(sTo.line, singleVLine ? 0 : null, sTo.ch).start;
      if (singleVLine) {
        if (leftEnd.top < rightStart.top - 2) {
          add(leftEnd.right, leftEnd.top, null, leftEnd.bottom);
          add(leftSide, rightStart.top, rightStart.left, rightStart.bottom);
        } else {
          add(leftEnd.right, leftEnd.top, rightStart.left - leftEnd.right, leftEnd.bottom);
        }
      }
      if (leftEnd.bottom < rightStart.top)
        { add(leftSide, leftEnd.bottom, null, rightStart.top); }
    }

    output.appendChild(fragment);
  }

  // Cursor-blinking
  function restartBlink(cm) {
    if (!cm.state.focused) { return }
    var display = cm.display;
    clearInterval(display.blinker);
    var on = true;
    display.cursorDiv.style.visibility = "";
    if (cm.options.cursorBlinkRate > 0)
      { display.blinker = setInterval(function () { return display.cursorDiv.style.visibility = (on = !on) ? "" : "hidden"; },
        cm.options.cursorBlinkRate); }
    else if (cm.options.cursorBlinkRate < 0)
      { display.cursorDiv.style.visibility = "hidden"; }
  }

  function ensureFocus(cm) {
    if (!cm.state.focused) { cm.display.input.focus(); onFocus(cm); }
  }

  function delayBlurEvent(cm) {
    cm.state.delayingBlurEvent = true;
    setTimeout(function () { if (cm.state.delayingBlurEvent) {
      cm.state.delayingBlurEvent = false;
      onBlur(cm);
    } }, 100);
  }

  function onFocus(cm, e) {
    if (cm.state.delayingBlurEvent) { cm.state.delayingBlurEvent = false; }

    if (cm.options.readOnly == "nocursor") { return }
    if (!cm.state.focused) {
      signal(cm, "focus", cm, e);
      cm.state.focused = true;
      addClass(cm.display.wrapper, "CodeMirror-focused");
      // This test prevents this from firing when a context
      // menu is closed (since the input reset would kill the
      // select-all detection hack)
      if (!cm.curOp && cm.display.selForContextMenu != cm.doc.sel) {
        cm.display.input.reset();
        if (webkit) { setTimeout(function () { return cm.display.input.reset(true); }, 20); } // Issue #1730
      }
      cm.display.input.receivedFocus();
    }
    restartBlink(cm);
  }
  function onBlur(cm, e) {
    if (cm.state.delayingBlurEvent) { return }

    if (cm.state.focused) {
      signal(cm, "blur", cm, e);
      cm.state.focused = false;
      rmClass(cm.display.wrapper, "CodeMirror-focused");
    }
    clearInterval(cm.display.blinker);
    setTimeout(function () { if (!cm.state.focused) { cm.display.shift = false; } }, 150);
  }

  // Read the actual heights of the rendered lines, and update their
  // stored heights to match.
  function updateHeightsInViewport(cm) {
    var display = cm.display;
    var prevBottom = display.lineDiv.offsetTop;
    for (var i = 0; i < display.view.length; i++) {
      var cur = display.view[i], wrapping = cm.options.lineWrapping;
      var height = (void 0), width = 0;
      if (cur.hidden) { continue }
      if (ie && ie_version < 8) {
        var bot = cur.node.offsetTop + cur.node.offsetHeight;
        height = bot - prevBottom;
        prevBottom = bot;
      } else {
        var box = cur.node.getBoundingClientRect();
        height = box.bottom - box.top;
        // Check that lines don't extend past the right of the current
        // editor width
        if (!wrapping && cur.text.firstChild)
          { width = cur.text.firstChild.getBoundingClientRect().right - box.left - 1; }
      }
      var diff = cur.line.height - height;
      if (diff > .005 || diff < -.005) {
        updateLineHeight(cur.line, height);
        updateWidgetHeight(cur.line);
        if (cur.rest) { for (var j = 0; j < cur.rest.length; j++)
          { updateWidgetHeight(cur.rest[j]); } }
      }
      if (width > cm.display.sizerWidth) {
        var chWidth = Math.ceil(width / charWidth(cm.display));
        if (chWidth > cm.display.maxLineLength) {
          cm.display.maxLineLength = chWidth;
          cm.display.maxLine = cur.line;
          cm.display.maxLineChanged = true;
        }
      }
    }
  }

  // Read and store the height of line widgets associated with the
  // given line.
  function updateWidgetHeight(line) {
    if (line.widgets) { for (var i = 0; i < line.widgets.length; ++i) {
      var w = line.widgets[i], parent = w.node.parentNode;
      if (parent) { w.height = parent.offsetHeight; }
    } }
  }

  // Compute the lines that are visible in a given viewport (defaults
  // the the current scroll position). viewport may contain top,
  // height, and ensure (see op.scrollToPos) properties.
  function visibleLines(display, doc, viewport) {
    var top = viewport && viewport.top != null ? Math.max(0, viewport.top) : display.scroller.scrollTop;
    top = Math.floor(top - paddingTop(display));
    var bottom = viewport && viewport.bottom != null ? viewport.bottom : top + display.wrapper.clientHeight;

    var from = lineAtHeight(doc, top), to = lineAtHeight(doc, bottom);
    // Ensure is a {from: {line, ch}, to: {line, ch}} object, and
    // forces those lines into the viewport (if possible).
    if (viewport && viewport.ensure) {
      var ensureFrom = viewport.ensure.from.line, ensureTo = viewport.ensure.to.line;
      if (ensureFrom < from) {
        from = ensureFrom;
        to = lineAtHeight(doc, heightAtLine(getLine(doc, ensureFrom)) + display.wrapper.clientHeight);
      } else if (Math.min(ensureTo, doc.lastLine()) >= to) {
        from = lineAtHeight(doc, heightAtLine(getLine(doc, ensureTo)) - display.wrapper.clientHeight);
        to = ensureTo;
      }
    }
    return {from: from, to: Math.max(to, from + 1)}
  }

  // SCROLLING THINGS INTO VIEW

  // If an editor sits on the top or bottom of the window, partially
  // scrolled out of view, this ensures that the cursor is visible.
  function maybeScrollWindow(cm, rect) {
    if (signalDOMEvent(cm, "scrollCursorIntoView")) { return }

    var display = cm.display, box = display.sizer.getBoundingClientRect(), doScroll = null;
    if (rect.top + box.top < 0) { doScroll = true; }
    else if (rect.bottom + box.top > (window.innerHeight || document.documentElement.clientHeight)) { doScroll = false; }
    if (doScroll != null && !phantom) {
      var scrollNode = elt("div", "\u200b", null, ("position: absolute;\n                         top: " + (rect.top - display.viewOffset - paddingTop(cm.display)) + "px;\n                         height: " + (rect.bottom - rect.top + scrollGap(cm) + display.barHeight) + "px;\n                         left: " + (rect.left) + "px; width: " + (Math.max(2, rect.right - rect.left)) + "px;"));
      cm.display.lineSpace.appendChild(scrollNode);
      scrollNode.scrollIntoView(doScroll);
      cm.display.lineSpace.removeChild(scrollNode);
    }
  }

  // Scroll a given position into view (immediately), verifying that
  // it actually became visible (as line heights are accurately
  // measured, the position of something may 'drift' during drawing).
  function scrollPosIntoView(cm, pos, end, margin) {
    if (margin == null) { margin = 0; }
    var rect;
    if (!cm.options.lineWrapping && pos == end) {
      // Set pos and end to the cursor positions around the character pos sticks to
      // If pos.sticky == "before", that is around pos.ch - 1, otherwise around pos.ch
      // If pos == Pos(_, 0, "before"), pos and end are unchanged
      pos = pos.ch ? Pos(pos.line, pos.sticky == "before" ? pos.ch - 1 : pos.ch, "after") : pos;
      end = pos.sticky == "before" ? Pos(pos.line, pos.ch + 1, "before") : pos;
    }
    for (var limit = 0; limit < 5; limit++) {
      var changed = false;
      var coords = cursorCoords(cm, pos);
      var endCoords = !end || end == pos ? coords : cursorCoords(cm, end);
      rect = {left: Math.min(coords.left, endCoords.left),
              top: Math.min(coords.top, endCoords.top) - margin,
              right: Math.max(coords.left, endCoords.left),
              bottom: Math.max(coords.bottom, endCoords.bottom) + margin};
      var scrollPos = calculateScrollPos(cm, rect);
      var startTop = cm.doc.scrollTop, startLeft = cm.doc.scrollLeft;
      if (scrollPos.scrollTop != null) {
        updateScrollTop(cm, scrollPos.scrollTop);
        if (Math.abs(cm.doc.scrollTop - startTop) > 1) { changed = true; }
      }
      if (scrollPos.scrollLeft != null) {
        setScrollLeft(cm, scrollPos.scrollLeft);
        if (Math.abs(cm.doc.scrollLeft - startLeft) > 1) { changed = true; }
      }
      if (!changed) { break }
    }
    return rect
  }

  // Scroll a given set of coordinates into view (immediately).
  function scrollIntoView(cm, rect) {
    var scrollPos = calculateScrollPos(cm, rect);
    if (scrollPos.scrollTop != null) { updateScrollTop(cm, scrollPos.scrollTop); }
    if (scrollPos.scrollLeft != null) { setScrollLeft(cm, scrollPos.scrollLeft); }
  }

  // Calculate a new scroll position needed to scroll the given
  // rectangle into view. Returns an object with scrollTop and
  // scrollLeft properties. When these are undefined, the
  // vertical/horizontal position does not need to be adjusted.
  function calculateScrollPos(cm, rect) {
    var display = cm.display, snapMargin = textHeight(cm.display);
    if (rect.top < 0) { rect.top = 0; }
    var screentop = cm.curOp && cm.curOp.scrollTop != null ? cm.curOp.scrollTop : display.scroller.scrollTop;
    var screen = displayHeight(cm), result = {};
    if (rect.bottom - rect.top > screen) { rect.bottom = rect.top + screen; }
    var docBottom = cm.doc.height + paddingVert(display);
    var atTop = rect.top < snapMargin, atBottom = rect.bottom > docBottom - snapMargin;
    if (rect.top < screentop) {
      result.scrollTop = atTop ? 0 : rect.top;
    } else if (rect.bottom > screentop + screen) {
      var newTop = Math.min(rect.top, (atBottom ? docBottom : rect.bottom) - screen);
      if (newTop != screentop) { result.scrollTop = newTop; }
    }

    var screenleft = cm.curOp && cm.curOp.scrollLeft != null ? cm.curOp.scrollLeft : display.scroller.scrollLeft;
    var screenw = displayWidth(cm) - (cm.options.fixedGutter ? display.gutters.offsetWidth : 0);
    var tooWide = rect.right - rect.left > screenw;
    if (tooWide) { rect.right = rect.left + screenw; }
    if (rect.left < 10)
      { result.scrollLeft = 0; }
    else if (rect.left < screenleft)
      { result.scrollLeft = Math.max(0, rect.left - (tooWide ? 0 : 10)); }
    else if (rect.right > screenw + screenleft - 3)
      { result.scrollLeft = rect.right + (tooWide ? 0 : 10) - screenw; }
    return result
  }

  // Store a relative adjustment to the scroll position in the current
  // operation (to be applied when the operation finishes).
  function addToScrollTop(cm, top) {
    if (top == null) { return }
    resolveScrollToPos(cm);
    cm.curOp.scrollTop = (cm.curOp.scrollTop == null ? cm.doc.scrollTop : cm.curOp.scrollTop) + top;
  }

  // Make sure that at the end of the operation the current cursor is
  // shown.
  function ensureCursorVisible(cm) {
    resolveScrollToPos(cm);
    var cur = cm.getCursor();
    cm.curOp.scrollToPos = {from: cur, to: cur, margin: cm.options.cursorScrollMargin};
  }

  function scrollToCoords(cm, x, y) {
    if (x != null || y != null) { resolveScrollToPos(cm); }
    if (x != null) { cm.curOp.scrollLeft = x; }
    if (y != null) { cm.curOp.scrollTop = y; }
  }

  function scrollToRange(cm, range) {
    resolveScrollToPos(cm);
    cm.curOp.scrollToPos = range;
  }

  // When an operation has its scrollToPos property set, and another
  // scroll action is applied before the end of the operation, this
  // 'simulates' scrolling that position into view in a cheap way, so
  // that the effect of intermediate scroll commands is not ignored.
  function resolveScrollToPos(cm) {
    var range = cm.curOp.scrollToPos;
    if (range) {
      cm.curOp.scrollToPos = null;
      var from = estimateCoords(cm, range.from), to = estimateCoords(cm, range.to);
      scrollToCoordsRange(cm, from, to, range.margin);
    }
  }

  function scrollToCoordsRange(cm, from, to, margin) {
    var sPos = calculateScrollPos(cm, {
      left: Math.min(from.left, to.left),
      top: Math.min(from.top, to.top) - margin,
      right: Math.max(from.right, to.right),
      bottom: Math.max(from.bottom, to.bottom) + margin
    });
    scrollToCoords(cm, sPos.scrollLeft, sPos.scrollTop);
  }

  // Sync the scrollable area and scrollbars, ensure the viewport
  // covers the visible area.
  function updateScrollTop(cm, val) {
    if (Math.abs(cm.doc.scrollTop - val) < 2) { return }
    if (!gecko) { updateDisplaySimple(cm, {top: val}); }
    setScrollTop(cm, val, true);
    if (gecko) { updateDisplaySimple(cm); }
    startWorker(cm, 100);
  }

  function setScrollTop(cm, val, forceScroll) {
    val = Math.max(0, Math.min(cm.display.scroller.scrollHeight - cm.display.scroller.clientHeight, val));
    if (cm.display.scroller.scrollTop == val && !forceScroll) { return }
    cm.doc.scrollTop = val;
    cm.display.scrollbars.setScrollTop(val);
    if (cm.display.scroller.scrollTop != val) { cm.display.scroller.scrollTop = val; }
  }

  // Sync scroller and scrollbar, ensure the gutter elements are
  // aligned.
  function setScrollLeft(cm, val, isScroller, forceScroll) {
    val = Math.max(0, Math.min(val, cm.display.scroller.scrollWidth - cm.display.scroller.clientWidth));
    if ((isScroller ? val == cm.doc.scrollLeft : Math.abs(cm.doc.scrollLeft - val) < 2) && !forceScroll) { return }
    cm.doc.scrollLeft = val;
    alignHorizontally(cm);
    if (cm.display.scroller.scrollLeft != val) { cm.display.scroller.scrollLeft = val; }
    cm.display.scrollbars.setScrollLeft(val);
  }

  // SCROLLBARS

  // Prepare DOM reads needed to update the scrollbars. Done in one
  // shot to minimize update/measure roundtrips.
  function measureForScrollbars(cm) {
    var d = cm.display, gutterW = d.gutters.offsetWidth;
    var docH = Math.round(cm.doc.height + paddingVert(cm.display));
    return {
      clientHeight: d.scroller.clientHeight,
      viewHeight: d.wrapper.clientHeight,
      scrollWidth: d.scroller.scrollWidth, clientWidth: d.scroller.clientWidth,
      viewWidth: d.wrapper.clientWidth,
      barLeft: cm.options.fixedGutter ? gutterW : 0,
      docHeight: docH,
      scrollHeight: docH + scrollGap(cm) + d.barHeight,
      nativeBarWidth: d.nativeBarWidth,
      gutterWidth: gutterW
    }
  }

  var NativeScrollbars = function(place, scroll, cm) {
    this.cm = cm;
    var vert = this.vert = elt("div", [elt("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar");
    var horiz = this.horiz = elt("div", [elt("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
    vert.tabIndex = horiz.tabIndex = -1;
    place(vert); place(horiz);

    on(vert, "scroll", function () {
      if (vert.clientHeight) { scroll(vert.scrollTop, "vertical"); }
    });
    on(horiz, "scroll", function () {
      if (horiz.clientWidth) { scroll(horiz.scrollLeft, "horizontal"); }
    });

    this.checkedZeroWidth = false;
    // Need to set a minimum width to see the scrollbar on IE7 (but must not set it on IE8).
    if (ie && ie_version < 8) { this.horiz.style.minHeight = this.vert.style.minWidth = "18px"; }
  };

  NativeScrollbars.prototype.update = function (measure) {
    var needsH = measure.scrollWidth > measure.clientWidth + 1;
    var needsV = measure.scrollHeight > measure.clientHeight + 1;
    var sWidth = measure.nativeBarWidth;

    if (needsV) {
      this.vert.style.display = "block";
      this.vert.style.bottom = needsH ? sWidth + "px" : "0";
      var totalHeight = measure.viewHeight - (needsH ? sWidth : 0);
      // A bug in IE8 can cause this value to be negative, so guard it.
      this.vert.firstChild.style.height =
        Math.max(0, measure.scrollHeight - measure.clientHeight + totalHeight) + "px";
    } else {
      this.vert.style.display = "";
      this.vert.firstChild.style.height = "0";
    }

    if (needsH) {
      this.horiz.style.display = "block";
      this.horiz.style.right = needsV ? sWidth + "px" : "0";
      this.horiz.style.left = measure.barLeft + "px";
      var totalWidth = measure.viewWidth - measure.barLeft - (needsV ? sWidth : 0);
      this.horiz.firstChild.style.width =
        Math.max(0, measure.scrollWidth - measure.clientWidth + totalWidth) + "px";
    } else {
      this.horiz.style.display = "";
      this.horiz.firstChild.style.width = "0";
    }

    if (!this.checkedZeroWidth && measure.clientHeight > 0) {
      if (sWidth == 0) { this.zeroWidthHack(); }
      this.checkedZeroWidth = true;
    }

    return {right: needsV ? sWidth : 0, bottom: needsH ? sWidth : 0}
  };

  NativeScrollbars.prototype.setScrollLeft = function (pos) {
    if (this.horiz.scrollLeft != pos) { this.horiz.scrollLeft = pos; }
    if (this.disableHoriz) { this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz"); }
  };

  NativeScrollbars.prototype.setScrollTop = function (pos) {
    if (this.vert.scrollTop != pos) { this.vert.scrollTop = pos; }
    if (this.disableVert) { this.enableZeroWidthBar(this.vert, this.disableVert, "vert"); }
  };

  NativeScrollbars.prototype.zeroWidthHack = function () {
    var w = mac && !mac_geMountainLion ? "12px" : "18px";
    this.horiz.style.height = this.vert.style.width = w;
    this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none";
    this.disableHoriz = new Delayed;
    this.disableVert = new Delayed;
  };

  NativeScrollbars.prototype.enableZeroWidthBar = function (bar, delay, type) {
    bar.style.pointerEvents = "auto";
    function maybeDisable() {
      // To find out whether the scrollbar is still visible, we
      // check whether the element under the pixel in the bottom
      // right corner of the scrollbar box is the scrollbar box
      // itself (when the bar is still visible) or its filler child
      // (when the bar is hidden). If it is still visible, we keep
      // it enabled, if it's hidden, we disable pointer events.
      var box = bar.getBoundingClientRect();
      var elt = type == "vert" ? document.elementFromPoint(box.right - 1, (box.top + box.bottom) / 2)
          : document.elementFromPoint((box.right + box.left) / 2, box.bottom - 1);
      if (elt != bar) { bar.style.pointerEvents = "none"; }
      else { delay.set(1000, maybeDisable); }
    }
    delay.set(1000, maybeDisable);
  };

  NativeScrollbars.prototype.clear = function () {
    var parent = this.horiz.parentNode;
    parent.removeChild(this.horiz);
    parent.removeChild(this.vert);
  };

  var NullScrollbars = function () {};

  NullScrollbars.prototype.update = function () { return {bottom: 0, right: 0} };
  NullScrollbars.prototype.setScrollLeft = function () {};
  NullScrollbars.prototype.setScrollTop = function () {};
  NullScrollbars.prototype.clear = function () {};

  function updateScrollbars(cm, measure) {
    if (!measure) { measure = measureForScrollbars(cm); }
    var startWidth = cm.display.barWidth, startHeight = cm.display.barHeight;
    updateScrollbarsInner(cm, measure);
    for (var i = 0; i < 4 && startWidth != cm.display.barWidth || startHeight != cm.display.barHeight; i++) {
      if (startWidth != cm.display.barWidth && cm.options.lineWrapping)
        { updateHeightsInViewport(cm); }
      updateScrollbarsInner(cm, measureForScrollbars(cm));
      startWidth = cm.display.barWidth; startHeight = cm.display.barHeight;
    }
  }

  // Re-synchronize the fake scrollbars with the actual size of the
  // content.
  function updateScrollbarsInner(cm, measure) {
    var d = cm.display;
    var sizes = d.scrollbars.update(measure);

    d.sizer.style.paddingRight = (d.barWidth = sizes.right) + "px";
    d.sizer.style.paddingBottom = (d.barHeight = sizes.bottom) + "px";
    d.heightForcer.style.borderBottom = sizes.bottom + "px solid transparent";

    if (sizes.right && sizes.bottom) {
      d.scrollbarFiller.style.display = "block";
      d.scrollbarFiller.style.height = sizes.bottom + "px";
      d.scrollbarFiller.style.width = sizes.right + "px";
    } else { d.scrollbarFiller.style.display = ""; }
    if (sizes.bottom && cm.options.coverGutterNextToScrollbar && cm.options.fixedGutter) {
      d.gutterFiller.style.display = "block";
      d.gutterFiller.style.height = sizes.bottom + "px";
      d.gutterFiller.style.width = measure.gutterWidth + "px";
    } else { d.gutterFiller.style.display = ""; }
  }

  var scrollbarModel = {"native": NativeScrollbars, "null": NullScrollbars};

  function initScrollbars(cm) {
    if (cm.display.scrollbars) {
      cm.display.scrollbars.clear();
      if (cm.display.scrollbars.addClass)
        { rmClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
    }

    cm.display.scrollbars = new scrollbarModel[cm.options.scrollbarStyle](function (node) {
      cm.display.wrapper.insertBefore(node, cm.display.scrollbarFiller);
      // Prevent clicks in the scrollbars from killing focus
      on(node, "mousedown", function () {
        if (cm.state.focused) { setTimeout(function () { return cm.display.input.focus(); }, 0); }
      });
      node.setAttribute("cm-not-content", "true");
    }, function (pos, axis) {
      if (axis == "horizontal") { setScrollLeft(cm, pos); }
      else { updateScrollTop(cm, pos); }
    }, cm);
    if (cm.display.scrollbars.addClass)
      { addClass(cm.display.wrapper, cm.display.scrollbars.addClass); }
  }

  // Operations are used to wrap a series of changes to the editor
  // state in such a way that each change won't have to update the
  // cursor and display (which would be awkward, slow, and
  // error-prone). Instead, display updates are batched and then all
  // combined and executed at once.

  var nextOpId = 0;
  // Start a new operation.
  function startOperation(cm) {
    cm.curOp = {
      cm: cm,
      viewChanged: false,      // Flag that indicates that lines might need to be redrawn
      startHeight: cm.doc.height, // Used to detect need to update scrollbar
      forceUpdate: false,      // Used to force a redraw
      updateInput: 0,       // Whether to reset the input textarea
      typing: false,           // Whether this reset should be careful to leave existing text (for compositing)
      changeObjs: null,        // Accumulated changes, for firing change events
      cursorActivityHandlers: null, // Set of handlers to fire cursorActivity on
      cursorActivityCalled: 0, // Tracks which cursorActivity handlers have been called already
      selectionChanged: false, // Whether the selection needs to be redrawn
      updateMaxLine: false,    // Set when the widest line needs to be determined anew
      scrollLeft: null, scrollTop: null, // Intermediate scroll position, not pushed to DOM yet
      scrollToPos: null,       // Used to scroll to a specific position
      focus: false,
      id: ++nextOpId           // Unique ID
    };
    pushOperation(cm.curOp);
  }

  // Finish an operation, updating the display and signalling delayed events
  function endOperation(cm) {
    var op = cm.curOp;
    if (op) { finishOperation(op, function (group) {
      for (var i = 0; i < group.ops.length; i++)
        { group.ops[i].cm.curOp = null; }
      endOperations(group);
    }); }
  }

  // The DOM updates done when an operation finishes are batched so
  // that the minimum number of relayouts are required.
  function endOperations(group) {
    var ops = group.ops;
    for (var i = 0; i < ops.length; i++) // Read DOM
      { endOperation_R1(ops[i]); }
    for (var i$1 = 0; i$1 < ops.length; i$1++) // Write DOM (maybe)
      { endOperation_W1(ops[i$1]); }
    for (var i$2 = 0; i$2 < ops.length; i$2++) // Read DOM
      { endOperation_R2(ops[i$2]); }
    for (var i$3 = 0; i$3 < ops.length; i$3++) // Write DOM (maybe)
      { endOperation_W2(ops[i$3]); }
    for (var i$4 = 0; i$4 < ops.length; i$4++) // Read DOM
      { endOperation_finish(ops[i$4]); }
  }

  function endOperation_R1(op) {
    var cm = op.cm, display = cm.display;
    maybeClipScrollbars(cm);
    if (op.updateMaxLine) { findMaxLine(cm); }

    op.mustUpdate = op.viewChanged || op.forceUpdate || op.scrollTop != null ||
      op.scrollToPos && (op.scrollToPos.from.line < display.viewFrom ||
                         op.scrollToPos.to.line >= display.viewTo) ||
      display.maxLineChanged && cm.options.lineWrapping;
    op.update = op.mustUpdate &&
      new DisplayUpdate(cm, op.mustUpdate && {top: op.scrollTop, ensure: op.scrollToPos}, op.forceUpdate);
  }

  function endOperation_W1(op) {
    op.updatedDisplay = op.mustUpdate && updateDisplayIfNeeded(op.cm, op.update);
  }

  function endOperation_R2(op) {
    var cm = op.cm, display = cm.display;
    if (op.updatedDisplay) { updateHeightsInViewport(cm); }

    op.barMeasure = measureForScrollbars(cm);

    // If the max line changed since it was last measured, measure it,
    // and ensure the document's width matches it.
    // updateDisplay_W2 will use these properties to do the actual resizing
    if (display.maxLineChanged && !cm.options.lineWrapping) {
      op.adjustWidthTo = measureChar(cm, display.maxLine, display.maxLine.text.length).left + 3;
      cm.display.sizerWidth = op.adjustWidthTo;
      op.barMeasure.scrollWidth =
        Math.max(display.scroller.clientWidth, display.sizer.offsetLeft + op.adjustWidthTo + scrollGap(cm) + cm.display.barWidth);
      op.maxScrollLeft = Math.max(0, display.sizer.offsetLeft + op.adjustWidthTo - displayWidth(cm));
    }

    if (op.updatedDisplay || op.selectionChanged)
      { op.preparedSelection = display.input.prepareSelection(); }
  }

  function endOperation_W2(op) {
    var cm = op.cm;

    if (op.adjustWidthTo != null) {
      cm.display.sizer.style.minWidth = op.adjustWidthTo + "px";
      if (op.maxScrollLeft < cm.doc.scrollLeft)
        { setScrollLeft(cm, Math.min(cm.display.scroller.scrollLeft, op.maxScrollLeft), true); }
      cm.display.maxLineChanged = false;
    }

    var takeFocus = op.focus && op.focus == activeElt();
    if (op.preparedSelection)
      { cm.display.input.showSelection(op.preparedSelection, takeFocus); }
    if (op.updatedDisplay || op.startHeight != cm.doc.height)
      { updateScrollbars(cm, op.barMeasure); }
    if (op.updatedDisplay)
      { setDocumentHeight(cm, op.barMeasure); }

    if (op.selectionChanged) { restartBlink(cm); }

    if (cm.state.focused && op.updateInput)
      { cm.display.input.reset(op.typing); }
    if (takeFocus) { ensureFocus(op.cm); }
  }

  function endOperation_finish(op) {
    var cm = op.cm, display = cm.display, doc = cm.doc;

    if (op.updatedDisplay) { postUpdateDisplay(cm, op.update); }

    // Abort mouse wheel delta measurement, when scrolling explicitly
    if (display.wheelStartX != null && (op.scrollTop != null || op.scrollLeft != null || op.scrollToPos))
      { display.wheelStartX = display.wheelStartY = null; }

    // Propagate the scroll position to the actual DOM scroller
    if (op.scrollTop != null) { setScrollTop(cm, op.scrollTop, op.forceScroll); }

    if (op.scrollLeft != null) { setScrollLeft(cm, op.scrollLeft, true, true); }
    // If we need to scroll a specific position into view, do so.
    if (op.scrollToPos) {
      var rect = scrollPosIntoView(cm, clipPos(doc, op.scrollToPos.from),
                                   clipPos(doc, op.scrollToPos.to), op.scrollToPos.margin);
      maybeScrollWindow(cm, rect);
    }

    // Fire events for markers that are hidden/unidden by editing or
    // undoing
    var hidden = op.maybeHiddenMarkers, unhidden = op.maybeUnhiddenMarkers;
    if (hidden) { for (var i = 0; i < hidden.length; ++i)
      { if (!hidden[i].lines.length) { signal(hidden[i], "hide"); } } }
    if (unhidden) { for (var i$1 = 0; i$1 < unhidden.length; ++i$1)
      { if (unhidden[i$1].lines.length) { signal(unhidden[i$1], "unhide"); } } }

    if (display.wrapper.offsetHeight)
      { doc.scrollTop = cm.display.scroller.scrollTop; }

    // Fire change events, and delayed event handlers
    if (op.changeObjs)
      { signal(cm, "changes", cm, op.changeObjs); }
    if (op.update)
      { op.update.finish(); }
  }

  // Run the given function in an operation
  function runInOp(cm, f) {
    if (cm.curOp) { return f() }
    startOperation(cm);
    try { return f() }
    finally { endOperation(cm); }
  }
  // Wraps a function in an operation. Returns the wrapped function.
  function operation(cm, f) {
    return function() {
      if (cm.curOp) { return f.apply(cm, arguments) }
      startOperation(cm);
      try { return f.apply(cm, arguments) }
      finally { endOperation(cm); }
    }
  }
  // Used to add methods to editor and doc instances, wrapping them in
  // operations.
  function methodOp(f) {
    return function() {
      if (this.curOp) { return f.apply(this, arguments) }
      startOperation(this);
      try { return f.apply(this, arguments) }
      finally { endOperation(this); }
    }
  }
  function docMethodOp(f) {
    return function() {
      var cm = this.cm;
      if (!cm || cm.curOp) { return f.apply(this, arguments) }
      startOperation(cm);
      try { return f.apply(this, arguments) }
      finally { endOperation(cm); }
    }
  }

  // HIGHLIGHT WORKER

  function startWorker(cm, time) {
    if (cm.doc.highlightFrontier < cm.display.viewTo)
      { cm.state.highlight.set(time, bind(highlightWorker, cm)); }
  }

  function highlightWorker(cm) {
    var doc = cm.doc;
    if (doc.highlightFrontier >= cm.display.viewTo) { return }
    var end = +new Date + cm.options.workTime;
    var context = getContextBefore(cm, doc.highlightFrontier);
    var changedLines = [];

    doc.iter(context.line, Math.min(doc.first + doc.size, cm.display.viewTo + 500), function (line) {
      if (context.line >= cm.display.viewFrom) { // Visible
        var oldStyles = line.styles;
        var resetState = line.text.length > cm.options.maxHighlightLength ? copyState(doc.mode, context.state) : null;
        var highlighted = highlightLine(cm, line, context, true);
        if (resetState) { context.state = resetState; }
        line.styles = highlighted.styles;
        var oldCls = line.styleClasses, newCls = highlighted.classes;
        if (newCls) { line.styleClasses = newCls; }
        else if (oldCls) { line.styleClasses = null; }
        var ischange = !oldStyles || oldStyles.length != line.styles.length ||
          oldCls != newCls && (!oldCls || !newCls || oldCls.bgClass != newCls.bgClass || oldCls.textClass != newCls.textClass);
        for (var i = 0; !ischange && i < oldStyles.length; ++i) { ischange = oldStyles[i] != line.styles[i]; }
        if (ischange) { changedLines.push(context.line); }
        line.stateAfter = context.save();
        context.nextLine();
      } else {
        if (line.text.length <= cm.options.maxHighlightLength)
          { processLine(cm, line.text, context); }
        line.stateAfter = context.line % 5 == 0 ? context.save() : null;
        context.nextLine();
      }
      if (+new Date > end) {
        startWorker(cm, cm.options.workDelay);
        return true
      }
    });
    doc.highlightFrontier = context.line;
    doc.modeFrontier = Math.max(doc.modeFrontier, context.line);
    if (changedLines.length) { runInOp(cm, function () {
      for (var i = 0; i < changedLines.length; i++)
        { regLineChange(cm, changedLines[i], "text"); }
    }); }
  }

  // DISPLAY DRAWING

  var DisplayUpdate = function(cm, viewport, force) {
    var display = cm.display;

    this.viewport = viewport;
    // Store some values that we'll need later (but don't want to force a relayout for)
    this.visible = visibleLines(display, cm.doc, viewport);
    this.editorIsHidden = !display.wrapper.offsetWidth;
    this.wrapperHeight = display.wrapper.clientHeight;
    this.wrapperWidth = display.wrapper.clientWidth;
    this.oldDisplayWidth = displayWidth(cm);
    this.force = force;
    this.dims = getDimensions(cm);
    this.events = [];
  };

  DisplayUpdate.prototype.signal = function (emitter, type) {
    if (hasHandler(emitter, type))
      { this.events.push(arguments); }
  };
  DisplayUpdate.prototype.finish = function () {
    for (var i = 0; i < this.events.length; i++)
      { signal.apply(null, this.events[i]); }
  };

  function maybeClipScrollbars(cm) {
    var display = cm.display;
    if (!display.scrollbarsClipped && display.scroller.offsetWidth) {
      display.nativeBarWidth = display.scroller.offsetWidth - display.scroller.clientWidth;
      display.heightForcer.style.height = scrollGap(cm) + "px";
      display.sizer.style.marginBottom = -display.nativeBarWidth + "px";
      display.sizer.style.borderRightWidth = scrollGap(cm) + "px";
      display.scrollbarsClipped = true;
    }
  }

  function selectionSnapshot(cm) {
    if (cm.hasFocus()) { return null }
    var active = activeElt();
    if (!active || !contains(cm.display.lineDiv, active)) { return null }
    var result = {activeElt: active};
    if (window.getSelection) {
      var sel = window.getSelection();
      if (sel.anchorNode && sel.extend && contains(cm.display.lineDiv, sel.anchorNode)) {
        result.anchorNode = sel.anchorNode;
        result.anchorOffset = sel.anchorOffset;
        result.focusNode = sel.focusNode;
        result.focusOffset = sel.focusOffset;
      }
    }
    return result
  }

  function restoreSelection(snapshot) {
    if (!snapshot || !snapshot.activeElt || snapshot.activeElt == activeElt()) { return }
    snapshot.activeElt.focus();
    if (!/^(INPUT|TEXTAREA)$/.test(snapshot.activeElt.nodeName) &&
        snapshot.anchorNode && contains(document.body, snapshot.anchorNode) && contains(document.body, snapshot.focusNode)) {
      var sel = window.getSelection(), range = document.createRange();
      range.setEnd(snapshot.anchorNode, snapshot.anchorOffset);
      range.collapse(false);
      sel.removeAllRanges();
      sel.addRange(range);
      sel.extend(snapshot.focusNode, snapshot.focusOffset);
    }
  }

  // Does the actual updating of the line display. Bails out
  // (returning false) when there is nothing to be done and forced is
  // false.
  function updateDisplayIfNeeded(cm, update) {
    var display = cm.display, doc = cm.doc;

    if (update.editorIsHidden) {
      resetView(cm);
      return false
    }

    // Bail out if the visible area is already rendered and nothing changed.
    if (!update.force &&
        update.visible.from >= display.viewFrom && update.visible.to <= display.viewTo &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo) &&
        display.renderedView == display.view && countDirtyView(cm) == 0)
      { return false }

    if (maybeUpdateLineNumberWidth(cm)) {
      resetView(cm);
      update.dims = getDimensions(cm);
    }

    // Compute a suitable new viewport (from & to)
    var end = doc.first + doc.size;
    var from = Math.max(update.visible.from - cm.options.viewportMargin, doc.first);
    var to = Math.min(end, update.visible.to + cm.options.viewportMargin);
    if (display.viewFrom < from && from - display.viewFrom < 20) { from = Math.max(doc.first, display.viewFrom); }
    if (display.viewTo > to && display.viewTo - to < 20) { to = Math.min(end, display.viewTo); }
    if (sawCollapsedSpans) {
      from = visualLineNo(cm.doc, from);
      to = visualLineEndNo(cm.doc, to);
    }

    var different = from != display.viewFrom || to != display.viewTo ||
      display.lastWrapHeight != update.wrapperHeight || display.lastWrapWidth != update.wrapperWidth;
    adjustView(cm, from, to);

    display.viewOffset = heightAtLine(getLine(cm.doc, display.viewFrom));
    // Position the mover div to align with the current scroll position
    cm.display.mover.style.top = display.viewOffset + "px";

    var toUpdate = countDirtyView(cm);
    if (!different && toUpdate == 0 && !update.force && display.renderedView == display.view &&
        (display.updateLineNumbers == null || display.updateLineNumbers >= display.viewTo))
      { return false }

    // For big changes, we hide the enclosing element during the
    // update, since that speeds up the operations on most browsers.
    var selSnapshot = selectionSnapshot(cm);
    if (toUpdate > 4) { display.lineDiv.style.display = "none"; }
    patchDisplay(cm, display.updateLineNumbers, update.dims);
    if (toUpdate > 4) { display.lineDiv.style.display = ""; }
    display.renderedView = display.view;
    // There might have been a widget with a focused element that got
    // hidden or updated, if so re-focus it.
    restoreSelection(selSnapshot);

    // Prevent selection and cursors from interfering with the scroll
    // width and height.
    removeChildren(display.cursorDiv);
    removeChildren(display.selectionDiv);
    display.gutters.style.height = display.sizer.style.minHeight = 0;

    if (different) {
      display.lastWrapHeight = update.wrapperHeight;
      display.lastWrapWidth = update.wrapperWidth;
      startWorker(cm, 400);
    }

    display.updateLineNumbers = null;

    return true
  }

  function postUpdateDisplay(cm, update) {
    var viewport = update.viewport;

    for (var first = true;; first = false) {
      if (!first || !cm.options.lineWrapping || update.oldDisplayWidth == displayWidth(cm)) {
        // Clip forced viewport to actual scrollable area.
        if (viewport && viewport.top != null)
          { viewport = {top: Math.min(cm.doc.height + paddingVert(cm.display) - displayHeight(cm), viewport.top)}; }
        // Updated line heights might result in the drawn area not
        // actually covering the viewport. Keep looping until it does.
        update.visible = visibleLines(cm.display, cm.doc, viewport);
        if (update.visible.from >= cm.display.viewFrom && update.visible.to <= cm.display.viewTo)
          { break }
      } else if (first) {
        update.visible = visibleLines(cm.display, cm.doc, viewport);
      }
      if (!updateDisplayIfNeeded(cm, update)) { break }
      updateHeightsInViewport(cm);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.force = false;
    }

    update.signal(cm, "update", cm);
    if (cm.display.viewFrom != cm.display.reportedViewFrom || cm.display.viewTo != cm.display.reportedViewTo) {
      update.signal(cm, "viewportChange", cm, cm.display.viewFrom, cm.display.viewTo);
      cm.display.reportedViewFrom = cm.display.viewFrom; cm.display.reportedViewTo = cm.display.viewTo;
    }
  }

  function updateDisplaySimple(cm, viewport) {
    var update = new DisplayUpdate(cm, viewport);
    if (updateDisplayIfNeeded(cm, update)) {
      updateHeightsInViewport(cm);
      postUpdateDisplay(cm, update);
      var barMeasure = measureForScrollbars(cm);
      updateSelection(cm);
      updateScrollbars(cm, barMeasure);
      setDocumentHeight(cm, barMeasure);
      update.finish();
    }
  }

  // Sync the actual display DOM structure with display.view, removing
  // nodes for lines that are no longer in view, and creating the ones
  // that are not there yet, and updating the ones that are out of
  // date.
  function patchDisplay(cm, updateNumbersFrom, dims) {
    var display = cm.display, lineNumbers = cm.options.lineNumbers;
    var container = display.lineDiv, cur = container.firstChild;

    function rm(node) {
      var next = node.nextSibling;
      // Works around a throw-scroll bug in OS X Webkit
      if (webkit && mac && cm.display.currentWheelTarget == node)
        { node.style.display = "none"; }
      else
        { node.parentNode.removeChild(node); }
      return next
    }

    var view = display.view, lineN = display.viewFrom;
    // Loop over the elements in the view, syncing cur (the DOM nodes
    // in display.lineDiv) with the view as we go.
    for (var i = 0; i < view.length; i++) {
      var lineView = view[i];
      if (lineView.hidden) ; else if (!lineView.node || lineView.node.parentNode != container) { // Not drawn yet
        var node = buildLineElement(cm, lineView, lineN, dims);
        container.insertBefore(node, cur);
      } else { // Already drawn
        while (cur != lineView.node) { cur = rm(cur); }
        var updateNumber = lineNumbers && updateNumbersFrom != null &&
          updateNumbersFrom <= lineN && lineView.lineNumber;
        if (lineView.changes) {
          if (indexOf(lineView.changes, "gutter") > -1) { updateNumber = false; }
          updateLineForChanges(cm, lineView, lineN, dims);
        }
        if (updateNumber) {
          removeChildren(lineView.lineNumber);
          lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options, lineN)));
        }
        cur = lineView.node.nextSibling;
      }
      lineN += lineView.size;
    }
    while (cur) { cur = rm(cur); }
  }

  function updateGutterSpace(display) {
    var width = display.gutters.offsetWidth;
    display.sizer.style.marginLeft = width + "px";
  }

  function setDocumentHeight(cm, measure) {
    cm.display.sizer.style.minHeight = measure.docHeight + "px";
    cm.display.heightForcer.style.top = measure.docHeight + "px";
    cm.display.gutters.style.height = (measure.docHeight + cm.display.barHeight + scrollGap(cm)) + "px";
  }

  // Re-align line numbers and gutter marks to compensate for
  // horizontal scrolling.
  function alignHorizontally(cm) {
    var display = cm.display, view = display.view;
    if (!display.alignWidgets && (!display.gutters.firstChild || !cm.options.fixedGutter)) { return }
    var comp = compensateForHScroll(display) - display.scroller.scrollLeft + cm.doc.scrollLeft;
    var gutterW = display.gutters.offsetWidth, left = comp + "px";
    for (var i = 0; i < view.length; i++) { if (!view[i].hidden) {
      if (cm.options.fixedGutter) {
        if (view[i].gutter)
          { view[i].gutter.style.left = left; }
        if (view[i].gutterBackground)
          { view[i].gutterBackground.style.left = left; }
      }
      var align = view[i].alignable;
      if (align) { for (var j = 0; j < align.length; j++)
        { align[j].style.left = left; } }
    } }
    if (cm.options.fixedGutter)
      { display.gutters.style.left = (comp + gutterW) + "px"; }
  }

  // Used to ensure that the line number gutter is still the right
  // size for the current document size. Returns true when an update
  // is needed.
  function maybeUpdateLineNumberWidth(cm) {
    if (!cm.options.lineNumbers) { return false }
    var doc = cm.doc, last = lineNumberFor(cm.options, doc.first + doc.size - 1), display = cm.display;
    if (last.length != display.lineNumChars) {
      var test = display.measure.appendChild(elt("div", [elt("div", last)],
                                                 "CodeMirror-linenumber CodeMirror-gutter-elt"));
      var innerW = test.firstChild.offsetWidth, padding = test.offsetWidth - innerW;
      display.lineGutter.style.width = "";
      display.lineNumInnerWidth = Math.max(innerW, display.lineGutter.offsetWidth - padding) + 1;
      display.lineNumWidth = display.lineNumInnerWidth + padding;
      display.lineNumChars = display.lineNumInnerWidth ? last.length : -1;
      display.lineGutter.style.width = display.lineNumWidth + "px";
      updateGutterSpace(cm.display);
      return true
    }
    return false
  }

  function getGutters(gutters, lineNumbers) {
    var result = [], sawLineNumbers = false;
    for (var i = 0; i < gutters.length; i++) {
      var name = gutters[i], style = null;
      if (typeof name != "string") { style = name.style; name = name.className; }
      if (name == "CodeMirror-linenumbers") {
        if (!lineNumbers) { continue }
        else { sawLineNumbers = true; }
      }
      result.push({className: name, style: style});
    }
    if (lineNumbers && !sawLineNumbers) { result.push({className: "CodeMirror-linenumbers", style: null}); }
    return result
  }

  // Rebuild the gutter elements, ensure the margin to the left of the
  // code matches their width.
  function renderGutters(display) {
    var gutters = display.gutters, specs = display.gutterSpecs;
    removeChildren(gutters);
    display.lineGutter = null;
    for (var i = 0; i < specs.length; ++i) {
      var ref = specs[i];
      var className = ref.className;
      var style = ref.style;
      var gElt = gutters.appendChild(elt("div", null, "CodeMirror-gutter " + className));
      if (style) { gElt.style.cssText = style; }
      if (className == "CodeMirror-linenumbers") {
        display.lineGutter = gElt;
        gElt.style.width = (display.lineNumWidth || 1) + "px";
      }
    }
    gutters.style.display = specs.length ? "" : "none";
    updateGutterSpace(display);
  }

  function updateGutters(cm) {
    renderGutters(cm.display);
    regChange(cm);
    alignHorizontally(cm);
  }

  // The display handles the DOM integration, both for input reading
  // and content drawing. It holds references to DOM nodes and
  // display-related state.

  function Display(place, doc, input, options) {
    var d = this;
    this.input = input;

    // Covers bottom-right square when both scrollbars are present.
    d.scrollbarFiller = elt("div", null, "CodeMirror-scrollbar-filler");
    d.scrollbarFiller.setAttribute("cm-not-content", "true");
    // Covers bottom of gutter when coverGutterNextToScrollbar is on
    // and h scrollbar is present.
    d.gutterFiller = elt("div", null, "CodeMirror-gutter-filler");
    d.gutterFiller.setAttribute("cm-not-content", "true");
    // Will contain the actual code, positioned to cover the viewport.
    d.lineDiv = eltP("div", null, "CodeMirror-code");
    // Elements are added to these to represent selection and cursors.
    d.selectionDiv = elt("div", null, null, "position: relative; z-index: 1");
    d.cursorDiv = elt("div", null, "CodeMirror-cursors");
    // A visibility: hidden element used to find the size of things.
    d.measure = elt("div", null, "CodeMirror-measure");
    // When lines outside of the viewport are measured, they are drawn in this.
    d.lineMeasure = elt("div", null, "CodeMirror-measure");
    // Wraps everything that needs to exist inside the vertically-padded coordinate system
    d.lineSpace = eltP("div", [d.measure, d.lineMeasure, d.selectionDiv, d.cursorDiv, d.lineDiv],
                      null, "position: relative; outline: none");
    var lines = eltP("div", [d.lineSpace], "CodeMirror-lines");
    // Moved around its parent to cover visible view.
    d.mover = elt("div", [lines], null, "position: relative");
    // Set to the height of the document, allowing scrolling.
    d.sizer = elt("div", [d.mover], "CodeMirror-sizer");
    d.sizerWidth = null;
    // Behavior of elts with overflow: auto and padding is
    // inconsistent across browsers. This is used to ensure the
    // scrollable area is big enough.
    d.heightForcer = elt("div", null, null, "position: absolute; height: " + scrollerGap + "px; width: 1px;");
    // Will contain the gutters, if any.
    d.gutters = elt("div", null, "CodeMirror-gutters");
    d.lineGutter = null;
    // Actual scrollable element.
    d.scroller = elt("div", [d.sizer, d.heightForcer, d.gutters], "CodeMirror-scroll");
    d.scroller.setAttribute("tabIndex", "-1");
    // The element in which the editor lives.
    d.wrapper = elt("div", [d.scrollbarFiller, d.gutterFiller, d.scroller], "CodeMirror");

    // Work around IE7 z-index bug (not perfect, hence IE7 not really being supported)
    if (ie && ie_version < 8) { d.gutters.style.zIndex = -1; d.scroller.style.paddingRight = 0; }
    if (!webkit && !(gecko && mobile)) { d.scroller.draggable = true; }

    if (place) {
      if (place.appendChild) { place.appendChild(d.wrapper); }
      else { place(d.wrapper); }
    }

    // Current rendered range (may be bigger than the view window).
    d.viewFrom = d.viewTo = doc.first;
    d.reportedViewFrom = d.reportedViewTo = doc.first;
    // Information about the rendered lines.
    d.view = [];
    d.renderedView = null;
    // Holds info about a single rendered line when it was rendered
    // for measurement, while not in view.
    d.externalMeasured = null;
    // Empty space (in pixels) above the view
    d.viewOffset = 0;
    d.lastWrapHeight = d.lastWrapWidth = 0;
    d.updateLineNumbers = null;

    d.nativeBarWidth = d.barHeight = d.barWidth = 0;
    d.scrollbarsClipped = false;

    // Used to only resize the line number gutter when necessary (when
    // the amount of lines crosses a boundary that makes its width change)
    d.lineNumWidth = d.lineNumInnerWidth = d.lineNumChars = null;
    // Set to true when a non-horizontal-scrolling line widget is
    // added. As an optimization, line widget aligning is skipped when
    // this is false.
    d.alignWidgets = false;

    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;

    // Tracks the maximum line length so that the horizontal scrollbar
    // can be kept static when scrolling.
    d.maxLine = null;
    d.maxLineLength = 0;
    d.maxLineChanged = false;

    // Used for measuring wheel scrolling granularity
    d.wheelDX = d.wheelDY = d.wheelStartX = d.wheelStartY = null;

    // True when shift is held down.
    d.shift = false;

    // Used to track whether anything happened since the context menu
    // was opened.
    d.selForContextMenu = null;

    d.activeTouch = null;

    d.gutterSpecs = getGutters(options.gutters, options.lineNumbers);
    renderGutters(d);

    input.init(d);
  }

  // Since the delta values reported on mouse wheel events are
  // unstandardized between browsers and even browser versions, and
  // generally horribly unpredictable, this code starts by measuring
  // the scroll effect that the first few mouse wheel events have,
  // and, from that, detects the way it can convert deltas to pixel
  // offsets afterwards.
  //
  // The reason we want to know the amount a wheel event will scroll
  // is that it gives us a chance to update the display before the
  // actual scrolling happens, reducing flickering.

  var wheelSamples = 0, wheelPixelsPerUnit = null;
  // Fill in a browser-detected starting value on browsers where we
  // know one. These don't have to be accurate -- the result of them
  // being wrong would just be a slight flicker on the first wheel
  // scroll (if it is large enough).
  if (ie) { wheelPixelsPerUnit = -.53; }
  else if (gecko) { wheelPixelsPerUnit = 15; }
  else if (chrome) { wheelPixelsPerUnit = -.7; }
  else if (safari) { wheelPixelsPerUnit = -1/3; }

  function wheelEventDelta(e) {
    var dx = e.wheelDeltaX, dy = e.wheelDeltaY;
    if (dx == null && e.detail && e.axis == e.HORIZONTAL_AXIS) { dx = e.detail; }
    if (dy == null && e.detail && e.axis == e.VERTICAL_AXIS) { dy = e.detail; }
    else if (dy == null) { dy = e.wheelDelta; }
    return {x: dx, y: dy}
  }
  function wheelEventPixels(e) {
    var delta = wheelEventDelta(e);
    delta.x *= wheelPixelsPerUnit;
    delta.y *= wheelPixelsPerUnit;
    return delta
  }

  function onScrollWheel(cm, e) {
    var delta = wheelEventDelta(e), dx = delta.x, dy = delta.y;

    var display = cm.display, scroll = display.scroller;
    // Quit if there's nothing to scroll here
    var canScrollX = scroll.scrollWidth > scroll.clientWidth;
    var canScrollY = scroll.scrollHeight > scroll.clientHeight;
    if (!(dx && canScrollX || dy && canScrollY)) { return }

    // Webkit browsers on OS X abort momentum scrolls when the target
    // of the scroll event is removed from the scrollable element.
    // This hack (see related code in patchDisplay) makes sure the
    // element is kept around.
    if (dy && mac && webkit) {
      outer: for (var cur = e.target, view = display.view; cur != scroll; cur = cur.parentNode) {
        for (var i = 0; i < view.length; i++) {
          if (view[i].node == cur) {
            cm.display.currentWheelTarget = cur;
            break outer
          }
        }
      }
    }

    // On some browsers, horizontal scrolling will cause redraws to
    // happen before the gutter has been realigned, causing it to
    // wriggle around in a most unseemly way. When we have an
    // estimated pixels/delta value, we just handle horizontal
    // scrolling entirely here. It'll be slightly off from native, but
    // better than glitching out.
    if (dx && !gecko && !presto && wheelPixelsPerUnit != null) {
      if (dy && canScrollY)
        { updateScrollTop(cm, Math.max(0, scroll.scrollTop + dy * wheelPixelsPerUnit)); }
      setScrollLeft(cm, Math.max(0, scroll.scrollLeft + dx * wheelPixelsPerUnit));
      // Only prevent default scrolling if vertical scrolling is
      // actually possible. Otherwise, it causes vertical scroll
      // jitter on OSX trackpads when deltaX is small and deltaY
      // is large (issue #3579)
      if (!dy || (dy && canScrollY))
        { e_preventDefault(e); }
      display.wheelStartX = null; // Abort measurement, if in progress
      return
    }

    // 'Project' the visible viewport to cover the area that is being
    // scrolled into view (if we know enough to estimate it).
    if (dy && wheelPixelsPerUnit != null) {
      var pixels = dy * wheelPixelsPerUnit;
      var top = cm.doc.scrollTop, bot = top + display.wrapper.clientHeight;
      if (pixels < 0) { top = Math.max(0, top + pixels - 50); }
      else { bot = Math.min(cm.doc.height, bot + pixels + 50); }
      updateDisplaySimple(cm, {top: top, bottom: bot});
    }

    if (wheelSamples < 20) {
      if (display.wheelStartX == null) {
        display.wheelStartX = scroll.scrollLeft; display.wheelStartY = scroll.scrollTop;
        display.wheelDX = dx; display.wheelDY = dy;
        setTimeout(function () {
          if (display.wheelStartX == null) { return }
          var movedX = scroll.scrollLeft - display.wheelStartX;
          var movedY = scroll.scrollTop - display.wheelStartY;
          var sample = (movedY && display.wheelDY && movedY / display.wheelDY) ||
            (movedX && display.wheelDX && movedX / display.wheelDX);
          display.wheelStartX = display.wheelStartY = null;
          if (!sample) { return }
          wheelPixelsPerUnit = (wheelPixelsPerUnit * wheelSamples + sample) / (wheelSamples + 1);
          ++wheelSamples;
        }, 200);
      } else {
        display.wheelDX += dx; display.wheelDY += dy;
      }
    }
  }

  // Selection objects are immutable. A new one is created every time
  // the selection changes. A selection is one or more non-overlapping
  // (and non-touching) ranges, sorted, and an integer that indicates
  // which one is the primary selection (the one that's scrolled into
  // view, that getCursor returns, etc).
  var Selection = function(ranges, primIndex) {
    this.ranges = ranges;
    this.primIndex = primIndex;
  };

  Selection.prototype.primary = function () { return this.ranges[this.primIndex] };

  Selection.prototype.equals = function (other) {
    if (other == this) { return true }
    if (other.primIndex != this.primIndex || other.ranges.length != this.ranges.length) { return false }
    for (var i = 0; i < this.ranges.length; i++) {
      var here = this.ranges[i], there = other.ranges[i];
      if (!equalCursorPos(here.anchor, there.anchor) || !equalCursorPos(here.head, there.head)) { return false }
    }
    return true
  };

  Selection.prototype.deepCopy = function () {
    var out = [];
    for (var i = 0; i < this.ranges.length; i++)
      { out[i] = new Range(copyPos(this.ranges[i].anchor), copyPos(this.ranges[i].head)); }
    return new Selection(out, this.primIndex)
  };

  Selection.prototype.somethingSelected = function () {
    for (var i = 0; i < this.ranges.length; i++)
      { if (!this.ranges[i].empty()) { return true } }
    return false
  };

  Selection.prototype.contains = function (pos, end) {
    if (!end) { end = pos; }
    for (var i = 0; i < this.ranges.length; i++) {
      var range = this.ranges[i];
      if (cmp(end, range.from()) >= 0 && cmp(pos, range.to()) <= 0)
        { return i }
    }
    return -1
  };

  var Range = function(anchor, head) {
    this.anchor = anchor; this.head = head;
  };

  Range.prototype.from = function () { return minPos(this.anchor, this.head) };
  Range.prototype.to = function () { return maxPos(this.anchor, this.head) };
  Range.prototype.empty = function () { return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch };

  // Take an unsorted, potentially overlapping set of ranges, and
  // build a selection out of it. 'Consumes' ranges array (modifying
  // it).
  function normalizeSelection(cm, ranges, primIndex) {
    var mayTouch = cm && cm.options.selectionsMayTouch;
    var prim = ranges[primIndex];
    ranges.sort(function (a, b) { return cmp(a.from(), b.from()); });
    primIndex = indexOf(ranges, prim);
    for (var i = 1; i < ranges.length; i++) {
      var cur = ranges[i], prev = ranges[i - 1];
      var diff = cmp(prev.to(), cur.from());
      if (mayTouch && !cur.empty() ? diff > 0 : diff >= 0) {
        var from = minPos(prev.from(), cur.from()), to = maxPos(prev.to(), cur.to());
        var inv = prev.empty() ? cur.from() == cur.head : prev.from() == prev.head;
        if (i <= primIndex) { --primIndex; }
        ranges.splice(--i, 2, new Range(inv ? to : from, inv ? from : to));
      }
    }
    return new Selection(ranges, primIndex)
  }

  function simpleSelection(anchor, head) {
    return new Selection([new Range(anchor, head || anchor)], 0)
  }

  // Compute the position of the end of a change (its 'to' property
  // refers to the pre-change end).
  function changeEnd(change) {
    if (!change.text) { return change.to }
    return Pos(change.from.line + change.text.length - 1,
               lst(change.text).length + (change.text.length == 1 ? change.from.ch : 0))
  }

  // Adjust a position to refer to the post-change position of the
  // same text, or the end of the change if the change covers it.
  function adjustForChange(pos, change) {
    if (cmp(pos, change.from) < 0) { return pos }
    if (cmp(pos, change.to) <= 0) { return changeEnd(change) }

    var line = pos.line + change.text.length - (change.to.line - change.from.line) - 1, ch = pos.ch;
    if (pos.line == change.to.line) { ch += changeEnd(change).ch - change.to.ch; }
    return Pos(line, ch)
  }

  function computeSelAfterChange(doc, change) {
    var out = [];
    for (var i = 0; i < doc.sel.ranges.length; i++) {
      var range = doc.sel.ranges[i];
      out.push(new Range(adjustForChange(range.anchor, change),
                         adjustForChange(range.head, change)));
    }
    return normalizeSelection(doc.cm, out, doc.sel.primIndex)
  }

  function offsetPos(pos, old, nw) {
    if (pos.line == old.line)
      { return Pos(nw.line, pos.ch - old.ch + nw.ch) }
    else
      { return Pos(nw.line + (pos.line - old.line), pos.ch) }
  }

  // Used by replaceSelections to allow moving the selection to the
  // start or around the replaced test. Hint may be "start" or "around".
  function computeReplacedSel(doc, changes, hint) {
    var out = [];
    var oldPrev = Pos(doc.first, 0), newPrev = oldPrev;
    for (var i = 0; i < changes.length; i++) {
      var change = changes[i];
      var from = offsetPos(change.from, oldPrev, newPrev);
      var to = offsetPos(changeEnd(change), oldPrev, newPrev);
      oldPrev = change.to;
      newPrev = to;
      if (hint == "around") {
        var range = doc.sel.ranges[i], inv = cmp(range.head, range.anchor) < 0;
        out[i] = new Range(inv ? to : from, inv ? from : to);
      } else {
        out[i] = new Range(from, from);
      }
    }
    return new Selection(out, doc.sel.primIndex)
  }

  // Used to get the editor into a consistent state again when options change.

  function loadMode(cm) {
    cm.doc.mode = getMode(cm.options, cm.doc.modeOption);
    resetModeState(cm);
  }

  function resetModeState(cm) {
    cm.doc.iter(function (line) {
      if (line.stateAfter) { line.stateAfter = null; }
      if (line.styles) { line.styles = null; }
    });
    cm.doc.modeFrontier = cm.doc.highlightFrontier = cm.doc.first;
    startWorker(cm, 100);
    cm.state.modeGen++;
    if (cm.curOp) { regChange(cm); }
  }

  // DOCUMENT DATA STRUCTURE

  // By default, updates that start and end at the beginning of a line
  // are treated specially, in order to make the association of line
  // widgets and marker elements with the text behave more intuitive.
  function isWholeLineUpdate(doc, change) {
    return change.from.ch == 0 && change.to.ch == 0 && lst(change.text) == "" &&
      (!doc.cm || doc.cm.options.wholeLineUpdateBefore)
  }

  // Perform a change on the document data structure.
  function updateDoc(doc, change, markedSpans, estimateHeight) {
    function spansFor(n) {return markedSpans ? markedSpans[n] : null}
    function update(line, text, spans) {
      updateLine(line, text, spans, estimateHeight);
      signalLater(line, "change", line, change);
    }
    function linesFor(start, end) {
      var result = [];
      for (var i = start; i < end; ++i)
        { result.push(new Line(text[i], spansFor(i), estimateHeight)); }
      return result
    }

    var from = change.from, to = change.to, text = change.text;
    var firstLine = getLine(doc, from.line), lastLine = getLine(doc, to.line);
    var lastText = lst(text), lastSpans = spansFor(text.length - 1), nlines = to.line - from.line;

    // Adjust the line structure
    if (change.full) {
      doc.insert(0, linesFor(0, text.length));
      doc.remove(text.length, doc.size - text.length);
    } else if (isWholeLineUpdate(doc, change)) {
      // This is a whole-line replace. Treated specially to make
      // sure line objects move the way they are supposed to.
      var added = linesFor(0, text.length - 1);
      update(lastLine, lastLine.text, lastSpans);
      if (nlines) { doc.remove(from.line, nlines); }
      if (added.length) { doc.insert(from.line, added); }
    } else if (firstLine == lastLine) {
      if (text.length == 1) {
        update(firstLine, firstLine.text.slice(0, from.ch) + lastText + firstLine.text.slice(to.ch), lastSpans);
      } else {
        var added$1 = linesFor(1, text.length - 1);
        added$1.push(new Line(lastText + firstLine.text.slice(to.ch), lastSpans, estimateHeight));
        update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
        doc.insert(from.line + 1, added$1);
      }
    } else if (text.length == 1) {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0] + lastLine.text.slice(to.ch), spansFor(0));
      doc.remove(from.line + 1, nlines);
    } else {
      update(firstLine, firstLine.text.slice(0, from.ch) + text[0], spansFor(0));
      update(lastLine, lastText + lastLine.text.slice(to.ch), lastSpans);
      var added$2 = linesFor(1, text.length - 1);
      if (nlines > 1) { doc.remove(from.line + 1, nlines - 1); }
      doc.insert(from.line + 1, added$2);
    }

    signalLater(doc, "change", doc, change);
  }

  // Call f for all linked documents.
  function linkedDocs(doc, f, sharedHistOnly) {
    function propagate(doc, skip, sharedHist) {
      if (doc.linked) { for (var i = 0; i < doc.linked.length; ++i) {
        var rel = doc.linked[i];
        if (rel.doc == skip) { continue }
        var shared = sharedHist && rel.sharedHist;
        if (sharedHistOnly && !shared) { continue }
        f(rel.doc, shared);
        propagate(rel.doc, doc, shared);
      } }
    }
    propagate(doc, null, true);
  }

  // Attach a document to an editor.
  function attachDoc(cm, doc) {
    if (doc.cm) { throw new Error("This document is already in use.") }
    cm.doc = doc;
    doc.cm = cm;
    estimateLineHeights(cm);
    loadMode(cm);
    setDirectionClass(cm);
    if (!cm.options.lineWrapping) { findMaxLine(cm); }
    cm.options.mode = doc.modeOption;
    regChange(cm);
  }

  function setDirectionClass(cm) {
  (cm.doc.direction == "rtl" ? addClass : rmClass)(cm.display.lineDiv, "CodeMirror-rtl");
  }

  function directionChanged(cm) {
    runInOp(cm, function () {
      setDirectionClass(cm);
      regChange(cm);
    });
  }

  function History(startGen) {
    // Arrays of change events and selections. Doing something adds an
    // event to done and clears undo. Undoing moves events from done
    // to undone, redoing moves them in the other direction.
    this.done = []; this.undone = [];
    this.undoDepth = Infinity;
    // Used to track when changes can be merged into a single undo
    // event
    this.lastModTime = this.lastSelTime = 0;
    this.lastOp = this.lastSelOp = null;
    this.lastOrigin = this.lastSelOrigin = null;
    // Used by the isClean() method
    this.generation = this.maxGeneration = startGen || 1;
  }

  // Create a history change event from an updateDoc-style change
  // object.
  function historyChangeFromChange(doc, change) {
    var histChange = {from: copyPos(change.from), to: changeEnd(change), text: getBetween(doc, change.from, change.to)};
    attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1);
    linkedDocs(doc, function (doc) { return attachLocalSpans(doc, histChange, change.from.line, change.to.line + 1); }, true);
    return histChange
  }

  // Pop all selection events off the end of a history array. Stop at
  // a change event.
  function clearSelectionEvents(array) {
    while (array.length) {
      var last = lst(array);
      if (last.ranges) { array.pop(); }
      else { break }
    }
  }

  // Find the top change event in the history. Pop off selection
  // events that are in the way.
  function lastChangeEvent(hist, force) {
    if (force) {
      clearSelectionEvents(hist.done);
      return lst(hist.done)
    } else if (hist.done.length && !lst(hist.done).ranges) {
      return lst(hist.done)
    } else if (hist.done.length > 1 && !hist.done[hist.done.length - 2].ranges) {
      hist.done.pop();
      return lst(hist.done)
    }
  }

  // Register a change in the history. Merges changes that are within
  // a single operation, or are close together with an origin that
  // allows merging (starting with "+") into a single event.
  function addChangeToHistory(doc, change, selAfter, opId) {
    var hist = doc.history;
    hist.undone.length = 0;
    var time = +new Date, cur;
    var last;

    if ((hist.lastOp == opId ||
         hist.lastOrigin == change.origin && change.origin &&
         ((change.origin.charAt(0) == "+" && hist.lastModTime > time - (doc.cm ? doc.cm.options.historyEventDelay : 500)) ||
          change.origin.charAt(0) == "*")) &&
        (cur = lastChangeEvent(hist, hist.lastOp == opId))) {
      // Merge this change into the last event
      last = lst(cur.changes);
      if (cmp(change.from, change.to) == 0 && cmp(change.from, last.to) == 0) {
        // Optimized case for simple insertion -- don't want to add
        // new changesets for every character typed
        last.to = changeEnd(change);
      } else {
        // Add new sub-event
        cur.changes.push(historyChangeFromChange(doc, change));
      }
    } else {
      // Can not be merged, start a new event.
      var before = lst(hist.done);
      if (!before || !before.ranges)
        { pushSelectionToHistory(doc.sel, hist.done); }
      cur = {changes: [historyChangeFromChange(doc, change)],
             generation: hist.generation};
      hist.done.push(cur);
      while (hist.done.length > hist.undoDepth) {
        hist.done.shift();
        if (!hist.done[0].ranges) { hist.done.shift(); }
      }
    }
    hist.done.push(selAfter);
    hist.generation = ++hist.maxGeneration;
    hist.lastModTime = hist.lastSelTime = time;
    hist.lastOp = hist.lastSelOp = opId;
    hist.lastOrigin = hist.lastSelOrigin = change.origin;

    if (!last) { signal(doc, "historyAdded"); }
  }

  function selectionEventCanBeMerged(doc, origin, prev, sel) {
    var ch = origin.charAt(0);
    return ch == "*" ||
      ch == "+" &&
      prev.ranges.length == sel.ranges.length &&
      prev.somethingSelected() == sel.somethingSelected() &&
      new Date - doc.history.lastSelTime <= (doc.cm ? doc.cm.options.historyEventDelay : 500)
  }

  // Called whenever the selection changes, sets the new selection as
  // the pending selection in the history, and pushes the old pending
  // selection into the 'done' array when it was significantly
  // different (in number of selected ranges, emptiness, or time).
  function addSelectionToHistory(doc, sel, opId, options) {
    var hist = doc.history, origin = options && options.origin;

    // A new event is started when the previous origin does not match
    // the current, or the origins don't allow matching. Origins
    // starting with * are always merged, those starting with + are
    // merged when similar and close together in time.
    if (opId == hist.lastSelOp ||
        (origin && hist.lastSelOrigin == origin &&
         (hist.lastModTime == hist.lastSelTime && hist.lastOrigin == origin ||
          selectionEventCanBeMerged(doc, origin, lst(hist.done), sel))))
      { hist.done[hist.done.length - 1] = sel; }
    else
      { pushSelectionToHistory(sel, hist.done); }

    hist.lastSelTime = +new Date;
    hist.lastSelOrigin = origin;
    hist.lastSelOp = opId;
    if (options && options.clearRedo !== false)
      { clearSelectionEvents(hist.undone); }
  }

  function pushSelectionToHistory(sel, dest) {
    var top = lst(dest);
    if (!(top && top.ranges && top.equals(sel)))
      { dest.push(sel); }
  }

  // Used to store marked span information in the history.
  function attachLocalSpans(doc, change, from, to) {
    var existing = change["spans_" + doc.id], n = 0;
    doc.iter(Math.max(doc.first, from), Math.min(doc.first + doc.size, to), function (line) {
      if (line.markedSpans)
        { (existing || (existing = change["spans_" + doc.id] = {}))[n] = line.markedSpans; }
      ++n;
    });
  }

  // When un/re-doing restores text containing marked spans, those
  // that have been explicitly cleared should not be restored.
  function removeClearedSpans(spans) {
    if (!spans) { return null }
    var out;
    for (var i = 0; i < spans.length; ++i) {
      if (spans[i].marker.explicitlyCleared) { if (!out) { out = spans.slice(0, i); } }
      else if (out) { out.push(spans[i]); }
    }
    return !out ? spans : out.length ? out : null
  }

  // Retrieve and filter the old marked spans stored in a change event.
  function getOldSpans(doc, change) {
    var found = change["spans_" + doc.id];
    if (!found) { return null }
    var nw = [];
    for (var i = 0; i < change.text.length; ++i)
      { nw.push(removeClearedSpans(found[i])); }
    return nw
  }

  // Used for un/re-doing changes from the history. Combines the
  // result of computing the existing spans with the set of spans that
  // existed in the history (so that deleting around a span and then
  // undoing brings back the span).
  function mergeOldSpans(doc, change) {
    var old = getOldSpans(doc, change);
    var stretched = stretchSpansOverChange(doc, change);
    if (!old) { return stretched }
    if (!stretched) { return old }

    for (var i = 0; i < old.length; ++i) {
      var oldCur = old[i], stretchCur = stretched[i];
      if (oldCur && stretchCur) {
        spans: for (var j = 0; j < stretchCur.length; ++j) {
          var span = stretchCur[j];
          for (var k = 0; k < oldCur.length; ++k)
            { if (oldCur[k].marker == span.marker) { continue spans } }
          oldCur.push(span);
        }
      } else if (stretchCur) {
        old[i] = stretchCur;
      }
    }
    return old
  }

  // Used both to provide a JSON-safe object in .getHistory, and, when
  // detaching a document, to split the history in two
  function copyHistoryArray(events, newGroup, instantiateSel) {
    var copy = [];
    for (var i = 0; i < events.length; ++i) {
      var event = events[i];
      if (event.ranges) {
        copy.push(instantiateSel ? Selection.prototype.deepCopy.call(event) : event);
        continue
      }
      var changes = event.changes, newChanges = [];
      copy.push({changes: newChanges});
      for (var j = 0; j < changes.length; ++j) {
        var change = changes[j], m = (void 0);
        newChanges.push({from: change.from, to: change.to, text: change.text});
        if (newGroup) { for (var prop in change) { if (m = prop.match(/^spans_(\d+)$/)) {
          if (indexOf(newGroup, Number(m[1])) > -1) {
            lst(newChanges)[prop] = change[prop];
            delete change[prop];
          }
        } } }
      }
    }
    return copy
  }

  // The 'scroll' parameter given to many of these indicated whether
  // the new cursor position should be scrolled into view after
  // modifying the selection.

  // If shift is held or the extend flag is set, extends a range to
  // include a given position (and optionally a second position).
  // Otherwise, simply returns the range between the given positions.
  // Used for cursor motion and such.
  function extendRange(range, head, other, extend) {
    if (extend) {
      var anchor = range.anchor;
      if (other) {
        var posBefore = cmp(head, anchor) < 0;
        if (posBefore != (cmp(other, anchor) < 0)) {
          anchor = head;
          head = other;
        } else if (posBefore != (cmp(head, other) < 0)) {
          head = other;
        }
      }
      return new Range(anchor, head)
    } else {
      return new Range(other || head, head)
    }
  }

  // Extend the primary selection range, discard the rest.
  function extendSelection(doc, head, other, options, extend) {
    if (extend == null) { extend = doc.cm && (doc.cm.display.shift || doc.extend); }
    setSelection(doc, new Selection([extendRange(doc.sel.primary(), head, other, extend)], 0), options);
  }

  // Extend all selections (pos is an array of selections with length
  // equal the number of selections)
  function extendSelections(doc, heads, options) {
    var out = [];
    var extend = doc.cm && (doc.cm.display.shift || doc.extend);
    for (var i = 0; i < doc.sel.ranges.length; i++)
      { out[i] = extendRange(doc.sel.ranges[i], heads[i], null, extend); }
    var newSel = normalizeSelection(doc.cm, out, doc.sel.primIndex);
    setSelection(doc, newSel, options);
  }

  // Updates a single range in the selection.
  function replaceOneSelection(doc, i, range, options) {
    var ranges = doc.sel.ranges.slice(0);
    ranges[i] = range;
    setSelection(doc, normalizeSelection(doc.cm, ranges, doc.sel.primIndex), options);
  }

  // Reset the selection to a single range.
  function setSimpleSelection(doc, anchor, head, options) {
    setSelection(doc, simpleSelection(anchor, head), options);
  }

  // Give beforeSelectionChange handlers a change to influence a
  // selection update.
  function filterSelectionChange(doc, sel, options) {
    var obj = {
      ranges: sel.ranges,
      update: function(ranges) {
        this.ranges = [];
        for (var i = 0; i < ranges.length; i++)
          { this.ranges[i] = new Range(clipPos(doc, ranges[i].anchor),
                                     clipPos(doc, ranges[i].head)); }
      },
      origin: options && options.origin
    };
    signal(doc, "beforeSelectionChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeSelectionChange", doc.cm, obj); }
    if (obj.ranges != sel.ranges) { return normalizeSelection(doc.cm, obj.ranges, obj.ranges.length - 1) }
    else { return sel }
  }

  function setSelectionReplaceHistory(doc, sel, options) {
    var done = doc.history.done, last = lst(done);
    if (last && last.ranges) {
      done[done.length - 1] = sel;
      setSelectionNoUndo(doc, sel, options);
    } else {
      setSelection(doc, sel, options);
    }
  }

  // Set a new selection.
  function setSelection(doc, sel, options) {
    setSelectionNoUndo(doc, sel, options);
    addSelectionToHistory(doc, doc.sel, doc.cm ? doc.cm.curOp.id : NaN, options);
  }

  function setSelectionNoUndo(doc, sel, options) {
    if (hasHandler(doc, "beforeSelectionChange") || doc.cm && hasHandler(doc.cm, "beforeSelectionChange"))
      { sel = filterSelectionChange(doc, sel, options); }

    var bias = options && options.bias ||
      (cmp(sel.primary().head, doc.sel.primary().head) < 0 ? -1 : 1);
    setSelectionInner(doc, skipAtomicInSelection(doc, sel, bias, true));

    if (!(options && options.scroll === false) && doc.cm)
      { ensureCursorVisible(doc.cm); }
  }

  function setSelectionInner(doc, sel) {
    if (sel.equals(doc.sel)) { return }

    doc.sel = sel;

    if (doc.cm) {
      doc.cm.curOp.updateInput = 1;
      doc.cm.curOp.selectionChanged = true;
      signalCursorActivity(doc.cm);
    }
    signalLater(doc, "cursorActivity", doc);
  }

  // Verify that the selection does not partially select any atomic
  // marked ranges.
  function reCheckSelection(doc) {
    setSelectionInner(doc, skipAtomicInSelection(doc, doc.sel, null, false));
  }

  // Return a selection that does not partially select any atomic
  // ranges.
  function skipAtomicInSelection(doc, sel, bias, mayClear) {
    var out;
    for (var i = 0; i < sel.ranges.length; i++) {
      var range = sel.ranges[i];
      var old = sel.ranges.length == doc.sel.ranges.length && doc.sel.ranges[i];
      var newAnchor = skipAtomic(doc, range.anchor, old && old.anchor, bias, mayClear);
      var newHead = skipAtomic(doc, range.head, old && old.head, bias, mayClear);
      if (out || newAnchor != range.anchor || newHead != range.head) {
        if (!out) { out = sel.ranges.slice(0, i); }
        out[i] = new Range(newAnchor, newHead);
      }
    }
    return out ? normalizeSelection(doc.cm, out, sel.primIndex) : sel
  }

  function skipAtomicInner(doc, pos, oldPos, dir, mayClear) {
    var line = getLine(doc, pos.line);
    if (line.markedSpans) { for (var i = 0; i < line.markedSpans.length; ++i) {
      var sp = line.markedSpans[i], m = sp.marker;

      // Determine if we should prevent the cursor being placed to the left/right of an atomic marker
      // Historically this was determined using the inclusiveLeft/Right option, but the new way to control it
      // is with selectLeft/Right
      var preventCursorLeft = ("selectLeft" in m) ? !m.selectLeft : m.inclusiveLeft;
      var preventCursorRight = ("selectRight" in m) ? !m.selectRight : m.inclusiveRight;

      if ((sp.from == null || (preventCursorLeft ? sp.from <= pos.ch : sp.from < pos.ch)) &&
          (sp.to == null || (preventCursorRight ? sp.to >= pos.ch : sp.to > pos.ch))) {
        if (mayClear) {
          signal(m, "beforeCursorEnter");
          if (m.explicitlyCleared) {
            if (!line.markedSpans) { break }
            else {--i; continue}
          }
        }
        if (!m.atomic) { continue }

        if (oldPos) {
          var near = m.find(dir < 0 ? 1 : -1), diff = (void 0);
          if (dir < 0 ? preventCursorRight : preventCursorLeft)
            { near = movePos(doc, near, -dir, near && near.line == pos.line ? line : null); }
          if (near && near.line == pos.line && (diff = cmp(near, oldPos)) && (dir < 0 ? diff < 0 : diff > 0))
            { return skipAtomicInner(doc, near, pos, dir, mayClear) }
        }

        var far = m.find(dir < 0 ? -1 : 1);
        if (dir < 0 ? preventCursorLeft : preventCursorRight)
          { far = movePos(doc, far, dir, far.line == pos.line ? line : null); }
        return far ? skipAtomicInner(doc, far, pos, dir, mayClear) : null
      }
    } }
    return pos
  }

  // Ensure a given position is not inside an atomic range.
  function skipAtomic(doc, pos, oldPos, bias, mayClear) {
    var dir = bias || 1;
    var found = skipAtomicInner(doc, pos, oldPos, dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, dir, true)) ||
        skipAtomicInner(doc, pos, oldPos, -dir, mayClear) ||
        (!mayClear && skipAtomicInner(doc, pos, oldPos, -dir, true));
    if (!found) {
      doc.cantEdit = true;
      return Pos(doc.first, 0)
    }
    return found
  }

  function movePos(doc, pos, dir, line) {
    if (dir < 0 && pos.ch == 0) {
      if (pos.line > doc.first) { return clipPos(doc, Pos(pos.line - 1)) }
      else { return null }
    } else if (dir > 0 && pos.ch == (line || getLine(doc, pos.line)).text.length) {
      if (pos.line < doc.first + doc.size - 1) { return Pos(pos.line + 1, 0) }
      else { return null }
    } else {
      return new Pos(pos.line, pos.ch + dir)
    }
  }

  function selectAll(cm) {
    cm.setSelection(Pos(cm.firstLine(), 0), Pos(cm.lastLine()), sel_dontScroll);
  }

  // UPDATING

  // Allow "beforeChange" event handlers to influence a change
  function filterChange(doc, change, update) {
    var obj = {
      canceled: false,
      from: change.from,
      to: change.to,
      text: change.text,
      origin: change.origin,
      cancel: function () { return obj.canceled = true; }
    };
    if (update) { obj.update = function (from, to, text, origin) {
      if (from) { obj.from = clipPos(doc, from); }
      if (to) { obj.to = clipPos(doc, to); }
      if (text) { obj.text = text; }
      if (origin !== undefined) { obj.origin = origin; }
    }; }
    signal(doc, "beforeChange", doc, obj);
    if (doc.cm) { signal(doc.cm, "beforeChange", doc.cm, obj); }

    if (obj.canceled) {
      if (doc.cm) { doc.cm.curOp.updateInput = 2; }
      return null
    }
    return {from: obj.from, to: obj.to, text: obj.text, origin: obj.origin}
  }

  // Apply a change to a document, and add it to the document's
  // history, and propagating it to all linked documents.
  function makeChange(doc, change, ignoreReadOnly) {
    if (doc.cm) {
      if (!doc.cm.curOp) { return operation(doc.cm, makeChange)(doc, change, ignoreReadOnly) }
      if (doc.cm.state.suppressEdits) { return }
    }

    if (hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange")) {
      change = filterChange(doc, change, true);
      if (!change) { return }
    }

    // Possibly split or suppress the update based on the presence
    // of read-only spans in its range.
    var split = sawReadOnlySpans && !ignoreReadOnly && removeReadOnlyRanges(doc, change.from, change.to);
    if (split) {
      for (var i = split.length - 1; i >= 0; --i)
        { makeChangeInner(doc, {from: split[i].from, to: split[i].to, text: i ? [""] : change.text, origin: change.origin}); }
    } else {
      makeChangeInner(doc, change);
    }
  }

  function makeChangeInner(doc, change) {
    if (change.text.length == 1 && change.text[0] == "" && cmp(change.from, change.to) == 0) { return }
    var selAfter = computeSelAfterChange(doc, change);
    addChangeToHistory(doc, change, selAfter, doc.cm ? doc.cm.curOp.id : NaN);

    makeChangeSingleDoc(doc, change, selAfter, stretchSpansOverChange(doc, change));
    var rebased = [];

    linkedDocs(doc, function (doc, sharedHist) {
      if (!sharedHist && indexOf(rebased, doc.history) == -1) {
        rebaseHist(doc.history, change);
        rebased.push(doc.history);
      }
      makeChangeSingleDoc(doc, change, null, stretchSpansOverChange(doc, change));
    });
  }

  // Revert a change stored in a document's history.
  function makeChangeFromHistory(doc, type, allowSelectionOnly) {
    var suppress = doc.cm && doc.cm.state.suppressEdits;
    if (suppress && !allowSelectionOnly) { return }

    var hist = doc.history, event, selAfter = doc.sel;
    var source = type == "undo" ? hist.done : hist.undone, dest = type == "undo" ? hist.undone : hist.done;

    // Verify that there is a useable event (so that ctrl-z won't
    // needlessly clear selection events)
    var i = 0;
    for (; i < source.length; i++) {
      event = source[i];
      if (allowSelectionOnly ? event.ranges && !event.equals(doc.sel) : !event.ranges)
        { break }
    }
    if (i == source.length) { return }
    hist.lastOrigin = hist.lastSelOrigin = null;

    for (;;) {
      event = source.pop();
      if (event.ranges) {
        pushSelectionToHistory(event, dest);
        if (allowSelectionOnly && !event.equals(doc.sel)) {
          setSelection(doc, event, {clearRedo: false});
          return
        }
        selAfter = event;
      } else if (suppress) {
        source.push(event);
        return
      } else { break }
    }

    // Build up a reverse change object to add to the opposite history
    // stack (redo when undoing, and vice versa).
    var antiChanges = [];
    pushSelectionToHistory(selAfter, dest);
    dest.push({changes: antiChanges, generation: hist.generation});
    hist.generation = event.generation || ++hist.maxGeneration;

    var filter = hasHandler(doc, "beforeChange") || doc.cm && hasHandler(doc.cm, "beforeChange");

    var loop = function ( i ) {
      var change = event.changes[i];
      change.origin = type;
      if (filter && !filterChange(doc, change, false)) {
        source.length = 0;
        return {}
      }

      antiChanges.push(historyChangeFromChange(doc, change));

      var after = i ? computeSelAfterChange(doc, change) : lst(source);
      makeChangeSingleDoc(doc, change, after, mergeOldSpans(doc, change));
      if (!i && doc.cm) { doc.cm.scrollIntoView({from: change.from, to: changeEnd(change)}); }
      var rebased = [];

      // Propagate to the linked documents
      linkedDocs(doc, function (doc, sharedHist) {
        if (!sharedHist && indexOf(rebased, doc.history) == -1) {
          rebaseHist(doc.history, change);
          rebased.push(doc.history);
        }
        makeChangeSingleDoc(doc, change, null, mergeOldSpans(doc, change));
      });
    };

    for (var i$1 = event.changes.length - 1; i$1 >= 0; --i$1) {
      var returned = loop( i$1 );

      if ( returned ) return returned.v;
    }
  }

  // Sub-views need their line numbers shifted when text is added
  // above or below them in the parent document.
  function shiftDoc(doc, distance) {
    if (distance == 0) { return }
    doc.first += distance;
    doc.sel = new Selection(map(doc.sel.ranges, function (range) { return new Range(
      Pos(range.anchor.line + distance, range.anchor.ch),
      Pos(range.head.line + distance, range.head.ch)
    ); }), doc.sel.primIndex);
    if (doc.cm) {
      regChange(doc.cm, doc.first, doc.first - distance, distance);
      for (var d = doc.cm.display, l = d.viewFrom; l < d.viewTo; l++)
        { regLineChange(doc.cm, l, "gutter"); }
    }
  }

  // More lower-level change function, handling only a single document
  // (not linked ones).
  function makeChangeSingleDoc(doc, change, selAfter, spans) {
    if (doc.cm && !doc.cm.curOp)
      { return operation(doc.cm, makeChangeSingleDoc)(doc, change, selAfter, spans) }

    if (change.to.line < doc.first) {
      shiftDoc(doc, change.text.length - 1 - (change.to.line - change.from.line));
      return
    }
    if (change.from.line > doc.lastLine()) { return }

    // Clip the change to the size of this doc
    if (change.from.line < doc.first) {
      var shift = change.text.length - 1 - (doc.first - change.from.line);
      shiftDoc(doc, shift);
      change = {from: Pos(doc.first, 0), to: Pos(change.to.line + shift, change.to.ch),
                text: [lst(change.text)], origin: change.origin};
    }
    var last = doc.lastLine();
    if (change.to.line > last) {
      change = {from: change.from, to: Pos(last, getLine(doc, last).text.length),
                text: [change.text[0]], origin: change.origin};
    }

    change.removed = getBetween(doc, change.from, change.to);

    if (!selAfter) { selAfter = computeSelAfterChange(doc, change); }
    if (doc.cm) { makeChangeSingleDocInEditor(doc.cm, change, spans); }
    else { updateDoc(doc, change, spans); }
    setSelectionNoUndo(doc, selAfter, sel_dontScroll);

    if (doc.cantEdit && skipAtomic(doc, Pos(doc.firstLine(), 0)))
      { doc.cantEdit = false; }
  }

  // Handle the interaction of a change to a document with the editor
  // that this document is part of.
  function makeChangeSingleDocInEditor(cm, change, spans) {
    var doc = cm.doc, display = cm.display, from = change.from, to = change.to;

    var recomputeMaxLength = false, checkWidthStart = from.line;
    if (!cm.options.lineWrapping) {
      checkWidthStart = lineNo(visualLine(getLine(doc, from.line)));
      doc.iter(checkWidthStart, to.line + 1, function (line) {
        if (line == display.maxLine) {
          recomputeMaxLength = true;
          return true
        }
      });
    }

    if (doc.sel.contains(change.from, change.to) > -1)
      { signalCursorActivity(cm); }

    updateDoc(doc, change, spans, estimateHeight(cm));

    if (!cm.options.lineWrapping) {
      doc.iter(checkWidthStart, from.line + change.text.length, function (line) {
        var len = lineLength(line);
        if (len > display.maxLineLength) {
          display.maxLine = line;
          display.maxLineLength = len;
          display.maxLineChanged = true;
          recomputeMaxLength = false;
        }
      });
      if (recomputeMaxLength) { cm.curOp.updateMaxLine = true; }
    }

    retreatFrontier(doc, from.line);
    startWorker(cm, 400);

    var lendiff = change.text.length - (to.line - from.line) - 1;
    // Remember that these lines changed, for updating the display
    if (change.full)
      { regChange(cm); }
    else if (from.line == to.line && change.text.length == 1 && !isWholeLineUpdate(cm.doc, change))
      { regLineChange(cm, from.line, "text"); }
    else
      { regChange(cm, from.line, to.line + 1, lendiff); }

    var changesHandler = hasHandler(cm, "changes"), changeHandler = hasHandler(cm, "change");
    if (changeHandler || changesHandler) {
      var obj = {
        from: from, to: to,
        text: change.text,
        removed: change.removed,
        origin: change.origin
      };
      if (changeHandler) { signalLater(cm, "change", cm, obj); }
      if (changesHandler) { (cm.curOp.changeObjs || (cm.curOp.changeObjs = [])).push(obj); }
    }
    cm.display.selForContextMenu = null;
  }

  function replaceRange(doc, code, from, to, origin) {
    var assign;

    if (!to) { to = from; }
    if (cmp(to, from) < 0) { (assign = [to, from], from = assign[0], to = assign[1]); }
    if (typeof code == "string") { code = doc.splitLines(code); }
    makeChange(doc, {from: from, to: to, text: code, origin: origin});
  }

  // Rebasing/resetting history to deal with externally-sourced changes

  function rebaseHistSelSingle(pos, from, to, diff) {
    if (to < pos.line) {
      pos.line += diff;
    } else if (from < pos.line) {
      pos.line = from;
      pos.ch = 0;
    }
  }

  // Tries to rebase an array of history events given a change in the
  // document. If the change touches the same lines as the event, the
  // event, and everything 'behind' it, is discarded. If the change is
  // before the event, the event's positions are updated. Uses a
  // copy-on-write scheme for the positions, to avoid having to
  // reallocate them all on every rebase, but also avoid problems with
  // shared position objects being unsafely updated.
  function rebaseHistArray(array, from, to, diff) {
    for (var i = 0; i < array.length; ++i) {
      var sub = array[i], ok = true;
      if (sub.ranges) {
        if (!sub.copied) { sub = array[i] = sub.deepCopy(); sub.copied = true; }
        for (var j = 0; j < sub.ranges.length; j++) {
          rebaseHistSelSingle(sub.ranges[j].anchor, from, to, diff);
          rebaseHistSelSingle(sub.ranges[j].head, from, to, diff);
        }
        continue
      }
      for (var j$1 = 0; j$1 < sub.changes.length; ++j$1) {
        var cur = sub.changes[j$1];
        if (to < cur.from.line) {
          cur.from = Pos(cur.from.line + diff, cur.from.ch);
          cur.to = Pos(cur.to.line + diff, cur.to.ch);
        } else if (from <= cur.to.line) {
          ok = false;
          break
        }
      }
      if (!ok) {
        array.splice(0, i + 1);
        i = 0;
      }
    }
  }

  function rebaseHist(hist, change) {
    var from = change.from.line, to = change.to.line, diff = change.text.length - (to - from) - 1;
    rebaseHistArray(hist.done, from, to, diff);
    rebaseHistArray(hist.undone, from, to, diff);
  }

  // Utility for applying a change to a line by handle or number,
  // returning the number and optionally registering the line as
  // changed.
  function changeLine(doc, handle, changeType, op) {
    var no = handle, line = handle;
    if (typeof handle == "number") { line = getLine(doc, clipLine(doc, handle)); }
    else { no = lineNo(handle); }
    if (no == null) { return null }
    if (op(line, no) && doc.cm) { regLineChange(doc.cm, no, changeType); }
    return line
  }

  // The document is represented as a BTree consisting of leaves, with
  // chunk of lines in them, and branches, with up to ten leaves or
  // other branch nodes below them. The top node is always a branch
  // node, and is the document object itself (meaning it has
  // additional methods and properties).
  //
  // All nodes have parent links. The tree is used both to go from
  // line numbers to line objects, and to go from objects to numbers.
  // It also indexes by height, and is used to convert between height
  // and line object, and to find the total height of the document.
  //
  // See also http://marijnhaverbeke.nl/blog/codemirror-line-tree.html

  function LeafChunk(lines) {
    this.lines = lines;
    this.parent = null;
    var height = 0;
    for (var i = 0; i < lines.length; ++i) {
      lines[i].parent = this;
      height += lines[i].height;
    }
    this.height = height;
  }

  LeafChunk.prototype = {
    chunkSize: function() { return this.lines.length },

    // Remove the n lines at offset 'at'.
    removeInner: function(at, n) {
      for (var i = at, e = at + n; i < e; ++i) {
        var line = this.lines[i];
        this.height -= line.height;
        cleanUpLine(line);
        signalLater(line, "delete");
      }
      this.lines.splice(at, n);
    },

    // Helper used to collapse a small branch into a single leaf.
    collapse: function(lines) {
      lines.push.apply(lines, this.lines);
    },

    // Insert the given array of lines at offset 'at', count them as
    // having the given height.
    insertInner: function(at, lines, height) {
      this.height += height;
      this.lines = this.lines.slice(0, at).concat(lines).concat(this.lines.slice(at));
      for (var i = 0; i < lines.length; ++i) { lines[i].parent = this; }
    },

    // Used to iterate over a part of the tree.
    iterN: function(at, n, op) {
      for (var e = at + n; at < e; ++at)
        { if (op(this.lines[at])) { return true } }
    }
  };

  function BranchChunk(children) {
    this.children = children;
    var size = 0, height = 0;
    for (var i = 0; i < children.length; ++i) {
      var ch = children[i];
      size += ch.chunkSize(); height += ch.height;
      ch.parent = this;
    }
    this.size = size;
    this.height = height;
    this.parent = null;
  }

  BranchChunk.prototype = {
    chunkSize: function() { return this.size },

    removeInner: function(at, n) {
      this.size -= n;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var rm = Math.min(n, sz - at), oldHeight = child.height;
          child.removeInner(at, rm);
          this.height -= oldHeight - child.height;
          if (sz == rm) { this.children.splice(i--, 1); child.parent = null; }
          if ((n -= rm) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
      // If the result is smaller than 25 lines, ensure that it is a
      // single leaf node.
      if (this.size - n < 25 &&
          (this.children.length > 1 || !(this.children[0] instanceof LeafChunk))) {
        var lines = [];
        this.collapse(lines);
        this.children = [new LeafChunk(lines)];
        this.children[0].parent = this;
      }
    },

    collapse: function(lines) {
      for (var i = 0; i < this.children.length; ++i) { this.children[i].collapse(lines); }
    },

    insertInner: function(at, lines, height) {
      this.size += lines.length;
      this.height += height;
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at <= sz) {
          child.insertInner(at, lines, height);
          if (child.lines && child.lines.length > 50) {
            // To avoid memory thrashing when child.lines is huge (e.g. first view of a large file), it's never spliced.
            // Instead, small slices are taken. They're taken in order because sequential memory accesses are fastest.
            var remaining = child.lines.length % 25 + 25;
            for (var pos = remaining; pos < child.lines.length;) {
              var leaf = new LeafChunk(child.lines.slice(pos, pos += 25));
              child.height -= leaf.height;
              this.children.splice(++i, 0, leaf);
              leaf.parent = this;
            }
            child.lines = child.lines.slice(0, remaining);
            this.maybeSpill();
          }
          break
        }
        at -= sz;
      }
    },

    // When a node has grown, check whether it should be split.
    maybeSpill: function() {
      if (this.children.length <= 10) { return }
      var me = this;
      do {
        var spilled = me.children.splice(me.children.length - 5, 5);
        var sibling = new BranchChunk(spilled);
        if (!me.parent) { // Become the parent node
          var copy = new BranchChunk(me.children);
          copy.parent = me;
          me.children = [copy, sibling];
          me = copy;
       } else {
          me.size -= sibling.size;
          me.height -= sibling.height;
          var myIndex = indexOf(me.parent.children, me);
          me.parent.children.splice(myIndex + 1, 0, sibling);
        }
        sibling.parent = me.parent;
      } while (me.children.length > 10)
      me.parent.maybeSpill();
    },

    iterN: function(at, n, op) {
      for (var i = 0; i < this.children.length; ++i) {
        var child = this.children[i], sz = child.chunkSize();
        if (at < sz) {
          var used = Math.min(n, sz - at);
          if (child.iterN(at, used, op)) { return true }
          if ((n -= used) == 0) { break }
          at = 0;
        } else { at -= sz; }
      }
    }
  };

  // Line widgets are block elements displayed above or below a line.

  var LineWidget = function(doc, node, options) {
    if (options) { for (var opt in options) { if (options.hasOwnProperty(opt))
      { this[opt] = options[opt]; } } }
    this.doc = doc;
    this.node = node;
  };

  LineWidget.prototype.clear = function () {
    var cm = this.doc.cm, ws = this.line.widgets, line = this.line, no = lineNo(line);
    if (no == null || !ws) { return }
    for (var i = 0; i < ws.length; ++i) { if (ws[i] == this) { ws.splice(i--, 1); } }
    if (!ws.length) { line.widgets = null; }
    var height = widgetHeight(this);
    updateLineHeight(line, Math.max(0, line.height - height));
    if (cm) {
      runInOp(cm, function () {
        adjustScrollWhenAboveVisible(cm, line, -height);
        regLineChange(cm, no, "widget");
      });
      signalLater(cm, "lineWidgetCleared", cm, this, no);
    }
  };

  LineWidget.prototype.changed = function () {
      var this$1 = this;

    var oldH = this.height, cm = this.doc.cm, line = this.line;
    this.height = null;
    var diff = widgetHeight(this) - oldH;
    if (!diff) { return }
    if (!lineIsHidden(this.doc, line)) { updateLineHeight(line, line.height + diff); }
    if (cm) {
      runInOp(cm, function () {
        cm.curOp.forceUpdate = true;
        adjustScrollWhenAboveVisible(cm, line, diff);
        signalLater(cm, "lineWidgetChanged", cm, this$1, lineNo(line));
      });
    }
  };
  eventMixin(LineWidget);

  function adjustScrollWhenAboveVisible(cm, line, diff) {
    if (heightAtLine(line) < ((cm.curOp && cm.curOp.scrollTop) || cm.doc.scrollTop))
      { addToScrollTop(cm, diff); }
  }

  function addLineWidget(doc, handle, node, options) {
    var widget = new LineWidget(doc, node, options);
    var cm = doc.cm;
    if (cm && widget.noHScroll) { cm.display.alignWidgets = true; }
    changeLine(doc, handle, "widget", function (line) {
      var widgets = line.widgets || (line.widgets = []);
      if (widget.insertAt == null) { widgets.push(widget); }
      else { widgets.splice(Math.min(widgets.length - 1, Math.max(0, widget.insertAt)), 0, widget); }
      widget.line = line;
      if (cm && !lineIsHidden(doc, line)) {
        var aboveVisible = heightAtLine(line) < doc.scrollTop;
        updateLineHeight(line, line.height + widgetHeight(widget));
        if (aboveVisible) { addToScrollTop(cm, widget.height); }
        cm.curOp.forceUpdate = true;
      }
      return true
    });
    if (cm) { signalLater(cm, "lineWidgetAdded", cm, widget, typeof handle == "number" ? handle : lineNo(handle)); }
    return widget
  }

  // TEXTMARKERS

  // Created with markText and setBookmark methods. A TextMarker is a
  // handle that can be used to clear or find a marked position in the
  // document. Line objects hold arrays (markedSpans) containing
  // {from, to, marker} object pointing to such marker objects, and
  // indicating that such a marker is present on that line. Multiple
  // lines may point to the same marker when it spans across lines.
  // The spans will have null for their from/to properties when the
  // marker continues beyond the start/end of the line. Markers have
  // links back to the lines they currently touch.

  // Collapsed markers have unique ids, in order to be able to order
  // them, which is needed for uniquely determining an outer marker
  // when they overlap (they may nest, but not partially overlap).
  var nextMarkerId = 0;

  var TextMarker = function(doc, type) {
    this.lines = [];
    this.type = type;
    this.doc = doc;
    this.id = ++nextMarkerId;
  };

  // Clear the marker.
  TextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    var cm = this.doc.cm, withOp = cm && !cm.curOp;
    if (withOp) { startOperation(cm); }
    if (hasHandler(this, "clear")) {
      var found = this.find();
      if (found) { signalLater(this, "clear", found.from, found.to); }
    }
    var min = null, max = null;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (cm && !this.collapsed) { regLineChange(cm, lineNo(line), "text"); }
      else if (cm) {
        if (span.to != null) { max = lineNo(line); }
        if (span.from != null) { min = lineNo(line); }
      }
      line.markedSpans = removeMarkedSpan(line.markedSpans, span);
      if (span.from == null && this.collapsed && !lineIsHidden(this.doc, line) && cm)
        { updateLineHeight(line, textHeight(cm.display)); }
    }
    if (cm && this.collapsed && !cm.options.lineWrapping) { for (var i$1 = 0; i$1 < this.lines.length; ++i$1) {
      var visual = visualLine(this.lines[i$1]), len = lineLength(visual);
      if (len > cm.display.maxLineLength) {
        cm.display.maxLine = visual;
        cm.display.maxLineLength = len;
        cm.display.maxLineChanged = true;
      }
    } }

    if (min != null && cm && this.collapsed) { regChange(cm, min, max + 1); }
    this.lines.length = 0;
    this.explicitlyCleared = true;
    if (this.atomic && this.doc.cantEdit) {
      this.doc.cantEdit = false;
      if (cm) { reCheckSelection(cm.doc); }
    }
    if (cm) { signalLater(cm, "markerCleared", cm, this, min, max); }
    if (withOp) { endOperation(cm); }
    if (this.parent) { this.parent.clear(); }
  };

  // Find the position of the marker in the document. Returns a {from,
  // to} object by default. Side can be passed to get a specific side
  // -- 0 (both), -1 (left), or 1 (right). When lineObj is true, the
  // Pos objects returned contain a line object, rather than a line
  // number (used to prevent looking up the same line twice).
  TextMarker.prototype.find = function (side, lineObj) {
    if (side == null && this.type == "bookmark") { side = 1; }
    var from, to;
    for (var i = 0; i < this.lines.length; ++i) {
      var line = this.lines[i];
      var span = getMarkedSpanFor(line.markedSpans, this);
      if (span.from != null) {
        from = Pos(lineObj ? line : lineNo(line), span.from);
        if (side == -1) { return from }
      }
      if (span.to != null) {
        to = Pos(lineObj ? line : lineNo(line), span.to);
        if (side == 1) { return to }
      }
    }
    return from && {from: from, to: to}
  };

  // Signals that the marker's widget changed, and surrounding layout
  // should be recomputed.
  TextMarker.prototype.changed = function () {
      var this$1 = this;

    var pos = this.find(-1, true), widget = this, cm = this.doc.cm;
    if (!pos || !cm) { return }
    runInOp(cm, function () {
      var line = pos.line, lineN = lineNo(pos.line);
      var view = findViewForLine(cm, lineN);
      if (view) {
        clearLineMeasurementCacheFor(view);
        cm.curOp.selectionChanged = cm.curOp.forceUpdate = true;
      }
      cm.curOp.updateMaxLine = true;
      if (!lineIsHidden(widget.doc, line) && widget.height != null) {
        var oldHeight = widget.height;
        widget.height = null;
        var dHeight = widgetHeight(widget) - oldHeight;
        if (dHeight)
          { updateLineHeight(line, line.height + dHeight); }
      }
      signalLater(cm, "markerChanged", cm, this$1);
    });
  };

  TextMarker.prototype.attachLine = function (line) {
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp;
      if (!op.maybeHiddenMarkers || indexOf(op.maybeHiddenMarkers, this) == -1)
        { (op.maybeUnhiddenMarkers || (op.maybeUnhiddenMarkers = [])).push(this); }
    }
    this.lines.push(line);
  };

  TextMarker.prototype.detachLine = function (line) {
    this.lines.splice(indexOf(this.lines, line), 1);
    if (!this.lines.length && this.doc.cm) {
      var op = this.doc.cm.curOp
      ;(op.maybeHiddenMarkers || (op.maybeHiddenMarkers = [])).push(this);
    }
  };
  eventMixin(TextMarker);

  // Create a marker, wire it up to the right lines, and
  function markText(doc, from, to, options, type) {
    // Shared markers (across linked documents) are handled separately
    // (markTextShared will call out to this again, once per
    // document).
    if (options && options.shared) { return markTextShared(doc, from, to, options, type) }
    // Ensure we are in an operation.
    if (doc.cm && !doc.cm.curOp) { return operation(doc.cm, markText)(doc, from, to, options, type) }

    var marker = new TextMarker(doc, type), diff = cmp(from, to);
    if (options) { copyObj(options, marker, false); }
    // Don't connect empty markers unless clearWhenEmpty is false
    if (diff > 0 || diff == 0 && marker.clearWhenEmpty !== false)
      { return marker }
    if (marker.replacedWith) {
      // Showing up as a widget implies collapsed (widget replaces text)
      marker.collapsed = true;
      marker.widgetNode = eltP("span", [marker.replacedWith], "CodeMirror-widget");
      if (!options.handleMouseEvents) { marker.widgetNode.setAttribute("cm-ignore-events", "true"); }
      if (options.insertLeft) { marker.widgetNode.insertLeft = true; }
    }
    if (marker.collapsed) {
      if (conflictingCollapsedRange(doc, from.line, from, to, marker) ||
          from.line != to.line && conflictingCollapsedRange(doc, to.line, from, to, marker))
        { throw new Error("Inserting collapsed marker partially overlapping an existing one") }
      seeCollapsedSpans();
    }

    if (marker.addToHistory)
      { addChangeToHistory(doc, {from: from, to: to, origin: "markText"}, doc.sel, NaN); }

    var curLine = from.line, cm = doc.cm, updateMaxLine;
    doc.iter(curLine, to.line + 1, function (line) {
      if (cm && marker.collapsed && !cm.options.lineWrapping && visualLine(line) == cm.display.maxLine)
        { updateMaxLine = true; }
      if (marker.collapsed && curLine != from.line) { updateLineHeight(line, 0); }
      addMarkedSpan(line, new MarkedSpan(marker,
                                         curLine == from.line ? from.ch : null,
                                         curLine == to.line ? to.ch : null));
      ++curLine;
    });
    // lineIsHidden depends on the presence of the spans, so needs a second pass
    if (marker.collapsed) { doc.iter(from.line, to.line + 1, function (line) {
      if (lineIsHidden(doc, line)) { updateLineHeight(line, 0); }
    }); }

    if (marker.clearOnEnter) { on(marker, "beforeCursorEnter", function () { return marker.clear(); }); }

    if (marker.readOnly) {
      seeReadOnlySpans();
      if (doc.history.done.length || doc.history.undone.length)
        { doc.clearHistory(); }
    }
    if (marker.collapsed) {
      marker.id = ++nextMarkerId;
      marker.atomic = true;
    }
    if (cm) {
      // Sync editor state
      if (updateMaxLine) { cm.curOp.updateMaxLine = true; }
      if (marker.collapsed)
        { regChange(cm, from.line, to.line + 1); }
      else if (marker.className || marker.startStyle || marker.endStyle || marker.css ||
               marker.attributes || marker.title)
        { for (var i = from.line; i <= to.line; i++) { regLineChange(cm, i, "text"); } }
      if (marker.atomic) { reCheckSelection(cm.doc); }
      signalLater(cm, "markerAdded", cm, marker);
    }
    return marker
  }

  // SHARED TEXTMARKERS

  // A shared marker spans multiple linked documents. It is
  // implemented as a meta-marker-object controlling multiple normal
  // markers.
  var SharedTextMarker = function(markers, primary) {
    this.markers = markers;
    this.primary = primary;
    for (var i = 0; i < markers.length; ++i)
      { markers[i].parent = this; }
  };

  SharedTextMarker.prototype.clear = function () {
    if (this.explicitlyCleared) { return }
    this.explicitlyCleared = true;
    for (var i = 0; i < this.markers.length; ++i)
      { this.markers[i].clear(); }
    signalLater(this, "clear");
  };

  SharedTextMarker.prototype.find = function (side, lineObj) {
    return this.primary.find(side, lineObj)
  };
  eventMixin(SharedTextMarker);

  function markTextShared(doc, from, to, options, type) {
    options = copyObj(options);
    options.shared = false;
    var markers = [markText(doc, from, to, options, type)], primary = markers[0];
    var widget = options.widgetNode;
    linkedDocs(doc, function (doc) {
      if (widget) { options.widgetNode = widget.cloneNode(true); }
      markers.push(markText(doc, clipPos(doc, from), clipPos(doc, to), options, type));
      for (var i = 0; i < doc.linked.length; ++i)
        { if (doc.linked[i].isParent) { return } }
      primary = lst(markers);
    });
    return new SharedTextMarker(markers, primary)
  }

  function findSharedMarkers(doc) {
    return doc.findMarks(Pos(doc.first, 0), doc.clipPos(Pos(doc.lastLine())), function (m) { return m.parent; })
  }

  function copySharedMarkers(doc, markers) {
    for (var i = 0; i < markers.length; i++) {
      var marker = markers[i], pos = marker.find();
      var mFrom = doc.clipPos(pos.from), mTo = doc.clipPos(pos.to);
      if (cmp(mFrom, mTo)) {
        var subMark = markText(doc, mFrom, mTo, marker.primary, marker.primary.type);
        marker.markers.push(subMark);
        subMark.parent = marker;
      }
    }
  }

  function detachSharedMarkers(markers) {
    var loop = function ( i ) {
      var marker = markers[i], linked = [marker.primary.doc];
      linkedDocs(marker.primary.doc, function (d) { return linked.push(d); });
      for (var j = 0; j < marker.markers.length; j++) {
        var subMarker = marker.markers[j];
        if (indexOf(linked, subMarker.doc) == -1) {
          subMarker.parent = null;
          marker.markers.splice(j--, 1);
        }
      }
    };

    for (var i = 0; i < markers.length; i++) loop( i );
  }

  var nextDocId = 0;
  var Doc = function(text, mode, firstLine, lineSep, direction) {
    if (!(this instanceof Doc)) { return new Doc(text, mode, firstLine, lineSep, direction) }
    if (firstLine == null) { firstLine = 0; }

    BranchChunk.call(this, [new LeafChunk([new Line("", null)])]);
    this.first = firstLine;
    this.scrollTop = this.scrollLeft = 0;
    this.cantEdit = false;
    this.cleanGeneration = 1;
    this.modeFrontier = this.highlightFrontier = firstLine;
    var start = Pos(firstLine, 0);
    this.sel = simpleSelection(start);
    this.history = new History(null);
    this.id = ++nextDocId;
    this.modeOption = mode;
    this.lineSep = lineSep;
    this.direction = (direction == "rtl") ? "rtl" : "ltr";
    this.extend = false;

    if (typeof text == "string") { text = this.splitLines(text); }
    updateDoc(this, {from: start, to: start, text: text});
    setSelection(this, simpleSelection(start), sel_dontScroll);
  };

  Doc.prototype = createObj(BranchChunk.prototype, {
    constructor: Doc,
    // Iterate over the document. Supports two forms -- with only one
    // argument, it calls that for each line in the document. With
    // three, it iterates over the range given by the first two (with
    // the second being non-inclusive).
    iter: function(from, to, op) {
      if (op) { this.iterN(from - this.first, to - from, op); }
      else { this.iterN(this.first, this.first + this.size, from); }
    },

    // Non-public interface for adding and removing lines.
    insert: function(at, lines) {
      var height = 0;
      for (var i = 0; i < lines.length; ++i) { height += lines[i].height; }
      this.insertInner(at - this.first, lines, height);
    },
    remove: function(at, n) { this.removeInner(at - this.first, n); },

    // From here, the methods are part of the public interface. Most
    // are also available from CodeMirror (editor) instances.

    getValue: function(lineSep) {
      var lines = getLines(this, this.first, this.first + this.size);
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },
    setValue: docMethodOp(function(code) {
      var top = Pos(this.first, 0), last = this.first + this.size - 1;
      makeChange(this, {from: top, to: Pos(last, getLine(this, last).text.length),
                        text: this.splitLines(code), origin: "setValue", full: true}, true);
      if (this.cm) { scrollToCoords(this.cm, 0, 0); }
      setSelection(this, simpleSelection(top), sel_dontScroll);
    }),
    replaceRange: function(code, from, to, origin) {
      from = clipPos(this, from);
      to = to ? clipPos(this, to) : from;
      replaceRange(this, code, from, to, origin);
    },
    getRange: function(from, to, lineSep) {
      var lines = getBetween(this, clipPos(this, from), clipPos(this, to));
      if (lineSep === false) { return lines }
      return lines.join(lineSep || this.lineSeparator())
    },

    getLine: function(line) {var l = this.getLineHandle(line); return l && l.text},

    getLineHandle: function(line) {if (isLine(this, line)) { return getLine(this, line) }},
    getLineNumber: function(line) {return lineNo(line)},

    getLineHandleVisualStart: function(line) {
      if (typeof line == "number") { line = getLine(this, line); }
      return visualLine(line)
    },

    lineCount: function() {return this.size},
    firstLine: function() {return this.first},
    lastLine: function() {return this.first + this.size - 1},

    clipPos: function(pos) {return clipPos(this, pos)},

    getCursor: function(start) {
      var range = this.sel.primary(), pos;
      if (start == null || start == "head") { pos = range.head; }
      else if (start == "anchor") { pos = range.anchor; }
      else if (start == "end" || start == "to" || start === false) { pos = range.to(); }
      else { pos = range.from(); }
      return pos
    },
    listSelections: function() { return this.sel.ranges },
    somethingSelected: function() {return this.sel.somethingSelected()},

    setCursor: docMethodOp(function(line, ch, options) {
      setSimpleSelection(this, clipPos(this, typeof line == "number" ? Pos(line, ch || 0) : line), null, options);
    }),
    setSelection: docMethodOp(function(anchor, head, options) {
      setSimpleSelection(this, clipPos(this, anchor), clipPos(this, head || anchor), options);
    }),
    extendSelection: docMethodOp(function(head, other, options) {
      extendSelection(this, clipPos(this, head), other && clipPos(this, other), options);
    }),
    extendSelections: docMethodOp(function(heads, options) {
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    extendSelectionsBy: docMethodOp(function(f, options) {
      var heads = map(this.sel.ranges, f);
      extendSelections(this, clipPosArray(this, heads), options);
    }),
    setSelections: docMethodOp(function(ranges, primary, options) {
      if (!ranges.length) { return }
      var out = [];
      for (var i = 0; i < ranges.length; i++)
        { out[i] = new Range(clipPos(this, ranges[i].anchor),
                           clipPos(this, ranges[i].head)); }
      if (primary == null) { primary = Math.min(ranges.length - 1, this.sel.primIndex); }
      setSelection(this, normalizeSelection(this.cm, out, primary), options);
    }),
    addSelection: docMethodOp(function(anchor, head, options) {
      var ranges = this.sel.ranges.slice(0);
      ranges.push(new Range(clipPos(this, anchor), clipPos(this, head || anchor)));
      setSelection(this, normalizeSelection(this.cm, ranges, ranges.length - 1), options);
    }),

    getSelection: function(lineSep) {
      var ranges = this.sel.ranges, lines;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        lines = lines ? lines.concat(sel) : sel;
      }
      if (lineSep === false) { return lines }
      else { return lines.join(lineSep || this.lineSeparator()) }
    },
    getSelections: function(lineSep) {
      var parts = [], ranges = this.sel.ranges;
      for (var i = 0; i < ranges.length; i++) {
        var sel = getBetween(this, ranges[i].from(), ranges[i].to());
        if (lineSep !== false) { sel = sel.join(lineSep || this.lineSeparator()); }
        parts[i] = sel;
      }
      return parts
    },
    replaceSelection: function(code, collapse, origin) {
      var dup = [];
      for (var i = 0; i < this.sel.ranges.length; i++)
        { dup[i] = code; }
      this.replaceSelections(dup, collapse, origin || "+input");
    },
    replaceSelections: docMethodOp(function(code, collapse, origin) {
      var changes = [], sel = this.sel;
      for (var i = 0; i < sel.ranges.length; i++) {
        var range = sel.ranges[i];
        changes[i] = {from: range.from(), to: range.to(), text: this.splitLines(code[i]), origin: origin};
      }
      var newSel = collapse && collapse != "end" && computeReplacedSel(this, changes, collapse);
      for (var i$1 = changes.length - 1; i$1 >= 0; i$1--)
        { makeChange(this, changes[i$1]); }
      if (newSel) { setSelectionReplaceHistory(this, newSel); }
      else if (this.cm) { ensureCursorVisible(this.cm); }
    }),
    undo: docMethodOp(function() {makeChangeFromHistory(this, "undo");}),
    redo: docMethodOp(function() {makeChangeFromHistory(this, "redo");}),
    undoSelection: docMethodOp(function() {makeChangeFromHistory(this, "undo", true);}),
    redoSelection: docMethodOp(function() {makeChangeFromHistory(this, "redo", true);}),

    setExtending: function(val) {this.extend = val;},
    getExtending: function() {return this.extend},

    historySize: function() {
      var hist = this.history, done = 0, undone = 0;
      for (var i = 0; i < hist.done.length; i++) { if (!hist.done[i].ranges) { ++done; } }
      for (var i$1 = 0; i$1 < hist.undone.length; i$1++) { if (!hist.undone[i$1].ranges) { ++undone; } }
      return {undo: done, redo: undone}
    },
    clearHistory: function() {
      var this$1 = this;

      this.history = new History(this.history.maxGeneration);
      linkedDocs(this, function (doc) { return doc.history = this$1.history; }, true);
    },

    markClean: function() {
      this.cleanGeneration = this.changeGeneration(true);
    },
    changeGeneration: function(forceSplit) {
      if (forceSplit)
        { this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null; }
      return this.history.generation
    },
    isClean: function (gen) {
      return this.history.generation == (gen || this.cleanGeneration)
    },

    getHistory: function() {
      return {done: copyHistoryArray(this.history.done),
              undone: copyHistoryArray(this.history.undone)}
    },
    setHistory: function(histData) {
      var hist = this.history = new History(this.history.maxGeneration);
      hist.done = copyHistoryArray(histData.done.slice(0), null, true);
      hist.undone = copyHistoryArray(histData.undone.slice(0), null, true);
    },

    setGutterMarker: docMethodOp(function(line, gutterID, value) {
      return changeLine(this, line, "gutter", function (line) {
        var markers = line.gutterMarkers || (line.gutterMarkers = {});
        markers[gutterID] = value;
        if (!value && isEmpty(markers)) { line.gutterMarkers = null; }
        return true
      })
    }),

    clearGutter: docMethodOp(function(gutterID) {
      var this$1 = this;

      this.iter(function (line) {
        if (line.gutterMarkers && line.gutterMarkers[gutterID]) {
          changeLine(this$1, line, "gutter", function () {
            line.gutterMarkers[gutterID] = null;
            if (isEmpty(line.gutterMarkers)) { line.gutterMarkers = null; }
            return true
          });
        }
      });
    }),

    lineInfo: function(line) {
      var n;
      if (typeof line == "number") {
        if (!isLine(this, line)) { return null }
        n = line;
        line = getLine(this, line);
        if (!line) { return null }
      } else {
        n = lineNo(line);
        if (n == null) { return null }
      }
      return {line: n, handle: line, text: line.text, gutterMarkers: line.gutterMarkers,
              textClass: line.textClass, bgClass: line.bgClass, wrapClass: line.wrapClass,
              widgets: line.widgets}
    },

    addLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        if (!line[prop]) { line[prop] = cls; }
        else if (classTest(cls).test(line[prop])) { return false }
        else { line[prop] += " " + cls; }
        return true
      })
    }),
    removeLineClass: docMethodOp(function(handle, where, cls) {
      return changeLine(this, handle, where == "gutter" ? "gutter" : "class", function (line) {
        var prop = where == "text" ? "textClass"
                 : where == "background" ? "bgClass"
                 : where == "gutter" ? "gutterClass" : "wrapClass";
        var cur = line[prop];
        if (!cur) { return false }
        else if (cls == null) { line[prop] = null; }
        else {
          var found = cur.match(classTest(cls));
          if (!found) { return false }
          var end = found.index + found[0].length;
          line[prop] = cur.slice(0, found.index) + (!found.index || end == cur.length ? "" : " ") + cur.slice(end) || null;
        }
        return true
      })
    }),

    addLineWidget: docMethodOp(function(handle, node, options) {
      return addLineWidget(this, handle, node, options)
    }),
    removeLineWidget: function(widget) { widget.clear(); },

    markText: function(from, to, options) {
      return markText(this, clipPos(this, from), clipPos(this, to), options, options && options.type || "range")
    },
    setBookmark: function(pos, options) {
      var realOpts = {replacedWith: options && (options.nodeType == null ? options.widget : options),
                      insertLeft: options && options.insertLeft,
                      clearWhenEmpty: false, shared: options && options.shared,
                      handleMouseEvents: options && options.handleMouseEvents};
      pos = clipPos(this, pos);
      return markText(this, pos, pos, realOpts, "bookmark")
    },
    findMarksAt: function(pos) {
      pos = clipPos(this, pos);
      var markers = [], spans = getLine(this, pos.line).markedSpans;
      if (spans) { for (var i = 0; i < spans.length; ++i) {
        var span = spans[i];
        if ((span.from == null || span.from <= pos.ch) &&
            (span.to == null || span.to >= pos.ch))
          { markers.push(span.marker.parent || span.marker); }
      } }
      return markers
    },
    findMarks: function(from, to, filter) {
      from = clipPos(this, from); to = clipPos(this, to);
      var found = [], lineNo = from.line;
      this.iter(from.line, to.line + 1, function (line) {
        var spans = line.markedSpans;
        if (spans) { for (var i = 0; i < spans.length; i++) {
          var span = spans[i];
          if (!(span.to != null && lineNo == from.line && from.ch >= span.to ||
                span.from == null && lineNo != from.line ||
                span.from != null && lineNo == to.line && span.from >= to.ch) &&
              (!filter || filter(span.marker)))
            { found.push(span.marker.parent || span.marker); }
        } }
        ++lineNo;
      });
      return found
    },
    getAllMarks: function() {
      var markers = [];
      this.iter(function (line) {
        var sps = line.markedSpans;
        if (sps) { for (var i = 0; i < sps.length; ++i)
          { if (sps[i].from != null) { markers.push(sps[i].marker); } } }
      });
      return markers
    },

    posFromIndex: function(off) {
      var ch, lineNo = this.first, sepSize = this.lineSeparator().length;
      this.iter(function (line) {
        var sz = line.text.length + sepSize;
        if (sz > off) { ch = off; return true }
        off -= sz;
        ++lineNo;
      });
      return clipPos(this, Pos(lineNo, ch))
    },
    indexFromPos: function (coords) {
      coords = clipPos(this, coords);
      var index = coords.ch;
      if (coords.line < this.first || coords.ch < 0) { return 0 }
      var sepSize = this.lineSeparator().length;
      this.iter(this.first, coords.line, function (line) { // iter aborts when callback returns a truthy value
        index += line.text.length + sepSize;
      });
      return index
    },

    copy: function(copyHistory) {
      var doc = new Doc(getLines(this, this.first, this.first + this.size),
                        this.modeOption, this.first, this.lineSep, this.direction);
      doc.scrollTop = this.scrollTop; doc.scrollLeft = this.scrollLeft;
      doc.sel = this.sel;
      doc.extend = false;
      if (copyHistory) {
        doc.history.undoDepth = this.history.undoDepth;
        doc.setHistory(this.getHistory());
      }
      return doc
    },

    linkedDoc: function(options) {
      if (!options) { options = {}; }
      var from = this.first, to = this.first + this.size;
      if (options.from != null && options.from > from) { from = options.from; }
      if (options.to != null && options.to < to) { to = options.to; }
      var copy = new Doc(getLines(this, from, to), options.mode || this.modeOption, from, this.lineSep, this.direction);
      if (options.sharedHist) { copy.history = this.history
      ; }(this.linked || (this.linked = [])).push({doc: copy, sharedHist: options.sharedHist});
      copy.linked = [{doc: this, isParent: true, sharedHist: options.sharedHist}];
      copySharedMarkers(copy, findSharedMarkers(this));
      return copy
    },
    unlinkDoc: function(other) {
      if (other instanceof CodeMirror) { other = other.doc; }
      if (this.linked) { for (var i = 0; i < this.linked.length; ++i) {
        var link = this.linked[i];
        if (link.doc != other) { continue }
        this.linked.splice(i, 1);
        other.unlinkDoc(this);
        detachSharedMarkers(findSharedMarkers(this));
        break
      } }
      // If the histories were shared, split them again
      if (other.history == this.history) {
        var splitIds = [other.id];
        linkedDocs(other, function (doc) { return splitIds.push(doc.id); }, true);
        other.history = new History(null);
        other.history.done = copyHistoryArray(this.history.done, splitIds);
        other.history.undone = copyHistoryArray(this.history.undone, splitIds);
      }
    },
    iterLinkedDocs: function(f) {linkedDocs(this, f);},

    getMode: function() {return this.mode},
    getEditor: function() {return this.cm},

    splitLines: function(str) {
      if (this.lineSep) { return str.split(this.lineSep) }
      return splitLinesAuto(str)
    },
    lineSeparator: function() { return this.lineSep || "\n" },

    setDirection: docMethodOp(function (dir) {
      if (dir != "rtl") { dir = "ltr"; }
      if (dir == this.direction) { return }
      this.direction = dir;
      this.iter(function (line) { return line.order = null; });
      if (this.cm) { directionChanged(this.cm); }
    })
  });

  // Public alias.
  Doc.prototype.eachLine = Doc.prototype.iter;

  // Kludge to work around strange IE behavior where it'll sometimes
  // re-fire a series of drag-related events right after the drop (#1551)
  var lastDrop = 0;

  function onDrop(e) {
    var cm = this;
    clearDragCursor(cm);
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e))
      { return }
    e_preventDefault(e);
    if (ie) { lastDrop = +new Date; }
    var pos = posFromMouse(cm, e, true), files = e.dataTransfer.files;
    if (!pos || cm.isReadOnly()) { return }
    // Might be a file drop, in which case we simply extract the text
    // and insert it.
    if (files && files.length && window.FileReader && window.File) {
      var n = files.length, text = Array(n), read = 0;
      var markAsReadAndPasteIfAllFilesAreRead = function () {
        if (++read == n) {
          operation(cm, function () {
            pos = clipPos(cm.doc, pos);
            var change = {from: pos, to: pos,
                          text: cm.doc.splitLines(
                              text.filter(function (t) { return t != null; }).join(cm.doc.lineSeparator())),
                          origin: "paste"};
            makeChange(cm.doc, change);
            setSelectionReplaceHistory(cm.doc, simpleSelection(clipPos(cm.doc, pos), clipPos(cm.doc, changeEnd(change))));
          })();
        }
      };
      var readTextFromFile = function (file, i) {
        if (cm.options.allowDropFileTypes &&
            indexOf(cm.options.allowDropFileTypes, file.type) == -1) {
          markAsReadAndPasteIfAllFilesAreRead();
          return
        }
        var reader = new FileReader;
        reader.onerror = function () { return markAsReadAndPasteIfAllFilesAreRead(); };
        reader.onload = function () {
          var content = reader.result;
          if (/[\x00-\x08\x0e-\x1f]{2}/.test(content)) {
            markAsReadAndPasteIfAllFilesAreRead();
            return
          }
          text[i] = content;
          markAsReadAndPasteIfAllFilesAreRead();
        };
        reader.readAsText(file);
      };
      for (var i = 0; i < files.length; i++) { readTextFromFile(files[i], i); }
    } else { // Normal drop
      // Don't do a replace if the drop happened inside of the selected text.
      if (cm.state.draggingText && cm.doc.sel.contains(pos) > -1) {
        cm.state.draggingText(e);
        // Ensure the editor is re-focused
        setTimeout(function () { return cm.display.input.focus(); }, 20);
        return
      }
      try {
        var text$1 = e.dataTransfer.getData("Text");
        if (text$1) {
          var selected;
          if (cm.state.draggingText && !cm.state.draggingText.copy)
            { selected = cm.listSelections(); }
          setSelectionNoUndo(cm.doc, simpleSelection(pos, pos));
          if (selected) { for (var i$1 = 0; i$1 < selected.length; ++i$1)
            { replaceRange(cm.doc, "", selected[i$1].anchor, selected[i$1].head, "drag"); } }
          cm.replaceSelection(text$1, "around", "paste");
          cm.display.input.focus();
        }
      }
      catch(e$1){}
    }
  }

  function onDragStart(cm, e) {
    if (ie && (!cm.state.draggingText || +new Date - lastDrop < 100)) { e_stop(e); return }
    if (signalDOMEvent(cm, e) || eventInWidget(cm.display, e)) { return }

    e.dataTransfer.setData("Text", cm.getSelection());
    e.dataTransfer.effectAllowed = "copyMove";

    // Use dummy image instead of default browsers image.
    // Recent Safari (~6.0.2) have a tendency to segfault when this happens, so we don't do it there.
    if (e.dataTransfer.setDragImage && !safari) {
      var img = elt("img", null, null, "position: fixed; left: 0; top: 0;");
      img.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
      if (presto) {
        img.width = img.height = 1;
        cm.display.wrapper.appendChild(img);
        // Force a relayout, or Opera won't use our image for some obscure reason
        img._top = img.offsetTop;
      }
      e.dataTransfer.setDragImage(img, 0, 0);
      if (presto) { img.parentNode.removeChild(img); }
    }
  }

  function onDragOver(cm, e) {
    var pos = posFromMouse(cm, e);
    if (!pos) { return }
    var frag = document.createDocumentFragment();
    drawSelectionCursor(cm, pos, frag);
    if (!cm.display.dragCursor) {
      cm.display.dragCursor = elt("div", null, "CodeMirror-cursors CodeMirror-dragcursors");
      cm.display.lineSpace.insertBefore(cm.display.dragCursor, cm.display.cursorDiv);
    }
    removeChildrenAndAdd(cm.display.dragCursor, frag);
  }

  function clearDragCursor(cm) {
    if (cm.display.dragCursor) {
      cm.display.lineSpace.removeChild(cm.display.dragCursor);
      cm.display.dragCursor = null;
    }
  }

  // These must be handled carefully, because naively registering a
  // handler for each editor will cause the editors to never be
  // garbage collected.

  function forEachCodeMirror(f) {
    if (!document.getElementsByClassName) { return }
    var byClass = document.getElementsByClassName("CodeMirror"), editors = [];
    for (var i = 0; i < byClass.length; i++) {
      var cm = byClass[i].CodeMirror;
      if (cm) { editors.push(cm); }
    }
    if (editors.length) { editors[0].operation(function () {
      for (var i = 0; i < editors.length; i++) { f(editors[i]); }
    }); }
  }

  var globalsRegistered = false;
  function ensureGlobalHandlers() {
    if (globalsRegistered) { return }
    registerGlobalHandlers();
    globalsRegistered = true;
  }
  function registerGlobalHandlers() {
    // When the window resizes, we need to refresh active editors.
    var resizeTimer;
    on(window, "resize", function () {
      if (resizeTimer == null) { resizeTimer = setTimeout(function () {
        resizeTimer = null;
        forEachCodeMirror(onResize);
      }, 100); }
    });
    // When the window loses focus, we want to show the editor as blurred
    on(window, "blur", function () { return forEachCodeMirror(onBlur); });
  }
  // Called when the window resizes
  function onResize(cm) {
    var d = cm.display;
    // Might be a text scaling operation, clear size caches.
    d.cachedCharWidth = d.cachedTextHeight = d.cachedPaddingH = null;
    d.scrollbarsClipped = false;
    cm.setSize();
  }

  var keyNames = {
    3: "Pause", 8: "Backspace", 9: "Tab", 13: "Enter", 16: "Shift", 17: "Ctrl", 18: "Alt",
    19: "Pause", 20: "CapsLock", 27: "Esc", 32: "Space", 33: "PageUp", 34: "PageDown", 35: "End",
    36: "Home", 37: "Left", 38: "Up", 39: "Right", 40: "Down", 44: "PrintScrn", 45: "Insert",
    46: "Delete", 59: ";", 61: "=", 91: "Mod", 92: "Mod", 93: "Mod",
    106: "*", 107: "=", 109: "-", 110: ".", 111: "/", 145: "ScrollLock",
    173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\",
    221: "]", 222: "'", 224: "Mod", 63232: "Up", 63233: "Down", 63234: "Left", 63235: "Right", 63272: "Delete",
    63273: "Home", 63275: "End", 63276: "PageUp", 63277: "PageDown", 63302: "Insert"
  };

  // Number keys
  for (var i = 0; i < 10; i++) { keyNames[i + 48] = keyNames[i + 96] = String(i); }
  // Alphabetic keys
  for (var i$1 = 65; i$1 <= 90; i$1++) { keyNames[i$1] = String.fromCharCode(i$1); }
  // Function keys
  for (var i$2 = 1; i$2 <= 12; i$2++) { keyNames[i$2 + 111] = keyNames[i$2 + 63235] = "F" + i$2; }

  var keyMap = {};

  keyMap.basic = {
    "Left": "goCharLeft", "Right": "goCharRight", "Up": "goLineUp", "Down": "goLineDown",
    "End": "goLineEnd", "Home": "goLineStartSmart", "PageUp": "goPageUp", "PageDown": "goPageDown",
    "Delete": "delCharAfter", "Backspace": "delCharBefore", "Shift-Backspace": "delCharBefore",
    "Tab": "defaultTab", "Shift-Tab": "indentAuto",
    "Enter": "newlineAndIndent", "Insert": "toggleOverwrite",
    "Esc": "singleSelection"
  };
  // Note that the save and find-related commands aren't defined by
  // default. User code or addons can define them. Unknown commands
  // are simply ignored.
  keyMap.pcDefault = {
    "Ctrl-A": "selectAll", "Ctrl-D": "deleteLine", "Ctrl-Z": "undo", "Shift-Ctrl-Z": "redo", "Ctrl-Y": "redo",
    "Ctrl-Home": "goDocStart", "Ctrl-End": "goDocEnd", "Ctrl-Up": "goLineUp", "Ctrl-Down": "goLineDown",
    "Ctrl-Left": "goGroupLeft", "Ctrl-Right": "goGroupRight", "Alt-Left": "goLineStart", "Alt-Right": "goLineEnd",
    "Ctrl-Backspace": "delGroupBefore", "Ctrl-Delete": "delGroupAfter", "Ctrl-S": "save", "Ctrl-F": "find",
    "Ctrl-G": "findNext", "Shift-Ctrl-G": "findPrev", "Shift-Ctrl-F": "replace", "Shift-Ctrl-R": "replaceAll",
    "Ctrl-[": "indentLess", "Ctrl-]": "indentMore",
    "Ctrl-U": "undoSelection", "Shift-Ctrl-U": "redoSelection", "Alt-U": "redoSelection",
    "fallthrough": "basic"
  };
  // Very basic readline/emacs-style bindings, which are standard on Mac.
  keyMap.emacsy = {
    "Ctrl-F": "goCharRight", "Ctrl-B": "goCharLeft", "Ctrl-P": "goLineUp", "Ctrl-N": "goLineDown",
    "Alt-F": "goWordRight", "Alt-B": "goWordLeft", "Ctrl-A": "goLineStart", "Ctrl-E": "goLineEnd",
    "Ctrl-V": "goPageDown", "Shift-Ctrl-V": "goPageUp", "Ctrl-D": "delCharAfter", "Ctrl-H": "delCharBefore",
    "Alt-D": "delWordAfter", "Alt-Backspace": "delWordBefore", "Ctrl-K": "killLine", "Ctrl-T": "transposeChars",
    "Ctrl-O": "openLine"
  };
  keyMap.macDefault = {
    "Cmd-A": "selectAll", "Cmd-D": "deleteLine", "Cmd-Z": "undo", "Shift-Cmd-Z": "redo", "Cmd-Y": "redo",
    "Cmd-Home": "goDocStart", "Cmd-Up": "goDocStart", "Cmd-End": "goDocEnd", "Cmd-Down": "goDocEnd", "Alt-Left": "goGroupLeft",
    "Alt-Right": "goGroupRight", "Cmd-Left": "goLineLeft", "Cmd-Right": "goLineRight", "Alt-Backspace": "delGroupBefore",
    "Ctrl-Alt-Backspace": "delGroupAfter", "Alt-Delete": "delGroupAfter", "Cmd-S": "save", "Cmd-F": "find",
    "Cmd-G": "findNext", "Shift-Cmd-G": "findPrev", "Cmd-Alt-F": "replace", "Shift-Cmd-Alt-F": "replaceAll",
    "Cmd-[": "indentLess", "Cmd-]": "indentMore", "Cmd-Backspace": "delWrappedLineLeft", "Cmd-Delete": "delWrappedLineRight",
    "Cmd-U": "undoSelection", "Shift-Cmd-U": "redoSelection", "Ctrl-Up": "goDocStart", "Ctrl-Down": "goDocEnd",
    "fallthrough": ["basic", "emacsy"]
  };
  keyMap["default"] = mac ? keyMap.macDefault : keyMap.pcDefault;

  // KEYMAP DISPATCH

  function normalizeKeyName(name) {
    var parts = name.split(/-(?!$)/);
    name = parts[parts.length - 1];
    var alt, ctrl, shift, cmd;
    for (var i = 0; i < parts.length - 1; i++) {
      var mod = parts[i];
      if (/^(cmd|meta|m)$/i.test(mod)) { cmd = true; }
      else if (/^a(lt)?$/i.test(mod)) { alt = true; }
      else if (/^(c|ctrl|control)$/i.test(mod)) { ctrl = true; }
      else if (/^s(hift)?$/i.test(mod)) { shift = true; }
      else { throw new Error("Unrecognized modifier name: " + mod) }
    }
    if (alt) { name = "Alt-" + name; }
    if (ctrl) { name = "Ctrl-" + name; }
    if (cmd) { name = "Cmd-" + name; }
    if (shift) { name = "Shift-" + name; }
    return name
  }

  // This is a kludge to keep keymaps mostly working as raw objects
  // (backwards compatibility) while at the same time support features
  // like normalization and multi-stroke key bindings. It compiles a
  // new normalized keymap, and then updates the old object to reflect
  // this.
  function normalizeKeyMap(keymap) {
    var copy = {};
    for (var keyname in keymap) { if (keymap.hasOwnProperty(keyname)) {
      var value = keymap[keyname];
      if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) { continue }
      if (value == "...") { delete keymap[keyname]; continue }

      var keys = map(keyname.split(" "), normalizeKeyName);
      for (var i = 0; i < keys.length; i++) {
        var val = (void 0), name = (void 0);
        if (i == keys.length - 1) {
          name = keys.join(" ");
          val = value;
        } else {
          name = keys.slice(0, i + 1).join(" ");
          val = "...";
        }
        var prev = copy[name];
        if (!prev) { copy[name] = val; }
        else if (prev != val) { throw new Error("Inconsistent bindings for " + name) }
      }
      delete keymap[keyname];
    } }
    for (var prop in copy) { keymap[prop] = copy[prop]; }
    return keymap
  }

  function lookupKey(key, map, handle, context) {
    map = getKeyMap(map);
    var found = map.call ? map.call(key, context) : map[key];
    if (found === false) { return "nothing" }
    if (found === "...") { return "multi" }
    if (found != null && handle(found)) { return "handled" }

    if (map.fallthrough) {
      if (Object.prototype.toString.call(map.fallthrough) != "[object Array]")
        { return lookupKey(key, map.fallthrough, handle, context) }
      for (var i = 0; i < map.fallthrough.length; i++) {
        var result = lookupKey(key, map.fallthrough[i], handle, context);
        if (result) { return result }
      }
    }
  }

  // Modifier key presses don't count as 'real' key presses for the
  // purpose of keymap fallthrough.
  function isModifierKey(value) {
    var name = typeof value == "string" ? value : keyNames[value.keyCode];
    return name == "Ctrl" || name == "Alt" || name == "Shift" || name == "Mod"
  }

  function addModifierNames(name, event, noShift) {
    var base = name;
    if (event.altKey && base != "Alt") { name = "Alt-" + name; }
    if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != "Ctrl") { name = "Ctrl-" + name; }
    if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != "Mod") { name = "Cmd-" + name; }
    if (!noShift && event.shiftKey && base != "Shift") { name = "Shift-" + name; }
    return name
  }

  // Look up the name of a key as indicated by an event object.
  function keyName(event, noShift) {
    if (presto && event.keyCode == 34 && event["char"]) { return false }
    var name = keyNames[event.keyCode];
    if (name == null || event.altGraphKey) { return false }
    // Ctrl-ScrollLock has keyCode 3, same as Ctrl-Pause,
    // so we'll use event.code when available (Chrome 48+, FF 38+, Safari 10.1+)
    if (event.keyCode == 3 && event.code) { name = event.code; }
    return addModifierNames(name, event, noShift)
  }

  function getKeyMap(val) {
    return typeof val == "string" ? keyMap[val] : val
  }

  // Helper for deleting text near the selection(s), used to implement
  // backspace, delete, and similar functionality.
  function deleteNearSelection(cm, compute) {
    var ranges = cm.doc.sel.ranges, kill = [];
    // Build up a set of ranges to kill first, merging overlapping
    // ranges.
    for (var i = 0; i < ranges.length; i++) {
      var toKill = compute(ranges[i]);
      while (kill.length && cmp(toKill.from, lst(kill).to) <= 0) {
        var replaced = kill.pop();
        if (cmp(replaced.from, toKill.from) < 0) {
          toKill.from = replaced.from;
          break
        }
      }
      kill.push(toKill);
    }
    // Next, remove those actual ranges.
    runInOp(cm, function () {
      for (var i = kill.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, "", kill[i].from, kill[i].to, "+delete"); }
      ensureCursorVisible(cm);
    });
  }

  function moveCharLogically(line, ch, dir) {
    var target = skipExtendingChars(line.text, ch + dir, dir);
    return target < 0 || target > line.text.length ? null : target
  }

  function moveLogically(line, start, dir) {
    var ch = moveCharLogically(line, start.ch, dir);
    return ch == null ? null : new Pos(start.line, ch, dir < 0 ? "after" : "before")
  }

  function endOfLine(visually, cm, lineObj, lineNo, dir) {
    if (visually) {
      if (cm.doc.direction == "rtl") { dir = -dir; }
      var order = getOrder(lineObj, cm.doc.direction);
      if (order) {
        var part = dir < 0 ? lst(order) : order[0];
        var moveInStorageOrder = (dir < 0) == (part.level == 1);
        var sticky = moveInStorageOrder ? "after" : "before";
        var ch;
        // With a wrapped rtl chunk (possibly spanning multiple bidi parts),
        // it could be that the last bidi part is not on the last visual line,
        // since visual lines contain content order-consecutive chunks.
        // Thus, in rtl, we are looking for the first (content-order) character
        // in the rtl chunk that is on the last line (that is, the same line
        // as the last (content-order) character).
        if (part.level > 0 || cm.doc.direction == "rtl") {
          var prep = prepareMeasureForLine(cm, lineObj);
          ch = dir < 0 ? lineObj.text.length - 1 : 0;
          var targetTop = measureCharPrepared(cm, prep, ch).top;
          ch = findFirst(function (ch) { return measureCharPrepared(cm, prep, ch).top == targetTop; }, (dir < 0) == (part.level == 1) ? part.from : part.to - 1, ch);
          if (sticky == "before") { ch = moveCharLogically(lineObj, ch, 1); }
        } else { ch = dir < 0 ? part.to : part.from; }
        return new Pos(lineNo, ch, sticky)
      }
    }
    return new Pos(lineNo, dir < 0 ? lineObj.text.length : 0, dir < 0 ? "before" : "after")
  }

  function moveVisually(cm, line, start, dir) {
    var bidi = getOrder(line, cm.doc.direction);
    if (!bidi) { return moveLogically(line, start, dir) }
    if (start.ch >= line.text.length) {
      start.ch = line.text.length;
      start.sticky = "before";
    } else if (start.ch <= 0) {
      start.ch = 0;
      start.sticky = "after";
    }
    var partPos = getBidiPartAt(bidi, start.ch, start.sticky), part = bidi[partPos];
    if (cm.doc.direction == "ltr" && part.level % 2 == 0 && (dir > 0 ? part.to > start.ch : part.from < start.ch)) {
      // Case 1: We move within an ltr part in an ltr editor. Even with wrapped lines,
      // nothing interesting happens.
      return moveLogically(line, start, dir)
    }

    var mv = function (pos, dir) { return moveCharLogically(line, pos instanceof Pos ? pos.ch : pos, dir); };
    var prep;
    var getWrappedLineExtent = function (ch) {
      if (!cm.options.lineWrapping) { return {begin: 0, end: line.text.length} }
      prep = prep || prepareMeasureForLine(cm, line);
      return wrappedLineExtentChar(cm, line, prep, ch)
    };
    var wrappedLineExtent = getWrappedLineExtent(start.sticky == "before" ? mv(start, -1) : start.ch);

    if (cm.doc.direction == "rtl" || part.level == 1) {
      var moveInStorageOrder = (part.level == 1) == (dir < 0);
      var ch = mv(start, moveInStorageOrder ? 1 : -1);
      if (ch != null && (!moveInStorageOrder ? ch >= part.from && ch >= wrappedLineExtent.begin : ch <= part.to && ch <= wrappedLineExtent.end)) {
        // Case 2: We move within an rtl part or in an rtl editor on the same visual line
        var sticky = moveInStorageOrder ? "before" : "after";
        return new Pos(start.line, ch, sticky)
      }
    }

    // Case 3: Could not move within this bidi part in this visual line, so leave
    // the current bidi part

    var searchInVisualLine = function (partPos, dir, wrappedLineExtent) {
      var getRes = function (ch, moveInStorageOrder) { return moveInStorageOrder
        ? new Pos(start.line, mv(ch, 1), "before")
        : new Pos(start.line, ch, "after"); };

      for (; partPos >= 0 && partPos < bidi.length; partPos += dir) {
        var part = bidi[partPos];
        var moveInStorageOrder = (dir > 0) == (part.level != 1);
        var ch = moveInStorageOrder ? wrappedLineExtent.begin : mv(wrappedLineExtent.end, -1);
        if (part.from <= ch && ch < part.to) { return getRes(ch, moveInStorageOrder) }
        ch = moveInStorageOrder ? part.from : mv(part.to, -1);
        if (wrappedLineExtent.begin <= ch && ch < wrappedLineExtent.end) { return getRes(ch, moveInStorageOrder) }
      }
    };

    // Case 3a: Look for other bidi parts on the same visual line
    var res = searchInVisualLine(partPos + dir, dir, wrappedLineExtent);
    if (res) { return res }

    // Case 3b: Look for other bidi parts on the next visual line
    var nextCh = dir > 0 ? wrappedLineExtent.end : mv(wrappedLineExtent.begin, -1);
    if (nextCh != null && !(dir > 0 && nextCh == line.text.length)) {
      res = searchInVisualLine(dir > 0 ? 0 : bidi.length - 1, dir, getWrappedLineExtent(nextCh));
      if (res) { return res }
    }

    // Case 4: Nowhere to move
    return null
  }

  // Commands are parameter-less actions that can be performed on an
  // editor, mostly used for keybindings.
  var commands = {
    selectAll: selectAll,
    singleSelection: function (cm) { return cm.setSelection(cm.getCursor("anchor"), cm.getCursor("head"), sel_dontScroll); },
    killLine: function (cm) { return deleteNearSelection(cm, function (range) {
      if (range.empty()) {
        var len = getLine(cm.doc, range.head.line).text.length;
        if (range.head.ch == len && range.head.line < cm.lastLine())
          { return {from: range.head, to: Pos(range.head.line + 1, 0)} }
        else
          { return {from: range.head, to: Pos(range.head.line, len)} }
      } else {
        return {from: range.from(), to: range.to()}
      }
    }); },
    deleteLine: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0),
      to: clipPos(cm.doc, Pos(range.to().line + 1, 0))
    }); }); },
    delLineLeft: function (cm) { return deleteNearSelection(cm, function (range) { return ({
      from: Pos(range.from().line, 0), to: range.from()
    }); }); },
    delWrappedLineLeft: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var leftPos = cm.coordsChar({left: 0, top: top}, "div");
      return {from: leftPos, to: range.from()}
    }); },
    delWrappedLineRight: function (cm) { return deleteNearSelection(cm, function (range) {
      var top = cm.charCoords(range.head, "div").top + 5;
      var rightPos = cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div");
      return {from: range.from(), to: rightPos }
    }); },
    undo: function (cm) { return cm.undo(); },
    redo: function (cm) { return cm.redo(); },
    undoSelection: function (cm) { return cm.undoSelection(); },
    redoSelection: function (cm) { return cm.redoSelection(); },
    goDocStart: function (cm) { return cm.extendSelection(Pos(cm.firstLine(), 0)); },
    goDocEnd: function (cm) { return cm.extendSelection(Pos(cm.lastLine())); },
    goLineStart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStart(cm, range.head.line); },
      {origin: "+move", bias: 1}
    ); },
    goLineStartSmart: function (cm) { return cm.extendSelectionsBy(function (range) { return lineStartSmart(cm, range.head); },
      {origin: "+move", bias: 1}
    ); },
    goLineEnd: function (cm) { return cm.extendSelectionsBy(function (range) { return lineEnd(cm, range.head.line); },
      {origin: "+move", bias: -1}
    ); },
    goLineRight: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: cm.display.lineDiv.offsetWidth + 100, top: top}, "div")
    }, sel_move); },
    goLineLeft: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      return cm.coordsChar({left: 0, top: top}, "div")
    }, sel_move); },
    goLineLeftSmart: function (cm) { return cm.extendSelectionsBy(function (range) {
      var top = cm.cursorCoords(range.head, "div").top + 5;
      var pos = cm.coordsChar({left: 0, top: top}, "div");
      if (pos.ch < cm.getLine(pos.line).search(/\S/)) { return lineStartSmart(cm, range.head) }
      return pos
    }, sel_move); },
    goLineUp: function (cm) { return cm.moveV(-1, "line"); },
    goLineDown: function (cm) { return cm.moveV(1, "line"); },
    goPageUp: function (cm) { return cm.moveV(-1, "page"); },
    goPageDown: function (cm) { return cm.moveV(1, "page"); },
    goCharLeft: function (cm) { return cm.moveH(-1, "char"); },
    goCharRight: function (cm) { return cm.moveH(1, "char"); },
    goColumnLeft: function (cm) { return cm.moveH(-1, "column"); },
    goColumnRight: function (cm) { return cm.moveH(1, "column"); },
    goWordLeft: function (cm) { return cm.moveH(-1, "word"); },
    goGroupRight: function (cm) { return cm.moveH(1, "group"); },
    goGroupLeft: function (cm) { return cm.moveH(-1, "group"); },
    goWordRight: function (cm) { return cm.moveH(1, "word"); },
    delCharBefore: function (cm) { return cm.deleteH(-1, "char"); },
    delCharAfter: function (cm) { return cm.deleteH(1, "char"); },
    delWordBefore: function (cm) { return cm.deleteH(-1, "word"); },
    delWordAfter: function (cm) { return cm.deleteH(1, "word"); },
    delGroupBefore: function (cm) { return cm.deleteH(-1, "group"); },
    delGroupAfter: function (cm) { return cm.deleteH(1, "group"); },
    indentAuto: function (cm) { return cm.indentSelection("smart"); },
    indentMore: function (cm) { return cm.indentSelection("add"); },
    indentLess: function (cm) { return cm.indentSelection("subtract"); },
    insertTab: function (cm) { return cm.replaceSelection("\t"); },
    insertSoftTab: function (cm) {
      var spaces = [], ranges = cm.listSelections(), tabSize = cm.options.tabSize;
      for (var i = 0; i < ranges.length; i++) {
        var pos = ranges[i].from();
        var col = countColumn(cm.getLine(pos.line), pos.ch, tabSize);
        spaces.push(spaceStr(tabSize - col % tabSize));
      }
      cm.replaceSelections(spaces);
    },
    defaultTab: function (cm) {
      if (cm.somethingSelected()) { cm.indentSelection("add"); }
      else { cm.execCommand("insertTab"); }
    },
    // Swap the two chars left and right of each selection's head.
    // Move cursor behind the two swapped characters afterwards.
    //
    // Doesn't consider line feeds a character.
    // Doesn't scan more than one line above to find a character.
    // Doesn't do anything on an empty line.
    // Doesn't do anything with non-empty selections.
    transposeChars: function (cm) { return runInOp(cm, function () {
      var ranges = cm.listSelections(), newSel = [];
      for (var i = 0; i < ranges.length; i++) {
        if (!ranges[i].empty()) { continue }
        var cur = ranges[i].head, line = getLine(cm.doc, cur.line).text;
        if (line) {
          if (cur.ch == line.length) { cur = new Pos(cur.line, cur.ch - 1); }
          if (cur.ch > 0) {
            cur = new Pos(cur.line, cur.ch + 1);
            cm.replaceRange(line.charAt(cur.ch - 1) + line.charAt(cur.ch - 2),
                            Pos(cur.line, cur.ch - 2), cur, "+transpose");
          } else if (cur.line > cm.doc.first) {
            var prev = getLine(cm.doc, cur.line - 1).text;
            if (prev) {
              cur = new Pos(cur.line, 1);
              cm.replaceRange(line.charAt(0) + cm.doc.lineSeparator() +
                              prev.charAt(prev.length - 1),
                              Pos(cur.line - 1, prev.length - 1), cur, "+transpose");
            }
          }
        }
        newSel.push(new Range(cur, cur));
      }
      cm.setSelections(newSel);
    }); },
    newlineAndIndent: function (cm) { return runInOp(cm, function () {
      var sels = cm.listSelections();
      for (var i = sels.length - 1; i >= 0; i--)
        { cm.replaceRange(cm.doc.lineSeparator(), sels[i].anchor, sels[i].head, "+input"); }
      sels = cm.listSelections();
      for (var i$1 = 0; i$1 < sels.length; i$1++)
        { cm.indentLine(sels[i$1].from().line, null, true); }
      ensureCursorVisible(cm);
    }); },
    openLine: function (cm) { return cm.replaceSelection("\n", "start"); },
    toggleOverwrite: function (cm) { return cm.toggleOverwrite(); }
  };


  function lineStart(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLine(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, visual, lineN, 1)
  }
  function lineEnd(cm, lineN) {
    var line = getLine(cm.doc, lineN);
    var visual = visualLineEnd(line);
    if (visual != line) { lineN = lineNo(visual); }
    return endOfLine(true, cm, line, lineN, -1)
  }
  function lineStartSmart(cm, pos) {
    var start = lineStart(cm, pos.line);
    var line = getLine(cm.doc, start.line);
    var order = getOrder(line, cm.doc.direction);
    if (!order || order[0].level == 0) {
      var firstNonWS = Math.max(start.ch, line.text.search(/\S/));
      var inWS = pos.line == start.line && pos.ch <= firstNonWS && pos.ch;
      return Pos(start.line, inWS ? 0 : firstNonWS, start.sticky)
    }
    return start
  }

  // Run a handler that was bound to a key.
  function doHandleBinding(cm, bound, dropShift) {
    if (typeof bound == "string") {
      bound = commands[bound];
      if (!bound) { return false }
    }
    // Ensure previous input has been read, so that the handler sees a
    // consistent view of the document
    cm.display.input.ensurePolled();
    var prevShift = cm.display.shift, done = false;
    try {
      if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
      if (dropShift) { cm.display.shift = false; }
      done = bound(cm) != Pass;
    } finally {
      cm.display.shift = prevShift;
      cm.state.suppressEdits = false;
    }
    return done
  }

  function lookupKeyForEditor(cm, name, handle) {
    for (var i = 0; i < cm.state.keyMaps.length; i++) {
      var result = lookupKey(name, cm.state.keyMaps[i], handle, cm);
      if (result) { return result }
    }
    return (cm.options.extraKeys && lookupKey(name, cm.options.extraKeys, handle, cm))
      || lookupKey(name, cm.options.keyMap, handle, cm)
  }

  // Note that, despite the name, this function is also used to check
  // for bound mouse clicks.

  var stopSeq = new Delayed;

  function dispatchKey(cm, name, e, handle) {
    var seq = cm.state.keySeq;
    if (seq) {
      if (isModifierKey(name)) { return "handled" }
      if (/\'$/.test(name))
        { cm.state.keySeq = null; }
      else
        { stopSeq.set(50, function () {
          if (cm.state.keySeq == seq) {
            cm.state.keySeq = null;
            cm.display.input.reset();
          }
        }); }
      if (dispatchKeyInner(cm, seq + " " + name, e, handle)) { return true }
    }
    return dispatchKeyInner(cm, name, e, handle)
  }

  function dispatchKeyInner(cm, name, e, handle) {
    var result = lookupKeyForEditor(cm, name, handle);

    if (result == "multi")
      { cm.state.keySeq = name; }
    if (result == "handled")
      { signalLater(cm, "keyHandled", cm, name, e); }

    if (result == "handled" || result == "multi") {
      e_preventDefault(e);
      restartBlink(cm);
    }

    return !!result
  }

  // Handle a key from the keydown event.
  function handleKeyBinding(cm, e) {
    var name = keyName(e, true);
    if (!name) { return false }

    if (e.shiftKey && !cm.state.keySeq) {
      // First try to resolve full name (including 'Shift-'). Failing
      // that, see if there is a cursor-motion command (starting with
      // 'go') bound to the keyname without 'Shift-'.
      return dispatchKey(cm, "Shift-" + name, e, function (b) { return doHandleBinding(cm, b, true); })
          || dispatchKey(cm, name, e, function (b) {
               if (typeof b == "string" ? /^go[A-Z]/.test(b) : b.motion)
                 { return doHandleBinding(cm, b) }
             })
    } else {
      return dispatchKey(cm, name, e, function (b) { return doHandleBinding(cm, b); })
    }
  }

  // Handle a key from the keypress event
  function handleCharBinding(cm, e, ch) {
    return dispatchKey(cm, "'" + ch + "'", e, function (b) { return doHandleBinding(cm, b, true); })
  }

  var lastStoppedKey = null;
  function onKeyDown(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    cm.curOp.focus = activeElt();
    if (signalDOMEvent(cm, e)) { return }
    // IE does strange things with escape.
    if (ie && ie_version < 11 && e.keyCode == 27) { e.returnValue = false; }
    var code = e.keyCode;
    cm.display.shift = code == 16 || e.shiftKey;
    var handled = handleKeyBinding(cm, e);
    if (presto) {
      lastStoppedKey = handled ? code : null;
      // Opera has no cut event... we try to at least catch the key combo
      if (!handled && code == 88 && !hasCopyEvent && (mac ? e.metaKey : e.ctrlKey))
        { cm.replaceSelection("", null, "cut"); }
    }
    if (gecko && !mac && !handled && code == 46 && e.shiftKey && !e.ctrlKey && document.execCommand)
      { document.execCommand("cut"); }

    // Turn mouse into crosshair when Alt is held on Mac.
    if (code == 18 && !/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className))
      { showCrossHair(cm); }
  }

  function showCrossHair(cm) {
    var lineDiv = cm.display.lineDiv;
    addClass(lineDiv, "CodeMirror-crosshair");

    function up(e) {
      if (e.keyCode == 18 || !e.altKey) {
        rmClass(lineDiv, "CodeMirror-crosshair");
        off(document, "keyup", up);
        off(document, "mouseover", up);
      }
    }
    on(document, "keyup", up);
    on(document, "mouseover", up);
  }

  function onKeyUp(e) {
    if (e.keyCode == 16) { this.doc.sel.shift = false; }
    signalDOMEvent(this, e);
  }

  function onKeyPress(e) {
    var cm = this;
    if (e.target && e.target != cm.display.input.getField()) { return }
    if (eventInWidget(cm.display, e) || signalDOMEvent(cm, e) || e.ctrlKey && !e.altKey || mac && e.metaKey) { return }
    var keyCode = e.keyCode, charCode = e.charCode;
    if (presto && keyCode == lastStoppedKey) {lastStoppedKey = null; e_preventDefault(e); return}
    if ((presto && (!e.which || e.which < 10)) && handleKeyBinding(cm, e)) { return }
    var ch = String.fromCharCode(charCode == null ? keyCode : charCode);
    // Some browsers fire keypress events for backspace
    if (ch == "\x08") { return }
    if (handleCharBinding(cm, e, ch)) { return }
    cm.display.input.onKeyPress(e);
  }

  var DOUBLECLICK_DELAY = 400;

  var PastClick = function(time, pos, button) {
    this.time = time;
    this.pos = pos;
    this.button = button;
  };

  PastClick.prototype.compare = function (time, pos, button) {
    return this.time + DOUBLECLICK_DELAY > time &&
      cmp(pos, this.pos) == 0 && button == this.button
  };

  var lastClick, lastDoubleClick;
  function clickRepeat(pos, button) {
    var now = +new Date;
    if (lastDoubleClick && lastDoubleClick.compare(now, pos, button)) {
      lastClick = lastDoubleClick = null;
      return "triple"
    } else if (lastClick && lastClick.compare(now, pos, button)) {
      lastDoubleClick = new PastClick(now, pos, button);
      lastClick = null;
      return "double"
    } else {
      lastClick = new PastClick(now, pos, button);
      lastDoubleClick = null;
      return "single"
    }
  }

  // A mouse down can be a single click, double click, triple click,
  // start of selection drag, start of text drag, new cursor
  // (ctrl-click), rectangle drag (alt-drag), or xwin
  // middle-click-paste. Or it might be a click on something we should
  // not interfere with, such as a scrollbar or widget.
  function onMouseDown(e) {
    var cm = this, display = cm.display;
    if (signalDOMEvent(cm, e) || display.activeTouch && display.input.supportsTouch()) { return }
    display.input.ensurePolled();
    display.shift = e.shiftKey;

    if (eventInWidget(display, e)) {
      if (!webkit) {
        // Briefly turn off draggability, to allow widgets to do
        // normal dragging things.
        display.scroller.draggable = false;
        setTimeout(function () { return display.scroller.draggable = true; }, 100);
      }
      return
    }
    if (clickInGutter(cm, e)) { return }
    var pos = posFromMouse(cm, e), button = e_button(e), repeat = pos ? clickRepeat(pos, button) : "single";
    window.focus();

    // #3261: make sure, that we're not starting a second selection
    if (button == 1 && cm.state.selectingText)
      { cm.state.selectingText(e); }

    if (pos && handleMappedButton(cm, button, pos, repeat, e)) { return }

    if (button == 1) {
      if (pos) { leftButtonDown(cm, pos, repeat, e); }
      else if (e_target(e) == display.scroller) { e_preventDefault(e); }
    } else if (button == 2) {
      if (pos) { extendSelection(cm.doc, pos); }
      setTimeout(function () { return display.input.focus(); }, 20);
    } else if (button == 3) {
      if (captureRightClick) { cm.display.input.onContextMenu(e); }
      else { delayBlurEvent(cm); }
    }
  }

  function handleMappedButton(cm, button, pos, repeat, event) {
    var name = "Click";
    if (repeat == "double") { name = "Double" + name; }
    else if (repeat == "triple") { name = "Triple" + name; }
    name = (button == 1 ? "Left" : button == 2 ? "Middle" : "Right") + name;

    return dispatchKey(cm,  addModifierNames(name, event), event, function (bound) {
      if (typeof bound == "string") { bound = commands[bound]; }
      if (!bound) { return false }
      var done = false;
      try {
        if (cm.isReadOnly()) { cm.state.suppressEdits = true; }
        done = bound(cm, pos) != Pass;
      } finally {
        cm.state.suppressEdits = false;
      }
      return done
    })
  }

  function configureMouse(cm, repeat, event) {
    var option = cm.getOption("configureMouse");
    var value = option ? option(cm, repeat, event) : {};
    if (value.unit == null) {
      var rect = chromeOS ? event.shiftKey && event.metaKey : event.altKey;
      value.unit = rect ? "rectangle" : repeat == "single" ? "char" : repeat == "double" ? "word" : "line";
    }
    if (value.extend == null || cm.doc.extend) { value.extend = cm.doc.extend || event.shiftKey; }
    if (value.addNew == null) { value.addNew = mac ? event.metaKey : event.ctrlKey; }
    if (value.moveOnDrag == null) { value.moveOnDrag = !(mac ? event.altKey : event.ctrlKey); }
    return value
  }

  function leftButtonDown(cm, pos, repeat, event) {
    if (ie) { setTimeout(bind(ensureFocus, cm), 0); }
    else { cm.curOp.focus = activeElt(); }

    var behavior = configureMouse(cm, repeat, event);

    var sel = cm.doc.sel, contained;
    if (cm.options.dragDrop && dragAndDrop && !cm.isReadOnly() &&
        repeat == "single" && (contained = sel.contains(pos)) > -1 &&
        (cmp((contained = sel.ranges[contained]).from(), pos) < 0 || pos.xRel > 0) &&
        (cmp(contained.to(), pos) > 0 || pos.xRel < 0))
      { leftButtonStartDrag(cm, event, pos, behavior); }
    else
      { leftButtonSelect(cm, event, pos, behavior); }
  }

  // Start a text drag. When it ends, see if any dragging actually
  // happen, and treat as a click if it didn't.
  function leftButtonStartDrag(cm, event, pos, behavior) {
    var display = cm.display, moved = false;
    var dragEnd = operation(cm, function (e) {
      if (webkit) { display.scroller.draggable = false; }
      cm.state.draggingText = false;
      off(display.wrapper.ownerDocument, "mouseup", dragEnd);
      off(display.wrapper.ownerDocument, "mousemove", mouseMove);
      off(display.scroller, "dragstart", dragStart);
      off(display.scroller, "drop", dragEnd);
      if (!moved) {
        e_preventDefault(e);
        if (!behavior.addNew)
          { extendSelection(cm.doc, pos, null, null, behavior.extend); }
        // Work around unexplainable focus problem in IE9 (#2127) and Chrome (#3081)
        if ((webkit && !safari) || ie && ie_version == 9)
          { setTimeout(function () {display.wrapper.ownerDocument.body.focus({preventScroll: true}); display.input.focus();}, 20); }
        else
          { display.input.focus(); }
      }
    });
    var mouseMove = function(e2) {
      moved = moved || Math.abs(event.clientX - e2.clientX) + Math.abs(event.clientY - e2.clientY) >= 10;
    };
    var dragStart = function () { return moved = true; };
    // Let the drag handler handle this.
    if (webkit) { display.scroller.draggable = true; }
    cm.state.draggingText = dragEnd;
    dragEnd.copy = !behavior.moveOnDrag;
    // IE's approach to draggable
    if (display.scroller.dragDrop) { display.scroller.dragDrop(); }
    on(display.wrapper.ownerDocument, "mouseup", dragEnd);
    on(display.wrapper.ownerDocument, "mousemove", mouseMove);
    on(display.scroller, "dragstart", dragStart);
    on(display.scroller, "drop", dragEnd);

    delayBlurEvent(cm);
    setTimeout(function () { return display.input.focus(); }, 20);
  }

  function rangeForUnit(cm, pos, unit) {
    if (unit == "char") { return new Range(pos, pos) }
    if (unit == "word") { return cm.findWordAt(pos) }
    if (unit == "line") { return new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))) }
    var result = unit(cm, pos);
    return new Range(result.from, result.to)
  }

  // Normal selection, as opposed to text dragging.
  function leftButtonSelect(cm, event, start, behavior) {
    var display = cm.display, doc = cm.doc;
    e_preventDefault(event);

    var ourRange, ourIndex, startSel = doc.sel, ranges = startSel.ranges;
    if (behavior.addNew && !behavior.extend) {
      ourIndex = doc.sel.contains(start);
      if (ourIndex > -1)
        { ourRange = ranges[ourIndex]; }
      else
        { ourRange = new Range(start, start); }
    } else {
      ourRange = doc.sel.primary();
      ourIndex = doc.sel.primIndex;
    }

    if (behavior.unit == "rectangle") {
      if (!behavior.addNew) { ourRange = new Range(start, start); }
      start = posFromMouse(cm, event, true, true);
      ourIndex = -1;
    } else {
      var range = rangeForUnit(cm, start, behavior.unit);
      if (behavior.extend)
        { ourRange = extendRange(ourRange, range.anchor, range.head, behavior.extend); }
      else
        { ourRange = range; }
    }

    if (!behavior.addNew) {
      ourIndex = 0;
      setSelection(doc, new Selection([ourRange], 0), sel_mouse);
      startSel = doc.sel;
    } else if (ourIndex == -1) {
      ourIndex = ranges.length;
      setSelection(doc, normalizeSelection(cm, ranges.concat([ourRange]), ourIndex),
                   {scroll: false, origin: "*mouse"});
    } else if (ranges.length > 1 && ranges[ourIndex].empty() && behavior.unit == "char" && !behavior.extend) {
      setSelection(doc, normalizeSelection(cm, ranges.slice(0, ourIndex).concat(ranges.slice(ourIndex + 1)), 0),
                   {scroll: false, origin: "*mouse"});
      startSel = doc.sel;
    } else {
      replaceOneSelection(doc, ourIndex, ourRange, sel_mouse);
    }

    var lastPos = start;
    function extendTo(pos) {
      if (cmp(lastPos, pos) == 0) { return }
      lastPos = pos;

      if (behavior.unit == "rectangle") {
        var ranges = [], tabSize = cm.options.tabSize;
        var startCol = countColumn(getLine(doc, start.line).text, start.ch, tabSize);
        var posCol = countColumn(getLine(doc, pos.line).text, pos.ch, tabSize);
        var left = Math.min(startCol, posCol), right = Math.max(startCol, posCol);
        for (var line = Math.min(start.line, pos.line), end = Math.min(cm.lastLine(), Math.max(start.line, pos.line));
             line <= end; line++) {
          var text = getLine(doc, line).text, leftPos = findColumn(text, left, tabSize);
          if (left == right)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, leftPos))); }
          else if (text.length > leftPos)
            { ranges.push(new Range(Pos(line, leftPos), Pos(line, findColumn(text, right, tabSize)))); }
        }
        if (!ranges.length) { ranges.push(new Range(start, start)); }
        setSelection(doc, normalizeSelection(cm, startSel.ranges.slice(0, ourIndex).concat(ranges), ourIndex),
                     {origin: "*mouse", scroll: false});
        cm.scrollIntoView(pos);
      } else {
        var oldRange = ourRange;
        var range = rangeForUnit(cm, pos, behavior.unit);
        var anchor = oldRange.anchor, head;
        if (cmp(range.anchor, anchor) > 0) {
          head = range.head;
          anchor = minPos(oldRange.from(), range.anchor);
        } else {
          head = range.anchor;
          anchor = maxPos(oldRange.to(), range.head);
        }
        var ranges$1 = startSel.ranges.slice(0);
        ranges$1[ourIndex] = bidiSimplify(cm, new Range(clipPos(doc, anchor), head));
        setSelection(doc, normalizeSelection(cm, ranges$1, ourIndex), sel_mouse);
      }
    }

    var editorSize = display.wrapper.getBoundingClientRect();
    // Used to ensure timeout re-tries don't fire when another extend
    // happened in the meantime (clearTimeout isn't reliable -- at
    // least on Chrome, the timeouts still happen even when cleared,
    // if the clear happens after their scheduled firing time).
    var counter = 0;

    function extend(e) {
      var curCount = ++counter;
      var cur = posFromMouse(cm, e, true, behavior.unit == "rectangle");
      if (!cur) { return }
      if (cmp(cur, lastPos) != 0) {
        cm.curOp.focus = activeElt();
        extendTo(cur);
        var visible = visibleLines(display, doc);
        if (cur.line >= visible.to || cur.line < visible.from)
          { setTimeout(operation(cm, function () {if (counter == curCount) { extend(e); }}), 150); }
      } else {
        var outside = e.clientY < editorSize.top ? -20 : e.clientY > editorSize.bottom ? 20 : 0;
        if (outside) { setTimeout(operation(cm, function () {
          if (counter != curCount) { return }
          display.scroller.scrollTop += outside;
          extend(e);
        }), 50); }
      }
    }

    function done(e) {
      cm.state.selectingText = false;
      counter = Infinity;
      // If e is null or undefined we interpret this as someone trying
      // to explicitly cancel the selection rather than the user
      // letting go of the mouse button.
      if (e) {
        e_preventDefault(e);
        display.input.focus();
      }
      off(display.wrapper.ownerDocument, "mousemove", move);
      off(display.wrapper.ownerDocument, "mouseup", up);
      doc.history.lastSelOrigin = null;
    }

    var move = operation(cm, function (e) {
      if (e.buttons === 0 || !e_button(e)) { done(e); }
      else { extend(e); }
    });
    var up = operation(cm, done);
    cm.state.selectingText = up;
    on(display.wrapper.ownerDocument, "mousemove", move);
    on(display.wrapper.ownerDocument, "mouseup", up);
  }

  // Used when mouse-selecting to adjust the anchor to the proper side
  // of a bidi jump depending on the visual position of the head.
  function bidiSimplify(cm, range) {
    var anchor = range.anchor;
    var head = range.head;
    var anchorLine = getLine(cm.doc, anchor.line);
    if (cmp(anchor, head) == 0 && anchor.sticky == head.sticky) { return range }
    var order = getOrder(anchorLine);
    if (!order) { return range }
    var index = getBidiPartAt(order, anchor.ch, anchor.sticky), part = order[index];
    if (part.from != anchor.ch && part.to != anchor.ch) { return range }
    var boundary = index + ((part.from == anchor.ch) == (part.level != 1) ? 0 : 1);
    if (boundary == 0 || boundary == order.length) { return range }

    // Compute the relative visual position of the head compared to the
    // anchor (<0 is to the left, >0 to the right)
    var leftSide;
    if (head.line != anchor.line) {
      leftSide = (head.line - anchor.line) * (cm.doc.direction == "ltr" ? 1 : -1) > 0;
    } else {
      var headIndex = getBidiPartAt(order, head.ch, head.sticky);
      var dir = headIndex - index || (head.ch - anchor.ch) * (part.level == 1 ? -1 : 1);
      if (headIndex == boundary - 1 || headIndex == boundary)
        { leftSide = dir < 0; }
      else
        { leftSide = dir > 0; }
    }

    var usePart = order[boundary + (leftSide ? -1 : 0)];
    var from = leftSide == (usePart.level == 1);
    var ch = from ? usePart.from : usePart.to, sticky = from ? "after" : "before";
    return anchor.ch == ch && anchor.sticky == sticky ? range : new Range(new Pos(anchor.line, ch, sticky), head)
  }


  // Determines whether an event happened in the gutter, and fires the
  // handlers for the corresponding event.
  function gutterEvent(cm, e, type, prevent) {
    var mX, mY;
    if (e.touches) {
      mX = e.touches[0].clientX;
      mY = e.touches[0].clientY;
    } else {
      try { mX = e.clientX; mY = e.clientY; }
      catch(e$1) { return false }
    }
    if (mX >= Math.floor(cm.display.gutters.getBoundingClientRect().right)) { return false }
    if (prevent) { e_preventDefault(e); }

    var display = cm.display;
    var lineBox = display.lineDiv.getBoundingClientRect();

    if (mY > lineBox.bottom || !hasHandler(cm, type)) { return e_defaultPrevented(e) }
    mY -= lineBox.top - display.viewOffset;

    for (var i = 0; i < cm.display.gutterSpecs.length; ++i) {
      var g = display.gutters.childNodes[i];
      if (g && g.getBoundingClientRect().right >= mX) {
        var line = lineAtHeight(cm.doc, mY);
        var gutter = cm.display.gutterSpecs[i];
        signal(cm, type, cm, line, gutter.className, e);
        return e_defaultPrevented(e)
      }
    }
  }

  function clickInGutter(cm, e) {
    return gutterEvent(cm, e, "gutterClick", true)
  }

  // CONTEXT MENU HANDLING

  // To make the context menu work, we need to briefly unhide the
  // textarea (making it as unobtrusive as possible) to let the
  // right-click take effect on it.
  function onContextMenu(cm, e) {
    if (eventInWidget(cm.display, e) || contextMenuInGutter(cm, e)) { return }
    if (signalDOMEvent(cm, e, "contextmenu")) { return }
    if (!captureRightClick) { cm.display.input.onContextMenu(e); }
  }

  function contextMenuInGutter(cm, e) {
    if (!hasHandler(cm, "gutterContextMenu")) { return false }
    return gutterEvent(cm, e, "gutterContextMenu", false)
  }

  function themeChanged(cm) {
    cm.display.wrapper.className = cm.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") +
      cm.options.theme.replace(/(^|\s)\s*/g, " cm-s-");
    clearCaches(cm);
  }

  var Init = {toString: function(){return "CodeMirror.Init"}};

  var defaults = {};
  var optionHandlers = {};

  function defineOptions(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    function option(name, deflt, handle, notOnInit) {
      CodeMirror.defaults[name] = deflt;
      if (handle) { optionHandlers[name] =
        notOnInit ? function (cm, val, old) {if (old != Init) { handle(cm, val, old); }} : handle; }
    }

    CodeMirror.defineOption = option;

    // Passed to option handlers when there is no old value.
    CodeMirror.Init = Init;

    // These two are, on init, called from the constructor because they
    // have to be initialized before the editor can start at all.
    option("value", "", function (cm, val) { return cm.setValue(val); }, true);
    option("mode", null, function (cm, val) {
      cm.doc.modeOption = val;
      loadMode(cm);
    }, true);

    option("indentUnit", 2, loadMode, true);
    option("indentWithTabs", false);
    option("smartIndent", true);
    option("tabSize", 4, function (cm) {
      resetModeState(cm);
      clearCaches(cm);
      regChange(cm);
    }, true);

    option("lineSeparator", null, function (cm, val) {
      cm.doc.lineSep = val;
      if (!val) { return }
      var newBreaks = [], lineNo = cm.doc.first;
      cm.doc.iter(function (line) {
        for (var pos = 0;;) {
          var found = line.text.indexOf(val, pos);
          if (found == -1) { break }
          pos = found + val.length;
          newBreaks.push(Pos(lineNo, found));
        }
        lineNo++;
      });
      for (var i = newBreaks.length - 1; i >= 0; i--)
        { replaceRange(cm.doc, val, newBreaks[i], Pos(newBreaks[i].line, newBreaks[i].ch + val.length)); }
    });
    option("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200c\u200e\u200f\u2028\u2029\ufeff\ufff9-\ufffc]/g, function (cm, val, old) {
      cm.state.specialChars = new RegExp(val.source + (val.test("\t") ? "" : "|\t"), "g");
      if (old != Init) { cm.refresh(); }
    });
    option("specialCharPlaceholder", defaultSpecialCharPlaceholder, function (cm) { return cm.refresh(); }, true);
    option("electricChars", true);
    option("inputStyle", mobile ? "contenteditable" : "textarea", function () {
      throw new Error("inputStyle can not (yet) be changed in a running editor") // FIXME
    }, true);
    option("spellcheck", false, function (cm, val) { return cm.getInputField().spellcheck = val; }, true);
    option("autocorrect", false, function (cm, val) { return cm.getInputField().autocorrect = val; }, true);
    option("autocapitalize", false, function (cm, val) { return cm.getInputField().autocapitalize = val; }, true);
    option("rtlMoveVisually", !windows);
    option("wholeLineUpdateBefore", true);

    option("theme", "default", function (cm) {
      themeChanged(cm);
      updateGutters(cm);
    }, true);
    option("keyMap", "default", function (cm, val, old) {
      var next = getKeyMap(val);
      var prev = old != Init && getKeyMap(old);
      if (prev && prev.detach) { prev.detach(cm, next); }
      if (next.attach) { next.attach(cm, prev || null); }
    });
    option("extraKeys", null);
    option("configureMouse", null);

    option("lineWrapping", false, wrappingChanged, true);
    option("gutters", [], function (cm, val) {
      cm.display.gutterSpecs = getGutters(val, cm.options.lineNumbers);
      updateGutters(cm);
    }, true);
    option("fixedGutter", true, function (cm, val) {
      cm.display.gutters.style.left = val ? compensateForHScroll(cm.display) + "px" : "0";
      cm.refresh();
    }, true);
    option("coverGutterNextToScrollbar", false, function (cm) { return updateScrollbars(cm); }, true);
    option("scrollbarStyle", "native", function (cm) {
      initScrollbars(cm);
      updateScrollbars(cm);
      cm.display.scrollbars.setScrollTop(cm.doc.scrollTop);
      cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft);
    }, true);
    option("lineNumbers", false, function (cm, val) {
      cm.display.gutterSpecs = getGutters(cm.options.gutters, val);
      updateGutters(cm);
    }, true);
    option("firstLineNumber", 1, updateGutters, true);
    option("lineNumberFormatter", function (integer) { return integer; }, updateGutters, true);
    option("showCursorWhenSelecting", false, updateSelection, true);

    option("resetSelectionOnContextMenu", true);
    option("lineWiseCopyCut", true);
    option("pasteLinesPerSelection", true);
    option("selectionsMayTouch", false);

    option("readOnly", false, function (cm, val) {
      if (val == "nocursor") {
        onBlur(cm);
        cm.display.input.blur();
      }
      cm.display.input.readOnlyChanged(val);
    });

    option("screenReaderLabel", null, function (cm, val) {
      val = (val === '') ? null : val;
      cm.display.input.screenReaderLabelChanged(val);
    });

    option("disableInput", false, function (cm, val) {if (!val) { cm.display.input.reset(); }}, true);
    option("dragDrop", true, dragDropChanged);
    option("allowDropFileTypes", null);

    option("cursorBlinkRate", 530);
    option("cursorScrollMargin", 0);
    option("cursorHeight", 1, updateSelection, true);
    option("singleCursorHeightPerLine", true, updateSelection, true);
    option("workTime", 100);
    option("workDelay", 100);
    option("flattenSpans", true, resetModeState, true);
    option("addModeClass", false, resetModeState, true);
    option("pollInterval", 100);
    option("undoDepth", 200, function (cm, val) { return cm.doc.history.undoDepth = val; });
    option("historyEventDelay", 1250);
    option("viewportMargin", 10, function (cm) { return cm.refresh(); }, true);
    option("maxHighlightLength", 10000, resetModeState, true);
    option("moveInputWithCursor", true, function (cm, val) {
      if (!val) { cm.display.input.resetPosition(); }
    });

    option("tabindex", null, function (cm, val) { return cm.display.input.getField().tabIndex = val || ""; });
    option("autofocus", null);
    option("direction", "ltr", function (cm, val) { return cm.doc.setDirection(val); }, true);
    option("phrases", null);
  }

  function dragDropChanged(cm, value, old) {
    var wasOn = old && old != Init;
    if (!value != !wasOn) {
      var funcs = cm.display.dragFunctions;
      var toggle = value ? on : off;
      toggle(cm.display.scroller, "dragstart", funcs.start);
      toggle(cm.display.scroller, "dragenter", funcs.enter);
      toggle(cm.display.scroller, "dragover", funcs.over);
      toggle(cm.display.scroller, "dragleave", funcs.leave);
      toggle(cm.display.scroller, "drop", funcs.drop);
    }
  }

  function wrappingChanged(cm) {
    if (cm.options.lineWrapping) {
      addClass(cm.display.wrapper, "CodeMirror-wrap");
      cm.display.sizer.style.minWidth = "";
      cm.display.sizerWidth = null;
    } else {
      rmClass(cm.display.wrapper, "CodeMirror-wrap");
      findMaxLine(cm);
    }
    estimateLineHeights(cm);
    regChange(cm);
    clearCaches(cm);
    setTimeout(function () { return updateScrollbars(cm); }, 100);
  }

  // A CodeMirror instance represents an editor. This is the object
  // that user code is usually dealing with.

  function CodeMirror(place, options) {
    var this$1 = this;

    if (!(this instanceof CodeMirror)) { return new CodeMirror(place, options) }

    this.options = options = options ? copyObj(options) : {};
    // Determine effective options based on given values and defaults.
    copyObj(defaults, options, false);

    var doc = options.value;
    if (typeof doc == "string") { doc = new Doc(doc, options.mode, null, options.lineSeparator, options.direction); }
    else if (options.mode) { doc.modeOption = options.mode; }
    this.doc = doc;

    var input = new CodeMirror.inputStyles[options.inputStyle](this);
    var display = this.display = new Display(place, doc, input, options);
    display.wrapper.CodeMirror = this;
    themeChanged(this);
    if (options.lineWrapping)
      { this.display.wrapper.className += " CodeMirror-wrap"; }
    initScrollbars(this);

    this.state = {
      keyMaps: [],  // stores maps added by addKeyMap
      overlays: [], // highlighting overlays, as added by addOverlay
      modeGen: 0,   // bumped when mode/overlay changes, used to invalidate highlighting info
      overwrite: false,
      delayingBlurEvent: false,
      focused: false,
      suppressEdits: false, // used to disable editing during key handlers when in readOnly mode
      pasteIncoming: -1, cutIncoming: -1, // help recognize paste/cut edits in input.poll
      selectingText: false,
      draggingText: false,
      highlight: new Delayed(), // stores highlight worker timeout
      keySeq: null,  // Unfinished key sequence
      specialChars: null
    };

    if (options.autofocus && !mobile) { display.input.focus(); }

    // Override magic textarea content restore that IE sometimes does
    // on our hidden textarea on reload
    if (ie && ie_version < 11) { setTimeout(function () { return this$1.display.input.reset(true); }, 20); }

    registerEventHandlers(this);
    ensureGlobalHandlers();

    startOperation(this);
    this.curOp.forceUpdate = true;
    attachDoc(this, doc);

    if ((options.autofocus && !mobile) || this.hasFocus())
      { setTimeout(bind(onFocus, this), 20); }
    else
      { onBlur(this); }

    for (var opt in optionHandlers) { if (optionHandlers.hasOwnProperty(opt))
      { optionHandlers[opt](this, options[opt], Init); } }
    maybeUpdateLineNumberWidth(this);
    if (options.finishInit) { options.finishInit(this); }
    for (var i = 0; i < initHooks.length; ++i) { initHooks[i](this); }
    endOperation(this);
    // Suppress optimizelegibility in Webkit, since it breaks text
    // measuring on line wrapping boundaries.
    if (webkit && options.lineWrapping &&
        getComputedStyle(display.lineDiv).textRendering == "optimizelegibility")
      { display.lineDiv.style.textRendering = "auto"; }
  }

  // The default configuration options.
  CodeMirror.defaults = defaults;
  // Functions to run when options are changed.
  CodeMirror.optionHandlers = optionHandlers;

  // Attach the necessary event handlers when initializing the editor
  function registerEventHandlers(cm) {
    var d = cm.display;
    on(d.scroller, "mousedown", operation(cm, onMouseDown));
    // Older IE's will not fire a second mousedown for a double click
    if (ie && ie_version < 11)
      { on(d.scroller, "dblclick", operation(cm, function (e) {
        if (signalDOMEvent(cm, e)) { return }
        var pos = posFromMouse(cm, e);
        if (!pos || clickInGutter(cm, e) || eventInWidget(cm.display, e)) { return }
        e_preventDefault(e);
        var word = cm.findWordAt(pos);
        extendSelection(cm.doc, word.anchor, word.head);
      })); }
    else
      { on(d.scroller, "dblclick", function (e) { return signalDOMEvent(cm, e) || e_preventDefault(e); }); }
    // Some browsers fire contextmenu *after* opening the menu, at
    // which point we can't mess with it anymore. Context menu is
    // handled in onMouseDown for these browsers.
    on(d.scroller, "contextmenu", function (e) { return onContextMenu(cm, e); });
    on(d.input.getField(), "contextmenu", function (e) {
      if (!d.scroller.contains(e.target)) { onContextMenu(cm, e); }
    });

    // Used to suppress mouse event handling when a touch happens
    var touchFinished, prevTouch = {end: 0};
    function finishTouch() {
      if (d.activeTouch) {
        touchFinished = setTimeout(function () { return d.activeTouch = null; }, 1000);
        prevTouch = d.activeTouch;
        prevTouch.end = +new Date;
      }
    }
    function isMouseLikeTouchEvent(e) {
      if (e.touches.length != 1) { return false }
      var touch = e.touches[0];
      return touch.radiusX <= 1 && touch.radiusY <= 1
    }
    function farAway(touch, other) {
      if (other.left == null) { return true }
      var dx = other.left - touch.left, dy = other.top - touch.top;
      return dx * dx + dy * dy > 20 * 20
    }
    on(d.scroller, "touchstart", function (e) {
      if (!signalDOMEvent(cm, e) && !isMouseLikeTouchEvent(e) && !clickInGutter(cm, e)) {
        d.input.ensurePolled();
        clearTimeout(touchFinished);
        var now = +new Date;
        d.activeTouch = {start: now, moved: false,
                         prev: now - prevTouch.end <= 300 ? prevTouch : null};
        if (e.touches.length == 1) {
          d.activeTouch.left = e.touches[0].pageX;
          d.activeTouch.top = e.touches[0].pageY;
        }
      }
    });
    on(d.scroller, "touchmove", function () {
      if (d.activeTouch) { d.activeTouch.moved = true; }
    });
    on(d.scroller, "touchend", function (e) {
      var touch = d.activeTouch;
      if (touch && !eventInWidget(d, e) && touch.left != null &&
          !touch.moved && new Date - touch.start < 300) {
        var pos = cm.coordsChar(d.activeTouch, "page"), range;
        if (!touch.prev || farAway(touch, touch.prev)) // Single tap
          { range = new Range(pos, pos); }
        else if (!touch.prev.prev || farAway(touch, touch.prev.prev)) // Double tap
          { range = cm.findWordAt(pos); }
        else // Triple tap
          { range = new Range(Pos(pos.line, 0), clipPos(cm.doc, Pos(pos.line + 1, 0))); }
        cm.setSelection(range.anchor, range.head);
        cm.focus();
        e_preventDefault(e);
      }
      finishTouch();
    });
    on(d.scroller, "touchcancel", finishTouch);

    // Sync scrolling between fake scrollbars and real scrollable
    // area, ensure viewport is updated when scrolling.
    on(d.scroller, "scroll", function () {
      if (d.scroller.clientHeight) {
        updateScrollTop(cm, d.scroller.scrollTop);
        setScrollLeft(cm, d.scroller.scrollLeft, true);
        signal(cm, "scroll", cm);
      }
    });

    // Listen to wheel events in order to try and update the viewport on time.
    on(d.scroller, "mousewheel", function (e) { return onScrollWheel(cm, e); });
    on(d.scroller, "DOMMouseScroll", function (e) { return onScrollWheel(cm, e); });

    // Prevent wrapper from ever scrolling
    on(d.wrapper, "scroll", function () { return d.wrapper.scrollTop = d.wrapper.scrollLeft = 0; });

    d.dragFunctions = {
      enter: function (e) {if (!signalDOMEvent(cm, e)) { e_stop(e); }},
      over: function (e) {if (!signalDOMEvent(cm, e)) { onDragOver(cm, e); e_stop(e); }},
      start: function (e) { return onDragStart(cm, e); },
      drop: operation(cm, onDrop),
      leave: function (e) {if (!signalDOMEvent(cm, e)) { clearDragCursor(cm); }}
    };

    var inp = d.input.getField();
    on(inp, "keyup", function (e) { return onKeyUp.call(cm, e); });
    on(inp, "keydown", operation(cm, onKeyDown));
    on(inp, "keypress", operation(cm, onKeyPress));
    on(inp, "focus", function (e) { return onFocus(cm, e); });
    on(inp, "blur", function (e) { return onBlur(cm, e); });
  }

  var initHooks = [];
  CodeMirror.defineInitHook = function (f) { return initHooks.push(f); };

  // Indent the given line. The how parameter can be "smart",
  // "add"/null, "subtract", or "prev". When aggressive is false
  // (typically set to true for forced single-line indents), empty
  // lines are not indented, and places where the mode returns Pass
  // are left alone.
  function indentLine(cm, n, how, aggressive) {
    var doc = cm.doc, state;
    if (how == null) { how = "add"; }
    if (how == "smart") {
      // Fall back to "prev" when the mode doesn't have an indentation
      // method.
      if (!doc.mode.indent) { how = "prev"; }
      else { state = getContextBefore(cm, n).state; }
    }

    var tabSize = cm.options.tabSize;
    var line = getLine(doc, n), curSpace = countColumn(line.text, null, tabSize);
    if (line.stateAfter) { line.stateAfter = null; }
    var curSpaceString = line.text.match(/^\s*/)[0], indentation;
    if (!aggressive && !/\S/.test(line.text)) {
      indentation = 0;
      how = "not";
    } else if (how == "smart") {
      indentation = doc.mode.indent(state, line.text.slice(curSpaceString.length), line.text);
      if (indentation == Pass || indentation > 150) {
        if (!aggressive) { return }
        how = "prev";
      }
    }
    if (how == "prev") {
      if (n > doc.first) { indentation = countColumn(getLine(doc, n-1).text, null, tabSize); }
      else { indentation = 0; }
    } else if (how == "add") {
      indentation = curSpace + cm.options.indentUnit;
    } else if (how == "subtract") {
      indentation = curSpace - cm.options.indentUnit;
    } else if (typeof how == "number") {
      indentation = curSpace + how;
    }
    indentation = Math.max(0, indentation);

    var indentString = "", pos = 0;
    if (cm.options.indentWithTabs)
      { for (var i = Math.floor(indentation / tabSize); i; --i) {pos += tabSize; indentString += "\t";} }
    if (pos < indentation) { indentString += spaceStr(indentation - pos); }

    if (indentString != curSpaceString) {
      replaceRange(doc, indentString, Pos(n, 0), Pos(n, curSpaceString.length), "+input");
      line.stateAfter = null;
      return true
    } else {
      // Ensure that, if the cursor was in the whitespace at the start
      // of the line, it is moved to the end of that space.
      for (var i$1 = 0; i$1 < doc.sel.ranges.length; i$1++) {
        var range = doc.sel.ranges[i$1];
        if (range.head.line == n && range.head.ch < curSpaceString.length) {
          var pos$1 = Pos(n, curSpaceString.length);
          replaceOneSelection(doc, i$1, new Range(pos$1, pos$1));
          break
        }
      }
    }
  }

  // This will be set to a {lineWise: bool, text: [string]} object, so
  // that, when pasting, we know what kind of selections the copied
  // text was made out of.
  var lastCopied = null;

  function setLastCopied(newLastCopied) {
    lastCopied = newLastCopied;
  }

  function applyTextInput(cm, inserted, deleted, sel, origin) {
    var doc = cm.doc;
    cm.display.shift = false;
    if (!sel) { sel = doc.sel; }

    var recent = +new Date - 200;
    var paste = origin == "paste" || cm.state.pasteIncoming > recent;
    var textLines = splitLinesAuto(inserted), multiPaste = null;
    // When pasting N lines into N selections, insert one line per selection
    if (paste && sel.ranges.length > 1) {
      if (lastCopied && lastCopied.text.join("\n") == inserted) {
        if (sel.ranges.length % lastCopied.text.length == 0) {
          multiPaste = [];
          for (var i = 0; i < lastCopied.text.length; i++)
            { multiPaste.push(doc.splitLines(lastCopied.text[i])); }
        }
      } else if (textLines.length == sel.ranges.length && cm.options.pasteLinesPerSelection) {
        multiPaste = map(textLines, function (l) { return [l]; });
      }
    }

    var updateInput = cm.curOp.updateInput;
    // Normal behavior is to insert the new text into every selection
    for (var i$1 = sel.ranges.length - 1; i$1 >= 0; i$1--) {
      var range = sel.ranges[i$1];
      var from = range.from(), to = range.to();
      if (range.empty()) {
        if (deleted && deleted > 0) // Handle deletion
          { from = Pos(from.line, from.ch - deleted); }
        else if (cm.state.overwrite && !paste) // Handle overwrite
          { to = Pos(to.line, Math.min(getLine(doc, to.line).text.length, to.ch + lst(textLines).length)); }
        else if (paste && lastCopied && lastCopied.lineWise && lastCopied.text.join("\n") == textLines.join("\n"))
          { from = to = Pos(from.line, 0); }
      }
      var changeEvent = {from: from, to: to, text: multiPaste ? multiPaste[i$1 % multiPaste.length] : textLines,
                         origin: origin || (paste ? "paste" : cm.state.cutIncoming > recent ? "cut" : "+input")};
      makeChange(cm.doc, changeEvent);
      signalLater(cm, "inputRead", cm, changeEvent);
    }
    if (inserted && !paste)
      { triggerElectric(cm, inserted); }

    ensureCursorVisible(cm);
    if (cm.curOp.updateInput < 2) { cm.curOp.updateInput = updateInput; }
    cm.curOp.typing = true;
    cm.state.pasteIncoming = cm.state.cutIncoming = -1;
  }

  function handlePaste(e, cm) {
    var pasted = e.clipboardData && e.clipboardData.getData("Text");
    if (pasted) {
      e.preventDefault();
      if (!cm.isReadOnly() && !cm.options.disableInput)
        { runInOp(cm, function () { return applyTextInput(cm, pasted, 0, null, "paste"); }); }
      return true
    }
  }

  function triggerElectric(cm, inserted) {
    // When an 'electric' character is inserted, immediately trigger a reindent
    if (!cm.options.electricChars || !cm.options.smartIndent) { return }
    var sel = cm.doc.sel;

    for (var i = sel.ranges.length - 1; i >= 0; i--) {
      var range = sel.ranges[i];
      if (range.head.ch > 100 || (i && sel.ranges[i - 1].head.line == range.head.line)) { continue }
      var mode = cm.getModeAt(range.head);
      var indented = false;
      if (mode.electricChars) {
        for (var j = 0; j < mode.electricChars.length; j++)
          { if (inserted.indexOf(mode.electricChars.charAt(j)) > -1) {
            indented = indentLine(cm, range.head.line, "smart");
            break
          } }
      } else if (mode.electricInput) {
        if (mode.electricInput.test(getLine(cm.doc, range.head.line).text.slice(0, range.head.ch)))
          { indented = indentLine(cm, range.head.line, "smart"); }
      }
      if (indented) { signalLater(cm, "electricInput", cm, range.head.line); }
    }
  }

  function copyableRanges(cm) {
    var text = [], ranges = [];
    for (var i = 0; i < cm.doc.sel.ranges.length; i++) {
      var line = cm.doc.sel.ranges[i].head.line;
      var lineRange = {anchor: Pos(line, 0), head: Pos(line + 1, 0)};
      ranges.push(lineRange);
      text.push(cm.getRange(lineRange.anchor, lineRange.head));
    }
    return {text: text, ranges: ranges}
  }

  function disableBrowserMagic(field, spellcheck, autocorrect, autocapitalize) {
    field.setAttribute("autocorrect", autocorrect ? "" : "off");
    field.setAttribute("autocapitalize", autocapitalize ? "" : "off");
    field.setAttribute("spellcheck", !!spellcheck);
  }

  function hiddenTextarea() {
    var te = elt("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none");
    var div = elt("div", [te], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
    // The textarea is kept positioned near the cursor to prevent the
    // fact that it'll be scrolled into view on input from scrolling
    // our fake cursor out of view. On webkit, when wrap=off, paste is
    // very slow. So make the area wide instead.
    if (webkit) { te.style.width = "1000px"; }
    else { te.setAttribute("wrap", "off"); }
    // If border: 0; -- iOS fails to open keyboard (issue #1287)
    if (ios) { te.style.border = "1px solid black"; }
    disableBrowserMagic(te);
    return div
  }

  // The publicly visible API. Note that methodOp(f) means
  // 'wrap f in an operation, performed on its `this` parameter'.

  // This is not the complete set of editor methods. Most of the
  // methods defined on the Doc type are also injected into
  // CodeMirror.prototype, for backwards compatibility and
  // convenience.

  function addEditorMethods(CodeMirror) {
    var optionHandlers = CodeMirror.optionHandlers;

    var helpers = CodeMirror.helpers = {};

    CodeMirror.prototype = {
      constructor: CodeMirror,
      focus: function(){window.focus(); this.display.input.focus();},

      setOption: function(option, value) {
        var options = this.options, old = options[option];
        if (options[option] == value && option != "mode") { return }
        options[option] = value;
        if (optionHandlers.hasOwnProperty(option))
          { operation(this, optionHandlers[option])(this, value, old); }
        signal(this, "optionChange", this, option);
      },

      getOption: function(option) {return this.options[option]},
      getDoc: function() {return this.doc},

      addKeyMap: function(map, bottom) {
        this.state.keyMaps[bottom ? "push" : "unshift"](getKeyMap(map));
      },
      removeKeyMap: function(map) {
        var maps = this.state.keyMaps;
        for (var i = 0; i < maps.length; ++i)
          { if (maps[i] == map || maps[i].name == map) {
            maps.splice(i, 1);
            return true
          } }
      },

      addOverlay: methodOp(function(spec, options) {
        var mode = spec.token ? spec : CodeMirror.getMode(this.options, spec);
        if (mode.startState) { throw new Error("Overlays may not be stateful.") }
        insertSorted(this.state.overlays,
                     {mode: mode, modeSpec: spec, opaque: options && options.opaque,
                      priority: (options && options.priority) || 0},
                     function (overlay) { return overlay.priority; });
        this.state.modeGen++;
        regChange(this);
      }),
      removeOverlay: methodOp(function(spec) {
        var overlays = this.state.overlays;
        for (var i = 0; i < overlays.length; ++i) {
          var cur = overlays[i].modeSpec;
          if (cur == spec || typeof spec == "string" && cur.name == spec) {
            overlays.splice(i, 1);
            this.state.modeGen++;
            regChange(this);
            return
          }
        }
      }),

      indentLine: methodOp(function(n, dir, aggressive) {
        if (typeof dir != "string" && typeof dir != "number") {
          if (dir == null) { dir = this.options.smartIndent ? "smart" : "prev"; }
          else { dir = dir ? "add" : "subtract"; }
        }
        if (isLine(this.doc, n)) { indentLine(this, n, dir, aggressive); }
      }),
      indentSelection: methodOp(function(how) {
        var ranges = this.doc.sel.ranges, end = -1;
        for (var i = 0; i < ranges.length; i++) {
          var range = ranges[i];
          if (!range.empty()) {
            var from = range.from(), to = range.to();
            var start = Math.max(end, from.line);
            end = Math.min(this.lastLine(), to.line - (to.ch ? 0 : 1)) + 1;
            for (var j = start; j < end; ++j)
              { indentLine(this, j, how); }
            var newRanges = this.doc.sel.ranges;
            if (from.ch == 0 && ranges.length == newRanges.length && newRanges[i].from().ch > 0)
              { replaceOneSelection(this.doc, i, new Range(from, newRanges[i].to()), sel_dontScroll); }
          } else if (range.head.line > end) {
            indentLine(this, range.head.line, how, true);
            end = range.head.line;
            if (i == this.doc.sel.primIndex) { ensureCursorVisible(this); }
          }
        }
      }),

      // Fetch the parser token for a given character. Useful for hacks
      // that want to inspect the mode state (say, for completion).
      getTokenAt: function(pos, precise) {
        return takeToken(this, pos, precise)
      },

      getLineTokens: function(line, precise) {
        return takeToken(this, Pos(line), precise, true)
      },

      getTokenTypeAt: function(pos) {
        pos = clipPos(this.doc, pos);
        var styles = getLineStyles(this, getLine(this.doc, pos.line));
        var before = 0, after = (styles.length - 1) / 2, ch = pos.ch;
        var type;
        if (ch == 0) { type = styles[2]; }
        else { for (;;) {
          var mid = (before + after) >> 1;
          if ((mid ? styles[mid * 2 - 1] : 0) >= ch) { after = mid; }
          else if (styles[mid * 2 + 1] < ch) { before = mid + 1; }
          else { type = styles[mid * 2 + 2]; break }
        } }
        var cut = type ? type.indexOf("overlay ") : -1;
        return cut < 0 ? type : cut == 0 ? null : type.slice(0, cut - 1)
      },

      getModeAt: function(pos) {
        var mode = this.doc.mode;
        if (!mode.innerMode) { return mode }
        return CodeMirror.innerMode(mode, this.getTokenAt(pos).state).mode
      },

      getHelper: function(pos, type) {
        return this.getHelpers(pos, type)[0]
      },

      getHelpers: function(pos, type) {
        var found = [];
        if (!helpers.hasOwnProperty(type)) { return found }
        var help = helpers[type], mode = this.getModeAt(pos);
        if (typeof mode[type] == "string") {
          if (help[mode[type]]) { found.push(help[mode[type]]); }
        } else if (mode[type]) {
          for (var i = 0; i < mode[type].length; i++) {
            var val = help[mode[type][i]];
            if (val) { found.push(val); }
          }
        } else if (mode.helperType && help[mode.helperType]) {
          found.push(help[mode.helperType]);
        } else if (help[mode.name]) {
          found.push(help[mode.name]);
        }
        for (var i$1 = 0; i$1 < help._global.length; i$1++) {
          var cur = help._global[i$1];
          if (cur.pred(mode, this) && indexOf(found, cur.val) == -1)
            { found.push(cur.val); }
        }
        return found
      },

      getStateAfter: function(line, precise) {
        var doc = this.doc;
        line = clipLine(doc, line == null ? doc.first + doc.size - 1: line);
        return getContextBefore(this, line + 1, precise).state
      },

      cursorCoords: function(start, mode) {
        var pos, range = this.doc.sel.primary();
        if (start == null) { pos = range.head; }
        else if (typeof start == "object") { pos = clipPos(this.doc, start); }
        else { pos = start ? range.from() : range.to(); }
        return cursorCoords(this, pos, mode || "page")
      },

      charCoords: function(pos, mode) {
        return charCoords(this, clipPos(this.doc, pos), mode || "page")
      },

      coordsChar: function(coords, mode) {
        coords = fromCoordSystem(this, coords, mode || "page");
        return coordsChar(this, coords.left, coords.top)
      },

      lineAtHeight: function(height, mode) {
        height = fromCoordSystem(this, {top: height, left: 0}, mode || "page").top;
        return lineAtHeight(this.doc, height + this.display.viewOffset)
      },
      heightAtLine: function(line, mode, includeWidgets) {
        var end = false, lineObj;
        if (typeof line == "number") {
          var last = this.doc.first + this.doc.size - 1;
          if (line < this.doc.first) { line = this.doc.first; }
          else if (line > last) { line = last; end = true; }
          lineObj = getLine(this.doc, line);
        } else {
          lineObj = line;
        }
        return intoCoordSystem(this, lineObj, {top: 0, left: 0}, mode || "page", includeWidgets || end).top +
          (end ? this.doc.height - heightAtLine(lineObj) : 0)
      },

      defaultTextHeight: function() { return textHeight(this.display) },
      defaultCharWidth: function() { return charWidth(this.display) },

      getViewport: function() { return {from: this.display.viewFrom, to: this.display.viewTo}},

      addWidget: function(pos, node, scroll, vert, horiz) {
        var display = this.display;
        pos = cursorCoords(this, clipPos(this.doc, pos));
        var top = pos.bottom, left = pos.left;
        node.style.position = "absolute";
        node.setAttribute("cm-ignore-events", "true");
        this.display.input.setUneditable(node);
        display.sizer.appendChild(node);
        if (vert == "over") {
          top = pos.top;
        } else if (vert == "above" || vert == "near") {
          var vspace = Math.max(display.wrapper.clientHeight, this.doc.height),
          hspace = Math.max(display.sizer.clientWidth, display.lineSpace.clientWidth);
          // Default to positioning above (if specified and possible); otherwise default to positioning below
          if ((vert == 'above' || pos.bottom + node.offsetHeight > vspace) && pos.top > node.offsetHeight)
            { top = pos.top - node.offsetHeight; }
          else if (pos.bottom + node.offsetHeight <= vspace)
            { top = pos.bottom; }
          if (left + node.offsetWidth > hspace)
            { left = hspace - node.offsetWidth; }
        }
        node.style.top = top + "px";
        node.style.left = node.style.right = "";
        if (horiz == "right") {
          left = display.sizer.clientWidth - node.offsetWidth;
          node.style.right = "0px";
        } else {
          if (horiz == "left") { left = 0; }
          else if (horiz == "middle") { left = (display.sizer.clientWidth - node.offsetWidth) / 2; }
          node.style.left = left + "px";
        }
        if (scroll)
          { scrollIntoView(this, {left: left, top: top, right: left + node.offsetWidth, bottom: top + node.offsetHeight}); }
      },

      triggerOnKeyDown: methodOp(onKeyDown),
      triggerOnKeyPress: methodOp(onKeyPress),
      triggerOnKeyUp: onKeyUp,
      triggerOnMouseDown: methodOp(onMouseDown),

      execCommand: function(cmd) {
        if (commands.hasOwnProperty(cmd))
          { return commands[cmd].call(null, this) }
      },

      triggerElectric: methodOp(function(text) { triggerElectric(this, text); }),

      findPosH: function(from, amount, unit, visually) {
        var dir = 1;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          cur = findPosH(this.doc, cur, dir, unit, visually);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveH: methodOp(function(dir, unit) {
        var this$1 = this;

        this.extendSelectionsBy(function (range) {
          if (this$1.display.shift || this$1.doc.extend || range.empty())
            { return findPosH(this$1.doc, range.head, dir, unit, this$1.options.rtlMoveVisually) }
          else
            { return dir < 0 ? range.from() : range.to() }
        }, sel_move);
      }),

      deleteH: methodOp(function(dir, unit) {
        var sel = this.doc.sel, doc = this.doc;
        if (sel.somethingSelected())
          { doc.replaceSelection("", null, "+delete"); }
        else
          { deleteNearSelection(this, function (range) {
            var other = findPosH(doc, range.head, dir, unit, false);
            return dir < 0 ? {from: other, to: range.head} : {from: range.head, to: other}
          }); }
      }),

      findPosV: function(from, amount, unit, goalColumn) {
        var dir = 1, x = goalColumn;
        if (amount < 0) { dir = -1; amount = -amount; }
        var cur = clipPos(this.doc, from);
        for (var i = 0; i < amount; ++i) {
          var coords = cursorCoords(this, cur, "div");
          if (x == null) { x = coords.left; }
          else { coords.left = x; }
          cur = findPosV(this, coords, dir, unit);
          if (cur.hitSide) { break }
        }
        return cur
      },

      moveV: methodOp(function(dir, unit) {
        var this$1 = this;

        var doc = this.doc, goals = [];
        var collapse = !this.display.shift && !doc.extend && doc.sel.somethingSelected();
        doc.extendSelectionsBy(function (range) {
          if (collapse)
            { return dir < 0 ? range.from() : range.to() }
          var headPos = cursorCoords(this$1, range.head, "div");
          if (range.goalColumn != null) { headPos.left = range.goalColumn; }
          goals.push(headPos.left);
          var pos = findPosV(this$1, headPos, dir, unit);
          if (unit == "page" && range == doc.sel.primary())
            { addToScrollTop(this$1, charCoords(this$1, pos, "div").top - headPos.top); }
          return pos
        }, sel_move);
        if (goals.length) { for (var i = 0; i < doc.sel.ranges.length; i++)
          { doc.sel.ranges[i].goalColumn = goals[i]; } }
      }),

      // Find the word at the given position (as returned by coordsChar).
      findWordAt: function(pos) {
        var doc = this.doc, line = getLine(doc, pos.line).text;
        var start = pos.ch, end = pos.ch;
        if (line) {
          var helper = this.getHelper(pos, "wordChars");
          if ((pos.sticky == "before" || end == line.length) && start) { --start; } else { ++end; }
          var startChar = line.charAt(start);
          var check = isWordChar(startChar, helper)
            ? function (ch) { return isWordChar(ch, helper); }
            : /\s/.test(startChar) ? function (ch) { return /\s/.test(ch); }
            : function (ch) { return (!/\s/.test(ch) && !isWordChar(ch)); };
          while (start > 0 && check(line.charAt(start - 1))) { --start; }
          while (end < line.length && check(line.charAt(end))) { ++end; }
        }
        return new Range(Pos(pos.line, start), Pos(pos.line, end))
      },

      toggleOverwrite: function(value) {
        if (value != null && value == this.state.overwrite) { return }
        if (this.state.overwrite = !this.state.overwrite)
          { addClass(this.display.cursorDiv, "CodeMirror-overwrite"); }
        else
          { rmClass(this.display.cursorDiv, "CodeMirror-overwrite"); }

        signal(this, "overwriteToggle", this, this.state.overwrite);
      },
      hasFocus: function() { return this.display.input.getField() == activeElt() },
      isReadOnly: function() { return !!(this.options.readOnly || this.doc.cantEdit) },

      scrollTo: methodOp(function (x, y) { scrollToCoords(this, x, y); }),
      getScrollInfo: function() {
        var scroller = this.display.scroller;
        return {left: scroller.scrollLeft, top: scroller.scrollTop,
                height: scroller.scrollHeight - scrollGap(this) - this.display.barHeight,
                width: scroller.scrollWidth - scrollGap(this) - this.display.barWidth,
                clientHeight: displayHeight(this), clientWidth: displayWidth(this)}
      },

      scrollIntoView: methodOp(function(range, margin) {
        if (range == null) {
          range = {from: this.doc.sel.primary().head, to: null};
          if (margin == null) { margin = this.options.cursorScrollMargin; }
        } else if (typeof range == "number") {
          range = {from: Pos(range, 0), to: null};
        } else if (range.from == null) {
          range = {from: range, to: null};
        }
        if (!range.to) { range.to = range.from; }
        range.margin = margin || 0;

        if (range.from.line != null) {
          scrollToRange(this, range);
        } else {
          scrollToCoordsRange(this, range.from, range.to, range.margin);
        }
      }),

      setSize: methodOp(function(width, height) {
        var this$1 = this;

        var interpret = function (val) { return typeof val == "number" || /^\d+$/.test(String(val)) ? val + "px" : val; };
        if (width != null) { this.display.wrapper.style.width = interpret(width); }
        if (height != null) { this.display.wrapper.style.height = interpret(height); }
        if (this.options.lineWrapping) { clearLineMeasurementCache(this); }
        var lineNo = this.display.viewFrom;
        this.doc.iter(lineNo, this.display.viewTo, function (line) {
          if (line.widgets) { for (var i = 0; i < line.widgets.length; i++)
            { if (line.widgets[i].noHScroll) { regLineChange(this$1, lineNo, "widget"); break } } }
          ++lineNo;
        });
        this.curOp.forceUpdate = true;
        signal(this, "refresh", this);
      }),

      operation: function(f){return runInOp(this, f)},
      startOperation: function(){return startOperation(this)},
      endOperation: function(){return endOperation(this)},

      refresh: methodOp(function() {
        var oldHeight = this.display.cachedTextHeight;
        regChange(this);
        this.curOp.forceUpdate = true;
        clearCaches(this);
        scrollToCoords(this, this.doc.scrollLeft, this.doc.scrollTop);
        updateGutterSpace(this.display);
        if (oldHeight == null || Math.abs(oldHeight - textHeight(this.display)) > .5 || this.options.lineWrapping)
          { estimateLineHeights(this); }
        signal(this, "refresh", this);
      }),

      swapDoc: methodOp(function(doc) {
        var old = this.doc;
        old.cm = null;
        // Cancel the current text selection if any (#5821)
        if (this.state.selectingText) { this.state.selectingText(); }
        attachDoc(this, doc);
        clearCaches(this);
        this.display.input.reset();
        scrollToCoords(this, doc.scrollLeft, doc.scrollTop);
        this.curOp.forceScroll = true;
        signalLater(this, "swapDoc", this, old);
        return old
      }),

      phrase: function(phraseText) {
        var phrases = this.options.phrases;
        return phrases && Object.prototype.hasOwnProperty.call(phrases, phraseText) ? phrases[phraseText] : phraseText
      },

      getInputField: function(){return this.display.input.getField()},
      getWrapperElement: function(){return this.display.wrapper},
      getScrollerElement: function(){return this.display.scroller},
      getGutterElement: function(){return this.display.gutters}
    };
    eventMixin(CodeMirror);

    CodeMirror.registerHelper = function(type, name, value) {
      if (!helpers.hasOwnProperty(type)) { helpers[type] = CodeMirror[type] = {_global: []}; }
      helpers[type][name] = value;
    };
    CodeMirror.registerGlobalHelper = function(type, name, predicate, value) {
      CodeMirror.registerHelper(type, name, value);
      helpers[type]._global.push({pred: predicate, val: value});
    };
  }

  // Used for horizontal relative motion. Dir is -1 or 1 (left or
  // right), unit can be "char", "column" (like char, but doesn't
  // cross line boundaries), "word" (across next word), or "group" (to
  // the start of next group of word or non-word-non-whitespace
  // chars). The visually param controls whether, in right-to-left
  // text, direction 1 means to move towards the next index in the
  // string, or towards the character to the right of the current
  // position. The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosH(doc, pos, dir, unit, visually) {
    var oldPos = pos;
    var origDir = dir;
    var lineObj = getLine(doc, pos.line);
    var lineDir = visually && doc.direction == "rtl" ? -dir : dir;
    function findNextLine() {
      var l = pos.line + lineDir;
      if (l < doc.first || l >= doc.first + doc.size) { return false }
      pos = new Pos(l, pos.ch, pos.sticky);
      return lineObj = getLine(doc, l)
    }
    function moveOnce(boundToLine) {
      var next;
      if (visually) {
        next = moveVisually(doc.cm, lineObj, pos, dir);
      } else {
        next = moveLogically(lineObj, pos, dir);
      }
      if (next == null) {
        if (!boundToLine && findNextLine())
          { pos = endOfLine(visually, doc.cm, lineObj, pos.line, lineDir); }
        else
          { return false }
      } else {
        pos = next;
      }
      return true
    }

    if (unit == "char") {
      moveOnce();
    } else if (unit == "column") {
      moveOnce(true);
    } else if (unit == "word" || unit == "group") {
      var sawType = null, group = unit == "group";
      var helper = doc.cm && doc.cm.getHelper(pos, "wordChars");
      for (var first = true;; first = false) {
        if (dir < 0 && !moveOnce(!first)) { break }
        var cur = lineObj.text.charAt(pos.ch) || "\n";
        var type = isWordChar(cur, helper) ? "w"
          : group && cur == "\n" ? "n"
          : !group || /\s/.test(cur) ? null
          : "p";
        if (group && !first && !type) { type = "s"; }
        if (sawType && sawType != type) {
          if (dir < 0) {dir = 1; moveOnce(); pos.sticky = "after";}
          break
        }

        if (type) { sawType = type; }
        if (dir > 0 && !moveOnce(!first)) { break }
      }
    }
    var result = skipAtomic(doc, pos, oldPos, origDir, true);
    if (equalCursorPos(oldPos, result)) { result.hitSide = true; }
    return result
  }

  // For relative vertical movement. Dir may be -1 or 1. Unit can be
  // "page" or "line". The resulting position will have a hitSide=true
  // property if it reached the end of the document.
  function findPosV(cm, pos, dir, unit) {
    var doc = cm.doc, x = pos.left, y;
    if (unit == "page") {
      var pageSize = Math.min(cm.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight);
      var moveAmount = Math.max(pageSize - .5 * textHeight(cm.display), 3);
      y = (dir > 0 ? pos.bottom : pos.top) + dir * moveAmount;

    } else if (unit == "line") {
      y = dir > 0 ? pos.bottom + 3 : pos.top - 3;
    }
    var target;
    for (;;) {
      target = coordsChar(cm, x, y);
      if (!target.outside) { break }
      if (dir < 0 ? y <= 0 : y >= doc.height) { target.hitSide = true; break }
      y += dir * 5;
    }
    return target
  }

  // CONTENTEDITABLE INPUT STYLE

  var ContentEditableInput = function(cm) {
    this.cm = cm;
    this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null;
    this.polling = new Delayed();
    this.composing = null;
    this.gracePeriod = false;
    this.readDOMTimeout = null;
  };

  ContentEditableInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = input.cm;
    var div = input.div = display.lineDiv;
    disableBrowserMagic(div, cm.options.spellcheck, cm.options.autocorrect, cm.options.autocapitalize);

    function belongsToInput(e) {
      for (var t = e.target; t; t = t.parentNode) {
        if (t == div) { return true }
        if (/\bCodeMirror-(?:line)?widget\b/.test(t.className)) { break }
      }
      return false
    }

    on(div, "paste", function (e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }
      // IE doesn't fire input events, so we schedule a read for the pasted content in this way
      if (ie_version <= 11) { setTimeout(operation(cm, function () { return this$1.updateFromDOM(); }), 20); }
    });

    on(div, "compositionstart", function (e) {
      this$1.composing = {data: e.data, done: false};
    });
    on(div, "compositionupdate", function (e) {
      if (!this$1.composing) { this$1.composing = {data: e.data, done: false}; }
    });
    on(div, "compositionend", function (e) {
      if (this$1.composing) {
        if (e.data != this$1.composing.data) { this$1.readFromDOMSoon(); }
        this$1.composing.done = true;
      }
    });

    on(div, "touchstart", function () { return input.forceCompositionEnd(); });

    on(div, "input", function () {
      if (!this$1.composing) { this$1.readFromDOMSoon(); }
    });

    function onCopyCut(e) {
      if (!belongsToInput(e) || signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
        if (e.type == "cut") { cm.replaceSelection("", null, "cut"); }
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.operation(function () {
            cm.setSelections(ranges.ranges, 0, sel_dontScroll);
            cm.replaceSelection("", null, "cut");
          });
        }
      }
      if (e.clipboardData) {
        e.clipboardData.clearData();
        var content = lastCopied.text.join("\n");
        // iOS exposes the clipboard API, but seems to discard content inserted into it
        e.clipboardData.setData("Text", content);
        if (e.clipboardData.getData("Text") == content) {
          e.preventDefault();
          return
        }
      }
      // Old-fashioned briefly-focus-a-textarea hack
      var kludge = hiddenTextarea(), te = kludge.firstChild;
      cm.display.lineSpace.insertBefore(kludge, cm.display.lineSpace.firstChild);
      te.value = lastCopied.text.join("\n");
      var hadFocus = document.activeElement;
      selectInput(te);
      setTimeout(function () {
        cm.display.lineSpace.removeChild(kludge);
        hadFocus.focus();
        if (hadFocus == div) { input.showPrimarySelection(); }
      }, 50);
    }
    on(div, "copy", onCopyCut);
    on(div, "cut", onCopyCut);
  };

  ContentEditableInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.div.setAttribute('aria-label', label);
    } else {
      this.div.removeAttribute('aria-label');
    }
  };

  ContentEditableInput.prototype.prepareSelection = function () {
    var result = prepareSelection(this.cm, false);
    result.focus = document.activeElement == this.div;
    return result
  };

  ContentEditableInput.prototype.showSelection = function (info, takeFocus) {
    if (!info || !this.cm.display.view.length) { return }
    if (info.focus || takeFocus) { this.showPrimarySelection(); }
    this.showMultipleSelections(info);
  };

  ContentEditableInput.prototype.getSelection = function () {
    return this.cm.display.wrapper.ownerDocument.getSelection()
  };

  ContentEditableInput.prototype.showPrimarySelection = function () {
    var sel = this.getSelection(), cm = this.cm, prim = cm.doc.sel.primary();
    var from = prim.from(), to = prim.to();

    if (cm.display.viewTo == cm.display.viewFrom || from.line >= cm.display.viewTo || to.line < cm.display.viewFrom) {
      sel.removeAllRanges();
      return
    }

    var curAnchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var curFocus = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (curAnchor && !curAnchor.bad && curFocus && !curFocus.bad &&
        cmp(minPos(curAnchor, curFocus), from) == 0 &&
        cmp(maxPos(curAnchor, curFocus), to) == 0)
      { return }

    var view = cm.display.view;
    var start = (from.line >= cm.display.viewFrom && posToDOM(cm, from)) ||
        {node: view[0].measure.map[2], offset: 0};
    var end = to.line < cm.display.viewTo && posToDOM(cm, to);
    if (!end) {
      var measure = view[view.length - 1].measure;
      var map = measure.maps ? measure.maps[measure.maps.length - 1] : measure.map;
      end = {node: map[map.length - 1], offset: map[map.length - 2] - map[map.length - 3]};
    }

    if (!start || !end) {
      sel.removeAllRanges();
      return
    }

    var old = sel.rangeCount && sel.getRangeAt(0), rng;
    try { rng = range(start.node, start.offset, end.offset, end.node); }
    catch(e) {} // Our model of the DOM might be outdated, in which case the range we try to set can be impossible
    if (rng) {
      if (!gecko && cm.state.focused) {
        sel.collapse(start.node, start.offset);
        if (!rng.collapsed) {
          sel.removeAllRanges();
          sel.addRange(rng);
        }
      } else {
        sel.removeAllRanges();
        sel.addRange(rng);
      }
      if (old && sel.anchorNode == null) { sel.addRange(old); }
      else if (gecko) { this.startGracePeriod(); }
    }
    this.rememberSelection();
  };

  ContentEditableInput.prototype.startGracePeriod = function () {
      var this$1 = this;

    clearTimeout(this.gracePeriod);
    this.gracePeriod = setTimeout(function () {
      this$1.gracePeriod = false;
      if (this$1.selectionChanged())
        { this$1.cm.operation(function () { return this$1.cm.curOp.selectionChanged = true; }); }
    }, 20);
  };

  ContentEditableInput.prototype.showMultipleSelections = function (info) {
    removeChildrenAndAdd(this.cm.display.cursorDiv, info.cursors);
    removeChildrenAndAdd(this.cm.display.selectionDiv, info.selection);
  };

  ContentEditableInput.prototype.rememberSelection = function () {
    var sel = this.getSelection();
    this.lastAnchorNode = sel.anchorNode; this.lastAnchorOffset = sel.anchorOffset;
    this.lastFocusNode = sel.focusNode; this.lastFocusOffset = sel.focusOffset;
  };

  ContentEditableInput.prototype.selectionInEditor = function () {
    var sel = this.getSelection();
    if (!sel.rangeCount) { return false }
    var node = sel.getRangeAt(0).commonAncestorContainer;
    return contains(this.div, node)
  };

  ContentEditableInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor") {
      if (!this.selectionInEditor() || document.activeElement != this.div)
        { this.showSelection(this.prepareSelection(), true); }
      this.div.focus();
    }
  };
  ContentEditableInput.prototype.blur = function () { this.div.blur(); };
  ContentEditableInput.prototype.getField = function () { return this.div };

  ContentEditableInput.prototype.supportsTouch = function () { return true };

  ContentEditableInput.prototype.receivedFocus = function () {
    var input = this;
    if (this.selectionInEditor())
      { this.pollSelection(); }
    else
      { runInOp(this.cm, function () { return input.cm.curOp.selectionChanged = true; }); }

    function poll() {
      if (input.cm.state.focused) {
        input.pollSelection();
        input.polling.set(input.cm.options.pollInterval, poll);
      }
    }
    this.polling.set(this.cm.options.pollInterval, poll);
  };

  ContentEditableInput.prototype.selectionChanged = function () {
    var sel = this.getSelection();
    return sel.anchorNode != this.lastAnchorNode || sel.anchorOffset != this.lastAnchorOffset ||
      sel.focusNode != this.lastFocusNode || sel.focusOffset != this.lastFocusOffset
  };

  ContentEditableInput.prototype.pollSelection = function () {
    if (this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged()) { return }
    var sel = this.getSelection(), cm = this.cm;
    // On Android Chrome (version 56, at least), backspacing into an
    // uneditable block element will put the cursor in that element,
    // and then, because it's not editable, hide the virtual keyboard.
    // Because Android doesn't allow us to actually detect backspace
    // presses in a sane way, this code checks for when that happens
    // and simulates a backspace press in this case.
    if (android && chrome && this.cm.display.gutterSpecs.length && isInGutter(sel.anchorNode)) {
      this.cm.triggerOnKeyDown({type: "keydown", keyCode: 8, preventDefault: Math.abs});
      this.blur();
      this.focus();
      return
    }
    if (this.composing) { return }
    this.rememberSelection();
    var anchor = domToPos(cm, sel.anchorNode, sel.anchorOffset);
    var head = domToPos(cm, sel.focusNode, sel.focusOffset);
    if (anchor && head) { runInOp(cm, function () {
      setSelection(cm.doc, simpleSelection(anchor, head), sel_dontScroll);
      if (anchor.bad || head.bad) { cm.curOp.selectionChanged = true; }
    }); }
  };

  ContentEditableInput.prototype.pollContent = function () {
    if (this.readDOMTimeout != null) {
      clearTimeout(this.readDOMTimeout);
      this.readDOMTimeout = null;
    }

    var cm = this.cm, display = cm.display, sel = cm.doc.sel.primary();
    var from = sel.from(), to = sel.to();
    if (from.ch == 0 && from.line > cm.firstLine())
      { from = Pos(from.line - 1, getLine(cm.doc, from.line - 1).length); }
    if (to.ch == getLine(cm.doc, to.line).text.length && to.line < cm.lastLine())
      { to = Pos(to.line + 1, 0); }
    if (from.line < display.viewFrom || to.line > display.viewTo - 1) { return false }

    var fromIndex, fromLine, fromNode;
    if (from.line == display.viewFrom || (fromIndex = findViewIndex(cm, from.line)) == 0) {
      fromLine = lineNo(display.view[0].line);
      fromNode = display.view[0].node;
    } else {
      fromLine = lineNo(display.view[fromIndex].line);
      fromNode = display.view[fromIndex - 1].node.nextSibling;
    }
    var toIndex = findViewIndex(cm, to.line);
    var toLine, toNode;
    if (toIndex == display.view.length - 1) {
      toLine = display.viewTo - 1;
      toNode = display.lineDiv.lastChild;
    } else {
      toLine = lineNo(display.view[toIndex + 1].line) - 1;
      toNode = display.view[toIndex + 1].node.previousSibling;
    }

    if (!fromNode) { return false }
    var newText = cm.doc.splitLines(domTextBetween(cm, fromNode, toNode, fromLine, toLine));
    var oldText = getBetween(cm.doc, Pos(fromLine, 0), Pos(toLine, getLine(cm.doc, toLine).text.length));
    while (newText.length > 1 && oldText.length > 1) {
      if (lst(newText) == lst(oldText)) { newText.pop(); oldText.pop(); toLine--; }
      else if (newText[0] == oldText[0]) { newText.shift(); oldText.shift(); fromLine++; }
      else { break }
    }

    var cutFront = 0, cutEnd = 0;
    var newTop = newText[0], oldTop = oldText[0], maxCutFront = Math.min(newTop.length, oldTop.length);
    while (cutFront < maxCutFront && newTop.charCodeAt(cutFront) == oldTop.charCodeAt(cutFront))
      { ++cutFront; }
    var newBot = lst(newText), oldBot = lst(oldText);
    var maxCutEnd = Math.min(newBot.length - (newText.length == 1 ? cutFront : 0),
                             oldBot.length - (oldText.length == 1 ? cutFront : 0));
    while (cutEnd < maxCutEnd &&
           newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1))
      { ++cutEnd; }
    // Try to move start of change to start of selection if ambiguous
    if (newText.length == 1 && oldText.length == 1 && fromLine == from.line) {
      while (cutFront && cutFront > from.ch &&
             newBot.charCodeAt(newBot.length - cutEnd - 1) == oldBot.charCodeAt(oldBot.length - cutEnd - 1)) {
        cutFront--;
        cutEnd++;
      }
    }

    newText[newText.length - 1] = newBot.slice(0, newBot.length - cutEnd).replace(/^\u200b+/, "");
    newText[0] = newText[0].slice(cutFront).replace(/\u200b+$/, "");

    var chFrom = Pos(fromLine, cutFront);
    var chTo = Pos(toLine, oldText.length ? lst(oldText).length - cutEnd : 0);
    if (newText.length > 1 || newText[0] || cmp(chFrom, chTo)) {
      replaceRange(cm.doc, newText, chFrom, chTo, "+input");
      return true
    }
  };

  ContentEditableInput.prototype.ensurePolled = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.reset = function () {
    this.forceCompositionEnd();
  };
  ContentEditableInput.prototype.forceCompositionEnd = function () {
    if (!this.composing) { return }
    clearTimeout(this.readDOMTimeout);
    this.composing = null;
    this.updateFromDOM();
    this.div.blur();
    this.div.focus();
  };
  ContentEditableInput.prototype.readFromDOMSoon = function () {
      var this$1 = this;

    if (this.readDOMTimeout != null) { return }
    this.readDOMTimeout = setTimeout(function () {
      this$1.readDOMTimeout = null;
      if (this$1.composing) {
        if (this$1.composing.done) { this$1.composing = null; }
        else { return }
      }
      this$1.updateFromDOM();
    }, 80);
  };

  ContentEditableInput.prototype.updateFromDOM = function () {
      var this$1 = this;

    if (this.cm.isReadOnly() || !this.pollContent())
      { runInOp(this.cm, function () { return regChange(this$1.cm); }); }
  };

  ContentEditableInput.prototype.setUneditable = function (node) {
    node.contentEditable = "false";
  };

  ContentEditableInput.prototype.onKeyPress = function (e) {
    if (e.charCode == 0 || this.composing) { return }
    e.preventDefault();
    if (!this.cm.isReadOnly())
      { operation(this.cm, applyTextInput)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0); }
  };

  ContentEditableInput.prototype.readOnlyChanged = function (val) {
    this.div.contentEditable = String(val != "nocursor");
  };

  ContentEditableInput.prototype.onContextMenu = function () {};
  ContentEditableInput.prototype.resetPosition = function () {};

  ContentEditableInput.prototype.needsContentAttribute = true;

  function posToDOM(cm, pos) {
    var view = findViewForLine(cm, pos.line);
    if (!view || view.hidden) { return null }
    var line = getLine(cm.doc, pos.line);
    var info = mapFromLineView(view, line, pos.line);

    var order = getOrder(line, cm.doc.direction), side = "left";
    if (order) {
      var partPos = getBidiPartAt(order, pos.ch);
      side = partPos % 2 ? "right" : "left";
    }
    var result = nodeAndOffsetInLineMap(info.map, pos.ch, side);
    result.offset = result.collapse == "right" ? result.end : result.start;
    return result
  }

  function isInGutter(node) {
    for (var scan = node; scan; scan = scan.parentNode)
      { if (/CodeMirror-gutter-wrapper/.test(scan.className)) { return true } }
    return false
  }

  function badPos(pos, bad) { if (bad) { pos.bad = true; } return pos }

  function domTextBetween(cm, from, to, fromLine, toLine) {
    var text = "", closing = false, lineSep = cm.doc.lineSeparator(), extraLinebreak = false;
    function recognizeMarker(id) { return function (marker) { return marker.id == id; } }
    function close() {
      if (closing) {
        text += lineSep;
        if (extraLinebreak) { text += lineSep; }
        closing = extraLinebreak = false;
      }
    }
    function addText(str) {
      if (str) {
        close();
        text += str;
      }
    }
    function walk(node) {
      if (node.nodeType == 1) {
        var cmText = node.getAttribute("cm-text");
        if (cmText) {
          addText(cmText);
          return
        }
        var markerID = node.getAttribute("cm-marker"), range;
        if (markerID) {
          var found = cm.findMarks(Pos(fromLine, 0), Pos(toLine + 1, 0), recognizeMarker(+markerID));
          if (found.length && (range = found[0].find(0)))
            { addText(getBetween(cm.doc, range.from, range.to).join(lineSep)); }
          return
        }
        if (node.getAttribute("contenteditable") == "false") { return }
        var isBlock = /^(pre|div|p|li|table|br)$/i.test(node.nodeName);
        if (!/^br$/i.test(node.nodeName) && node.textContent.length == 0) { return }

        if (isBlock) { close(); }
        for (var i = 0; i < node.childNodes.length; i++)
          { walk(node.childNodes[i]); }

        if (/^(pre|p)$/i.test(node.nodeName)) { extraLinebreak = true; }
        if (isBlock) { closing = true; }
      } else if (node.nodeType == 3) {
        addText(node.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
      }
    }
    for (;;) {
      walk(from);
      if (from == to) { break }
      from = from.nextSibling;
      extraLinebreak = false;
    }
    return text
  }

  function domToPos(cm, node, offset) {
    var lineNode;
    if (node == cm.display.lineDiv) {
      lineNode = cm.display.lineDiv.childNodes[offset];
      if (!lineNode) { return badPos(cm.clipPos(Pos(cm.display.viewTo - 1)), true) }
      node = null; offset = 0;
    } else {
      for (lineNode = node;; lineNode = lineNode.parentNode) {
        if (!lineNode || lineNode == cm.display.lineDiv) { return null }
        if (lineNode.parentNode && lineNode.parentNode == cm.display.lineDiv) { break }
      }
    }
    for (var i = 0; i < cm.display.view.length; i++) {
      var lineView = cm.display.view[i];
      if (lineView.node == lineNode)
        { return locateNodeInLineView(lineView, node, offset) }
    }
  }

  function locateNodeInLineView(lineView, node, offset) {
    var wrapper = lineView.text.firstChild, bad = false;
    if (!node || !contains(wrapper, node)) { return badPos(Pos(lineNo(lineView.line), 0), true) }
    if (node == wrapper) {
      bad = true;
      node = wrapper.childNodes[offset];
      offset = 0;
      if (!node) {
        var line = lineView.rest ? lst(lineView.rest) : lineView.line;
        return badPos(Pos(lineNo(line), line.text.length), bad)
      }
    }

    var textNode = node.nodeType == 3 ? node : null, topNode = node;
    if (!textNode && node.childNodes.length == 1 && node.firstChild.nodeType == 3) {
      textNode = node.firstChild;
      if (offset) { offset = textNode.nodeValue.length; }
    }
    while (topNode.parentNode != wrapper) { topNode = topNode.parentNode; }
    var measure = lineView.measure, maps = measure.maps;

    function find(textNode, topNode, offset) {
      for (var i = -1; i < (maps ? maps.length : 0); i++) {
        var map = i < 0 ? measure.map : maps[i];
        for (var j = 0; j < map.length; j += 3) {
          var curNode = map[j + 2];
          if (curNode == textNode || curNode == topNode) {
            var line = lineNo(i < 0 ? lineView.line : lineView.rest[i]);
            var ch = map[j] + offset;
            if (offset < 0 || curNode != textNode) { ch = map[j + (offset ? 1 : 0)]; }
            return Pos(line, ch)
          }
        }
      }
    }
    var found = find(textNode, topNode, offset);
    if (found) { return badPos(found, bad) }

    // FIXME this is all really shaky. might handle the few cases it needs to handle, but likely to cause problems
    for (var after = topNode.nextSibling, dist = textNode ? textNode.nodeValue.length - offset : 0; after; after = after.nextSibling) {
      found = find(after, after.firstChild, 0);
      if (found)
        { return badPos(Pos(found.line, found.ch - dist), bad) }
      else
        { dist += after.textContent.length; }
    }
    for (var before = topNode.previousSibling, dist$1 = offset; before; before = before.previousSibling) {
      found = find(before, before.firstChild, -1);
      if (found)
        { return badPos(Pos(found.line, found.ch + dist$1), bad) }
      else
        { dist$1 += before.textContent.length; }
    }
  }

  // TEXTAREA INPUT STYLE

  var TextareaInput = function(cm) {
    this.cm = cm;
    // See input.poll and input.reset
    this.prevInput = "";

    // Flag that indicates whether we expect input to appear real soon
    // now (after some event like 'keypress' or 'input') and are
    // polling intensively.
    this.pollingFast = false;
    // Self-resetting timeout for the poller
    this.polling = new Delayed();
    // Used to work around IE issue with selection being forgotten when focus moves away from textarea
    this.hasSelection = false;
    this.composing = null;
  };

  TextareaInput.prototype.init = function (display) {
      var this$1 = this;

    var input = this, cm = this.cm;
    this.createField(display);
    var te = this.textarea;

    display.wrapper.insertBefore(this.wrapper, display.wrapper.firstChild);

    // Needed to hide big blue blinking cursor on Mobile Safari (doesn't seem to work in iOS 8 anymore)
    if (ios) { te.style.width = "0px"; }

    on(te, "input", function () {
      if (ie && ie_version >= 9 && this$1.hasSelection) { this$1.hasSelection = null; }
      input.poll();
    });

    on(te, "paste", function (e) {
      if (signalDOMEvent(cm, e) || handlePaste(e, cm)) { return }

      cm.state.pasteIncoming = +new Date;
      input.fastPoll();
    });

    function prepareCopyCut(e) {
      if (signalDOMEvent(cm, e)) { return }
      if (cm.somethingSelected()) {
        setLastCopied({lineWise: false, text: cm.getSelections()});
      } else if (!cm.options.lineWiseCopyCut) {
        return
      } else {
        var ranges = copyableRanges(cm);
        setLastCopied({lineWise: true, text: ranges.text});
        if (e.type == "cut") {
          cm.setSelections(ranges.ranges, null, sel_dontScroll);
        } else {
          input.prevInput = "";
          te.value = ranges.text.join("\n");
          selectInput(te);
        }
      }
      if (e.type == "cut") { cm.state.cutIncoming = +new Date; }
    }
    on(te, "cut", prepareCopyCut);
    on(te, "copy", prepareCopyCut);

    on(display.scroller, "paste", function (e) {
      if (eventInWidget(display, e) || signalDOMEvent(cm, e)) { return }
      if (!te.dispatchEvent) {
        cm.state.pasteIncoming = +new Date;
        input.focus();
        return
      }

      // Pass the `paste` event to the textarea so it's handled by its event listener.
      var event = new Event("paste");
      event.clipboardData = e.clipboardData;
      te.dispatchEvent(event);
    });

    // Prevent normal selection in the editor (we handle our own)
    on(display.lineSpace, "selectstart", function (e) {
      if (!eventInWidget(display, e)) { e_preventDefault(e); }
    });

    on(te, "compositionstart", function () {
      var start = cm.getCursor("from");
      if (input.composing) { input.composing.range.clear(); }
      input.composing = {
        start: start,
        range: cm.markText(start, cm.getCursor("to"), {className: "CodeMirror-composing"})
      };
    });
    on(te, "compositionend", function () {
      if (input.composing) {
        input.poll();
        input.composing.range.clear();
        input.composing = null;
      }
    });
  };

  TextareaInput.prototype.createField = function (_display) {
    // Wraps and hides input textarea
    this.wrapper = hiddenTextarea();
    // The semihidden textarea that is focused when the editor is
    // focused, and receives input.
    this.textarea = this.wrapper.firstChild;
  };

  TextareaInput.prototype.screenReaderLabelChanged = function (label) {
    // Label for screenreaders, accessibility
    if(label) {
      this.textarea.setAttribute('aria-label', label);
    } else {
      this.textarea.removeAttribute('aria-label');
    }
  };

  TextareaInput.prototype.prepareSelection = function () {
    // Redraw the selection and/or cursor
    var cm = this.cm, display = cm.display, doc = cm.doc;
    var result = prepareSelection(cm);

    // Move the hidden textarea near the cursor to prevent scrolling artifacts
    if (cm.options.moveInputWithCursor) {
      var headPos = cursorCoords(cm, doc.sel.primary().head, "div");
      var wrapOff = display.wrapper.getBoundingClientRect(), lineOff = display.lineDiv.getBoundingClientRect();
      result.teTop = Math.max(0, Math.min(display.wrapper.clientHeight - 10,
                                          headPos.top + lineOff.top - wrapOff.top));
      result.teLeft = Math.max(0, Math.min(display.wrapper.clientWidth - 10,
                                           headPos.left + lineOff.left - wrapOff.left));
    }

    return result
  };

  TextareaInput.prototype.showSelection = function (drawn) {
    var cm = this.cm, display = cm.display;
    removeChildrenAndAdd(display.cursorDiv, drawn.cursors);
    removeChildrenAndAdd(display.selectionDiv, drawn.selection);
    if (drawn.teTop != null) {
      this.wrapper.style.top = drawn.teTop + "px";
      this.wrapper.style.left = drawn.teLeft + "px";
    }
  };

  // Reset the input to correspond to the selection (or to be empty,
  // when not typing and nothing is selected)
  TextareaInput.prototype.reset = function (typing) {
    if (this.contextMenuPending || this.composing) { return }
    var cm = this.cm;
    if (cm.somethingSelected()) {
      this.prevInput = "";
      var content = cm.getSelection();
      this.textarea.value = content;
      if (cm.state.focused) { selectInput(this.textarea); }
      if (ie && ie_version >= 9) { this.hasSelection = content; }
    } else if (!typing) {
      this.prevInput = this.textarea.value = "";
      if (ie && ie_version >= 9) { this.hasSelection = null; }
    }
  };

  TextareaInput.prototype.getField = function () { return this.textarea };

  TextareaInput.prototype.supportsTouch = function () { return false };

  TextareaInput.prototype.focus = function () {
    if (this.cm.options.readOnly != "nocursor" && (!mobile || activeElt() != this.textarea)) {
      try { this.textarea.focus(); }
      catch (e) {} // IE8 will throw if the textarea is display: none or not in DOM
    }
  };

  TextareaInput.prototype.blur = function () { this.textarea.blur(); };

  TextareaInput.prototype.resetPosition = function () {
    this.wrapper.style.top = this.wrapper.style.left = 0;
  };

  TextareaInput.prototype.receivedFocus = function () { this.slowPoll(); };

  // Poll for input changes, using the normal rate of polling. This
  // runs as long as the editor is focused.
  TextareaInput.prototype.slowPoll = function () {
      var this$1 = this;

    if (this.pollingFast) { return }
    this.polling.set(this.cm.options.pollInterval, function () {
      this$1.poll();
      if (this$1.cm.state.focused) { this$1.slowPoll(); }
    });
  };

  // When an event has just come in that is likely to add or change
  // something in the input textarea, we poll faster, to ensure that
  // the change appears on the screen quickly.
  TextareaInput.prototype.fastPoll = function () {
    var missed = false, input = this;
    input.pollingFast = true;
    function p() {
      var changed = input.poll();
      if (!changed && !missed) {missed = true; input.polling.set(60, p);}
      else {input.pollingFast = false; input.slowPoll();}
    }
    input.polling.set(20, p);
  };

  // Read input from the textarea, and update the document to match.
  // When something is selected, it is present in the textarea, and
  // selected (unless it is huge, in which case a placeholder is
  // used). When nothing is selected, the cursor sits after previously
  // seen text (can be empty), which is stored in prevInput (we must
  // not reset the textarea when typing, because that breaks IME).
  TextareaInput.prototype.poll = function () {
      var this$1 = this;

    var cm = this.cm, input = this.textarea, prevInput = this.prevInput;
    // Since this is called a *lot*, try to bail out as cheaply as
    // possible when it is clear that nothing happened. hasSelection
    // will be the case when there is a lot of text in the textarea,
    // in which case reading its value would be expensive.
    if (this.contextMenuPending || !cm.state.focused ||
        (hasSelection(input) && !prevInput && !this.composing) ||
        cm.isReadOnly() || cm.options.disableInput || cm.state.keySeq)
      { return false }

    var text = input.value;
    // If nothing changed, bail.
    if (text == prevInput && !cm.somethingSelected()) { return false }
    // Work around nonsensical selection resetting in IE9/10, and
    // inexplicable appearance of private area unicode characters on
    // some key combos in Mac (#2689).
    if (ie && ie_version >= 9 && this.hasSelection === text ||
        mac && /[\uf700-\uf7ff]/.test(text)) {
      cm.display.input.reset();
      return false
    }

    if (cm.doc.sel == cm.display.selForContextMenu) {
      var first = text.charCodeAt(0);
      if (first == 0x200b && !prevInput) { prevInput = "\u200b"; }
      if (first == 0x21da) { this.reset(); return this.cm.execCommand("undo") }
    }
    // Find the part of the input that is actually new
    var same = 0, l = Math.min(prevInput.length, text.length);
    while (same < l && prevInput.charCodeAt(same) == text.charCodeAt(same)) { ++same; }

    runInOp(cm, function () {
      applyTextInput(cm, text.slice(same), prevInput.length - same,
                     null, this$1.composing ? "*compose" : null);

      // Don't leave long text in the textarea, since it makes further polling slow
      if (text.length > 1000 || text.indexOf("\n") > -1) { input.value = this$1.prevInput = ""; }
      else { this$1.prevInput = text; }

      if (this$1.composing) {
        this$1.composing.range.clear();
        this$1.composing.range = cm.markText(this$1.composing.start, cm.getCursor("to"),
                                           {className: "CodeMirror-composing"});
      }
    });
    return true
  };

  TextareaInput.prototype.ensurePolled = function () {
    if (this.pollingFast && this.poll()) { this.pollingFast = false; }
  };

  TextareaInput.prototype.onKeyPress = function () {
    if (ie && ie_version >= 9) { this.hasSelection = null; }
    this.fastPoll();
  };

  TextareaInput.prototype.onContextMenu = function (e) {
    var input = this, cm = input.cm, display = cm.display, te = input.textarea;
    if (input.contextMenuPending) { input.contextMenuPending(); }
    var pos = posFromMouse(cm, e), scrollPos = display.scroller.scrollTop;
    if (!pos || presto) { return } // Opera is difficult.

    // Reset the current text selection only if the click is done outside of the selection
    // and 'resetSelectionOnContextMenu' option is true.
    var reset = cm.options.resetSelectionOnContextMenu;
    if (reset && cm.doc.sel.contains(pos) == -1)
      { operation(cm, setSelection)(cm.doc, simpleSelection(pos), sel_dontScroll); }

    var oldCSS = te.style.cssText, oldWrapperCSS = input.wrapper.style.cssText;
    var wrapperBox = input.wrapper.offsetParent.getBoundingClientRect();
    input.wrapper.style.cssText = "position: static";
    te.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - wrapperBox.top - 5) + "px; left: " + (e.clientX - wrapperBox.left - 5) + "px;\n      z-index: 1000; background: " + (ie ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
    var oldScrollY;
    if (webkit) { oldScrollY = window.scrollY; } // Work around Chrome issue (#2712)
    display.input.focus();
    if (webkit) { window.scrollTo(null, oldScrollY); }
    display.input.reset();
    // Adds "Select all" to context menu in FF
    if (!cm.somethingSelected()) { te.value = input.prevInput = " "; }
    input.contextMenuPending = rehide;
    display.selForContextMenu = cm.doc.sel;
    clearTimeout(display.detectingSelectAll);

    // Select-all will be greyed out if there's nothing to select, so
    // this adds a zero-width space so that we can later check whether
    // it got selected.
    function prepareSelectAllHack() {
      if (te.selectionStart != null) {
        var selected = cm.somethingSelected();
        var extval = "\u200b" + (selected ? te.value : "");
        te.value = "\u21da"; // Used to catch context-menu undo
        te.value = extval;
        input.prevInput = selected ? "" : "\u200b";
        te.selectionStart = 1; te.selectionEnd = extval.length;
        // Re-set this, in case some other handler touched the
        // selection in the meantime.
        display.selForContextMenu = cm.doc.sel;
      }
    }
    function rehide() {
      if (input.contextMenuPending != rehide) { return }
      input.contextMenuPending = false;
      input.wrapper.style.cssText = oldWrapperCSS;
      te.style.cssText = oldCSS;
      if (ie && ie_version < 9) { display.scrollbars.setScrollTop(display.scroller.scrollTop = scrollPos); }

      // Try to detect the user choosing select-all
      if (te.selectionStart != null) {
        if (!ie || (ie && ie_version < 9)) { prepareSelectAllHack(); }
        var i = 0, poll = function () {
          if (display.selForContextMenu == cm.doc.sel && te.selectionStart == 0 &&
              te.selectionEnd > 0 && input.prevInput == "\u200b") {
            operation(cm, selectAll)(cm);
          } else if (i++ < 10) {
            display.detectingSelectAll = setTimeout(poll, 500);
          } else {
            display.selForContextMenu = null;
            display.input.reset();
          }
        };
        display.detectingSelectAll = setTimeout(poll, 200);
      }
    }

    if (ie && ie_version >= 9) { prepareSelectAllHack(); }
    if (captureRightClick) {
      e_stop(e);
      var mouseup = function () {
        off(window, "mouseup", mouseup);
        setTimeout(rehide, 20);
      };
      on(window, "mouseup", mouseup);
    } else {
      setTimeout(rehide, 50);
    }
  };

  TextareaInput.prototype.readOnlyChanged = function (val) {
    if (!val) { this.reset(); }
    this.textarea.disabled = val == "nocursor";
  };

  TextareaInput.prototype.setUneditable = function () {};

  TextareaInput.prototype.needsContentAttribute = false;

  function fromTextArea(textarea, options) {
    options = options ? copyObj(options) : {};
    options.value = textarea.value;
    if (!options.tabindex && textarea.tabIndex)
      { options.tabindex = textarea.tabIndex; }
    if (!options.placeholder && textarea.placeholder)
      { options.placeholder = textarea.placeholder; }
    // Set autofocus to true if this textarea is focused, or if it has
    // autofocus and no other element is focused.
    if (options.autofocus == null) {
      var hasFocus = activeElt();
      options.autofocus = hasFocus == textarea ||
        textarea.getAttribute("autofocus") != null && hasFocus == document.body;
    }

    function save() {textarea.value = cm.getValue();}

    var realSubmit;
    if (textarea.form) {
      on(textarea.form, "submit", save);
      // Deplorable hack to make the submit method do the right thing.
      if (!options.leaveSubmitMethodAlone) {
        var form = textarea.form;
        realSubmit = form.submit;
        try {
          var wrappedSubmit = form.submit = function () {
            save();
            form.submit = realSubmit;
            form.submit();
            form.submit = wrappedSubmit;
          };
        } catch(e) {}
      }
    }

    options.finishInit = function (cm) {
      cm.save = save;
      cm.getTextArea = function () { return textarea; };
      cm.toTextArea = function () {
        cm.toTextArea = isNaN; // Prevent this from being ran twice
        save();
        textarea.parentNode.removeChild(cm.getWrapperElement());
        textarea.style.display = "";
        if (textarea.form) {
          off(textarea.form, "submit", save);
          if (!options.leaveSubmitMethodAlone && typeof textarea.form.submit == "function")
            { textarea.form.submit = realSubmit; }
        }
      };
    };

    textarea.style.display = "none";
    var cm = CodeMirror(function (node) { return textarea.parentNode.insertBefore(node, textarea.nextSibling); },
      options);
    return cm
  }

  function addLegacyProps(CodeMirror) {
    CodeMirror.off = off;
    CodeMirror.on = on;
    CodeMirror.wheelEventPixels = wheelEventPixels;
    CodeMirror.Doc = Doc;
    CodeMirror.splitLines = splitLinesAuto;
    CodeMirror.countColumn = countColumn;
    CodeMirror.findColumn = findColumn;
    CodeMirror.isWordChar = isWordCharBasic;
    CodeMirror.Pass = Pass;
    CodeMirror.signal = signal;
    CodeMirror.Line = Line;
    CodeMirror.changeEnd = changeEnd;
    CodeMirror.scrollbarModel = scrollbarModel;
    CodeMirror.Pos = Pos;
    CodeMirror.cmpPos = cmp;
    CodeMirror.modes = modes;
    CodeMirror.mimeModes = mimeModes;
    CodeMirror.resolveMode = resolveMode;
    CodeMirror.getMode = getMode;
    CodeMirror.modeExtensions = modeExtensions;
    CodeMirror.extendMode = extendMode;
    CodeMirror.copyState = copyState;
    CodeMirror.startState = startState;
    CodeMirror.innerMode = innerMode;
    CodeMirror.commands = commands;
    CodeMirror.keyMap = keyMap;
    CodeMirror.keyName = keyName;
    CodeMirror.isModifierKey = isModifierKey;
    CodeMirror.lookupKey = lookupKey;
    CodeMirror.normalizeKeyMap = normalizeKeyMap;
    CodeMirror.StringStream = StringStream;
    CodeMirror.SharedTextMarker = SharedTextMarker;
    CodeMirror.TextMarker = TextMarker;
    CodeMirror.LineWidget = LineWidget;
    CodeMirror.e_preventDefault = e_preventDefault;
    CodeMirror.e_stopPropagation = e_stopPropagation;
    CodeMirror.e_stop = e_stop;
    CodeMirror.addClass = addClass;
    CodeMirror.contains = contains;
    CodeMirror.rmClass = rmClass;
    CodeMirror.keyNames = keyNames;
  }

  // EDITOR CONSTRUCTOR

  defineOptions(CodeMirror);

  addEditorMethods(CodeMirror);

  // Set up methods on CodeMirror's prototype to redirect to the editor's document.
  var dontDelegate = "iter insert remove copy getEditor constructor".split(" ");
  for (var prop in Doc.prototype) { if (Doc.prototype.hasOwnProperty(prop) && indexOf(dontDelegate, prop) < 0)
    { CodeMirror.prototype[prop] = (function(method) {
      return function() {return method.apply(this.doc, arguments)}
    })(Doc.prototype[prop]); } }

  eventMixin(Doc);
  CodeMirror.inputStyles = {"textarea": TextareaInput, "contenteditable": ContentEditableInput};

  // Extra arguments are stored as the mode's dependencies, which is
  // used by (legacy) mechanisms like loadmode.js to automatically
  // load a mode. (Preferred mechanism is the require/define calls.)
  CodeMirror.defineMode = function(name/*, mode, …*/) {
    if (!CodeMirror.defaults.mode && name != "null") { CodeMirror.defaults.mode = name; }
    defineMode.apply(this, arguments);
  };

  CodeMirror.defineMIME = defineMIME;

  // Minimal default mode.
  CodeMirror.defineMode("null", function () { return ({token: function (stream) { return stream.skipToEnd(); }}); });
  CodeMirror.defineMIME("text/plain", "null");

  // EXTENSIONS

  CodeMirror.defineExtension = function (name, func) {
    CodeMirror.prototype[name] = func;
  };
  CodeMirror.defineDocExtension = function (name, func) {
    Doc.prototype[name] = func;
  };

  CodeMirror.fromTextArea = fromTextArea;

  addLegacyProps(CodeMirror);

  CodeMirror.version = "5.57.0";

  return CodeMirror;

})));

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";
  var WRAP_CLASS = "CodeMirror-activeline";
  var BACK_CLASS = "CodeMirror-activeline-background";
  var GUTT_CLASS = "CodeMirror-activeline-gutter";

  CodeMirror.defineOption("styleActiveLine", false, function(cm, val, old) {
    var prev = old == CodeMirror.Init ? false : old;
    if (val == prev) return
    if (prev) {
      cm.off("beforeSelectionChange", selectionChange);
      clearActiveLines(cm);
      delete cm.state.activeLines;
    }
    if (val) {
      cm.state.activeLines = [];
      updateActiveLines(cm, cm.listSelections());
      cm.on("beforeSelectionChange", selectionChange);
    }
  });

  function clearActiveLines(cm) {
    for (var i = 0; i < cm.state.activeLines.length; i++) {
      cm.removeLineClass(cm.state.activeLines[i], "wrap", WRAP_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "background", BACK_CLASS);
      cm.removeLineClass(cm.state.activeLines[i], "gutter", GUTT_CLASS);
    }
  }

  function sameArray(a, b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; i++)
      if (a[i] != b[i]) return false;
    return true;
  }

  function updateActiveLines(cm, ranges) {
    var active = [];
    for (var i = 0; i < ranges.length; i++) {
      var range = ranges[i];
      var option = cm.getOption("styleActiveLine");
      if (typeof option == "object" && option.nonEmpty ? range.anchor.line != range.head.line : !range.empty())
        continue
      var line = cm.getLineHandleVisualStart(range.head.line);
      if (active[active.length - 1] != line) active.push(line);
    }
    if (sameArray(cm.state.activeLines, active)) return;
    cm.operation(function() {
      clearActiveLines(cm);
      for (var i = 0; i < active.length; i++) {
        cm.addLineClass(active[i], "wrap", WRAP_CLASS);
        cm.addLineClass(active[i], "background", BACK_CLASS);
        cm.addLineClass(active[i], "gutter", GUTT_CLASS);
      }
      cm.state.activeLines = active;
    });
  }

  function selectionChange(cm, sel) {
    updateActiveLines(cm, sel.ranges);
  }
});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

var htmlConfig = {
  autoSelfClosers: {'area': true, 'base': true, 'br': true, 'col': true, 'command': true,
                    'embed': true, 'frame': true, 'hr': true, 'img': true, 'input': true,
                    'keygen': true, 'link': true, 'meta': true, 'param': true, 'source': true,
                    'track': true, 'wbr': true, 'menuitem': true},
  implicitlyClosed: {'dd': true, 'li': true, 'optgroup': true, 'option': true, 'p': true,
                     'rp': true, 'rt': true, 'tbody': true, 'td': true, 'tfoot': true,
                     'th': true, 'tr': true},
  contextGrabbers: {
    'dd': {'dd': true, 'dt': true},
    'dt': {'dd': true, 'dt': true},
    'li': {'li': true},
    'option': {'option': true, 'optgroup': true},
    'optgroup': {'optgroup': true},
    'p': {'address': true, 'article': true, 'aside': true, 'blockquote': true, 'dir': true,
          'div': true, 'dl': true, 'fieldset': true, 'footer': true, 'form': true,
          'h1': true, 'h2': true, 'h3': true, 'h4': true, 'h5': true, 'h6': true,
          'header': true, 'hgroup': true, 'hr': true, 'menu': true, 'nav': true, 'ol': true,
          'p': true, 'pre': true, 'section': true, 'table': true, 'ul': true},
    'rp': {'rp': true, 'rt': true},
    'rt': {'rp': true, 'rt': true},
    'tbody': {'tbody': true, 'tfoot': true},
    'td': {'td': true, 'th': true},
    'tfoot': {'tbody': true},
    'th': {'td': true, 'th': true},
    'thead': {'tbody': true, 'tfoot': true},
    'tr': {'tr': true}
  },
  doNotIndent: {"pre": true},
  allowUnquoted: true,
  allowMissing: true,
  caseFold: true
}

var xmlConfig = {
  autoSelfClosers: {},
  implicitlyClosed: {},
  contextGrabbers: {},
  doNotIndent: {},
  allowUnquoted: false,
  allowMissing: false,
  allowMissingTagName: false,
  caseFold: false
}

CodeMirror.defineMode("xml", function(editorConf, config_) {
  var indentUnit = editorConf.indentUnit
  var config = {}
  var defaults = config_.htmlMode ? htmlConfig : xmlConfig
  for (var prop in defaults) config[prop] = defaults[prop]
  for (var prop in config_) config[prop] = config_[prop]

  // Return variables for tokenizers
  var type, setStyle;

  function inText(stream, state) {
    function chain(parser) {
      state.tokenize = parser;
      return parser(stream, state);
    }

    var ch = stream.next();
    if (ch == "<") {
      if (stream.eat("!")) {
        if (stream.eat("[")) {
          if (stream.match("CDATA[")) return chain(inBlock("atom", "]]>"));
          else return null;
        } else if (stream.match("--")) {
          return chain(inBlock("comment", "-->"));
        } else if (stream.match("DOCTYPE", true, true)) {
          stream.eatWhile(/[\w\._\-]/);
          return chain(doctype(1));
        } else {
          return null;
        }
      } else if (stream.eat("?")) {
        stream.eatWhile(/[\w\._\-]/);
        state.tokenize = inBlock("meta", "?>");
        return "meta";
      } else {
        type = stream.eat("/") ? "closeTag" : "openTag";
        state.tokenize = inTag;
        return "tag bracket";
      }
    } else if (ch == "&") {
      var ok;
      if (stream.eat("#")) {
        if (stream.eat("x")) {
          ok = stream.eatWhile(/[a-fA-F\d]/) && stream.eat(";");
        } else {
          ok = stream.eatWhile(/[\d]/) && stream.eat(";");
        }
      } else {
        ok = stream.eatWhile(/[\w\.\-:]/) && stream.eat(";");
      }
      return ok ? "atom" : "error";
    } else {
      stream.eatWhile(/[^&<]/);
      return null;
    }
  }
  inText.isInText = true;

  function inTag(stream, state) {
    var ch = stream.next();
    if (ch == ">" || (ch == "/" && stream.eat(">"))) {
      state.tokenize = inText;
      type = ch == ">" ? "endTag" : "selfcloseTag";
      return "tag bracket";
    } else if (ch == "=") {
      type = "equals";
      return null;
    } else if (ch == "<") {
      state.tokenize = inText;
      state.state = baseState;
      state.tagName = state.tagStart = null;
      var next = state.tokenize(stream, state);
      return next ? next + " tag error" : "tag error";
    } else if (/[\'\"]/.test(ch)) {
      state.tokenize = inAttribute(ch);
      state.stringStartCol = stream.column();
      return state.tokenize(stream, state);
    } else {
      stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/);
      return "word";
    }
  }

  function inAttribute(quote) {
    var closure = function(stream, state) {
      while (!stream.eol()) {
        if (stream.next() == quote) {
          state.tokenize = inTag;
          break;
        }
      }
      return "string";
    };
    closure.isInAttribute = true;
    return closure;
  }

  function inBlock(style, terminator) {
    return function(stream, state) {
      while (!stream.eol()) {
        if (stream.match(terminator)) {
          state.tokenize = inText;
          break;
        }
        stream.next();
      }
      return style;
    }
  }

  function doctype(depth) {
    return function(stream, state) {
      var ch;
      while ((ch = stream.next()) != null) {
        if (ch == "<") {
          state.tokenize = doctype(depth + 1);
          return state.tokenize(stream, state);
        } else if (ch == ">") {
          if (depth == 1) {
            state.tokenize = inText;
            break;
          } else {
            state.tokenize = doctype(depth - 1);
            return state.tokenize(stream, state);
          }
        }
      }
      return "meta";
    };
  }

  function Context(state, tagName, startOfLine) {
    this.prev = state.context;
    this.tagName = tagName;
    this.indent = state.indented;
    this.startOfLine = startOfLine;
    if (config.doNotIndent.hasOwnProperty(tagName) || (state.context && state.context.noIndent))
      this.noIndent = true;
  }
  function popContext(state) {
    if (state.context) state.context = state.context.prev;
  }
  function maybePopContext(state, nextTagName) {
    var parentTagName;
    while (true) {
      if (!state.context) {
        return;
      }
      parentTagName = state.context.tagName;
      if (!config.contextGrabbers.hasOwnProperty(parentTagName) ||
          !config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName)) {
        return;
      }
      popContext(state);
    }
  }

  function baseState(type, stream, state) {
    if (type == "openTag") {
      state.tagStart = stream.column();
      return tagNameState;
    } else if (type == "closeTag") {
      return closeTagNameState;
    } else {
      return baseState;
    }
  }
  function tagNameState(type, stream, state) {
    if (type == "word") {
      state.tagName = stream.current();
      setStyle = "tag";
      return attrState;
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return attrState(type, stream, state);
    } else {
      setStyle = "error";
      return tagNameState;
    }
  }
  function closeTagNameState(type, stream, state) {
    if (type == "word") {
      var tagName = stream.current();
      if (state.context && state.context.tagName != tagName &&
          config.implicitlyClosed.hasOwnProperty(state.context.tagName))
        popContext(state);
      if ((state.context && state.context.tagName == tagName) || config.matchClosing === false) {
        setStyle = "tag";
        return closeState;
      } else {
        setStyle = "tag error";
        return closeStateErr;
      }
    } else if (config.allowMissingTagName && type == "endTag") {
      setStyle = "tag bracket";
      return closeState(type, stream, state);
    } else {
      setStyle = "error";
      return closeStateErr;
    }
  }

  function closeState(type, _stream, state) {
    if (type != "endTag") {
      setStyle = "error";
      return closeState;
    }
    popContext(state);
    return baseState;
  }
  function closeStateErr(type, stream, state) {
    setStyle = "error";
    return closeState(type, stream, state);
  }

  function attrState(type, _stream, state) {
    if (type == "word") {
      setStyle = "attribute";
      return attrEqState;
    } else if (type == "endTag" || type == "selfcloseTag") {
      var tagName = state.tagName, tagStart = state.tagStart;
      state.tagName = state.tagStart = null;
      if (type == "selfcloseTag" ||
          config.autoSelfClosers.hasOwnProperty(tagName)) {
        maybePopContext(state, tagName);
      } else {
        maybePopContext(state, tagName);
        state.context = new Context(state, tagName, tagStart == state.indented);
      }
      return baseState;
    }
    setStyle = "error";
    return attrState;
  }
  function attrEqState(type, stream, state) {
    if (type == "equals") return attrValueState;
    if (!config.allowMissing) setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrValueState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    if (type == "word" && config.allowUnquoted) {setStyle = "string"; return attrState;}
    setStyle = "error";
    return attrState(type, stream, state);
  }
  function attrContinuedState(type, stream, state) {
    if (type == "string") return attrContinuedState;
    return attrState(type, stream, state);
  }

  return {
    startState: function(baseIndent) {
      var state = {tokenize: inText,
                   state: baseState,
                   indented: baseIndent || 0,
                   tagName: null, tagStart: null,
                   context: null}
      if (baseIndent != null) state.baseIndent = baseIndent
      return state
    },

    token: function(stream, state) {
      if (!state.tagName && stream.sol())
        state.indented = stream.indentation();

      if (stream.eatSpace()) return null;
      type = null;
      var style = state.tokenize(stream, state);
      if ((style || type) && style != "comment") {
        setStyle = null;
        state.state = state.state(type || style, stream, state);
        if (setStyle)
          style = setStyle == "error" ? style + " error" : setStyle;
      }
      return style;
    },

    indent: function(state, textAfter, fullLine) {
      var context = state.context;
      // Indent multi-line strings (e.g. css).
      if (state.tokenize.isInAttribute) {
        if (state.tagStart == state.indented)
          return state.stringStartCol + 1;
        else
          return state.indented + indentUnit;
      }
      if (context && context.noIndent) return CodeMirror.Pass;
      if (state.tokenize != inTag && state.tokenize != inText)
        return fullLine ? fullLine.match(/^(\s*)/)[0].length : 0;
      // Indent the starts of attribute names.
      if (state.tagName) {
        if (config.multilineTagIndentPastTag !== false)
          return state.tagStart + state.tagName.length + 2;
        else
          return state.tagStart + indentUnit * (config.multilineTagIndentFactor || 1);
      }
      if (config.alignCDATA && /<!\[CDATA\[/.test(textAfter)) return 0;
      var tagAfter = textAfter && /^<(\/)?([\w_:\.-]*)/.exec(textAfter);
      if (tagAfter && tagAfter[1]) { // Closing tag spotted
        while (context) {
          if (context.tagName == tagAfter[2]) {
            context = context.prev;
            break;
          } else if (config.implicitlyClosed.hasOwnProperty(context.tagName)) {
            context = context.prev;
          } else {
            break;
          }
        }
      } else if (tagAfter) { // Opening tag spotted
        while (context) {
          var grabbers = config.contextGrabbers[context.tagName];
          if (grabbers && grabbers.hasOwnProperty(tagAfter[2]))
            context = context.prev;
          else
            break;
        }
      }
      while (context && context.prev && !context.startOfLine)
        context = context.prev;
      if (context) return context.indent + indentUnit;
      else return state.baseIndent || 0;
    },

    electricInput: /<\/[\s\w:]+>$/,
    blockCommentStart: "<!--",
    blockCommentEnd: "-->",

    configuration: config.htmlMode ? "html" : "xml",
    helperType: config.htmlMode ? "html" : "xml",

    skipAttribute: function(state) {
      if (state.state == attrValueState)
        state.state = attrState
    },

    xmlCurrentTag: function(state) {
      return state.tagName ? {name: state.tagName, close: state.type == "closeTag"} : null
    },

    xmlCurrentContext: function(state) {
      var context = []
      for (var cx = state.context; cx; cx = cx.prev)
        if (cx.tagName) context.push(cx.tagName)
      return context.reverse()
    }
  };
});

CodeMirror.defineMIME("text/xml", "xml");
CodeMirror.defineMIME("application/xml", "xml");
if (!CodeMirror.mimeModes.hasOwnProperty("text/html"))
  CodeMirror.defineMIME("text/html", {name: "xml", htmlMode: true});

});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("css", function(config, parserConfig) {
  var inline = parserConfig.inline
  if (!parserConfig.propertyKeywords) parserConfig = CodeMirror.resolveMode("text/css");

  var indentUnit = config.indentUnit,
      tokenHooks = parserConfig.tokenHooks,
      documentTypes = parserConfig.documentTypes || {},
      mediaTypes = parserConfig.mediaTypes || {},
      mediaFeatures = parserConfig.mediaFeatures || {},
      mediaValueKeywords = parserConfig.mediaValueKeywords || {},
      propertyKeywords = parserConfig.propertyKeywords || {},
      nonStandardPropertyKeywords = parserConfig.nonStandardPropertyKeywords || {},
      fontProperties = parserConfig.fontProperties || {},
      counterDescriptors = parserConfig.counterDescriptors || {},
      colorKeywords = parserConfig.colorKeywords || {},
      valueKeywords = parserConfig.valueKeywords || {},
      allowNested = parserConfig.allowNested,
      lineComment = parserConfig.lineComment,
      supportsAtComponent = parserConfig.supportsAtComponent === true;

  var type, override;
  function ret(style, tp) { type = tp; return style; }

  // Tokenizers

  function tokenBase(stream, state) {
    var ch = stream.next();
    if (tokenHooks[ch]) {
      var result = tokenHooks[ch](stream, state);
      if (result !== false) return result;
    }
    if (ch == "@") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("def", stream.current());
    } else if (ch == "=" || (ch == "~" || ch == "|") && stream.eat("=")) {
      return ret(null, "compare");
    } else if (ch == "\"" || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "#") {
      stream.eatWhile(/[\w\\\-]/);
      return ret("atom", "hash");
    } else if (ch == "!") {
      stream.match(/^\s*\w*/);
      return ret("keyword", "important");
    } else if (/\d/.test(ch) || ch == "." && stream.eat(/\d/)) {
      stream.eatWhile(/[\w.%]/);
      return ret("number", "unit");
    } else if (ch === "-") {
      if (/[\d.]/.test(stream.peek())) {
        stream.eatWhile(/[\w.%]/);
        return ret("number", "unit");
      } else if (stream.match(/^-[\w\\\-]*/)) {
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ret("variable-2", "variable-definition");
        return ret("variable-2", "variable");
      } else if (stream.match(/^\w+-/)) {
        return ret("meta", "meta");
      }
    } else if (/[,+>*\/]/.test(ch)) {
      return ret(null, "select-op");
    } else if (ch == "." && stream.match(/^-?[_a-z][_a-z0-9-]*/i)) {
      return ret("qualifier", "qualifier");
    } else if (/[:;{}\[\]\(\)]/.test(ch)) {
      return ret(null, ch);
    } else if (stream.match(/[\w-.]+(?=\()/)) {
      if (/^(url(-prefix)?|domain|regexp)$/.test(stream.current().toLowerCase())) {
        state.tokenize = tokenParenthesized;
      }
      return ret("variable callee", "variable");
    } else if (/[\w\\\-]/.test(ch)) {
      stream.eatWhile(/[\w\\\-]/);
      return ret("property", "word");
    } else {
      return ret(null, null);
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, ch;
      while ((ch = stream.next()) != null) {
        if (ch == quote && !escaped) {
          if (quote == ")") stream.backUp(1);
          break;
        }
        escaped = !escaped && ch == "\\";
      }
      if (ch == quote || !escaped && quote != ")") state.tokenize = null;
      return ret("string", "string");
    };
  }

  function tokenParenthesized(stream, state) {
    stream.next(); // Must be '('
    if (!stream.match(/\s*[\"\')]/, false))
      state.tokenize = tokenString(")");
    else
      state.tokenize = null;
    return ret(null, "(");
  }

  // Context management

  function Context(type, indent, prev) {
    this.type = type;
    this.indent = indent;
    this.prev = prev;
  }

  function pushContext(state, stream, type, indent) {
    state.context = new Context(type, stream.indentation() + (indent === false ? 0 : indentUnit), state.context);
    return type;
  }

  function popContext(state) {
    if (state.context.prev)
      state.context = state.context.prev;
    return state.context.type;
  }

  function pass(type, stream, state) {
    return states[state.context.type](type, stream, state);
  }
  function popAndPass(type, stream, state, n) {
    for (var i = n || 1; i > 0; i--)
      state.context = state.context.prev;
    return pass(type, stream, state);
  }

  // Parser

  function wordAsValue(stream) {
    var word = stream.current().toLowerCase();
    if (valueKeywords.hasOwnProperty(word))
      override = "atom";
    else if (colorKeywords.hasOwnProperty(word))
      override = "keyword";
    else
      override = "variable";
  }

  var states = {};

  states.top = function(type, stream, state) {
    if (type == "{") {
      return pushContext(state, stream, "block");
    } else if (type == "}" && state.context.prev) {
      return popContext(state);
    } else if (supportsAtComponent && /@component/i.test(type)) {
      return pushContext(state, stream, "atComponentBlock");
    } else if (/^@(-moz-)?document$/i.test(type)) {
      return pushContext(state, stream, "documentTypes");
    } else if (/^@(media|supports|(-moz-)?document|import)$/i.test(type)) {
      return pushContext(state, stream, "atBlock");
    } else if (/^@(font-face|counter-style)/i.test(type)) {
      state.stateArg = type;
      return "restricted_atBlock_before";
    } else if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type)) {
      return "keyframes";
    } else if (type && type.charAt(0) == "@") {
      return pushContext(state, stream, "at");
    } else if (type == "hash") {
      override = "builtin";
    } else if (type == "word") {
      override = "tag";
    } else if (type == "variable-definition") {
      return "maybeprop";
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    } else if (type == ":") {
      return "pseudo";
    } else if (allowNested && type == "(") {
      return pushContext(state, stream, "parens");
    }
    return state.context.type;
  };

  states.block = function(type, stream, state) {
    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (propertyKeywords.hasOwnProperty(word)) {
        override = "property";
        return "maybeprop";
      } else if (nonStandardPropertyKeywords.hasOwnProperty(word)) {
        override = "string-2";
        return "maybeprop";
      } else if (allowNested) {
        override = stream.match(/^\s*:(?:\s|$)/, false) ? "property" : "tag";
        return "block";
      } else {
        override += " error";
        return "maybeprop";
      }
    } else if (type == "meta") {
      return "block";
    } else if (!allowNested && (type == "hash" || type == "qualifier")) {
      override = "error";
      return "block";
    } else {
      return states.top(type, stream, state);
    }
  };

  states.maybeprop = function(type, stream, state) {
    if (type == ":") return pushContext(state, stream, "prop");
    return pass(type, stream, state);
  };

  states.prop = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" && allowNested) return pushContext(state, stream, "propBlock");
    if (type == "}" || type == "{") return popAndPass(type, stream, state);
    if (type == "(") return pushContext(state, stream, "parens");

    if (type == "hash" && !/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())) {
      override += " error";
    } else if (type == "word") {
      wordAsValue(stream);
    } else if (type == "interpolation") {
      return pushContext(state, stream, "interpolation");
    }
    return "prop";
  };

  states.propBlock = function(type, _stream, state) {
    if (type == "}") return popContext(state);
    if (type == "word") { override = "property"; return "maybeprop"; }
    return state.context.type;
  };

  states.parens = function(type, stream, state) {
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == ")") return popContext(state);
    if (type == "(") return pushContext(state, stream, "parens");
    if (type == "interpolation") return pushContext(state, stream, "interpolation");
    if (type == "word") wordAsValue(stream);
    return "parens";
  };

  states.pseudo = function(type, stream, state) {
    if (type == "meta") return "pseudo";

    if (type == "word") {
      override = "variable-3";
      return state.context.type;
    }
    return pass(type, stream, state);
  };

  states.documentTypes = function(type, stream, state) {
    if (type == "word" && documentTypes.hasOwnProperty(stream.current())) {
      override = "tag";
      return state.context.type;
    } else {
      return states.atBlock(type, stream, state);
    }
  };

  states.atBlock = function(type, stream, state) {
    if (type == "(") return pushContext(state, stream, "atBlock_parens");
    if (type == "}" || type == ";") return popAndPass(type, stream, state);
    if (type == "{") return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top");

    if (type == "interpolation") return pushContext(state, stream, "interpolation");

    if (type == "word") {
      var word = stream.current().toLowerCase();
      if (word == "only" || word == "not" || word == "and" || word == "or")
        override = "keyword";
      else if (mediaTypes.hasOwnProperty(word))
        override = "attribute";
      else if (mediaFeatures.hasOwnProperty(word))
        override = "property";
      else if (mediaValueKeywords.hasOwnProperty(word))
        override = "keyword";
      else if (propertyKeywords.hasOwnProperty(word))
        override = "property";
      else if (nonStandardPropertyKeywords.hasOwnProperty(word))
        override = "string-2";
      else if (valueKeywords.hasOwnProperty(word))
        override = "atom";
      else if (colorKeywords.hasOwnProperty(word))
        override = "keyword";
      else
        override = "error";
    }
    return state.context.type;
  };

  states.atComponentBlock = function(type, stream, state) {
    if (type == "}")
      return popAndPass(type, stream, state);
    if (type == "{")
      return popContext(state) && pushContext(state, stream, allowNested ? "block" : "top", false);
    if (type == "word")
      override = "error";
    return state.context.type;
  };

  states.atBlock_parens = function(type, stream, state) {
    if (type == ")") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state, 2);
    return states.atBlock(type, stream, state);
  };

  states.restricted_atBlock_before = function(type, stream, state) {
    if (type == "{")
      return pushContext(state, stream, "restricted_atBlock");
    if (type == "word" && state.stateArg == "@counter-style") {
      override = "variable";
      return "restricted_atBlock_before";
    }
    return pass(type, stream, state);
  };

  states.restricted_atBlock = function(type, stream, state) {
    if (type == "}") {
      state.stateArg = null;
      return popContext(state);
    }
    if (type == "word") {
      if ((state.stateArg == "@font-face" && !fontProperties.hasOwnProperty(stream.current().toLowerCase())) ||
          (state.stateArg == "@counter-style" && !counterDescriptors.hasOwnProperty(stream.current().toLowerCase())))
        override = "error";
      else
        override = "property";
      return "maybeprop";
    }
    return "restricted_atBlock";
  };

  states.keyframes = function(type, stream, state) {
    if (type == "word") { override = "variable"; return "keyframes"; }
    if (type == "{") return pushContext(state, stream, "top");
    return pass(type, stream, state);
  };

  states.at = function(type, stream, state) {
    if (type == ";") return popContext(state);
    if (type == "{" || type == "}") return popAndPass(type, stream, state);
    if (type == "word") override = "tag";
    else if (type == "hash") override = "builtin";
    return "at";
  };

  states.interpolation = function(type, stream, state) {
    if (type == "}") return popContext(state);
    if (type == "{" || type == ";") return popAndPass(type, stream, state);
    if (type == "word") override = "variable";
    else if (type != "variable" && type != "(" && type != ")") override = "error";
    return "interpolation";
  };

  return {
    startState: function(base) {
      return {tokenize: null,
              state: inline ? "block" : "top",
              stateArg: null,
              context: new Context(inline ? "block" : "top", base || 0, null)};
    },

    token: function(stream, state) {
      if (!state.tokenize && stream.eatSpace()) return null;
      var style = (state.tokenize || tokenBase)(stream, state);
      if (style && typeof style == "object") {
        type = style[1];
        style = style[0];
      }
      override = style;
      if (type != "comment")
        state.state = states[state.state](type, stream, state);
      return override;
    },

    indent: function(state, textAfter) {
      var cx = state.context, ch = textAfter && textAfter.charAt(0);
      var indent = cx.indent;
      if (cx.type == "prop" && (ch == "}" || ch == ")")) cx = cx.prev;
      if (cx.prev) {
        if (ch == "}" && (cx.type == "block" || cx.type == "top" ||
                          cx.type == "interpolation" || cx.type == "restricted_atBlock")) {
          // Resume indentation from parent context.
          cx = cx.prev;
          indent = cx.indent;
        } else if (ch == ")" && (cx.type == "parens" || cx.type == "atBlock_parens") ||
            ch == "{" && (cx.type == "at" || cx.type == "atBlock")) {
          // Dedent relative to current context.
          indent = Math.max(0, cx.indent - indentUnit);
        }
      }
      return indent;
    },

    electricChars: "}",
    blockCommentStart: "/*",
    blockCommentEnd: "*/",
    blockCommentContinue: " * ",
    lineComment: lineComment,
    fold: "brace"
  };
});

  function keySet(array) {
    var keys = {};
    for (var i = 0; i < array.length; ++i) {
      keys[array[i].toLowerCase()] = true;
    }
    return keys;
  }

  var documentTypes_ = [
    "domain", "regexp", "url", "url-prefix"
  ], documentTypes = keySet(documentTypes_);

  var mediaTypes_ = [
    "all", "aural", "braille", "handheld", "print", "projection", "screen",
    "tty", "tv", "embossed"
  ], mediaTypes = keySet(mediaTypes_);

  var mediaFeatures_ = [
    "width", "min-width", "max-width", "height", "min-height", "max-height",
    "device-width", "min-device-width", "max-device-width", "device-height",
    "min-device-height", "max-device-height", "aspect-ratio",
    "min-aspect-ratio", "max-aspect-ratio", "device-aspect-ratio",
    "min-device-aspect-ratio", "max-device-aspect-ratio", "color", "min-color",
    "max-color", "color-index", "min-color-index", "max-color-index",
    "monochrome", "min-monochrome", "max-monochrome", "resolution",
    "min-resolution", "max-resolution", "scan", "grid", "orientation",
    "device-pixel-ratio", "min-device-pixel-ratio", "max-device-pixel-ratio",
    "pointer", "any-pointer", "hover", "any-hover", "prefers-color-scheme"
  ], mediaFeatures = keySet(mediaFeatures_);

  var mediaValueKeywords_ = [
    "landscape", "portrait", "none", "coarse", "fine", "on-demand", "hover",
    "interlace", "progressive",
    "dark", "light"
  ], mediaValueKeywords = keySet(mediaValueKeywords_);

  var propertyKeywords_ = [
    "align-content", "align-items", "align-self", "alignment-adjust",
    "alignment-baseline", "all", "anchor-point", "animation", "animation-delay",
    "animation-direction", "animation-duration", "animation-fill-mode",
    "animation-iteration-count", "animation-name", "animation-play-state",
    "animation-timing-function", "appearance", "azimuth", "backdrop-filter",
    "backface-visibility", "background", "background-attachment",
    "background-blend-mode", "background-clip", "background-color",
    "background-image", "background-origin", "background-position",
    "background-position-x", "background-position-y", "background-repeat",
    "background-size", "baseline-shift", "binding", "bleed", "block-size",
    "bookmark-label", "bookmark-level", "bookmark-state", "bookmark-target",
    "border", "border-bottom", "border-bottom-color", "border-bottom-left-radius",
    "border-bottom-right-radius", "border-bottom-style", "border-bottom-width",
    "border-collapse", "border-color", "border-image", "border-image-outset",
    "border-image-repeat", "border-image-slice", "border-image-source",
    "border-image-width", "border-left", "border-left-color", "border-left-style",
    "border-left-width", "border-radius", "border-right", "border-right-color",
    "border-right-style", "border-right-width", "border-spacing", "border-style",
    "border-top", "border-top-color", "border-top-left-radius",
    "border-top-right-radius", "border-top-style", "border-top-width",
    "border-width", "bottom", "box-decoration-break", "box-shadow", "box-sizing",
    "break-after", "break-before", "break-inside", "caption-side", "caret-color",
    "clear", "clip", "color", "color-profile", "column-count", "column-fill",
    "column-gap", "column-rule", "column-rule-color", "column-rule-style",
    "column-rule-width", "column-span", "column-width", "columns", "contain",
    "content", "counter-increment", "counter-reset", "crop", "cue", "cue-after",
    "cue-before", "cursor", "direction", "display", "dominant-baseline",
    "drop-initial-after-adjust", "drop-initial-after-align",
    "drop-initial-before-adjust", "drop-initial-before-align", "drop-initial-size",
    "drop-initial-value", "elevation", "empty-cells", "fit", "fit-position",
    "flex", "flex-basis", "flex-direction", "flex-flow", "flex-grow",
    "flex-shrink", "flex-wrap", "float", "float-offset", "flow-from", "flow-into",
    "font", "font-family", "font-feature-settings", "font-kerning",
    "font-language-override", "font-optical-sizing", "font-size",
    "font-size-adjust", "font-stretch", "font-style", "font-synthesis",
    "font-variant", "font-variant-alternates", "font-variant-caps",
    "font-variant-east-asian", "font-variant-ligatures", "font-variant-numeric",
    "font-variant-position", "font-variation-settings", "font-weight", "gap",
    "grid", "grid-area", "grid-auto-columns", "grid-auto-flow", "grid-auto-rows",
    "grid-column", "grid-column-end", "grid-column-gap", "grid-column-start",
    "grid-gap", "grid-row", "grid-row-end", "grid-row-gap", "grid-row-start",
    "grid-template", "grid-template-areas", "grid-template-columns",
    "grid-template-rows", "hanging-punctuation", "height", "hyphens", "icon",
    "image-orientation", "image-rendering", "image-resolution", "inline-box-align",
    "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline",
    "inset-inline-end", "inset-inline-start", "isolation", "justify-content",
    "justify-items", "justify-self", "left", "letter-spacing", "line-break",
    "line-height", "line-height-step", "line-stacking", "line-stacking-ruby",
    "line-stacking-shift", "line-stacking-strategy", "list-style",
    "list-style-image", "list-style-position", "list-style-type", "margin",
    "margin-bottom", "margin-left", "margin-right", "margin-top", "marks",
    "marquee-direction", "marquee-loop", "marquee-play-count", "marquee-speed",
    "marquee-style", "mask-clip", "mask-composite", "mask-image", "mask-mode",
    "mask-origin", "mask-position", "mask-repeat", "mask-size","mask-type",
    "max-block-size", "max-height", "max-inline-size",
    "max-width", "min-block-size", "min-height", "min-inline-size", "min-width",
    "mix-blend-mode", "move-to", "nav-down", "nav-index", "nav-left", "nav-right",
    "nav-up", "object-fit", "object-position", "offset", "offset-anchor",
    "offset-distance", "offset-path", "offset-position", "offset-rotate",
    "opacity", "order", "orphans", "outline", "outline-color", "outline-offset",
    "outline-style", "outline-width", "overflow", "overflow-style",
    "overflow-wrap", "overflow-x", "overflow-y", "padding", "padding-bottom",
    "padding-left", "padding-right", "padding-top", "page", "page-break-after",
    "page-break-before", "page-break-inside", "page-policy", "pause",
    "pause-after", "pause-before", "perspective", "perspective-origin", "pitch",
    "pitch-range", "place-content", "place-items", "place-self", "play-during",
    "position", "presentation-level", "punctuation-trim", "quotes",
    "region-break-after", "region-break-before", "region-break-inside",
    "region-fragment", "rendering-intent", "resize", "rest", "rest-after",
    "rest-before", "richness", "right", "rotate", "rotation", "rotation-point",
    "row-gap", "ruby-align", "ruby-overhang", "ruby-position", "ruby-span",
    "scale", "scroll-behavior", "scroll-margin", "scroll-margin-block",
    "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom",
    "scroll-margin-inline", "scroll-margin-inline-end",
    "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right",
    "scroll-margin-top", "scroll-padding", "scroll-padding-block",
    "scroll-padding-block-end", "scroll-padding-block-start",
    "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end",
    "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right",
    "scroll-padding-top", "scroll-snap-align", "scroll-snap-type",
    "shape-image-threshold", "shape-inside", "shape-margin", "shape-outside",
    "size", "speak", "speak-as", "speak-header", "speak-numeral",
    "speak-punctuation", "speech-rate", "stress", "string-set", "tab-size",
    "table-layout", "target", "target-name", "target-new", "target-position",
    "text-align", "text-align-last", "text-combine-upright", "text-decoration",
    "text-decoration-color", "text-decoration-line", "text-decoration-skip",
    "text-decoration-skip-ink", "text-decoration-style", "text-emphasis",
    "text-emphasis-color", "text-emphasis-position", "text-emphasis-style",
    "text-height", "text-indent", "text-justify", "text-orientation",
    "text-outline", "text-overflow", "text-rendering", "text-shadow",
    "text-size-adjust", "text-space-collapse", "text-transform",
    "text-underline-position", "text-wrap", "top", "touch-action", "transform", "transform-origin",
    "transform-style", "transition", "transition-delay", "transition-duration",
    "transition-property", "transition-timing-function", "translate",
    "unicode-bidi", "user-select", "vertical-align", "visibility", "voice-balance",
    "voice-duration", "voice-family", "voice-pitch", "voice-range", "voice-rate",
    "voice-stress", "voice-volume", "volume", "white-space", "widows", "width",
    "will-change", "word-break", "word-spacing", "word-wrap", "writing-mode", "z-index",
    // SVG-specific
    "clip-path", "clip-rule", "mask", "enable-background", "filter", "flood-color",
    "flood-opacity", "lighting-color", "stop-color", "stop-opacity", "pointer-events",
    "color-interpolation", "color-interpolation-filters",
    "color-rendering", "fill", "fill-opacity", "fill-rule", "image-rendering",
    "marker", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stroke",
    "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin",
    "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-rendering",
    "baseline-shift", "dominant-baseline", "glyph-orientation-horizontal",
    "glyph-orientation-vertical", "text-anchor", "writing-mode",
  ], propertyKeywords = keySet(propertyKeywords_);

  var nonStandardPropertyKeywords_ = [
    "border-block", "border-block-color", "border-block-end",
    "border-block-end-color", "border-block-end-style", "border-block-end-width",
    "border-block-start", "border-block-start-color", "border-block-start-style",
    "border-block-start-width", "border-block-style", "border-block-width",
    "border-inline", "border-inline-color", "border-inline-end",
    "border-inline-end-color", "border-inline-end-style",
    "border-inline-end-width", "border-inline-start", "border-inline-start-color",
    "border-inline-start-style", "border-inline-start-width",
    "border-inline-style", "border-inline-width", "margin-block",
    "margin-block-end", "margin-block-start", "margin-inline", "margin-inline-end",
    "margin-inline-start", "padding-block", "padding-block-end",
    "padding-block-start", "padding-inline", "padding-inline-end",
    "padding-inline-start", "scroll-snap-stop", "scrollbar-3d-light-color",
    "scrollbar-arrow-color", "scrollbar-base-color", "scrollbar-dark-shadow-color",
    "scrollbar-face-color", "scrollbar-highlight-color", "scrollbar-shadow-color",
    "scrollbar-track-color", "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "shape-inside", "zoom"
  ], nonStandardPropertyKeywords = keySet(nonStandardPropertyKeywords_);

  var fontProperties_ = [
    "font-display", "font-family", "src", "unicode-range", "font-variant",
     "font-feature-settings", "font-stretch", "font-weight", "font-style"
  ], fontProperties = keySet(fontProperties_);

  var counterDescriptors_ = [
    "additive-symbols", "fallback", "negative", "pad", "prefix", "range",
    "speak-as", "suffix", "symbols", "system"
  ], counterDescriptors = keySet(counterDescriptors_);

  var colorKeywords_ = [
    "aliceblue", "antiquewhite", "aqua", "aquamarine", "azure", "beige",
    "bisque", "black", "blanchedalmond", "blue", "blueviolet", "brown",
    "burlywood", "cadetblue", "chartreuse", "chocolate", "coral", "cornflowerblue",
    "cornsilk", "crimson", "cyan", "darkblue", "darkcyan", "darkgoldenrod",
    "darkgray", "darkgreen", "darkkhaki", "darkmagenta", "darkolivegreen",
    "darkorange", "darkorchid", "darkred", "darksalmon", "darkseagreen",
    "darkslateblue", "darkslategray", "darkturquoise", "darkviolet",
    "deeppink", "deepskyblue", "dimgray", "dodgerblue", "firebrick",
    "floralwhite", "forestgreen", "fuchsia", "gainsboro", "ghostwhite",
    "gold", "goldenrod", "gray", "grey", "green", "greenyellow", "honeydew",
    "hotpink", "indianred", "indigo", "ivory", "khaki", "lavender",
    "lavenderblush", "lawngreen", "lemonchiffon", "lightblue", "lightcoral",
    "lightcyan", "lightgoldenrodyellow", "lightgray", "lightgreen", "lightpink",
    "lightsalmon", "lightseagreen", "lightskyblue", "lightslategray",
    "lightsteelblue", "lightyellow", "lime", "limegreen", "linen", "magenta",
    "maroon", "mediumaquamarine", "mediumblue", "mediumorchid", "mediumpurple",
    "mediumseagreen", "mediumslateblue", "mediumspringgreen", "mediumturquoise",
    "mediumvioletred", "midnightblue", "mintcream", "mistyrose", "moccasin",
    "navajowhite", "navy", "oldlace", "olive", "olivedrab", "orange", "orangered",
    "orchid", "palegoldenrod", "palegreen", "paleturquoise", "palevioletred",
    "papayawhip", "peachpuff", "peru", "pink", "plum", "powderblue",
    "purple", "rebeccapurple", "red", "rosybrown", "royalblue", "saddlebrown",
    "salmon", "sandybrown", "seagreen", "seashell", "sienna", "silver", "skyblue",
    "slateblue", "slategray", "snow", "springgreen", "steelblue", "tan",
    "teal", "thistle", "tomato", "turquoise", "violet", "wheat", "white",
    "whitesmoke", "yellow", "yellowgreen"
  ], colorKeywords = keySet(colorKeywords_);

  var valueKeywords_ = [
    "above", "absolute", "activeborder", "additive", "activecaption", "afar",
    "after-white-space", "ahead", "alias", "all", "all-scroll", "alphabetic", "alternate",
    "always", "amharic", "amharic-abegede", "antialiased", "appworkspace",
    "arabic-indic", "armenian", "asterisks", "attr", "auto", "auto-flow", "avoid", "avoid-column", "avoid-page",
    "avoid-region", "axis-pan", "background", "backwards", "baseline", "below", "bidi-override", "binary",
    "bengali", "blink", "block", "block-axis", "bold", "bolder", "border", "border-box",
    "both", "bottom", "break", "break-all", "break-word", "bullets", "button", "button-bevel",
    "buttonface", "buttonhighlight", "buttonshadow", "buttontext", "calc", "cambodian",
    "capitalize", "caps-lock-indicator", "caption", "captiontext", "caret",
    "cell", "center", "checkbox", "circle", "cjk-decimal", "cjk-earthly-branch",
    "cjk-heavenly-stem", "cjk-ideographic", "clear", "clip", "close-quote",
    "col-resize", "collapse", "color", "color-burn", "color-dodge", "column", "column-reverse",
    "compact", "condensed", "contain", "content", "contents",
    "content-box", "context-menu", "continuous", "copy", "counter", "counters", "cover", "crop",
    "cross", "crosshair", "currentcolor", "cursive", "cyclic", "darken", "dashed", "decimal",
    "decimal-leading-zero", "default", "default-button", "dense", "destination-atop",
    "destination-in", "destination-out", "destination-over", "devanagari", "difference",
    "disc", "discard", "disclosure-closed", "disclosure-open", "document",
    "dot-dash", "dot-dot-dash",
    "dotted", "double", "down", "e-resize", "ease", "ease-in", "ease-in-out", "ease-out",
    "element", "ellipse", "ellipsis", "embed", "end", "ethiopic", "ethiopic-abegede",
    "ethiopic-abegede-am-et", "ethiopic-abegede-gez", "ethiopic-abegede-ti-er",
    "ethiopic-abegede-ti-et", "ethiopic-halehame-aa-er",
    "ethiopic-halehame-aa-et", "ethiopic-halehame-am-et",
    "ethiopic-halehame-gez", "ethiopic-halehame-om-et",
    "ethiopic-halehame-sid-et", "ethiopic-halehame-so-et",
    "ethiopic-halehame-ti-er", "ethiopic-halehame-ti-et", "ethiopic-halehame-tig",
    "ethiopic-numeric", "ew-resize", "exclusion", "expanded", "extends", "extra-condensed",
    "extra-expanded", "fantasy", "fast", "fill", "fill-box", "fixed", "flat", "flex", "flex-end", "flex-start", "footnotes",
    "forwards", "from", "geometricPrecision", "georgian", "graytext", "grid", "groove",
    "gujarati", "gurmukhi", "hand", "hangul", "hangul-consonant", "hard-light", "hebrew",
    "help", "hidden", "hide", "higher", "highlight", "highlighttext",
    "hiragana", "hiragana-iroha", "horizontal", "hsl", "hsla", "hue", "icon", "ignore",
    "inactiveborder", "inactivecaption", "inactivecaptiontext", "infinite",
    "infobackground", "infotext", "inherit", "initial", "inline", "inline-axis",
    "inline-block", "inline-flex", "inline-grid", "inline-table", "inset", "inside", "intrinsic", "invert",
    "italic", "japanese-formal", "japanese-informal", "justify", "kannada",
    "katakana", "katakana-iroha", "keep-all", "khmer",
    "korean-hangul-formal", "korean-hanja-formal", "korean-hanja-informal",
    "landscape", "lao", "large", "larger", "left", "level", "lighter", "lighten",
    "line-through", "linear", "linear-gradient", "lines", "list-item", "listbox", "listitem",
    "local", "logical", "loud", "lower", "lower-alpha", "lower-armenian",
    "lower-greek", "lower-hexadecimal", "lower-latin", "lower-norwegian",
    "lower-roman", "lowercase", "ltr", "luminosity", "malayalam", "manipulation", "match", "matrix", "matrix3d",
    "media-controls-background", "media-current-time-display",
    "media-fullscreen-button", "media-mute-button", "media-play-button",
    "media-return-to-realtime-button", "media-rewind-button",
    "media-seek-back-button", "media-seek-forward-button", "media-slider",
    "media-sliderthumb", "media-time-remaining-display", "media-volume-slider",
    "media-volume-slider-container", "media-volume-sliderthumb", "medium",
    "menu", "menulist", "menulist-button", "menulist-text",
    "menulist-textfield", "menutext", "message-box", "middle", "min-intrinsic",
    "mix", "mongolian", "monospace", "move", "multiple", "multiple_mask_images", "multiply", "myanmar", "n-resize",
    "narrower", "ne-resize", "nesw-resize", "no-close-quote", "no-drop",
    "no-open-quote", "no-repeat", "none", "normal", "not-allowed", "nowrap",
    "ns-resize", "numbers", "numeric", "nw-resize", "nwse-resize", "oblique", "octal", "opacity", "open-quote",
    "optimizeLegibility", "optimizeSpeed", "oriya", "oromo", "outset",
    "outside", "outside-shape", "overlay", "overline", "padding", "padding-box",
    "painted", "page", "paused", "persian", "perspective", "pinch-zoom", "plus-darker", "plus-lighter",
    "pointer", "polygon", "portrait", "pre", "pre-line", "pre-wrap", "preserve-3d",
    "progress", "push-button", "radial-gradient", "radio", "read-only",
    "read-write", "read-write-plaintext-only", "rectangle", "region",
    "relative", "repeat", "repeating-linear-gradient",
    "repeating-radial-gradient", "repeat-x", "repeat-y", "reset", "reverse",
    "rgb", "rgba", "ridge", "right", "rotate", "rotate3d", "rotateX", "rotateY",
    "rotateZ", "round", "row", "row-resize", "row-reverse", "rtl", "run-in", "running",
    "s-resize", "sans-serif", "saturation", "scale", "scale3d", "scaleX", "scaleY", "scaleZ", "screen",
    "scroll", "scrollbar", "scroll-position", "se-resize", "searchfield",
    "searchfield-cancel-button", "searchfield-decoration",
    "searchfield-results-button", "searchfield-results-decoration", "self-start", "self-end",
    "semi-condensed", "semi-expanded", "separate", "serif", "show", "sidama",
    "simp-chinese-formal", "simp-chinese-informal", "single",
    "skew", "skewX", "skewY", "skip-white-space", "slide", "slider-horizontal",
    "slider-vertical", "sliderthumb-horizontal", "sliderthumb-vertical", "slow",
    "small", "small-caps", "small-caption", "smaller", "soft-light", "solid", "somali",
    "source-atop", "source-in", "source-out", "source-over", "space", "space-around", "space-between", "space-evenly", "spell-out", "square",
    "square-button", "start", "static", "status-bar", "stretch", "stroke", "stroke-box", "sub",
    "subpixel-antialiased", "svg_masks", "super", "sw-resize", "symbolic", "symbols", "system-ui", "table",
    "table-caption", "table-cell", "table-column", "table-column-group",
    "table-footer-group", "table-header-group", "table-row", "table-row-group",
    "tamil",
    "telugu", "text", "text-bottom", "text-top", "textarea", "textfield", "thai",
    "thick", "thin", "threeddarkshadow", "threedface", "threedhighlight",
    "threedlightshadow", "threedshadow", "tibetan", "tigre", "tigrinya-er",
    "tigrinya-er-abegede", "tigrinya-et", "tigrinya-et-abegede", "to", "top",
    "trad-chinese-formal", "trad-chinese-informal", "transform",
    "translate", "translate3d", "translateX", "translateY", "translateZ",
    "transparent", "ultra-condensed", "ultra-expanded", "underline", "unidirectional-pan", "unset", "up",
    "upper-alpha", "upper-armenian", "upper-greek", "upper-hexadecimal",
    "upper-latin", "upper-norwegian", "upper-roman", "uppercase", "urdu", "url",
    "var", "vertical", "vertical-text", "view-box", "visible", "visibleFill", "visiblePainted",
    "visibleStroke", "visual", "w-resize", "wait", "wave", "wider",
    "window", "windowframe", "windowtext", "words", "wrap", "wrap-reverse", "x-large", "x-small", "xor",
    "xx-large", "xx-small"
  ], valueKeywords = keySet(valueKeywords_);

  var allWords = documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_)
    .concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_)
    .concat(valueKeywords_);
  CodeMirror.registerHelper("hintWords", "css", allWords);

  function tokenCComment(stream, state) {
    var maybeEnd = false, ch;
    while ((ch = stream.next()) != null) {
      if (maybeEnd && ch == "/") {
        state.tokenize = null;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ["comment", "comment"];
  }

  CodeMirror.defineMIME("text/css", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css"
  });

  CodeMirror.defineMIME("text/x-scss", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      ":": function(stream) {
        if (stream.match(/\s*\{/, false))
          return [null, null]
        return false;
      },
      "$": function(stream) {
        stream.match(/^[\w-]+/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "#": function(stream) {
        if (!stream.eat("{")) return false;
        return [null, "interpolation"];
      }
    },
    name: "css",
    helperType: "scss"
  });

  CodeMirror.defineMIME("text/x-less", {
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    mediaValueKeywords: mediaValueKeywords,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    fontProperties: fontProperties,
    allowNested: true,
    lineComment: "//",
    tokenHooks: {
      "/": function(stream, state) {
        if (stream.eat("/")) {
          stream.skipToEnd();
          return ["comment", "comment"];
        } else if (stream.eat("*")) {
          state.tokenize = tokenCComment;
          return tokenCComment(stream, state);
        } else {
          return ["operator", "operator"];
        }
      },
      "@": function(stream) {
        if (stream.eat("{")) return [null, "interpolation"];
        if (stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i, false)) return false;
        stream.eatWhile(/[\w\\\-]/);
        if (stream.match(/^\s*:/, false))
          return ["variable-2", "variable-definition"];
        return ["variable-2", "variable"];
      },
      "&": function() {
        return ["atom", "atom"];
      }
    },
    name: "css",
    helperType: "less"
  });

  CodeMirror.defineMIME("text/x-gss", {
    documentTypes: documentTypes,
    mediaTypes: mediaTypes,
    mediaFeatures: mediaFeatures,
    propertyKeywords: propertyKeywords,
    nonStandardPropertyKeywords: nonStandardPropertyKeywords,
    fontProperties: fontProperties,
    counterDescriptors: counterDescriptors,
    colorKeywords: colorKeywords,
    valueKeywords: valueKeywords,
    supportsAtComponent: true,
    tokenHooks: {
      "/": function(stream, state) {
        if (!stream.eat("*")) return false;
        state.tokenize = tokenCComment;
        return tokenCComment(stream, state);
      }
    },
    name: "css",
    helperType: "gss"
  });

});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("javascript", function(config, parserConfig) {
  var indentUnit = config.indentUnit;
  var statementIndent = parserConfig.statementIndent;
  var jsonldMode = parserConfig.jsonld;
  var jsonMode = parserConfig.json || jsonldMode;
  var isTS = parserConfig.typescript;
  var wordRE = parserConfig.wordCharacters || /[\w$\xa1-\uffff]/;

  // Tokenizer

  var keywords = function(){
    function kw(type) {return {type: type, style: "keyword"};}
    var A = kw("keyword a"), B = kw("keyword b"), C = kw("keyword c"), D = kw("keyword d");
    var operator = kw("operator"), atom = {type: "atom", style: "atom"};

    return {
      "if": kw("if"), "while": A, "with": A, "else": B, "do": B, "try": B, "finally": B,
      "return": D, "break": D, "continue": D, "new": kw("new"), "delete": C, "void": C, "throw": C,
      "debugger": kw("debugger"), "var": kw("var"), "const": kw("var"), "let": kw("var"),
      "function": kw("function"), "catch": kw("catch"),
      "for": kw("for"), "switch": kw("switch"), "case": kw("case"), "default": kw("default"),
      "in": operator, "typeof": operator, "instanceof": operator,
      "true": atom, "false": atom, "null": atom, "undefined": atom, "NaN": atom, "Infinity": atom,
      "this": kw("this"), "class": kw("class"), "super": kw("atom"),
      "yield": C, "export": kw("export"), "import": kw("import"), "extends": C,
      "await": C
    };
  }();

  var isOperatorChar = /[+\-*&%=<>!?|~^@]/;
  var isJsonldKeyword = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;

  function readRegexp(stream) {
    var escaped = false, next, inSet = false;
    while ((next = stream.next()) != null) {
      if (!escaped) {
        if (next == "/" && !inSet) return;
        if (next == "[") inSet = true;
        else if (inSet && next == "]") inSet = false;
      }
      escaped = !escaped && next == "\\";
    }
  }

  // Used as scratch variables to communicate multiple values without
  // consing up tons of objects.
  var type, content;
  function ret(tp, style, cont) {
    type = tp; content = cont;
    return style;
  }
  function tokenBase(stream, state) {
    var ch = stream.next();
    if (ch == '"' || ch == "'") {
      state.tokenize = tokenString(ch);
      return state.tokenize(stream, state);
    } else if (ch == "." && stream.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)) {
      return ret("number", "number");
    } else if (ch == "." && stream.match("..")) {
      return ret("spread", "meta");
    } else if (/[\[\]{}\(\),;\:\.]/.test(ch)) {
      return ret(ch);
    } else if (ch == "=" && stream.eat(">")) {
      return ret("=>", "operator");
    } else if (ch == "0" && stream.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)) {
      return ret("number", "number");
    } else if (/\d/.test(ch)) {
      stream.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/);
      return ret("number", "number");
    } else if (ch == "/") {
      if (stream.eat("*")) {
        state.tokenize = tokenComment;
        return tokenComment(stream, state);
      } else if (stream.eat("/")) {
        stream.skipToEnd();
        return ret("comment", "comment");
      } else if (expressionAllowed(stream, state, 1)) {
        readRegexp(stream);
        stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/);
        return ret("regexp", "string-2");
      } else {
        stream.eat("=");
        return ret("operator", "operator", stream.current());
      }
    } else if (ch == "`") {
      state.tokenize = tokenQuasi;
      return tokenQuasi(stream, state);
    } else if (ch == "#" && stream.peek() == "!") {
      stream.skipToEnd();
      return ret("meta", "meta");
    } else if (ch == "#" && stream.eatWhile(wordRE)) {
      return ret("variable", "property")
    } else if (ch == "<" && stream.match("!--") ||
               (ch == "-" && stream.match("->") && !/\S/.test(stream.string.slice(0, stream.start)))) {
      stream.skipToEnd()
      return ret("comment", "comment")
    } else if (isOperatorChar.test(ch)) {
      if (ch != ">" || !state.lexical || state.lexical.type != ">") {
        if (stream.eat("=")) {
          if (ch == "!" || ch == "=") stream.eat("=")
        } else if (/[<>*+\-]/.test(ch)) {
          stream.eat(ch)
          if (ch == ">") stream.eat(ch)
        }
      }
      if (ch == "?" && stream.eat(".")) return ret(".")
      return ret("operator", "operator", stream.current());
    } else if (wordRE.test(ch)) {
      stream.eatWhile(wordRE);
      var word = stream.current()
      if (state.lastType != ".") {
        if (keywords.propertyIsEnumerable(word)) {
          var kw = keywords[word]
          return ret(kw.type, kw.style, word)
        }
        if (word == "async" && stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/, false))
          return ret("async", "keyword", word)
      }
      return ret("variable", "variable", word)
    }
  }

  function tokenString(quote) {
    return function(stream, state) {
      var escaped = false, next;
      if (jsonldMode && stream.peek() == "@" && stream.match(isJsonldKeyword)){
        state.tokenize = tokenBase;
        return ret("jsonld-keyword", "meta");
      }
      while ((next = stream.next()) != null) {
        if (next == quote && !escaped) break;
        escaped = !escaped && next == "\\";
      }
      if (!escaped) state.tokenize = tokenBase;
      return ret("string", "string");
    };
  }

  function tokenComment(stream, state) {
    var maybeEnd = false, ch;
    while (ch = stream.next()) {
      if (ch == "/" && maybeEnd) {
        state.tokenize = tokenBase;
        break;
      }
      maybeEnd = (ch == "*");
    }
    return ret("comment", "comment");
  }

  function tokenQuasi(stream, state) {
    var escaped = false, next;
    while ((next = stream.next()) != null) {
      if (!escaped && (next == "`" || next == "$" && stream.eat("{"))) {
        state.tokenize = tokenBase;
        break;
      }
      escaped = !escaped && next == "\\";
    }
    return ret("quasi", "string-2", stream.current());
  }

  var brackets = "([{}])";
  // This is a crude lookahead trick to try and notice that we're
  // parsing the argument patterns for a fat-arrow function before we
  // actually hit the arrow token. It only works if the arrow is on
  // the same line as the arguments and there's no strange noise
  // (comments) in between. Fallback is to only notice when we hit the
  // arrow, and not declare the arguments as locals for the arrow
  // body.
  function findFatArrow(stream, state) {
    if (state.fatArrowAt) state.fatArrowAt = null;
    var arrow = stream.string.indexOf("=>", stream.start);
    if (arrow < 0) return;

    if (isTS) { // Try to skip TypeScript return type declarations after the arguments
      var m = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start, arrow))
      if (m) arrow = m.index
    }

    var depth = 0, sawSomething = false;
    for (var pos = arrow - 1; pos >= 0; --pos) {
      var ch = stream.string.charAt(pos);
      var bracket = brackets.indexOf(ch);
      if (bracket >= 0 && bracket < 3) {
        if (!depth) { ++pos; break; }
        if (--depth == 0) { if (ch == "(") sawSomething = true; break; }
      } else if (bracket >= 3 && bracket < 6) {
        ++depth;
      } else if (wordRE.test(ch)) {
        sawSomething = true;
      } else if (/["'\/`]/.test(ch)) {
        for (;; --pos) {
          if (pos == 0) return
          var next = stream.string.charAt(pos - 1)
          if (next == ch && stream.string.charAt(pos - 2) != "\\") { pos--; break }
        }
      } else if (sawSomething && !depth) {
        ++pos;
        break;
      }
    }
    if (sawSomething && !depth) state.fatArrowAt = pos;
  }

  // Parser

  var atomicTypes = {"atom": true, "number": true, "variable": true, "string": true, "regexp": true, "this": true, "jsonld-keyword": true};

  function JSLexical(indented, column, type, align, prev, info) {
    this.indented = indented;
    this.column = column;
    this.type = type;
    this.prev = prev;
    this.info = info;
    if (align != null) this.align = align;
  }

  function inScope(state, varname) {
    for (var v = state.localVars; v; v = v.next)
      if (v.name == varname) return true;
    for (var cx = state.context; cx; cx = cx.prev) {
      for (var v = cx.vars; v; v = v.next)
        if (v.name == varname) return true;
    }
  }

  function parseJS(state, style, type, content, stream) {
    var cc = state.cc;
    // Communicate our context to the combinators.
    // (Less wasteful than consing up a hundred closures on every call.)
    cx.state = state; cx.stream = stream; cx.marked = null, cx.cc = cc; cx.style = style;

    if (!state.lexical.hasOwnProperty("align"))
      state.lexical.align = true;

    while(true) {
      var combinator = cc.length ? cc.pop() : jsonMode ? expression : statement;
      if (combinator(type, content)) {
        while(cc.length && cc[cc.length - 1].lex)
          cc.pop()();
        if (cx.marked) return cx.marked;
        if (type == "variable" && inScope(state, content)) return "variable-2";
        return style;
      }
    }
  }

  // Combinator utils

  var cx = {state: null, column: null, marked: null, cc: null};
  function pass() {
    for (var i = arguments.length - 1; i >= 0; i--) cx.cc.push(arguments[i]);
  }
  function cont() {
    pass.apply(null, arguments);
    return true;
  }
  function inList(name, list) {
    for (var v = list; v; v = v.next) if (v.name == name) return true
    return false;
  }
  function register(varname) {
    var state = cx.state;
    cx.marked = "def";
    if (state.context) {
      if (state.lexical.info == "var" && state.context && state.context.block) {
        // FIXME function decls are also not block scoped
        var newContext = registerVarScoped(varname, state.context)
        if (newContext != null) {
          state.context = newContext
          return
        }
      } else if (!inList(varname, state.localVars)) {
        state.localVars = new Var(varname, state.localVars)
        return
      }
    }
    // Fall through means this is global
    if (parserConfig.globalVars && !inList(varname, state.globalVars))
      state.globalVars = new Var(varname, state.globalVars)
  }
  function registerVarScoped(varname, context) {
    if (!context) {
      return null
    } else if (context.block) {
      var inner = registerVarScoped(varname, context.prev)
      if (!inner) return null
      if (inner == context.prev) return context
      return new Context(inner, context.vars, true)
    } else if (inList(varname, context.vars)) {
      return context
    } else {
      return new Context(context.prev, new Var(varname, context.vars), false)
    }
  }

  function isModifier(name) {
    return name == "public" || name == "private" || name == "protected" || name == "abstract" || name == "readonly"
  }

  // Combinators

  function Context(prev, vars, block) { this.prev = prev; this.vars = vars; this.block = block }
  function Var(name, next) { this.name = name; this.next = next }

  var defaultVars = new Var("this", new Var("arguments", null))
  function pushcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, false)
    cx.state.localVars = defaultVars
  }
  function pushblockcontext() {
    cx.state.context = new Context(cx.state.context, cx.state.localVars, true)
    cx.state.localVars = null
  }
  function popcontext() {
    cx.state.localVars = cx.state.context.vars
    cx.state.context = cx.state.context.prev
  }
  popcontext.lex = true
  function pushlex(type, info) {
    var result = function() {
      var state = cx.state, indent = state.indented;
      if (state.lexical.type == "stat") indent = state.lexical.indented;
      else for (var outer = state.lexical; outer && outer.type == ")" && outer.align; outer = outer.prev)
        indent = outer.indented;
      state.lexical = new JSLexical(indent, cx.stream.column(), type, null, state.lexical, info);
    };
    result.lex = true;
    return result;
  }
  function poplex() {
    var state = cx.state;
    if (state.lexical.prev) {
      if (state.lexical.type == ")")
        state.indented = state.lexical.indented;
      state.lexical = state.lexical.prev;
    }
  }
  poplex.lex = true;

  function expect(wanted) {
    function exp(type) {
      if (type == wanted) return cont();
      else if (wanted == ";" || type == "}" || type == ")" || type == "]") return pass();
      else return cont(exp);
    };
    return exp;
  }

  function statement(type, value) {
    if (type == "var") return cont(pushlex("vardef", value), vardef, expect(";"), poplex);
    if (type == "keyword a") return cont(pushlex("form"), parenExpr, statement, poplex);
    if (type == "keyword b") return cont(pushlex("form"), statement, poplex);
    if (type == "keyword d") return cx.stream.match(/^\s*$/, false) ? cont() : cont(pushlex("stat"), maybeexpression, expect(";"), poplex);
    if (type == "debugger") return cont(expect(";"));
    if (type == "{") return cont(pushlex("}"), pushblockcontext, block, poplex, popcontext);
    if (type == ";") return cont();
    if (type == "if") {
      if (cx.state.lexical.info == "else" && cx.state.cc[cx.state.cc.length - 1] == poplex)
        cx.state.cc.pop()();
      return cont(pushlex("form"), parenExpr, statement, poplex, maybeelse);
    }
    if (type == "function") return cont(functiondef);
    if (type == "for") return cont(pushlex("form"), forspec, statement, poplex);
    if (type == "class" || (isTS && value == "interface")) {
      cx.marked = "keyword"
      return cont(pushlex("form", type == "class" ? type : value), className, poplex)
    }
    if (type == "variable") {
      if (isTS && value == "declare") {
        cx.marked = "keyword"
        return cont(statement)
      } else if (isTS && (value == "module" || value == "enum" || value == "type") && cx.stream.match(/^\s*\w/, false)) {
        cx.marked = "keyword"
        if (value == "enum") return cont(enumdef);
        else if (value == "type") return cont(typename, expect("operator"), typeexpr, expect(";"));
        else return cont(pushlex("form"), pattern, expect("{"), pushlex("}"), block, poplex, poplex)
      } else if (isTS && value == "namespace") {
        cx.marked = "keyword"
        return cont(pushlex("form"), expression, statement, poplex)
      } else if (isTS && value == "abstract") {
        cx.marked = "keyword"
        return cont(statement)
      } else {
        return cont(pushlex("stat"), maybelabel);
      }
    }
    if (type == "switch") return cont(pushlex("form"), parenExpr, expect("{"), pushlex("}", "switch"), pushblockcontext,
                                      block, poplex, poplex, popcontext);
    if (type == "case") return cont(expression, expect(":"));
    if (type == "default") return cont(expect(":"));
    if (type == "catch") return cont(pushlex("form"), pushcontext, maybeCatchBinding, statement, poplex, popcontext);
    if (type == "export") return cont(pushlex("stat"), afterExport, poplex);
    if (type == "import") return cont(pushlex("stat"), afterImport, poplex);
    if (type == "async") return cont(statement)
    if (value == "@") return cont(expression, statement)
    return pass(pushlex("stat"), expression, expect(";"), poplex);
  }
  function maybeCatchBinding(type) {
    if (type == "(") return cont(funarg, expect(")"))
  }
  function expression(type, value) {
    return expressionInner(type, value, false);
  }
  function expressionNoComma(type, value) {
    return expressionInner(type, value, true);
  }
  function parenExpr(type) {
    if (type != "(") return pass()
    return cont(pushlex(")"), maybeexpression, expect(")"), poplex)
  }
  function expressionInner(type, value, noComma) {
    if (cx.state.fatArrowAt == cx.stream.start) {
      var body = noComma ? arrowBodyNoComma : arrowBody;
      if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, expect("=>"), body, popcontext);
      else if (type == "variable") return pass(pushcontext, pattern, expect("=>"), body, popcontext);
    }

    var maybeop = noComma ? maybeoperatorNoComma : maybeoperatorComma;
    if (atomicTypes.hasOwnProperty(type)) return cont(maybeop);
    if (type == "function") return cont(functiondef, maybeop);
    if (type == "class" || (isTS && value == "interface")) { cx.marked = "keyword"; return cont(pushlex("form"), classExpression, poplex); }
    if (type == "keyword c" || type == "async") return cont(noComma ? expressionNoComma : expression);
    if (type == "(") return cont(pushlex(")"), maybeexpression, expect(")"), poplex, maybeop);
    if (type == "operator" || type == "spread") return cont(noComma ? expressionNoComma : expression);
    if (type == "[") return cont(pushlex("]"), arrayLiteral, poplex, maybeop);
    if (type == "{") return contCommasep(objprop, "}", null, maybeop);
    if (type == "quasi") return pass(quasi, maybeop);
    if (type == "new") return cont(maybeTarget(noComma));
    if (type == "import") return cont(expression);
    return cont();
  }
  function maybeexpression(type) {
    if (type.match(/[;\}\)\],]/)) return pass();
    return pass(expression);
  }

  function maybeoperatorComma(type, value) {
    if (type == ",") return cont(maybeexpression);
    return maybeoperatorNoComma(type, value, false);
  }
  function maybeoperatorNoComma(type, value, noComma) {
    var me = noComma == false ? maybeoperatorComma : maybeoperatorNoComma;
    var expr = noComma == false ? expression : expressionNoComma;
    if (type == "=>") return cont(pushcontext, noComma ? arrowBodyNoComma : arrowBody, popcontext);
    if (type == "operator") {
      if (/\+\+|--/.test(value) || isTS && value == "!") return cont(me);
      if (isTS && value == "<" && cx.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, false))
        return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, me);
      if (value == "?") return cont(expression, expect(":"), expr);
      return cont(expr);
    }
    if (type == "quasi") { return pass(quasi, me); }
    if (type == ";") return;
    if (type == "(") return contCommasep(expressionNoComma, ")", "call", me);
    if (type == ".") return cont(property, me);
    if (type == "[") return cont(pushlex("]"), maybeexpression, expect("]"), poplex, me);
    if (isTS && value == "as") { cx.marked = "keyword"; return cont(typeexpr, me) }
    if (type == "regexp") {
      cx.state.lastType = cx.marked = "operator"
      cx.stream.backUp(cx.stream.pos - cx.stream.start - 1)
      return cont(expr)
    }
  }
  function quasi(type, value) {
    if (type != "quasi") return pass();
    if (value.slice(value.length - 2) != "${") return cont(quasi);
    return cont(expression, continueQuasi);
  }
  function continueQuasi(type) {
    if (type == "}") {
      cx.marked = "string-2";
      cx.state.tokenize = tokenQuasi;
      return cont(quasi);
    }
  }
  function arrowBody(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expression);
  }
  function arrowBodyNoComma(type) {
    findFatArrow(cx.stream, cx.state);
    return pass(type == "{" ? statement : expressionNoComma);
  }
  function maybeTarget(noComma) {
    return function(type) {
      if (type == ".") return cont(noComma ? targetNoComma : target);
      else if (type == "variable" && isTS) return cont(maybeTypeArgs, noComma ? maybeoperatorNoComma : maybeoperatorComma)
      else return pass(noComma ? expressionNoComma : expression);
    };
  }
  function target(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorComma); }
  }
  function targetNoComma(_, value) {
    if (value == "target") { cx.marked = "keyword"; return cont(maybeoperatorNoComma); }
  }
  function maybelabel(type) {
    if (type == ":") return cont(poplex, statement);
    return pass(maybeoperatorComma, expect(";"), poplex);
  }
  function property(type) {
    if (type == "variable") {cx.marked = "property"; return cont();}
  }
  function objprop(type, value) {
    if (type == "async") {
      cx.marked = "property";
      return cont(objprop);
    } else if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      if (value == "get" || value == "set") return cont(getterSetter);
      var m // Work around fat-arrow-detection complication for detecting typescript typed arrow params
      if (isTS && cx.state.fatArrowAt == cx.stream.start && (m = cx.stream.match(/^\s*:\s*/, false)))
        cx.state.fatArrowAt = cx.stream.pos + m[0].length
      return cont(afterprop);
    } else if (type == "number" || type == "string") {
      cx.marked = jsonldMode ? "property" : (cx.style + " property");
      return cont(afterprop);
    } else if (type == "jsonld-keyword") {
      return cont(afterprop);
    } else if (isTS && isModifier(value)) {
      cx.marked = "keyword"
      return cont(objprop)
    } else if (type == "[") {
      return cont(expression, maybetype, expect("]"), afterprop);
    } else if (type == "spread") {
      return cont(expressionNoComma, afterprop);
    } else if (value == "*") {
      cx.marked = "keyword";
      return cont(objprop);
    } else if (type == ":") {
      return pass(afterprop)
    }
  }
  function getterSetter(type) {
    if (type != "variable") return pass(afterprop);
    cx.marked = "property";
    return cont(functiondef);
  }
  function afterprop(type) {
    if (type == ":") return cont(expressionNoComma);
    if (type == "(") return pass(functiondef);
  }
  function commasep(what, end, sep) {
    function proceed(type, value) {
      if (sep ? sep.indexOf(type) > -1 : type == ",") {
        var lex = cx.state.lexical;
        if (lex.info == "call") lex.pos = (lex.pos || 0) + 1;
        return cont(function(type, value) {
          if (type == end || value == end) return pass()
          return pass(what)
        }, proceed);
      }
      if (type == end || value == end) return cont();
      if (sep && sep.indexOf(";") > -1) return pass(what)
      return cont(expect(end));
    }
    return function(type, value) {
      if (type == end || value == end) return cont();
      return pass(what, proceed);
    };
  }
  function contCommasep(what, end, info) {
    for (var i = 3; i < arguments.length; i++)
      cx.cc.push(arguments[i]);
    return cont(pushlex(end, info), commasep(what, end), poplex);
  }
  function block(type) {
    if (type == "}") return cont();
    return pass(statement, block);
  }
  function maybetype(type, value) {
    if (isTS) {
      if (type == ":") return cont(typeexpr);
      if (value == "?") return cont(maybetype);
    }
  }
  function maybetypeOrIn(type, value) {
    if (isTS && (type == ":" || value == "in")) return cont(typeexpr)
  }
  function mayberettype(type) {
    if (isTS && type == ":") {
      if (cx.stream.match(/^\s*\w+\s+is\b/, false)) return cont(expression, isKW, typeexpr)
      else return cont(typeexpr)
    }
  }
  function isKW(_, value) {
    if (value == "is") {
      cx.marked = "keyword"
      return cont()
    }
  }
  function typeexpr(type, value) {
    if (value == "keyof" || value == "typeof" || value == "infer") {
      cx.marked = "keyword"
      return cont(value == "typeof" ? expressionNoComma : typeexpr)
    }
    if (type == "variable" || value == "void") {
      cx.marked = "type"
      return cont(afterType)
    }
    if (value == "|" || value == "&") return cont(typeexpr)
    if (type == "string" || type == "number" || type == "atom") return cont(afterType);
    if (type == "[") return cont(pushlex("]"), commasep(typeexpr, "]", ","), poplex, afterType)
    if (type == "{") return cont(pushlex("}"), commasep(typeprop, "}", ",;"), poplex, afterType)
    if (type == "(") return cont(commasep(typearg, ")"), maybeReturnType, afterType)
    if (type == "<") return cont(commasep(typeexpr, ">"), typeexpr)
  }
  function maybeReturnType(type) {
    if (type == "=>") return cont(typeexpr)
  }
  function typeprop(type, value) {
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property"
      return cont(typeprop)
    } else if (value == "?" || type == "number" || type == "string") {
      return cont(typeprop)
    } else if (type == ":") {
      return cont(typeexpr)
    } else if (type == "[") {
      return cont(expect("variable"), maybetypeOrIn, expect("]"), typeprop)
    } else if (type == "(") {
      return pass(functiondecl, typeprop)
    }
  }
  function typearg(type, value) {
    if (type == "variable" && cx.stream.match(/^\s*[?:]/, false) || value == "?") return cont(typearg)
    if (type == ":") return cont(typeexpr)
    if (type == "spread") return cont(typearg)
    return pass(typeexpr)
  }
  function afterType(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
    if (value == "|" || type == "." || value == "&") return cont(typeexpr)
    if (type == "[") return cont(typeexpr, expect("]"), afterType)
    if (value == "extends" || value == "implements") { cx.marked = "keyword"; return cont(typeexpr) }
    if (value == "?") return cont(typeexpr, expect(":"), typeexpr)
  }
  function maybeTypeArgs(_, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeexpr, ">"), poplex, afterType)
  }
  function typeparam() {
    return pass(typeexpr, maybeTypeDefault)
  }
  function maybeTypeDefault(_, value) {
    if (value == "=") return cont(typeexpr)
  }
  function vardef(_, value) {
    if (value == "enum") {cx.marked = "keyword"; return cont(enumdef)}
    return pass(pattern, maybetype, maybeAssign, vardefCont);
  }
  function pattern(type, value) {
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(pattern) }
    if (type == "variable") { register(value); return cont(); }
    if (type == "spread") return cont(pattern);
    if (type == "[") return contCommasep(eltpattern, "]");
    if (type == "{") return contCommasep(proppattern, "}");
  }
  function proppattern(type, value) {
    if (type == "variable" && !cx.stream.match(/^\s*:/, false)) {
      register(value);
      return cont(maybeAssign);
    }
    if (type == "variable") cx.marked = "property";
    if (type == "spread") return cont(pattern);
    if (type == "}") return pass();
    if (type == "[") return cont(expression, expect(']'), expect(':'), proppattern);
    return cont(expect(":"), pattern, maybeAssign);
  }
  function eltpattern() {
    return pass(pattern, maybeAssign)
  }
  function maybeAssign(_type, value) {
    if (value == "=") return cont(expressionNoComma);
  }
  function vardefCont(type) {
    if (type == ",") return cont(vardef);
  }
  function maybeelse(type, value) {
    if (type == "keyword b" && value == "else") return cont(pushlex("form", "else"), statement, poplex);
  }
  function forspec(type, value) {
    if (value == "await") return cont(forspec);
    if (type == "(") return cont(pushlex(")"), forspec1, poplex);
  }
  function forspec1(type) {
    if (type == "var") return cont(vardef, forspec2);
    if (type == "variable") return cont(forspec2);
    return pass(forspec2)
  }
  function forspec2(type, value) {
    if (type == ")") return cont()
    if (type == ";") return cont(forspec2)
    if (value == "in" || value == "of") { cx.marked = "keyword"; return cont(expression, forspec2) }
    return pass(expression, forspec2)
  }
  function functiondef(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondef);}
    if (type == "variable") {register(value); return cont(functiondef);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, statement, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondef)
  }
  function functiondecl(type, value) {
    if (value == "*") {cx.marked = "keyword"; return cont(functiondecl);}
    if (type == "variable") {register(value); return cont(functiondecl);}
    if (type == "(") return cont(pushcontext, pushlex(")"), commasep(funarg, ")"), poplex, mayberettype, popcontext);
    if (isTS && value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, functiondecl)
  }
  function typename(type, value) {
    if (type == "keyword" || type == "variable") {
      cx.marked = "type"
      return cont(typename)
    } else if (value == "<") {
      return cont(pushlex(">"), commasep(typeparam, ">"), poplex)
    }
  }
  function funarg(type, value) {
    if (value == "@") cont(expression, funarg)
    if (type == "spread") return cont(funarg);
    if (isTS && isModifier(value)) { cx.marked = "keyword"; return cont(funarg); }
    if (isTS && type == "this") return cont(maybetype, maybeAssign)
    return pass(pattern, maybetype, maybeAssign);
  }
  function classExpression(type, value) {
    // Class expressions may have an optional name.
    if (type == "variable") return className(type, value);
    return classNameAfter(type, value);
  }
  function className(type, value) {
    if (type == "variable") {register(value); return cont(classNameAfter);}
  }
  function classNameAfter(type, value) {
    if (value == "<") return cont(pushlex(">"), commasep(typeparam, ">"), poplex, classNameAfter)
    if (value == "extends" || value == "implements" || (isTS && type == ",")) {
      if (value == "implements") cx.marked = "keyword";
      return cont(isTS ? typeexpr : expression, classNameAfter);
    }
    if (type == "{") return cont(pushlex("}"), classBody, poplex);
  }
  function classBody(type, value) {
    if (type == "async" ||
        (type == "variable" &&
         (value == "static" || value == "get" || value == "set" || (isTS && isModifier(value))) &&
         cx.stream.match(/^\s+[\w$\xa1-\uffff]/, false))) {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (type == "variable" || cx.style == "keyword") {
      cx.marked = "property";
      return cont(classfield, classBody);
    }
    if (type == "number" || type == "string") return cont(classfield, classBody);
    if (type == "[")
      return cont(expression, maybetype, expect("]"), classfield, classBody)
    if (value == "*") {
      cx.marked = "keyword";
      return cont(classBody);
    }
    if (isTS && type == "(") return pass(functiondecl, classBody)
    if (type == ";" || type == ",") return cont(classBody);
    if (type == "}") return cont();
    if (value == "@") return cont(expression, classBody)
  }
  function classfield(type, value) {
    if (value == "?") return cont(classfield)
    if (type == ":") return cont(typeexpr, maybeAssign)
    if (value == "=") return cont(expressionNoComma)
    var context = cx.state.lexical.prev, isInterface = context && context.info == "interface"
    return pass(isInterface ? functiondecl : functiondef)
  }
  function afterExport(type, value) {
    if (value == "*") { cx.marked = "keyword"; return cont(maybeFrom, expect(";")); }
    if (value == "default") { cx.marked = "keyword"; return cont(expression, expect(";")); }
    if (type == "{") return cont(commasep(exportField, "}"), maybeFrom, expect(";"));
    return pass(statement);
  }
  function exportField(type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(expect("variable")); }
    if (type == "variable") return pass(expressionNoComma, exportField);
  }
  function afterImport(type) {
    if (type == "string") return cont();
    if (type == "(") return pass(expression);
    return pass(importSpec, maybeMoreImports, maybeFrom);
  }
  function importSpec(type, value) {
    if (type == "{") return contCommasep(importSpec, "}");
    if (type == "variable") register(value);
    if (value == "*") cx.marked = "keyword";
    return cont(maybeAs);
  }
  function maybeMoreImports(type) {
    if (type == ",") return cont(importSpec, maybeMoreImports)
  }
  function maybeAs(_type, value) {
    if (value == "as") { cx.marked = "keyword"; return cont(importSpec); }
  }
  function maybeFrom(_type, value) {
    if (value == "from") { cx.marked = "keyword"; return cont(expression); }
  }
  function arrayLiteral(type) {
    if (type == "]") return cont();
    return pass(commasep(expressionNoComma, "]"));
  }
  function enumdef() {
    return pass(pushlex("form"), pattern, expect("{"), pushlex("}"), commasep(enummember, "}"), poplex, poplex)
  }
  function enummember() {
    return pass(pattern, maybeAssign);
  }

  function isContinuedStatement(state, textAfter) {
    return state.lastType == "operator" || state.lastType == "," ||
      isOperatorChar.test(textAfter.charAt(0)) ||
      /[,.]/.test(textAfter.charAt(0));
  }

  function expressionAllowed(stream, state, backUp) {
    return state.tokenize == tokenBase &&
      /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType) ||
      (state.lastType == "quasi" && /\{\s*$/.test(stream.string.slice(0, stream.pos - (backUp || 0))))
  }

  // Interface

  return {
    startState: function(basecolumn) {
      var state = {
        tokenize: tokenBase,
        lastType: "sof",
        cc: [],
        lexical: new JSLexical((basecolumn || 0) - indentUnit, 0, "block", false),
        localVars: parserConfig.localVars,
        context: parserConfig.localVars && new Context(null, null, false),
        indented: basecolumn || 0
      };
      if (parserConfig.globalVars && typeof parserConfig.globalVars == "object")
        state.globalVars = parserConfig.globalVars;
      return state;
    },

    token: function(stream, state) {
      if (stream.sol()) {
        if (!state.lexical.hasOwnProperty("align"))
          state.lexical.align = false;
        state.indented = stream.indentation();
        findFatArrow(stream, state);
      }
      if (state.tokenize != tokenComment && stream.eatSpace()) return null;
      var style = state.tokenize(stream, state);
      if (type == "comment") return style;
      state.lastType = type == "operator" && (content == "++" || content == "--") ? "incdec" : type;
      return parseJS(state, style, type, content, stream);
    },

    indent: function(state, textAfter) {
      if (state.tokenize == tokenComment) return CodeMirror.Pass;
      if (state.tokenize != tokenBase) return 0;
      var firstChar = textAfter && textAfter.charAt(0), lexical = state.lexical, top
      // Kludge to prevent 'maybelse' from blocking lexical scope pops
      if (!/^\s*else\b/.test(textAfter)) for (var i = state.cc.length - 1; i >= 0; --i) {
        var c = state.cc[i];
        if (c == poplex) lexical = lexical.prev;
        else if (c != maybeelse) break;
      }
      while ((lexical.type == "stat" || lexical.type == "form") &&
             (firstChar == "}" || ((top = state.cc[state.cc.length - 1]) &&
                                   (top == maybeoperatorComma || top == maybeoperatorNoComma) &&
                                   !/^[,\.=+\-*:?[\(]/.test(textAfter))))
        lexical = lexical.prev;
      if (statementIndent && lexical.type == ")" && lexical.prev.type == "stat")
        lexical = lexical.prev;
      var type = lexical.type, closing = firstChar == type;

      if (type == "vardef") return lexical.indented + (state.lastType == "operator" || state.lastType == "," ? lexical.info.length + 1 : 0);
      else if (type == "form" && firstChar == "{") return lexical.indented;
      else if (type == "form") return lexical.indented + indentUnit;
      else if (type == "stat")
        return lexical.indented + (isContinuedStatement(state, textAfter) ? statementIndent || indentUnit : 0);
      else if (lexical.info == "switch" && !closing && parserConfig.doubleIndentSwitch != false)
        return lexical.indented + (/^(?:case|default)\b/.test(textAfter) ? indentUnit : 2 * indentUnit);
      else if (lexical.align) return lexical.column + (closing ? 0 : 1);
      else return lexical.indented + (closing ? 0 : indentUnit);
    },

    electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
    blockCommentStart: jsonMode ? null : "/*",
    blockCommentEnd: jsonMode ? null : "*/",
    blockCommentContinue: jsonMode ? null : " * ",
    lineComment: jsonMode ? null : "//",
    fold: "brace",
    closeBrackets: "()[]{}''\"\"``",

    helperType: jsonMode ? "json" : "javascript",
    jsonldMode: jsonldMode,
    jsonMode: jsonMode,

    expressionAllowed: expressionAllowed,

    skipExpression: function(state) {
      var top = state.cc[state.cc.length - 1]
      if (top == expression || top == expressionNoComma) state.cc.pop()
    }
  };
});

CodeMirror.registerHelper("wordChars", "javascript", /[\w$]/);

CodeMirror.defineMIME("text/javascript", "javascript");
CodeMirror.defineMIME("text/ecmascript", "javascript");
CodeMirror.defineMIME("application/javascript", "javascript");
CodeMirror.defineMIME("application/x-javascript", "javascript");
CodeMirror.defineMIME("application/ecmascript", "javascript");
CodeMirror.defineMIME("application/json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/x-json", {name: "javascript", json: true});
CodeMirror.defineMIME("application/ld+json", {name: "javascript", jsonld: true});
CodeMirror.defineMIME("text/typescript", { name: "javascript", typescript: true });
CodeMirror.defineMIME("application/typescript", { name: "javascript", typescript: true });

});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

/*
For extra ASP classic objects, initialize CodeMirror instance with this option:
    isASP: true

E.G.:
    var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        isASP: true
      });
*/

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
"use strict";

CodeMirror.defineMode("vbscript", function(conf, parserConf) {
    var ERRORCLASS = 'error';

    function wordRegexp(words) {
        return new RegExp("^((" + words.join(")|(") + "))\\b", "i");
    }

    var singleOperators = new RegExp("^[\\+\\-\\*/&\\\\\\^<>=]");
    var doubleOperators = new RegExp("^((<>)|(<=)|(>=))");
    var singleDelimiters = new RegExp('^[\\.,]');
    var brakets = new RegExp('^[\\(\\)]');
    var identifiers = new RegExp("^[A-Za-z][_A-Za-z0-9]*");

    var openingKeywords = ['class','sub','select','while','if','function', 'property', 'with', 'for'];
    var middleKeywords = ['else','elseif','case'];
    var endKeywords = ['next','loop','wend'];

    var wordOperators = wordRegexp(['and', 'or', 'not', 'xor', 'is', 'mod', 'eqv', 'imp']);
    var commonkeywords = ['dim', 'redim', 'then',  'until', 'randomize',
                          'byval','byref','new','property', 'exit', 'in',
                          'const','private', 'public',
                          'get','set','let', 'stop', 'on error resume next', 'on error goto 0', 'option explicit', 'call', 'me'];

    //This list was from: http://msdn.microsoft.com/en-us/library/f8tbc79x(v=vs.84).aspx
    var atomWords = ['true', 'false', 'nothing', 'empty', 'null'];
    //This list was from: http://msdn.microsoft.com/en-us/library/3ca8tfek(v=vs.84).aspx
    var builtinFuncsWords = ['abs', 'array', 'asc', 'atn', 'cbool', 'cbyte', 'ccur', 'cdate', 'cdbl', 'chr', 'cint', 'clng', 'cos', 'csng', 'cstr', 'date', 'dateadd', 'datediff', 'datepart',
                        'dateserial', 'datevalue', 'day', 'escape', 'eval', 'execute', 'exp', 'filter', 'formatcurrency', 'formatdatetime', 'formatnumber', 'formatpercent', 'getlocale', 'getobject',
                        'getref', 'hex', 'hour', 'inputbox', 'instr', 'instrrev', 'int', 'fix', 'isarray', 'isdate', 'isempty', 'isnull', 'isnumeric', 'isobject', 'join', 'lbound', 'lcase', 'left',
                        'len', 'loadpicture', 'log', 'ltrim', 'rtrim', 'trim', 'maths', 'mid', 'minute', 'month', 'monthname', 'msgbox', 'now', 'oct', 'replace', 'rgb', 'right', 'rnd', 'round',
                        'scriptengine', 'scriptenginebuildversion', 'scriptenginemajorversion', 'scriptengineminorversion', 'second', 'setlocale', 'sgn', 'sin', 'space', 'split', 'sqr', 'strcomp',
                        'string', 'strreverse', 'tan', 'time', 'timer', 'timeserial', 'timevalue', 'typename', 'ubound', 'ucase', 'unescape', 'vartype', 'weekday', 'weekdayname', 'year'];

    //This list was from: http://msdn.microsoft.com/en-us/library/ydz4cfk3(v=vs.84).aspx
    var builtinConsts = ['vbBlack', 'vbRed', 'vbGreen', 'vbYellow', 'vbBlue', 'vbMagenta', 'vbCyan', 'vbWhite', 'vbBinaryCompare', 'vbTextCompare',
                         'vbSunday', 'vbMonday', 'vbTuesday', 'vbWednesday', 'vbThursday', 'vbFriday', 'vbSaturday', 'vbUseSystemDayOfWeek', 'vbFirstJan1', 'vbFirstFourDays', 'vbFirstFullWeek',
                         'vbGeneralDate', 'vbLongDate', 'vbShortDate', 'vbLongTime', 'vbShortTime', 'vbObjectError',
                         'vbOKOnly', 'vbOKCancel', 'vbAbortRetryIgnore', 'vbYesNoCancel', 'vbYesNo', 'vbRetryCancel', 'vbCritical', 'vbQuestion', 'vbExclamation', 'vbInformation', 'vbDefaultButton1', 'vbDefaultButton2',
                         'vbDefaultButton3', 'vbDefaultButton4', 'vbApplicationModal', 'vbSystemModal', 'vbOK', 'vbCancel', 'vbAbort', 'vbRetry', 'vbIgnore', 'vbYes', 'vbNo',
                         'vbCr', 'VbCrLf', 'vbFormFeed', 'vbLf', 'vbNewLine', 'vbNullChar', 'vbNullString', 'vbTab', 'vbVerticalTab', 'vbUseDefault', 'vbTrue', 'vbFalse',
                         'vbEmpty', 'vbNull', 'vbInteger', 'vbLong', 'vbSingle', 'vbDouble', 'vbCurrency', 'vbDate', 'vbString', 'vbObject', 'vbError', 'vbBoolean', 'vbVariant', 'vbDataObject', 'vbDecimal', 'vbByte', 'vbArray'];
    //This list was from: http://msdn.microsoft.com/en-us/library/hkc375ea(v=vs.84).aspx
    var builtinObjsWords = ['WScript', 'err', 'debug', 'RegExp'];
    var knownProperties = ['description', 'firstindex', 'global', 'helpcontext', 'helpfile', 'ignorecase', 'length', 'number', 'pattern', 'source', 'value', 'count'];
    var knownMethods = ['clear', 'execute', 'raise', 'replace', 'test', 'write', 'writeline', 'close', 'open', 'state', 'eof', 'update', 'addnew', 'end', 'createobject', 'quit'];

    var aspBuiltinObjsWords = ['server', 'response', 'request', 'session', 'application'];
    var aspKnownProperties = ['buffer', 'cachecontrol', 'charset', 'contenttype', 'expires', 'expiresabsolute', 'isclientconnected', 'pics', 'status', //response
                              'clientcertificate', 'cookies', 'form', 'querystring', 'servervariables', 'totalbytes', //request
                              'contents', 'staticobjects', //application
                              'codepage', 'lcid', 'sessionid', 'timeout', //session
                              'scripttimeout']; //server
    var aspKnownMethods = ['addheader', 'appendtolog', 'binarywrite', 'end', 'flush', 'redirect', //response
                           'binaryread', //request
                           'remove', 'removeall', 'lock', 'unlock', //application
                           'abandon', //session
                           'getlasterror', 'htmlencode', 'mappath', 'transfer', 'urlencode']; //server

    var knownWords = knownMethods.concat(knownProperties);

    builtinObjsWords = builtinObjsWords.concat(builtinConsts);

    if (conf.isASP){
        builtinObjsWords = builtinObjsWords.concat(aspBuiltinObjsWords);
        knownWords = knownWords.concat(aspKnownMethods, aspKnownProperties);
    };

    var keywords = wordRegexp(commonkeywords);
    var atoms = wordRegexp(atomWords);
    var builtinFuncs = wordRegexp(builtinFuncsWords);
    var builtinObjs = wordRegexp(builtinObjsWords);
    var known = wordRegexp(knownWords);
    var stringPrefixes = '"';

    var opening = wordRegexp(openingKeywords);
    var middle = wordRegexp(middleKeywords);
    var closing = wordRegexp(endKeywords);
    var doubleClosing = wordRegexp(['end']);
    var doOpening = wordRegexp(['do']);
    var noIndentWords = wordRegexp(['on error resume next', 'exit']);
    var comment = wordRegexp(['rem']);


    function indent(_stream, state) {
      state.currentIndent++;
    }

    function dedent(_stream, state) {
      state.currentIndent--;
    }
    // tokenizers
    function tokenBase(stream, state) {
        if (stream.eatSpace()) {
            return 'space';
            //return null;
        }

        var ch = stream.peek();

        // Handle Comments
        if (ch === "'") {
            stream.skipToEnd();
            return 'comment';
        }
        if (stream.match(comment)){
            stream.skipToEnd();
            return 'comment';
        }


        // Handle Number Literals
        if (stream.match(/^((&H)|(&O))?[0-9\.]/i, false) && !stream.match(/^((&H)|(&O))?[0-9\.]+[a-z_]/i, false)) {
            var floatLiteral = false;
            // Floats
            if (stream.match(/^\d*\.\d+/i)) { floatLiteral = true; }
            else if (stream.match(/^\d+\.\d*/)) { floatLiteral = true; }
            else if (stream.match(/^\.\d+/)) { floatLiteral = true; }

            if (floatLiteral) {
                // Float literals may be "imaginary"
                stream.eat(/J/i);
                return 'number';
            }
            // Integers
            var intLiteral = false;
            // Hex
            if (stream.match(/^&H[0-9a-f]+/i)) { intLiteral = true; }
            // Octal
            else if (stream.match(/^&O[0-7]+/i)) { intLiteral = true; }
            // Decimal
            else if (stream.match(/^[1-9]\d*F?/)) {
                // Decimal literals may be "imaginary"
                stream.eat(/J/i);
                // TODO - Can you have imaginary longs?
                intLiteral = true;
            }
            // Zero by itself with no other piece of number.
            else if (stream.match(/^0(?![\dx])/i)) { intLiteral = true; }
            if (intLiteral) {
                // Integer literals may be "long"
                stream.eat(/L/i);
                return 'number';
            }
        }

        // Handle Strings
        if (stream.match(stringPrefixes)) {
            state.tokenize = tokenStringFactory(stream.current());
            return state.tokenize(stream, state);
        }

        // Handle operators and Delimiters
        if (stream.match(doubleOperators)
            || stream.match(singleOperators)
            || stream.match(wordOperators)) {
            return 'operator';
        }
        if (stream.match(singleDelimiters)) {
            return null;
        }

        if (stream.match(brakets)) {
            return "bracket";
        }

        if (stream.match(noIndentWords)) {
            state.doInCurrentLine = true;

            return 'keyword';
        }

        if (stream.match(doOpening)) {
            indent(stream,state);
            state.doInCurrentLine = true;

            return 'keyword';
        }
        if (stream.match(opening)) {
            if (! state.doInCurrentLine)
              indent(stream,state);
            else
              state.doInCurrentLine = false;

            return 'keyword';
        }
        if (stream.match(middle)) {
            return 'keyword';
        }


        if (stream.match(doubleClosing)) {
            dedent(stream,state);
            dedent(stream,state);

            return 'keyword';
        }
        if (stream.match(closing)) {
            if (! state.doInCurrentLine)
              dedent(stream,state);
            else
              state.doInCurrentLine = false;

            return 'keyword';
        }

        if (stream.match(keywords)) {
            return 'keyword';
        }

        if (stream.match(atoms)) {
            return 'atom';
        }

        if (stream.match(known)) {
            return 'variable-2';
        }

        if (stream.match(builtinFuncs)) {
            return 'builtin';
        }

        if (stream.match(builtinObjs)){
            return 'variable-2';
        }

        if (stream.match(identifiers)) {
            return 'variable';
        }

        // Handle non-detected items
        stream.next();
        return ERRORCLASS;
    }

    function tokenStringFactory(delimiter) {
        var singleline = delimiter.length == 1;
        var OUTCLASS = 'string';

        return function(stream, state) {
            while (!stream.eol()) {
                stream.eatWhile(/[^'"]/);
                if (stream.match(delimiter)) {
                    state.tokenize = tokenBase;
                    return OUTCLASS;
                } else {
                    stream.eat(/['"]/);
                }
            }
            if (singleline) {
                if (parserConf.singleLineStringErrors) {
                    return ERRORCLASS;
                } else {
                    state.tokenize = tokenBase;
                }
            }
            return OUTCLASS;
        };
    }


    function tokenLexer(stream, state) {
        var style = state.tokenize(stream, state);
        var current = stream.current();

        // Handle '.' connected identifiers
        if (current === '.') {
            style = state.tokenize(stream, state);

            current = stream.current();
            if (style && (style.substr(0, 8) === 'variable' || style==='builtin' || style==='keyword')){//|| knownWords.indexOf(current.substring(1)) > -1) {
                if (style === 'builtin' || style === 'keyword') style='variable';
                if (knownWords.indexOf(current.substr(1)) > -1) style='variable-2';

                return style;
            } else {
                return ERRORCLASS;
            }
        }

        return style;
    }

    var external = {
        electricChars:"dDpPtTfFeE ",
        startState: function() {
            return {
              tokenize: tokenBase,
              lastToken: null,
              currentIndent: 0,
              nextLineIndent: 0,
              doInCurrentLine: false,
              ignoreKeyword: false


          };
        },

        token: function(stream, state) {
            if (stream.sol()) {
              state.currentIndent += state.nextLineIndent;
              state.nextLineIndent = 0;
              state.doInCurrentLine = 0;
            }
            var style = tokenLexer(stream, state);

            state.lastToken = {style:style, content: stream.current()};

            if (style==='space') style=null;

            return style;
        },

        indent: function(state, textAfter) {
            var trueText = textAfter.replace(/^\s+|\s+$/g, '') ;
            if (trueText.match(closing) || trueText.match(doubleClosing) || trueText.match(middle)) return conf.indentUnit*(state.currentIndent-1);
            if(state.currentIndent < 0) return 0;
            return state.currentIndent * conf.indentUnit;
        }

    };
    return external;
});

CodeMirror.defineMIME("text/vbscript", "vbscript");

});

;// CodeMirror, copyright (c) by Marijn Haverbeke and others
// Distributed under an MIT license: https://codemirror.net/LICENSE

(function(mod) {
  if (typeof exports == "object" && typeof module == "object") // CommonJS
    mod(require("../../lib/codemirror"), require("../xml/xml"), require("../javascript/javascript"), require("../css/css"));
  else if (typeof define == "function" && define.amd) // AMD
    define(["../../lib/codemirror", "../xml/xml", "../javascript/javascript", "../css/css"], mod);
  else // Plain browser env
    mod(CodeMirror);
})(function(CodeMirror) {
  "use strict";

  var defaultTags = {
    script: [
      ["lang", /(javascript|babel)/i, "javascript"],
      ["type", /^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i, "javascript"],
      ["type", /./, "text/plain"],
      [null, null, "javascript"]
    ],
    style:  [
      ["lang", /^css$/i, "css"],
      ["type", /^(text\/)?(x-)?(stylesheet|css)$/i, "css"],
      ["type", /./, "text/plain"],
      [null, null, "css"]
    ]
  };

  function maybeBackup(stream, pat, style) {
    var cur = stream.current(), close = cur.search(pat);
    if (close > -1) {
      stream.backUp(cur.length - close);
    } else if (cur.match(/<\/?$/)) {
      stream.backUp(cur.length);
      if (!stream.match(pat, false)) stream.match(cur);
    }
    return style;
  }

  var attrRegexpCache = {};
  function getAttrRegexp(attr) {
    var regexp = attrRegexpCache[attr];
    if (regexp) return regexp;
    return attrRegexpCache[attr] = new RegExp("\\s+" + attr + "\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*");
  }

  function getAttrValue(text, attr) {
    var match = text.match(getAttrRegexp(attr))
    return match ? /^\s*(.*?)\s*$/.exec(match[2])[1] : ""
  }

  function getTagRegexp(tagName, anchored) {
    return new RegExp((anchored ? "^" : "") + "<\/\s*" + tagName + "\s*>", "i");
  }

  function addTags(from, to) {
    for (var tag in from) {
      var dest = to[tag] || (to[tag] = []);
      var source = from[tag];
      for (var i = source.length - 1; i >= 0; i--)
        dest.unshift(source[i])
    }
  }

  function findMatchingMode(tagInfo, tagText) {
    for (var i = 0; i < tagInfo.length; i++) {
      var spec = tagInfo[i];
      if (!spec[0] || spec[1].test(getAttrValue(tagText, spec[0]))) return spec[2];
    }
  }

  CodeMirror.defineMode("htmlmixed", function (config, parserConfig) {
    var htmlMode = CodeMirror.getMode(config, {
      name: "xml",
      htmlMode: true,
      multilineTagIndentFactor: parserConfig.multilineTagIndentFactor,
      multilineTagIndentPastTag: parserConfig.multilineTagIndentPastTag
    });

    var tags = {};
    var configTags = parserConfig && parserConfig.tags, configScript = parserConfig && parserConfig.scriptTypes;
    addTags(defaultTags, tags);
    if (configTags) addTags(configTags, tags);
    if (configScript) for (var i = configScript.length - 1; i >= 0; i--)
      tags.script.unshift(["type", configScript[i].matches, configScript[i].mode])

    function html(stream, state) {
      var style = htmlMode.token(stream, state.htmlState), tag = /\btag\b/.test(style), tagName
      if (tag && !/[<>\s\/]/.test(stream.current()) &&
          (tagName = state.htmlState.tagName && state.htmlState.tagName.toLowerCase()) &&
          tags.hasOwnProperty(tagName)) {
        state.inTag = tagName + " "
      } else if (state.inTag && tag && />$/.test(stream.current())) {
        var inTag = /^([\S]+) (.*)/.exec(state.inTag)
        state.inTag = null
        var modeSpec = stream.current() == ">" && findMatchingMode(tags[inTag[1]], inTag[2])
        var mode = CodeMirror.getMode(config, modeSpec)
        var endTagA = getTagRegexp(inTag[1], true), endTag = getTagRegexp(inTag[1], false);
        state.token = function (stream, state) {
          if (stream.match(endTagA, false)) {
            state.token = html;
            state.localState = state.localMode = null;
            return null;
          }
          return maybeBackup(stream, endTag, state.localMode.token(stream, state.localState));
        };
        state.localMode = mode;
        state.localState = CodeMirror.startState(mode, htmlMode.indent(state.htmlState, "", ""));
      } else if (state.inTag) {
        state.inTag += stream.current()
        if (stream.eol()) state.inTag += " "
      }
      return style;
    };

    return {
      startState: function () {
        var state = CodeMirror.startState(htmlMode);
        return {token: html, inTag: null, localMode: null, localState: null, htmlState: state};
      },

      copyState: function (state) {
        var local;
        if (state.localState) {
          local = CodeMirror.copyState(state.localMode, state.localState);
        }
        return {token: state.token, inTag: state.inTag,
                localMode: state.localMode, localState: local,
                htmlState: CodeMirror.copyState(htmlMode, state.htmlState)};
      },

      token: function (stream, state) {
        return state.token(stream, state);
      },

      indent: function (state, textAfter, line) {
        if (!state.localMode || /^\s*<\//.test(textAfter))
          return htmlMode.indent(state.htmlState, textAfter, line);
        else if (state.localMode.indent)
          return state.localMode.indent(state.localState, textAfter, line);
        else
          return CodeMirror.Pass;
      },

      innerMode: function (state) {
        return {state: state.localState || state.htmlState, mode: state.localMode || htmlMode};
      }
    };
  }, "xml", "javascript", "css");

  CodeMirror.defineMIME("text/html", "htmlmixed");
});

;/**
 * marked - a markdown parser
 * Copyright (c) 2011-2021, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).marked=t()}(this,function(){"use strict";function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t){var n;if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator])return(n=e[Symbol.iterator]()).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e){return c[e]}var e,t=(function(t){function e(){return{baseUrl:null,breaks:!1,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}}t.exports={defaults:e(),getDefaults:e,changeDefaults:function(e){t.exports.defaults=e}}}(e={exports:{}}),e.exports),r=/[&<>"']/,l=/[&<>"']/g,a=/[<>"']|&(?!#?\w+;)/,o=/[<>"']|&(?!#?\w+;)/g,c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};var u=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function h(e){return e.replace(u,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}var g=/(^|[^\[])\^/g;var f=/[^\w:]/g,d=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;var k={},b=/^[^:]+:\/*[^/]*$/,m=/^([^:]+:)[\s\S]*$/,x=/^([^:]+:\/*[^/]*)[\s\S]*$/;function w(e,t){k[" "+e]||(b.test(e)?k[" "+e]=e+"/":k[" "+e]=v(e,"/",!0));var n=-1===(e=k[" "+e]).indexOf(":");return"//"===t.substring(0,2)?n?t:e.replace(m,"$1")+t:"/"===t.charAt(0)?n?t:e.replace(x,"$1")+t:e+t}function v(e,t,n){var r=e.length;if(0===r)return"";for(var i=0;i<r;){var s=e.charAt(r-i-1);if(s!==t||n){if(s===t||!n)break;i++}else i++}return e.substr(0,r-i)}var _=function(e,t){if(t){if(r.test(e))return e.replace(l,n)}else if(a.test(e))return e.replace(o,n);return e},y=h,z=function(n,e){n=n.source||n,e=e||"";var r={replace:function(e,t){return t=(t=t.source||t).replace(g,"$1"),n=n.replace(e,t),r},getRegex:function(){return new RegExp(n,e)}};return r},$=function(e,t,n){if(e){var r;try{r=decodeURIComponent(h(n)).replace(f,"").toLowerCase()}catch(e){return null}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return null}t&&!d.test(n)&&(n=w(t,n));try{n=encodeURI(n).replace(/%25/g,"%")}catch(e){return null}return n},S={exec:function(){}},A=function(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},R=function(e,t){var n=e.replace(/\|/g,function(e,t,n){for(var r=!1,i=t;0<=--i&&"\\"===n[i];)r=!r;return r?"|":" |"}).split(/ \|/),r=0;if(n.length>t)n.splice(t);else for(;n.length<t;)n.push("");for(;r<n.length;r++)n[r]=n[r].trim().replace(/\\\|/g,"|");return n},T=function(e,t){if(-1===e.indexOf(t[1]))return-1;for(var n=e.length,r=0,i=0;i<n;i++)if("\\"===e[i])i++;else if(e[i]===t[0])r++;else if(e[i]===t[1]&&--r<0)return i;return-1},I=function(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")},Z=function(e,t){if(t<1)return"";for(var n="";1<t;)1&t&&(n+=e),t>>=1,e+=e;return n+e},q=t.defaults,O=v,C=R,U=_,j=T;function E(e,t,n){var r=t.href,i=t.title?U(t.title):null,t=e[1].replace(/\\([\[\]])/g,"$1");return"!"!==e[0].charAt(0)?{type:"link",raw:n,href:r,title:i,text:t}:{type:"image",raw:n,href:r,title:i,text:U(t)}}var P=function(){function e(e){this.options=e||q}var t=e.prototype;return t.space=function(e){e=this.rules.block.newline.exec(e);if(e)return 1<e[0].length?{type:"space",raw:e[0]}:{raw:"\n"}},t.code=function(e,t){e=this.rules.block.code.exec(e);if(e){t=t[t.length-1];if(t&&"paragraph"===t.type)return{raw:e[0],text:e[0].trimRight()};t=e[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?t:O(t,"\n")}}},t.fences=function(e){var t=this.rules.block.fences.exec(e);if(t){var n=t[0],e=function(e,t){if(null===(e=e.match(/^(\s+)(?:```)/)))return t;var n=e[1];return t.split("\n").map(function(e){var t=e.match(/^\s+/);return null!==t&&t[0].length>=n.length?e.slice(n.length):e}).join("\n")}(n,t[3]||"");return{type:"code",raw:n,lang:t[2]&&t[2].trim(),text:e}}},t.heading=function(e){var t=this.rules.block.heading.exec(e);if(t){var n=t[2].trim();return/#$/.test(n)&&(e=O(n,"#"),!this.options.pedantic&&e&&!/ $/.test(e)||(n=e.trim())),{type:"heading",raw:t[0],depth:t[1].length,text:n}}},t.nptable=function(e){e=this.rules.block.nptable.exec(e);if(e){var t={type:"table",header:C(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[],raw:e[0]};if(t.header.length===t.align.length){for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=C(t.cells[r],t.header.length);return t}}},t.hr=function(e){e=this.rules.block.hr.exec(e);if(e)return{type:"hr",raw:e[0]}},t.blockquote=function(e){var t=this.rules.block.blockquote.exec(e);if(t){e=t[0].replace(/^ *> ?/gm,"");return{type:"blockquote",raw:t[0],text:e}}},t.list=function(e){e=this.rules.block.list.exec(e);if(e){for(var t,n,r,i,s,l=e[0],a=e[2],o=1<a.length,c={type:"list",raw:l,ordered:o,start:o?+a.slice(0,-1):"",loose:!1,items:[]},u=e[0].match(this.rules.block.item),p=!1,h=u.length,g=this.rules.block.listItemStart.exec(u[0]),f=0;f<h;f++){if(l=t=u[f],f!==h-1){if(r=this.rules.block.listItemStart.exec(u[f+1]),this.options.pedantic?r[1].length>g[1].length:r[1].length>g[0].length||3<r[1].length){u.splice(f,2,u[f]+"\n"+u[f+1]),f--,h--;continue}(!this.options.pedantic||this.options.smartLists?r[2][r[2].length-1]!==a[a.length-1]:o==(1===r[2].length))&&(n=u.slice(f+1).join("\n"),c.raw=c.raw.substring(0,c.raw.length-n.length),f=h-1),g=r}r=t.length,~(t=t.replace(/^ *([*+-]|\d+[.)]) ?/,"")).indexOf("\n ")&&(r-=t.length,t=this.options.pedantic?t.replace(/^ {1,4}/gm,""):t.replace(new RegExp("^ {1,"+r+"}","gm"),"")),r=p||/\n\n(?!\s*$)/.test(t),f!==h-1&&(p="\n"===t.charAt(t.length-1),r=r||p),r&&(c.loose=!0),this.options.gfm&&(s=void 0,(i=/^\[[ xX]\] /.test(t))&&(s=" "!==t[1],t=t.replace(/^\[[ xX]\] +/,""))),c.items.push({type:"list_item",raw:l,task:i,checked:s,loose:r,text:t})}return c}},t.html=function(e){e=this.rules.block.html.exec(e);if(e)return{type:this.options.sanitize?"paragraph":"html",raw:e[0],pre:!this.options.sanitizer&&("pre"===e[1]||"script"===e[1]||"style"===e[1]),text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]}},t.def=function(e){e=this.rules.block.def.exec(e);if(e)return e[3]&&(e[3]=e[3].substring(1,e[3].length-1)),{tag:e[1].toLowerCase().replace(/\s+/g," "),raw:e[0],href:e[2],title:e[3]}},t.table=function(e){e=this.rules.block.table.exec(e);if(e){var t={type:"table",header:C(e[1].replace(/^ *| *\| *$/g,"")),align:e[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:e[3]?e[3].replace(/\n$/,"").split("\n"):[]};if(t.header.length===t.align.length){t.raw=e[0];for(var n=t.align.length,r=0;r<n;r++)/^ *-+: *$/.test(t.align[r])?t.align[r]="right":/^ *:-+: *$/.test(t.align[r])?t.align[r]="center":/^ *:-+ *$/.test(t.align[r])?t.align[r]="left":t.align[r]=null;for(n=t.cells.length,r=0;r<n;r++)t.cells[r]=C(t.cells[r].replace(/^ *\| *| *\| *$/g,""),t.header.length);return t}}},t.lheading=function(e){e=this.rules.block.lheading.exec(e);if(e)return{type:"heading",raw:e[0],depth:"="===e[2].charAt(0)?1:2,text:e[1]}},t.paragraph=function(e){e=this.rules.block.paragraph.exec(e);if(e)return{type:"paragraph",raw:e[0],text:"\n"===e[1].charAt(e[1].length-1)?e[1].slice(0,-1):e[1]}},t.text=function(e,t){e=this.rules.block.text.exec(e);if(e){t=t[t.length-1];return t&&"text"===t.type?{raw:e[0],text:e[0]}:{type:"text",raw:e[0],text:e[0]}}},t.escape=function(e){e=this.rules.inline.escape.exec(e);if(e)return{type:"escape",raw:e[0],text:U(e[1])}},t.tag=function(e,t,n){e=this.rules.inline.tag.exec(e);if(e)return!t&&/^<a /i.test(e[0])?t=!0:t&&/^<\/a>/i.test(e[0])&&(t=!1),!n&&/^<(pre|code|kbd|script)(\s|>)/i.test(e[0])?n=!0:n&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0])&&(n=!1),{type:this.options.sanitize?"text":"html",raw:e[0],inLink:t,inRawBlock:n,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]}},t.link=function(e){var t=this.rules.inline.link.exec(e);if(t){var n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;e=O(n.slice(0,-1),"\\");if((n.length-e.length)%2==0)return}else{var r=j(t[2],"()");-1<r&&(s=(0===t[0].indexOf("!")?5:4)+t[1].length+r,t[2]=t[2].substring(0,r),t[0]=t[0].substring(0,s).trim(),t[3]="")}var i,r=t[2],s="";return this.options.pedantic?(i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))&&(r=i[1],s=i[3]):s=t[3]?t[3].slice(1,-1):"",r=r.trim(),E(t,{href:(r=/^</.test(r)?this.options.pedantic&&!/>$/.test(n)?r.slice(1):r.slice(1,-1):r)&&r.replace(this.rules.inline._escapes,"$1"),title:s&&s.replace(this.rules.inline._escapes,"$1")},t[0])}},t.reflink=function(e,t){if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){e=(n[2]||n[1]).replace(/\s+/g," ");if((e=t[e.toLowerCase()])&&e.href)return E(n,e,n[0]);var n=n[0].charAt(0);return{type:"text",raw:n,text:n}}},t.strong=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.strong.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="**"===r[0]?this.rules.inline.strong.endAst:this.rules.inline.strong.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.strong.middle.exec(t.slice(0,r.index+3)))return{type:"strong",raw:e.slice(0,i[0].length),text:e.slice(2,i[0].length-2)}}},t.em=function(e,t,n){void 0===n&&(n="");var r=this.rules.inline.em.start.exec(e);if(r&&(!r[1]||r[1]&&(""===n||this.rules.inline.punctuation.exec(n)))){t=t.slice(-1*e.length);var i,s="*"===r[0]?this.rules.inline.em.endAst:this.rules.inline.em.endUnd;for(s.lastIndex=0;null!=(r=s.exec(t));)if(i=this.rules.inline.em.middle.exec(t.slice(0,r.index+2)))return{type:"em",raw:e.slice(0,i[0].length),text:e.slice(1,i[0].length-1)}}},t.codespan=function(e){var t=this.rules.inline.code.exec(e);if(t){var n=t[2].replace(/\n/g," "),r=/[^ ]/.test(n),e=/^ /.test(n)&&/ $/.test(n);return r&&e&&(n=n.substring(1,n.length-1)),n=U(n,!0),{type:"codespan",raw:t[0],text:n}}},t.br=function(e){e=this.rules.inline.br.exec(e);if(e)return{type:"br",raw:e[0]}},t.del=function(e){e=this.rules.inline.del.exec(e);if(e)return{type:"del",raw:e[0],text:e[2]}},t.autolink=function(e,t){e=this.rules.inline.autolink.exec(e);if(e){var n,t="@"===e[2]?"mailto:"+(n=U(this.options.mangle?t(e[1]):e[1])):n=U(e[1]);return{type:"link",raw:e[0],text:n,href:t,tokens:[{type:"text",raw:n,text:n}]}}},t.url=function(e,t){var n,r,i,s;if(n=this.rules.inline.url.exec(e)){if("@"===n[2])i="mailto:"+(r=U(this.options.mangle?t(n[0]):n[0]));else{for(;s=n[0],n[0]=this.rules.inline._backpedal.exec(n[0])[0],s!==n[0];);r=U(n[0]),i="www."===n[1]?"http://"+r:r}return{type:"link",raw:n[0],text:r,href:i,tokens:[{type:"text",raw:r,text:r}]}}},t.inlineText=function(e,t,n){e=this.rules.inline.text.exec(e);if(e){n=t?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(e[0]):U(e[0]):e[0]:U(this.options.smartypants?n(e[0]):e[0]);return{type:"text",raw:e[0],text:n}}},e}(),R=S,T=z,S=A,z={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,html:"^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))",def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,nptable:R,table:R,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};z.def=T(z.def).replace("label",z._label).replace("title",z._title).getRegex(),z.bullet=/(?:[*+-]|\d{1,9}[.)])/,z.item=/^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/,z.item=T(z.item,"gm").replace(/bull/g,z.bullet).getRegex(),z.listItemStart=T(/^( *)(bull)/).replace("bull",z.bullet).getRegex(),z.list=T(z.list).replace(/bull/g,z.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+z.def.source+")").getRegex(),z._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",z._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,z.html=T(z.html,"i").replace("comment",z._comment).replace("tag",z._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),z.paragraph=T(z._paragraph).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.blockquote=T(z.blockquote).replace("paragraph",z.paragraph).getRegex(),z.normal=S({},z),z.gfm=S({},z.normal,{nptable:"^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)",table:"^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),z.gfm.nptable=T(z.gfm.nptable).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.gfm.table=T(z.gfm.table).replace("hr",z.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)").replace("tag",z._tag).getRegex(),z.pedantic=S({},z.normal,{html:T("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",z._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:R,paragraph:T(z.normal._paragraph).replace("hr",z.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",z.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});R={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:R,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,nolink:/^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",strong:{start:/^(?:(\*\*(?=[*punctuation]))|\*\*)(?![\s])|__/,middle:/^\*\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*\*$|^__(?![\s])((?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?)__$/,endAst:/[^punctuation\s]\*\*(?!\*)|[punctuation]\*\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]__(?!_)(?:(?=[punctuation*\s])|$)/},em:{start:/^(?:(\*(?=[punctuation]))|\*)(?![*\s])|_/,middle:/^\*(?:(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)|\*(?:(?!overlapSkip)(?:[^*]|\\\*)|overlapSkip)*?\*)+?\*$|^_(?![_\s])(?:(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)|_(?:(?!overlapSkip)(?:[^_]|\\_)|overlapSkip)*?_)+?_$/,endAst:/[^punctuation\s]\*(?!\*)|[punctuation]\*(?!\*)(?:(?=[punctuation_\s]|$))/,endUnd:/[^\s]_(?!_)(?:(?=[punctuation*\s])|$)/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:R,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\s*punctuation])/,_punctuation:"!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~"};R.punctuation=T(R.punctuation).replace(/punctuation/g,R._punctuation).getRegex(),R._blockSkip="\\[[^\\]]*?\\]\\([^\\)]*?\\)|`[^`]*?`|<[^>]*?>",R._overlapSkip="__[^_]*?__|\\*\\*\\[^\\*\\]*?\\*\\*",R._comment=T(z._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),R.em.start=T(R.em.start).replace(/punctuation/g,R._punctuation).getRegex(),R.em.middle=T(R.em.middle).replace(/punctuation/g,R._punctuation).replace(/overlapSkip/g,R._overlapSkip).getRegex(),R.em.endAst=T(R.em.endAst,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.em.endUnd=T(R.em.endUnd,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.strong.start=T(R.strong.start).replace(/punctuation/g,R._punctuation).getRegex(),R.strong.middle=T(R.strong.middle).replace(/punctuation/g,R._punctuation).replace(/overlapSkip/g,R._overlapSkip).getRegex(),R.strong.endAst=T(R.strong.endAst,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.strong.endUnd=T(R.strong.endUnd,"g").replace(/punctuation/g,R._punctuation).getRegex(),R.blockSkip=T(R._blockSkip,"g").getRegex(),R.overlapSkip=T(R._overlapSkip,"g").getRegex(),R._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,R._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,R._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,R.autolink=T(R.autolink).replace("scheme",R._scheme).replace("email",R._email).getRegex(),R._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,R.tag=T(R.tag).replace("comment",R._comment).replace("attribute",R._attribute).getRegex(),R._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,R._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,R._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,R.link=T(R.link).replace("label",R._label).replace("href",R._href).replace("title",R._title).getRegex(),R.reflink=T(R.reflink).replace("label",R._label).getRegex(),R.reflinkSearch=T(R.reflinkSearch,"g").replace("reflink",R.reflink).replace("nolink",R.nolink).getRegex(),R.normal=S({},R),R.pedantic=S({},R.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",R._label).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",R._label).getRegex()}),R.gfm=S({},R.normal,{escape:T(R.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/}),R.gfm.url=T(R.gfm.url,"i").replace("email",R.gfm._extended_email).getRegex(),R.breaks=S({},R.gfm,{br:T(R.br).replace("{2,}","*").getRegex(),text:T(R.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});var R={block:z,inline:R},L=t.defaults,D=R.block,N=R.inline,B=Z;function F(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function M(e){for(var t,n="",r=e.length,i=0;i<r;i++)t=e.charCodeAt(i),n+="&#"+(t=.5<Math.random()?"x"+t.toString(16):t)+";";return n}var X=function(){function n(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||L,this.options.tokenizer=this.options.tokenizer||new P,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options;e={block:D.normal,inline:N.normal};this.options.pedantic?(e.block=D.pedantic,e.inline=N.pedantic):this.options.gfm&&(e.block=D.gfm,this.options.breaks?e.inline=N.breaks:e.inline=N.gfm),this.tokenizer.rules=e}n.lex=function(e,t){return new n(t).lex(e)},n.lexInline=function(e,t){return new n(t).inlineTokens(e)};var e,t,r=n.prototype;return r.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    "),this.blockTokens(e,this.tokens,!0),this.inline(this.tokens),this.tokens},r.blockTokens=function(e,t,n){var r,i,s,l;for(void 0===t&&(t=[]),void 0===n&&(n=!0),this.options.pedantic&&(e=e.replace(/^ +$/gm,""));e;)if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),r.type&&t.push(r);else if(r=this.tokenizer.code(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.nptable(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),r.tokens=this.blockTokens(r.text,[],n),t.push(r);else if(r=this.tokenizer.list(e)){for(e=e.substring(r.raw.length),s=r.items.length,i=0;i<s;i++)r.items[i].tokens=this.blockTokens(r.items[i].text,[],!1);t.push(r)}else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.def(e)))e=e.substring(r.raw.length),this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else if(n&&(r=this.tokenizer.paragraph(e)))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.text(e,t))e=e.substring(r.raw.length),r.type?t.push(r):((l=t[t.length-1]).raw+="\n"+r.raw,l.text+="\n"+r.text);else if(e){var a="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(a);break}throw new Error(a)}return t},r.inline=function(e){for(var t,n,r,i,s,l=e.length,a=0;a<l;a++)switch((s=e[a]).type){case"paragraph":case"text":case"heading":s.tokens=[],this.inlineTokens(s.text,s.tokens);break;case"table":for(s.tokens={header:[],cells:[]},r=s.header.length,t=0;t<r;t++)s.tokens.header[t]=[],this.inlineTokens(s.header[t],s.tokens.header[t]);for(r=s.cells.length,t=0;t<r;t++)for(i=s.cells[t],s.tokens.cells[t]=[],n=0;n<i.length;n++)s.tokens.cells[t][n]=[],this.inlineTokens(i[n],s.tokens.cells[t][n]);break;case"blockquote":this.inline(s.tokens);break;case"list":for(r=s.items.length,t=0;t<r;t++)this.inline(s.items[t].tokens)}return e},r.inlineTokens=function(e,t,n,r){var i;void 0===t&&(t=[]),void 0===n&&(n=!1),void 0===r&&(r=!1);var s,l,a,o=e;if(this.tokens.links){var c=Object.keys(this.tokens.links);if(0<c.length)for(;null!=(s=this.tokenizer.rules.inline.reflinkSearch.exec(o));)c.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(o=o.slice(0,s.index)+"["+B("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(s=this.tokenizer.rules.inline.blockSkip.exec(o));)o=o.slice(0,s.index)+"["+B("a",s[0].length-2)+"]"+o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;e;)if(l||(a=""),l=!1,i=this.tokenizer.escape(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.tag(e,n,r))e=e.substring(i.raw.length),n=i.inLink,r=i.inRawBlock,t.push(i);else if(i=this.tokenizer.link(e))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(i.raw.length),"link"===i.type&&(i.tokens=this.inlineTokens(i.text,[],!0,r)),t.push(i);else if(i=this.tokenizer.strong(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.em(e,o,a))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.codespan(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.br(e))e=e.substring(i.raw.length),t.push(i);else if(i=this.tokenizer.del(e))e=e.substring(i.raw.length),i.tokens=this.inlineTokens(i.text,[],n,r),t.push(i);else if(i=this.tokenizer.autolink(e,M))e=e.substring(i.raw.length),t.push(i);else if(n||!(i=this.tokenizer.url(e,M))){if(i=this.tokenizer.inlineText(e,r,F))e=e.substring(i.raw.length),a=i.raw.slice(-1),l=!0,t.push(i);else if(e){var u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}throw new Error(u)}}else e=e.substring(i.raw.length),t.push(i);return t},e=n,t=[{key:"rules",get:function(){return{block:D,inline:N}}}],(r=null)&&i(e.prototype,r),t&&i(e,t),n}(),G=t.defaults,V=$,H=_,J=function(){function e(e){this.options=e||G}var t=e.prototype;return t.code=function(e,t,n){var r=(t||"").match(/\S*/)[0];return!this.options.highlight||null!=(t=this.options.highlight(e,r))&&t!==e&&(n=!0,e=t),e=e.replace(/\n$/,"")+"\n",r?'<pre><code class="'+this.options.langPrefix+H(r,!0)+'">'+(n?e:H(e,!0))+"</code></pre>\n":"<pre><code>"+(n?e:H(e,!0))+"</code></pre>\n"},t.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},t.html=function(e){return e},t.heading=function(e,t,n,r){return this.options.headerIds?"<h"+t+' id="'+this.options.headerPrefix+r.slug(n)+'">'+e+"</h"+t+">\n":"<h"+t+">"+e+"</h"+t+">\n"},t.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},t.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},t.listitem=function(e){return"<li>"+e+"</li>\n"},t.checkbox=function(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "},t.paragraph=function(e){return"<p>"+e+"</p>\n"},t.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n"+(t=t&&"<tbody>"+t+"</tbody>")+"</table>\n"},t.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},t.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' align="'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},t.strong=function(e){return"<strong>"+e+"</strong>"},t.em=function(e){return"<em>"+e+"</em>"},t.codespan=function(e){return"<code>"+e+"</code>"},t.br=function(){return this.options.xhtml?"<br/>":"<br>"},t.del=function(e){return"<del>"+e+"</del>"},t.link=function(e,t,n){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return n;e='<a href="'+H(e)+'"';return t&&(e+=' title="'+t+'"'),e+=">"+n+"</a>"},t.image=function(e,t,n){if(null===(e=V(this.options.sanitize,this.options.baseUrl,e)))return n;n='<img src="'+e+'" alt="'+n+'"';return t&&(n+=' title="'+t+'"'),n+=this.options.xhtml?"/>":">"},t.text=function(e){return e},e}(),K=function(){function e(){}var t=e.prototype;return t.strong=function(e){return e},t.em=function(e){return e},t.codespan=function(e){return e},t.del=function(e){return e},t.html=function(e){return e},t.text=function(e){return e},t.link=function(e,t,n){return""+n},t.image=function(e,t,n){return""+n},t.br=function(){return""},e}(),Q=function(){function e(){this.seen={}}var t=e.prototype;return t.serialize=function(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")},t.getNextSafeSlug=function(e,t){var n=e,r=0;if(this.seen.hasOwnProperty(n))for(r=this.seen[e];n=e+"-"+ ++r,this.seen.hasOwnProperty(n););return t||(this.seen[e]=r,this.seen[n]=0),n},t.slug=function(e,t){void 0===t&&(t={});var n=this.serialize(e);return this.getNextSafeSlug(n,t.dryrun)},e}(),W=t.defaults,Y=y,ee=function(){function n(e){this.options=e||W,this.options.renderer=this.options.renderer||new J,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new K,this.slugger=new Q}n.parse=function(e,t){return new n(t).parse(e)},n.parseInline=function(e,t){return new n(t).parseInline(e)};var e=n.prototype;return e.parse=function(e,t){void 0===t&&(t=!0);for(var n,r,i,s,l,a,o,c,u,p,h,g,f,d,k,b="",m=e.length,x=0;x<m;x++)switch((c=e[x]).type){case"space":continue;case"hr":b+=this.renderer.hr();continue;case"heading":b+=this.renderer.heading(this.parseInline(c.tokens),c.depth,Y(this.parseInline(c.tokens,this.textRenderer)),this.slugger);continue;case"code":b+=this.renderer.code(c.text,c.lang,c.escaped);continue;case"table":for(a=u="",i=c.header.length,n=0;n<i;n++)a+=this.renderer.tablecell(this.parseInline(c.tokens.header[n]),{header:!0,align:c.align[n]});for(u+=this.renderer.tablerow(a),o="",i=c.cells.length,n=0;n<i;n++){for(a="",s=(l=c.tokens.cells[n]).length,r=0;r<s;r++)a+=this.renderer.tablecell(this.parseInline(l[r]),{header:!1,align:c.align[r]});o+=this.renderer.tablerow(a)}b+=this.renderer.table(u,o);continue;case"blockquote":o=this.parse(c.tokens),b+=this.renderer.blockquote(o);continue;case"list":for(u=c.ordered,w=c.start,p=c.loose,i=c.items.length,o="",n=0;n<i;n++)f=(g=c.items[n]).checked,d=g.task,h="",g.task&&(k=this.renderer.checkbox(f),p?0<g.tokens.length&&"text"===g.tokens[0].type?(g.tokens[0].text=k+" "+g.tokens[0].text,g.tokens[0].tokens&&0<g.tokens[0].tokens.length&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=k+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:k}):h+=k),h+=this.parse(g.tokens,p),o+=this.renderer.listitem(h,d,f);b+=this.renderer.list(o,u,w);continue;case"html":b+=this.renderer.html(c.text);continue;case"paragraph":b+=this.renderer.paragraph(this.parseInline(c.tokens));continue;case"text":for(o=c.tokens?this.parseInline(c.tokens):c.text;x+1<m&&"text"===e[x+1].type;)o+="\n"+((c=e[++x]).tokens?this.parseInline(c.tokens):c.text);b+=t?this.renderer.paragraph(o):o;continue;default:var w='Token with "'+c.type+'" type was not found.';if(this.options.silent)return void console.error(w);throw new Error(w)}return b},e.parseInline=function(e,t){t=t||this.renderer;for(var n,r="",i=e.length,s=0;s<i;s++)switch((n=e[s]).type){case"escape":r+=t.text(n.text);break;case"html":r+=t.html(n.text);break;case"link":r+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":r+=t.image(n.href,n.title,n.text);break;case"strong":r+=t.strong(this.parseInline(n.tokens,t));break;case"em":r+=t.em(this.parseInline(n.tokens,t));break;case"codespan":r+=t.codespan(n.text);break;case"br":r+=t.br();break;case"del":r+=t.del(this.parseInline(n.tokens,t));break;case"text":r+=t.text(n.text);break;default:var l='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(l);throw new Error(l)}return r},n}(),te=A,ne=I,re=_,_=t.getDefaults,ie=t.changeDefaults,t=t.defaults;function se(e,n,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof n&&(r=n,n=null),n=te({},se.defaults,n||{}),ne(n),r){var i,s=n.highlight;try{i=X.lex(e,n)}catch(e){return r(e)}var l=function(t){var e;if(!t)try{e=ee.parse(i,n)}catch(e){t=e}return n.highlight=s,t?r(t):r(null,e)};if(!s||s.length<3)return l();if(delete n.highlight,!i.length)return l();var a=0;return se.walkTokens(i,function(n){"code"===n.type&&(a++,setTimeout(function(){s(n.text,n.lang,function(e,t){return e?l(e):(null!=t&&t!==n.text&&(n.text=t,n.escaped=!0),void(0===--a&&l()))})},0))}),void(0===a&&l())}try{var t=X.lex(e,n);return n.walkTokens&&se.walkTokens(t,n.walkTokens),ee.parse(t,n)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",n.silent)return"<p>An error occurred:</p><pre>"+re(e.message+"",!0)+"</pre>";throw e}}return se.options=se.setOptions=function(e){return te(se.defaults,e),ie(se.defaults),se},se.getDefaults=_,se.defaults=t,se.use=function(a){var t,n=te({},a);a.renderer&&function(){var e,l=se.defaults.renderer||new J;for(e in a.renderer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.renderer[i].apply(l,t);return r=!1===r?s.apply(l,t):r}}(e);n.renderer=l}(),a.tokenizer&&function(){var e,l=se.defaults.tokenizer||new P;for(e in a.tokenizer)!function(i){var s=l[i];l[i]=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=a.tokenizer[i].apply(l,t);return r=!1===r?s.apply(l,t):r}}(e);n.tokenizer=l}(),a.walkTokens&&(t=se.defaults.walkTokens,n.walkTokens=function(e){a.walkTokens(e),t&&t(e)}),se.setOptions(n)},se.walkTokens=function(e,t){for(var n,r=p(e);!(n=r()).done;){var i=n.value;switch(t(i),i.type){case"table":for(var s=p(i.tokens.header);!(l=s()).done;){var l=l.value;se.walkTokens(l,t)}for(var a,o=p(i.tokens.cells);!(a=o()).done;)for(var c=p(a.value);!(u=c()).done;){var u=u.value;se.walkTokens(u,t)}break;case"list":se.walkTokens(i.items,t);break;default:i.tokens&&se.walkTokens(i.tokens,t)}}},se.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");t=te({},se.defaults,t||{}),ne(t);try{var n=X.lexInline(e,t);return t.walkTokens&&se.walkTokens(n,t.walkTokens),ee.parseInline(n,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+re(e.message+"",!0)+"</pre>";throw e}},se.Parser=ee,se.parser=ee.parse,se.Renderer=J,se.TextRenderer=K,se.Lexer=X,se.lexer=X.lex,se.Tokenizer=P,se.Slugger=Q,se.parse=se});
;!function(a){var c,s='<svg><symbol id="icon-qt-10" viewBox="0 0 1024 1024"><path d="M941.9 594.9c0 12.6-10.2 22.9-22.9 22.9H345.5c-40.1 0-72.7-32.6-72.7-72.7V484c0-40.1 32.6-72.7 72.7-72.7H919c12.6 0 22.9 10.3 22.9 22.9 0 12.6-10.2 22.9-22.9 22.9h-11.5v115H919c12.6-0.1 22.9 10.2 22.9 22.8zM345.5 572h516.2V457H345.5c-14.9 0-26.9 12.1-26.9 26.9V545c-0.1 14.9 12 27 26.9 27z" fill="#ED1C24" ></path><path d="M969 134.3H55c-12.6 0-22.9 10.3-22.9 22.9 0 12.6 10.2 22.9 22.9 22.9h19.7v195.8c-10.5 7.3-17.4 19.4-17.4 33.1 0 22.2 18.1 40.3 40.3 40.3s40.3-18.1 40.3-40.3c0-13.7-6.9-25.8-17.4-33.1V180h107.8v180.5c0 12.6 10.2 22.9 22.9 22.9H773c12.6 0 22.9-10.3 22.9-22.9V180H969c12.6 0 22.9-10.3 22.9-22.9 0-12.6-10.3-22.8-22.9-22.8zM820.9 844H807V693.3h13.9c12.6 0 22.9-10.3 22.9-22.9s-10.2-22.9-22.9-22.9h-668c-43.1 0-78.2 35.1-78.2 78.2v85.9c0 43.1 35.1 78.2 78.2 78.2h668c12.6 0 22.9-10.3 22.9-22.9 0-12.7-10.2-22.9-22.9-22.9z m-59.5 3.6H182.5c-16.7 0-30.2-16.6-30.2-37v-83.9c0-20.4 13.6-37 30.2-37h578.9v157.9z" fill="#062F8C" ></path></symbol><symbol id="icon-qt-09" viewBox="0 0 1024 1024"><path d="M918.7 945.7H105.3c-14.7 0-27-12.3-27-27V105.3c0-14.7 12.3-27 27-27h813.5c14.7 0 27 12.3 27 27v813.5c-0.1 14.6-12.4 26.9-27.1 26.9z m-786.5-53.9h759.6V132.2H132.2v759.6z" fill="#062F8C" ></path><path d="M963.8 541.6H634.5c-14.7 0-27-12.3-27-27s12.3-27 27-27h329.3c14.7 0 27 12.3 27 27s-12.3 27-27 27z m-574.3 0H60.2c-14.7 0-27-12.3-27-27s12.3-27 27-27h329.3c14.7 0 27 12.3 27 27s-12.3 27-27 27z m124-130.3c-14.7 0-27-12.3-27-27V55c0-14.7 12.3-27 27-27s27 12.3 27 27v329.3c-0.1 14.7-12.3 27-27 27z m0 584.6c-14.7 0-27-12.3-27-27V639.7c0-14.7 12.3-27 27-27s27 12.3 27 27V969c-0.1 14.7-12.3 26.9-27 26.9z" fill="#E60012" ></path><path d="M512 759.5c-136.2 0-247.5-111.2-247.5-247.5S375.8 264.5 512 264.5 759.5 375.8 759.5 512 648.2 759.5 512 759.5z m0-441.1c-106.8 0-193.6 86.7-193.6 193.6S405.2 705.6 512 705.6 705.6 618.8 705.6 512 618.8 318.4 512 318.4z" fill="#E60012" ></path></symbol><symbol id="icon-qt-11" viewBox="0 0 1024 1024"><path d="M99.1 951.9c-15.1 0-27.3-12.3-27.3-27.3 0-2 0.2-4 0.7-5.9l52.2-251.3c2.2-10.4 7.3-20 14.8-27.5L703.8 76.3c21.6-20.7 55.6-20.7 77.2 0l166.5 166.5c21.3 21.2 21.4 55.7 0.2 77l-0.2 0.2-564.3 564.4c-7.6 7.5-17.1 12.7-27.5 14.8l-251.3 52.2c-1.9 0.2-3.7 0.2-5.6 0l0.3 0.5zM742.5 95.4c-5.2 0-10.2 2-13.9 5.7L164.2 665.3c-2.8 2.7-4.7 6.2-5.5 10.1l-49.9 239.8 239.8-49.8c3.8-0.7 7.3-2.6 10.1-5.4l564.2-564.8c7.7-7.7 7.7-20.2 0-27.9L756.3 100.8c-3.7-3.7-8.7-5.7-13.9-5.7l0.1 0.3z" fill="#062F8C" ></path><path d="M853.1 407.2c-4.6 0-9.1-1.8-12.3-5.1l-219-218.9c-6.4-7.2-5.8-18.3 1.5-24.7 6.6-5.9 16.6-5.9 23.2 0l219 219c6.8 6.8 6.8 17.9 0 24.7-3.3 3.3-7.7 5.1-12.3 5.1v-0.1zM759.7 973c-13.9 0-27.2-5.5-37-15.3L504.5 739.6c-6.4-7.2-5.8-18.3 1.5-24.7 6.6-5.9 16.6-5.9 23.2 0l218.1 218.2c6.8 6.8 17.8 6.8 24.7 0l161.4-161.4c6.8-6.8 6.8-17.8 0-24.7l-217-217c-6.4-7.2-5.8-18.3 1.5-24.7 6.6-5.9 16.6-5.9 23.2 0l217 217c20.4 20.5 20.4 53.5 0 74L796.7 957.9c-9.9 9.7-23.2 15.2-37 15.1zM296 523.9c-4.6 0.1-9-1.7-12.3-4.9L66 301.2c-20.4-20.5-20.4-53.5 0-74L227.3 65.8c20.7-19.8 53.3-19.8 74 0L519.5 284c6.4 7.2 5.8 18.3-1.5 24.7-6.6 5.9-16.6 5.9-23.2 0L276.7 90.5c-6.9-6.6-17.8-6.6-24.7 0L90.6 251.8c-6.8 6.8-6.8 17.8 0 24.7l217.7 217.7c6.8 6.8 6.8 17.8 0 24.7-3.3 3.2-7.7 5-12.3 5z" fill="#062F8C" ></path><path d="M155 383.1c-9.7 0-17.5-7.9-17.4-17.5 0-4.6 1.8-9 5.1-12.3l102.8-102.8c7.2-6.4 18.3-5.8 24.7 1.5 5.9 6.6 5.9 16.6 0 23.2L167.4 377.9c-3.3 3.3-7.7 5.2-12.4 5.2z m101.2 101.6c-9.6-0.4-17.1-8.5-16.7-18.2 0.2-4.5 2.1-8.7 5.3-11.9l102.8-102.8c6.4-7.2 17.5-7.9 24.7-1.5 7.2 6.4 7.9 17.5 1.5 24.7-0.5 0.5-0.9 1-1.5 1.5L269.5 479.3c-3.5 3.6-8.3 5.6-13.3 5.4z m304.9 304.1c-9.6 0.1-17.6-7.6-17.7-17.3-0.1-4.8 1.9-9.4 5.3-12.8L651.5 656c6.4-7.2 17.5-7.9 24.7-1.5 7.2 6.4 7.9 17.5 1.5 24.7-0.5 0.5-0.9 1-1.5 1.5L573.4 783.5c-3.3 3.3-7.7 5.1-12.3 5.1v0.2z m101.4 101.6c-9.7 0-17.5-7.9-17.4-17.5 0-4.6 1.8-9 5.1-12.3L753 757.8c7.2-6.4 18.3-5.8 24.7 1.5 5.9 6.6 5.9 16.6 0 23.2L674.8 885.2c-3.3 3.3-7.7 5.2-12.3 5.2z" fill="#ED1C24" ></path></symbol><symbol id="icon-qt-02" viewBox="0 0 1024 1024"><path d="M838 838l-39.7-39.5c10.5-10.6 24.8-16.6 39.7-16.5 30.9 0 55.9-25 55.9-55.9V167c0-30.9-25-55.9-55.9-55.9H278.8c-30.9 0-55.9 25-55.9 55.9v4.8c0 15.4-6.1 29.2-16.2 39.5L167 171.8V167c0-61.8 50.1-111.8 111.8-111.8H838c61.8 0 111.8 50.1 111.8 111.8v559.1c0 61.8-50.1 111.9-111.8 111.9zM111.1 278.8V838c0 30.9 25 55.9 55.9 55.9h559.1c30.9 0 55.9-25 55.9-55.9V278.8c0-30.9-25-55.9-55.9-55.9H167c-30.9 0-55.9 25.1-55.9 55.9z m615-111.8c61.8 0 111.8 50.1 111.8 111.8V838c0 61.8-50.1 111.8-111.8 111.8H167c-61.8 0-111.8-50.1-111.8-111.8V278.8c0-61.7 50-111.8 111.8-111.8h559.1z" fill="#062F8C" ></path><path d="M195 418.6h335.5c15.4 0 28 12.5 28 28s-12.5 28-28 28H195c-15.4 0-28-12.5-28-28s12.5-28 28-28z m503.1 55.9c-15.4 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z m-587 56h671v55.9h-671v-55.9z" fill="#E60012" ></path></symbol><symbol id="icon-zt-03-02" viewBox="0 0 1024 1024"><path d="M939.1 455.2L598.6 119.7c-48.2-47.1-125.3-47.1-173.4 0L84.8 455.2c-15.3 15-23.8 35.5-23.9 56.9v303.4c0 68.5 55.7 124.2 124.2 124.2h471.2c19.6 0 35.5-15.9 35.5-35.5s-15.9-35.5-35.5-35.5H185c-29.3 0-53.2-23.8-53.2-53.2V512.1c0-2.3 0.9-4.7 2.7-6.3L475 170.3c20.5-20.1 53.4-20.1 73.9 0l340.6 335.5c1.7 1.7 2.6 3.9 2.6 6.2v303.4c0 29.3-23.8 53.2-53.2 53.2-19.6 0-35.5 15.9-35.5 35.5s15.9 35.5 35.5 35.5c68.5 0 124.2-55.7 124.2-124.2V512.1c-0.1-21.4-8.8-41.8-24-56.9z" fill="#062F8C" ></path><path d="M746.6 512H408.8c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z m469.1 177.4H408.8c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z" fill="#E60012" ></path></symbol><symbol id="icon-zt-04-01" viewBox="0 0 1024 1024"><path d="M552.1 712.6h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z m280.9-160.5h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0-44.1-36.1-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2zM231.1 712.6h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.2 160.5c0 22.1-18.1 40.1-40.1 40.1H151c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2zM552.1 70.8h-80.2c-44.1 0-80.2 36.1-80.2 80.2v80.2c-0.1 44.1 36 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2V151c0-44.1-36.1-80.2-80.2-80.2z m40.1 160.3c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z" fill="#E60012" ></path><path d="M191 672.5c12 0 20.1-8 20.1-20.1V512H492v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V512h280.9v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V491.9c0-12-8-20.1-20.1-20.1H532.1V371.6c0-12-8-20.1-20.1-20.1-12 0-20.1 8-20.1 20.1v100.3H191c-12 0-20.1 8-20.1 20.1v160.5c0.1 12 8.1 20 20.1 20z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-05-01" viewBox="0 0 1024 1024"><path d="M875.5 49.3h-727c-54.7 0-99.2 44.5-99.2 99.2v727c0 54.7 44.5 99.2 99.2 99.2h727c54.7 0 99.2-44.5 99.2-99.2v-727c0-54.8-44.5-99.2-99.2-99.2z m33.1 826.2c0 18.2-14.9 33.1-33.1 33.1h-727c-18.2 0-33.1-14.8-33.1-33.1v-727c0-18.2 14.9-33.1 33.1-33.1h727c18.2 0 33.1 14.8 33.1 33.1v727z" fill="#062F8C" ></path><path d="M445.9 313.7h-66.1v-66.1c0-18.2-14.8-33.1-33.1-33.1-18.2 0-33.1 14.8-33.1 33.1v66.1h-66.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h66.1V446c0 18.2 14.8 33.1 33.1 33.1 18.2 0 33.1-14.8 33.1-33.1v-66.1h66.1c18.2 0 33.1-14.8 33.1-33.1 0-18.4-14.8-33.1-33.1-33.1z m330.5 0H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1-0.1-18.4-14.8-33.1-33.1-33.1z m0 330.5H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1s-14.8-33.1-33.1-33.1z m-323.7-72.9c-12.9-12.9-33.9-12.9-46.6 0l-59.3 59.2-59.3-59.3c-12.9-12.9-33.9-12.9-46.8 0-12.9 12.9-12.9 33.9 0 46.6l59.3 59.3-59.3 59.3c-12.9 12.9-12.9 33.9 0 46.6 6.5 6.4 14.9 9.7 23.4 9.7 8.5 0 16.9-3.2 23.4-9.7l59.4-59.2 59.3 59.3c6.4 6.4 14.9 9.7 23.4 9.7s16.9-3.2 23.4-9.7c12.9-12.9 12.9-33.9 0-46.6l-59.3-59.3 59.3-59.3c12.7-12.8 12.7-33.7-0.3-46.6z m191.5 6.8c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z m0 198.3c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z" fill="#E60012" ></path></symbol><symbol id="icon-zt-05-04" viewBox="0 0 1024 1024"><path d="M634.7 207.3l-44.2 244.6-81.1 1.7-13.6 40.9-102.2-259-80.3 228-6.4 27.1-17.8-44.6H143.5v53H253l67.1 168.1 43.7-186.9 32.6-92.5 103 261.5 48.1-143.3 87.2-1.9 16-88.3 29.8 85 199.4 2 0.5-53-162.1-1.7-83.6-240.7z" fill="#E60012" ></path><path d="M289.1 890v53h290.5c-8.6-16.7-15.5-34.5-20.5-53H443V775h109.6c2.8-18.4 7.5-36.2 13.7-53.2H74.7V134h874.7v436.1c19 9.5 36.8 21.2 53 34.7V81H21.6v694h368.3v115H289.1z" fill="#062F8C" ></path><path d="M800.6 561.8c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.1-163.6 163.5-163.6 163.5 72.2 163.5 163.5S892 946.7 800.6 946.7z" fill="#062F8C" ></path><path d="M863.1 711l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6z" fill="#E60012" ></path></symbol><symbol id="icon-zt-06-07" viewBox="0 0 1024 1024"><path d="M309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z" fill="#062F8C" ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z" fill="#062F8C" ></path><path d="M893.5 833.2v-0.9c-0.4-18.8-10.8-36-27.3-45l60-107.8c56.2 31 92.1 89.1 94.7 153.2l-127.4 0.5zM837.6 871c-20.7 0-37.5-16.8-37.5-37.5s16.8-37.5 37.5-37.5 37.5 16.8 37.5 37.5-16.7 37.5-37.5 37.5zM783 834l-122.3 2.5c-1.4-62.6 30.7-121.2 84.2-153.7l63.6 105.1c-16.1 9.6-25.9 27.1-25.5 45.9v0.2z m51.8 51.4c10-0.1 19.8-3.1 28.2-8.6L929.5 985c-56.7 31.2-125.5 31.2-182.2 0l63.5-105.8c7.6 4 16 6.2 24.6 6.2h-0.6z" fill="#E60012" ></path></symbol><symbol id="icon-zt-06-03" viewBox="0 0 1024 1024"><path d="M634.7 207.3l-44.2 244.6-81.1 1.7-13.6 40.9-102.2-259-80.3 228-6.4 27.1-17.8-44.6H143.5v53H253l67.1 168.1 43.7-186.9 32.6-92.5 103 261.5 48.1-143.3 87.2-1.9 16-88.3 29.8 85 199.4 2 0.5-53-162.1-1.7-83.6-240.7z" fill="#E60012" ></path><path d="M289.1 890v53h290.5c-8.6-16.7-15.5-34.5-20.5-53H443V775h109.6c2.8-18.4 7.5-36.2 13.7-53.2H74.7V134h874.7v436.1c19 9.5 36.8 21.2 53 34.7V81H21.6v694h368.3v115H289.1z" fill="#062F8C" ></path><path d="M963.8 966.7c-16.1-0.1-31.5-6.6-42.7-18.2l-85.3-73.9-7.2 3c-16.7 6.3-34.5 9.6-52.4 9.6-87.6-1.9-157.3-74-156.2-161.6 0-14.6 2-29.1 6.1-43.1 1.8-5.3 5.8-9.5 11-11.6 1.7-0.5 3.4-0.8 5.2-0.9 4.7 0 9.1 2.2 12.1 5.8l80 83 73.9-76.2-80.6-83.6c-4.5-4.3-6.3-10.7-4.7-16.8 1.7-5.4 5.8-9.7 11-11.8 13.5-4.2 27.6-6.4 41.7-6.4 87.9 1.5 158.1 73.9 156.9 161.9 0.1 18.5-3.1 37-9.3 54.4l-2.2 6.4 84.4 73.3a64.51 64.51 0 0 1 18.7 44.7c0.3 16.3-5.9 32-17.1 43.8-11.2 11.5-26.6 18.1-42.7 18.4h-0.6zM837 839.2c6.3-0.1 12.3 2.5 16.6 7.1l88.5 75.8c5.3 5.8 12.7 9.2 20.5 9.4 6.9 0 13.6-2.8 18.4-7.8 5.3-5.4 8.3-12.7 8.5-20.2 0.2-7.1-2.5-14-7.4-19.1l-88.6-75.9c-7-6.2-9.7-15.9-6.9-24.8l4.9-13.3c4.7-13.8 7.2-28.2 7.4-42.8 1.6-69.3-53.3-126.7-122.6-128.3h-0.4l-1.6-1.6v1.6l62.7 66.5c4.1 4.7 6.5 10.6 6.7 16.8-0.2 6.3-2.6 12.4-6.7 17.1L749 790c-4.5 4.2-10.5 6.6-16.6 6.6-5.8-0.2-11.4-2.5-15.7-6.4l-64.5-66.4v1.1c-1.6 69.3 53.3 126.7 122.6 128.3h0.2c14 0.2 27.9-2.1 41.1-6.9l12.5-5c2.3-0.9 4.7-1.4 7.2-1.4l1.2-0.7z" fill="#062F8C" ></path></symbol><symbol id="icon-qt-05" viewBox="0 0 1024 1024"><path d="M746.4 341.4l4 4 84.4-85c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-14-8.9-32.1-7.1-44.1 4l-84.2 84.8 8 4c7.7 16.4 19.7 24.6 31.9 36.8zM228.3 491.1H112c-17.8 0-32.4 14.6-32.4 32.4s14.6 32.4 32.4 32.4h116.4l-0.1-64.8z m325.3-376.5c0.3-17.6-13.9-32-31.4-32.3h-0.9c-17.3 1.1-31 15-32.3 32.3v125.7h64.4V114.6h0.2z m-257 230.7l4-4c9.9-14.1 22.1-26.6 36.1-36.6l8-4-88.2-89.1c-16-12.1-36.1-12.1-48.1 0-4.4 7.4-7.1 15.7-8 24.3 0.9 8.6 3.6 16.8 8 24.3l88.2 85.1zM931 491.1H814.6v64.7H931c17.8 0 32.4-14.6 32.4-32.4 0-17.9-14.6-32.3-32.4-32.3z m-100.5 336h-52V531.5c0-141.6-116.4-259.2-256.9-259.2s-257 117.5-257 259.2v295.6h-52.3c-17.8 0-32.4 14.6-32.4 32.4 0 17.8 14.6 32.4 32.4 32.4h618.3c17.8 0 32.4-14.6 32.4-32.4 0-17.8-14.6-32.4-32.5-32.4z m-116.5 0H328.7V551.8c0-52.7 20-101.2 56.3-141.6 68-75.4 184.2-81.4 259.6-13.4 4.7 4.3 9.1 8.7 13.4 13.4 36.1 36.4 56.3 89.1 56.3 141.6l-0.3 275.3z" fill="#062F8C" ></path><path d="M597.6 563.9h-72.1l40.1-40.6c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-12.3-12.1-32-12.1-44.1 0l-96.4 93.1c-12 12.4-12 32.1 0 44.5 8 8.1 20 12.1 36.1 12.1h68.3l-56.1 64.8c-8 8.1-8 16.1-8 24.3 0.9 8.6 3.6 16.8 8 24.3 8 8.3 16 8.3 24 8.3 8.6-0.9 16.8-3.6 24.1-8.1l96.7-97.1c11-10.6 16.8-25.3 16-40.6-0.4-20.3-12.3-36.4-36.6-36.4z" fill="#E60012" ></path></symbol><symbol id="icon-qt-01" viewBox="0 0 1024 1024"><path d="M927.4 148.4c0-13.6-11.1-24.7-24.7-24.7H109.2c-13.6 0-24.7 11.1-24.7 24.7v545.4c0 13.6 11.1 24.7 24.7 24.7h818.2V148.4zM636.8 768.3l49.6 198.4H325.3L375 768.3H109.2c-41 0-74.4-33.3-74.4-74.4V148.4c0-41 33.3-74.4 74.4-74.4h793.5c41 0 74.4 33.3 74.4 74.4v619.8H636.8v0.1zM84.3 594.7v49.6h843.1v-49.6H84.3zM388.8 917h234.1l-37.2-148.8H426L388.8 917z" fill="#062F8C" ></path><path d="M484.2 495.8c6.7 12 21.8 16.3 33.8 9.6 3.1-1.8 5.8-4.1 8-7l97-132.1 56.3 70.4c4.7 5.9 11.9 9.3 19.4 9.3h139.6c13.6 0 24.7-11.1 24.7-24.7s-11.1-24.7-24.7-24.7H710.6l-69-86.4c-8.6-10.7-24.2-12.4-34.8-3.9-1.6 1.3-3.3 3-4.4 4.7l-93.3 127.1-120-215.9c-6.7-12-21.8-16.3-33.8-9.6-3.7 2.1-6.8 5-9 8.6L236.6 396.3h-81.3c-13.6 0-24.7 11.1-24.7 24.7s11.1 24.7 24.7 24.7h95.1c8.6 0 16.4-4.4 21-11.7l94.5-151 118.3 212.8z" fill="#E60012" ></path></symbol><symbol id="icon-zt-06-04" viewBox="0 0 1024 1024"><path d="M634.7 207.3l-44.2 244.6-81.1 1.7-13.6 40.9-102.2-259-80.3 228-6.4 27.1-17.8-44.6H143.5v53H253l67.1 168.1 43.7-186.9 32.6-92.5 103 261.5 48.1-143.3 87.2-1.9 16-88.3 29.8 85 199.4 2 0.5-53-162.1-1.7-83.6-240.7z" fill="#E60012" ></path><path d="M289.1 890v53h290.5c-8.6-16.7-15.5-34.5-20.5-53H443V775h109.6c2.8-18.4 7.5-36.2 13.7-53.2H74.7V134h874.7v436.1c19 9.5 36.8 21.2 53 34.7V81H21.6v694h368.3v115H289.1z" fill="#062F8C" ></path><path d="M805.3 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7s6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.4 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H805.7c-0.4 0.2-0.7 0.2-0.9 0.2z m167.6-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-qt-03" viewBox="0 0 1024 1024"><path d="M530.6 769h-22.7c-134.2-4.1-260.1-28.9-355.1-70.2C51.7 653.4-2 593.5 0.1 529.5c2.1-61.9 55.7-119.7 152.8-158.9 90.8-37.2 212.6-57.8 340.6-57.8h22.7c134.2 2.1 260.1 26.8 355.1 68.1 101.2 45.4 154.8 105.3 152.8 169.3-2.1 61.9-55.7 119.7-152.8 158.9-90.9 39.3-212.7 59.9-340.7 59.9z m-37.2-414.9c-123.9 0-239.5 20.6-324.1 55.7-78.4 33-125.9 76.4-125.9 121.8 0 45.4 45.4 92.9 128 128 88.8 39.2 208.5 61.9 338.5 66.1h22.7c123.9 0 239.5-20.6 324.1-55.7 78.4-33 125.9-76.4 125.9-121.8s-45.4-92.9-128-128c-88.8-39.2-208.5-61.9-338.5-66.1h-22.7z" fill="#062F8C" ></path><path d="M726.7 985.8c-57.8 0-125.9-31-200.2-88.8-72.3-57.8-144.6-138.3-206.5-231.2-74.3-111.5-125.9-229.1-144.5-330.3-20.6-107.3-2.1-187.9 51.6-222.9 18.6-12.4 41.3-18.6 68.1-18.6 57.8 0 125.9 31 200.2 88.8 72.2 57.8 144.5 138.3 206.4 231.2 74.3 111.5 125.9 229.1 144.5 330.3 20.6 107.3 2.1 187.8-51.6 222.9-20.5 12.4-43.2 18.6-68 18.6zM297.3 135.3c-16.5 0-33 4.1-43.4 12.4-37.2 24.8-49.5 90.8-33 179.6 18.6 97 66.1 208.5 138.3 315.8 59.9 88.8 128 165.1 196.1 220.9 66.1 51.6 125.9 80.5 173.4 80.5 16.5 0 33-4.1 43.4-12.4 37.2-24.8 49.5-90.8 33-179.6-18.6-97-66.1-208.5-138.3-315.8-59.9-88.8-128-165.1-196.1-220.9-66-51.6-128-80.5-173.4-80.5z" fill="#062F8C" ></path><path d="M322.1 1002.3c-20.6 0-39.2-4.1-57.8-14.5-55.7-31-80.5-107.3-70.2-216.8 10.3-103.2 51.6-225 117.7-340.6 70.2-128 161-237.4 249.8-299.3 10.3-6.2 22.7-4.1 31 6.2 6.2 10.3 4.1 22.7-6.2 31C501.7 224 417 327.2 348.9 451.1 287 562.6 247.8 678.2 237.4 777.3c-10.3 88.8 8.3 152.8 47.5 175.5 39.2 22.7 103.2 2.1 173.4-53.7 76.4-59.9 152.8-156.9 214.7-268.4 68.1-121.8 109.4-249.8 113.5-350.9 0-12.4 10.3-20.6 22.7-20.6 12.4 0 20.6 10.3 20.6 22.7-6.2 107.3-49.5 241.5-119.7 369.5-64 117.7-144.5 216.8-225 280.7-59.8 47.5-115.5 70.2-163 70.2z" fill="#062F8C" ></path><path d="M627.6 131.1c0 59.9 49.5 109.4 109.4 109.4S846.4 191 846.4 131.1 796.9 21.7 737 21.7 627.6 69.2 627.6 131.1z" fill="#E60012" ></path></symbol><symbol id="icon-zt-06-01" viewBox="0 0 1024 1024"><path d="M725.2 95.8c-65.3 0-126.7 29.5-172.4 81.5-30.3-32.2-69.7-50.2-111.9-50.2-73.7 0-137.1 55.1-157.7 134h-34c-95.4 0-173 89-173 198.2s77.6 198.1 173 198.1h476c135.1 0 245-125.9 245-280.7 0-155-109.9-280.9-245-280.9z m0 505.4h-476c-68 0-123.4-63.8-123.4-142s55.3-142 123.4-142h53.6c12.2 0 22.4-9.9 24.5-23.5 9.3-64 57.2-110.5 113.5-110.5 36.5 0 70 19.3 92 53.1 4.7 7 11.9 11.3 19.6 11.4 7.3 0 15.1-3.8 19.8-10.7 37.4-54.1 93-85 152.8-85 107.7 0 195.3 100.8 195.3 224.6 0.3 123.8-87.4 224.6-195.1 224.6z" fill="#062F8C" ></path><path d="M230.5 722L83.4 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4L266 761.5c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.3 0.2zM459.3 721.7c-9.8-10.9-25.4-10.7-35.1 0.2l-73.5 84.2c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.6-11.2 9.5-28.9-0.3-39.8zM814.5 722L741 806.1c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.2 0.2zM621 722L473.8 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l147.1-168.5c9.7-11 9.6-28.8-0.2-39.7-9.7-11.1-25.5-11-35.1 0.2z" fill="#E60012" ></path></symbol><symbol id="icon-zt-06-02" viewBox="0 0 1024 1024"><path d="M819.7 551.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6L515 553.5l-115-36.2c14.2-23.6 23.3-46.6 23.3-71.2 0-65.2-53-118-118.4-118s-118.4 52.8-118.4 118c0 27.2 12 53.6 29.3 80.8l-0.5 0.1L53.8 886.9l244.3-91.6 222.3 91.6L729 795.3l241.2 91.6-150.5-335zM704.2 244c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101zM305.1 388.9c31.7 0 57.5 25.6 57.5 57.3 0 31.6-25.8 57.3-57.5 57.3-31.8 0-57.5-25.7-57.5-57.3 0-31.7 25.7-57.3 57.5-57.3z m419.8 351.8l-204.6 88.2-218.1-88.2-162.7 73.7 93.2-239.2 15.2-2.8c18.5 24.6 38.7 50.6 57.2 79.5 23-36.5 47.1-66.8 67.7-94.8l142.3 45.4 89.1-28.8c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l94 233.5-163.8-76.6z" fill="#062F8C" ></path><path d="M604.2 573.7c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l25-31.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6l29.8 39.1z m100-329.7c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101z" fill="#E60012" ></path></symbol><symbol id="icon-zt-04-04" viewBox="0 0 1024 1024"><path d="M771.9 560.9c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.2-163.5 163.5-163.5S935.4 691 935.4 782.3s-72.1 163.5-163.5 163.5z" fill="#062F8C" ></path><path d="M834.4 710.1l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM308.3 683.2l7.5-5.6c20.3-15.8 44.5-25.7 69.9-28.7V438.5h-78.5v244.2l1.1 0.5z" fill="#E60012" ></path><path d="M819.8 511.6c25.2 3.9 49.4 11 72.1 20.8V169.1h-137V62.5H271.6v106.6H134.7v481.8c24.1-4.5 48.9-2.8 72.1 5.1V241.2h612.9l0.1 270.4z m-137-342.5h-339v-34.5h339v34.5z" fill="#062F8C" ></path><path d="M718.9 513.1v-74.6h-78.5v100.9c24.5-12.2 50.8-21.1 78.5-26.3zM500.1 687.4c12.7-29.1 29.8-55.7 50.6-79.1V407.2h-78.5v260.7c5.2 2.9 10.1 6.2 14.9 9.7l13 9.8z" fill="#E60012" ></path><path d="M479.1 854.1l-13.7-10.3c-37.8-28.5-89.9-28.5-127.8 0l-36.1 27c-12 9-28.6 9-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0l-46.6 35.3c-16.1 11.8-19.5 34.4-7.7 50.4 11.8 16.1 34.4 19.5 50.4 7.7 0.3-0.2 0.6-0.5 0.9-0.7l46.6-35.3c12-9 28.6-9 40.6 0l35.9 27c37.8 28.5 89.9 28.5 127.7 0l36.1-27c12-9 28.6-9 40.6 0l35.1 26.7c16.3 12.1 35.2 19.1 54.5 20.9-15.6-29-26.7-60.9-32.1-94.7z" fill="#062F8C" ></path><path d="M487.5 722l-21.6-16.2c-37.8-28.5-89.9-28.5-127.7 0l-36.1 27c-12 9.1-28.6 9.1-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0L51 741.1l-0.2 0.2c-16 11.8-19.5 34.4-7.7 50.4s34.4 19.5 50.4 7.7c0.4-0.3 0.7-0.5 1-0.8l46.6-35.3c12-9.1 28.6-9.1 40.6 0l36 27c37.8 28.5 89.9 28.5 127.8 0l36.1-27c12-9.1 28.6-9.1 40.6 0l36.1 27c5.3 4 11 7.5 16.9 10.4 0.7-27.3 4.9-53.7 12.3-78.7z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-05-02" viewBox="0 0 1024 1024"><path d="M799.8 630c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.2 19.7-25 19.7z m0-96.4l-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5S850 632 850 610.2c0-18.5-33.2-57.4-39.7-64.9l-10.5-11.7z m-83.6 237c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m0-96.5L706 685.9c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5 27.7 0 50.1-17.7 50.1-39.5 0-18.5-33.2-57.4-39.7-64.9l-10.6-11.8z m-170.4-4.3c-14.6 0-26.5-9.4-26.5-20.9 0-6.9 12.4-25.9 26.5-43.7 14.1 17.8 26.5 36.8 26.5 43.7 0 11.6-11.9 20.9-26.5 20.9z m0-102.1l-10.9 12.5c-7 8.1-42 49.1-42 68.7 0 23 23.7 41.8 53 41.8s53-18.7 53-41.8c0-19.6-35.1-60.7-42-68.7l-11.1-12.5zM179.2 902.4h30.3v23.9h-30.3v-23.9z m272.4-83.6h30.3v23.9h-30.3v-23.9zM376 842.7h30.3v23.9H376v-23.9z m454.2 35.8h30.3v23.9h-30.3v-23.9z m60.5-11.9H921v23.9h-30.3v-23.9z m60.5-35.9c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.3 14.7-72.5 28.7-137.1 28.7-83.6 0.1-151.4-53.6-151.4-119.5v-40.4c32.6 38.8 88.3 64.3 151.4 64.3 71.7 0 111.9-15.8 150.6-31.2 37.3-14.7 72.5-28.7 137.1-28.7s99.7 13.8 137.1 28.7c38.8 15.2 78.9 31.2 150.6 31.2 63.2 0 118.8-25.6 151.4-64.3v40.4zM73.1 615.6c0-66 67.9-119.6 151.4-119.6 64.6 0 99.7 13.8 137.1 28.7 38.8 15.2 78.9 31.2 150.6 31.2s111.9-15.8 150.6-31.2C700.2 510 735.3 496 800 496c83.6 0 151.4 53.7 151.4 119.5v95.6c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.4 14.7-72.6 28.7-137.2 28.7-83.6 0-151.4-53.7-151.4-119.5v-95.5z m201.4 355.6c42.4-5.3 71.8-16.8 100.6-28.2 37.2-14.6 72.4-28.6 137-28.6s99.7 13.8 137.1 28.7c14.2 5.6 28.6 11.3 44.6 16.2l30.1 7.8c21.2 4.4 45.5 7.3 75.7 7.3 100.1 0 181.7-64.4 181.7-143.4V615.6c0.2-79.2-81.2-143.4-181.5-143.4-71.7 0-111.9 15.8-150.6 31.2C611.9 518 576.6 532 512.1 532s-99.7-13.8-137.1-28.7c-38.9-15.2-78.9-31.2-150.6-31.2-100.1 0-181.7 64.4-181.7 143.4v215.2c0 79.1 81.5 143.4 181.7 143.4" fill="#062F8C" ></path><path d="M203.6 576.5l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.6-33.1-57.3-39.7-64.9z m-10.4 84.1c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m131.4 32.1l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0.1-18.6-33.1-57.4-39.7-64.9z m-10.3 84c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.9-11.2 19.7-25 19.7z m76.1-209.6l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.8 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.4-33.2-57.2-39.7-64.8zM380 651.2c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z" fill="#062F8C" ></path><path d="M145.8 410.1V52.5h59.5v296.6h148.5v61h-208z m316.4 0V49.6h59.5v360.5h-59.5zM646.1 49.6H755c27.5 0 48.3 3.1 62.3 9.3S844.2 75.4 856 90s21 33.6 27.8 56.8c6.7 23.3 10.1 52.2 10.1 86.9 0 31.2-3.5 58.3-10.6 81.3s-15.9 41.2-26.8 54.7c-10.9 13.4-23.9 23.6-39.1 30.4-15.3 6.8-35 10.2-59.1 10.2H646.1V49.6z m59.5 61v238.6h44.7c19.2 0 33.1-1.8 41.6-5.4 8.6-3.6 15.6-9.1 21.1-16.3 5.5-7.3 10.1-18.8 13.6-34.6 3.6-15.7 5.4-36.5 5.4-62.2 0-26.7-1.9-47.7-5.6-63.2-3.7-15.4-9.5-27.5-17.2-36.4-7.8-8.9-17.2-14.6-28.4-17.4-8.4-2.1-24.5-3.2-48.4-3.2l-26.8 0.1z" fill="#E60012" ></path></symbol><symbol id="icon-qt-08" viewBox="0 0 1024 1024"><path d="M386.9 901.4h-259c-21.3 0-37.3-16-37.3-37.3V120.9c0-21.3 16-37.3 37.3-37.3h594.3c21.3 0 37.3 16 37.3 37.3v223.5c0 21.3 16 37.3 37.3 37.3 21.3 0 37.3-16 37.3-37.3V120.9C834 58.8 784.3 9.1 722.2 9.1H127.9c-62 0-111.7 49.7-111.7 111.8v743.3C16.2 926.3 65.9 976 128 976h260.8c21.3 0 37.3-16 37.3-37.3-0.1-21.4-17.9-37.3-39.2-37.3z" fill="#062F8C" ></path><path d="M685 269.9c0-21.3-16-37.3-37.3-37.3H202.5c-21.3 0-37.3 16-37.3 37.3 0 21.3 16 37.3 37.3 37.3h445.3c19.4-0.1 37.2-17.8 37.2-37.3zM404.7 491.6c0-21.3-16-37.3-37.3-37.3h-165c-21.3 0-37.3 16-37.3 37.3 0 21.3 16 37.3 37.3 37.3h165c19.5 0 37.3-16 37.3-37.3zM202.5 677.9c-21.3 0-37.3 16-37.3 37.3s16 37.3 37.3 37.3h111.8c21.3 0 37.3-16 37.3-37.3s-16-37.3-37.3-37.3H202.5z m805.3 276.7L857 810.9c24.8-35.5 42.6-78.1 46.1-124.2 14.2-140.1-83.4-259-223.5-273.2-140.1-14.2-259 83.4-273.2 223.5-14.2 140.1 83.4 259 223.5 273.2 62.1 7.1 120.6-8.9 166.7-40.8l152.6 145.5c0.1 0 58.6-60.3 58.6-60.3z m-369-127.7c-90.5-8.9-157.9-90.5-149-182.7 8.9-90.5 90.5-157.9 182.7-149 90.5 8.9 157.9 90.5 149 182.7-8.8 90.4-92.2 157.8-182.7 149z" fill="#E60012" ></path></symbol><symbol id="icon-qt-07" viewBox="0 0 1024 1024"><path d="M177.2 920.2c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L290.9 737c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7l-134 133.9c-5.5 5.5-12.8 8.6-20.5 8.6z m0-312.5c-7.6 0-14.9-3-20.4-8.4l-89.5-89.5c-5.6-5.4-8.6-12.6-8.7-20.2-0.2-7.6 2.7-14.9 8.1-20.5 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.6 2.9 20 8.1 0.3 0.2 0.5 0.5 0.6 0.6l69.2 69.2 113.6-113.6c5.4-5.1 12.4-8 19.9-8 7.8 0 15.3 3.2 20.7 8.7 10.8 11.1 10.8 28.6 0.2 39.9l-134 133.9c-5.4 5.4-12.7 8.5-20.4 8.5z m0-312.7c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L291 111.9c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7L197.7 286.4c-5.5 5.7-12.8 8.6-20.5 8.6z" fill="#E60012" ></path><path d="M467.5 875.5c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5zM467.5 563c-28.1 0-51.1-22.9-51.1-51.1 0-28.1 22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1 0 28.2-23 51.1-51.1 51.1H467.5zM467.5 250.5c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-06-06" viewBox="0 0 1024 1024"><path d="M521.7 916.1H184.9c-38.5 0-67.4-28.9-67.4-67.4V175.3c0-38.5 28.9-67.4 67.4-67.4h52.9c0 9.7-4.8 19.2-4.8 28.9 0 48.1 38.5 86.6 86.6 86.6h221.3c48.1 0 86.6-38.5 86.6-86.6 0-9.7 0-19.2-4.8-28.9h52.9c38.5 0 67.4 28.9 67.4 67.4v288.6c0 14.4 14.4 28.9 28.9 28.9s28.9-14.4 28.9-28.9V175.3c-0.2-67.4-57.9-125.1-125.3-125.1H189.7c-67.3 0-125.1 57.7-125.1 125.1v673.4c0 67.4 57.7 125.1 125.1 125.1h336.8c14.4 0 28.9-14.4 28.9-28.9s-14.5-28.8-33.7-28.8z m19.2-808.2c14.4 0 28.9 9.7 28.9 28.9 0 14.4-14.4 28.9-28.9 28.9H319.6c-14.4-4.8-28.9-14.4-28.9-28.9s9.7-28.9 28.9-28.9h221.3z" fill="#062F8C" ></path><path d="M233 319.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.5-14.4-28.9-28.9-28.9z m375.2 28.8c0-14.4-14.4-28.9-28.9-28.9H329.1c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h250.2c14.5 0 28.9-14.4 28.9-28.9zM233 521.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.4-14.4-28.9-28.9-28.9z m327.1 28.8c0-14.4-14.4-28.9-28.9-28.9h-202c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h202c14.5 0 28.9-14.4 28.9-28.9zM233 723.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9-14.4-28.9-28.9-28.9z m96.2 0c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9H435c14.4 0 28.9-14.4 28.9-28.9s-14.4-28.9-28.9-28.9H329.2zM977.9 978.1c-14.8 0-26.9-11.6-27.6-26.4V950l-0.1-1.5v-0.4c0-0.7 0.1-1.4 0.1-1.9-10.8-71.7-72.8-124.3-147.8-125.2h-0.2c-0.4 0-1 0.1-1.7 0.1-0.8 0-1.4 0-1.9-0.1h-0.2c-73.5 1-134.9 52.2-147 122.1 0.3 1.5 0.4 2.9 0.5 4.4l0.2 1.7v0.5c0 15.4-12.5 27.9-27.9 27.9-11.9 0-22.1-7.5-26.1-18h-2.8l0.6-10.6c0-0.7 0.1-1.4 0.2-1.8 0.1-1.7 0.3-3.3 0.7-5.1 8.8-67.1 51-124.8 111.8-154.3-33.6-28-53-69.4-52.6-113.9 0-39.3 14.8-76.2 41.7-103.8 27.1-27.9 63.6-43.2 102.8-43.2 39.2 0 75.7 15.3 102.8 43.2 26.9 27.6 41.7 64.5 41.7 104 0.3 44.4-19 85.7-52.5 113.7 26.9 13 50.6 31.8 69.3 54.9 22.6 28 37.2 61.6 42.3 97.3 0.8 2.5 1.2 5.1 1.3 7.6l0.2 1.7v0.3c0.5 15.1-11.3 27.9-26.4 28.5h-1.4zM707 673.8c1.9 50.6 42.9 90.1 93.5 90.1 1.1 0 2.2 0 3.4-0.1 48.9-1.7 88.5-41.4 90.2-90.2v-0.6c-0.2-24.6-9.9-47.8-27.4-65.3-17.7-17.7-41.2-27.5-66.2-27.5v-10 10c-25 0-48.5 9.8-66.2 27.4-17.5 17.8-27.3 41.2-27.3 66.2z" fill="#E60012" ></path></symbol><symbol id="icon-zt-01-02" viewBox="0 0 1024 1024"><path d="M915.5 425.1h30.8v-45H725.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1zM528.5 534c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C124 96.4 90.3 268.2 82.5 313.2S70.1 521.1 70.1 521.1H43.7V567l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z" fill="#062F8C" ></path><path d="M43.8 601.6h33.5v305s45.8 31.7 154.2 0V607.7l30.9-2.7v-47.6H43.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1zM735.4 498.2C604.2 498.2 494 608.5 494 739.6 494 870.8 604.3 981 735.4 981c131.2 0 241.4-110.3 241.4-241.4S871.7 498.2 735.4 498.2z m0 419.9c-99.7 0-178.4-78.8-178.4-178.4s78.7-178.5 178.4-178.5S913.7 640 913.7 739.6s-78.6 178.5-178.3 178.5z" fill="#062F8C" ></path><path d="M803.6 661l-89.2 89.1-42-42c-10.6-10.6-31.5-10.6-42 0-10.6 10.6-10.6 31.5 0 42l68.2 68.2c10.6 10.6 31.5 10.6 42 0L850.8 708c10.6-10.6 10.6-31.5 0-42-15.7-15.6-36.7-15.6-47.2-5z" fill="#E60012" ></path></symbol><symbol id="icon-qt-04" viewBox="0 0 1024 1024"><path d="M715.6 754v-67.4c132.9-22.6 231.8-66.7 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 125.9-271 153.3z m0-204v-67.3c132.9-22.6 231.8-66.5 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 126-271 153.2z m222.2-276.4c-32 21.5-67.1 37.8-104.2 48.2-210.6 54.9-431.9 54.9-642.5 0-37.1-10.3-72.4-26.6-104.2-48.2-40.2-29.3-48.5-59.8-48.5-80.3s8.4-51 48.5-80.3c31.9-21.5 67.1-37.8 104.2-48.2 210.6-55 431.9-55 642.5 0C870.7 75.2 906 91.3 937.8 113c40.2 29.3 48.5 59.8 48.5 80.3s-8.4 51-48.5 80.3z m-39.7-105.7c-26-17-54.4-29.9-84.5-38.3-197.7-51-405-51-602.5 0-29.9 8.2-58.5 21.1-84.3 38.3-12 2.5-20.6 13-20.6 25.3s8.5 22.9 20.6 25.3c26 17 54.4 29.9 84.3 38.3 197.7 51 405 51 602.5 0 30.1-8.2 58.5-21.1 84.5-38.3 10-5.4 17.5-14.5 20.5-25.4-3.2-10.7-10.5-19.8-20.5-25.2z m-589 314.8V550C148.5 522.8 37.4 464.4 37.4 396.7c0.1-11.8 3.3-23.5 9.3-33.6 30 53 129.2 97.1 262.4 119.6z m0 203.8v67.3C148.5 726.7 37.4 668.3 37.4 600.5c0.1-11.8 3.3-23.5 9.3-33.6 30 53.1 129.2 97.2 262.4 119.6z m203 219.5c229.9 0 421.4-58.3 465.2-135.8 6 10.2 9.1 21.8 9.3 33.6 0 93.6-212.4 169.6-474.5 169.6-262 0-474.5-75.8-474.5-169.6 0.1-11.8 3.3-23.5 9.3-33.6C90.5 847.7 282.2 906 512.1 906z" fill="#062F8C" ></path><path d="M353.1 407c13-13 34.2-13.3 47.4-0.3l111.7 112 111.6-112c9.7-9.6 24.2-12.6 36.9-7.3 12.7 5.2 20.9 17.5 21.1 31.3-0.1 9.1-3.7 17.6-10 24.1l-77.8 78h53.8c18.8 0 33.9 15.3 33.9 33.9 0 18.8-15.3 33.9-33.9 33.9H546.2v66.8h101.7c18.8 0 33.9 15.3 33.9 33.9s-15.3 33.9-33.9 33.9H546.2V838c0 18.7-15.1 33.8-33.8 33.8s-33.8-15.1-33.8-33.8V735.3H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.7 15.3-33.9 33.9-33.9h101.7v-66.8H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.8 15.3-33.9 33.9-33.9h53.8l-77.9-78.1c-12.9-13.5-12.7-34.6 0.3-47.8z" fill="#E60012" ></path></symbol><symbol id="icon-zt-04-02" viewBox="0 0 1024 1024"><path d="M770.6 739.4c1.5 4 0.2 2.1 0 0zM185.1 178.8c0.2-0.2 0.4-0.4 0.5-0.6-0.1 0.3-0.3 0.6-0.6 0.8l-2.3 3.2c-6 8.4-11.1 17.4-15.5 26.6-0.8 1.6-1.5 3.3-2.3 5 0.1-0.1 0.1-0.3 0.1-0.5-0.8 2.6-1.8 5-2.9 7.5-1.6 4.6-3.1 9.4-4.4 14-1.6 5.5-2.8 11.1-3.9 16.7l-0.9 6.9-0.1 1c-0.2 1.1-0.3 2.2-0.4 3.3-1.1 11.2-1.3 22.4-0.6 33.6 0.2 3 0.5 6.2 0.8 9.2v0.3c0-0.3 0-0.3-0.2-0.7 0.3 1.1 0.3 2.2 0.5 3.3 0.8 5.6 1.9 11 3.2 16.3s2.8 10.6 4.5 15.8c0.8 2.7 1.7 5.1 2.7 7.8l1.1 2.8 0.3 0.6c4.3 9.5 9.3 18.8 14.9 27.6 1.6 2.2 3.1 4.6 4.8 6.8 0.9 1.1 1.7 2.1 2.5 3.2 1.5 1.8 3.1 3.6 4.6 5.3l10.2 11.8c32.4 38.4 42.8 90.8 27.3 138.6-3.6 11.2-8.6 21.9-15 31.9-6.6 9.5-14 18.4-21.9 26.6-2.1 2.4-4.1 4.6-6.1 7.1-0.6 0.6-1 1.3-1.5 1.9-0.1 0.3-0.3 0.5-0.5 0.7-2.8 3.9-5.4 7.8-7.8 11.8-2.8 4.8-5.6 9.7-8 14.6-1 2.2-2 4.5-3 6.5-0.1 0.1-0.2 0.3-0.2 0.5l-1.2 3c-3.9 10.1-6.9 20.6-9.1 31.2-0.6 2.9-1.1 5.9-1.6 8.9 0 0.3 0 0.7-0.1 1.1 0-0.6 0-0.7 0.1-1.6-0.1 1.1-0.3 2.2-0.4 3.3-0.6 5.6-1 11.1-1.2 16.7-0.2 5.6-0.1 11.5 0.2 17 0.1 2.9 0.3 5.7 0.6 8.5l0.3 3.3c0.1 1.1 0.3 2.2 0.4 3.3-0.2-0.9-0.4-1.8-0.4-2.8 0.3 5.6 1.4 11.1 3.1 16.4 1.2 5.1 2.6 10.2 4.2 15.3 0.9 2.8 1.9 5.7 2.9 8.5 0.5 1.4 1 2.5 1.5 3.9v0.2c1.6 4.5 3.7 8.9 6.2 12.9 2.8 5.3 5.7 10.5 9 15.5 1.3 1.9 2.7 4 4.1 5.9l1.3 1.7c0.2 0.3 0.4 0.5 0.6 0.7 3.9 4.8 7.9 9.4 11.8 13.8l77.7 90.2c8.7 9.3 8.7 23.7 0 32.9-14.1 9-32.2 9-46.5 0-0.8-1-1.7-1.9-2.5-2.9-27.2-31.5-54.3-63.1-81.5-94.6-26.4-30.3-43.7-67.4-49.8-107-7.7-48.7 0.4-98.6 23.2-142.4 5.7-10.5 12.4-20.4 19.8-29.7 6.5-8.4 14.1-15.5 20.7-23.6l0.8-1.3c0.6-0.8 1.1-1.7 1.7-2.7 1.4-2.2 2.7-4.5 4-6.7s2.4-4.8 3.5-7.1c0.4-1 0.8-2 1.3-2.9-2.9 5.4-0.5 1 0-0.5 1.9-5 3.4-10.3 4.5-15.6 0.6-2.1 1.1-4.3 1.4-6.5v-0.2c0.1-1.7 0.3-3.3 0.4-5 0.4-5.6 0.4-11.3 0-16.9-0.1-1.8-0.3-3.3-0.4-5v-0.6c-0.3-2.2-0.7-4.4-1.3-6.5-1.2-5.3-2.8-10.6-4.6-15.8-0.2-0.5-0.5-1-0.7-1.6 0.2 0.4 0.4 0.7 0.6 1.1-0.5-0.8-0.9-2.1-1.3-2.9-1.2-2.5-2.4-4.9-3.7-7.3-1.6-2.8-3.2-5.6-5-8.3-0.6-0.8-1.1-1.6-1.6-2.2 0-0.2 0 0 0 0-1.5-1.8-3-3.6-4.5-5.3-3.3-3.8-6.5-7.5-9.7-11.3-63.6-74.8-69.8-182.8-15.7-265.2 14.5-19.2 30.6-37.1 48.2-53.5l40.2-40.9c14.2-8.8 32.2-8.8 46.5 0 8.8 9.2 8.8 23.7 0 32.9l-3.4 3.5-48.6 49.3c-4.8 5-9.7 9.7-14.5 14.8-2.5 2.7-5 5.4-7.4 8.1-1 1.3-2.4 2.8-3.5 4.2m-20.7 35.6c-1 4.1-0.7 1.7 0 0z m-12.4 92c0.9 4.2 0.2 1.6 0 0z m0.4 385.2c-0.2 2.3-0.2 1.3 0 0z" fill="#E60012" ></path><path d="M687 101.3c-14 15.9-28.3 31.7-42.5 47.4L557 246.6c-33.6 37.6-67.2 75.3-100.9 112.8-27.9 31.1-55.9 62.4-83.7 93.5-11.6 12.9-23.3 26.1-34.9 39-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-16.1 28.3-31.7 42.5-47.6 29.2-32.5 58.4-65.3 87.6-97.8 33.6-37.6 67.2-75.3 100.9-112.9 27.9-31.1 55.8-62.2 83.7-93.5 11.6-12.9 23.3-26.1 34.9-38.9 9-8.8 23.5-8.8 32.5 0 8.7 9.2 8.7 23.6 0 32.8-0.4 0.3-0.5 0.6-0.7 0.9zM565.9 99c-10.6 12.1-21.7 24.2-32.6 36.4L466.7 210c-25.9 28.8-51.7 57.7-77.5 86.6-21.3 23.9-42.6 47.6-64 71.5-8.9 10-17.8 19.9-26.7 29.8-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9l0.5-0.5c10.6-12.3 21.7-24.2 32.6-36.5 22.2-24.8 44.4-49.7 66.6-74.5 25.9-29 51.7-57.9 77.5-86.8 21.3-23.7 42.7-47.6 64-71.5 8.9-10 17.8-19.9 26.7-29.8 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9l-0.5 0.7zM419.5 123.3l-94.8 105.4c-19.8 22-39.6 44.1-59.5 66.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.7 0-32.9 7.2-8 14.5-16.1 21.7-24.1l94.8-105.3 59.5-66.1c9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9l-21.7 24zM583.6 357.7l-89.5 100.7c-34.5 38.9-68.9 77.8-103.6 116.6-28.6 32.2-57.2 64.4-85.8 96.5-11.8 13.4-23.7 26.8-35.6 40.1-9.1 8.9-23.6 8.8-32.6-0.2-8.7-9.2-8.7-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14.3-16.4 29.1-32.6 43.6-48.9l89.6-100.7c34.6-38.7 69.1-77.6 103.6-116.4 28.6-32.2 57.2-64.4 85.8-96.5 11.8-13.4 23.7-26.8 35.6-40.1 9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9-0.2 0.3-0.4 0.5-0.6 0.7-14.3 16.4-29.1 32.6-43.6 48.9zM656.5 383.2c8.7 9.2 8.7 23.6 0 32.8-0.2 0.3-0.4 0.5-0.6 0.7-14.6 16.4-29.6 32.3-44.2 48.6l-91.3 100.1-105.3 115.2-87 95.4-36.4 39.8c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.3-0.2 0.5-0.5 0.6-0.7 14.6-16.3 29.6-32.2 44.2-48.4 30.4-33.3 60.8-66.6 91.3-100.1 35.1-38.6 70.1-76.9 105.2-115.4l87-95.5c12.1-13.2 24.3-26.5 36.4-39.8 9-8.8 23.5-8.8 32.6 0.2-0.1-0.1-0.1-0.1 0 0zM713.9 545.8c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.1-163.6 163.5-163.6 163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M778 437.5c1.2 1.3 2.4 3.2 3.7 4.5-0.9-0.6-1-0.2 1.2 1.4-0.1-0.2-0.1 0-0.1-0.2v-0.1l0.2 0.2c0.8 1.1 1.5 2.2 2.2 3.4 1.7 2.5 3.3 5.2 4.7 7.9 1.2 2.2 2.4 4.5 3.5 6.8 0.3 0.5 0.5 1.1 0.8 1.6 0.2 0.5 0.4 1 0.7 1.3 0 0.2 0.1 0.4 0.2 0.6 2.1 5.9 3.8 12 5.1 18.2 0.3 1.2 0.5 2.3 0.7 3.4 0.1 0.5 1.1 6.1 0.3 1.9l-0.2 2.2 0.3 3.5c0.5 6.4 0.4 12.9-0.1 19.4l-0.3 3.5c-0.5 2.6-0.9 5.3-1.4 7.9-0.1 0.6-0.3 1.2-0.4 1.7 20.2 6.2 39.5 14.7 57.4 25.2 0.3-0.8 0.5-1.5 0.8-2.3 16.1-49.9 5.4-104.5-28.4-144.5-3.3-3.9-6.7-7.7-10.2-11.6-1.5-1.9-3.3-3.8-4.8-5.6-1-1-1.7-2.1-2.6-3.2-0.3-0.5-0.6-1-1-1.3-1.5-1.9-2.9-4.2-4.1-6.1-6.1-9.5-11.5-19.4-16.1-29.7-0.4-1.1-0.8-2-1.2-3.1-1-2.3-1.7-4.8-2.6-7.3-1.8-5.9-3.5-11.5-5-17.5-1.2-5.5-2.4-10.9-3.3-16.5-0.2-1.3-0.4-2.6-0.5-3.9-0.4-3-0.6-6-0.8-8.9-0.8-11.8-0.6-23.6 0.7-35.4 0.1-1.5 0.3-3 0.5-4.4v-0.5c1.2-8.2 3-16.4 5.2-24.4 1.4-5.1 3-10.2 4.9-15.3 0.6-2.5 1.4-4.9 2.7-7.1-0.1 0.3-0.2 0.5-0.3 0.7 0.2-0.3 0.3-0.7 0.5-1 0.7-1.4 1.3-3.1 2.1-4.5 4.7-10 10.3-19.5 16.7-28.4 0.6-0.7 1.1-1.5 1.6-2.3 1.5-1.9 3-3.8 4.6-5.6 2.5-2.9 5.2-5.7 7.9-8.4 5-5.2 10.1-10.2 15.2-15.3 16.9-17.3 33.8-34.4 50.6-51.6l3.5-3.5c8.8-9-5-25.4-14.6-34.3-9.7-9-24.7-8.9-34.3 0.3-14 14.3-28 28.4-42 42.7-18.1 17-34.7 35.5-49.8 55.3-57 86-50.6 199.1 15.4 278.3 3.4 4 6.8 8 10.2 11.9z" fill="#E60012" ></path><path d="M672.5 470.1l-36.4 40.7c-7.3 8.1-14.5 16.3-21.8 24.4 25.8-10.7 53.6-17.5 82.7-19.8l9-10.2c0.2-0.3 0.4-0.5 0.5-0.8 9.2-9.6 9.2-24.7 0-34.3-9.4-9.3-24.6-9.3-34 0zM445.4 787.8c0-26.3 3.7-51.7 10.6-75.7-4 4.5-8.1 9-12.1 13.6l-90.8 101.4c-14.7 16.6-29.5 32.8-44.1 49.4-0.3 0.3-0.5 0.5-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l36.4-40.7c22.3-24.8 44.6-49.7 66.8-74.6 0-2.9-0.1-5.7-0.1-8.5zM406.2 691l109.9-120.5L611.4 466c15.3-17 31-33.6 46.2-50.7 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.6 0-34.2-9.5-9.4-24.6-9.4-34 0-12.6 13.8-25.3 27.7-38 41.5l-90.9 99.8c-36.6 40.2-73.3 80.2-109.9 120.6-31.8 34.9-63.6 69.7-95.3 104.5-15.3 16.9-31 33.5-46.2 50.5-0.2 0.3-0.4 0.6-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l38-41.6c30.3-33.2 60.6-66.5 90.9-99.7zM457.3 867.7c-13.6 15.2-27.1 30.4-40.7 45.6-9.5 10.5-18.9 21.1-28.4 31.6-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l55.7-62.2c-8.4-15.6-15.3-32.1-20.6-49.3z" fill="#062F8C" ></path><path d="M801.8 726.9c-8-12.8-4.1-29.7 8.7-37.7 12.8-8 29.7-4.1 37.7 8.7 8 12.8 4.1 29.7-8.7 37.7-5.3 3.3-11.6 4.7-17.9 3.9l-53.8 69.9c6.8 13.5 1.4 29.9-12.1 36.7-13.5 6.8-29.9 1.4-36.7-12.1-3.5-6.8-3.9-14.8-1.2-22l-37.6-46.3c-5.7 1.8-11.8 1.8-17.4-0.2l-35.5 43.9c6.8 13.5 1.3 29.9-12.2 36.7-13.5 6.8-29.9 1.3-36.7-12.2-6.8-13.5-1.3-29.9 12.2-36.7 5.6-2.8 12.1-3.6 18.2-2.3L646 749c-5.1-14.2 2.3-29.9 16.5-35s29.9 2.3 35 16.5c2.2 6.2 2.1 13-0.2 19.1l37.5 46.2c4.7-1.5 9.7-1.8 14.5-0.7l52.5-68.2z" fill="#E60012" ></path></symbol><symbol id="icon-zt-01-01" viewBox="0 0 1024 1024"><path d="M992 519c-15.8-23.4-42.4-37.4-73-37.4-22.2 0-46.6 7.4-65.6 18.2-10.6 6.4-25.4 18-44.6 32-4.2 3.2-10.6 7.4-16.8 12.8-7.6-29.8-36.3-57.6-82.8-59.8-9.6 0-29.6-1-53-3.2-59.4-4.2-150.6-9.6-208.8-9.6-14.8 0-27.6 0-37 1-64.8 4.2-141 61.8-180.2 96-19 17-27.6 42.6-21.3 67.2 3.2 12.8 10.6 24.6 20.2 33.2l124 110.8c14.8 12.8 32.8 20.2 53 20.2h6.4c10.6-1.3 21.3-4.2 30.6-9.6 15.8-8.6 31.8-14.8 41.4-17h10.6c17 0 43.4 1 71 3.2 34.2 2.4 68.4 3.8 102.8 4.2 20 0 36-1.3 47.6-2 30.8-4.4 86.8-26.8 242.6-157.8l1-1c29.7-24.6 55.1-66.2 31.9-101.4z m-62.6 57.6C897.6 604.2 762 718.4 709 727.1c-13.4 1.4-26.8 2.2-40.2 2.2-55.2 0-133.5-6.4-173.8-6.4-9.6 0-15.8 0-20.2 1.3-21.3 4.2-45.6 17-56.1 22.4-3.2 2-6.8 3.2-10.6 3.2h-2c-7.2 0.4-14.2-2.4-19.2-7.6l-124-111c-2.2-2.2-4.2-4.4-4.2-7.6-1.3-5.2 0-11.8 5.2-15 23.2-20.2 96.4-80 150.4-84.2 7.4-1.3 19-1.3 32.8-1.3 80.4 0 225.6 9.6 261.6 10.6 42.4 1 47.6 38.4 10.6 42.6-41.1 4.4-165.4 11.8-174.8 13.8-10.6 3.2-35 28.8 29.8 35.2 44.4 4.2 102.8 8.6 140.8 8.6 10.6 0 20.2 0 26.6-1.3 29.6-4.2 113.4-75.6 141-92.8 9.6-6.4 25.4-11.8 39.2-11.8 11.6 0 23.4 3.2 29.6 13.8 3.5 4.8-7.1 23.1-22.1 34.8zM231.2 726.9c-19.4-18.2-39.2-36-59.4-53.4-19.4-19-50-20.2-71-3.2-10.7 8.5-48.8 38.3-58.5 44.7-11.6 8.6-18 19.2-19.2 32-2 21.4 14 39.6 23.4 49.2L72 819.6c32.8 31 94.2 88.4 104.8 99.2 12.8 12.8 27.6 19.2 42.4 19.2 12.8 0 24.4-4.2 36-13.8l5.2-4.2c12.8-10.6 35-29.8 48.8-39.4 18.2-12.6 22.4-27.6 23.4-38.4 0.6-15-5.6-29.6-17-39.4-7-6.6-46.2-41.8-84.4-75.9z m-3 153.5l-5.4 4.2c-2.2 2-4.2 3.2-9.6-2.2-11.6-11.8-71-67.2-106-100.2-12.8-11.6-23.4-21.3-25.4-23.4-2.2-2.2-4.2-3.2-5.4-5.4 17-11.8 47.6-36.3 57.4-42.6 2-1.3 3.2-1.3 5.2 1.3 5.2 5.4 30.6 27.6 59.4 53.2 32.8 29.8 70.8 64 81.6 73.6-16 11.7-38.2 29.7-51.8 41.5z" fill="#062F8C" ></path><path d="M719.5 242.3v18.2H604c-5.7 0-10.3-4.6-10.3-10.3v-24.4c0-96.5-78.4-175-175-175h-69V29.5h-115v214.8h115v-18.2h68.5v34.8c0 96.4 78.5 175 175 175h126.4V457h111.1V242.3H719.5z m79.8 183.5h-48.4v-21.2H593.1c-79.2 0-143.6-64.4-143.6-143.6v-38.3c0-15.3-12.5-27.8-27.8-27.8H318.4V213H266V60.8h52.4V82h100.3c79.3 0 143.6 64.4 143.6 143.6V250c0 22.9 18.8 41.6 41.7 41.6h146.9v-18.1h48.4v152.3z" fill="#E60012" ></path></symbol><symbol id="icon-zt-03-01" viewBox="0 0 1024 1024"><path d="M972.7 518.7c-15.2-22.5-40.7-35.9-70.1-35.9-21.3 0-44.7 7.1-63 17.5-10.2 6.1-24.4 17.3-42.8 30.7-4 3.1-10.2 7.1-16.1 12.3-7.3-28.6-34.8-55.3-79.5-57.4-9.2 0-28.4-1-50.9-3.1-57-4-144.6-9.2-200.4-9.2-14.2 0-26.5 0-35.5 1-62.2 4-135.4 59.3-173 92.2-18.2 16.3-26.5 40.9-20.4 64.5 3.1 12.3 10.2 23.6 19.4 31.9l119 106.4c14.2 12.3 31.5 19.4 50.9 19.4h6.1c10.2-1.2 20.4-4 29.4-9.2 15.2-8.3 30.5-14.2 39.7-16.3h10.2c16.3 0 41.7 1 68.2 3.1 32.8 2.3 65.7 3.6 98.7 4 19.2 0 34.6-1.2 45.7-1.9 29.6-4.2 83.3-25.7 232.9-151.5l1-1c28.4-23.8 52.8-63.7 30.5-97.5zM912.6 574C882.1 600.5 752 710.1 701.1 718.4c-12.9 1.3-25.7 2.1-38.6 2.1-53 0-128.2-6.1-166.8-6.1-9.2 0-15.2 0-19.4 1.2-20.4 4-43.8 16.3-53.9 21.5-3.1 1.9-6.5 3.1-10.2 3.1h-1.9c-6.9 0.4-13.6-2.3-18.4-7.3l-119-106.6c-2.1-2.1-4-4.2-4-7.3-1.2-5 0-11.3 5-14.4 22.3-19.4 92.5-76.8 144.4-80.8 7.1-1.2 18.2-1.2 31.5-1.2 77.2 0 216.6 9.2 251.1 10.2 40.7 1 45.7 36.9 10.2 40.9-39.5 4.2-158.8 11.3-167.8 13.2-10.2 3.1-33.6 27.6 28.6 33.8 42.6 4 98.7 8.3 135.2 8.3 10.2 0 19.4 0 25.5-1.2 28.4-4 108.9-72.6 135.4-89.1 9.2-6.1 24.4-11.3 37.6-11.3 11.1 0 22.5 3.1 28.4 13.2 3.2 4.6-7 22.1-21.4 33.4zM242.4 718.2c-18.6-17.5-37.6-34.6-57-51.3-18.6-18.2-48-19.4-68.2-3.1-10.2 8.3-46.8 36.9-56.1 43-11.1 8.3-17.3 18.4-18.4 30.7-1.9 20.5 13.4 38 22.5 47.2l24.4 22.5c31.5 29.8 90.4 84.9 100.6 95.2 12.3 12.3 26.5 18.4 40.7 18.4 12.3 0 23.4-4 34.6-13.2l5-4c12.3-10.2 33.6-28.6 46.8-37.8 17.5-12.1 21.5-26.5 22.5-36.9 0.6-14.4-5.4-28.4-16.3-37.8-6.8-6.3-44.4-40.1-81.1-72.9z m-2.9 147.4l-5.2 4c-2.1 1.9-4 3.1-9.2-2.1-11.1-11.3-68.2-64.5-101.8-96.2-12.3-11.1-22.5-20.4-24.4-22.5-2.1-2.1-4-3.1-5.2-5.2 16.3-11.3 45.7-34.8 55.1-40.9 1.9-1.2 3.1-1.2 5 1.2 5 5.2 29.4 26.5 57 51.1 31.5 28.6 68 61.4 78.3 70.7-15.2 11.3-36.5 28.6-49.6 39.9z" fill="#062F8C" ></path><path d="M766.1 103.1H334c-35.5 0-64.1 28.6-64.1 64.5v256.9c0 13.2 11.3 24.5 24.5 24.5 13.4-0.2 24.2-11.1 24.4-24.6V167.6c0-8.3 7.1-15.4 15.2-15.4h115v148.4c0 32.6 26.3 59.1 58.9 59.3h84.5c32.6-0.2 58.9-26.7 58.9-59.3V152.2h113.8c8.1 0 15.4 7.1 15.4 15.4v287.6c0 13.2 11.1 24.6 24.4 24.6 13.6-0.2 24.8-10.9 25.3-24.6V167.6c0-35.9-28.4-64.5-64.1-64.5zM592.4 310.8h-84.5c-2.7 0-5.4-1.2-7.3-3.1-1.9-1.9-2.9-4.4-2.9-7.3V152.2h104.8l0.1 148.4c0 5.6-4.6 10.2-10.2 10.2z" fill="#E60012" ></path></symbol><symbol id="icon-zt-05-03" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M521.7 916.1H184.9c-38.5 0-67.4-28.9-67.4-67.4V175.3c0-38.5 28.9-67.4 67.4-67.4h52.9c0 9.7-4.8 19.2-4.8 28.9 0 48.1 38.5 86.6 86.6 86.6h221.3c48.1 0 86.6-38.5 86.6-86.6 0-9.7 0-19.2-4.8-28.9h52.9c38.5 0 67.4 28.9 67.4 67.4v288.6c0 14.4 14.4 28.9 28.9 28.9s28.9-14.4 28.9-28.9V175.3c-0.2-67.4-57.9-125.1-125.3-125.1H189.7c-67.3 0-125.1 57.7-125.1 125.1v673.4c0 67.4 57.7 125.1 125.1 125.1h336.8c14.4 0 28.9-14.4 28.9-28.9s-14.5-28.8-33.7-28.8z m19.2-808.2c14.4 0 28.9 9.7 28.9 28.9 0 14.4-14.4 28.9-28.9 28.9H319.6c-14.4-4.8-28.9-14.4-28.9-28.9s9.7-28.9 28.9-28.9h221.3z" fill="#062F8C" ></path><path d="M233 319.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.5-14.4-28.9-28.9-28.9z m375.2 28.8c0-14.4-14.4-28.9-28.9-28.9H329.1c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h250.2c14.5 0 28.9-14.4 28.9-28.9zM233 521.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.4-14.4-28.9-28.9-28.9z m327.1 28.8c0-14.4-14.4-28.9-28.9-28.9h-202c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h202c14.5 0 28.9-14.4 28.9-28.9zM233 723.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9-14.4-28.9-28.9-28.9z m96.2 0c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9H435c14.4 0 28.9-14.4 28.9-28.9s-14.4-28.9-28.9-28.9H329.2z m471.4-43.2l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6z" fill="#E60012" ></path></symbol><symbol id="icon-zt-04-03" viewBox="0 0 1024 1024"><path d="M771 544.3c-120.7 0-222 101.4-222 222 0 120.7 101.4 222 222 222 120.7 0 222-101.4 222-222s-96.6-222-222-222z m0 386.2c-91.7 0-164-72.4-164-164s72.3-164.1 164-164.1 164 72.4 164 164-72.3 164.1-164 164.1z" fill="#062F8C" ></path><path d="M859.6 726.9c-8-12.8-4.1-29.7 8.7-37.7 12.8-8 29.7-4.1 37.7 8.7 8 12.8 4.1 29.7-8.7 37.7-5.3 3.3-11.6 4.7-17.9 3.9l-53.8 69.9c6.8 13.5 1.4 29.9-12.1 36.7-13.5 6.8-29.9 1.4-36.7-12.1-3.5-6.8-3.9-14.8-1.2-22L738 765.8c-5.7 1.8-11.8 1.8-17.4-0.2l-35.5 43.9c6.8 13.5 1.3 29.9-12.2 36.7-13.5 6.8-29.9 1.3-36.7-12.2-6.8-13.5-1.3-29.9 12.2-36.7 5.6-2.8 12.1-3.6 18.2-2.3l37.2-46.1c-5.1-14.2 2.3-29.9 16.5-35s29.9 2.3 35 16.5c2.2 6.2 2.1 13-0.2 19.1l37.5 46.2c4.7-1.5 9.7-1.8 14.5-0.7 0 0.1 52.5-68.1 52.5-68.1z" fill="#E60012" ></path><path d="M846 362.4c0.1 0 0.1 0 0 0zM503.9 587.5c-12.8 0-18.5-4.2-31.3-14.5-15-12.1-35.6-28.7-70-28.7-35.3 0-57.5 15.3-73.7 26.6-13.6 9.5-21.8 15.2-38.3 15.2-16.6 0-23.4-5.1-36-14.4-15.6-11.5-37.1-27.3-74.2-27.3C117.1 544.3 80 598 76 604.1c-10.9 17.3-5.7 40.1 11.6 51 16.6 10.4 38.4 6.1 49.8-9.8 0.2-0.3 18.9-26.8 43-26.8 13 0 18.5 4.1 30.6 13 16.4 12.1 38.9 28.7 79.6 28.7 39.4 0 62.9-16.3 80-28.2 13.6-9.4 20-13.5 32-13.5 7.8 0 11.5 2.3 24 12.4 14.5 11.7 36 29 71.9 30.6 17.9-44.3 46.7-83.1 83.1-112.9-22.1 6-37.1 17-49 25.8-13.3 9.8-18.3 13.1-28.7 13.1zM846 362.4c-42.4 0-65.1 16.7-81.6 29-12.8 9.4-19.2 14.1-36.3 14.1-18.6 0-27.2-6.2-41.6-16.4-15.7-11.3-37.3-26.8-71.2-26.8-42 0-65.7 17.4-82.9 30.1-13.1 9.6-18.2 13-28.6 13-12.8 0-18.5-4.2-31.3-14.5-15-12.1-35.6-28.6-70-28.6-35.3 0-57.5 15.3-73.7 26.6-13.6 9.5-21.8 15.2-38.3 15.2-16.6 0-23.4-5.1-36-14.4-15.6-11.5-37.1-27.3-74.2-27.3C117.1 362.4 80 416 76 422.2c-11.2 17.1-6.6 40 10.4 51.4 16.9 11.2 39.7 6.6 50.9-10.3 0.1-0.1 0.1-0.2 0.2-0.2 0.2-0.2 18.9-26.4 42.8-26.4 13 0 18.5 4.1 30.6 13 16.4 12.1 38.9 28.7 79.6 28.7 39.4 0 62.9-16.3 80-28.2 13.6-9.4 20-13.5 32-13.5 7.8 0 11.5 2.3 24 12.4 15.2 12.2 38.2 30.7 77.4 30.7 35 0 56.4-15.7 72.1-27.3 13.4-9.9 21.4-15.8 39.4-15.8 10 0 15.7 3.8 28.6 13 17.7 12.7 42.1 30.1 84.2 30.1 41.3 0 63.6-16.5 79.9-28.5 12.7-9.4 19.7-14.6 38-14.6 22.7 0 40.2 25.8 40.2 25.8 10.7 17.2 33.3 22.5 50.5 11.8 0.1-0.1 0.2-0.1 0.3-0.2 17.3-11 22.4-33.8 11.6-51.2-4-6.3-39.7-60.5-102.7-60.5zM477.9 767.1c0-2.6 0-5.3 0.1-7.9-1.7-1.3-3.5-2.7-5.5-4.3-15-12.1-35.6-28.7-70-28.7-35.3 0-57.5 15.4-73.7 26.6-13.6 9.5-21.8 15.1-38.3 15.1-16.6 0-23.4-5.1-36-14.4-15.6-11.5-37.1-27.4-74.2-27.4-63.2 0.2-100.3 53.9-104.3 60-11.2 17.1-6.6 40.1 10.4 51.4 16.9 11.2 39.7 6.6 50.9-10.3 0.1-0.1 0.1-0.2 0.2-0.2 0.2-0.3 18.9-26.4 42.8-26.4 13 0 18.5 4 30.6 13 16.4 12.2 38.9 28.7 79.6 28.7 39.4 0 62.9-16.3 80-28.2 13.6-9.4 20-13.5 32-13.5 7.8 0 11.5 2.3 24 12.4 13 10.5 31.8 25.6 61.6 29.7-6.6-24.1-10.2-49.4-10.2-75.6zM86.1 291.5c16.9 11.4 39.9 6.8 51.3-10.1 0.2-0.3 18.9-26.8 43-26.8 13 0 18.5 4 30.6 13 16.4 12.2 38.9 28.7 79.6 28.7 39.4 0 62.9-16.3 80-28.2 13.6-9.4 20-13.5 32-13.5 7.8 0 11.5 2.3 24 12.4 15.2 12.2 38.2 30.8 77.4 30.8 35 0 56.4-15.8 72.1-27.3 13.4-9.9 21.4-15.8 39.4-15.8 10 0 15.6 3.8 28.5 13 17.8 12.7 42.1 30.2 84.2 30.2 41.3 0 63.7-16.5 79.9-28.6 12.8-9.4 19.8-14.6 38-14.6 22.7 0 40.2 25.8 40.2 25.8 10.7 17.2 33.3 22.5 50.5 11.8 0.1-0.1 0.2-0.1 0.3-0.2 17.2-11 22.4-33.8 11.6-51.2-3.9-6.2-39.6-60.5-102.6-60.5-42.4 0-65 16.8-81.6 29-12.8 9.4-19.2 14.1-36.3 14.1-18.6 0-27.2-6.2-41.5-16.4-15.8-11.3-37.4-26.8-71.3-26.8-42 0-65.7 17.4-82.9 30.2-13.1 9.7-18.2 13-28.6 13-12.8 0-18.5-4.2-31.4-14.5-15-12.1-35.5-28.7-70-28.7-35.4 0-57.5 15.3-73.8 26.6-13.6 9.5-21.8 15.1-38.2 15.1-16.6 0-23.5-5.1-36-14.4-15.7-11.5-37.1-27.4-74.2-27.4-63.2 0.2-100.3 53.8-104.3 60-11.4 16.9-6.9 39.9 10.1 51.3z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-02-03" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M800.6 680.4l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM574.1 141.2c6.6-6.2 10.3-14.9 10.1-23.9 0-18.4-15.9-33.5-35.5-33.5-9.4 0-18.8 3.4-25.4 9.6-6.6 6.2-10.3 14.9-10.1 23.9 0 18.5 15.9 33.5 35.5 33.5 9.4-0.1 18.4-3.5 25.4-9.6z" fill="#E60012" ></path><path d="M477.2 199.2c0-0.4 0.3-0.7 0.7-0.7 38.4 36.9 73.9 71.1 73.9 71.1C670 153.4 633.1 37.3 633.1 37.3c-118.9-44.4-258.8 69-258.8 69 7.3 2.8 41.3 33.5 78.3 67.6L433 192.4c-43.5-39.6-85.6-66.3-95.7-56-10.9 10.9 38.4 49.9 72.5 77.9l-22.5 21.9c-33.3-29.4-66.7-47.8-76.8-37.6-10.1 10.9 26.1 38.3 53.6 59.4l-22.5 21.2c-23.2-19.2-46.4-30.8-54.4-21.9-8.7 8.9 15.2 26.7 34.8 41l-21 20.5c-100.7 8.2-93.5 17.1-86.2 25.3 8 8.2 81.9 0.7 84.8 2 2.9 1.4 1.4 89.5 16.7 84.7 15.2-4.1 21-82 18.1-87.5-0.7-1.4 5.1-8.2 15.2-18.5 11.6 16.4 23.9 37.6 35.5 28 0 0 13-9.6-15.2-44.4l-2.2-2c7.2-7.5 15.2-15.7 23.9-23.9 18.8 21.9 39.9 61.5 55.8 49.2 0 0 16-10.9-24.6-58.7-3.2-3.8-6.6-7.5-10.2-11 8-8.2 16.7-16.4 23.9-23.9 25.4 25.3 58.7 82 76.1 69 0 0 15.9-10.3-37-70.4-5.8-6.2-11.6-13-17.4-19.1 11.8-10.9 19-18.4 19-18.4z m-52.4-88.7S522.6 31.9 605.3 62c0 0 26.1 81.3-56.5 161.9 0 0-112.4-109.3-124-113.4z" fill="#E60012" ></path><path d="M618.8 252.7c-12.5 13.9-24.9 27.9-37.2 41.9-29.9 33.6-59.9 67.1-89.7 100.8-36.1 40.6-72.1 81.1-108.3 121.6L290 622.3c-15.2 17.1-30.6 34-45.6 51.1-0.3 0.3-0.5 0.5-0.7 0.8-9.1 9.6-9.1 24.7 0 34.3 9.4 9.4 24.6 9.5 34 0.2 12.5-13.9 24.9-27.9 37.2-41.9 29.9-33.6 59.9-67.1 89.7-100.8 36.2-40.6 72.1-81.1 108.2-121.8L606.4 339c15.2-17 30.6-34 45.7-51.1 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.7 0-34.3-9.4-9.4-24.6-9.4-34-0.1zM814.6 189.3c-0.3 0.7-0.6 1.3-0.9 2.1l0.9-2.1z" fill="#062F8C" ></path><path d="M802.2 422.9c1.2 1.3 2.4 3.2 3.7 4.5-0.9-0.6-1-0.2 1.2 1.4-0.1-0.2-0.1 0-0.1-0.2v-0.1l0.2 0.2c0.8 1.1 1.5 2.2 2.2 3.4 1.7 2.5 3.3 5.2 4.7 7.9 1.2 2.2 2.4 4.5 3.5 6.8 0.3 0.5 0.5 1.1 0.8 1.6 0.2 0.5 0.4 1 0.7 1.3 0 0.2 0.1 0.4 0.2 0.6 2.1 5.9 3.8 12 5.1 18.2 0.3 1.2 0.5 2.3 0.7 3.4 0.1 0.5 1.1 6.1 0.3 1.9l-0.2 2.2 0.3 3.5c0.5 6.4 0.4 12.9-0.1 19.4l-0.3 3.5c-0.5 2.6-0.9 5.3-1.4 7.9-0.1 0.6-0.3 1.2-0.4 1.7 20.2 6.2 39.5 14.7 57.4 25.2 0.3-0.8 0.5-1.5 0.8-2.3 16.1-49.9 5.4-104.5-28.4-144.5-3.3-3.9-6.7-7.7-10.2-11.6-1.5-1.9-3.3-3.8-4.8-5.6-1-1-1.7-2.1-2.6-3.2-0.3-0.5-0.6-1-1-1.3-1.5-1.9-2.9-4.2-4.1-6.1-6.1-9.5-11.5-19.4-16.1-29.7-0.4-1.1-0.8-2-1.2-3.1-1-2.3-1.7-4.8-2.6-7.3-1.8-5.9-3.5-11.5-5-17.5-1.2-5.5-2.4-10.9-3.3-16.5-0.2-1.3-0.4-2.6-0.5-3.9-0.4-3-0.6-6-0.8-8.9-0.8-11.8-0.6-23.6 0.7-35.4 0.1-1.5 0.3-3 0.5-4.4v-0.5c1.2-8.2 3-16.4 5.2-24.4 1.4-5.1 3-10.2 4.9-15.3 0.6-2.5 1.4-4.9 2.7-7.1-0.1 0.3-0.2 0.5-0.3 0.7 0.2-0.3 0.3-0.7 0.5-1 0.7-1.4 1.3-3.1 2.1-4.5 4.7-10 10.3-19.5 16.7-28.4 0.6-0.7 1.1-1.5 1.6-2.3 1.5-1.9 3-3.8 4.6-5.6 2.5-2.9 5.2-5.7 7.9-8.4 5-5.2 10.1-10.2 15.2-15.3 16.9-17.3 33.8-34.4 50.6-51.6l3.5-3.5c8.8-9-5-25.4-14.6-34.3-9.7-9-24.7-8.9-34.3 0.3-14 14.3-28 28.4-42 42.7-18.1 17-34.7 35.5-49.8 55.3-57 86-50.6 199.1 15.4 278.3 3.4 4 6.8 8 10.2 11.9zM696.7 455.5l-36.4 40.7c-7.3 8.1-14.5 16.3-21.8 24.4 25.8-10.7 53.6-17.5 82.7-19.8l9-10.2c0.2-0.3 0.4-0.5 0.5-0.8 9.2-9.6 9.2-24.7 0-34.3-9.4-9.3-24.6-9.3-34 0zM202.6 836.4c-4-4.6-8.2-9.4-12.3-14.4-0.2-0.3-0.4-0.5-0.6-0.8l-1.3-1.7c-1.5-1.9-3-4.1-4.3-6.1-3.5-5.3-6.5-10.6-9.4-16.2-2.6-4.2-4.8-8.8-6.4-13.5v-0.2c-0.5-1.5-1.1-2.7-1.5-4.1-1.1-3-2.1-6-3.1-8.9-1.7-5.4-3.2-10.6-4.4-16-1.7-5.2-2.8-10.7-3.2-16.2 0.1 0.6 0.2 1.2 0.3 1.9-0.1-1.2-0.3-2.3-0.4-3.5l-0.3-3.5c-0.3-3-0.5-5.9-0.6-8.9-0.3-5.8-0.4-11.9-0.2-17.7 0.2-5.9 0.7-11.6 1.2-17.5 0.1-1.2 0.3-2.3 0.4-3.5-0.1 0.9-0.1 1.1-0.1 1.6 0.1-0.4 0.1-0.9 0.1-1.2 0.5-3.2 1-6.2 1.6-9.3 2.3-11.1 5.5-22.1 9.5-32.6l1.2-3.2c0-0.2 0.1-0.4 0.2-0.5 1.1-2.1 2.1-4.5 3.2-6.8 2.5-5.1 5.4-10.3 8.3-15.3 2.5-4.2 5.3-8.2 8.2-12.4 0.2-0.3 0.4-0.5 0.5-0.8 0.5-0.7 1-1.3 1.5-2 2-2.6 4.1-4.9 6.3-7.4 8.3-8.6 16-17.9 22.9-27.8 6.6-10.5 11.9-21.7 15.6-33.4 16.2-50 5.4-104.7-28.5-144.8l-10.6-12.3c-1.5-1.8-3.3-3.6-4.8-5.6-0.8-1.2-1.6-2.2-2.6-3.4-1.7-2.3-3.4-4.8-5-7.1-5.9-9.2-11-18.9-15.5-28.9l-0.3-0.6-1.2-2.9c-1.1-2.8-1.9-5.4-2.8-8.2-1.8-5.5-3.4-10.9-4.7-16.5s-2.5-11.2-3.4-17.1c-0.2-1.2-0.2-2.3-0.5-3.5 0.2 0.5 0.2 0.5 0.2 0.8v-0.3c-0.4-3.1-0.7-6.4-0.9-9.6-0.7-11.7-0.5-23.4 0.7-35.1 0.1-1.2 0.2-2.3 0.4-3.5l0.1-1.1 1-7.2c1.2-5.9 2.5-11.7 4.1-17.5 1.3-4.8 3-9.8 4.6-14.6 1.2-2.6 2.2-5.2 3.1-7.9 0 0.2 0 0.4-0.1 0.5 0.9-1.8 1.5-3.6 2.4-5.3 4.6-9.7 10-19 16.2-27.8l2.4-3.4c0.3-0.2 0.5-0.6 0.6-0.9-0.1 0.2-0.3 0.4-0.5 0.6l0.5-0.6c1.2-1.5 2.6-3.1 3.6-4.4 2.5-2.8 5.2-5.7 7.8-8.4 5-5.3 10.2-10.2 15.2-15.4L267.7 71l3.5-3.6c9.2-9.6 9.2-24.7 0-34.3-14.9-9.2-33.7-9.2-48.5 0l-42 42.8c-18.4 17.2-35.2 35.9-50.4 55.9-56.5 86-50 198.9 16.5 277.6 3.4 3.9 6.7 7.9 10.2 11.8 1.5 1.8 3.2 3.6 4.7 5.6 0.5 0.7 1.1 1.4 1.6 2.3 1.8 2.8 3.5 5.7 5.2 8.6 1.3 2.5 2.6 5 3.8 7.6 0.4 0.9 0.9 2.2 1.3 3.1-0.3-0.4-0.5-0.8-0.7-1.2l0.8 1.6c1.9 5.4 3.5 10.9 4.8 16.5 0.6 2.2 1.1 4.5 1.3 6.8v0.6c0.1 1.8 0.3 3.4 0.4 5.3 0.4 5.9 0.4 11.8 0 17.6-0.1 1.8-0.3 3.5-0.4 5.3v0.2c-0.3 2.3-0.8 4.6-1.4 6.8-1.2 5.6-2.7 11-4.7 16.3-0.5 1.5-3.1 6.1 0 0.5-0.5 1-1 2-1.3 3.1-1.2 2.4-2.3 5.1-3.6 7.4-1.4 2.3-2.8 4.7-4.2 7-0.7 1.1-1.2 1.9-1.8 2.8l-0.9 1.3c-6.9 8.4-14.9 15.9-21.7 24.6-7.8 9.7-14.8 20-20.7 31-23.9 45.8-32.3 97.8-24.3 148.8 6.3 41.4 24.4 80.2 52 111.8 28.4 33 56.8 66 85.2 98.9 0.8 1.1 1.7 2 2.6 3.1 14.9 9.4 33.8 9.4 48.5 0 9.1-9.6 9.1-24.6 0-34.3l-80.9-93.8zM469.6 773.2c0-26.3 3.7-51.7 10.6-75.7-4 4.5-8.1 9-12.1 13.6l-90.8 101.4c-14.7 16.6-29.5 32.8-44.1 49.4-0.3 0.3-0.5 0.5-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l36.4-40.7c22.3-24.8 44.6-49.7 66.8-74.6 0-2.9-0.1-5.7-0.1-8.5z" fill="#062F8C" ></path><path d="M430.4 676.4l109.9-120.5 95.3-104.5c15.3-17 31-33.6 46.2-50.7 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.6 0-34.2-9.5-9.4-24.6-9.4-34 0-12.6 13.8-25.3 27.7-38 41.5L519.6 507c-36.6 40.2-73.3 80.2-109.9 120.6-31.8 34.9-63.6 69.7-95.3 104.5-15.3 16.9-31 33.5-46.2 50.5-0.2 0.3-0.4 0.6-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l38-41.6c30.3-33.2 60.6-66.5 90.9-99.7zM481.5 853.1c-13.6 15.2-27.1 30.4-40.7 45.6-9.5 10.5-18.9 21.1-28.4 31.6-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l55.7-62.2c-8.4-15.6-15.3-32.1-20.6-49.3zM156.4 687.3c-0.2 1.4-0.2 2.4 0 0zM156 284.9c0.2 1.6 1 4.4 0 0zM169 188.8c-0.8 1.7-1.1 4.3 0 0z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-06-05" viewBox="0 0 1024 1024"><path d="M288.9 512c-54.5 0-99.2 44.6-99.2 99.2s44.6 99.2 99.2 99.2 99.2-44.6 99.2-99.2-44.7-99.2-99.2-99.2z m0 148.7c-27.3 0-49.6-22.3-49.6-49.6s22.3-49.6 49.6-49.6 49.6 22.3 49.6 49.6-22.3 49.6-49.6 49.6z" fill="#E60012" ></path><path d="M859.1 65.8H164.9c-54.5 0-99.2 44.6-99.2 99.2v694.1c0 54.5 44.6 99.2 99.2 99.2H859c54.5 0 99.2-44.6 99.2-99.2V164.9c0-54.5-44.6-99.1-99.1-99.1z m49.5 793.3c0 27.3-22.3 49.6-49.6 49.6H164.9c-27.3 0-49.6-22.3-49.6-49.6V164.9c0-27.3 22.3-49.6 49.6-49.6H859c27.3 0 49.6 22.3 49.6 49.6v694.2z" fill="#062F8C" ></path><path d="M512 264.1c-54.5 0-99.2 44.6-99.2 99.2s44.6 99.2 99.2 99.2 99.2-44.6 99.2-99.2-44.7-99.2-99.2-99.2z m0 148.7c-27.3 0-49.6-22.3-49.6-49.6s22.3-49.6 49.6-49.6 49.6 22.3 49.6 49.6-22.3 49.6-49.6 49.6z m223.1 198.4c-54.5 0-99.2 44.6-99.2 99.2s44.6 99.2 99.2 99.2 99.2-44.6 99.2-99.2-44.7-99.2-99.2-99.2z m0 148.7c-27.3 0-49.6-22.3-49.6-49.6s22.3-49.6 49.6-49.6 49.6 22.3 49.6 49.6-22.3 49.6-49.6 49.6z" fill="#E60012" ></path><path d="M512 264.1c7.4 0 17.4 2.5 24.8 2.5v-76.8c0-14.9-9.9-24.8-24.8-24.8s-24.8 9.9-24.8 24.8v76.8c7.4 0 17.4-2.5 24.8-2.5z m0 198.3c-7.4 0-17.4-2.5-24.8-2.5v374.3c0 14.9 9.9 24.8 24.8 24.8s24.8-9.9 24.8-24.8V459.9c-7.4 0-17.4 2.5-24.8 2.5z m223.1 148.8c7.4 0 17.4 2.5 24.8 2.5v-424c0-14.9-9.9-24.8-24.8-24.8s-24.8 9.9-24.8 24.8v423.9c7.5 0 17.4-2.4 24.8-2.4z m0 198.3c-7.4 0-17.4-2.5-24.8-2.5v27.3c0 14.9 9.9 24.8 24.8 24.8s24.8-9.9 24.8-24.8V807c-7.4 0-17.4 2.5-24.8 2.5zM288.9 512c7.4 0 17.4 2.5 24.8 2.5V189.7c0-14.9-9.9-24.8-24.8-24.8s-24.8 9.9-24.8 24.8v324.7c7.4 0.1 17.4-2.4 24.8-2.4z m0 198.3c-7.4 0-17.4-2.5-24.8-2.5v126.4c0 14.9 9.9 24.8 24.8 24.8s24.8-9.9 24.8-24.8V707.8c-7.5 0-17.4 2.5-24.8 2.5z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-02-04" viewBox="0 0 1024 1024"><path d="M139.8 317.4h225.4c4.2 0.1 7.7-3.2 7.8-7.4V65.3c0-2-0.8-3.9-2.2-5.2-1.4-1.4-3.4-2.2-5.4-2.2H327c-2.8-0.1-5.3 1.4-6.8 3.7l-31.8 53.8c-0.7 1.1-1 2.3-1 3.6v109.4c0 4.1-3.4 7.5-7.6 7.4h-140c-4.2-0.1-7.7 3.2-7.8 7.4V310c0.2 4.1 3.6 7.4 7.8 7.4z m818.7 389.2H65.6c-4.6 0.5-8.1 4.6-7.7 9.2V753c-0.4 4.6 3 8.7 7.7 9.2h892.8c4.7-0.5 8.1-4.6 7.6-9.2v-37.2c0.5-4.6-2.9-8.7-7.5-9.2z m-92.6 92.7H436.2c-2.2 0.1-4.2 1.2-5.5 2.9-1.4 1.8-2.2 4.1-2 6.4v55.6c-0.2 4.9 3.2 9 7.5 9.3h429.7c4.4-0.3 7.8-4.4 7.6-9.3v-55.6c0.1-2.3-0.6-4.6-2-6.4-1.4-1.7-3.5-2.8-5.6-2.9z m0.1 92.7H436.1c-4.4 0.3-7.8 4.4-7.5 9.3v55.6c-0.2 4.9 3.2 9 7.5 9.3H866c4.3-0.3 7.7-4.4 7.5-9.3v-55.6c0.1-4.9-3.2-9-7.5-9.3z" fill="#062F8C" ></path><path d="M436.2 325.2h19.7c26.9 0 48.8 22.2 48.8 49.5v305.6c-0.1 4.2 3.2 7.7 7.4 7.7h279.5c2.3 0 4.6-1 6-2.9 1.5-1.9 2-4.3 1.4-6.6l-83.5-358.7C690 209.8 593.2 132 481.9 132h-45.7c-2 0-3.9 0.8-5.3 2.2s-2.3 3.3-2.3 5.4v177.8c0 2 0.7 4 2.2 5.5 1.4 1.5 3.4 2.3 5.4 2.3-0.1 0 0 0 0 0z" fill="#E60012" ></path></symbol><symbol id="icon-zt-02-02" viewBox="0 0 1024 1024"><path d="M811.9 486.8c0.7 4-0.2-1.4-0.3-1.8-0.2-1-0.4-2.1-0.6-3.2-1.2-6-2.8-11.8-4.9-17.4-0.1-0.2-0.2-0.4-0.2-0.6-0.3-0.4-0.5-0.8-0.6-1.3-0.3-0.6-0.5-1.1-0.7-1.6-1-2.2-2.1-4.4-3.3-6.5-1.4-2.6-2.8-5.1-4.5-7.5-0.6-1.1-1.4-2.2-2.1-3.2 0.1 0 0.1 0 0.2 0.2l-0.5-0.5s0.1 0 0.1 0.2 0 0 0.1 0.2c-2.1-1.6-2-1.9-1.2-1.4-1.3-1.3-2.5-3-3.6-4.3-3.3-3.8-6.5-7.5-9.7-11.3-63.3-75.8-69.3-184.1-14.8-266.4 14.4-19 30.3-36.7 47.6-53 13.4-13.7 26.8-27.2 40.2-40.9 9.2-8.8 23.6-8.9 32.9-0.3 9.2 8.5 22.4 24.2 14 32.9l-3.4 3.3c-16.2 16.4-32.3 32.9-48.5 49.4-4.9 4.9-9.7 9.6-14.5 14.6-2.6 2.7-5.1 5.3-7.5 8.1-1.6 1.7-2.9 3.5-4.4 5.3-0.6 0.7-1 1.6-1.6 2.2-6.2 8.5-11.5 17.6-16 27.2-0.7 1.4-1.4 2.9-2 4.3-0.5 1-0.9 1.9-1.3 2.9 0.4-0.8 0.7-1.7 1.1-2.7-1.2 2.1-2 4.4-2.6 6.8-1.8 4.9-3.3 9.7-4.7 14.6-2.1 7.6-3.8 15.4-5 23.3v0.5c-0.2 1.4-0.4 2.8-0.5 4.2a192 192 0 0 0-0.6 33.9c0.2 2.8 0.4 5.7 0.7 8.5 0.1 1.3 0.3 2.5 0.5 3.8 0.8 5.3 1.9 10.6 3.1 15.8 1.4 5.7 3 11.1 4.8 16.7 0.8 2.4 1.6 4.8 2.5 7 0.4 1 0.7 1.9 1.1 2.9 4.4 9.9 9.5 19.4 15.4 28.5 1.2 1.8 2.5 4 3.9 5.9 0.4 0.4 0.6 0.8 0.9 1.3 0.8 1 1.6 2.1 2.5 3 1.5 1.7 3.1 3.5 4.6 5.3 3.3 3.8 6.6 7.3 9.7 11.1 32.3 38.3 42.6 90.6 27.2 138.3-3.7 11.5-8.8 22.5-15.3 32.6-6.9 9.5-14.5 18.6-22.7 27.2-1.7 1.8-3.4 3.9-5 5.9l-1.9 2.5c0.6-0.7 1.1-1.6 1.7-2.2-0.7 0.7-1.4 1.6-1.9 2.5-3.1 4.3-5.9 8.6-8.6 13.1-2.7 4.5-5.2 9.2-7.5 14-0.6 1.4-1.6 3-2.3 4.9 0-0.3 0 0-0.3 0.6l0.3-0.6c0 0.2-0.1 0.3-0.5 1.3l-1.5 3.8c-3.8 9.8-6.7 20-8.8 30.4-0.6 3.2-1.1 6.5-1.7 9.7l-0.2 0.8-0.3 2.1c-1.2 11.3-1.6 22.6-0.9 33.9l0.6 7.5c0.1 1.6 0.2 2.9 0.4 4.3 0-0.2 0-0.2-0.1-0.3 0.7 2.9 1.3 6 1.5 9.1 0.5 2.4 1 5 1.6 7.3 1.2 5.4 2.7 10.7 4.4 16.1 0.9 2.7 1.7 5.1 2.7 7.8 0.5 1.4 1 2.7 1.5 3.9 1.7 4.8 3.9 9.5 6.6 13.8 2.7 5 5.6 9.9 8.7 14.6 1.5 2.4 3 4.5 4.6 6.7 0.7 0.8 1.3 1.7 1.9 2.7-0.2-0.4-0.5-0.7-0.6-1.1 0.1 0.3 0.3 0.5 0.5 0.7 3.6 4.5 7.3 8.9 11.1 13.2L911 924c8.5 9.7-5 23-14 32.9-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-0.8-1.1-1.7-1.9-2.5-2.9l-81.5-94.6c-26.2-30-43.4-66.8-49.7-106.2-8.1-48.9 0-99.1 23-143 5.7-10.5 12.3-20.4 19.8-29.7 6.4-8.1 13.9-15.3 20.5-23.1 0.1-0.1 0.1-0.2 0.2-0.3 0.8-1.3 1.8-2.5 2.6-3.8 1.3-2.1 2.5-4.2 3.6-6.2 1.1-1.9 2.3-4.2 3.3-6.2 0.6-1.1 1.1-2.2 1.6-3.3 1.9-5.2 3.6-10.6 4.9-16.1 0.6-2.5 0.9-5 1.4-7.5l0.3-3.3c0.5-6.2 0.6-12.4 0.1-18.5l-0.3-3.3m-22.4 250.5c1.5 4 0.2 2.1 0 0zM203.9 178.8c0.2-0.2 0.4-0.4 0.5-0.6-0.1 0.3-0.3 0.6-0.6 0.8l-2.3 3.2c-6 8.4-11.1 17.4-15.5 26.6-0.8 1.6-1.5 3.3-2.3 5 0.1-0.1 0.1-0.3 0.1-0.5-0.8 2.6-1.8 5-2.9 7.5-1.6 4.6-3.1 9.4-4.4 14-1.6 5.5-2.8 11.1-3.9 16.7l-0.9 6.9-0.1 1c-0.2 1.1-0.3 2.2-0.4 3.3-1.1 11.2-1.3 22.4-0.6 33.6 0.2 3 0.5 6.2 0.8 9.2v0.3c0-0.3 0-0.3-0.2-0.7 0.3 1.1 0.3 2.2 0.5 3.3 0.8 5.6 1.9 11 3.2 16.3s2.8 10.6 4.5 15.8c0.8 2.7 1.7 5.1 2.7 7.8l1.1 2.8 0.3 0.6c4.3 9.5 9.3 18.8 14.9 27.6 1.6 2.2 3.1 4.6 4.8 6.8 0.9 1.1 1.7 2.1 2.5 3.2 1.5 1.8 3.1 3.6 4.6 5.3l10.2 11.8c32.4 38.4 42.8 90.8 27.3 138.6-3.6 11.2-8.6 21.9-15 31.9-6.6 9.5-14 18.4-21.9 26.6-2.1 2.4-4.1 4.6-6.1 7.1-0.6 0.6-1 1.3-1.5 1.9-0.1 0.3-0.3 0.5-0.5 0.7-2.8 3.9-5.4 7.8-7.8 11.8-2.8 4.8-5.6 9.7-8 14.6-1 2.2-2 4.5-3 6.5-0.1 0.1-0.2 0.3-0.2 0.5l-1.2 3c-3.9 10.1-6.9 20.6-9.1 31.2-0.6 2.9-1.1 5.9-1.6 8.9 0 0.3 0 0.7-0.1 1.1 0-0.6 0-0.7 0.1-1.6-0.1 1.1-0.3 2.2-0.4 3.3-0.6 5.6-1 11.1-1.2 16.7-0.2 5.6-0.1 11.5 0.2 17 0.1 2.9 0.3 5.7 0.6 8.5l0.3 3.3c0.1 1.1 0.3 2.2 0.4 3.3-0.2-0.9-0.4-1.8-0.4-2.8 0.3 5.6 1.4 11.1 3.1 16.4 1.2 5.1 2.6 10.2 4.2 15.3 0.9 2.8 1.9 5.7 2.9 8.5 0.5 1.4 1 2.5 1.5 3.9v0.2c1.6 4.5 3.7 8.9 6.2 12.9 2.8 5.3 5.7 10.5 9 15.5 1.3 1.9 2.7 4 4.1 5.9l1.3 1.7c0.2 0.3 0.4 0.5 0.6 0.7 3.9 4.8 7.9 9.4 11.8 13.8l77.7 90.2c8.7 9.3 8.7 23.7 0 32.9-14.1 9-32.2 9-46.5 0-0.8-1-1.7-1.9-2.5-2.9-27.2-31.5-54.3-63.1-81.5-94.6-26.4-30.3-43.7-67.4-49.8-107-7.7-48.7 0.4-98.6 23.2-142.4 5.7-10.5 12.4-20.4 19.8-29.7 6.5-8.4 14.1-15.5 20.7-23.6l0.8-1.3c0.6-0.8 1.1-1.7 1.7-2.7 1.4-2.2 2.7-4.5 4-6.7s2.4-4.8 3.5-7.1c0.4-1 0.8-2 1.3-2.9-2.9 5.4-0.5 1 0-0.5 1.9-5 3.4-10.3 4.5-15.6 0.6-2.1 1.1-4.3 1.4-6.5v-0.2c0.1-1.7 0.3-3.3 0.4-5 0.4-5.6 0.4-11.3 0-16.9-0.1-1.8-0.3-3.3-0.4-5v-0.6c-0.3-2.2-0.7-4.4-1.3-6.5-1.2-5.3-2.8-10.6-4.6-15.8-0.2-0.5-0.5-1-0.7-1.6 0.2 0.4 0.4 0.7 0.6 1.1-0.5-0.8-0.9-2.1-1.3-2.9-1.2-2.5-2.4-4.9-3.7-7.3-1.6-2.8-3.2-5.6-5-8.3-0.6-0.8-1.1-1.6-1.6-2.2 0-0.2 0 0 0 0-1.5-1.8-3-3.6-4.5-5.3-3.3-3.8-6.5-7.5-9.7-11.3-63.6-74.8-69.8-182.8-15.7-265.2 14.5-19.2 30.6-37.1 48.2-53.5l40.2-40.9c14.2-8.8 32.2-8.8 46.5 0 8.8 9.2 8.8 23.7 0 32.9l-3.4 3.5-48.6 49.3c-4.8 5-9.7 9.7-14.5 14.8-2.5 2.7-5 5.4-7.4 8.1-1 1.3-2.4 2.8-3.5 4.2m-20.7 35.6c-1 4.1-0.7 1.7 0 0z m-12.4 92c0.9 4.2 0.2 1.6 0 0z m0.4 385.2c-0.2 2.3-0.2 1.3 0 0z" fill="#E60012" ></path><path d="M720.8 502.8c-14 15.9-28.2 31.5-42.2 47.3l-86.9 97.2L491 759.5c-27.8 31.2-55.5 62.3-83.4 93.3l-34.9 38.9c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-15.9 28.2-31.4 42.2-47.3l86.9-97c33.4-37.5 66.9-75 100.5-112.4 27.8-31.2 55.6-62.2 83.4-93.3l34.8-38.9c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9 0.1 0.3-0.1 0.4-0.3 0.7zM705.8 101.3c-14 15.9-28.3 31.7-42.5 47.4l-87.5 97.9c-33.6 37.6-67.2 75.3-100.9 112.8-27.9 31.1-55.9 62.4-83.7 93.5-11.6 12.9-23.3 26.1-34.9 39-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-16.1 28.3-31.7 42.5-47.6 29.2-32.5 58.4-65.3 87.6-97.8 33.6-37.6 67.2-75.3 100.9-112.9 27.9-31.1 55.8-62.2 83.7-93.5 11.6-12.9 23.3-26.1 34.9-38.9 9-8.8 23.5-8.8 32.5 0 8.7 9.2 8.7 23.6 0 32.8-0.4 0.3-0.5 0.6-0.7 0.9zM584.7 99c-10.6 12.1-21.7 24.2-32.6 36.4L485.5 210c-25.9 28.8-51.7 57.7-77.5 86.6-21.3 23.9-42.6 47.6-64 71.5-8.9 10-17.8 19.9-26.7 29.8-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9l0.5-0.5c10.6-12.3 21.7-24.2 32.6-36.5 22.2-24.8 44.4-49.7 66.6-74.5 25.9-29 51.7-57.9 77.5-86.8 21.3-23.7 42.7-47.6 64-71.5 8.9-10 17.8-19.9 26.7-29.8 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9l-0.5 0.7zM438.3 123.3l-94.8 105.4c-19.8 22-39.6 44.1-59.5 66.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.7 0-32.9 7.2-8 14.5-16.1 21.7-24.1L368 132.5l59.5-66.1c9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9l-21.7 24zM602.4 357.7l-89.5 100.7C478.4 497.3 444 536.2 409.3 575c-28.6 32.2-57.2 64.4-85.8 96.5-11.8 13.4-23.7 26.8-35.6 40.1-9.1 8.9-23.6 8.8-32.6-0.2-8.7-9.2-8.7-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14.3-16.4 29.1-32.6 43.6-48.9l89.6-100.7c34.6-38.7 69.1-77.6 103.6-116.4 28.6-32.2 57.2-64.4 85.8-96.5 11.8-13.4 23.7-26.8 35.6-40.1 9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9-0.2 0.3-0.4 0.5-0.6 0.7-14.3 16.4-29.1 32.6-43.6 48.9zM675.3 383.2c8.7 9.2 8.7 23.6 0 32.8-0.2 0.3-0.4 0.5-0.6 0.7-14.6 16.4-29.6 32.3-44.2 48.6l-91.3 100.1-105.3 115.2-87 95.4-36.4 39.8c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.3-0.2 0.5-0.5 0.6-0.7 14.6-16.3 29.6-32.2 44.2-48.4 30.4-33.3 60.8-66.6 91.3-100.1 35.1-38.6 70.1-76.9 105.2-115.4l87-95.5c12.1-13.2 24.3-26.5 36.4-39.8 9-8.8 23.5-8.8 32.6 0.2-0.1-0.1-0.1-0.1 0 0zM443.9 893.4c39.2-43.9 78.4-87.9 117.7-131.7l74.4-83.3c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-9.1 10-18.1 20.2-27.2 30.4-39.2 43.9-78.4 87.9-117.7 131.7l-74.4 83.1c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 9.1-10 18.1-20.2 27.2-30.2zM560.9 909c26.3-29.4 52.6-58.8 79-88.2 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-3.7 4.2-7.5 8.4-11.1 12.6-26.3 29.3-52.6 58.7-79 88.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.6 0-32.8 3.7-4.5 7.4-8.6 11.1-12.6zM699.3 891.8c9-8.9 23.5-8.9 32.5 0 8.7 9.3 8.7 23.7 0 32.9-9.2 11.3-18.3 22.6-27.4 33.9-9 8.9-23.5 8.9-32.5 0-8.7-9.3-8.7-23.7 0-32.9 9.1-11.3 18.2-22.6 27.4-33.9z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-06-08" viewBox="0 0 1024 1024"><path d="M192.2 164.3c23.3-9.8 49.9 16.6 40.1 40.1-6.4 21.3-37 28.5-52 11.8-16.6-14.9-9.4-45.3 11.9-51.9z m107.8-0.1c23.3-9.7 49.9 16.7 40.1 40.1-6.4 21.4-37.1 28.7-52.1 11.9-16.5-15-9.2-45.4 12-52z m197.3 0.4c76.9-5.2 154.5-0.4 231.7-2.3 19.3 1.5 45.8-5 57.7 15.3 12.4 17.9-0.8 46.9-23.2 47.1-77.8 2.3-155.7 0-233.5 1.1-14.9-1.3-33.2 2.6-44.4-9.8-15.8-15-9.2-44.9 11.7-51.4zM192.2 433.9c23.3-9.7 49.9 16.8 40.1 40.1-6.4 21.4-37 28.5-52 11.8-16.7-15-9.4-45.3 11.9-51.9z m107.8 0c23.3-9.7 49.9 16.8 40.1 40.1-6.4 21.3-37 28.5-52 11.9-16.6-15-9.4-45.4 11.9-52z m197.3 0.4c76.9-5.2 154.5-0.4 231.7-2.3 19.3 1.5 45.8-5 57.7 15.3 14.7 21.4-5.8 52.1-31.2 47.8-83.6 0.1-167.3 1.4-250.9-0.6-32.2-0.7-37.8-51.4-7.3-60.2zM192.2 694.6c23.3-9.7 49.9 16.7 40.1 40.1-6.4 21.3-37 28.5-52 11.8-16.7-15.1-9.4-45.3 11.9-51.9z m107.8 0c23.3-9.7 49.9 16.8 40.1 40.1-6.4 21.3-37 28.5-51.9 11.9-16.7-15-9.4-45.4 11.8-52z" fill="#E60012" ></path><path d="M518.7 850.1c-139.8-0.1-279.6 0.1-419.3 0.6 1.5-68.9 0.6-137.9 0.5-206.7 143.7 0.4 287.2 0.3 430.9 0.3 11.7-23.6 26.6-45.3 44.4-64.3-158.4-0.1-317-0.1-475.5 0.4 0.5-68.9 1.1-137.9-0.4-206.8 254.5 1 509.1 0.7 763.6 0.1-0.7 46-0.8 92.1-0.6 138 19.3 7.2 37.6 16.5 54.5 27.7-0.1-143.7-0.1-287.2 0.5-431-0.4-20.7 1.7-46.7-17.9-59.9-10.9-9.4-26.7-5.8-39.9-7.2-251.9 0.3-503.9 0.3-755.8-0.1-13.4 1.7-29.5-2.9-40.7 6.5-14.9 9.4-18.7 26.2-17.4 42.7 0.4 258 0.2 515.9 0.2 773.8-4.3 28 20.9 52.7 48.7 48.7h456.2c-13.3-19.3-24.1-40.3-32-62.8z m344-754.3c-0.6 71-0.2 142-0.4 213-254.1 0.4-508.2-0.2-762.2 0.3 0-71.2 0.3-142.3-0.2-213.5 254.2 0.7 508.5 0.2 762.8 0.2z" fill="#062F8C" ></path><path d="M766.2 982.8h-0.6c-14.1 0-28.1-1.6-41.9-4.5-14.2-3-28-7.5-41.2-13.1-26.2-10.9-49.6-26.7-69.4-47.1-19-19.8-34-42.7-44.4-68.3-10.1-25.5-15.1-52.4-14.8-79.8-0.3-28.6 5.3-56.4 16.6-82.9 5.3-12.4 11.7-24.4 19-35.7 7.3-11.2 15.5-21.8 24.7-31.5 9.3-9.7 19.7-18.7 30.7-26.3l0.1-0.1c11.1-7.5 22.9-14.1 35.3-19.4l0.1-0.1h0.1c2.5-0.9 5.2-1.5 8-1.5 3.6 0 7.3 0.9 10.5 2.5 5.7 2.6 10.4 7.4 12.8 13.2l0.1 0.2c2.2 5.8 2.2 12.2 0 18-2 6-6.7 10.8-12.7 12.9-19.1 8.3-36.3 20.1-50.9 35-14.8 14.9-26.5 32.1-34.9 51.3-8.6 20.4-12.8 42.1-12.4 64.3 0.2 21.6 4.4 42.5 12.5 62.5 7.9 20.1 19.2 38.2 33.9 53.8 15.3 15.9 33.7 28.2 54.3 36.4h0.1c19.6 8.3 40.3 12.5 61.5 12.5h2.7c21.7 0 42.5-4.2 62.5-12.5 19.7-8.1 37.4-19.7 52.7-34.3 15.9-15.3 28.2-33.5 36.5-54 2.4-5.9 7.4-10.6 13.4-12.7 2.9-1.2 5.8-1.7 8.9-1.7s6.1 0.5 9 1.7l0.2 0.1 0.2 0.1c5.6 2.6 9.8 7.6 11.6 13.4 2 5.7 2 11.9-0.1 17.8h0.1c-7.9 19.9-18.9 38.3-32.7 54.5-40.3 48-99.4 75.3-162.1 75.3z m-0.4-188.6c-6.1 0-11.9-2.3-16.5-6.6l-0.1-0.1c-4.6-4.6-7.1-11.1-6.8-17.6V581.3c-0.3-6.6 2.1-12.9 6.8-17.6l0.1-0.1c4.5-4.2 10.4-6.6 16.5-6.6h0.8c56.5 0.3 109.9 22.4 150.1 62.4 19.3 19.6 34.8 42.4 45.7 67.5 11 26.4 16.5 54.3 16.4 83 0.3 6.4-2 12.8-6.6 17.5l-0.1 0.1c-4.4 4.2-10.1 6.6-16.3 6.6h-189c-0.6 0.1-0.9 0.1-1 0.1z m162.8-48.1c-2.2-16.5-7.1-32.4-14.3-47.6-7.9-16.4-18.4-31.2-31.3-44-13-12.8-27.9-23.5-44.2-31.6-15.3-7.5-31.6-12.5-48.4-15.1V746l138.2 0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-qt-06" viewBox="0 0 1024 1024"><path d="M918.1 65.7H105.9c-31.4 0-57 25.6-57 57v580.2c0 31.4 25.6 57 57 57H918c31.4 0 57-25.6 57-57V122.7c0.1-31.3-25.6-57-56.9-57z m-9.3 627.8H115.2V132.1h793.5l0.1 561.4zM675.9 892H546.4V762.2h-72.5V892H345.2c-18.3 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h330.9c18.3 0 33.1-14.8 33.1-33.1 0-18.1-14.8-33.1-33.3-33.1z" fill="#062F8C" ></path><path d="M810.5 262.1H425c-12.6-29.3-41.7-49.9-75.7-49.9s-63.1 20.6-75.7 49.9h-60.1c-18.2 0-33.1 15-33.1 33.1 0 18.2 15 33.1 33.1 33.1H274c12.9 28.5 41.6 48.6 75 48.6s62.1-19.9 75-48.6h386.2c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.6-33.1-32.8-33.1z m0 220.5h-43.6c-12.7-29-41.7-49.4-75.4-49.4-33.8 0-62.8 20.2-75.4 49.4H213.5c-18.2 0-33.1 15-33.1 33.1s15 33.1 33.1 33.1H616c12.9 28.8 41.6 49.1 75.4 49.1s62.4-20.2 75.4-49.1h43.6c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.8-33.1-33-33.1z" fill="#E60012" ></path></symbol><symbol id="icon-zt-01-03" viewBox="0 0 1024 1024"><path d="M915.5 425.1h30.8v-45H725.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1zM528.5 534c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C124 96.4 90.3 268.2 82.5 313.2S70.1 521.1 70.1 521.1H43.7V567l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z" fill="#062F8C" ></path><path d="M43.8 601.6h33.5v305s45.8 31.7 154.2 0V607.7l30.9-2.7v-47.6H43.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1z" fill="#062F8C" ></path><path d="M893.5 854.9h-30.4c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4H604.5c-8.6 0-14.5 5.8-14.5 14.5 0 8.6 5.8 14.5 14.5 14.5h145.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h30.4c8.6 0 14.5-5.8 14.5-14.5-0.1-8.6-5.9-14.5-14.6-14.5z m-86.7 49.3c-18.8 0-34.6-15.9-34.6-34.6 0-18.7 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.8 34.6-34.6 34.6zM893.5 701.9H733.2c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4h-15.9c-8.6 0-14.5 5.8-14.5 14.5s5.8 14.5 14.5 14.5h15.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h160.4c8.6 0 14.5-5.8 14.5-14.5s-5.9-14.5-14.6-14.5zM676.8 751c-18.8 0-34.6-15.9-34.6-34.6 0-18.8 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.7 34.6-34.6 34.6z" fill="#E60012" ></path><path d="M922.3 557.5H575.8c-31.8 0-57.8 26-57.8 57.8V962c0 31.8 26 57.8 57.8 57.8h346.7c31.8 0 57.8-26 57.8-57.8V615.1c-0.2-31.6-26.2-57.6-58-57.6z m29.1 404.3c-0.1 15.9-13.1 28.9-29 28.9H575.8c-15.9 0-28.9-13-28.9-28.9V615.1c0-15.9 13-28.9 28.9-28.9h346.7c15.9 0 28.9 13 28.9 28.9v346.7z" fill="#062F8C" ></path></symbol><symbol id="icon-zt-02-01" viewBox="0 0 1024 1024"><path d="M972.7 518.7c-15.2-22.5-40.7-35.9-70.1-35.9-21.3 0-44.7 7.1-63 17.5-10.2 6.1-24.4 17.3-42.8 30.7-4 3.1-10.2 7.1-16.1 12.3-7.3-28.6-34.8-55.3-79.5-57.4-9.2 0-28.4-1-50.9-3.1-57-4-144.6-9.2-200.4-9.2-14.2 0-26.5 0-35.5 1-62.2 4-135.4 59.3-173 92.2-18.2 16.3-26.5 40.9-20.4 64.5 3.1 12.3 10.2 23.6 19.4 31.9l119 106.4c14.2 12.3 31.5 19.4 50.9 19.4h6.1c10.2-1.2 20.4-4 29.4-9.2 15.2-8.3 30.5-14.2 39.7-16.3h10.2c16.3 0 41.7 1 68.2 3.1 32.8 2.3 65.7 3.6 98.7 4 19.2 0 34.6-1.2 45.7-1.9 29.6-4.2 83.3-25.7 232.9-151.5l1-1c28.4-23.8 52.8-63.7 30.5-97.5zM912.6 574C882.1 600.5 752 710.1 701.1 718.4c-12.9 1.3-25.7 2.1-38.6 2.1-53 0-128.2-6.1-166.8-6.1-9.2 0-15.2 0-19.4 1.2-20.4 4-43.8 16.3-53.9 21.5-3.1 1.9-6.5 3.1-10.2 3.1h-1.9c-6.9 0.4-13.6-2.3-18.4-7.3l-119-106.6c-2.1-2.1-4-4.2-4-7.3-1.2-5 0-11.3 5-14.4 22.3-19.4 92.5-76.8 144.4-80.8 7.1-1.2 18.2-1.2 31.5-1.2 77.2 0 216.6 9.2 251.1 10.2 40.7 1 45.7 36.9 10.2 40.9-39.5 4.2-158.8 11.3-167.8 13.2-10.2 3.1-33.6 27.6 28.6 33.8 42.6 4 98.7 8.3 135.2 8.3 10.2 0 19.4 0 25.5-1.2 28.4-4 108.9-72.6 135.4-89.1 9.2-6.1 24.4-11.3 37.6-11.3 11.1 0 22.5 3.1 28.4 13.2 3.2 4.6-7 22.1-21.4 33.4zM242.4 718.2c-18.6-17.5-37.6-34.6-57-51.3-18.6-18.2-48-19.4-68.2-3.1-10.2 8.3-46.8 36.9-56.1 43-11.1 8.3-17.3 18.4-18.4 30.7-1.9 20.5 13.4 38 22.5 47.2l24.4 22.5c31.5 29.8 90.4 84.9 100.6 95.2 12.3 12.3 26.5 18.4 40.7 18.4 12.3 0 23.4-4 34.6-13.2l5-4c12.3-10.2 33.6-28.6 46.8-37.8 17.5-12.1 21.5-26.5 22.5-36.9 0.6-14.4-5.4-28.4-16.3-37.8-6.8-6.3-44.4-40.1-81.1-72.9z m-2.9 147.4l-5.2 4c-2.1 1.9-4 3.1-9.2-2.1-11.1-11.3-68.2-64.5-101.8-96.2-12.3-11.1-22.5-20.4-24.4-22.5-2.1-2.1-4-3.1-5.2-5.2 16.3-11.3 45.7-34.8 55.1-40.9 1.9-1.2 3.1-1.2 5 1.2 5 5.2 29.4 26.5 57 51.1 31.5 28.6 68 61.4 78.3 70.7-15.2 11.3-36.5 28.6-49.6 39.9z" fill="#062F8C" ></path><path d="M270.8 261.4c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11.1-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.5 0.3 1.2-0.5l6.6-2.5c8.5-3 17.2-5.4 26-7.3 2.2-0.5 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.4-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.5 2.7 1 4.1 1.5 0.9 0.3 1.7 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.8 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.4 4.5-65.7 16-94.2 34.1-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.5 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 6 0 10.1-2.5 14.6-6.1z" fill="#E60012" ></path><path d="M490 261.4c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.4 0.3 1.2-0.5l6.7-2.5c8.5-3 17.2-5.4 26-7.3 2.1-0.5 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.5-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.5 2.7 1 4.1 1.5 0.9 0.3 1.8 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.9 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.4 4.5-65.7 16-94.2 34.1-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.5 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 5.9 0 10-2.5 14.6-6.1z" fill="#E60012" ></path><path d="M709.2 261.4c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.5 0.3 1.2-0.5l6.6-2.5c8.5-3 17.2-5.4 26-7.3 2.2-0.5 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.5-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.5 2.7 1 4.1 1.5 0.9 0.3 1.7 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.9 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.4 4.5-65.7 16-94.2 34.1-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.5 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 5.9 0 10-2.5 14.7-6.1z m-495.3 141c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.5 0.3 1.2-0.4l6.7-2.5c8.5-3 17.2-5.4 26-7.3 2.1-0.4 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.5-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.4 2.7 1 4.1 1.5 0.9 0.3 1.8 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.9 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.4 4.5-65.7 16.1-94.2 34.1-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.6 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 5.9 0.1 10.1-2.5 14.6-6.2z" fill="#E60012" ></path><path d="M430.5 402.4c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.4 0.3 1.2-0.4l6.6-2.5c8.5-3 17.2-5.4 26-7.3 2.2-0.4 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.5-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.4 2.7 1 4.1 1.5 0.9 0.3 1.8 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.8 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.5 4.5-65.8 16.2-94.2 34.2-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.5 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 6 0 10-2.6 14.7-6.3z" fill="#E60012" ></path><path d="M649.5 402.4c-8.8 6.9-2.4 1.9-0.3 0.5 3.5-2.4 7.1-4.6 10.7-6.9 5.4-3.3 11-6.2 16.7-8.9 3.3-1.5 6.5-3 9.9-4.5-7.3 3.2-0.5 0.3 1.2-0.4l6.6-2.5c8.5-3 17.2-5.4 26-7.3 2.1-0.4 4.5-0.9 6.9-1.3 1.1-0.2 2.3-0.3 3.5-0.6 4.5-0.7-5.3 0.7-0.9 0.1 5.1-0.7 10.4-1 15.7-1.2 5-0.2 10 0 15 0.3 2.6 0.2 5.1 0.3 7.6 0.8 4.6 0.6-5.1-0.8-0.5-0.1 1.7 0.3 3.5 0.6 5.2 0.9 5.3 1 10.6 2.3 15.9 3.9 2.7 0.9 5.3 1.7 8 2.7 1.5 0.4 2.7 1 4.1 1.5 0.9 0.3 1.8 0.8 2.7 1.1-2.7-1.2-3.2-1.3-1-0.3 6.5 2.8 12.9 6.3 19 10 3.3 1.9 6.3 4.1 9.5 6.3 1.8 1.3 3.6 2.7 5.4 3.9-4.2-3.2 1.7 1.5 2.5 2.1 8.8 7.4 21.2 8.7 29.9 0 7.5-7.5 8.9-22.5 0-29.9-22-18.1-46.3-32.2-74-39.6-21.9-5.8-44.9-7.1-67.2-4.3-33.4 4.5-65.7 16.1-94.2 34.1-4.6 2.9-9.1 6.3-13.5 9.7-9.1 7.1-7.4 22.6 0 29.9 3.9 3.9 9.3 6.2 14.9 6.2 6 0.1 10.2-2.5 14.7-6.2z" fill="#E60012" ></path></symbol><symbol id="icon-zt-01-04" viewBox="0 0 1024 1024"><path d="M915.5 425.1h30.8v-45H725.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1zM528.5 534c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C124 96.4 90.3 268.2 82.5 313.2S70.1 521.1 70.1 521.1H43.7V567l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z" fill="#062F8C" ></path><path d="M43.8 601.6h33.5v305s45.8 31.7 154.2 0V607.7l30.9-2.7v-47.6H43.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1z" fill="#062F8C" ></path><path d="M576.8 761.8c-2.3-20.4-0.3-40.6 4.8-60.1 27.6-0.9 49.2-24 48.3-51.6-0.9-27.6-24-49.2-51.6-48.3-27.6 0.9-49.2 24-48.3 51.6 0.1 3.6 0.6 7.3 1.5 10.8 3 11.7 10.1 21.3 19.2 27.9-6.5 23.7-8.9 48.5-6.1 73.4 6.2 54.3 34.6 103.6 78.6 136 7.2 5.3 17.4 3.8 22.7-3.4s3.8-17.4-3.4-22.7c-36.8-27.1-60.5-68.3-65.7-113.6z m349.4-4c-8.7-0.7-16.9 5.4-17.9 14.3-5.1 45.3-28.9 86.5-65.6 113.6-16.5 12.2-35 20.6-54.4 25.9-14.6-23.4-45.4-30.6-68.9-16-23.4 14.6-30.6 45.4-16 68.9 14.6 23.4 45.4 30.6 68.9 16 3.1-1.9 6-4.2 8.6-6.7 8.7-8.5 13.4-19.4 14.6-30.6 23.8-6.3 46.4-16.5 66.6-31.4 43.9-32.5 72.4-81.8 78.6-136.1 0.8-8.8-5.6-16.8-14.5-17.9z m-1.9-154.6c-11.7-3.3-23.5-1.9-33.7 2.7-17.3-17.5-37.5-32-60.5-42-50.1-21.8-107-21.8-157.1 0-8.2 3.6-11.9 13.2-8.3 21.4 3.6 8.2 13.1 11.9 21.3 8.4 41.8-18.2 89.3-18.2 131.2 0 18.8 8.2 35.3 20 49.6 34.2-13 24.4-3.8 54.7 20.6 67.7 24.4 13 54.7 3.8 67.7-20.6 13-24.4 3.8-54.7-20.6-67.7-3.3-1.8-6.7-3.2-10.2-4.1z" fill="#E60012" ></path></symbol><symbol id="icon-althena" viewBox="0 0 1024 1024"><path d="M223.4 602.7c-18.9 0-23.9-11.5-24.3-24.6 0-11.5 3.7-31.7 6.1-42.1-12.5-2.7-23.6-5.7-35.4-9.4-25.3 31.4-64.7 76.2-93.1 76.2-16.2 0-26.6-10.1-26.6-22.9 0-5.4 1.3-13.8 6.1-13.8 1.3 0 2.7 0.7 3 2.4 2 7.1 5.1 8.1 13.1 8.1 18.9 0 47.5-24.6 76.5-56-23.9-6.7-59.7-16.2-88-16.2-16.2 0-29.3 3.7-39.4 10.5-0.7 0.7-1.3 0.7-2 0.7-2 0-3.4-1.7-3.4-3.7v-0.3c3-15.8 9.1-29.3 26.3-32.7 4.4-0.7 9.1-1.3 13.8-1.3 30 0 70.1 13.8 107.6 26.3 30.7-35.4 57.3-72.5 86.7-108.6 1.3-2 4.4-3 7.4-3 8.4 0 18.2 5.7 18.2 10.8l-0.3 1.7c-11.1 22.9-26.6 77.2-36.4 120 2.7 0.3 5.1 0.3 7.8 0.3 8.4 0 15.2-2 19.2-6.4 0.7-0.7 1.7-1.3 2.7-1.3 1 0 3.4 1.7 3.4 3.4 0 0.7-0.3 1.3-0.7 2-8.8 11.8-17.5 18.9-31 18.9l-4.7-0.3c-4.7 22.6-7.8 41.8-7.8 52.3l0.3 6.1c0 1.7-1.3 3.4-3.4 3.4h-1.7z m9.4-163.9c-18.5 28-35.4 51.6-50.2 71.1 9.1 3 18.2 5.7 26.6 8.1 6.4-25.9 15.2-54.6 23.6-79.2zM313.7 586.2c-8.1 0-15.8-1-19.2-8.1-1.7-3.7-2.4-8.8-2.4-14.5 0-41.1 34.7-127.5 40.1-139.9 1.7-2.7 5.1-4 9.1-4 8.8 0 19.9 5.7 19.9 10.5l-0.3 1c-4 10.8-39.4 103.5-43.2 138.2l-0.3 6.7c0 2 0 3.4 0.7 3.4h0.7c4.4 0 10.8-8.8 12.8-11.5 10.5-14.5 21.9-39.1 28.7-53.3 0.7-1.7 1.7-2 3-2 0.3 0 1 0 1.7 0.3 1 0.7 1.7 1.7 1.7 2.7 0 0.7 0 1-0.3 1.7-7.1 15.5-18.2 39.1-29.7 54.3-3.7 5.4-11.1 14.2-18.2 14.5h-4.8zM405.1 586.2c-8.1 0-15.8-1-18.9-8.1-1.7-3.7-2.7-9.1-2.7-15.2 0-26.3 13.8-70.1 26.3-103.8-6.7-0.3-13.1-0.3-18.5-0.3-2-0.3-3.4-2-3.4-3.4 0-1.7 1.3-3.4 3.4-3.4l20.9 0.3c4.4-11.5 8.4-21.2 11.8-28.7 1-3 4.4-4 8.4-4 8.8 0 20.9 5.4 20.9 10.5l-0.3 1c-3 6.7-6.1 14.2-9.1 22.3l16.9 0.3c2 0 3.4 1.7 3.4 3.4s-1.3 3.4-3.7 3.4c-5.7-0.3-12.1-0.3-19.2-0.3-10.5 31-21.9 65.7-28.7 94.4-0.7 2-3.7 15.8-3.7 21.9 0 2.4 0.3 3 1.3 3 3.7 0 10.1-8.1 12.5-11.1 10.5-14.2 22.6-39.1 29.3-53.6 0.7-1.7 1.7-2 3-2 0.3 0 1 0 1.7 0.3 1 0.7 1.7 1.7 1.7 3 0 0 0 0.7-0.3 1.3-7.1 16.2-19.6 41.1-31 56.3-4 4.7-10.5 12.1-16.9 12.5h-5.1zM532.6 566.9c0.7-25 20.2-78.9 20.2-82.6 0-1.7-0.3-2.4-1.3-2.4s-2.4 1.3-3.4 2.4c-18.5 17.2-39.1 51.9-45.2 62.7-4.4 15.5-7.8 28.7-7.8 35.7 0 3.4-2.7 3.4-6.7 3.4-11.1 0-17.9-2-18.9-12.5 0-26.6 36.8-129.5 45.2-150 1-2.7 4.4-3.7 8.8-3.7 8.4 0 19.9 4.7 19.9 10.1l-0.3 1.3c-4 9.8-19.6 51.6-32 89.7 4.7-7.4 10.5-15.8 16.5-23.6 10.8-13.1 23.9-30.3 38.4-30.3 8.4 0 15.5 5.1 15.5 14.2l-0.3 4c-4.7 23.3-20.9 68.4-20.9 88 0 4 0.7 6.1 2 6.1 9.4-0.7 16.5-15.8 38.1-64.7 0.7-1.3 1.7-2 3-2 1.7 0 3.4 1.3 3.4 3l-0.3 1.7c-23.6 53.6-31 68.1-43.8 68.8l-9.4 0.3c-12 0-20.7-3-20.7-19.6zM664.4 586.2c-28.7-1-39.1-17.9-39.1-39.1 0-10.5 2.4-21.6 6.4-32.4 8.1-21.6 26-47.5 50.6-47.5h1.3c12.8 0.3 23.3 6.7 23.3 19.6v0.7c-0.7 23.9-25.3 53.3-43.5 53.3-3.4 0-6.7-1-9.4-3.4-0.7 4-1.3 8.4-1.3 12.8 0 12.8 3.7 26 14.8 28.3l3.7 0.3c2 0 4.7-0.3 7.4-1 11.8-4.4 28.7-18.9 49.9-63.1 0.7-1.3 1.7-2 2.7-2 0.7 0 1.3 0.3 2 0.7 1 0.3 1.7 1.3 1.7 2.7 0 0 0 0.7-0.3 1.3-22.6 47.2-41.1 62.4-54.6 67.1a41.4 41.4 0 0 1-11.8 1.7h-3.8z m31-97.8c0-2-0.7-3-1.7-3.7-1-0.7-1.7-0.7-2.7-0.7-7.8 0-18.5 14.2-21.9 18.9-5.1 7.8-9.4 16.5-12.1 24.6 1.3 1 3 1.3 4.7 1.3 14.5 0 33.7-29.6 33.7-40.4zM808.7 566.9c0.7-24.6 19.6-79.2 19.9-83.3 0-1-0.3-1.7-1-1.7-1 0-2.4 1-3.4 2-16.2 14.5-39.1 52.3-45.2 62.7-4 14.8-7.4 28.3-7.8 36.1 0 3-1.7 3.4-4.4 3.4h-1.7c-8.1 0-18.9-1.7-19.2-9.4 0-17.2 19.9-83.6 28.3-105.5 1-2.7 4.4-4 8.4-4 8.1 0 19.2 4.7 19.2 10.1l-0.3 1.3c-2.7 6.4-13.8 39.8-14.8 42.5 5.1-7.4 10.8-15.8 16.9-23.6 10.1-13.1 24.3-30.3 38.4-30.3 8.4 0 15.5 5.1 15.5 14.2l-0.3 4c-4.7 23.3-20.9 68.4-20.9 88 0 4 0.3 6.1 2 6.1 8.4-0.7 14.5-11.8 38.1-64.7 0.7-1.3 1.7-2 2.7-2 2 0 3.7 1.3 3.7 3.4 0 0.3 0 0.7-0.3 1.3-23.6 53.6-31 68.1-43.8 68.8l-9.4 0.3c-12.2-0.1-20.6-2.8-20.6-19.7zM958.4 578.7c-2-3.4-2.7-8.4-2.7-14.2 0-3.4 0.3-6.7 0.7-10.8-8.1 13.5-18.5 26.6-32 26.6h-0.4c-16.2-0.3-22.9-13.8-22.9-31.4 0-33.4 24.3-81.3 57.7-81.3h0.3c8.4 0.3 15.8 3 19.9 9.4l2.4-6.1c1.3-2.4 4.7-3.4 8.4-3.4 7.8 0 18.2 4.7 18.2 9.8l-0.3 1.7c-3.7 9.4-20.9 54.6-25.6 82.3-0.3 2-1 8.1-1 12.5 0 2.7 0 4.7 1 5.4 0.7 0.7 1 2 1 3.4v1.3c0 1.3-1 2.7-2 2.7-9.2 0.2-18.6-0.4-22.7-7.9z m6.4-61.7c1.7-4 4.7-13.5 4.7-20.6 0-4.7-1.3-8.4-5.1-9.8l-2-0.3c-15.2 0-34.4 46.2-34.4 66.1 0 5.4 1.3 8.8 4.7 8.8 10.5-0.3 28.8-35.4 32.1-44.2z" fill="#062F8C" ></path></symbol><symbol id="icon-031101sheshiku" viewBox="0 0 1024 1024"><path d="M959 530.3L521.9 82.9c-2.8-2.9-6.7-4.5-10.7-4.5-4 0-7.9 1.7-10.8 4.5L62.9 532.2c-4.2 4.3-5.4 10.8-3.1 16.3 2.3 5.6 7.8 9.2 13.8 9.2h81v389.9h70.8V486.8h-19.5l305.3-313.5 306.3 313.5h-15.4v94.5H873v-23.7h77.3c8.3 0 15-6.7 15-15 0.1-5-2.4-9.5-6.3-12.3z"  ></path><path d="M319.5 869.5h278.8v50.2H319.5v-50.2z m0-98.7h278.8V821H319.5v-50.2z m0-98.7h278.8v50.2H319.5v-50.2zM807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path></symbol><symbol id="icon-031202guizeku" viewBox="0 0 1024 1024"><path d="M807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M551.1 180.4h-78.5c-6.9-26.9-31.1-45.7-58.9-45.8-33.7 0-61.1 27.3-61.1 61.1s27.3 61.1 61.1 61.1c27.8 0 52-18.9 58.9-45.8h78.5c8.4 0 15.3 6.8 15.3 15.3v137.4c0 8.4-6.8 15.3-15.3 15.3h-145c-8.4 0-15.3 6.8-15.3 15.3 0 8.4 6.8 15.3 15.3 15.3h145c25.3 0 45.8-20.5 45.8-45.8V226.2c0-25.3-20.5-45.8-45.8-45.8z m-137.4 45.8c-16.9 0-30.5-13.7-30.5-30.5 0-16.9 13.7-30.5 30.5-30.5 16.9 0 30.5 13.7 30.5 30.5 0.1 16.8-13.6 30.5-30.5 30.5z"  ></path><path d="M535.8 439.9c-27.4 0-50.3 18.1-58 43H322.1c-8.2 0-14.8-6.5-15.1-14.6 32.6-8.3 52.3-41.5 43.9-74.1-6.9-27.1-31.4-46-59.3-45.8-22.5 0-42 12.3-52.6 30.5h-23.7c-8.4 0-15.3-6.8-15.3-15.3V226.2c0-8.4 6.8-15.3 15.3-15.3h99.2c8.4 0 15.3-6.8 15.3-15.3 0-8.4-6.8-15.3-15.3-15.3h-99.2c-25.3 0-45.8 20.5-45.8 45.8v137.4c0 25.3 20.5 45.8 45.8 45.8h15.3c0 27.8 18.9 52.1 45.9 58.9 0.4 25 20.7 45.1 45.7 45.1h153.9c6.9 33 39.2 54.2 72.2 47.3 33-6.9 54.2-39.2 47.3-72.2-5.9-28.2-30.8-48.5-59.8-48.5z m-274.7-30.6c0-16.9 13.7-30.5 30.5-30.5s30.5 13.7 30.5 30.5c0 16.9-13.7 30.5-30.5 30.5-16.9 0.1-30.5-13.6-30.5-30.5z m274.7 122.2c-16.9 0-30.5-13.7-30.5-30.5 0-16.9 13.7-30.5 30.5-30.5 16.9 0 30.5 13.7 30.5 30.5 0.1 16.8-13.6 30.5-30.5 30.5z"  ></path></symbol><symbol id="icon-031201guzhangku" viewBox="0 0 1024 1024"><path d="M807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M436.6 528.1c15.7 0 28.5-11.3 28.5-25.2 0-14-12.8-25.2-28.5-25.2s-28.5 11.3-28.5 25.2c0 14 12.7 25.2 28.5 25.2m0.1-78.9c-10.1 0-18.3-7.2-18.3-16.2V287.7c0-8.9 8.2-16.2 18.3-16.2 10.1 0 18.3 7.3 18.3 16.2v145.4c0 8.9-8.2 16.1-18.3 16.1m-0.1-241.7c-6.4 0-13.7 5.6-19.6 15L222.5 530.2c-6.1 9.6-7.5 18.3-3.9 23.8 3.7 5.5 12.9 8.6 25.4 8.6h385.4c12.6 0 21.8-3.1 25.5-8.6 3.6-5.4 2.2-14.1-3.9-23.7L456.3 222.5c-6-9.4-13.3-15-19.7-15m192.8 387.4H244c-25.8 0-46.6-8.9-56.9-24.5-10.4-15.6-9.1-36 3.5-55.9L385 206.8c12.7-20.1 31.5-31.5 51.6-31.5s38.9 11.5 51.6 31.5l194.7 307.8c12.6 19.9 13.9 40.3 3.4 55.8-10.2 15.6-31.1 24.5-56.9 24.5"  ></path></symbol><symbol id="icon-031102shebeiku" viewBox="0 0 1024 1024"><path d="M807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3zM218.5 211.3c23.8-10 50.7 16.8 40.9 40.6-6.5 21.7-37.6 29-52.8 11.9-16.8-14.9-9.5-45.7 11.9-52.5z m109.8 0c23.8-9.8 50.7 17 40.9 40.6-6.5 21.7-37.6 29.2-52.8 12.1-17.1-15.3-9.6-46.1 11.9-52.7z m200.3 0.5c78.2-5.4 157.1-0.5 235.4-2.3 19.6 1.6 46.5-5.1 58.6 15.4 12.6 18.2-0.7 47.6-23.6 47.9-78.9 2.3-158.1 0-237.2 1.2-15.2-1.2-33.6 2.6-45.1-10-15.9-15.6-9.3-45.7 11.9-52.2zM218.5 485.2c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 11.9-16.5-15.2-9.2-46 12.2-52.8z m109.8 0c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 12.1-17.1-15.4-9.8-46.2 11.9-53zM218.5 750c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 11.9-16.8-15.2-9.5-45.8 11.9-52.8z m109.8 0c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 12.1-16.8-15.2-9.3-46 12.2-53z"  ></path><path d="M501.7 889.7c-125.7 0-251.5 0.2-377.2 0.6 1.4-70 0.5-140.3 0.5-210.1 117.2 0.3 234.4 0.4 351.6 0.4 4.7-22.8 11.9-44.7 21.1-65.5-124.2 0-248.4 0-372.6 0.4 0.2-70 0.9-140.1-0.5-210.1 258.5 0.9 517.2 0.7 775.9 0.2l-0.3 30.2c19 6.2 37.3 14.1 54.6 23.6 0-107.7 0.1-215.4 0.6-323.2-0.5-21 1.6-47.6-18.2-60.9-11-9.3-27.1-5.8-40.4-7.2-255.8 0.5-511.8 0.5-767.8 0-13.5 1.6-30.1-3-41.3 6.5C72.5 84.2 68.8 101.2 70 118c0.5 262.2 0.2 524.2 0.2 786.2-4.2 28.5 21.2 53.7 49.5 49.5h422.4c-15.9-19.7-29.4-41.1-40.4-64z m398.4-766.4c-0.7 72.1-0.2 144.3-0.5 216.4-258.2 0.3-516.4-0.2-774.5 0.3 0-72.4 0.2-144.5-0.2-216.9 258.3 0.7 516.7 0.2 775.2 0.2z"  ></path></symbol><symbol id="icon-030607shebeishipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM218.5 211.3c23.8-10 50.7 16.8 40.9 40.6-6.5 21.7-37.6 29-52.8 11.9-16.8-14.9-9.5-45.7 11.9-52.5z m109.8 0c23.8-9.8 50.7 17 40.9 40.6-6.5 21.7-37.6 29.2-52.8 12.1-17.1-15.3-9.6-46.1 11.9-52.7z m200.3 0.5c78.2-5.4 157.1-0.5 235.4-2.3 19.6 1.6 46.5-5.1 58.6 15.4 12.6 18.2-0.7 47.6-23.6 47.9-78.9 2.3-158.1 0-237.2 1.2-15.2-1.2-33.6 2.6-45.1-10-15.9-15.6-9.3-45.7 11.9-52.2zM218.5 485.2c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 11.9-16.5-15.2-9.2-46 12.2-52.8z m109.8 0c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 12.1-17.1-15.4-9.8-46.2 11.9-53zM218.5 750c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 11.9-16.8-15.2-9.5-45.8 11.9-52.8z m109.8 0c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 12.1-16.8-15.2-9.3-46 12.2-53z"  ></path><path d="M501.7 889.7c-125.7 0-251.5 0.2-377.2 0.6 1.4-70 0.5-140.3 0.5-210.1 117.2 0.3 234.4 0.4 351.6 0.4 4.7-22.8 11.9-44.7 21.1-65.5-124.2 0-248.4 0-372.6 0.4 0.2-70 0.9-140.1-0.5-210.1 258.5 0.9 517.2 0.7 775.9 0.2l-0.3 30.2c19 6.2 37.3 14.1 54.6 23.6 0-107.7 0.1-215.4 0.6-323.2-0.5-21 1.6-47.6-18.2-60.9-11-9.3-27.1-5.8-40.4-7.2-255.8 0.5-511.8 0.5-767.8 0-13.5 1.6-30.1-3-41.3 6.5C72.5 84.2 68.8 101.2 70 118c0.5 262.2 0.2 524.2 0.2 786.2-4.2 28.5 21.2 53.7 49.5 49.5h422.4c-15.9-19.7-29.4-41.1-40.4-64z m398.4-766.4c-0.7 72.1-0.2 144.3-0.5 216.4-258.2 0.3-516.4-0.2-774.5 0.3 0-72.4 0.2-144.5-0.2-216.9 258.3 0.7 516.7 0.2 775.2 0.2z"  ></path></symbol><symbol id="icon-030702xiangmuxinxitupianku" viewBox="0 0 1024 1024"><path d="M286.5 476.3h429.9c16.8 0 30.7-13.9 30.7-30.7s-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 17.1 13.7 30.7 30.7 30.7z m0 123.1h343.2c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 16.8 13.7 30.5 30.7 30.7z m0 122.6h258.8c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 17 13.7 30.7 30.7 30.7z m0-368.5h184.2c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 16.8 13.7 30.7 30.7 30.7z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030701shexiangtoutupianku" viewBox="0 0 1024 1024"><path d="M512 595.6c96.1 0 174.1-77.9 174.1-174s-77.9-174.1-174-174.1S338 325.4 338 421.5s77.9 174.1 174 174.1z m-60.1-316.4c39.3 0 71.2 31.9 71.2 71.2s-31.9 71.2-71.2 71.2-71.2-31.9-71.2-71.2c0-39.4 31.9-71.2 71.2-71.2zM564 871.3c-16.6 0.8-33.9 1.2-52.1 1.2-192 0-299.8-49.7-301.6-70 0.1-1.7 5.1-10.4 26.2-21.9 15.3-8.9 20.5-28.6 11.6-43.9-8.5-14.6-27-20.1-42.1-12.5-49.5 26.8-59.9 57.3-59.9 78.3 0 92.2 189.6 134.2 365.7 134.2 25.3 0 51-0.9 76.3-2.6-10.5-19.6-18.7-40.6-24.1-62.8z"  ></path><path d="M570.5 722.4c-18.9 4-38.5 6-58.5 6-163 0-295.6-137.7-295.6-306.9-0.1-169.2 132.5-306.9 295.6-306.9s295.7 137.7 295.7 306.9c0 44.1-9 86-25.2 124 12.8-1.9 25.9-2.9 39.3-2.9 10.1 0 20.1 0.6 29.9 1.7 13.1-38.4 20.3-79.8 20.3-122.8 0-204.5-161.5-371-359.8-371s-360 166.5-360 371 161.4 371 359.7 371c15.3 0 30.3-1 45-2.9 1.7-23.3 6.3-45.9 13.6-67.2z"  ></path><path d="M957.2 600c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V648.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V870l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V648.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030703xiangmurenwutupianku" viewBox="0 0 1024 1024"><path d="M137.6 878.7V145c-1.4-19.2 13-35.8 32.1-37.3h683.5c19.2 1.3 33.6 17.9 32.3 37.1v253h62.1V145c1.4-53.5-40.9-98-94.4-99.4H169.9c-53.5 1.4-95.8 45.8-94.4 99.3v733.7c-1.4 53.2 40.6 97.4 93.7 98.7h393.3v-62.1H169.9c-18.8-1-33.3-17-32.3-35.9v-0.6z"  ></path><path d="M465.5 276c-11.8-12-31-12.2-43-0.4l-0.4 0.4-105 93.8-40.4-34.2c-13.3-11.3-33.3-9.7-44.7 3.6 0 0 0 0.1-0.1 0.1-11 12.7-9.6 31.9 3.1 42.9 0.2 0.2 0.4 0.4 0.6 0.5l62.1 52.2c11.7 10.3 29.3 10.3 41 0L463 320.6c13-11.2 14.5-30.8 3.3-43.8-0.3-0.1-0.4-0.5-0.8-0.8zM422 504.6l-105 95.7-40.4-34.2c-13-11.1-32.6-9.6-43.8 3.4s-9.6 32.6 3.4 43.8l62.1 52.2c5.6 4.7 12.6 7.3 19.9 7.5 7.9 0 15.5-3.1 21.1-8.7L463.5 550c14.1-9.8 17.6-29.1 7.8-43.2s-29.1-17.6-43.2-7.8c-2.1 1.6-4.2 3.5-6.1 5.6z m182.7-211.8c-17.2 0-31.1 13.9-31.1 31.1s13.9 31.1 31.1 31.1H791c17.2 0 31.1-13.9 31.1-31.1-0.3-17-14-30.7-31.1-31.1H604.7zM957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030609xiangmujiansheshipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM261.1 842.1v-120c0-7.9 5.1-14.4 11.4-14.4h358.9c6.3 0 11.4 6.5 11.4 14.4v120c0 7.9-5.1 14.4-11.4 14.4H271.9c-5.7 0-10.8-6.5-10.8-14.4zM620 827.8v-91.2H283.9v91.2H620z"  ></path><path d="M273.6 806.2v-40.9c0-4.3 2.5-7.2 5.1-7.2h250.5c3 0 5.1 3.6 5.1 7.2 0 4.3-2.5 7.2-5.1 7.2H283.7v33.8c0 4.3-2.5 7.2-5.1 7.2s-5-3-5-7.3zM156.9 929.8v-87.6c0-7.9 4.6-14.4 10.1-14.4h465.6c5.6 0 10.1 6.5 10.1 14.4v87.6c0 7.9-4.6 14.4-10.1 14.4H167.1c-5.6-0.1-10.2-6.5-10.2-14.4z m465.6-73.3H177.2v58.9h445.3v-58.9z m-222-134.3v-676c0-7.9 6.5-14.4 14.4-14.4H588c7.9 0 14.4 6.5 14.4 14.4v676c0 7.9-6.5 14.4-14.4 14.4H414.1c-7.2-0.1-13.6-6.5-13.6-14.4zM573.6 60.6H429.2v647.2h144.4V60.6z"  ></path><path d="M93.7 219.3c-7.9 0-14.4-6.5-15.1-14.4v-77.6c0-7.9 6.5-14.4 14.4-14.4h321.1c7.9 0 14.4 6.5 14.4 14.4v77.6c0 7.9-6.5 14.4-14.4 14.4H93.7zM400.5 141H108.1v49.6h292.4V141z m172.4 63.9v-77.6c0-7.9 6.5-14.4 14.4-14.4h321.1c7.9 0 14.4 6.5 14.4 14.4v77.6c0 7.9-6.5 14.4-14.4 14.4H587.9c-7.9 0-14.3-6.5-15-14.4zM894 141H601.6v49.6H894V141z"  ></path><path d="M776.1 422.6V204.9c0-7.9 6.5-14.4 14.4-14.4H876c7.9 0 14.4 6.5 14.4 14.4v217.7c0 7.9-6.5 14.4-14.4 14.4h-85.5c-7.9 0-14.4-6.5-14.4-14.4z m85.5-203.3h-56.7v188.9h56.7V219.3z"  ></path><path d="M766.8 555.5c0-33 23-61.1 54.6-67.5v-65.4c0-7.9 6.5-14.4 14.4-14.4s14.4 6.5 14.4 14.4v78.3c0 7.9-6.5 14.4-14.4 14.4-23 0-40.9 18.7-40.9 40.9 0 23 18.7 40.9 40.9 40.9 16.5 0 30.9-10.1 37.4-25.1 2.9-7.9 11.5-10.8 18.7-7.9 7.9 2.9 10.8 11.5 7.9 18.7-10.8 25.9-35.9 42.4-63.9 42.4-38.2 0-69.8-30.9-69.1-69.7zM582.2 388.8L409.8 210c-1.4-1.4-2.2-2.9-2.2-5 0-2.2 0.7-3.6 2.2-5L582.9 44.8c2.9-2.2 7.2-2.2 10.1 0.7 2.2 2.9 2.2 7.2-0.7 10.1L424.9 204.9 593 378.8c2.9 2.9 2.9 7.2 0 10.1-1.4 1.4-3.6 2.2-5 2.2-2.2-0.1-4.4-0.8-5.8-2.3z"  ></path><path d="M587.9 725c-2.2 0-4.3-0.7-5.7-2.2L409.8 544c-1.4-1.4-2.2-2.9-2.2-5s0.7-3.6 2.2-5l173.1-155.2c2.9-2.2 7.2-2.2 10.1 0.7 2.2 2.9 2.2 7.2-0.7 10.1L424.9 539 593 712.8c2.9 2.9 2.9 7.2 0 10.1-1.5 1.4-3.6 2.1-5.1 2.1z"  ></path></symbol><symbol id="icon-030608sheshishebeibaozhuangshipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM956.5 296.9h-57.4v28.7c0 15.8-12.8 28.7-28.7 28.7h-86c0 31.7-25.7 57.4-57.4 57.4H612.4c-15.8 0-28.7 12.8-28.7 28.7V555c0 31.7-25.7 57.4-57.4 57.4H408.9c-14.7 0-27.1 11.2-28.5 25.8l-26.1 203.6c0 31.7-25.7 57.4-57.4 57.4h-172c-31.7 0-57.4-25.7-57.4-57.4l100-315.4h6.9c-2.3 0-4.6-0.2-6.8-0.5 8.4-33.8 12.6-50.9 12.6-51.2 0-3.2-2.6-5.7-5.7-5.7h-22.6c0.2-1.8 0.5-3.3 1.2-6.7l-1.7 6.7h-26.5c-15.8 0-28.7-12.8-28.7-28.7V182.2c0-31.7 25.7-57.4 57.4-57.4h573.5c31.7 0 57.4 25.7 57.4 57.4h86c15.8 0 28.7 12.8 28.7 28.7v28.7h57.4m-229.5-57.4H153.5v229.4h20.9c34.8 0 63.1 28.2 63.1 63.1-0.3 7.7-0.3 7.7-1.9 15.3l-109 351.8h170.3l0.3-5.7 26.1-203.6c4.4-44 41.4-77.5 85.6-77.5h117.4V440.3c0-47.5 38.5-86 86-86H727V182.2z m57.3 57.4V297h57.4v-57.4h-57.4z m-372.8 57.3c0 15.8-12.8 28.7-28.7 28.7H268.2c-15.8 0-28.7-12.8-28.7-28.7 0-15.8 12.8-28.7 28.7-28.7H383c15.8 0.1 28.6 12.9 28.6 28.7z"  ></path></symbol><symbol id="icon-030601shexiangtoushipinku" viewBox="0 0 1024 1024"><path d="M512 595.6c96.1 0 174.1-77.9 174.1-174s-77.9-174.1-174-174.1S338 325.4 338 421.5s77.9 174.1 174 174.1z m-60.1-316.4c39.3 0 71.2 31.9 71.2 71.2s-31.9 71.2-71.2 71.2-71.2-31.9-71.2-71.2c0-39.4 31.9-71.2 71.2-71.2zM564 871.3c-16.6 0.8-33.9 1.2-52.1 1.2-192 0-299.8-49.7-301.6-70 0.1-1.7 5.1-10.4 26.2-21.9 15.3-8.9 20.5-28.6 11.6-43.9-8.5-14.6-27-20.1-42.1-12.5-49.5 26.8-59.9 57.3-59.9 78.3 0 92.2 189.6 134.2 365.7 134.2 25.3 0 51-0.9 76.3-2.6-10.5-19.6-18.7-40.6-24.1-62.8z"  ></path><path d="M570.5 722.4c-18.9 4-38.5 6-58.5 6-163 0-295.6-137.7-295.6-306.9-0.1-169.2 132.5-306.9 295.6-306.9s295.7 137.7 295.7 306.9c0 44.1-9 86-25.2 124 12.8-1.9 25.9-2.9 39.3-2.9 10.1 0 20.1 0.6 29.9 1.7 13.1-38.4 20.3-79.8 20.3-122.8 0-204.5-161.5-371-359.8-371s-360 166.5-360 371 161.4 371 359.7 371c15.3 0 30.3-1 45-2.9 1.7-23.3 6.3-45.9 13.6-67.2z"  ></path><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6z"  ></path></symbol><symbol id="icon-030705zichanxinxitupianku" viewBox="0 0 1024 1024"><path d="M263.8 335.7c12.3-12.3 32.2-12.5 44.5-0.3l104.9 105 104.7-105.1c9.2-9 22.8-11.8 34.7-6.8 11.8 4.8 19.7 16.5 19.7 29.4-0.2 8.5-3.5 16.5-9.5 22.5l-73 73.2h50.5c17.7 0 31.9 14.3 31.9 31.9 0 17.7-14.3 31.9-31.9 31.9h-95.4v62.7h65.6c17.7 0 31.9 14.3 31.9 31.9 0 17.5-14.3 31.9-31.9 31.9h-65.6v96.4c0 17.5-14.2 31.7-31.7 31.7s-31.8-14.2-31.8-31.7v-96.4H286c-17.7 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9h95.4v-62.7H286c-17.7 0-31.9-14.3-31.9-31.9 0-17.7 14.3-31.9 31.9-31.9h50.5l-73.1-73.2c-12-12.6-11.9-32.4 0.4-44.7z m294 601.4h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030605zichanxinxishipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM263.8 335.7c12.3-12.3 32.2-12.5 44.5-0.3l104.9 105 104.7-105.1c9.2-9 22.8-11.8 34.7-6.8 11.8 4.8 19.7 16.5 19.7 29.4-0.2 8.5-3.5 16.5-9.5 22.5l-73 73.2h50.5c17.7 0 31.9 14.3 31.9 31.9 0 17.7-14.3 31.9-31.9 31.9h-95.4v62.7h65.6c17.7 0 31.9 14.3 31.9 31.9 0 17.5-14.3 31.9-31.9 31.9h-65.6v96.4c0 17.5-14.2 31.7-31.7 31.7s-31.8-14.2-31.8-31.7v-96.4H286c-17.7 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9h95.4v-62.7H286c-17.7 0-31.9-14.3-31.9-31.9 0-17.7 14.3-31.9 31.9-31.9h50.5l-73.1-73.2c-12-12.6-11.9-32.4 0.4-44.7z m294 601.4h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path></symbol><symbol id="icon-030606sheshishipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM959 530.3L521.9 82.9c-2.8-2.9-6.7-4.5-10.7-4.5-4 0-7.9 1.7-10.8 4.5L62.9 532.2c-4.2 4.3-5.4 10.8-3.1 16.3 2.3 5.6 7.8 9.2 13.8 9.2h81v389.9h70.8V486.8h-19.5l305.3-313.5 306.3 313.5h-15.4v133H873v-62.2h77.3c8.3 0 15-6.7 15-15 0.1-5-2.4-9.5-6.3-12.3z"  ></path><path d="M319.5 869.5h302.6v50.2H319.5v-50.2z m0-98.7h302.6V821H319.5v-50.2z m0-98.7h302.6v50.2H319.5v-50.2z"  ></path></symbol><symbol id="icon-030610xunchayanghugongdanshipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM712.9 483.8c-8.1-9.6-19.7-16.6-33.5-20.4-41.2-11.2-95.3-37.9-119-101.8-11.5-30.9-30.5-54-56.7-68.7 50.1-8.2 88.3-50.4 88.3-101.2C592 135 544.4 89 486 89c-58.5 0-106 46.1-106 102.7 0 33.3 16.5 62.9 41.9 81.7-1.9 0-3.8-0.1-5.7-0.1-8 0-32.5 0-121.1 53.4-42.5 25.6-79.9 51.6-80.3 51.8-0.4 0.3-0.8 0.6-1.1 0.9-20.2 17.3-32.4 63.5-36.7 82.5-8.7 38.5-10.7 73.9-5.3 94.6 4.6 17.9 14.5 23.6 22 25.3 3.1 0.7 6.2 1.1 9.1 1.1 14.6 0 26.3-8.4 34.7-24.9 6-11.9 10.4-27.4 15.4-45.4 3.1-11.2 6.4-22.8 10.4-34.9 10.9-32.7 51.3-59.3 75.9-72.9 0.2 21-1.4 52.9-10.6 73.6-16.3 36.8-31.7 77.3-41 167.4-6.3 61.3-25.3 80.3-59.7 114.8-11.8 11.8-25.2 25.3-40.3 42.6-38.7 44.3-36.9 74.2-28.6 91.6 9.4 19.5 30 28.3 46.4 28.3 2.1 0 4.1-0.1 6.1-0.4 7-0.9 17.8-5 44.5-28.6 16.2-14.4 35.7-33.6 56.1-55.5 33.6-36 76-86.2 85-109.1 8.9-22.7 13.9-53.3 16.5-75.2l38.6 31.7c45.7 37.6 56.2 91.7 68.3 154.3 2.6 13.5 5.3 27.3 8.4 41.6 3.7 16.6 8.5 29 14.9 37.7 9.2 12.8 19.9 15.4 27.3 15.4 29 0 49.9-40.9 49.9-68.4 0-4.5 0.1-10.2 0.2-16.8 1-48 2.8-137.2-30.5-178-10.2-12.4-22.5-24.9-35.6-38.1-29.4-29.7-62.8-63.4-62.8-91.8 0-23.9 9.4-49.4 17.8-67.2 13.2 16.8 32.8 30 49.7 39.1 29.7 16 67.4 28.5 100.8 33.2 5.3 0.7 10.3 1.1 15.1 1.1 31.8 0 45.5-16.6 47.7-32.1 1.5-11-2.2-22.4-10.5-32.2zM415.6 191.6c0-37.4 31.6-67.9 70.4-67.9 38.8 0 70.3 30.5 70.3 67.9s-31.6 67.9-70.3 67.9c-38.8 0.1-70.4-30.4-70.4-67.9z m260.1 321.7c-2.9 0-6.2-0.3-9.9-0.8-55.7-8-128.2-42.3-134.5-73.1-2-9.6-10.7-16.6-20.7-16.6-1.4 0-2.8 0.1-4.1 0.4-5.7 1.1-10.8 4.5-13.8 9.3-1.5 2.3-35.8 56.7-35.8 109.3 0 42.4 37 79.8 72.8 115.9l0.3 0.4c12.3 12.5 24 24.3 33 35.3 25.3 31 23.6 115.2 22.8 155.6-0.2 7.2-0.3 12.7-0.3 17.5 0 7.4-3.1 17.2-8 25.1-2 3.2-3.8 5.3-5.2 6.7-2-3.3-5.4-10.4-8.4-23.8-3.2-14.3-6-29-8.3-40.7-12.9-66.3-25-128.9-80.4-174.4l-59.8-49.1c-3.9-3.1-8.7-4.9-13.6-4.9-2.9 0-5.6 0.6-8.3 1.6-7.5 3.1-12.4 10-12.9 17.9 0 0.6-3.6 58.5-16.7 92.1-5.5 14.1-37.5 54.4-76.1 95.9-47.2 50.9-75 72.4-81.8 75.4h-0.5c-5.1 0-11.5-2.8-14.1-8.2-5.2-11 3.8-31.8 23.5-54.4 14.3-16.4 27.3-29.4 38.7-40.9 37.3-37.5 62-62.2 69.6-135.6 8.8-85.2 22.5-121.6 38.2-157.1 18.2-41.2 12.8-108.9 12.5-111.8-0.9-10.7-10.2-19-21.1-19-3 0-5.9 0.6-8.6 1.8-3.8 1.7-94 41.3-114.9 103.8-4.3 13-7.8 25.4-10.9 36.4-3.3 11.7-6.7 23.8-10.3 33-1.1 2.8-2.1 5-2.9 6.7-0.7-5.1-1.3-13-0.6-24.8 2.6-46.4 19.7-100.2 32-112.2 4.8-3.3 38.9-26.7 77.3-49.8C390 310.4 412.5 308 416.2 308c58.9 0 94.1 20.8 110.6 65.3 12.9 34.7 34.4 63.5 63.9 85.7 22.6 16.9 49.2 29.7 79.1 37.8 13.1 3.5 18.2 11.4 18.3 14-1 0.9-5 2.5-12.4 2.5z"  ></path></symbol><symbol id="icon-030706sheshitupianku" viewBox="0 0 1024 1024"><path d="M959 530.3L521.9 82.9c-2.8-2.9-6.7-4.5-10.7-4.5-4 0-7.9 1.7-10.8 4.5L62.9 532.2c-4.2 4.3-5.4 10.8-3.1 16.3 2.3 5.6 7.8 9.2 13.8 9.2h81v389.9h70.8V486.8h-19.5l305.3-313.5 306.3 313.5h-15.4v133H873v-62.2h77.3c8.3 0 15-6.7 15-15 0.1-5-2.4-9.5-6.3-12.3z"  ></path><path d="M319.5 869.5h302.6v50.2H319.5v-50.2z m0-98.7h302.6V821H319.5v-50.2z m0-98.7h302.6v50.2H319.5v-50.2zM966.6 660c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H684.5c-26.8 0-48.6-21.8-48.6-48.6V708.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V930l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V708.6c0-12.6-10.3-22.9-22.9-22.9H684.5z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0 27.2-22.1 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030603xiangmurenwushipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM137.6 878.7V145c-1.4-19.2 13-35.8 32.1-37.3h683.5c19.2 1.3 33.6 17.9 32.3 37.1v253h62.1V145c1.4-53.5-40.9-98-94.4-99.4H169.9c-53.5 1.4-95.8 45.8-94.4 99.3v733.7c-1.4 53.2 40.6 97.4 93.7 98.7h393.3v-62.1H169.9c-18.8-1-33.3-17-32.3-35.9v-0.6z"  ></path><path d="M465.5 276c-11.8-12-31-12.2-43-0.4l-0.4 0.4-105 93.8-40.4-34.2c-13.3-11.3-33.3-9.7-44.7 3.6 0 0 0 0.1-0.1 0.1-11 12.7-9.6 31.9 3.1 42.9 0.2 0.2 0.4 0.4 0.6 0.5l62.1 52.2c11.7 10.3 29.3 10.3 41 0L463 320.6c13-11.2 14.5-30.8 3.3-43.8-0.3-0.1-0.4-0.5-0.8-0.8zM422 504.6l-105 95.7-40.4-34.2c-13-11.1-32.6-9.6-43.8 3.4s-9.6 32.6 3.4 43.8l62.1 52.2c5.6 4.7 12.6 7.3 19.9 7.5 7.9 0 15.5-3.1 21.1-8.7L463.5 550c14.1-9.8 17.6-29.1 7.8-43.2s-29.1-17.6-43.2-7.8c-2.1 1.6-4.2 3.5-6.1 5.6z m182.7-211.8c-17.2 0-31.1 13.9-31.1 31.1s13.9 31.1 31.1 31.1H791c17.2 0 31.1-13.9 31.1-31.1-0.3-17-14-30.7-31.1-31.1H604.7z"  ></path></symbol><symbol id="icon-030604xiangmuzichanshipinku" viewBox="0 0 1024 1024"><path d="M660.4 657v358.6H1019V657H660.4z m21.1 21.2h42.2v63.3h-42.2v-63.3z m0 84.3h42.2v63.3h-42.2v-63.3z m0 84.4h42.2v63.3h-42.2v-63.3z m0 147.7v-63.3h42.2v63.3h-42.2z m63.3 0V678.2h189.8v316.4H744.8z m253.2 0h-42.2v-63.3H998v63.3z m0-84.3h-42.2V847H998v63.3z m0-84.5h-42.2v-63.3H998v63.3z m0-84.3h-42.2v-63.3H998v63.3z"  ></path><path d="M794.3 889.1l90.8-52.8-90.7-52.8-0.1 105.6zM702.5 566.5v-63.2c124.7-21.2 217.6-62.5 245.7-112.1 5.7 9.5 8.7 20.5 8.7 31.5 0.1 63.4-103.9 118.1-254.4 143.8z m208.8-259.7c-30 20.3-63 35.5-97.9 45.2-197.8 51.5-405.4 51.5-603.2 0-34.9-9.7-67.9-25-97.9-45.2-37.7-27.5-45.5-56.2-45.5-75.4s7.8-47.9 45.5-75.4c29.9-20.3 63-35.5 97.9-45.2 197.8-51.7 405.4-51.7 603.2 0 34.9 9.7 67.9 24.8 97.9 45.2 37.7 27.5 45.5 56.2 45.5 75.4 0 19.4-7.8 48.1-45.5 75.4zM874 207.6c-24.3-16-51.2-28-79.4-35.9-185.6-47.9-380.2-47.9-565.8 0-28 7.7-54.9 19.8-79.2 35.9-11.2 2.3-19.3 12.3-19.3 23.8s8 21.5 19.3 23.8c24.3 16 51 28 79.2 35.9 185.6 47.9 380.2 47.9 565.8 0 28.2-7.7 54.9-19.8 79.4-35.9 9.3-5 16.3-13.7 19.3-23.8-3-10.1-10-18.8-19.3-23.8zM321 503.3v63.2C170.2 541 65.8 486.1 65.8 422.6c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91 246.4 112.2z m0 191.5V758C170.2 732.4 65.8 677.6 65.8 614c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91.1 246.4 112.3z m41.4-262.5c12.3-12.3 32.2-12.5 44.5-0.3l104.9 105 104.7-105.1c9.2-9 22.8-11.8 34.7-6.8 11.8 4.8 19.7 16.5 19.7 29.4-0.2 8.5-3.5 16.5-9.5 22.5l-73 73.2h50.5c17.7 0 31.9 14.3 31.9 31.9 0 17.7-14.3 31.9-31.9 31.9h-95.4v62.7h65.6c17.7 0 31.9 14.3 31.9 31.9 0 17.5-14.3 31.9-31.9 31.9h-65.6v96.4c0 17.5-14.2 31.7-31.7 31.7S480 854.4 480 836.9v-96.4h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9H480V614h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.7 14.3-31.9 31.9-31.9h50.5L362 477c-12-12.6-11.9-32.4 0.4-44.7z m149.2 531.6c-246 0-445.6-71.2-445.6-159.1 0.2-11.2 3.2-22 8.8-31.5 41.1 72.7 221.1 127.6 436.9 127.6"  ></path></symbol><symbol id="icon-030707shebeitupianku" viewBox="0 0 1024 1024"><path d="M218.5 211.3c23.8-10 50.7 16.8 40.9 40.6-6.5 21.7-37.6 29-52.8 11.9-16.8-14.9-9.5-45.7 11.9-52.5z m109.8 0c23.8-9.8 50.7 17 40.9 40.6-6.5 21.7-37.6 29.2-52.8 12.1-17.1-15.3-9.6-46.1 11.9-52.7z m200.3 0.5c78.2-5.4 157.1-0.5 235.4-2.3 19.6 1.6 46.5-5.1 58.6 15.4 12.6 18.2-0.7 47.6-23.6 47.9-78.9 2.3-158.1 0-237.2 1.2-15.2-1.2-33.6 2.6-45.1-10-15.9-15.6-9.3-45.7 11.9-52.2zM218.5 485.2c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 11.9-16.5-15.2-9.2-46 12.2-52.8z m109.8 0c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 12.1-17.1-15.4-9.8-46.2 11.9-53zM218.5 750c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 11.9-16.8-15.2-9.5-45.8 11.9-52.8z m109.8 0c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 12.1-16.8-15.2-9.3-46 12.2-53zM950.9 608.4c30.3 0 54.8 24.6 54.9 54.9v296.9c0 30.3-24.6 54.9-54.9 54.9H632.3c-30.3 0-54.9-24.6-54.9-54.9v-297c0-30.3 24.6-54.8 54.9-54.9l318.6 0.1z m-318.6 29c-14.3 0-25.9 11.6-25.9 25.9v250.1l80.5-71.3c8-7.2 18.5-11.2 29.4-11.1 13.1 0 25 5.7 33.1 14.9l33.6 38 103.2-99.8c19.1-18.4 49.4-17.8 67.8 1.2l22.8 23.6V663.2c0-14.3-11.6-25.9-25.9-25.9l-318.6 0.1z m-25.9 322.8c0 14.3 11.6 25.9 25.9 25.9h202.4l-107-121c-5.5-6.2-15.1-6.9-21.4-1.3l-99.8 88.4v8h-0.1z m344.5 25.9c14.3 0 25.9-11.6 25.9-25.9V850.8l-43.7-45.2c-7.3-7.5-19.2-7.7-26.7-0.5L802.2 905.7l71.1 80.4h77.6zM714.8 791.7c-30.9 0-55.8-25-55.9-55.9 0-30.9 25-55.8 55.9-55.9 30.9 0 55.8 25 55.9 55.9 0 30.9-25 55.9-55.9 55.9z m0-82.5c-14.8 0-26.8 12-26.8 26.8 0.5 14.8 13 26.3 27.7 25.9 14.1-0.5 25.3-11.8 25.9-25.9 0-14.8-12-26.8-26.8-26.8z"  ></path><path d="M501.7 889.7c-125.7 0-251.5 0.2-377.2 0.6 1.4-70 0.5-140.3 0.5-210.1 117.2 0.3 234.4 0.4 351.6 0.4 4.7-22.8 11.9-44.7 21.1-65.5-124.2 0-248.4 0-372.6 0.4 0.2-70 0.9-140.1-0.5-210.1 258.5 0.9 517.2 0.7 775.9 0.2l-0.3 30.2c19 6.2 37.3 14.1 54.6 23.6 0-107.7 0.1-215.4 0.6-323.2-0.5-21 1.6-47.6-18.2-60.9-11-9.3-27.1-5.8-40.4-7.2-255.8 0.5-511.8 0.5-767.8 0-13.5 1.6-30.1-3-41.3 6.5C72.5 84.2 68.8 101.2 70 118c0.5 262.2 0.2 524.2 0.2 786.2-4.2 28.5 21.2 53.7 49.5 49.5h422.4c-15.9-19.7-29.4-41.1-40.4-64z m398.4-766.4c-0.7 72.1-0.2 144.3-0.5 216.4-258.2 0.3-516.4-0.2-774.5 0.3 0-72.4 0.2-144.5-0.2-216.9 258.3 0.7 516.7 0.2 775.2 0.2z"  ></path></symbol><symbol id="icon-030708sheshishebeibaozhuangtupianku" viewBox="0 0 1024 1024"><path d="M956.5 296.9h-57.4v28.7c0 15.8-12.8 28.7-28.7 28.7h-86c0 31.7-25.7 57.4-57.4 57.4H612.4c-15.8 0-28.7 12.8-28.7 28.7V555c0 31.7-25.7 57.4-57.4 57.4H408.9c-14.7 0-27.1 11.2-28.5 25.8l-26.1 203.6c0 31.7-25.7 57.4-57.4 57.4h-172c-31.7 0-57.4-25.7-57.4-57.4l100-315.4h6.9c-2.3 0-4.6-0.2-6.8-0.5 8.4-33.8 12.6-50.9 12.6-51.2 0-3.2-2.6-5.7-5.7-5.7h-22.6c0.2-1.8 0.5-3.3 1.2-6.7l-1.7 6.7h-26.5c-15.8 0-28.7-12.8-28.7-28.7V182.2c0-31.7 25.7-57.4 57.4-57.4h573.5c31.7 0 57.4 25.7 57.4 57.4h86c15.8 0 28.7 12.8 28.7 28.7v28.7h57.4m-229.5-57.4H153.5v229.4h20.9c34.8 0 63.1 28.2 63.1 63.1-0.3 7.7-0.3 7.7-1.9 15.3l-109 351.8h170.3l0.3-5.7 26.1-203.6c4.4-44 41.4-77.5 85.6-77.5h117.4V440.3c0-47.5 38.5-86 86-86H727l0.1-172.1z m57.3 57.4V297h57.4v-57.4h-57.4z m-372.8 57.3c0 15.8-12.8 28.7-28.7 28.7H268.2c-15.8 0-28.7-12.8-28.7-28.7 0-15.8 12.8-28.7 28.7-28.7H383c15.8 0.1 28.6 12.9 28.6 28.7zM957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030710xunchayanghugongdantupianku" viewBox="0 0 1024 1024"><path d="M712.9 483.8c-8.1-9.6-19.7-16.6-33.5-20.4-41.2-11.2-95.3-37.9-119-101.8-11.5-30.9-30.5-54-56.7-68.7 50.1-8.2 88.3-50.4 88.3-101.2C592 135 544.4 89 486 89c-58.5 0-106 46.1-106 102.7 0 33.3 16.5 62.9 41.9 81.7-1.9 0-3.8-0.1-5.7-0.1-8 0-32.5 0-121.1 53.4-42.5 25.6-79.9 51.6-80.3 51.8-0.4 0.3-0.8 0.6-1.1 0.9-20.2 17.3-32.4 63.5-36.7 82.5-8.7 38.5-10.7 73.9-5.3 94.6 4.6 17.9 14.5 23.6 22 25.3 3.1 0.7 6.2 1.1 9.1 1.1 14.6 0 26.3-8.4 34.7-24.9 6-11.9 10.4-27.4 15.4-45.4 3.1-11.2 6.4-22.8 10.4-34.9 10.9-32.7 51.3-59.3 75.9-72.9 0.2 21-1.4 52.9-10.6 73.6-16.3 36.8-31.7 77.3-41 167.4-6.3 61.3-25.3 80.3-59.7 114.8-11.8 11.8-25.2 25.3-40.3 42.6-38.7 44.3-36.9 74.2-28.6 91.6 9.4 19.5 30 28.3 46.4 28.3 2.1 0 4.1-0.1 6.1-0.4 7-0.9 17.8-5 44.5-28.6 16.2-14.4 35.7-33.6 56.1-55.5 33.6-36 76-86.2 85-109.1 8.9-22.7 13.9-53.3 16.5-75.2l38.6 31.7c45.7 37.6 56.2 91.7 68.3 154.3 2.6 13.5 5.3 27.3 8.4 41.6 3.7 16.6 8.5 29 14.9 37.7 9.2 12.8 19.9 15.4 27.3 15.4 29 0 49.9-40.9 49.9-68.4 0-4.5 0.1-10.2 0.2-16.8 1-48 2.8-137.2-30.5-178-10.2-12.4-22.5-24.9-35.6-38.1-29.4-29.7-62.8-63.4-62.8-91.8 0-23.9 9.4-49.4 17.8-67.2 13.2 16.8 32.8 30 49.7 39.1 29.7 16 67.4 28.5 100.8 33.2 5.3 0.7 10.3 1.1 15.1 1.1 31.8 0 45.5-16.6 47.7-32.1 1.5-11-2.2-22.4-10.5-32.2zM415.6 191.6c0-37.4 31.6-67.9 70.4-67.9s70.3 30.5 70.3 67.9-31.6 67.9-70.3 67.9c-38.8 0.1-70.4-30.4-70.4-67.9z m260.1 321.7c-2.9 0-6.2-0.3-9.9-0.8-55.7-8-128.2-42.3-134.5-73.1-2-9.6-10.7-16.6-20.7-16.6-1.4 0-2.8 0.1-4.1 0.4-5.7 1.1-10.8 4.5-13.8 9.3-1.5 2.3-35.8 56.7-35.8 109.3 0 42.4 37 79.8 72.8 115.9l0.3 0.4c12.3 12.5 24 24.3 33 35.3 25.3 31 23.6 115.2 22.8 155.6-0.2 7.2-0.3 12.7-0.3 17.5 0 7.4-3.1 17.2-8 25.1-2 3.2-3.8 5.3-5.2 6.7-2-3.3-5.4-10.4-8.4-23.8-3.2-14.3-6-29-8.3-40.7-12.9-66.3-25-128.9-80.4-174.4l-59.8-49.1c-3.9-3.1-8.7-4.9-13.6-4.9-2.9 0-5.6 0.6-8.3 1.6-7.5 3.1-12.4 10-12.9 17.9 0 0.6-3.6 58.5-16.7 92.1-5.5 14.1-37.5 54.4-76.1 95.9-47.2 50.9-75 72.4-81.8 75.4h-0.5c-5.1 0-11.5-2.8-14.1-8.2-5.2-11 3.8-31.8 23.5-54.4 14.3-16.4 27.3-29.4 38.7-40.9 37.3-37.5 62-62.2 69.6-135.6 8.8-85.2 22.5-121.6 38.2-157.1 18.2-41.2 12.8-108.9 12.5-111.8-0.9-10.7-10.2-19-21.1-19-3 0-5.9 0.6-8.6 1.8-3.8 1.7-94 41.3-114.9 103.8-4.3 13-7.8 25.4-10.9 36.4-3.3 11.7-6.7 23.8-10.3 33-1.1 2.8-2.1 5-2.9 6.7-0.7-5.1-1.3-13-0.6-24.8 2.6-46.4 19.7-100.2 32-112.2 4.8-3.3 38.9-26.7 77.3-49.8C390 310.4 412.5 308 416.2 308c58.9 0 94.1 20.8 110.6 65.3 12.9 34.7 34.4 63.5 63.9 85.7 22.6 16.9 49.2 29.7 79.1 37.8 13.1 3.5 18.2 11.4 18.3 14-1 0.9-5 2.5-12.4 2.5z"  ></path><path d="M957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030709xiangmujianshetupianku" viewBox="0 0 1024 1024"><path d="M261.1 842.1v-120c0-7.9 5.1-14.4 11.4-14.4h358.9c6.3 0 11.4 6.5 11.4 14.4v120c0 7.9-5.1 14.4-11.4 14.4H271.9c-5.7 0-10.8-6.5-10.8-14.4zM620 827.8v-91.2H283.9v91.2H620z"  ></path><path d="M273.6 806.2v-40.9c0-4.3 2.5-7.2 5.1-7.2h250.5c3 0 5.1 3.6 5.1 7.2 0 4.3-2.5 7.2-5.1 7.2H283.7v33.8c0 4.3-2.5 7.2-5.1 7.2s-5-3-5-7.3zM156.9 929.8v-87.6c0-7.9 4.6-14.4 10.1-14.4h465.6c5.6 0 10.1 6.5 10.1 14.4v87.6c0 7.9-4.6 14.4-10.1 14.4H167.1c-5.6-0.1-10.2-6.5-10.2-14.4z m465.6-73.3H177.2v58.9h445.3v-58.9z m-222-134.3v-676c0-7.9 6.5-14.4 14.4-14.4H588c7.9 0 14.4 6.5 14.4 14.4v676c0 7.9-6.5 14.4-14.4 14.4H414.1c-7.2-0.1-13.6-6.5-13.6-14.4zM573.6 60.6H429.2v647.2h144.4V60.6z"  ></path><path d="M93.7 219.3c-7.9 0-14.4-6.5-15.1-14.4v-77.6c0-7.9 6.5-14.4 14.4-14.4h321.1c7.9 0 14.4 6.5 14.4 14.4v77.6c0 7.9-6.5 14.4-14.4 14.4H93.7zM400.5 141H108.1v49.6h292.4V141z m172.4 63.9v-77.6c0-7.9 6.5-14.4 14.4-14.4h321.1c7.9 0 14.4 6.5 14.4 14.4v77.6c0 7.9-6.5 14.4-14.4 14.4H587.9c-7.9 0-14.3-6.5-15-14.4zM894 141H601.6v49.6H894V141z"  ></path><path d="M776.1 422.6V204.9c0-7.9 6.5-14.4 14.4-14.4H876c7.9 0 14.4 6.5 14.4 14.4v217.7c0 7.9-6.5 14.4-14.4 14.4h-85.5c-7.9 0-14.4-6.5-14.4-14.4z m85.5-203.3h-56.7v188.9h56.7V219.3z"  ></path><path d="M766.8 555.5c0-33 23-61.1 54.6-67.5v-65.4c0-7.9 6.5-14.4 14.4-14.4s14.4 6.5 14.4 14.4v78.3c0 7.9-6.5 14.4-14.4 14.4-23 0-40.9 18.7-40.9 40.9 0 23 18.7 40.9 40.9 40.9 16.5 0 30.9-10.1 37.4-25.1 2.9-7.9 11.5-10.8 18.7-7.9 7.9 2.9 10.8 11.5 7.9 18.7-10.8 25.9-35.9 42.4-63.9 42.4-38.2 0-69.8-30.9-69.1-69.7zM582.2 388.8L409.8 210c-1.4-1.4-2.2-2.9-2.2-5 0-2.2 0.7-3.6 2.2-5L582.9 44.8c2.9-2.2 7.2-2.2 10.1 0.7 2.2 2.9 2.2 7.2-0.7 10.1L424.9 204.9 593 378.8c2.9 2.9 2.9 7.2 0 10.1-1.4 1.4-3.6 2.2-5 2.2-2.2-0.1-4.4-0.8-5.8-2.3z"  ></path><path d="M587.9 725c-2.2 0-4.3-0.7-5.7-2.2L409.8 544c-1.4-1.4-2.2-2.9-2.2-5s0.7-3.6 2.2-5l173.1-155.2c2.9-2.2 7.2-2.2 10.1 0.7 2.2 2.9 2.2 7.2-0.7 10.1L424.9 539 593 712.8c2.9 2.9 2.9 7.2 0 10.1-1.5 1.4-3.6 2.1-5.1 2.1zM957.2 655c26.8 0 48.6 21.8 48.6 48.6v262.8c0 26.8-21.8 48.6-48.6 48.6H675.1c-26.8 0-48.6-21.8-48.6-48.6V703.6c0-26.8 21.8-48.6 48.6-48.6h282.1z m-282.1 25.7c-12.6 0-22.9 10.3-22.9 22.9V925l71.2-63.1c7.1-6.4 16.4-9.9 26-9.8 11.6 0 22.1 5.1 29.3 13.2l29.7 33.6 91.3-88.3c16.9-16.3 43.7-15.8 60 1l20.2 20.9V703.6c0-12.6-10.3-22.9-22.9-22.9H675.1z m-22.9 285.8c0 12.6 10.3 22.9 22.9 22.9h179.1l-94.8-107.1c-4.9-5.5-13.4-6.1-18.9-1.2l-88.3 78.3v7.1z m305 22.9c12.6 0 22.9-10.3 22.9-22.9v-96.8l-38.7-40c-6.4-6.6-17-6.9-23.7-0.4l-92.2 89 63 71.2h68.7v-0.1z m-209-172c-27.3 0-49.4-22.1-49.4-49.4 0-27.3 22.1-49.4 49.4-49.4 27.3 0 49.4 22.1 49.4 49.4 0.1 27.2-22 49.4-49.4 49.4z m0-73.1c-13.1 0-23.7 10.6-23.7 23.7 0.5 13.1 11.5 23.3 24.6 22.9 12.5-0.4 22.4-10.4 22.9-22.9-0.1-13.1-10.7-23.7-23.8-23.7z"  ></path></symbol><symbol id="icon-030704xiangmuzichantupianku" viewBox="0 0 1024 1024"><path d="M702.5 566.5v-63.2c124.7-21.2 217.6-62.5 245.7-112.1 5.7 9.5 8.7 20.5 8.7 31.5 0.1 63.4-103.9 118.1-254.4 143.8z m208.8-259.7c-30 20.3-63 35.5-97.9 45.2-197.8 51.5-405.4 51.5-603.2 0-34.9-9.7-67.9-25-97.9-45.2-37.7-27.5-45.5-56.2-45.5-75.4s7.8-47.9 45.5-75.4c29.9-20.3 63-35.5 97.9-45.2 197.8-51.7 405.4-51.7 603.2 0 34.9 9.7 67.9 24.8 97.9 45.2 37.7 27.5 45.5 56.2 45.5 75.4 0 19.4-7.8 48.1-45.5 75.4zM874 207.6c-24.3-16-51.2-28-79.4-35.9-185.6-47.9-380.2-47.9-565.8 0-28 7.7-54.9 19.8-79.2 35.9-11.2 2.3-19.3 12.3-19.3 23.8s8 21.5 19.3 23.8c24.3 16 51 28 79.2 35.9 185.6 47.9 380.2 47.9 565.8 0 28.2-7.7 54.9-19.8 79.4-35.9 9.3-5 16.3-13.7 19.3-23.8-3-10.1-10-18.8-19.3-23.8zM321 503.3v63.2C170.2 541 65.8 486.1 65.8 422.6c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91 246.4 112.2z m0 191.5V758C170.2 732.4 65.8 677.6 65.8 614c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91.1 246.4 112.3z m41.4-262.5c12.3-12.3 32.2-12.5 44.5-0.3l104.9 105 104.7-105.1c9.2-9 22.8-11.8 34.7-6.8 11.8 4.8 19.7 16.5 19.7 29.4-0.2 8.5-3.5 16.5-9.5 22.5l-73 73.2h50.5c17.7 0 31.9 14.3 31.9 31.9 0 17.7-14.3 31.9-31.9 31.9h-95.4v62.7h65.6c17.7 0 31.9 14.3 31.9 31.9 0 17.5-14.3 31.9-31.9 31.9h-65.6v96.4c0 17.5-14.2 31.7-31.7 31.7S480 854.4 480 836.9v-96.4h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9H480V614h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.7 14.3-31.9 31.9-31.9h50.5L362 477c-12-12.6-11.9-32.4 0.4-44.7z m149.2 531.6c-246 0-445.6-71.2-445.6-159.1 0.2-11.2 3.2-22 8.8-31.5 41.1 72.7 221.1 127.6 436.9 127.6M971.7 670.5c26.4 0 47.7 21.4 47.7 47.7v258c0 26.4-21.4 47.7-47.7 47.7h-277c-26.4 0-47.7-21.4-47.7-47.7v-258c0-26.4 21.4-47.7 47.7-47.7h277z m-277 25.3c-12.4 0-22.5 10.1-22.5 22.5v217.3l69.9-61.9c7-6.3 16.1-9.7 25.5-9.6 11.4 0 21.7 5 28.8 12.9l29.2 33 89.6-86.7c16.6-16 42.9-15.5 58.9 1l19.8 20.5V718.1c0-12.4-10.1-22.5-22.5-22.5l-276.7 0.2z m-22.4 280.5c0 12.4 10.1 22.5 22.5 22.5h175.8l-93-105.1c-4.8-5.4-13.2-6-18.6-1.2l-86.7 76.8v7z m299.4 22.4c12.4 0 22.5-10.1 22.5-22.5v-95.1l-38-39.3c-6.3-6.5-16.7-6.7-23.2-0.4l-90.5 87.4 61.8 69.9h67.4zM766.5 829.9c-26.8 0-48.5-21.7-48.5-48.5s21.7-48.5 48.5-48.5 48.5 21.7 48.5 48.5c0 26.7-21.7 48.5-48.5 48.5z m0-71.8c-12.8 0-23.3 10.4-23.3 23.3 0.5 12.8 11.3 22.9 24.1 22.5 12.2-0.4 22-10.2 22.5-22.5 0-12.8-10.5-23.3-23.3-23.3z"  ></path></symbol><symbol id="icon-020505shebeitaizhangbiao" viewBox="0 0 1024 1024"><path d="M847.9 1020.6c-19.5 0-39-4.7-54.3-14.2l-96.4-60.2c-5.4-3.3-7-10.4-3.7-15.8s10.4-7 15.8-3.7l96.4 60.2c22.8 14.2 61.4 14.2 84.2 0l96.4-60.2c5.4-3.3 12.5-1.7 15.8 3.7 3.3 5.4 1.7 12.5-3.7 15.8l-96.3 60.2c-15.1 9.5-34.6 14.2-54.2 14.2z"  ></path><path d="M847.9 938.4c-19.5 0-39-4.7-54.3-14.2L697.2 864c-16.3-10.2-25.4-24.4-25.4-39.9s9-29.6 25.4-39.9l96.4-60.2c30.4-19 78.1-19 108.6 0l96.4 60.2c16.3 10.2 25.4 24.4 25.4 39.9s-9 29.6-25.4 39.9l-96.4 60.2c-15.2 9.4-34.7 14.2-54.3 14.2z m0-205.7c-15.3 0-30.7 3.5-42.1 10.7l-96.3 60.3c-9.4 5.8-14.6 13.1-14.6 20.4 0 7.3 5.2 14.5 14.6 20.4l96.4 60.2c22.8 14.2 61.4 14.2 84.2 0l96.4-60.2c9.4-5.8 14.6-13.1 14.6-20.4s-5.2-14.5-14.6-20.4l-96.4-60.2c-11.5-7.2-26.8-10.8-42.2-10.8zM309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z"  ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z"  ></path></symbol><symbol id="icon-020503daleisheshitaizhangbiao" viewBox="0 0 1024 1024"><path d="M703.3 772.2H685c-7.6 0-13.7-8.3-13.7-18.6S677.5 735 685 735h18.2c7.6 0 13.7 8.3 13.7 18.6s-6.1 18.6-13.6 18.6zM1004.3 772.2H758c-7.6 0-13.7-8.3-13.7-18.6S750.4 735 758 735h246.3c7.6 0 13.7 8.3 13.7 18.6s-6.1 18.6-13.7 18.6zM703.3 885.6H685c-7.6 0-13.7-8.3-13.7-18.6s6.1-18.6 13.7-18.6h18.2c7.6 0 13.7 8.3 13.7 18.6 0.1 10.3-6.1 18.6-13.6 18.6zM1004.3 885.6H758c-7.6 0-13.7-8.3-13.7-18.6s6.1-18.6 13.7-18.6h246.3c7.6 0 13.7 8.3 13.7 18.6s-6.1 18.6-13.7 18.6zM703.3 998.6H685c-7.6 0-13.7-8.3-13.7-18.6s6.1-18.6 13.7-18.6h18.2c7.6 0 13.7 8.3 13.7 18.6 0.1 10.2-6.1 18.6-13.6 18.6zM1004.3 998.6H758c-7.6 0-13.7-8.3-13.7-18.6s6.1-18.6 13.7-18.6h246.3c7.6 0 13.7 8.3 13.7 18.6 0 10.2-6.1 18.6-13.7 18.6zM309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z"  ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z"  ></path></symbol><symbol id="icon-020504xiaoleisheshitaizhangbiao" viewBox="0 0 1024 1024"><path d="M758.8 859.4h-53.4c-29.4 0-53.4 24-53.4 53.4v53.4c0 29.4 24 53.4 53.4 53.4h53.4c29.4 0 53.4-24 53.4-53.4v-53.4c0-29.4-24.1-53.4-53.4-53.4z m26.7 106.8c0 14.7-12 26.7-26.7 26.7h-53.4c-14.7 0-26.7-12-26.7-26.7v-53.4c0-14.7 12-26.7 26.7-26.7h53.4c14.7 0 26.7 12 26.7 26.7v53.4z m160.1-293.7h-53.4c-29.4 0-53.4 24-53.4 53.4v53.4c0 29.4 24 53.4 53.4 53.4h53.4c29.4 0 53.4-24 53.4-53.4v-53.4c0-29.3-24-53.4-53.4-53.4z m26.7 106.8c0 14.7-12 26.7-26.7 26.7h-53.4c-14.7 0-26.7-12-26.7-26.7v-53.4c0-14.7 12-26.7 26.7-26.7h53.4c14.7 0 26.7 12 26.7 26.7v53.4z m-26.7 80.1h-53.4c-29.4 0-53.4 24-53.4 53.4v53.4c0 29.4 24 53.4 53.4 53.4h53.4c29.4 0 53.4-24 53.4-53.4v-53.4c0-29.4-24-53.4-53.4-53.4z m26.7 106.8c0 14.7-12 26.7-26.7 26.7h-53.4c-14.7 0-26.7-12-26.7-26.7v-53.4c0-14.7 12-26.7 26.7-26.7h53.4c14.7 0 26.7 12 26.7 26.7v53.4zM758.8 672.5h-53.4c-29.4 0-53.4 24-53.4 53.4v53.4c0 29.4 24 53.4 53.4 53.4h53.4c29.4 0 53.4-24 53.4-53.4v-53.4c0-29.3-24.1-53.4-53.4-53.4z m26.7 106.8c0 14.7-12 26.7-26.7 26.7h-53.4c-14.7 0-26.7-12-26.7-26.7v-53.4c0-14.7 12-26.7 26.7-26.7h53.4c14.7 0 26.7 12 26.7 26.7v53.4zM309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z"  ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z"  ></path></symbol><symbol id="icon-020201LIDshejigongju-sc" viewBox="0 0 1024 1024"><path d="M799.8 630c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.2 19.7-25 19.7z m0-96.4l-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5S850 632 850 610.2c0-18.5-33.2-57.4-39.7-64.9l-10.5-11.7z m-83.6 237c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m0-96.5L706 685.9c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5 27.7 0 50.1-17.7 50.1-39.5 0-18.5-33.2-57.4-39.7-64.9l-10.6-11.8z m-170.4-4.3c-14.6 0-26.5-9.4-26.5-20.9 0-6.9 12.4-25.9 26.5-43.7 14.1 17.8 26.5 36.8 26.5 43.7 0 11.6-11.9 20.9-26.5 20.9z m0-102.1l-10.9 12.5c-7 8.1-42 49.1-42 68.7 0 23 23.7 41.8 53 41.8s53-18.7 53-41.8c0-19.6-35.1-60.7-42-68.7l-11.1-12.5zM179.2 902.4h30.3v23.9h-30.3v-23.9z m272.4-83.6h30.3v23.9h-30.3v-23.9zM376 842.7h30.3v23.9H376v-23.9z m454.2 35.8h30.3v23.9h-30.3v-23.9z m60.5-11.9H921v23.9h-30.3v-23.9z m60.5-35.9c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.3 14.7-72.5 28.7-137.1 28.7-83.6 0.1-151.4-53.6-151.4-119.5v-40.4c32.6 38.8 88.3 64.3 151.4 64.3 71.7 0 111.9-15.8 150.6-31.2 37.3-14.7 72.5-28.7 137.1-28.7s99.7 13.8 137.1 28.7c38.8 15.2 78.9 31.2 150.6 31.2 63.2 0 118.8-25.6 151.4-64.3v40.4zM73.1 615.6c0-66 67.9-119.6 151.4-119.6 64.6 0 99.7 13.8 137.1 28.7 38.8 15.2 78.9 31.2 150.6 31.2s111.9-15.8 150.6-31.2C700.2 510 735.3 496 800 496c83.6 0 151.4 53.7 151.4 119.5v95.6c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.4 14.7-72.6 28.7-137.2 28.7-83.6 0-151.4-53.7-151.4-119.5v-95.5z m201.4 355.6c42.4-5.3 71.8-16.8 100.6-28.2 37.2-14.6 72.4-28.6 137-28.6s99.7 13.8 137.1 28.7c14.2 5.6 28.6 11.3 44.6 16.2l30.1 7.8c21.2 4.4 45.5 7.3 75.7 7.3 100.1 0 181.7-64.4 181.7-143.4V615.6c0.2-79.2-81.2-143.4-181.5-143.4-71.7 0-111.9 15.8-150.6 31.2C611.9 518 576.6 532 512.1 532s-99.7-13.8-137.1-28.7c-38.9-15.2-78.9-31.2-150.6-31.2-100.1 0-181.7 64.4-181.7 143.4v215.2c0 79.1 81.5 143.4 181.7 143.4" fill="#062F8C" ></path><path d="M203.6 576.5l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.6-33.1-57.3-39.7-64.9z m-10.4 84.1c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m131.4 32.1l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0.1-18.6-33.1-57.4-39.7-64.9z m-10.3 84c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.9-11.2 19.7-25 19.7z m76.1-209.6l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.8 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.4-33.2-57.2-39.7-64.8zM380 651.2c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z" fill="#062F8C" ></path><path d="M145.8 410.1V52.5h59.5v296.6h148.5v61h-208z m316.4 0V49.6h59.5v360.5h-59.5zM646.1 49.6H755c27.5 0 48.3 3.1 62.3 9.3S844.2 75.4 856 90s21 33.6 27.8 56.8c6.7 23.3 10.1 52.2 10.1 86.9 0 31.2-3.5 58.3-10.6 81.3s-15.9 41.2-26.8 54.7c-10.9 13.4-23.9 23.6-39.1 30.4-15.3 6.8-35 10.2-59.1 10.2H646.1V49.6z m59.5 61v238.6h44.7c19.2 0 33.1-1.8 41.6-5.4 8.6-3.6 15.6-9.1 21.1-16.3 5.5-7.3 10.1-18.8 13.6-34.6 3.6-15.7 5.4-36.5 5.4-62.2 0-26.7-1.9-47.7-5.6-63.2-3.7-15.4-9.5-27.5-17.2-36.4-7.8-8.9-17.2-14.6-28.4-17.4-8.4-2.1-24.5-3.2-48.4-3.2l-26.8 0.1z" fill="#E60012" ></path></symbol><symbol id="icon-0103zichanguanli-sc" viewBox="0 0 1024 1024"><path d="M715.6 754v-67.4c132.9-22.6 231.8-66.7 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 125.9-271 153.3z m0-204v-67.3c132.9-22.6 231.8-66.5 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 126-271 153.2z m222.2-276.4c-32 21.5-67.1 37.8-104.2 48.2-210.6 54.9-431.9 54.9-642.5 0-37.1-10.3-72.4-26.6-104.2-48.2-40.2-29.3-48.5-59.8-48.5-80.3s8.4-51 48.5-80.3c31.9-21.5 67.1-37.8 104.2-48.2 210.6-55 431.9-55 642.5 0C870.7 75.2 906 91.3 937.8 113c40.2 29.3 48.5 59.8 48.5 80.3s-8.4 51-48.5 80.3z m-39.7-105.7c-26-17-54.4-29.9-84.5-38.3-197.7-51-405-51-602.5 0-29.9 8.2-58.5 21.1-84.3 38.3-12 2.5-20.6 13-20.6 25.3s8.5 22.9 20.6 25.3c26 17 54.4 29.9 84.3 38.3 197.7 51 405 51 602.5 0 30.1-8.2 58.5-21.1 84.5-38.3 10-5.4 17.5-14.5 20.5-25.4-3.2-10.7-10.5-19.8-20.5-25.2z m-589 314.8V550C148.5 522.8 37.4 464.4 37.4 396.7c0.1-11.8 3.3-23.5 9.3-33.6 30 53 129.2 97.1 262.4 119.6z m0 203.8v67.3C148.5 726.7 37.4 668.3 37.4 600.5c0.1-11.8 3.3-23.5 9.3-33.6 30 53.1 129.2 97.2 262.4 119.6z m203 219.5c229.9 0 421.4-58.3 465.2-135.8 6 10.2 9.1 21.8 9.3 33.6 0 93.6-212.4 169.6-474.5 169.6-262 0-474.5-75.8-474.5-169.6 0.1-11.8 3.3-23.5 9.3-33.6C90.5 847.7 282.2 906 512.1 906z" fill="#062F8C" ></path><path d="M353.1 407c13-13 34.2-13.3 47.4-0.3l111.7 112 111.6-112c9.7-9.6 24.2-12.6 36.9-7.3 12.7 5.2 20.9 17.5 21.1 31.3-0.1 9.1-3.7 17.6-10 24.1l-77.8 78h53.8c18.8 0 33.9 15.3 33.9 33.9 0 18.8-15.3 33.9-33.9 33.9H546.2v66.8h101.7c18.8 0 33.9 15.3 33.9 33.9s-15.3 33.9-33.9 33.9H546.2V838c0 18.7-15.1 33.8-33.8 33.8s-33.8-15.1-33.8-33.8V735.3H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.7 15.3-33.9 33.9-33.9h101.7v-66.8H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.8 15.3-33.9 33.9-33.9h53.8l-77.9-78.1c-12.9-13.5-12.7-34.6 0.3-47.8z" fill="#E60012" ></path></symbol><symbol id="icon-0103zichanguanli" viewBox="0 0 1024 1024"><path d="M715.6 754v-67.4c132.9-22.6 231.8-66.7 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 125.9-271 153.3z m0-204v-67.3c132.9-22.6 231.8-66.5 261.7-119.5 6 10.2 9.1 21.8 9.3 33.6-0.2 67.6-110.8 126-271 153.2z m222.2-276.4c-32 21.5-67.1 37.8-104.2 48.2-210.6 54.9-431.9 54.9-642.5 0-37.1-10.3-72.4-26.6-104.2-48.2-40.2-29.3-48.5-59.8-48.5-80.3s8.4-51 48.5-80.3c31.9-21.5 67.1-37.8 104.2-48.2 210.6-55 431.9-55 642.5 0C870.7 75.2 906 91.3 937.8 113c40.2 29.3 48.5 59.8 48.5 80.3s-8.4 51-48.5 80.3z m-39.7-105.7c-26-17-54.4-29.9-84.5-38.3-197.7-51-405-51-602.5 0-29.9 8.2-58.5 21.1-84.3 38.3-12 2.5-20.6 13-20.6 25.3s8.5 22.9 20.6 25.3c26 17 54.4 29.9 84.3 38.3 197.7 51 405 51 602.5 0 30.1-8.2 58.5-21.1 84.5-38.3 10-5.4 17.5-14.5 20.5-25.4-3.2-10.7-10.5-19.8-20.5-25.2z m-589 314.8V550C148.5 522.8 37.4 464.4 37.4 396.7c0.1-11.8 3.3-23.5 9.3-33.6 30 53 129.2 97.1 262.4 119.6z m0 203.8v67.3C148.5 726.7 37.4 668.3 37.4 600.5c0.1-11.8 3.3-23.5 9.3-33.6 30 53.1 129.2 97.2 262.4 119.6z m203 219.5c229.9 0 421.4-58.3 465.2-135.8 6 10.2 9.1 21.8 9.3 33.6 0 93.6-212.4 169.6-474.5 169.6-262 0-474.5-75.8-474.5-169.6 0.1-11.8 3.3-23.5 9.3-33.6C90.5 847.7 282.2 906 512.1 906z"  ></path><path d="M353.1 407c13-13 34.2-13.3 47.4-0.3l111.7 112 111.6-112c9.7-9.6 24.2-12.6 36.9-7.3 12.7 5.2 20.9 17.5 21.1 31.3-0.1 9.1-3.7 17.6-10 24.1l-77.8 78h53.8c18.8 0 33.9 15.3 33.9 33.9 0 18.8-15.3 33.9-33.9 33.9H546.2v66.8h101.7c18.8 0 33.9 15.3 33.9 33.9s-15.3 33.9-33.9 33.9H546.2V838c0 18.7-15.1 33.8-33.8 33.8s-33.8-15.1-33.8-33.8V735.3H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.7 15.3-33.9 33.9-33.9h101.7v-66.8H376.9c-18.8 0-33.9-15.3-33.9-33.9 0-18.8 15.3-33.9 33.9-33.9h53.8l-77.9-78.1c-12.9-13.5-12.7-34.6 0.3-47.8z"  ></path></symbol><symbol id="icon-shouchuanglogo" viewBox="0 0 1024 1024"><path d="M294.8 362.1c-28.1 73.8 21.1 160.1 21.4 160.7 118.6 188.4 354 136.7 356.7 136.1 51-9.3 84.8-31 100.5-64.5 7.4-15.9 10.3-33.3 10.3-50.8 0-51.4-24.9-102.2-31.8-115.5H456.4l34.4 50.3h205.6l1.6 4.5c9.4 28.4 8.2 52-3.6 70.3-18.5 28.6-55.9 32.7-56.9 32.7C511 611 434.7 534.8 431.6 531.6c-44.9-45-64.2-87.1-57.3-125.2 9-49.4 58.7-72.5 60.7-73.4l0.4-0.2 0.5-0.2c86.1-24.4 147.9 24.6 158.9 34.2H722c-152.6-144.2-318.3-93.6-320-93.1-55.7 18.2-91.7 47.9-107.2 88.4" fill="#E60012" ></path><path d="M391.9 664C285.4 599.8 257.3 493.3 250 437.8c-6.7 25.9-10.2 51.1-10.2 75.1 0 87.4 43.5 160.2 125.6 204.4 163.7 88 289.5 13.6 342.5-29.3-76.8 27.6-202.8 44-316-24" fill="#E60012" ></path><path d="M999.7 510.9C999.3 244.3 785 27.3 518.4 23.7h-4c-6.4 9.3-92.2 125-127.5 174.7l2.3-0.5 0.9-0.2 4.1-1.2 6-1.8 3.4-0.9c3.6-1 7.2-1.9 10.9-2.7l1.4-0.4c18-4.3 36.4-7.3 55.3-8.9C654 166.1 818.7 283.1 877.1 455.4c8.4 24 14.7 49 18.8 74.7l0.7 5.1 0.9 7 1.2 11c3.1 32.7 2.7 64.9-0.8 96-12 122.4-77.1 233.4-178 303.7 2-0.9 4.1-1.8 6.1-2.9l0.1-0.1c3.5-1.7 7-3.5 10.5-5.3l3.4-1.8 7-3.7 4.1-2.3 6.1-3.5 4.5-2.7 5.6-3.3 4.6-2.9 5.3-3.4 4.8-3.2 4.9-3.3c1.6-1.2 3.3-2.3 4.9-3.5l4.7-3.2 5-3.7 4.3-3.2 5.1-3.9 4.2-3.2 5.1-4.2 4-3.2 5.1-4.3 3.7-3.2 5.2-4.6 3.5-3.2 5.1-4.8 3.4-3.2 5.1-4.9 3.2-3.2c1.7-1.7 3.4-3.5 5-5.2l3.1-3.2c1.7-1.8 3.3-3.5 4.9-5.3l2.9-3.2 4.9-5.5 2.8-3.2 4.8-5.7 2.6-3.2 4.8-5.9 2.5-3.2c2.4-3 4.8-6.1 7.1-9.3l4.5-6.2 2.4-3.3 4.3-6.4 2.3-3.2 4.3-6.5c0.6-1.1 1.4-2.2 2.1-3.4l4-6.5 2.1-3.4 4-6.7c0.6-1.2 1.3-2.3 2-3.5l3.8-6.7 1.9-3.5 3.7-6.8 1.8-3.6 3.4-6.8 1.8-3.7 3.2-7c1.6-3.6 3.2-7.1 4.8-10.8l1.6-3.9c1-2.3 1.9-4.6 2.9-7l1.6-4c0.9-2.3 1.8-4.7 2.6-7l1.2-3c0.3-1 0.7-2.1 1.1-3.1 6.5-17.8 12-36.1 16.5-54.9 2.1-10.1 3.9-20.2 5.5-30.4l0.3-1.8c3.8-23.6 5.9-47.7 6.1-72.2v-0.7l0.1-4.6-0.1-0.6M23.5 512.5c0.3 266.6 214.6 483.6 481.2 487.3h4c6.4-9.3 92.2-125 127.5-174.7l-2.3 0.5-0.9 0.3-4.1 1.2c-6.7 2.1-13.5 3.9-20.3 5.5l-1.4 0.3c-18.2 4.3-36.7 7.3-55.4 8.9C369.1 857.4 204.4 740.4 146 568.1c-8.5-24.3-14.7-49.3-18.8-74.8-0.3-1.6-0.5-3.4-0.7-5.1l-0.9-7c-4.3-35.5-4.4-71.5-0.4-107 12-122.4 77.1-233.4 178.1-303.6l-6.1 2.9h-0.2c-3.5 1.8-7 3.5-10.5 5.4l-3.4 1.8c-2.4 1.2-4.7 2.4-7 3.7l-4.1 2.4c-2 1.1-4.1 2.3-6.1 3.4l-4.5 2.7-5.6 3.4-4.6 2.9c-1.8 1.1-3.5 2.2-5.3 3.3l-4.8 3.1-5 3.3-4.9 3.5c-1.6 1.1-3.2 2.1-4.7 3.3l-5 3.7-4.3 3.2-5.1 3.9-4.2 3.2-5.1 4.2-4 3.2-5.1 4.3-3.7 3.2-5.2 4.6-3.5 3.2-5.1 4.8-3.4 3.2-5.1 5-3.2 3.2-5 5.2-3.1 3.2c-2.7 2.8-5.3 5.7-7.9 8.6l-4.9 5.5-2.7 3.2-4.8 5.7c-0.9 1-1.8 2.1-2.6 3.2l-4.8 5.9-2.5 3.2c-2.4 3-4.8 6.1-7.1 9.3-1.5 2-3.1 4.1-4.5 6.2l-2.4 3.2-4.3 6.4-2.3 3.3-4.2 6.4-2.2 3.4c-1.4 2.2-2.7 4.3-4 6.5l-2.1 3.4c-1.3 2.2-2.7 4.4-4 6.6-2 3.4-3.9 6.8-5.7 10.2l-1.9 3.5-3.7 6.8L76 291l-3.4 6.9-1.8 3.7-3.2 7c-0.6 1.2-1.2 2.4-1.7 3.8-1 2.3-2.1 4.6-3.1 7l-1.6 3.7c-1 2.3-1.9 4.7-2.9 7l-1.6 4c-0.9 2.3-1.8 4.6-2.6 7-0.4 1-0.8 1.9-1.2 2.9l-1.1 3.1c-6.5 17.8-12 36-16.5 54.8-2.1 10.1-3.9 20.3-5.5 30.5l-0.4 1.8c-3.8 24.1-5.9 48.5-6.1 73v5.3" fill="#062F8C" ></path></symbol><symbol id="icon-0308moxingku" viewBox="0 0 1024 1024"><path d="M414.9 174.5C402.6 119.1 353.2 82 297.7 82S193 118.9 180.6 174.5H82v61.7h98.6c12.3 55.4 61.7 92.5 117.1 92.5s104.7-36.9 117.1-92.5h530v-61.7H414.9zM347 236c-6.2 18.5-24.6 30.8-49.4 30.8-24.8 0-43.1-12.3-49.4-30.8-6.2-6.2-12.3-18.5-12.3-30.8s6.2-24.6 12.3-30.8c6.2-18.5 24.6-30.8 49.4-30.8 24.8 0 43.1 12.3 49.4 30.8 6.2 6.2 12.3 18.5 12.3 30.8 0.1 12.5-6.1 24.8-12.3 30.8z m67.9 554.8c-12.3-55.4-61.7-92.5-117.1-92.5s-104.7 36.9-117.1 92.5H82v61.7h98.6c12.3 55.4 61.7 92.5 117.1 92.5s104.7-36.9 117.1-92.5h530v-61.7H414.9zM347 852.3c-6.2 18.5-24.6 30.8-49.4 30.8-24.8 0-43.1-12.3-49.4-30.8-6.2-6.2-12.3-18.5-12.3-30.8s6.2-24.6 12.3-30.8c6.2-18.5 24.6-30.8 49.4-30.8 24.8 0 43.1 12.3 49.4 30.8 6.2 6.2 12.3 18.5 12.3 30.8 0.1 12.3-6.1 24.6-12.3 30.8zM82 482.6v61.7h530c12.3 55.4 61.7 92.5 117.1 92.5 55.4 0 104.7-36.9 117.1-92.5h98.6v-61.7h-98.7c-12.3-55.4-61.7-92.5-117-92.5-55.4 0-104.7 36.9-117.1 92.5H82z m585.5 30.8c0-12.3 6.2-24.6 12.3-30.8 6.2-18.5 24.6-30.8 49.4-30.8 24.6 0 43.1 12.3 49.4 30.8 6.2 6.2 12.3 18.5 12.3 30.8s-6.2 24.6-12.3 30.8c-6.2 18.5-24.6 30.8-49.4 30.8-24.6 0-43.1-12.3-49.4-30.8-6.2-6.2-12.3-18.5-12.3-30.8z"  ></path></symbol><symbol id="icon-0312zhishiku" viewBox="0 0 1024 1024"><path d="M388.4 838.2c0 16.5 13.5 30.1 30.1 30.1h179.9c16.5-0.8 29.4-14.8 28.6-31.4-0.7-15.4-13.1-27.9-28.6-28.6H418.5c-16.6 0-30.1 13.4-30.1 29.9z m60 89.9c0 16.5 13.4 30.1 29.9 30.1h60.1c16.5-0.8 29.4-14.8 28.6-31.4-0.7-15.4-13.1-27.9-28.6-28.6h-60.1c-16.5 0-29.8 13.4-29.9 29.9zM238.5 508.4c0 149.1 120.9 269.9 269.9 269.9 149.1 0 269.9-120.9 269.9-269.9 0-149.1-120.9-269.9-269.9-269.9-149.1 0-269.9 120.8-269.9 269.9z m60 0c0-115.9 93.9-209.9 209.9-209.9 115.9 0 209.9 93.9 209.9 209.9s-94 209.9-209.9 209.9-209.9-94-209.9-209.9zM478.3 88.6v60c0 16.5 13.4 30.1 30.1 30.1 16.5 0 30.1-13.4 30.1-30.1v-60c0-16.5-13.4-30.1-30.1-30.1-16.5 0.1-30.1 13.6-30.1 30.1z m449.8 344.8h-60c-16.5 0-30.1 13.4-30.1 30.1 0 16.5 13.4 30.1 30.1 30.1h60c16.5 0 30.1-13.4 30.1-30.1 0-16.6-13.5-30.1-30.1-30.1z m-779.5 0h-60c-16.5 0-30.1 13.4-30.1 30.1 0 16.5 13.4 30.1 30.1 30.1h60c16.5 0 30.1-13.4 30.1-30.1-0.2-16.6-13.5-30.1-30.1-30.1z m644.7-237.2l-42.4 42.5c-11.3 12.2-10.7 31.2 1.5 42.4 11.5 10.7 29.4 10.7 40.9 0l42.4-42.4c11.3-12.2 10.7-31.2-1.5-42.4-11.7-10.8-29.5-10.8-40.9-0.1z m-569.8 0c-11.8-11.8-30.7-11.8-42.5 0s-11.8 30.7 0 42.5l42.4 42.4c12.2 11.3 31.2 10.7 42.4-1.5 10.7-11.5 10.7-29.4 0-40.9l-42.3-42.5z"  ></path></symbol><symbol id="icon-01qiantaiyingyong" viewBox="0 0 1024 1024"><path d="M967.2 327.3L814.7 479.9c-15 15-35.1 23.3-56.4 23.3-21.2 0-41.5-8.4-56.4-23.4L549.1 327.1c-15-15-23.4-35.2-23.3-56.4 0-21.3 8.2-41.4 23.3-56.4L701.9 61.8c15-15 35.1-23.4 56.4-23.4s41.4 8.2 56.6 23.4l152.5 152.5c15.2 15 23.4 35.1 23.4 56.4-0.2 21.4-8.4 41.4-23.6 56.6zM930.7 251L778.1 98.5c-5.2-5.3-12.4-8.2-19.9-8.2-7.4 0-14.5 2.9-19.9 8.2L585.7 251c-11 10.8-11 28.4-0.3 39.3l0.3 0.3 152.5 152.5c11.2 10.7 28.6 10.7 39.6 0l152.5-152.5c11-10.8 11-28.4 0.3-39.3 0.2-0.1 0.1-0.3 0.1-0.3zM400.2 990.5H131.7c-51.7-0.2-93.6-42-93.6-93.6V628.5c0-51.7 41.9-93.6 93.6-93.6h268.6c51.7 0 93.6 41.9 93.6 93.6v268.4c0 51.6-42 93.6-93.7 93.6z m40.5-362c0-22.5-18.1-40.6-40.6-40.6H131.7c-22.5 0-40.6 18.3-40.6 40.6v268.4c0 22.5 18.1 40.6 40.6 40.6h268.4c22.5 0 40.6-18.3 40.6-40.6V628.5z m-40.5-129.9H131.7c-51.7 0-93.6-42-93.6-93.6V136.6c0-51.7 42-93.6 93.6-93.6h268.6c24.9 0 48.3 9.7 66.1 27.5 17.6 17.5 27.5 41.2 27.5 66.1V405c0 51.6-42 93.4-93.7 93.6z m40.5-362c0-22.5-18.1-40.6-40.6-40.6H131.7c-22.5 0-40.6 18.3-40.6 40.6V405c0 22.5 18.3 40.6 40.6 40.6h268.4c22.5 0 40.6-18.3 40.6-40.6V136.6zM624 535h268.4c51.7 0 93.6 41.9 93.6 93.6V897c0 51.6-42 93.6-93.6 93.6H624c-51.7-0.2-93.6-42-93.7-93.6V628.5c0.1-51.5 42-93.5 93.7-93.5z m-40.6 361.9c0 22.5 18.3 40.6 40.6 40.6h268.4c22.5 0 40.6-18.3 40.6-40.6V628.5c0-22.5-18.3-40.6-40.6-40.6H624c-22.5 0-40.6 18.3-40.6 40.6v268.4z"  ></path></symbol><symbol id="icon-0307tupianku" viewBox="0 0 1024 1024"><path d="M843.5 88.9c63.1 0 114.1 51.2 114.3 114.3v617.7c0 63.1-51.2 114.3-114.3 114.3h-663c-63.1 0-114.3-51.2-114.3-114.3V203.1C66.2 140 117.4 89 180.5 88.8h663z m-663 60.4c-29.7 0-53.8 24.1-53.8 53.8v520.3l167.4-148.3c16.7-15 38.5-23.2 61.1-23.1 27.3 0 52 11.9 68.9 31l69.9 79 214.6-207.6c39.7-38.2 102.7-37.1 141.1 2.4l47.5 49.1v-303c0-29.7-24.1-53.8-53.8-53.8H180.5z m-53.8 671.6c0 29.7 24.1 53.8 53.8 53.8h421L378.8 623c-11.5-13-31.5-14.3-44.5-2.8L126.7 804.1v16.8z m716.8 53.8c29.7 0 53.8-24.1 53.8-53.8V593.3l-91-94.1c-15.1-15.6-40-16.1-55.6-1L534 707.4l148 167.3h161.5zM352.3 470.4c-64.2 0-116.1-52-116.2-116.2 0-64.2 52-116.1 116.2-116.2 64.2 0 116.1 52 116.2 116.2 0 64.2-52 116.2-116.2 116.2z m0-171.8c-30.7 0-55.8 24.9-55.8 55.8 1.1 30.7 27 54.8 57.7 53.8 29.3-1 52.7-24.5 53.8-53.8 0-30.8-25-55.8-55.7-55.8z"  ></path></symbol><symbol id="icon-0309paishuihuku" viewBox="0 0 1024 1024"><path d="M417 743.6c-25.5 0-46.3-20.8-46.3-46.3v-54.7H142.5c-27.4 0-49.7-22.3-49.7-49.7V245c0-27.4 22.3-49.7 49.7-49.7h228.1v-54.8c0-25.5 20.8-46.3 46.3-46.3H504c25.5 0 46.3 20.8 46.3 46.3v556.9c0 25.5-20.8 46.2-46.3 46.2h-87zM142.5 235.7c-5.1 0-9.2 4.1-9.2 9.2v347.9c0 5.1 4.1 9.2 9.2 9.2h268.6v95.2c0 3.2 2.6 5.8 5.8 5.8H504c3.2 0 5.8-2.6 5.8-5.8V140.4c0-3.2-2.6-5.8-5.8-5.8h-87c-3.2 0-5.8 2.6-5.8 5.8v95.2h-259v0.1h-9.7zM637.8 447c-7.2 0-14.4-1.8-21-5.5-18.1-10.1-40.8-56.8-45.2-66.1l-6.4-13.5 14.8-1.7c10.1-1.1 61.8-6.3 79.8 3.7 10.2 5.6 17.5 15 20.8 26.3 3.3 11.5 1.8 23.5-4 33.8-8.2 14.8-23.3 23-38.8 23z m-40.1-66.9c10.5 19.8 22.8 39.1 29.3 42.7 10.8 6.1 24.6 1.9 30.9-9.1 3-5.4 3.8-11.7 2.1-17.5-1.7-5.7-5.4-10.6-10.6-13.4-6.4-3.7-29.4-4.2-51.7-2.7zM716.3 624.5c-7 0-14.1-1.1-20.8-3.4-16.3-5.4-29.2-16.9-36.4-32-6-12.8-6.6-36.9-2.1-73.5 3.1-25.9 7.8-48.1 8-49l2.9-14.1 12.6 6.7c0.8 0.4 20.8 11.2 42.7 25.5 30.9 20.1 48.9 36.2 54.9 49 14.5 31.1-0.3 69-33.1 84.3-9.2 4.4-18.9 6.5-28.7 6.5z m-33.2-139.3c-6.1 33.8-11.4 80.4-4.6 94.9 4.6 9.9 13 17.2 23.7 20.8 10.9 3.6 22.9 2.9 33.7-2.1 22.1-10.3 32.4-35.4 22.7-55.9-6.6-14.5-45.6-40.5-75.5-57.7zM735.3 906.4c-23.5 0-45.9-7.4-63.6-21.2-19.9-15.5-31.7-37.1-33.2-60.8-2.8-45.1 71.6-152.5 80.2-164.5l7.6-10.9 9 9.9c9.9 10.9 96.9 108.3 99.7 153.4 3 48.5-38.6 90.6-92.8 94-2.3 0-4.6 0.1-6.9 0.1z m-6.9-223.2c-25 37.4-70.4 111.1-68.6 139.8 1.1 17.5 9.9 33.6 25 45.3 15.4 12 35.3 17.9 56.1 16.5 42.4-2.6 75-34.6 72.7-71.4-1.6-28.5-55.6-96.2-85.2-130.2zM621.6 306.5c-7.3 0-14.5-2.2-20.6-6.5-13.3-9.3-26.5-44.6-30.2-55.3l-4.9-14.1 15-0.1c11.2-0.1 49 0.3 62.3 9.7 16.3 11.6 20.1 34.3 8.5 50.7-5.6 8-13.9 13.3-23.5 15.1-2.2 0.4-4.3 0.5-6.6 0.5z m-24.9-54.3c6 14.3 12.9 27.7 16.8 30.4 3.3 2.2 7.1 3.1 11 2.4s7.5-3 9.9-6.4c4.8-6.9 3.3-16.2-3.5-20.9-3.9-2.8-18.8-4.8-34.2-5.5zM753.4 383.5c-9.8 0-19.6-2.8-28-8.8-19.8-13.9-39.6-72.7-43.4-84.4l-4.4-13.6 14.3-0.3c12.3-0.3 74.3-1.2 94 12.7 22.6 16 27.3 48.1 10.7 71.7-10.4 14.7-26.8 22.7-43.2 22.7z m-46.2-85.9c9 24.6 22 53.6 30.6 59.6 12.9 9.1 31.6 5.2 41.4-8.8 9.9-13.9 7.4-32.8-5.5-41.9-8.6-6.1-40.3-8.7-66.5-8.9zM877.5 524.1c-8.9 0-17.7-1.7-25.7-5.1-14.4-6.1-25.4-16.9-30.9-30.7-5.2-12.6-4.3-35.9 2.9-71.2 5.1-24.8 11.2-46.1 11.5-47l3.7-12.8 11.7 6.5c0.8 0.4 20.2 11.2 41.3 25.4 29.9 20.1 46.9 36 52.1 48.6 6.2 15.1 5.4 31.8-2.1 47.2-7.4 15-20.4 26.9-36.5 33.5-9.2 3.7-18.7 5.6-28 5.6z m-25.4-134.8c-8.8 33.7-16.9 77.8-11.5 91 3.5 8.4 10.3 15.3 19.5 19 11.2 4.7 24.7 4.5 37-0.4 11.4-4.7 20.5-12.9 25.5-23.3 4.8-9.8 5.4-20.4 1.6-29.7-5.4-13.2-42.1-38.8-72.1-56.6z"  ></path></symbol><symbol id="icon-0101zonghezhanshi-sc" viewBox="0 0 1024 1024"><path d="M927.4 148.4c0-13.6-11.1-24.7-24.7-24.7H109.2c-13.6 0-24.7 11.1-24.7 24.7v545.4c0 13.6 11.1 24.7 24.7 24.7h818.2V148.4zM636.8 768.3l49.6 198.4H325.3L375 768.3H109.2c-41 0-74.4-33.3-74.4-74.4V148.4c0-41 33.3-74.4 74.4-74.4h793.5c41 0 74.4 33.3 74.4 74.4v619.8H636.8v0.1zM84.3 594.7v49.6h843.1v-49.6H84.3zM388.8 917h234.1l-37.2-148.8H426L388.8 917z" fill="#062F8C" ></path><path d="M484.2 495.8c6.7 12 21.8 16.3 33.8 9.6 3.1-1.8 5.8-4.1 8-7l97-132.1 56.3 70.4c4.7 5.9 11.9 9.3 19.4 9.3h139.6c13.6 0 24.7-11.1 24.7-24.7s-11.1-24.7-24.7-24.7H710.6l-69-86.4c-8.6-10.7-24.2-12.4-34.8-3.9-1.6 1.3-3.3 3-4.4 4.7l-93.3 127.1-120-215.9c-6.7-12-21.8-16.3-33.8-9.6-3.7 2.1-6.8 5-9 8.6L236.6 396.3h-81.3c-13.6 0-24.7 11.1-24.7 24.7s11.1 24.7 24.7 24.7h95.1c8.6 0 16.4-4.4 21-11.7l94.5-151 118.3 212.8z" fill="#E60012" ></path></symbol><symbol id="icon-0314yonghuquanxian" viewBox="0 0 1024 1024"><path d="M350.7 781c5.8 0 121 63.4 149.8 80.7 5.8 5.8 11.5 0 17.3 0l351.4-305.3s-265 322.6-339.9 409c-11.5 11.5-28.8 11.5-40.3 0C448.6 907.6 350.7 781 350.7 781zM514.9 510.1c126.7 0 224.7-103.7 224.7-224.7C739.6 158.7 635.9 55 514.9 55c-126.7 0-230.4 103.7-230.4 224.7-0.1 126.8 103.6 230.4 230.4 230.4z m0-391.6c86.4 0 161.3 69.1 161.3 161.3 0 86.4-69.1 161.3-161.3 161.3-86.4 0-161.3-69.1-161.3-161.3 0-86.4 69.1-161.3 161.3-161.3z"  ></path><path d="M425.6 913.5h-121c-69.1 0-121-51.8-121-121 0-80.7 34.6-155.5 80.7-195.9 28.8-28.8 63.4-34.6 103.7-23 5.8 0 17.3 5.8 34.6 11.5 40.3 17.3 74.9 34.6 103.7 34.6 28.8 0 69.1-17.3 121-34.6 11.5-5.8 23-11.5 28.8-11.5 40.3-11.5 74.9-5.8 103.7 17.3 5.8 5.8 17.3 11.5 23 23l40.3-51.8c-5.8-5.8-17.3-11.5-23-17.3-46.1-34.7-103.7-46.1-161.3-28.8-5.8 0-23 5.8-40.3 11.5-28.8 5.8-74.9 23-92.2 23-17.3 0-57.6-17.3-80.7-23-17.3-11.5-34.6-17.3-40.3-17.3-57.6-17.3-115.2-5.8-161.3 28.8-69 51.7-109.5 149.7-109.5 247.6 0 103.7 86.4 190.1 190.1 190.1h121v-63.2z m437.8-293.8l-40.3 63.4c11.5 34.6 17.3 69.1 17.3 109.5 0 69.1-51.8 121-121 121H609.9V977h109.5c103.7 0 190.1-86.4 190.1-190.1-5.8-63.5-23-121.1-46.1-167.2z"  ></path></symbol><symbol id="icon-shenqingshiyong" viewBox="0 0 1024 1024"><path d="M305.5 835.9h-118c-41.3 0-59-26.6-59-59V187c0-52.3 10.1-59 59-59h472c45.7 0 59.9 15.3 59.9 59v79.2c0 41.2 59 46.5 59 0v-79.1c0-87-28.1-118-119-118H187.2c-57.6 0-117.7 7.1-117.7 115.6v611.6c-0.2 11.7 1.5 23.3 4.9 34.4 12.6 39.3 49.7 65.5 90.9 64.4 72.2 0.3 101.5 0 140.2 0s36-59.1 0-59.2z"  ></path><path d="M246.8 245.7c-42.4 0-44.3 59.8 0 59.8h354c40.5 0 47-59.7 0-59.8h-354z m95 176.9h-95.1c-42.4 0-44.3 59.8 0 59.8h95.1c40.5 0 47-59.7 0-59.8zM659.4 364.9c-162.9 0-295 132.1-295 295.1 0 162.9 132.1 295 295.1 295 162.9 0 295-132.1 295-295 0-165.3-135.7-295.1-295.1-295.1z m0 531c-130.4 0-236-105.7-236-236 0-130.4 105.7-236 236-236s236 105.7 236 236c-0.3 130.3-105.8 235.8-236 236.3v-0.3z"  ></path><path d="M762.7 556.7L618.1 701.3l-62-62c-5.9-11.8-29.5-11.8-41.3 0-11.4 10.9-11.9 28.9-1 40.3l1 1 82.7 82.6c10.9 11.4 28.9 11.9 40.3 1l1-1L804 598.1c10.8-12 9.9-30.5-2.1-41.3-11.1-10.1-28-10.1-39.2-0.1z"  ></path></symbol><symbol id="icon-wodegongdan" viewBox="0 0 1024 1024"><path d="M300.3 361.2h423.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-30.4-30.4H300.3c-17.7 0-30.4 12.7-30.4 30.4s15.2 30.4 30.4 30.4z m425.9 121.6H300.3c-17.7 0-30.4 12.7-30.4 30.4s12.7 30.4 30.4 30.4h423.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-27.9-30.4zM424.5 178.6h152.1c25.4 0 45.6-20.3 45.6-45.6S602 87.3 576.6 87.3H424.5c-25.4 0-45.6 20.3-45.6 45.6s20.3 45.7 45.6 45.7z"  ></path><path d="M812.4 117.8H782c-17.7 0-30.4 12.7-30.4 30.4s12.7 30.4 30.4 30.4h30.4c35.5 0 60.8 27.9 60.8 60.8V815c0 33-27.9 60.8-60.8 60.8H206.5c-33 0-60.8-27.9-60.8-60.8V239.5c0-33 27.9-60.8 60.8-60.8h30.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-30.4-30.4h-30.4c-65.9 0-119.2 55.8-119.2 121.7V815c0 65.9 53.2 121.7 121.7 121.7h606c65.9 0 121.7-53.2 121.7-121.7V239.5c-2.6-66-55.8-121.7-124.3-121.7z"  ></path><path d="M300.3 361.2h423.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-30.4-30.4H300.3c-17.7 0-30.4 12.7-30.4 30.4s15.2 30.4 30.4 30.4z m425.9 121.6H300.3c-17.7 0-30.4 12.7-30.4 30.4s12.7 30.4 30.4 30.4h423.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-27.9-30.4z m-263.3 180H282.8c-7.5 0-12.9 12.7-12.9 30.4s5.4 30.4 12.9 30.4h179.1c7.5 0 12.9-12.7 12.9-30.4-0.1-15.1-5.5-30.4-11.9-30.4z m-38.4-484.2h152.1c25.4 0 45.6-20.3 45.6-45.6S602 87.3 576.6 87.3H424.5c-25.4 0-45.6 20.3-45.6 45.6s20.3 45.7 45.6 45.7z"  ></path><path d="M812.4 117.8H782c-17.7 0-30.4 12.7-30.4 30.4s12.7 30.4 30.4 30.4h30.4c35.5 0 60.8 27.9 60.8 60.8V815c0 33-27.9 60.8-60.8 60.8H206.5c-33 0-60.8-27.9-60.8-60.8V239.5c0-33 27.9-60.8 60.8-60.8h30.4c17.7 0 30.4-12.7 30.4-30.4s-12.7-30.4-30.4-30.4h-30.4c-65.9 0-119.2 55.8-119.2 121.7V815c0 65.9 53.2 121.7 121.7 121.7h606c65.9 0 121.7-53.2 121.7-121.7V239.5c-2.6-66-55.8-121.7-124.3-121.7z"  ></path></symbol><symbol id="icon-changjianwenti" viewBox="0 0 1024 1024"><path d="M843.2 701.9c33.2-57.7 50.1-123.4 48.9-189.9 1.3-208.6-166.8-378.8-375.4-380.1H512c-208.6-1.3-378.8 166.8-380.1 375.4v4.7c-1.2 208.6 166.9 378.7 375.6 379.9h4.5c48.3-0.6 96.1-9.8 141.2-27.2 32.6-10.9 97.7-10.9 195.5 10.9-27.2-81.3-32.6-135.5-5.4-173.8l-0.1 0.1zM512 946.4C272.1 946.4 77.6 751.9 77.6 512S272.1 77.6 512 77.6 946.4 272.1 946.4 512c0.2 76.5-20.4 151.6-59.8 217.2-16.4 27.2 0 103.2 54.3 217.2-152-32.6-238.9-43.4-266.1-32.6-51.3 22.3-106.8 33.4-162.8 32.6z"  ></path><path d="M541.1 616.4V590c0-10.5 11.2-26.4 44.9-52.7 56.2-36.9 89.9-78.9 84.2-131.6-5.6-84.3-61.8-126.4-157.2-131.6-112.2-5.2-179.7 47.4-196.6 147.5l56.2 10.5C383.8 358.4 428.8 326.8 513 332c67.4 5.2 95.5 26.4 101.1 84.3 0 31.6-16.9 57.9-61.8 89.6-44.8 21.1-67.3 47.4-67.3 84.3v26.2h56.1z m-56.2 52.7h56.2v52.7h-56.2v-52.7z"  ></path></symbol><symbol id="icon-010206wendangsousuo" viewBox="0 0 1024 1024"><path d="M210.4 392.2h59.8c0-82.4 65.6-149.4 146.3-149.4V183c-113.6 0-206.1 93.9-206.1 209.2z"  ></path><path d="M934.4 805L701 567.3c24.9-47.8 39.2-102.3 39.2-160 0-189.5-151.8-343.7-338.4-343.7-186.6 0-338.4 154.2-338.4 343.7S215.2 751 401.8 751c64.4 0 124.5-18.7 175.8-50.6l228.9 233.2c17.1 17.4 39.7 26.9 63.9 26.9 24.2 0 46.8-9.6 63.9-26.9 34.9-35.5 34.9-93.1 0.1-128.6zM123.3 407.2c0-156.6 124.9-283.9 278.5-283.9s278.6 127.4 278.6 283.9c0 156.5-125 283.9-278.6 283.9-153.5 0-278.5-127.3-278.5-283.9z m768.4 484.5c-5.7 5.8-13.2 9-21.2 9s-15.5-3.2-21.2-9L625.9 664.1c15.3-13.8 29.4-28.8 42-45.2l223.8 228c12.1 12.3 12.1 32.4 0 44.8z"  ></path></symbol><symbol id="icon-010205hetongguanli" viewBox="0 0 1024 1024"><path d="M695.5 419.3c-143.8 0-264.9 117.3-264.9 264.9 0 147.6 117.3 264.9 264.9 264.9 147.6 0 264.9-117.3 264.9-264.9 3.8-147.6-117.3-264.9-264.9-264.9z m0 484.4c-121.1 0-219.5-98.4-219.5-219.5s98.4-219.5 219.5-219.5S915 563.1 915 684.2s-98.4 219.5-219.5 219.5zM207.3 260.3h378.4v60.6H207.3v-60.6z m0 155.2h302.8V476H207.3v-60.5z m0 177.9h151.4V654H207.3v-60.6z m185.4 280H127.8v-738h609.3v211.9c15.1 0 49.2 3.8 64.3 3.8v-246c0-15.1-15.1-30.3-30.3-30.3H93.8c-15.1 0-30.3 15.1-30.3 30.3v802.3c0 15.1 15.1 30.3 30.3 30.3h336.8c-15.1-18.9-26.5-49.1-37.9-64.3zM846.9 635c-3.8-11.4-11.4-15.1-22.7-18.9l-71.9-11.4-34.1-64.3c-7.6-18.9-37.8-18.9-49.2 0l-34 64.3-72 11.4c-11.4 0-18.9 7.6-22.7 18.9-3.8 11.4 0 18.9 7.6 26.5l53 49.2-7.6 75.7c0 11.4 3.8 18.9 11.4 26.5 7.6 7.6 18.9 7.6 30.3 3.8l64.3-34.1 64.3 34.1c3.8 3.8 7.6 3.8 11.4 3.8 7.6 0 11.4-3.8 15.1-3.8 7.6-7.6 11.4-15.1 11.4-26.5l-11.4-71.9 53-49.2c3.8-11.4 3.8-22.7 3.8-34.1z m-109.8 53c-7.6 7.6-7.6 15.1-7.6 22.7l3.8 34.1-26.5-18.9c-3.8-3.8-7.6-3.8-11.4-3.8-3.8 0-7.6 0-11.4 3.8L653.9 741l3.8-30.3c0-7.6 0-18.9-7.6-22.7l-22.7-22.7 34.1-3.8c7.6 0 15.1-7.6 18.9-15.1l15.1-30.3 15.1 30.3c3.8 7.6 11.4 11.4 18.9 15.1l34.1 3.8-26.5 22.7z"  ></path></symbol><symbol id="icon-0313xitongpeizhi" viewBox="0 0 1024 1024"><path d="M855.1 540.6c1.1-10.1 1.7-20.4 1.7-30.8 0-10.3-0.6-20.5-1.7-30.8l80.7-61.6c17.5-13.3 22-37.7 10.7-56.3l-85.9-145.3c-11.6-19.3-35.5-27.3-56.5-19.1l-94.5 37.2c-17.1-11.9-35.2-22.2-54.2-30.8L641 104.5c-4-21.9-23-37.7-45.2-37.5h-172c-22.4-0.3-41.5 15.8-45.2 37.8l-14.2 98.3c-19 8.7-37.2 19-54.2 30.8l-94.8-37.2c-20.8-7.5-44.3 0.5-56 19.3L73.3 361.1c-11.3 19-6.6 43.3 11 56.7l80.2 61.4c-1.1 10.3-1.5 20.5-1.5 30.8s0.6 20.7 1.7 30.8l-80.8 61.7C66.6 615.8 62 640 73.3 658.8l86.1 145.5c11.3 18.8 35.4 27.1 56.3 19l94.5-37.1c17.3 11.9 35.5 22.4 54.2 30.8l14.4 98.8c3.8 21.9 22.8 37.7 45 37.4h172.1c22.2 0.2 41.3-15.9 45.2-37.8l14.2-98.3c19-8.6 37.2-18.8 54.2-30.8l94.8 37.2c20.8 7.8 44.4-0.3 56-19.3l86.1-145.3c11.3-19 6.6-43.5-11-56.8l-80.3-61.5z m-32.9 239.2L715 737.6c-8-3.2-17-2-23.9 3.2-20.7 15.6-43.2 28.3-67.2 38.1-7.8 3.1-13.3 10.1-14.7 18.4l-15.8 108.9-167.2 2.3-15.9-111.3c-1.2-8.3-6.9-15.2-14.7-18.4-24-9.8-46.5-22.5-67.2-38.1-6.9-5.1-15.9-6.3-23.9-3.1l-103.4 43.2-87-142.4 91-69.2c6.6-5.1 10-13 8.9-21.3-1.8-12.6-2.8-25.3-2.9-38 0-12.9 1.1-25.6 2.9-38 1.1-8.3-2.4-16.4-9-21.3l-90-66.5 82.4-144.4L304.5 282c8 3.2 17 2 23.9-3.1 20.7-15.5 43.3-28.3 67.4-38.3 7.8-3.1 13.3-10.1 14.5-18.4l13.5-108.7 169.5-2.4 16.2 111.2c1.2 8.1 6.7 15.2 14.5 18.4 24 9.8 46.7 22.7 67.4 38.1 6.9 5.1 15.9 6.3 23.9 3.2l103.4-43 87.1 142.2-91 69.4c-6.6 4.9-10.1 13-9 21.3 1.5 12.6 2.9 25.1 2.9 38 0 12.9-1.2 25.4-2.9 38-1.1 8.3 2.4 16.2 9 21.3l89.9 66.3-82.5 144.3zM509.9 334c-99.7 0-180.5 78.9-180.5 175.8 0 96.8 81 175.8 180.5 175.8s180.5-78.9 180.5-175.8S609.4 334 509.9 334z m0 304.9c-72.9 0-132.3-57.9-132.3-129.1S437 380.7 509.9 380.7s132.3 57.9 132.3 129.1-59.5 129.1-132.3 129.1z"  ></path></symbol><symbol id="icon-010202xiangmuguanli" viewBox="0 0 1024 1024"><path d="M856.2 849.4l-40.8-40.5c10.7-10.9 25.4-17 40.8-16.9 31.7 0 57.4-25.7 57.4-57.4V161c0-31.7-25.7-57.4-57.4-57.4H282.5c-31.7 0-57.4 25.7-57.4 57.4v4.9c0 15.8-6.3 30-16.6 40.5l-40.8-40.5V161c0-63.4 51.4-114.7 114.7-114.7h573.7c63.4 0 114.7 51.4 114.7 114.7v573.7c0.1 63.3-51.2 114.7-114.6 114.7zM110.4 275.7v573.7c0 31.7 25.7 57.4 57.4 57.4h573.7c31.7 0 57.4-25.7 57.4-57.4V275.7c0-31.7-25.7-57.4-57.4-57.4H167.8c-31.7 0.1-57.4 25.7-57.4 57.4zM741.5 161c63.4 0 114.7 51.4 114.7 114.7v573.7c0 63.4-51.4 114.7-114.7 114.7H167.8c-63.4 0-114.7-51.4-114.7-114.7V275.7c0-63.4 51.4-114.7 114.7-114.7h573.7z"  ></path><path d="M196.6 419.1h344.2c15.8 0 28.8 12.8 28.8 28.8 0 15.9-12.8 28.8-28.8 28.8H196.6c-15.8 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8z m516.1 57.3c-15.8 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8-12.9 28.8-28.8 28.8z m-602.3 57.5h688.4v57.4H110.4v-57.4z"  ></path></symbol><symbol id="icon-0310wuranyuanku" viewBox="0 0 1024 1024"><path d="M504.9 123.1l341.8 294.1h-90.5v477.5H253.5V417.2H163l341.9-294.1m0-57.8c-5 0-12.6 2.5-17.6 5L80.2 422.2c-10.1 7.5-12.6 25.1-5 35.2 5 7.5 12.6 10.1 22.6 10.1h105.5v452.4c0 15.1 10.1 25.1 25.1 25.1h552.9c15.1 0 25.1-10.1 25.1-25.1V467.4H912c15.1 0 25.1-10.1 27.6-22.6 0-7.5-2.5-17.6-10.1-22.6l-407-349.4c-5.1-5-10.1-7.5-17.6-7.5z"  ></path><path d="M429.5 655.9v50.2c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3V857C374.2 857 329 811.8 329 756.5s45.2-100.6 100.5-100.6z"  ></path><path d="M429.5 505.1v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3v50.1c-55.3 0-100.5-45.2-100.5-100.5s45.2-100.5 100.5-100.5z"  ></path><path d="M429.5 354.2v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.7 22.6 50.3 50.3 50.3v50.3c-55.3 0.2-100.5-45-100.5-100.4s45.2-100.8 100.5-100.8z m125.6 301.7v50.2c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3V857c-55.3 0-100.5-45.2-100.5-100.5s45.2-100.6 100.5-100.6z"  ></path><path d="M555.1 505.1v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3v50.1c-55.3 0-100.5-45.2-100.5-100.5s45.2-100.5 100.5-100.5z"  ></path><path d="M555.1 354.2v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.7 22.7 50.2 50.3 50.2v50.3c-55.3 0-100.5-45.2-100.5-100.5s45.2-100.6 100.5-100.6z m125.6 301.7v50.2c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3V857c-55.3 0-100.5-45.2-100.5-100.5s45.3-100.6 100.5-100.6z"  ></path><path d="M680.7 505.1v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.6 22.6 50.3 50.3 50.3v50.1c-55.3 0-100.5-45.2-100.5-100.5s45.3-100.5 100.5-100.5z"  ></path><path d="M680.7 354.2v50.3c-27.6 0-50.3 22.6-50.3 50.3 0 27.7 22.6 50.3 50.3 50.3v50.3c-55.3 0-100.5-45.2-100.5-100.5s45.3-100.7 100.5-100.7z"  ></path></symbol><symbol id="icon-020102puchajikanceshujuchuligongju-sc" viewBox="0 0 1024 1024"><path d="M875.5 49.3h-727c-54.7 0-99.2 44.5-99.2 99.2v727c0 54.7 44.5 99.2 99.2 99.2h727c54.7 0 99.2-44.5 99.2-99.2v-727c0-54.8-44.5-99.2-99.2-99.2z m33.1 826.2c0 18.2-14.9 33.1-33.1 33.1h-727c-18.2 0-33.1-14.8-33.1-33.1v-727c0-18.2 14.9-33.1 33.1-33.1h727c18.2 0 33.1 14.8 33.1 33.1v727z" fill="#062F8C" ></path><path d="M445.9 313.7h-66.1v-66.1c0-18.2-14.8-33.1-33.1-33.1-18.2 0-33.1 14.8-33.1 33.1v66.1h-66.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h66.1V446c0 18.2 14.8 33.1 33.1 33.1 18.2 0 33.1-14.8 33.1-33.1v-66.1h66.1c18.2 0 33.1-14.8 33.1-33.1 0-18.4-14.8-33.1-33.1-33.1z m330.5 0H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1-0.1-18.4-14.8-33.1-33.1-33.1z m0 330.5H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1s-14.8-33.1-33.1-33.1z m-323.7-72.9c-12.9-12.9-33.9-12.9-46.6 0l-59.3 59.2-59.3-59.3c-12.9-12.9-33.9-12.9-46.8 0-12.9 12.9-12.9 33.9 0 46.6l59.3 59.3-59.3 59.3c-12.9 12.9-12.9 33.9 0 46.6 6.5 6.4 14.9 9.7 23.4 9.7 8.5 0 16.9-3.2 23.4-9.7l59.4-59.2 59.3 59.3c6.4 6.4 14.9 9.7 23.4 9.7s16.9-3.2 23.4-9.7c12.9-12.9 12.9-33.9 0-46.6l-59.3-59.3 59.3-59.3c12.7-12.8 12.7-33.7-0.3-46.6z m191.5 6.8c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z m0 198.3c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z" fill="#E60012" ></path></symbol><symbol id="icon-0105lianhetiaodu-sc" viewBox="0 0 1024 1024"><path d="M918.1 65.7H105.9c-31.4 0-57 25.6-57 57v580.2c0 31.4 25.6 57 57 57H918c31.4 0 57-25.6 57-57V122.7c0.1-31.3-25.6-57-56.9-57z m-9.3 627.8H115.2V132.1h793.5l0.1 561.4zM675.9 892H546.4V762.2h-72.5V892H345.2c-18.3 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h330.9c18.3 0 33.1-14.8 33.1-33.1 0-18.1-14.8-33.1-33.3-33.1z" fill="#062F8C" ></path><path d="M810.5 262.1H425c-12.6-29.3-41.7-49.9-75.7-49.9s-63.1 20.6-75.7 49.9h-60.1c-18.2 0-33.1 15-33.1 33.1 0 18.2 15 33.1 33.1 33.1H274c12.9 28.5 41.6 48.6 75 48.6s62.1-19.9 75-48.6h386.2c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.6-33.1-32.8-33.1z m0 220.5h-43.6c-12.7-29-41.7-49.4-75.4-49.4-33.8 0-62.8 20.2-75.4 49.4H213.5c-18.2 0-33.1 15-33.1 33.1s15 33.1 33.1 33.1H616c12.9 28.8 41.6 49.1 75.4 49.1s62.4-20.2 75.4-49.1h43.6c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.8-33.1-33-33.1z" fill="#E60012" ></path></symbol><symbol id="icon-0105lianhetiaodu" viewBox="0 0 1024 1024"><path d="M918.1 65.7H105.9c-31.4 0-57 25.6-57 57v580.2c0 31.4 25.6 57 57 57H918c31.4 0 57-25.6 57-57V122.7c0.1-31.3-25.6-57-56.9-57z m-9.3 627.8H115.2V132.1h793.5v561.4h0.1zM675.9 892H546.4V762.2h-72.5V892H345.2c-18.3 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h330.9c18.3 0 33.1-14.8 33.1-33.1 0-18.1-14.8-33.1-33.3-33.1z"  ></path><path d="M810.5 262.1H425c-12.6-29.3-41.7-49.9-75.7-49.9s-63.1 20.6-75.7 49.9h-60.1c-18.2 0-33.1 15-33.1 33.1 0 18.2 15 33.1 33.1 33.1H274c12.9 28.5 41.6 48.6 75 48.6s62.1-19.9 75-48.6h386.2c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.6-33.1-32.8-33.1z m0 220.5h-43.6c-12.7-29-41.7-49.4-75.4-49.4-33.8 0-62.8 20.2-75.4 49.4H213.5c-18.2 0-33.1 15-33.1 33.1s15 33.1 33.1 33.1H616c12.9 28.8 41.6 49.1 75.4 49.1s62.4-20.2 75.4-49.1h43.6c18.2 0 33.1-15 33.1-33.1 0.2-18.1-14.8-33.1-33-33.1z"  ></path></symbol><symbol id="icon-010201gongzuotai" viewBox="0 0 1024 1024"><path d="M246.4 297.9c13.3-13.3 34.8-13.3 48.1 0l29.1 29.1c13.3 13.3 13.3 34.8 0 48.1-13.3 13.3-34.8 13.3-48.1 0L246.4 346c-13.3-13.4-13.3-34.9 0-48.1zM162.5 531.8h41.1c22.7 0 34 11.3 34 34s-11.3 34-34 34h-41.1c-22.7 0-34-11.3-34-34s11.4-34 34-34zM514.3 182.3c22.6 0 34 11.3 34 34v41.1c0 22.6-11.3 34-34 34-22.6 0-34-11.3-34-34v-41.1c0-22.7 11.3-34 34-34zM782.7 297.9c13.3 13.3 13.3 34.8 0 48.1l-29.1 29.1c-13.3 13.3-34.8 13.3-48.1 0-13.3-13.3-13.3-34.8 0-48.1l29.1-29.1c13.3-13.3 34.8-13.3 48.1 0 0-0.1 0 0 0 0zM820.3 531.8h41.1c22.7 0 34 11.3 34 34s-11.3 34-34 34h-41.1c-22.7 0-34-11.3-34-34 0.1-22.7 11.4-34 34-34zM657.6 424c12.4 12.4 12.4 32.5 0 44.9l-80.4 80.4v0.2c9.1 34-11.1 69-45.2 78.1-5.3 1.4-10.8 2.2-16.4 2.2-32.4 0.3-61.2-24.1-64.3-59.1-0.8-8.7 0.4-17.5 3.4-25.7 12.1-33.1 46.1-49.1 77.4-40.4h0.2l80.4-80.4c12.3-12.6 32.4-12.6 44.9-0.2 0-0.1 0 0 0 0z"  ></path><path d="M792.1 954.3H231.9c-16.9 0-33.2-6.1-45.9-17.1C74.8 842 10.8 703 10.9 556.6c0-135.2 53-261.9 149.3-356.8S384 53.5 519.2 55.5c270.5 3.7 492.1 226.9 494 497.4 1.2 147.6-62.9 288.3-175.1 384.2-12.9 11.1-29.2 17.1-46 17.2zM512 115.6c-116.7 0-226.4 45-309.6 127C117.6 326.1 71 437.7 71 556.6c0 128.8 56.3 251.2 154.1 334.9 1.9 1.6 4.3 2.6 6.8 2.6H792c2.5 0 4.9-1 6.8-2.6C897.6 807.1 954 683.3 953 553.4 951.3 315.3 756.2 119 518.3 115.7c-2.1-0.1-4.2-0.1-6.3-0.1z"  ></path></symbol><symbol id="icon-0107yidongzonghe-sc" viewBox="0 0 1024 1024"><path d="M772.8 23.9H261.7c-51.2 0-93 41.8-93 93v790.3c0 51.2 41.8 93 93 93H773c51.2 0 93-41.8 93-93V117c-0.2-51.2-42-93.1-93.2-93.1zM261.7 70.4H773c25.7 0 46.6 20.9 46.6 46.6v615.9H215.1V117c0-25.7 20.9-46.6 46.6-46.6z m511.1 883.3H261.7c-25.7 0-46.6-20.9-46.6-46.6V779.4h604.2v127.7c0.1 25.7-20.8 46.6-46.5 46.6z" fill="#062F8C" ></path><path d="M470.7 872.3c0 25.7 20.8 46.6 46.6 46.6 25.7 0 46.6-20.8 46.6-46.6 0-25.7-20.9-46.6-46.6-46.6s-46.6 20.9-46.6 46.6z" fill="#062F8C" ></path><path d="M553.1 340c13.8 0 25.7-10.4 25.7-25.7 0-15.3-11.8-25.7-25.7-25.7-13.8 0-25.4 10.4-25.4 25.7 0.1 15.3 11.6 25.7 25.4 25.7z m-115.6-51.3c-13.8 0-25.4 10.4-25.4 25.7 0 15.3 11.5 25.7 25.4 25.7 13.8 0 25.7-10.4 25.7-25.7s-11.7-25.7-25.7-25.7z m110 141.7c-8.5 0-17.2 9.7-17.2 19 0 9.7 8.6 19 17.2 19 13 0 21.5-9.4 21.5-19 0-9.3-8.5-19-21.5-19z m77 0c-8.5 0-17 9.7-17 19 0 9.7 8.5 19 17 19 13 0 21.5-9.4 21.5-19 0-9.3-8.8-19-21.5-19z m98.5 43.1c0-34.6-17.4-65.9-44.3-88.1 0.3-1.6 0.3-3 0.3-4.5 0-132.5-94.4-181.5-184.1-181.5-100.3 0-182.5 71.5-182.5 162.6 0 52.5 27.2 95.6 72.9 129l0.4 42.8L431 515c15.7 3.3 23.1 4.9 33.4 5.6 20.5 42.7 67.8 72.5 124.1 72.5 15.7 0 31.7-4.2 47.6-8.2l43.5 24.9-12-41.4c31.6-24.5 55.4-57.7 55.4-94.9zM456.1 466c0 6.6 0.7 13 1.6 19-3.7-0.7-8.1-1.6-13.7-2.6-1.6-0.3-2.9-0.7-4.5-1l-7.4-1.6-6.8 2.9-9.2 4v-4.5l-0.3-12-9.7-7.1c-19-14.1-33.9-29.7-43.5-46.4-4.9-8.2-8.5-17.2-11.1-26.1-2.3-9.2-3.7-18.9-3.7-28.7 0-34.2 15.1-65.9 42-90 13.4-11.8 29-21.5 46.6-27.8 18.3-6.8 37.6-10.4 58-10.4 19.3 0 38.2 2.6 55.1 8.1 18.2 5.6 33.9 14.1 47.1 24.9 14.1 11.5 25.2 26.4 32.7 43.8 7.5 16.7 11.5 36 12.7 57.7-18.3-9.2-38.8-14.4-60.3-14.4-70.2 0.2-125.6 50.5-125.6 112.2z m191.8 78.4l0.4 24.5-21.5-13.1c-13.7 3.5-26.8 7.1-38.6 7.1-14.4 0-28.3-2.3-41.2-7.4-12.5-4.8-23.4-11.2-32.7-19.8-18.6-16.4-28.7-38.6-28.7-61.7s9.9-45.3 28.5-61.7c9.2-8.5 20.2-15.1 32.7-19.7 13-4.9 26.8-7.4 41.2-7.4 13.4 0 26.8 2.3 39.4 7.4 12.5 4.8 23.5 11.2 33 19.7 9.4 8.5 16.7 17.9 22.1 28.3 5.5 10.5 8.1 21.9 8.1 33.2 0 12.3-3.7 24.2-11.2 36.5-7.6 11.9-18.1 23.3-31.5 34.1z" fill="#E60012" ></path></symbol><symbol id="icon-shoujibangding" viewBox="0 0 1024 1024"><path d="M788.8 39.6H235.2c-38.5 0.4-69.4 31.8-69.2 70.2v804.3c-0.1 38.5 30.8 69.8 69.2 70.2h553.6c38.5-0.4 69.4-31.8 69.2-70.2V109.9c0.2-38.5-30.7-69.8-69.2-70.3zM530.3 948.8c-28.9-0.1-52.4-23.5-52.5-52.5 0-29 23.5-52.5 52.5-52.5s52.5 23.5 52.5 52.5c-0.9 28.7-23.9 51.7-52.5 52.5z m258.9-245.4c0.1 38.5-30.8 69.8-69.2 70.2H304.4c-38.5-0.4-69.4-31.8-69.2-70.2V179.1c-0.1-38.5 30.8-69.8 69.2-70.2h415.2c38.5 0.4 69.4 31.8 69.2 70.2l0.4 524.3z"  ></path><path d="M493.2 329c13.1 6.1 28.6 1.1 35.7-11.5l17.8-32.9c12.6-24.1 39.8-24.1 60.8-14.7 22 10.3 31.5 36.4 21.2 58.3-0.4 0.8-0.8 1.6-1.2 2.5l-55.6 104c-25.1 47.2-48.3 36.7-57.7 31.5-13.1-6.1-28.6-1.1-35.7 11.5-6.5 12.3-1.9 27.5 10.4 34l1.2 0.6c19.7 10.2 42.6 12.5 64 6.3 25.1-8.3 47.2-28.3 64-60.8L673.6 354c12.3-22.8 14.9-49.6 7.4-74.4-7.9-24.9-25.7-45.4-49.3-56.6-51.4-25.1-107-9.4-131.1 36.7l-17.8 32.9c-6.8 13.2-2 29.4 11 36.7l-0.6-0.3z"  ></path><path d="M392.4 674c24.1 11.2 51.4 13.1 76.8 5.3 25.1-8.4 46.1-26 58.7-49.3l13.3-26.2c6.6-12.2 2.1-27.4-10-34.1-0.3-0.2-0.6-0.3-0.9-0.5-13.1-6.1-28.6-1.1-35.7 11.5L481 608c-12.3 23-40.5 32.3-64 21-11.2-4.9-19.7-14.5-23-26.2-4.2-11.4-3.1-24.1 3.2-34.6l51.4-97.6c11-20 32.9-51.4 60.8-37.7 13.1 6.1 28.6 1.1 35.7-11.5 6.2-12.7 1.1-28.1-11.5-34.6-48.3-23-99.6 0-131 60.8L351.1 543c-12.3 22.8-14.9 49.6-7.4 74.4 7.9 24.9 25.7 45.4 49.3 56.6h-0.6z"  ></path></symbol><symbol id="icon-zhaohuimima" viewBox="0 0 1024 1024"><path d="M276.9 977.6c-84.8 0-153.9-71-153.9-158.3V533.8c0-76.7 54.9-143 128.1-155.9v-85.6c0-136.8 111.7-244.9 254.4-245.9 142.2 1.1 247.9 106.9 247.9 245.9V341h-51.6v-48.6c0-109.5-83.9-192.3-195.2-192.8-114.1 0.5-203.6 85.1-203.6 192.8v83.2h444c84.8 0 153.9 70.9 153.9 158.2v285.5c0 87.3-69 158.3-153.9 158.3H276.9z m0-548.9c-56.3 0-102.1 47.1-102.1 105.1v285.5c0 58 45.8 105.1 102.1 105.1H747c56.3 0 102.2-47.1 102.2-105.1V533.8c0-58-45.8-105.1-102.2-105.1H276.9zM512 846.6c-96.3 0-174.7-80.4-174.7-179.2s78.4-179 174.7-179c41 0 80.6 14.7 111.7 41.4v-9.1c0-13.6 10.7-24.6 24-24.6 13.4 0.2 24.2 11.2 24.1 24.6v59.1c0.2 19.1-15.1 34.8-34.2 35.1H580c-13.5-0.2-24.2-11.3-24-24.7-0.1-13.4 10.6-24.4 24-24.6h10.5c-22.1-18.1-49.8-27.9-78.4-27.9-69.9 0-126.7 58.2-126.7 129.7 0 71.7 56.8 129.9 126.7 129.9s126.7-58.2 126.7-129.9c-0.1-13.4 10.6-24.4 24-24.6 13.3 0 24.2 11 24.2 24.6-0.1 98.8-78.6 179.2-175 179.2z"  ></path></symbol><symbol id="icon-0104yingjiguanli" viewBox="0 0 1024 1024"><path d="M746.4 341.4l4 4 84.4-85c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-14-8.9-32.1-7.1-44.1 4l-84.2 84.8 8 4c7.7 16.4 19.7 24.6 31.9 36.8zM228.3 491.1H112c-17.8 0-32.4 14.6-32.4 32.4 0 17.8 14.6 32.4 32.4 32.4h116.4v-64.8z m325.3-376.5c0.3-17.6-13.9-32-31.4-32.3h-0.9c-17.3 1.1-31 15-32.3 32.3v125.7h64.4V114.6h0.2z m-257 230.7l4-4c9.9-14.1 22.1-26.6 36.1-36.6l8-4-88.2-89.1c-16-12.1-36.1-12.1-48.1 0-4.4 7.4-7.1 15.7-8 24.3 0.9 8.6 3.6 16.8 8 24.3l88.2 85.1zM931 491.1H814.6v64.7H931c17.8 0 32.4-14.6 32.4-32.4 0-17.9-14.6-32.3-32.4-32.3z m-333.4 72.8h-72.1l40.1-40.6c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-12.3-12.1-32-12.1-44.1 0l-96.4 93.1c-12 12.4-12 32.1 0 44.5 8 8.1 20 12.1 36.1 12.1h68.3l-56.1 64.8c-8 8.1-8 16.1-8 24.3 0.9 8.6 3.6 16.8 8 24.3 8 8.3 16 8.3 24 8.3 8.6-0.9 16.8-3.6 24.1-8.1l96.7-97.1c11-10.6 16.8-25.3 16-40.6-0.4-20.3-12.3-36.4-36.6-36.4z m232.9 263.2h-52V531.5c0-141.6-116.4-259.2-256.9-259.2s-257 117.5-257 259.2v295.6h-52.3c-17.8 0-32.4 14.6-32.4 32.4 0 17.8 14.6 32.4 32.4 32.4h618.3c17.8 0 32.4-14.6 32.4-32.4 0-17.8-14.6-32.4-32.4-32.4h-0.1z m-116.5 0H328.7V551.8c0-52.7 20-101.2 56.3-141.6 68-75.4 184.2-81.4 259.6-13.4 4.7 4.3 9.1 8.7 13.4 13.4 36.1 36.4 56.3 89.1 56.3 141.6l-0.3 275.3z"  ></path></symbol><symbol id="icon-020101shujuhuayijiaogongju-sc" viewBox="0 0 1024 1024"><path d="M972.7 518.7c-15.2-22.5-40.7-35.9-70.1-35.9-21.3 0-44.7 7.1-63 17.5-10.2 6.1-24.4 17.3-42.8 30.7-4 3.1-10.2 7.1-16.1 12.3-7.3-28.6-34.8-55.3-79.5-57.4-9.2 0-28.4-1-50.9-3.1-57-4-144.6-9.2-200.4-9.2-14.2 0-26.5 0-35.5 1-62.2 4-135.4 59.3-173 92.2-18.2 16.3-26.5 40.9-20.4 64.5 3.1 12.3 10.2 23.6 19.4 31.9l119 106.4c14.2 12.3 31.5 19.4 50.9 19.4h6.1c10.2-1.2 20.4-4 29.4-9.2 15.2-8.3 30.5-14.2 39.7-16.3h10.2c16.3 0 41.7 1 68.2 3.1 32.8 2.3 65.7 3.6 98.7 4 19.2 0 34.6-1.2 45.7-1.9 29.6-4.2 83.3-25.7 232.9-151.5l1-1c28.4-23.8 52.8-63.7 30.5-97.5zM912.6 574C882.1 600.5 752 710.1 701.1 718.4c-12.9 1.3-25.7 2.1-38.6 2.1-53 0-128.2-6.1-166.8-6.1-9.2 0-15.2 0-19.4 1.2-20.4 4-43.8 16.3-53.9 21.5-3.1 1.9-6.5 3.1-10.2 3.1h-1.9c-6.9 0.4-13.6-2.3-18.4-7.3l-119-106.6c-2.1-2.1-4-4.2-4-7.3-1.2-5 0-11.3 5-14.4 22.3-19.4 92.5-76.8 144.4-80.8 7.1-1.2 18.2-1.2 31.5-1.2 77.2 0 216.6 9.2 251.1 10.2 40.7 1 45.7 36.9 10.2 40.9-39.5 4.2-158.8 11.3-167.8 13.2-10.2 3.1-33.6 27.6 28.6 33.8 42.6 4 98.7 8.3 135.2 8.3 10.2 0 19.4 0 25.5-1.2 28.4-4 108.9-72.6 135.4-89.1 9.2-6.1 24.4-11.3 37.6-11.3 11.1 0 22.5 3.1 28.4 13.2 3.2 4.6-7 22.1-21.4 33.4zM242.4 718.2c-18.6-17.5-37.6-34.6-57-51.3-18.6-18.2-48-19.4-68.2-3.1-10.2 8.3-46.8 36.9-56.1 43-11.1 8.3-17.3 18.4-18.4 30.7-1.9 20.5 13.4 38 22.5 47.2l24.4 22.5c31.5 29.8 90.4 84.9 100.6 95.2 12.3 12.3 26.5 18.4 40.7 18.4 12.3 0 23.4-4 34.6-13.2l5-4c12.3-10.2 33.6-28.6 46.8-37.8 17.5-12.1 21.5-26.5 22.5-36.9 0.6-14.4-5.4-28.4-16.3-37.8-6.8-6.3-44.4-40.1-81.1-72.9z m-2.9 147.4l-5.2 4c-2.1 1.9-4 3.1-9.2-2.1-11.1-11.3-68.2-64.5-101.8-96.2-12.3-11.1-22.5-20.4-24.4-22.5-2.1-2.1-4-3.1-5.2-5.2 16.3-11.3 45.7-34.8 55.1-40.9 1.9-1.2 3.1-1.2 5 1.2 5 5.2 29.4 26.5 57 51.1 31.5 28.6 68 61.4 78.3 70.7-15.2 11.3-36.5 28.6-49.6 39.9z" fill="#062F8C" ></path><path d="M766.1 103.1H334c-35.5 0-64.1 28.6-64.1 64.5v256.9c0 13.2 11.3 24.5 24.5 24.5 13.4-0.2 24.2-11.1 24.4-24.6V167.6c0-8.3 7.1-15.4 15.2-15.4h115v148.4c0 32.6 26.3 59.1 58.9 59.3h84.5c32.6-0.2 58.9-26.7 58.9-59.3V152.2h113.8c8.1 0 15.4 7.1 15.4 15.4v287.6c0 13.2 11.1 24.6 24.4 24.6 13.6-0.2 24.8-10.9 25.3-24.6V167.6c0-35.9-28.4-64.5-64.1-64.5zM592.4 310.8h-84.5c-2.7 0-5.4-1.2-7.3-3.1-1.9-1.9-2.9-4.4-2.9-7.3V152.2h104.8l0.1 148.4c0 5.6-4.6 10.2-10.2 10.2z" fill="#E60012" ></path></symbol><symbol id="icon-0102xiangmuguanli-sc" viewBox="0 0 1024 1024"><path d="M838 838l-39.7-39.5c10.5-10.6 24.8-16.6 39.7-16.5 30.9 0 55.9-25 55.9-55.9V167c0-30.9-25-55.9-55.9-55.9H278.8c-30.9 0-55.9 25-55.9 55.9v4.8c0 15.4-6.1 29.2-16.2 39.5L167 171.8V167c0-61.8 50.1-111.8 111.8-111.8H838c61.8 0 111.8 50.1 111.8 111.8v559.1c0 61.8-50.1 111.9-111.8 111.9zM111.1 278.8V838c0 30.9 25 55.9 55.9 55.9h559.1c30.9 0 55.9-25 55.9-55.9V278.8c0-30.9-25-55.9-55.9-55.9H167c-30.9 0-55.9 25.1-55.9 55.9z m615-111.8c61.8 0 111.8 50.1 111.8 111.8V838c0 61.8-50.1 111.8-111.8 111.8H167c-61.8 0-111.8-50.1-111.8-111.8V278.8c0-61.7 50-111.8 111.8-111.8h559.1z" fill="#062F8C" ></path><path d="M195 418.6h335.5c15.4 0 28 12.5 28 28s-12.5 28-28 28H195c-15.4 0-28-12.5-28-28s12.5-28 28-28z m503.1 55.9c-15.4 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z m-587 56h671v55.9h-671v-55.9z" fill="#E60012" ></path></symbol><symbol id="icon-020201LIDshejigongju" viewBox="0 0 1024 1024"><path d="M799.8 630c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.2 19.7-25 19.7z m0-96.4l-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5S850 632 850 610.2c0-18.5-33.2-57.4-39.7-64.9l-10.5-11.7z m-83.6 237c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m0-96.5L706 685.9c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5 27.7 0 50.1-17.7 50.1-39.5 0-18.5-33.2-57.4-39.7-64.9l-10.6-11.8z m-170.4-4.3c-14.6 0-26.5-9.4-26.5-20.9 0-6.9 12.4-25.9 26.5-43.7 14.1 17.8 26.5 36.8 26.5 43.7 0 11.6-11.9 20.9-26.5 20.9z m0-102.1l-10.9 12.5c-7 8.1-42 49.1-42 68.7 0 23 23.7 41.8 53 41.8s53-18.7 53-41.8c0-19.6-35.1-60.7-42-68.7l-11.1-12.5zM179.2 902.4h30.3v23.9h-30.3v-23.9z m272.4-83.6h30.3v23.9h-30.3v-23.9zM376 842.7h30.3v23.9H376v-23.9z m454.2 35.8h30.3v23.9h-30.3v-23.9z m60.5-11.9H921v23.9h-30.3v-23.9z m60.5-35.9c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.3 14.7-72.5 28.7-137.1 28.7-83.6 0.1-151.4-53.6-151.4-119.5v-40.4c32.6 38.8 88.3 64.3 151.4 64.3 71.7 0 111.9-15.8 150.6-31.2 37.3-14.7 72.5-28.7 137.1-28.7s99.7 13.8 137.1 28.7c38.8 15.2 78.9 31.2 150.6 31.2 63.2 0 118.8-25.6 151.4-64.3v40.4zM73.1 615.6c0-66 67.9-119.6 151.4-119.6 64.6 0 99.7 13.8 137.1 28.7 38.8 15.2 78.9 31.2 150.6 31.2s111.9-15.8 150.6-31.2C700.2 510 735.3 496 800 496c83.6 0 151.4 53.7 151.4 119.5v95.6c0 65.9-67.9 119.5-151.4 119.5-64.6 0-99.7-13.8-137.1-28.7-38.8-15.2-78.9-31.2-150.6-31.2s-111.9 15.8-150.6 31.2c-37.4 14.7-72.6 28.7-137.2 28.7-83.6 0-151.4-53.7-151.4-119.5v-95.5z m201.4 355.6c42.4-5.3 71.8-16.8 100.6-28.2 37.2-14.6 72.4-28.6 137-28.6s99.7 13.8 137.1 28.7c14.2 5.6 28.6 11.3 44.6 16.2l30.1 7.8c21.2 4.4 45.5 7.3 75.7 7.3 100.1 0 181.7-64.4 181.7-143.4V615.6c0.2-79.2-81.2-143.4-181.5-143.4-71.7 0-111.9 15.8-150.6 31.2C611.9 518 576.6 532 512.1 532s-99.7-13.8-137.1-28.7c-38.9-15.2-78.9-31.2-150.6-31.2-100.1 0-181.7 64.4-181.7 143.4v215.2c0 79.1 81.5 143.4 181.7 143.4"  ></path><path d="M203.6 576.5l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.6-33.1-57.3-39.7-64.9z m-10.4 84.1c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7z m131.4 32.1l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.9 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0.1-18.6-33.1-57.4-39.7-64.9z m-10.3 84c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.9-11.2 19.7-25 19.7z m76.1-209.6l-10.5-11.8-10.3 11.8c-6.6 7.7-39.7 46.4-39.7 64.8 0 21.7 22.4 39.5 50.1 39.5s50.1-17.7 50.1-39.5c0-18.4-33.2-57.2-39.7-64.8zM380 651.2c-13.8 0-25-8.9-25-19.7 0-6.5 11.7-24.4 25-41.2 13.3 16.8 25 34.8 25 41.2 0 10.8-11.1 19.7-25 19.7zM145.8 410.1V52.5h59.5v296.6h148.5v61h-208z m316.4 0V49.6h59.5v360.5h-59.5zM646.1 49.6H755c27.5 0 48.3 3.1 62.3 9.3S844.2 75.4 856 90s21 33.6 27.8 56.8c6.7 23.3 10.1 52.2 10.1 86.9 0 31.2-3.5 58.3-10.6 81.3s-15.9 41.2-26.8 54.7c-10.9 13.4-23.9 23.6-39.1 30.4-15.3 6.8-35 10.2-59.1 10.2H646.1V49.6z m59.5 61v238.6h44.7c19.2 0 33.1-1.8 41.6-5.4 8.6-3.6 15.6-9.1 21.1-16.3 5.5-7.3 10.1-18.8 13.6-34.6 3.6-15.7 5.4-36.5 5.4-62.2 0-26.7-1.9-47.7-5.6-63.2-3.7-15.4-9.5-27.5-17.2-36.4-7.8-8.9-17.2-14.6-28.4-17.4-8.4-2.1-24.5-3.2-48.4-3.2l-26.8 0.1z"  ></path></symbol><symbol id="icon-0311chanpinku" viewBox="0 0 1024 1024"><path d="M502.5 448.1c-19.2 0-38.4-4.3-53.5-10.6L154 292c-19.2-10.6-32-25.7-32-42.7 0-17.1 10.7-34.2 32-44.8L451.2 52.6c17.1-8.5 36.3-12.8 57.8-12.8 19.2 0 38.4 4.3 53.5 10.6l295.1 145.3c19.2 10.6 32 25.7 32 42.7s-10.6 34.2-32 44.8L560.2 435.1c-17.2 8.7-36.3 13-57.7 13z m-327.2-201l295.1 145.3c8.5 4.3 19.2 6.4 32 6.4s25.7-2.1 34.2-6.4L836 240.7 540.9 95.2c-8.5-4.3-19.2-6.4-32-6.4s-25.7 2.1-34.2 6.4L175.3 247.1z m267.2 733.2c-10.6 0-21.4-2.1-32-8.5L145.4 832.9c-32-14.9-55.7-49.1-55.7-77v-372c0-25.7 19.2-44.8 46.9-44.8 10.6 0 21.4 2.1 32 8.5l263.2 138.9c32 14.9 55.7 49.1 55.7 77v372c0.1 25.7-19.3 44.8-45 44.8z m-10.6-51.2c2.1 2.1 4.3 2.1 6.4 2.1V563.5c0-8.5-10.6-25.7-27.8-34.2l-265.1-139c-2.1-2.1-4.3-2.1-6.4-2.1V756c0 8.5 10.7 25.7 27.8 34.2l265.1 138.9z m151.7 51.2c-25.7 0-44.8-19.2-44.8-44.8v-372c0-27.8 23.5-62.1 55.7-77l263-138.9c10.6-4.3 21.4-8.5 32-8.5 25.7 0 44.8 19.2 44.8 44.8v372c0 27.8-23.5 62.1-55.7 77l-263 138.9c-12.8 6.4-21.3 8.5-32 8.5z m295-590l-263 138.9c-17.1 8.5-27.8 25.7-27.8 34.2v367.8c2.1 0 4.3-2.1 6.4-2.1l263-138.9c17.1-8.5 27.8-25.7 27.8-34.2V388.2c-2.1 0-4.2 2.1-6.4 2.1z"  ></path></symbol><symbol id="icon-010101yizhangtu" viewBox="0 0 1024 1024"><path d="M608.1 189.2l74.4 25c1.2 0.4 2.8 0.8 4.3 1l4.4 0.5v303.2l-153.6-47.8c-1.8-0.5-3.6-0.8-5.5-0.8-8.2 0-15.4 5.4-17.8 13.4-3 10 2.5 20.7 12.4 23.8l164.5 51.3v5.8C726.6 545.7 767.1 535 810 535c14.5 0 28.7 1.2 42.6 3.6l75.9-13.4v39.2c22.6 12 43.1 27.3 61 45.2v-473c0.1-9.2-3.8-17.8-10.8-23.7-5.6-4.6-12.5-7.2-19.6-7.2-1.8 0-3.6 0.2-5.4 0.5l-259 46.8-67.1-22.6c-3.2-1.1-6.4-1.6-9.7-1.6-13.1 0-24.8 8.5-29 21.2-5.3 16.2 3.3 33.8 19.2 39.2z m120.7 20.3l199.7-35.8v313.2L728.8 522V209.5zM336.1 542.6c5.8 8.2 15.1 13.1 24.9 13.1h0.1c9.9 0 19.2-4.9 24.9-13.2C424 488 525 342 535.4 321.9c14-27.4 21.7-59.2 21.7-89.4-0.1-109.7-88.3-199-196.5-199-108.4 0.1-196.6 89.3-196.6 199-0.1 30.4 7.1 60.3 21.5 89 11.3 22.8 118.1 175 150.6 221.1z m24.2-447c74.7 0 135.4 61.4 135.4 136.8 0 20.4-5.4 42.5-14.8 60.8-6.7 12.4-63.2 95.2-116.2 171.8l-4.1 5.9-4.1-5.9c-53-75.8-109.7-158.3-116.6-171.4l-0.1-0.1c-10-20-15-40.6-15-61.1 0.3-75.3 61.1-136.8 135.5-136.8z"  ></path><path d="M333.3 280.1c8.2 4.8 17.6 7.4 27.1 7.4s18.9-2.5 27.1-7.4c16.7-9.8 27.1-28 27.1-47.5s-10.4-37.7-27.1-47.5c-8.2-4.8-17.6-7.4-27.1-7.4s-18.9 2.5-27.1 7.4c-16.7 9.8-27.1 28-27.1 47.5 0 19.6 10.4 37.8 27.1 47.5zM561.1 833.2l-187.9-53.4V640.4c0-10.4-8.4-18.9-18.8-18.9s-18.8 8.5-18.8 18.9v140.4l-247 38.9v-683c0-17.1-13.7-31.1-30.5-31.1s-30.5 13.9-30.5 31.1v719.4c0 9 3.9 17.6 10.8 23.5C44 884.4 51 887 58.3 887c1.6 0 3.2-0.1 4.7-0.4l295.7-46.9L585.3 904c-11.4-21.9-19.7-45.7-24.2-70.8zM801.5 984.7h-0.6c-13.7 0-27.4-1.5-40.8-4.4-13.8-2.9-27.3-7.3-40.2-12.8-25.6-10.6-48.4-26.1-67.7-46-18.6-19.3-33.2-41.7-43.3-66.6-9.9-24.9-14.7-51.1-14.4-77.9-0.3-27.9 5.2-55.1 16.2-80.8 5.2-12.1 11.4-23.8 18.6-34.9a223.1 223.1 0 0 1 24.1-30.7c9.1-9.5 19.2-18.2 29.9-25.7l0.1-0.1c10.8-7.3 22.4-13.7 34.4-19l0.1-0.1h0.1c2.5-0.9 5.1-1.4 7.8-1.4 3.5 0 7.1 0.9 10.2 2.5 5.6 2.6 10.1 7.2 12.5 12.9l0.1 0.2c2.2 5.7 2.2 11.9 0 17.5-2 5.9-6.5 10.5-12.4 12.6-18.7 8.1-35.4 19.6-49.7 34.1-14.4 14.5-25.9 31.3-34 50-8.4 19.9-12.5 41-12.1 62.7 0.2 21 4.3 41.5 12.2 60.9 7.7 19.6 18.8 37.2 33.1 52.5 15 15.5 32.9 27.5 53 35.5h0.1c19.1 8.1 39.3 12.2 60 12.2h2.7c21.1 0 41.5-4.1 60.9-12.2 19.2-7.9 36.5-19.2 51.5-33.5 15.5-15 27.5-32.7 35.6-52.7 2.4-5.8 7.2-10.3 13.1-12.4 2.8-1.1 5.7-1.6 8.7-1.6 3 0 6 0.5 8.8 1.6l0.2 0.1 0.2 0.1c5.5 2.6 9.6 7.4 11.3 13.1 2 5.6 2 11.7-0.1 17.3l-0.1 0.1c-7.7 19.4-18.5 37.3-31.9 53.2-39.4 47-97.1 73.7-158.2 73.7z m-0.5-184.1c-6 0-11.7-2.3-16.1-6.4l-0.1-0.1c-4.5-4.5-6.9-10.8-6.6-17.2v-184c-0.3-6.4 2.1-12.6 6.6-17.2l0.1-0.1c4.4-4.1 10.1-6.4 16.1-6.4h0.8c55.2 0.3 107.2 21.9 146.4 60.8 18.9 19.1 33.9 41.3 44.5 65.9 10.7 25.8 16.1 53 16 80.9 0.3 6.3-2 12.5-6.4 17.1l-0.1 0.1c-4.3 4.1-9.9 6.4-15.9 6.4H801.8c-0.3 0.2-0.6 0.2-0.8 0.2z m158.8-46.9c-2.2-16.1-6.9-31.7-13.9-46.4-7.7-16-17.9-30.4-30.5-42.9-12.7-12.5-27.2-22.9-43.1-30.8-14.9-7.3-30.8-12.2-47.2-14.7v134.8h134.7z"  ></path></symbol><symbol id="icon-010302sheshiguanli" viewBox="0 0 1024 1024"><path d="M68.2 56.3c11.8-10 29-5.2 43.2-6.9 267.3 0.4 534.7 0.4 801.9 0.1 14 1.4 30.8-2.3 42.3 7.6 20.8 14 18.6 41.6 19 63.6-1.1 267.4-0.2 534.7-0.5 802 3 29.1-21.4 55.9-51.3 51.6H101.5c-29.5 4.3-56.1-22-51.6-51.6 0-273.6 0.2-547.3-0.2-821-1.3-17.6 2.7-35.5 18.5-45.4m39 50.8c0.5 75.5 0.2 150.9 0.2 226.5 269.5-0.5 539.2 0.1 808.8-0.3 0.2-75.4-0.3-150.7 0.4-226-269.8 0-539.6 0.5-809.4-0.2m-0.5 294.8c1.5 73.1 0.8 146.3 0.4 219.5 269.9-0.8 539.9-0.3 809.6-0.3-0.7-72.9-0.8-146.1 0.2-219.1-270.1 0.6-540.2 0.9-810.2-0.1m0.5 287c0.1 73 1 146.3-0.6 219.4 270.1-0.9 540.1-0.7 810.3-0.1-1.2-73-0.6-146.1-0.4-219-269.7-0.2-539.5 0.4-809.3-0.3z"  ></path><path d="M205.1 199.3c24.8-10.4 52.9 17.6 42.6 42.5-6.9 22.6-39.2 30.2-55.1 12.5-17.6-15.9-10-48.1 12.5-55z m114.5-0.1c24.8-10.3 52.9 17.7 42.6 42.5-6.9 22.7-39.3 30.4-55.2 12.6-17.7-16-9.9-48.2 12.6-55.1z m209.3 0.4c81.7-5.5 164-0.4 245.8-2.4 20.5 1.6 48.5-5.3 61.2 16.1 13.2 19-0.8 49.8-24.6 49.9-82.5 2.4-165.2 0-247.8 1.1-15.8-1.3-35.2 2.8-47.1-10.4-16.7-15.8-9.7-47.4 12.5-54.3zM205.1 485.3c24.8-10.3 52.9 17.8 42.5 42.6-6.9 22.7-39.2 30.2-55.1 12.5-17.6-16-9.9-48.1 12.6-55.1z m114.5 0c24.8-10.3 52.9 17.8 42.6 42.6-6.9 22.6-39.2 30.2-55.1 12.6-17.8-16-10.1-48.2 12.5-55.2z m209.3 0.4c81.7-5.5 164-0.4 245.8-2.4 20.6 1.6 48.6-5.3 61.2 16.1 15.6 22.7-6.2 55.2-33.1 50.7-88.7 0.1-177.5 1.4-266.2-0.7-34.1-0.5-40.1-54.3-7.7-63.7zM205.1 761.9c24.8-10.3 52.9 17.7 42.6 42.6-6.9 22.6-39.2 30.2-55.1 12.5-17.7-16-10-48 12.5-55.1z m114.5 0c24.8-10.3 52.9 17.8 42.5 42.6-6.9 22.6-39.2 30.2-55 12.6-17.8-15.9-10-48.1 12.5-55.2z m209.2 0.4c81.8-5.5 164.1-0.4 245.9-2.4 20.5 1.6 48.6-5.3 61.2 16.2 15.6 22.6-6.2 55.1-33 50.5-88.8 0.1-177.6 1.4-266.3-0.7-34-0.3-40.1-54.2-7.8-63.6z"  ></path></symbol><symbol id="icon-020101shujuhuayijiaogongju" viewBox="0 0 1024 1024"><path d="M972.7 518.7c-15.2-22.5-40.7-35.9-70.1-35.9-21.3 0-44.7 7.1-63 17.5-10.2 6.1-24.4 17.3-42.8 30.7-4 3.1-10.2 7.1-16.1 12.3-7.3-28.6-34.8-55.3-79.5-57.4-9.2 0-28.4-1-50.9-3.1-57-4-144.6-9.2-200.4-9.2-14.2 0-26.5 0-35.5 1-62.2 4-135.4 59.3-173 92.2-18.2 16.3-26.5 40.9-20.4 64.5 3.1 12.3 10.2 23.6 19.4 31.9l119 106.4c14.2 12.3 31.5 19.4 50.9 19.4h6.1c10.2-1.2 20.4-4 29.4-9.2 15.2-8.3 30.5-14.2 39.7-16.3h10.2c16.3 0 41.7 1 68.2 3.1 32.8 2.3 65.7 3.6 98.7 4 19.2 0 34.6-1.2 45.7-1.9 29.6-4.2 83.3-25.7 232.9-151.5l1-1c28.4-23.8 52.8-63.7 30.5-97.5zM912.6 574C882.1 600.5 752 710.1 701.1 718.4c-12.9 1.3-25.7 2.1-38.6 2.1-53 0-128.2-6.1-166.8-6.1-9.2 0-15.2 0-19.4 1.2-20.4 4-43.8 16.3-53.9 21.5-3.1 1.9-6.5 3.1-10.2 3.1h-1.9c-6.9 0.4-13.6-2.3-18.4-7.3l-119-106.6c-2.1-2.1-4-4.2-4-7.3-1.2-5 0-11.3 5-14.4 22.3-19.4 92.5-76.8 144.4-80.8 7.1-1.2 18.2-1.2 31.5-1.2 77.2 0 216.6 9.2 251.1 10.2 40.7 1 45.7 36.9 10.2 40.9-39.5 4.2-158.8 11.3-167.8 13.2-10.2 3.1-33.6 27.6 28.6 33.8 42.6 4 98.7 8.3 135.2 8.3 10.2 0 19.4 0 25.5-1.2 28.4-4 108.9-72.6 135.4-89.1 9.2-6.1 24.4-11.3 37.6-11.3 11.1 0 22.5 3.1 28.4 13.2 3.2 4.6-7 22.1-21.4 33.4zM242.4 718.2c-18.6-17.5-37.6-34.6-57-51.3-18.6-18.2-48-19.4-68.2-3.1-10.2 8.3-46.8 36.9-56.1 43-11.1 8.3-17.3 18.4-18.4 30.7-1.9 20.5 13.4 38 22.5 47.2l24.4 22.5c31.5 29.8 90.4 84.9 100.6 95.2 12.3 12.3 26.5 18.4 40.7 18.4 12.3 0 23.4-4 34.6-13.2l5-4c12.3-10.2 33.6-28.6 46.8-37.8 17.5-12.1 21.5-26.5 22.5-36.9 0.6-14.4-5.4-28.4-16.3-37.8-6.8-6.3-44.4-40.1-81.1-72.9z m-2.9 147.4l-5.2 4c-2.1 1.9-4 3.1-9.2-2.1-11.1-11.3-68.2-64.5-101.8-96.2-12.3-11.1-22.5-20.4-24.4-22.5-2.1-2.1-4-3.1-5.2-5.2 16.3-11.3 45.7-34.8 55.1-40.9 1.9-1.2 3.1-1.2 5 1.2 5 5.2 29.4 26.5 57 51.1 31.5 28.6 68 61.4 78.3 70.7-15.2 11.3-36.5 28.6-49.6 39.9zM294.4 449c13.4-0.2 24.2-11.1 24.4-24.6V167.6c0-8.3 7.1-15.4 15.2-15.4h115v148.4c0 32.6 26.3 59.1 58.9 59.3h84.5c32.6-0.2 58.9-26.7 58.9-59.3V152.2h113.8c8.1 0 15.4 7.1 15.4 15.4v287.6c0 13.2 11.1 24.6 24.4 24.6 13.6-0.2 24.8-10.9 25.3-24.6V167.6c0-35.9-28.4-64.5-64.1-64.5H334c-35.5 0-64.1 28.6-64.1 64.5v256.9c0 13.2 11.3 24.5 24.5 24.5z m308.2-148.4c0 5.6-4.6 10.2-10.2 10.2h-84.5c-2.7 0-5.4-1.2-7.3-3.1-1.9-1.9-2.9-4.4-2.9-7.3V152.2h104.8l0.1 148.4z"  ></path></symbol><symbol id="icon-zaixiankefu" viewBox="0 0 1024 1024"><path d="M515.8 753.6c4.1 0 8.2-0.2 12.4-0.7 40.1-4.8 74.2-32.9 86.8-71.5 0.9-2.9-0.4-6-3.2-7.3-2.7-1.3-6.1-0.2-7.6 2.4-0.1 0.2-16.1 26-78.2 34.4-8.9 1.2-17.9 1.9-26.9 1.9-43.5 0-62.9-16.4-63.1-16.6-2.5-2.2-6.2-2-8.4 0.5-1.8 2-2 4.9-0.6 7.1 19 30.7 53 49.8 88.8 49.8z m333.8-384.8c-0.6 0-1 0.1-1.6 0.1C811.7 211.5 672.7 94 506.1 94c-171.2 0-313.4 124-344.9 287.9-30.6 5.5-54 32.4-54 65v130.3c0 36.5 29.3 66.2 65.5 66.2 20.4 0 38.4-9.6 50.4-24.4C252 695.6 311 757.3 385.6 789.9c0.2-0.4 1.6-3.1 3.3-5.3 1.2-1.5 2.5-2.8 3.6-2.8 1.2 0 2.2 0.4 3.2 1.1C378.3 770 316 704 302.5 611.8c-5.9-40.6 24.5-80.4 59.9-87 56.8-10.6 113.3-22.6 170.2-33 36.1-6.6 60.8-26.4 75.9-59.4 3.5-7.7 8.6-23.3 11-45.8 0.6-3.3 3.4-5.9 6.9-5.9 2.3 0 4.3 1.2 5.7 2.9l1.6-1c22.4 32.5 66.8 104.5 73.2 180.4 7.3 86.8 3.2 146.2-63.2 207.1-0.1 0.1-0.2 0.2-0.3 0.2-0.9 1-1.5 2.3-1.5 3.7 0 1.9 1 3.5 2.4 4.4 0.5 0.2 1.1 0.5 1.6 0.7 0.5 0.1 0.9 0.2 1.3 0.2s0.8-0.1 1.2-0.2c0.9-0.5 1.8-1.1 2.8-1.6 67.8-37.3 118.8-99.2 142.5-173 9.9 14.6 25 24.7 42.3 28.2-28.1 127.9-142.2 208-283.6 220.1-8.5-21-29.3-35.9-53.8-35.9-32 0-57.9 25.3-57.9 56.6 0 31.2 25.9 56.5 57.9 56.5 25.8 0 47.4-16.6 54.9-39.3C717.1 877.4 848.2 780.1 875.6 629c24.2-10.1 41.2-33.8 41.2-61.5V435.6c0-36.9-30.1-66.8-67.2-66.8z m-60.4 37.9C746.6 291.1 636 208.5 505.9 208.5c-129.5 0-239.7 81.9-282.8 196.7-2.1-2.6-4.7-4.9-7.1-7.1 24.4-140 144.8-246.4 290.1-246.4 144.5 0 264.6 105.4 289.8 244.3-2.5 3.5-4.8 6.9-6.7 10.7zM385.5 789.9s0 0.1 0 0z"  ></path></symbol><symbol id="icon-0107yidongzonghe" viewBox="0 0 1024 1024"><path d="M772.8 23.9H261.7c-51.2 0-93 41.8-93 93v790.3c0 51.2 41.8 93 93 93H773c51.2 0 93-41.8 93-93V117c-0.2-51.2-42-93.1-93.2-93.1zM261.7 70.4H773c25.7 0 46.6 20.9 46.6 46.6v615.9H215.1V117c0-25.7 20.9-46.6 46.6-46.6z m511.1 883.3H261.7c-25.7 0-46.6-20.9-46.6-46.6V779.4h604.2v127.7c0.1 25.7-20.8 46.6-46.5 46.6z"  ></path><path d="M470.7 872.3c0 25.7 20.8 46.6 46.6 46.6 25.7 0 46.6-20.8 46.6-46.6 0-25.7-20.9-46.6-46.6-46.6s-46.6 20.9-46.6 46.6zM553.1 340c13.8 0 25.7-10.4 25.7-25.7 0-15.3-11.8-25.7-25.7-25.7-13.8 0-25.4 10.4-25.4 25.7 0.1 15.3 11.6 25.7 25.4 25.7z m-115.6-51.3c-13.8 0-25.4 10.4-25.4 25.7 0 15.3 11.5 25.7 25.4 25.7 13.8 0 25.7-10.4 25.7-25.7 0-15.3-11.7-25.7-25.7-25.7z m110 141.7c-8.5 0-17.2 9.7-17.2 19 0 9.7 8.6 19 17.2 19 13 0 21.5-9.4 21.5-19 0-9.3-8.5-19-21.5-19z m77 0c-8.5 0-17 9.7-17 19 0 9.7 8.5 19 17 19 13 0 21.5-9.4 21.5-19 0-9.3-8.8-19-21.5-19z m98.5 43.1c0-34.6-17.4-65.9-44.3-88.1 0.3-1.6 0.3-3 0.3-4.5 0-132.5-94.4-181.5-184.1-181.5-100.3 0-182.5 71.5-182.5 162.6 0 52.5 27.2 95.6 72.9 129l0.4 42.8L431 515c15.7 3.3 23.1 4.9 33.4 5.6 20.5 42.7 67.8 72.5 124.1 72.5 15.7 0 31.7-4.2 47.6-8.2l43.5 24.9-12-41.4c31.6-24.5 55.4-57.7 55.4-94.9zM456.1 466c0 6.6 0.7 13 1.6 19-3.7-0.7-8.1-1.6-13.7-2.6-1.6-0.3-2.9-0.7-4.5-1l-7.4-1.6-6.8 2.9-9.2 4v-4.5l-0.3-12-9.7-7.1c-19-14.1-33.9-29.7-43.5-46.4-4.9-8.2-8.5-17.2-11.1-26.1-2.3-9.2-3.7-18.9-3.7-28.7 0-34.2 15.1-65.9 42-90 13.4-11.8 29-21.5 46.6-27.8 18.3-6.8 37.6-10.4 58-10.4 19.3 0 38.2 2.6 55.1 8.1 18.2 5.6 33.9 14.1 47.1 24.9 14.1 11.5 25.2 26.4 32.7 43.8 7.5 16.7 11.5 36 12.7 57.7-18.3-9.2-38.8-14.4-60.3-14.4-70.2 0.2-125.6 50.5-125.6 112.2z m191.8 78.4l0.4 24.5-21.5-13.1c-13.7 3.5-26.8 7.1-38.6 7.1-14.4 0-28.3-2.3-41.2-7.4-12.5-4.8-23.4-11.2-32.7-19.8-18.6-16.4-28.7-38.6-28.7-61.7s9.9-45.3 28.5-61.7c9.2-8.5 20.2-15.1 32.7-19.7 13-4.9 26.8-7.4 41.2-7.4 13.4 0 26.8 2.3 39.4 7.4 12.5 4.8 23.5 11.2 33 19.7 9.4 8.5 16.7 17.9 22.1 28.3 5.5 10.5 8.1 21.9 8.1 33.2 0 12.3-3.7 24.2-11.2 36.5-7.6 11.9-18.1 23.3-31.5 34.1z"  ></path></symbol><symbol id="icon-02zhongtaifuwu" viewBox="0 0 1024 1024"><path d="M575.9 752.8l174.3 174.3c7.5 7.5 14.8 15.1 22.5 22.2 31.8 29.8 78.1 32.7 116.4 14.6 38.7-18.5 58.7-64.5 52.5-105.7-3.6-24.5-16.4-44.3-33.6-61.4l-187.9-188c-9.6-9.6-25.8-9.6-35.2 0l-109 108.8c-22.7 22.7 12.5 57.9 35.2 35.2L719.9 644h-35.2L859 818.3c7.5 7.5 15.1 14.8 22.2 22.5 25.6 27.1 8.3 72-24.3 82.8-39.1 13.3-68.1-28.2-92.1-52.2L611.1 717.6c-22.5-22.7-57.9 12.5-35.2 35.2zM320.6 246.7l-22-67.3c-6.8-20.9-10.1-48-33.6-55.3L125.2 80c-8.4-2.8-18.2 0.3-24.2 6.5l-47.7 47.3c-6.2 6.2-9.1 15.9-6.5 24.2l37 117.2c5 16.2 8.1 38.3 26.3 44.3l57.7 19 32.9 10.7 10.1 3.2c8.9 2.9-8.8-6.2-7.8-5l25.1 25.1 108.1 108.1 56.4 56.4c9.6 9.6 25.8 9.6 35.2 0l76-76c9.6-9.6 9.6-25.8 0-35.2L314.3 236c-22.7-22.7-57.9 12.5-35.2 35.2L468.9 461v-35.2l-76.2 76h35L275.9 349.9c-15.4-15.4-31.8-38.7-53-45.7l-99.7-32.7 17.3 17.3L95.1 145l-6.5 24.2 47.5-47.5-24.2 6.5 143.8 45.4-17.3-17.3 34 103.9c10.1 30.1 58.3 17.1 48.2-13.5z m307 489.9l76-76c9.6-9.6 9.6-25.8 0-35.2l-90.8-90.9c-9.6-9.6-25.8-9.6-35.2 0l-76 76c-9.6 9.6-9.6 25.8 0 35.2l90.8 90.8c22.7 22.7 57.9-12.5 35.2-35.2l-90.8-90.8v35.2l76-76h-35.2l90.8 90.8v-35.2l-76.2 76c-22.6 22.8 12.6 58 35.4 35.3z m101.5-293.8c38.7 2.3 81.7-1 115.3-21.7 23.5-14.4 40-41.8 55.3-63.9 25.9-37.4 50.1-76.4 73-115.6 5.7-9.6 4.1-22.2-3.9-30.3l-44.9-44.9c-9.6-9.6-25.8-9.6-35.2 0L785.4 269.7h35.3l-67.6-67.6v35.2L856.4 134c9.6-9.6 9.6-25.8 0-35.2l-44.7-44.7c-7.9-7.9-20.6-9.6-30.3-3.9-45.6 26.7-91.1 54.6-133.6 85.8-28.4 20.8-49.6 40.9-60.5 75.5-11.3 36.6-11 78.8-3.2 116.1l6.5-24.2-345.2 345.5-136.7 136.7C54.2 840 77.1 927.1 146.2 955c43.4 17.5 85.4-4.2 115.6-34.2l387.9-387.9 96.9-97.1c22.7-22.7-12.5-57.9-35.2-35.2L368.9 743.1 220.4 891.6c-9.7 9.7-20.1 16-34 19-35.8 7.5-64.7-30.3-57.7-63.1 4.4-20.8 25.1-36.6 39.6-50.9l449.4-449.4 8.1-8.1c10.1-10.1 6.6-22.2 4.7-34.5-2.3-14.1-1.8-28.9-1-43 1.3-24 6.2-50.1 24.6-66.8 17.2-15.6 37.1-28.4 56.4-41.3 31.5-21.1 63.7-40.9 96.3-60l-30.3-3.9 44.7 44.7V99L717.9 202.3c-9.6 9.6-9.6 25.8 0 35.2l67.6 67.6c9.6 9.6 25.8 9.6 35.2 0L924 201.8h-35.2l44.9 44.9-3.9-30.3c-20.6 34.9-41.8 69.4-64.4 102.8-12.8 19-25.8 38.7-41.8 55.1-21.6 22-66.5 20.3-94.7 18.6-31.9-1.8-31.5 48 0.2 49.9z"  ></path></symbol><symbol id="icon-0106kaohepinggu-sc" viewBox="0 0 1024 1024"><path d="M177.2 920.2c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L290.9 737c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7l-134 133.9c-5.5 5.5-12.8 8.6-20.5 8.6z m0-312.5c-7.6 0-14.9-3-20.4-8.4l-89.5-89.5c-5.6-5.4-8.6-12.6-8.7-20.2-0.2-7.6 2.7-14.9 8.1-20.5 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.6 2.9 20 8.1 0.3 0.2 0.5 0.5 0.6 0.6l69.2 69.2 113.6-113.6c5.4-5.1 12.4-8 19.9-8 7.8 0 15.3 3.2 20.7 8.7 10.8 11.1 10.8 28.6 0.2 39.9l-134 133.9c-5.4 5.4-12.7 8.5-20.4 8.5z m0-312.7c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L291 111.9c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7L197.7 286.4c-5.5 5.7-12.8 8.6-20.5 8.6z" fill="#E60012" ></path><path d="M467.5 875.5c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5zM467.5 563c-28.1 0-51.1-22.9-51.1-51.1 0-28.1 22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1 0 28.2-23 51.1-51.1 51.1H467.5zM467.5 250.5c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5z" fill="#062F8C" ></path></symbol><symbol id="icon-0101zonghezhanshi" viewBox="0 0 1024 1024"><path d="M927.4 148.4c0-13.6-11.1-24.7-24.7-24.7H109.2c-13.6 0-24.7 11.1-24.7 24.7v545.4c0 13.6 11.1 24.7 24.7 24.7h818.2V148.4zM636.8 768.3l49.6 198.4H325.3L375 768.3H109.2c-41 0-74.4-33.3-74.4-74.4V148.4c0-41 33.3-74.4 74.4-74.4h793.5c41 0 74.4 33.3 74.4 74.4v619.8H636.8zM84.3 594.7v49.6h843.1v-49.6H84.3zM388.8 917h234.1l-37.2-148.8H426L388.8 917z m95.4-421.2c6.7 12 21.8 16.3 33.8 9.6 3.1-1.8 5.8-4.1 8-7l97-132.1 56.3 70.4c4.7 5.9 11.9 9.3 19.4 9.3h139.6c13.6 0 24.7-11.1 24.7-24.7s-11.1-24.7-24.7-24.7H710.6l-69-86.4c-8.6-10.7-24.2-12.4-34.8-3.9-1.6 1.3-3.3 3-4.4 4.7l-93.3 127.1-120-215.9c-6.7-12-21.8-16.3-33.8-9.6-3.7 2.1-6.8 5-9 8.6L236.6 396.3h-81.3c-13.6 0-24.7 11.1-24.7 24.7s11.1 24.7 24.7 24.7h95.1c8.6 0 16.4-4.4 21-11.7l94.5-151 118.3 212.8z"  ></path></symbol><symbol id="icon-020104jiancebaojingtongjifenxigongju" viewBox="0 0 1024 1024"><path d="M167.7 889.6h687.9c18.9 0 28.8 9.8 28.8 30.3 0 20.4-9.8 30.3-28.8 30.3H167.7c-18.9 0-28.8-9.8-28.8-30.3 0.8-19.7 9.9-30.3 28.8-30.3z m351.1-266.4H624L469.6 823.8l29.5-159.7H394.7l154.4-200.5-30.3 159.6zM512 69.3c18.9 0 28.8 9.8 28.8 30.3v121.8c0 20.4-9.8 30.3-28.8 30.3s-28.8-9.8-28.8-30.3V99.6c0-20.4 9.9-30.3 28.8-30.3z m472.9 440.4c0 16.6-12.9 30.3-28.8 30.3H841.9c-15.9 0-28.8-13.6-28.8-30.3 0-16.6 12.9-30.3 28.8-30.3h115c15.2 0.1 28 13.7 28 30.3z m-774.1 0c0 16.6-12.9 30.3-28.8 30.3H67.8C51.9 540 39 526.4 39 509.7c0-16.6 12.9-30.3 28.8-30.3h115c15.2 0.1 28 13.7 28 30.3zM179 202.5c11.4-12.1 29.5-12.1 40.9 0l81 86.3c11.4 12.1 11.4 31 0 43.1-11.4 12.1-29.5 12.1-40.9 0l-81-86.3c-11.3-12.1-11.3-31 0-43.1z m666 0c-11.4-12.1-29.5-12.1-40.9 0L723.9 288c-11.4 12.1-11.4 31 0 43.1s29.5 12.1 40.9 0l80.2-85.5c11.3-12.1 11.3-31 0-43.1z"  ></path><path d="M737.5 586.2C736 454.5 633.8 348.5 509 350.1c-122.6 1.5-221 106.7-222.5 236.1v299.7h451V586.2zM512 278.2c160.4 0 290.6 137.7 290.6 308v368.5H221.4V586.2c0-170.3 130.2-308 290.6-308z"  ></path></symbol><symbol id="icon-020202baoyushengchenggongju-sc" viewBox="0 0 1024 1024"><path d="M725.2 95.8c-65.3 0-126.7 29.5-172.4 81.5-30.3-32.2-69.7-50.2-111.9-50.2-73.7 0-137.1 55.1-157.7 134h-34c-95.4 0-173 89-173 198.2s77.6 198.1 173 198.1h476c135.1 0 245-125.9 245-280.7 0-155-109.9-280.9-245-280.9z m0 505.4h-476c-68 0-123.4-63.8-123.4-142s55.3-142 123.4-142h53.6c12.2 0 22.4-9.9 24.5-23.5 9.3-64 57.2-110.5 113.5-110.5 36.5 0 70 19.3 92 53.1 4.7 7 11.9 11.3 19.6 11.4 7.3 0 15.1-3.8 19.8-10.7 37.4-54.1 93-85 152.8-85 107.7 0 195.3 100.8 195.3 224.6 0.3 123.8-87.4 224.6-195.1 224.6z" fill="#062F8C" ></path><path d="M230.5 722L83.4 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4L266 761.5c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.3 0.2zM459.3 721.7c-9.8-10.9-25.4-10.7-35.1 0.2l-73.5 84.2c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.6-11.2 9.5-28.9-0.3-39.8zM814.5 722L741 806.1c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.2 0.2zM621 722L473.8 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l147.1-168.5c9.7-11 9.6-28.8-0.2-39.7-9.7-11.1-25.5-11-35.1 0.2z" fill="#E60012" ></path></symbol><symbol id="icon-010703wode" viewBox="0 0 1024 1024"><path d="M511.6 580c-152.2 0-275.7-123.4-275.7-275.6 0-73.1 29-143.3 80.8-195C423.8 1.3 598.4 0.4 706.5 107.6s109 281.7 1.8 389.8l-1.9 1.9c-51.5 51.8-121.7 80.8-194.8 80.7z m0-513.2c-131.2 0-237.5 106.3-237.5 237.5 0 63 25 123.4 69.6 167.9 92.4 93 242.8 93.5 335.9 1.1s93.5-242.8 1.1-335.9l-1.1-1.1c-44.5-44.6-105-69.6-168-69.5z"  ></path><path d="M928.3 996.3H95.7c-10.5 0-19.1-8.5-19.1-19.1-0.1-147.7 74.7-285.3 198.7-365.5l20.8 32c-107.5 69.5-174.8 186.6-180.9 314.5h793.6c-4.6-98.9-45.4-191.3-115.9-261.8C718.6 621.6 617.4 579.7 512 580c-4.1 0-8.3 0.1-12.4 0.2l-1.2-38.2c4.5-0.1 9.1-0.2 13.6-0.2 240.3-0.2 435.2 194.5 435.4 434.8v0.7c0 10.4-8.5 19-19.1 19z"  ></path></symbol><symbol id="icon-010303sheshitongji" viewBox="0 0 1024 1024"><path d="M594 594H202c15.4 201.1 190.9 351.6 392 336.2s351.6-190.9 336.2-392C916.5 358.5 773.7 215.7 594 202v392z m-54.1-54.1V146.8h26.2c231.6 0 419.3 187.7 419.3 419.2S797.7 985.3 566.2 985.4 146.8 797.7 146.8 566.1v-26.2h393.1z m-55-54.9h-26.3c-145-0.2-276.3-0.2-393.8 0H38.6v-26.3c0-232 188.1-420 420-420h26.3V485zM432.4 92C250.1 105.1 105.1 250.1 92.1 432.4c103.3-0.1 216.7-0.1 340.4 0V92z"  ></path></symbol><symbol id="icon-010yingjiguanli-sc" viewBox="0 0 1024 1024"><path d="M746.4 341.4l4 4 84.4-85c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-14-8.9-32.1-7.1-44.1 4l-84.2 84.8 8 4c7.7 16.4 19.7 24.6 31.9 36.8zM228.3 491.1H112c-17.8 0-32.4 14.6-32.4 32.4s14.6 32.4 32.4 32.4h116.4l-0.1-64.8z m325.3-376.5c0.3-17.6-13.9-32-31.4-32.3h-0.9c-17.3 1.1-31 15-32.3 32.3v125.7h64.4V114.6h0.2z m-257 230.7l4-4c9.9-14.1 22.1-26.6 36.1-36.6l8-4-88.2-89.1c-16-12.1-36.1-12.1-48.1 0-4.4 7.4-7.1 15.7-8 24.3 0.9 8.6 3.6 16.8 8 24.3l88.2 85.1zM931 491.1H814.6v64.7H931c17.8 0 32.4-14.6 32.4-32.4 0-17.9-14.6-32.3-32.4-32.3z m-100.5 336h-52V531.5c0-141.6-116.4-259.2-256.9-259.2s-257 117.5-257 259.2v295.6h-52.3c-17.8 0-32.4 14.6-32.4 32.4 0 17.8 14.6 32.4 32.4 32.4h618.3c17.8 0 32.4-14.6 32.4-32.4 0-17.8-14.6-32.4-32.5-32.4z m-116.5 0H328.7V551.8c0-52.7 20-101.2 56.3-141.6 68-75.4 184.2-81.4 259.6-13.4 4.7 4.3 9.1 8.7 13.4 13.4 36.1 36.4 56.3 89.1 56.3 141.6l-0.3 275.3z" fill="#062F8C" ></path><path d="M597.6 563.9h-72.1l40.1-40.6c8-8.1 8-16.1 8-24.3-0.9-8.6-3.6-16.8-8-24.3-12.3-12.1-32-12.1-44.1 0l-96.4 93.1c-12 12.4-12 32.1 0 44.5 8 8.1 20 12.1 36.1 12.1h68.3l-56.1 64.8c-8 8.1-8 16.1-8 24.3 0.9 8.6 3.6 16.8 8 24.3 8 8.3 16 8.3 24 8.3 8.6-0.9 16.8-3.6 24.1-8.1l96.7-97.1c11-10.6 16.8-25.3 16-40.6-0.4-20.3-12.3-36.4-36.6-36.4z" fill="#E60012" ></path></symbol><symbol id="icon-010204jiancebudiangongju-sc" viewBox="0 0 1024 1024"><path d="M819.7 551.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6L515 553.5l-115-36.2c14.2-23.6 23.3-46.6 23.3-71.2 0-65.2-53-118-118.4-118s-118.4 52.8-118.4 118c0 27.2 12 53.6 29.3 80.8l-0.5 0.1L53.8 886.9l244.3-91.6 222.3 91.6L729 795.3l241.2 91.6-150.5-335zM704.2 244c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101zM305.1 388.9c31.7 0 57.5 25.6 57.5 57.3 0 31.6-25.8 57.3-57.5 57.3-31.8 0-57.5-25.7-57.5-57.3 0-31.7 25.7-57.3 57.5-57.3z m419.8 351.8l-204.6 88.2-218.1-88.2-162.7 73.7 93.2-239.2 15.2-2.8c18.5 24.6 38.7 50.6 57.2 79.5 23-36.5 47.1-66.8 67.7-94.8l142.3 45.4 89.1-28.8c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l94 233.5-163.8-76.6z" fill="#062F8C" ></path><path d="M604.2 573.7c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l25-31.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6l29.8 39.1z m100-329.7c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101z" fill="#E60012" ></path></symbol><symbol id="icon-0201shujujichufuwu" viewBox="0 0 1024 1024"><path d="M851.5 90.7H172.4c-52.9 0-95.5 42.8-95.8 95.5v651.4c0 52.9 42.5 95.8 95.5 95.8h680.1c52.6-0.3 95.2-42.8 95.2-95.8V186.5c-0.2-53-43-95.8-95.9-95.8zM396.7 595V368.2h216.1V595H396.7z m216.1 56.2v218.4H396.7V651.2h216.1z m-472.5-283h200.3V595H140.3V368.2z m529.1 0h214.4V595H669.4V368.2z m-497-213.9h679.1c17.7 0 32.1 14.4 32.1 32.1V312H140.3V186.5c0-17.8 14-32.2 32.1-32.2-0.3 0-0.3 0 0 0z m-32.1 683.1V651.2h200.3v218.4H172.4c-17.8-0.1-32.1-14.5-32.1-32.2z m711.2 32.1H669.4V651.2h214.4v186.2c-0.5 17.7-14.6 32.1-32.3 32.1z"  ></path></symbol><symbol id="icon-020204jiancebudiangongju" viewBox="0 0 1024 1024"><path d="M819.7 551.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6L515 553.5l-115-36.2c14.2-23.6 23.3-46.6 23.3-71.2 0-65.2-53-118-118.4-118s-118.4 52.8-118.4 118c0 27.2 12 53.6 29.3 80.8l-0.5 0.1L53.8 886.9l244.3-91.6 222.3 91.6L729 795.3l241.2 91.6-150.5-335zM704.2 244c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101zM305.1 388.9c31.7 0 57.5 25.6 57.5 57.3 0 31.6-25.8 57.3-57.5 57.3-31.8 0-57.5-25.7-57.5-57.3 0-31.7 25.7-57.3 57.5-57.3z m419.8 351.8l-204.6 88.2-218.1-88.2-162.7 73.7 93.2-239.2 15.2-2.8c18.5 24.6 38.7 50.6 57.2 79.5 23-36.5 47.1-66.8 67.7-94.8l142.3 45.4 89.1-28.8c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l94 233.5-163.8-76.6z"  ></path><path d="M604.2 573.7c32.6 41.6 67.7 85.5 99.9 133.8 30.2-46.1 61.4-86.3 90.6-123.7l25-31.9C877 478.3 920.9 415.8 920.9 345c0-114.9-97-207.9-216.8-207.9S487.4 230.2 487.4 345c0 63.4 37.7 124.1 87 189.6l29.8 39.1z m100-329.7c58.1 0 105.3 45.2 105.3 101s-47.1 101.1-105.3 101.1S598.9 400.9 598.9 345c0.1-55.8 47.1-101 105.3-101z"  ></path></symbol><symbol id="icon-010203xiangmurili" viewBox="0 0 1024 1024"><path d="M479.2 610.4h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0 18.1 14.7 32.7 32.8 32.8z m0 131.1h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0.1 18.1 14.7 32.8 32.8 32.8z m360.6-590.1H708.7v-32.8c0-18.1-14.7-32.8-32.8-32.8-18.1 0-32.8 14.7-32.8 32.8v32.8H380.9v-32.8c0-18.1-14.7-32.8-32.8-32.8-18.1 0-32.8 14.7-32.8 32.8v32.8H184.2c-72.1 0-131.1 59-131.1 131.1V807c0 72.1 59 131.1 131.1 131.1h655.6c72.1 0 131.1-59 131.1-131.1V282.5c0-72.1-59-131.1-131.1-131.1zM905.4 807c-0.1 36.2-29.4 65.5-65.6 65.6H184.2c-36.2-0.1-65.5-29.4-65.6-65.6V413.7h786.7V807z m0-458.9H118.6v-65.6c0.1-36.2 29.4-65.5 65.6-65.6h131.1v32.8c0 18.1 14.7 32.8 32.8 32.8 18.1 0 32.8-14.7 32.8-32.8V217h262.2v32.8c0 18.1 14.7 32.8 32.8 32.8 18.1 0 32.8-14.7 32.8-32.8V217h131.1c36.2 0.1 65.5 29.4 65.6 65.6v65.5zM282.5 741.5h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0 18.1 14.7 32.8 32.8 32.8z m393.4-131.1h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0 18.1 14.7 32.7 32.8 32.8z m-393.4 0h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0 18.1 14.7 32.7 32.8 32.8z m393.4 131.1h65.6c18.1 0 32.8-14.7 32.8-32.8 0-18.1-14.7-32.8-32.8-32.8h-65.6c-18.1 0-32.8 14.7-32.8 32.8 0 18.1 14.7 32.8 32.8 32.8z"  ></path></symbol><symbol id="icon-020301sheshishebeitongjigongju" viewBox="0 0 1024 1024"><path d="M214.3 174c24-10.1 51.4 17.1 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.1-17.1-15.4-9.7-46.7 12.2-53.4z m111-0.1c24-10 51.4 17.2 41.3 41.3-6.6 22-38.2 29.5-53.6 12.2-17-15.5-9.5-46.8 12.3-53.5z m203.1 0.4c79.2-5.4 159.1-0.4 238.5-2.4 19.9 1.5 47.1-5.1 59.4 15.7 12.8 18.4-0.8 48.3-23.9 48.5-80.1 2.4-160.3 0-240.4 1.1-15.3-1.3-34.2 2.7-45.7-10.1-16.2-15.4-9.4-46.1 12.1-52.8zM214.3 451.5c24-10 51.4 17.3 41.3 41.3-6.6 22-38.1 29.3-53.5 12.1-17.2-15.4-9.7-46.6 12.2-53.4z m111 0c24-10 51.4 17.3 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.2-17.1-15.4-9.7-46.7 12.2-53.5z m203.1 0.4c79.2-5.4 159.1-0.4 238.5-2.4 19.9 1.5 47.2-5.1 59.4 15.7 15.1 22-6 53.6-32.1 49.2-86.1 0.1-172.2 1.4-258.3-0.6-33.1-0.6-38.9-52.8-7.5-61.9z m-314.1 268c24-10 51.4 17.2 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.1-17.2-15.5-9.7-46.6 12.2-53.4z m111 0c24-10 51.4 17.3 41.3 41.3-6.6 21.9-38.1 29.3-53.4 12.2-17.2-15.4-9.7-46.7 12.1-53.5z"  ></path><path d="M550.5 880c-143.9-0.1-287.8 0.1-431.7 0.6 1.5-70.9 0.6-142 0.5-212.8 147.9 0.4 295.7 0.3 443.6 0.3 12-24.3 27.4-46.6 45.7-66.2-163.1-0.1-326.3-0.1-489.5 0.4 0.5-70.9 1.1-142-0.4-212.9 262 1 524.1 0.7 786.1 0.1-0.7 47.4-0.8 94.8-0.6 142.1 19.9 7.4 38.7 17 56.1 28.5-0.1-147.9-0.1-295.7 0.5-443.7-0.4-21.3 1.8-48.1-18.4-61.7-11.2-9.7-27.5-6-41.1-7.4-259.3 0.3-518.7 0.3-778.1-0.1-13.8 1.7-30.4-3-41.9 6.7-15.3 9.7-19.2 27-17.9 44 0.4 265.6 0.2 531.1 0.2 796.6-4.4 28.8 21.5 54.3 50.1 50.1h469.6c-13.6-19.9-24.7-41.5-32.8-64.6z m354.1-776.6c-0.6 73.1-0.2 146.2-0.4 219.3-261.6 0.4-523.2-0.2-784.7 0.3 0-73.3 0.3-146.5-0.2-219.8 261.7 0.7 523.5 0.2 785.3 0.2z"  ></path><path d="M805.3 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7 3.2 0 6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.4 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H805.7c-0.4 0.2-0.7 0.2-0.9 0.2z m167.6-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z"  ></path></symbol><symbol id="icon-020205changzhanshejipipeigongju-sc" viewBox="0 0 1024 1024"><path d="M939.1 455.2L598.6 119.7c-48.2-47.1-125.3-47.1-173.4 0L84.8 455.2c-15.3 15-23.8 35.5-23.9 56.9v303.4c0 68.5 55.7 124.2 124.2 124.2h471.2c19.6 0 35.5-15.9 35.5-35.5s-15.9-35.5-35.5-35.5H185c-29.3 0-53.2-23.8-53.2-53.2V512.1c0-2.3 0.9-4.7 2.7-6.3L475 170.3c20.5-20.1 53.4-20.1 73.9 0l340.6 335.5c1.7 1.7 2.6 3.9 2.6 6.2v303.4c0 29.3-23.8 53.2-53.2 53.2-19.6 0-35.5 15.9-35.5 35.5s15.9 35.5 35.5 35.5c68.5 0 124.2-55.7 124.2-124.2V512.1c-0.1-21.4-8.8-41.8-24-56.9z" fill="#062F8C" ></path><path d="M746.6 512H408.8c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z m469.1 177.4H408.8c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z" fill="#E60012" ></path></symbol><symbol id="icon-020303yunyinggongdantongjigongju-sc" viewBox="0 0 1024 1024"><path d="M797.2 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7s6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.5 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H797.5c-0.3 0.2-0.6 0.2-0.8 0.2z m167.5-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z" fill="#062F8C" ></path><path d="M291 294.8c56.8 0 107.3-37.9 120-94.7h543.1V137H410.9c-12.6-56.9-63.1-94.7-120-94.7-56.8 0-107.3 37.9-120 94.7h-101v63.1H171c12.6 56.7 63.1 94.7 120 94.7z m-50.6-158c6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0.1 12.7-6.3 25.3-12.6 31.6-6.3 18.9-25.3 31.6-50.5 31.6-25.3 0-44.2-12.6-50.5-31.6-6.3-6.3-12.6-18.9-12.6-31.6 0-12.5 6.3-25.2 12.6-31.6zM629.4 555c17.5-12.5 36.4-23.1 56.6-31.5-1.4-2.4-2.6-5-3.5-7.8-6.3-6.3-12.6-18.9-12.6-31.6 0-12.6 6.3-25.3 12.6-31.6 6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0 6.3-1.6 12.7-4 18.2h1c30 0 58.9 4.7 86 13.4H954v-63.1H852.9c-12.6-56.9-63.1-94.7-119.9-94.7s-107.3 37.9-120 94.7H69.9v63.1H613c3.2 14.5 8.8 27.7 16.4 39.3zM512 783.6c0-5.1 0.1-10.1 0.4-15.2H410.9c-12.6-56.8-63.1-94.7-120-94.7-56.8 0-107.3 37.9-120 94.7h-101v63.1H171c12.6 56.8 63.1 94.7 120 94.7 56.8 0 107.3-37.9 120-94.7h105.1c-2.7-15.5-4.1-31.6-4.1-47.9z m-170.6 48c-6.3 18.9-25.3 31.6-50.5 31.6-25.3 0-44.2-12.6-50.5-31.6-6.3-6.3-12.6-18.9-12.6-31.6 0-12.6 6.3-25.3 12.6-31.6 6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0.1 12.6-6.2 25.2-12.6 31.6z" fill="#E60012" ></path></symbol><symbol id="icon-0106kaohepinggu" viewBox="0 0 1024 1024"><path d="M177.2 920.2c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L290.9 737c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7l-134 133.9c-5.5 5.5-12.8 8.6-20.5 8.6z m290.3-44.7c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5zM177.2 607.7c-7.6 0-14.9-3-20.4-8.4l-89.5-89.5c-5.6-5.4-8.6-12.6-8.7-20.2-0.2-7.6 2.7-14.9 8.1-20.5 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.6 2.9 20 8.1 0.3 0.2 0.5 0.5 0.6 0.6l69.2 69.2 113.6-113.6c5.4-5.1 12.4-8 19.9-8 7.8 0 15.3 3.2 20.7 8.7 10.8 11.1 10.8 28.6 0.2 39.9l-134 133.9c-5.4 5.4-12.7 8.5-20.4 8.5zM467.5 563c-28.1 0-51.1-22.9-51.1-51.1 0-28.1 22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-23 51.1-51.1 51.1H467.5zM177.2 295c-7.6 0-14.9-3-20.4-8.4l-89.2-89.2c-10.6-11.2-10.6-28.7 0.2-40 5.4-5.7 12.9-8.7 20.7-8.7 7.5 0 14.5 2.9 19.9 8l68.9 68.9L291 111.9c5.4-5.4 12.7-8.4 20.4-8.4 7.6 0 14.9 3 20.4 8.4 11.1 11.1 11.1 29.4 0 40.7L197.7 286.4c-5.5 5.7-12.8 8.6-20.5 8.6z m290.3-44.5c-28.1 0-51.1-22.9-51.1-51.1s22.9-51.1 51.1-51.1h446.6c28.1 0 51.1 22.9 51.1 51.1s-22.9 51.1-51.1 51.1H467.5z"  ></path></symbol><symbol id="icon-020407nenghaofenxigongju" viewBox="0 0 1024 1024"><path d="M512 961.7C264 961.7 62.3 760 62.3 512S264 62.3 512 62.3 961.7 264 961.7 512 760 961.7 512 961.7z m0-854.5c-223.2 0-404.8 181.6-404.8 404.8S288.8 916.8 512 916.8 916.8 735.2 916.8 512 735.2 107.2 512 107.2zM396.8 824.4c-13.2 0-25.8-5.5-34.6-15.1l-0.8-0.9c-8.7-10.3-12.7-23.8-11-37.1v-0.3c0.3-2.5 0.9-5.2 1.8-7.9l57.2-165.5h-89.3l-0.7 0.1h-2.2c-18.6-0.1-34.5-8.9-42.4-23.7l-0.5-0.8c-8.1-16.3-5.8-35.8 6-49.7l262.3-310.4c3.2-3.8 6.9-6.8 10.9-9 8.5-4.6 18.1-7.3 27.7-7.6h1c13.2 0 25.9 5.5 34.9 15l0.2 0.2 0.3 0.3c9.8 11 13.8 25.4 11.9 42.8v0.8c0 0.5-0.2 1.4-0.4 2.5l-0.1 0.3-29.7 147.8 112.8 0.9c16.7 1.5 30.9 10.8 38.1 24.9 7.2 14.7 5.6 32.3-4.1 47.1l-6.6 10h-2.2L434 810.1c-4 4.2-8.8 7.5-13.9 9.5l-0.4 0.1c-7.1 3-14.5 4.5-22.1 4.7h-0.8z m17.6-105.5l28.4 17.2 269-284.7-166.7-1.1 32.2-160.1-29.6-14.2-234.6 277.5h158.4l-57.1 165.4z"  ></path></symbol><symbol id="icon-020207guanwangmonigongju" viewBox="0 0 1024 1024"><path d="M932.5 423.7h30.8v-45H742.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1z m-387 108.9c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C141 95 107.3 266.8 99.5 311.8S87.1 519.7 87.1 519.7H60.7v45.9l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z"  ></path><path d="M60.8 600.2h33.5v305s45.8 31.7 154.2 0V606.3l30.9-2.7V556H60.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1zM910.5 853.5h-30.4c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4H621.5c-8.6 0-14.5 5.8-14.5 14.5 0 8.6 5.8 14.5 14.5 14.5h145.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h30.4c8.6 0 14.5-5.8 14.5-14.5-0.1-8.6-5.9-14.5-14.6-14.5z m-86.7 49.3c-18.8 0-34.6-15.9-34.6-34.6 0-18.7 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.8 34.6-34.6 34.6zM910.5 700.5H750.2c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4h-15.9c-8.6 0-14.5 5.8-14.5 14.5s5.8 14.5 14.5 14.5h15.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h160.4c8.6 0 14.5-5.8 14.5-14.5s-5.9-14.5-14.6-14.5z m-216.7 49.1c-18.8 0-34.6-15.9-34.6-34.6 0-18.8 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.7 34.6-34.6 34.6z"  ></path><path d="M939.3 556.1H592.8c-31.8 0-57.8 26-57.8 57.8v346.7c0 31.8 26 57.8 57.8 57.8h346.7c31.8 0 57.8-26 57.8-57.8V613.7c-0.2-31.6-26.2-57.6-58-57.6z m29.1 404.3h-0.1c0 15.9-13 28.9-28.9 28.9H592.8c-15.9 0-28.9-13-28.9-28.9V613.7c0-15.9 13-28.9 28.9-28.9h346.7c15.9 0 28.9 13 28.9 28.9v346.7z"  ></path></symbol><symbol id="icon-020103jianceshujuxiaoyanjixiufugongju" viewBox="0 0 1024 1024"><path d="M827.3 935c-4.3 0-8.3-1.7-11.4-4.7L594.2 708.9c-3-3.1-4.6-7.1-4.6-11.4 0-4.3 1.7-8.4 4.8-11.4 3-3 7.1-4.7 11.3-4.7 4.3 0 8.3 1.7 11.4 4.7L827.3 896l58.7-58.5-209.7-209.4c-6.2-6.3-6.1-16.6 0.2-22.8 3-3 7.1-4.7 11.3-4.7 4.3 0 8.3 1.7 11.4 4.7l221.1 220.9c6.3 6.2 6.3 16.4 0.1 22.6l-81.6 81.5c-3 3-7.1 4.7-11.5 4.7z m-469-468.4c-4.3 0-8.4-1.7-11.4-4.7l-82.7-82.6-69.9 69.8-0.2 0.1-0.2 0.2c-3 3-7 4.6-11.3 4.6-4.3 0-8.4-1.7-11.4-4.7L69.3 347.4c-3-3-4.6-7-4.6-11.3 0-4.3 1.7-8.3 4.7-11.4l166.7-165.9c0.7-0.4 1.7-1.1 2.7-1.9l1.2-1 1-1.2c0.9-1 1.5-2 2-2.7 27.9-27.7 60.5-49.3 96.9-64.3C376 73 414.1 65.5 453.2 65.5c35.3 0 69.8 6.2 102.8 18.3v2l12.4 2.9c0.2 0.2 0.5 0.4 0.7 0.6 0.6 0.5 1.2 1 1.9 1.4l0.2 0.2 0.2 0.2c0.7 0.5 1.4 0.9 1.9 1.2 0.8 0.9 1.5 1.9 2.1 3l0.4 0.7 0.4 0.7c0.2 0.2 0.3 0.4 0.4 0.6 0.7 1.5 1.1 3.2 1.2 4.8v0.5c0.1 1.9-0.1 3.7-0.6 5.5-0.3 0.7-0.5 1.3-0.6 1.9l-0.1 0.3c-0.6 0.9-1.2 1.8-1.9 2.6l-1.1 1.2-0.5 0.7c-1 0.9-2.1 1.6-3.2 2.3l-0.2 0.1-0.2 0.1c-0.4 0.2-0.8 0.5-1.2 0.7-1.4 0.5-2.8 0.9-4.3 1-1 0.1-2 0.3-2.8 0.5-43.4 2.9-84.5 19.6-119 48.5l-0.3 0.2-3.9 3.3c-3.4 2.9-6.9 5.9-10.4 9.3-17.1 17.1-32 36.4-44.2 57.3l-0.1 0.1c-1.1 1.9-2.1 3.7-3 5.5-0.5 1-1.1 2-1.6 3l-1.1 1.9-0.4 1.5c-4.6 10.3-4.6 22 0.1 32.4l1.3 2.8 71.7 71.6c6.3 6.3 6.3 16.5 0 22.8-3 3-7.1 4.7-11.4 4.7-4.3 0-8.4-1.7-11.4-4.7l-71.9-71.9c-0.5-0.8-1.1-1.8-2-2.9l-0.5-0.7-0.6-0.6c-1.1-1.1-2.1-2.4-2.9-3.9-10.6-20.2-10.7-44.6-0.4-65.3l5.4-10.8c13.6-23.7 30.3-45.5 49.7-65l0.7-0.7 0.6-0.7c0.5-0.6 0.9-1.2 1.2-1.7 6.8-6.6 14.5-13.2 23.6-20.1l54.3-41.8-59.4 6.1c-59.9 6.1-116.4 32.7-159.3 74.9-0.7 0.4-1.6 1-2.6 1.8l-1.4 1.1-1.1 1.4c-0.8 1-1.5 2-1.9 2.8L103.7 336.1l79.1 78.9 70.1-70c3-3 7.1-4.7 11.4-4.7 4.3 0 8.4 1.7 11.4 4.7l94.1 94.1c6.3 6.3 6.3 16.5 0 22.8-3.2 3.1-7.2 4.7-11.5 4.7z"  ></path><path d="M281.1 958.5c-26.9 0-54-6.1-78.4-17.5-8-3.8-11.5-13.5-7.6-21.6 0.8-1.7 1.8-3.2 3.1-4.5l103.2-103.1-58.3-58.2-102.6 102.6c-3 3-7.1 4.7-11.3 4.7-1 0-2-0.1-3-0.3h-0.2c-5.2-0.9-9.6-4.4-11.8-9.2-15.2-33.8-19.7-71-13.1-107.6 6.6-36.5 23.9-69.7 50-96 34.7-34 80.6-52.8 129.2-52.8 18.6 0 37 2.8 54.7 8.3l9.8 3 261.9-261.6-3.1-9.8c-20.4-64.9-3.3-135.3 44.6-183.7 34.2-34.2 79.8-53 128.3-53 25.9 0 52 5.6 75.6 16.3 8.2 3.6 11.8 13.1 8.2 21.2-0.8 1.8-1.9 3.4-3.3 4.8l-104.1 104 58.3 58.3 104.6-104.5c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.3 1.7 11.3 4.7 1.3 1.3 2.4 2.9 3.2 4.6 16.1 34.1 21.2 71.7 14.8 108.8-6.4 37.1-23.8 70.8-50.3 97.5-16.8 16.8-36.5 30-58.5 39.2-22 9.1-45.2 13.8-69 13.8h-0.6c-19.8 0-39.4-3.2-58.1-9.4l-10-3.3-260.4 260.2 3.3 10c10.7 32 12.2 66.3 4.5 99.2s-24.4 62.9-48.2 86.8c-33.5 33.6-80 52.9-127.5 52.9h-0.6z m54.7-158c6.3 6.3 6.3 16.4 0.1 22.7L235.1 923.8l37.8 2.2c2.9 0.2 5.8 0.3 8.7 0.3 39.1 0 77.3-15.9 104.8-43.5 44.3-44.7 56-112.9 29.1-169.7-2.9-6.1-1.6-13.4 3.2-18.2l276.6-276.2c3.1-3 7.1-4.7 11.5-4.7 2.4 0 4.7 0.5 6.9 1.5 19.4 9.1 41.3 13.9 63.4 13.9 40.3 0 79.1-15.7 106.5-43.1 29.8-29.9 45.5-71.2 43.3-113.3l-2-38-102.3 102c-3.1 3.1-7.1 4.8-11.4 4.8-4.3 0-8.3-1.7-11.4-4.7l-81.2-81c-6.3-6.3-6.3-16.5 0-22.8l101.6-101.4-39.5-1.1c-1.4 0-2.8-0.1-4.2-0.1-81.3 0-146.8 63.7-149.1 145-0.6 22.7 4 45.6 13.5 66.2 2.7 6 1.4 13.2-3.3 17.9L359.9 637.1c-3 3-7.1 4.7-11.5 4.7-2.3 0-4.5-0.5-6.7-1.4-18.8-8.5-39.9-12.9-61.1-12.9-40.2 0-79.1 15.7-106.6 43.2-29 28.8-45 68.8-43.8 109.7l1.2 39.3 100.3-100.1c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.4 1.7 11.4 4.7l0.2 0.2 81.1 80.8z"  ></path><path d="M281.1 958.5c-26.9 0-54-6.1-78.4-17.5-8-3.8-11.5-13.5-7.6-21.6 0.8-1.7 1.8-3.2 3.1-4.5l103.2-103.1-58.3-58.2-102.6 102.6c-3 3-7.1 4.7-11.3 4.7-1 0-2-0.1-3-0.3h-0.2c-5.2-0.9-9.6-4.4-11.8-9.2-15.2-33.8-19.7-71-13.1-107.6 6.6-36.5 23.9-69.7 50-96 34.7-34 80.6-52.8 129.2-52.8 18.6 0 37 2.8 54.7 8.3l9.8 3 261.9-261.6-3.1-9.8c-20.4-64.9-3.3-135.3 44.6-183.7 34.2-34.2 79.8-53 128.3-53 25.9 0 52 5.6 75.6 16.3 8.2 3.6 11.8 13.1 8.2 21.2-0.8 1.8-1.9 3.4-3.3 4.8l-104.1 104 58.3 58.3 104.6-104.5c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.3 1.7 11.3 4.7 1.3 1.3 2.4 2.9 3.2 4.6 16.1 34.1 21.2 71.7 14.8 108.8-6.4 37.1-23.8 70.8-50.3 97.5-16.8 16.8-36.5 30-58.5 39.2-22 9.1-45.2 13.8-69 13.8h-0.6c-19.8 0-39.4-3.2-58.1-9.4l-10-3.3-260.4 260.2 3.3 10c10.7 32 12.2 66.3 4.5 99.2s-24.4 62.9-48.2 86.8c-33.5 33.6-80 52.9-127.5 52.9h-0.6z m54.7-158c6.3 6.3 6.3 16.4 0.1 22.7L235.1 923.8l37.8 2.2c2.9 0.2 5.8 0.3 8.7 0.3 39.1 0 77.3-15.9 104.8-43.5 44.3-44.7 56-112.9 29.1-169.7-2.9-6.1-1.6-13.4 3.2-18.2l276.6-276.2c3.1-3 7.1-4.7 11.5-4.7 2.4 0 4.7 0.5 6.9 1.5 19.4 9.1 41.3 13.9 63.4 13.9 40.3 0 79.1-15.7 106.5-43.1 29.8-29.9 45.5-71.2 43.3-113.3l-2-38-102.3 102c-3.1 3.1-7.1 4.8-11.4 4.8-4.3 0-8.3-1.7-11.4-4.7l-81.2-81c-6.3-6.3-6.3-16.5 0-22.8l101.6-101.4-39.5-1.1c-1.4 0-2.8-0.1-4.2-0.1-81.3 0-146.8 63.7-149.1 145-0.6 22.7 4 45.6 13.5 66.2 2.7 6 1.4 13.2-3.3 17.9L359.9 637.1c-3 3-7.1 4.7-11.5 4.7-2.3 0-4.5-0.5-6.7-1.4-18.8-8.5-39.9-12.9-61.1-12.9-40.2 0-79.1 15.7-106.6 43.2-29 28.8-45 68.8-43.8 109.7l1.2 39.3 100.3-100.1c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.4 1.7 11.4 4.7l0.2 0.2 81.1 80.8z"  ></path></symbol><symbol id="icon-020102puchajikanceshujuchuligongju" viewBox="0 0 1024 1024"><path d="M875.5 49.3h-727c-54.7 0-99.2 44.5-99.2 99.2v727c0 54.7 44.5 99.2 99.2 99.2h727c54.7 0 99.2-44.5 99.2-99.2v-727c0-54.8-44.5-99.2-99.2-99.2z m33.1 826.2c0 18.2-14.9 33.1-33.1 33.1h-727c-18.2 0-33.1-14.8-33.1-33.1v-727c0-18.2 14.9-33.1 33.1-33.1h727c18.2 0 33.1 14.8 33.1 33.1v727z"  ></path><path d="M445.9 313.7h-66.1v-66.1c0-18.2-14.8-33.1-33.1-33.1-18.2 0-33.1 14.8-33.1 33.1v66.1h-66.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h66.1V446c0 18.2 14.8 33.1 33.1 33.1 18.2 0 33.1-14.8 33.1-33.1v-66.1h66.1c18.2 0 33.1-14.8 33.1-33.1 0-18.4-14.8-33.1-33.1-33.1z m330.5 0H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1-0.1-18.4-14.8-33.1-33.1-33.1z m0 330.5H578.1c-18.2 0-33.1 14.8-33.1 33.1s14.8 33.1 33.1 33.1h198.3c18.2 0 33.1-14.8 33.1-33.1s-14.8-33.1-33.1-33.1z m-323.7-72.9c-12.9-12.9-33.9-12.9-46.6 0l-59.3 59.2-59.3-59.3c-12.9-12.9-33.9-12.9-46.8 0-12.9 12.9-12.9 33.9 0 46.6l59.3 59.3-59.3 59.3c-12.9 12.9-12.9 33.9 0 46.6 6.5 6.4 14.9 9.7 23.4 9.7 8.5 0 16.9-3.2 23.4-9.7l59.4-59.2 59.3 59.3c6.4 6.4 14.9 9.7 23.4 9.7s16.9-3.2 23.4-9.7c12.9-12.9 12.9-33.9 0-46.6l-59.3-59.3 59.3-59.3c12.7-12.8 12.7-33.7-0.3-46.6z m191.5 6.8c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z m0 198.3c0 18.2 14.8 33.1 33.1 33.1s33.1-14.8 33.1-33.1c0-18.2-14.8-33.1-33.1-33.1s-33.1 14.8-33.1 33.1z"  ></path></symbol><symbol id="icon-020104jiancebaojingtongjifenxigongju-sc" viewBox="0 0 1024 1024"><path d="M167.7 889.6h687.9c18.9 0 28.8 9.8 28.8 30.3 0 20.4-9.8 30.3-28.8 30.3H167.7c-18.9 0-28.8-9.8-28.8-30.3 0.8-19.7 9.9-30.3 28.8-30.3zM512 69.3c18.9 0 28.8 9.8 28.8 30.3v121.8c0 20.4-9.8 30.3-28.8 30.3s-28.8-9.8-28.8-30.3V99.6c0-20.4 9.9-30.3 28.8-30.3z m472.9 440.4c0 16.6-12.9 30.3-28.8 30.3H841.9c-15.9 0-28.8-13.6-28.8-30.3 0-16.6 12.9-30.3 28.8-30.3h115c15.2 0.1 28 13.7 28 30.3z m-774.1 0c0 16.6-12.9 30.3-28.8 30.3H67.8C51.9 540 39 526.4 39 509.7c0-16.6 12.9-30.3 28.8-30.3h115c15.2 0.1 28 13.7 28 30.3zM179 202.5c11.4-12.1 29.5-12.1 40.9 0l81 86.3c11.4 12.1 11.4 31 0 43.1s-29.5 12.1-40.9 0l-81-86.3c-11.3-12.1-11.3-31 0-43.1z m666 0c-11.4-12.1-29.5-12.1-40.9 0L723.9 288c-11.4 12.1-11.4 31 0 43.1s29.5 12.1 40.9 0l80.2-85.5c11.3-12.1 11.3-31 0-43.1z" fill="#062F8C" ></path><path d="M737.5 586.2C736 454.5 633.8 348.5 509 350.1c-122.6 1.5-221 106.7-222.5 236.1v299.7h451V586.2zM512 278.2c160.4 0 290.6 137.7 290.6 308v368.5H221.4V586.2c0-170.3 130.2-308 290.6-308z" fill="#062F8C" ></path><path d="M518.8 623.2H624L469.6 823.8l29.5-159.7H394.7l154.4-200.5z" fill="#E60012" ></path></symbol><symbol id="icon-020402xiangmupinggugongju" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z"  ></path><path d="M521.7 916.1H184.9c-38.5 0-67.4-28.9-67.4-67.4V175.3c0-38.5 28.9-67.4 67.4-67.4h52.9c0 9.7-4.8 19.2-4.8 28.9 0 48.1 38.5 86.6 86.6 86.6h221.3c48.1 0 86.6-38.5 86.6-86.6 0-9.7 0-19.2-4.8-28.9h52.9c38.5 0 67.4 28.9 67.4 67.4v288.6c0 14.4 14.4 28.9 28.9 28.9s28.9-14.4 28.9-28.9V175.3c-0.2-67.4-57.9-125.1-125.3-125.1H189.7c-67.3 0-125.1 57.7-125.1 125.1v673.4c0 67.4 57.7 125.1 125.1 125.1h336.8c14.4 0 28.9-14.4 28.9-28.9s-14.5-28.8-33.7-28.8z m19.2-808.2c14.4 0 28.9 9.7 28.9 28.9 0 14.4-14.4 28.9-28.9 28.9H319.6c-14.4-4.8-28.9-14.4-28.9-28.9s9.7-28.9 28.9-28.9h221.3z"  ></path><path d="M233 319.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.5-14.4-28.9-28.9-28.9z m375.2 28.8c0-14.4-14.4-28.9-28.9-28.9H329.1c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h250.2c14.5 0 28.9-14.4 28.9-28.9zM233 521.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.4-14.4-28.9-28.9-28.9z m327.1 28.8c0-14.4-14.4-28.9-28.9-28.9h-202c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h202c14.5 0 28.9-14.4 28.9-28.9zM233 723.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9-14.4-28.9-28.9-28.9z m96.2 0c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9H435c14.4 0 28.9-14.4 28.9-28.9s-14.4-28.9-28.9-28.9H329.2z m471.4-43.2l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6z"  ></path></symbol><symbol id="icon-0205baobiaodaochufuwu" viewBox="0 0 1024 1024"><path d="M307 258.5c5.5-11.8 17.9-17.6 37.6-17.4H660c12.8 2.9 21.4 8.6 25.8 17.4h4.6-4.6c2.5 4.8 3.6 10.1 3.6 16.4 0 18.3-9.7 29.4-29.4 33.6H344.6c-27.1 0.6-40.9-10.5-40.9-33.6 0-6.5 1-11.8 3.3-16.4h-4.8 4.8z m154 722.9H156c-37.2 0-67.2-30.2-67.2-67.2V109.8c0-37.2 30.2-67.2 67.2-67.2h678.5c37.2 0 67.2 30.2 67.2 67.2v258.3c0 18.9-15.5 34.4-34.4 34.4s-34.4-15.5-34.4-34.4V124.9c0-7.4-6.1-13.4-13.4-13.4h-649c-7.4 0-13.4 6.1-13.4 13.4v774.9c0 7.4 6.1 13.4 13.4 13.4H461c18.9 0.8 33.6 16.8 32.6 35.7-0.7 17.6-14.8 31.9-32.6 32.5zM344.6 466.9H660c18.3 3.6 27.7 14.5 27.7 32.8 0 18.1-9.2 28.8-27.7 31.7H344.6c-27.7 0.8-41.4-9.7-41.4-31.7-0.1-21.9 13.7-32.8 41.4-32.8zM926.8 777a28.67 28.67 0 0 1 0 40.7L782.7 961.8c-11.8 10.7-30 9.9-40.9-1.9-9.9-11.1-9.9-27.9 0-38.8l94.9-94.9H560.3c-16 0-28.8-13-28.8-28.8s13-28.8 28.8-28.8h276.4l-94.9-94.9c-11.3-11.1-11.5-29.4-0.2-40.7l0.2-0.2a28.67 28.67 0 0 1 40.7 0L926.8 777z"  ></path></symbol><symbol id="icon-020202baoyushengchenggongju" viewBox="0 0 1024 1024"><path d="M725.2 95.8c-65.3 0-126.7 29.5-172.4 81.5-30.3-32.2-69.7-50.2-111.9-50.2-73.7 0-137.1 55.1-157.7 134h-34c-95.4 0-173 89-173 198.2s77.6 198.1 173 198.1h476c135.1 0 245-125.9 245-280.7 0-155-109.9-280.9-245-280.9z m0 505.4h-476c-68 0-123.4-63.8-123.4-142s55.3-142 123.4-142h53.6c12.2 0 22.4-9.9 24.5-23.5 9.3-64 57.2-110.5 113.5-110.5 36.5 0 70 19.3 92 53.1 4.7 7 11.9 11.3 19.6 11.4 7.3 0 15.1-3.8 19.8-10.7 37.4-54.1 93-85 152.8-85 107.7 0 195.3 100.8 195.3 224.6 0.3 123.8-87.4 224.6-195.1 224.6zM230.5 722L83.4 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4L266 761.5c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.3 0.2z m228.8-0.3c-9.8-10.9-25.4-10.7-35.1 0.2l-73.5 84.2c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.6-11.2 9.5-28.9-0.3-39.8z m355.2 0.3L741 806.1c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l73.5-84.1c9.7-11 9.6-28.8-0.2-39.7-9.9-11.1-25.6-11-35.2 0.2zM621 722L473.8 890.5c-9.7 11-9.6 28.8 0.2 39.7 4.8 5.4 11.2 8.2 17.5 8.2 6.4 0 12.8-2.8 17.7-8.4l147.1-168.5c9.7-11 9.6-28.8-0.2-39.7-9.7-11.1-25.5-11-35.1 0.2z"  ></path></symbol><symbol id="icon-020302zaixianjiancetongjigongju-sc" viewBox="0 0 1024 1024"><path d="M634.7 207.3l-44.2 244.6-81.1 1.7-13.6 40.9-102.2-259-80.3 228-6.4 27.1-17.8-44.6H143.5v53H253l67.1 168.1 43.7-186.9 32.6-92.5 103 261.5 48.1-143.3 87.2-1.9 16-88.3 29.8 85 199.4 2 0.5-53-162.1-1.7-83.6-240.7z" fill="#E60012" ></path><path d="M289.1 890v53h290.5c-8.6-16.7-15.5-34.5-20.5-53H443V775h109.6c2.8-18.4 7.5-36.2 13.7-53.2H74.7V134h874.7v436.1c19 9.5 36.8 21.2 53 34.7V81H21.6v694h368.3v115H289.1z" fill="#062F8C" ></path><path d="M805.3 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7s6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.4 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H805.7c-0.4 0.2-0.7 0.2-0.9 0.2z m167.6-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-0203zichanyunyingfuwu" viewBox="0 0 1024 1024"><path d="M671.2 218.5C795 278.8 881.8 405.8 881.8 552.8v20c16.8 3.4 33.4 6.7 46.7 13.4v-36.8c0-170.5-103.6-317.6-247.4-384.5 0.1 20.2-3.2 36.9-9.9 53.6z m56.9 635.3C667.8 897.2 591 924 510.7 924S357 897.3 293.3 853.8c-10.1 13.4-23.4 23.4-36.8 33.4 70.2 50.2 157.1 83.5 254 83.5s183.9-33.4 254-87c-13.1-6.5-26.5-20-36.4-29.9zM139.6 572.9v-20c0-147.1 87-274.2 210.6-334.3-6.7-16.8-10.1-33.4-10.1-50.2-147 66.7-247.3 210.5-247.3 384.4v36.8c16.6-10 30-13.3 46.8-16.7z m23.4 46.9c-66.9 0-120.3 53.6-120.3 120.3 0 66.9 53.6 120.3 120.3 120.3s120.3-53.6 120.3-120.3c0.1-66.9-50.1-120.3-120.3-120.3z m0 193.8c-40.1 0-73.6-33.4-73.6-73.6 0-40.1 33.4-73.6 73.6-73.6s73.6 33.4 73.6 73.6c-0.1 43.6-30.1 73.6-73.6 73.6zM510.7 34.7c-66.9 0-120.3 53.6-120.3 120.3S444 275.3 510.7 275.3 631 221.8 631 155 577.6 34.7 510.7 34.7z m0 193.8c-40.1 0-73.6-33.4-73.6-73.6s33.4-73.6 73.6-73.6c40.1 0 73.6 33.4 73.6 73.6 0 43.6-33.5 73.6-73.6 73.6z m347.7 391.3c-66.9 0-120.3 53.6-120.3 120.3 0 66.9 53.6 120.3 120.3 120.3s120.3-53.6 120.3-120.3c0-66.9-53.4-120.3-120.3-120.3z m0 193.8c-40.1 0-73.6-33.4-73.6-73.6 0-40.1 33.4-73.6 73.6-73.6S932 699.8 932 740c-3.4 43.6-33.4 73.6-73.6 73.6z"  ></path></symbol><symbol id="icon-020401wuransuyuanpinggu" viewBox="0 0 1024 1024"><path d="M436.2 325.2h19.7c26.9 0 48.8 22.2 48.8 49.5v305.6c-0.1 4.2 3.2 7.7 7.4 7.7h279.5c2.3 0 4.6-1 6-2.9 1.5-1.9 2-4.3 1.4-6.6l-83.5-358.7C690 209.8 593.2 132 481.9 132h-45.7c-2 0-3.9 0.8-5.3 2.2-1.4 1.4-2.3 3.3-2.3 5.4v177.8c0 2 0.7 4 2.2 5.5 1.4 1.5 3.4 2.3 5.4 2.4-0.1-0.1 0-0.1 0-0.1z m-296.4-7.8h225.4c4.2 0.1 7.7-3.2 7.8-7.4V65.3c0-2-0.8-3.9-2.2-5.2-1.4-1.4-3.4-2.2-5.4-2.2H327c-2.8-0.1-5.3 1.4-6.8 3.7l-31.8 53.8c-0.7 1.1-1 2.3-1 3.6v109.4c0 4.1-3.4 7.5-7.6 7.4h-140c-4.2-0.1-7.7 3.2-7.8 7.4V310c0.2 4.1 3.6 7.4 7.8 7.4z m818.7 389.2H65.6c-4.6 0.5-8.1 4.6-7.7 9.2V753c-0.4 4.6 3 8.7 7.7 9.2h892.8c4.7-0.5 8.1-4.6 7.6-9.2v-37.2c0.5-4.6-2.9-8.7-7.5-9.2z m-92.6 92.7H436.2c-2.2 0.1-4.2 1.2-5.5 2.9-1.4 1.8-2.2 4.1-2 6.4v55.6c-0.2 4.9 3.2 9 7.5 9.3h429.7c4.4-0.3 7.8-4.4 7.6-9.3v-55.6c0.1-2.3-0.6-4.6-2-6.4-1.4-1.7-3.5-2.8-5.6-2.9z m0.1 92.7H436.1c-4.4 0.3-7.8 4.4-7.5 9.3v55.6c-0.2 4.9 3.2 9 7.5 9.3H866c4.3-0.3 7.7-4.4 7.5-9.3v-55.6c0.1-4.9-3.2-9-7.5-9.3z"  ></path></symbol><symbol id="icon-0102xiangmuguanli" viewBox="0 0 1024 1024"><path d="M838 838l-39.7-39.5c10.5-10.6 24.8-16.6 39.7-16.5 30.9 0 55.9-25 55.9-55.9V167c0-30.9-25-55.9-55.9-55.9H278.8c-30.9 0-55.9 25-55.9 55.9v4.8c0 15.4-6.1 29.2-16.2 39.5L167 171.8V167c0-61.8 50.1-111.8 111.8-111.8H838c61.8 0 111.8 50.1 111.8 111.8v559.1c0 61.8-50.1 111.9-111.8 111.9zM111.1 278.8V838c0 30.9 25 55.9 55.9 55.9h559.1c30.9 0 55.9-25 55.9-55.9V278.8c0-30.9-25-55.9-55.9-55.9H167c-30.9 0-55.9 25.1-55.9 55.9z m615-111.8c61.8 0 111.8 50.1 111.8 111.8V838c0 61.8-50.1 111.8-111.8 111.8H167c-61.8 0-111.8-50.1-111.8-111.8V278.8c0-61.7 50-111.8 111.8-111.8h559.1z"  ></path><path d="M195 418.6h335.5c15.4 0 28 12.5 28 28s-12.5 28-28 28H195c-15.4 0-28-12.5-28-28s12.5-28 28-28z m503.1 55.9c-15.4 0-28-12.5-28-28s12.5-28 28-28 28 12.5 28 28-12.5 28-28 28z m-587 56h671v55.9h-671v-55.9z"  ></path></symbol><symbol id="icon-020408xitongxingfenxigongju-sc" viewBox="0 0 1024 1024"><path d="M552.1 712.6h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z m280.9-160.5h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0-44.1-36.1-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2zM231.1 712.6h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.2 160.5c0 22.1-18.1 40.1-40.1 40.1H151c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2zM552.1 70.8h-80.2c-44.1 0-80.2 36.1-80.2 80.2v80.2c-0.1 44.1 36 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2V151c0-44.1-36.1-80.2-80.2-80.2z m40.1 160.3c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z" fill="#E60012" ></path><path d="M191 672.5c12 0 20.1-8 20.1-20.1V512H492v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V512h280.9v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V491.9c0-12-8-20.1-20.1-20.1H532.1V371.6c0-12-8-20.1-20.1-20.1-12 0-20.1 8-20.1 20.1v100.3H191c-12 0-20.1 8-20.1 20.1v160.5c0.1 12 8.1 20 20.1 20z" fill="#062F8C" ></path></symbol><symbol id="icon-020207guanwangmonigongju-sc" viewBox="0 0 1024 1024"><path d="M932.5 423.7h30.8v-45H742.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1z m-387 108.9c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C141 95 107.3 266.8 99.5 311.8S87.1 519.7 87.1 519.7H60.7v45.9l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z" fill="#062F8C" ></path><path d="M60.8 600.2h33.5v305s45.8 31.7 154.2 0V606.3l30.9-2.7V556H60.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1z" fill="#062F8C" ></path><path d="M910.5 853.5h-30.4c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4H621.5c-8.6 0-14.5 5.8-14.5 14.5 0 8.6 5.8 14.5 14.5 14.5h145.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h30.4c8.6 0 14.5-5.8 14.5-14.5-0.1-8.6-5.9-14.5-14.6-14.5z m-86.7 49.3c-18.8 0-34.6-15.9-34.6-34.6 0-18.7 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.8 34.6-34.6 34.6zM910.5 700.5H750.2c-5.8-24.5-28.9-43.4-56.4-43.4s-49.1 18.8-56.4 43.4h-15.9c-8.6 0-14.5 5.8-14.5 14.5s5.8 14.5 14.5 14.5h15.9c5.8 24.5 28.9 43.4 56.4 43.4s49.1-18.8 56.4-43.4h160.4c8.6 0 14.5-5.8 14.5-14.5s-5.9-14.5-14.6-14.5z m-216.7 49.1c-18.8 0-34.6-15.9-34.6-34.6 0-18.8 15.9-34.6 34.6-34.6 18.8 0 34.6 15.9 34.6 34.6 0 18.6-15.7 34.6-34.6 34.6z" fill="#E60012" ></path><path d="M939.3 556.1H592.8c-31.8 0-57.8 26-57.8 57.8v346.7c0 31.8 26 57.8 57.8 57.8h346.7c31.8 0 57.8-26 57.8-57.8V613.7c-0.2-31.6-26.2-57.6-58-57.6z m29.1 404.3c-0.1 15.9-13.1 28.9-29 28.9H592.8c-15.9 0-28.9-13-28.9-28.9V613.7c0-15.9 13-28.9 28.9-28.9h346.7c15.9 0 28.9 13 28.9 28.9v346.7z" fill="#062F8C" ></path></symbol><symbol id="icon-010702xiaoxi" viewBox="0 0 1024 1024"><path d="M241.2 512c0 27.2 22 49.2 49.2 49.2 27.2 0 49.2-22 49.2-49.2 0-27.2-22-49.2-49.2-49.2-27.1 0-49.2 22-49.2 49.2zM462.8 512c0 27.2 22 49.2 49.2 49.2 27.2 0 49.2-22 49.2-49.2 0-27.2-22-49.2-49.2-49.2-27.2 0-49.2 22-49.2 49.2zM684.3 512c0 27.2 22 49.2 49.2 49.3 27.2 0 49.2-22 49.3-49.2v-0.1c0-27.2-22-49.2-49.2-49.3-27.2 0-49.3 22-49.3 49.3z"  ></path><path d="M512 93.5C253.5 93.5 44.3 280.6 44.3 512c0 88.6 32 169.9 83.7 238.8-9.8 39.4-27.1 91.1-56.6 135.4-9.8 14.8 0 39.4 17.2 41.8 17.2 0 39.4 2.5 64 2.5 51.7 0 113.2-9.8 155.1-41.8 61.5 27.1 130.5 41.8 204.3 41.8 258.5 0 467.7-187.1 467.7-418.5S770.5 93.5 512 93.5z m0 787.7c-64 0-125.5-12.3-184.6-39.4l-27.1-9.8-22.2 17.2c-27.1 22.2-71.4 32-125.5 32h-22.2c19.7-34.5 34.5-76.3 44.3-120.6l4.9-22.2-12.3-19.7C118.1 657.2 93.5 585.8 93.5 512c0-204.3 187.1-369.2 418.5-369.2S930.5 307.7 930.5 512 743.4 881.2 512 881.2z"  ></path></symbol><symbol id="icon-020408xitongxingfenxigongju" viewBox="0 0 1024 1024"><path d="M191 672.5c12 0 20.1-8 20.1-20.1V512H492v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V512h280.9v140.4c0 12 8 20.1 20.1 20.1 12 0 20.1-8 20.1-20.1V491.9c0-12-8-20.1-20.1-20.1H532.1V371.6c0-12-8-20.1-20.1-20.1-12 0-20.1 8-20.1 20.1v100.3H191c-12 0-20.1 8-20.1 20.1v160.5c0.1 12 8.1 20 20.1 20z m280.9-361.1h80.2c44.1 0 80.2-36.1 80.2-80.2V151c0-44.1-36.1-80.2-80.2-80.2h-80.2c-44.1 0-80.2 36.1-80.2 80.2v80.2c-0.1 44.1 36 80.2 80.2 80.2z m-40.1-160.5c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2z m120.3 561.7h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z m280.9-160.5h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0-44.1-36.1-80.2-80.2-80.2z m40.1 160.5c0 22.1-18.1 40.1-40.1 40.1h-80.2c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2zM231.1 712.6h-80.2c-44.1 0-80.2 36.1-80.2 80.2V873c0 44.1 36.1 80.2 80.2 80.2h80.2c44.1 0 80.2-36.1 80.2-80.2v-80.2c0.1-44.1-36-80.2-80.2-80.2z m40.2 160.5c0 22.1-18.1 40.1-40.1 40.1H151c-22.1 0-40.1-18.1-40.1-40.1v-80.2c0-22.1 18.1-40.1 40.1-40.1h80.2c22.1 0 40.1 18.1 40.1 40.1v80.2z"  ></path></symbol><symbol id="icon-030301zaixianjianceku" viewBox="0 0 1024 1024"><path d="M631.2 288.9l-42.8 237.4-78.8 1.7-13.3 39.8-99.2-251.4-77.9 221.3L313 564l-17.3-43.3H154.5V572h106.3l65.1 163.1 42.4-181.5 31.7-89.7 99.9 253.7 46.6-139.2 84.5-1.9 15.6-85.7 28.9 82.4 193.6 1.9 0.5-51.4-157.4-1.4-81-233.4z"  ></path><path d="M816 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S693.3 921 658.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M295.6 879v51.4h260.1c-6.7-16.4-11.9-33.6-15.5-51.4h-95.1V767.3h95.4c3.6-17.8 9-35 15.8-51.4H87.5V145.3h849v424.4c18.4 8.7 35.7 19.4 51.6 31.7V93.7H35.9v673.6h357.4V879h-97.7z"  ></path></symbol><symbol id="icon-020502wuranyuantaizhang" viewBox="0 0 1024 1024"><path d="M309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z"  ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7zM893.5 833.2v-0.9c-0.4-18.8-10.8-36-27.3-45l60-107.8c56.2 31 92.1 89.1 94.7 153.2l-127.4 0.5zM837.6 871c-20.7 0-37.5-16.8-37.5-37.5s16.8-37.5 37.5-37.5 37.5 16.8 37.5 37.5-16.7 37.5-37.5 37.5zM783 834l-122.3 2.5c-1.4-62.6 30.7-121.2 84.2-153.7l63.6 105.1c-16.1 9.6-25.9 27.1-25.5 45.9v0.2z m51.8 51.4c10-0.1 19.8-3.1 28.2-8.6L929.5 985c-56.7 31.2-125.5 31.2-182.2 0l63.5-105.8c7.6 4 16 6.2 24.6 6.2h-0.6z"  ></path></symbol><symbol id="icon-020103jianceshujuxiaoyanjixiufugongju-sc" viewBox="0 0 1024 1024"><path d="M281.1 958.5c-26.9 0-54-6.1-78.4-17.5-8-3.8-11.5-13.5-7.6-21.6 0.8-1.7 1.8-3.2 3.1-4.5l103.2-103.1-58.3-58.2-102.6 102.6c-3 3-7.1 4.7-11.3 4.7-1 0-2-0.1-3-0.3h-0.2c-5.2-0.9-9.6-4.4-11.8-9.2-15.2-33.8-19.7-71-13.1-107.6 6.6-36.5 23.9-69.7 50-96 34.7-34 80.6-52.8 129.2-52.8 18.6 0 37 2.8 54.7 8.3l9.8 3 261.9-261.6-3.1-9.8c-20.4-64.9-3.3-135.3 44.6-183.7 34.2-34.2 79.8-53 128.3-53 25.9 0 52 5.6 75.6 16.3 8.2 3.6 11.8 13.1 8.2 21.2-0.8 1.8-1.9 3.4-3.3 4.8l-104.1 104 58.3 58.3 104.6-104.5c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.3 1.7 11.3 4.7 1.3 1.3 2.4 2.9 3.2 4.6 16.1 34.1 21.2 71.7 14.8 108.8s-23.8 70.8-50.3 97.5c-16.8 16.8-36.5 30-58.5 39.2-22 9.1-45.2 13.8-69 13.8h-0.6c-19.8 0-39.4-3.2-58.1-9.4l-10-3.3-260.4 260.2 3.3 10c10.7 32 12.2 66.3 4.5 99.2s-24.4 62.9-48.2 86.8c-33.5 33.6-80 52.9-127.5 52.9h-0.6z m54.7-158c6.3 6.3 6.3 16.4 0.1 22.7L235.1 923.8l37.8 2.2c2.9 0.2 5.8 0.3 8.7 0.3 39.1 0 77.3-15.9 104.8-43.5 44.3-44.7 56-112.9 29.1-169.7-2.9-6.1-1.6-13.4 3.2-18.2l276.6-276.2c3.1-3 7.1-4.7 11.5-4.7 2.4 0 4.7 0.5 6.9 1.5 19.4 9.1 41.3 13.9 63.4 13.9 40.3 0 79.1-15.7 106.5-43.1 29.8-29.9 45.5-71.2 43.3-113.3l-2-38-102.3 102c-3.1 3.1-7.1 4.8-11.4 4.8-4.3 0-8.3-1.7-11.4-4.7l-81.2-81c-6.3-6.3-6.3-16.5 0-22.8l101.6-101.4-39.5-1.1c-1.4 0-2.8-0.1-4.2-0.1-81.3 0-146.8 63.7-149.1 145-0.6 22.7 4 45.6 13.5 66.2 2.7 6 1.4 13.2-3.3 17.9L359.9 637.1c-3 3-7.1 4.7-11.5 4.7-2.3 0-4.5-0.5-6.7-1.4-18.8-8.5-39.9-12.9-61.1-12.9-40.2 0-79.1 15.7-106.6 43.2-29 28.8-45 68.8-43.8 109.7l1.2 39.3 100.3-100.1c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.4 1.7 11.4 4.7l0.2 0.2 81.1 80.8z" fill="#062F8C" ></path><path d="M281.1 958.5c-26.9 0-54-6.1-78.4-17.5-8-3.8-11.5-13.5-7.6-21.6 0.8-1.7 1.8-3.2 3.1-4.5l103.2-103.1-58.3-58.2-102.6 102.6c-3 3-7.1 4.7-11.3 4.7-1 0-2-0.1-3-0.3h-0.2c-5.2-0.9-9.6-4.4-11.8-9.2-15.2-33.8-19.7-71-13.1-107.6 6.6-36.5 23.9-69.7 50-96 34.7-34 80.6-52.8 129.2-52.8 18.6 0 37 2.8 54.7 8.3l9.8 3 261.9-261.6-3.1-9.8c-20.4-64.9-3.3-135.3 44.6-183.7 34.2-34.2 79.8-53 128.3-53 25.9 0 52 5.6 75.6 16.3 8.2 3.6 11.8 13.1 8.2 21.2-0.8 1.8-1.9 3.4-3.3 4.8l-104.1 104 58.3 58.3 104.6-104.5c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.3 1.7 11.3 4.7 1.3 1.3 2.4 2.9 3.2 4.6 16.1 34.1 21.2 71.7 14.8 108.8s-23.8 70.8-50.3 97.5c-16.8 16.8-36.5 30-58.5 39.2-22 9.1-45.2 13.8-69 13.8h-0.6c-19.8 0-39.4-3.2-58.1-9.4l-10-3.3-260.4 260.2 3.3 10c10.7 32 12.2 66.3 4.5 99.2s-24.4 62.9-48.2 86.8c-33.5 33.6-80 52.9-127.5 52.9h-0.6z m54.7-158c6.3 6.3 6.3 16.4 0.1 22.7L235.1 923.8l37.8 2.2c2.9 0.2 5.8 0.3 8.7 0.3 39.1 0 77.3-15.9 104.8-43.5 44.3-44.7 56-112.9 29.1-169.7-2.9-6.1-1.6-13.4 3.2-18.2l276.6-276.2c3.1-3 7.1-4.7 11.5-4.7 2.4 0 4.7 0.5 6.9 1.5 19.4 9.1 41.3 13.9 63.4 13.9 40.3 0 79.1-15.7 106.5-43.1 29.8-29.9 45.5-71.2 43.3-113.3l-2-38-102.3 102c-3.1 3.1-7.1 4.8-11.4 4.8-4.3 0-8.3-1.7-11.4-4.7l-81.2-81c-6.3-6.3-6.3-16.5 0-22.8l101.6-101.4-39.5-1.1c-1.4 0-2.8-0.1-4.2-0.1-81.3 0-146.8 63.7-149.1 145-0.6 22.7 4 45.6 13.5 66.2 2.7 6 1.4 13.2-3.3 17.9L359.9 637.1c-3 3-7.1 4.7-11.5 4.7-2.3 0-4.5-0.5-6.7-1.4-18.8-8.5-39.9-12.9-61.1-12.9-40.2 0-79.1 15.7-106.6 43.2-29 28.8-45 68.8-43.8 109.7l1.2 39.3 100.3-100.1c3.1-3.1 7.1-4.8 11.4-4.8 4.3 0 8.4 1.7 11.4 4.7l0.2 0.2 81.1 80.8z" fill="#062F8C" ></path><path d="M827.3 935c-4.3 0-8.3-1.7-11.4-4.7L594.2 708.9c-3-3.1-4.6-7.1-4.6-11.4 0-4.3 1.7-8.4 4.8-11.4 3-3 7.1-4.7 11.3-4.7 4.3 0 8.3 1.7 11.4 4.7L827.3 896l58.7-58.5-209.7-209.4c-6.2-6.3-6.1-16.6 0.2-22.8 3-3 7.1-4.7 11.3-4.7 4.3 0 8.3 1.7 11.4 4.7l221.1 220.9c6.3 6.2 6.3 16.4 0.1 22.6l-81.6 81.5c-3 3-7.1 4.7-11.5 4.7z m-469-468.4c-4.3 0-8.4-1.7-11.4-4.7l-82.7-82.6-69.9 69.8-0.2 0.1-0.2 0.2c-3 3-7 4.6-11.3 4.6s-8.4-1.7-11.4-4.7L69.3 347.4c-3-3-4.6-7-4.6-11.3s1.7-8.3 4.7-11.4l166.7-165.9c0.7-0.4 1.7-1.1 2.7-1.9l1.2-1 1-1.2c0.9-1 1.5-2 2-2.7 27.9-27.7 60.5-49.3 96.9-64.3C376 73 414.1 65.5 453.2 65.5c35.3 0 69.8 6.2 102.8 18.3v2l12.4 2.9c0.2 0.2 0.5 0.4 0.7 0.6 0.6 0.5 1.2 1 1.9 1.4l0.2 0.2 0.2 0.2c0.7 0.5 1.4 0.9 1.9 1.2 0.8 0.9 1.5 1.9 2.1 3l0.4 0.7 0.4 0.7c0.2 0.2 0.3 0.4 0.4 0.6 0.7 1.5 1.1 3.2 1.2 4.8v0.5c0.1 1.9-0.1 3.7-0.6 5.5-0.3 0.7-0.5 1.3-0.6 1.9l-0.1 0.3c-0.6 0.9-1.2 1.8-1.9 2.6l-1.1 1.2-0.5 0.7c-1 0.9-2.1 1.6-3.2 2.3l-0.2 0.1-0.2 0.1c-0.4 0.2-0.8 0.5-1.2 0.7-1.4 0.5-2.8 0.9-4.3 1-1 0.1-2 0.3-2.8 0.5-43.4 2.9-84.5 19.6-119 48.5l-0.3 0.2-3.9 3.3c-3.4 2.9-6.9 5.9-10.4 9.3-17.1 17.1-32 36.4-44.2 57.3l-0.1 0.1c-1.1 1.9-2.1 3.7-3 5.5-0.5 1-1.1 2-1.6 3l-1.1 1.9-0.4 1.5c-4.6 10.3-4.6 22 0.1 32.4l1.3 2.8 71.7 71.6c6.3 6.3 6.3 16.5 0 22.8-3 3-7.1 4.7-11.4 4.7s-8.4-1.7-11.4-4.7l-71.9-71.9c-0.5-0.8-1.1-1.8-2-2.9l-0.5-0.7-0.6-0.6c-1.1-1.1-2.1-2.4-2.9-3.9-10.6-20.2-10.7-44.6-0.4-65.3l5.4-10.8c13.6-23.7 30.3-45.5 49.7-65l0.7-0.7 0.6-0.7c0.5-0.6 0.9-1.2 1.2-1.7 6.8-6.6 14.5-13.2 23.6-20.1l54.3-41.8-59.4 6.1c-59.9 6.1-116.4 32.7-159.3 74.9-0.7 0.4-1.6 1-2.6 1.8l-1.4 1.1-1.1 1.4c-0.8 1-1.5 2-1.9 2.8L103.7 336.1l79.1 78.9 70.1-70c3-3 7.1-4.7 11.4-4.7s8.4 1.7 11.4 4.7l94.1 94.1c6.3 6.3 6.3 16.5 0 22.8-3.2 3.1-7.2 4.7-11.5 4.7z" fill="#E60012" ></path></symbol><symbol id="icon-0301xiangmuku" viewBox="0 0 1024 1024"><path d="M320.4 232.9h372.2c11 0 20-9.1 20-20 0-11-9.1-20-20-20H320.4c-11 0-20 9.1-20 20s8.9 20 20 20z m-24.9 103.4h422.9c11 0 20-9.1 20-20s-9.1-20-20-20H295.5c-11 0-20 9.1-20 20-0.9 10.9 8.2 20 20 20zM264 439.7h485.2c11 0 20-9.1 20-20 0-11-9.1-20-20-20H264c-11 0-20 9.1-20 20 0.1 11.1 9.2 20 20 20z m390 326.6H360c-14.8 0-27.1 12.3-27.1 27.1s12.3 27.1 27.1 27.1h294.2c14.8 0 27.1-12.3 27.1-27.1s-12.6-27.1-27.3-27.1z"  ></path><path d="M125.2 981.8c-46.3 0-83.4-37.7-83.4-83.4v-340c0-12.3 2.9-23.9 8.1-35.2l0.5-0.5 129.2-412.8c12.3-38.1 53.4-67.7 95.8-67.7h473.9c42.4 0 83.9 29.1 95.8 67.7l129.2 412.8c5.2 11.9 8.1 23.4 8.1 35.7v339.9c0 46.3-37.7 83.4-83.4 83.4l-773.8 0.1z m0-449.5c-14.3 0-26.3 11.9-26.3 26.3v328.9c0 14.3 11.9 26.3 26.3 26.3h772.7c14.3 0 26.3-11.9 26.3-26.3V558.4c0-14.3-11.9-26.3-26.3-26.3H658.6l-1.5 3.4c-28.1 54.9-83.9 88.6-145 88.6s-116.7-33.8-145.9-88.6l-1.5-3.4H125.2v0.2z m258.4-57.8c12.3 0 23.4 8.1 27.1 19.5 14.8 43.3 55.4 72.4 100.6 72.4S597.2 537.3 612 494c3.7-11.9 14.8-19.5 27.1-19.5h258.8L789.3 126.9c-4.2-13.3-21.4-27.1-41.1-27.1H274.8c-17.2 0-36.2 12.8-41.1 27.1L125.2 474.5h258.4z"  ></path></symbol><symbol id="icon-020302zaixianjiancetongjigongju" viewBox="0 0 1024 1024"><path d="M805.3 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7 3.2 0 6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.4 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H805.7c-0.4 0.2-0.7 0.2-0.9 0.2z m167.6-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1zM634.7 207.3l-44.2 244.6-81.1 1.7-13.6 40.9-102.2-259-80.3 228-6.4 27.1-17.8-44.6H143.5v53H253l67.1 168.1 43.7-186.9 32.6-92.5 103 261.5 48.1-143.3 87.2-1.9 16-88.3 29.8 85 199.4 2 0.5-53-162.1-1.7-83.6-240.7z"  ></path><path d="M289.1 890v53h290.5c-8.6-16.7-15.5-34.5-20.5-53H443V775h109.6c2.8-18.4 7.5-36.2 13.7-53.2H74.7V134h874.7v436.1c19 9.5 36.8 21.2 53 34.7V81H21.6v694h368.3v115H289.1z"  ></path></symbol><symbol id="icon-020205changzhanshejipipeigongju" viewBox="0 0 1024 1024"><path d="M939.1 455.2L598.6 119.7c-48.2-47.1-125.3-47.1-173.4 0L84.8 455.2c-15.3 15-23.8 35.5-23.9 56.9v303.4c0 68.5 55.7 124.2 124.2 124.2h471.2c19.6 0 35.5-15.9 35.5-35.5s-15.9-35.5-35.5-35.5H185c-29.3 0-53.2-23.8-53.2-53.2V512.1c0-2.3 0.9-4.7 2.7-6.3L475 170.3c20.5-20.1 53.4-20.1 73.9 0l340.6 335.5c1.7 1.7 2.6 3.9 2.6 6.2v303.4c0 29.3-23.8 53.2-53.2 53.2-19.6 0-35.5 15.9-35.5 35.5s15.9 35.5 35.5 35.5c68.5 0 124.2-55.7 124.2-124.2V512.1c-0.1-21.4-8.8-41.8-24-56.9z"  ></path><path d="M746.6 512H408.8c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3s14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z m469.1 177.4H408.8c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h337.7c18.3 0 33.3-14.9 33.3-33.3 0.1-18.4-14.8-33.3-33.2-33.3z m-469.1 0c-18.3 0-33.3 14.9-33.3 33.3 0 18.3 14.9 33.3 33.3 33.3h3.4c18.3 0 31.6-14.9 31.6-33.3s-16.7-33.3-35-33.3z"  ></path></symbol><symbol id="icon-020409lianhetiaodugongju-sc" viewBox="0 0 1024 1024"><path d="M890.4 190.7H386c-13.5-51.1-59.7-86.8-112.5-86.9-52.4 0.6-98 36.2-111.4 86.9h-28.6c-16.1-3.2-31.8 7.2-35 23.3s7.2 31.8 23.3 35c3.9 0.8 7.9 0.8 11.7 0h28.6c12.9 51.2 58.6 87.3 111.4 88.1 52.9-0.1 99.1-35.8 112.5-86.9h504.4c16.1-3.2 26.5-18.9 23.3-35-2.4-11.8-11.5-20.9-23.3-23.3v-1.2z m-616.9 88c-32.2 0-58.3-26.1-58.3-58.3s26.1-58.3 58.3-58.3 58.3 26.1 58.3 58.3-26.1 58.3-58.3 58.3z m616.9 495.1H386c-13.5-51.1-59.7-86.8-112.5-86.9-52.4 0.6-98 36.2-111.4 86.9h-28.6c-16.1-3.2-31.8 7.2-35 23.3s7.2 31.8 23.3 35c3.9 0.8 7.9 0.8 11.7 0h28.6c12.9 51.2 58.6 87.3 111.4 88.1 52.9-0.1 99.1-35.8 112.5-86.9h504.4c16.1 3.2 31.8-7.2 35-23.3s-7.2-31.8-23.3-35c-3.9-0.8-7.9-0.8-11.7 0v-1.2z m-616.9 88.1c-32.2 0-58.3-26.1-58.3-58.3s26.1-58.3 58.3-58.3 58.3 26.1 58.3 58.3c0 32.2-26.1 58.3-58.3 58.3z" fill="#062F8C" ></path><path d="M924.9 505.6c-3.2-16.1-18.9-26.5-35-23.3h-28c-13.4-50.7-59-86.3-111.4-86.9-52.8 0.1-99 35.8-112.5 86.9H133.6v1.2c-3.8-0.8-7.8-0.8-11.7 0-16.1 3.2-26.5 18.9-23.3 35 3.2 16.1 18.9 26.5 35 23.3H638c13.4 51.1 59.6 86.8 112.5 86.9 52.8-0.8 98.5-36.9 111.4-88.1h28c3.8 0.8 7.8 0.8 11.7 0 16.1-3.2 26.5-18.9 23.3-35z m-174.4 64.7c-32.2 0-58.3-26.1-58.3-58.3 0-32.2 26.1-58.3 58.3-58.3s58.3 26.1 58.3 58.3-26.1 58.3-58.3 58.3z" fill="#E60012" ></path></symbol><symbol id="icon-030508jishuxingwendangku" viewBox="0 0 1024 1024"><path d="M807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M575.4 354.3c-9.8-5.5-22.2-2.2-27.9 7.5l-0.3 0.5L397.9 589c-2.6 4.6-3.3 10-1.9 15 2.9 10.9 14 17.4 25 14.6 5.3-1.4 9.7-4.8 12.5-9.5l0.3-0.5L583 382c5.4-9.8 2-22-7.6-27.7zM213.4 478.8l0.2-0.6c0.9-2.6 8.1-9.9 8.1-9.9L335 354.9c3.8-3.8 8.9-6 14.3-6 5.3 0 10.5 2.1 14.2 6 7.9 8 7.9 20.9 0 28.9l-101.9 102 102.3 102.4c7.9 7.9 7.9 20.7 0 28.6-7.9 7.9-20.7 7.9-28.6 0L223.9 505.4c0-0.1-16.1-13.6-10.5-26.6zM767.3 478.8l-0.2-0.6c-0.9-2.6-8.1-9.9-8.1-9.9L645.7 354.9c-7.7-7.9-20.3-8-28.2-0.3l-0.3 0.3c-7.8 8-7.8 20.9 0 28.9l101.9 102-102.2 102.4c-7.9 7.9-7.9 20.7 0 28.6 7.9 7.9 20.7 7.9 28.6 0l111.3-111.5c-0.1-0.1 16-13.6 10.5-26.5z"  ></path></symbol><symbol id="icon-0202guihuashejifuwu" viewBox="0 0 1024 1024"><path d="M416.9 415.7c-59.5-59.7-59.5-156.3 0.1-215.9s156.3-59.5 215.9 0.1 59.5 156.2 0 215.9c-59.7 59.4-156.2 59.4-216-0.1z m189.7-189.6c-45.1-45.2-118.3-45.5-163.5-0.4s-45.5 118.3-0.4 163.5 118.3 45.5 163.5 0.4l0.4-0.4c44.9-44.9 44.9-117.9 0-163.1z"  ></path><path d="M462.9 307.7c0 34.3 27.8 62.1 62 62.1s62.1-27.8 62.1-62c0-34.3-27.8-62.1-62-62.1-34.4 0-62.1 27.7-62.1 62z"  ></path><path d="M668.2 226l70.1-70c16.9-16.9 16.9-44.4 0-61.5-16.9-16.9-44.4-16.9-61.5 0l-70 70c25.7 14.6 46.9 35.8 61.4 61.5zM471.8 396l28.3-28.3V345c0-20.6 11.2-37.3 24.9-37.3-9.6-9.8-29.3-6.1-43.9 8.7l-44.4 44.3c4.3 7.2 9.5 13.8 15.5 19.7 5.8 6.1 12.4 11.3 19.6 15.6z m-79.9 9.7L101.3 696.2l-24.4 59.5 59.5-24.4L427 440.4c-6.8-5-13-10.3-18.9-16.2-5.8-5.8-11.3-11.9-16.2-18.5z"  ></path><path d="M524.9 307.8c9.6 9.6 5.7 29.3-8.7 43.9l-16 16v40c16.3 4 33.4 4 49.6 0V345c-0.2-20.5-11.2-37.2-24.9-37.2z m-24.8 163.1v410.9l24.9 60.3 24.8-60.3V470.9c-16.6 2.5-33.3 2.5-49.7 0z"  ></path><path d="M524.9 307.8c-13.7 0-24.9 16.7-24.9 37.3v22.7l16-16c14.7-14.8 18.5-34.4 8.9-44z m0 460.6c-201.5 0.6-379.7-130.3-439.5-322.6l49.4-15.5c67.7 215.5 297.4 335.1 512.9 267.4 127.5-40.2 227.3-140 267.4-267.4l49.4 15.5C904.7 638.2 726.3 769 524.9 768.4z"  ></path></symbol><symbol id="icon-020401wuransuyuanpinggu-sc" viewBox="0 0 1024 1024"><path d="M139.8 317.4h225.4c4.2 0.1 7.7-3.2 7.8-7.4V65.3c0-2-0.8-3.9-2.2-5.2-1.4-1.4-3.4-2.2-5.4-2.2H327c-2.8-0.1-5.3 1.4-6.8 3.7l-31.8 53.8c-0.7 1.1-1 2.3-1 3.6v109.4c0 4.1-3.4 7.5-7.6 7.4h-140c-4.2-0.1-7.7 3.2-7.8 7.4V310c0.2 4.1 3.6 7.4 7.8 7.4z m818.7 389.2H65.6c-4.6 0.5-8.1 4.6-7.7 9.2V753c-0.4 4.6 3 8.7 7.7 9.2h892.8c4.7-0.5 8.1-4.6 7.6-9.2v-37.2c0.5-4.6-2.9-8.7-7.5-9.2z m-92.6 92.7H436.2c-2.2 0.1-4.2 1.2-5.5 2.9-1.4 1.8-2.2 4.1-2 6.4v55.6c-0.2 4.9 3.2 9 7.5 9.3h429.7c4.4-0.3 7.8-4.4 7.6-9.3v-55.6c0.1-2.3-0.6-4.6-2-6.4-1.4-1.7-3.5-2.8-5.6-2.9z m0.1 92.7H436.1c-4.4 0.3-7.8 4.4-7.5 9.3v55.6c-0.2 4.9 3.2 9 7.5 9.3H866c4.3-0.3 7.7-4.4 7.5-9.3v-55.6c0.1-4.9-3.2-9-7.5-9.3z" fill="#062F8C" ></path><path d="M436.2 325.2h19.7c26.9 0 48.8 22.2 48.8 49.5v305.6c-0.1 4.2 3.2 7.7 7.4 7.7h279.5c2.3 0 4.6-1 6-2.9 1.5-1.9 2-4.3 1.4-6.6l-83.5-358.7C690 209.8 593.2 132 481.9 132h-45.7c-2 0-3.9 0.8-5.3 2.2s-2.3 3.3-2.3 5.4v177.8c0 2 0.7 4 2.2 5.5 1.4 1.5 3.4 2.3 5.4 2.3-0.1 0 0 0 0 0z" fill="#E60012" ></path></symbol><symbol id="icon-020403guanwangyunyingpinggugongju" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z"  ></path><path d="M800.6 680.4l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM932.5 469.1h30.8v-45H742.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1zM545.5 578c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C141 140.4 107.3 312.2 99.5 357.2S87.1 565.1 87.1 565.1H60.7V611l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z"  ></path><path d="M60.8 645.6h33.5v305s45.8 31.7 154.2 0V651.7l30.9-2.7v-47.6H60.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1z"  ></path></symbol><symbol id="icon-0204pinggufenxifuwu" viewBox="0 0 1024 1024"><path d="M422.7 956H159.1c-61.6 0-111.9-50.2-111.9-111.9V153.3c0-61.6 50.2-111.9 111.9-111.9h659.4c61.6 0 111.9 50.2 111.9 111.9v323.4c0 16.7-13.6 30.1-30.1 30.1-16.7 0-30.1-13.6-30.1-30.1V153.3c0-28.4-23.1-51.6-51.7-51.6H159.1c-28.4 0-51.7 23.1-51.7 51.6v690.8c0 28.4 23.1 51.7 51.7 51.7h263.6c16.7 0 30.1 13.6 30.1 30.1 0.2 16.7-13.4 30.1-30.1 30.1z"  ></path><path d="M569 706H212.2c-16.7 0-30.1-13.6-30.1-30.1 0-16.7 13.6-30.1 30.1-30.1h356.6c16.7 0 30.1 13.6 30.1 30.1 0.1 16.5-13.4 30.1-29.9 30.1z m-42.2-103.5c-7.6 0-15.4-3-21.3-8.9L367 455.1 233.5 588.6c-11.7 11.7-30.9 11.7-42.6 0-11.7-11.7-11.7-30.9 0-42.6l154.7-154.7c11.7-11.7 30.9-11.7 42.6 0l138.5 138.5L747 309.5c11.7-11.7 30.9-11.7 42.6 0 11.7 11.7 11.7 30.9 0 42.6L548.1 593.7c-5.9 5.8-13.5 8.8-21.3 8.8z"  ></path><path d="M764 481.7c-16.7 0-30.1-13.6-30.1-30.1v-90.7H602.2c-16.7 0-30.1-13.6-30.1-30.1 0-16.7 13.6-30.1 30.1-30.1H764c16.7 0 30.1 13.6 30.1 30.1v120.8c-0.1 16.6-13.4 30.1-30.1 30.1z m-86.5 494.1H564.3c-16.7 0-30.1-13.6-30.1-30.1V837c0-8.1 3.1-15.7 8.9-21.3L810.9 548c11.7-11.7 30.9-11.7 42.6 0l107.7 107.7c5.6 5.6 8.9 13.4 8.9 21.3 0 8.1-3.1 15.7-8.9 21.3L895.7 764c-11.7 11.7-30.9 11.7-42.6 0l-53-53c-11.7-11.7-11.7-30.9 0-42.6 11.7-11.7 30.9-11.7 42.6 0l31.7 31.7 23-23-65.3-65.1-237.7 237.4v66.1H665l138.3-138.3c11.7-11.7 30.9-11.7 42.6 0 11.7 11.7 11.7 30.9 0 42.6l-147 147.1c-5.7 5.6-13.4 8.9-21.4 8.9z"  ></path></symbol><symbol id="icon-0305wendangku" viewBox="0 0 1024 1024"><path d="M297.4 481.1h426.1c16.8 0 30.4-13.7 30.4-30.4s-13.7-30.4-30.4-30.4H297.4c-16.8 0-30.4 13.7-30.4 30.4s13.4 30.4 30.4 30.4z m0 121.8h426.1c16.8 0 30.4-13.7 30.4-30.4 0-16.8-13.7-30.4-30.4-30.4H297.4c-16.8 0-30.4 13.7-30.4 30.4 0 16.8 13.4 30.3 30.4 30.4z m0 121.7h426.1c16.8 0 30.4-13.7 30.4-30.4 0-16.8-13.7-30.4-30.4-30.4H297.4c-16.8 0-30.4 13.7-30.4 30.4s13.4 30.4 30.4 30.4z m0-365.3H480c16.8 0 30.4-13.7 30.4-30.4 0-16.8-13.7-30.4-30.4-30.4H297.4c-16.8 0-30.4 13.7-30.4 30.4 0 16.8 13.4 30.4 30.4 30.4z"  ></path><path d="M662.6 24.5H145.1c-33.7 0-60.8 27.3-60.8 60.8v852.3c0 33.7 27.3 60.8 60.8 60.8h730.5c33.7 0 60.8-27.3 60.8-60.8V298.5c0-8-3.3-15.8-8.9-21.5L684.1 33.4c-5.6-5.7-13.5-8.9-21.5-8.9M693 128.4l139.7 139.7H693V128.4z m152.3 809.2H175.5c-16.8 0-30.4-13.7-30.4-30.4V115.9c0-16.8 13.7-30.4 30.4-30.4h456.7v213c0 16.8 13.7 30.4 30.4 30.4h213v578.3c0.1 16.8-13.6 30.4-30.3 30.4z"  ></path></symbol><symbol id="icon-020303yunyinggongdantongjigongju" viewBox="0 0 1024 1024"><path d="M797.2 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7 3.2 0 6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.5 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H797.5c-0.3 0.2-0.6 0.2-0.8 0.2z m167.5-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1zM291 294.8c56.8 0 107.3-37.9 120-94.7h543.1V137H410.9c-12.6-56.9-63.1-94.7-120-94.7-56.8 0-107.3 37.9-120 94.7h-101v63.1H171c12.6 56.7 63.1 94.7 120 94.7z m-50.6-158c6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0.1 12.7-6.3 25.3-12.6 31.6-6.3 18.9-25.3 31.6-50.5 31.6-25.3 0-44.2-12.6-50.5-31.6-6.3-6.3-12.6-18.9-12.6-31.6 0-12.5 6.3-25.2 12.6-31.6zM629.4 555c17.5-12.5 36.4-23.1 56.6-31.5-1.4-2.4-2.6-5-3.5-7.8-6.3-6.3-12.6-18.9-12.6-31.6 0-12.6 6.3-25.3 12.6-31.6 6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0 6.3-1.6 12.7-4 18.2h1c30 0 58.9 4.7 86 13.4H954v-63.1H852.9c-12.6-56.9-63.1-94.7-119.9-94.7s-107.3 37.9-120 94.7H69.9v63.1H613c3.2 14.5 8.8 27.7 16.4 39.3zM512 783.6c0-5.1 0.1-10.1 0.4-15.2H410.9c-12.6-56.8-63.1-94.7-120-94.7-56.8 0-107.3 37.9-120 94.7h-101v63.1H171c12.6 56.8 63.1 94.7 120 94.7 56.8 0 107.3-37.9 120-94.7h105.1c-2.7-15.5-4.1-31.6-4.1-47.9z m-170.6 48c-6.3 18.9-25.3 31.6-50.5 31.6-25.3 0-44.2-12.6-50.5-31.6-6.3-6.3-12.6-18.9-12.6-31.6 0-12.6 6.3-25.3 12.6-31.6 6.3-18.9 25.3-31.6 50.5-31.6s44.2 12.6 50.5 31.6c6.3 6.3 12.6 18.9 12.6 31.6 0.1 12.6-6.2 25.2-12.6 31.6z"  ></path></symbol><symbol id="icon-03houtaishuju" viewBox="0 0 1024 1024"><path d="M511.3 79.2c53.3 0 104.7 4.5 153 13.4 45.7 8.3 86.5 20.3 121.1 35.2 31.4 13.5 56.4 29.3 72.2 45.6 7.8 8.1 17.3 20.2 17.3 32.2 0 12-9.5 24.1-17.3 32.2-15.8 16.2-40.8 31.9-72.2 45.6-34.6 15-75.4 26.8-121.1 35.2-48.4 8.9-99.9 13.4-153 13.4s-104.7-4.5-153-13.4c-45.7-8.3-86.5-20.3-121.1-35.2-31.4-13.5-56.4-29.3-72.2-45.6-7.8-8.1-17.3-20.2-17.3-32.2 0-12 9.5-24.1 17.3-32.2 15.8-16.2 40.8-31.9 72.2-45.6 34.6-15 75.4-26.8 121.1-35.2 48.5-8.9 99.9-13.4 153-13.4m0-54.7c-231.3 0-418.4 80.9-418.4 181s187.5 180.8 418.4 180.8 418.4-80.9 418.4-181S742.6 24.5 511.3 24.5z m1.4 571.4c-107.9 0-209.6-16.7-286.6-47.2-39.1-15.5-70.1-34-92.4-54.8-25.7-24.1-39.4-51.9-39.4-80.2H149c0 28.6 36.4 60 97.2 84.1 70.7 28 165.4 43.5 266.5 43.5s195.7-15.5 266.5-43.5c60.9-24.1 97.2-55.5 97.2-84.1h54.8c0 28.3-13.5 56.1-39.4 80.2-22.3 20.8-53.3 39.1-92.4 54.8-77.1 30.5-178.8 47.2-286.7 47.2z m-0.8 206.7c-107.7 0-209.4-15.2-286.2-42.7-39.1-14-70.1-30.7-92.4-49.7-33.3-28.2-40.4-56.7-40.4-75.5h54.8c0 18.8 25.4 48 96.6 73.7 71 25.6 166.1 39.6 267.8 39.6s196.6-14 267.8-39.6c71.3-25.6 96.6-54.8 96.6-73.7h54.8c0 18.8-7.1 47.2-40.5 75.5-22.3 18.8-53.3 35.5-92.4 49.7-77 27.5-178.7 42.7-286.5 42.7z m0 194.7c-107.7 0-209.3-15-286.2-42.4-39.1-13.8-70.1-30.4-92.4-49.2-33.6-28.1-40.5-56.4-40.5-75.2h54.8c0 18.5 25.4 47.4 96.6 72.7 71.2 25.3 166.3 39.1 267.8 39.1s196.6-13.8 267.8-39.1c71.2-25.3 96.6-54.2 96.6-72.7h54.8c0 18.7-7.1 46.9-40.5 75.2-22.3 18.7-53.3 35.2-92.4 49.2-77.1 27.4-178.6 42.4-286.4 42.4z"  ></path><path d="M126.6 839.8h-7.2c-14.6 0-26.6-11.9-26.6-26.6V196.6c0-14.6 11.9-26.6 26.6-26.6h7.2c11.4 0 20.9 9.5 20.9 20.9V819c0 11.5-9.5 20.8-20.9 20.8z m783.6 2.5H903c-14.6 0-26.6-11.9-26.6-26.6V200.2c0-14.6 11.9-26.6 26.6-26.6h7.2c11.4 0 20.9 9.5 20.9 20.9v627c0 11.4-9.5 20.8-20.9 20.8zM782.1 369.2c-19.1 0-34.5 15.5-34.5 34.5 0 19.1 15.5 34.5 34.5 34.5 19.1 0 34.5-15.5 34.5-34.5 0-19.2-15.5-34.5-34.5-34.5z m0 207.9c-19.1 0-34.5 15.5-34.5 34.5 0 19.1 15.5 34.5 34.5 34.5 19.1 0 34.5-15.5 34.5-34.5s-15.5-34.5-34.5-34.5z m0 205.8c-19.1 0-34.5 15.5-34.5 34.5 0 19.1 15.5 34.5 34.5 34.5 19.1 0 34.5-15.5 34.5-34.5 0-19.1-15.5-34.5-34.5-34.5z"  ></path></symbol><symbol id="icon-020404heichoushuitidengjipingdinggongju" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z"  ></path><path d="M800.6 680.4l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM574.1 141.2c6.6-6.2 10.3-14.9 10.1-23.9 0-18.4-15.9-33.5-35.5-33.5-9.4 0-18.8 3.4-25.4 9.6-6.6 6.2-10.3 14.9-10.1 23.9 0 18.5 15.9 33.5 35.5 33.5 9.4-0.1 18.4-3.5 25.4-9.6z"  ></path><path d="M477.2 199.2c0-0.4 0.3-0.7 0.7-0.7 38.4 36.9 73.9 71.1 73.9 71.1C670 153.4 633.1 37.3 633.1 37.3c-118.9-44.4-258.8 69-258.8 69 7.3 2.8 41.3 33.5 78.3 67.6L433 192.4c-43.5-39.6-85.6-66.3-95.7-56-10.9 10.9 38.4 49.9 72.5 77.9l-22.5 21.9c-33.3-29.4-66.7-47.8-76.8-37.6-10.1 10.9 26.1 38.3 53.6 59.4l-22.5 21.2c-23.2-19.2-46.4-30.8-54.4-21.9-8.7 8.9 15.2 26.7 34.8 41l-21 20.5c-100.7 8.2-93.5 17.1-86.2 25.3 8 8.2 81.9 0.7 84.8 2 2.9 1.4 1.4 89.5 16.7 84.7 15.2-4.1 21-82 18.1-87.5-0.7-1.4 5.1-8.2 15.2-18.5 11.6 16.4 23.9 37.6 35.5 28 0 0 13-9.6-15.2-44.4l-2.2-2c7.2-7.5 15.2-15.7 23.9-23.9 18.8 21.9 39.9 61.5 55.8 49.2 0 0 16-10.9-24.6-58.7-3.2-3.8-6.6-7.5-10.2-11 8-8.2 16.7-16.4 23.9-23.9 25.4 25.3 58.7 82 76.1 69 0 0 15.9-10.3-37-70.4-5.8-6.2-11.6-13-17.4-19.1 11.8-10.9 19-18.4 19-18.4z m-52.4-88.7S522.6 31.9 605.3 62c0 0 26.1 81.3-56.5 161.9 0 0-112.4-109.3-124-113.4zM618.8 252.7c-12.5 13.9-24.9 27.9-37.2 41.9-29.9 33.6-59.9 67.1-89.7 100.8-36.1 40.6-72.1 81.1-108.3 121.6L290 622.3c-15.2 17.1-30.6 34-45.6 51.1-0.3 0.3-0.5 0.5-0.7 0.8-9.1 9.6-9.1 24.7 0 34.3 9.4 9.4 24.6 9.5 34 0.2 12.5-13.9 24.9-27.9 37.2-41.9 29.9-33.6 59.9-67.1 89.7-100.8 36.2-40.6 72.1-81.1 108.2-121.8L606.4 339c15.2-17 30.6-34 45.7-51.1 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.7 0-34.3-9.4-9.4-24.6-9.4-34-0.1zM814.6 189.3c-0.3 0.7-0.6 1.3-0.9 2.1l0.9-2.1z"  ></path><path d="M802.2 422.9c1.2 1.3 2.4 3.2 3.7 4.5-0.9-0.6-1-0.2 1.2 1.4-0.1-0.2-0.1 0-0.1-0.2v-0.1l0.2 0.2c0.8 1.1 1.5 2.2 2.2 3.4 1.7 2.5 3.3 5.2 4.7 7.9 1.2 2.2 2.4 4.5 3.5 6.8 0.3 0.5 0.5 1.1 0.8 1.6 0.2 0.5 0.4 1 0.7 1.3 0 0.2 0.1 0.4 0.2 0.6 2.1 5.9 3.8 12 5.1 18.2 0.3 1.2 0.5 2.3 0.7 3.4 0.1 0.5 1.1 6.1 0.3 1.9l-0.2 2.2 0.3 3.5c0.5 6.4 0.4 12.9-0.1 19.4l-0.3 3.5c-0.5 2.6-0.9 5.3-1.4 7.9-0.1 0.6-0.3 1.2-0.4 1.7 20.2 6.2 39.5 14.7 57.4 25.2 0.3-0.8 0.5-1.5 0.8-2.3 16.1-49.9 5.4-104.5-28.4-144.5-3.3-3.9-6.7-7.7-10.2-11.6-1.5-1.9-3.3-3.8-4.8-5.6-1-1-1.7-2.1-2.6-3.2-0.3-0.5-0.6-1-1-1.3-1.5-1.9-2.9-4.2-4.1-6.1-6.1-9.5-11.5-19.4-16.1-29.7-0.4-1.1-0.8-2-1.2-3.1-1-2.3-1.7-4.8-2.6-7.3-1.8-5.9-3.5-11.5-5-17.5-1.2-5.5-2.4-10.9-3.3-16.5-0.2-1.3-0.4-2.6-0.5-3.9-0.4-3-0.6-6-0.8-8.9-0.8-11.8-0.6-23.6 0.7-35.4 0.1-1.5 0.3-3 0.5-4.4v-0.5c1.2-8.2 3-16.4 5.2-24.4 1.4-5.1 3-10.2 4.9-15.3 0.6-2.5 1.4-4.9 2.7-7.1-0.1 0.3-0.2 0.5-0.3 0.7 0.2-0.3 0.3-0.7 0.5-1 0.7-1.4 1.3-3.1 2.1-4.5 4.7-10 10.3-19.5 16.7-28.4 0.6-0.7 1.1-1.5 1.6-2.3 1.5-1.9 3-3.8 4.6-5.6 2.5-2.9 5.2-5.7 7.9-8.4 5-5.2 10.1-10.2 15.2-15.3 16.9-17.3 33.8-34.4 50.6-51.6l3.5-3.5c8.8-9-5-25.4-14.6-34.3-9.7-9-24.7-8.9-34.3 0.3-14 14.3-28 28.4-42 42.7-18.1 17-34.7 35.5-49.8 55.3-57 86-50.6 199.1 15.4 278.3 3.4 4 6.8 8 10.2 11.9zM696.7 455.5l-36.4 40.7c-7.3 8.1-14.5 16.3-21.8 24.4 25.8-10.7 53.6-17.5 82.7-19.8l9-10.2c0.2-0.3 0.4-0.5 0.5-0.8 9.2-9.6 9.2-24.7 0-34.3-9.4-9.3-24.6-9.3-34 0zM202.6 836.4c-4-4.6-8.2-9.4-12.3-14.4-0.2-0.3-0.4-0.5-0.6-0.8l-1.3-1.7c-1.5-1.9-3-4.1-4.3-6.1-3.5-5.3-6.5-10.6-9.4-16.2-2.6-4.2-4.8-8.8-6.4-13.5v-0.2c-0.5-1.5-1.1-2.7-1.5-4.1-1.1-3-2.1-6-3.1-8.9-1.7-5.4-3.2-10.6-4.4-16-1.7-5.2-2.8-10.7-3.2-16.2 0.1 0.6 0.2 1.2 0.3 1.9-0.1-1.2-0.3-2.3-0.4-3.5l-0.3-3.5c-0.3-3-0.5-5.9-0.6-8.9-0.3-5.8-0.4-11.9-0.2-17.7 0.2-5.9 0.7-11.6 1.2-17.5 0.1-1.2 0.3-2.3 0.4-3.5-0.1 0.9-0.1 1.1-0.1 1.6 0.1-0.4 0.1-0.9 0.1-1.2 0.5-3.2 1-6.2 1.6-9.3 2.3-11.1 5.5-22.1 9.5-32.6l1.2-3.2c0-0.2 0.1-0.4 0.2-0.5 1.1-2.1 2.1-4.5 3.2-6.8 2.5-5.1 5.4-10.3 8.3-15.3 2.5-4.2 5.3-8.2 8.2-12.4 0.2-0.3 0.4-0.5 0.5-0.8 0.5-0.7 1-1.3 1.5-2 2-2.6 4.1-4.9 6.3-7.4 8.3-8.6 16-17.9 22.9-27.8 6.6-10.5 11.9-21.7 15.6-33.4 16.2-50 5.4-104.7-28.5-144.8l-10.6-12.3c-1.5-1.8-3.3-3.6-4.8-5.6-0.8-1.2-1.6-2.2-2.6-3.4-1.7-2.3-3.4-4.8-5-7.1-5.9-9.2-11-18.9-15.5-28.9l-0.3-0.6-1.2-2.9c-1.1-2.8-1.9-5.4-2.8-8.2-1.8-5.5-3.4-10.9-4.7-16.5s-2.5-11.2-3.4-17.1c-0.2-1.2-0.2-2.3-0.5-3.5 0.2 0.5 0.2 0.5 0.2 0.8v-0.3c-0.4-3.1-0.7-6.4-0.9-9.6-0.7-11.7-0.5-23.4 0.7-35.1 0.1-1.2 0.2-2.3 0.4-3.5l0.1-1.1 1-7.2c1.2-5.9 2.5-11.7 4.1-17.5 1.3-4.8 3-9.8 4.6-14.6 1.2-2.6 2.2-5.2 3.1-7.9 0 0.2 0 0.4-0.1 0.5 0.9-1.8 1.5-3.6 2.4-5.3 4.6-9.7 10-19 16.2-27.8l2.4-3.4c0.3-0.2 0.5-0.6 0.6-0.9-0.1 0.2-0.3 0.4-0.5 0.6l0.5-0.6c1.2-1.5 2.6-3.1 3.6-4.4 2.5-2.8 5.2-5.7 7.8-8.4 5-5.3 10.2-10.2 15.2-15.4L267.7 71l3.5-3.6c9.2-9.6 9.2-24.7 0-34.3-14.9-9.2-33.7-9.2-48.5 0l-42 42.8c-18.4 17.2-35.2 35.9-50.4 55.9-56.5 86-50 198.9 16.5 277.6 3.4 3.9 6.7 7.9 10.2 11.8 1.5 1.8 3.2 3.6 4.7 5.6 0.5 0.7 1.1 1.4 1.6 2.3 1.8 2.8 3.5 5.7 5.2 8.6 1.3 2.5 2.6 5 3.8 7.6 0.4 0.9 0.9 2.2 1.3 3.1-0.3-0.4-0.5-0.8-0.7-1.2l0.8 1.6c1.9 5.4 3.5 10.9 4.8 16.5 0.6 2.2 1.1 4.5 1.3 6.8v0.6c0.1 1.8 0.3 3.4 0.4 5.3 0.4 5.9 0.4 11.8 0 17.6-0.1 1.8-0.3 3.5-0.4 5.3v0.2c-0.3 2.3-0.8 4.6-1.4 6.8-1.2 5.6-2.7 11-4.7 16.3-0.5 1.5-3.1 6.1 0 0.5-0.5 1-1 2-1.3 3.1-1.2 2.4-2.3 5.1-3.6 7.4-1.4 2.3-2.8 4.7-4.2 7-0.7 1.1-1.2 1.9-1.8 2.8l-0.9 1.3c-6.9 8.4-14.9 15.9-21.7 24.6-7.8 9.7-14.8 20-20.7 31-23.9 45.8-32.3 97.8-24.3 148.8 6.3 41.4 24.4 80.2 52 111.8 28.4 33 56.8 66 85.2 98.9 0.8 1.1 1.7 2 2.6 3.1 14.9 9.4 33.8 9.4 48.5 0 9.1-9.6 9.1-24.6 0-34.3l-80.9-93.8zM469.6 773.2c0-26.3 3.7-51.7 10.6-75.7-4 4.5-8.1 9-12.1 13.6l-90.8 101.4c-14.7 16.6-29.5 32.8-44.1 49.4-0.3 0.3-0.5 0.5-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l36.4-40.7c22.3-24.8 44.6-49.7 66.8-74.6 0-2.9-0.1-5.7-0.1-8.5z"  ></path><path d="M430.4 676.4l109.9-120.5 95.3-104.5c15.3-17 31-33.6 46.2-50.7 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.6 0-34.2-9.5-9.4-24.6-9.4-34 0-12.6 13.8-25.3 27.7-38 41.5L519.6 507c-36.6 40.2-73.3 80.2-109.9 120.6-31.8 34.9-63.6 69.7-95.3 104.5-15.3 16.9-31 33.5-46.2 50.5-0.2 0.3-0.4 0.6-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l38-41.6c30.3-33.2 60.6-66.5 90.9-99.7zM481.5 853.1c-13.6 15.2-27.1 30.4-40.7 45.6-9.5 10.5-18.9 21.1-28.4 31.6-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l55.7-62.2c-8.4-15.6-15.3-32.1-20.6-49.3zM156.4 687.3c-0.2 1.4-0.2 2.4 0 0zM156 284.9c0.2 1.6 1 4.4 0 0zM169 188.8c-0.8 1.7-1.1 4.3 0 0z"  ></path></symbol><symbol id="icon-0304dituku" viewBox="0 0 1024 1024"><path d="M960.4 228.6c16 17.1 14.2 40.4 12.7 63.2-0.5 7.5-1.1 15.3-1.1 23.2v535.2c0 20.5-6.1 39.5-16.2 55.5l-7 9.5c-18.5 22.8-46.5 37.2-77.7 37.2H168.4c-55.7 0-100.7-46-100.7-102.2V315c0-56.4 45.2-102.2 100.7-102.2h165.7c19.6 0 35.6 15.8 35.6 35.6 0 19.6-15.8 35.6-35.6 35.6H168.4c-16.9 0.4-30.2 14.4-29.8 31.1v240.2l201.1 81.3 140.8-198.4c-49.9-62.8-74.2-116-74.2-161.4-0.4-60.9 23.5-119.2 66.1-162.7 41.8-43.5 99.6-67.9 160-67.7 60.3-0.2 118.1 24.4 160.2 67.7 42.4 43.5 66.3 101.8 65.9 162.7 0 27.7-9.2 59.1-27.1 93.2-16.9 32.1-42 67.7-75.1 106.1-29.3 33.9-60.7 65.9-93.9 96.1l-4 3.6-21.9 19.2-23.2-19.6c-29.8-25.7-58.2-53-85.1-81.7L407.1 664l491.6 198.9c1.6-3.8 2.5-8.1 2.5-12.2v-534c-2.5-21-4.8-34.8-6.5-42.9-7.5-6.3-12-15.4-12.2-25.3 0-19.6 15.8-35.6 35.4-35.6 18.5-0.1 32.7 5.3 42.5 15.7z m-483 47.9c0 19.9 11.5 66.4 87.8 152.1 26 29.3 52.2 54.6 70.6 71.3 20.8-19.9 51.9-51.4 80.8-87.1 45.8-56.2 71.1-104.7 71.1-136.5 0-88-69.7-159.4-155.1-159.4-85.7 0.2-155.2 71.6-155.2 159.6zM165.9 881.4L297.5 696l-158.9-64.3v218.7c0.2 16.3 12.1 29.6 27.3 31z m86.9 0h503.6L365 723.2 252.8 881.4z m493.8-620.1c0 63.7-51.2 115.8-113.8 115.8-62.8 0-114-51.9-114-115.8s51.2-115.8 114-115.8c62.6 0 113.8 51.8 113.8 115.8z m-157.1 0c0 24.6 19.2 44.7 42.9 44.7s42.9-20.1 42.9-44.7c0-24.8-19.2-44.7-43.1-44.7-23.3 0-42.7 19.9-42.7 44.7z"  ></path></symbol><symbol id="icon-020402xiangmupinggugongju-sc" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M521.7 916.1H184.9c-38.5 0-67.4-28.9-67.4-67.4V175.3c0-38.5 28.9-67.4 67.4-67.4h52.9c0 9.7-4.8 19.2-4.8 28.9 0 48.1 38.5 86.6 86.6 86.6h221.3c48.1 0 86.6-38.5 86.6-86.6 0-9.7 0-19.2-4.8-28.9h52.9c38.5 0 67.4 28.9 67.4 67.4v288.6c0 14.4 14.4 28.9 28.9 28.9s28.9-14.4 28.9-28.9V175.3c-0.2-67.4-57.9-125.1-125.3-125.1H189.7c-67.3 0-125.1 57.7-125.1 125.1v673.4c0 67.4 57.7 125.1 125.1 125.1h336.8c14.4 0 28.9-14.4 28.9-28.9s-14.5-28.8-33.7-28.8z m19.2-808.2c14.4 0 28.9 9.7 28.9 28.9 0 14.4-14.4 28.9-28.9 28.9H319.6c-14.4-4.8-28.9-14.4-28.9-28.9s9.7-28.9 28.9-28.9h221.3z" fill="#062F8C" ></path><path d="M233 319.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.5-14.4-28.9-28.9-28.9z m375.2 28.8c0-14.4-14.4-28.9-28.9-28.9H329.1c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h250.2c14.5 0 28.9-14.4 28.9-28.9zM233 521.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9c-0.1-14.4-14.4-28.9-28.9-28.9z m327.1 28.8c0-14.4-14.4-28.9-28.9-28.9h-202c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9h202c14.5 0 28.9-14.4 28.9-28.9zM233 723.6c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9 28.9-14.4 28.9-28.9-14.4-28.9-28.9-28.9z m96.2 0c-14.4 0-28.9 14.4-28.9 28.9s14.4 28.9 28.9 28.9H435c14.4 0 28.9-14.4 28.9-28.9s-14.4-28.9-28.9-28.9H329.2z m471.4-43.2l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6z" fill="#E60012" ></path></symbol><symbol id="icon-020406guanwangyujingfenxigongju-sc" viewBox="0 0 1024 1024"><path d="M771.9 560.9c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.2-163.5 163.5-163.5S935.4 691 935.4 782.3s-72.1 163.5-163.5 163.5z" fill="#062F8C" ></path><path d="M834.4 710.1l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM512 403.9h0.2c22 0 33 11 33 33V548c0 22-11 33-33 33h-0.2c-22 0-33-11-33-33V437c-0.1-22.1 11-33.1 33-33.1z m0 222.3h0.2c22 0 33 11 33 33s-11 33-33 33h-0.2c-22 0-33-11-33-33-0.1-22 11-33 33-33zM65.5 459.6h57.6c22 0 33 11 33 33s-11 33-33 33H65.5c-22 0-33-11-33-33s11-33 33-33z m835.4 0h57.6c22 0 33 11 33 33s-11 33-33 33h-57.6c-22 0-33-11-33-33-0.1-22 11-33 33-33zM763.6 194.2l39.3-39.3c15.6-15.6 31.2-15.6 46.8 0s15.6 31.2 0 46.8L810.4 241c-15.6 15.6-31.2 15.6-46.8 0-15.6-15.5-15.6-31.2 0-46.8z m-589.5-39.3c15.6-15.6 31.1-15.6 46.8 0l39.3 39.3c15.6 15.6 15.6 31.1 0 46.8-15.6 15.6-31.2 15.6-46.8 0l-39.3-39.3c-15.5-15.7-15.5-31.2 0-46.8zM512 13.1h0.2c22 0 33 11 33 33v57.6c0 22-11 33-33 33h-0.2c-22 0-33-11-33-33V46.2c-0.1-22 11-33.1 33-33.1z" fill="#E60012" ></path><path d="M560.9 905.9H267.2v-22.4c0-12.2 9.8-22.2 22-22.4h251.1c-7.1-20.9-11.5-43-12.7-66H323.5V492.6c0.7-103.7 84.6-187.6 188.5-188.3 104.1 0.2 188.6 84.3 189.3 188.4v55.2c21-6.3 43.1-9.9 66-10.3v-45c0-141.1-114.3-255.3-255.3-255.3-141.1 0-255.3 114.3-255.3 255.3v308.3c-33.5 13.6-55.5 46-55.6 82.2v89H618c-22.9-18.4-42.2-40.9-57.1-66.2z" fill="#062F8C" ></path></symbol><symbol id="icon-030507zhengcexingwendangku" viewBox="0 0 1024 1024"><path d="M244.3 630h343.2c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H244.3c-16.8 0-30.7 13.9-30.7 30.7 0 16.8 13.7 30.5 30.7 30.7z m0 122.6h258.8c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H244.3c-16.8 0-30.7 13.9-30.7 30.7 0 17 13.7 30.7 30.7 30.7zM807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path><path d="M314.9 339.4l-85-84.3 118.5-17.4L399.3 131l51.6 106.7L568.7 255l-85.4 83.2 20.6 118.1-106-54.8-103.5 55z"  ></path></symbol><symbol id="icon-020404heichoushuitidengjipingdinggongju-sc" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M800.6 680.4l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM574.1 141.2c6.6-6.2 10.3-14.9 10.1-23.9 0-18.4-15.9-33.5-35.5-33.5-9.4 0-18.8 3.4-25.4 9.6-6.6 6.2-10.3 14.9-10.1 23.9 0 18.5 15.9 33.5 35.5 33.5 9.4-0.1 18.4-3.5 25.4-9.6z" fill="#E60012" ></path><path d="M477.2 199.2c0-0.4 0.3-0.7 0.7-0.7 38.4 36.9 73.9 71.1 73.9 71.1C670 153.4 633.1 37.3 633.1 37.3c-118.9-44.4-258.8 69-258.8 69 7.3 2.8 41.3 33.5 78.3 67.6L433 192.4c-43.5-39.6-85.6-66.3-95.7-56-10.9 10.9 38.4 49.9 72.5 77.9l-22.5 21.9c-33.3-29.4-66.7-47.8-76.8-37.6-10.1 10.9 26.1 38.3 53.6 59.4l-22.5 21.2c-23.2-19.2-46.4-30.8-54.4-21.9-8.7 8.9 15.2 26.7 34.8 41l-21 20.5c-100.7 8.2-93.5 17.1-86.2 25.3 8 8.2 81.9 0.7 84.8 2 2.9 1.4 1.4 89.5 16.7 84.7 15.2-4.1 21-82 18.1-87.5-0.7-1.4 5.1-8.2 15.2-18.5 11.6 16.4 23.9 37.6 35.5 28 0 0 13-9.6-15.2-44.4l-2.2-2c7.2-7.5 15.2-15.7 23.9-23.9 18.8 21.9 39.9 61.5 55.8 49.2 0 0 16-10.9-24.6-58.7-3.2-3.8-6.6-7.5-10.2-11 8-8.2 16.7-16.4 23.9-23.9 25.4 25.3 58.7 82 76.1 69 0 0 15.9-10.3-37-70.4-5.8-6.2-11.6-13-17.4-19.1 11.8-10.9 19-18.4 19-18.4z m-52.4-88.7S522.6 31.9 605.3 62c0 0 26.1 81.3-56.5 161.9 0 0-112.4-109.3-124-113.4z" fill="#E60012" ></path><path d="M618.8 252.7c-12.5 13.9-24.9 27.9-37.2 41.9-29.9 33.6-59.9 67.1-89.7 100.8-36.1 40.6-72.1 81.1-108.3 121.6L290 622.3c-15.2 17.1-30.6 34-45.6 51.1-0.3 0.3-0.5 0.5-0.7 0.8-9.1 9.6-9.1 24.7 0 34.3 9.4 9.4 24.6 9.5 34 0.2 12.5-13.9 24.9-27.9 37.2-41.9 29.9-33.6 59.9-67.1 89.7-100.8 36.2-40.6 72.1-81.1 108.2-121.8L606.4 339c15.2-17 30.6-34 45.7-51.1 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.7 0-34.3-9.4-9.4-24.6-9.4-34-0.1zM814.6 189.3c-0.3 0.7-0.6 1.3-0.9 2.1l0.9-2.1z" fill="#062F8C" ></path><path d="M802.2 422.9c1.2 1.3 2.4 3.2 3.7 4.5-0.9-0.6-1-0.2 1.2 1.4-0.1-0.2-0.1 0-0.1-0.2v-0.1l0.2 0.2c0.8 1.1 1.5 2.2 2.2 3.4 1.7 2.5 3.3 5.2 4.7 7.9 1.2 2.2 2.4 4.5 3.5 6.8 0.3 0.5 0.5 1.1 0.8 1.6 0.2 0.5 0.4 1 0.7 1.3 0 0.2 0.1 0.4 0.2 0.6 2.1 5.9 3.8 12 5.1 18.2 0.3 1.2 0.5 2.3 0.7 3.4 0.1 0.5 1.1 6.1 0.3 1.9l-0.2 2.2 0.3 3.5c0.5 6.4 0.4 12.9-0.1 19.4l-0.3 3.5c-0.5 2.6-0.9 5.3-1.4 7.9-0.1 0.6-0.3 1.2-0.4 1.7 20.2 6.2 39.5 14.7 57.4 25.2 0.3-0.8 0.5-1.5 0.8-2.3 16.1-49.9 5.4-104.5-28.4-144.5-3.3-3.9-6.7-7.7-10.2-11.6-1.5-1.9-3.3-3.8-4.8-5.6-1-1-1.7-2.1-2.6-3.2-0.3-0.5-0.6-1-1-1.3-1.5-1.9-2.9-4.2-4.1-6.1-6.1-9.5-11.5-19.4-16.1-29.7-0.4-1.1-0.8-2-1.2-3.1-1-2.3-1.7-4.8-2.6-7.3-1.8-5.9-3.5-11.5-5-17.5-1.2-5.5-2.4-10.9-3.3-16.5-0.2-1.3-0.4-2.6-0.5-3.9-0.4-3-0.6-6-0.8-8.9-0.8-11.8-0.6-23.6 0.7-35.4 0.1-1.5 0.3-3 0.5-4.4v-0.5c1.2-8.2 3-16.4 5.2-24.4 1.4-5.1 3-10.2 4.9-15.3 0.6-2.5 1.4-4.9 2.7-7.1-0.1 0.3-0.2 0.5-0.3 0.7 0.2-0.3 0.3-0.7 0.5-1 0.7-1.4 1.3-3.1 2.1-4.5 4.7-10 10.3-19.5 16.7-28.4 0.6-0.7 1.1-1.5 1.6-2.3 1.5-1.9 3-3.8 4.6-5.6 2.5-2.9 5.2-5.7 7.9-8.4 5-5.2 10.1-10.2 15.2-15.3 16.9-17.3 33.8-34.4 50.6-51.6l3.5-3.5c8.8-9-5-25.4-14.6-34.3-9.7-9-24.7-8.9-34.3 0.3-14 14.3-28 28.4-42 42.7-18.1 17-34.7 35.5-49.8 55.3-57 86-50.6 199.1 15.4 278.3 3.4 4 6.8 8 10.2 11.9zM696.7 455.5l-36.4 40.7c-7.3 8.1-14.5 16.3-21.8 24.4 25.8-10.7 53.6-17.5 82.7-19.8l9-10.2c0.2-0.3 0.4-0.5 0.5-0.8 9.2-9.6 9.2-24.7 0-34.3-9.4-9.3-24.6-9.3-34 0zM202.6 836.4c-4-4.6-8.2-9.4-12.3-14.4-0.2-0.3-0.4-0.5-0.6-0.8l-1.3-1.7c-1.5-1.9-3-4.1-4.3-6.1-3.5-5.3-6.5-10.6-9.4-16.2-2.6-4.2-4.8-8.8-6.4-13.5v-0.2c-0.5-1.5-1.1-2.7-1.5-4.1-1.1-3-2.1-6-3.1-8.9-1.7-5.4-3.2-10.6-4.4-16-1.7-5.2-2.8-10.7-3.2-16.2 0.1 0.6 0.2 1.2 0.3 1.9-0.1-1.2-0.3-2.3-0.4-3.5l-0.3-3.5c-0.3-3-0.5-5.9-0.6-8.9-0.3-5.8-0.4-11.9-0.2-17.7 0.2-5.9 0.7-11.6 1.2-17.5 0.1-1.2 0.3-2.3 0.4-3.5-0.1 0.9-0.1 1.1-0.1 1.6 0.1-0.4 0.1-0.9 0.1-1.2 0.5-3.2 1-6.2 1.6-9.3 2.3-11.1 5.5-22.1 9.5-32.6l1.2-3.2c0-0.2 0.1-0.4 0.2-0.5 1.1-2.1 2.1-4.5 3.2-6.8 2.5-5.1 5.4-10.3 8.3-15.3 2.5-4.2 5.3-8.2 8.2-12.4 0.2-0.3 0.4-0.5 0.5-0.8 0.5-0.7 1-1.3 1.5-2 2-2.6 4.1-4.9 6.3-7.4 8.3-8.6 16-17.9 22.9-27.8 6.6-10.5 11.9-21.7 15.6-33.4 16.2-50 5.4-104.7-28.5-144.8l-10.6-12.3c-1.5-1.8-3.3-3.6-4.8-5.6-0.8-1.2-1.6-2.2-2.6-3.4-1.7-2.3-3.4-4.8-5-7.1-5.9-9.2-11-18.9-15.5-28.9l-0.3-0.6-1.2-2.9c-1.1-2.8-1.9-5.4-2.8-8.2-1.8-5.5-3.4-10.9-4.7-16.5s-2.5-11.2-3.4-17.1c-0.2-1.2-0.2-2.3-0.5-3.5 0.2 0.5 0.2 0.5 0.2 0.8v-0.3c-0.4-3.1-0.7-6.4-0.9-9.6-0.7-11.7-0.5-23.4 0.7-35.1 0.1-1.2 0.2-2.3 0.4-3.5l0.1-1.1 1-7.2c1.2-5.9 2.5-11.7 4.1-17.5 1.3-4.8 3-9.8 4.6-14.6 1.2-2.6 2.2-5.2 3.1-7.9 0 0.2 0 0.4-0.1 0.5 0.9-1.8 1.5-3.6 2.4-5.3 4.6-9.7 10-19 16.2-27.8l2.4-3.4c0.3-0.2 0.5-0.6 0.6-0.9-0.1 0.2-0.3 0.4-0.5 0.6l0.5-0.6c1.2-1.5 2.6-3.1 3.6-4.4 2.5-2.8 5.2-5.7 7.8-8.4 5-5.3 10.2-10.2 15.2-15.4L267.7 71l3.5-3.6c9.2-9.6 9.2-24.7 0-34.3-14.9-9.2-33.7-9.2-48.5 0l-42 42.8c-18.4 17.2-35.2 35.9-50.4 55.9-56.5 86-50 198.9 16.5 277.6 3.4 3.9 6.7 7.9 10.2 11.8 1.5 1.8 3.2 3.6 4.7 5.6 0.5 0.7 1.1 1.4 1.6 2.3 1.8 2.8 3.5 5.7 5.2 8.6 1.3 2.5 2.6 5 3.8 7.6 0.4 0.9 0.9 2.2 1.3 3.1-0.3-0.4-0.5-0.8-0.7-1.2l0.8 1.6c1.9 5.4 3.5 10.9 4.8 16.5 0.6 2.2 1.1 4.5 1.3 6.8v0.6c0.1 1.8 0.3 3.4 0.4 5.3 0.4 5.9 0.4 11.8 0 17.6-0.1 1.8-0.3 3.5-0.4 5.3v0.2c-0.3 2.3-0.8 4.6-1.4 6.8-1.2 5.6-2.7 11-4.7 16.3-0.5 1.5-3.1 6.1 0 0.5-0.5 1-1 2-1.3 3.1-1.2 2.4-2.3 5.1-3.6 7.4-1.4 2.3-2.8 4.7-4.2 7-0.7 1.1-1.2 1.9-1.8 2.8l-0.9 1.3c-6.9 8.4-14.9 15.9-21.7 24.6-7.8 9.7-14.8 20-20.7 31-23.9 45.8-32.3 97.8-24.3 148.8 6.3 41.4 24.4 80.2 52 111.8 28.4 33 56.8 66 85.2 98.9 0.8 1.1 1.7 2 2.6 3.1 14.9 9.4 33.8 9.4 48.5 0 9.1-9.6 9.1-24.6 0-34.3l-80.9-93.8zM469.6 773.2c0-26.3 3.7-51.7 10.6-75.7-4 4.5-8.1 9-12.1 13.6l-90.8 101.4c-14.7 16.6-29.5 32.8-44.1 49.4-0.3 0.3-0.5 0.5-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l36.4-40.7c22.3-24.8 44.6-49.7 66.8-74.6 0-2.9-0.1-5.7-0.1-8.5z" fill="#062F8C" ></path><path d="M430.4 676.4l109.9-120.5 95.3-104.5c15.3-17 31-33.6 46.2-50.7 0.3-0.3 0.5-0.5 0.7-0.8 9.1-9.6 9.1-24.6 0-34.2-9.5-9.4-24.6-9.4-34 0-12.6 13.8-25.3 27.7-38 41.5L519.6 507c-36.6 40.2-73.3 80.2-109.9 120.6-31.8 34.9-63.6 69.7-95.3 104.5-15.3 16.9-31 33.5-46.2 50.5-0.2 0.3-0.4 0.6-0.7 0.8-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l38-41.6c30.3-33.2 60.6-66.5 90.9-99.7zM481.5 853.1c-13.6 15.2-27.1 30.4-40.7 45.6-9.5 10.5-18.9 21.1-28.4 31.6-9.2 9.6-9.2 24.7 0 34.3l0.1 0.1c9.4 9.3 24.6 9.3 33.9-0.1l55.7-62.2c-8.4-15.6-15.3-32.1-20.6-49.3zM156.4 687.3c-0.2 1.4-0.2 2.4 0 0zM156 284.9c0.2 1.6 1 4.4 0 0zM169 188.8c-0.8 1.7-1.1 4.3 0 0z" fill="#062F8C" ></path></symbol><symbol id="icon-0302zichanku" viewBox="0 0 1024 1024"><path d="M703.8 752.6v-63.2c124.7-21.2 217.6-62.5 245.7-112.1 5.7 9.5 8.7 20.5 8.7 31.5 0.1 63.4-104 118.1-254.4 143.8z m0-191.5v-63.2c124.7-21.2 217.6-62.5 245.7-112.1 5.7 9.5 8.7 20.5 8.7 31.5 0.1 63.4-104 118.1-254.4 143.8z m208.8-259.7c-30 20.3-63 35.5-97.9 45.2-197.8 51.5-405.4 51.5-603.2 0-34.9-9.7-67.9-25-97.9-45.2-37.7-27.5-45.5-56.2-45.5-75.4s7.8-47.9 45.5-75.4c29.9-20.3 63-35.5 97.9-45.2 197.8-51.7 405.4-51.7 603.2 0 34.9 9.7 67.9 24.8 97.9 45.2 37.7 27.5 45.5 56.2 45.5 75.4 0 19.4-7.8 48.1-45.5 75.4z m-37.4-99.2c-24.3-16-51.2-28-79.4-35.9-185.6-47.9-380.2-47.9-565.8 0-28 7.7-54.9 19.8-79.2 35.9-11.2 2.3-19.3 12.3-19.3 23.8s8 21.5 19.3 23.8c24.3 16 51 28 79.2 35.9 185.6 47.9 380.2 47.9 565.8 0 28.2-7.7 54.9-19.8 79.4-35.9 9.3-5 16.3-13.7 19.3-23.8-2.9-10.1-9.9-18.8-19.3-23.8z m-553 295.7v63.2C171.5 535.6 67.1 480.7 67.1 417.2c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91 246.3 112.2z m0 191.5v63.2C171.5 727 67.1 672.2 67.1 608.6c0.2-11.2 3.2-22 8.8-31.5 28.2 49.7 121.3 91.1 246.3 112.3z m41.4-262.5c12.3-12.3 32.2-12.5 44.5-0.3l104.9 105 104.7-105.1c9.2-9 22.8-11.8 34.7-6.8 11.8 4.8 19.7 16.5 19.7 29.4-0.2 8.5-3.5 16.5-9.5 22.5l-73 73.2h50.5c17.7 0 31.9 14.3 31.9 31.9 0 17.7-14.3 31.9-31.9 31.9h-95.4v62.7h95.4c17.7 0 31.9 14.3 31.9 31.9 0 17.5-14.3 31.9-31.9 31.9h-95.4v96.4c0 17.5-14.2 31.7-31.7 31.7s-31.7-14.2-31.7-31.7v-96.4h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.5 14.3-31.9 31.9-31.9h95.4v-62.7h-95.4c-17.7 0-31.9-14.3-31.9-31.9 0-17.7 14.3-31.9 31.9-31.9h50.5l-73.2-73.2c-11.9-12.6-11.8-32.4 0.4-44.7z m149.3 468.6c215.8 0 395.7-54.7 436.8-127.6 5.7 9.5 8.7 20.5 8.7 31.5 0 87.9-199.5 159.1-445.6 159.1-246 0-445.6-71.2-445.6-159.1 0.2-11.2 3.2-22 8.8-31.5 41.1 72.7 221.1 127.6 436.9 127.6z"  ></path></symbol><symbol id="icon-020203yilaodianfenxigongju-sc" viewBox="0 0 1024 1024"><path d="M759.1 720.8c-62.8 0-105.6-24.5-143.4-46.2-35.9-20.5-66.8-38.2-112.9-38.2-55.3 0-97.7 26.1-135.1 49-30.9 19-57.5 35.3-87.1 35.3-64.2 0-102.4-39.7-104-41.4l-6.8-7.3V502.3H45.3L501.8 71.7l146.5 132.2v-55.4H767v163l211.7 190.9H852.6v167.1l-4.1 6.2c-13.4 20.8-61.8 45.1-89.4 45.1zM502.8 586c59.6 0 99.4 22.8 137.9 45 35.5 20.3 69 39.5 118.4 39.5 8.9 0 32.3-11 43.1-18.8V452h45.3L716.6 333.8v-135h-17.9v118.4l-196.2-177L172.2 452h48v198.6c10.2 7.7 31.2 19.8 60.5 19.8 15.3 0 36.4-13 60.7-27.9 41-25.1 91.9-56.5 161.4-56.5z" fill="#E60012" ></path><path d="M955 760.4s-97.6 70-194.4 70c-92.4 0-148.9-70-229.7-70-105.8 0-189.9 70-265 70-92.4 0-212.4-87.2-212.4-87.2-12.8-11.6-21.8-28.9-17.9-34.7 7.7-12.2 14.7-28.9 35.2-17.4 0 0 115.4 87.2 194.4 87.2 75.7 0 148.9-70 265-70 80.2 0 143 70 229.7 70 106.6 0 194.4-70 194.4-70 16-11.5 32.1 3.2 35.2 17.4 2.8 8.4-10.7 24.4-34.5 34.7zM70.8 813s115.4 87.2 194.4 87.2c75.7 0 148.9-70 265-70 80.2 0 143 70 229.7 70 106.6 0 194.4-70 194.4-70 16-11.5 32.1 3.2 35.2 17.4 1.9 8.4-11.5 24.4-35.2 34.6 0 0-97.6 70-194.4 70-92.4 0-148.9-70-229.7-70-105.8 0-189.9 70-265 70-92.4 0-212.4-87.2-212.4-87.2C40 853.5 31 836.1 34.9 830.4c8.3-12.3 15.4-29.5 35.9-17.4z" fill="#062F8C" ></path></symbol><symbol id="icon-020304baojingtongjigongju" viewBox="0 0 1024 1024"><path d="M797.2 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7 3.2 0 6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.5 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H797.5c-0.3 0.2-0.6 0.2-0.8 0.2z m167.5-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1zM512 251.7c19 0 28.8-9.9 28.8-30.3V99.6c0-20.5-9.9-30.3-28.8-30.3s-28.8 9.9-28.8 30.3v121.8c0.1 20.5 9.8 30.3 28.8 30.3zM764.9 331.1l80.2-85.5c11.3-12.1 11.3-31 0-43.1-11.4-12.1-29.5-12.1-40.9 0L724 288c-11.4 12.1-11.4 31 0 43.1 11.4 12.1 29.5 12.1 40.9 0zM260 331.9c11.4 12.1 29.5 12.1 40.9 0 11.4-12.1 11.4-31 0-43.1l-81-86.3c-11.4-12.1-29.5-12.1-40.9 0-11.3 12.1-11.3 31 0 43.1l81 86.3zM549.1 463.6L394.8 664.1h104.3l-29.5 159.7L624 623.2H518.8zM957 479.4H842c-15.9 0-28.8 13.7-28.8 30.3 0 16.7 12.9 30.3 28.8 30.3h114.2c15.9 0 28.8-13.7 28.8-30.3s-12.9-30.2-28-30.3zM210.8 509.7c0-16.6-12.8-30.2-28-30.3h-115C52 479.4 39 493.1 39 509.7c0 16.7 13 30.3 28.8 30.3H182c16 0 28.8-13.7 28.8-30.3z"  ></path><path d="M544.3 954.7c-11.2-21.5-19.8-44.6-25.4-68.8H286.5V586.2C288 456.8 386.4 351.6 509 350.1c110.2-1.4 202.8 81.1 224 191.2 21-5 42.9-7.7 65.4-7.8C774.8 388.4 655.5 278.2 512 278.2c-160.4 0-290.6 137.7-290.6 308v303.4h-53.7c-18.9 0-28 10.6-28.8 30.3 0 20.5 9.9 30.3 28.8 30.3h53.7v4.5h322.9z"  ></path></symbol><symbol id="icon-020206hedaomonigongju-sc" viewBox="0 0 1024 1024"><path d="M811.9 486.8c0.7 4-0.2-1.4-0.3-1.8-0.2-1-0.4-2.1-0.6-3.2-1.2-6-2.8-11.8-4.9-17.4-0.1-0.2-0.2-0.4-0.2-0.6-0.3-0.4-0.5-0.8-0.6-1.3-0.3-0.6-0.5-1.1-0.7-1.6-1-2.2-2.1-4.4-3.3-6.5-1.4-2.6-2.8-5.1-4.5-7.5-0.6-1.1-1.4-2.2-2.1-3.2 0.1 0 0.1 0 0.2 0.2l-0.5-0.5s0.1 0 0.1 0.2 0 0 0.1 0.2c-2.1-1.6-2-1.9-1.2-1.4-1.3-1.3-2.5-3-3.6-4.3-3.3-3.8-6.5-7.5-9.7-11.3-63.3-75.8-69.3-184.1-14.8-266.4 14.4-19 30.3-36.7 47.6-53 13.4-13.7 26.8-27.2 40.2-40.9 9.2-8.8 23.6-8.9 32.9-0.3 9.2 8.5 22.4 24.2 14 32.9l-3.4 3.3c-16.2 16.4-32.3 32.9-48.5 49.4-4.9 4.9-9.7 9.6-14.5 14.6-2.6 2.7-5.1 5.3-7.5 8.1-1.6 1.7-2.9 3.5-4.4 5.3-0.6 0.7-1 1.6-1.6 2.2-6.2 8.5-11.5 17.6-16 27.2-0.7 1.4-1.4 2.9-2 4.3-0.5 1-0.9 1.9-1.3 2.9 0.4-0.8 0.7-1.7 1.1-2.7-1.2 2.1-2 4.4-2.6 6.8-1.8 4.9-3.3 9.7-4.7 14.6-2.1 7.6-3.8 15.4-5 23.3v0.5c-0.2 1.4-0.4 2.8-0.5 4.2a192 192 0 0 0-0.6 33.9c0.2 2.8 0.4 5.7 0.7 8.5 0.1 1.3 0.3 2.5 0.5 3.8 0.8 5.3 1.9 10.6 3.1 15.8 1.4 5.7 3 11.1 4.8 16.7 0.8 2.4 1.6 4.8 2.5 7 0.4 1 0.7 1.9 1.1 2.9 4.4 9.9 9.5 19.4 15.4 28.5 1.2 1.8 2.5 4 3.9 5.9 0.4 0.4 0.6 0.8 0.9 1.3 0.8 1 1.6 2.1 2.5 3 1.5 1.7 3.1 3.5 4.6 5.3 3.3 3.8 6.6 7.3 9.7 11.1 32.3 38.3 42.6 90.6 27.2 138.3-3.7 11.5-8.8 22.5-15.3 32.6-6.9 9.5-14.5 18.6-22.7 27.2-1.7 1.8-3.4 3.9-5 5.9l-1.9 2.5c0.6-0.7 1.1-1.6 1.7-2.2-0.7 0.7-1.4 1.6-1.9 2.5-3.1 4.3-5.9 8.6-8.6 13.1-2.7 4.5-5.2 9.2-7.5 14-0.6 1.4-1.6 3-2.3 4.9 0-0.3 0 0-0.3 0.6l0.3-0.6c0 0.2-0.1 0.3-0.5 1.3l-1.5 3.8c-3.8 9.8-6.7 20-8.8 30.4-0.6 3.2-1.1 6.5-1.7 9.7l-0.2 0.8-0.3 2.1c-1.2 11.3-1.6 22.6-0.9 33.9l0.6 7.5c0.1 1.6 0.2 2.9 0.4 4.3 0-0.2 0-0.2-0.1-0.3 0.7 2.9 1.3 6 1.5 9.1 0.5 2.4 1 5 1.6 7.3 1.2 5.4 2.7 10.7 4.4 16.1 0.9 2.7 1.7 5.1 2.7 7.8 0.5 1.4 1 2.7 1.5 3.9 1.7 4.8 3.9 9.5 6.6 13.8 2.7 5 5.6 9.9 8.7 14.6 1.5 2.4 3 4.5 4.6 6.7 0.7 0.8 1.3 1.7 1.9 2.7-0.2-0.4-0.5-0.7-0.6-1.1 0.1 0.3 0.3 0.5 0.5 0.7 3.6 4.5 7.3 8.9 11.1 13.2L911 924c8.5 9.7-5 23-14 32.9-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-0.8-1.1-1.7-1.9-2.5-2.9l-81.5-94.6c-26.2-30-43.4-66.8-49.7-106.2-8.1-48.9 0-99.1 23-143 5.7-10.5 12.3-20.4 19.8-29.7 6.4-8.1 13.9-15.3 20.5-23.1 0.1-0.1 0.1-0.2 0.2-0.3 0.8-1.3 1.8-2.5 2.6-3.8 1.3-2.1 2.5-4.2 3.6-6.2 1.1-1.9 2.3-4.2 3.3-6.2 0.6-1.1 1.1-2.2 1.6-3.3 1.9-5.2 3.6-10.6 4.9-16.1 0.6-2.5 0.9-5 1.4-7.5l0.3-3.3c0.5-6.2 0.6-12.4 0.1-18.5l-0.3-3.3m-22.4 250.5c1.5 4 0.2 2.1 0 0zM203.9 178.8c0.2-0.2 0.4-0.4 0.5-0.6-0.1 0.3-0.3 0.6-0.6 0.8l-2.3 3.2c-6 8.4-11.1 17.4-15.5 26.6-0.8 1.6-1.5 3.3-2.3 5 0.1-0.1 0.1-0.3 0.1-0.5-0.8 2.6-1.8 5-2.9 7.5-1.6 4.6-3.1 9.4-4.4 14-1.6 5.5-2.8 11.1-3.9 16.7l-0.9 6.9-0.1 1c-0.2 1.1-0.3 2.2-0.4 3.3-1.1 11.2-1.3 22.4-0.6 33.6 0.2 3 0.5 6.2 0.8 9.2v0.3c0-0.3 0-0.3-0.2-0.7 0.3 1.1 0.3 2.2 0.5 3.3 0.8 5.6 1.9 11 3.2 16.3s2.8 10.6 4.5 15.8c0.8 2.7 1.7 5.1 2.7 7.8l1.1 2.8 0.3 0.6c4.3 9.5 9.3 18.8 14.9 27.6 1.6 2.2 3.1 4.6 4.8 6.8 0.9 1.1 1.7 2.1 2.5 3.2 1.5 1.8 3.1 3.6 4.6 5.3l10.2 11.8c32.4 38.4 42.8 90.8 27.3 138.6-3.6 11.2-8.6 21.9-15 31.9-6.6 9.5-14 18.4-21.9 26.6-2.1 2.4-4.1 4.6-6.1 7.1-0.6 0.6-1 1.3-1.5 1.9-0.1 0.3-0.3 0.5-0.5 0.7-2.8 3.9-5.4 7.8-7.8 11.8-2.8 4.8-5.6 9.7-8 14.6-1 2.2-2 4.5-3 6.5-0.1 0.1-0.2 0.3-0.2 0.5l-1.2 3c-3.9 10.1-6.9 20.6-9.1 31.2-0.6 2.9-1.1 5.9-1.6 8.9 0 0.3 0 0.7-0.1 1.1 0-0.6 0-0.7 0.1-1.6-0.1 1.1-0.3 2.2-0.4 3.3-0.6 5.6-1 11.1-1.2 16.7-0.2 5.6-0.1 11.5 0.2 17 0.1 2.9 0.3 5.7 0.6 8.5l0.3 3.3c0.1 1.1 0.3 2.2 0.4 3.3-0.2-0.9-0.4-1.8-0.4-2.8 0.3 5.6 1.4 11.1 3.1 16.4 1.2 5.1 2.6 10.2 4.2 15.3 0.9 2.8 1.9 5.7 2.9 8.5 0.5 1.4 1 2.5 1.5 3.9v0.2c1.6 4.5 3.7 8.9 6.2 12.9 2.8 5.3 5.7 10.5 9 15.5 1.3 1.9 2.7 4 4.1 5.9l1.3 1.7c0.2 0.3 0.4 0.5 0.6 0.7 3.9 4.8 7.9 9.4 11.8 13.8l77.7 90.2c8.7 9.3 8.7 23.7 0 32.9-14.1 9-32.2 9-46.5 0-0.8-1-1.7-1.9-2.5-2.9-27.2-31.5-54.3-63.1-81.5-94.6-26.4-30.3-43.7-67.4-49.8-107-7.7-48.7 0.4-98.6 23.2-142.4 5.7-10.5 12.4-20.4 19.8-29.7 6.5-8.4 14.1-15.5 20.7-23.6l0.8-1.3c0.6-0.8 1.1-1.7 1.7-2.7 1.4-2.2 2.7-4.5 4-6.7s2.4-4.8 3.5-7.1c0.4-1 0.8-2 1.3-2.9-2.9 5.4-0.5 1 0-0.5 1.9-5 3.4-10.3 4.5-15.6 0.6-2.1 1.1-4.3 1.4-6.5v-0.2c0.1-1.7 0.3-3.3 0.4-5 0.4-5.6 0.4-11.3 0-16.9-0.1-1.8-0.3-3.3-0.4-5v-0.6c-0.3-2.2-0.7-4.4-1.3-6.5-1.2-5.3-2.8-10.6-4.6-15.8-0.2-0.5-0.5-1-0.7-1.6 0.2 0.4 0.4 0.7 0.6 1.1-0.5-0.8-0.9-2.1-1.3-2.9-1.2-2.5-2.4-4.9-3.7-7.3-1.6-2.8-3.2-5.6-5-8.3-0.6-0.8-1.1-1.6-1.6-2.2 0-0.2 0 0 0 0-1.5-1.8-3-3.6-4.5-5.3-3.3-3.8-6.5-7.5-9.7-11.3-63.6-74.8-69.8-182.8-15.7-265.2 14.5-19.2 30.6-37.1 48.2-53.5l40.2-40.9c14.2-8.8 32.2-8.8 46.5 0 8.8 9.2 8.8 23.7 0 32.9l-3.4 3.5-48.6 49.3c-4.8 5-9.7 9.7-14.5 14.8-2.5 2.7-5 5.4-7.4 8.1-1 1.3-2.4 2.8-3.5 4.2m-20.7 35.6c-1 4.1-0.7 1.7 0 0z m-12.4 92c0.9 4.2 0.2 1.6 0 0z m0.4 385.2c-0.2 2.3-0.2 1.3 0 0z" fill="#E60012" ></path><path d="M720.8 502.8c-14 15.9-28.2 31.5-42.2 47.3l-86.9 97.2L491 759.5c-27.8 31.2-55.5 62.3-83.4 93.3l-34.9 38.9c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-15.9 28.2-31.4 42.2-47.3l86.9-97c33.4-37.5 66.9-75 100.5-112.4 27.8-31.2 55.6-62.2 83.4-93.3l34.8-38.9c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9 0.1 0.3-0.1 0.4-0.3 0.7zM705.8 101.3c-14 15.9-28.3 31.7-42.5 47.4l-87.5 97.9c-33.6 37.6-67.2 75.3-100.9 112.8-27.9 31.1-55.9 62.4-83.7 93.5-11.6 12.9-23.3 26.1-34.9 39-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-16.1 28.3-31.7 42.5-47.6 29.2-32.5 58.4-65.3 87.6-97.8 33.6-37.6 67.2-75.3 100.9-112.9 27.9-31.1 55.8-62.2 83.7-93.5 11.6-12.9 23.3-26.1 34.9-38.9 9-8.8 23.5-8.8 32.5 0 8.7 9.2 8.7 23.6 0 32.8-0.4 0.3-0.5 0.6-0.7 0.9zM584.7 99c-10.6 12.1-21.7 24.2-32.6 36.4L485.5 210c-25.9 28.8-51.7 57.7-77.5 86.6-21.3 23.9-42.6 47.6-64 71.5-8.9 10-17.8 19.9-26.7 29.8-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9l0.5-0.5c10.6-12.3 21.7-24.2 32.6-36.5 22.2-24.8 44.4-49.7 66.6-74.5 25.9-29 51.7-57.9 77.5-86.8 21.3-23.7 42.7-47.6 64-71.5 8.9-10 17.8-19.9 26.7-29.8 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9l-0.5 0.7zM438.3 123.3l-94.8 105.4c-19.8 22-39.6 44.1-59.5 66.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.7 0-32.9 7.2-8 14.5-16.1 21.7-24.1L368 132.5l59.5-66.1c9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9l-21.7 24zM602.4 357.7l-89.5 100.7C478.4 497.3 444 536.2 409.3 575c-28.6 32.2-57.2 64.4-85.8 96.5-11.8 13.4-23.7 26.8-35.6 40.1-9.1 8.9-23.6 8.8-32.6-0.2-8.7-9.2-8.7-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14.3-16.4 29.1-32.6 43.6-48.9l89.6-100.7c34.6-38.7 69.1-77.6 103.6-116.4 28.6-32.2 57.2-64.4 85.8-96.5 11.8-13.4 23.7-26.8 35.6-40.1 9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9-0.2 0.3-0.4 0.5-0.6 0.7-14.3 16.4-29.1 32.6-43.6 48.9zM675.3 383.2c8.7 9.2 8.7 23.6 0 32.8-0.2 0.3-0.4 0.5-0.6 0.7-14.6 16.4-29.6 32.3-44.2 48.6l-91.3 100.1-105.3 115.2-87 95.4-36.4 39.8c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.3-0.2 0.5-0.5 0.6-0.7 14.6-16.3 29.6-32.2 44.2-48.4 30.4-33.3 60.8-66.6 91.3-100.1 35.1-38.6 70.1-76.9 105.2-115.4l87-95.5c12.1-13.2 24.3-26.5 36.4-39.8 9-8.8 23.5-8.8 32.6 0.2-0.1-0.1-0.1-0.1 0 0zM443.9 893.4c39.2-43.9 78.4-87.9 117.7-131.7l74.4-83.3c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-9.1 10-18.1 20.2-27.2 30.4-39.2 43.9-78.4 87.9-117.7 131.7l-74.4 83.1c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 9.1-10 18.1-20.2 27.2-30.2zM560.9 909c26.3-29.4 52.6-58.8 79-88.2 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-3.7 4.2-7.5 8.4-11.1 12.6-26.3 29.3-52.6 58.7-79 88.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.6 0-32.8 3.7-4.5 7.4-8.6 11.1-12.6zM699.3 891.8c9-8.9 23.5-8.9 32.5 0 8.7 9.3 8.7 23.7 0 32.9-9.2 11.3-18.3 22.6-27.4 33.9-9 8.9-23.5 8.9-32.5 0-8.7-9.3-8.7-23.7 0-32.9 9.1-11.3 18.2-22.6 27.4-33.9z" fill="#062F8C" ></path></symbol><symbol id="icon-020405changzhanyunyingpinggugongju" viewBox="0 0 1024 1024"><path d="M771.9 560.9c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.2-163.5 163.5-163.5S935.4 691 935.4 782.3s-72.1 163.5-163.5 163.5z"  ></path><path d="M834.4 710.1l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM308.3 683.2l7.5-5.6c20.3-15.8 44.5-25.7 69.9-28.7V438.5h-78.5v244.2l1.1 0.5z"  ></path><path d="M819.8 511.6c25.2 3.9 49.4 11 72.1 20.8V169.1h-137V62.5H271.6v106.6H134.7v481.8c24.1-4.5 48.9-2.8 72.1 5.1V241.2h612.9v270.4z m-137-342.5h-339v-34.5h339v34.5z"  ></path><path d="M718.9 513.1v-74.6h-78.5v100.9c24.5-12.2 50.8-21.1 78.5-26.3zM500.1 687.4c12.7-29.1 29.8-55.7 50.6-79.1V407.2h-78.5v260.7c5.2 2.9 10.1 6.2 14.9 9.7l13 9.8zM479.1 854.1l-13.7-10.3c-37.8-28.5-89.9-28.5-127.8 0l-36.1 27c-12 9-28.6 9-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0l-46.6 35.3c-16.1 11.8-19.5 34.4-7.7 50.4 11.8 16.1 34.4 19.5 50.4 7.7 0.3-0.2 0.6-0.5 0.9-0.7l46.6-35.3c12-9 28.6-9 40.6 0l35.9 27c37.8 28.5 89.9 28.5 127.7 0l36.1-27c12-9 28.6-9 40.6 0l35.1 26.7c16.3 12.1 35.2 19.1 54.5 20.9-15.6-29-26.7-60.9-32.1-94.7z"  ></path><path d="M487.5 722l-21.6-16.2c-37.8-28.5-89.9-28.5-127.7 0l-36.1 27c-12 9.1-28.6 9.1-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0L51 741.1l-0.2 0.2c-16 11.8-19.5 34.4-7.7 50.4s34.4 19.5 50.4 7.7c0.4-0.3 0.7-0.5 1-0.8l46.6-35.3c12-9.1 28.6-9.1 40.6 0l36 27c37.8 28.5 89.9 28.5 127.8 0l36.1-27c12-9.1 28.6-9.1 40.6 0l36.1 27c5.3 4 11 7.5 16.9 10.4 0.7-27.3 4.9-53.7 12.3-78.7z"  ></path></symbol><symbol id="icon-020406guanwangyujingfenxigongju" viewBox="0 0 1024 1024"><path d="M771.9 560.9c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.2-163.5 163.5-163.5S935.4 691 935.4 782.3s-72.1 163.5-163.5 163.5z"  ></path><path d="M834.4 710.1l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM512 403.9h0.2c22 0 33 11 33 33V548c0 22-11 33-33 33h-0.2c-22 0-33-11-33-33V437c-0.1-22.1 11-33.1 33-33.1z m0 222.3h0.2c22 0 33 11 33 33s-11 33-33 33h-0.2c-22 0-33-11-33-33-0.1-22 11-33 33-33zM65.5 459.6h57.6c22 0 33 11 33 33s-11 33-33 33H65.5c-22 0-33-11-33-33s11-33 33-33z m835.4 0h57.6c22 0 33 11 33 33s-11 33-33 33h-57.6c-22 0-33-11-33-33-0.1-22 11-33 33-33zM763.6 194.2l39.3-39.3c15.6-15.6 31.2-15.6 46.8 0 15.6 15.6 15.6 31.2 0 46.8L810.4 241c-15.6 15.6-31.2 15.6-46.8 0-15.6-15.5-15.6-31.2 0-46.8z m-589.5-39.3c15.6-15.6 31.1-15.6 46.8 0l39.3 39.3c15.6 15.6 15.6 31.1 0 46.8-15.6 15.6-31.2 15.6-46.8 0l-39.3-39.3c-15.5-15.7-15.5-31.2 0-46.8zM512 13.1h0.2c22 0 33 11 33 33v57.6c0 22-11 33-33 33h-0.2c-22 0-33-11-33-33V46.2c-0.1-22 11-33.1 33-33.1z"  ></path><path d="M560.9 905.9H267.2v-22.4c0-12.2 9.8-22.2 22-22.4h251.1c-7.1-20.9-11.5-43-12.7-66H323.5V492.6c0.7-103.7 84.6-187.6 188.5-188.3 104.1 0.2 188.6 84.3 189.3 188.4v55.2c21-6.3 43.1-9.9 66-10.3v-45c0-141.1-114.3-255.3-255.3-255.3-141.1 0-255.3 114.3-255.3 255.3v308.3c-33.5 13.6-55.5 46-55.6 82.2v89H618c-22.9-18.4-42.2-40.9-57.1-66.2z"  ></path></symbol><symbol id="icon-010204xiangmutianbao" viewBox="0 0 1024 1024"><path d="M778.2 979.8h-605c-60.7 0-110-49.2-110-110v-715c0-60.7 49.2-110 110-110h605c60.7 0 110 49.2 110 110v247.5c0 15.2-12.3 27.5-27.5 27.5s-27.5-12.3-27.5-27.5v-247c0-30.4-24.6-55-55-55h-605c-30.4 0-55 24.6-55 55v715c0 30.4 24.6 55 55 55h605c30.4 0 55-24.6 55-55v-83c0-15.2 12.3-27.5 27.5-27.5s27.5 12.3 27.5 27.5v81.9c0.3 60.7-48.7 110.2-109.4 110.5-0.2 0.1-0.4 0.1-0.6 0.1z"  ></path><path d="M723.7 292.3h-495c-15.2 0-27.5-12.3-27.5-27.5s12.3-27.5 27.5-27.5h495c15.2 0 27.5 12.3 27.5 27.5s-12.3 27.5-27.5 27.5z m-55 220h-440c-15.2 0-27.5-12.3-27.5-27.5s12.3-27.5 27.5-27.5h440c15.2 0 27.5 12.3 27.5 27.5s-12.3 27.5-27.5 27.5z m-219.9 220h-220c-15.2 0-27.5-12.3-27.5-27.5s12.3-27.5 27.5-27.5h220c15.2 0 27.5 12.3 27.5 27.5-0.1 15.2-12.4 27.5-27.5 27.5z m511.4-187.6c-1.1-5.7-2.7-11.2-4.9-16.5-5.6-12.2-13-23.6-22-33.5-8.1-9.4-17.8-17.4-28.6-23.6-5.1-2.7-10.4-4.9-15.9-6.6-6.6-1.9-13.5-3-20.3-3.3h-2.7c-16.7 0.1-32.8 5.9-45.6 16.5l-12.6 11.5-11 10.4-3.3 2.7-28 25.3-84.1 86.9-31.9 33-28.6 29.7-22 23.1-9.3 9.9c-5 5-9.4 10.6-13.2 16.5-3 4.7-5.5 9.7-7.7 14.8-2.8 5.9-5.2 11.9-7.1 18.1l-6.6 22.5-6.6 22.5c-2.1 7.2-3.8 14.6-4.9 22-3.5 15.8 0.1 32.2 9.9 45.1 9.7 12.1 24.6 18.8 40.1 18.1h7.1l19.2-4.4 24.2-7.1 23.6-8.2 19.2-8.2c6.5-2.9 12.6-6.6 18.1-11l10.4-8.8 12.1-12.1 20.9-22 27.5-28.6 31.3-32.4 84.1-86.9 26.9-28 7.7-7.7 6-6 8.8-9.3c6-6.8 10.7-14.6 13.7-23.1 2.9-7.9 4.4-16.3 4.4-24.7 1.1-5.5 1.7-11 1.7-16.6zM780.9 721.8l-31.3 32.4-28 29.1-20.9 21.4-9.9 9.9-8.8 7.7c-3.2 2.6-6.7 4.8-10.4 6.6l-15.9 6.6-22 7.7-22 6.6-15.4 3.8h-4.4c-3.6 0.5-7.3-0.8-9.9-3.3-1.9-4.8-1.9-10.1 0-14.8 1-5.6 2.2-11.1 3.8-16.5l6-22 6.6-21.4c1.3-4.5 3-8.9 4.9-13.2 1.5-3.6 3.4-7.1 5.5-10.4 2.4-3.8 5.2-7.3 8.2-10.4l11-11.5 21.4-22.5 28.6-29.7 31.9-33L794 558l73.1 75.9-86.2 87.9z m140.8-147.9c-1.4 3.6-3.4 7-6 9.9l-8.2 8.2-6.6 6.6-6 5.5-74.9-75.3 11-11 11-9.9c3.4-2.7 7.4-4.8 11.5-6H875l9.3 3.8c6.9 4.1 13 9.3 18.1 15.4 6.3 6.9 11.5 14.7 15.4 23.1 0.3 2.7 0.3 5.5 0 8.2 0.3 3.3 0.3 6.6 0 9.9 2.1 3.6 3.5 7.5 3.9 11.6z"  ></path></symbol><symbol id="icon-020403guanwangyunyingpinggugongju-sc" viewBox="0 0 1024 1024"><path d="M738.1 531.2c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5S646.7 589 738.1 589s163.5 72.2 163.5 163.5-72.1 163.6-163.5 163.6z" fill="#062F8C" ></path><path d="M800.6 680.4l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6z" fill="#E60012" ></path><path d="M932.5 469.1h30.8v-45H742.9l0.8 47.6 30 3.5-0.2 21.7c59.1 6 114.1 30.4 158.6 70.3l0.4-98.1zM545.5 578c13.8-13.8 28.8-26 45.1-36.7-2.4-74-5.7-161.5-9.1-189.2-6-51.2-36.9-215.2-238.8-213.4C141 140.4 107.3 312.2 99.5 357.2S87.1 565.1 87.1 565.1H60.7V611l220.3 0.8v-43.1h-24.7v-178s-2.7-90.8 91.7-90c94.3 0.9 84.6 101.4 84.6 101.4l4.5 330.5s1.1 81.9 47.8 152.9c-14.2-34-21.7-70.7-21.7-108.6 0-75.2 29.3-145.8 82.3-198.9z" fill="#062F8C" ></path><path d="M60.8 645.6h33.5v305s45.8 31.7 154.2 0V651.7l30.9-2.7v-47.6H60.8v44.2z m902.3-368.4h-31.6l1-204.5s-58.1-30-156.9 0l0.8 208.9-34.4 0.9v42.3h221.2v-47.7h-0.1v0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-0303jianceku" viewBox="0 0 1024 1024"><path d="M989.9 768.3V92H34.1v676.3H393v112.1h-98.2V932h453.8v-51.6h-94.9V768.3h336.2z m-904-624.7h852.4v572.8H85.9V143.6z m515.9 736.8h-157V768.3h157.1v112.1h-0.1z"  ></path><path d="M631.5 202.66666668l-43.1 238.4-79 1.6-13.3 39.8-99.5-252.3-78.2 222.2-6.2 26.4-17.4-43.4H152.9v51.6h106.7L325.1 650.66666668l42.6-182.2 31.8-90.2 100.3 254.8 46.9-139.7 84.9-1.8 15.6-86.1 29 82.8 194.3 2 0.5-51.6-158-1.4L631.5 202.66666668z"  ></path></symbol><symbol id="icon-020501paishuihutaizhang-sc" viewBox="0 0 1024 1024"><path d="M309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z" fill="#062F8C" ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z" fill="#062F8C" ></path><path d="M970.7 1018.8l-0.7-7.3c-6.5-72-68.3-128.4-140.6-128.4s-134.1 56.4-140.6 128.4l-0.7 7.3H645l0.7-8.6c5.1-66.7 46.3-125.3 106.5-153.1-13.9-10.3-25.7-23.2-34.6-38-12-19.9-18.3-42.8-18.3-66.1 0-71.8 58.4-130.1 130.1-130.1S959.6 681.2 959.6 753c0 23.3-6.3 46.2-18.3 66.1-8.9 14.8-20.7 27.7-34.6 38 60.2 27.8 101.4 86.4 106.5 153.1l0.7 8.6h-43.2zM829.5 666c-48 0-87 39-87 87s39 87 87 87 87-39 87-87-39.1-87-87-87z" fill="#E60012" ></path></symbol><symbol id="icon-020501paishuihutaizhang" viewBox="0 0 1024 1024"><path d="M309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z"  ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7zM970.7 1018.8l-0.7-7.3c-6.5-72-68.3-128.4-140.6-128.4s-134.1 56.4-140.6 128.4l-0.7 7.3H645l0.7-8.6c5.1-66.7 46.3-125.3 106.5-153.1-13.9-10.3-25.7-23.2-34.6-38-12-19.9-18.3-42.8-18.3-66.1 0-71.8 58.4-130.1 130.1-130.1S959.6 681.2 959.6 753c0 23.3-6.3 46.2-18.3 66.1-8.9 14.8-20.7 27.7-34.6 38 60.2 27.8 101.4 86.4 106.5 153.1l0.7 8.6h-43.2zM829.5 666c-48 0-87 39-87 87s39 87 87 87 87-39 87-87-39.1-87-87-87z"  ></path></symbol><symbol id="icon-020407nenghaofenxigongju-sc" viewBox="0 0 1024 1024"><path d="M512 961.7C264 961.7 62.3 760 62.3 512S264 62.3 512 62.3 961.7 264 961.7 512 760 961.7 512 961.7z m0-854.5c-223.2 0-404.8 181.6-404.8 404.8S288.8 916.8 512 916.8 916.8 735.2 916.8 512 735.2 107.2 512 107.2z" fill="#062F8C" ></path><path d="M750.2 432c-7.2-14.1-21.4-23.4-38.1-24.9l-112.8-0.9L629 258.4l0.1-0.3c0.2-1.1 0.4-2 0.4-2.5v-0.8c1.9-17.4-2.1-31.8-11.9-42.8l-0.3-0.3-0.2-0.2c-9-9.5-21.7-15-34.9-15h-1c-9.6 0.3-19.2 3-27.7 7.6-4 2.2-7.7 5.2-10.9 9L280.3 523.5c-11.8 13.9-14.1 33.4-6 49.7l0.5 0.8c7.9 14.8 23.8 23.6 42.4 23.7h2.2l0.7-0.1h89.3l-57.2 165.5c-0.9 2.7-1.5 5.4-1.8 7.9v0.3c-1.7 13.3 2.3 26.8 11 37.1l0.8 0.9c8.8 9.6 21.4 15.1 34.6 15.1h0.8c7.6-0.2 15-1.7 22.1-4.7l0.4-0.1c5.1-2 9.9-5.3 13.9-9.5l303.3-321h2.2l6.6-10c9.7-14.8 11.3-32.4 4.1-47.1zM442.8 736.1l-28.4-17.2 57.1-165.4H313.1L547.7 276l29.6 14.2-32.2 160.1 166.7 1.1-269 284.7z" fill="#E60012" ></path></symbol><symbol id="icon-020203yilaodianfenxigongju" viewBox="0 0 1024 1024"><path d="M955 760.4s-97.6 70-194.4 70c-92.4 0-148.9-70-229.7-70-105.8 0-189.9 70-265 70-92.4 0-212.4-87.2-212.4-87.2-12.8-11.6-21.8-28.9-17.9-34.7 7.7-12.2 14.7-28.9 35.2-17.4 0 0 115.4 87.2 194.4 87.2 75.7 0 148.9-70 265-70 80.2 0 143 70 229.7 70 106.6 0 194.4-70 194.4-70 16-11.5 32.1 3.2 35.2 17.4 2.8 8.4-10.7 24.4-34.5 34.7zM70.8 813s115.4 87.2 194.4 87.2c75.7 0 148.9-70 265-70 80.2 0 143 70 229.7 70 106.6 0 194.4-70 194.4-70 16-11.5 32.1 3.2 35.2 17.4 1.9 8.4-11.5 24.4-35.2 34.6 0 0-97.6 70-194.4 70-92.4 0-148.9-70-229.7-70-105.8 0-189.9 70-265 70-92.4 0-212.4-87.2-212.4-87.2C40 853.5 31 836.1 34.9 830.4c8.3-12.3 15.4-29.5 35.9-17.4z"  ></path><path d="M759.1 720.8c-62.8 0-105.6-24.5-143.4-46.2-35.9-20.5-66.8-38.2-112.9-38.2-55.3 0-97.7 26.1-135.1 49-30.9 19-57.5 35.3-87.1 35.3-64.2 0-102.4-39.7-104-41.4l-6.8-7.3V502.3H45.3L501.8 71.7l146.5 132.2v-55.4H767v163l211.7 190.9H852.6v167.1l-4.1 6.2c-13.4 20.8-61.8 45.1-89.4 45.1zM502.8 586c59.6 0 99.4 22.8 137.9 45 35.5 20.3 69 39.5 118.4 39.5 8.9 0 32.3-11 43.1-18.8V452h45.3L716.6 333.8v-135h-17.9v118.4l-196.2-177L172.2 452h48v198.6c10.2 7.7 31.2 19.8 60.5 19.8 15.3 0 36.4-13 60.7-27.9 41-25.1 91.9-56.5 161.4-56.5z"  ></path></symbol><symbol id="icon-020206hedaomonigongju" viewBox="0 0 1024 1024"><path d="M811.9 486.8c0.7 4-0.2-1.4-0.3-1.8-0.2-1-0.4-2.1-0.6-3.2-1.2-6-2.8-11.8-4.9-17.4-0.1-0.2-0.2-0.4-0.2-0.6-0.3-0.4-0.5-0.8-0.6-1.3-0.3-0.6-0.5-1.1-0.7-1.6-1-2.2-2.1-4.4-3.3-6.5-1.4-2.6-2.8-5.1-4.5-7.5-0.6-1.1-1.4-2.2-2.1-3.2 0.1 0 0.1 0 0.2 0.2l-0.5-0.5s0.1 0 0.1 0.2 0 0 0.1 0.2c-2.1-1.6-2-1.9-1.2-1.4-1.3-1.3-2.5-3-3.6-4.3-3.3-3.8-6.5-7.5-9.7-11.3-63.3-75.8-69.3-184.1-14.8-266.4 14.4-19 30.3-36.7 47.6-53 13.4-13.7 26.8-27.2 40.2-40.9 9.2-8.8 23.6-8.9 32.9-0.3 9.2 8.5 22.4 24.2 14 32.9l-3.4 3.3c-16.2 16.4-32.3 32.9-48.5 49.4-4.9 4.9-9.7 9.6-14.5 14.6-2.6 2.7-5.1 5.3-7.5 8.1-1.6 1.7-2.9 3.5-4.4 5.3-0.6 0.7-1 1.6-1.6 2.2-6.2 8.5-11.5 17.6-16 27.2-0.7 1.4-1.4 2.9-2 4.3-0.5 1-0.9 1.9-1.3 2.9 0.4-0.8 0.7-1.7 1.1-2.7-1.2 2.1-2 4.4-2.6 6.8-1.8 4.9-3.3 9.7-4.7 14.6-2.1 7.6-3.8 15.4-5 23.3v0.5c-0.2 1.4-0.4 2.8-0.5 4.2a192 192 0 0 0-0.6 33.9c0.2 2.8 0.4 5.7 0.7 8.5 0.1 1.3 0.3 2.5 0.5 3.8 0.8 5.3 1.9 10.6 3.1 15.8 1.4 5.7 3 11.1 4.8 16.7 0.8 2.4 1.6 4.8 2.5 7 0.4 1 0.7 1.9 1.1 2.9 4.4 9.9 9.5 19.4 15.4 28.5 1.2 1.8 2.5 4 3.9 5.9 0.4 0.4 0.6 0.8 0.9 1.3 0.8 1 1.6 2.1 2.5 3 1.5 1.7 3.1 3.5 4.6 5.3 3.3 3.8 6.6 7.3 9.7 11.1 32.3 38.3 42.6 90.6 27.2 138.3-3.7 11.5-8.8 22.5-15.3 32.6-6.9 9.5-14.5 18.6-22.7 27.2-1.7 1.8-3.4 3.9-5 5.9l-1.9 2.5c0.6-0.7 1.1-1.6 1.7-2.2-0.7 0.7-1.4 1.6-1.9 2.5-3.1 4.3-5.9 8.6-8.6 13.1-2.7 4.5-5.2 9.2-7.5 14-0.6 1.4-1.6 3-2.3 4.9 0-0.3 0 0-0.3 0.6l0.3-0.6c0 0.2-0.1 0.3-0.5 1.3l-1.5 3.8c-3.8 9.8-6.7 20-8.8 30.4-0.6 3.2-1.1 6.5-1.7 9.7l-0.2 0.8-0.3 2.1c-1.2 11.3-1.6 22.6-0.9 33.9l0.6 7.5c0.1 1.6 0.2 2.9 0.4 4.3 0-0.2 0-0.2-0.1-0.3 0.7 2.9 1.3 6 1.5 9.1 0.5 2.4 1 5 1.6 7.3 1.2 5.4 2.7 10.7 4.4 16.1 0.9 2.7 1.7 5.1 2.7 7.8 0.5 1.4 1 2.7 1.5 3.9 1.7 4.8 3.9 9.5 6.6 13.8 2.7 5 5.6 9.9 8.7 14.6 1.5 2.4 3 4.5 4.6 6.7 0.7 0.8 1.3 1.7 1.9 2.7-0.2-0.4-0.5-0.7-0.6-1.1 0.1 0.3 0.3 0.5 0.5 0.7 3.6 4.5 7.3 8.9 11.1 13.2L911 924c8.5 9.7-5 23-14 32.9-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-0.8-1.1-1.7-1.9-2.5-2.9l-81.5-94.6c-26.2-30-43.4-66.8-49.7-106.2-8.1-48.9 0-99.1 23-143 5.7-10.5 12.3-20.4 19.8-29.7 6.4-8.1 13.9-15.3 20.5-23.1 0.1-0.1 0.1-0.2 0.2-0.3 0.8-1.3 1.8-2.5 2.6-3.8 1.3-2.1 2.5-4.2 3.6-6.2 1.1-1.9 2.3-4.2 3.3-6.2 0.6-1.1 1.1-2.2 1.6-3.3 1.9-5.2 3.6-10.6 4.9-16.1 0.6-2.5 0.9-5 1.4-7.5l0.3-3.3c0.5-6.2 0.6-12.4 0.1-18.5l-0.3-3.3m-22.4 250.5c1.5 4 0.2 2.1 0 0z m-68.6-236.6c-14 15.9-28.2 31.5-42.2 47.3l-86.9 97.2L491 759.5c-27.8 31.2-55.5 62.3-83.4 93.3l-34.9 38.9c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-15.9 28.2-31.4 42.2-47.3l86.9-97c33.4-37.5 66.9-75 100.5-112.4 27.8-31.2 55.6-62.2 83.4-93.3l34.8-38.9c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9 0.1 0.3-0.1 0.4-0.3 0.7z m-15-401.5c-14 15.9-28.3 31.7-42.5 47.4l-87.5 97.9c-33.6 37.6-67.2 75.3-100.9 112.8-27.9 31.1-55.9 62.4-83.7 93.5-11.6 12.9-23.3 26.1-34.9 39-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14-16.1 28.3-31.7 42.5-47.6 29.2-32.5 58.4-65.3 87.6-97.8 33.6-37.6 67.2-75.3 100.9-112.9 27.9-31.1 55.8-62.2 83.7-93.5 11.6-12.9 23.3-26.1 34.9-38.9 9-8.8 23.5-8.8 32.5 0 8.7 9.2 8.7 23.6 0 32.8-0.4 0.3-0.5 0.6-0.7 0.9zM584.7 99c-10.6 12.1-21.7 24.2-32.6 36.4L485.5 210c-25.9 28.8-51.7 57.7-77.5 86.6-21.3 23.9-42.6 47.6-64 71.5-8.9 10-17.8 19.9-26.7 29.8-9 8.8-23.5 8.8-32.5 0-8.8-9.2-8.8-23.7 0-32.9l0.5-0.5c10.6-12.3 21.7-24.2 32.6-36.5 22.2-24.8 44.4-49.7 66.6-74.5 25.9-29 51.7-57.9 77.5-86.8 21.3-23.7 42.7-47.6 64-71.5 8.9-10 17.8-19.9 26.7-29.8 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9l-0.5 0.7z m-146.4 24.3l-94.8 105.4c-19.8 22-39.6 44.1-59.5 66.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.7 0-32.9 7.2-8 14.5-16.1 21.7-24.1L368 132.5l59.5-66.1c9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9l-21.7 24z m-234.4 55.5c0.2-0.2 0.4-0.4 0.5-0.6-0.1 0.3-0.3 0.6-0.6 0.8l-2.3 3.2c-6 8.4-11.1 17.4-15.5 26.6-0.8 1.6-1.5 3.3-2.3 5 0.1-0.1 0.1-0.3 0.1-0.5-0.8 2.6-1.8 5-2.9 7.5-1.6 4.6-3.1 9.4-4.4 14-1.6 5.5-2.8 11.1-3.9 16.7l-0.9 6.9-0.1 1c-0.2 1.1-0.3 2.2-0.4 3.3-1.1 11.2-1.3 22.4-0.6 33.6 0.2 3 0.5 6.2 0.8 9.2v0.3c0-0.3 0-0.3-0.2-0.7 0.3 1.1 0.3 2.2 0.5 3.3 0.8 5.6 1.9 11 3.2 16.3 1.3 5.3 2.8 10.6 4.5 15.8 0.8 2.7 1.7 5.1 2.7 7.8l1.1 2.8 0.3 0.6c4.3 9.5 9.3 18.8 14.9 27.6 1.6 2.2 3.1 4.6 4.8 6.8 0.9 1.1 1.7 2.1 2.5 3.2 1.5 1.8 3.1 3.6 4.6 5.3l10.2 11.8c32.4 38.4 42.8 90.8 27.3 138.6-3.6 11.2-8.6 21.9-15 31.9-6.6 9.5-14 18.4-21.9 26.6-2.1 2.4-4.1 4.6-6.1 7.1-0.6 0.6-1 1.3-1.5 1.9-0.1 0.3-0.3 0.5-0.5 0.7-2.8 3.9-5.4 7.8-7.8 11.8-2.8 4.8-5.6 9.7-8 14.6-1 2.2-2 4.5-3 6.5-0.1 0.1-0.2 0.3-0.2 0.5l-1.2 3c-3.9 10.1-6.9 20.6-9.1 31.2-0.6 2.9-1.1 5.9-1.6 8.9 0 0.3 0 0.7-0.1 1.1 0-0.6 0-0.7 0.1-1.6-0.1 1.1-0.3 2.2-0.4 3.3-0.6 5.6-1 11.1-1.2 16.7-0.2 5.6-0.1 11.5 0.2 17 0.1 2.9 0.3 5.7 0.6 8.5l0.3 3.3c0.1 1.1 0.3 2.2 0.4 3.3-0.2-0.9-0.4-1.8-0.4-2.8 0.3 5.6 1.4 11.1 3.1 16.4 1.2 5.1 2.6 10.2 4.2 15.3 0.9 2.8 1.9 5.7 2.9 8.5 0.5 1.4 1 2.5 1.5 3.9v0.2c1.6 4.5 3.7 8.9 6.2 12.9 2.8 5.3 5.7 10.5 9 15.5 1.3 1.9 2.7 4 4.1 5.9l1.3 1.7c0.2 0.3 0.4 0.5 0.6 0.7 3.9 4.8 7.9 9.4 11.8 13.8l77.7 90.2c8.7 9.3 8.7 23.7 0 32.9-14.1 9-32.2 9-46.5 0-0.8-1-1.7-1.9-2.5-2.9-27.2-31.5-54.3-63.1-81.5-94.6-26.4-30.3-43.7-67.4-49.8-107-7.7-48.7 0.4-98.6 23.2-142.4 5.7-10.5 12.4-20.4 19.8-29.7 6.5-8.4 14.1-15.5 20.7-23.6l0.8-1.3c0.6-0.8 1.1-1.7 1.7-2.7 1.4-2.2 2.7-4.5 4-6.7 1.3-2.2 2.4-4.8 3.5-7.1 0.4-1 0.8-2 1.3-2.9-2.9 5.4-0.5 1 0-0.5 1.9-5 3.4-10.3 4.5-15.6 0.6-2.1 1.1-4.3 1.4-6.5v-0.2c0.1-1.7 0.3-3.3 0.4-5 0.4-5.6 0.4-11.3 0-16.9-0.1-1.8-0.3-3.3-0.4-5v-0.6c-0.3-2.2-0.7-4.4-1.3-6.5-1.2-5.3-2.8-10.6-4.6-15.8-0.2-0.5-0.5-1-0.7-1.6 0.2 0.4 0.4 0.7 0.6 1.1-0.5-0.8-0.9-2.1-1.3-2.9-1.2-2.5-2.4-4.9-3.7-7.3-1.6-2.8-3.2-5.6-5-8.3-0.6-0.8-1.1-1.6-1.6-2.2 0-0.2 0 0 0 0-1.5-1.8-3-3.6-4.5-5.3-3.3-3.8-6.5-7.5-9.7-11.3-63.6-74.8-69.8-182.8-15.7-265.2 14.5-19.2 30.6-37.1 48.2-53.5l40.2-40.9c14.2-8.8 32.2-8.8 46.5 0 8.8 9.2 8.8 23.7 0 32.9l-3.4 3.5-48.6 49.3c-4.8 5-9.7 9.7-14.5 14.8-2.5 2.7-5 5.4-7.4 8.1-1 1.3-2.4 2.8-3.5 4.2m-20.7 35.6c-1 4.1-0.7 1.7 0 0z m-12.4 92c0.9 4.2 0.2 1.6 0 0z m0.4 385.2c-0.2 2.3-0.2 1.3 0 0z m430.7-333.4l-89.5 100.7C478.4 497.3 444 536.2 409.3 575c-28.6 32.2-57.2 64.4-85.8 96.5-11.8 13.4-23.7 26.8-35.6 40.1-9.1 8.9-23.6 8.8-32.6-0.2-8.7-9.2-8.7-23.7 0-32.9 0.2-0.3 0.4-0.5 0.6-0.7 14.3-16.4 29.1-32.6 43.6-48.9l89.6-100.7c34.6-38.7 69.1-77.6 103.6-116.4 28.6-32.2 57.2-64.4 85.8-96.5 11.8-13.4 23.7-26.8 35.6-40.1 9-8.9 23.5-8.9 32.5 0 8.7 9.2 8.7 23.7 0 32.9-0.2 0.3-0.4 0.5-0.6 0.7-14.3 16.4-29.1 32.6-43.6 48.9z m72.9 25.5c8.7 9.2 8.7 23.6 0 32.8-0.2 0.3-0.4 0.5-0.6 0.7-14.6 16.4-29.6 32.3-44.2 48.6l-91.3 100.1-105.3 115.2-87 95.4-36.4 39.8c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 0.3-0.2 0.5-0.5 0.6-0.7 14.6-16.3 29.6-32.2 44.2-48.4 30.4-33.3 60.8-66.6 91.3-100.1 35.1-38.6 70.1-76.9 105.2-115.4l87-95.5c12.1-13.2 24.3-26.5 36.4-39.8 9-8.8 23.5-8.8 32.6 0.2-0.1-0.1-0.1-0.1 0 0zM443.9 893.4c39.2-43.9 78.4-87.9 117.7-131.7l74.4-83.3c9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-9.1 10-18.1 20.2-27.2 30.4-39.2 43.9-78.4 87.9-117.7 131.7l-74.4 83.1c-8.9 9-23.4 9-32.4 0.1l-0.1-0.1c-8.8-9.2-8.8-23.7 0-32.9 9.1-10 18.1-20.2 27.2-30.2z m117 15.6c26.3-29.4 52.6-58.8 79-88.2 9-8.9 23.5-8.9 32.5 0 8.8 9.2 8.8 23.7 0 32.9-3.7 4.2-7.5 8.4-11.1 12.6-26.3 29.3-52.6 58.7-79 88.1-9 8.9-23.5 8.9-32.5 0-8.7-9.2-8.7-23.6 0-32.8 3.7-4.5 7.4-8.6 11.1-12.6z m138.4-17.2c9-8.9 23.5-8.9 32.5 0 8.7 9.3 8.7 23.7 0 32.9-9.2 11.3-18.3 22.6-27.4 33.9-9 8.9-23.5 8.9-32.5 0-8.7-9.3-8.7-23.7 0-32.9 9.1-11.3 18.2-22.6 27.4-33.9z"  ></path></symbol><symbol id="icon-020405changzhanyunyingpinggugongju-sc" viewBox="0 0 1024 1024"><path d="M771.9 560.9c-120.3 0-221.3 101.1-221.3 221.3 0 120.3 101.1 221.3 221.3 221.3 120.3 0 221.3-101.1 221.3-221.3s-96.3-221.3-221.3-221.3z m0 384.9c-91.4 0-163.5-72.2-163.5-163.5s72.2-163.5 163.5-163.5S935.4 691 935.4 782.3s-72.1 163.5-163.5 163.5z" fill="#062F8C" ></path><path d="M834.4 710.1l-81.8 81.7-38.5-38.5c-9.7-9.7-28.9-9.7-38.5 0-9.7 9.7-9.7 28.9 0 38.5l62.5 62.5c9.7 9.7 28.9 9.7 38.5 0l101.1-101.1c9.7-9.7 9.7-28.9 0-38.5-14.4-14.3-33.6-14.3-43.3-4.6zM308.3 683.2l7.5-5.6c20.3-15.8 44.5-25.7 69.9-28.7V438.5h-78.5v244.2l1.1 0.5z" fill="#E60012" ></path><path d="M819.8 511.6c25.2 3.9 49.4 11 72.1 20.8V169.1h-137V62.5H271.6v106.6H134.7v481.8c24.1-4.5 48.9-2.8 72.1 5.1V241.2h612.9l0.1 270.4z m-137-342.5h-339v-34.5h339v34.5z" fill="#062F8C" ></path><path d="M718.9 513.1v-74.6h-78.5v100.9c24.5-12.2 50.8-21.1 78.5-26.3zM500.1 687.4c12.7-29.1 29.8-55.7 50.6-79.1V407.2h-78.5v260.7c5.2 2.9 10.1 6.2 14.9 9.7l13 9.8z" fill="#E60012" ></path><path d="M479.1 854.1l-13.7-10.3c-37.8-28.5-89.9-28.5-127.8 0l-36.1 27c-12 9-28.6 9-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0l-46.6 35.3c-16.1 11.8-19.5 34.4-7.7 50.4 11.8 16.1 34.4 19.5 50.4 7.7 0.3-0.2 0.6-0.5 0.9-0.7l46.6-35.3c12-9 28.6-9 40.6 0l35.9 27c37.8 28.5 89.9 28.5 127.7 0l36.1-27c12-9 28.6-9 40.6 0l35.1 26.7c16.3 12.1 35.2 19.1 54.5 20.9-15.6-29-26.7-60.9-32.1-94.7z" fill="#062F8C" ></path><path d="M487.5 722l-21.6-16.2c-37.8-28.5-89.9-28.5-127.7 0l-36.1 27c-12 9.1-28.6 9.1-40.6 0l-36.1-27c-37.8-28.5-89.9-28.5-127.7 0L51 741.1l-0.2 0.2c-16 11.8-19.5 34.4-7.7 50.4s34.4 19.5 50.4 7.7c0.4-0.3 0.7-0.5 1-0.8l46.6-35.3c12-9.1 28.6-9.1 40.6 0l36 27c37.8 28.5 89.9 28.5 127.8 0l36.1-27c12-9.1 28.6-9.1 40.6 0l36.1 27c5.3 4 11 7.5 16.9 10.4 0.7-27.3 4.9-53.7 12.3-78.7z" fill="#062F8C" ></path></symbol><symbol id="icon-030101xiangmushujuku" viewBox="0 0 1024 1024"><path d="M196.6 397.1h344.2c15.8 0 28.8 12.8 28.8 28.8 0 15.9-12.8 28.8-28.8 28.8H196.6c-15.8 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8z m516.1 57.3c-15.8 0-28.8-12.8-28.8-28.8s12.8-28.8 28.8-28.8 28.8 12.8 28.8 28.8-12.9 28.8-28.8 28.8z m-602.3 57.5h688.4v57.4H110.4v-57.4z"  ></path><path d="M569.3 888.8c0-1.3 0-2.7 0.1-4H167.8c-31.7 0-57.4-25.7-57.4-57.4V253.7c0-31.7 25.7-57.3 57.4-57.4h573.7c31.7 0 57.4 25.7 57.4 57.4v322.1c18.5-5.8 37.6-10 57.3-12.5V253.7c0-63.3-51.3-114.7-114.7-114.7H225.1c0-31.7 25.7-57.4 57.4-57.4h573.7c31.7 0 57.4 25.7 57.4 57.4v422.2c19.6 1 38.7 3.6 57.2 7.9V139c0-63.3-51.3-114.7-114.7-114.7H282.4c-63.3 0-114.7 51.3-114.7 114.7-63.3 0.1-114.6 51.3-114.6 114.7v573.7c0 63.3 51.3 114.7 114.7 114.7h405.8c-2.8-17.3-4.3-35.1-4.3-53.3z"  ></path><path d="M816 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S693.3 921 658.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path></symbol><symbol id="icon-030102renwushujuku" viewBox="0 0 1024 1024"><path d="M126.4 865.4V131.8c-1.4-19.2 13-35.8 32.1-37.3H842c19.2 1.3 33.6 17.9 32.3 37.1v253h62.1V131.8c1.4-53.5-40.9-98-94.4-99.4H158.7c-53.5 1.4-95.8 45.8-94.4 99.3v733.7c-1.4 53.2 40.6 97.4 93.7 98.7h393.3V902H158.7c-18.8-1-33.3-17-32.3-35.9v-0.7z"  ></path><path d="M454.4 262.8c-11.8-12-31-12.2-43-0.4l-0.4 0.4-105 93.8-40.4-34.2c-13.3-11.3-33.3-9.7-44.7 3.6 0 0 0 0.1-0.1 0.1-11 12.7-9.6 31.9 3.1 42.9 0.2 0.2 0.4 0.4 0.6 0.5l62.1 52.2c11.7 10.3 29.3 10.3 41 0l124.2-114.3c13-11.2 14.5-30.8 3.3-43.8-0.2-0.1-0.4-0.5-0.7-0.8z m-43.5 228.6l-105 95.7-40.4-34.2c-13-11.1-32.6-9.6-43.8 3.4s-9.6 32.6 3.4 43.8l62.1 52.2c5.6 4.7 12.6 7.3 19.9 7.5 7.9 0 15.5-3.1 21.1-8.7l124.2-114.3c14.1-9.8 17.6-29.1 7.8-43.2-9.8-14.1-29.1-17.6-43.2-7.8-2.2 1.6-4.3 3.5-6.1 5.6z m182.6-211.8c-17.2 0-31.1 13.9-31.1 31.1s13.9 31.1 31.1 31.1h186.3c17.2 0 31.1-13.9 31.1-31.1-0.3-17-14-30.7-31.1-31.1H593.5zM795.3 518.5c-114.7 0-175.2 31.8-175.2 47.8 0 16 60.5 47.8 175.2 47.8s175.2-31.8 175.2-47.8c-0.1-16-60.7-47.8-175.2-47.8z m175.1 156.1v-64.5C931.6 633.4 862.7 646 795.2 646S658.8 633.4 620 610.1v64.5c0 15.9 60.5 47.8 175.2 47.8s175.2-31.9 175.2-47.8z m0 108.3v-64.5c-38.8 23.2-107.7 35.8-175.2 35.8S658.8 741.6 620 718.4v64.5c0 15.9 60.6 47.8 175.2 47.8s175.2-31.9 175.2-47.8z m0 101.9v-58.1c-38.8 23.3-107.7 35.9-175.2 35.9S658.8 849.9 620 826.7v58.1c0 15.9 60.6 47.8 175.2 47.8s175.2-31.9 175.2-47.8z m31.8 0c0 50.9-105.1 79.6-207.1 79.6S588 935.7 588 884.8V559.9h0.6c16-96.6 397-96.6 413 0h0.6v324.9z"  ></path></symbol><symbol id="icon-020409lianhetiaodugongju" viewBox="0 0 1024 1024"><path d="M890.4 190.7H386c-13.5-51.1-59.7-86.8-112.5-86.9-52.4 0.6-98 36.2-111.4 86.9h-28.6c-16.1-3.2-31.8 7.2-35 23.3s7.2 31.8 23.3 35c3.9 0.8 7.9 0.8 11.7 0h28.6c12.9 51.2 58.6 87.3 111.4 88.1 52.9-0.1 99.1-35.8 112.5-86.9h504.4c16.1-3.2 26.5-18.9 23.3-35-2.4-11.8-11.5-20.9-23.3-23.3v-1.2z m-616.9 88c-32.2 0-58.3-26.1-58.3-58.3s26.1-58.3 58.3-58.3 58.3 26.1 58.3 58.3-26.1 58.3-58.3 58.3z m616.9 495.1H386c-13.5-51.1-59.7-86.8-112.5-86.9-52.4 0.6-98 36.2-111.4 86.9h-28.6c-16.1-3.2-31.8 7.2-35 23.3-3.2 16.1 7.2 31.8 23.3 35 3.9 0.8 7.9 0.8 11.7 0h28.6c12.9 51.2 58.6 87.3 111.4 88.1 52.9-0.1 99.1-35.8 112.5-86.9h504.4c16.1 3.2 31.8-7.2 35-23.3 3.2-16.1-7.2-31.8-23.3-35-3.9-0.8-7.9-0.8-11.7 0v-1.2z m-616.9 88.1c-32.2 0-58.3-26.1-58.3-58.3s26.1-58.3 58.3-58.3 58.3 26.1 58.3 58.3c0 32.2-26.1 58.3-58.3 58.3zM133.6 482.3H638c13.5-51.1 59.7-86.8 112.5-86.9 52.4 0.6 98 36.2 111.4 86.9h28c16.1-3.2 31.8 7.2 35 23.3 3.2 16.1-7.2 31.8-23.3 35-3.9 0.8-7.9 0.8-11.7 0h-28c-12.9 51.2-58.6 87.3-111.4 88.1-52.9-0.1-99.1-35.8-112.5-86.9H133.6c-16.1 3.2-31.8-7.2-35-23.3s7.2-31.8 23.3-35c3.9-0.8 7.9-0.8 11.7 0v-1.2z m616.9 88c32.2 0 58.3-26.1 58.3-58.3s-26.1-58.3-58.3-58.3c-32.2 0-58.3 26.1-58.3 58.3s26.1 58.3 58.3 58.3z"  ></path></symbol><symbol id="icon-020304baojingtongjigongju-sc" viewBox="0 0 1024 1024"><path d="M512 251.7c19 0 28.8-9.9 28.8-30.3V99.6c0-20.5-9.9-30.3-28.8-30.3s-28.8 9.9-28.8 30.3v121.8c0.1 20.5 9.8 30.3 28.8 30.3zM764.9 331.1l80.2-85.5c11.3-12.1 11.3-31 0-43.1-11.4-12.1-29.5-12.1-40.9 0L724 288c-11.4 12.1-11.4 31 0 43.1s29.5 12.1 40.9 0zM260 331.9c11.4 12.1 29.5 12.1 40.9 0s11.4-31 0-43.1l-81-86.3c-11.4-12.1-29.5-12.1-40.9 0-11.3 12.1-11.3 31 0 43.1l81 86.3zM549.1 463.6L394.8 664.1h104.3l-29.5 159.7L624 623.2H518.8zM957 479.4H842c-15.9 0-28.8 13.7-28.8 30.3 0 16.7 12.9 30.3 28.8 30.3h114.2c15.9 0 28.8-13.7 28.8-30.3s-12.9-30.2-28-30.3zM210.8 509.7c0-16.6-12.8-30.2-28-30.3h-115C52 479.4 39 493.1 39 509.7c0 16.7 13 30.3 28.8 30.3H182c16 0 28.8-13.7 28.8-30.3z" fill="#E60012" ></path><path d="M544.3 954.7c-11.2-21.5-19.8-44.6-25.4-68.8H286.5V586.2C288 456.8 386.4 351.6 509 350.1c110.2-1.4 202.8 81.1 224 191.2 21-5 42.9-7.7 65.4-7.8C774.8 388.4 655.5 278.2 512 278.2c-160.4 0-290.6 137.7-290.6 308v303.4h-53.7c-18.9 0-28 10.6-28.8 30.3 0 20.5 9.9 30.3 28.8 30.3h53.7v4.5h322.9z" fill="#E60012" ></path><path d="M797.2 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7s6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.5 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H797.5c-0.3 0.2-0.6 0.2-0.8 0.2z m167.5-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-020301sheshishebeitongjigongju-sc" viewBox="0 0 1024 1024"><path d="M214.3 174c24-10.1 51.4 17.1 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.1-17.1-15.4-9.7-46.7 12.2-53.4z m111-0.1c24-10 51.4 17.2 41.3 41.3-6.6 22-38.2 29.5-53.6 12.2-17-15.5-9.5-46.8 12.3-53.5z m203.1 0.4c79.2-5.4 159.1-0.4 238.5-2.4 19.9 1.5 47.1-5.1 59.4 15.7 12.8 18.4-0.8 48.3-23.9 48.5-80.1 2.4-160.3 0-240.4 1.1-15.3-1.3-34.2 2.7-45.7-10.1-16.2-15.4-9.4-46.1 12.1-52.8zM214.3 451.5c24-10 51.4 17.3 41.3 41.3-6.6 22-38.1 29.3-53.5 12.1-17.2-15.4-9.7-46.6 12.2-53.4z m111 0c24-10 51.4 17.3 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.2-17.1-15.4-9.7-46.7 12.2-53.5z m203.1 0.4c79.2-5.4 159.1-0.4 238.5-2.4 19.9 1.5 47.2-5.1 59.4 15.7 15.1 22-6 53.6-32.1 49.2-86.1 0.1-172.2 1.4-258.3-0.6-33.1-0.6-38.9-52.8-7.5-61.9z m-314.1 268c24-10 51.4 17.2 41.3 41.3-6.6 21.9-38.1 29.3-53.5 12.1-17.2-15.5-9.7-46.6 12.2-53.4z m111 0c24-10 51.4 17.3 41.3 41.3-6.6 21.9-38.1 29.3-53.4 12.2-17.2-15.4-9.7-46.7 12.1-53.5z" fill="#E60012" ></path><path d="M550.5 880c-143.9-0.1-287.8 0.1-431.7 0.6 1.5-70.9 0.6-142 0.5-212.8 147.9 0.4 295.7 0.3 443.6 0.3 12-24.3 27.4-46.6 45.7-66.2-163.1-0.1-326.3-0.1-489.5 0.4 0.5-70.9 1.1-142-0.4-212.9 262 1 524.1 0.7 786.1 0.1-0.7 47.4-0.8 94.8-0.6 142.1 19.9 7.4 38.7 17 56.1 28.5-0.1-147.9-0.1-295.7 0.5-443.7-0.4-21.3 1.8-48.1-18.4-61.7-11.2-9.7-27.5-6-41.1-7.4-259.3 0.3-518.7 0.3-778.1-0.1-13.8 1.7-30.4-3-41.9 6.7-15.3 9.7-19.2 27-17.9 44 0.4 265.6 0.2 531.1 0.2 796.6-4.4 28.8 21.5 54.3 50.1 50.1h469.6c-13.6-19.9-24.7-41.5-32.8-64.6z m354.1-776.6c-0.6 73.1-0.2 146.2-0.4 219.3-261.6 0.4-523.2-0.2-784.7 0.3 0-73.3 0.3-146.5-0.2-219.8 261.7 0.7 523.5 0.2 785.3 0.2z" fill="#062F8C" ></path><path d="M805.3 1016.6h-0.6c-14.5 0-28.9-1.6-43.1-4.6-14.6-3.1-28.8-7.7-42.4-13.5-27-11.2-51.1-27.5-71.4-48.5-19.6-20.4-35-44-45.7-70.3-10.4-26.3-15.5-53.9-15.2-82.2-0.3-29.4 5.5-58.1 17.1-85.3 5.5-12.8 12-25.1 19.6-36.8 7.5-11.5 16-22.4 25.4-32.4 9.6-10 20.3-19.2 31.6-27.1l0.1-0.1c11.4-7.7 23.6-14.5 36.3-20l0.1-0.1h0.1c2.6-0.9 5.4-1.5 8.2-1.5 3.7 0 7.5 0.9 10.8 2.6 5.9 2.7 10.7 7.6 13.2 13.6l0.1 0.2c2.3 6 2.3 12.6 0 18.5-2.1 6.2-6.9 11.1-13.1 13.3-19.7 8.5-37.4 20.7-52.4 36-15.2 15.3-27.3 33-35.9 52.8-8.9 21-13.2 43.3-12.8 66.2 0.2 22.2 4.5 43.8 12.9 64.3 8.1 20.7 19.8 39.3 34.9 55.4 15.8 16.4 34.7 29 55.9 37.5h0.1c20.2 8.5 41.5 12.9 63.3 12.9h2.8c22.3 0 43.8-4.3 64.3-12.9 20.3-8.3 38.5-20.3 54.3-35.3 16.4-15.8 29-34.5 37.6-55.6 2.5-6.1 7.6-10.9 13.8-13.1 3-1.2 6-1.7 9.2-1.7s6.3 0.5 9.3 1.7l0.2 0.1 0.2 0.1c5.8 2.7 10.1 7.8 11.9 13.8 2.1 5.9 2.1 12.3-0.1 18.3l-0.1 0.1c-8.1 20.5-19.5 39.4-33.7 56.1-41.4 49.4-102.3 77.5-166.8 77.5z m-0.5-194.2c-6.3 0-12.3-2.4-17-6.8l-0.1-0.1c-4.7-4.7-7.3-11.4-7-18.1V603.2c-0.3-6.8 2.2-13.3 7-18.1l0.1-0.1c4.6-4.3 10.7-6.8 17-6.8h0.8c58.2 0.3 113.1 23.1 154.5 64.2 19.9 20.2 35.8 43.6 47 69.5 11.3 27.2 17 55.9 16.9 85.4 0.3 6.6-2.1 13.2-6.8 18l-0.1 0.1c-4.5 4.3-10.4 6.8-16.8 6.8H805.7c-0.4 0.2-0.7 0.2-0.9 0.2z m167.6-49.5c-2.3-17-7.3-33.4-14.7-49-8.1-16.9-18.9-32.1-32.2-45.3-13.4-13.2-28.7-24.2-45.5-32.5-15.7-7.7-32.5-12.9-49.8-15.5v142.2l142.2 0.1z" fill="#062F8C" ></path></symbol><symbol id="icon-0303rengongcaiyangku" viewBox="0 0 1024 1024"><path d="M771 410.9H252.8c-18.5 0-35.5-9.3-45.2-25-9.7-15.5-10.9-35-2.8-51.7 12.5-26 17.2-36.6 18.8-40.6C225.7 136.2 354.3 9.1 512 9.1c157.9 0 286.3 127.3 288.4 284.5 1.6 3.9 6.3 14.4 18.8 40.6 8.1 16.7 7 35.9-2.8 51.7-10 15.5-26.9 25-45.4 25zM512 61.1c-130.5 0-236.7 106.2-236.7 236.7 0 6.5 0 9.5-23.6 59.1 0 0.2-0.2 0.7 0 1.4s0.9 0.7 1.4 0.7h518.2c0.2 0 0.9 0 1.4-0.7 0.5-0.7 0.2-1.2 0-1.4-23.6-49.4-23.6-52.4-23.6-58.9C748.5 167.3 642.3 61.1 512 61.1zM223.4 297.6c0 0.2 0 0.2 0 0 0 0.2 0 0.2 0 0z m86 685.3c-13 0-24.1-9.5-25.7-22.7l-42-333.6c-1.9-14.1 8.3-27.1 22.5-29 14.1-1.9 27.1 8.3 29 22.5l42 333.6c1.9 14.1-8.3 27.1-22.5 29-1.2 0-2.4 0.2-3.3 0.2zM816 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S693.3 921 658.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6s-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M581.4 930.7H299.2c-49.8 0-93.4-26.7-116.2-71.4-22.5-44.3-18.5-94.6 10.7-134.7 52.9-72.1 129.4-124.7 215.2-147.9 10-2.6 17.4-10.9 19-21.1 1.6-10.2-3-20.2-11.6-25.7-53.1-34.1-84.4-94.4-81.8-157.2l354.7 7.4c0 61-30.6 116.8-81.8 149.8-8.6 5.6-13.2 15.5-11.6 25.7 1.9 10.2 9 18.5 19 21.1 23.5 6.3 46.2 14.9 67.9 25.4 15.8-12.2 32.9-22.8 51-31.7-18.9-10.9-38.6-20.4-58.9-28.4 42.4-42.4 66.8-100.2 66.8-161.8l-459-9.5c-2.6 64.2 22.3 126.4 66.5 171.3-78.1 30.8-147 83.4-197.1 152-40.3 55.4-46.1 127.7-15.1 189 31.3 61.7 93.7 99.9 162.5 99.9h304.8c-9.1-16.5-16.8-33.9-22.8-52.2z"  ></path></symbol><symbol id="icon-030501xiangmuxinxiwendangku" viewBox="0 0 1024 1024"><path d="M286.5 476.3h429.9c16.8 0 30.7-13.9 30.7-30.7s-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 17.1 13.7 30.7 30.7 30.7z m0 123.1h343.2c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 16.8 13.7 30.5 30.7 30.7z m0 122.6h258.8c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 17 13.7 30.7 30.7 30.7z m0-368.5h184.2c16.8 0 30.7-13.9 30.7-30.7 0-16.8-13.9-30.7-30.7-30.7H286.5c-16.8 0-30.7 13.9-30.7 30.7 0 16.8 13.7 30.7 30.7 30.7zM807 622.8c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3S684.3 921 649.4 900.1v52.3c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6-91.7 0-186.3-25.8-186.3-71.6V660.1h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5v292.3z"  ></path><path d="M557.8 937.1h-394c-16.8 0-30.7-13.9-30.7-30.7V108c0-16.8 13.9-30.7 30.7-30.7h460.8v214.9c0 16.8 13.9 30.7 30.7 30.7h214.9v195.4c21.5 4.6 42 11.5 61.4 20.6V292.2c0-8.1-3.4-16-8.9-21.8L677.1 24.6c-5.8-5.5-13.6-8.9-21.8-8.9H133c-34.1 0-61.4 27.6-61.4 61.4v860c0 34.1 27.6 61.4 61.4 61.4h469.8c-17.6-18.3-32.8-39-45-61.4zM686 120.6l140.9 140.9H686V120.6z"  ></path></symbol><symbol id="icon-0306shipinku" viewBox="0 0 1024 1024"><path d="M54.5 54.5v915h915v-915h-915z m53.9 53.9H216v161.5H108.4V108.4z m0 215.2H216v161.5H108.4V323.6z m0 215.4H216v161.5H108.4V539z m0 376.8V754.3H216v161.5H108.4z m161.5 0V108.4h484.4v807.4H269.9z m645.9 0H808.2V754.3h107.6v161.5z m0-215.2H808.2V539h107.6v161.6z m0-215.5H808.2V323.6h107.6v161.5z m0-215.2H808.2V108.4h107.6v161.5z"  ></path><path d="M396.2 646.6L627.8 512 396.4 377.4v269.1h-0.2z"  ></path></symbol><symbol id="icon-030201daleisheshitaizhangku" viewBox="0 0 1024 1024"><path d="M218.1 212.3c23.8-10 50.7 16.8 40.9 40.6-6.5 21.7-37.6 29-52.8 11.9-16.8-14.9-9.5-45.7 11.9-52.5z m109.8 0c23.8-9.8 50.7 17 40.9 40.6-6.5 21.7-37.6 29.2-52.8 12.1-17.1-15.3-9.6-46.1 11.9-52.7z m200.3 0.5c78.2-5.4 157.1-0.5 235.4-2.3 19.6 1.6 46.5-5.1 58.6 15.4 12.6 18.2-0.7 47.6-23.6 47.9-78.9 2.3-158.1 0-237.2 1.2-15.2-1.2-33.6 2.6-45.1-10-15.9-15.6-9.3-45.7 11.9-52.2zM218.1 486.2c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 11.9-16.5-15.2-9.2-46 12.2-52.8z m109.8 0c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 12.1-17.1-15.4-9.8-46.2 11.9-53zM218.1 751c23.8-9.8 50.7 17 40.9 40.9-6.5 21.7-37.6 29-52.8 11.9-16.8-15.2-9.5-45.8 11.9-52.8z m109.8 0c23.8-9.8 50.7 17 40.6 40.9-6.5 21.7-37.6 29-52.8 12.1-16.8-15.2-9.3-46 12.2-53z"  ></path><path d="M501.3 890.7c-125.7 0-251.5 0.2-377.2 0.6 1.4-70 0.5-140.3 0.5-210.1 117.2 0.3 234.4 0.4 351.6 0.4 4.7-22.8 11.9-44.7 21.1-65.5-124.2 0-248.4 0-372.6 0.4 0.2-70 0.9-140.1-0.5-210.1 258.5 0.9 517.2 0.7 775.9 0.2l-0.3 30.2c19 6.2 37.3 14.1 54.6 23.6 0-107.7 0.1-215.4 0.6-323.2-0.5-21 1.6-47.6-18.2-60.9-11-9.3-27.1-5.8-40.4-7.2-255.7 0.5-511.8 0.5-767.7 0-13.5 1.6-30.1-3-41.3 6.5-15.2 9.6-18.9 26.6-17.7 43.4 0.5 262.2 0.2 524.2 0.2 786.2-4.2 28.5 21.2 53.7 49.5 49.5h422.4c-16-19.7-29.5-41.1-40.5-64z m398.4-766.4c-0.7 72.1-0.2 144.3-0.5 216.4-258.2 0.3-516.4-0.2-774.5 0.3 0-72.4 0.2-144.5-0.2-216.9 258.3 0.7 516.7 0.2 775.2 0.2z"  ></path><path d="M816 594.4c-103.2 0-157.6 28.6-157.6 43s54.4 43 157.6 43 157.6-28.6 157.6-43-54.5-43-157.6-43z m157.6 140.5v-58c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.3-157.6-32.3v58c0 14.3 54.4 43 157.6 43s157.6-28.7 157.6-43z m0 97.4v-58c-34.9 20.9-96.9 32.2-157.6 32.2s-122.7-11.3-157.6-32.2v58c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m0 91.7v-52.3c-34.9 21-96.9 32.3-157.6 32.3s-122.7-11.4-157.6-32.3V924c0 14.3 54.5 43 157.6 43s157.6-28.7 157.6-43z m28.6 0c0 45.8-94.6 71.6-186.3 71.6S629.6 969.8 629.6 924V631.7h0.5c14.4-86.9 357.2-86.9 371.6 0h0.5V924z"  ></path></symbol><symbol id="icon-020502wuranyuantaizhang-sc" viewBox="0 0 1024 1024"><path d="M309.5 451.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4 0-16.8 13.6-30.4 30.4-30.4h423.8c16.8 0 30.4 13.6 30.4 30.4 0 16.8-13.6 30.4-30.4 30.4H309.5z m0 177.2c-16.8 0-30.4-13.6-30.4-30.4s13.6-30.4 30.4-30.4h287.6c16.8 0 30.4 13.6 30.4 30.4s-13.6 30.4-30.4 30.4H309.5z m101.2-729c-22.4 0-40.5 18.1-40.5 40.5s18.1 40.5 40.5 40.5h202.5c22.4 0 40.5-18.1 40.5-40.5s-18.1-40.5-40.5-40.5H410.7z m0-60.8h202.5c55.9 0 101.3 45.3 101.3 101.3s-45.3 101.3-101.3 101.3H410.7c-55.9 0-101.3-45.3-101.3-101.3S354.8 15.8 410.7 15.8z" fill="#062F8C" ></path><path d="M861.3 218.4v380.3c6.4-0.4 12.8-0.6 19.2-0.6 14.1 0 28 1 41.6 2.8V218.4c0-72.7-58.9-131.6-131.6-131.6H688v60.8h102.5c39.1-0.1 70.8 31.6 70.8 70.8zM570.9 947.4H233.5c-39.1 0-70.9-31.7-70.9-70.9V218.4c0-39.1 31.7-70.9 70.9-70.9h98.2V86.7h-98.2c-72.7 0-131.6 58.9-131.6 131.6v658.2c0 72.7 58.9 131.6 131.6 131.6h351c-6.5-19.4-11.1-39.7-13.6-60.7z" fill="#062F8C" ></path><path d="M893.5 833.2v-0.9c-0.4-18.8-10.8-36-27.3-45l60-107.8c56.2 31 92.1 89.1 94.7 153.2l-127.4 0.5zM837.6 871c-20.7 0-37.5-16.8-37.5-37.5s16.8-37.5 37.5-37.5 37.5 16.8 37.5 37.5-16.7 37.5-37.5 37.5zM783 834l-122.3 2.5c-1.4-62.6 30.7-121.2 84.2-153.7l63.6 105.1c-16.1 9.6-25.9 27.1-25.5 45.9v0.2z m51.8 51.4c10-0.1 19.8-3.1 28.2-8.6L929.5 985c-56.7 31.2-125.5 31.2-182.2 0l63.5-105.8c7.6 4 16 6.2 24.6 6.2h-0.6z" fill="#E60012" ></path></symbol></svg>',h=(c=document.getElementsByTagName("script"))[c.length-1].getAttribute("data-injectcss");if(h&&!a.__iconfont__svg__cssinject__){a.__iconfont__svg__cssinject__=!0;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(c){console&&console.log(c)}}!function(c){if(document.addEventListener)if(~["complete","loaded","interactive"].indexOf(document.readyState))setTimeout(c,0);else{var h=function(){document.removeEventListener("DOMContentLoaded",h,!1),c()};document.addEventListener("DOMContentLoaded",h,!1)}else document.attachEvent&&(z=c,v=a.document,m=!1,(s=function(){try{v.documentElement.doScroll("left")}catch(c){return void setTimeout(s,50)}l()})(),v.onreadystatechange=function(){"complete"==v.readyState&&(v.onreadystatechange=null,l())});function l(){m||(m=!0,z())}var z,v,m,s}(function(){var c,h,l,z,v,m;(c=document.createElement("div")).innerHTML=s,s=null,(h=c.getElementsByTagName("svg")[0])&&(h.setAttribute("aria-hidden","true"),h.style.position="absolute",h.style.width=0,h.style.height=0,h.style.overflow="hidden",l=h,(z=document.body).firstChild?(v=l,(m=z.firstChild).parentNode.insertBefore(v,m)):z.appendChild(l))})}(window);
;