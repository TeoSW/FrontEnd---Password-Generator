let generatingArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R",
"S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let getNumber = document.getElementById("numberOfCharacters")
let getPassList1 = document.querySelector("#passList1")
let getPassList2 = document.querySelector("#passList2")
let getPassList3 = document.querySelector("#passList3")
let getPassList4 = document.querySelector("#passList4")
let getErrorPar = document.querySelector("#errorPar")

function generateRandomPassword(){
    constructor = " "
    let aux = [ ]
    let number = parseInt(getNumber.value)
    for( let i = 0; i < number; i++ )
    {
        aux.push(Math.floor(Math.random()*generatingArray.length))
        constructor += generatingArray[aux[i]]
    }
    return constructor
}

function renderPassword(){
    if(getNumber.length == 0 || parseInt(getNumber.value) <6 || parseInt(getNumber.value) >30)
        getErrorPar.innerText = "Please enter a number between 6 and 30"
    else
    {
        getErrorPar.innerText = " "
        let aux = [" "," "," "," "]
        for ( let i = 0 ; i < 4 ; i++)
            aux[i] = generateRandomPassword()
        getPassList1.innerText = aux[0]
        getPassList2.innerText = aux[1]
        getPassList3.innerText = aux[2]
        getPassList4.innerText = aux[3]
}
}