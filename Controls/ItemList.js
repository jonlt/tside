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
