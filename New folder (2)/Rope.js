class rope {
    constructor(bodyA,bodyB,offsetX,offsetY){
         
         offsetX = offsetX;
         offsetY = offsetY;
            var options = {
            bodyA: bodyA,
            bodyB: bodyB
            posB: { x: offsetX, y: offsetY}.
         }

         this.rope = Constraint.create(options);
         World.add(world, this.rope);
        
}
         display(){
             var posA = this.rope.bodyA.position;
             var posB = this.rope.bodyB.position;

             var positionA = posA.x;
             var positionB = posB.y;
             var positionC = posB.x + offsetX;
             var positionD = posB.y = offsetY;

             strokeWeight(3);
             stroke("white");

            Line(positionA,positionB.positionC,positionD)
        }
     }
