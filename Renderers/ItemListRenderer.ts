///<reference path='../Controls/Controls.ts' />

module Renderers {
	
	export class ListItemRenderer {
		render(item : Controls.ListItem, parent? : HTMLElement) {
			var li = document.createElement('li');
			li.className = 'list-item';
			li.innerText = item.caption;

			if(item.onclick){
				li.onclick = function(ev : MouseEvent){
					item.onclick(item, ev);
				}
			}

			if(parent){
				parent.appendChild(li);
			}

			return li;
		}
	}

	export class ItemListRenderer {
		render(list : Controls.ItemList, parent? : HTMLElement) {
			var ul = document.createElement('ul');
			ul.className = 'item-list';

			var itemRenderer = new ListItemRenderer();

			var items = list.getItems();
			for(var i = 0; i < items.length; i++){
				var li = itemRenderer.render(items[i], ul);
			}

			if(parent){
				parent.appendChild(ul);
			}

			return ul;
		}
	}

}