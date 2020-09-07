import axios from 'axios'

export const fetchCrypto = () => (dispatch) => {
    axios.get('https://min-api.cryptocompare.com/data/top/totaltoptiervolfull?limit=55&tsym=USD').then(({data}) => {
        const cryptData = data.Data
        dispatch(setCrypt(cryptData))
    })
}
export const setCrypt = (items) => ({
    type: 'SET_CRYPTO',
    payload: items
})

