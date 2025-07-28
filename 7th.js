//  What is an Array?
// An array in JavaScript is a collection of values stored in a single variable.

// You can think of it like a list or a box that can hold multiple items, such as:

// numbers

// strings

// objects

// examples of arrays:
 let fruits = ["Apple", "Banana", "Mango"];
 let numbers = [1, 2, 3, 4, 5];
 let mixed = [1, "Apple", true, null];

//  Accessing Array Items (Indexing)

 let cars = ["Toyota", "Honda", "BMW"];

console.log(cars[0]); // Output: "Toyota"
console.log(cars[1]); // Output: "Honda"
console.log(cars[2]); // Output: "BMW"
console.log(cars[3]); // Output: undefined (no fourth element)

// changing Array Items

cars[1] = "Suzuki"; // replaces "Honda" with "Suzuki"
console.log(cars);  // ["Toyota", "Suzuki", "BMW"]

//  Array Length
console.log(cars.length); // Output: 3 (number of elements in the array)

// 🔹 Common Array Methods
// Method	What it does
// push()	Add item at the end
// pop()	Remove item from the end
// shift()	Remove item from the start
// unshift()	Add item at the start
// length	Get number of elements in array
// forEach()	Run a function for each item
// map()	Create a new array by transforming
// filter()	Create a new array by conditions
 cars.push("prius")
console.log(cars); // ["Toyota", "Suzuki", "BMW", "prius"]
cars.pop("prius"); // removes the last item
console.log(cars); // ["Toyota", "Suzuki", "BMW"]
cars.shift(); // removes the first item
console.log(cars); // ["Suzuki", "BMW"]
cars.unshift("Mercedes"); // adds a new item at the start
console.log(cars); // ["Mercedes", "Suzuki", "BMW"]
cars.forEach(car => console.log(car)); // prints each car


//  Real-World Use Case
// Imagine you’re showing products on a website:
let products = ["Mobile", "Laptop", "Tablet"];

products.forEach(function(item) {
  console.log("Buy now:", item);
});
// Output:
// Buy now: Mobile