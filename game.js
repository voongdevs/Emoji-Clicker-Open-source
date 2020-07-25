let money = 0
let multiplier = 1
let upgradesBought = []

function init(){ 
    // click
    document.querySelector(".grin-icon").addEventListener("click", clickEmoji)

    // data
    document.querySelector(".export").addEventListener("click", exportData)
    document.querySelector(".import").addEventListener("change", importData)

    // shop
    document.querySelector(".shopcart-icon").addEventListener("click", showShop)
    document.querySelector(".exit-shop-icon").addEventListener("click", hideShop)

    // Info
    document.querySelector(".info-icon").addEventListener("click", showInfo)
    document.querySelector(".exit-help-icon").addEventListener("click", hideInfo)

    // Menu
    document.querySelector(".menu-container").addEventListener("click", toggleMenu)

    //upgrade  
    document.querySelectorAll(".upgrade").forEach(
        function(upgrade) {
            upgrade.addEventListener("click", function(event){
                const cost = event.currentTarget.querySelector(".cost").innerText
                const upgradeName = event.currentTarget.getAttribute('id')
                console.log(upgradeName)
                console.log(upgradesBought)
                console.log(cost)
                if (money >= cost && !upgradesBought.includes(upgradeName)) {
                    money = money - cost 
                    upgradesBought.push(upgradeName) 
                    multiplier = multiplier * 2
                    document.querySelector(`#${upgradeName}`).classList.add("bought")
                    render()
                }
            })
        }
    )
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

/* Help functions */
function showInfo() {
    document.querySelector(".help-overlay").style.display = "flex"
    console.log("")
}

function hideInfo() {
    document.querySelector(".help-overlay").style.display = "none"
}