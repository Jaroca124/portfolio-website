$(document).ready(function() {
    /*var bar = new ProgressBar.Circle('#demo-progress-circle', {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        color: '#417dc1',
        trailColor: '#fff',
        trailWidth: 0,
        svgStyle: null
    });

    bar.animate(1.0);*/ // Number from 0.0 to 1.0

    var overallGPA = new ProgressBar.Circle('#overall-gpa-circle', {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        color: '#417dc1',
        trailColor: '#fff',
        trailWidth: 0,
        svgStyle: null
    });

    overallGPA.animate(.99); // Number from 0.0 to 1.0

    var majorGPA = new ProgressBar.Circle('#major-gpa-circle', {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        color: '#417dc1',
        trailColor: '#fff',
        trailWidth: 0,
        svgStyle: null
    });

    majorGPA.animate(1.0); // Number from 0.0 to 1.0
});