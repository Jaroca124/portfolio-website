app.controller('ArticleData', ['$scope', function($scope) {
  $scope.articles = [
    { 
      title: 'Pattern Lab - An Atomic Design System', 
      datePosted: new Date('2018', '6', '28'),  
      source: 'Pattern Lab', 
      thumbnail: '../../assets/feed/thumbnails/pattern_lab.PNG',
      url: "https://patternlab.io/",
      comment: "Pattern Lab is an incredibly powerful atomic design system that allows for rapid frontend development. The principle behind Pattern Lab and atomic design is that web components can be distilled into their most basic form, such as color, font, and button style, which are called atoms. Atoms can be combined to create molecules, like a search bar consisting of a button and an input field. Molecules can be combined to create organisms, such as a navigation bar, and finally, organisms can be used to create templates. When templates are supplied with data, they become full-fledged pages. The power of Pattern Lab is in its modularity – when you make a change to a button, for example, the same change will be applied everywhere that button appears. I am currently using Pattern Lab to build out a personal project and I highly recommend looking into it!",
      author: "Pattern Lab",
      tags: [{"tagName": "Pattern Lab"}, {"tagName": "Atomic Design"}, {"tagName": "Development"}, {"tagName": "Frontend"}]
    },
    { 
      title: 'Agile + UX: What I Learned from Living with an Agile Developer', 
      datePosted: new Date('2018', '1', '18'),  
      source: 'Prototypr', 
      thumbnail: '../../assets/feed/thumbnails/agileux.PNG',
      url: "https://blog.prototypr.io/agile-ux-what-i-learned-from-living-with-an-agile-developer-4173a60a8172",
      comment: "I had the pleasure of working with Dana briefly on client site through Booz Allen. She is a UX rockstar who, unfortunately for me, is leaving the company to work at an exciting new startup. Dana wrote this article describing how UX can be more effectively incorporated into the Agile development process and keep designers and developers happy and productive.",
      author: "Dana Solano",
      tags: [{"tagName": "User Experience"}, {"tagName": "Agile"}, {"tagName": "Development"}, {"tagName": "Usability"}]
    },
    { 
      title: 'UX design: or the hidden face of the moon', 
      datePosted: new Date('2018', '0', '17'),  
      source: 'Laurence Pilon', 
      thumbnail: '../../assets/feed/thumbnails/pilon.PNG',
      url: "http://laurencepilon.ca/2017/ux-design-or-the-hidden-face-of-the-moon",
      comment: "Here's an interesting article by Laurence Pilon that details the differences between UI and UX. I particularly like the portion that contrasts what people think UX is with what it actually is. We UX-ers have a critical role to play, not just in the visual design of a system, but also in the design of its structure, functionality, and usability.",
      author: "Laurence Pilon",
      tags: [{"tagName": "User Interface"}, {"tagName": "User Experience"}, {"tagName": "Design"}]
    },
    { 
      title: 'D3', 
      datePosted: new Date('2018', '0', '15'),  
      source: 'D3', 
      thumbnail: '../../assets/feed/thumbnails/d3.PNG',
      url: "https://d3js.org/",
      comment: "I recently used D3 for a project at Booz Allen. It's a fantastic way to communicate the meaning of a dataset in a visual way and is extremely flexible to suit your design needs.",
      author: "D3",
      tags: [{"tagName": "Data"}, {"tagName": "Data Visualization"}, {"tagName": "JavaScript"}, {"tagName": "Web Development"}]
    },
    { 
      title: 'Unsplash', 
      datePosted: new Date('2017', '11', '24'),  
      source: 'Unsplash.com', 
      thumbnail: '../../assets/feed/thumbnails/unsplash.PNG',
      url: "https://unsplash.com/",
      comment: "This is my go-to website for high fidelity images that I use in my designs. I am constantly satisfied with the selection of images from incredibly talented photographers.",
      author: "Unsplash.com",
      tags: [{"tagName": "Photography"}, {"tagName": "User Experience"}, {"tagName": "Design"}]
    },
    {
      title: 'Interface Hall of Shame', 
      datePosted: new Date('2017', '9', '19'), 
      source: 'Isys Information Architects Inc. ', 
      thumbnail: '../../assets/feed/thumbnails/post3.PNG',
      url: "http://hallofshame.gp.co.at/index.php?mode=original",
      comment: "I came across this website back when I was at Tufts. Yet another example of how I love design fails.",
      author: "Isys Information Architects Inc.",
      tags: [{"tagName": "User Experience"}, {"tagName": "Fails"}]
    },
    {
      title: 'Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing', 
      datePosted: new Date('2017', '9', '11'), 
      source: 'AutoDesk Research', 
      thumbnail: '../../assets/feed/thumbnails/post0.PNG',
      url: "https://www.autodeskresearch.com/publications/samestats",
      comment: "Great article about how numbers alone can be misleading. Check out how descriptive stats can be manipulated to create crazy graphs!",
      author: "Justin Matejka, George Fitzmaurice",
      tags: [{"tagName": "Statistics"}, {"tagName": "Data"}]
    },
    {
      title: 'Engineering Psychology Careers', 
      datePosted: new Date('2017', '9', '11'),  
      source: 'Careers in Psychology', 
      thumbnail: '../../assets/feed/thumbnails/post1.PNG',
      url: "https://careersinpsychology.org/engineering-psychology-careers/",
      comment: "Learn about what I majored in at Tufts University!",
      author: "careersinpsychology.org",
      tags: [{"tagName": "Engineering Psychology"}, {"tagName": "Careers"},]
    },
    { 
      title: 'UX Fails', 
      datePosted: new Date('2017', '9', '11'),  
      source: 'Pinterest', 
      thumbnail: '../../assets/feed/thumbnails/post2.PNG',
      url: "https://www.pinterest.com/uxfails/ux-fails/",
      comment: "For some reason, I love looking at bad designs. Check out these epic design fails:",
      author: "Pinterest",
      tags: [{"tagName": "User Experience"}, {"tagName": "Design"}, {"tagName": "Fails"}]
    }
  ]
}]);