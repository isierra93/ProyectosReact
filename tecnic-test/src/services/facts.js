import { CAT_FACT } from "../constants.js"

export const getRandomFact = async () => {
    const res = await fetch(CAT_FACT)
    const data = await res.json()
    const { fact } = data
    const word = fact.split(' ')[0]
    return word
}