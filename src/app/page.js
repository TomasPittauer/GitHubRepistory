import styles from "./css.css";
import Link from 'next/link';

async function getData() {

    const api = 'https://restcountries.com/v3.1/all'
    const res = await fetch(api)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return await res.json()
}
//l
async function MakeCard (country){

    const data = await getData()

    return(
        <div className={"karta"}>
            <div className={"jmeno"}>{country.name.common}</div>
            <div className={"language"}>{country.region}</div>
            <img className={"flag"} src={country.flags.png}/>
            <Link href={`/${country.name.common.replaceAll(' ', '')}`}>
                Detail
            </Link>
        </div>
    )
}
export default async function Home() {

    const data = await getData()
    console.log(data)


 return (
     <div className={"pole"}>
         {data.slice(0,20).map(MakeCard)}
     </div>
 )

}