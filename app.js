let M = [
            [0, 1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10, 11],
            [12, 13, 14, 15, 16, 17],
            [18, 19, 20, 21, 22, 23],
            [24, 25, 26, 27, 28, 29],
            [30, 31, 32, 33, 34, 35]
        ]

const main = document.createElement("main")

let rangeOfApple = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]

M.map((cellArr) => {
    let div = document.createElement("div")
    div.className = 'snake-cell';
    cellArr.map((_) => {
        let div = document.createElement("div")
        div.setAttribute("class", "snake-cell");
        main.appendChild(div)
    })
    document.body.appendChild(main);
})

let divs = document.getElementsByClassName("snake-cell")

for (let i = 0; i < divs.length; i++) {
    divs[i].setAttribute("id", i)
}

let MLastRowIndex = 0
let MLastCellIndex = 0

let availableCells = []
let snakeFillCells = []

let generate
let currentRandomAppleCell = 5

function generateApple() {
    let R = rangeOfApple.filter(availableCell => availableCell !== snakeFillCells[0])
    let currentRandomAppleCell = R[Math.floor(R.length * Math.random())];
    generate = currentRandomAppleCell
    document.getElementById(currentRandomAppleCell).setAttribute("class", "apple")
    return currentRandomAppleCell
}

function UP() {
    snakeFillCells = []
    MLastRowIndex -= 1
    let CurrentRow = M.at(MLastRowIndex)
    let previousRow = M.at(MLastRowIndex + 1)
    let currentCell = CurrentRow.at(MLastCellIndex - 1) 

    snakeFillCells.push(currentCell)

    document.getElementById(currentCell).setAttribute("class", "snake-red")
    previousRow.map(el => {
        document.getElementById(el).setAttribute("class", "apple-done")
    })

    if(currentCell == currentRandomAppleCell && currentRandomAppleCell !== null) {
        document.getElementById(currentRandomAppleCell).setAttribute("class", "snake-red")
        generateApple()
        currentRandomAppleCell = generate
    } 
}

function DOWN() {
    snakeFillCells = []
    MLastRowIndex += 1
    let CurrentRow = M.at(MLastRowIndex)
    let previousDownRow = M.at(MLastRowIndex - 1)
    console.log(previousDownRow);
    let currentCell = CurrentRow.at(MLastCellIndex - 1)

    snakeFillCells.push(currentCell)
   
    document.getElementById(currentCell).setAttribute("class", "snake-red")
    previousDownRow.map((el, index) => {
        return document.getElementById(el).setAttribute("class", "apple-done")
    })

    if(currentCell == currentRandomAppleCell && currentRandomAppleCell !== null) {
        document.getElementById(currentRandomAppleCell).setAttribute("class", "snake-red")
        generateApple()
        currentRandomAppleCell = generate
    } 
}

function LEFT() {
    snakeFillCells = []
    MLastCellIndex -= 1
    let currentLeftRow = M.at(MLastRowIndex)
    let currentLeftCell = currentLeftRow.at(MLastCellIndex - 1)
    snakeFillCells.push(currentLeftCell)
    
    document.getElementById(currentLeftCell).setAttribute("class", "snake-red")
    document.getElementById(currentLeftCell + 1).setAttribute("class", "apple-done")

    if(currentLeftCell == currentRandomAppleCell && currentRandomAppleCell !== null) {
        document.getElementById(currentRandomAppleCell).setAttribute("class", "snake-red")
        generateApple()
        currentRandomAppleCell = generate
        
    } 
}

function RIGHT() {
    snakeFillCells = []
    MLastCellIndex += 1
    let currentRightRow = M.at(MLastRowIndex)
    let currentRightCell = currentRightRow.at(MLastCellIndex - 1)
    snakeFillCells.push(currentRightCell)

    document.getElementById(currentRightCell).setAttribute("class", "snake-red")
    document.getElementById(currentRightCell - 1).setAttribute("class", "apple-done")

    if(currentRightCell == currentRandomAppleCell && currentRandomAppleCell !== null) {
        document.getElementById(currentRandomAppleCell).setAttribute("class", "snake-red")
        generateApple()
        currentRandomAppleCell = generate
    } 
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
                LEFT()
            break;
        case 38:
                UP()
            break;
        case 39:
                RIGHT()
            break;
        case 40:
                DOWN()
            break;
    }
};

