$(document).ready(function() {
    const hamburgerMenu = document.querySelector('.header--hamburger');

    const menuIsActive = () => {
        hamburgerMenu.classList.toggle('active');
    };

    hamburgerMenu.addEventListener('click', menuIsActive);

    const toggleMenuElement = document.getElementById('toggle-menu');
    const mainMenuElement = document.getElementById('main-menu');

    toggleMenuElement.addEventListener('click', () => {
        mainMenuElement.classList.toggle('main-menu--show')
    }, 1000);


    $('.top').click(function(){
        $('body, html').animate({
            scrollTop: '0px',

        }, 500);
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.to--top').slideDown(300);
        } else {
            $('.to--top').slideUp(300);
        }
    });

    const formularioBtn = document.getElementById('submit');

    formularioBtn.addEventListener('click', () => {
        alert("Elaborado por Sebastián Araque");
    });

});