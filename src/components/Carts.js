import React from 'react'
import {Card} from './index'

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

function Carts(props) {
    const classes = useStyles();
    const cryptList = props.value.map((crypt) => 
        <Card value={crypt} key={crypt.CoinInfo.Id}/>
    )
    
    return (
        <Grid container className={classes.grid}>
            {cryptList}
        </Grid>
    )
}

export default Carts