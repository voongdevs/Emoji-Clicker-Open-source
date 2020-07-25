let money = 0
let multiplier = 1
let upgradesBought = []

function init(){ 
    document.querySelector(".grin-icon").addEventListener("click", clickEmoji)

    document.querySelector(".export").addEventListener("click", exportData)
    document.querySelector(".import").addEventListener("change", importData)

    document.querySelector(".shopcart-icon").addEventListener("click", showShop)
    document.querySelector(".exit-shop-icon").addEventListener("click", hideShop)

    document.querySelector(".menu-container").addEventListener("click", toggleMenu)

    document.querySelector("#upgrade1").addEventListener("click", function(){
        if (money >= 50 && !upgradesBought.includes("#upgrade1")) {
            money = money - 50 
            upgradesBought.push("#upgrade1") 
            multiplier = multiplier * 2
            document.querySelector("#upgrade1").classList.add("bought")
            render()
        }
    })
}
function clickEmoji(){
    let moneyToAdd = 1 
    console.log(upgradesBought)
    money = money + moneyToAdd * multiplier
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

function importData() {
    const reader = new FileReader();
    const file = document.querySelector("input[type=file]").files[0]
    reader.readAsText(file, "UTF-8");
    reader.onload = function (e) {
        const data = JSON.parse(e.target.result)
        money = data.money
        upgradesBought = data.upgradesBought
        render()
    }
    reader.onerror = function (evt) {
        document.getElementById("fileContents").innerHTML = "error reading file";
    }
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