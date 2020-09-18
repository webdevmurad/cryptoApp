import React from 'react'

import TextField from '@material-ui/core/TextField'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'

const ConverterBlock = ({classes}) => {

    return (
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
        </Paper>
    )
}

export default ConverterBlock