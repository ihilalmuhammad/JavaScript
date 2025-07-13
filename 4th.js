// Loops in javascript 
// 1. For Loop
for (let i=0; i <= 10; i++){
    console.log("num is " + i)
}

let object = {
    name: "John",
    age: 30,
    city: "New York"
}

for (let key in object) {
    console.log(key + " is " + object[key]);
}