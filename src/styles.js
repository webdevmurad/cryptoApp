import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(10),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    cryptoInputWrap: {
    
        marginTop: 20,
        marginBottom: 20
    },
    currencyInput: {
        minWidth: 'calc(70% - 10px)',
        marginRight: 10
    },
    currencyType: {
        minWidth: '20%',
    },
    table: {
        minWidth: 650
    },
    bitcoinTable: {
        height: 600
    },
    cryptoIcon: {
        width: '16px',
        height: '16px'
    }
}));

export default useStyles
      
