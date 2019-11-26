queryPokemonAPI = () => {
  for (let i = 1; i <= 3; i++) {
    var x = parseInt(prompt("Enter a pokemon id"))
    fetch(`https://fizal.me/pokeapi/api/v2/id/${x}.json`)
      .then((resp) => {
        return resp.json()
      })
      .then((data => {
        console.log(data)
        pokemon = new Pokemon(data)
        jomir.addPokemonToParty(pokemon)
        pokemon.display()
      }))
  }
}

class Trainer {
  constructor() {
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
    if (this.party.length < 3) {
      this.party.push(pokemon)
    }
  }
}
