export class PokemonList{
  public pokemon!: Pokemon;
  public slot!: number;
}

export class Pokemon{
  public name!: string;
  public url!: string;
}

export class PokemonDetail{
  public name!: string;
  public sprite!: string;
  public abilities!: [];
}