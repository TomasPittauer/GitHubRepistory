import Link from "next/link";

async function getData() {

    const api = 'https://restcountries.com/v3.1/all'
    const res = await fetch(api)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}
export default async function Details({params}) {

    const data = await getData()

    const country = data.find(country => String(country.name.common.replaceAll(' ', '')) === params.id);

    if (!country || !params.id) {
        return <div>Not found</div>;
    }
    return (
        <div>
            <h1>Country Detail</h1>
            <p>Name: {country.name.common}</p>
            <p>Region: {country.region}</p>
            <p>Subregion: {country.subregion}</p>
            <p>Capital: {country.capital}</p>
            <p>Car side: {country.car.side}</p>
            <p>Start of week: {country.startOfWeek}</p>

            <Link href={`/`}>
                Go back
            </Link>
        </div>
    );
};