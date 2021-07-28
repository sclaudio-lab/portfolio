/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Stephanie Claudio
 *    Date: 4/5/20  

 *    Filename: ftjQuery.js
 */

//global variables

var photographerCost = 0;
var totalCost = 0;

//calculates all costs based on staff and adds to total cost
function calcStaff() 
{
    
    var num = $("#photognum");
    
    totalCost -= photographerCost;
    photographerCost = num.val()*100*$("#photoghrs").val() + $("#distance").val()*num.val();
    totalCost += photographerCost;
    
    $( "#estimate" ).html( "$" + totalCost );
}

//adds/subracts cost of memory book from total cost. Added positive logic
function toggleMembook() {
    
        totalCost +=
    ($("#membook").is( ":checked" )) ? 250 : -250;
    $("#estimate").html( "$" + totalCost );
}
//added positive logic

    
/*function toggleRights() {
    
        totalCost +=
    ($("#reprodrights").is( ":checked" )) ? 1250 : -1250;
    $("#estimate").html( "$" + totalCost ); 
} */

//anonymous toggleRights function enclosed

$(document).ready( function() {
    $("#photognum, #photoghrs, #distance").change( calcStaff );
    $("#membook").change( toggleMembook );
    
    $("#reprodrights").change( function() {
                totalCost +=
    ($("#reprodrights").is( ":checked" )) ? 1250 : -1250;
    $("#estimate").html( "$" + totalCost ); 
        
    });
    
    calcStaff();
});

//resets form when page is reloaded
//document.addEventListener("load", resetForm(), false);

//sets all form field values to defaults

$(document).ready( function(){})