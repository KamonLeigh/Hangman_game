

const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200){
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error ('Unable to get puzzled')
    }
}




const countryRequest = async (code) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if(response.status === 200){
        const data = await response.json()
        const country = data.find(country => country.alpha2Code === code)
        return country.name
    } else {
        throw new Error('Unable to get puzzled')
    }
}


const getLocation = async () => {   
    const response = await fetch(`https://ipinfo.io/json?token=524cb0c038fb26`)

    if(response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error('error has occured')
    }

}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await countryRequest(location.country)
    return country
}

