var todaysDate = moment().format('MMMM Do YYYY, h:mm:ss a');

//current time
$("#currentDay").text(todaysDate);


// Object for time blocks
var timeBlocks = [
    {Time:"9 am" , input:" " },
    {Time:"10 am" , input:" " },
    {Time:"11 am" , input:" " },
    {Time:"12 pm" , input:" " },
    {Time:"1 pm" , input:" " },
    {Time:"2 pm" , input:" " },
    {Time:"3 pm" , input:" " },
    {Time:"4 pm" , input:" " },
    {Time:"5 pm" , input:" " },
    {Time:"6 pm" , input:" " },
    {Time:"7 pm" , input:" " },
    {Time:"8 pm" , input:" " },
    {Time:"9 pm" , input:" " },
    {Time:"10 pm" , input:" " },
    {Time:"11 pm" , input:" " },
    {Time:"12 am" , input:" " },
]


// function to create calander time blocks dynamically 
function createTimeBlocks() {
    for(var i = 0; i < timeBlocks.length; i++) {
        
        var row = $("<div>").addClass("row time-block");
        $(".container").append(row);
        
        var hourDisplay = $("<div>").addClass("hour col-2");
        hourDisplay.text(timeBlocks[i].Time);
        console.log(`This time is being displayed in the "Hour" coloumn: ${timeBlocks[i].Time}`);

        var inputBox = $("<textarea>")
        .attr({ type:"text", 
                placeholder: "You can type your day's activities here", 
                id: "inputDescription" + (i + 1)
            })
        .addClass("col-8")
        .text(timeBlocks[i].input)
        console.log(`The user wrote: ${timeBlocks[i].input}`);

        var saveBtn = $("<button>");
        $(saveBtn)
        .attr({
            class: "saveBtn col-1 flex-nowrap",
            id: "button" + (i+1)
        })
        .text("Save");
        console.log(`The save btn was clicked: ${saveBtn}`);
        $(row).append(hourDisplay, inputBox, saveBtn);
    };
};

createTimeBlocks();

//Add user's input to calendar to local storage
$("button").click(function () {
    event.preventDefault();
    var currentID = $(this).attr('id')
    var toStore = $(("#inputDescription" + currentID)).val();
    localStorage.setItem(("saveInfo" + currentID), toStore);
});

//Check relative time
function checkTime() {
    for (var i = 0; i < timeBlocks.length; i++) {
        var currentTime = moment().hour(9 + i);
        if (moment().isBefore(currentTime)) {
            $("#inputDescription" + (i +1)).addClass("future");

        } else if (moment().isAfter(currentTime)) {
            $("#inputDescription" + (i +1)).addClass("past");

        } else {
            $("#inputDescription" + (i +1)).addClass("present");
        }
    };
};

checkTime();

//Function to clear calendar contents before the start of the next day
function clearCal() {
    var clearTime = moment().hour(23).minute(59);
    if (moment().isSameOrAfter(clearTime)) {
        for (var i = 0; i < timeBlocks.length; i++) {
            localStorage.clear();
        };
    };
};

clearCal();

//Function to auto refresh the page every 60 seconds
//This ensures that the color coding updates promptly.
function refresh(){
    setTimeout(function() {
        location.reload();
      }, 60000);
};

refresh();
