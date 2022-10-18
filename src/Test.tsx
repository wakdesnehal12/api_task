import { Button, Container, Grid, TextareaAutosize, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react';

export default function Test() {
  const data: any = {
    clientId: "74c5658d9e7de18e8997535be7c85056",
    clientSecret: "ebdd6c429c0bce566a3b69d1f988ff1cf5661286b6746df7920a31b555f645a8",
    script: "<?php echo \"hello world\" ?>",
    language: "php",
    versionIndex: "0"
  }
  // Programme
  const [codeData, setCodeData] = useState<any>()
  const [inputData, setInputData] = useState<any>()

  const loadData = async () => {
    await fetch("https://api.jdoodle.com/v1/execute", {
      mode: 'no-cors',
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      // body: data
    })
      .then(res => res.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  // const loadData = () => {
  //   axios.post('https://api.jdoodle.com/v1/execute', data)
  //   .then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }
  useEffect(() => {
    loadData()
  }, [])

  const handleChange = (e: any) => {
    setCodeData(e.target.value)
  }
  const handleInputChange = (e: any) => {
    setInputData(e.target.value)
  }
  const handleSubmit = () => { }
  return (
    <>
      <h1>Online JavaScript Compiler</h1>
      <Container>
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} sm={12} xs={12} className="outputbx" >
            <Box className="outputtext">
              <Typography>Code Here</Typography>
            </Box>
            <Box className="areabox">
              <TextareaAutosize
                minRows={15}
                onChange={handleChange}
                value={codeData}
                style={{ width: 550 }}
              />
            </Box>
            <Box className="runbox">
              <Button onClick={handleSubmit}>Run</Button>
              <Box className="languageBx">
                <Typography>Language:</Typography>
                <select>
                  <option>C++</option>
                  <option>PHP</option>
                  <option>JAVA</option>
                </select>
              </Box>
            </Box>
            <Box className="userinput">
              <Typography>User Input</Typography>
              <Box className="areabox">
                <TextareaAutosize
                  minRows={5}
                  onChange={handleInputChange}
                  value={inputData}
                  style={{ width: 550 }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={12} xs={12} className="outputbx">
            <Box className="outputtext">
              <Typography>Output</Typography>
            </Box>
            <Box className="inputBox">
              <Button variant='contained'>Clear</Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
