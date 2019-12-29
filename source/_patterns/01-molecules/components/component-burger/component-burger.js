$(document).ready(function() {
    if ($('.component--burger').length) {
        var renderBurgerBool = true;
        var burgerTrigger = $('.section--default--burgerbuilder').offset().top;
        $(window).scroll(function() {   
            if ((($(window).scrollTop() + ($(window).height() / 2)) >= burgerTrigger) && renderBurgerBool) {
                renderBurger();
                renderBurgerBool = false;
            }
        });
    }

    var ingredientPositions = {
        'top-bun': '173%',
        'bacon': '189%',
        'cheese': '72%',
        'meat': '-28%',
        'tomatos': '-90%',
        'lettuce': '-97%',
        'bottom-bun': '-269%'
    };

    function renderBurger() {
        $('.component--burger__ingredient').each(function() {
            $(this).css({'transform': 'translate(0, 0)'});
        });
        setTimeout(function() {
            returnIngredients();
        }, 3000);
    }

    function returnIngredients() {
        $('.component--burger__ingredient').each(function() {
            var ingredient = $(this).attr('class').split('component--burger__ingredient--')[1];
            var ingredientPosition = 'translate(0, ' + ingredientPositions[ingredient] + ')';
            var targetIngredient = '.component--burger__ingredient--' + ingredient;
            $(targetIngredient).css({'transform': ingredientPosition});
        });
    }
});