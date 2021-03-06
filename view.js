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

        newRow: function() {
            var row = this.newEl('div');
            row.setAttribute('class', 'canvas-row row');
            row.style.height = model.rowHeight;
            
            for (let i = 1; i <= model.widthRatio; i++) {
                let cell = this.newEl('div');
                cell.setAttribute('class', 'canvas-row-cell');
                cell.style.cssText = `width: ${model.cellWidth}`;
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

        toogleBrush: function() {

        },

        toogleBrushMode: function() {

        },

        isLastElement: function(elementIndex, array) {
            return (elementIndex === array.length - 1) ? true : false;
        },

        initiateDefaultCanvas: function() {
            let canvas = this.el('.canvas-cells-wrapper');
            for (let i = 1; i <= model.heightRatio; i++) {
                canvas.appendChild(this.newRow());
            }
            let cells = this.allEl('.canvas-row-cell');
            cells.forEach(cell => {
                cell.addEventListener('mouseover', this.colorCell);
            })
        },

        toogleGridView: function (borderValue, borderColor = "black") {
            let allRows = this.allEl('.canvas-row'),
                allCells = this.allEl('.canvas-row-cell'),
                borderStyle = `solid ${borderValue}px ${borderColor}`,
                borderRowHeight = model.rowHeightWithBorder,
                borderCellWidth = model.cellWidthWithBorder,
                defaultRowHeight = model.rowHeight,
                defaultCellWidth = model.cellWidth;
            switch (true) {
                case (model.viewMode === "grid"):
                    //Initiate loop for all rows and increase row's height if border will be applied
                    allRows.forEach((currentRow, currentRowIndex, rowsArray) => {
                        let currentRowCells = currentRow.childNodes,
                            isLastRow = this.isLastElement(currentRowIndex, rowsArray);
                            (!isLastRow) ? currentRow.style.height = borderRowHeight : currentRow.style.height = defaultRowHeight;
                        //Set appropriate styles for cells - border/height/width
                        currentRowCells.forEach((currentCell, currentCellIndex, cellsArray) => {
                            let isLastCell = this.isLastElement(currentCellIndex, cellsArray);
                            if (!isLastRow) {
                                (!isLastCell) ? currentCell.style.cssText = `border-bottom: ${borderStyle}; border-right: ${borderStyle}; width: ${borderCellWidth}` :
                                (isLastCell) ? currentCell.style.cssText = `border-bottom: ${borderStyle}; width: ${defaultCellWidth}` : "";
                            } else {
                                (!isLastCell) ? currentCell.style.cssText = `border-right: ${borderStyle}; width: ${borderCellWidth}` : ""; 
                            }
                        }) 
                    
                    })
                    break;
                case (model.viewMode === "canvas"):
                    allRows.forEach(row => row.style.height = defaultRowHeight);
                    allCells.forEach(cell => cell.style.cssText = `width: ${defaultCellWidth}`);
            }      
        },
    }
} 