var question = alert("Lets watch 3 cars race!");

var Car = function (n, s, t) {
  this.name = n;
  this.speed = s;
  this.torque = t;
  this.position = 0;
  this.report = function () {
    return this.name + " has reached " + this.position;
  };
  this.run = function () {
    if (this.torque > (Math.random() * 1000)) {
      this.position += this.speed;
    }
    if (this.position == 500) {
      alert("Looks like " + this.name + " is ahead!");
    }
    if (this.position == 1000) {
       alert( this.name + " has won the race! Refresh to see them race again!");
    }
  };
}

var nissan = new Car ("GTR", 50, 300);
    toyota = new Car ("Supra", 200, 50);
    subaru = new Car ("LFA", 100, 100);

var distance = 1000;
while(nissan.position < 1000 && toyota.position < 1000 && subaru.position < 1000) {
  nissan.run();
  toyota.run();
  subaru.run();
};

console.log(nissan.report());
console.log(toyota.report());
console.log(subaru.report());

