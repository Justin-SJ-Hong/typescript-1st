// 1. String
let dogName: string = "Justin";
console.log("String", dogName);

let breed: string = "Jindo Dog";
console.log("String", breed);

// 2. Number
let weight: number = 60;
console.log("Number", weight);

// 3. Boolean
let isCute: boolean = true;
console.log("Boolean", isCute);

let user: String | null = null;

function login(userName: string) {
    user = userName;
}

function logout() {
    user = null;
}

login("Justin");
logout();

let someValue: any;
someValue = false;

console.log("Any", someValue)

console.log(`${breed} ${dogName} is ${weight} kg!`)