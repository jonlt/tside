
module Controls {

	export class ListItem {
		constructor(
			public caption : string,
			public onclick? : (sender : ListItem, args) => void,
			public userdata? : any
		) { }
	};

	export class ItemList {
		constructor(
			public source? : ListItem[]
		) { }

		getItems() : ListItem[] {
			return this.source;
		}

		addItem(item : ListItem) {
			if(!this.source) this.source = [];
			this.source.push(item);
		}
	}
	
}