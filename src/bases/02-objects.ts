export const pokemonIds = [1,2,3,4,5,6];


interface Persona{
    id:number,
    name:string;
    age:number;
    profesion:string;
    //Podemos especificar una excepcion con el simbolo ?, si la persona no declara la propiedad estado, no nos cuenta como error, si no declaramos el ?, nos lo toma como un error
    estado?:boolean;
}


export const agente:Persona = {
    id:1,
    name:'Ivan Lucana',
    age:28,
    profesion:'Developer',
    estado:true
}
export const agente2:Persona = {
    id: 0,
    name: "",
    age: 0,
    profesion: ""
}

//para especificar que cosas deseo pushear a un array, en este caso un objeto de tipo Persona
//antes
//export const personas = [];
//despues
export const personas:Persona[] = [];
personas.push(agente)
personas.push(agente2)
console.log(personas)