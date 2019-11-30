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
claireStatbox.style.display = 'none'
jomirStatbox.style.display = 'none'
brandonStatbox.style.display = 'none'
harounStatbox.style.display = 'none'

function statboxOpen() {
    claireStatbox.style.display = 'grid'
}

// function trainerpokeAnimation() {
//     charPortrait.classList.add('fadeIn')
//     pokeSprites.classList.add('fadeIn')
//     charName.classList.add('fadeIn')
//     var boxesOpen = 'true'
//     boxesOpen = true
// }

// function checkBox() {
//     if (boxesOpen = true) {
//         setTimeout(() => {
//             charPortrait.classList.remove('fadeIn')
//             pokeSprites.classList.remove('fadeIn')
//             charName.classList.remove('fadeIn')
//             charPortrait.classList.add('fadeOut')
//             pokeSprites.classList.add('fadeOut')
//             charName.classList.add('fadeOut')
//         }, 700);
//     } else {
// }

// Function to reveal trainer 1 information

function trainer1() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Closing all statboxes to clean screen
    claireStatbox.style.display = 'none'
    jomirStatbox.style.display = 'none'
    brandonStatbox.style.display = 'none'
    harounStatbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/cynthiatrainer.jpg')
    trainerName.setAttribute("src", 'img/claire.png')
    pokesprite1.setAttribute("src", 'img/mawile.png')
    pokesprite2.setAttribute("src", 'img/sylveon.png')
    pokesprite3.setAttribute("src", 'img/tapulele.png')
}

// Function to reveal Trainer 2 information

function trainer2() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Closing all statboxes to clean screen
    claireStatbox.style.display = 'none'
    jomirStatbox.style.display = 'none'
    brandonStatbox.style.display = 'none'
    harounStatbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/redtrainer.jpg')
    trainerName.setAttribute("src", 'img/jomir.png')
    pokesprite1.setAttribute("src", 'img/incineroar.png')
    pokesprite2.setAttribute("src", 'img/blaziken.png')
    pokesprite3.setAttribute("src", 'img/charizard.png')
}

// Function to reveal Trainer 3 information

function trainer3() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    
    // Closing all statboxes to clean screen
    claireStatbox.style.display = 'none'
    jomirStatbox.style.display = 'none'
    brandonStatbox.style.display = 'none'
    harounStatbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/goldtrainer.jpg')
    trainerName.setAttribute("src", 'img/brandon.png')
    pokesprite1.setAttribute("src", 'img/flygon.png')
    pokesprite2.setAttribute("src", 'img/dragonite.png')
    pokesprite3.setAttribute("src", 'img/hydreigon.png')  
}

// Function to reveal Trainer 4 information

function trainer4() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Closing all statboxes to clean screen
    claireStatbox.style.display = 'none'
    jomirStatbox.style.display = 'none'
    brandonStatbox.style.display = 'none'
    harounStatbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/jamestrainer.jpg')
    trainerName.setAttribute("src", 'img/haroun.png')
    pokesprite1.setAttribute("src", 'img/gengar.png')
    pokesprite2.setAttribute("src", 'img/golurk.png')
    pokesprite3.setAttribute("src", 'img/doublade.png')   
}