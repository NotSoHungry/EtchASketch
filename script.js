/* 

GAME STORIES:

1. User must be able to view the grid.
    a) User needs to be able to choose between a canvas and a grid view.
    b) User must be able to choose grid's thickness.
    c) User must be able to choose grid's color.
    
2. User must be able to alter the grid proportions via sliders
    a) sliders must be linked by default (altering one, will alter both) but user must be able to lock chosen slider.
    b) user needs to be able to reset the proportions via a button

3. User must be able to choose between "hover" or "click-then-hover" modes:
    a) for "click-then-hover", unclick will disable the effect
    b) user needs to be able to clear the grid via a button

4. User must be able to select chosen color or set the generator to choose randomly. 

5. User must be able to choose an erasor, with the same modes as the painting have.




*/



var controller = gameController();
var view = gameView();
var model = gameModel();