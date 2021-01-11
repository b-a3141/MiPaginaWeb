/*
console.log( "hola loco ");//lo habilito solo para probar por consola si esta funcionando el enlace
*/
document.querySelector(".menu-btn").addEventListener("click", () => {
document.querySelector(".nav-menu").classList.toggle("show");
});
 /*la clase toggle sirve para 
If force is not given, "toggles" token, removing it if it's present and adding it if it's not present.*/

ScrollReveal().reveal(".showcase");
ScrollReveal().reveal('.news-cards', {delay: 500 });
ScrollReveal().reveal('.cards-banner-one' , { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });