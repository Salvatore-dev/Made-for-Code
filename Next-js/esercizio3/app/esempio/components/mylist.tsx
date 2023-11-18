
type City = {
    name: string,
    country: string,
    population: number
}

function MyList({name, country, population}: City) {
    return(
       <><span className=" col-span-4 my-2">La citta di {name}</span> <span className=" col-span-4 my-2">si trova in {country}</span>ed ha {population} abitanti<span className=" col-span-4 w-fit my-2"></span></>
    )
}

export default MyList