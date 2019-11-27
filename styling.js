let charPortrait = document.getElementById('charPortrait')
let pokeSprites = document.getElementById('pokeSprites')
let statbox1 = document.getElementById('statbox1')
let statbox2 = document.getElementById('statbox2')
let statbox3 = document.getElementById('statbox3')
let pokesprite1 = document.getElementById('pokesprite1')
let pokesprite2 =document.getElementById('pokesprite2')
let pokesprite3 = document.getElementById('pokesprite3')

// Turning the information windows off upon loading the website

charPortrait.style.display = 'none'
pokeSprites.style.display = 'none'
statbox1.style.display = 'none'
statbox2.style.display = 'none'
statbox3.style.display = 'none'

// Function to reveal trainer 1 information

function addTrainers1() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox1.style.display = 'none'
    statbox2.style.display = 'none'
    statbox3.style.display = 'none'
    pokesprite1.setAttribute("src", 'img/mawile.png')
    pokesprite2.setAttribute("src", 'img/sylveon.png')
    pokesprite3.setAttribute("src", 'img/tapulele.png')
}

function pokestat1() {
    statbox1.style.display = 'grid'
    statbox2.style.display = 'none'
    statbox3.style.display = 'none'
}

function pokestat2() {
    statbox1.style.display = 'none'
    statbox2.style.display = 'grid'
    statbox3.style.display = 'none'
}

function pokestat3() {
    statbox1.style.display = 'none'
    statbox2.style.display = 'none'
    statbox3.style.display = 'grid'
}

// Function to reveal Trainer 2 information

function addTrainers2() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox1.style.display = 'none'
    statbox2.style.display = 'none'
    statbox3.style.display = 'none'
    pokesprite1.setAttribute("src", 'img/incineroar.png')
    pokesprite2.setAttribute("src", 'img/blaziken.png')
    pokesprite3.setAttribute("src", 'img/charizard.png')
}

function pokestat1() {
    statbox1.style.display = 'grid'
}

function pokestat2() {
    statbox2.style.display = 'grid'
}

function pokestat3() {
    statbox3.style.display = 'grid'
}

// Function to reveal Trainer 3 information

function addTrainers3() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox1.style.display = 'none'
    statbox2.style.display = 'none'
    statbox3.style.display = 'none'
    pokesprite1.setAttribute("src", 'img/flygon.png')
    pokesprite2.setAttribute("src", 'img/dragonite.png')
    pokesprite3.setAttribute("src", 'img/hydreigon.png')
}

function pokestat1() {
    statbox1.style.display = 'grid'
}

function pokestat2() {
    statbox2.style.display = 'grid'
}

function pokestat3() {
    statbox3.style.display = 'grid'
}

// Function to reveal Trainer 4 information

function addTrainers4() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox1.style.display = 'none'
    statbox2.style.display = 'none'
    statbox3.style.display = 'none'
    pokesprite1.setAttribute("src", 'img/gengar.png')
    pokesprite2.setAttribute("src", 'img/golurk.png')
    pokesprite3.setAttribute("src", 'img/doublade.png')
}

function pokestat1() {
    statbox1.style.display = 'grid'
}

function pokestat2() {
    statbox2.style.display = 'grid'
}

function pokestat3() {
    statbox3.style.display = 'grid'
}
