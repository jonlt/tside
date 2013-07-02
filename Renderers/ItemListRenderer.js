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
