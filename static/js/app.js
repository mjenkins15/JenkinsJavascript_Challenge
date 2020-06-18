//Assign the data from `data.js` to a descriptive variable
var tableData = data;

// Select the button
var tbody = d3.select("tbody");

// Step 1: Loop Through `data` and console.log each UFO object
data.forEach(function(ufoSightings) {
    console.log(ufoSightings);
 
// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
    var row = tbody.append("tr");

// Step 3:  Use `Object.entries` to console.log each weather report value
    Object.entries(ufoSightings).forEach(function([key, value]) {
//console.log(key, value);

// Step 4: Use d3 to append 1 cell per UFO sighting value
    var cell = row.append("td");

// Step 5: Use d3 to update each cell's text with UFO sighting values 
//Append a cell to the row for each value in the UFO sighting object
    cell.text(value);
});
});

 //Create a function to add an event listener to the table

 var button=d3.select("#filter-btn")
 var inputField=d3.select("#datetime")

 function handleClick() {
    console.log("A Button was clicked")
    console.log(d3.event.target);

// We can use the `on` function in d3 to attach an event to the handler function
    button.on("click", handleClick);

    // Grab the datetime value from the filter
    var date = d3.select("#datetime").property("value");
    console.log(date);

    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
        console.log(filteredData);
    };

    //write code to clear the table and repopulate the table with filtered data
        
    // Remove previous user input so another date can be filtered and repopulate the table
    tbody.html("");

    // Repopulate table with filtered data
    tbody.append("tbody").text("filteredData: date}");

    
};
    button.on("click", handleClick);
    

   
  


