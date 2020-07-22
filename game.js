let money = 0
function init(){ 
    document.querySelector(".grin-icon").addEventListener("click", clickEmoji)
    document.querySelector(".shopcart-icon").addEventListener("click", showShop)
    document.querySelector(".exit-shop-icon").addEventListener("click", hideShop)
}
function clickEmoji(){
    money++
    render()
}
function render(){
    document.querySelectorAll(".counter-value").forEach(counter => counter.innerText = money)
}

/* shop functions */
function showShop() {
    document.querySelector(".shop-overlay").style.display = "flex"
}

function hideShop() {
    document.querySelector(".shop-overlay").style.display = "none"
}

init()