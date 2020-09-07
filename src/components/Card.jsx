import React from 'react'
import Card from '@material-ui/core/Card'
import {makeStyles} from '@material-ui/core/styles';

import '../styles/app.sass'
import { CardContent } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    card: {
      width: '250px',
      height: '300px',
      marginTop: '30px',
      marginBottom: '30px'
    }
}))

function Cards() {
    const classes = useStyles();

    return (
        <Card className={classes.card} spacing={3}>
            <CardContent>
                
            </CardContent>
        </Card>
    )
}

export default Cards