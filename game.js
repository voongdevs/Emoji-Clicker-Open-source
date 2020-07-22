let money = 0
const upgradesBought = []

function init(){ 
    document.querySelector(".grin-icon").addEventListener("click", clickEmoji)
    document.querySelector(".export").addEventListener("click", exportData)
    document.querySelector(".shopcart-icon").addEventListener("click", showShop)
    document.querySelector(".exit-shop-icon").addEventListener("click", hideShop)
    document.querySelector(".menu-container").addEventListener("click", toggleMenu)
}
function clickEmoji(){
    money++
    render()
}
function render(){
    document.querySelectorAll(".counter-value").forEach(counter => counter.innerText = money)
}

/* menu options */

function exportData() {
    const data = JSON.stringify({
        money: money,
        upgradesBought: upgradesBought
    })
    let a = document.createElement('a');
    a.href = "data:application/octet-stream,"+encodeURIComponent(data);
    a.download = 'save.txt';
    a.click();
}

/* shop functions */
function showShop() {
    document.querySelector(".shop-overlay").style.display = "flex"
}

function hideShop() {
    document.querySelector(".shop-overlay").style.display = "none"
}

function toggleMenu() {
    if (document.querySelector(".menu").style.display ==="block"){
        document.querySelector(".menu").style.display = "none" 
    } else {
        document.querySelector(".menu").style.display = "block" 
    }
}

init()