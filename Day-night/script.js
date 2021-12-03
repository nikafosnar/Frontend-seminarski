var backgroundLight = document.querySelector(".light");
var buttonLight = document.querySelector(".light-b");
var hideT = document.querySelector(".hide");
var showT = document.querySelector(".show");

buttonLight.addEventListener('click', () => {  
    backgroundLight.classList.toggle("dark");
    backgroundLight.classList.toggle("light");
    buttonLight.classList.toggle("dark-b");
    buttonLight.classList.toggle("light-b");
    hideT.classList.toggle("show");
    hideT.classList.toggle("hide");
    showT.classList.toggle("show");
    showT.classList.toggle("hide");
});




