class paper{
    constructor(x,y,r){
        var options={
            restitution: 0.4,
            friction: 1.2,
            density: 1.0
        }
        this.image = loadImage('paper.png');
        this.body = Bodies.rectangle(x,y,r, options);
        this.radius = r;
        World.add(world,this.body);
    }


    display(){
        var pos = this.body.position;
        push();

        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.r);
        pop();
    }
}