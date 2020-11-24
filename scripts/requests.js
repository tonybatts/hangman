const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error("Was unable to fetch data")
    }
}

const getCurrentCountry = async () => {
    const currentLocation = await getLocation()
    return getCountry(currentLocation.country)
}

const getCountry = async (countryCode) => {
    const response = await fetch("http://restcountries.eu/rest/v2/all")
    
    if (response.status === 200) {
        const data = await response.json()
        return data.find(country => country.alpha2Code === countryCode)
    } else {
        throw new Error(`Could not fetch data - Status = ${response.status}`)
    }
}

const getLocation = async () => {
    const response = await fetch("https://ipinfo.io/json?80d45f656b2149")
    
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error(`Unable not fetch data: HTTP status = ${response.status}`)
    }
}


