var gameController = function () {

    return {

        generateRandomNumber(maxNumber) {
            return Math.floor(Math.random * maxNumber);
        },
        
        getCellWidth: function() {
            let canvasHeight
            return Number(100 / model.widthRatio)
                .toString()
                .concat("%");
        },

        getRowHeight: function() {
            return Number(100 / model.heightRatio)
                .toString()
                .concat("%");
        },

        getRowHeightWithBorder: function(borderValue) {
            let heightToAdd = borderValue / model.heightRatio;
            return `calc(${this.getRowHeight()} + ${heightToAdd}px`;
        },

        getCellWidthWithBorder: function(borderValue) {
            let widthToAdd = borderValue / model.widthRatio;
            return `calc(${this.getCellWidth()} + ${widthToAdd}px`;
        },

        isLastElement: function(elementIndex, array) {
            return (elementIndex === array.length - 1) ? true : false;
        }


    }
}    