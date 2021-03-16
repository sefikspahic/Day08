// Write code below this line
function function1() {
  notGlobaVariable = 5;
}

var myGlobalVariable;
myGlobalVariable = 10;
// Write code above this line

function function2() {
  var result = " ";
  if (typeof myGlobalVariable != "undifiend") {
    result += " myGlobalVariable: " + myGlobalVariable;
  }
  if (typeof notGlobaVariable != "undefined") {
    result += " notGlobalVariable: " + notGlobaVariable;
  }
  console.log(result);
}

function1();
function2();
module.exports = {
  function1,
  function2
};
