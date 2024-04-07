const countButton = document.getElementById("countButton")
const myH1 = document.getElementById("myH1")
countButton.addEventListener("click", count)

let number = 0
function count(){
    number = number+1
    myH1.innerHTML=number
}