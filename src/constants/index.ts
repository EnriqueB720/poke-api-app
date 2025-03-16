export const BASE_URL: string = "https://pokeapi.co/api/v2";

export const POKEMON_TYPE: Record<string, { description: string; color: string }> = {
  normal: { description: "Balanced and versatile, Normal-type Pokémon often have high base stats but lack type advantages. They are only weak to Fighting-type moves and immune to Ghost-type attacks.", color: "#A8A878" },
  fire: { description: "Fire-type Pokémon are powerful and aggressive, often dealing high damage with moves like Flamethrower. They are strong against Grass, Bug, Ice, and Steel types but weak to Water, Rock, and Ground moves.", color: "#F08030" },
  water: { description: "Water-types are versatile and abundant, often having a balance between offense and defense. They are strong against Fire, Ground, and Rock but weak to Electric and Grass attacks.", color: "#6890F0" },
  grass: { description: "These Pokémon thrive in nature, using plant-based attacks. They are effective against Water, Ground, and Rock but weak to Fire, Ice, Flying, Poison, and Bug moves.", color: "#78C850" },
  electric: { description: "Electric-types are fast and offensive, often specializing in paralysis-inducing moves. They are strong against Water and Flying but weak to Ground-type attacks.", color: "#F8D030" },
  ice: { description: "Ice-type Pokémon excel in freezing and slowing down opponents. They are strong against Grass, Flying, Ground, and Dragon but weak to Fire, Fighting, Rock, and Steel moves.", color: "#98D8D8" },
  fighting: { description: "Physical powerhouses, Fighting-types specialize in strong, close-range attacks. They are effective against Normal, Rock, Steel, Ice, and Dark but weak to Flying, Psychic, and Fairy moves.", color: "#C03028" },
  poison: { description: "Toxic and strategic, Poison-types specialize in status effects like poison. They are strong against Grass and Fairy but weak to Ground and Psychic attacks.", color: "#A040A0" },
  ground: { description: "Earth-based Pokémon that are immune to Electric attacks. They are effective against Fire, Electric, Poison, Rock, and Steel but weak to Water, Grass, and Ice moves.", color: "#E0C068" },
  flying: { description: "Fast and evasive, Flying-types excel in aerial attacks. They are strong against Grass, Fighting, and Bug but weak to Electric, Ice, and Rock moves.", color: "#A890F0" },
  psychic: { description: "Mind-powered Pokémon that focus on mental abilities. They are effective against Fighting and Poison but weak to Bug, Ghost, and Dark moves.", color: "#F85888" },
  bug: { description: "Often underestimated, Bug-types can be quick and overwhelming. They are strong against Grass, Psychic, and Dark but weak to Fire, Flying, and Rock attacks.", color: "#A8B820" },
  rock: { description: "Durable and tanky, Rock-types have high defense but often low speed. They are strong against Fire, Flying, Bug, and Ice but weak to Water, Grass, Fighting, Ground, and Steel moves.", color: "#B8A038" },
  ghost: { description: "Mysterious and immune to Normal- and Fighting-type attacks, Ghost-types are strong against Psychic and Ghost but weak to Ghost and Dark moves.", color: "#705898" },
  dragon: { description: "Powerful and legendary, Dragon-types boast high stats. They are effective against other Dragon-types but weak to Ice, Dragon, and Fairy moves.", color: "#7038F8" },
  dark: { description: "Cunning and deceptive, Dark-types excel at disrupting opponents. They are strong against Psychic and Ghost but weak to Fighting, Bug, and Fairy moves.", color: "#705848" },
  steel: { description: "Highly resistant and defensive, Steel-types have the most resistances of any type. They are strong against Ice, Rock, and Fairy but weak to Fire, Fighting, and Ground moves.", color: "#B8B8D0" },
  fairy: { description: "Mystical and charming, Fairy-types counter powerful opponents. They are strong against Fighting, Dragon, and Dark but weak to Poison and Steel moves.", color: "#EE99AC" },
  shadow: { description: "A rare and corrupted type, Shadow Pokémon are highly aggressive and resistant to normal purification methods. They deal extra damage but take more damage from all attacks.", color: "#504860" },
  stellar: { description: "A cosmic force, Stellar-type Pokémon possess celestial energy, making them resilient and unpredictable. They have unique interactions with other types, often defying standard matchups.", color: "#D0C8E8" },
  unknown: { description: "A mysterious and undefined type, Pokémon of this category do not fit into traditional typings. Their strengths and weaknesses are enigmatic and vary by situation.", color: "#A8A8A8" }
};