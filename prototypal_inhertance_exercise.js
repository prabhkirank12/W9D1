// function Surrogate() {};
// Surrogate.prototype = SuperClass.prototype;
// Subclass.prototype = new Surrogate(); //Cat.prototype.__proto__ = new Surrogate(); (Animal)
// Subclass.prototype.constructor = Subclass; //Cat.prototype.constructor = Cat;

Function.prototype.inherits = function (superClass) {
    const that = this;
    // function Surrogate() {};

    // Surrogate.prototype = superClass.prototype;
    // that.prototype = new Surrogate();
    // that.prototype.constructor = that;
    that.prototype = Object.create(superClass.prototype);
    that.prototype.constructor = that;
}


function MovingObject(color, speed) { 
    this.color = color;
    this.speed = speed;

};
MovingObject.prototype.move = function(){
    console.log(`this is the ${this.speed}`);
};

function Ship(capacity, color, speed) {
    this.capacity = capacity;
    MovingObject.call(this, color, speed);
};
Ship.inherits(MovingObject);

function Asteroid(size, color, speed) {
    this.size = size;
    MovingObject.call(this, color, speed);
 };
Asteroid.inherits(MovingObject);

let ship1 = new Ship(4, 'black', 50);
console.log(ship1);
ship1.move();
// let moving1 = new MovingObject('brown', 100);
// console.log(moving1.__proto__);