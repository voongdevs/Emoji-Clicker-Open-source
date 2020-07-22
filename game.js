alert("hi")
let money = 0
function init(){ 
    document.querySelector(".grin-icon").addEventListener("click", clickEmoji)
    
}
function clickEmoji(){
    money++
    render()
}
function render(){
    document.querySelector(".counter-value").innerText = money
    
}

init()