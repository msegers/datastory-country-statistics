import { getCountriesAction } from "@/lib/actions/get-countries-action";
import { Box, Grid, Link, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export default async function HomePage() {
  const countries = await getCountriesAction();

  return (
    <Grid
      templateColumns="repeat(8, 1fr)"
      gap={4}
    >
      {countries.map(country => (<Link as={NextLink} href={`/${country.id}`} key={country.id}>{country.name}</Link>))}
    </Grid>
  );
}

