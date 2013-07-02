var Controls;
(function (Controls) {
    var ListItem = (function () {
        function ListItem(caption, onclick, userdata) {
            this.caption = caption;
            this.onclick = onclick;
            this.userdata = userdata;
        }
        return ListItem;
    })();
    Controls.ListItem = ListItem;
    ;

    var ItemList = (function () {
        function ItemList(source) {
            this.source = source;
        }
        ItemList.prototype.getItems = function () {
            return this.source;
        };

        ItemList.prototype.addItem = function (item) {
            if (!this.source)
                this.source = [];
            this.source.push(item);
        };
        return ItemList;
    })();
    Controls.ItemList = ItemList;
})(Controls || (Controls = {}));
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Controls;
(function (Controls) {
    var FileItem = (function (_super) {
        __extends(FileItem, _super);
        function FileItem() {
            _super.apply(this, arguments);
        }
        return FileItem;
    })(Controls.ListItem);
    Controls.FileItem = FileItem;
    var DirectoryItem = (function (_super) {
        __extends(DirectoryItem, _super);
        function DirectoryItem() {
            _super.apply(this, arguments);
        }
        return DirectoryItem;
    })(Controls.ListItem);
    Controls.DirectoryItem = DirectoryItem;

    var FileList = (function (_super) {
        __extends(FileList, _super);
        function FileList(path, source) {
            _super.call(this, source);
            this.path = path;
            this.source = source;
            this.source = this.source ? this.source : [];
            var source = this.source;
            var fs = require('fs');
            console.log('yo');
            fs.readdir('.', function (err, files) {
                if (err)
                    throw err;
                console.log(files);
                for (var i = 0; i < files.length; i++) {
                    var file = files[i];
                    console.log(file);
                    fs.stat(file, function (err, stat) {
                        if (err)
                            throw err;

                        if (stat.isDirectory()) {
                            console.log('dir');
                            source.push(new DirectoryItem(file, null, 'dir'));
                        } else if (stat.isFile()) {
                            console.log('file');
                            source.push(new FileItem(file, null, 'file'));
                        }
                    });
                }
            });
        }
        return FileList;
    })(Controls.ItemList);
    Controls.FileList = FileList;
})(Controls || (Controls = {}));
var Renderers;
(function (Renderers) {
    var ListItemRenderer = (function () {
        function ListItemRenderer() {
        }
        ListItemRenderer.prototype.render = function (item, parent) {
            var li = document.createElement('li');
            li.className = 'list-item';
            li.innerText = item.caption;

            if (item.onclick) {
                li.onclick = function (ev) {
                    item.onclick(item, ev);
                };
            }

            if (parent) {
                parent.appendChild(li);
            }

            return li;
        };
        return ListItemRenderer;
    })();
    Renderers.ListItemRenderer = ListItemRenderer;

    var ItemListRenderer = (function () {
        function ItemListRenderer() {
        }
        ItemListRenderer.prototype.render = function (list, parent) {
            var ul = document.createElement('ul');
            ul.className = 'item-list';

            var itemRenderer = new ListItemRenderer();

            var items = list.getItems();
            for (var i = 0; i < items.length; i++) {
                var li = itemRenderer.render(items[i], ul);
            }

            if (parent) {
                parent.appendChild(ul);
            }

            return ul;
        };
        return ItemListRenderer;
    })();
    Renderers.ItemListRenderer = ItemListRenderer;
})(Renderers || (Renderers = {}));
var fs = require('fs');

$(function () {
    var list = new Controls.FileList('.');
    var listRenderer = new Renderers.ItemListRenderer();
    var main = document.getElementById('tside');

    var onclick = function (sender, event) {
        alert(sender.usedata);
    };

    var items = list.getItems();
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        item.onclick = onclick;
    }

    listRenderer.render(list, main);
});
