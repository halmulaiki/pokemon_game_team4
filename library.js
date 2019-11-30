class Trainer {
    constructor(name) {
        this.party = []
        this.name = name
    }
    all = () => {
        return this.party
    }
    get = (name) => {
        for (let i = 0; i < this.party.length; i++) {
            if (name == this.party[i].name) {
                return this.party[i]
            }
        }
    }
    addPokemonToParty(pokemon) {
        if (this.party.length < 12) {
            this.party.push(pokemon)
        }
    }
}
class Pokemon {
    constructor(data) {
        this.name = data.name
        this.id = data.id
        this.stats = {
            hp: data.stats[5].base_stat,
            attack: data.stats[4].base_stat,
            defense: data.stats[3].base_stat
        }
        this.abilities = []
        this.types = []
        for (let i = 0; i < data.abilities.length; i++) {
            this.abilities.push(data.abilities[i].ability.name)
        }
        for (let i = 0; i < data.types.length; i++) {
            this.types.push(data.types[i].type.name)
        }
    }
}
//
// function queryPokemonAPI (name)  {
//  fetch(`https://fizal.me/pokeapi/api/v2/name/${name}.json`).then((resp) =>{
//  return resp.json()})
//  .then((data) => {
//     let pokemon = new Pokemon(data)
//     console.log(data)
//     trainer1.addPokemonToParty(pokemon)
//     let pokeGrid = document.getElementById('pokedex')
//     let grid = document.createElement('div')
//     grid.id = (`stat-grid`)
//     pokeGrid.appendChild(grid)
//     let nameP = document.createElement('p')
//     nameP.innerText = `${trainer1.party[trainer1.party.length-1].name}`
//     nameP.id = `name`
//     grid.appendChild(nameP)
//     let idP = document.createElement('p')
//     idP.innerText = `#${trainer1.party[trainer1.party.length-1].id}`
//     idP.id = `idNum`
//     grid.appendChild(idP)
//     let hp = document.createElement('p')
//     hp.innerText = `HP: ${trainer1.party[trainer1.party.length-1].stats.hp}`
//     hp.id = `hp`
//     grid.appendChild(hp)
//     let atk = document.createElement('p')
//     atk.innerText = `Attack: ${trainer1.party[trainer1.party.length-1].stats.attack}`
//     atk.id = 'attack'
//     grid.appendChild(atk)
//     let def = document.createElement('p')
//     def.innerText = `Defense: ${trainer1.party[trainer1.party.length-1].stats.defense}`
//     def.id = 'defense'
//     grid.appendChild(def)
//
// })
// }

// queryPokemonAPI("mewto")
let trainer1 = new Trainer('Jomir')
let trainer2 = new Trainer('Claire')
let trainer3 = new Trainer('Haroun')
let trainer4 = new Trainer('Brandon')
