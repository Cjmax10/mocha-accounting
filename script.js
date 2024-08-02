document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu div');
    const mobileMenu = document.querySelector('.nav-menu-wrapper');
    const body = document.querySelector('body');

    hamburgerMenu.addEventListener('click', function() {
        hamburgerMenu.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('no-overflow');
    });


    
    const next = document.querySelector('.right-button');
    next.addEventListener('click', changeClass);

    function changeClass() {
        const carousel = document.querySelector('.carousel');
        const cards = Array.from(carousel.children);

        let temp;
        for(i = 0; i < cards.length; i++) {
            if(cards[i].classList.contains('center')) {
                cards[i].classList.remove('center');
                temp = i + 1;
            }
        }
        cards[temp].classList.add('center'); 
        duplicateNode();
    }

    function duplicateNode() {
        // Carousel
        const carousel = document.querySelector('.carousel');
        const cards = Array.from(carousel.children);

        const duplicateCard = cards[0].cloneNode(true);
        carousel.appendChild(duplicateCard);
        carousel.querySelector('.card').remove();
        
        centerElement();
    }
});

