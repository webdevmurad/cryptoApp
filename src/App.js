import React from 'react';
import {connect} from 'react-redux'


import {setCrypt as setCryptAction} from './redux/actions/crypto'

import {Carts} from './components'
import {Header} from './components'
import {SortBlock} from './components'

import Container from '@material-ui/core/Container'
import axios from 'axios'


import './styles/app.sass'


class App extends React.Component {
  // React.useEffect(() => {
  //   axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=55&tsym=USD').then(({data}) => {
  //     const crypt = data.Data
  //     setCrypto(crypt)
  //   })
  // }, [])

  // console.log('отрисовывается')

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=55&tsym=USD').then(({data}) => {
      const cryptData = data.Data
      this.props.setCryptAction(cryptData)
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <Container>
          <Header/>
          <SortBlock/>
          <Carts value={this.props.items}/>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.crypto.items,
    filters: state.filters
  }
}

const mapDispatchToProps = {
  setCryptAction
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
