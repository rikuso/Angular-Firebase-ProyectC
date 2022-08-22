//Usuario
export interface User{
    id ?: number|string,
    name : string,
    lastname : string,
    img : string | ArrayBuffer | null,
    email : string,
    password : string,
    mazo : Mazo
}
//interface del Mazo del usuario
export interface Mazo{
    id ?: number|string,
    name : String,
    active : boolean,
    cardWeapon ?: CardWeapon,
    cardArmon ?: CardArmon|null|any,
    cardPowers ?: CardPowers,
    cardAbility ?:CardAbility, 
    classP ?: ClassPersonaje
}

//interface o BD de la relciond e las cartas poder y habilidad
export interface CardPowers{
    id ?: number|string,
    powers : Powers
}
export interface CardAbility{
    id?  : number|string,
    ability : Ability,
}
export interface Ability{
    id ?: number|string,
    img : string | ArrayBuffer | null,
    name: string,
    damage: number,
    turn: number,
    defens: number,
    description : string,
    styl:string,
    
}

export interface Powers{
    id ?: number|string,
    name :string,
    img : string |ArrayBuffer | null,
    powers :[50,100,150,200] | number,
}

// interface de armadura y carta de armadura

export interface CardArmon{
    id ?: number|string,
    armon : Part
}


export interface Part{
    id ?: number|string,
    name :string ,
    img : string | ArrayBuffer | null,
    part : string,
    defens : number,
    styl :string ,
    description :string
}

//interface de  arma y carta de arma

export interface CardWeapon{
    id ?: number|string,
    arma : Weapon
}

export interface Weapon{
    id ?: number|string,
    img : string | ArrayBuffer | null,
    name : string,
    damange : number,
    styl : string,
    description: string
}
//interface de clase de personaje
export interface ClassPersonaje{
    id ? : number|string,
    img : string | ArrayBuffer | null,
    help : 1500,
    type : Type
}
export interface Type{
    id ?: number|string,
    name : string
}