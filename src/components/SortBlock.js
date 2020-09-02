import React, {useRef} from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import '../styles/app.sass'

const styles = theme => ({
    wrapFormSelect: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    form: {
        width: '200px'
    }
})

function SortBlock(style) {
    const sortRef = useRef();
    const [sort, bySort] = React.useState('all')

    
    React.useEffect(() => {
        sortRef.current.click();
    }, []);

    const handleChange = (e) => {
        bySort(e.target.value)
        console.log(e.target.value)
    }
    // className={style.classes.wrapFormSelect} 
    return (
        <>
            <Grid ref={sortRef} className={style.classes.wrapFormSelect} container>
                <FormControl className={style.classes.form}> 
                    <InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    onChange={handleChange}
                    >
                    <MenuItem value={"all"}>Все</MenuItem>
                    <MenuItem value={"price"}>Цене</MenuItem>
                    <MenuItem value={"alphabet"}>Названию</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}


SortBlock.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SortBlock)