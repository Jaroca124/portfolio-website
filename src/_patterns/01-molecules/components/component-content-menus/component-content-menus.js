var componentContentMenu = (function() {
    'use strict';
   
    /* =================== private methods ================= */
    function computeActiveSection() {
        stickybits('#stickybits-target');

        $(window).on('scroll', () => {
            let activeSection = $('.component--content-menu').find('.active');
            if (activeSection.length) {
                // console.log(activeSection);
                let $collapseButton = $('#' + activeSection.parentsUntil('.collapse').parent().attr('aria-labelledby'));
                if ($collapseButton.attr('aria-expanded') == "false") {
                    $collapseButton.trigger('click');
                }
            }
        });
    }

    /* =================== public methods ================== */
    function init() {
        computeActiveSection();
    }
    /* =============== export public methods =============== */
    return {
        init: init
    };
}());