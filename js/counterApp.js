let saveEl = document.getElementById("entries")
let countEl = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    countEl.textContent = count
}
function saving(){
    let save = count + " - "
    saveEl.textContent += save
    count = 0
    countEl.textContent = count
}
