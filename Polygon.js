class Polygon{
    constructor(x,y){
        var options={
            
        }
        this.polygonImage= loadImage("polygon.png")
        this.body= Bodies.circle(x,y,20,options)
        World.add(world,this.body)
    }
    display(){
        var angle = this.body.angle;
        angleMode(RADIANS)
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.polygonImage,this.body.position.x,this.body.position.y,40,40)
        //image(this.image, 0, 0, this.width, this.height);
        //this.body= loadImage(img);
        //pop();
              
       
        
    }
}