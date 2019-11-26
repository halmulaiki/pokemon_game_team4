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
        if (this.party.length < 12) {
            this.party.push(pokemon)
        }
    }
}