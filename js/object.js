/**
 * Created by HaiNNT on 9/28/2014.
 */

/**
 * Position of thing
 * @param x
 * @param y
 * @constructor
 */
function Position(x, y){
    this.x = x;
    this.y = y;
}

function Dimension(x, y){
    this.x = x;
    this.y = y;
}

function Rock(position){
    this.ready = true;
    this.image = new Image();
    this.image.src = STR_ROCK_IMG;
    this.image.onload = function(){
        this.ready = true;
    }
    this.position = position;
    this.dimension = INT_ROCK_DIM;
}

