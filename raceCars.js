$("#startRace").on('click', function() {
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
    lexus = new Car ("LFA", 100, 100);

var distance = 1000;
while(nissan.position < 1000 && toyota.position < 1000 && lexus.position < 1000) {
  nissan.run();
  toyota.run();
  lexus.run();
};

console.log(nissan.report());
console.log(toyota.report());
console.log(lexus.report());

});

$("#startRace").on("mouseenter", function() {
  $(this).text("Lets GO!");
}).on("mouseleave", function(){
  $(this).text('Start Race');
});

$(document).ready(function() { 
  $("article").on("click", "button", function() { 
    $("#cars").slideToggle();
  });
  //$('#cars').on("mouseenter", "img", function() {
  //  (this).find("div").slideToggle();
  //}).on("mouseleave", "img", function(){
  //  (this).find("div").slideToggle();
  //})
});


//JQUERY
//$(document).ready(function() {
//  $("#tour").on("click", "button", function() {
//    $(".photos").slideToggle();
//  });
//  $(".photos").on("mouseenter", "li", function() {
//    $(this).find("span").slideToggle();
//  }).on("mouseleave", "li", function() {
//    $(this).find("span").slideToggle();
//  });
//});
//HTML OUTLINE
//<div id="tour">
//  <h2>Paris, France Tour</h2>
//  <p>$2,499 for 7 Nights</p>
//  <button>See photos from our last tour</button>
//  <ul class="photos">
//    <li>
//      <img src="/assets/photos/paris1.jpg">
//      <span>Arc de Triomphe</span>
//    </li>
//    <li>
//      <img src="/assets/photos/paris2.jpg">
//      <span>The Eiffel Tower</span>
//    </li>
//    <li>
//      <img src="/assets/photos/paris3.jpg">
//      <span>Notre Dame de Paris</span>
//    </li>
//  </ul>
//</div>

