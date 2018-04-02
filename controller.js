var gameController = function () {

    return {
        calculateCellWidthPercentage: function() {
            let canvasHeight
            return Number(100 / model.widthRatio)
                .toString()
                .concat("%");
        },

        calculateRowHeightPercentage: function() {
            return Number(100 / model.heightRatio)
                .toString()
                .concat("%");
        },

        calculateRowHeightWithMargin: function(marginValue) {
            let allMarginsProduct = marginValue / model.heightRatio;
            return `calc(${this.calculateRowHeightPercentage()} + ${allMarginsProduct}px)`;
        },

        calculateCellWidthWithMargin: function(marginValue) {
            let allMarginsProduct = marginValue / model.widthRatio;
            return `calc(${this.calculateCellWidthPercentage()} + ${allMarginsProduct}px`;
        },
    }
}    