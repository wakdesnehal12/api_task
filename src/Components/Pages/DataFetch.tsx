import { Table, TableBody, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { ReactNode, useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import { Pagination, Stack } from '@mui/material';
import {Modal} from '@material-ui/core'

// const columns = [
//     { field: 'create_id', headerName: 'ID' },
//     { field: 'title', headerName: 'Title' },
//     { field: 'url', headerName: 'URL' },
//     { field: 'author', headerName: 'Author' }
// ]
interface IProps {
    id: number,
    created_at: number | any,
    title: string | any,
    url: string | any,
    author: string,
    children: any
}

type usePro = Array<IProps>
export default function DataFetch() {
    const [hits, setHits] = useState<usePro>([]);
    const [apiId, setApiId] = useState(0);
    const [pageCount, setPageCount] = useState(1)
    // const [currentPage, setcurrentPage] = useState(0)
    // const [isLoaded, setisLoaded] = useState(true);
    const [err, setErr] = useState()

    //modal
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => {
        // setHits()
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // const getItem = () => {
    //     fetch(dataUrl)
    //     .then(res => res.json())
    //     .then((result) => {
    //         console.log(result.hits)
    //         setApiData([...result.hits])
    //     })
    //     setApiId(apiId + 1);
    // }

    useEffect(() => {
        try{
            setInterval(async () => {
                await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`)
                    .then(res => res.json())
                    .then((result) => {
                        console.log([...result.hits])
                        // const total = result.hits.get('x-total-count')
                        // setPageCount(total)
                        setHits([...result.hits])
                    }).catch((error) => { 
                        setErr(error)
                    })
                    // setApiId(apiId + 1);
            }, 2000)
        }catch(e){
            console.log(e)
        }
    }, [pageCount])

    // const handlePageChange = () => {
    //     // console.log('selected')
    // }

    
    return (
        <div>
            <h1>DATA API</h1>
            
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">Created_at</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">URL</TableCell>
                            <TableCell align="center">Author</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        
                        {
                            hits.map((item, index) => {
                                return (
                                    <>
                                    <TableRow key={index}>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell onClick={handleOpen}>{item.created_at}</TableCell>
                                        <TableCell onClick={handleOpen}>{item.title}</TableCell>
                                        <TableCell onClick={handleOpen}>{item.url}</TableCell>
                                        <TableCell onClick={handleOpen}>{item.author}</TableCell>
                                    </TableRow>
                                    </>
                                )
                            })
                        }
                        
                    </TableBody>
                    

                </Table>
                <Stack>
                    <Pagination
                        count={pageCount} 
                        variant="outlined" 
                        color="primary"
                        showFirstButton={true}
                        showLastButton={true}
                        hideNextButton={true}
                        hidePrevButton={true}
                        // onChange={handlePageChange}
                        // onChange={(event, value) => handlePageChange(value)}
                    />
                </Stack>
            </TableContainer>
            {/* <button onClick={getItem}>data{apiId}</button> */}
            
            
        </div>
        
    )
}
