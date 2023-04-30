/* This code is adding functionality to a website's navigation bar using jQuery. It adds a class
"sticky" to the navbar when the user scrolls down more than 20 pixels, and removes the class when
the user scrolls back up. It also toggles the class "active" on the menu and menu button when the
menu button is clicked. */
/* This code is using jQuery to add functionality to a website's navigation bar. */
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500)
        {
            $('.scroll-up-btn').addClass('show');
        }
        else{
            $('.scroll-up-btn').removeClass('show');
        }
    });
    
    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })


    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Software Developer","competitive programmer", "Web Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    var typed2 = new Typed(".typing-2", {
        strings: ["Software Engineer", "Web Developer", "Web Designer", "UI/UX Designer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

