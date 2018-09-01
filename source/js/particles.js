window.onload = function() {
  Particles.init({
    selector: '.background',
    color: "#ffffff",
    connectParticles: true,
    speed: .25,
    responsive: [
        {
            breakpoint: 
                768,
                options: {
                    maxParticles: 0,
                    connectParticles: true
                }
        }
    ]
  });
};