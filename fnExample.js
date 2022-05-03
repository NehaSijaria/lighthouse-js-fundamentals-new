//Function Declaration
function greeting(name) {
  return "Hello, " + name;
};
console.log(greeting('jia'))
//Function Expression ::: anonymous function
const returnSayHello = function (name) {
  return "Hello, " + name;
};
const greetings = returnSayHello("John");
console.log(greetings);
//**** Function expressions in JavaScript are not hoisted, unlike function declarations :: You can't use function expressions before you create them:****/

//Using an Immediately Invoked Function Expression (IIFE)
//An anonymous function is created and called:
(function () {
  console.log("Code runs!");
})();
!function () {
  console.log("Code runs again!");
}();
