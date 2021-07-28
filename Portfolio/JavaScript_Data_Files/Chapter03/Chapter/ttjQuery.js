/*   JavaScript 6th Edition
*    Chapter 3
*    Chapter case
*    Tipton Turbines
*    Variables and functions
*    Author:  Stephanie Claudio
*    Date: 4.25.20
*    Filename: ttjQuery.js
*/

// global variables

var daysOfWeek = ["Sunday", "Monday", "Tuesday", 
                  "Wednesday", "Thursday", "Friday", "Saturday"];

var opponents = ["Lightning", "Combines", "Combines", "Combines",
                "Lightning", "Lightning", "Lightning", "Lightning",
                "Barn Raisers", "Barn Raisers", "Barn Raisers",
                "Sodbusters", "Sodbusters", "Sodbusters",
                "Sodbusters", "(off)", "River Riders",
                "River Riders", "River Riders", "Big Dippers",
                "Big Dippers", "Big Dippers", "(off)",
                "Sodbusters", "Sodbusters", "Sodbusters", 
                "Combines", "Combines", "Combines", "(off)",
                "(off)"];

var gameLocation = ["away", "away", "away", "away", "home", "home",
                   "home", "home", "home", "home", "home", "away",
                   "away", "away", "away", "", "away", "away", "away",
                   "away", "away", "away", "", "home", "home", "home",
                   "home", "home", "home", "", ""];


//function to place daysOfWeek values in header row cells

function addColumnHeaders() {
    $("th").each( function( index) {
        $(this).text( daysOfWeek[index] );
    } );
}

//function to place day of month value in first p element within each table data cell that has an id

function addCalendarDates() {
    var i = 1;
    
    do {
        var tableCell = $("#08-" + i + " p:nth-child( 1 )").text( i++ );
    } while (i <= 31);
}

//function to place opponents and gameLocation values in second p element within each table data cell that has an id

function addGameInfo() {
    var paragraphs = "";
    for (var i = 0; i < 31; i++) {
        var date = i + 1;
        paragraphs = $("#08-" + date + " p:nth-child( 2 )");
        
       /* if (gameLocation[i] === "away") {
            paragraphs[1].innerHTML = "@ ";
        } 
        if (gameLocation[i] === "home") {
            paragraphs[1].innerHTML = "vs ";
        } */
        
       /* if (gameLocation[i] === "away") {
            paragraphs[1].innerHTML = "@ ";
        }
        
        else {
            if (gameLocation[i] === "home") {
            paragraphs[1].innerHTML = "vs ";
            }
        } */
        
        switch (gameLocation[i]) {
            case "away":
                paragraphs.text( "@ " );
                break;
                
            case "home":
                paragraphs.text( "vs " );
                break;
        }
        
        paragraphs.text(paragraphs.text() + opponents[i] );
    }
}



//runs setUpPage() function when page loads

$( document ).ready( function() {
    addColumnHeaders();
    addCalendarDates();
    addGameInfo();    
});
