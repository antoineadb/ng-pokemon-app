export class Pokemon {
    id:number;
    name:string;
    hp:number;
<<<<<<< HEAD
    cp:number;
    picture:string;
    types:string[];
    created:Date;

    constructor(
        name: string = 'Entrer un nom...',
        hp: number = 100,
        cp: number = 10,
        picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
        types: string[] = ['normal'],
        created: Date = new Date()
    ){
    
        this.name=name;
        this.hp=hp;
        this.cp=cp;
        this.picture = picture;
        this.types=types;
        this.created= created;
    }
=======
    cp:number;   
    picture: string;
    types:Array<string>;
    created: Date;
>>>>>>> 82cc5be1871cd019770499db0496363d5c19c1fc
}