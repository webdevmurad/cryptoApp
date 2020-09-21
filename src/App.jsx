import React from 'react';
import {CryptoTable, ConverterBlock} from './components'

import axios from 'axios'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles'


function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&tsym=USD')
      .then(({data}) => {
        const coins = data.Data.map((coin) => {
          const obj = {
            name: coin.CoinInfo.Name,
            fullName: coin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com${coin.CoinInfo.ImageUrl}`,
            price: coin.RAW.USD.PRICE.toFixed(2),
            volume24Hour: parseInt(coin.RAW.USD.VOLUME24HOUR)
          }
          return obj
        }) 
        setAllCoins(coins)
      })
  }, [classes])

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <CryptoTable items={allCoins} classes={classes}/>
        </Grid>
        <Grid item xs={4}>
          <ConverterBlock classes={classes}/>
        </Grid>
      </Grid>
    </Container>
  );
}




export default App;
