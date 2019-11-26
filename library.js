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