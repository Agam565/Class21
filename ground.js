class Ground  {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        var groundOptions = {
            isStatic:true
        }
        this.ground = Bodies.rectangle(x,y,w,h, groundOptions)
        World.add(world,this.ground)
    }    
   show() {
    var pus = this.ground.position
    push()
    rectMode(CENTER)
    stroke("green")
    fill("red")
    rect(pus.x, pus.y, this.w, this.h)
    pop()
   }

}