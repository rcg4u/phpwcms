(function(){var d={relay:false},c=["once","throttle","pause"],b=c.length;while(b--){d[c[b]]=Events.lookupPseudo(c[b])}DOMEvent.definePseudo=function(e,f){d[e]=f;return this};var a=Element.prototype;[Element,Window,Document].invoke("implement",Events.Pseudos(d,a.addEvent,a.removeEvent))})();