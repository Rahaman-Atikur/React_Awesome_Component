import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptins/PricingOptions'
import Recharts from './Components/Recharts/Recharts'
const pricingOptionsPromise = fetch('pricing.json').then((res) => res.json())
function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
      <PricingOptions pricingOptionsPromise={pricingOptionsPromise}></PricingOptions>
      </main>
      <Recharts></Recharts>

    </>
  )
}

export default App
