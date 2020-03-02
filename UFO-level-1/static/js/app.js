// from data.js
var tableData = data;

// 1 - define variables
var tbody = d3.select('tbody');
var userInputDate = d3.select('#datetime');
var filterButton = d3.select('#filter-btn');


// 2 - loop through data, 
//     use d3 to append tr for each data point
//     use object.entries and for each to iterate through keys and values
//     append each data point to td tag
tableData.forEach( (UFOdata) => {
    var tr = tbody.append('tr');
    Object.entries(UFOdata).forEach( ([key, value]) => {
        var cell = tr.append('td');
        dataDisplayed = cell.text(value);
    });
});

// 3 - Use a date form in your HTML document and write JavaScript code that will listen for events and search through the date/time column to find rows that match user input.



// connect with filter button 
filterButton.on("click", () => {
    var userInputValue = userInputDate.property("value");

    console.log(userInputValue);
    var testinput = userInputDate.property("value");
    console.log(testinput.length);

    if (testinput.length===0) {
        document.getElementById('tableID').innerHTML='';
        tableData.forEach( (UFOdata) => {
            var tr = tbody.append('tr');
            Object.entries(UFOdata).forEach( ([key, value]) => {
                var cell = tr.append('td');
                dataDisplayed = cell.text(value);
            });
        });
        console.log(userInputDate);
    }
    else {
        // override or clear out current data displayed
        document.getElementById('tableID').innerHTML='';

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
    }

});

