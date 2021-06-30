class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.4,
            length: 50
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
    if(this.sling.bodyA){

    
        var pointA=this.sling.bodyA.position
     line (pointA.x,pointA.y,this.pointB.x,this.pointB.y)
    }
    }
}