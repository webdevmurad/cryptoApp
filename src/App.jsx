import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as cryptoActions from './actions/crypto'
import * as filterActions from './actions/filter'

import orderBy from 'lodash/orderBy'

import {CryptoTable, ConverterBlock} from './components'
import {FILTERS_BTN} from './filterSelect'

import axios from 'axios';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles'

function App({crypto, isReady, setCrypto, setFilter}) {


  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD')
    .then(({data}) => {
      const coins = data.Data.map((coin) => {
          const obj = {
              name: coin.CoinInfo.Name,
              fullName: coin.CoinInfo.FullName,
              imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
              price: Number(coin.RAW.USD.PRICE.toFixed(2)),
              volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
          }
          return obj
      })
      setCrypto(coins)
    })
  }, [setCrypto])


  const classes = useStyles();
  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={1}>
        <h1></h1>
        <Grid item xs={12}>
          <ConverterBlock setFilterReducer={setFilter} classes={classes} filterSelect={FILTERS_BTN}/>
        </Grid>
        <Grid item xs={12}>
          <CryptoTable items={crypto} classes={classes}/>
        </Grid>
      </Grid>
    </Container>
  );
}

const sortBy = (crypto, filterBy) => {

  switch (filterBy) {
    case 'all' :
      return crypto
    case 'name' : 
      return orderBy(crypto, 'fullName', 'asc')
    case 'price' : 
      return orderBy(crypto , 'price', 'desc')
    default: 
      return crypto
  }
}


const mapStateToProps = ({crypto}) => ({
  crypto: sortBy(crypto.items, crypto.filterBy),
  isReady: crypto.isReady
})

const mapDispatchToProps  = dispatch => ({
  ...bindActionCreators(cryptoActions, dispatch),
  ...bindActionCreators(filterActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);