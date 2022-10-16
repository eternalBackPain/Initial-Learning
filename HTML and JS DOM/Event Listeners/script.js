/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

// target.addEventListener(event, callback [, options]);
    //where:
        //target = event target (e.g. button)
        //event = the thing that triggers the target (see web docs)
        //callback runs when that event is triggered
        //options is often set to false

 const container = document.querySelector(".container");
 const button = document.querySelector(".cta-button");
 const posX = document.querySelector(".posX span");
 const posY = document.querySelector(".posY span");
 
 // Log when the button is clicked in the console.
 button.addEventListener("click", () => {
   button.classList.toggle("active");
   console.log("Button was clicked!");
 }, false);
 
 // Update the x and y displays to show the current mouse position.
 const mousePosition = (event) => {
   posX.innerText = event.pageX;
   posY.innerText = event.pageY;
 };
 //event is an object with different methods to get info
 
 window.addEventListener("mousemove", mousePosition, false);
 
 // Change the color of the box when the mouse enters.
 container.addEventListener(
   "mouseenter",
   () => {
     container.classList.add("blue");
   },
   false
 );
 
 container.addEventListener(
   "mouseleave",
   () => {
     container.classList.remove("blue");
   },
   false
 );