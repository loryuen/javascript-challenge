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
var userInput = d3.select('#datetime');
var filterOutput = d3.select('')
