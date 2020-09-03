import React, {useRef} from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem';


import '../styles/app.sass'
import { makeStyles } from '@material-ui/core'

const style = makeStyles((theme) => ({
    wrapFormSelect: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    form: {
        width: '200px'
    }
}))

function SortBlock() {
    const classes = style()
    const sortRef = useRef();
    const [sort, bySort] = React.useState('all')

    React.useEffect(() => {
        sortRef.current.click();
    }, []);

    const handleChange = (e) => {
        bySort(e.target.value)
    }

    return (
        <>
            <Grid ref={sortRef} className={classes.wrapFormSelect} container>
                <FormControl className={classes.form}> 
                    <InputLabel id="demo-simple-select-label">Сортировать по</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    onChange={handleChange}
                    >
                        <MenuItem value={"all"} name={"Все"}>Все</MenuItem>
                        <MenuItem value={"price"} name={'price'}>Цене</MenuItem>
                        <MenuItem value={"alphabet"} name={'alphabet'}>Названию</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </>
    )
}



export default SortBlock