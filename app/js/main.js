$(window).load(function() {

});
/*******************************document .ready ********************************/
$(document).ready(function() {

    $('.js-dropdown-menu li a').click(function(){
        $(this).parents(".js-dropdown-menu").prev(".js-dropdown-toggle").find('.js-selected').text($(this).text());
    });
    $(".js-catalog-open").click(function(){
        $(this).next(".catalog-menu-wrapper").fadeToggle('100');
    });

    /*plus/minus*/
    $('.js_minus').on('click', function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.attr('value')) - 1;
        count = count < 1 ? 1 : count;
        $input.attr('value',count);
        $input.change();
        return false;
    });
    $('.js_plus').on('click', function () {
        var $input = $(this).parent().find('input');
        $input.attr('value',parseInt($input.attr('value')) + 1);
        $input.change();
        return false;
    });
});
/*******************************end document .ready ********************************/
/*======================================== google map obj and markers ======================================*/
/* --------------- start validation --------------*/
/* --------------- end validation --------------*/
/*! http://mths.be/placeholder v2.0.7 by @mathias */