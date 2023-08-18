import axios from "axios"
import { Move, PokeResponse } from "../Interfaces/pokepi-res.interface"

export class Pokemon {
    /* public id:number;
    public name:string;

    constructor(id:number,name:string){
        this.id = id,
        this.name = name;
        console.log('constructor llamado')

    } */
    //forma mas resumida

    get imageUrl():string{
        return `https://pokemon.com/${this.id}.jpg` 
    }
    constructor(
        // Si le colocamos readOnly podemos asignarle un valor pero luego no volver a redefinirlo
        public readonly id:number,
        public name:string,
        
        ){}
    public saludo(){
        console.log(`Buenos dias ${this.name}`)
    }
    public use_private(){
        this.anuncio()
    }

    private anuncio(){
        console.log(`ANUNCIOOOOOO DE LINK ---- ${this.imageUrl}`)
    }
    async mostrar_pokemon(): Promise<void>{
        const moves = await this.getMoves();
        console.log(moves)
    }
    async getMoves():Promise<Move[]>{
        //tipar respuesta axios de pokemones, podemos dejarlo en Any pero para eso esta typescript
        const {data} = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon/4')
        return data.moves;
    }



}


export const charmander = new Pokemon(2,'charmander')
charmander.mostrar_pokemon()

