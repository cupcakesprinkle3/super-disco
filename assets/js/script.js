
// START WORKING DATE AT TOP

var showDate = function() {
  // instantiate a moment object
  var nowMoment = moment().format("dddd, MMM D");
  
  // display value of moment object in #displayMoment div
  var displayIDMoment = document.getElementById('currentDay');
  displayIDMoment.innerHTML = nowMoment;
  
}

 showDate();

// END WORKING DATE AT TOP

// LOGGING ATTEMPT TO DYNAMICALLY SET HOUR UNSUCCESSFULLY FOR ONE BLOCK
//var showTimeOne = function() {
//    var oneMoment = moment(date).set("hour", 9);
//    var displayHourOne = document.getElementById('timeBlockOne');
//    displayHourOne.innerHTML = oneMoment;
//} 


// LOGGING ATTEMP TO LOOP THE 9 TO 5 DYNAMICALLY UNSUCCESSFULLY 

/* for (var hour = 9; hour <= 17; hour++) {
    index = hour - 9;
    var rowDiv = $("<div>");
    rowDiv.addClass("row");
    rowDiv.attr("hour-index","hour");

    var timeCol = $("<div>");
    timeCol.addClass("col-2");

    var timeContents = $("<span>");

    var displayTime = 0;
    var displayAmPm = "";
    if (hour > 12) {
        displayTime = hour - 12;
        displayAmPm = "PM";
    } else {
        displayHour = hour;
        displayAmPm = "AM";
    }

    console.log(displayTime);
    console.log(displayAmPm);

    timeContents.text = (displayHour + "" + displayAmPm); 
        
    rowDiv.append(timeCol);
    timeCol.append(timeContents);
  
    planContainer.append(rowDiv);
}

*/

$(document).ready(function() {

  // LOGGING ATTEMPT TO SET ON CLICK TO GET BY CLASS NAME
  //  console.log("works till here at least");

  //  $( ".saveButton").on("click", function () {
  //      var x = document.getElementsByClassName("toDoInput");
  //      var y = document.getElementsByClassName("hour");   
  //      console.log("works till here at least"); 
  //      localStorage.setItem(x, y);
  // });
   
  // SET COLOR OF ENTRY ROW   
 
      function hourTracker() {

      var currentHour = moment().hour();

      $(".entry").each(function() {

      /* CREDIT - Tutor helped with the idea for using children and jquery eq, and pointed me to:
      https://www.w3schools.com/jquery/sel_eq.asp#:~:text=The%20%3Aeq()%20selector%20selects,like%20in%20the%20example%20above). */

        var kids = $(this).children();
        var text = kids.eq(1);
        var save = kids.eq(2);

        var entryHour = parseInt($(this).attr("id").replace('hour-',''));

        /* CREDIT - How to get hour from id on stack overflow
    https://stackoverflow.com/questions/22828474/how-to-get-number-from-the-id-value */

        $(save).on("click", function () {
        console.log(text.val());
        localStorage.setItem(entryHour, text.val());
        });
    
        console.log(this);

        if (entryHour < currentHour) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
        }
        else if (entryHour > currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        }    
        else {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
        }    
    });


// ATTEMPTING TO RECREATE TASKMASTER PRO EDITING FUNCTIONALITY UNSUCCESSFULLY 

  /*  $( ".toDoInput" ).click(function() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
   .val(text);

  $(this).replaceWith(textInput);
  
  textInput.trigger("focus");

  });
  */

/*   $(".toDoInput").on("blur", "textarea", function() {
    // get current value of textarea
    var text = $(this).val();
  
    // get status type and position in the list
    var status = $(this)
      .closest(".toDoInput")
      .replace("toDoInput", "");
   
    // update task in array and re-save to localstorage
    tasks[status][index].text = text;
    saveTasks();
  
    // recreate p element
    var taskP = $("<p>")
      .addClass("m-1")
      .text(text);
  
    // replace textarea with new content
    $(this).replaceWith(taskP);
  });

  // ATTEMPTING TO SET HOUR ON LEFT UNSUCCESSFULLY
  // convert to moment object at 5:00pm
  // var time = moment(date, "L").set("hour", 17); */


};

hourTracker();

})