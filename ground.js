class ground{

    constructor(x,y,width,Height){

       var options = {isStatic: true}
       this.body = Bodies.rectangle(x,y,width,Height,options);
       this.w = width;
       this.h = Height;
       World.add(world,this.body);
}

display(){
    var pos = this.body.position;
    rectMode(CENTER);
    rect(pos.x,pos.y,this.w,this.h);
}

}
