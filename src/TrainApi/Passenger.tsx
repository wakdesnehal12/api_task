import { Box, Table, Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Stack, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';

const baseURL = 'https://api.instantwebtools.net/v1/'
const Passenger = () => {
    const [userData, setUserData] = useState<any>([])
    const [pageCount, setPageCount] = useState<number>(1)

    const loadData = async () => {
        await fetch(`${baseURL}passenger?page=${pageCount}&size=10`)
            .then(res => res.json())
            .then((result) => {
                console.log(result.data)
                setUserData(result.data)
                // setPageCount(pageCount+1)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        loadData()
    }, [pageCount])
    return (
        <>
            <h1>Welcome to Nagpur</h1>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Trips</TableCell>
                            <TableCell>Airline Name</TableCell>
                            <TableCell>Airline Country</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            userData.map((item: any, index: number) => {
                                return (
                                    <TableRow key={index}>
                                        <TableCell>{item._id}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.trips}</TableCell>
                                        <TableCell>{item.airline[0].name}</TableCell>
                                        <TableCell>{item.airline[0].country}<img src={item.airline[0].logo} alt="logo" /></TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
                <Stack>
                    <Pagination
                        count={pageCount}
                        defaultPage={pageCount}
                        variant="outlined" 
                        color="primary"
                        showFirstButton={true}
                        showLastButton={true}
                        hideNextButton={true}
                        hidePrevButton={true}
                        onChange={() => setPageCount(pageCount + 1)}
                    />
                </Stack>
            </TableContainer>
        </>
    )
}

export default Passenger;