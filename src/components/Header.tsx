import '../App.css'

interface Props {
  searchText: string
  setSearchText: (search: string) => void 
}
const Header = ({ searchText, setSearchText }: Props) => {
  return(
    <header>
      <h1>Sheshop</h1>
      <nav className="nav">
        <button>HOME</button>
        <button>PRODUCTS</button>
        <button>CART</button>
        <button>LOG IN</button>
        <input type="text" value={searchText} onChange={event => setSearchText(event.target.value)} />
        <span className="magnify-search">🔍</span>
      </nav>
    </header>
  )
}

export default Header