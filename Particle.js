class Particle{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            friction:2
        }
        this.x = x;
        this.y=y;
        this.r=r;
        this.color = color(random("#ff2200"), random(0,255), random(0 , 255));
        this.body=Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
    push();

    translate(pos.x,pos.y)
    rotate(this.body.angle)
    ellipseMode(CENTER) 
    ellipse(0,0,this.r,this.r)
   fill(this.color)
   pop();
  }    
}