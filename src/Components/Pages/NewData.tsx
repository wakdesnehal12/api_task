import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Pagination, Stack, Modal } from '@mui/material';


interface IProps {
    id: number,
    created_at: number | any,
    title: string | any,
    url: string | any,
    author: string,
    // children: any
}
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
type usePro = Array<IProps>

export default function NewData() {
    const [hitsdata, setHitsData] = useState<usePro>([]);
    //for pagination
    const [pageCount, setPageCount] = useState(0)
    //for modal
    const [model, setmodel] = useState<any>([])
    const [showmod, setshowmod] = useState<any>(false)
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    //for filter
    const [filterData, setFilterData] = useState<any[]>([])
    const [searchData, setSearchData] = useState('')

    
    const loadData = async() => {
    await fetch(`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pageCount}`)
        .then (res => res.json())
        .then((result) => {
            console.log([...result.hits])
            setHitsData([...result.hits])
            setPageCount(pageCount + 1)
        })
        .catch((e) => console.error(e));
    }
        
        setInterval(() => {
            loadData()
        }, 10000)
        
        const tood = () => {
            setshowmod(handleOpen)
        }
        
        const ModelCao = () => {
            return(
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ ...style, width: 500 }}>
                <Typography id="modal-modal-title" variant="h6" component="h2">Details</Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}> Author:- {model.author} </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}> Created_At:- {model.created_at} </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}> Title:- {model.title} </Typography>
                </Box>
            </Modal>
            )
        }

        const searchItem = (value:any) => {
            setSearchData(value)
            if(searchData !== ''){
                const searchInfo = hitsdata.filter((item) => {
                    return Object.values(item).join('').toLowerCase().includes(searchData.toLowerCase())
                })
                setFilterData(searchInfo)
            }
            else{
                setFilterData(hitsdata)
            }
        }
  return (
    <div>
        <h1>API Data of Story</h1>
        <TableContainer>
            <input
                type='text'
                onChange={(e) => searchItem(e.target.value)}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Created_at</TableCell>
                        <TableCell>Titel</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>URL</TableCell>
                    </TableRow> 
                </TableHead>

                    
                <TableBody>
                    
                    {
                        searchData.length > 1 ?(
                            filterData.map((item, index) => {
                                return(
                                    <TableRow key={index}>
                                        <TableCell>{item.created_at}</TableCell>
                                        <TableCell>{item.title}</TableCell>
                                        <TableCell>{item.author}</TableCell>
                                        <TableCell>{item.url}</TableCell>
                                    </TableRow>
                                )
                            })
                        ):(
                        hitsdata.map((item, index) => {
                            return(
                                <TableRow key={index} onClick={() => {setmodel(item) 
                                    tood()}}>
                                    <TableCell>{item.created_at}</TableCell>
                                    <TableCell>{item.title}</TableCell>
                                    <TableCell>{item.author}</TableCell>
                                    <TableCell>{item.url}</TableCell>
                                </TableRow>
                            )
                        })
                        
                        )
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
                />
            </Stack>
        </TableContainer>
        {open ? <ModelCao /> : null}
    </div>
  )
}
