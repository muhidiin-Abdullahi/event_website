document.addEventListener('DOMContentLoaded', function () {
   const textContainer = document.getElementById('textContainer');
   const colors = ['text-white', 'text-black', 'text-red-500']; // Add your desired colors here
   let currentIndex = 0;
 
   function changeColor() {
     currentIndex = (currentIndex + 1) % colors.length;
     textContainer.className = `sm:text-4xl text-2xl sm:ml-0  font-bold pt-11 transition duration-300 ease-in-out ${colors[currentIndex]}`;
     setTimeout(changeColor, 1000); // Change color every 10 seconds
   }
 
   // Initial call to start the color-changing loop
   changeColor();
 });
 const menuIcon = document.querySelector("#menuIcon")
const menu = document.querySelector("#menu")
const closeIcon = document.querySelector("#closeIcon")


menuIcon.addEventListener("click",function(){
    menu.style.display = "flex";
    closeIcon.style.display = "block"
    menuIcon.style.display = "none"
})

closeIcon.addEventListener("click", ()=>{
    menu.style.display = "none";
    closeIcon.style.display = "none"
    menuIcon.style.display = "block"
})