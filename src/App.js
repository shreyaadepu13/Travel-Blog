import Header from '../src/components/Header.js'
import Cards from '../src/components/Cards.js'
import { data } from './data.js'
import Footer from '../src/components/Footer.js'
import './App.css'
 
function App() {
    const mappedData = data.map((item) => {
        return (
            <Cards key={item.id} item={item} />
        )
    })
    return (
        <div className="App">
            <Header />
            {mappedData}
            <Footer />
        </div>
    );
}
 
export default App;