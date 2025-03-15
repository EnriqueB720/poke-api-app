import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PokemonTypePage() {

  const router = useRouter();
  const { typeName } = router.query;


  return (
    <Box textAlign={'center'} w={'100%'} h={'100%'}>
      <Text textStyle="5xl" mb={5} fontWeight="bold">Pokemon type {typeName}</Text>
      <Grid templateColumns="repeat(3, 1fr)" gap="6">
        <GridItem bg={'green'}>
    test
        </GridItem>
        <GridItem bg={'green'}>
    test
        </GridItem>
        <GridItem bg={'green'}>
    test
        </GridItem>
        <GridItem bg={'green'}>
    test
        </GridItem>
      </Grid>
    </Box>
  );
}