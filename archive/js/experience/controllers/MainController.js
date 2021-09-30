app.controller('ExperienceData', ['$scope', function($scope) {
  $scope.experiences = [
    {
      companyName: 'Booz Allen Hamilton', 
      companyLogo: "../../assets/experience/logos/bahLogo.png",
      position: "UI/UX Designer (Fulltime - Paid)",
      period: "July 2017 - Present",
      companyDescription: "Booz Allen Hamilton has been at the forefront of strategy, technology, and engineering for more than 100 years. Booz Allen partners with public and private sector clients across the globe to solve their most difficult challenges.",
      galleryImages: [{url: "../../assets/experience/slider/booz/staff.PNG", alt: ""},{url: "../../assets/portfolio/Editorial_Page.jpg", alt: ""},{url: "../../assets/experience/slider/booz/tech.PNG", alt: ""}],
      responsibilitiesList: ["Serve as a UI/UX consultant for both external clients and internal projects.","Design wireframes, high-fidelity mockups, and visualizations for various projects.","Design and contribute to the development of web applications.","Test applications for 508 compliance and accessibility standards."]
    },
    {
      companyName: 'Center for Applied Brain & Cognitive Sciences (CABCS)', 
      companyLogo: "../../assets/experience/logos/L0.jpg",
      position: "Engineering Psychology Researcher (Fulltime - Paid)",
      period: "May 2016 - August 2016",
      companyDescription: "Our mission is to bring together a unique interdisciplinary community of scientists and engineers to advance the state of the art in applied brain and cognitive sciences. The Center provides an innovative environment for conducting collaborative applied research focusing on measuring, predicting, and enhancing cognitive capabilities and human system interactions for individuals and teams working in naturalistic high-stakes environments.",
      galleryImages: [{url: "../../assets/experience/slider/cabcs/s2.png", alt: ""},{url: "../../assets/experience/slider/cabcs/s0.png", alt: ""},{url: "../../assets/experience/slider/cabcs/s1.png", alt: ""}],
      responsibilitiesList: ["Explored an extension of the concept of adjustable autonomy, working with Yuneec Typhoon and Parrot AR quadrotor drones.","Led research and development for an operator monitoring scheme to assess cognitive state for input into the autonomy algorithm.","Designed the experimental protocol for testing the adjustable autonomy concept.","Researched and analyzed a variety of physiological indices, including skin conductance, heart rate, temperature, accelerometer, blood volume pulse, inter-beat interval to assess the cognitive state of the operator.","Worked with a variety of operator monitoring systems and hardware including eye-tracking glasses, a physiological wristband, a PixyCam, and an inertial measurement unit (IMU).","Coded a Unity simulation of the adjustable autonomy experiment and tested participants for data collection and analysis."]
    },
    {
      companyName: 'Resilinc, Inc.', 
      companyLogo: "../../assets/experience/logos/resilinc-logo.png",
      position: "UI/UX Intern (Fulltime - Paid)",
      period: "Summer 2015",
      companyDescription: "Resilinc is a leading cloud provider of global supply chain intelligence and analytics. Resilinc delivers powerful and fast results by leveraging an extensive big data platform and advanced analytics such as machine intelligence and cognitive computing to transform risks into opportunities to grow, steal market share and beat competition.",
      galleryImages: [{url: "../../assets/experience/slider/resilinc/s2.png", alt: ""},{url: "../../assets/experience/slider/resilinc/s0.png", alt: ""},{url: "../../assets/experience/slider/resilinc/s1.png", alt: ""}],
      responsibilitiesList: ["Developed initial mobile app prototype for a cloud supply chain intelligence and analytics service, including app structure, user experience (UX) flow, user interface (UI), and related design/branding assets.","Managed project to create a new website (theresiliencycouncil.org), a non-profit organization founded by Resilinc, using Wordpress, HTML, and CSS. Assisted in determining the style and theme of the website and designed key branding elements, including the organization’s new logo, templates, and style guide.","Designed an application dashboard to optimize contact interaction and task management for Resilinc's flagship supply chain risk management product.","Coded a program to generate analytics on dashboard data to determine the most frequently used charts and graphs."]
    },
    {
      companyName: 'Audience, Inc.', 
      companyLogo: "../../assets/experience/logos/audience-logo.png",
      position: "Algorithm Intern (Fulltime - Paid)",
      period: "Summer 2014",
      companyDescription: "Audience is an American mobile voice and audio-processing company based in Mountain View, California, and is one of the 34 founding members of The Open Handset Alliance. They specialize in improving voice clarity and noise suppression for a broad range of consumer products, including cellular phones, mobile devices and PCs.",
      galleryImages: [{url: "../../assets/experience/slider/audience/s2.png", alt: ""},{url: "../../assets/experience/slider/audience/s0.png", alt: ""},{url: "../../assets/experience/slider/audience/s1.png", alt: ""}],
      responsibilitiesList: ["Executed a variety of data management activities, including field data collection, categorization, and documentation of motion and sound data for a machine learning project.","Performed research and laid the groundwork for a new work management (outsourcing) process leveraging the Amazon Mechanical Turk online marketplace.","Created a detailed manual describing the process for hosting audio HITs (Human Intelligence Tests) on Mechanical Turk.","Prepared an informational presentation for internal education/training purposes.","Assisted in a variety of engineering, product testing, and quality tasks.","Calibrated decibel levels in order to optimize audio clips.","Updated manuals to include new auto-cuing and batching functionality using Cool Edit (now Adobe Audition).","Calculated product component positioning dimensions; reviewed audio files for unwanted noises; spliced audio files for the Audience laboratory.","Developed a Python script to scrape data outputs from the project; facilitated the creation of HDF5 files for the collected data."]
    }
  ]
}]);