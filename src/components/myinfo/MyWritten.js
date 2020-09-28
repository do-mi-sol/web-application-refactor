import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableFooter,
    TablePagination,
    Typography,
    Divider,
} from '@material-ui/core'

import TablePaginationActions from './TablePaginationActions'

const useStyles = makeStyles((theme) => ({
    container: {
        // width: 400,
        width: theme.spacing(60),
        minwidth: 400,
        marginRight: '2%',
    },
    table: {
        minWidth: 400,
        width: '100%',
    },
}))

function createData(key, isSuccess, title, like) {
    return {key, isSuccess, title, like}
}

const rows = [
    createData(1, '', '색고르기는 어려워~!', 100),
    createData(2, '성공', '삐삐리 빠삐코', 50),
    createData(3, '실패', '월드콘주면서 고백했더니', 80),
    createData(4, '', '빵빠레빵빵', 70),
    createData(5, '', '메가톤', 120),
    createData(6, '실패', '더위사냥', 10),
    createData(7, '성공', '스크류바', 58),
]

export default function MyWritten() {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5)

    const emptyRows =
        rowsPerPage -
        Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    const handleChangePage = (event, newPage) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }
    return (
        <TableContainer className={classes.container}>
            <Typography component="h2" variant="h6" gutterBottom>
                내가 쓴 글
            </Typography>
            <Divider style={{backgroundColor: '#ffd400'}} />
            <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
            >
                <TableBody>
                    {(rowsPerPage > 0
                        ? rows.slice(
                              page * rowsPerPage,
                              page * rowsPerPage + rowsPerPage
                          )
                        : rows
                    ).map((row) => (
                        <TableRow key={row.key}>
                            <TableCell align="left">
                                {row.isSuccess}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>

                            <TableCell align="left">
                                <FontAwesomeIcon
                                    icon={'heart'}
                                    style={{color: 'pink'}}
                                />
                                {'  '}
                                {row.like}
                            </TableCell>
                        </TableRow>
                    ))}
                    {emptyRows > 0 && (
                        <TableRow style={{height: 53 * emptyRows}}>
                            <TableCell colSpan={6} />
                        </TableRow>
                    )}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination
                            rowsPerPageOptions={[
                                5,
                                10,
                                {label: 'All', value: -1},
                            ]}
                            colSpan={3}
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            SelectProps={{
                                inputProps: {
                                    'aria-label': 'rows per page',
                                },
                                native: true,
                            }}
                            labelRowsPerPage=""
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={
                                handleChangeRowsPerPage
                            }
                            ActionsComponent={TablePaginationActions}
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )
}

// import React from 'react';
// import {makeStyles} from '@material-ui/core/styles';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableRow,
//   Typography,
//   Divider,
// } from '@material-ui/core';

// const useStyles = makeStyles ({
//   container: {
//     width: 400,
//     minwidth: 400,
//   },
//   table: {
//     minWidth: 400,
//     width: '100%',
//   },
// });

// function createData (key, isSuccess, title, like) {
//   return {key, isSuccess, title, like};
// }

// const rows = [
//   createData (1, '', '색고르기는 어려워~!', 100),
//   createData (2, '성공', '삐삐리 빠삐코', 50),
//   createData (3, '실패', '월드콘주면서 고백했더니', 80),
//   createData (4, '', '빵빠레빵빵', 70),
//   createData (5, '', '메가톤', 120),
//   createData (6, '실패', '더위사냥', 10),
//   createData (7, '성공', '스크류바', 58),
// ];

// export default function MyWritten () {
//   const classes = useStyles ();
//   return (
//     <TableContainer className={classes.container}>
//       <Typography component="h2" variant="h6" gutterBottom>
//         내가 쓴 글
//       </Typography>
//       <Divider style={{backgroundColor: '#ffd400'}} />
//       <Table className={classes.table} size="small" aria-label="a dense table">
//         <TableBody>
//           {rows.map (row => (
//             <TableRow key={row.key}>
//               <TableCell align="left">
//                 {row.isSuccess}
//               </TableCell>
//               <TableCell component="th" scope="row">
//                 {row.title}
//               </TableCell>

//               <TableCell align="left">
//                 <FontAwesomeIcon icon={'heart'} style={{color: 'pink'}} />
//                 {'  '}
//                 {row.like}
//               </TableCell>
//             </TableRow>
//           ))}
//           {emptyRows > 0 && (
//             <TableRow style={{ height: 53 * emptyRows }}>
//               <TableCell colSpan={6} />
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
