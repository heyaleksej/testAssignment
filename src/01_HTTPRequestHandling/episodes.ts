// Write down code snippet using following requirements:
// - Use only vanilla TypeScript, without additional libraries.
// - Use REST Rick and Morty API for this assignment.
// - Request all episodes using API.
// - Replace URLs in “characters” array with character JSON objects taken from API.
// - Log final array into console.


const BaseURL = 'https://rickandmortyapi.com/api/'

const getAllEpisodes = async (): Promise<EpisodeType[]> => {
    try {
        const episodeIds = async () => {
            const n = await fetch(`${BaseURL}episode`).then(data=>data.json().then(data => data.info.count))
            let EpisodeUrls = []
            for (let i = 1; i <= n; i++) {
                EpisodeUrls.push(i)
            }
            return EpisodeUrls
        }
        const ids = await episodeIds()
        return await fetchData<EpisodeType[]>(`${BaseURL}episode/${ids}`)//Get all multiple episodes

    } catch (error) {
        throw Error('There has been a problem with your fetch operation')
    }
}

const fetchData = async <T>(url: string): Promise<T> => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        throw Error('There has been a problem with your fetch operation')
    }
}

export const replaceCharactersLinks = async () => {

    const episodes = await getAllEpisodes()
    const charactersCount = await fetch(`${BaseURL}character`).then(data=>data.json().then(data => data.info.count))
    const createArrayOfIds = async () => {
        let CharactersIds = []
        for (let i = 0; i <= charactersCount; i++) {
            CharactersIds.push(i)
        }
        return CharactersIds
    }
    const arrayOfIds = await createArrayOfIds()
    const characters = await fetchData<CharacterType[]>(`${BaseURL}character/${arrayOfIds}`)  //Get all multiple characters
    const getId = (url: string) => {
        const matched = url.match(/\d+/g)
        return  matched ? matched[0] : ''

    }

    const finalArray = episodes.map((e) => {
        const openedCharacters = e.characters.map(url => characters[+getId(url)-1])
        return { ...e, characters: openedCharacters}
    })
    console.log('final array', finalArray)
}

//types
type EpisodeType = {
    id: number
    name: string
    air_date: Date
    episode: string
    characters: string[]
    url: string
    created: string
}
type CharacterType = {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    origin: { name: string, url: string }
    location: { name: string, url: string }
    image: string
    episode: string[]
    url: string
    created: string
}




