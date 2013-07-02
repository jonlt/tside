///<references path='ItemList.ts' />


module Controls {
	
	export class FileItem extends ListItem {}
	export class DirectoryItem extends ListItem {}

	export class FileList extends ItemList {

		constructor(
			public path : string,
			public source? : ListItem[]
		) {
			super(source);
			this.source = this.source ? this.source : [];
			var source = this.source;
			var fs = require('fs');
			console.log('yo');
			fs.readdir('.', function(err, files)  {
				if(err) throw err;
				console.log(files);
				for(var i = 0; i < files.length; i++){
					var file = files[i];
					console.log(file);
					fs.stat(file, function(err, stat)  {
						if(err) throw err;

						if(stat.isDirectory()){
							console.log('dir');
							source.push(new DirectoryItem(file, null, 'dir'));
						} else if(stat.isFile()){
							console.log('file');
							source.push(new FileItem(file, null, 'file'));
						}
					})
				}
			});

		}
	}

}