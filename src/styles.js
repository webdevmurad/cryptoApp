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
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 20,
        marginBottom: 20
    },
    cryptoImg: {
        width: 100,
        height: 100
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
      
