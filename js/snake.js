/**
 * Created by HaiNNT on 9/28/2014.
 */

function Snake(speed, position){
    this.position = position;
    this.speed = speed;
    this.ready = true;
    this.image = new Image();
    this.image.src = STR_SNAKE_IMG;
    this.image.onload = function(){
       this.ready = true;
    }
    this.isAlive = true;
    this.part = [];
    this.dimension = INT_SNAKE_DIM;

    this.move = function(x, y, modifier){
        var distance = 10;
        if(Math.abs(x - this.position.x)>10 || Math.abs(y - this.position.y)>10) {

            for (var i = this.part.length - 1; i > 0; i--) {
                this.part[i].position.x = this.part[i - 1].position.x;
                this.part[i].position.y = this.part[i - 1].position.y;
            }

            if (this.part.length > 0) {
                this.part[0].position.x = this.position.x;
                this.part[0].position.y = this.position.y;
            }

            if(Math.abs(x - this.position.x)>distance) {
                this.position.x = this.position.x < x ? this.position.x + distance : this.position.x == x ? x : this.position.x - distance;
            }
            if(Math.abs(y - this.position.y)>distance) {
                this.position.y = this.position.y < y ? this.position.y + distance : this.position.y == y ? y : this.position.y - distance;
            }

        }
    }

    this.eat = function(){
        this.length += 1;
    }

    this.die = function(){
        this.isAlive = false;
    }
}

function snakePart(position){
    this.ready = true;
    this.image = new Image();
    this.image.src = STR_SNAKE_PART_IMG;
    this.image.onload = function(){
        this.ready = true;
    }
    this.position = position;
    this.dimension = INT_SNAKE_DIM;

    this.move = function(x, y){
        this.position.x = x;
        this.position.y = y;
    }
}
