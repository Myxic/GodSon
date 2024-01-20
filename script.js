document.addEventListener("DOMContentLoaded", function () {

    const HamburgerMenu = document.querySelector('.HamburgerMenu');

    const Menu = document.querySelector('.hamburger-container');

    const navMenu = document.querySelector('.navMenu');

   let scrollDisabled = false;

   function toggleScroll(){
    scrollDisabled = !scrollDisabled;
        if(scrollDisabled){
            disableScroll();    
        }else{
            enableScroll();
        }

   }

   function disableScroll(){
    document.body.style.overflow = 'hidden';
      console.log('disableScroll');
   }

   function enableScroll(){
   document.body.style.overflow = 'auto';
    console.log('enableScroll');}



    HamburgerMenu.addEventListener('click', function() {
            navMenu.classList.toggle('hamburger-container');
            toggleScroll();
    });




});