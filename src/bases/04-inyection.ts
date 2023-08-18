
import { Move, PokeResponse } from '../Interfaces/pokepi-res.interface';
import { HttpAdapter, PokeApiAdapter, pokeApiFetchAdapter } from '../api/pokeApi.adapter';


export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        //Imprementamos el Type HTTPADAPTER en nuestras 2 clases como implements, matcheamos asi no tenemos que ir cambiando el type cuando querramos hacer una peticion axios o fetch
        private readonly http:HttpAdapter

    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        /* const { data } = await axios.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log( data.moves ); */
        const data = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon/4')
        console.log(data.moves)
        return data.moves;
    }

}
// Gracias al implements de HTTPADAPTER podemos usar ambos sin ningun problema
const pokeApiAxios = new PokeApiAdapter();
const pokeApiFetch = new pokeApiFetchAdapter()

export const charmander = new Pokemon( 4, 'Charmander',pokeApiAxios );

charmander.getMoves();