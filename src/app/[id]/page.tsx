import CountryPage from "@/components/country-page";

type CountryProps = { params: Promise<{ id: string }> }

export default async function Country({ params }: CountryProps) {
  const { id } = await params;
  return <CountryPage id={id} />
}
