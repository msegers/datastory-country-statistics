"use server";

import { cache } from 'react'
import { client } from "@/lib/clients/datastory-client";
import { parse } from 'graphql';
import { gql } from 'graphql-request';


type Country = { id: string, iso2: string, name: string };

type IsoValueType = { value: string }
type CountryReturnType = { id: string, name: string, iso2: IsoValueType[] }
type CountriesReturnType = { countries: CountryReturnType[] }

export async function getCountriesAction(): Promise<Country[]> {

  const query = gql`
  query Countries {
    countries: item(where: {class_id: {_eq: "Country"}}) {
      id
      name: name(path: "en")
      iso2: statements(where: {property_id: {_eq: "iso2"}}) {
        value: postgres_varchar
      }
    }
  }`;

  const countryData = await client.request<CountriesReturnType>(query);

  return countryData?.countries.map(country => ({ ...country, iso2: country.iso2[0].value }));
}
