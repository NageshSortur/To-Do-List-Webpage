const input = document.getElementById("textfield");
const list = document.getElementById("task-list");

function addTask(){
    if(input.value==''){
        alert("Input cannot be empty. Please Enter Text");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ; // Unicode character for the multiplication sign (×) using it for Cancel
        li.appendChild(span);
    }
    input.value = "" ;
    save_data();
}
list.addEventListener("click",function(event){
    if(event.target.tagName === "LI"){ //If clicked on li(list) then checked
        event.target.classList.toggle("checked");
        save_data();
    }
    else if(event.target.tagName == "SPAN"){ //clicked on cancel button(named as SPAN)
        event.target.parentElement.remove();
        save_data();
    }
}, false);

function save_data(){
    localStorage.setItem("data", list.innerHTML);
}
function displayTask(){
    list.innerHTML = localStorage.getItem("data");
}
displayTask();