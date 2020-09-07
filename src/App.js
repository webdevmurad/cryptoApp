import React from 'react';
import {useDispatch} from 'react-redux'


import {fetchCrypto} from './redux/actions/crypto'

import {Carts} from './components'
import {Header} from './components'
import {SortBlock} from './components'

import Container from '@material-ui/core/Container'


import './styles/app.sass'

const sortItems = [
  {name: 'Все', type: 'all'},
  {name: 'Цене', type: 'price'},
  {name: 'Названию', type: 'alphabet'}
]

function App() {
  const dispatch = useDispatch()
  const filters = React.useSelector(({filters}) => filters)
  console.log(filters)

  React.useEffect(() => {
    dispatch(fetchCrypto())
  }, [dispatch])

  return (
    <div className="App">
      <Container>
        <Header/>
        <SortBlock items={sortItems} onClickSortType/>
        <Carts/>
      </Container>
    </div>
  );
}




export default App;
