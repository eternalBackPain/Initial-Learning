/**
 * Traverse the DOM tree using querySelector() and querySelectorAll()
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
 */


//in the console:
//getting by elememt: document.querySelector("main")
//getting by class: document.querySelector(".maincontent")
//getting all objects: document.querySelectorAll("main li")
//getting all objects: document.querySelectorAll("main li")



 import Backpack from "./Backpack.js";

 const everydayPack = new Backpack(
   "Everyday Backpack",
   30,
   "grey",
   15,
   26,
   26,
   false,
   "December 5, 2018 15:00:00 PST",
   "everyday.svg"
 );
 
//when using querySelector/querySelectorAll, you can select 
//by either the whole tag, or a specific class.
//This was previously done with getElementByID/getElementbyClassName

 const main = document.querySelector(".maincontent");
 
 const content = `
   <article class="backpack" id="everyday">
     <figure class="backpack__image">
       <img src=${everydayPack.image} alt="" />
     </figure>
     <h1 class="backpack__name">${everydayPack.name}</h1>
     <ul class="backpack__features">
       <li class="backpack__volume">Volume:<span> ${
         everydayPack.volume
       }l</span></li>
       <li class="backpack__color">Color:<span> ${everydayPack.color}</span></li>
       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
       <li class="backpack__pockets">Number of pockets:<span> ${
         everydayPack.pocketNum
       }</span></li>
       <li class="backpack__strap">Left strap length:<span> ${
         everydayPack.strapLength.left
       } inches</span></li>
       <li class="backpack__strap">Right strap length:<span> ${
         everydayPack.strapLength.right
       } inches</span></li>
       <li class="backpack__lid">Lid status:<span> ${
         everydayPack.lidOpen
       }</span></li>
     </ul>
   </article>
 `;
 
 main.innerHTML = content;