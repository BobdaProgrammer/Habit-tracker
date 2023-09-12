let money
function Money(amount){
    if(amount < 0 && -amount > money){
        return
    }
    else{
        document.getElementById("money").innerHTML = `<span class="money" id="money">₿ ${money+=amount}</span>`;
        localStorage.setItem("money", money);
    }
}
function show(){
        document.getElementById("newTaskform").style.display = "block";
}
function deleteTask(btn) {
    let task = btn.parentNode;
    task.parentNode.removeChild(task);
    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML)
    localStorage.setItem("shop", document.getElementById("shop").innerHTML)
}

function doit(){
    var dropdown = document.getElementById("dropdown");

    // Get the selected option
    var selectedOption = dropdown.options[dropdown.selectedIndex].value;
        let title = document.getElementById("newTitle").value;
    let price = document.getElementById("newprice").value;
    let text = document.getElementById("newTask").value;
    if(title.trim().length > 0 && price.trim().length > 0 && text.trim().length > 0){
        document.getElementById("newTaskform").style.display = "none";
        console.log(selectedOption);
    let task = document.createElement("div");
    if(selectedOption == "option1"){
    task.innerHTML = `
    <span class="Task-title">${title}</span>
    <button class="delete" onclick="deleteTask(this);">X</button>
    <span class="price">₿ ${price}</span>
    <p class="task-text">${text}</p>
    <button id="yes" onclick="Money(${price});" class="yes">Completed</button>
    <button id="no" class="no"onclick="Money(-5);">Failed</button>
    `;
    task.className = "task";
    task.id = "task";
    document.getElementById("tasks").appendChild(task);
    localStorage.setItem("tasks", document.getElementById("tasks").innerHTML)
    }
    else{
        task.innerHTML = `
        <span class="Task-title">${title}</span>
        <button class="delete" onclick="deleteTask(this);">X</button>
        <span class="price">₿ ${price}</span>
        <p class="task-text">${text}</p>
        <button id="Purchase" onclick="Money(-${price});" class="Purchase">Purchase</button>
        `;
        task.className = "item";
        task.id = "item";
        document.getElementById("shop").appendChild(task);
        localStorage.setItem("shop", document.getElementById("shop").innerHTML)
    }
    document.getElementById("newTask").value = "";
    document.getElementById("newTitle").value = "";
    document.getElementById("newprice").value = "";
    document.getElementById("newTask").value = "";
    Listen();
}
}
function Listen(){
    let completes = document.querySelectorAll(".yes");
    completes.forEach(complete => {
    complete.addEventListener("click", function () {
        complete.style.animation = "celebration 0.7s";
    
        // Remove the celebration class after the animation completes
        setTimeout(() => {
            complete.style.animation = "";
        }, 700); // Adjust the time to match the animation duration
    });
});
}
document.addEventListener("DOMContentLoaded", function () {
money = localStorage.getItem("money");
money = parseInt(money);
Money(0);   
document.getElementById("newTaskform").style.display = "none";
let tasks = localStorage.getItem("tasks");
let shop = localStorage.getItem("shop");
if(tasks != "null"){
document.getElementById("tasks").innerHTML = tasks;
}
else{
    document.getElementById("tasks"). innerHTML = `        <div class="task-containers" id="tasks">
    </div>`
}
if(shop != "null"){
document.getElementById("shop").innerHTML = shop;
}
else{
    document.getElementById("shop").innerHTML == `
    <div class="shop" id="shop">
    <span class="Shop">Shop</span>
    </div>`;
}
Listen();
});


