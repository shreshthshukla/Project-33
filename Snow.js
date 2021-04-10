class Snow {
    constructor(x,y,angle){
        var options = {
            restitution:1,
            friction:0.1,
            density:1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("Snow.png");
        World.add(world, this.body);
        // this.body = Bodies.circle(x,y,5,options);
        // this.radius = 5;
        // World.add(world,this.body);
    }
    updateY(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,width-50),y:random(0,50)})
        }
    }
    showSnow(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}