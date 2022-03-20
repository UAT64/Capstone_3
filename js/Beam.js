class Beam {
    constructor(x, y, w, h) {
      let options = {
        isStatic: true
      };
  
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.image = loadImage("./assets/beam2.png")
      this.w = w;
      this.h = h;
      this.color = color;
      World.add(world, this.body);
    }
  
    show() {
      let pos = this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
     // fill("black");
      rect(0, 0, this.w, this.h);
      imageMode(CENTER)
      image(this.image,0, 0, this.w, this.h);
      
      pop(); 

    }
  }