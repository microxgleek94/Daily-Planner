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
        $(hourDisplay).text(timeBlocks[i].Time);
        console.log(`This time is being displayed in the "Hour" coloumn: ${timeBlocks[i].Time}`);

        var inputDisplay = $("<div>").addClass("description col-10")
        var inputRow = $("<input>").attr({type:"text" , placeholder: "You can type your day's activities here"}).text(timeBlocks[i].input);
        $(inputDisplay).append(inputRow);
    

        //Populate calendar cells with saved items
        var textArea = $("<textarea>").addClass("textarea col-12").attr("id", "textareabutton").text(localStorage.getItem("myEventbutton"));
        $(inputDisplay).append(inputRow, textArea);

        var saveBtn = $("<button>");
        $(saveBtn).addClass("saveBtn col-1 flex-nowrap").attr("id", "button").text("Save");
        $(row).append(hourDisplay, inputRow, saveBtn);
    };
};


createTimeBlocks();