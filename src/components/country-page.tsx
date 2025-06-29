import { getCountryStatisticsAction } from "@/lib/actions/get-country-statistics-action";
import ChartComponent from "./chart-component";

type CountryPageProps = { id: string };

export default async function CountryPage({ id }: CountryPageProps) {
  const countryData = await getCountryStatisticsAction(id);

  return <ChartComponent countryData={countryData} />
}
