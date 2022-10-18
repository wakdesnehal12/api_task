import { Container, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const NewsDetail = () => {
    const {state}:any = useLocation()
    console.log(state)
    
  return (
    <div>
        <h1>NewsDetail</h1>
        <Container className="NewsDetailBox">
            <Box className="DetailBox">
                {
                    state.urlToImage?.length > 0 ? (<img src={state.urlToImage} alt="img"/>) : null
                }
                <Box className="DetailDataBox">
                    {
                        state.title?.length > 0 ? (<Typography variant='h4'>{state.title}</Typography>) : null
                    }
                    {
                        state.source.id?.length > 0 ? (<Typography variant='h6'><span>Id: </span>{state.source.id}</Typography>) : null
                    }
                    <Box className="DetailContentBox">
                    {
                        state.content?.length > 0 
                            ? 
                        (
                            <>
                                <Typography variant='h6'>Content: </Typography>
                                <Typography>{state.content}</Typography>
                            </>
                        ) 
                            : 
                        null
                        
                    }
                    </Box>
                    <Box className="DetailDescBox">
                    {
                        state.description?.length > 0 
                            ? 
                        (
                            <>
                                <Typography variant='h6'>Description: </Typography>
                                <Typography>{state.description}</Typography>
                            </>
                        ) 
                            : 
                        null
                        
                    }
                    </Box>
                    <Box className="DetailDescBox">
                    {
                        state.source.name?.length > 0 
                            ? 
                        (
                            <>
                                <Typography><span>Source Name: </span>{state.source.name}</Typography>
                            </>
                        ) 
                            : 
                        null
                        
                    }
                    </Box>
                </Box>
                <Box className="authorBox">
                    {
                        state.author?.length > 0 ? (<Typography variant='h6'><span>Author: </span>{state.author}</Typography>) : null
                    }
                    {
                        state.publishedAt?.length > 0 ? (<Typography variant='h6'>{state.publishedAt}</Typography>) : null
                    }
                </Box>
            </Box>
        </Container>
    </div>
  )
}
