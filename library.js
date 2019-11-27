let pokeGrid1 = document.getElementById('statbox2')
   let grid1 = document.createElement('div')
   grid1.id = (`stat-grid1`)
   pokeGrid1.appendChild(grid1)
   let nameP1 = document.createElement('p')
   nameP1.innerText = `${trainer1.party[trainer1.party.length-1].name}`
   nameP1.id = `name`
   grid1.appendChild(nameP1)
   let idP1 = document.createElement('p')
   idP1.innerText = `#${trainer1.party[trainer1.party.length-1].id}`
   idP1.id = `idNum`
   grid1.appendChild(idP1)
   let hp1 = document.createElement('p')
   hp1.innerText = `HP: ${trainer1.party[trainer1.party.length-1].stats.hp}`
   hp1.id = `hp`
   grid1.appendChild(hp1)
   let atk1 = document.createElement('p')
   atk1.innerText = `Attack: ${trainer1.party[trainer1.party.length-1].stats.attack}`
   atk1.id = 'attack'
   grid1.appendChild(atk1)
   let def1 = document.createElement('p')
   def1.innerText = `Defense: ${trainer1.party[trainer1.party.length-1].stats.defense}`
   def1.id = 'defense'
   grid1.appendChild(def1)

   let pokeGrid2 = document.getElementById('statbox3')
   let grid2 = document.createElement('div')
   grid2.id = (`stat-grid2`)
   pokeGrid2.appendChild(grid2)
   let nameP2 = document.createElement('p')
   nameP2.innerText = `${trainer1.party[trainer1.party.length-1].name}`
   nameP2.id = `name`
   grid2.appendChild(nameP2)
   let idP2 = document.createElement('p')
   idP2.innerText = `#${trainer1.party[trainer1.party.length-1].id}`
   idP2.id = `idNum`
   grid2.appendChild(idP2)
   let hp2 = document.createElement('p')
   hp2.innerText = `HP: ${trainer1.party[trainer1.party.length-1].stats.hp}`
   hp2.id = `hp`
   grid2.appendChild(hp2)
   let atk2 = document.createElement('p')
   atk2.innerText = `Attack: ${trainer1.party[trainer1.party.length-1].stats.attack}`
   atk2.id = 'attack'
   grid2.appendChild(atk2)
   let def2 = document.createElement('p')
   def2.innerText = `Defense: ${trainer1.party[trainer1.party.length-1].stats.defense}`
   def2.id = 'defense'
   grid2.appendChild(def2)
}
let trainer1 = new Trainer('Jomir')
let trainer2 = new Trainer('Claire')
let trainer3 = new Trainer('Haroun')
let trainer4 = new Trainer('Brandon')
