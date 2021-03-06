import React from 'react'
import PropTypes from 'prop-types';

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Paper from '@material-ui/core/Paper'


const ConverterBlock = ({classes, filterSelect, setFilterReducer}) => {
    const [filter, setFilter] = React.useState('all')
    

    const updateSelectFilter = (e) => {
        setFilter(e.target.value)
        setFilterReducer(e.target.value)
    }

    return (
        <Paper className={classes.paper}>
            <div className={classes.cryptoInputWrap}>
                <svg className={classes.cryptoImg} enableBackground="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><g><g><g><path d="m32 45c-7.168 0-13-5.832-13-13s5.832-13 13-13 13 5.832 13 13-5.832 13-13 13z" fill="#f0bc5e"/></g></g><g><path d="m13 9c.551 0 1 .449 1 1h2c0-1.654-1.346-3-3-3v-2h-2v2h-3v3c0 1.654 1.346 3 3 3h2c.551 0 1 .449 1 1v1h-3c-.551 0-1-.449-1-1h-2c0 1.654 1.346 3 3 3v2h2v-2h3v-3c0-1.654-1.346-3-3-3h-2c-.551 0-1-.449-1-1v-1z"/><path d="m12 1c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z"/><path d="m12 41c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z"/><path d="m57 28c0-.352.072-.686.184-1h-5.598l-2 2h-4.949c.154.65.26 1.317.313 2h5.465l2-2h4.77c-.113-.314-.185-.648-.185-1z"/><path d="m52.414 35-2-2h-5.465c-.052.683-.158 1.35-.313 2h4.949l2 2h5.598c-.111-.314-.183-.648-.183-1s.072-.686.184-1z"/><path d="m29 19.363c.65-.154 1.317-.26 2-.313v-5.465l-2-2v-4.77c-.314.113-.648.185-1 .185s-.686-.072-1-.184v5.598l2 2z"/><path d="m35 6.816v4.77l-2 2v5.465c.683.052 1.35.158 2 .313v-4.949l2-2v-5.599c-.314.112-.648.184-1 .184s-.686-.072-1-.184z"/><path d="m12.414 37 2-2h4.949c-.154-.65-.26-1.317-.313-2h-5.465l-2 2h-4.77c.113.314.185.648.185 1s-.072.686-.184 1z"/><path d="m11.586 29 2 2h5.465c.052-.683.158-1.35.313-2h-4.949l-2-2h-5.599c.112.314.184.648.184 1s-.072.686-.184 1z"/><path d="m35 44.637c-.65.154-1.317.26-2 .313v5.465l2 2v4.77c.314-.113.648-.185 1-.185s.686.072 1 .184v-5.598l-2-2z"/><path d="m29 49.586-2 2v5.598c.314-.112.648-.184 1-.184s.686.072 1 .184v-4.77l2-2v-5.465c-.683-.052-1.35-.158-2-.313z"/><path d="m33 25v-2h-2v2h-2v14h2v2h2v-2c2.206 0 4-1.794 4-4 0-1.193-.525-2.267-1.357-3 .832-.733 1.357-1.807 1.357-3 0-2.206-1.794-4-4-4zm0 12h-2v-4h2c1.103 0 2 .897 2 2s-.897 2-2 2zm0-6h-2v-4h2c1.103 0 2 .897 2 2s-.897 2-2 2z"/><path d="m52 23c6.065 0 11-4.935 11-11s-4.935-11-11-11-11 4.935-11 11 4.935 11 11 11zm0-20c4.962 0 9 4.038 9 9s-4.038 9-9 9-9-4.038-9-9 4.038-9 9-9z"/><path d="m52 41c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11zm0 20c-4.962 0-9-4.038-9-9s4.038-9 9-9 9 4.038 9 9-4.038 9-9 9z"/><path d="m52 19c2.206 0 4-1.794 4-4h-2c0 1.103-.897 2-2 2s-2-.897-2-2h2v-2h-2v-2h2v-2h-2c0-1.103.897-2 2-2s2 .897 2 2h2c0-2.206-1.794-4-4-4s-4 1.794-4 4h-2v2h2v2h-2v2h2c0 2.206 1.794 4 4 4z"/><path d="m56.707 46.707-1.414-1.414-3.293 3.293-3.293-3.293-1.414 1.414 3.707 3.707v.586h-2v2h2v2h-2v2h2v2h2v-2h2v-2h-2v-2h2v-2h-2v-.586z"/><path d="m8 50v1h-2v2h2v6h7v-2h-5v-4h2v-2h-2v-1c0-1.654 1.346-3 3-3h2v-2h-2c-2.757 0-5 2.243-5 5z"/></g><g><g><path d="m60 31c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m60 39c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m28 7c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m36 7c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m4 39c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m4 31c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m36 63c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g><g><g><path d="m28 63c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" fill="#f0bc5e"/></g></g></g></svg>
                <FormControl className={classes.currencyType}>
                    <InputLabel id="demo-simple-select-helper-label">Сортировка:</InputLabel>
                    <Select value={filter} onChange={updateSelectFilter}>
                        {filterSelect.map(({text, id}) => (
                            <MenuItem value={id} key={id}> {text} </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
        </Paper>
    )
}

ConverterBlock.propTypes = {
    classes: PropTypes.object,
    filterSelect: PropTypes.array,
    setFilterReducer: PropTypes.func
}

ConverterBlock.defaultProps = {
    classes: {},
    filterSelect: [],
    setFilterReducer: () => {}
}

export default ConverterBlock