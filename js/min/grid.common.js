!function(t,a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./jqdnr","./jqmodal"],function(e){return a(e,t.document)}):"object"==typeof module&&module.exports?module.exports=function(e,t){return e||(e=window),void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),require("./grid.base"),require("./jqdnr"),require("./jqmodal"),a(t,e.document),t}:a(jQuery,t.document)}("undefined"!=typeof window?window:this,function(w,C){"use strict";var D=w.jgrid,q=w.fn.jqGrid,y=q.getGuiStyles,z=q.getGridRes;D.jqModal=D.jqModal||{},w.extend(!0,D.jqModal,{toTop:!0}),w.extend(D,{showModal:function(e){e.w.show()},closeModal:function(e){e.w.hide().attr("aria-hidden","true"),e.o&&e.o.remove()},hideModal:function(e,t){var a=!(!(t=w.extend({jqm:!0,gb:"",removemodal:!1},t||{})).gb||"string"!=typeof t.gb||"#gbox_"!==t.gb.substr(0,6))&&w("#"+t.gb.substr(6))[0],i=w(e);if(t.onClose){var o=a?t.onClose.call(a,e):t.onClose(e);if("boolean"==typeof o&&!o)return}if(w.fn.jqm&&!0===t.jqm)i.attr("aria-hidden","true").jqmHide();else{if(""!==t.gb)try{w(">.jqgrid-overlay",t.gb).first().hide()}catch(e){}i.hide().attr("aria-hidden","true")}t.removemodal&&i.remove()},createModal:function(e,t,a,i,o,l,n){var r=D.jqID,d=this.p;a=w.extend(!0,{resizingRightBottomIcon:q.getIconRes.call(this,"form.resizableLtr")},D.jqModal||{},null!=d&&d.jqModal||{},a);var s=C.createElement("div"),u="#"+r(e.themodal),c="rtl"===w(a.gbox).attr("dir"),m=!!e.resizeAlso&&"#"+r(e.resizeAlso);n=w.extend({},n||{}),s.className=y.call(this,"dialog.window","ui-jqdialog"),s.id=e.themodal,s.dir=c?"rtl":"ltr";var f=C.createElement("div");f.className=y.call(this,"dialog.document"),w(f).attr("role","document");var h=C.createElement("div");h.className=y.call(this,"dialog.subdocument"),f.appendChild(h),s.appendChild(f);var p=C.createElement("div");p.className=y.call(this,"dialog.header","ui-jqdialog-titlebar "+(c?"ui-jqdialog-titlebar-rtl":"ui-jqdialog-titlebar-ltr")),p.id=e.modalhead,w(p).append("<span class='ui-jqdialog-title'>"+a.caption+"</span>");var F=y.call(this,"states.hover"),g=w("<a aria-label='Close' class='"+y.call(this,"dialog.closeButton","ui-jqdialog-titlebar-close")+"'></a>").hover(function(){g.addClass(F)},function(){g.removeClass(F)}).append("<span class='"+q.getIconRes.call(this,"form.close")+"'></span>");w(p).append(g);var v=C.createElement("div");w(v).addClass(y.call(this,"dialog.content","ui-jqdialog-content")).attr("id",e.modalcontent),w(v).append(t),h.appendChild(v),w(h).prepend(p),!0===l?w("body").append(s):"string"==typeof l?w(l).append(s):w(s).insertBefore(i),w(s).css(n),void 0===a.jqModal&&(a.jqModal=!0);var x={};if(w.fn.jqm&&!0===a.jqModal?(0===a.left&&0===a.top&&a.overlay&&((a=w(o).offset()).left+=4,a.top+=4),x.top=a.top+"px",x.left=a.left):0===a.left&&0===a.top||(x.left=a.left,x.top=a.top+"px"),w("a.ui-jqdialog-titlebar-close",p).click(function(){var e=w(u).data("onClose")||a.onClose,t=w(u).data("gbox")||a.gbox;return D.hideModal(u,{gb:t,jqm:a.jqModal,onClose:e,removemodal:a.removemodal||!1}),!1}),0!==a.width&&a.width||(a.width=300),0!==a.height&&a.height||(a.height=200),!a.zIndex){var b=w(i).parents("*[role=dialog]").first().css("z-index");b?(a.zIndex=parseInt(b,10)+2,a.toTop=!0):a.zIndex=950}if(x.left&&(x.left+="px"),w(s).css(w.extend({width:isNaN(a.width)?"auto":a.width+"px",height:isNaN(a.height)?"auto":a.height+"px",zIndex:a.zIndex},x)).attr({tabIndex:"-1",role:"dialog","aria-labelledby":e.modalhead,"aria-hidden":"true"}),void 0===a.drag&&(a.drag=!0),void 0===a.resize&&(a.resize=!0),a.drag)if(w.fn.jqDrag)w(p).css("cursor","move"),w(s).jqDrag(p);else try{w(s).draggable({handle:w("#"+r(p.id))})}catch(e){}if(a.resize)if(w.fn.jqResize)w(v).append("<div class='jqResize ui-resizable-handle ui-resizable-se "+a.resizingRightBottomIcon+"'></div>"),w(u).jqResize(".jqResize",m);else try{w(s).resizable({handles:"se, sw",alsoResize:m})}catch(e){}!0===a.closeOnEscape&&w(s).keydown(function(e){if(27===e.which){var t=w(u).data("onClose")||a.onClose;D.hideModal(u,{gb:a.gbox,jqm:a.jqModal,onClose:t,removemodal:a.removemodal||!1,formprop:!a.recreateForm||!1,form:a.form||""})}})},viewModal:function(e,t){if(t=w.extend(!0,{overlay:30,modal:!1,overlayClass:y.call(this,"overlay"),onShow:D.showModal,onHide:D.closeModal,gbox:"",jqm:!0,jqM:!0},D.jqModal||{},t||{}),w.fn.jqm&&!0===t.jqm)t.jqM?w(e).attr("aria-hidden","false").jqm(t).jqmShow():w(e).attr("aria-hidden","false").jqmShow();else{""!==t.gbox&&(w(">.jqgrid-overlay",t.gbox).first().show(),w(e).data("gbox",t.gbox)),w(e).show().attr("aria-hidden","false");try{w(":input:visible",e)[0].focus()}catch(e){}}},info_dialog:function(e,t,a,i){var o=this,l=o.p,n=w.extend(!0,{width:290,height:"auto",dataheight:"auto",drag:!0,resize:!1,left:250,top:170,zIndex:1e3,jqModal:!0,modal:!1,closeOnEscape:!0,align:"center",buttonalign:"center",buttons:[]},D.jqModal||{},null!=l&&l.jqModal||{},{caption:"<b>"+e+"</b>"},i||{}),r=n.jqModal;w.fn.jqm&&!r&&(r=!1);var d,s="",u=y.call(o,"states.hover");if(0<n.buttons.length)for(d=0;d<n.buttons.length;d++)void 0===n.buttons[d].id&&(n.buttons[d].id="info_button_"+d),s+=D.builderFmButon.call(o,n.buttons[d].id,n.buttons[d].text);var c=isNaN(n.dataheight)?n.dataheight:n.dataheight+"px",m="text-align:"+n.align+";",f=w("#info_dialog"),h="<div id='info_id'>";h+="<div id='infocnt' style='margin:0px;padding-bottom:1em;width:100%;overflow:auto;position:relative;height:"+c+";"+m+"'>"+t+"</div>",(a||""!==s)&&(h+="<hr class='"+y.call(o,"dialog.hr")+"' style='margin:1px'/><div style='text-align:"+n.buttonalign+";padding:.8em 0 .5em 0;background-image:none;border-width: 1px 0 0 0;'>"+(a?D.builderFmButon.call(o,"closedialog",a):"")+s+"</div>"),h+="</div>";try{"false"===f.attr("aria-hidden")&&D.hideModal("#info_dialog",{jqm:r}),f.remove()}catch(e){}D.createModal.call(o,{themodal:"info_dialog",modalhead:"info_head",modalcontent:"info_content",resizeAlso:"infocnt"},h,n,"","",!0),f=w("#info_dialog"),s&&w.each(n.buttons,function(){w("#"+D.jqID(this.id),"#info_id").on("click",{click:this.onClick},function(e){return w.isFunction(e.data.click)&&e.data.click.call(o,e,f),!1})}),w("#closedialog","#info_id").click(function(){return D.hideModal("#info_dialog",{jqm:r,onClose:f.data("onClose")||n.onClose,gb:f.data("gbox")||n.gbox}),!1}),w(".fm-button","#info_dialog").hover(function(){w(this).addClass(u)},function(){w(this).removeClass(u)}),w.isFunction(n.beforeOpen)&&n.beforeOpen(),D.viewModal.call(o,"#info_dialog",{onHide:function(e){e.w.hide().remove(),e.o&&e.o.remove()},modal:n.modal,jqm:r}),w.isFunction(n.afterOpen)&&n.afterOpen();try{f.focus()}catch(e){}},bindEv:function(t,a){var i=this.p;w.isFunction(a.dataInit)&&a.dataInit.call(this,t,a),a.dataEvents&&w.each(a.dataEvents,function(){var e=void 0===this.data?w.extend({gridId:i.id,gridIdSel:i.idSel},a):"object"==typeof this.data&&null!==this.data?w.extend(!0,{gridId:i.id,gridIdSel:i.idSel},a,this.data):this.data;w(t).on(this.type,e,this.fn)})},createEl:function(e,t,a,i,o){var l="",c=this,n=c.p,r=D.info_dialog,d=function(e){return z.call(w(c),e)},s=d("errors.errcap"),u=d("edit"),m=u.msg,f=u.bClose;function h(a,e,t){var i=["dataInit","dataEvents","dataUrl","buildSelect","sopt","searchhidden","defaultValue","attr","custom_element","custom_value","generateValue","postData","selectFilled","rowId","column","mode","cm","iCol"];void 0!==t&&w.isArray(t)&&w.merge(i,t),w.each(e,function(e,t){-1===w.inArray(e,i)&&w(a).attr(e,t)}),e.hasOwnProperty("id")||w(a).attr("id",D.randId())}if(null==t)return"";switch(e){case"textarea":l=C.createElement("textarea"),i?t.cols||w(l).css({width:"100%","box-sizing":"border-box"}):t.cols||(t.cols=19),t.rows||(t.rows=2),("&nbsp;"===a||"&#160;"===a||1===a.length&&160===a.charCodeAt(0))&&(a=""),l.value=a,h(l,t),w(l).attr({role:"textbox"});break;case"checkbox":if((l=C.createElement("input")).type="checkbox",""!==a&&null!=a||(a=t.hasOwnProperty("defaultValue")?w.isFunction(t.defaultValue)?t.defaultValue.call(c,{cellValue:a,options:t}):t.defaultValue:"false"),t.value){var p=t.value.split(":");a===p[0]&&(l.checked=!0,l.defaultChecked=!0),l.value=a,w(l).data("offval",p[1])}else{var F=String(a).toLowerCase();F.search(/(false|f|0|no|n|off|undefined)/i)<0&&""!==F?(l.checked=!0,l.defaultChecked=!0,l.value=a):l.value="on",w(l).data("offval","off")}h(l,t,["value"]),w(l).attr({role:"checkbox","aria-checked":l.checked?"true":"false"});break;case"select":l=C.createElement("select");var g,v=[],x=null;!0===t.multiple||"multiple"===t.multiple?(g=!0,l.multiple="multiple",w(l).attr("aria-multiselectable","true"),v=a.split(","),v=w.map(v,function(e){return w.trim(e)})):(g=!1,v[0]=w.trim(a)),void 0===t.size&&(t.size=g?3:1);try{x=t.rowId}catch(e){}if(n&&n.idPrefix&&(x=D.stripPref(n.idPrefix,x)),void 0===t.dataUrl&&t.generateValue&&null!=n.indexByColumnData[t.cm.name]&&(t.value=c.generateValueFromColumnIndex(t.cm.name,t.separator,t.delimiter)),void 0!==t.dataUrl){var b=t.postData||o.postData,q={elem:l,options:t,cm:t.cm,mode:t.mode,rowid:x,iCol:t.iCol,ovm:v};h(l,t,b?["postData"]:void 0),w.ajax(w.extend({url:w.isFunction(t.dataUrl)?t.dataUrl.call(c,x,a,String(t.name),q):t.dataUrl,type:"GET",dataType:"html",data:w.isFunction(b)?b.call(c,x,a,String(t.name)):b,context:q,success:function(e,t,a){var i=this.ovm,o=this.elem,l=this.cm,n=this.iCol,r=w.extend({},this.options),d=this.rowid,s=this.mode,u=w.isFunction(r.buildSelect)?r.buildSelect.call(c,e,a,l,n):e;"string"==typeof u&&(u=w(w.trim(u)).html()),u&&(w(o).append(u),setTimeout(function(){var t;w("option",o).each(function(e){0===e&&o.multiple&&(this.selected=!1),-1<w.inArray(w.trim(w(this).val()),i)&&(this.selected=!0,t=!0)}),t||w("option",o).each(function(){-1<w.inArray(w.trim(w(this).text()),i)&&(this.selected=!0)}),D.fullBoolFeedback.call(c,r.selectFilled,"jqGridSelectFilled",{elem:o,options:r,cm:l,rowid:d,mode:s,cmName:null!=l?l.name:r.name,iCol:n})},0))}},o||{}))}else t.value&&(D.fillSelectOptions(l,t.value,void 0===t.separator?":":t.separator,void 0===t.delimiter?";":t.delimiter,g,a),h(l,t,["value"]),D.fullBoolFeedback.call(c,t.selectFilled,"jqGridSelectFilled",{elem:l,options:t,cm:t.cm,rowid:x,mode:t.mode,cmName:null!=t.cm?t.cm.name:t.name,iCol:t.iCol}));break;case"text":case"password":case"button":var y;y="button"===e?"button":"textbox",(l=C.createElement("input")).type=e,h(l,t),l.value=a,"button"!==e&&(i?t.size||w(l).css({width:"100%","box-sizing":"border-box"}):t.size||(t.size=20)),w(l).attr("role",y);break;case"image":case"file":(l=C.createElement("input")).type=e,h(l,t);break;case"custom":l=C.createElement("span");try{if(!w.isFunction(t.custom_element))throw"editoptions.custom_element is not a function";var j=t.custom_element.call(c,a,t);if(!(j instanceof jQuery||D.isHTMLElement(j)||"string"==typeof j))throw"editoptions.custom_element returns value of a wrong type";j=w(j).addClass("customelement").attr({id:t.id,name:t.name}),w(l).empty().append(j)}catch(e){"e1"===e&&r.call(c,s,"function 'custom_element' "+m.nodefined,f),"e2"===e?r.call(c,s,"function 'custom_element' "+m.novalue,f):r.call(c,s,"string"==typeof e?e:e.message,f)}}return l},checkDate:function(e,t){var a,i={};if(a=-1!==(e=e.toLowerCase()).indexOf("/")?"/":-1!==e.indexOf("-")?"-":-1!==e.indexOf(".")?".":"/",e=e.split(a),3!==(t=t.split(a)).length)return!1;var o,l,n,r=-1,d=-1,s=-1;for(l=0;l<e.length;l++)n=isNaN(t[l])?0:parseInt(t[l],10),i[e[l]]=n,-1!==(o=e[l]).indexOf("y")&&(r=l),-1!==o.indexOf("m")&&(s=l),-1!==o.indexOf("d")&&(d=l);o="y"===e[r]||"yyyy"===e[r]?4:"yy"===e[r]?2:-1;var u,c;return-1!==r&&(u=i[e[r]].toString(),2===o&&1===u.length&&(o=1),u.length===o&&(0!==i[e[r]]||"00"===t[r])&&(-1!==s&&(!((u=i[e[s]].toString()).length<1||i[e[s]]<1||12<i[e[s]])&&(-1!==d&&!((u=i[e[d]].toString()).length<1||i[e[d]]<1||31<i[e[d]]||2===i[e[s]]&&i[e[d]]>((c=i[e[r]])%4!=0||c%100==0&&c%400!=0?28:29)||i[e[d]]>[0,31,29,31,30,31,30,31,31,30,31,30,31][i[e[s]]])))))},isEmpty:function(e){return!(!e.match(/^\s+$/)&&""!==e)},checkTime:function(e){var t;if(!D.isEmpty(e)){if(!(t=e.match(/^(\d{1,2}):(\d{2})([apAP][Mm])?$/)))return!1;if(t[3]){if(t[1]<1||12<t[1])return!1}else if(23<t[1])return!1;if(59<t[2])return!1}return!0},checkValues:function(e,t,a,i,o){var l,n,r,d,s,u=this,c=u.p,m=c.colModel,f=D.isEmpty,h=z.call(w(u),"edit.msg"),p=function(e){var t=l[e];return w.isFunction(t)?t.call(u,o):t},F=z.call(w(u),"formatter.date.masks");if(void 0===a){if("string"==typeof t&&(t=c.iColByName[t]),void 0===t||t<0)return[!0,"",""];d=m[t],l=d.editrules,null!=d.formoptions&&(n=d.formoptions.label)}else l=a,n=void 0===i?"_":i,d=m[t];if(l){if(n||(n=null!=c.colNames?c.colNames[t]:d.label),!0===p("required")&&f(e))return[!1,n+": "+h.required,""];var g=!1!==p("required");if(!0===p("number")&&(!1!==g||!f(e))&&isNaN(e))return[!1,n+": "+h.number,""];if(void 0!==l.minValue&&!isNaN(l.minValue)&&parseFloat(e)<parseFloat(l.minValue))return[!1,n+": "+h.minValue+" "+l.minValue,""];if(void 0!==l.maxValue&&!isNaN(l.maxValue)&&parseFloat(e)>parseFloat(l.maxValue))return[!1,n+": "+h.maxValue+" "+l.maxValue,""];if(!0===p("email")&&!(!1===g&&f(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(e)))return[!1,n+": "+h.email,""];if(!0===p("integer")&&(!1!==g||!f(e))){if(isNaN(e))return[!1,n+": "+h.integer,""];if(e%1!=0||-1!==e.indexOf("."))return[!1,n+": "+h.integer,""]}if(!0===p("date")&&!(!1===g&&f(e)||(d.formatoptions&&d.formatoptions.newformat?(r=d.formatoptions.newformat,F.hasOwnProperty(r)&&(r=F[r])):r=m[t].datefmt||"Y-m-d",D.checkDate(r,e))))return[!1,n+": "+h.date+" - "+r,""];if(!0===p("time")&&!(!1===g&&f(e)||D.checkTime(e)))return[!1,n+": "+h.date+" - hh:mm (am/pm)",""];if(!0===p("url")&&!(!1===g&&f(e)||/^(((https?)|(ftp)):\/\/([\-\w]+\.)+\w{2,3}(\/[%\-\w]+(\.\w{2,})?)*(([\w\-\.\?\\\/+@&#;`~=%!]*)(\.\w{2,})?)*\/?)/i.test(e)))return[!1,n+": "+h.url,""];if(!0===l.custom){if(!1!==g||!f(e))return w.isFunction(l.custom_func)?(s=l.custom_func.call(u,e,n,t),w.isArray(s)?s:[!1,h.customarray,""]):[!1,h.customfcheck,""]}else if(w.isFunction(l.custom)&&(!1!==g||!f(e)))return s=l.custom.call(u,o),w.isArray(s)?s:[!1,h.customarray,""]}return[!0,"",""]}})});
//# sourceMappingURL=grid.common.js.map