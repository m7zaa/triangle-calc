$(document).ready(function(){
console.log("Jquery is working!");



  $("#submit-button").click(function(event){
    event.preventDefault();
    console.log("The button works");

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    console.log(side1);
    console.log(side2);
    console.log(side3);
    // If not a triangle


  if (side1 != NaN || side2 || NaN || side3 !=NaN){
      console.log("Enter a non-zero length");

  }else if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      console.log("Not a triangle");

  } else if (side1 === side2 && side2 === side3) {
      console.log("Triangle is equilateral");

  }else if (side1 === side2 || side2 === side3 || side1 === side3) {
      console.log("Triangle is isosceles");

  }else if (side1 != side2 != side3) {
      console.log("The triangle is scalene");
  }else{
      console.log("How did you get here??");
  }

  });


//   if (side1 === side2 && side2 === side3) {
//     console.log("Triangle is equilateral");
//
// }else if (side1 === side2 || side2 === side3 || side1 === side3) {
//     console.log("Triangle is isosceles");
//
// }else if (side1 != side2 != side3) {
//     console.log("The triangle is scalene");
// }else{
//     console.log("How did you get here??");
// }
//
// });













});
