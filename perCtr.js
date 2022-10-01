
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

// console.log(countEl)
// console.log(saveEl)

let count = 0

function increment(){
    count+=1
    countEl.textContent = count
}


function save(){
    let saveAs = count + " - "
    saveEl.textContent += saveAs
    //when i click save i want two things --
    countEl.textContent = 0   //setting display to 0
    count = 0                 //incrementing from zero again
    

}
