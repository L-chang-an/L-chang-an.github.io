
let changeHeader=document.querySelector("h1");


function changeToRed() {
    changeHeader.textContent="hello"
    changeHeader.style.color="red";
}
function restore(){
    changeHeader.style.color="aqua";
}
