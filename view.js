var gameView = function () {

    return {

        el: (query) => {
            return document.querySelector(query);
        },

        allEl: function(query) {
            return document.querySelectorAll(query);
        },

        newEl: function(query) {
            return document.createElement(query);
        },

        newRow: function(fillRow) {
            var row = this.newEl('div');
            row.setAttribute('class', 'canvas-row row');
            row.style.height = controller.calculateRowHeightPercentage();
            
            for (let i = 1; i <= model.widthRatio; i++) {
                let cell = this.newEl('div');
                cell.setAttribute('class', 'canvas-row-cell');
                cell.style.cssText = `height: 100%; width: ${controller.calculateCellWidthPercentage()}`;
                row.appendChild(cell);
            }

            return row;
        },

        updateCellCount: function() {

        },

        updateRowCount: function() {

        },

        defaultCanvas: function() {
            var canvas = this.el('.app-main-canvas');
            for (let i = 1; i <= model.heightRatio; i++) {
                canvas.appendChild(this.newRow());
            }
        },

        toogleGridView: function (marginValue) {
            let rows = this.allEl('.canvas-row');

            rows.forEach((element, index) => {
                let rowCells = element.childNodes;
                rowCells.forEach((element, index) => {
                return (index < (rowCells.length - 1)) ? element.style.cssText = `border-right: solid ${marginValue}px black; width: ${controller.calculateCellWidthWithMargin(marginValue)}` :
                       (index === (rowCells.length - 1)) ? element.style.cssText = `width: ${controller.calculateCellWidthPercentage()}` : "";
                });
                return (index < (rows.length - 1)) ? element.style.cssText = `border-bottom: solid ${marginValue}px black; height: ${controller.calculateRowHeightWithMargin(marginValue)}` :
                       (index === (rows.length - 1)) ? element.style.cssText = `height: ${controller.calculateRowHeightPercentage()}` : "";
            });

            

        }
    }     
}