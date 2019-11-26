class Trainer {
    constructor(Name) {
      this.name = name
        this.party = []
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
        this.name = data.name;
        this.sprite = data.sprites.front_default;
        this.hp = data.stats[4].base_stat;
        this.attack = data.stats[5].base_stat;
        this.defense = data.stats[3].base_stat;
        this.ability = data.abilities["0"].ability.name;
    }
    display() {
        let grid = document.getElementById("pokedex")
        let div = document.createElement('div')
        grid.appendChild(div)
        div.className = "card"
        // let pokeImage = document.createElement('img');
        // pokeImage.src = `${this.sprite}`;
        // div.appendChild(pokeImage)
        let name = document.createElement('h2')
        name.innerHTML = "Name: " + this.name
        div.appendChild(name)
        let hp = document.createElement('h3')
        hp.innerHTML = "HP: " + this.hp
        div.appendChild(hp)
        let attack = document.createElement('h3')
        attack.innerHTML = "Attack: " + this.attack
        div.appendChild(attack)
        let defense = document.createElement('h3')
        defense.innerHTML = "Defense: " + this.defense
        div.appendChild(defense);
        let ability = document.createElement('h3')
        ability.innerHTML = "Ability: " + this.ability
        div.appendChild(ability)
        console.log(this.ability);
    }
}
catchIncineroar = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/727.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer2.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchBlaziken = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/257.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer2.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchCharizard= () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/6.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer2.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
// catchFlygon = () => {
//     fetch("https://fizal.me/pokeapi/api/v2/id/330.json")
//         .then((resp) => {
//             return resp.json()
//         })
//         .then((data => {
//             console.log(data)
//             pokemon = new Pokemon(data)
//             trainer.addPokemonToParty(pokemon)
//             pokemon.display()
//         }))
// }
catchFlygon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/330.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer3.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchHydreigon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/635.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer3.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchDragonite = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/149.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer3.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchGengar = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/94.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer4.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchGolurk = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/623.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer4.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchDoublade = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/680.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer4.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchSylveon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/700.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer1.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchMawile = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/303.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer1.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchTapu_lele = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/786.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {
            console.log(data)
            pokemon = new Pokemon(data)
            trainer1.addPokemonToParty(pokemon)
            pokemon.display()
        }))
}
catchIncineroar()
catchBlaziken()
catchCharizard()
catchFlygon()
catchHydreigon()
catchDragonite()
catchGengar()
catchGolurk()
catchDoublade()
catchSylveon()
catchMawile()
catchTapu_lele()
let trainer1 = new Trainer("clair")
let trainer2 = new Trainer("jomir")
let trainer3 = new Trainer("brandon")
let trainer4 = new Trainer("haroun")
