import Country from "./Country"

function ListCountries ({data}) {

    const mapData = () =>{
    return data.map((countries,i) => <li key={i}><Country dataList={countries} /></li>)
}

    return (
       <ul>
          {mapData()}
       </ul>
    )
}

export default ListCountries