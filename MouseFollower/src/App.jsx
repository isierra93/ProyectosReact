import { useEffect , useState } from 'react';
import { Pointer } from './components/Pointer.jsx';

function App() {
  const [enable, setEnabled] = useState(false)
  const [position, setPosition] = useState({x:0, y:0})

  useEffect(() => {

    const handleMove = (event) =>{
      const { clientX, clientY} = event
      setPosition({ x: clientX, y: clientY })
    }

    if(enable){
      window.addEventListener('pointermove', handleMove)
    }

    return () => {window.removeEventListener('pointermove', handleMove)}
  }, [enable])

  return (
    <main>
      <Pointer X={position.x} Y={position.y} />
      <button 
        onClick={() => setEnabled(!enable)}>
          {enable ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}

export default App
