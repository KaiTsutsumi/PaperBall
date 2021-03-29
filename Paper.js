class Paper {
    constructor(x,y){
        var options = {
            isStatic:false,
            'restitution':0.3,
            'friction':0,
            'density':1.2,
        }

        this.body = Bodies.rectangle(x, y, 60, 60, options);
        this.width = 60;
        this.height = 60;
        this.image = loadImage("paper.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill("white");
        stroke("white");
        rect(0,0,this.width,this.height);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();

    }
    

}