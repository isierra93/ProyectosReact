import { useState , useEffect } from 'react'
import { CAT_FACT, CAT_IMAGE, URL_PREFIX } from './constants.js'
import './App.css'

/* 
- Facts Random: https://catfact.ninja/fact

- Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API
Recupera una imagen de la segunda API
Muestra la imagen con la primera palabra del hecho recuperado
*/

function App() {
  const [catFact, setCatFact] = useState()
  const [imgRandom, setImgRandom] = useState()
  
  useEffect(() =>{
    fetch(CAT_FACT)
    .then(res => res.json())
    .then(data => {
      const { fact } = data
      const word = fact.split(' ')[0]
      setCatFact(word)
    })
  },[])

  useEffect(() =>{
    if(!catFact) return

    fetch(CAT_IMAGE)
    .then(res => res.json())
    .then(data => {
      const { url } = data
      setImgRandom(url)
    })
  }, [catFact])

  return (
    <main>
      <h1>Hello world</h1>
      <section>
        {catFact && <p>{catFact}</p>}
        {imgRandom && <img src={`${URL_PREFIX}${imgRandom}`} alt="Image random for random fact" />}
      </section>
    </main>
  )
}

export default App
