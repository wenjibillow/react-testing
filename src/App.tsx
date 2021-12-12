import { useState } from 'react'
import './App.css'

import Header from './components/Header'
import ProductGrid from './components/ProductGrid';


function App() {
  const [searchString, setSearchString] = useState<string>('')
  return (
    <div id="app">
      <header>
        <Header searchText={searchString} setSearchText={setSearchString} />
      </header>
      <main>
        <ProductGrid searchString={searchString}/>

      </main>
      <footer>
        copyright &#169;
      </footer>
    </div>
  );
}

export default App;
