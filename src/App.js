import React from 'react';

import axios from 'axios'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cryptoInputWrap: {

    marginTop: 20,
    marginBottom: 20
  },
  currencyInput: {
    minWidth: 'calc(70% - 10px)',
    marginRight: 10
  },
  currencyType: {
    minWidth: '20%',
  },
  table: {
    minWidth: 650
  },
  bitcoinTable: {
    height: 600
  },
  cryptoIcon: {
    width: '16px',
    height: '16px'
  }
}));

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
            price: parseInt(coin.RAW.USD.PRICE),
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
          <TableContainer className={classes.bitcoinTable} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="left">FullName</TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell align="left">volume</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCoins.map((coin) => (
                  <TableRow key={coin.name}>
                    <TableCell component="th" scope="row">
                      <img className={classes.cryptoIcon} src={coin.imageUrl} alt="cryptoImg"/>
                    </TableCell>
                    <TableCell align="left">{coin.name}</TableCell>
                    <TableCell align="left">{coin.fullName}</TableCell>
                    <TableCell align="left">$ {coin.price}</TableCell>
                    <TableCell align="left">$ {coin.volume24Hour}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <div className={classes.cryptoInputWrap}>
              <FormControl className={classes.currencyInput}>
                <TextField label="Введите число"/>
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="demo-simple-select-helper-label">Сумма</InputLabel>
                <Select value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className={classes.cryptoInputWrap}>
              <FormControl className={classes.currencyInput}>
                <TextField label="Введите число"/>
              </FormControl>
              <FormControl className={classes.currencyType}>
                <InputLabel id="demo-simple-select-helper-label">Сумма</InputLabel>
                <Select value={10}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Typography variant="h5" component="h5">
              Проверка
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}




export default App;
