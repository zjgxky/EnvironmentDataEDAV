// add your JavaScript/D3 to this file

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg2 = d3.select("div#plot2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")

// Decalre a global variable to hold the data
var g_data2;

// Load the dataset
d3.csv('https://raw.githubusercontent.com/zjgxky/EnvironmentDataEDAV/main/data/data_viz/gdp_renewable.csv').then((data2) => {

  g_data2 = data2
  // Set up scales for x and y axes
  const xScale = d3.scaleLinear().domain([0, 175000]).range([0, width]);
  svg2.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0]);
  svg2.append("g")
    .call(d3.axisLeft(yScale));

  var colorScale = d3.scaleOrdinal()
    .domain(data2.map(d => d.Region_Label))
    .range(['#3498db', '#e74c3c', "#F7DF1E", "#f39c12", "#9b59b6", "#1abc9c", "#d35400", "#34495e"]);

  // Add dots
  svg2.append('g')
    .selectAll("dot")
    .data(data2)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return xScale(d.x); } )
      .attr("cy", function (d) { return yScale(d.y); } )
      .attr("class", function (d) { return d.Region_Label; } )
      .attr("r", 2)
      .attr("fill", d => colorScale(d.Region_Label))
      .style("visibility", "hidden")
});

  svg2.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "end")
    .attr("x", width)
    .attr("y", height - 6)
    .text("GDP per capita");

  svg2.append("text")
    .attr("class", "y label")
    .attr("text-anchor", "end")
    .attr("y", 6)
    .attr("dy", ".75em")
    .attr("transform", "rotate(-90)")
    .text("Renewable energy (%)");


// Control points
function asia_pacific() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Asia Pacific") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function europe() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Europe") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function africa() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Africa") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function s_america() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Central and South America") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function eurasia() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Eurasia") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function middle_east() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "Middle East") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function north_america() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "North America") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}

function china() {
  // Toggle visibility for points with the specified category
  g_data2.forEach(function(d) {
    if (d.Region_Label == "China") {
      d.visible = !d.visible
    }
  })
  svg2.selectAll("circle")
  .style("visibility", function(d) { return d.visible ? "visible" : "hidden"; });
}







