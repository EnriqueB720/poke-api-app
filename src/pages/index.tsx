import { PokemonType } from "@models";
import { Avatar, Box, Button, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Card } from "@chakra-ui/react"
import { useRouter } from "next/router";
import { BASE_URL, POKEMON_TYPE_DESCRIPTION } from "@constants";


export default function Home(prop: any) {

  const [pokemonTypes, setPokemonTypes] = useState<PokemonType[]>();
  const router = useRouter();

  const getPokemonTypes = useCallback(async () => {

    axios.get(BASE_URL + '/type?limit=21').then((response) => {
      setPokemonTypes(response.data.results as PokemonType[]);
    }).catch(err => {
      console.log(err.message);
    });


  }, [setPokemonTypes])

  useEffect(() => {
    const getAllPokemonTypes = async () => {
      await getPokemonTypes();
    }

    getAllPokemonTypes();

  }, []);

  const getPokemonTypeDescription = (type: string): string => {
    return POKEMON_TYPE_DESCRIPTION[type].description || "Unknown Pokémon type.";
  }

  const getPokemonTypeColor = (type: string): string => {
    return POKEMON_TYPE_DESCRIPTION[type].color || "#000000";
  }

  const seePokemons = (pokemonType: String) => {
    router.push(`./${pokemonType}`);
  }

  return (
    <Box w={'100%'} h={'100%'} padding={10} textAlign={'center'} minW={'375px'}>
      <Text textStyle="5xl" mb={5} fontWeight="bold">Pokemon Type</Text>
      <Stack gap="12" direction="row" wrap="wrap" minW={'375px'}>
        {
          pokemonTypes?.map((type, index) => (
            <Card.Root boxShadow="2xl" bg={getPokemonTypeColor(type.name!)} width="320px" variant={"outline"} key={index}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src={'./images/pokeBallIcon.png'} />
                  <Avatar.Fallback name={type.name} />
                </Avatar.Root>
                <Card.Title mb="2">{type.name}</Card.Title>
                <Card.Description color={'black'}>
                  {getPokemonTypeDescription(type.name!)}
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button variant="solid" onClick={() => seePokemons(type.name!)!}>View</Button>
              </Card.Footer>
            </Card.Root>
          ))
        }
      </Stack>
    </Box>
  )
}