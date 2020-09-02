import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';

import '../styles/app.sass'

const useStyles = makeStyles((theme) => ({
    grid: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap"
    },
    card: {
      width: '250px',
      height: '300px',
      marginTop: '30px'
    }
}))

function Carts() {
    const classes = useStyles();

    return (
        <Grid container className={classes.grid}>
          <Card className={classes.card} spacing={3}/>
          <Card className={classes.card} spacing={3}/>
          <Card className={classes.card} spacing={3}/>
          <Card className={classes.card} spacing={3}/>
          <Card className={classes.card} spacing={3}/>
          <Card className={classes.card} spacing={3}/>
        </Grid>
    )
}

export default Carts