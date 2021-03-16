// Only change code below this line
var sum = 0;

function addThree() {
  sum = sum + 3;
  console.log(sum);
}

function addFive() {
  sum = sum + 5;
  console.log(sum);
}

addThree(3);
addFive(5);
// Only change code above this line
module.exports = {
  addThree,
  addFive,
};
