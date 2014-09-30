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
    this.isDead = false;
    this.part = [];
    this.dimension = INT_SNAKE_DIM;

    this.move = function(x, y, modifier){
        if(Math.abs(x - this.position.x)>this.speed || Math.abs(y - this.position.y)>this.speed) {

            for (var i = this.part.length - 1; i > 0; i--) {
                this.part[i].position.x = this.part[i - 1].position.x;
                this.part[i].position.y = this.part[i - 1].position.y;
            }

            if (this.part.length > 0) {
                this.part[0].position.x = this.position.x;
                this.part[0].position.y = this.position.y;
            }

            var distance = Math.sqrt(Math.pow(Math.abs(x - this.position.x),2) + Math.pow(Math.abs(y - this.position.y),2));
            var xPlus = Math.abs(x - this.position.x)*this.speed/distance;
            var yPlus = Math.abs(y - this.position.y)*this.speed/distance;

            if(Math.abs(x - this.position.x)>this.speed) {
                this.position.x = this.position.x < x ? this.position.x + xPlus : this.position.x == x ? x : this.position.x - xPlus;
            }
            if(Math.abs(y - this.position.y)>this.speed) {
                this.position.y = this.position.y < y ? this.position.y + yPlus : this.position.y == y ? y : this.position.y - yPlus;
            }

            if(this.position.x > 800){
                this.position.x = 0;
            }

            if(this.position.y > 600){
                this.position.y = 0;
            }

        }
    }

    this.eat = function(){
        this.length += 1;
    }

    this.checkDead = function(map){
        //Check collision with snake part
        for (var i = 1; i < this.part.length; i++) {
            var xDistance = Math.abs(this.position.x - this.part[i].position.x) - this.dimension.x;
            var yDistance = Math.abs(this.position.y - this.part[i].position.y) - this.dimension.y;
            if(xDistance < -1 && yDistance < -1){
                this.isDead = true;
                break;
            }
        }
        //Check collision with rock
        for (var i = 0; i < map.things.length; i++) {
            var xDistance = Math.abs(this.position.x - map.things[i].position.x) - this.dimension.x;
            var yDistance = Math.abs(this.position.y - map.things[i].position.y) - this.dimension.y;
            if(xDistance < 0 && yDistance < 0){
                this.isDead = true;
                break;
            }
        }
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
