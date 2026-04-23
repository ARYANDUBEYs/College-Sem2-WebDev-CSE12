let heading = document.getElementById("heading");
let input = document.getElementById("inputText");
let para = document.getElementById("para");

document.getElementById("changeTextbtn").onclick = 
function(){
    heading.innerHTML = input.value;
};

input.onchange = function(){
    console.log("Input Changed: ", input.value);
};

document.getElementById("bgColorBtn").addEventListener("click", function() {
document.body.style.backgroundColor = "blue";
document.body.style.fontFamily = "Arial";
});

document.getElementById("showhidepara").addEventListener()

document.getElementById("resetBtn").addEventListener("click", function() {
    location.reload;
});

heading.addEventListener("mouseover", function() {
    heading.style.color = "red";
});