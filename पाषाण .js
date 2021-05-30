class Pebble{
    constructor(bodyA, pointBo){
        var options = {
            bodyA: bodyA,
            pointB: pointBo,
            stiffness: 0.004,
            length: 20
        }
        this.stone = Constraint.create(options);
        World.add(world, this.stone);
        this.pointB = pointBo;
    }

    display(){
        if(this.stone.bodyA){
        var pointA = this.stone.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }

        }
    fly(){
    this.stone.bodyA = null;
    
    }
    
}