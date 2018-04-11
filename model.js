var gameModel = function () {
    
    var _widthRatio = 48,
        _heightRatio = 48,
        _viewMode = "canvas",
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


