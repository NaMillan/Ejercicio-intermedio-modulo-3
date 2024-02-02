
function Country ({dataList}) {
    return (
        <article>
          <img src={dataList.flag} alt="flag" />
          <h4>{dataList.name.official}</h4>
          <h4>{dataList.capital}</h4>
          <h4>{dataList.continents}</h4>
        </article>
    )
}

export default Country