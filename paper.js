class paperMake{
  constructor(x,y,r){
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 1.5,
          density: 0.2
      }
      this.image = loadImage("paper.png");
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r,options);
      World.add(world, this.body);
  }
  display(){
      var paperpos = this.body.position;
      push();
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      //fill(0,200,255);
      imageMode(CENTER);
      image(this.image, 0, 0, this.r+40, this.r+40);
      //ellipse(0,0,this.r,this.r);
      pop();
  }
}