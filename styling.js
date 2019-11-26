// Defining the divs from HTML to Javascript for manipulation

let charPortrait = document.getElementById('charPortrait')
let pokeSprites = document.getElementById('pokeSprites')
let statbox1 = document.getElementById('statbox1')
let statbox2 = document.getElementById('statbox2')
let statbox3 = document.getElementById('statbox3')

// Turning the information windows off upon loading the website

charPortrait.style.display = 'none'
pokeSprites.style.display = 'none'
statbox1.style.display = 'none'
statbox2.style.display = 'none'
statbox3.style.display = 'none'

// Function to reveal trainer information

function trainer1() {
    charPortrait.style.display = 'grid'
    pokeSprites.style.display = 'grid'
    
}

function pokestat1() {
    statbox1.style.display = 'grid'
    

}
