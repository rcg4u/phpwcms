(function(){var a={json:JSON.decode};Locale.Set.defineParser=function(b,c){a[b]=c};Locale.Set.from=function(d,c){if(instanceOf(d,Locale.Set)){return d}if(!c&&typeOf(d)=="string"){c="json"}if(a[c]){d=a[c](d)}var b=new Locale.Set;b.sets=d.sets||{};if(d.inherits){b.inherits.locales=Array.from(d.inherits.locales);b.inherits.sets=d.inherits.sets||{}}return b}})();