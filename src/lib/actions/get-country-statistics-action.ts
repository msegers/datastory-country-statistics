"use server";

import { gql } from "graphql-request";
import { client } from "@/lib/clients/datastory-client";

type Statistic = { value: number, year: number };
export type CountryStatistics = {
  lifeExpectancy: Statistic[],
  population: Statistic[],
  netMigrationRate: Statistic[]
}

export async function getCountryStatisticsAction(id: string) {

  const query = gql`
    query CubeData($country: String) {
      lifeExpectancy: cube_cube_M6Lh5is0FtqUhZ(
        where: {country: {_eq: $country}, measure: {_eq: "life_expectancy"}}
      ) {
        value
        year
      }
      population: cube_cube_M6Lh5is0FtqUhZ(
        where: {country: {_eq: $country}, measure: {_eq: "population"}}
      ) {
        value
        year
      }
      netMigrationRate: cube_cube_M6Lh5is0FtqUhZ(
        where: {country: {_eq: $country}, measure: {_eq: "net_migration_rate"}}
      ) {
        value
        year
      }
    }
`;

  return await client.request<CountryStatistics>(query, { country: id });
}
