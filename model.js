var gameModel = function () {
    
    let _gameActive = false,
        _widthRatio = 48,
        _heightRatio = 48,
        _viewMode = "canvas",
        _borderValue = 1,
        _currentBorderThickness = 1,
        _currentBorderColor = "black",
        _currentBrush = "paint",
        _currentBrushMode = "hover",
        _currentColor = "black",
        _currentZoom = 1;

    return {
        get widthRatio() {
            return _widthRatio;
        },

        get heightRatio() {
            return _heightRatio;
        },

        get cellWidth() {
            return Number(100 / _widthRatio).toString().concat("%");
        },

        get cellWidthWithBorder() {
            let widthToAdd = _borderValue / _widthRatio;
            return `calc(${this.cellWidth} + ${widthToAdd}px`;
        },

        get rowHeight() {
            return Number(100 / _heightRatio).toString().concat('%');
        },

        get rowHeightWithBorder() {
            let heightToAdd = _borderValue / _heightRatio;
            return `calc(${this.rowHeight} + ${heightToAdd}px)`
        },

        randomNumber: function(maxNumber) {
            return Math.floor(Math.random * maxNumber);
        },

        get currentColor() {
            return _currentColor;
        },

        get currentBorderThickness() {
            return _currentBorderThickness
        },

        set currentBorderThickness(thicknessValue) {
            _currentBorderThickness = thicknessValue;
            return view.toogleGridView(this.currentBorderThickness, this.currentBorderColor);
        },

        get currentBorderColor() {
            return _currentBorderColor;
        },

        set currentBorderColor(colorValue) {
            _currentBorderColor = colorValue;
            return view.toogleGridView(this.currentBorderThickness, this.currentBorderColor);
        },

        get viewMode() {
            return _viewMode;
        },

        set viewMode(modeValue) {
            _viewMode = modeValue;
            return view.toogleGridView(this.currentBorderThickness, this.currentBorderColor);
        }
    } 
}


