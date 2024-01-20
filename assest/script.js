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










const ListOfImages = ["/GodSon/Images/Rectangle548.png", "/GodSon/Images/giftset1.png", "/GodSon/Images/giftset2.png", "../Images/Rectangle"];

const Listheaders = ["Bird’s Nest Café Toy Set","Lego Robot Toy Set", "Space Station Toy Set"];

const ListWriteups = ["Your little one will love creating their own tricky course with this mini golf set","Your little one will love creating their own Robots SET","Your little one will love creating their own Space Station SET"];

const heroImage = document.querySelector('.hero-image');

const HeaderTag = document.querySelector('.hero-writeup-content h2');

const writeupTags = document.querySelector('.hero-writeup-content p')

const NavsControls = document.querySelectorAll('.hero-nav div');

const productsDivs = document.querySelectorAll('.featured-products-images-container > div');


const nextButton = document.querySelector('#nextProduct')

const prevButton = document.querySelector('#prevProduct');


let currentImageIndex = 1;

let currentProductIndex = 0;

function switchHero(){
    heroImage.style.backgroundImage = `url(${ListOfImages[currentImageIndex]})`;

    HeaderTag.textContent = Listheaders[currentImageIndex];

    writeupTags.textContent = ListWriteups[currentImageIndex];

    NavsControls.forEach(element => {
        element.classList.remove('hero-nav-active');

    });

   

    NavsControls[currentImageIndex].classList.add('hero-nav-active');

    currentImageIndex = (currentImageIndex + 1);

    if (currentImageIndex === 3){
        currentImageIndex = 0;
    }
   

   
}

setInterval(switchHero, 5000);


function switchProduct(){
    productsDivs.forEach(element => {
        element.classList.remove('featured-products-images-container-active');
    });

    productsDivs[currentProductIndex].classList.add('featured-products-images-container-active');

}

nextButton.addEventListener('click', function(){
    if(currentProductIndex ===  productsDivs.length - 1){
        currentProductIndex = -1;
    }
    currentProductIndex++;
    switchProduct()
   
});

prevButton.addEventListener('click', function(){
    if(currentProductIndex === 0 ){
        currentProductIndex = productsDivs.length;
    }
    currentProductIndex--;
    switchProduct()
   

   
});




});