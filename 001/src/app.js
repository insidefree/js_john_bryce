window.onload = function () {
    let btnAddCar = document.getElementById("addCarButon")
    let searchCarButon = document.getElementById("searchCarButon")
    let list = document.getElementById('list')
    alert(`Hi buddy, you have to buttons: "${btnAddCar.value}" and "${searchCarButon.value}"`)
    
    console.log(btnAddCar)
    let carStore = {}
    let counterID = 1

    btnAddCar.addEventListener("click", addCarToCarStore)
    searchCarButon.addEventListener("click", searchCar)

    function addCarToCarStore() {
        let flag = true
        while (flag) {
            let temp = prompt('License plate number')
            carStore[temp] = {}
            carStore[temp].color = prompt('color')
            carStore[temp].type = prompt('type')
            console.log(carStore)
            let node = document.createElement("div")
            let textNode = document.createTextNode(`License: ${temp}, color: ${carStore[temp].color}`)
            node.appendChild(textNode)
            list.appendChild(node)
            counterID++
            flag = confirm("Would you like enter another car!");
        }

    }
    function searchCar() {
        let car = prompt('Enter License plate number')
        if (carStore[car]) {
            console.log(carStore[car])
        } else {
            console.error("Current car not exist")
        }
    }
}


