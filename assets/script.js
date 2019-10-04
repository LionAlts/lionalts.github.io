document.onreadystatechange = function() {
    var state = document.readyState
    if (state == 'complete') {
        AOS.init();
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
        console.log("Handcrafted by Eshxn.Xyz");
        console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=");
    }
}
$(document).ready(function() {
    var stickyNavTop = 20;
    var stickyNav = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > stickyNavTop) {
            $('.nav-main').css('background', '#2c2f33');

        } else {
            $('.nav-main').css('background', 'transparent');
        }
    };
    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});

$(document).ready(function(){
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-70
    }, 600);
    return false;
});
  $('.feedback-holder').slick({
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: `<i class="hvr-backward fas fa-arrow-left"></i>`,
    nextArrow: `<i class="hvr-forward fas fa-arrow-right"></i>`
  });
});