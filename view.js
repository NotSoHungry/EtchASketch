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
            row.style.height = controller.getRowHeight();
            
            for (let i = 1; i <= model.widthRatio; i++) {
                let cell = this.newEl('div');
                cell.setAttribute('class', 'canvas-row-cell');
                cell.style.cssText = `width: ${controller.getCellWidth()}`;
                row.appendChild(cell);
            }

            return row;
        },

        updateCellCount: function() {

        },

        updateRowCount: function() {

        },

        colorCell: function() {
            this.style.backgroundColor = model.currentColor;
        },

        toogleColoringMode: function() {

        },

        toogleErasingMode: function() {

        },



        initiateDefaultCanvas: function() {
            var canvas = this.el('.canvas-cells-wrapper');
            for (let i = 1; i <= model.heightRatio; i++) {
                canvas.appendChild(this.newRow());
            }
        },

        toogleGridView: function (borderValue, borderColor = "black") {
            switch (true) {
                case model.viewMode === "grid":
                    let rows = this.allEl('.canvas-row'),
                    borderStyle = `solid ${borderValue}px ${borderColor}`,
                    borderRowHeight = controller.getRowHeightWithBorder(borderValue),
                    borderCellWidth = controller.getCellWidthWithBorder(borderValue),
                    defaultRowHeight = controller.getRowHeight(),
                    defaultCellWidth = controller.getCellWidth();
                    //Initiate loop for all rows and increase row's height if border will be applied
                    rows.forEach((currentRow, currentRowIndex, rowsArray) => {
                        let currentRowCells = currentRow.childNodes,
                            isLastRow = controller.isLastElement(currentRowIndex, rowsArray);
                            (!isLastRow) ? currentRow.style.height = borderRowHeight : currentRow.style.height = defaultRowHeight;
                        //Set appropriate styles for cells - border/height/width
                        currentRowCells.forEach((currentCell, currentCellIndex, cellsArray) => {
                            let isLastCell = controller.isLastElement(currentCellIndex, cellsArray);
                            if (!isLastRow) {
                                (!isLastCell) ? currentCell.style.cssText = `border-bottom: ${borderStyle}; border-right: ${borderStyle}; width: ${borderCellWidth}` :
                                (isLastCell) ? currentCell.style.cssText = `border-bottom: ${borderStyle}; width: ${defaultCellWidth}` : "";
                            } else {
                                (!isLastCell) ? currentCell.style.cssText = `border-right: ${borderStyle}; width: ${borderCellWidth}` : ""; 
                            }
                        }) 
                    
                    })
                    break;
                case model.viewMode === "canvas":
                    let allRows = this.allEl('.canvas-row'),
                        allCells = this.allEl('.canvas-row-cell'),
                        defaultRowHeight = controller.getRowHeight(),
                        defaultCellWidth = controller.getCellWidth();
                    allRows.forEach(row => row.style.height = defaultRowHeight);
                    allCells.forEach(cell => cell.style.cssText = `width: ${defaultCellWidth}`);
            }      
        },
    }
} 