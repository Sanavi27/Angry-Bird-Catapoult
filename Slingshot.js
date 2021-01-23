class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling1image=loadImage("sprites/sling1.png");
        this.sling2image=loadImage("sprites/sling2.png");
        this.sling3image=loadImage("sprites/sling3.png");

        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
    image(this.sling1image,200,20);
    image(this.sling2image,170,20);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push()
            if(pointA.x<200){
                strokeWeight(7);
                stroke("blue");
                line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+26, pointB.y-4);
                image(this.sling3image,pointA.x-33,pointA.y-10,15,30);
            }
        else{
                strokeWeight(5);
                stroke("blue");
                line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-4);
                image(this.sling3image,pointA.x+20,pointA.y-10,15,30);

        }
            pop()
        }
    }
   }