import '../styles/Footer.css'

export function Footer ({ filters }) {
  return (
    <footer className='footer'>
      <h4>Prueba técnica de React ⚛️ - <span>@isierra93</span></h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      <span>{JSON.stringify(filters)}</span>
    </footer>
  )
}