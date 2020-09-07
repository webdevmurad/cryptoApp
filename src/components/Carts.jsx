import React from 'react'
import {Card} from './index'


import {useSelector} from 'react-redux'

import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';

import '../styles/app.sass'



const useStyles = makeStyles((theme) => ({
    grid: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap"
    }
}))

function Carts() {
    const classes = useStyles();


    const {items} = useSelector(({crypto, filters}) => {
        return {
          items: crypto.items,
          bySort: filters.bySort
        }
      })
    return (
        <Grid container className={classes.grid}>
            {items.map((crypt) => <Card value={crypt} isLoaded={true} key={crypt.CoinInfo.Id}/>)}
        </Grid>
    )
}


export default Carts