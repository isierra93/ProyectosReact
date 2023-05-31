import { useCatImage } from "./hooks/useCatImage.js"
import { useCatFact } from './hooks/useCatFact.js'
import './App.css'

/* 
- Facts Random: https://catfact.ninja/fact

- Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API
Recupera una imagen de la segunda API
Muestra la imagen con la primera palabra del hecho recuperado
*/

function App() {
  const { catFact, refreshFact } = useCatFact()
  const { imgRandom } = useCatImage({catFact})
  const handleClick = async () =>{
    refreshFact()
  }
  
  return (
    <main>
      <h1>Hello world</h1>
      <button onClick={handleClick}>Get new Fact</button>
      <section>
        {catFact && <p>{catFact}</p>}
        {imgRandom && <img src={imgRandom} alt="Image random for random fact" />}
      </section>
    </main>
  )
}

export default App
