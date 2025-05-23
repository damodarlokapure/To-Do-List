const inputBox=document.getElementById("input-box");
const listContainer =document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter a task");
    }
    else{

        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);

          // Add checkbox and delete button
          let span = document.createElement("span");
          span.innerHTML = "\u00d7";
          li.appendChild(span);
       
    }
    inputBox.value="";  // Clear input field
    saveData(); // Save data to local storage
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData(); // Save data to local storage
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData(); // Save data to local storage
    }
}, false);


function saveData() // Save data to local storage
{
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() // Show task from local storage
{
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();  // Call showTask to display tasks on page load


