class Trainer {
  constructor(name) {
  this.name = name
  this.listPokemon = []


 }
 all(){
   return this.listPokemon
 }
 get(name) {
   for (let i = 0; i < this.all.length; i++) {
     if (name === this.all[i].name) {
       return this.all[i]
 }

}
