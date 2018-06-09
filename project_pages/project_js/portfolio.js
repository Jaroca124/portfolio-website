id_dereference = {'one': 0, 'two': '1', 'three': '2', 'four': '3', 'five': 4, 'six': 5, 'seven': 6, 'eight': 7, 'nine': 8}

project_titles = ["The Role of Engineering Psychology in Video Game Controller Design","Neuromarketing Presentation","Loki Networks","Global Supply Chain Resiliency Council Website","Resilinc Mobile Dashboard Application","Drone Operator Monitoring","VFT Design","Medical School Python Data Scraping Project","GreenThumb Gardening App"];

project_locations = ["Tufts University, Video Game Development","Tufts University, Advanced Engineering Psychology","Mountain View, CA","Resilinc, Inc.","Resilinc, Inc.","Center for Applied Brain & Cognitive Sciences","Tufts University, Human Factors & Product Design","Personal Project","Tufts University, Computer Interface Design"];

download_button_on = [false,true,true,true,true,true,true,true,true];

project_descriptions = ["In this presentation, I discuss different aspects of controller design in relation to three primary gaming metrics: Realism, Performance, & Usability/Comfort. Ultimately, a game controller conventionally serves as the connection between player and the virtual world. Therefore, optimizing controller design is important for user enjoyment and for use in various gameplay environments. Watch the video lecture <a id='vid_link' href='https://www.youtube.com/watch?v=2qqKjUXdKmI'>here<a/>.","In Advanced Engineering Psychology, my research team focused on the topic of Neuromarketing. This field uses brain-imaging and physiological monitoring techniques to determine what consumers really want when making purchasing decisions. The concept focuses on the workings of deep brain networks and attempts to uncover what stimulates the regions of our brains that have the most control over these descisions.","From 2015 to 2016, I served as the co-founder and lead UI/UX developer at Loki Network, a mobile application side project designed to bring friends together through geolocation and status updates. In this position I worked to plan go-to-market strategy, created design templates, and developed the core user interface for the mobile application. I worked on this project through several design iterations, ultimately working to enhance the quality of the UI/UX experience at every turn.","My other primary task at Resilinc, Inc. was developing a website for a non-profit council designed to oversee the current state of supply chain monitoring and risk management. The website was created with a combination of Wordpress, HTML, and CSS. I provided input in regards to design and created a variety of graphical assets used on the site. The result of my work can be found at: http://theresiliencycouncil.org/","As a UX/UI design intern at Resilinc incorporated, my primary role was to develop the foundation for the new mobile application. The app was created to track key supply chain metrics on-the-go. A structural diagram was created to lay out application flow and screens were generated to demonstrate specific capabilities of the application. In developing this design, I worked closely with the CEO, CMO, and CTO.","As the sole Engineering Psychology intern at the CABCS, I was tasked with assessing a drone operator’s cognitive state for use in an adjustable autonomy study. Adjustable autonomy is the concept of leveraging control between manual control and machine autonomy based on operator state. Operator stress increases the likelihood of human error. Therefore, affording a machine more freedom to operate on its own mitigates risk as a result of this error. In addition to research on the monitoring scheme, I had almost exclusive control over the experimental design.","In my Human Factors & Product Design course, I served as the product manager for a gardening tool capable of dispensing three different materials. I oversaw full employment of the Human Factors methodology, which included informal observations, survey creation, user needs and user requirement development, product concept generation, task analysis, risk assessment, and simulated use testing. Responsibilities included task delegation, schedule management, communication, and input for each aspect of the HF process.","In order to get experience with online data scraping, I embarked on a project to analyze the rise in tuition rates for medical schools (public and private) over time. I began by finding an online resource that supplied the necessary data. I was able to identify the structure of the webpage and iterate through the various years using Python and Python libraries. By the end, I successfully gathered the tuition for each school and plotted the rise over time. This was a side project.","As a final project in Computer Interface Design, I served as the team leader to create the user interface for a multi-functional gardening application. The application featured a community page, a detailed guide for growing plants, a garden planner, and a gardening tools shop. My principle role was the creation of an interactive prototype for simulated-use testing, while other members of the team focused on the design itself."]

//url(../assets/portfolio/s0.png)

project_images = []

clicked = false;

function load() {
    $('.tcell').click(function(event) {
            var status = $(this).attr('id');
            $(pop_overlay).fadeIn(500).css('display', 'block');
            $(popup_wrapper).css('display', 'block');
            $(project_title).html(project_titles[parseInt(id_dereference[status])]);
            $(proj_location).html(project_locations[parseInt(id_dereference[status])]);
            $(pop_img).css('background-image', 'url(project_assets/portfolio/s' + id_dereference[status] + '.png');
            $(pop_desc_text).html(project_descriptions[parseInt(id_dereference[status])]);
            if (download_button_on[id_dereference[status]] == false) {
                $(pop_description).css('height', '100%');
                $('.pop_download').css('height', '0%');
                $('.pop_download').css('display','none');
            }
            else {
                $(pop_description).css('height', '80%');
                $('.pop_download').css('height', '20%');
                $('.pop_download').css('display','block');
            }
    });
    
    $(exit_button).click(function(event) {
        $(popup_wrapper).css('display', 'none');
        $(pop_overlay).css('display', 'none');
    });
}