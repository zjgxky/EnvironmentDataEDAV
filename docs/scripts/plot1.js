// add your JavaScript/D3 to this file

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("div#plot")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// Decalre a global variable to hold the data
var g_data;

// Load the dataset
d3.csv('https://raw.githubusercontent.com/zjgxky/EnvironmentDataEDAV/main/data/data_viz/gdp_renewable.csv').then((data) => {

  g_data = data
  // Set up scales for x and y axes
  const xScale = d3.scaleLinear().domain([0, 175000]).range([0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  svg.append("g")
    .call(d3.axisLeft(yScale));

  var colorScale = d3.scaleOrdinal()
    .domain(data.map(d => d.EconomyLabel))
    .range(['#ff7f0e', '#1f77b4']);

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return xScale(d.x); } )
      .attr("cy", function (d) { return yScale(d.y); } )
      .attr("class", function (d) { return d.EconomyLabel; } )
      .attr("r", 2)
      .attr("fill", d => colorScale(d.EconomyLabel))
      .style("visibility", "hidden")


  svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("GDP per capita");

  svg.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Renewable energy (%)");
});


// Control points
function adv_eco() {
  // Toggle visibility for points with the specified category
  g_data.forEach(function(d) {
    if (d.EconomyLabel == "Advanced economies") {
      d.visible = !d.visible
    }
  })
  svg.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function dev_eco() {
  // Toggle visibility for points with the specified category
  g_data.forEach(function(d) {
    if (d.EconomyLabel == "Emerging market and developing economies") {
      d.visible = !d.visible
    }
  })
  svg.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}









