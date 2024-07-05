
// import './App.css'
import Nav from "./components/Nav";
import './index.css';
import Hero from "./sections/Hero";
import { PopularProducts,SuperQuality,Footer} from "./sections";
import AnimatedCursor from "react-animated-cursor";

function App() {

  return (
    <main className="relative">
      <AnimatedCursor
        innerSize={12}
        outerSize={25}
        outerAlpha={0.4}
        innerScale={1}
        outerScale={2}
        color="50, 198, 244"
      />
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding mt-24">
        <PopularProducts />
      </section>
      <br/>
      <br/>
      <section className="padding">
      <SuperQuality/>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;
