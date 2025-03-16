import { BASE_URL, POKEMON_TYPE_DESCRIPTION } from "@constants";
import { Image, Box, Button, Card, Grid, GridItem, Spinner, Text, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonDetail, PokemonList } from "@/models";

export default function PokemonTypePage() {

  const [pokemonData, setPokemonData] = useState<PokemonDetail[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false)
  const [pokemon, setPokemon] = useState<PokemonDetail>();
  const router = useRouter();
  const { typeName } = router.query;

  const itemsPerPage = 20;
  const totalPages = Math.ceil(pokemonData.length / itemsPerPage);

  const paginatedData = pokemonData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );




  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(BASE_URL + '/type/' + typeName);

        const detailedPokemon: PokemonDetail[] = await Promise.all(
          (response.data.pokemon as PokemonList[]).map(async ({ pokemon }) => {
            const details = await axios.get(pokemon.url);
            return {
              name: details.data.name,
              sprite: details.data.sprites.front_default,
              abilities: details.data.abilities
            };
          })
        );

        setPokemonData(detailedPokemon);
      } catch (err) {
        setError("Failed to fetch Pokémon data.");
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();

  }, [typeName]);


  const showModal = (pokemon: PokemonDetail): void => {
    setOpenModal(true);
    console.log(pokemon);
    setPokemon(pokemon);
  }

  return (
    <>
      {error && <Text color="red.500">{error}</Text>}
      <Box textAlign={'center'} w={'100%'} h={'100%'} minW={"370px"} padding={10}>
        {loading && <Spinner size="xl" />}
        <Text textStyle="5xl" mb={5} fontWeight="bold">Pokemon type <u>{typeName}</u></Text>
        <Grid ml={12} templateColumns="repeat(auto-fit, minmax(370px, 1fr))" gap="6" >
          {!loading && !error &&
            paginatedData!.map((pokemon, index) => (
              <GridItem key={index}>
                <Card.Root bg={POKEMON_TYPE_DESCRIPTION[typeName! as string].color} boxShadow="2xl" border={'2px solid black'} width="320px" variant={"outline"} key={index}>
                  <Image
                    src={pokemon.sprite}
                    alt={pokemon.name}
                  />
                  <Card.Body gap="2">
                    <Card.Title mb="2" textAlign={'center'} textStyle={"2xl"}>{pokemon.name}</Card.Title>
                  </Card.Body>
                  <Card.Footer>
                    <Button width={'100%'} variant="subtle" onClick={() => showModal(pokemon)!}>Pokemon Info</Button>
                  </Card.Footer>
                </Card.Root>
              </GridItem>
            ))
          }
        </Grid>
      </Box>
      <Box mt={4} mb={5} display={'flex'} justifyContent={'space-evenly'}>
        <Button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          previous
        </Button>
        <Text>Page {currentPage} of {totalPages}</Text>
        <Button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </Button>
      </Box>

      {/* Modal */}
      <Dialog.Root lazyMount open={openModal} onOpenChange={(e) => setOpenModal(e.open)}>
        <Portal>
          <Dialog.Backdrop backdropBlur={"none"} minW={"1000px"} />
          <Dialog.Positioner minW={"400px"} >
            <Dialog.Content>
              <Dialog.Header justifyContent={'center'}>
                <Dialog.Title fontSize={"lg"} fontWeight="bold">Pokemon Name: {pokemon?.name}</Dialog.Title>
              </Dialog.Header>
              <Dialog.Body>
                <Box display={'flex'} justifyContent={'center'}>
                  <Image
                    w={'auto'}
                    h={'150px'}
                    src={pokemon?.sprite}
                    alt={pokemon?.name} />
                </Box>
                <Text fontSize={"2xl"} fontWeight="bold" mb={3}>Abilities:</Text>
                <Box ml={7} as="ul" listStyleType="circle" fontSize={'lg'}>
                  {
                    pokemon?.abilities.map(({ability}: any, index) => (
                      <li key={index}>{ability.name!}</li>
                    ))
                  }
                </Box>
              </Dialog.Body>
              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

    </>
  );
}