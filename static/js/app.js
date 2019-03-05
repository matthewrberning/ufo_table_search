// from data.js
var tableData = data;

// YOUR CODE HERE!

var table_body = d3.select("tbody");

var search_button = d3.select('#filter-btn');

// // table

//     rowData.forEach(function(rowColData){
//       // console.log(rowColData);
//       colNum++;

//       var insertCellData = insertRow.append("td");

//       if (colNum == 3 || colNum == 4) {
//         rowColData = rowColData.toUpperCase();
//       } else if (colNum == 2 || colNum == 5) {
//         rowColData = rowColData.toProperCase();


function buildthetable(data) {
  
  table_body.html("");

// make a row for each sighting
// var insertRow = table_body.append("tr");
//     var colNum = 0;
  data.forEach((sighting) => {
    
    var row = table_body.append("tr");


    Object.values(sighting).forEach((ufo) => {
      // colNum++;
      var ufo_append_info = row.append("td");
        ufo_append_info.text(ufo);
      } 
    );
  });
}

// search



var search_click = d3.select("#filter-btn");

search_click.on("click", function() {
  d3.event.preventDefault();

  var input_html = d3.select("#datetime");
  var search_term = input_html.property("value");

  if (search_term == "") {
    // console.log("no result");
    buildthetable(tableData);
    //   if (input === "") {
    // console.log("input is Empty");
    // Page(tableData);

  } else {
    // console.log("value response");

    var search_response = tableData.filter(sighting => sighting.datetime === search_term);

    buildthetable(search_response);
  }

  });

// run buildthetable
buildthetable(tableData);
