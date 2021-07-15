var p;

var set = document.querySelector("#setTask"); //set task button
set.addEventListener("click", (event)=>{

    //Limiting no. of tasks that can be added to list
    var numOfTasks = document.getElementsByClassName("list-group-item").length;
    var span = document.querySelector("#taskCount");

    // var span = document.createElement("span");
    span.textContent = "You can add "+(10-numOfTasks)+" more task(s)";
    // rem.Child(p);


        if(numOfTasks <= 10){

             //grabbing new task from input
            var task = document.getElementById("task").value;

            //adding new task as an li to the ul
            var list = document.getElementById("list");
            var li = document.createElement("li");

            li.classList.add("list-group-item","mb-1","text-light");
            li.textContent = task;

            //Striking completed tasks by clicking
            li.onclick = function(){
                li.classList.toggle("strike");
            }

            list.appendChild(li);

            //highlighting tasks according to priority
            if(p=="high"){
                li.classList.add("bg-danger");
                // li.className = "high";
            }
            else if(p=="medium"){
                li.classList.add("bg-warning");
                // li.className = "medium";
            }
            else{
                li.classList.add("bg-success");
                // li.className = "low";
            }
        }

        else{
            span.textContent = "Cannot add more tasks to the list!";
            span.id = "message";
        }
          
console.log(numOfTasks);
});



//Grabbing priority input
var priority = document.getElementById("priority"); 
priority.addEventListener("change", (event)=>{

     p = document.getElementById("priority").value;

});


//Displaying tasks according to priority
var high = document.getElementsByClassName("bg-danger");
var mid = document.getElementsByClassName("bg-warning");
var low = document.getElementsByClassName("bg-success");

function displayLowPriority(){

    for(var i=0;i<high.length;i++){
        high[i].classList.add("d-none");
    }
    for(var i=0;i<mid.length;i++){
        mid[i].classList.add("d-none");
    }
    for(var i=0;i<low.length;i++){
        low[i].classList.remove("d-none");
    }
    
}

function displayMidPriority(){
    
    for(var i=0;i<high.length;i++){
        high[i].classList.add("d-none");
    }
    for(var i=0;i<mid.length;i++){
        mid[i].classList.remove("d-none");
    }
    for(var i=0;i<low.length;i++){
        low[i].classList.add("d-none");
    }
}

function displayHighPriority(){
    
    for(var i=0;i<high.length;i++){
        high[i].classList.remove("d-none");
    }
    for(var i=0;i<mid.length;i++){
        mid[i].classList.add("d-none");
    }
    for(var i=0;i<low.length;i++){
        low[i].classList.add("d-none");
    }
}










