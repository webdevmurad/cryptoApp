import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const CryptoTable = ({items, classes}) => {

    return (
        <TableContainer className={classes.bitcoinTable} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="left">FullName</TableCell>
                    <TableCell align="left">Name</TableCell>
                    <TableCell align="left">Price</TableCell>
                    <TableCell align="left">volume</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {!items.length ? "Загрузка..." : items.map((coin) => (
                    <TableRow key={coin.name}>
                        <TableCell component="th" scope="row">
                        <img className={classes.cryptoIcon} src={coin.imageUrl} alt="cryptoImg"/>
                        </TableCell>
                        <TableCell align="left">{coin.name}</TableCell>
                        <TableCell align="left">{coin.fullName}</TableCell>
                        <TableCell align="left">$ {coin.price}</TableCell>
                        <TableCell align="left">$ {coin.volume24Hour}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default CryptoTable;