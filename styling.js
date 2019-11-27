// Defining the divs from HTML to Javascript for manipulation

let charPortrait = document.getElementById('charPortrait')
let gymLeader = document.getElementById('gymLeader')
let trainerName = document.getElementById('trainerName')
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
statbox.style.display = 'none'

function statboxOpen() {
    statbox.style.display = 'grid'
}

// Function to reveal trainer 1 information

function trainer1() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox.style.display = 'none'
    gymLeader.setAttribute("src", 'img/cynthiatrainer.jpg')
    trainerName.setAttribute("src", 'img/claire.png')
    pokesprite1.setAttribute("src", 'img/mawile.png')
    pokesprite2.setAttribute("src", 'img/sylveon.png')
    pokesprite3.setAttribute("src", 'img/tapulele.png')
}

// Function to reveal Trainer 2 information

function trainer2() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox.style.display = 'none'
    gymLeader.setAttribute("src", 'img/redtrainer.jpg')
    trainerName.setAttribute("src", 'img/jomir.png')
    pokesprite1.setAttribute("src", 'img/incineroar.png')
    pokesprite2.setAttribute("src", 'img/blaziken.png')
    pokesprite3.setAttribute("src", 'img/charizard.png')
}

// Function to reveal Trainer 3 information

function trainer3() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox.style.display = 'none'
    gymLeader.setAttribute("src", 'img/goldtrainer.jpg')
    trainerName.setAttribute("src", 'img/brandon.png')
    pokesprite1.setAttribute("src", 'img/flygon.png')
    pokesprite2.setAttribute("src", 'img/dragonite.png')
    pokesprite3.setAttribute("src", 'img/hydreigon.png')  
}

// Function to reveal Trainer 4 information

function trainer4() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    statbox.style.display = 'none'
    gymLeader.setAttribute("src", 'img/jamestrainer.jpg')
    trainerName.setAttribute("src", 'img/haroun.png')
    pokesprite1.setAttribute("src", 'img/gengar.png')
    pokesprite2.setAttribute("src", 'img/golurk.png')
    pokesprite3.setAttribute("src", 'img/doublade.png')   
}