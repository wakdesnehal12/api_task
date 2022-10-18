import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Box, Container, Link, CardActions, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const baseURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business';
const API_Key = '7b3ad073ae284a49b17741bdfc0737e5'

const NewsList = () => {
  const navigate = useNavigate()
  const [newsData, setNewsData] = useState<any>([])
  const loadData = async () => {
    await fetch(`${baseURL}&apiKey=${API_Key}`)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        setNewsData(result.articles)
      })
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleClick = (item:any) => {
    console.log(item)
    navigate('/newsDetail', {state:item})
  }
  return (
    <Container className='cardMainBx'>
      <Grid container spacing={4}>
        {
          newsData.map((item: any, id: number) => {
            return (
              <Grid item lg={4} md={4} sm={6} xs={12} key={id}>
                <Card className='cardBox'>
                  <CardActionArea className='cardactionBx' onClick={() => handleClick(item)}>
                    <CardMedia
                      className='cardImg'
                      image={item.urlToImage}
                      title='img'
                    />
                    <CardContent className='cardData'>
                      {
                        item.title?.length > 0 ? (<Typography className='line-clamp'><span>Title: </span>{item.title}</Typography>) : null
                      }

                      {
                        item.publishedAt?.length > 0 ? (<Typography className='line-clamp'><span>Date: </span>{item.publishedAt}</Typography>) : null
                      }
                      {
                        item.author?.length > 0 ? (<Typography className='line-clamp'><span>Author: </span>{item.author}</Typography>) : null
                      }

                    </CardContent>
                    <CardActions>
                      <Button variant="contained" href={item.url} target="_blank">Read More</Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}

export default NewsList