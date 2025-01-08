import RestaurantNavbar from './components/RestaurantNavbar'
import HomeContent from './components/HomeContent'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {


  return ( //<> è un parent element necessario
    <>
      <RestaurantNavbar/>
      <HomeContent/>
    </>
  )
}

export default App
