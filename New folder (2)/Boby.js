class Body {
  constructor(x,y) {
    var option = {
      restitution: 1.1,
      density: 1.,2
    };
    
     this.body = Bodies.circle(x,y,25,options);
     World.add(world, this.body); 
  }
  display() {
      var pos = this.body.position;
      fill("pruple");
      ellipseMode(RADIUS);
      ellipse(position.x,position.y,25,25);
  }
}