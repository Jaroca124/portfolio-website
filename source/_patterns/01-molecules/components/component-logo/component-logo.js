$(document).ready(function() {
    if ($('#component--logo__circle').length) {
        var bar = new ProgressBar.Circle('#component--logo__circle', {
            strokeWidth: 3,
            easing: 'easeInOut',
            duration: 2000,
            color: '#fff',
            trailColor: '#000',
            trailWidth: 0,
            svgStyle: null
        });

        bar.animate(1.0); // Number from 0.0 to 1.0
    }
});