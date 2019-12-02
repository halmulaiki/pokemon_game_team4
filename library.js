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
catchIncineroar = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/727.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers2.addPokemonToParty(pokemon)

        }))
}
catchBlaziken = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/257.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers2.addPokemonToParty(pokemon)

        }))
}
catchCharizard= () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/6.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers2.addPokemonToParty(pokemon)

        }))
}
catchFlygon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/330.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers3.addPokemonToParty(pokemon)

        }))
}

catchHydreigon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/635.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers4.addPokemonToParty(pokemon)

        }))
}
catchDragonite = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/149.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers3.addPokemonToParty(pokemon)

        }))
}
catchGengar = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/94.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers3.addPokemonToParty(pokemon)

        }))
}
catchGolurk = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/623.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers4.addPokemonToParty(pokemon)

        }))
}
catchDoublade = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/680.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers4.addPokemonToParty(pokemon)

        }))
}
catchSylveon = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/700.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers1.addPokemonToParty(pokemon)

        }))
}
catchMawile = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/303.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers1.addPokemonToParty(pokemon)

        }))
}
catchTapu_lele = () => {
    fetch("https://fizal.me/pokeapi/api/v2/id/786.json")
        .then((resp) => {
            return resp.json()
        })
        .then((data => {

            pokemon = new Pokemon(data)
            trainers1.addPokemonToParty(pokemon)

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
let trainers2 = new Trainer('Jomir')
let trainers1 = new Trainer('Claire')
let trainers4 = new Trainer('Haroun')
let trainers3 = new Trainer('Brandon')
