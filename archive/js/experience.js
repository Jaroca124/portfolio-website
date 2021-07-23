i = 0;
var num_slides = 3;
var gall;

//Define Current Slide
slide_index = 0;

id_dereference = {0: 'cabcs', 1: 'resilinc', 2: 'audience'};

//Define Experience Photo
bullet = ["<li>Explored an extension of the concept of adjustable autonomy, working with Yuneec Typhoon and Parrot AR quadrotor drones.</li><li>Led research and development for an operator monitoring scheme to assess cognitive state for input into the autonomy algorithm.</li><li>Designed the experimental protocol for testing the adjustable autonomy concept.</li><li>Researched and analyzed a variety of physiological indices, including skin conductance, heart rate, temperature, accelerometer, blood volume pulse, inter-beat interval to assess the cognitive state of the operator.</li><li>Worked with a variety of operator monitoring systems and hardware including eye-tracking glasses, a physiological wristband, a PixyCam, and an inertial measurement unit (IMU).</li><li>Coded a Unity simulation of the adjustable autonomy experiment and tested participants for data collection and analysis.</li>","<li>Developed initial mobile app prototype for a cloud supply chain intelligence and analytics service, including app structure, user experience (UX) flow, user interface (UI), and related design/branding assets.</li><li>Managed project to create a new website (theresiliencycouncil.org), a non-profit organization founded by Resilinc, using Wordpress, HTML, and CSS. Assisted in determining the style and theme of the website and designed key branding elements, including the organization’s new logo, templates, and style guide.</li><li>Designed an application dashboard to optimize contact interaction and task management for Resilinc's flagship supply chain risk management product.</li><li>Coded a program to generate analytics on dashboard data to determine the most frequently used charts and graphs.</li>","<li>Executed a variety of data management activities, including field data collection, categorization, and documentation of motion and sound data for a machine learning project.</li><li>Performed research and laid the groundwork for a new work management (outsourcing) process leveraging the Amazon Mechanical Turk online marketplace.</li> <li>Created a detailed manual describing the process for hosting audio HITs (Human Intelligence Tests) on Mechanical Turk.</li><li>Prepared an informational presentation for internal education/training purposes.</li><li>Assisted in a variety of engineering, product testing, and quality tasks.</li><li>Calibrated decibel levels in order to optimize audio clips.</li><li>Updated manuals to include new auto-cuing and batching functionality using Cool Edit (now Adobe Audition).</li> <li>Calculated product component positioning dimensions; reviewed audio files for unwanted noises; spliced audio files for the Audience laboratory.</li><li>Developed a Python script to scrape data outputs from the project; facilitated the creation of HDF5 files for the collected data.</li>"];

companies = ["<h2 style='margin: 0; padding-top: 2vh;'>Center for Applied Brain &amp; Cognitive Sciences</h1><h3>Engineering Psychology Researcher (Fulltime - Paid)</h2><h3>May 2016 - August 2016</h3>","<h2 style='margin: 0; padding-top: 2vh;'>Resilinc</h1><h3>UI/UX Intern (Fulltime - Paid)</h2><h3>Summer 2015</h3>","<h2 style='margin: 0; padding-top: 2vh;'>Audience</h1><h3>Algorithm Intern (Fulltime - Paid)</h2><h3>Summer 2014</h3>"];

descriptions = ["Our mission is to bring together a unique interdisciplinary community of scientists and engineers to advance the state of the art in applied brain and cognitive sciences. The Center provides an innovative environment for conducting collaborative applied research focusing on measuring, predicting, and enhancing cognitive capabilities and human system interactions for individuals and teams working in naturalistic high-stakes environments.","Resilinc is a leading cloud provider of global supply chain intelligence and analytics. Resilinc delivers powerful and fast results by leveraging an extensive big data platform and advanced analytics such as machine intelligence and cognitive computing to transform risks into opportunities to grow, steal market share and beat competition.","Audience is an American mobile voice and audio-processing company based in Mountain View, California, and is one of the 34 founding members of The Open Handset Alliance. They specialize in improving voice clarity and noise suppression for a broad range of consumer products, including cellular phones, mobile devices and PCs."]

function load() {
    
    change(0);
    
    $(lside).click(function(event) {
        slide_index--;
        if (slide_index == -1) {
            slide_index = 2;
        }
        $(cabcs_gallery).css('background-image', 'none');
        clearInterval(gall);
        change(slide_index);
    });
    
    $(lb_side).click(function(event) {
        slide_index--;
        if (slide_index == -1) {
            slide_index = 2;
        }
        $(cabcs_gallery).css('background-image', 'none');
        clearInterval(gall);
        change(slide_index);
    });
    
    $(rside).click(function(event) {
        slide_index++;
        if (slide_index == 3) {
            slide_index = 0;
        }
        $(cabcs_gallery).css('background-image', 'none');
        clearInterval(gall);
        change(slide_index);
    });
}

function change(index) {
    
    window.scrollTo(0,0);
    $(company_logo).attr('src', 'assets/experience/logos/L' + index + '.jpg');
    $(bullets).html(bullet[index]);
    $(company_title).html(companies[index]);
    $(descript).html(descriptions[index]);
    
    gall = setInterval(function() {  
        i++;
        $(cabcs_gallery).fadeOut(1000, function () {
            $(cabcs_gallery).css('background-image', 'url(../assets/experience/slider/' +  id_dereference[index] + '/s' + i + '.png)');
            $(cabcs_gallery).fadeIn(1000);
        });
        /*
        $(resilinc_gallery).fadeOut(1000, function () {
            $(resilinc_gallery).css('background-image', 'url(../assets/experience/slider/resilinc/s' + i + '.png)');
            $(resilinc_gallery).fadeIn(1000);
        });
        $(audience_gallery).fadeOut(1000, function () {
            $(audience_gallery).css('background-image', 'url(../assets/experience/slider/audience/s' + i + '.png)');
            $(audience_gallery).fadeIn(1000);
        });*/
        if(i == num_slides) {
            i = 0;
        }
    }, 5000);
}

