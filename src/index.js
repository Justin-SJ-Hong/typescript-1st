// 1. String
var dogName = "Justin";
console.log("String", dogName);
var breed = "Jindo Dog";
console.log("String", breed);
// 2. Number
var weight = 60;
console.log("Number", weight);
// 3. Boolean
var isCute = true;
console.log("Boolean", isCute);
var user = null;
function login(userName) {
    user = userName;
}
function logout() {
    user = null;
}
login("Justin");
logout();
var someValue;
someValue = false;
console.log("Any", someValue);
console.log("".concat(breed, " ").concat(dogName, " is ").concat(weight, " kg!"));
