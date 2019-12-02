let pokeStats1 = document.getElementById('stats1')
let pokeStats2 = document.getElementById('stats2')
let pokeStats3 = document.getElementById('stats3')
let pokeName1 = document.getElementById('name1')
let pokeHP1 = document.getElementById('hp1')
let pokeAtk1 = document.getElementById('atk1')
let pokeDef1 = document.getElementById('def1')
let pokeAbility1 = document.getElementById('ability1')
let pokeName2 = document.getElementById('name2')
let pokeHP2 = document.getElementById('hp2')
let pokeAtk2 = document.getElementById('atk2')
let pokeDef2 = document.getElementById('def2')
let pokeAbility2 = document.getElementById('ability2')
let pokeName3 = document.getElementById('name3')
let pokeHP3 = document.getElementById('hp3')
let pokeAtk3 = document.getElementById('atk3')
let pokeDef3 = document.getElementById('def3')
let pokeAbility3 = document.getElementById('ability3')

let pokemonAPI1 = async (id) => {

  let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
  let data = await req.json()

  console.log(data)

  pokemon1 = () => {

        pokeName1.innerText = ''
        pokeHP1.innerText = 'HP: '
        pokeAtk1.innerText = 'Attack: '
        pokeDef1.innerText = 'Defense: '
        pokeAbility1.innerText = 'Abilities: '

        pokeName1.appendChild(document.createTextNode(`${data.name}`))
        
        pokeHP1.appendChild(document.createTextNode(`${data.stats[5].base_stat}`))
        
        pokeAtk1.appendChild(document.createTextNode(`${data.stats[4].base_stat}`))
        
        pokeDef1.appendChild(document.createTextNode(`${data.stats[3].base_stat}`))

        pokeAbility1.appendChild(document.createTextNode(''))
        
        for (let i = 0; i < data.abilities.length; i++) {
            pokeAbility1.appendChild(document.createTextNode([`${data.abilities[i].ability.name}, `]))
        }

        pokeStats1.appendChild(pokeName1)
        pokeStats1.appendChild(pokeHP1)
        pokeStats1.appendChild(pokeAtk1)
        pokeStats1.appendChild(pokeDef1)
        pokeStats1.appendChild(pokeAbility1)
      }
  pokemon1()
}

let pokemonAPI2 = async (id) => {

  let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
  let data = await req.json()

  console.log(data)

  pokemon2 = () => {

    pokeName2.innerText = ''
    pokeHP2.innerText = 'HP: '
    pokeAtk2.innerText = 'Attack: '
    pokeDef2.innerText = 'Defense: '
    pokeAbility2.innerText = 'Abilities: '

    pokeName2.appendChild(document.createTextNode(`${data.name}`))
    
    pokeHP2.appendChild(document.createTextNode(`${data.stats[5].base_stat}`))
    
    pokeAtk2.appendChild(document.createTextNode(`${data.stats[4].base_stat}`))
    
    pokeDef2.appendChild(document.createTextNode(`${data.stats[3].base_stat}`))

    pokeAbility2.appendChild(document.createTextNode(''))
    
    for (let i = 0; i < data.abilities.length; i++) {
        pokeAbility2.appendChild(document.createTextNode([`${data.abilities[i].ability.name}, `]))
    }

    pokeStats2.appendChild(pokeName2)
    pokeStats2.appendChild(pokeHP2)
    pokeStats2.appendChild(pokeAtk2)
    pokeStats2.appendChild(pokeDef2)
    pokeStats2.appendChild(pokeAbility2)
}
  pokemon2()
}

let pokemonAPI3 = async (id) => {

  let req = await fetch(`https://fizal.me/pokeapi/api/v2/id/${id}.json`)
  let data = await req.json()

  console.log(data)

  pokemon3 = () => {
    pokeName3.innerText = ''
    pokeHP3.innerText = 'HP: '
    pokeAtk3.innerText = 'Attack: '
    pokeDef3.innerText = 'Defense: '
    pokeAbility3.innerText = 'Abilities: '

    pokeName3.appendChild(document.createTextNode(`${data.name}`))
    
    pokeHP3.appendChild(document.createTextNode(`${data.stats[5].base_stat}`))
    
    pokeAtk3.appendChild(document.createTextNode(`${data.stats[4].base_stat}`))
    
    pokeDef3.appendChild(document.createTextNode(`${data.stats[3].base_stat}`))

    pokeAbility3.appendChild(document.createTextNode(''))
    
    for (let i = 0; i < data.abilities.length; i++) {
        pokeAbility3.appendChild(document.createTextNode([`${data.abilities[i].ability.name}, `]))
    }

    pokeStats3.appendChild(pokeName3)
    pokeStats3.appendChild(pokeHP3)
    pokeStats3.appendChild(pokeAtk3)
    pokeStats3.appendChild(pokeDef3)
    pokeStats3.appendChild(pokeAbility3)
}
pokemon3()
}
