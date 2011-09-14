var HtmlTable=new Class({Implements:[Options,Events,Class.Occlude],options:{properties:{cellpadding:0,cellspacing:0,border:0},rows:[],headers:[],footers:[]},property:"HtmlTable",initialize:function(){var a=Array.link(arguments,{options:Type.isObject,table:Type.isElement,id:Type.isString});this.setOptions(a.options);if(!a.table&&a.id){a.table=document.id(a.id)}this.element=a.table||new Element("table",this.options.properties);if(this.occlude()){return this.occluded}this.build()},build:function(){this.element.store("HtmlTable",this);this.body=document.id(this.element.tBodies[0])||new Element("tbody").inject(this.element);$$(this.body.rows);if(this.options.headers.length){this.setHeaders(this.options.headers)}else{this.thead=document.id(this.element.tHead)}if(this.thead){this.head=this.getHead()}if(this.options.footers.length){this.setFooters(this.options.footers)}this.tfoot=document.id(this.element.tFoot);if(this.tfoot){this.foot=document.id(this.tfoot.rows[0])}this.options.rows.each(function(a){this.push(a)},this)},toElement:function(){return this.element},empty:function(){this.body.empty();return this},set:function(e,a){var d=(e=="headers")?"tHead":"tFoot",b=d.toLowerCase();this[b]=(document.id(this.element[d])||new Element(b).inject(this.element,"top")).empty();var c=this.push(a,{},this[b],e=="headers"?"th":"td");if(e=="headers"){this.head=this.getHead()}else{this.foot=this.getHead()}return c},getHead:function(){var a=this.thead.rows;return a.length>1?$$(a):a.length?document.id(a[0]):false},setHeaders:function(a){this.set("headers",a);return this},setFooters:function(a){this.set("footers",a);return this},update:function(d,e,a){var b=d.getChildren(a||"td"),c=b.length-1;e.each(function(i,f){var j=b[f]||new Element(a||"td").inject(d),h=(i?i.content:"")||i,g=typeOf(h);if(i&&i.properties){j.set(i.properties)}if(/(element(s?)|array|collection)/.test(g)){j.empty().adopt(h)}else{j.set("html",h)}if(f>c){b.push(j)}else{b[f]=j}});return{tr:d,tds:b}},push:function(e,c,d,a,b){if(typeOf(e)=="element"&&e.get("tag")=="tr"){e.inject(d||this.body,b);return{tr:e,tds:e.getChildren("td")}}return this.update(new Element("tr",c).inject(d||this.body,b),e,a)},pushMany:function(d,c,e,a,b){return d.map(function(f){return this.push(f,c,e,a,b)},this)}});["adopt","inject","wraps","grab","replaces","dispose"].each(function(a){HtmlTable.implement(a,function(){this.element[a].apply(this.element,arguments);return this})});