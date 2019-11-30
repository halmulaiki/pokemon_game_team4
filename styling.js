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

function clairestatboxOpen() {
    claireStatbox.style.display = 'grid'
}
function jomirstatboxOpen() {
    jomirStatbox.style.display = 'grid'
}

function brandonstatboxOpen() {
    brandonStatbox.style.display = 'grid'
}

function harounstatboxOpen() {
    harounStatbox.style.display = 'grid'
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

// Function to reveal trainer 1 information

function trainers1() {

    // Adding animations to portraits, sprites and changing css displays
    trainerpokeAnimation()
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
    pokesprite1.setAttribute("onclick", 'clairestatboxOpen()')
    pokesprite2.setAttribute("onclick", 'clairestatboxOpen()')
    pokesprite3.setAttribute("onclick", 'clairestatboxOpen()')
}


// Function to reveal Trainer 2 information

function trainers2() {

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
    pokesprite1.setAttribute("onclick", 'jomirstatboxOpen()')
    pokesprite2.setAttribute("onclick", 'jomirstatboxOpen()')
    pokesprite3.setAttribute("onclick", 'jomirstatboxOpen()')
}

// Function to reveal Trainer 3 information

function trainers3() {

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
    pokesprite1.setAttribute("onclick", 'brandonstatboxOpen()')
    pokesprite2.setAttribute("onclick", 'brandonstatboxOpen()')
    pokesprite3.setAttribute("onclick", 'brandonstatboxOpen()')
}

// Function to reveal Trainer 4 information

function trainers4() {

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
    pokesprite1.setAttribute("onclick", 'harounstatboxOpen()')
    pokesprite2.setAttribute("onclick", 'harounstatboxOpen()')
    pokesprite3.setAttribute("onclick", 'harounstatboxOpen()')
}
// myfunction(303)// statbox1
// myfunction(700)// statbox2
// myfunction(786)// statbox3
// myfunction(727)// statbox4
// myfunction(257)// statbox5
// myfunction(6)// statbox6
// myfunction(330)// statbox7
// myfunction(149)// statbox8
// myfunction(635)//statbox9
// myfunction(94)// statbox10
// myfunction(623)// statbox11
// myfunction(680)// statbox12
// myfunction(25)
function myfunction  (id) {
  // console.log("asdfsdfsadfasdfasdfsdafsdfsdafsd");
 fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`).then((resp) =>{
 return resp.json()})
 .then((data) => {
    let pokemon = new Pokemon(data)
    console.log(data)
    trainer1.addPokemonToParty(pokemon)
    let pokeGrid = document.getElementById('pokedex')
    let grid = document.createElement('div')
    grid.id = (`stat-grid`)
    pokeGrid.appendChild(grid)
    let nameP = document.createElement('p')
    nameP.innerText = `${trainer1.party[trainer1.party.length-1].name}`
    nameP.id = `name`
    grid.appendChild(nameP)
    let idP = document.createElement('p')
    idP.innerText = `#${trainer1.party[trainer1.party.length-1].id}`
    idP.id = `idNum`
    grid.appendChild(idP)
    let hp = document.createElement('p')
    hp.innerText = `HP: ${trainer1.party[trainer1.party.length-1].stats.hp}`
    hp.id = `hp`
    grid.appendChild(hp)
    let atk = document.createElement('p')
    atk.innerText = `Attack: ${trainer1.party[trainer1.party.length-1].stats.attack}`
    atk.id = 'attack'
    grid.appendChild(atk)
    let def = document.createElement('p')
    def.innerText = `Defense: ${trainer1.party[trainer1.party.length-1].stats.defense}`
    def.id = 'defense'
    grid.appendChild(def)

})
}
