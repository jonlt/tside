///<reference path='Controls/Controls.ts' />
///<reference path='Renderers/Renderers.ts' />

///<reference path='typings/node.d.ts' />


var fs = require('fs');

$(function(){
	var list = new Controls.FileList('.');
	var listRenderer = new Renderers.ItemListRenderer();
	var main = document.getElementById('tside');

    var onclick = function(sender, event){
    	alert(sender.usedata);
    }

    var items = list.getItems();
    for(var i = 0; i < items.length; i++){
    	var item = items[i];
    	item.onclick = onclick;
    }

	listRenderer.render(list, main);
});



