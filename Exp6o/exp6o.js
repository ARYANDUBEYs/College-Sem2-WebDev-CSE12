let newheading = document.getElementById("heading");
newheading.textContent="DOM Manipulation in JS";
newheading.style.color= "blue";
newheading.style.fontSize="60px";
let paragraph = document.getElementsByClassName("para")[0];
paragraph.innerHTML = "<strong> Hi new</strong>";
paragraph.style.color = "red";
let new_element = document.createElement("div");
new_element.textContent="I am new div";
document.body.appendChild(new_element);
let input = document.getElementsByClassName("input");
let button1 = document.getElementById("change_heading");
button1.addEventListener("click", function()  {
    let c_heading = prompt("Change heading to : ")
    if(c_heading != "") {
        newheading.textContent = c_heading;
    }
});
let button2 = document.getElementById("change_heading_color");
button2.addEventListener("click", function() {
    let h_color = prompt("Change color of heading\n")
    if(h_color != "")
    {
        newheading.style.color = h_color;
    }
});

