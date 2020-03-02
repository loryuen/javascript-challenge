// from data.js
var tableData = data;

// YOUR CODE HERE!
// 1 - reference table body and save to variable
var tbody = d3.select('tbody');

// 2 - loop through data, 
//     use d3 to append tr for each data point
//     use object.entries and for each to iterate through keys and values
//     append each data point to td tag
tableData.forEach( (UFOdata) => {
    var tr = tbody.append('tr');
    Object.entries(UFOdata).forEach( ([key, value]) => {
        var cell = tr.append('td');
        cell.text(value);
    });
});

// 3 - Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.

// define variables
var userInput = d3.select('#datetime');
var filterOutput = d3.select('td');
var filterButton = d3.select('#filter-btn');

// define filter function
// function filteredData(data) {
//     return data.datetime === userInputValue;
// };

// connect with filter button 
filterButton.on("click", () => {
    userInputValue = userInput.property("value");

    console.log(userInputValue);
    
    // var filteredData = tableData.filter(data => data.datetime === userInputValue);
    function filteredData(data) {
        return data.datetime === userInputValue;
    };

    var output = tableData.filter(filteredData);

    output.forEach( (UFOdatum) => {
        var tr = tbody.append('tr');
        Object.entries(UFOdatum).forEach( ([key, value]) => {
            var cell = tr.append('td');
            cell.text(value);
        });
    });

   console.log(output);

});
