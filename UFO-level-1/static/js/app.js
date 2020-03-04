//from data.js
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
    var userInputDateValue = userInputDate.property("value");
    console.log(userInputDateValue);
    console.log(userInputDateValue.length);

    if (userInputDateValue.length===0) {
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
            return data.datetime === userInputDateValue;
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




// // from data.js
// var tableData = data;

// // 1 - define variables
// var tbody = d3.select('tbody');
// var filterButton = d3.select('#filter-btn');
// var userInputDate = d3.select('#datetime');
// var userInputCity = d3.select('#city');
// var userInputState = d3.select('#state');
// var userInputCountry = d3.select('#country');
// var userInputShape = d3.select('#shape');


// // 2 - loop through data and display
// tableData.forEach( (UFOdata) => {
//     var tr = tbody.append('tr');
//     Object.entries(UFOdata).forEach( ([key, value]) => {
//         var cell = tr.append('td');
//         dataDisplayed = cell.text(value);
//     });
// });

// // 3 - List for events and filter upon click
// filterButton.on("click", () => {
//     var userInputDateValue = userInputDate.property('value');
//     var userInputCityValue = userInputCity.property('value');
//     var userInputStateValue = userInputState.property('value');
//     var userInputCountryValue = userInputCountry.property('value');
//     var userInputShapeValue = userInputShape.property('value');

//     let filters = [
//         userInputDateValue,
//         userInputCityValue,
//         userInputStateValue,
//         userInputCountryValue,
//         userInputShapeValue
//     ];

//     console.log(filters);

//     if (filters.join("").length === 0) {
//         document.getElementById('tableID').innerHTML='';
//         tableData.forEach( (UFOdata) => {
//             var tr = tbody.append('tr');
//             Object.entries(UFOdata).forEach( ([key, value]) => {
//                 var cell = tr.append('td');
//                 dataDisplayed = cell.text(value);
//             });
//         });
//         console.log(userInputDate);
//     }
//     else {
//     // override or clear out current data displayed
//     document.getElementById('tableID').innerHTML='';

//     function filteredData(data) {
//         return (data.datetime === userInputDateValue) 
//         || (data.city === userInputCityValue) 
//         || (data.state === userInputStateValue) 
//         || (data.country === userInputCountryValue)
//         || (data.shape === userInputShapeValue)
//     };
//     console.log(userInputDateValue);
//     console.log(tableData.filter(filteredData))
//     var output = tableData.filter(filteredData);

//     output.forEach( (UFOdatum) => {
//         var tr = tbody.append('tr');
//         Object.entries(UFOdatum).forEach( ([key, value]) => {
//             var cell = tr.append('td');
//             cell.text(value);
//         });
//     });
    
//     console.log(output);
//     }
// });

// else {
//     // override or clear out current data displayed
//     document.getElementById('tableID').innerHTML='';

//     //var output = [];

//     // if (filters[0].length != 0 && filters[1].length != 0) {
//         function filteredData(data) {
//             return data.datetime === userInputDateValue
//             && data.city === userInputCityValue;
//         } 
//         var output = tableData.filter(filteredData);
//         console.log(output); 
//     // };
//     output.forEach( (UFOdatum) => {
//         var tr = tbody.append('tr');
//         Object.entries(UFOdatum).forEach( ([key, value]) => {
//             var cell = tr.append('td');
//             cell.text(value);
//         });
//     });
// }



// else {
//     // override or clear out current data displayed
//     document.getElementById('tableID').innerHTML='';

//     function filteredData(data) {
//         return data.datetime === userInputDateValue 
//         // && data.city === userInputCityValue 
//         // && data.state === userInputStateValue 
//         // && data.country === userInputCountryValue
//         // && data.shape === userInputShapeValue
//     };
//     console.log(userInputDateValue);
//     console.log(tableData.filter(filteredData))
//     var output = tableData.filter(filteredData);

//     output.forEach( (UFOdatum) => {
//         var tr = tbody.append('tr');
//         Object.entries(UFOdatum).forEach( ([key, value]) => {
//             var cell = tr.append('td');
//             cell.text(value);
//         });
//     });
    
//     console.log(output);
// }



///////////////////////////////////////////////////////////////////

