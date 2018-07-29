var svg = d3.select("svg"),
    width = window.innerWidth,
    height = window.innerHeight;

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody().strength(-7500).distanceMax(1500).distanceMin(1000))
    .force("center", d3.forceCenter(width / 2, height / 2));

d3.json("./music-mob.json", function(error, graph) {
  if (error) throw error;

    var background = svg.append("svg:image")
        .attr("xlink:href", './assets/bg.png')
        .attr("x", 0)
        .attr("y", 0)
        .attr("class", "bg");
    
  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line")
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

  var node = svg.append("g")
    .attr("class", "nodes")
    .selectAll("circle")
    .data(graph.nodes)
    .enter().append("svg:image")
        .attr("xlink:href",  function(d) { return d.src;})
        .attr("x", function(d) { return '-7.5vh';})
        .attr("y", function(d) { return '-7.5vh';})
        .attr("height", '15vh')
        .attr("width", '15vh')
    .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

  node.append("title")
      .text(function(d) { return d.id; });
 
  simulation
      .nodes(graph.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(graph.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}