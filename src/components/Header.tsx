import { useState } from 'react'
import '../App.css'
import Login from './Login'

interface Props {
  searchText: string
  setSearchText: (search: string) => void 
}
const Header = ({ searchText, setSearchText }: Props) => {
  const [login2Visible, setLogin2Visible] = useState<string>('start')
  const VIEW_LOGIN = 'Login'

  let main = null
  if (login2Visible === VIEW_LOGIN) {
    main = < Login />
  }

  
  return(

    <header>
      <h1 className="web-name">C-fashion</h1>
      <nav className="nav">
        <button>HOME</button>
        <button>PRODUCTS</button>
        <button>CART</button>
        <button onClick={() => setLogin2Visible(VIEW_LOGIN)}>LOGIN</button>
       
        <input type="text" value={searchText} onChange={event => setSearchText(event.target.value)} />
        <span className="magnify-search">🔍</span>
        
      </nav>
    <div>
      {main}
    </div>
    </header>
  )
}

export default Header