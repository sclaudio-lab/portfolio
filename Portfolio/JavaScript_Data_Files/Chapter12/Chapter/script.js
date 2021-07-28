/*  Javascript 6th Edition
    Chapter 12
    Chapter Case
    Life on Rocks Wildlife Cruises
    Author: Stephanie Claudio
    Date: 5/8/20
    Filename: script.js */

//$("ul.mainmenu li").children("ul").addClass("show");

function display(event) {
   // $(event.currentTarget).children("ul").addClass("show");
   // $(event.currentTarget).children("ul").show();
    $(event.currentTarget).children("ul").slideDown("fast");
}





function hide(event) {
    //$(event.currentTarget).children("ul").removeClass("show");
   // $(event.currentTarget).children("ul").hide();
    $(event.currentTarget).children("ul").slideUp("slow")
}

$("ul.mainmenu li").hover(display,hide);


//var mainMenu = $("ul.mainmenu li");
//$(mainMenu).hover(

//$("ul.mainmenu li").children("ul").addClass("show");
//$(event.currentTarget).children("ul").removeClass("show");
//);