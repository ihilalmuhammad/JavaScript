  alert("Hello, this is my first JavaScript file!");
    var a = prompt("Please enter your name:");
    while (a === null || a.trim() === "") {
      a = prompt("Name is required. Please enter your name:");
    }
      console.log("Your Name is " + a);
      document.querySelector("button").addEventListener("click", function () {
        alert("Button clicked!");
      });