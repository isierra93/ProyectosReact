import { CAT_IMAGE, URL_PREFIX } from "../constants.js"
import { useState, useEffect } from "react"

export function useCatImage({catFact}){
    const [imgRandom, setImgRandom] = useState()
  
    useEffect(() =>{
      if(!catFact) return
  
      fetch(CAT_IMAGE)
        .then(res => res.json())
          .then(data => {
            const { url } = data
            setImgRandom(url)
      })
    }, [catFact])
  
    return { imgRandom:`${URL_PREFIX}${imgRandom}` }
  }
