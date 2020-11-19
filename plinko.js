class Plinko {
    constructor(x, y, radius) {
      var options = {
          'restitution':0,
          'friction':0,
          isStatic: true,
          density: 1.2
      }
      this.body = Bodies.circle(x, y, radius,options);
      this.radius= radius
      
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("white")
     ellipseMode(CENTER);
     ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };
  