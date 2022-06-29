msg = "javascript"
document.write(msg)

// let changeBut= document.querySelector("button");
let changeHeader=document.querySelector("h1");
// let head1=changeHeader.querySelector("")
// changeBut.onclick=function (){
//     let butId=changeBut.id;
//     if (butId==="change-red"){
//         changeHeader.setAttribute("color","red");
//     }
//     else{
//         changeHeader.setAttribute("color","aqua");
//     }
// }

function changeToRed() {
    changeHeader.textContent="hello"
    changeHeader.style.color="red";
}
function restore(){
    changeHeader.style.color="aqua";
}
