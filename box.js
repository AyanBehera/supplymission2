class Box{
    constructor(x, y, width, height){
        var options = {
            isStatic: true, 
            'restitution':1,

        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        
    }
}
