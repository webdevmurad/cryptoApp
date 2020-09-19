import {observable, computed, action} from 'mobx';


const currenciesStore = observable({
    count: 0
})

export default currenciesStore