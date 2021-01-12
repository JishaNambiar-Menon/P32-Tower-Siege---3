class Block{
    constructor(x,y){
        var options = {
            restitution: 0.4,
            friction: 0.0,  
        }     
        this.visibility=255
        this.body= Bodies.rectangle(x,y,30,40,options);
        this.height=40;
        this.width=30;
        World.add(world,this.body)
        
}
display(){
    var pos = this.body.position;
    rectMode(CENTER);
    
    if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else
      {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility -5;
        pop();
      }
}
score(){
  if(this.visibility<0 && this.visibility>-105){
    score++
  }
}
}