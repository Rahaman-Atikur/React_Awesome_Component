import NavBar from './Components/NavBar/NavBar'
import PricingOptions from './Components/PricingOptins/PricingOptions'
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

    </>
  )
}

export default App
