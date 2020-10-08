import React, {Component} from 'react'
import {
    TableRow,
    TableCell,
    TableContainer,
    Table,
    TableHead,
    TableBody,
} from '@material-ui/core'

import {makeStyles} from '@material-ui/core/styles'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import Pagination from './Pagination'
import paginate from './Paginate'

export default class MainBoard extends Component {
    state = {
        currentPage: 1,
        limit: 10, // 한페이지에 보이는 data의 limit
        numOfData: 0,
        pageArr: [],
        boards: [
            {
                number: '101',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '102',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '112',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '122',
                gender: 'male',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '123',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '104',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '105',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '106',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '107',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '108',
                gender: 'female',
                id: '최지혜',
                title: '글제목1',
                time: '14:10',
                likes: 2,
                hits: 100,
                comments: 3,
            },
            {
                number: '109',
                gender: 'male',
                id: '강민정',
                title: '글제목2',
                time: '05:10',
                likes: 5,
                hits: 1000,
                comments: 30,
            },
        ],
    }

    componentDidMount() {
        this.setState({numOfData: this.state.boards.length})
    }

    handlePageChange = (page) => {
        this.setState({currentPage: page}) // 페이지 수 클릭 시 현재 페이지 변경
    }

    render() {
        const {boards, currentPage, limit, numOfData} = this.state
        const classes = makeStyles({
            table: {
                minWidth: 650,
            },
        })
        const sliceBoards = paginate(boards, currentPage, limit)

        return (
            <div>
                <TableContainer
                    style={{marginRight: 30, minWidth: 830}}
                >
                    <Table
                        className={classes.table}
                        aria-label="simple table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell align="left">
                                    글 번호
                                </TableCell>

                                <TableCell align="center">
                                    제목
                                </TableCell>
                                <TableCell align="right">
                                    글쓴이
                                </TableCell>
                                <TableCell align="right">
                                    성별
                                </TableCell>
                                <TableCell align="right">
                                    시간
                                </TableCell>
                                <TableCell align="right">
                                    조회
                                </TableCell>
                                <TableCell align="right">
                                    댓글
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sliceBoards.map((row) => (
                                <TableRow key={row.number}>
                                    <TableCell align="left">
                                        {row.number}
                                    </TableCell>

                                    <TableCell
                                        component="th"
                                        scope="row"
                                        style={{
                                            minWidth: 80,
                                            width: '50%',
                                        }}
                                    >
                                        {row.title}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.gender === 'male' ? (
                                            <FontAwesomeIcon
                                                icon={'male'}
                                                style={{
                                                    color: 'skyblue',
                                                }}
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={'female'}
                                                style={{
                                                    color: 'pink',
                                                }}
                                            />
                                        )}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.time}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.hits}
                                    </TableCell>
                                    <TableCell align="right">
                                        {row.comments}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <div className="board-pagination-container">
                    <Pagination
                        pageSize={limit}
                        itemsCount={numOfData}
                        currentPage={currentPage}
                        onPageChange={this.handlePageChange}
                    />
                </div>
            </div>
        )
    }
}
