function load() {
var overall = new RadialProgress(document.getElementById("overall"),{noPercentage: true, colorBg: "#FFFFFF", progress: .99, round: true, colorFg:"#417dc1",thick:1.5, colorText:"#000000"});

overall.setText("3.96");

var major = new RadialProgress(document.getElementById("major"),{noPercentage: true, colorBg: "#FFFFFF", progress: 1, round: true, colorFg:"#417dc1",thick:1.5, colorText:"#000000"});

major.setText("4.00");
}