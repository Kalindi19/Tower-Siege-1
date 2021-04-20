class Slingshot{
    constructor(body1,pointB){
        var options={
            bodyA:body1,
            pointB:pointB,
            length:1,
            stiffness:0.04,
        }

        this.sling= Constraint.create(options);
        this.pointB=pointB;
        World.add(world,this.sling);
    }


    fly(){
        this.sling.bodyA=null;
    }

    display(){
     strokeWeight(5);
     if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
     }
     
       }


}