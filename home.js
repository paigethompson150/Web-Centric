$(document).ready(function() {
    function animateTitle() {
        var titleWidth = $('.scrolling-title').width();
        $('.scrolling-title').animate({left: -titleWidth}, 10000, 'linear', function() {
            $(this).css('left', '100%');
            animateTitle();
        });
    }

    animateTitle();

    $('.scrolling-title').hover(
        function() { $(this).stop(); },
        function() { animateTitle(); }
    );
});
