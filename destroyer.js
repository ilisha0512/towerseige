class box{
      constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,radius,options);
      this.radius = radius;
      //this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("lime");
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}