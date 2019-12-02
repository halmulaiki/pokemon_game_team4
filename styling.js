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
Statbox.style.display = 'none'


function statboxOpen() {
    Statbox.style.display = 'grid'
}

function trainerpokeAnimation() {
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    var boxesOpen = 'true'
    boxesOpen = true
}

function checkBox() {
    if (boxesOpen = true) {
        charPortrait.classList.remove('fadeIn')
        pokeSprites.classList.remove('fadeIn')
        charName.classList.remove('fadeIn')
        charPortrait.classList.add('fadeOut')
        pokeSprites.classList.add('fadeOut')
        charName.classList.add('fadeOut')
        setTimeout(() => {
            charPortrait.style.display = 'none'
            pokeSprites.style.display = 'none'
            charName.style.display = 'none'
        }, 1500);
    } else {
}
}

// Function to reveal trainer 1 (Claire) information

function trainer1() {

    // Adding animations to portraits, sprites and changing css displays
    trainerpokeAnimation()
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Calling API's to fill Trainer Pokemon Info
    pokemonAPI1(303)
    pokemonAPI2(700)
    pokemonAPI3(786)

    // Closing all statboxes to clean screen
    Statbox.style.display = 'none'
    

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/cynthiatrainer.jpg')
    trainerName.setAttribute("src", 'img/claire.png')
    pokesprite1.setAttribute("src", 'img/mawile.png')
    pokesprite2.setAttribute("src", 'img/sylveon.png')
    pokesprite3.setAttribute("src", 'img/tapulele.png')
    pokesprite1.setAttribute("onclick", 'statboxOpen()')
    pokesprite2.setAttribute("onclick", 'statboxOpen()')
    pokesprite3.setAttribute("onclick", 'statboxOpen()') 
}


// Function to reveal Trainer 2 (Jomir) information

function trainer2() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Calling API's to fill Trainer Pokemon Info
    pokemonAPI1(727)
    pokemonAPI2(257)
    pokemonAPI3(006)

    // Closing all statboxes to clean screen
    Statbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/redtrainer.jpg')
    trainerName.setAttribute("src", 'img/jomir.png')
    pokesprite1.setAttribute("src", 'img/incineroar.png')
    pokesprite2.setAttribute("src", 'img/blaziken.png')
    pokesprite3.setAttribute("src", 'img/charizard.png')
    pokesprite1.setAttribute("onclick", 'statboxOpen()')
    pokesprite2.setAttribute("onclick", 'statboxOpen()')
    pokesprite3.setAttribute("onclick", 'statboxOpen()') 
}

// Function to reveal Trainer 3 (Brandon) information

function trainer3() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Calling API's to fill Trainer Pokemon Info
    pokemonAPI1(330)
    pokemonAPI2(149)
    pokemonAPI3(635)
    
    // Closing all statboxes to clean screen
    Statbox.style.display = 'none'
    

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/goldtrainer.jpg')
    trainerName.setAttribute("src", 'img/brandon.png')
    pokesprite1.setAttribute("src", 'img/flygon.png')
    pokesprite2.setAttribute("src", 'img/dragonite.png')
    pokesprite3.setAttribute("src", 'img/hydreigon.png')
    pokesprite1.setAttribute("onclick", 'statboxOpen()')
    pokesprite2.setAttribute("onclick", 'statboxOpen()')
    pokesprite3.setAttribute("onclick", 'statboxOpen()') 
}

// Function to reveal Trainer 4 (Haroun) information

function trainer4() {

    // Adding animations to portraits, sprites and changing css displays
    charPortrait.classList.add('fadeIn')
    pokeSprites.classList.add('fadeIn')
    charName.classList.add('fadeIn')
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'

    // Calling API's to fill Trainer Pokemon Info
    pokemonAPI1(94)
    pokemonAPI2(623)
    pokemonAPI3(680)

    // Closing all statboxes to clean screen
    Statbox.style.display = 'none'

    // Displaying trainer image and pokemon sprites
    gymLeader.setAttribute("src", 'img/jamestrainer.jpg')
    trainerName.setAttribute("src", 'img/haroun.png')
    pokesprite1.setAttribute("src", 'img/gengar.png')
    pokesprite2.setAttribute("src", 'img/golurk.png')
    pokesprite3.setAttribute("src", 'img/doublade.png')
    pokesprite1.setAttribute("onclick", 'statboxOpen()')
    pokesprite2.setAttribute("onclick", 'statboxOpen()') 
    pokesprite3.setAttribute("onclick", 'statboxOpen()') 
}
