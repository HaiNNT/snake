/**
 * Created by HaiNNT on 9/28/2014.
 */
(function(){

    //Init canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 800;
    canvas.height = 600;
    document.body.appendChild(canvas);

    //Declare variables
    var modifier;
    var map = new Map();
    map.things.push(new Rock(new Position(200, 400)));
    map.things.push(new Rock(new Position(500, 400)));
    var snake = new Snake(10, new Position(400, 300));
    snake.part.push(new snakePart(new Position(390, 300)));
    snake.part.push(new snakePart(new Position(380, 300)));
    snake.part.push(new snakePart(new Position(370, 300)));
    snake.part.push(new snakePart(new Position(360, 300)));

    var mouse = {x: 0, y: 0};

    document.addEventListener('mousemove', function(e){
        mouse.x = e.clientX || e.pageX;
        mouse.y = e.clientY || e.pageY
    }, false);

    //Reset game, everything reset to default
    function reset(){

    }


    //Update all component's status
    function update(){
        snake.move(mouse.x, mouse.y,modifier);
    }

    // Draw everything
    var render = function() {
        if (map.ready) {
            ctx.drawImage(map.background, 0, 0);
            for(var i = 0; i < map.things.length; i++){
                ctx.drawImage(map.things[i].image, map.things[i].position.x, map.things[i].position.y);
            }
        }
        if(snake.ready){
            ctx.drawImage(snake.image, snake.position.x, snake.position.y);
            for(var i = 0; i < snake.part.length; i++){
                ctx.drawImage(snake.part[i].image, snake.part[i].position.x, snake.part[i].position.y);
            }
        }
    }



    var main = function() {
        var now = Date.now();
        var delta = now - then;
        modifier = delta / 1000;
        update();
        then = now;

    };

// Let's play this game!
    reset();
    var then = Date.now();

    setInterval(render, 1); // Execute as fast as possible
    setInterval(main, 200);

})()