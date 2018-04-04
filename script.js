/* 

GAME STORIES:

1. User must be able to view the grid.
    a) User needs to be able to choose between a canvas and a grid view.
    b) User must be able to choose grid's thickness.
    c) User must be able to choose grid's color.
    
2. User must be able to alter the grid proportions via sliders
    a) sliders must be linked by default (altering one, will alter both) but user must be able to lock chosen slider.
    b) User must be able to apply set proportions with a button (it will remove current colors).
    c) user needs to be able to reset the proportions to default via a button (it will remove current colors).
   

3. User must be able to zoom in/zoom out the canvas.
     a) User must see the current zoom level when zooming in/zooming out.
     b) Zooming in must stop when a single cell have a size of the canvas.
     c) Zooming out must stop when a single cell have its initial size (scale 1.0);

4. User must be able to choose between "hover" or "click-then-hover" modes:
    a) for "click-then-hover", unclick will disable the effect
    b) user needs to be able to clear the grid via a button

5. User must be able to select chosen color or set the generator to choose randomly. 

6. User must be able to choose an erasor, with the same modes as the painting have.




*/



var controller = gameController();
var view = gameView();
var model = gameModel();