//? Change Elements
// 1. Using JavaScript, select the h1 element inside the "hero-image" class
document.querySelector(".hero-image h1")
// 2. Change the text to say "My Hero" instead
var kid = document.querySelector(".hero-image h1").textContent = "My Hero"; // IT WORKS!
//? Change Classes
// 3. Add the class "hero-alt" to the h1 element inside the "hero-image" class
var newClass = document.querySelector(".hero-image h1").classList.add("hero-alt"); // IT WORKS!
// 4. Select the element containing the id "hero"
document.querySelector("#hero")
// 5. Remove the class "fallback" on that element in step 4
var takeOut = document.querySelector("#hero").classList.remove("fallback"); // IT WORKS!

//? Change Attributes
// 6. Add the title attribute to the element containing the id "hero" with the value of "My brave hero"
var newTitle = document.querySelector("#hero").setAttribute("title", "My brave hero") // IT WORKS!

//? Add DOM Elements
// 7. Create an anchor element
var a = document.createElement('a');
// 8. Set the link text to "Learn More"
var newText = document.createTextNode("Learn More");
a.appendChild(newText);
// 9. Add the href attribute with a value of "https://www.google.com/search?q=hero"
a.href = "https://www.google.com/search?q=hero";
// 10. Add the class "link" to the anchor element
a.classList.add("link");
// 11. Add the anchor element to the DOM inside the element containing the class "hero-image"
var position = document.querySelector(".hero-image");
position.appendChild(a); // IT WORKS!

//? Apply inline style to an element
// 12. Using inline styling, modify the color of the anchor element to be "#d92b4b"
a.setAttribute("style", "color:#d92b4b"); // IT WORKS!

//This is fun...must practice more :)