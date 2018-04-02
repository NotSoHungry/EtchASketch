var gameModel = function () {
    
    var _widthRatio = 24,
        _heightRatio = 24,
        _viewMode = "canvas";

    return {
        get widthRatio() {
            return _widthRatio;
        },

        get heightRatio() {
            return _heightRatio;
        }
    } 
}


